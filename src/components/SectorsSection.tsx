"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  HardHat,
  Truck,
  Wrench,
  Zap,
  Briefcase,
  Heart,
  GraduationCap,
  Monitor,
} from "lucide-react";

const sectors = [
  { name: "Construction", icon: HardHat, href: "/sectors/construction" },
  { name: "Engineering", icon: Wrench, href: "/sectors/engineering" },
  { name: "Renewables", icon: Zap, href: "/sectors/renewables" },
  { name: "Logistics", icon: Truck, href: "/sectors/logistics" },
  { name: "Healthcare", icon: Heart, href: "/sectors/healthcare" },
  { name: "Education", icon: GraduationCap, href: "/sectors/education" },
  { name: "IT & Tech", icon: Monitor, href: "/sectors/it-tech" },
  { name: "Commercial", icon: Briefcase, href: "/sectors/commercial" },
];

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
};

export default function SectorsSection() {
  return (
    <section
      id="sectors"
      className="section-tight relative bg-background overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full bg-primary/5 blur-3xl" />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 text-center">
        <motion.h2 {...fadeUp} className="font-sans text-[40px] font-semibold tracking-[-0.3px] text-white leading-[1.2] mb-4">
          Industries We Support
        </motion.h2>

        <motion.p
          {...fadeUp}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="text-foreground/70 max-w-2xl mx-auto mb-14"
        >
          Supporting workforce requirements across key industries with
          specialist recruitment delivery.
        </motion.p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {sectors.map((sector, i) => (
            <Link
              key={sector.name}
              href={sector.href || "#"}
              className="block"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07, duration: 0.45 }}
                whileHover={{ y: -6 }}
                className="card-hover p-8 flex flex-col items-center gap-4 cursor-pointer group rounded-2xl border border-primary/10 bg-background h-full"
              >
                <div className="card-icon">
                  <sector.icon />
                </div>

                <h3 className="font-heading font-semibold text-foreground group-hover:text-primary transition-colors text-center">
                  {sector.name}
                </h3>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}