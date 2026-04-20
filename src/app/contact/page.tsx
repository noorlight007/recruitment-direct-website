"use client";

import { motion } from "framer-motion";
import {
  Phone,
  MessageCircle,
  MapPin,
  Clock3,
  Sparkles,
  Send,
  Building2,
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

function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-24 overflow-hidden bg-background">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-primary/10" />
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full bg-primary/5 blur-3xl" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 text-center">
        <motion.div
          {...fadeUp}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6"
        >
          <Sparkles className="w-4 h-4 text-primary" />
          <span className="text-sm font-semibold text-primary">Contact Us</span>
        </motion.div>

        <motion.h1
          {...fadeUp}
          transition={{ delay: 0.05 }}
          className="font-sans text-[40px] font-heading font-semibold text-foreground tracking-[-0.3px] text-gray-900 leading-[1.2] mb-6"
        >
          Get Staff Fast. Speak to Us Now.
        </motion.h1>

        <motion.p
          {...fadeUp}
          transition={{ delay: 0.1 }}
          className="text-lg md:text-xl text-foreground/70 max-w-3xl mx-auto leading-relaxed"
        >
          Reach out to Recruitment Direct for fast, reliable staffing support
          across Scotland and the UK.
        </motion.p>
      </div>
    </section>
  );
}

