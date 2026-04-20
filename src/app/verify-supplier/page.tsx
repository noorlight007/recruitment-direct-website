"use client";

import { motion } from "framer-motion";
import {
  ShieldCheck,
  Building2,
  FileCheck,
  UserCheck,
  Search,
  Clock,
  Database,
  RefreshCw,
  CheckCircle2,
  AlertTriangle,
  XCircle,
  Sparkles,
  ArrowRight,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingElements from "@/components/FloatingElements";

const purposes = [
  "Confirm business legitimacy",
  "Validate VAT registration",
  "Check Companies House registration & status",
  "Review director details and status",
  "Reduce risk and ensure compliance",
  "Maintain a clear audit trail",
];

const checks = [
  {
    icon: Building2,
    title: "Company Checks",
    items: [
      "Company registered with Companies House",
      "Company status confirmed as active",
      "Registered details match submitted information",
    ],
  },
  {
    icon: FileCheck,
    title: "VAT Checks",
    items: ["VAT number verified", "VAT status confirmed as active"],
  },
  {
    icon: UserCheck,
    title: "Director Checks",
    items: [
      "Directors identified",
      "No disqualified or struck-off directors identified",
    ],
  },
  {
    icon: Search,
    title: "General Checks",
    items: ["Trading status reviewed", "Inconsistencies flagged and reviewed"],
  },
];

const scoring = [
  {
    icon: CheckCircle2,
    color: "text-green-600",
    bg: "bg-green-50",
    border: "border-green-500",
    label: "Green – Approved",
    desc: "All key checks passed. Supplier approved for engagement.",
  },
  {
    icon: AlertTriangle,
    color: "text-amber-600",
    bg: "bg-amber-50",
    border: "border-amber-500",
    label: "Amber – Review Required",
    desc: "Minor inconsistencies identified. Manual review required.",
  },
  {
    icon: XCircle,
    color: "text-red-600",
    bg: "bg-red-50",
    border: "border-red-500",
    label: "Red – Not Approved",
    desc: "Critical issues identified such as invalid VAT, inactive company status, or director concerns.",
  },
];

const dataHandling = [
  { icon: Database, text: "Consistent data capture" },
  { icon: Clock, text: "Time-stamped verification records" },
  { icon: RefreshCw, text: "Reduced manual processing" },
  { icon: ShieldCheck, text: "Accurate data handling across systems" },
];

export default function VerifySupplierPage() {
  return (
    <div className="min-h-screen bg-background">
      <FloatingElements />
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-primary/10" />
        <div className="absolute top-20 -right-32 w-96 h-96 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute bottom-0 -left-32 w-96 h-96 rounded-full bg-primary/10 blur-3xl" />

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 text-center">
          

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-sans text-[40px] font-heading font-semibold text-foreground tracking-[-0.3px] text-gray-900 leading-[1.2] mb-6 mt-4"
            
          >
            Supplier <span className="text-primary glow-text">Verification</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-foreground/70 max-w-3xl mx-auto mb-8 leading-relaxed"
          >
            An AI-driven, 24/7 verification process ensuring every subcontractor
            and supplier meets compliance — VAT, Companies House, directors and
            more — with structured, auditable records.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap gap-4 justify-center"
          >
            <a href="/chatbot" className="btn-metallic">
              Start Verification
            </a>
            {/* <a href="/#contact" className="btn-metallic">
              Contact Us
            </a> */}
          </motion.div>
        </div>
      </section>

      {/* Intro paragraphs */}
      <section className="py-16 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="card-hover p-8 md:p-10 space-y-4 text-foreground/80 text-lg leading-relaxed"
          >
            <p>
              Recruitment Direct UK Ltd verifies key data including VAT
              registration, Companies House records, and director status —
              creating a consistent and auditable verification process.
            </p>
            <p>
              Approved supplier details are automatically structured and
              integrated into our accounts system, reducing manual input and
              improving accuracy.
            </p>
            <p>
              This approach supports HMRC expectations and ensures accurate,
              time-stamped records are maintained.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Purpose */}
      <section className="py-20 bg-muted/40">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-sans text-[40px] font-heading font-semibold text-foreground tracking-[-0.3px] text-gray-900 leading-[1.2]  text-center mb-12"
          >
            Purpose
          </motion.h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {purposes.map((p, i) => (
              <motion.div
                key={p}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="card-hover p-6 flex items-start gap-3"
              >
                <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                </div>
                <span className="text-foreground font-medium pt-1">{p}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Verification Checks */}
      <section className="py-20 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <h2 className="font-sans text-[40px] font-heading font-semibold text-foreground tracking-[-0.3px] text-gray-900 leading-[1.2] mb-4">Verification Checks</h2>
            <p className="text-foreground/70 max-w-2xl mx-auto">
              Multi-layered checks across company, VAT, directors and trading
              data.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {checks.map((c, i) => (
              <motion.div
                key={c.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="card-hover p-8 group"
              >
                <div className="flex items-center gap-4 mb-5">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <c.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-heading font-semibold text-foreground">
                    {c.title}
                  </h3>
                </div>

                <ul className="space-y-2.5">
                  {c.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-foreground/80"
                    >
                      <CheckCircle2 className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Scoring & Outcomes */}
      <section className="py-20 bg-muted/40">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <h2 className="font-sans text-[40px] font-heading font-semibold text-foreground tracking-[-0.3px] text-gray-900 leading-[1.2] mb-4">Scoring & Outcomes</h2>
            <p className="text-foreground/70 max-w-2xl mx-auto">
              A structured scoring model ensures consistent and explainable
              outcomes.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {scoring.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`card-hover p-8 border-l-4 ${s.border}`}
              >
                <div
                  className={`w-14 h-14 rounded-xl ${s.bg} flex items-center justify-center mb-5`}
                >
                  <s.icon className={`w-7 h-7 ${s.color}`} />
                </div>
                <h3 className="text-xl font-heading font-semibold text-foreground mb-2">
                  {s.label}
                </h3>
                <p className="text-foreground/70 leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* System & Data Handling */}
      <section className="py-20 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-sans text-[40px] font-heading font-semibold text-foreground tracking-[-0.3px] text-gray-900 leading-[1.2] mb-6">System & Data Handling</h2>
              <p className="text-foreground/70 text-lg leading-relaxed mb-4">
                Supplier data is verified and structured automatically through
                our AI system.
              </p>
              <p className="text-foreground/70 text-lg leading-relaxed">
                Approved supplier details are automatically integrated into our
                accounts system, reducing manual input and improving accuracy.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="grid sm:grid-cols-2 gap-4"
            >
              {dataHandling.map((d) => (
                <div key={d.text} className="card-hover p-6">
                  <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                    <d.icon className="w-5 h-5 text-primary" />
                  </div>
                  <p className="font-semibold text-foreground">{d.text}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Ongoing Checks */}
      <section className="py-16 bg-muted/40">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="card-hover p-10"
          >
            <RefreshCw className="w-12 h-12 text-primary mx-auto mb-4" />
            <h2 className="font-sans text-[40px] font-heading font-semibold text-foreground tracking-[-0.3px] text-gray-900 leading-[1.2] mb-3">
              Ongoing Checks
            </h2>
            <p className="text-foreground/70 text-lg">
              Supplier details are reviewed periodically to ensure accuracy and
              ongoing compliance. Approved suppliers may be engaged for work
              subject to successful verification and continued review.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-background">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-3xl p-10 md:p-16 text-center"
            style={{
              background: "var(--gradient-metallic)",
              boxShadow: "var(--glow-blue-strong)",
            }}
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.15),transparent_50%)]" />
            <div className="relative">
              
              <h2 className="font-sans text-[40px] font-heading font-semibold text-foreground tracking-[-0.3px] text-gray-900 leading-[1.2] mb-6 text-white">
                Start Supplier Verification
              </h2>
              <p className="text-white/90 text-lg max-w-2xl mx-auto mb-8">
                Use our AI verification assistant — it guides you through the
                process, collects required information, and carries out
                verification checks in real time.
              </p>
              <a
                href="/chatbot"
                className="inline-flex items-center gap-2 bg-white text-primary font-bold px-8 rounded-md hover:bg-white/95 transition-all"
                style={{
                  height: "44px",
                  padding: "12px 24px",
                  minWidth: "160px",
                  fontSize: "16px",
                  fontWeight: 600,
                  borderRadius: "6px",
                  borderBottom: "3px solid #05182B",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.25)",
                }}
              >
                Start Verification <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}