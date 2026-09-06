"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send } from "lucide-react";

interface ChatMessage {
  role: "user" | "assistant";
  content: string;
}

const formatMessageContent = (content: string): string => {
  if (!content) return content;
  
  let formatted = content.trim();
  
  // Convert Markdown links (e.g., "[Job Search](https://new.rd1.co.uk/job-search)") to plain URLs
  formatted = formatted.replace(/\[([^\]]+)\]\(([^)]+)\)/g, (match, text, url) => {
    return url;
  });

  // Format numbered bullet points (e.g., " 1. ", " 2) ") to start on a new line
  formatted = formatted.replace(/(?:\r?\n|\s)+(\d+)(\.|\))\s/g, (match, num, sep) => {
    return `\n${num}${sep} `;
  });

  // Format standard bullet points (e.g., " * ", " - ") to start on a new line
  formatted = formatted.replace(/(?:\r?\n|\s)+([*\-])\s/g, (match, bullet) => {
    return `\n${bullet} `;
  });

  return formatted;
};

const renderMessageContent = (content: string) => {
  if (!content) return "";
  
  const formatted = formatMessageContent(content);
  
  // Split the message by URLs
  const urlRegex = /(https?:\/\/[^\s]+)/g;
  const parts = formatted.split(urlRegex);
  
  return parts.map((part, index) => {
    if (part.startsWith("http://") || part.startsWith("https://")) {
      return (
        <a
          key={index}
          href={part}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:text-blue-800 underline break-all font-semibold"
        >
          {part}
        </a>
      );
    }
    return part;
  });
};

