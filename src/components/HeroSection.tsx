"use client";

import { motion } from "framer-motion";
import { Phone } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-background overflow-hidden">
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

          <motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.7, delay: 0.3 }}
  className="flex flex-col sm:flex-row sm:flex-wrap items-start sm:items-center gap-6 mb-8"
>
  {/* AI Hire Now */}
  <div className="flex flex-col items-center">
    <a
      href="/ai-hire-now"
      className="btn-metallic text-base px-8 py-3.5"
    >
      AI Hire Now
    </a>
    <span className="text-sm text-black/60 mt-1">
      Existing Client
    </span>
  </div>

  {/* Place Enquiry */}
  <div className="flex flex-col items-center">
    <a
      href="/place-enquiry"
      className="btn-metallic text-base px-8 py-3.5"
    >
      Place Enquiry
    </a>
    <span className="text-sm text-black/60 mt-1">
      New Client
    </span>
  </div>

  {/* Test AI Call */}
  <div className="flex flex-col items-center">
    <a
      href="/test-call"
      className="rounded-xl border-[1px] border-[rgba(30,64,175,0.8)] text-primary font-bold hover:bg-primary/5 transition-all text-base text-center min-w-[180px] px-[18px] py-3.5"
    >
      Test AI Call
    </a>
    <span className="text-sm text-black/60 mt-1">
      AI Call Platform
    </span>
  </div>
</motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="text-sm md:text-base text-black/70 font-medium"
          >
            Framework-approved supplier | Public & private sector delivery |
            Fast turnaround
          </motion.div>
        </div>
      </div>
    </section>
  );
}