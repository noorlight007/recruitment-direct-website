"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

export default function AIProductsSection() {
  return (
    <section id="ai-products" className="py-[100px] px-5 bg-gradient-to-b from-[#f8fafc] to-white overflow-hidden">
      <div className="max-w-[1200px] mx-auto">

        {/* HERO */}
        <motion.div
          {...fadeUp}
          className="text-center mb-[40px]"
        >
          <span className="text-[13px] text-[#2563eb] font-bold uppercase tracking-[0.05em] mb-2.5 block">
            CallPilot
          </span>
          <h2 className="text-[32px] md:text-[48px] font-bold text-[#0f172a] leading-[1.1] mb-2.5">
            AI calls your applicants 24/7. Fully automated.
          </h2>
          <p className="text-lg text-[#64748b]">
            No delays. No missed calls. No manual screening.
          </p>
        </motion.div>

        {/* VIDEO PLACEHOLDER */}
        <motion.div
          {...fadeUp}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="my-10"
        >
          <div className="h-[240px] md:h-[400px] bg-black rounded-[16px] flex items-center justify-center text-white font-semibold text-lg shadow-2xl relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-transparent pointer-events-none" />
            <div className="relative z-10 flex flex-col items-center gap-4">
              <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center backdrop-blur-sm border border-white/20">
                <svg className="w-8 h-8 text-white fill-current" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
              <span>AI screening call completed in seconds</span>
            </div>
          </div>
        </motion.div>

        {/* IMPACT */}
        <motion.div
          {...fadeUp}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-center mb-[50px]"
        >
          <h3 className="text-[28px] md:text-[32px] font-bold text-[#0f172a] mb-4">
            Every applicant contacted. Automatically.
          </h3>
          <p className="max-w-[800px] mx-auto text-base md:text-lg text-[#64748b] leading-relaxed">
            CallPilot contacts applicants instantly, asks role-specific questions,
            captures responses, and prepares them for submission — without delay.
          </p>
        </motion.div>

        {/* OPTIONS GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-[25px]">

          <motion.div
            {...fadeUp}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="p-[30px] rounded-[16px] border border-[#e2e8f0] bg-white text-center transition-all hover:-translate-y-[5px] shadow-sm flex flex-col"
          >
            <h4 className="text-xl font-bold text-[#0f172a] mb-3">AI Call + Automation</h4>
            <p className="text-[#64748b] mb-6 flex-grow">
              Automate applicant calls, screening, and follow-up instantly
            </p>
            <div className="text-[20px] font-bold text-[#2563eb] mb-6">From £1 per minute</div>
            <Link href="/contact" className="block w-full py-3 rounded-[10px] bg-[#2563eb] text-white font-semibold transition-all hover:bg-[#1d4ed8]">
              Start AI Calls
            </Link>
          </motion.div>

          <motion.div
            {...fadeUp}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="p-[30px] rounded-[16px] border-2 border-[#2563eb] bg-white text-center transition-all hover:-translate-y-[5px] shadow-lg flex flex-col relative"
          >
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#2563eb] text-white px-3 py-1 text-[12px] font-bold rounded-full uppercase tracking-wider">
              Recommended
            </div>
            <h4 className="text-xl font-bold text-[#0f172a] mt-2 mb-3">AI Call + Automation + Recruitment</h4>
            <p className="text-[#64748b] mb-6 flex-grow">
              AI automation combined with full recruitment delivery
            </p>
            <div className="text-[20px] font-bold text-[#2563eb] mb-6 tracking-tight">
              From £1 per minute + recruitment fees
            </div>
            <Link href="/contact" className="block w-full py-3 rounded-[10px] bg-[#2563eb] text-white font-semibold transition-all hover:bg-[#1d4ed8]">
              Hire Staff Faster
            </Link>
          </motion.div>

          <motion.div
            {...fadeUp}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="p-[30px] rounded-[16px] border border-[#e2e8f0] bg-white text-center transition-all hover:-translate-y-[5px] shadow-sm flex flex-col"
          >
            <h4 className="text-xl font-bold text-[#0f172a] mb-3">Test an AI Call</h4>
            <p className="text-[#64748b] mb-6 flex-grow">
              Experience the AI call process
            </p>
            <Link href="/ai-recruitment/callpilot" className="block w-full py-3 rounded-[10px] bg-[#25D366] text-white font-semibold transition-all hover:bg-[#1ebe5d]">
              Test AI Call
            </Link>
            <span className="text-[12px] text-[#64748b] mt-3 block uppercase font-bold tracking-wider">
              View all industry options
            </span>
          </motion.div>

        </div>

        {/* CTA */}
        <motion.div
          {...fadeUp}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="text-center mt-[50px] p-8 border border-[#f1f5f9] rounded-[20px] bg-[#f8fbff]/50"
        >
          <p className="text-lg text-[#64748b] mb-4">Not sure which option fits your business?</p>
          <Link href="/contact" className="inline-block px-10 py-3.5 rounded-[12px] bg-[#0f172a] text-white font-bold transition-all hover:bg-[#1e293b] hover:-translate-y-px">
            Book a Call
          </Link>
        </motion.div>

      </div>
    </section>
  );
}
