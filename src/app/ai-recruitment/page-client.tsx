"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingElements from "@/components/FloatingElements";
import {
  Bot,
  Phone,
  CheckCircle,
  Cpu,
  ShieldCheck,
  TrendingUp,
  Sparkles,
} from "lucide-react";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
};

const aiFeatures = [
  {
    title: "CallPilot Automated Voice Call",
    description: "Our AI-voice assistant contacts applicants within minutes of applying, capturing key answers and suitability data 24/7.",
    link: "/callpilot",
    icon: Phone,
  },
  {
    title: "AI Hire Now Orders",
    description: "Submit volume staffing needs instantly. Our automated sourcing engine maps candidate requirements and kickstarts outreach in seconds.",
    link: "/ai-hire-now",
    icon: Cpu,
  },
  {
    title: "Ask AI Steve Widget",
    description: "An interactive, intelligent chat assistant built on our proprietary database to answer candidate questions and screen applications in real time.",
    link: "#",
    icon: Bot,
    isTrigger: true,
  },
];

const statements = [
  {
    title: "AI Transparency Statement",
    description: "Learn about our framework parameters, data security policies, and how we handle automated communication.",
    link: "/ai-transparency-statement",
  },
  {
    title: "Human-in-the-Loop Policy",
    description: "Every AI-screened candidate is verified by a human recruitment consultant before submission to clients.",
    link: "/human-review-statement",
  },
  {
    title: "Bias and Fairness statement",
    description: "Our algorithms are continuously monitored to ensure fair, equal-opportunity, and objective screening.",
    link: "/bias-fairness-statement",
  },
];

export default function AIRecruitmentPageClient() {
  const triggerAiSteve = (e: React.MouseEvent) => {
    e.preventDefault();
    window.dispatchEvent(new CustomEvent("open-ai-steve"));
  };

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
              AI-Powered Sourcing &amp; Screening
            </span>
          </motion.div>

          <motion.h1
            {...fadeUp}
            transition={{ delay: 0.05 }}
            className="font-sans font-heading font-semibold text-foreground tracking-[-0.3px] text-white leading-[1.2] mb-6"
          >
            24/7 AI Recruitment Technology
          </motion.h1>

          <motion.p
            {...fadeUp}
            transition={{ delay: 0.1 }}
            className="text-white/60 text-lg md:text-xl max-w-2xl mx-auto mb-8"
          >
            Integrating conversational AI assistants, automated voice screeners, and machine learning models to accelerate UK workforce supply.
          </motion.p>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-12 md:py-16 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {aiFeatures.map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05, duration: 0.45 }}
                className="card-hover p-8 flex flex-col justify-between rounded-2xl border border-white/10 bg-white/5 h-full"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                  <p className="text-white/60 text-sm leading-relaxed mb-6">
                    {feature.description}
                  </p>
                </div>

                {feature.isTrigger ? (
                  <button
                    onClick={triggerAiSteve}
                    className="inline-flex items-center text-sm font-semibold text-[#D4AF37] hover:text-white transition-colors cursor-pointer text-left"
                  >
                    Open AI Steve Chat &rarr;
                  </button>
                ) : (
                  <Link
                    href={feature.link}
                    className="inline-flex items-center text-sm font-semibold text-[#D4AF37] hover:text-white transition-colors"
                  >
                    Explore {feature.title.split(" ")[0]} &rarr;
                  </Link>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust & Policy Statements */}
      <section className="py-16 bg-background border-t border-white/5">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <motion.div {...fadeUp} className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Ethics &amp; Policy Compliance</h2>
            <p className="text-white/60 max-w-2xl mx-auto">
              Our AI implementations align with global ethical standards, GDPR principles, and robust security protocols.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {statements.map((statement, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="p-6 rounded-2xl border border-white/10 bg-white/5 flex flex-col justify-between"
              >
                <div>
                  <h4 className="text-lg font-bold text-white mb-2">{statement.title}</h4>
                  <p className="text-white/50 text-xs leading-relaxed mb-4">{statement.description}</p>
                </div>
                <Link
                  href={statement.link}
                  className="text-xs font-semibold text-primary hover:text-white transition-colors"
                >
                  Read Policy &rarr;
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call Pilot Video Trigger CTA */}
      <section className="py-16 md:py-20 bg-background border-t border-white/5">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <motion.div
            {...fadeUp}
            className="relative overflow-hidden rounded-3xl p-10 md:p-14 text-center bg-gradient-to-r from-blue-950 to-indigo-950 border border-white/10"
          >
            <div className="relative">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
                See CallPilot in Action
              </h2>
              <p className="text-white/70 text-base md:text-lg max-w-2xl mx-auto mb-8">
                Learn how CallPilot automated voice screening helps branches screen hundreds of applications in minutes.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => window.dispatchEvent(new CustomEvent("open-ai-call-demo"))}
                  className="btn-ai-cta px-8 py-3 rounded-xl font-bold cursor-pointer text-center"
                >
                  Watch Demo Video
                </button>
                <Link href="/contact" className="bg-white/10 text-white hover:bg-white/20 transition-all px-8 py-3 rounded-xl font-bold text-center border border-white/10">
                  Speak to an Expert
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
