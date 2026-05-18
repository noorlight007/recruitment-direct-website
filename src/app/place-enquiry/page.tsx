"use client";

import { motion } from "framer-motion";
import { Phone, MessageCircle, FileText, Sparkles, CheckCircle2 } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingElements from "@/components/FloatingElements";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
};

const cards = [
  {
    title: "Call",
    description: "Speak to our team",
    highlight: "Immediate response",
    href: "tel:01324613198",
    button: "Call",
    icon: Phone,
  },
  {
    title: "WhatsApp",
    description: "Send a quick message",
    highlight: "Fast response",
    href: "https://wa.me/447590882626",
    button: "WhatsApp",
    icon: MessageCircle,
    external: true,
  },
  {
    title: "Place Enquiry",
    description: "Send a quick enquiry",
    list: ["Name", "Company", "Phone", "Message"],
    href: "/contact-form",
    button: "Place Enquiry",
    icon: FileText,
  },
];

function Hero() {
  return (
    <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 overflow-hidden bg-background">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-primary/10" />
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full bg-primary/5 blur-3xl" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 text-center">
        

        <motion.h1
          {...fadeUp}
          transition={{ delay: 0.05 }}
            className="font-sans font-heading font-semibold text-foreground tracking-[-0.3px] text-white leading-[1.2] mb-6 mt-4"
        >
          Place Enquiry
        </motion.h1>

        <motion.p
          {...fadeUp}
          transition={{ delay: 0.1 }}
          className="subtitle text-foreground/70 max-w-2xl mx-auto"
        >
          Choose how you want to contact us
        </motion.p>
      </div>
    </section>
  );
}

function EnquiryCards() {
  return (
    <section className="py-10 md:py-14 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-3 gap-6">
          {cards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.45 }}
              whileHover={{ y: -6 }}
              className="group card-hover rounded-3xl border border-primary/10 bg-background p-7 flex flex-col justify-between relative overflow-hidden"
            >
              <div
                className="absolute inset-x-0 top-0 h-[2px] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"
                style={{ background: "var(--gradient-metallic)" }}
              />
              <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

              <div className="relative">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-all duration-300">
                  <card.icon className="w-7 h-7 text-primary" />
                </div>

                <h2 className="text-2xl font-heading font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {card.title}
                </h2>

                <p className="text-foreground/70 leading-relaxed mb-3">
                  {card.description}
                </p>

                {card.highlight && (
                  <div className="font-semibold text-primary mb-2">
                    {card.highlight}
                  </div>
                )}

                {card.list && (
                  <ul className="mt-4 space-y-2">
                    {card.list.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2 text-foreground/75"
                      >
                        <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              <a
                href={card.href}
                target={card.external ? "_blank" : undefined}
                rel={card.external ? "noopener noreferrer" : undefined}
                className="btn-metallic mt-6 text-center"
              >
                {card.button}
              </a>
            </motion.div>
          ))}
        </div>

        <motion.p
          {...fadeUp}
          transition={{ delay: 0.2 }}
          className="text-center text-foreground/55 mt-10"
        >
          Fast response. Reliable staff. UK-wide.
        </motion.p>
      </div>
    </section>
  );
}

export default function PlaceEnquiryPage() {
  return (
    <div className="min-h-screen bg-background">
      <FloatingElements />
      <Navbar />
      <Hero />
      <EnquiryCards />
      <Footer />
    </div>
  );
}