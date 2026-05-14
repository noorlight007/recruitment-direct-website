"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingElements from "@/components/FloatingElements";
import PremiumSplitSection from "@/components/premium";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
};

function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-24 bg-background overflow-hidden">
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full opacity-[0.04]"
        style={{
          background:
            "radial-gradient(circle, hsl(var(--primary)), transparent)",
        }}
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10 text-center">
        <motion.div {...fadeUp} className="max-w-4xl mx-auto">
          <h1 className="font-sans text-[36px] md:text-[40px] font-semibold tracking-[-0.3px] text-foreground leading-[1.2] mb-3">
            AI Hire Now – Submit Staffing Requirements 24/7
          </h1>

          <p className="text-sm text-foreground/50 mb-6">
            AI-Powered, Consultant Verified
          </p>

          <p className="text-[15px] md:text-base text-foreground/70 leading-7 mb-4 max-w-3xl mx-auto">
            Existing clients can submit staffing requirements 24/7, and new
            clients can start using AI Hire Now once terms and rates are agreed.
          </p>

          <p className="text-[15px] md:text-base text-foreground/70 leading-7 mb-8 max-w-3xl mx-auto">
            Submit jobs instantly and trigger immediate recruitment activity
            without delays. Your requirement goes directly into our system,
            allowing rapid processing and faster applicant generation.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="/ai-hire-now-form"
              className="w-full sm:w-auto"
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "16px 26px",
                borderRadius: "999px",
                color: "#FFFFFF",
                fontSize: "15px",
                fontWeight: "600",
                letterSpacing: "0.3px",
                cursor: "pointer",
                position: "relative",
                overflow: "hidden",
                transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                background:
                  "linear-gradient(180deg, #0b1220 0%, #050816 100%) padding-box, linear-gradient(135deg, #00D5FF 0%, #009DFF 35%, #006BFF 70%, #003CFF 100%) border-box",
                border: "1px solid transparent",
                // boxShadow:
                //   "0 0 35px rgba(0, 149, 255, 0.8), 0 0 70px rgba(0, 149, 255, 0.4)",
                gap: "10px",
                whiteSpace: "nowrap",
                textDecoration: "none",
                minWidth: "180px",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-3px)";
                e.currentTarget.style.filter = "brightness(1.15)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.filter = "brightness(1)";
              }}
            >
              AI Hire Now
            </a>

            <a
              href="/contact"
              className="btn btn-outline w-full sm:w-auto"
              style={{ padding: "16px 26px" }}
            >
              Request Access
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function SectionBlock({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="py-10 md:py-12 bg-background">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <motion.div {...fadeUp} className="max-w-4xl mx-auto">
          <h2 className="text-[24px] font-semibold text-foreground mb-4 text-center">
            {title}
          </h2>
          <div className="space-y-3 text-[15px] md:text-base text-foreground/70 leading-7 max-w-3xl mx-auto text-center">
            {children}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function ProcessFlow({ items }: { items: string[] }) {
  return (
    <ul className="space-y-3 mt-4 max-w-2xl mx-auto text-left">
      {items.map((item) => (
        <li
          key={item}
          className="flex items-start gap-3 text-foreground/70"
        >
          <span className="mt-2 h-2 w-2 rounded-full bg-primary flex-shrink-0" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function FinalCTA() {
  return (
    <section id="ai-hire-cta" className="py-16 md:py-20 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <motion.h2
          {...fadeUp}
          className="font-sans text-[40px] font-semibold tracking-[-0.3px] text-gray-900 leading-[1.2] mb-6"
        >
          Start Using AI Hire Now
        </motion.h2>

        <motion.p
          {...fadeUp}
          transition={{ delay: 0.1 }}
          className="text-[15px] md:text-base text-foreground/70 leading-7 max-w-2xl mx-auto mb-8"
        >
          Existing clients can submit requirements immediately and trigger
          recruitment activity without delay. New clients can request access
          once onboarding is complete.
        </motion.p>

        <motion.div
          {...fadeUp}
          transition={{ delay: 0.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3"
        >
          <a
            href="/ai-hire-now-form"
            className="w-full sm:w-auto"
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "16px 26px",
              borderRadius: "999px",
              color: "#FFFFFF",
              fontSize: "15px",
              fontWeight: "600",
              letterSpacing: "0.3px",
              cursor: "pointer",
              position: "relative",
              overflow: "hidden",
              transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
              background:
                "linear-gradient(180deg, #0b1220 0%, #050816 100%) padding-box, linear-gradient(135deg, #00D5FF 0%, #009DFF 35%, #006BFF 70%, #003CFF 100%) border-box",
              border: "1px solid transparent",
              // boxShadow:
              //   "0 0 35px rgba(0, 149, 255, 0.8), 0 0 70px rgba(0, 149, 255, 0.4)",
              gap: "10px",
              whiteSpace: "nowrap",
              textDecoration: "none",
              minWidth: "180px",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-3px)";
              e.currentTarget.style.filter = "brightness(1.15)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.filter = "brightness(1)";
            }}
          >
            AI Hire Now
          </a>
          <a
            href="/contact"
            className="btn btn-outline w-full sm:w-auto"
            style={{ padding: "16px 26px", minWidth: "180px" }}
          >
            Request Access
          </a>
        </motion.div>
      </div>
    </section>
  );
}

export default function AIHireNowPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main>
        <Hero />

        <SectionBlock title="Instant Recruitment, No Delays">
          <p>
            Submit your requirement instantly and trigger immediate recruitment
            activity without waiting for manual follow-up.
          </p>

          <ProcessFlow
            items={[
              "AI candidate skill search begins",
              "Job advert is created",
              "Consultant reviews and approves",
              "Vacancy is published across job boards, website and social media",
              "Applicants are generated quickly",
            ]}
          />
        </SectionBlock>

        <PremiumSplitSection
          title="Why AI Hire Now Works"
          subtitle="A faster, cleaner and more responsive way for clients to trigger recruitment activity without unnecessary delays."
          items={[
            {
              title: "Direct Submission",
              description:
                "Your requirement goes straight into the system, removing delays caused by emails, calls or manual follow-up.",
            },
            {
              title: "Immediate Processing",
              description:
                "As soon as a role is submitted, recruitment activity begins so your vacancy can move faster.",
            },
            {
              title: "Consultant Oversight",
              description:
                "Automation supports speed, while consultant review ensures quality, relevance and control.",
            },
            {
              title: "Faster Applicant Flow",
              description:
                "Jobs can be prepared and pushed out quickly, helping generate interest and applicants sooner.",
            },
          ]}
        />

        <SectionBlock title="Built for 24/7 Client Hiring">
          <p>
            AI Hire Now supports flexible, around-the-clock hiring for existing
            clients and new clients once terms and rates are agreed.
          </p>
          <p>
            Place jobs when it suits your business and trigger recruitment
            instantly.
          </p>
        </SectionBlock>

        <SectionBlock title="AI Recruitment Software for Instant Hiring">
          <p>
            AI Hire Now is an AI recruitment software solution used across
            Scotland and the UK to accelerate hiring and improve response times.
          </p>
        </SectionBlock>

        <FinalCTA />
      </main>

      <Footer />
      <FloatingElements />
    </div>
  );
}