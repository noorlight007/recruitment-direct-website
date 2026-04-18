"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Phone,
  Bot,
  Zap,
  Clock,
  TrendingUp,
  Sparkles,
  CheckCircle,
  HardHat,
  Heart,
  Home,
  Building2,
  Headphones,
  Briefcase,
  Users,
  PhoneCall,
  ClipboardList,
  Database,
  Workflow,
  Gauge,
  ShieldCheck,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingElements from "@/components/FloatingElements";
import callpilotLogo from "@/assets/callpilot_logo.png";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
};

/* ─── HERO ─── */
function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-background overflow-hidden">
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full opacity-[0.05]"
        style={{
          background: "radial-gradient(circle, hsl(var(--primary)), transparent)",
        }}
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center relative z-10">
        

        <motion.div
          {...fadeUp}
          transition={{ delay: 0.05 }}
          className="flex justify-center mb-6"
        >
          <div className="w-24 h-24 md:w-28 md:h-28 rounded-2xl bg-primary/10 flex items-center justify-center p-3 shadow-[0_0_30px_hsl(var(--primary)/0.15)]">
            <Image
              src={callpilotLogo}
              alt="CallPilot"
              className="w-full h-full object-contain"
              priority
            />
          </div>
        </motion.div>

        <motion.h1
          {...fadeUp}
          transition={{ delay: 0.1 }}
          className="font-sans text-[40px] font-semibold tracking-[-0.3px] text-gray-900 leading-[1.2] mb-6"
        >
          CallPilot — 24/7 AI Voice Call Platform
        </motion.h1>

        <motion.p
          {...fadeUp}
          transition={{ delay: 0.15 }}
          className="text-lg md:text-xl text-foreground/70 max-w-3xl mx-auto mb-8"
        >
          Instantly contact, qualify and engage leads, applicants and customers
          using AI-powered voice calls. Reduce manual workload, improve response
          speed and ensure every opportunity is handled without delay.
        </motion.p>

        <motion.ul
          {...fadeUp}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center gap-x-8 gap-y-3 mb-10 text-foreground/80"
        >
          {[
            "Calls within minutes",
            "24/7 availability",
            "Tailored qualification",
            "Seamless integration",
          ].map((t) => (
            <li
              key={t}
              className="flex items-center gap-2 text-sm md:text-base font-medium"
            >
              <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
              {t}
            </li>
          ))}
        </motion.ul>

        <motion.div
          {...fadeUp}
          transition={{ delay: 0.25 }}
          className="flex flex-wrap justify-center gap-4"
        >
          <a
            href="https://callpilot.pro"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-metallic"
          >
            Free AI Call
          </a>
          <a
            href="https://callpilot.pro/try-it"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-metallic"
          >
            View AI Call Demo
          </a>
        </motion.div>
      </div>
    </section>
  );
}

