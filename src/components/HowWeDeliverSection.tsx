"use client";

import { motion } from "framer-motion";
import { ShieldCheck, TrendingUp, Zap, UserCheck } from "lucide-react";

const cards = [
  {
    icon: ShieldCheck,
    title: "Delivery You Can Rely On",
    desc: "Consistent results across frameworks, large contracts and growing businesses.",
  },
  {
    icon: TrendingUp,
    title: "Built for Demand",
    desc: "Whether one role or ongoing volume, we scale to your requirements.",
  },
  {
    icon: Zap,
    title: "Speed That Wins",
    desc: "Fast turnaround without compromising quality or compliance.",
  },
  {
    icon: UserCheck,
    title: "Controlled by Experts",
    desc: "Every applicant reviewed by experienced consultants before submission.",
  },
];

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
};

export default function HowWeDeliverSection() {
  return (
    <section className="relative white-section overflow-hidden py-24">
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 text-center">
        <motion.h2 {...fadeUp} className="font-sans text-[40px] font-semibold tracking-[-0.3px] leading-[1.2] mb-4">
          How We Deliver to Clients
        </motion.h2>

        <motion.p
          {...fadeUp}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="max-w-2xl mx-auto mb-14"
        >
          Built to support high-demand environments, delivering consistent staffing solutions across public sector
          frameworks, private clients and growing businesses across the UK.
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.45 }}
              whileHover={{ y: -6 }}
              className="group relative card-hover p-7 text-left overflow-hidden rounded-2xl border border-primary/10 bg-background transition-all duration-300"
            >
              {/* top animated line */}
              <div
                className="absolute inset-x-0 top-0 h-[2px] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"
                style={{ background: "var(--gradient-metallic)" }}
              />

              {/* icon */}
              <div className="card-icon mb-5">
                <card.icon />
              </div>

              {/* content */}
              <h3 className="font-heading font-semibold text-foreground text-lg mb-2 group-hover:text-primary transition-colors">
                {card.title}
              </h3>

              <p className="text-sm text-foreground/65 leading-relaxed">
                {card.desc}
              </p>

              {/* index indicator */}
              <div className="mt-6 flex items-center gap-2 text-xs font-semibold text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="h-px w-6 bg-primary" />
                <span className="uppercase tracking-wider">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>

              {/* soft hover glow */}
              <div className="absolute inset-0 rounded-2xl bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}