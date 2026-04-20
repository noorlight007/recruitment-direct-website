"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

export default function CallPilotPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f8fafc] to-white">
      <Navbar />

      <main className="pt-[140px] pb-20">
        <div className="max-w-[1200px] mx-auto px-5">

          {/* HERO */}
          <motion.div
            {...fadeUp}
            className="text-center mb-[60px]"
          >
            <h1 className="text-[32px] md:text-[56px] font-extrabold text-[#0f172a] leading-[1.1] mb-[15px]">
              AI calls your applicants 24/7. Fully automated.
            </h1>
            <p className="text-xl text-[#64748b]">
              No delays. No missed calls. No manual screening.
            </p>
          </motion.div>

          {/* VIDEO */}
          <motion.div
            {...fadeUp}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="my-[50px] mx-auto max-w-[1000px]"
          >
            <div className="h-[320px] md:h-[500px] bg-black rounded-[20px] flex items-center justify-center text-white text-xl shadow-2xl relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/30 to-transparent pointer-events-none" />
              <div className="relative z-10 flex flex-col items-center gap-6">
                <div className="w-20 h-20 rounded-full bg-white/10 flex items-center justify-center backdrop-blur-md border border-white/20 transition-transform group-hover:scale-110">
                  <svg className="w-10 h-10 text-white fill-current" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
                <span className="font-semibold tracking-wide">Replace with REAL AI CALL VIDEO</span>
              </div>
            </div>
          </motion.div>

          {/* IMPACT */}
          <motion.div
            {...fadeUp}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-center mb-[60px]"
          >
            <h2 className="text-[28px] md:text-[32px] font-bold text-[#0f172a] mb-2.5">
              Every applicant contacted. Automatically.
            </h2>
            <p className="max-w-[700px] mx-auto text-[#64748b] leading-relaxed text-lg">
              CallPilot contacts applicants instantly, asks role-specific questions,
              captures responses, and prepares them for submission — without delay.
            </p>
          </motion.div>

          {/* FEATURES STRIP */}
          <motion.div
            {...fadeUp}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[15px] my-10"
          >
            {[
              "AI calls applicants 24/7", "Reads your job advert", "Role-specific questions",
              "Captures responses instantly", "SMS & WhatsApp automation", "CRM sync"
            ].map((feature) => (
              <div key={feature} className="p-[15px] rounded-[12px] border border-[#e2e8f0] bg-white text-center font-bold text-[#0f172a] shadow-sm hover:shadow-md transition-shadow">
                {feature}
              </div>
            ))}
          </motion.div>

          {/* STEPS */}
          <motion.div
            {...fadeUp}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="my-[60px] text-center font-bold text-[#0f172a] text-sm md:text-base tracking-wide uppercase px-4 py-3 bg-[#eef4ff] rounded-[12px] border border-[#dbe7ff]"
          >
            Apply <span className="text-[#2563eb] mx-2">→</span> AI Call <span className="text-[#2563eb] mx-2">→</span> Questions <span className="text-[#2563eb] mx-2">→</span> Responses <span className="text-[#2563eb] mx-2">→</span> Documents <span className="text-[#2563eb] mx-2">→</span> CRM <span className="text-[#2563eb] mx-2">→</span> Review <span className="text-[#2563eb] mx-2">→</span> Submit
          </motion.div>

          {/* OPTIONS */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[25px] my-[60px] max-w-[800px] mx-auto">
            <motion.div
              {...fadeUp}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="bg-white p-[30px] rounded-[20px] border border-[#e2e8f0] text-center transition-all hover:-translate-y-2 hover:shadow-xl shadow-sm flex flex-col"
            >
              <h3 className="text-[22px] font-bold text-[#0f172a] mb-2.5">AI Call + Automation</h3>
              <p className="text-[#64748b] mb-4 flex-grow">Automate applicant calls, screening, and follow-up</p>
              <div className="font-bold text-[#2563eb] text-xl mb-6">From £1 per minute</div>
              <Link href="/contact" className="block w-full p-[14px] rounded-[12px] bg-[#2563eb] text-white font-bold transition-all hover:bg-[#1d4ed8]">
                Start AI Calls
              </Link>
            </motion.div>

            <motion.div
              {...fadeUp}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="bg-white p-[30px] rounded-[20px] border-2 border-[#2563eb] text-center transition-all hover:-translate-y-2 hover:shadow-xl shadow-lg flex flex-col relative"
            >
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#2563eb] text-white px-3 py-1 text-[12px] font-bold rounded-full uppercase tracking-wider">
                Recommended
              </div>
              <h3 className="text-[22px] font-bold text-[#0f172a] mt-2 mb-2.5">AI Call + Automation + Recruitment</h3>
              <p className="text-[#64748b] mb-4 flex-grow">AI automation with full recruitment delivery</p>
              <div className="font-bold text-[#2563eb] text-xl mb-6 tracking-tight">From £1 per minute + recruitment fees</div>
              <Link href="/contact" className="block w-full p-[14px] rounded-[12px] bg-[#2563eb] text-white font-bold transition-all hover:bg-[#1d4ed8]">
                Hire Staff Faster
              </Link>
            </motion.div>
          </div>

          {/* NEW DISCOVER AI CALL AUTOMATION SECTION */}
          <motion.div
            {...fadeUp}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="text-center mt-[60px] p-10 border border-[#e2e8f0] rounded-[24px] bg-white shadow-sm"
          >
            <h2 className="text-[32px] md:text-[36px] font-bold text-[#0f172a] mb-4">
              Discover AI Call Automation
            </h2>
            <p className="max-w-[750px] mx-auto text-lg text-[#64748b] mb-8 leading-relaxed">
              See how CallPilot handles real conversations with applicants, captures responses,
              and prepares data instantly for your team.
            </p>

            <div className="inline-block">
              <Link
                href="https://callpilot.pro/"
                className="inline-block px-10 py-4 rounded-[12px] bg-[#25D366] text-white font-bold text-lg transition-all hover:bg-[#1ebe5d] hover:-translate-y-0.5 shadow-lg shadow-green-500/20"
              >
                Test AI Call
              </Link>
              <p className="text-[14px] text-[#64748b] mt-4 font-medium">
                No signup required • Takes 30 seconds • Real AI voice
              </p>
            </div>
          </motion.div>

          {/* RESULTS */}
          <motion.div
            {...fadeUp}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="flex flex-wrap justify-center gap-[15px] my-[50px]"
          >
            {[
              "Faster submissions", "Higher quality applicants", "Reduced admin", "No missed opportunities"
            ].map((res) => (
              <div key={res} className="p-[12px_18px] rounded-[10px] bg-white border border-[#e2e8f0] font-semibold text-[#0f172a] shadow-sm">
                {res}
              </div>
            ))}
          </motion.div>

          {/* CTA */}
          <motion.div
            {...fadeUp}
            transition={{ delay: 0.9, duration: 0.6 }}
            className="text-center mt-[60px]"
          >
            <h2 className="text-[32px] font-bold text-[#0f172a] mb-6">Start using AI call automation today</h2>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/contact" className="block sm:inline-block px-10 py-4 rounded-[12px] bg-[#2563eb] text-white font-bold transition-all hover:bg-[#1d4ed8] hover:scale-[1.02]">
                AI Hire Now
              </Link>
              <Link href="/contact" className="block sm:inline-block px-10 py-4 rounded-[12px] bg-[#0f172a] text-white font-bold transition-all hover:bg-[#1e293b] hover:scale-[1.02]">
                Book a Call
              </Link>
            </div>
          </motion.div>

        </div>
      </main>

      <Footer />
    </div>
  );
}