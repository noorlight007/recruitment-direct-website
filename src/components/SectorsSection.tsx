"use client";

import { motion } from "framer-motion";
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
  { name: "Construction", icon: HardHat },
  { name: "Engineering", icon: Wrench },
  { name: "Renewables", icon: Zap },
  { name: "Logistics", icon: Truck },
  { name: "Healthcare", icon: Heart },
  { name: "Education", icon: GraduationCap },
  { name: "IT & Tech", icon: Monitor },
  { name: "Commercial", icon: Briefcase },
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
      className="relative py-20 bg-background overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full bg-primary/5 blur-3xl" />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 text-center">
        <motion.h2 {...fadeUp} className="font-sans text-[40px] font-semibold tracking-[-0.3px] text-gray-900 leading-[1.2] mb-4">
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
            <motion.div
              key={sector.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07, duration: 0.45 }}
              whileHover={{ y: -6 }}
              className="card-hover p-8 flex flex-col items-center gap-4 cursor-pointer group rounded-2xl border border-primary/10 bg-background"
            >
              <div
                className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-all duration-300"
                style={{
                  boxShadow: "0 6px 20px hsl(var(--primary) / 0.08)",
                }}
              >
                <sector.icon className="w-8 h-8 text-primary" />
              </div>

              <h3 className="font-heading font-semibold text-foreground group-hover:text-primary transition-colors">
                {sector.name}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}