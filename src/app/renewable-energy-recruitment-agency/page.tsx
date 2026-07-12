"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ArrowRight, CheckCircle2, Star, Shield, Zap } from "lucide-react";

// Helper component for clean list formatting
const CheckListItem = ({ children }: { children: React.ReactNode }) => (
  <li className="text-slate-600 text-[16.5px] mb-2.5 relative pl-7 leading-[1.6] list-none">
    <span className="absolute left-0 text-[#C99A1F] font-black text-lg">✓</span>
    {children}
  </li>
);

export default function RenewableEnergyAgencyPage() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What renewable energy sectors do we specialise in?",
      answer: "Recruitment Direct UK specialises in renewable energy recruitment across onshore wind, offshore wind, solar PV, battery energy storage systems (BESS), EV charging infrastructure, hydrogen, utilities, grid infrastructure, substations, transmission networks, distribution networks and power generation projects throughout England, Scotland, Wales, Northern Ireland and the Republic of Ireland."
    },
    {
      question: "What renewable energy professionals can we supply?",
      answer: "We recruit wind turbine technicians, solar PV installers, battery storage engineers, electrical engineering professionals, mechanical engineers, high voltage engineers, commissioning engineers, grid connection engineers, cable jointers, project managers, site managers, quantity surveyors, environmental advisors, health & safety professionals and many other renewable energy specialists."
    },
    {
      question: "What recruitment solutions do we offer?",
      answer: "Recruitment Direct UK provides temporary, contract and permanent renewable energy recruitment solutions, supplying individual specialists through to complete project teams across the UK and Ireland."
    },
    {
      question: "Which locations do we cover?",
      answer: "We provide renewable energy recruitment services throughout England, Scotland, Wales, Northern Ireland and the Republic of Ireland, supporting projects nationwide."
    },
    {
      question: "How does AI Hire Now work?",
      answer: "Submit your staffing requirement online 24 hours a day. AI instantly searches our database to match qualified candidates before one of our recruitment consultants contacts you."
    },
    {
      question: "Why choose Recruitment Direct UK?",
      answer: "Trusted since 2006, Recruitment Direct UK combines experienced recruitment consultants with AI-powered candidate search technology to help organisations recruit renewable energy professionals quickly and efficiently."
    }
  ];

  const goldButtonDefaultClass = "rd-btn rd-btn-gold standard-cta-btn";
  const goldButtonClass = "rd-btn rd-btn-gold standard-cta-btn w-[200px] h-[52px] text-center justify-center";
  const blueButtonClass = "rd-btn bg-gradient-to-r from-black/80 to-[#151C62] text-white border border-[#001B5E] font-extrabold shadow-md standard-cta-btn w-[200px] h-[52px]";

  return (
    <div className="min-h-screen bg-[#ffffff] text-slate-900 font-sans">
      <Navbar />

      <main className="max-w-[1140px] mx-auto px-5 pt-[100px] md:pt-[120px] pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-8">
            {/* Main Header / Intro */}
            <section className="mb-6">
              <span className="inline-block mb-3 px-3 py-1 bg-amber-50 text-[#C99A1F] border border-amber-200/50 rounded-full text-xs font-semibold uppercase tracking-wider">
                Trusted Renewable Energy Recruitment Since 2006
              </span>

              <h1 className="text-black text-[38px] md:text-[54px] font-extrabold leading-[1.15] tracking-[-0.02em] mb-4">
                Renewable Energy Recruitment Agency UK
              </h1>

              <p className="text-black text-[17.5px] leading-[1.8] mb-3">
                Recruitment Direct UK Ltd is a trusted <strong>Renewable Energy Recruitment Agency</strong> supplying <strong>temporary, contract and permanent renewable energy professionals</strong> across England, Scotland, Wales, Northern Ireland and the Republic of Ireland.
              </p>

              <p className="text-black text-[17.5px] leading-[1.8] mb-3">
                We support renewable energy developers, utilities, EPC contractors, energy providers and infrastructure organisations delivering onshore wind, offshore wind, solar PV, battery energy storage systems (BESS), EV charging infrastructure, hydrogen, substations, transmission, distribution and power generation projects.
              </p>

              <p className="text-black text-[17.5px] leading-[1.8] mb-3">
                Whether you require a single renewable energy specialist or a complete project workforce, Recruitment Direct UK delivers fast, reliable recruitment solutions supported by experienced consultants and AI-powered candidate search technology.
              </p>

              <div className="mt-6 flex flex-wrap gap-4">
                <Link href="/ai-hire-now" className={goldButtonClass}>
                  AI Hire Now <ArrowRight className="w-5 h-5" />
                </Link>
                <Link href="/request-quote" className={blueButtonClass}>
                  Request Quote
                </Link>
              </div>
            </section>

            {/* Hero Image */}
            <div className="relative w-full h-[280px] md:h-[420px] rounded-2xl overflow-hidden mb-12 shadow-md border border-slate-200">
              <Image
                src="/images/renewable-energy-recruitment-agency.webp"
                alt="Renewable Energy Recruitment Agency supplying temporary, contract and permanent professionals across the UK and Republic of Ireland"
                fill
                priority
                className="object-cover"
              />
            </div>

            {/* Trusted Section */}
            <section>
              <h2 className="text-black text-[26px] md:text-[34px] font-extrabold tracking-[-0.01em] border-b border-slate-100 pb-3 mt-12 mb-6">
                Accredited Recruitment Partner
              </h2>

              <p className="text-black text-[17.5px] leading-[1.8] mb-6">
                We maintain industry recognized accreditations to assure compliance, safety, and service quality across every placement:
              </p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
                <div className="p-4 bg-slate-50 border border-slate-100 rounded-xl text-center">
                  <CheckCircle2 className="w-6 h-6 text-[#C99A1F] mx-auto mb-2" />
                  <span className="text-slate-700 text-xs font-bold block">Constructionline Gold</span>
                </div>
                <div className="p-4 bg-slate-50 border border-slate-100 rounded-xl text-center">
                  <Star className="w-6 h-6 text-[#C99A1F] mx-auto mb-2" />
                  <span className="text-slate-700 text-xs font-bold block">ISO 9001 Certified</span>
                </div>
                <div className="p-4 bg-slate-50 border border-slate-100 rounded-xl text-center">
                  <Shield className="w-6 h-6 text-[#C99A1F] mx-auto mb-2" />
                  <span className="text-slate-700 text-xs font-bold block">Cyber Essentials</span>
                </div>
                <div className="p-4 bg-slate-50 border border-slate-100 rounded-xl text-center">
                  <CheckCircle2 className="w-6 h-6 text-[#C99A1F] mx-auto mb-2" />
                  <span className="text-slate-700 text-xs font-bold block">REC Corporate Member</span>
                </div>
              </div>
            </section>

            {/* Sub-Sectors */}
            <section className="mb-12">
              <h2 className="text-black text-[26px] md:text-[34px] font-extrabold tracking-[-0.01em] border-b border-slate-100 pb-3 mb-6">
                Renewable Sub-Sectors We Support
              </h2>

              <p className="text-black text-[17.5px] leading-[1.8] mb-6">
                Our capabilities extend across all major clean energy and green utility sectors:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                  <h3 className="text-black font-bold text-lg mb-2">Wind Energy</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    Supporting onshore and offshore wind farms with technical turbine crew, commissioning engineers, H&amp;S advisors, and project managers.
                  </p>
                </div>
                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                  <h3 className="text-black font-bold text-lg mb-2">Solar PV</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    Sourcing electrical fitters, commercial solar installers, PV design specialists, and development engineers.
                  </p>
                </div>
                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                  <h3 className="text-black font-bold text-lg mb-2">BESS & EV</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    Supplying Grid Connection engineers, Battery Storage specialists, EV charging installation technicians, and power electronics experts.
                  </p>
                </div>
              </div>
            </section>

            {/* Roles List */}
            <section className="mb-12">
              <h2 className="text-black text-[26px] md:text-[34px] font-extrabold tracking-[-0.01em] border-b border-slate-100 pb-3 mb-6">
                Renewable Roles We Recruit
              </h2>

              <p className="text-black text-[17.5px] leading-[1.8] mb-6">
                We maintain active talent pools across multiple operational layers:
              </p>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-6">
                <div>
                  <h4 className="text-black font-bold text-base mb-2">Technical & Engineering</h4>
                  <ul className="pl-0 list-none space-y-1.5">
                    <CheckListItem>Wind Turbine Technicians</CheckListItem>
                    <CheckListItem>Solar PV Installers</CheckListItem>
                    <CheckListItem>BESS Engineers</CheckListItem>
                    <CheckListItem>Electrical Engineers</CheckListItem>
                    <CheckListItem>Mechanical Engineers</CheckListItem>
                    <CheckListItem>HV/MV Commissioning Engineers</CheckListItem>
                  </ul>
                </div>

                <div>
                  <h4 className="text-black font-bold text-base mb-2">Grid & Infrastructure</h4>
                  <ul className="pl-0 list-none space-y-1.5">
                    <CheckListItem>Grid Connection Engineers</CheckListItem>
                    <CheckListItem>Cable Jointers (up to 33kV/132kV)</CheckListItem>
                    <CheckListItem>Substation Civil Engineers</CheckListItem>
                    <CheckListItem>High Voltage Technicians</CheckListItem>
                    <CheckListItem>Commissioning Managers</CheckListItem>
                    <CheckListItem>SAP (Senior Authorised Persons)</CheckListItem>
                  </ul>
                </div>

                <div>
                  <h4 className="text-black font-bold text-base mb-2">Management & Support</h4>
                  <ul className="pl-0 list-none space-y-1.5">
                    <CheckListItem>Project Managers</CheckListItem>
                    <CheckListItem>Site Managers</CheckListItem>
                    <CheckListItem>Quantity Surveyors</CheckListItem>
                    <CheckListItem>Client Representatives</CheckListItem>
                    <CheckListItem>QHSE Advisors</CheckListItem>
                    <CheckListItem>Environmental Coordinators</CheckListItem>
                  </ul>
                </div>
              </div>
            </section>

            {/* Geographical Coverage */}
            <section className="mb-12">
              <h2 className="text-black text-[26px] md:text-[34px] font-extrabold tracking-[-0.01em] border-b border-slate-100 pb-3 mb-6">
                UK-Wide Support Coverage
              </h2>

              <p className="text-black text-[17.5px] leading-[1.8] mb-4">
                We supply renewable energy labour and engineering staff across the Highlands, Aberdeenshire, Moray, Angus, Fife, Perth &amp; Kinross, Dumfries &amp; Galloway, the Scottish Borders, Argyll &amp; Bute, North East England, Yorkshire, East Anglia, the Midlands, the South West, North Wales, South Wales, and throughout the UK and Republic of Ireland.
              </p>
            </section>

            {/* Bottom CTA Block */}
            <section>
              <h2 className="text-black text-[26px] md:text-[34px] font-extrabold tracking-[-0.01em] border-b border-slate-100 pb-3 mb-6">
                Partner with Clean Energy Recruitment Specialists
              </h2>

              <p className="text-black text-[17.5px] leading-[1.8] mb-5">
                Ready to secure vetted, compliant professionals for your upcoming project? Submit your staffing requirement or request a callback to discuss.
              </p>

              <div className="mt-6 flex flex-wrap gap-4">
                <Link href="/ai-hire-now" className={goldButtonClass}>
                  AI Hire Now <ArrowRight className="w-5 h-5" />
                </Link>
                <Link href="/request-quote" className={blueButtonClass}>
                  Request Quote
                </Link>
              </div>
            </section>

            {/* FAQs Accordion */}
            <section className="mt-12 bg-slate-50 p-6 rounded-2xl border border-slate-100">
              <h2 className="text-black text-[26px] md:text-[34px] font-extrabold tracking-[-0.01em] border-b border-slate-200 pb-3 mb-6 mt-0">
                Renewable Energy Recruitment FAQs
              </h2>

              <div className="space-y-4 mt-6">
                {faqs.map((faq, index) => {
                  const isOpen = openFaqIndex === index;
                  return (
                    <div key={index} className="border-b border-slate-200 pb-4 last:border-0 last:pb-0">
                      <button
                        onClick={() => toggleFaq(index)}
                        className="w-full flex justify-between items-center text-left py-2 group focus:outline-none !bg-gradient-to-r from-black/80 to-[#151C62]"
                      >
                        <span className="font-bold text-white text-[17px] group-hover:text-[#ffffff]/80 transition-colors">
                          {faq.question}
                        </span>
                        <ChevronDown className={`w-5 h-5 text-white transition-transform duration-300 ${isOpen ? "transform rotate-180" : ""}`} />
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
              <Zap className="text-[#F7D774] w-10 h-10 mb-4 animate-pulse" />
              <h3 className="text-white text-xl font-bold mb-2">Need Staff Now?</h3>
              <p className="text-slate-200 text-sm leading-relaxed mb-6">
                Submit staffing requests 24/7. AI screens our database to match qualified renewable energy technicians in minutes.
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
                  <span className="text-slate-600 text-sm">Strict compliance & reference checking</span>
                </div>
                <div className="flex gap-3">
                  <CheckCircle2 className="text-[#C99A1F] w-5 h-5 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-600 text-sm">Supplying UK contractors since 2006</span>
                </div>
              </div>
            </div>

            {/* Related Sector Agencies widget for contextual internal link building */}
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
              <h3 className="text-slate-800 text-lg font-bold mb-4">Related Sector Agencies</h3>
              <div className="space-y-3 text-sm">
                <Link href="/construction-recruitment-agency" className="block text-[#001B5E] hover:text-[#C99A1F] font-semibold transition-colors">
                  → Construction Recruitment
                </Link>
                <Link href="/engineering-recruitment-agency" className="block text-[#001B5E] hover:text-[#C99A1F] font-semibold transition-colors">
                  → Engineering Recruitment
                </Link>
                <Link href="/" className="block text-[#001B5E] hover:text-[#C99A1F] font-semibold transition-colors">
                  → Home
                </Link>
                <Link href="/#sectors" className="block text-[#001B5E] hover:text-[#C99A1F] font-semibold transition-colors">
                  → All Sectors We Support
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />

      {/* JSON-LD Schemas */}
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
                "item": "https://www.rd1.co.uk"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "Renewable Energy Recruitment Agency",
                "item": "https://www.rd1.co.uk/renewable-energy-recruitment-agency"
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
            "url": "https://www.rd1.co.uk",
            "logo": "https://www.rd1.co.uk/logo.png",
            "sameAs": [
              "https://www.facebook.com/recruitmentdirect",
              "https://www.linkedin.com/company/recruitment-direct-uk-ltd"
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
            "image": "https://www.rd1.co.uk/images/renewable-energy-recruitment-agency.webp",
            "url": "https://www.rd1.co.uk",
            "logo": "https://www.rd1.co.uk/logo.png",
            "telephone": "01324556644",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Suite 3, Enterprise House, Springkerse Business Park",
              "addressLocality": "Stirling",
              "postalCode": "FK7 7UF",
              "addressCountry": "GB"
            },
            "priceRange": "$$",
            "areaServed": [
              "England",
              "Scotland",
              "Wales",
              "Northern Ireland",
              "Republic of Ireland"
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
            "name": "Renewable Energy Recruitment Agency UK",
            "url": "https://www.rd1.co.uk/renewable-energy-recruitment-agency",
            "description": "Renewable Energy Recruitment Agency supplying temporary, contract and permanent professionals across the UK and Republic of Ireland.",
            "isPartOf": {
              "@type": "WebSite",
              "name": "Recruitment Direct UK",
              "url": "https://www.rd1.co.uk"
            }
          })
        }}
      />
    </div>
  );
}
