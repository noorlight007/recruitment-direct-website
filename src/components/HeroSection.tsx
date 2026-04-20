"use client";

import { motion } from "framer-motion";
import { Phone } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-background overflow-hidden px-5 md:px-0">
      <style jsx>{`
        @media (max-width: 767px) {
          .cta-button {
            width: 100%;
            min-height: 58px;
            height: 58px;
            border-radius: 14px;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            text-align: center;
            text-decoration: none;
            font-size: 17px;
            font-weight: 700;
            line-height: 1;
            letter-spacing: -0.01em;
            box-sizing: border-box;
            transition: transform 0.18s ease, box-shadow 0.18s ease, background 0.18s ease, border-color 0.18s ease, color 0.18s ease;
            -webkit-tap-highlight-color: transparent;
          }

          .cta-button-primary, .cta-button-secondary {
            color: #ffffff;
            background: linear-gradient(135deg, #1f6bff 0%, #0047ff 100%);
            border: 1px solid transparent;
            box-shadow: 0 10px 24px rgba(0, 71, 255, 0.22);
          }

          .cta-button-outline {
            color: #1550e5;
            background: #ffffff;
            border: 2px solid #6d8ff5;
            box-shadow: none;
          }

          .cta-helper {
            margin: 8px 0 0;
            text-align: center;
            font-size: 13px;
            line-height: 1.35;
            font-weight: 500;
            color: #7b8190;
            min-height: 18px;
          }

          .cta-button:hover {
            transform: translateY(-1px);
          }

          .cta-button:active {
            transform: scale(0.985);
          }
        }
      `}</style>

      {/* Subtle background glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-[0.04]"
        style={{
          background:
            "radial-gradient(circle, hsl(217, 90%, 46%), transparent)",
        }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center flex flex-col items-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
  className="font-sans text-[40px] font-semibold tracking-[-0.3px] text-gray-900 leading-[1.2] mb-6"
          >
            UK Recruitment Agency Supplying Temporary, Contract and Permanent Staff
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="text-lg md:text-xl text-black/80 max-w-2xl mb-10"
          >
            Combining consultant expertise with AI speed to deliver results fast
            across key sectors.
          </motion.p>

          {/* MOBILE ONLY CTA - Visible only on max-width 767px */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="md:hidden flex flex-col gap-5 w-full mb-24"
          >
            <div className="flex flex-col items-stretch w-full">
              <a href="/ai-hire-now" className="cta-button cta-button-primary">
                <span>AI Hire Now</span>
              </a>
              <p className="cta-helper">Existing Client</p>
            </div>

            <div className="flex flex-col items-stretch w-full">
              <a href="/place-enquiry" className="cta-button cta-button-secondary">
                <span>Place Enquiry</span>
              </a>
              <p className="cta-helper">New Client</p>
            </div>

            <div className="flex flex-col items-stretch w-full">
              <a href="/test-ai-call" className="cta-button cta-button-outline">
                <span>Test AI Call</span>
              </a>
              <p className="cta-helper">AI Call Platform</p>
            </div>
          </motion.div>

          {/* DESKTOP ONLY CTA - Hidden on Mobile */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="hidden md:flex flex-col sm:flex-row items-center justify-center gap-8 mb-12 w-full max-w-[850px]"
          >
            {/* AI Hire Now */}
            <div className="flex flex-col items-center w-full sm:w-auto">
              <a
                href="/ai-hire-now"
                className="btn-metallic text-base px-8 py-3.5 w-full sm:min-w-[200px] text-center"
              >
                AI Hire Now
              </a>
              <span className="text-sm text-black/60 mt-2 font-medium">
                Existing Client
              </span>
            </div>

            {/* Place Enquiry */}
            <div className="flex flex-col items-center w-full sm:w-auto">
              <a
                href="/place-enquiry"
                className="btn-metallic text-base px-8 py-3.5 w-full sm:min-w-[200px] text-center"
              >
                Place Enquiry
              </a>
              <span className="text-sm text-black/60 mt-2 font-medium">
                New Client
              </span>
            </div>

            {/* Test AI Call */}
            <div className="flex flex-col items-center w-full sm:w-auto">
              <a
                href="/test-call"
                className="rounded-xl border-[1px] border-[rgba(30,64,175,0.8)] text-primary font-bold hover:bg-primary/5 transition-all text-base text-center w-full sm:min-w-[200px] px-[18px] py-3.5"
              >
                Test AI Call
              </a>
              <span className="text-sm text-black/60 mt-2 font-medium">
                AI Call Platform
              </span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="text-sm md:text-base text-[#64748b] font-medium border-t border-slate-100 pt-8 w-full"
          >
            Framework-approved supplier | Public & private sector delivery |
            Fast turnaround
          </motion.div>
        </div>
      </div>
    </section>
  );
}