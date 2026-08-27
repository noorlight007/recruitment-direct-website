"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingElements from "@/components/FloatingElements";
import FindStaffButton from "@/components/FindStaffButton";
import {
  Clock,
  ShieldAlert,
  Users2,
  CheckCircle,
  FileCheck,
  CreditCard,
  PhoneCall,
  Sparkles,
} from "lucide-react";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
};

const serviceCards = [
  {
    title: "Temporary Staffing",
    description: "Get quick access to vetted, flexible workers for short-term projects, seasonal workload spikes, or cover.",
    link: "/temporary-staff",
    icon: Clock,
  },
  {
    title: "Contract Recruitment",
    description: "Secure specialized technical contract staff and consultants for specific projects or fixed-term durations.",
    link: "/contract-staff",
    icon: ShieldAlert,
  },
  {
    title: "Permanent Placement",
    description: "Identify and recruit qualified long-term professionals who match your company culture and business objectives.",
    link: "/permanent-staff",
    icon: Users2,
  },
  {
    title: "Open Credit Account",
    description: "Establish a credit account with Recruitment Direct UK to streamline billing, purchase orders, and invoicing.",
    link: "/open-credit-account",
    icon: CreditCard,
  },
];

const highlights = [
  "Comprehensive compliance screening and Right to Work checks.",
  "Experienced recruitment consultants with deep sector specialization.",
  "Rapid turnaround and nationwide sourcing capability.",
  "Transparent pricing structures and framework alignment.",
];

export default function ClientsPageClient() {
  return (
    <div className="min-h-screen bg-background">
      <FloatingElements />
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 overflow-hidden bg-background">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-primary/10" />
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full bg-primary/5 blur-3xl" />

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 text-center">
          <motion.div
            {...fadeUp}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6"
          >
            <Sparkles className="w-4 h-4 text-[#D4AF37]" />
            <span className="text-sm font-semibold text-primary">
              Staffing Solutions for UK Employers
            </span>
          </motion.div>

          <motion.h1
            {...fadeUp}
            transition={{ delay: 0.05 }}
            className="font-sans font-heading font-semibold text-foreground tracking-[-0.3px] text-white leading-[1.2] mb-6"
          >
            Professional Workforce Supply
          </motion.h1>

          <motion.p
            {...fadeUp}
            transition={{ delay: 0.1 }}
            className="text-white/60 text-lg md:text-xl max-w-2xl mx-auto mb-8"
          >
            Providing end-to-end recruitment services to help businesses hire the right talent quickly, compliantly, and cost-effectively.
          </motion.p>

          <motion.div
            {...fadeUp}
            transition={{ delay: 0.15 }}
            className="flex justify-center gap-4 flex-wrap"
          >
            <FindStaffButton className="btn-ai-cta px-8 py-3 rounded-xl font-bold cursor-pointer text-center">
              Find Staff
            </FindStaffButton>
            <Link href="/why-choose-us" className="bg-white/10 text-white hover:bg-white/20 transition-all px-8 py-3 rounded-xl font-bold text-center border border-white/10">
              Why Choose RDUK
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-12 md:py-16 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {serviceCards.map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07, duration: 0.45 }}
                className="card-hover p-8 flex flex-col justify-between rounded-2xl border border-white/10 bg-white/5"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                    <service.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
                  <p className="text-white/60 text-sm leading-relaxed mb-6">
                    {service.description}
                  </p>
                </div>
                <Link
                  href={service.link}
                  className="inline-flex items-center text-sm font-semibold text-[#D4AF37] hover:text-white transition-colors"
                >
                  Learn More &rarr;
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust & Highlights */}
      <section className="py-12 md:py-16 bg-background border-t border-white/5">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <motion.div {...fadeUp} className="space-y-6">
              <h2 className="text-3xl font-bold text-white leading-tight">
                Quality and Compliance Guaranteed
              </h2>
              <p className="text-white/60 leading-relaxed">
                We manage the complex administrative hurdles of recruitment so that you can focus on running your operations. Every candidate supplied goes through strict vetting procedures.
              </p>
              <ul className="space-y-3">
                {highlights.map((highlight, idx) => (
                  <li key={idx} className="flex gap-3 text-sm text-white/70">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="p-8 rounded-3xl border border-white/10 bg-white/5 space-y-6"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <FileCheck className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-white">ATS & JobAdder Integration</h3>
              <p className="text-white/60 text-sm leading-relaxed">
                Our operations are integrated with JobAdder and modern ATS platforms. This ensures candidate registrations flow cleanly, resulting in faster onboarding times and reducing administrative friction for your internal teams.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Box */}
      <section className="py-16 md:py-20 bg-background border-t border-white/5">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <motion.div
            {...fadeUp}
            className="relative overflow-hidden rounded-3xl p-10 md:p-14 text-center bg-gradient-to-r from-blue-950 to-indigo-950 border border-white/10"
          >
            <div className="relative">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
                Ready to secure talent?
              </h2>
              <p className="text-white/70 text-base md:text-lg max-w-2xl mx-auto mb-8">
                Speak directly with one of our recruitment branches to detail your personnel requirements.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <FindStaffButton className="btn-ai-cta px-8 py-3 rounded-xl font-bold cursor-pointer text-center">
                  Find Staff Now
                </FindStaffButton>
                <Link href="/contact" className="bg-white/10 text-white hover:bg-white/20 transition-all px-8 py-3 rounded-xl font-bold text-center border border-white/10">
                  Contact Branches
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
