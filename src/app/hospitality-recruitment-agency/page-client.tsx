"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ArrowRight, CheckCircle2, Star, Shield, Utensils } from "lucide-react";

// Helper component for standard checklist items
const CheckListItem = ({ children }: { children: React.ReactNode }) => (
  <li className="text-slate-600 text-[16.5px] mb-2.5 relative pl-7 leading-[1.6] list-none">
    <span className="absolute left-0 text-[#C99A1F] font-black text-lg">✓</span>
    {children}
  </li>
);

export default function HospitalityAgencyPage() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What hospitality sectors do you recruit for?",
      answer: "Recruitment Direct UK Ltd recruits across hotels, restaurants, bars, event venues, contract catering operations, corporate dining facilities, and holiday resorts throughout the UK."
    },
    {
      question: "What catering professionals can you supply?",
      answer: "We supply head chefs, sous chefs, commis chefs, kitchen assistants, kitchen porters, waiting staff, bar staff, front of house hosts, baristas, and housekeepers."
    },
    {
      question: "Do your candidates have food hygiene certifications?",
      answer: "Yes. All kitchen and food-handling candidates are verified to hold relevant food hygiene certifications (e.g. Food Safety Level 2) and comply with general health and safety standards."
    },
    {
      question: "Do you provide temporary hospitality staff cover?",
      answer: "Yes. We supply temporary hospitality staff to cover peak seasons, corporate events, wedding seasons, holiday absences, and short-term shift cover."
    },
    {
      question: "Do you recruit permanent hospitality staff?",
      answer: "Yes. We offer permanent recruitment solutions to connect hospitality businesses with experienced chefs, front-of-house managers, and kitchen staff."
    },
    {
      question: "How does AI Hire Now work?",
      answer: "Submit your staffing request online 24/7. AI screens our database to identify suitable candidates, and our recruitment team reviews and verifies the shortlist before introducing them."
    },
    {
      question: "Why choose Recruitment Direct UK Ltd?",
      answer: "Since 2006, Recruitment Direct UK Ltd has provided flexible and reliable staffing. We combine AI technology with comprehensive human verification to supply skilled hospitality personnel quickly."
    }
  ];

  const goldButtonClass = "rd-btn rd-btn-gold standard-cta-btn w-[200px] h-[52px] text-center justify-center";
  const blueButtonClass = "rd-btn bg-gradient-to-r from-black/80 to-[#151C62] text-white border border-[#001B5E] font-extrabold shadow-md standard-cta-btn w-[200px] h-[52px]";
  const goldButtonDefaultClass = "rd-btn rd-btn-gold standard-cta-btn";

  return (
    <div className="min-h-screen bg-[#ffffff] text-slate-900 font-sans">
      <Navbar />

      <main className="max-w-[1140px] mx-auto px-5 pt-[4px] md:pt-[12px] pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-8">
            {/* Hero Section */}
            <section className="mb-6">
              <span className="inline-block mb-3 px-3 py-1 bg-amber-50 text-[#C99A1F] border border-amber-200/50 rounded-full text-xs font-semibold uppercase tracking-wider">
                Reliable Hospitality Staffing Since 2006
              </span>

              <h1 className="text-black text-[38px] md:text-[54px] font-extrabold leading-[1.15] tracking-[-0.02em] mb-4">
                Hospitality Recruitment Agency UK | Temporary & Permanent Catering Staff
              </h1>

              <p className="text-black text-[17.5px] leading-[1.8] mb-3">
                <strong>Recruitment Direct UK Ltd</strong> is an established <strong>Hospitality Recruitment Agency</strong> supplying <strong>chefs, waiting staff, kitchen assistants, and bar staff</strong> to hospitality venues across England, Scotland, Wales, and Northern Ireland.
              </p>

              <p className="text-black text-[17.5px] leading-[1.8] mb-3">
                We support hotels, restaurants, contract caterers, corporate venues, and events teams by supplying reliable, vetted, and experienced catering personnel for peak periods and long-term roles.
              </p>

              <p className="text-black text-[17.5px] leading-[1.8] mb-3">
                Whether you need a single chef cover for a weekend shift or an entire bar and waiting team for a corporate event, we combine AI database searching with consultant verification to match candidates quickly.
              </p>

              <div className="mt-6 flex flex-wrap gap-4">
                <Link href="/ai-hire-now" className={goldButtonClass}>
                  AI Hire Now <ArrowRight className="w-5 h-5" />
                </Link>
                <Link href="/request-quote" className={blueButtonClass}>
                  Request Quote
                </Link>
              </div>

              <div className="mt-8 flex flex-wrap gap-3 text-slate-500 text-xs font-semibold">
                <span className="bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-100">Food Safety Certified Staff</span>
                <span className="bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-100">Right to Work Checked</span>
                <span className="bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-100">ISO 9001 Certified</span>
                <span className="bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-100">REC Corporate Member</span>
                <span className="bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-100">Trusted Since 2006</span>
              </div>
            </section>

            {/* Hero Image */}
            <div className="relative w-full h-[280px] md:h-[420px] rounded-2xl overflow-hidden mb-12 shadow-md border border-slate-200">
              <Image
                src="/images/Hospitalitys.png"
                alt="Hospitality Recruitment Agency supplying temporary chefs, bar staff and kitchen porters"
                fill
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
                className="object-cover"
              />
            </div>

            {/* Introduction */}
            <section className="mb-12">
              <h2 className="text-black text-[26px] md:text-[34px] font-extrabold tracking-[-0.01em] border-b border-slate-100 pb-3 mb-6">
                Catering & Hospitality Staffing Supply
              </h2>

              <p className="text-black text-[17.5px] leading-[1.8] mb-4">
                Recruitment Direct UK Ltd delivers flexible and efficient hospitality staffing solutions. We understand that the hospitality sector relies on speed, reliability, and excellent customer service. Since 2006, we have supplied qualified catering teams.
              </p>

              <p className="text-black text-[17.5px] leading-[1.8] mb-4">
                Our AI recruitment software operates 24/7, tracking candidate availability and matching their certificates with shift demands. This allows our consultants to cover unexpected chef shortages or build event teams rapidly.
              </p>
            </section>

            {/* Why Choose Recruitment Direct */}
            <section className="mb-12">
              <h2 className="text-black text-[26px] md:text-[34px] font-extrabold tracking-[-0.01em] border-b border-slate-100 pb-3 mb-6">
                Why Choose Recruitment Direct UK Ltd?
              </h2>

              <p className="text-black text-[17.5px] leading-[1.8] mb-6">
                Hospitality providers trust Recruitment Direct UK Ltd to deliver compliant, professional, and reliable staff who represent their brand values on the floor.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                  <h3 className="text-black font-bold text-lg mb-2">Temporary Staffing</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    Fast access to temporary front-of-house and back-of-house staff for seasonal demands, weddings, and emergencies.
                  </p>
                </div>
                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                  <h3 className="text-black font-bold text-lg mb-2">Verified Experience</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    All candidates undergo reference checks, right to work validation, and food safety qualification checks before placement.
                  </p>
                </div>
                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                  <h3 className="text-black font-bold text-lg mb-2">Permanent Solutions</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    Targeted recruitment campaigns to place permanent head chefs, kitchen managers, and hospitality supervisors.
                  </p>
                </div>
              </div>
            </section>

            {/* Hospitality Recruitment Services */}
            <section className="mb-12">
              <h2 className="text-black text-[26px] md:text-[34px] font-extrabold tracking-[-0.01em] border-b border-slate-100 pb-3 mb-6">
                Hospitality Recruitment Services
              </h2>

              <p className="text-black text-[17.5px] leading-[1.8] mb-6">
                We support hotels, contract caterers, and venues with flexible staffing services designed to handle fluctuating guest numbers.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="p-5 bg-white border border-slate-100 rounded-xl shadow-sm">
                  <h3 className="text-black font-bold text-base mb-1.5">Chef Cover & Kitchen Staff</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">Supplying head chefs, sous chefs, commis chefs, and kitchen porters for restaurants, hotels, and corporate caterers.</p>
                </div>
                <div className="p-5 bg-white border border-slate-100 rounded-xl shadow-sm">
                  <h3 className="text-black font-bold text-base mb-1.5">Front of House Staffing</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">Providing experienced waiting staff, bar staff, F&B assistants, baristas, and floor hosts for events and venues.</p>
                </div>
                <div className="p-5 bg-white border border-slate-100 rounded-xl shadow-sm">
                  <h3 className="text-black font-bold text-base mb-1.5">Hotel & Housekeeping Support</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">Connecting hotels with reliable housekeepers, room attendants, laundry staff, and front-desk receptionists.</p>
                </div>
                <div className="p-5 bg-white border border-slate-100 rounded-xl shadow-sm">
                  <h3 className="text-black font-bold text-base mb-1.5">Event Staffing Teams</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">Building complete temporary teams of hosts, servers, and bar staff to support corporate hospitality and private events.</p>
                </div>
              </div>
            </section>

            {/* Hospitality Roles */}
            <section className="mb-12">
              <h2 className="text-black text-[26px] md:text-[34px] font-extrabold tracking-[-0.01em] border-b border-slate-100 pb-3 mb-6">
                Hospitality Roles We Recruit
              </h2>

              <p className="text-black text-[17.5px] leading-[1.8] mb-6">
                We recruit qualified, professional, and customer-focused personnel across back-of-house and front-of-house roles:
              </p>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-6">
                <div>
                  <h4 className="text-black font-bold text-base mb-2">Back of House (BOH)</h4>
                  <ul className="pl-0 list-none space-y-1.5">
                    <CheckListItem>Head Chefs</CheckListItem>
                    <CheckListItem>Sous Chefs</CheckListItem>
                    <CheckListItem>Commis Chefs</CheckListItem>
                    <CheckListItem>Kitchen Assistants</CheckListItem>
                    <CheckListItem>Kitchen Porters</CheckListItem>
                    <CheckListItem>Line Cooks</CheckListItem>
                  </ul>
                </div>

                <div>
                  <h4 className="text-black font-bold text-base mb-2">Front of House (FOH)</h4>
                  <ul className="pl-0 list-none space-y-1.5">
                    <CheckListItem>Waiting Staff</CheckListItem>
                    <CheckListItem>Bar Staff</CheckListItem>
                    <CheckListItem>Baristas</CheckListItem>
                    <CheckListItem>F&B Assistants</CheckListItem>
                    <CheckListItem>Front of House Hosts</CheckListItem>
                    <CheckListItem>Receptionists</CheckListItem>
                  </ul>
                </div>

                <div>
                  <h4 className="text-black font-bold text-base mb-2">Support & Housekeeping</h4>
                  <ul className="pl-0 list-none space-y-1.5">
                    <CheckListItem>Housekeepers</CheckListItem>
                    <CheckListItem>Room Attendants</CheckListItem>
                    <CheckListItem>Catering Assistants</CheckListItem>
                    <CheckListItem>Events Coordinators</CheckListItem>
                    <CheckListItem>Kitchen Runners</CheckListItem>
                  </ul>
                </div>
              </div>
            </section>

            {/* Hospitality Sectors */}
            <section className="mb-12">
              <h2 className="text-black text-[26px] md:text-[34px] font-extrabold tracking-[-0.01em] border-b border-slate-100 pb-3 mb-6">
                Hospitality Sectors We Support
              </h2>

              <p className="text-black text-[17.5px] leading-[1.8] mb-6">
                Our candidates support diverse hospitality environments, ensuring smooth kitchen operations and excellent guest experiences.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
                {[
                  { title: "Hotels & Resorts", desc: "Supplying housekeeping, bar, kitchen, and reception teams to boutique and corporate hotels." },
                  { title: "Restaurants & Bars", desc: "Providing relief chefs, kitchen porters, waiting staff, and bar servers for restaurants." },
                  { title: "Corporate Hospitality", desc: "Staffing executive dining rooms, boardrooms, and staff canteens with professional food handlers." },
                  { title: "Event Venues & Stadiums", desc: "Sourcing large temporary teams to support concert venues, weddings, and match-day hospitality." },
                  { title: "Contract Catering", desc: "Supplying mobile chefs and catering support workers to contract catering providers across schools and offices." },
                  { title: "Leisure Facilities", desc: "Connecting leisure centers, holiday parks, and golf clubs with kitchen and customer service staff." }
                ].map((s, idx) => (
                  <div key={idx} className="bg-slate-50 p-5 rounded-xl border border-slate-100 flex flex-col justify-between">
                    <h4 className="text-black font-bold text-sm mb-1">{s.title}</h4>
                    <p className="text-slate-600 text-xs leading-relaxed mt-1">{s.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Vetting and Quality Compliance */}
            <section className="mb-12">
              <h2 className="text-black text-[26px] md:text-[34px] font-extrabold tracking-[-0.01em] border-b border-slate-100 pb-3 mb-6">
                Quality Compliance & Safety Vetting
              </h2>

              <p className="text-black text-[17.5px] leading-[1.8] mb-4">
                Recruitment Direct UK Ltd operates high standards of compliance. We verify right to work documentation, background references, and food safety certifications for all candidates.
              </p>

              <p className="text-black text-[17.5px] leading-[1.8] mb-4">
                No chef or kitchen assistant is supplied without verification of their Food Safety credentials and proper kitchen safety awareness. This ensures that every worker on site maintains strict food safety and hygiene regulations.
              </p>
            </section>

            {/* Need Hospitality Staff? Call CTA */}
            <section>
              <h2 className="text-black text-[26px] md:text-[34px] font-extrabold tracking-[-0.01em] border-b border-slate-100 pb-3 mb-6">
                Looking to Recruit Hospitality Staff?
              </h2>

              <p className="text-black text-[17.5px] leading-[1.8] mb-5">
                Whether you need urgent kitchen cover or are building an events team for a wedding season, Recruitment Direct UK Ltd can support you with experienced catering personnel.
              </p>

              <div className="mt-6 flex flex-wrap gap-4">
                <Link href="/ai-hire-now" className={goldButtonClass}>
                  AI Hire Now <ArrowRight className="w-5 h-5" />
                </Link>
                <Link href="/request-quote" className={blueButtonClass}>
                  Request Quote
                </Link>
                <a href="tel:01324613198" className={goldButtonClass}>
                  Call Now
                </a>
              </div>
            </section>

            {/* FAQ Section */}
            <section className="mt-12 bg-slate-50 p-6 rounded-2xl border border-slate-100">
              <h2 className="text-black text-[26px] md:text-[34px] font-extrabold tracking-[-0.01em] border-b border-slate-200 pb-3 mb-6 mt-0">
                Hospitality Staffing FAQs
              </h2>

              <div className="space-y-4 mt-6">
                {faqs.map((faq, index) => {
                  const isOpen = openFaqIndex === index;
                  return (
                    <div
                      key={index}
                      className="border-b border-slate-200 pb-4 last:border-0 last:pb-0"
                    >
                      <button
                        onClick={() => toggleFaq(index)}
                        className="w-full flex justify-between items-center text-left py-2 group focus:outline-none !bg-gradient-to-r from-black/80 to-[#151C62]"
                      >
                        <span className="font-bold text-white text-[17px] group-hover:text-[#ffffff]/80 transition-colors">
                          {faq.question}
                        </span>
                        <ChevronDown
                          className={`w-5 h-5 text-white transition-transform duration-300 ${isOpen ? "transform rotate-180" : ""
                            }`}
                        />
                      </button>
                      <AnimatePresence initial={false}>
                        {isOpen && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.25, ease: "easeInOut" }}
                            className="overflow-hidden"
                          >
                            <p className="mt-2 text-slate-600 text-[16px] leading-relaxed pr-6 mb-0">
                              {faq.answer}
                            </p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4 space-y-8">
            <div className="bg-gradient-to-r from-black/80 to-[#151C62] text-white p-6 rounded-2xl shadow-md border border-slate-200 mt-0 lg:mt-6">
              <Utensils className="text-[#F7D774] w-10 h-10 mb-4" />
              <h3 className="text-white text-xl font-bold mb-2">Need Catering Staff?</h3>
              <p className="text-slate-200 text-sm leading-relaxed mb-6">
                Submit staffing requests 24/7. AI screens our database to match qualified chefs, servers, and kitchen porters in minutes.
              </p>
              <div className="flex justify-center">
                <Link href="/ai-hire-now" className={`${goldButtonDefaultClass} w-auto text-center`}>
                  Submit Vacancy
                </Link>
              </div>
            </div>

            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
              <h3 className="text-slate-800 text-lg font-bold mb-4">Why Choose RD?</h3>
              <div className="space-y-4">
                <div className="flex gap-3">
                  <CheckCircle2 className="text-[#C99A1F] w-5 h-5 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-600 text-sm">Consultant reviewed, verified candidates</span>
                </div>
                <div className="flex gap-3">
                  <CheckCircle2 className="text-[#C99A1F] w-5 h-5 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-600 text-sm">Strict qualification & hygiene checks</span>
                </div>
                <div className="flex gap-3">
                  <CheckCircle2 className="text-[#C99A1F] w-5 h-5 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-600 text-sm">Supplying UK venues since 2006</span>
                </div>
              </div>
            </div>

            {/* Related Sector Agencies widget */}
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
              <h3 className="text-slate-800 text-lg font-bold mb-4">Related Sector Agencies</h3>
              <div className="space-y-3 text-sm">
                <Link href="/healthcare-recruitment-agency" className="block text-[#001B5E] hover:text-[#C99A1F] font-semibold transition-colors">
                  → Healthcare Recruitment
                </Link>
                <Link href="/construction-recruitment-agency" className="block text-[#001B5E] hover:text-[#C99A1F] font-semibold transition-colors">
                  → Construction Recruitment
                </Link>
                <Link href="/engineering-recruitment-agency" className="block text-[#001B5E] hover:text-[#C99A1F] font-semibold transition-colors">
                  → Engineering Recruitment
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />

      {/* JSON-LD Schemas for SEO structured data */}
      {/* 1. Breadcrumb Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://rd1.co.uk"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "Hospitality Recruitment Agency",
                "item": "https://rd1.co.uk/hospitality-recruitment-agency"
              }
            ]
          })
        }}
      />

      {/* 2. Organization Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Recruitment Direct UK Ltd",
            "url": "https://rd1.co.uk",
            "logo": "https://rd1.co.uk/logo.png",
            "sameAs": [
              "https://www.facebook.com/recruitmentdirect/",
              "https://www.linkedin.com/company/recruitment-direct/?utm_source=chatgpt%2Ecom&originalSubdomain=uk"
            ]
          })
        }}
      />

      {/* 3. EmploymentAgency Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "EmploymentAgency",
            "name": "Recruitment Direct UK Ltd",
            "image": "https://rd1.co.uk/images/Hospitalitys.png",
            "url": "https://rd1.co.uk",
            "logo": "https://rd1.co.uk/logo.png",
            "telephone": "01324613198",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Herkimer House, Mill Road Industrial Estate",
              "addressLocality": "Linlithgow",
              "postalCode": "EH49 7SF",
              "addressCountry": "GB"
            },
            "priceRange": "$$",
            "areaServed": [
              "England",
              "Scotland",
              "Wales",
              "Northern Ireland"
            ]
          })
        }}
      />

      {/* 4. FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqs.map((faq) => ({
              "@type": "Question",
              "name": faq.question,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
              }
            }))
          })
        }}
      />

      {/* 5. WebPage Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Hospitality Recruitment Agency UK",
            "url": "https://rd1.co.uk/hospitality-recruitment-agency",
            "description": "Hospitality Recruitment Agency supplying temporary, contract and permanent chefs, waiting staff, kitchen assistants and bar staff across the UK.",
            "isPartOf": {
              "@type": "WebSite",
              "name": "Recruitment Direct UK",
              "url": "https://rd1.co.uk"
            }
          })
        }}
      />
    </div>
  );
}