export default function FloatingElements() {
  const [isReady, setIsReady] = useState(false);
  const [chatOpen, setChatOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Defer initialization until after critical render path
  useEffect(() => {
    const handleOpenChat = () => {
      setIsReady(true);
      setChatOpen(true);
    };

    window.addEventListener('open-ai-steve', handleOpenChat);

    let idleCallbackId: any;
    let timerId: any;

    if (typeof window !== "undefined") {
      if ("requestIdleCallback" in window) {
        idleCallbackId = (window as any).requestIdleCallback(
          () => setIsReady(true),
          { timeout: 2500 }
        );
      } else {
        timerId = setTimeout(() => setIsReady(true), 2000);
      }
    }

    return () => {
      window.removeEventListener('open-ai-steve', handleOpenChat);
      if (idleCallbackId && "cancelIdleCallback" in window) {
        (window as any).cancelIdleCallback(idleCallbackId);
      }
      if (timerId) clearTimeout(timerId);
    };
  }, []);

  // Initialize messages state from localStorage only when ready
  useEffect(() => {
    if (!isReady) return;

    const sessionStartStr = localStorage.getItem("rduk_chat_session_start");
    const cachedMessagesStr = localStorage.getItem("rduk_chat_messages");
    const now = new Date().getTime();
    const ONE_HOUR = 60 * 60 * 1000;

    let loadedMessages: ChatMessage[] = [
      { role: "assistant", content: "Hi, I’m AI Steve. Are you looking to hire staff or search for a job?" }
    ];

    if (sessionStartStr && cachedMessagesStr) {
      const sessionStart = parseInt(sessionStartStr, 10);
      if (now - sessionStart < ONE_HOUR) {
        try {
          const parsed = JSON.parse(cachedMessagesStr);
          if (Array.isArray(parsed) && parsed.length > 0) {
            loadedMessages = parsed;
          }
        } catch (e) {
          console.error("Failed to parse cached chat messages", e);
        }
      } else {
        localStorage.removeItem("rduk_chat_messages");
        localStorage.removeItem("rduk_chat_session_start");
      }
    }

    setMessages(loadedMessages);
  }, [isReady]);

  // Check expiration when chat is opened
  useEffect(() => {
    if (chatOpen && isReady) {
      const sessionStartStr = localStorage.getItem("rduk_chat_session_start");
      const cachedMessagesStr = localStorage.getItem("rduk_chat_messages");
      const now = new Date().getTime();
      const ONE_HOUR = 60 * 60 * 1000;

      if (sessionStartStr && cachedMessagesStr) {
        const sessionStart = parseInt(sessionStartStr, 10);
        if (now - sessionStart >= ONE_HOUR) {
          // Expired, clear storage and reset to default message
          localStorage.removeItem("rduk_chat_messages");
          localStorage.removeItem("rduk_chat_session_start");
          setMessages([
            { role: "assistant", content: "Hi, I’m AI Steve. Are you looking to hire staff or search for a job?" }
          ]);
        } else {
          try {
            const parsed = JSON.parse(cachedMessagesStr);
            if (Array.isArray(parsed) && parsed.length > 0) {
              setMessages(parsed);
            }
          } catch (e) {
            console.error("Failed to parse cached chat messages", e);
          }
        }
      }
    }
  }, [chatOpen, isReady]);

  // Scroll to bottom on new messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  const handleSendMessage = async (customMessage?: string) => {
    const trimmedMessage = (typeof customMessage === "string" ? customMessage : message).trim();
    if (!trimmedMessage || isTyping) return;

    const userMsg: ChatMessage = { role: "user", content: trimmedMessage };
    const updatedMessages = [...messages, userMsg];
    
    setMessages(updatedMessages);
    setMessage("");

    // Start session timer if not set
    const now = new Date().getTime();
    if (!localStorage.getItem("rduk_chat_session_start")) {
      localStorage.setItem("rduk_chat_session_start", now.toString());
    }
    localStorage.setItem("rduk_chat_messages", JSON.stringify(updatedMessages));

    setIsTyping(true);

    try {
      const response = await fetch("https://api.callpilot.pro/api/v1/core/ask-steve/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify({ messages: updatedMessages }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      const assistantMsg: ChatMessage = {
        role: "assistant",
        content: data.reply || "I'm sorry, I couldn't process that. How else can I help you?",
      };

      const finalMessages = [...updatedMessages, assistantMsg];
      setMessages(finalMessages);
      localStorage.setItem("rduk_chat_messages", JSON.stringify(finalMessages));
    } catch (err) {
      console.error("Chat API error:", err);
      const errorMsg: ChatMessage = {
        role: "assistant",
        content: "Sorry, I am having trouble responding right now. Please check your connection and try again.",
      };
      const finalMessages = [...updatedMessages, errorMsg];
      setMessages(finalMessages);
      localStorage.setItem("rduk_chat_messages", JSON.stringify(finalMessages));
    } finally {
      setIsTyping(false);
    }
  };

  if (!isReady) return null;

  return (
    <>
      {/* AI Steve Chatbot */}
      <div className="fixed bottom-24 right-6 z-50">
        <AnimatePresence>
          {chatOpen && (
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.9 }}
              className="mb-4 w-80 bg-background rounded-2xl overflow-hidden border border-primary/20 flex flex-col"
              style={{ boxShadow: "0 20px 60px hsla(217, 90%, 46%, 0.2)" }}
            >
              <div className="bg-navy p-4 flex items-center justify-between">
                <div>
                  <h4 className="font-heading font-semibold text-navy-foreground text-sm">AI Steve</h4>
                  <p className="text-navy-foreground/60 text-xs">Recruitment Specialist</p>
                </div>
                <button onClick={() => setChatOpen(false)} className="text-navy-foreground/60 hover:text-navy-foreground">
                  <X className="w-5 h-5" />
                </button>
              </div>
              
              <div className="p-4 h-64 overflow-y-auto flex flex-col gap-3">
                {messages.map((msg, index) => (
                  <div key={index} className="flex flex-col gap-1 w-full">
                    <div
                      className={`p-3 rounded-xl text-sm whitespace-pre-line ${
                        msg.role === "assistant"
                          ? "bg-primary/10 text-foreground self-start max-w-[85%]"
                          : "bg-navy text-white self-end max-w-[85%] ml-auto"
                      }`}
                      style={{ whiteSpace: "pre-line" }}
                    >
                      {msg.role === "assistant" ? renderMessageContent(msg.content) : msg.content}
                    </div>
                    {/* Show suggested buttons right under the first message if it's the initial assistant message */}
                    {index === 0 && msg.role === "assistant" && (
                      <div className="mt-2 pl-2 flex flex-col gap-1.5 items-start">
                        <span className="text-[11px] font-bold text-[#536078]/80 mb-1 uppercase tracking-wider">Suggested Buttons:</span>
                        <div className="flex flex-col gap-1.5 w-full">
                          <button
                            onClick={() => handleSendMessage("I Need Staff")}
                            className="text-left text-xs bg-white border border-primary/20 hover:border-primary hover:bg-primary/5 text-primary py-1.5 px-3 rounded-lg transition-all shadow-sm cursor-pointer w-[90%]"
                          >
                            I Need Staff
                          </button>
                          <button
                            onClick={() => handleSendMessage("Search Jobs")}
                            className="text-left text-xs bg-white border border-primary/20 hover:border-primary hover:bg-primary/5 text-primary py-1.5 px-3 rounded-lg transition-all shadow-sm cursor-pointer w-[90%]"
                          >
                            Search Jobs
                          </button>
                          <button
                            onClick={() => handleSendMessage("Learn About AI Recruitment")}
                            className="text-left text-xs bg-white border border-primary/20 hover:border-primary hover:bg-primary/5 text-primary py-1.5 px-3 rounded-lg transition-all shadow-sm cursor-pointer w-[90%]"
                          >
                            Learn About AI Recruitment
                          </button>
                          <button
                            onClick={() => handleSendMessage("Speak to Team")}
                            className="text-left text-xs bg-white border border-primary/20 hover:border-primary hover:bg-primary/5 text-primary py-1.5 px-3 rounded-lg transition-all shadow-sm cursor-pointer w-[90%]"
                          >
                            Speak to Team
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
                
                {isTyping && (
                  <div className="bg-primary/10 text-foreground self-start p-3 rounded-xl text-sm max-w-[85%] flex gap-1 items-center">
                    <span className="w-1.5 h-1.5 bg-foreground/60 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></span>
                    <span className="w-1.5 h-1.5 bg-foreground/60 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></span>
                    <span className="w-1.5 h-1.5 bg-foreground/60 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></span>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>

              <div className="p-3 border-t border-primary/10 flex gap-2">
                <input
                  type="text"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      e.preventDefault();
                      handleSendMessage();
                    }
                  }}
                  placeholder="Type your enquiry..."
                  className="flex-1 px-3 py-2 text-sm rounded-lg border-2 border-primary/20 focus:border-primary focus:outline-none bg-background text-foreground"
                />
                <button
                  onClick={() => handleSendMessage()}
                  disabled={isTyping}
                  className="btn-metallic p-2 rounded-lg btn-icon"
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <button
          onClick={() => setChatOpen(!chatOpen)}
          className="w-6 h-6 rounded-full bg-navy flex items-center justify-center shadow-lg hover:scale-110 transition-transform rd-floating-trigger"
          style={{ animation: "pulse-glow 3s ease-in-out infinite" }}
        >
          {chatOpen ? (
            <X className="w-5 h-5 text-navy-foreground" />
          ) : (
            <MessageCircle className="w-5 h-5 text-navy-foreground" />
          )}
        </button>
      </div>
    </>
  );
}
