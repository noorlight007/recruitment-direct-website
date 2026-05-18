"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Check } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingElements from "@/components/FloatingElements";

const specialistRoles = [
  "Engineering and technical professionals",
  "Construction and project-based roles",
  "Facilities and property specialists",
  "IT and technical support contractors",
  "Operational and compliance-based roles",
];

const sectors = [
  "Education settings and support services",
  "Healthcare environments and operational roles",
  "Renewable energy and infrastructure projects",
  "Engineering and technical environments",
  "IT and technology environments",
  "Facilities management and property services",
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

export default function ContractStaffPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <header className="pt-32 pb-16 bg-gradient-to-br from-primary/5 via-background to-primary/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-sans text-[40px] font-semibold tracking-[-0.3px] text-white leading-[1.2] mb-6"
          >
            Contract Staff Recruitment Scotland
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl text-foreground/70 max-w-3xl mx-auto"
          >
            Skilled professionals for fixed-term projects, specialist roles and
            longer-term assignments — across Scotland and the wider UK.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-8"
          >
            <a href="/#contact" className="btn-ai-cta">
              Request Contract Staff
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
            We provide contract staff recruitment across Scotland and the wider
            UK, supporting organisations that require skilled professionals for
            fixed-term projects, specialist roles and longer-term assignments.
          </motion.p>

          <p className="text-lg text-foreground/80 leading-relaxed mb-12">
            As a contract recruitment agency, we work with businesses that need
            experience, flexibility and continuity without committing to
            permanent hires.
          </p>

          <Section title="Contract Recruitment Agency Scotland">
            <p>
              As a contract recruitment agency in Scotland, we support
              organisations requiring skilled professionals for project-based
              roles, specialist assignments and long-term contract positions.
            </p>
            <p>
              Our approach ensures access to experienced individuals who can
              deliver value quickly within defined timeframes.
            </p>
          </Section>

          <Section title="Flexible Contract Staffing Solutions">
            <p>
              Contract staffing allows organisations to scale their workforce in
              line with project demands, operational requirements and specialist
              needs.
            </p>
            <p>
              We support contract placements ranging from short-term assignments
              to long-term project delivery, ensuring access to experienced
              professionals when required.
            </p>
          </Section>

          <Section title="Specialist Contract Roles">
            <ul className="grid sm:grid-cols-2 gap-3">
              {specialistRoles.map((role) => (
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

          <Section title="Project-Based and Long-Term Contracts">
            <p>
              Our contract recruitment services support both defined
              project-based roles and ongoing contract positions supporting
              operational delivery.
            </p>
            <p>
              We align contract professionals with client requirements,
              timelines and expected outcomes.
            </p>
          </Section>

          <Section title="Temporary and Construction Staffing">
            <p>
              We also provide temporary staffing services and  specialist construction recruitment depending on project requirements.
            </p>
          </Section>

          <Section title="Scotland and UK Contract Recruitment Coverage">
            <p>
              We support contract staffing requirements across Scotland and the
              wider UK, with strong coverage across the Central Belt, including
              Glasgow, Edinburgh and surrounding locations.
            </p>
            <p>
              We also support wider UK-based projects depending on client
              requirements.
            </p>
          </Section>

          <Section title="Contract Recruitment Approach">
            <p>
              We focus on sourcing experienced professionals who can deliver
              immediate value within contract roles.
            </p>
            <p>
              Our approach ensures alignment between candidate capability,
              project requirements and expected outcomes.
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
            <h2 className="font-sans text-[40px] font-semibold tracking-[-0.3px] text-white leading-[1.2] mb-6">
              Looking for Contract Staff?
            </h2>
            <p className="text-foreground/70 mb-8 max-w-2xl mx-auto">
              If you require contract staff across education, healthcare,
              renewable energy, IT or technical environments, speak to our team
              to discuss your requirements.
            </p>
            <a href="/#contact" className="btn-ai-cta">
              Request Contract Staff
            </a>
          </motion.div>
        </div>
      </main>

      <Footer />
      <FloatingElements />
    </div>
  );
}