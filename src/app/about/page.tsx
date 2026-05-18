"use client";

import { motion } from "framer-motion";
import {
  Briefcase,
  Building2,
  CheckCircle2,
  Clock3,
  Globe2,
  Sparkles,
  Users,
  ShieldCheck,
  Bot,
  MapPin,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingElements from "@/components/FloatingElements";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
};

const stripItems = [
  { icon: Clock3, label: "Established 2006" },
  { icon: Globe2, label: "UK-Wide Supply" },
  { icon: ShieldCheck, label: "Framework Aligned" },
  { icon: Building2, label: "Public & Private Sector" },
];

const sectors = [
  "Construction",
  "Construction Drivers",
  "Engineering",
  "Renewable Energy",
  "Healthcare",
  "Education",
  "IT & Tech",
  "Office Recruitment & AI Call Demo Automation",
];

const processSteps = [
  "Job requirements received",
  "Roles advertised",
  "Applicants contacted and screened",
  "Role-specific questions applied",
  "Responses captured and reviewed",
  "Consultants verify suitability",
  "Qualified applicants submitted promptly",
];

const reasons = [
  "20+ years recruitment experience",
  "Fast turnaround on staffing requirements",
  "Framework-aligned supply capability",
  "Consultant-led service",
  "Efficient applicant handling",
  "Reduced admin and faster hiring",
];

const aiSupport = [
  "Applicant contact",
  "Structured response capture",
  "Reducing repetitive manual tasks",
  "Improving communication speed",
];

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="py-10 md:py-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <motion.div {...fadeUp} className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-heading font-semibold text-foreground mb-4">
            {title}
          </h2>
          <div className="space-y-4 text-foreground/70 text-base md:text-lg leading-relaxed">
            {children}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function ListBlock({ items }: { items: string[] }) {
  return (
    <ul className="grid sm:grid-cols-2 gap-3 mt-4">
      {items.map((item, i) => (
        <motion.li
          key={item}
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.04 }}
          className="card-hover p-4 flex items-start gap-3"
        >
          <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
          <span className="text-foreground/80">{item}</span>
        </motion.li>
      ))}
    </ul>
  );
}

function StatsStrip() {
  return (
    <section className="py-8 md:py-10 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {stripItems.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="card-hover p-5 text-center flex flex-col items-center gap-3"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <item.icon className="w-6 h-6 text-primary" />
              </div>
              <span className="font-semibold text-foreground">{item.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <motion.div
          {...fadeUp}
          className="relative overflow-hidden rounded-3xl p-10 md:p-14 text-center"
          style={{
            background: "var(--gradient-metallic)",
            boxShadow: "var(--glow-blue-strong)",
          }}
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.14),transparent_50%)]" />
          <div className="relative">
            <h2 className="font-sans text-[40px] font-heading font-semibold text-white tracking-[-0.3px] leading-[1.2] mb-3">
              Need staff quickly?
            </h2>
            <p className="text-primary-foreground/90 text-lg max-w-2xl mx-auto mb-8">
              Speak to Recruitment Direct to secure reliable staff without delay.
            </p>
            <a href="/contact" className="btn-ai-cta">
              Contact Us
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <FloatingElements />
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-24 overflow-hidden bg-background">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-primary/10" />
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full bg-primary/5 blur-3xl" />

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 text-center">
          <motion.div
            {...fadeUp}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6"
          >
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-semibold text-primary">
              Established Recruitment. Modern Delivery.
            </span>
          </motion.div>

          <motion.h1
            {...fadeUp}
            transition={{ delay: 0.05 }}
            className="font-sans text-[40px] font-heading font-semibold text-foreground tracking-[-0.3px] text-white leading-[1.2] mb-6"
          >
            20+ Years Delivering Staff Across the UK
          </motion.h1>

          <motion.p
            {...fadeUp}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl text-foreground/70 max-w-3xl mx-auto leading-relaxed"
          >
            Recruitment Direct provides temporary, contract, and permanent staffing
            solutions across multiple sectors, combining over 20 years of recruitment
            experience with efficient, modern delivery.
          </motion.p>
        </div>
      </section>

      <StatsStrip />

      <main className="py-8 md:py-10">
        <Section title="Established Recruitment. Modern Delivery.">
          <p>
            Recruitment Direct has built a reputation for delivering dependable
            staffing solutions across high-demand sectors.
          </p>
          <p>
            Our approach combines consultant-led recruitment with efficient
            processes to improve response times and reduce delays.
          </p>
        </Section>

        <Section title="Sectors We Supply">
          <ListBlock items={sectors} />
        </Section>

        <Section title="How Recruitment Direct Delivers Results">
          <ListBlock items={processSteps} />
        </Section>

        <Section title="Why Clients Choose Recruitment Direct">
          <ListBlock items={reasons} />
        </Section>

        <Section title="AI-Supported Recruitment">
          <p>
            Recruitment Direct applies AI-supported processes within its recruitment
            workflow to improve efficiency and enhance delivery.
          </p>
          <ListBlock items={aiSupport} />
        </Section>

        <Section title="Recruitment Across Scotland and the UK">
          <div className="card-hover p-6 md:p-8 flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
              <MapPin className="w-6 h-6 text-primary" />
            </div>
            <p className="text-foreground/70 text-base md:text-lg leading-relaxed">
              We support clients across Glasgow, Edinburgh, Falkirk, Stirling,
              Livingston, Aberdeen, Dundee, and throughout Scotland and the UK.
            </p>
          </div>
        </Section>
      </main>

      <CTA />
      <Footer />
    </div>
  );
}