/* ─── STATS ─── */
function StatsStrip() {
  const stats = [
    { icon: Clock, label: "Always On", value: "24/7" },
    { icon: Zap, label: "Response Time", value: "Minutes" },
    { icon: TrendingUp, label: "Higher Conversion", value: "Instant" },
    { icon: Bot, label: "AI Powered", value: "Smart" },
  ];

  return (
    <section className="py-10 bg-muted/40 border-y border-primary/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 grid grid-cols-2 md:grid-cols-4 gap-6">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="flex items-center gap-3 justify-center md:justify-start"
          >
            <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
              <s.icon className="w-5 h-5 text-primary" />
            </div>
            <div>
              <div className="text-xl font-heading font-semibold text-foreground">
                {s.value}
              </div>
              <div className="text-xs text-foreground/60">{s.label}</div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

/* ─── FEATURE BLOCK (alternating) ─── */
function FeatureBlocks() {
  const blocks = [
    {
      icon: PhoneCall,
      title: "AI Voice Calls That Work 24/7",
      body: [
        "CallPilot automatically calls leads, applicants or customers within minutes of an enquiry, delivering structured conversations based on your business requirements.",
        "This ensures no opportunity is missed and every enquiry is handled quickly, regardless of time of day.",
      ],
    },
    {
      icon: ClipboardList,
      title: "Automated Qualification & Data Capture",
      body: [
        "CallPilot asks tailored, business-specific questions to capture key information and qualify responses.",
        "This allows organisations to prioritise high-value opportunities without manual screening or follow-up.",
      ],
    },
    {
      icon: Workflow,
      title: "Seamless Workflow Integration",
      body: [
        "CallPilot integrates with your existing systems and processes, ensuring all responses, data and interactions are captured and accessible.",
        "Your team stays in control while AI handles the repetitive, high-volume work in the background.",
      ],
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-12">
        {blocks.map((b, i) => (
          <motion.div
            key={b.title}
            {...fadeUp}
            className={`card-hover p-8 md:p-10 grid md:grid-cols-[120px_1fr] gap-6 md:gap-10 items-start ${
              i % 2 === 1 ? "md:[direction:rtl] md:[&>*]:[direction:ltr]" : ""
            }`}
          >
            <div className="w-24 h-24 md:w-28 md:h-28 rounded-2xl bg-primary/10 flex items-center justify-center">
              <b.icon className="w-12 h-12 text-primary" />
            </div>

            <div>
              <h2 className="font-sans text-[25px] font-semibold tracking-[-0.3px] text-gray-900 leading-[1.2] mb-4">
                {b.title}
              </h2>
              {b.body.map((p) => (
                <p key={p} className="text-foreground/70 mb-3 leading-relaxed">
                  {p}
                </p>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

/* ─── INDUSTRIES ─── */
function Industries() {
  const items = [
    { icon: Users, label: "Recruitment & Staffing" },
    { icon: HardHat, label: "Construction & Engineering" },
    { icon: Heart, label: "Healthcare & Education" },
    { icon: Home, label: "Property & Housing" },
    { icon: Building2, label: "Facilities Management" },
    { icon: Briefcase, label: "Sales & Lead Generation" },
    { icon: Headphones, label: "Customer Service & Support" },
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.h2 {...fadeUp} className="font-sans text-[40px] text-center font-semibold tracking-[-0.3px] text-gray-900 leading-[1.2] mb-4">
          Built for Multiple Industries
        </motion.h2>
        <motion.p
          {...fadeUp}
          transition={{ delay: 0.1 }}
          className="text-center text-foreground/70 max-w-2xl mx-auto mb-12"
        >
          CallPilot adapts to the workflows, terminology and goals of your
          sector.
        </motion.p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {items.map((it, i) => (
            <motion.div
              key={it.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="card-hover p-6 flex flex-col items-center text-center gap-3"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <it.icon className="w-6 h-6 text-primary" />
              </div>
              <span className="font-semibold text-foreground">{it.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── BENEFITS + CALL FLOWS (two columns) ─── */
function BenefitsAndFlows() {
  const benefits = [
    "Reduces administrative workload",
    "Speeds up response times",
    "Handles high volumes efficiently",
    "Improves consistency and accuracy",
    "Allows teams to focus on higher-value activity",
  ];

  const flows = [
    "Lead qualification",
    "Applicant screening",
    "Customer follow-up",
    "Appointment setting",
    "Data collection",
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 grid md:grid-cols-2 gap-8">
        <motion.div {...fadeUp} className="card-hover p-8">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
              <Gauge className="w-6 h-6 text-primary" />
            </div>
            <h2 className="font-sans text-[25px] font-semibold tracking-[-0.3px] text-gray-900 leading-[1.2]">
              Reduce Cost & Increase Efficiency
            </h2>
          </div>

          <ul className="space-y-3">
            {benefits.map((b) => (
              <li key={b} className="flex items-start gap-3 text-foreground/80">
                <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <span>{b}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          {...fadeUp}
          transition={{ delay: 0.1 }}
          className="card-hover p-8"
        >
          <div className="flex items-center gap-3 mb-5">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
              <Phone className="w-6 h-6 text-primary" />
            </div>
            <h2 className="font-sans text-[25px] font-semibold tracking-[-0.3px] text-gray-900 leading-[1.2]">
              Customisable Call Flows
            </h2>
          </div>

          <ul className="space-y-3">
            {flows.map((f) => (
              <li key={f} className="flex items-start gap-3 text-foreground/80">
                <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <span>{f}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}

/* ─── HOW IT WORKS (timeline) ─── */
function HowItWorks() {
  const steps = [
    {
      icon: Sparkles,
      title: "Enquiry Received",
      text: "A lead, applicant or enquiry comes in.",
    },
    {
      icon: PhoneCall,
      title: "AI Calls in Minutes",
      text: "CallPilot initiates an AI-powered call.",
    },
    {
      icon: ClipboardList,
      title: "Tailored Questions",
      text: "Questions asked based on your workflow.",
    },
    {
      icon: Bot,
      title: "Responses Processed",
      text: "Replies are captured and analysed.",
    },
    {
      icon: Database,
      title: "Data Stored",
      text: "Information is passed into your system.",
    },
    {
      icon: ShieldCheck,
      title: "Team Takes Action",
      text: "Your team reviews and responds.",
    },
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.h2 {...fadeUp} className="font-sans text-[40px] font-semibold tracking-[-0.3px] text-gray-900 leading-[1.2] mb-4 text-center">
          How CallPilot Works
        </motion.h2>
        <motion.p
          {...fadeUp}
          transition={{ delay: 0.1 }}
          className="text-center text-foreground/70 mb-14"
        >
          Six simple steps from enquiry to action.
        </motion.p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="card-hover p-6 relative"
            >
              <div className="absolute -top-3 -right-3 w-10 h-10 rounded-full bg-primary text-primary-foreground font-heading font-bold flex items-center justify-center text-sm shadow-lg">
                {i + 1}
              </div>

              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <s.icon className="w-6 h-6 text-primary" />
              </div>

              <h3 className="font-heading font-semibold text-lg text-foreground mb-2">
                {s.title}
              </h3>
              <p className="text-foreground/70 text-sm">{s.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── CTA ─── */
function CTA() {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 p-10 rounded-2xl text-center"
            style={{
              background:
                "linear-gradient(135deg, hsl(var(--primary) / 0.08), hsl(var(--primary) / 0.15))",
              border: "1px solid hsl(var(--primary) / 0.2)",
          }}
        >
          <div
            className="absolute inset-0 opacity-10"
            style={{
              background:
                "radial-gradient(circle at top right, white, transparent 60%)",
            }}
          />
          <div className="relative z-10">
            <h2 className="font-sans text-[40px] font-semibold tracking-[-0.3px] text-gray-900 leading-[1.2] mb-4">
              Start Using CallPilot
            </h2>
            <p className="text-foreground/70 mb-8 max-w-2xl mx-auto">
              Automate calls, improve response times and reduce operational
              costs. Experience how CallPilot works.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://callpilot.pro"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-metallic"
              >
                Free AI Call
              </a>
              <a
                href="https://callpilot.pro/try-it"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-metallic"
              >
                View AI Call Demo
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default function CallPilotPage() {
  return (
    <div className="min-h-screen bg-background">
      <FloatingElements />
      <Navbar />
      <Hero />
      <StatsStrip />
      <FeatureBlocks />
      <Industries />
      <BenefitsAndFlows />
      <HowItWorks />
      <CTA />
      <Footer />
    </div>
  );
}