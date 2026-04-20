"use client";

import { motion } from "framer-motion";
import {
  ClipboardList,
  SearchCode,
  Megaphone,
  Bot,
  ShieldCheck,
  UserCheck,
  Send,
} from "lucide-react";

const steps = [
  {
    icon: ClipboardList,
    title: "Job Requirement Received",
    desc: "We begin sourcing immediately.",
  },
  {
    icon: SearchCode,
    title: "AI Candidate Search",
    desc: "Instantly identify suitable candidates from our database.",
  },
  {
    icon: Megaphone,
    title: "Job Advert Published",
    desc: "Additional applicants sourced where required.",
  },
  {
    icon: Bot,
    title: "AI Screening",
    desc: "Applicants contacted and screened automatically.",
  },
  {
    icon: ShieldCheck,
    title: "Compliance Checks",
    desc: "Right-to-work and documents verified.",
  },
  {
    icon: UserCheck,
    title: "Consultant Verification",
    desc: "Every applicant reviewed before submission.",
  },
  {
    icon: Send,
    title: "Fast CV Submission",
    desc: "Qualified candidates delivered quickly.",
  },
];

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
};

export default function HowItWorksSection() {
  return (
    <section className="relative py-20 bg-background overflow-hidden">
      {/* ambient background */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.05]">
        <div className="absolute top-10 left-[12%] w-72 h-72 rounded-full bg-primary/20 blur-3xl" />
        <div className="absolute bottom-0 right-[10%] w-80 h-80 rounded-full bg-primary/10 blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 text-center">
        <motion.h2 {...fadeUp} className="font-sans text-[40px] font-semibold tracking-[-0.3px] text-gray-900 leading-[1.2] mb-4">
          Our Recruitment Process
        </motion.h2>

        <motion.p
          {...fadeUp}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="text-foreground/70 max-w-2xl mx-auto mb-14"
        >
          A structured recruitment process combining AI-driven screening with
          consultant control to deliver qualified temporary, contract and
          permanent staff fast.
        </motion.p>

        {/* Mobile: horizontal scroll / Large screens: max 4 per row */}
        <div className="relative">
          <div className="flex gap-5 overflow-x-auto pb-6 snap-x snap-mandatory scrollbar-thin lg:grid lg:grid-cols-4 lg:gap-6 lg:overflow-visible">
            {steps.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.45 }}
                whileHover={{ y: -6 }}
                className="group relative snap-start min-w-[240px] lg:min-w-0 card-hover p-6 text-left border border-primary/10 rounded-2xl bg-background overflow-hidden flex flex-col"
              >
                {/* top accent line */}
                <div
                  className="absolute inset-x-0 top-0 h-[2px] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"
                  style={{ background: "var(--gradient-metallic)" }}
                />

                {/* subtle hover glow */}
                <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-2xl" />

                <div className="relative flex items-center justify-between mb-4">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center text-primary-foreground text-sm font-bold shadow-md"
                    style={{ background: "var(--gradient-metallic)" }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </div>

                  <div
                    className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-all duration-300"
                    style={{
                      boxShadow: "0 6px 20px hsl(var(--primary) / 0.08)",
                      animation: "pulse-glow 4s ease-in-out infinite",
                      animationDelay: `${i * 0.4}s`,
                    }}
                  >
                    <step.icon className="w-5 h-5 text-primary" />
                  </div>
                </div>

                <div className="relative">
                  <h3 className="font-heading font-semibold text-foreground text-[15px] mb-1.5 leading-snug group-hover:text-primary transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-[13px] text-foreground/65 leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                {/* mobile connector */}
                {i < steps.length - 1 && (
                  <div
                    aria-hidden
                    className="lg:hidden absolute top-1/2 -right-3 -translate-y-1/2 w-3 h-px bg-primary/40"
                  />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}