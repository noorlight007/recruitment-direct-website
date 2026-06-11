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
    <section className="relative pt-10 pb-20 md:pt-40 md:pb-24 bg-background overflow-hidden">
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full opacity-[0.04]"
        style={{
          background:
            "radial-gradient(circle, hsl(var(--primary)), transparent)",
        }}
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10 text-center">
        <motion.div {...fadeUp} className="max-w-4xl mx-auto">
          <h1 className="font-sans font-semibold tracking-[-0.3px] text-foreground leading-[1.2] mb-3">
            AI Hire Now
          </h1>

          <p className="text-xl md:text-2xl text-primary font-semibold mb-6">
            Submit Staffing Requirements 24/7
          </p>

          <p className="text-[15px] md:text-base text-foreground/70 leading-7 mb-4 max-w-3xl mx-auto">
            AI Hire Now is Recruitment Direct UK Ltd’s 24/7 staffing request workflow, integrated with our CRM.
          </p>

          <p className="text-[15px] md:text-base text-foreground/70 leading-7 mb-4 max-w-3xl mx-auto">
            It gives existing clients a faster way to order staff online at any time, while allowing new clients to submit staffing requirements and request a quote through the same process.
          </p>

          <p className="text-[15px] md:text-base text-foreground/70 leading-7 mb-8 max-w-3xl mx-auto">
            Every AI Hire Now submission triggers AI Candidate Skill Search 24/7, helping suitable applicants be identified before consultant review.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-md mx-auto">
            <a
              href="/ai-hire-now-form?type=order"
              className="btn-ai-cta"
            >
              AI Hire Now
            </a>

            <a
              href="/ai-hire-now-form?type=quote"
              className="btn-ai-cta"
            >
              Request Quote
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
    <section className="py-10 md:py-12 bg-background border-t border-primary/5">
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
    <ul className="space-y-4 mt-6 max-w-xl mx-auto text-left">
      {items.map((item, index) => (
        <li
          key={index}
          className="flex items-start gap-4 text-foreground/80 text-base"
        >
          <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-sm">
            {index + 1}
          </div>
          <span className="pt-1">{item}</span>
        </li>
      ))}
    </ul>
  );
}

