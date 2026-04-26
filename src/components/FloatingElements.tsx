"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send } from "lucide-react";

export default function FloatingElements() {
  const [chatOpen, setChatOpen] = useState(false);
  const [message, setMessage] = useState("");

  return (
    <>


      {/* AI Steve Chatbot */}
      <div className="fixed bottom-24 right-6 z-50">
        <AnimatePresence>
          {chatOpen && (
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.95 }}
              className="ask-ai-steve-wrap mb-4"
            >
              <section className="ask-ai-steve-card" style={{ width: "420px" }}>
                <div className="ask-ai-steve-top">
                  <div className="ask-ai-steve-copy">
                    <div className="ask-ai-steve-kicker">
                      <svg className="ask-ai-steve-star" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                        <path d="M12 2l1.9 5.1L19 9l-5.1 1.9L12 16l-1.9-5.1L5 9l5.1-1.9L12 2Z" fill="currentColor" />
                        <path d="M18.5 3.5l.8 2.2 2.2.8-2.2.8-.8 2.2-.8-2.2-2.2-.8 2.2-.8.8-2.2Z" fill="#C15CFF" />
                      </svg>
                    </div>

                    <h2 className="ask-ai-steve-title" style={{ fontSize: "38px" }}>Ask AI Steve</h2>

                    <div className="ask-ai-steve-status">
                      <span className="ask-ai-steve-status-dot"></span>
                      <span>AI Online Now</span>
                    </div>
                  </div>

                  <div className="ask-ai-steve-avatar" style={{ width: "100px", height: "100px", flexBasis: "100px" }}>
                    <img src="/wp-content/uploads/2026/04/ai-steve-bot.png" alt="Ask AI Steve" />
                  </div>
                </div>

                <div className="ask-ai-steve-divider"></div>

                <p className="ask-ai-steve-sub" style={{ fontSize: "16px" }}>
                  Get instant answers or continue your application.
                </p>

                <div className="ask-ai-steve-actions">
                  <a href="/callpilot" className="ask-ai-btn ask-ai-btn-primary" style={{ padding: "14px 16px" }}>
                    <div className="ask-ai-btn-left">
                      <div className="ask-ai-btn-icon" style={{ width: "44px", height: "44px", flexBasis: "44px" }}>
                        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                          <path d="M7 17 3.8 20v-4.2A5.8 5.8 0 0 1 2 11.5C2 7.9 5 5 8.8 5h6.4C19 5 22 7.9 22 11.5S19 18 15.2 18H7Z" stroke="white" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" />
                          <circle cx="9" cy="11.5" r="1.1" fill="white" />
                          <circle cx="12" cy="11.5" r="1.1" fill="white" />
                          <circle cx="15" cy="11.5" r="1.1" fill="white" />
                        </svg>
                      </div>

                      <div className="ask-ai-btn-text">
                        <p className="ask-ai-btn-title" style={{ fontSize: "16px" }}>Start AI Chat</p>
                        <p className="ask-ai-btn-sub" style={{ fontSize: "13px" }}>Instant answers</p>
                      </div>
                    </div>

                    <svg className="ask-ai-btn-arrow" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                      <path d="M5 12h13M13 5l7 7-7 7" stroke="currentColor" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </a>

                  <a href="/callpilot" className="ask-ai-btn ask-ai-btn-secondary" style={{ padding: "14px 16px" }}>
                    <div className="ask-ai-btn-left">
                      <div className="ask-ai-btn-icon" style={{ width: "44px", height: "44px", flexBasis: "44px" }}>
                        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                          <path d="M21 16.9v2.3a1.8 1.8 0 0 1-2 1.8 17.8 17.8 0 0 1-7.8-2.8 17.4 17.4 0 0 1-5.4-5.4A17.8 17.8 0 0 1 3 5a1.8 1.8 0 0 1 1.8-2H7a1.8 1.8 0 0 1 1.8 1.5c.1.9.4 1.8.8 2.6a1.8 1.8 0 0 1-.4 2L8 10.3a14.5 14.5 0 0 0 5.7 5.7l1.2-1.2a1.8 1.8 0 0 1 2-.4c.8.4 1.7.7 2.6.8A1.8 1.8 0 0 1 21 16.9Z" stroke="#7B8CFF" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </div>

                      <div className="ask-ai-btn-text">
                        <p className="ask-ai-btn-title" style={{ fontSize: "16px" }}>Talk to AI</p>
                        <p className="ask-ai-btn-sub" style={{ fontSize: "13px" }}>Voice call</p>
                      </div>
                    </div>

                    <svg className="ask-ai-btn-arrow" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                      <path d="M5 12h13M13 5l7 7-7 7" stroke="currentColor" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </a>
                </div>

                <div className="ask-ai-steve-trust">
                  <svg className="ask-ai-steve-trust-icon" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path d="M12 3l7 3v5c0 4.6-2.9 8.8-7 10-4.1-1.2-7-5.4-7-10V6l7-3Z" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M9.5 12.2 11.3 14l3.7-3.8" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <span>Data is secure and confidential.</span>
                </div>
              </section>
            </motion.div>
          )}
        </AnimatePresence>

        <button
          onClick={() => setChatOpen(!chatOpen)}
          className="w-14 h-14 rounded-full bg-navy flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
          style={{ animation: "pulse-glow 3s ease-in-out infinite" }}
        >
          {chatOpen ? (
            <X className="w-6 h-6 text-navy-foreground" />
          ) : (
            <MessageCircle className="w-6 h-6 text-navy-foreground" />
          )}
        </button>
      </div>
    </>
  );
}
