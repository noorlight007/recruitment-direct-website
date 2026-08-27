"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingElements from "@/components/FloatingElements";
import {
  HardHat,
  Wrench,
  Zap,
  Truck,
  Heart,
  GraduationCap,
  Monitor,
  Briefcase,
  Building2,
  Coffee,
  Sparkles,
} from "lucide-react";
import { getSectorHref } from "@/lib/sectors";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
};

const sectorsList = [
  {
    name: "Construction",
    slug: "construction",
    icon: HardHat,
    description: "Sourcing skilled trades, plant operators, site management, and labourers for major commercial and residential projects.",
  },
  {
    name: "Engineering",
    slug: "engineering",
    icon: Wrench,
    description: "Technical, mechanical, electrical and structural personnel for manufacturing, design, and infrastructure installations.",
  },
  {
    name: "Renewables & Energy",
    slug: "renewable-energy",
    icon: Zap,
    description: "Staffing solutions across clean energy sectors including wind, solar, waste-to-energy, and sustainable grid operations.",
  },
  {
    name: "Logistics & Driving",
    slug: "logistics",
    icon: Truck,
    description: "HGV Drivers (Class 1 & 2), warehouse operatives, transport coordinators, and logistics management.",
  },
  {
    name: "Healthcare & Medical",
    slug: "healthcare",
    icon: Heart,
    description: "Qualified nursing staff, care assistants, support workers, and residential home managers.",
  },
  {
    name: "Education",
    slug: "education",
    icon: GraduationCap,
    description: "Supply teachers, early years educators, SEN specialists, and education support personnel.",
  },
  {
    name: "IT & Technology",
    slug: "it-technology",
    icon: Monitor,
    description: "Software developers, systems administrators, IT support technicians, and business technology experts.",
  },
  {
    name: "Commercial & Office",
    slug: "commercial-office",
    icon: Briefcase,
    description: "Admin support, customer service advisers, sales executives, and corporate office management.",
  },
  {
    name: "Facilities Management",
    slug: "facilities-management",
    icon: Building2,
    description: "Cleaners, security personnel, maintenance engineers, and multi-site facilities managers.",
  },
  {
    name: "Hospitality & Catering",
    slug: "hospitality",
    icon: Coffee,
    description: "Chefs, kitchen staff, front-of-house teams, event crew, and hospitality management.",
  },
];

export default function SectorsPageClient() {
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
              Industry-Specific Recruitment Solutions
            </span>
          </motion.div>

          <motion.h1
            {...fadeUp}
            transition={{ delay: 0.05 }}
            className="font-sans font-heading font-semibold text-foreground tracking-[-0.3px] text-white leading-[1.2] mb-6"
          >
            Recruitment Sectors We Support
          </motion.h1>

          <motion.p
            {...fadeUp}
            transition={{ delay: 0.1 }}
            className="text-white/60 text-lg md:text-xl max-w-2xl mx-auto"
          >
            Supplying temporary, contract and permanent personnel across ten core industries throughout Scotland and the wider UK.
          </motion.p>
        </div>
      </section>

      {/* Directory Grid */}
      <section className="py-12 md:py-16 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {sectorsList.map((sector, i) => (
              <motion.div
                key={sector.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05, duration: 0.45 }}
                className="card-hover p-6 sm:p-8 flex flex-col justify-between rounded-2xl border border-white/10 bg-white/5 h-full"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                    <sector.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{sector.name}</h3>
                  <p className="text-white/60 text-sm leading-relaxed mb-6">
                    {sector.description}
                  </p>
                </div>

                {getSectorHref(sector.slug) ? (
                  <Link
                    href={getSectorHref(sector.slug)!}
                    className="inline-flex items-center text-sm font-semibold text-[#D4AF37] hover:text-white transition-colors"
                  >
                    View Sector Services &rarr;
                  </Link>
                ) : (
                  <span className="text-white/45 text-sm font-semibold italic">
                    Coming Soon
                  </span>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 bg-background border-t border-white/5">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <motion.div
            {...fadeUp}
            className="relative overflow-hidden rounded-3xl p-10 md:p-14 text-center bg-gradient-to-r from-blue-950 to-indigo-950 border border-white/10"
          >
            <div className="relative">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
                Need staff for your sector?
              </h2>
              <p className="text-white/70 text-base md:text-lg max-w-2xl mx-auto mb-8">
                Connect with our dedicated recruitment consultants to secure qualified personnel today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="btn-ai-cta px-8 py-3 rounded-xl font-bold text-center">
                  Contact Us
                </Link>
                <Link href="/locations" className="bg-white/10 text-white hover:bg-white/20 transition-all px-8 py-3 rounded-xl font-bold text-center border border-white/10">
                  Find Local Branch
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