function ListBlock({ items }: { items: string[] }) {
  return (
    <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-4 max-w-2xl mx-auto text-left pl-4">
      {items.map((item) => (
        <li
          key={item}
          className="flex items-center gap-3 text-foreground/70"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function FinalCTA() {
  return (
    <section id="ai-hire-cta" className="py-16 md:py-20 bg-background border-t border-primary/5">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <motion.h2
          {...fadeUp}
          className="font-sans font-semibold tracking-[-0.3px] text-white leading-[1.2] mb-4"
        >
          Start the Process
        </motion.h2>

        <motion.p
          {...fadeUp}
          transition={{ delay: 0.1 }}
          className="text-[15px] md:text-base text-foreground/70 leading-7 max-w-2xl mx-auto mb-8"
        >
          Use AI Hire Now to submit your staffing requirement 24/7. Existing clients can order staff online. New clients can request a quote and our consultant team will confirm prices, terms, account setup and next steps.
        </motion.p>

        <motion.div
          {...fadeUp}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-md mx-auto"
        >
          <a
            href="/ai-hire-now-form?type=order"
            className="btn-ai-cta"
          >
            AI Hire Now
          </a>
          <a
            href="/ai-hire-now-form?type=quote"
            className="btn-ai-cta"
          >
            Request Quote
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

        <SectionBlock title="What Happens Inside AI Hire Now">
          <p className="max-w-3xl mx-auto mb-6 text-center">
            When a client opens AI Hire Now, they choose the correct route:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left max-w-3xl mx-auto">
            <div className="p-6 rounded-xl border border-primary/10 bg-primary/5">
              <h3 className="text-lg font-bold text-white mb-2">Existing Client – Order Now</h3>
              <p className="text-sm text-foreground/70 leading-relaxed">
                For existing clients who already work with Recruitment Direct UK Ltd and want to place a staff order.
                The order can include the role, location, start date, shift pattern, number of workers required, pay rate, required skills, tickets, licences, experience and any assignment details.
              </p>
            </div>
            <div className="p-6 rounded-xl border border-primary/10 bg-primary/5">
              <h3 className="text-lg font-bold text-white mb-2">New Client – Quote Request</h3>
              <p className="text-sm text-foreground/70 leading-relaxed">
                For new clients who want to submit a staffing requirement and request prices.
                Once received, our consultant team reviews the requirement and contacts the client to confirm prices, terms, account setup and next steps before recruitment activity or placement is confirmed.
              </p>
            </div>
          </div>
        </SectionBlock>

        <SectionBlock title="How the Workflow Works">
          <ProcessFlow
            items={[
              "AI Hire Now submitted",
              "Client selects Existing Client – Order Now or New Client – Quote Request",
              "JobAdder workflow is activated",
              "AI Candidate Skill Search triggers 24/7",
              "Suitable applicants are identified",
              "Consultant reviews matches and requirement",
              "Applicants are contacted, submitted or an advert is placed",
              "Placement is confirmed",
            ]}
          />
        </SectionBlock>

        <SectionBlock title="AI Candidate Skill Search">
          <p className="max-w-3xl mx-auto">
            AI Candidate Skill Search matches the staffing requirement against applicant information held within the recruitment workflow.
          </p>
          <p className="max-w-3xl mx-auto mt-2 font-medium">
            This can include:
          </p>
          <ListBlock
            items={[
              "Skills",
              "Experience",
              "Location",
              "Availability",
              "Tickets",
              "Licences",
              "Qualifications",
              "Previous role suitability",
            ]}
          />
          <p className="max-w-3xl mx-auto mt-4">
            This helps suitable applicants be identified earlier and gives consultants a faster starting point for review.
          </p>
        </SectionBlock>

        <SectionBlock title="Consultant Verified">
          <p className="max-w-3xl mx-auto">
            AI Hire Now supports speed, but Recruitment Direct remains consultant-led.
          </p>
          <p className="max-w-3xl mx-auto">
            Our consultants review the staffing requirement, check applicant matches, confirm suitability and decide the next step before applicants are submitted or placements are confirmed.
          </p>
          <p className="max-w-3xl mx-auto">
            For new clients, our consultants also confirm prices, terms and account setup before recruitment activity proceeds.
          </p>
        </SectionBlock>

        <SectionBlock title="Built for Temporary, Contract and Permanent Recruitment">
          <p className="max-w-3xl mx-auto">
            AI Hire Now supports temporary, contract and permanent staffing requirements.
          </p>
          <p className="max-w-3xl mx-auto">
            It can be used for urgent cover, shift requirements, project support, ongoing labour supply and permanent vacancy requirements.
          </p>
          <p className="max-w-3xl mx-auto">
            By connecting staffing requests directly into JobAdder and triggering AI Candidate Skill Search, AI Hire Now helps Recruitment Direct respond faster and prepare suitable applicants for consultant review.
          </p>
        </SectionBlock>

        <PremiumSplitSection
          title="Why AI Hire Now Works"
          subtitle="AI Hire Now creates a faster and cleaner recruitment workflow by connecting staff requirements directly to applicant matching and consultant review."
          items={[
            {
              title: "24/7 staff order capture",
              description: "Capture requirements around the clock, allowing teams to react outside of standard office hours.",
            },
            {
              title: "New client quote requests",
              description: "Unified entry point allows prospects to request quick rate sheets and pricing structures.",
            },
            {
              title: "Faster applicant identification",
              description: "Automation parses and matches attributes instantly to build initial shortlists.",
            },
            {
              title: "Better role information capture",
              description: "Structured workflows ensure all essential skills, licences, and start details are gathered upfront.",
            },
            {
              title: "Consultant-reviewed matches",
              description: "AI-supported pipelines feed directly to human review to guarantee placement suitability.",
            },
            {
              title: "Quicker applicant contact",
              description: "Immediate matching triggers notification channels to engage matching talent faster.",
            },
            {
              title: "Faster advert placement where required",
              description: "Integrated channels push unmatched vacancies to key search channels dynamically.",
            },
            {
              title: "Clearer workflow from requirement to review",
              description: "Centralized tracking provides absolute transparency from intake to final sign-off.",
            },
          ]}
        />

        <FinalCTA />
      </main>

      <Footer />
      <FloatingElements />
    </div>
  );
}