"use client";

import { motion } from "framer-motion";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
};

type SplitItem = {
  title: string;
  description: string;
};

export default function PremiumSplitSection({
  title,
  subtitle,
  items,
}: {
  title: string;
  subtitle?: string;
  items: SplitItem[];
}) {
  const leftItems = items.slice(0, 2);
  const rightItems = items.slice(2, 4);

  return (
    <section className="relative bg-background overflow-hidden">
      {/* soft ambient background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-primary/5 blur-3xl rounded-full" />
        <div className="absolute top-10 right-0 w-72 h-72 bg-primary/5 blur-3xl rounded-full" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div {...fadeUp} className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="font-semibold tracking-tight text-foreground mb-4">
            {title}
          </h2>
          {subtitle && (
            <p className="subtitle text-foreground/70">
              {subtitle}
            </p>
          )}
        </motion.div>

        {/* mobile stacked version */}
        <div className="grid gap-5 md:hidden">
          {items.map((item, i) => (
            <motion.div
              key={item.title}
              {...fadeUp}
              transition={{ delay: i * 0.08 }}
              className="group relative rounded-3xl border border-primary/15 bg-background/80 backdrop-blur-xl p-6 shadow-[0_10px_40px_rgba(0,0,0,0.04)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(0,0,0,0.08)]"
            >
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/8 via-transparent to-primary/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="relative">
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary font-semibold">
                    {i + 1}
                  </div>
                  <h3 className="font-semibold text-foreground">
                    {item.title}
                  </h3>
                </div>
                <p className="text-sm md:text-base leading-7 text-foreground/70">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* desktop split tree / ladder layout */}
        <div className="relative hidden md:grid md:grid-cols-[1fr_120px_1fr] gap-8 items-center">
          {/* center spine */}
          <div className="absolute left-1/2 top-0 -translate-x-1/2 h-full w-px bg-gradient-to-b from-primary/10 via-primary/30 to-primary/10" />

          {/* center glow nodes */}
          <div className="pointer-events-none absolute left-1/2 top-[22%] -translate-x-1/2">
            <div className="h-4 w-4 rounded-full bg-primary shadow-[0_0_25px_hsla(var(--primary),0.6)]" />
          </div>
          <div className="pointer-events-none absolute left-1/2 top-[50%] -translate-x-1/2 -translate-y-1/2">
            <div className="h-5 w-5 rounded-full border-4 border-background bg-primary shadow-[0_0_30px_hsla(var(--primary),0.55)]" />
          </div>
          <div className="pointer-events-none absolute left-1/2 bottom-[22%] -translate-x-1/2">
            <div className="h-4 w-4 rounded-full bg-primary shadow-[0_0_25px_hsla(var(--primary),0.6)]" />
          </div>

          {/* left column */}
          <div className="space-y-10">
            {leftItems.map((item, i) => (
              <motion.div
                key={item.title}
                {...fadeUp}
                transition={{ delay: i * 0.1 }}
                className="relative flex justify-end"
              >
                {/* connector line */}
                <div className="absolute right-[-40px] top-1/2 h-px w-10 -translate-y-1/2 bg-gradient-to-r from-primary/30 to-primary/10" />

                <div className="group relative max-w-md rounded-3xl border border-primary/15 bg-background/80 backdrop-blur-xl p-7 text-right shadow-[0_10px_40px_rgba(0,0,0,0.04)] transition-all duration-300 hover:-translate-y-1.5 hover:scale-[1.01] hover:shadow-[0_20px_70px_rgba(0,0,0,0.08)]">
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <div className="relative">
                    <div className="mb-4 flex items-center justify-end gap-3">
                      <h3 className="font-semibold tracking-tight text-foreground">
                        {item.title}
                      </h3>
                      <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/10 text-primary font-semibold shadow-inner">
                        {i + 1}
                      </div>
                    </div>
                    <p className="text-[15px] leading-7 text-foreground/70">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* center visual */}
          <div className="relative h-full flex items-center justify-center">
            <div className="relative flex h-24 w-24 items-center justify-center rounded-full border border-primary/20 bg-background/90 backdrop-blur-xl shadow-[0_10px_50px_rgba(0,0,0,0.06)]">
              <div className="absolute inset-0 rounded-full bg-primary/10 blur-2xl" />
              <div className="relative h-12 w-12 rounded-full bg-primary/15 flex items-center justify-center">
                <div className="h-4 w-4 rounded-full bg-primary" />
              </div>
            </div>
          </div>

          {/* right column */}
          <div className="space-y-10">
            {rightItems.map((item, i) => (
              <motion.div
                key={item.title}
                {...fadeUp}
                transition={{ delay: (i + 2) * 0.1 }}
                className="relative flex justify-start"
              >
                {/* connector line */}
                <div className="absolute left-[-40px] top-1/2 h-px w-10 -translate-y-1/2 bg-gradient-to-l from-primary/30 to-primary/10" />

                <div className="group relative max-w-md rounded-3xl border border-primary/15 bg-background/80 backdrop-blur-xl p-7 text-left shadow-[0_10px_40px_rgba(0,0,0,0.04)] transition-all duration-300 hover:-translate-y-1.5 hover:scale-[1.01] hover:shadow-[0_20px_70px_rgba(0,0,0,0.08)]">
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-bl from-primary/10 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <div className="relative">
                    <div className="mb-4 flex items-center gap-3">
                      <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/10 text-primary font-semibold shadow-inner">
                        {i + 3}
                      </div>
                      <h3 className="font-semibold tracking-tight text-foreground">
                        {item.title}
                      </h3>
                    </div>
                    <p className="leading-7 text-foreground/70">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}