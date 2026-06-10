"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Check } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingElements from "@/components/FloatingElements";

const coreSectors = [
  "Construction and civil engineering",
  "Plant and site-based drivers",
  "Infrastructure and utilities",
  "Facilities management and maintenance",
  "Healthcare environments",
  "Education settings",
];

const additionalSectors = [
  "Commercial environments",
  "Property and housing",
  "Engineering and technical roles",
  "IT and technical support",
];

const staffTypes = [
  "Skilled and general labour",
  "Site and operational staff",
  "Plant operators and drivers",
  "Maintenance and facilities staff",
  "Healthcare support staff",
  "Education support staff",
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

export default function TemporaryStaffPage() {
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
            Temporary Staff Recruitment Scotland
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="subtitle text-foreground/70 max-w-3xl mx-auto"
          >
            Reliable workers for short-term cover, ongoing support and
            project-based staffing — across Scotland and the wider UK.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-8"
          >
            <a href="/#contact" className="btn-ai-cta">
              Request Temporary Staff
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
            We provide temporary staff recruitment across Scotland and the wider
            UK, supplying reliable workers to support a wide range of sectors.
            Whether you require short-term cover, ongoing support or
            project-based staff, we deliver workers efficiently and without
            delay.
          </motion.p>

          <p className="text-lg text-foreground/80 leading-relaxed mb-12">
            We support organisations across both public and private sectors,
            providing temporary staffing solutions where reliability,
            compliance and speed of supply are critical.
          </p>

          <Section title="Temporary Staffing Across Multiple Sectors">
            <p>
              We supply temporary staff across a broad range of sectors, helping
              organisations maintain operations and respond to changing
              workforce demands.
            </p>
          </Section>

          <Section title="Sectors We Support">
            <h3 className="text-lg font-semibold text-foreground mb-3">
              Core sectors
            </h3>
            <ul className="grid sm:grid-cols-2 gap-3 mb-6">
              {coreSectors.map((sector) => (
                <li key={sector} className="flex items-start gap-3 card-hover p-4">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>{sector}</span>
                </li>
              ))}
            </ul>

            <h3 className="text-lg font-semibold text-foreground mb-3">
              Additional sectors we support
            </h3>
            <ul className="grid sm:grid-cols-2 gap-3">
              {additionalSectors.map((sector) => (
                <li key={sector} className="flex items-start gap-3 card-hover p-4">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>{sector}</span>
                </li>
              ))}
            </ul>

            <p className="mt-4">
              We also support other sectors where temporary staffing is
              required, depending on client needs and workforce demand.
            </p>
          </Section>

          <Section title="Types of Temporary Staff We Supply">
            <ul className="grid sm:grid-cols-2 gap-3">
              {staffTypes.map((type) => (
                <li key={type} className="flex items-start gap-3 card-hover p-4">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>{type}</span>
                </li>
              ))}
            </ul>
          </Section>

          <Section title="Specialist Construction Recruitment">
            <p>
              While we supply temporary staff across multiple sectors,
              construction and infrastructure projects often require more
              specialised support.
            </p>
            <p>
              For construction-specific roles, including site-based staff and
              project support, view our{" "}
              <Link
                href="/construction-recruitment"
                className="text-primary hover:underline font-medium"
              >
                Construction Recruitment services
              </Link>
              .
            </p>
          </Section>

          <Section title="Local Temporary Staff Supply">
            <p>
              We supply temporary staff across Scotland and the wider UK, with
              strong coverage across the Central Belt, including key locations
              such as Falkirk, Stirling, Livingston, Cumbernauld, Motherwell,
              Glasgow and Edinburgh.
            </p>
            <p>
              We also support staffing requirements in other locations depending
              on client needs.
            </p>
          </Section>

          <Section title="How Our Temporary Staffing Works">
            <p>
              Once a requirement is received, we begin sourcing immediately,
              identifying suitable workers and submitting candidates
              efficiently to minimise disruption and maintain productivity.
            </p>
          </Section>

          <Section title="Permanent and Contract Recruitment">
            <p>
              We also provide{" "}
              <Link
                href="/permanent-staff"
                className="text-primary hover:underline font-medium"
              >
                permanent recruitment services
              </Link>{" "}
              and{" "}
              <Link
                href="/contract-staff"
                className="text-primary hover:underline font-medium"
              >
                contract staffing solutions
              </Link>{" "}
              depending on workforce requirements.
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
            <h2 className="font-sans font-semibold tracking-[-0.3px] text-white leading-[1.2] mb-6">
              Need Temporary Staff?
            </h2>
            <p className="text-foreground/70 mb-8 max-w-2xl mx-auto">
              If you require temporary staff across any sector, speak to our
              team to discuss your requirements. We respond quickly and supply
              workers without unnecessary delays.
            </p>
            <a href="/ai-hire-now" className="btn-ai-cta">
              Request Temporary Staff
            </a>
          </motion.div>
        </div>
      </main>

      <Footer />
      <FloatingElements />
    </div>
  );
}