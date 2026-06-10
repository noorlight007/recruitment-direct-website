"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Check } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingElements from "@/components/FloatingElements";

const roles = [
  "Engineering and technical roles",
  "IT and technology roles",
  "Education and support roles",
  "Healthcare and operational roles",
  "Facilities and property management roles",
  "Construction and project-based roles",
  "Business support and management roles",
];

const sectors = [
  "Engineering and infrastructure",
  "Construction and project delivery",
  "Renewable energy and technical environments",
  "Healthcare and operational services",
  "Education and support roles",
  "IT and technology environments",
  "Facilities management and property services",
];

const solutions = [
  "Full-cycle recruitment processes",
  "Candidate sourcing and screening",
  "Interview coordination and selection support",
  "Offer management and onboarding guidance",
];

const Section = ({
  title,
  children,
  delay = 0,
}: {
  title: string;
  children: React.ReactNode;
  delay?: number;
}) => (
  <motion.section
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
    className="mb-12"
  >
    <h2 className="font-sans text-[30px] font-semibold tracking-[-0.3px] text-white leading-[1.2] mb-6">
      {title}
    </h2>
    <div className="space-y-4 text-foreground/80 leading-relaxed">
      {children}
    </div>
  </motion.section>
);

export default function PermanentStaffPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <header className="pt-32 pb-16 bg-gradient-to-br from-primary/5 via-background to-primary/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-sans font-semibold tracking-[-0.3px] text-white leading-[1.2] mb-6"
          >
            Permanent Recruitment Scotland
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="subtitle text-foreground/70 max-w-3xl mx-auto"
          >
            Long-term hires aligned to your business goals, culture and
            operational needs — across Scotland and the wider UK.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-8"
          >
            <a href="/ai-hire-now" className="btn-ai-cta">
              Request Permanent Staff
            </a>
          </motion.div>
        </div>
      </header>

      {/* Body */}
      <main className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-lg text-foreground/80 leading-relaxed mb-6"
          >
            We provide permanent recruitment services across Scotland and the
            wider UK, supporting organisations that require long-term hires
            aligned to their business goals, culture and operational needs.
          </motion.p>

          <p className="text-lg text-foreground/80 leading-relaxed mb-12">
            Our permanent recruitment approach focuses on identifying
            high-quality candidates who can contribute to long-term growth,
            stability and performance.
          </p>

          <Section title="Permanent Recruitment Agency Scotland">
            <p>
              As a permanent recruitment agency in Scotland, we support
              organisations in sourcing, assessing and securing candidates for
              key roles across a range of sectors.
            </p>
            <p>
              We work closely with clients to understand business requirements,
              team structures and long-term objectives to ensure the right hires
              are made.
            </p>
          </Section>

          <Section title="Strategic Permanent Hiring Solutions">
            <p>
              Permanent recruitment requires a structured and targeted approach
              to ensure candidates are aligned to both role requirements and
              organisational fit.
            </p>
            <ul className="grid sm:grid-cols-2 gap-3 mt-4">
              {solutions.map((item) => (
                <li key={item} className="flex items-start gap-3 card-hover p-4">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Section>

          <Section title="Roles We Recruit For">
            <ul className="grid sm:grid-cols-2 gap-3">
              {roles.map((role) => (
                <li key={role} className="flex items-start gap-3 card-hover p-4">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>{role}</span>
                </li>
              ))}
            </ul>
          </Section>

          <Section title="Sectors We Support">
            <ul className="grid sm:grid-cols-2 gap-3">
              {sectors.map((sector) => (
                <li
                  key={sector}
                  className="flex items-start gap-3 card-hover p-4"
                >
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>{sector}</span>
                </li>
              ))}
            </ul>
          </Section>

          <Section title="Long-Term Hiring and Business Growth">
            <p>
              Permanent hires play a critical role in business continuity, team
              development and long-term performance.
            </p>
            <p>
              We support organisations in building stable, high-performing teams
              through structured recruitment processes and targeted candidate
              selection.
            </p>
          </Section>

          <Section title="Temporary and Contract Recruitment">
            <p>
              We also provide{" "}
              <Link
                href="/temporary-staff-recruitment"
                className="text-primary hover:underline font-medium"
              >
                temporary staffing services
              </Link>{" "}
              and{" "}
              <Link
                href="/contract-staff"
                className="text-primary hover:underline font-medium"
              >
                contract recruitment solutions
              </Link>
              , as well as{" "}
              <Link
                href="/construction-recruitment"
                className="text-primary hover:underline font-medium"
              >
                specialist construction recruitment
              </Link>{" "}
              depending on workforce requirements.
            </p>
          </Section>

          <Section title="Scotland and UK Permanent Recruitment Coverage">
            <p>
              We support permanent recruitment across Scotland and the wider UK,
              with strong coverage across the Central Belt, including Glasgow,
              Edinburgh and surrounding locations.
            </p>
            <p>
              We also support wider UK-based hiring requirements depending on
              client needs.
            </p>
          </Section>

          <Section title="Permanent Recruitment Approach">
            <p>
              We focus on identifying candidates who can deliver long-term
              value, ensuring alignment between experience, role requirements
              and organisational culture.
            </p>
            <p>
              Our approach supports both immediate hiring needs and long-term
              workforce planning.
            </p>
          </Section>

          {/* Final CTA */}
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
            <h2 className="font-sans font-semibold tracking-[-0.3px] text-white leading-[1.2] mb-4">
              Looking for Permanent Staff?
            </h2>
            <p className="text-foreground/70 mb-8 max-w-2xl mx-auto">
              If you require permanent staff across engineering, IT, healthcare,
              education or professional environments, speak to our team to
              discuss your requirements.
            </p>
            <a href="/#contact" className="btn-ai-cta">
              Request Permanent Staff
            </a>
          </motion.div>
        </div>
      </main>

      <Footer />
      <FloatingElements />
    </div>
  );
}