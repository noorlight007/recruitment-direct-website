"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Zap,
  Bot,
  Layers,
  MapPin,
  ShieldCheck,
  Repeat,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingElements from "@/components/FloatingElements";

const reasons = [
  {
    icon: Zap,
    title: "Fast Response and Candidate Delivery",
    description:
      "We respond immediately to staffing requirements, sourcing and submitting suitable candidates quickly to minimise disruption and keep operations running.",
  },
  {
    icon: Bot,
    title: "AI-Powered Screening and Automation",
    description:
      "We use AI-driven call technology and automation to contact applicants quickly, gather key information and streamline the recruitment process. This reduces admin time and speeds up candidate delivery.",
    highlight: true,
  },
  {
    icon: Layers,
    title: "Multi-Sector Recruitment Capability",
    description:
      "We support organisations across construction, engineering, IT, healthcare, education and facilities management, providing access to a broad and adaptable workforce.",
  },
  {
    icon: MapPin,
    title: "Scotland and UK Coverage",
    description:
      "We operate across Scotland and the wider UK, with strong coverage across the Central Belt including Glasgow and Edinburgh, while supporting regional and national requirements.",
  },
  {
    icon: ShieldCheck,
    title: "Reliable and Pre-Qualified Candidates",
    description:
      "We focus on supplying candidates who are experienced, dependable and aligned to role requirements, improving performance and reducing hiring risk.",
  },
  {
    icon: Repeat,
    title: "Temporary, Contract and Permanent Solutions",
    description:
      "We provide temporary staffing, contract recruitment and permanent recruitment services, allowing organisations to scale their workforce based on operational needs.",
  },
];

const stats = [
  { value: "24/7", label: "AI-Powered Response" },
  { value: "6+", label: "Sectors Covered" },
  { value: "UK", label: "Wide Coverage" },
  { value: "100%", label: "Pre-Qualified" },
];

export default function WhyChooseUsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <header className="pt-32 pb-20 relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-primary/10">
        <div className="absolute inset-0 opacity-30 pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 rounded-full bg-primary/20 blur-3xl" />
          <div className="absolute bottom-0 right-10 w-96 h-96 rounded-full bg-primary/10 blur-3xl" />
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 }}
            className="font-sans text-[40px] font-semibold tracking-[-0.3px] text-gray-900 leading-[1.2] mb-6"
          >
            Why Choose Our Recruitment Services
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl text-foreground/70 max-w-3xl mx-auto"
          >
            Faster hiring with AI. Verified by recruitment experts. Trusted
            across Scotland and the UK.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="mt-8 flex flex-wrap items-center justify-center gap-3"
          >
            <a href="/#contact" className="btn-metallic">
              Request Staff
            </a>
            <Link href="/ai-hire-now" className="btn-metallic">
              Try AI Hire Now
            </Link>
          </motion.div>
        </div>
      </header>

      {/* Stats strip */}
      <section className="pb-5 pt-10 border-y border-primary/10 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="text-center"
            >
              <div className="text-3xl md:text-4xl font-heading font-bold text-primary glow-text">
                {s.value}
              </div>
              <div className="text-sm text-foreground/60 mt-1">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Reasons grid */}
      <main className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-sans text-[30px] font-semibold tracking-[-0.3px] text-gray-900 leading-[1.2] mb-6">
              Built for speed, scale & reliability
            </h2>
            <p className="text-foreground/70 max-w-2xl mx-auto">
              Six reasons clients choose Recruitment Direct over traditional
              agencies.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {reasons.map((reason, i) => {
              const Icon = reason.icon;

              return (
                <motion.div
                  key={reason.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.07 }}
                  whileHover={{ y: -6 }}
                  className={`relative group p-7 rounded-2xl border transition-all duration-300 ${
                    reason.highlight
                      ? "border-primary/40 bg-gradient-to-br from-primary/10 to-primary/5"
                      : "border-primary/10 bg-background"
                  }`}
                  style={{
                    boxShadow: reason.highlight
                      ? "0 10px 40px hsla(217, 90%, 46%, 0.18)"
                      : "0 2px 12px hsla(217, 90%, 46%, 0.06)",
                  }}
                >
                  {reason.highlight && (
                    <div className="absolute -top-3 left-7 px-3 py-1 rounded-full bg-primary text-primary-foreground text-xs font-base flex items-center gap-1">
                      <Sparkles className="w-3 h-3" /> AI Edge
                    </div>
                  )}

                  <div
                    className="w-14 h-14 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform"
                    style={{
                      background: "var(--gradient-metallic)",
                      boxShadow: "var(--glow-blue)",
                    }}
                  >
                    <Icon className="w-7 h-7 text-primary-foreground" />
                  </div>

                  <h3 className="font-sans text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {reason.title}
                  </h3>

                  <p className="text-sm text-foreground/70 leading-relaxed">
                    {reason.description}
                  </p>

                  
                </motion.div>
              );
            })}
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-20 p-10 md:p-14 rounded-3xl text-center relative overflow-hidden"
            style={{
              background:
                "linear-gradient(135deg, hsl(var(--primary) / 0.12), hsl(var(--primary) / 0.2))",
              border: "1px solid hsl(var(--primary) / 0.25)",
            }}
          >
            <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-primary/20 blur-3xl pointer-events-none" />
            <div className="relative">
              <h2 className="font-sans text-[40px] font-semibold tracking-[-0.3px] text-gray-900 leading-[1.2] mb-6">
                Ready to hire smarter, faster?
              </h2>
              <p className="text-foreground/70 mb-7 max-w-2xl mx-auto">
                Speak to our team about your staffing requirements — temporary,
                contract or permanent — across Scotland and the UK.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-3">
                <a href="/#contact" className="btn-metallic">
                  Request Staff
                </a>
                <a href="/#contact" className="btn-metallic">
                  Book a Call
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
      <FloatingElements />
    </div>
  );
}