function ContactInfoPanel() {
  const items = [
    {
      icon: Phone,
      title: "Call",
      text: "Speak directly with our team for an immediate response.",
      href: "tel:01324613198",
      label: "01324 613198",
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      text: "Send a quick message and we will respond fast.",
      href: "https://wa.me/447590882626",
      label: "07590 882626",
    },
  ];

  return (
    <motion.div
      {...fadeUp}
      className="card-hover relative overflow-hidden rounded-3xl p-8 md:p-10 h-full"
    >
      <div className="absolute bottom-[-80px] right-[-70px] w-64 h-64 rounded-full bg-primary/10 blur-3xl pointer-events-none" />

      <div className="relative">
        <h2 className="font-sans text-[30px] font-heading font-semibold text-foreground tracking-[-0.3px] text-gray-900 leading-[1.2] mb-3">
          Contact Recruitment Direct
        </h2>
        <p className="text-foreground/70 text-base md:text-lg leading-relaxed mb-8">
          Choose the best way to connect with our team.
        </p>

        <div className="h-px bg-gradient-to-r from-border to-transparent mb-8" />

        <div className="space-y-8">
          {items.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="flex gap-4 items-start"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 border border-primary/15 flex items-center justify-center flex-shrink-0 shadow-[0_8px_20px_hsl(var(--primary)/0.12)]">
                <item.icon className="w-5 h-5 text-primary" />
              </div>

              <div>
                <h3 className="text-xl font-heading font-semibold text-foreground mb-1">
                  {item.title}
                </h3>
                <p className="text-foreground/70 mb-2 leading-relaxed">
                  {item.text}
                </p>
                <a
                  href={item.href}
                  target={item.href.startsWith("https") ? "_blank" : undefined}
                  rel={
                    item.href.startsWith("https")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className="text-lg font-bold text-foreground hover:text-primary transition-colors"
                >
                  {item.label}
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="h-px bg-gradient-to-r from-border to-transparent my-8" />

        <div className="space-y-4">
          <h2 className="font-sans text-[30px] font-heading font-semibold text-foreground tracking-[-0.3px] text-gray-900 leading-[1.2]">
            Office Location
          </h2>

          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
              <Building2 className="w-5 h-5 text-primary" />
            </div>
            <p className="text-foreground/70 text-base md:text-lg leading-relaxed">
              Recruitment Direct UK Ltd
              <br />
              Herkimer House
              <br />
              Mill Road Industrial Estate
              <br />
              Linlithgow
              <br />
              EH49 7SF
            </p>
          </div>

          <div className="flex items-center gap-4 pt-2">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
              <Clock3 className="w-5 h-5 text-primary" />
            </div>
            <p className="text-foreground/70 text-base md:text-lg">
              <strong className="text-foreground">Mon – Fri:</strong> 8:30am –
              5:30pm
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function ActionAndFormPanel() {
  return (
    <motion.div
      {...fadeUp}
      transition={{ delay: 0.08, duration: 0.5 }}
      className="card-hover relative overflow-hidden rounded-3xl p-8 md:p-10 h-full"
    >
      <div className="absolute bottom-[-80px] right-[-70px] w-64 h-64 rounded-full bg-primary/10 blur-3xl pointer-events-none" />

      <div className="relative">
        <div className="grid gap-5 mb-8">
          <div className="rounded-2xl border border-border/50 bg-background p-6 shadow-sm">
            <h3 className="font-sans text-[30px] font-heading font-semibold text-foreground tracking-[-0.3px] text-gray-900 leading-[1.2] mb-2">
              Call Now
            </h3>
            <p className="text-foreground/70 mb-5 leading-relaxed">
              Speak directly with our team without delay.
            </p>
            <a href="tel:01324613198" className="btn-metallic w-full text-center">
              Call
            </a>
          </div>

          <div className="rounded-2xl border border-border/50 bg-background p-6 shadow-sm">
            <h3 className="font-sans text-[30px] font-heading font-semibold text-foreground tracking-[-0.3px] text-gray-900 leading-[1.2] mb-2">
              WhatsApp
            </h3>
            <p className="text-foreground/70 mb-5 leading-relaxed">
              Send a quick message for a fast response.
            </p>
            <a
              href="https://wa.me/447590882626"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-full min-h-[54px] px-6 rounded-xl border border-primary/25 text-primary font-semibold transition-all duration-200 hover:bg-primary hover:text-primary-foreground"
            >
              WhatsApp
            </a>
          </div>
        </div>

        <div className="rounded-2xl overflow-hidden border border-primary/10 shadow-[0_14px_34px_rgba(15,23,42,0.08)] mb-8">
          <iframe
            src="https://www.google.com/maps?q=Herkimer%20House%20Linlithgow&output=embed"
            loading="lazy"
            className="w-full min-h-[320px] border-0"
            title="Recruitment Direct UK Ltd location"
          />
        </div>

        <form className="space-y-5">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="flex flex-col">
              <label
                htmlFor="name"
                className="mb-2 text-sm font-semibold text-foreground"
              >
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Your name"
                className="w-full rounded-xl border border-border bg-background px-4 py-3.5 text-foreground outline-none transition-all focus:border-primary focus:ring-4 focus:ring-primary/10"
              />
            </div>

            <div className="flex flex-col">
              <label
                htmlFor="company"
                className="mb-2 text-sm font-semibold text-foreground"
              >
                Company
              </label>
              <input
                id="company"
                name="company"
                type="text"
                placeholder="Company name"
                className="w-full rounded-xl border border-border bg-background px-4 py-3.5 text-foreground outline-none transition-all focus:border-primary focus:ring-4 focus:ring-primary/10"
              />
            </div>

            <div className="flex flex-col">
              <label
                htmlFor="phone"
                className="mb-2 text-sm font-semibold text-foreground"
              >
                Phone
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                placeholder="Phone number"
                className="w-full rounded-xl border border-border bg-background px-4 py-3.5 text-foreground outline-none transition-all focus:border-primary focus:ring-4 focus:ring-primary/10"
              />
            </div>

            <div className="flex flex-col">
              <label
                htmlFor="email"
                className="mb-2 text-sm font-semibold text-foreground"
              >
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="Email address"
                className="w-full rounded-xl border border-border bg-background px-4 py-3.5 text-foreground outline-none transition-all focus:border-primary focus:ring-4 focus:ring-primary/10"
              />
            </div>

            <div className="flex flex-col md:col-span-2">
              <label
                htmlFor="message"
                className="mb-2 text-sm font-semibold text-foreground"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                placeholder="Tell us how we can help"
                className="w-full min-h-[150px] rounded-xl border border-border bg-background px-4 py-3.5 text-foreground outline-none transition-all focus:border-primary focus:ring-4 focus:ring-primary/10 resize-y"
              />
            </div>
          </div>

          <div className="pt-1">
            <button type="submit" className="btn-metallic w-full">
              Submit Enquiry
            </button>
          </div>

          <p className="text-sm text-foreground/55 leading-relaxed">
            Complete the form and our team will respond as quickly as possible.
          </p>
        </form>
      </div>
    </motion.div>
  );
}

function BottomCTA() {
  return (
    <section className="py-16 md:py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          {...fadeUp}
          className="relative overflow-hidden rounded-3xl p-10 md:p-14"
          style={{
            background: "var(--gradient-metallic)",
            boxShadow: "var(--glow-blue-strong)",
          }}
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.14),transparent_50%)]" />

          <div className="relative flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
            <div className="max-w-3xl">
              <h2 className="font-sans text-[40px] font-heading font-semibold text-foreground tracking-[-0.3px] text-gray-900 leading-[1.2] mb-3 text-primary-foreground">
                Speak to Recruitment Direct and secure staff without delay.
              </h2>
              <p className="text-primary-foreground/90 text-lg leading-relaxed">
                Contact us now for fast, effective staffing support across
                Scotland and the UK.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 lg:min-w-fit">
              <a
                href="/place-enquiry"
                className="inline-flex items-center justify-center min-h-[52px] px-6 rounded-xl bg-white text-primary font-bold hover:bg-white/95 transition-all"
              >
                Contact Us
              </a>
              <a
                href="tel:01324613198"
                className="inline-flex items-center justify-center min-h-[52px] px-6 rounded-xl border border-white/30 text-white font-semibold hover:bg-white/10 transition-all"
              >
                Call Now
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
      <FloatingElements />
      <Navbar />
      <Hero />

      <main className="pb-6">
        <section className="py-6 md:py-10 bg-background">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="grid lg:grid-cols-[1.05fr_1.15fr] gap-7 items-stretch">
              <ContactInfoPanel />
              <ActionAndFormPanel />
            </div>
          </div>
        </section>
      </main>

      <BottomCTA />
      <Footer />
    </div>
  );
}