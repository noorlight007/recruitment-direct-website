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
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.9 }}
              className="mb-4 w-80 bg-background rounded-2xl overflow-hidden border border-primary/20"
              style={{ boxShadow: "0 20px 60px hsla(217, 90%, 46%, 0.2)" }}
            >
              <div className="bg-navy p-4 flex items-center justify-between">
                <div>
                  <h4 className="font-heading font-semibold text-navy-foreground text-sm">AI Steve</h4>
                  <p className="text-navy-foreground/60 text-xs">Job Enquiry Assistant</p>
                </div>
                <button onClick={() => setChatOpen(false)} className="text-navy-foreground/60 hover:text-navy-foreground">
                  <X className="w-5 h-5" />
                </button>
              </div>
              <div className="p-4 h-48 overflow-y-auto">
                <div className="bg-primary/10 rounded-xl p-3 text-sm text-foreground">
                  Hi! I'm Steve, your AI recruitment assistant. How can I help you today? Looking for staff or a new role?
                </div>
              </div>
              <div className="p-3 border-t border-primary/10 flex gap-2">
                <input
                  type="text"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Type your enquiry..."
                  className="flex-1 px-3 py-2 text-sm rounded-lg border-2 border-primary/20 focus:border-primary focus:outline-none bg-background text-foreground"
                />
                <button className="btn-metallic p-2 rounded-lg btn-icon">
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <button
          onClick={() => setChatOpen(!chatOpen)}
          className="w-14 h-14 rounded-full bg-navy flex items-center justify-center shadow-lg hover:scale-110 transition-transform rd-floating-trigger"
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
