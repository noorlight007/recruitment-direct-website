"use client";

import { motion } from "framer-motion";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

const steps = [
  {
    number: "01",
    title: "Job Received",
    desc: "We begin sourcing immediately.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none">
        <path d="M8 3H16M8 21H16M9 3V6M15 3V6M6 7H18C19.1046 7 20 7.89543 20 9V17C20 18.1046 19.1046 19 18 19H6C4.89543 19 4 18.1046 4 17V9C4 7.89543 4.89543 7 6 7Z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    )
  },
  {
    number: "02",
    title: "AI Search",
    desc: "Suitable applicants identified from database and network.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none">
        <circle cx="11" cy="11" r="6" />
        <path d="M20 20L16.65 16.65" strokeLinecap="round" />
        <path d="M11 8V14M8 11H14" strokeLinecap="round" />
      </svg>
    )
  },
  {
    number: "03",
    title: "Job Advert",
    desc: "Applications generated across job boards.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none">
        <path d="M4 12L20 4L16 20L11 13L4 12Z" strokeLinejoin="round" />
      </svg>
    )
  },
  {
    number: "04",
    title: "AI Screening",
    desc: "Applicants contacted instantly and screened automatically.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none">
        <path d="M7 4H17M7 20H17M8 4V7M16 4V7M6 8H18C19.1046 8 20 8.89543 20 10V16C20 17.1046 19.1046 18 18 18H6C4.89543 18 4 17.1046 4 16V10C4 8.89543 4.89543 8 6 8Z" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M9 12H15M9 15H13" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    )
  },
  {
    number: "05",
    title: "Traffic Light",
    desc: "Applicants scored based on role-specific responses.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none">
        <path d="M7 12L10 15L17 8" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z" />
      </svg>
    )
  },
  {
    number: "06",
    title: "WhatsApp/SMS",
    desc: "Qualified applicants receive a secure link to upload documents.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none">
        <path d="M3 7L12 13L21 7" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M5 5H19C20.1046 5 21 5.89543 21 7V17C21 18.1046 20.1046 19 19 19H5C3.89543 19 3 18.1046 3 17V7C3 5.89543 3.89543 5 5 5Z" strokeLinejoin="round" />
      </svg>
    )
  },
  {
    number: "07",
    title: "CRM Sync",
    desc: "All responses and documents automatically stored and reviewed.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none">
        <path d="M8 7H16M8 12H16M8 17H13" strokeLinecap="round" />
        <path d="M6 3H14L18 7V19C18 20.1046 17.1046 21 16 21H6C4.89543 21 4 20.1046 4 19V5C4 3.89543 4.89543 3 6 3Z" strokeLinejoin="round" />
      </svg>
    )
  },
  {
    number: "08",
    title: "Fast Submission",
    desc: "Verified applicants submitted quickly to clients.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none">
        <path d="M4 12L20 4L16 20L11 13L4 12Z" strokeLinejoin="round" />
      </svg>
    )
  },
];

export default function HowItWorksSection() {
  return (
    <section className="section-tight px-5 bg-white overflow-hidden">
      <div className="max-w-[1240px] mx-auto">

        {/* HEADER */}
        <motion.div
          {...fadeUp}
          className="max-w-[900px] mx-auto mb-[50px] text-center"
        >
          <span className="inline-block mb-4 px-[18px] py-2 border border-[#dbe7ff] rounded-full bg-[#eef4ff] text-[#1e40af] text-sm font-semibold tracking-wide leading-none">
            Our Recruitment Process
          </span>
          <h2 className="m-0 mb-4 text-[30px] md:text-[48px] leading-[1.05] font-bold tracking-[-1px] text-[#0f172a]">
            Our Recruitment Process
          </h2>
          <p className="max-w-[820px] mx-auto text-lg md:text-[20px] leading-[1.75] text-[#475569]">
            A structured recruitment process combining AI-driven screening with consultant control
            to deliver qualified temporary, contract and permanent staff fast.
          </p>
        </motion.div>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <motion.div
              key={step.number + step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.5 }}
              whileHover={{ y: -2 }}
              className="relative h-full flex flex-col p-[30px_24px_26px] border border-[#e5e7eb] rounded-[24px] bg-white shadow-[0_10px_30px_rgba(15,23,42,0.05)] transition-all hover:shadow-[0_16px_38px_rgba(15,23,42,0.08)]"
            >
              <div className="inline-flex items-center justify-center w-[48px] h-[48px] mb-5 rounded-full bg-[var(--ai-blue)] text-white text-[17px] font-bold leading-none">
                {step.number}
              </div>

              <div className="card-icon mb-5">
                {step.icon}
              </div>

              <h3 className="m-0 mb-3 text-[19px] md:text-[22px] leading-[1.3] font-bold text-[#0f172a] line-clamp-2">
                {step.title}
              </h3>

              <p className="m-0 text-sm md:text-[15px] leading-[1.6] text-[#475569]">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}