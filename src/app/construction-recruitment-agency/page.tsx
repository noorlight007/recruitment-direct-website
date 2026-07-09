"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ArrowRight, CheckCircle2, Star, Shield, HardHat } from "lucide-react";

// Helper components for clean Tailwind code
const CheckListItem = ({ children }: { children: React.ReactNode }) => (
  <li className="text-slate-600 text-[16.5px] mb-2.5 relative pl-7 leading-[1.6] list-none">
    <span className="absolute left-0 text-[#C99A1F] font-black text-lg">✓</span>
    {children}
  </li>
);

export default function ConstructionAgencyPage() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "Do Recruitment Direct UK supply construction staff across the UK?",
      answer: "Yes. Recruitment Direct UK supplies temporary, contract and permanent construction staff across England, Scotland and Wales."
    },
    {
      question: "What construction roles do you recruit for?",
      answer: "We recruit labourers, skilled trades, CPCS and NPORS plant operators, site engineers, site managers, project managers, quantity surveyors and other construction professionals."
    },
    {
      question: "Can you supply workers for quarries and aggregates?",
      answer: "Yes. We supply workers to quarrying, aggregates, asphalt, concrete, cement and extractive industry projects. Workers holding MPQC qualifications are available where required."
    },
    {
      question: "How does AI Hire Now work?",
      answer: "Clients submit their staffing requirement online 24/7. AI searches the Recruitment Direct UK candidate database before a consultant reviews the vacancy and contacts the client."
    }
  ];

  const goldButtonClass = "bg-gradient-to-r from-[#F7D774] via-[#E5B93C] to-[#C99A1F] text-[#111111] border border-[#B8860B] font-extrabold shadow-[0_4px_12px_rgba(229,185,60,0.2)] rounded-full px-9 py-3.5 inline-flex items-center justify-center cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-[0_6px_20px_rgba(229,185,60,0.35)] hover:from-[#FFE08A] hover:to-[#D4A017] text-base gap-2 text-decoration-none";
  const blueButtonClass = "bg-[#001B5E] text-white border border-[#001B5E] font-extrabold shadow-md rounded-full px-9 py-3.5 inline-flex items-center justify-center cursor-pointer transition-all duration-300 hover:scale-105 hover:bg-opacity-95 text-base gap-2 text-decoration-none";

  return (
    <div className="min-h-screen bg-[#ffffff] text-slate-900 font-sans">
      <Navbar />

      <main className="max-w-[1140px] mx-auto px-5 pt-[100px] md:pt-[120px] pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-8">
            <section className="mb-10">
              <h1 className="text-[#001B5E] text-[38px] md:text-[54px] font-extrabold leading-[1.15] tracking-[-0.02em] mb-6">
                Construction Recruitment Agency UK
              </h1>

              <p className="text-slate-600 text-[17.5px] leading-[1.8] mb-5">
                Recruitment Direct UK Ltd is a trusted <strong className="text-slate-900 font-bold">construction recruitment agency</strong> supplying <strong className="text-slate-900 font-bold">temporary, contract and permanent construction staff</strong> across the UK.
              </p>

              <p className="text-slate-600 text-[17.5px] leading-[1.8] mb-5">
                We support contractors, civil engineering companies, infrastructure projects, utilities, quarries, aggregates and facilities management providers with fast, reliable recruitment solutions.
              </p>

              <p className="bg-[#f8fafc] p-5 rounded-xl border border-slate-100 shadow-sm text-slate-600 text-[17.5px] leading-[1.8] mb-5">
                <strong className="text-slate-900 font-bold">AI Hire Now:</strong> Submit your staffing requirement online 24/7. AI instantly searches our candidate database before one of our consultants contacts you.
              </p>
            </section>

            {/* Fast loading hero image */}
            <div className="relative w-full h-[280px] md:h-[420px] rounded-2xl overflow-hidden mb-12 shadow-md border border-slate-200">
              <Image
                src="/images/Cons.png"
                alt="Construction recruitment agency UK"
                fill
                priority
                className="object-cover"
              />
            </div>

            <section>
              <h2 className="text-[#001B5E] text-[26px] md:text-[34px] font-extrabold tracking-[-0.01em] border-b border-slate-100 pb-3 mt-12 mb-6">
                Trusted UK-Wide Construction Recruitment Since 2006
              </h2>

              <p className="text-slate-600 text-[17.5px] leading-[1.8] mb-5">
                From a single labourer to complete project teams, Recruitment Direct UK helps clients recruit construction workers quickly without compromising on quality, compliance or service.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                <div className="bg-slate-50 p-5 rounded-xl border border-slate-100 flex items-start gap-3">
                  <Star className="text-[#C99A1F] w-5 h-5 flex-shrink-0 mt-1" />
                  <div>
                    <strong className="block text-slate-800 text-[15px] font-bold">Trusted Partner</strong>
                    <span className="text-slate-600 text-sm">Recruitment supplier since 2006</span>
                  </div>
                </div>
                <div className="bg-slate-50 p-5 rounded-xl border border-slate-100 flex items-start gap-3">
                  <Shield className="text-[#C99A1F] w-5 h-5 flex-shrink-0 mt-1" />
                  <div>
                    <strong className="block text-slate-800 text-[15px] font-bold">Verified Standards</strong>
                    <span className="text-slate-600 text-sm">REC Member, ISO 9001 Certified</span>
                  </div>
                </div>
              </div>

              <ul className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 pl-0 list-none">
                <CheckListItem>Trusted recruitment supplier since 2006</CheckListItem>
                <CheckListItem>UK-wide construction recruitment</CheckListItem>
                <CheckListItem>Temporary, contract and permanent staff</CheckListItem>
                <CheckListItem>AI-powered candidate search</CheckListItem>
                <CheckListItem>Consultant-verified candidates</CheckListItem>
                <CheckListItem>REC Member</CheckListItem>
                <CheckListItem>ISO 9001 Certified</CheckListItem>
                <CheckListItem>Constructionline Gold</CheckListItem>
                <CheckListItem>Cyber Essentials Certified</CheckListItem>
              </ul>
            </section>

            <section>
              <h2 className="text-[#001B5E] text-[26px] md:text-[34px] font-extrabold tracking-[-0.01em] border-b border-slate-100 pb-3 mt-12 mb-6">
                Construction Recruitment Sectors
              </h2>

              <p className="text-slate-600 text-[17.5px] leading-[1.8] mb-5">
                We recruit across construction, civil engineering, infrastructure, facilities management, quarries and aggregates throughout England, Scotland and Wales.
              </p>

              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 mt-4 pl-0 list-none">
                <CheckListItem>Building & Construction</CheckListItem>
                <CheckListItem>Civil Engineering</CheckListItem>
                <CheckListItem>Infrastructure</CheckListItem>
                <CheckListItem>Highways</CheckListItem>
                <CheckListItem>Rail</CheckListItem>
                <CheckListItem>Utilities</CheckListItem>
                <CheckListItem>Energy & Renewables</CheckListItem>
                <CheckListItem>Facilities Management</CheckListItem>
                <CheckListItem>Commercial Construction</CheckListItem>
                <CheckListItem>Residential Construction</CheckListItem>
                <CheckListItem>Industrial Construction</CheckListItem>
                <CheckListItem>Local Authority Projects</CheckListItem>
                <CheckListItem>Quarries & Aggregates</CheckListItem>
                <CheckListItem>Asphalt, Concrete & Cement</CheckListItem>
              </ul>
            </section>

            <section>
              <h2 className="text-[#001B5E] text-[26px] md:text-[34px] font-extrabold tracking-[-0.01em] border-b border-slate-100 pb-3 mt-12 mb-6">
                Construction Roles We Recruit
              </h2>

              <div className="space-y-6">
                <div>
                  <h3 className="text-slate-800 text-[22px] font-bold mt-7 mb-3.5">Trades & Labour</h3>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 pl-0 list-none">
                    <CheckListItem>Labourers</CheckListItem>
                    <CheckListItem>Skilled Labourers</CheckListItem>
                    <CheckListItem>Groundworkers</CheckListItem>
                    <CheckListItem>Bricklayers</CheckListItem>
                    <CheckListItem>Joiners</CheckListItem>
                    <CheckListItem>Electricians</CheckListItem>
                    <CheckListItem>Plumbers</CheckListItem>
                    <CheckListItem>Scaffolders</CheckListItem>
                    <CheckListItem>Steel Fixers</CheckListItem>
                    <CheckListItem>Painters & Decorators</CheckListItem>
                    <CheckListItem>Dry Liners</CheckListItem>
                    <CheckListItem>Ceiling Fixers</CheckListItem>
                  </ul>
                </div>

                <div>
                  <h3 className="text-slate-800 text-[22px] font-bold mt-7 mb-3.5">Plant & Site Support</h3>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 pl-0 list-none">
                    <CheckListItem>CPCS Plant Operators</CheckListItem>
                    <CheckListItem>NPORS Plant Operators</CheckListItem>
                    <CheckListItem>360 Excavator Operators</CheckListItem>
                    <CheckListItem>Loading Shovel Operators</CheckListItem>
                    <CheckListItem>Dumper Drivers</CheckListItem>
                    <CheckListItem>Roller Drivers</CheckListItem>
                    <CheckListItem>Telehandler Operators</CheckListItem>
                    <CheckListItem>Traffic Marshals</CheckListItem>
                    <CheckListItem>Banksmen</CheckListItem>
                    <CheckListItem>Gatemen</CheckListItem>
                    <CheckListItem>Slinger Signallers</CheckListItem>
                  </ul>
                </div>

                <div>
                  <h3 className="text-slate-800 text-[22px] font-bold mt-7 mb-3.5">Engineering & Management</h3>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 pl-0 list-none">
                    <CheckListItem>Site Engineers</CheckListItem>
                    <CheckListItem>Civil Engineers</CheckListItem>
                    <CheckListItem>Site Managers</CheckListItem>
                    <CheckListItem>Project Managers</CheckListItem>
                    <CheckListItem>Contracts Managers</CheckListItem>
                    <CheckListItem>Quantity Surveyors</CheckListItem>
                    <CheckListItem>Design Managers</CheckListItem>
                    <CheckListItem>Commercial Managers</CheckListItem>
                    <CheckListItem>Health & Safety Managers</CheckListItem>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-[#001B5E] text-[26px] md:text-[34px] font-extrabold tracking-[-0.01em] border-b border-slate-100 pb-3 mt-12 mb-6">
                Quarry & Aggregates Recruitment
              </h2>

              <p className="text-slate-600 text-[17.5px] leading-[1.8] mb-5">
                Recruitment Direct UK supplies workers to the <strong className="text-slate-900 font-bold">quarrying, aggregates, asphalt, concrete, cement and extractive industries</strong> across the UK.
              </p>

              <p className="text-slate-600 text-[17.5px] leading-[1.8] mb-5">
                We understand the additional safety and competency requirements within quarry environments and can provide workers holding <strong className="text-slate-900 font-bold">MPQC qualifications</strong> where required by your site or project.
              </p>

              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 mt-4 pl-0 list-none">
                <CheckListItem>Quarry Operatives</CheckListItem>
                <CheckListItem>Loading Shovel Operators</CheckListItem>
                <CheckListItem>360 Excavator Operators</CheckListItem>
                <CheckListItem>Dump Truck Operators</CheckListItem>
                <CheckListItem>Plant Operators</CheckListItem>
                <CheckListItem>Mechanical Fitters</CheckListItem>
                <CheckListItem>Electricians</CheckListItem>
                <CheckListItem>Maintenance Engineers</CheckListItem>
                <CheckListItem>Supervisors</CheckListItem>
                <CheckListItem>Site Managers</CheckListItem>
              </ul>
            </section>

            <section>
              <h2 className="text-[#001B5E] text-[26px] md:text-[34px] font-extrabold tracking-[-0.01em] border-b border-slate-100 pb-3 mt-12 mb-6">
                Our Construction Recruitment Process
              </h2>

              <ol className="mt-6 space-y-4 pl-0 list-none">
                {[
                  { title: "Submit Requirement:", desc: "Complete AI Hire Now or Place Enquiry online 24/7." },
                  { title: "AI Candidate Search:", desc: "AI instantly searches our candidate database." },
                  { title: "Consultant Review:", desc: "We confirm your vacancy, location, rate and start date." },
                  { title: "Recruit & Screen:", desc: "We source and screen suitable applicants." },
                  { title: "Candidate Verification:", desc: "Every shortlisted candidate is reviewed by a consultant." },
                  { title: "Candidate Submission:", desc: "Suitable candidates are submitted quickly." }
                ].map((step, idx) => (
                  <li key={idx} className="relative pl-[45px] text-slate-600 text-[16.5px] leading-[1.6] list-none">
                    <span className="absolute left-0 top-[2px] bg-[#001B5E] text-white w-[26px] h-[26px] rounded-full flex items-center justify-center text-xs font-bold">
                      {idx + 1}
                    </span>
                    <strong className="text-slate-900 font-bold">{step.title}</strong> {step.desc}
                  </li>
                ))}
              </ol>
            </section>

            <section>
              <h2 className="text-[#001B5E] text-[26px] md:text-[34px] font-extrabold tracking-[-0.01em] border-b border-slate-100 pb-3 mt-12 mb-6">
                Ready to Hire Construction Staff?
              </h2>

              <p className="text-slate-600 text-[17.5px] leading-[1.8] mb-5">
                Looking for a trusted construction recruitment agency to supply temporary, contract or permanent construction staff across the UK?
              </p>

              <p className="text-slate-600 text-[17.5px] leading-[1.8] mb-5">
                Submit your staffing requirement online 24/7. AI instantly searches our candidate database before one of our consultants contacts you.
              </p>

              <div className="mt-6 flex flex-wrap gap-4">
                <Link href="/ai-hire-now" className={goldButtonClass}>
                  AI Hire Now <ArrowRight className="w-5 h-5" />
                </Link>
                <Link href="/contact" className={blueButtonClass}>
                  Contact Us
                </Link>
              </div>
            </section>

            <section className="mt-12 bg-slate-50 p-6 rounded-2xl border border-slate-100">
              <h2 className="text-[#001B5E] text-[26px] md:text-[34px] font-extrabold tracking-[-0.01em] border-b border-slate-200 pb-3 mb-6 mt-0">
                Construction Recruitment FAQs
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
                        className="w-full flex justify-between items-center text-left py-2 group focus:outline-none"
                      >
                        <span className="font-bold text-white text-[17px] group-hover:text-[#ffffff]/80 transition-colors">
                          {faq.question}
                        </span>
                        <ChevronDown
                          className={`w-5 h-5 text-slate-500 transition-transform duration-300 ${isOpen ? "transform rotate-180" : ""
                            }`}
                        />
                      </button>
                      <AnimatePresence initial={false}>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
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

          {/* Sidebar Area */}
          <div className="lg:col-span-4 space-y-8">
            <div className="bg-[#001B5E] text-white p-6 rounded-2xl shadow-md border border-slate-200 mt-0 lg:mt-6">
              <HardHat className="text-[#F7D774] w-10 h-10 mb-4" />
              <h3 className="text-white text-xl font-bold mb-2">Need Staff Now?</h3>
              <p className="text-slate-200 text-sm leading-relaxed mb-6">
                Submit staffing requests 24/7. AI screens our database to matches qualified construction workers in minutes.
              </p>
              <Link href="/ai-hire-now" className={`${goldButtonClass} w-full text-center`}>
                Submit Vacancy
              </Link>
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
          </div>
        </div>
      </main>

      <Footer />

      {/* JSON-LD Schemas */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": ["Organization", "ProfessionalService"],
            "name": "Recruitment Direct UK Ltd",
            "url": "https://www.rd1.co.uk",
            "logo": "https://www.rd1.co.uk/logo.png",
            "description": "Recruitment Direct UK is a construction recruitment agency supplying temporary, contract and permanent construction staff across the UK.",
            "foundingDate": "2006",
            "areaServed": ["United Kingdom", "England", "Scotland", "Wales"],
            "serviceType": [
              "Construction Recruitment",
              "Construction Recruitment Agency",
              "Temporary Construction Staff",
              "Permanent Construction Recruitment",
              "Contract Construction Recruitment",
              "Civil Engineering Recruitment",
              "Infrastructure Recruitment",
              "Facilities Management Recruitment",
              "Quarry and Aggregates Recruitment",
              "Plant Operator Recruitment",
              "CPCS Plant Operator Recruitment",
              "NPORS Plant Operator Recruitment"
            ]
          })
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Construction Recruitment Agency UK",
            "url": "https://www.rd1.co.uk/construction-recruitment-agency",
            "description": "Construction recruitment agency supplying temporary, contract and permanent construction staff across the UK.",
            "isPartOf": {
              "@type": "WebSite",
              "name": "Recruitment Direct UK",
              "url": "https://www.rd1.co.uk"
            }
          })
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "Do Recruitment Direct UK supply construction staff across the UK?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes. Recruitment Direct UK supplies temporary, contract and permanent construction staff across England, Scotland and Wales."
                }
              },
              {
                "@type": "Question",
                "name": "What construction roles do Recruitment Direct UK recruit for?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Recruitment Direct UK recruits labourers, skilled trades, CPCS and NPORS plant operators, site engineers, site managers, project managers, quantity surveyors and other construction professionals."
                }
              },
              {
                "@type": "Question",
                "name": "Can Recruitment Direct UK supply workers for quarries and aggregates?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes. Recruitment Direct UK supplies workers to quarrying, aggregates, asphalt, concrete, cement and extractive industry projects. Workers holding MPQC qualifications are available where required."
                }
              },
              {
                "@type": "Question",
                "name": "How does AI Hire Now work?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Clients submit their staffing requirement online 24/7. AI searches the Recruitment Direct UK candidate database before a consultant reviews the vacancy and contacts the client."
                }
              }
            ]
          })
        }}
      />
    </div>
  );
}
