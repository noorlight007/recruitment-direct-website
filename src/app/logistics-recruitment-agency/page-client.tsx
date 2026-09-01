"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingElements from "@/components/FloatingElements";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ArrowRight, CheckCircle2, Star, Shield, Truck } from "lucide-react";

// Helper component for standard checklist items
const CheckListItem = ({ children }: { children: React.ReactNode }) => (
  <li className="text-slate-600 text-[16.5px] mb-2.5 relative pl-7 leading-[1.6] list-none">
    <span className="absolute left-0 text-[#C99A1F] font-black text-lg">✓</span>
    {children}
  </li>
);

export default function LogisticsSectorPageClient() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What types of drivers do you recruit for?",
      answer: "Recruitment Direct UK Ltd recruits experienced construction and logistics drivers, including tipper drivers, mixer drivers, roll-on roll-off drivers, skip drivers, HIAB drivers, low loader drivers, plant transport drivers, and general construction HGV drivers."
    },
    {
      question: "What locations do you cover?",
      answer: "We supply construction drivers across Glasgow, Edinburgh, Falkirk (including Stirling, Livingston, Cumbernauld), Aberdeen, Dundee, throughout Scotland, and across the UK."
    },
    {
      question: "What compliance and vetting checks do you perform?",
      answer: "All drivers undergo strict compliance checks, including driving licence checks (verification of categories, points, and endorsements), CPC card verification, tachograph card status, right to work checks, and reference verification."
    },
    {
      question: "Do you provide temporary driver cover?",
      answer: "Yes. We specialize in supplying temporary drivers to cover planned absences, unexpected shortages, peak workloads, and long-term project assignments."
    },
    {
      question: "Do you recruit permanent drivers?",
      answer: "Yes. We provide permanent recruitment solutions for civil engineering firms, housebuilders, and logistics operators, sourcing qualified drivers for permanent roles."
    },
    {
      question: "How does AI Hire Now work?",
      answer: "Submit your driver requirements online 24/7. AI searches our database before a dedicated recruitment consultant reviews the vacancy details and contacts you to discuss candidate matches."
    },
    {
      question: "Why choose Recruitment Direct UK Ltd?",
      answer: "Since 2006, Recruitment Direct UK Ltd has delivered reliable, compliant staffing. We combine AI-driven search with comprehensive human verification to supply skilled, verified drivers when you need them."
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
                Construction Driver Recruitment
              </span>

              <h1 className="text-black text-[38px] md:text-[54px] font-extrabold leading-[1.15] tracking-[-0.02em] mb-4">
                Construction Drivers | Logistics & HGV Recruitment Agency
              </h1>

              <p className="text-black text-[17.5px] leading-[1.8] mb-3">
                <strong>Recruitment Direct UK Ltd</strong> is a trusted <strong>Construction Driver Recruitment Agency</strong> supplying reliable, consultant-verified construction drivers across Glasgow, Edinburgh, Falkirk (see our dedicated <a href="/locations/scotland/falkirk" className="text-blue-600 hover:underline">Recruitment Agency Falkirk</a> page), Stirling, Livingston, Cumbernauld, Aberdeen, Dundee, throughout Scotland, and across the UK.
              </p>

              <p className="text-black text-[17.5px] leading-[1.8] mb-3">
                We supply tipper drivers, mixer drivers, and construction HGV drivers to projects across Scotland, supporting contractors who require reliable, site-ready drivers for civil engineering, infrastructure, and building projects.
              </p>

              <p className="text-black text-[17.5px] leading-[1.8] mb-3">
                Whether you require temporary cover for site work or permanent team members, we combine logistics recruitment expertise with AI-powered database searches to identify suitable candidates quickly, with every shortlisted applicant reviewed and human verified by a Recruitment Direct consultant before submission.
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
                <span className="bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-100">Strict Vetting Checks</span>
                <span className="bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-100">Licence & CPC Verified</span>
                <span className="bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-100">ISO 9001 Certified</span>
                <span className="bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-100">REC Corporate Member</span>
                <span className="bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-100">Trusted Since 2006</span>
              </div>
            </section>

            {/* Hero Image */}
            <div className="relative w-full h-[280px] md:h-[420px] rounded-2xl overflow-hidden mb-12 shadow-md border border-slate-200">
              <Image
                src="/images/Logisticss.png"
                alt="Logistics Recruitment Agency supplying temporary and permanent construction HGV drivers"
                fill
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
                className="object-cover"
              />
            </div>

            {/* Introduction */}
            <section className="mb-12">
              <h2 className="text-black text-[26px] md:text-[34px] font-extrabold tracking-[-0.01em] border-b border-slate-100 pb-3 mb-6">
                Construction Driver Supply Built for Site Work
              </h2>

              <p className="text-black text-[17.5px] leading-[1.8] mb-4">
                Recruitment Direct supplies experienced, compliant construction drivers for civil engineering, infrastructure, and building projects. We supply tipper drivers, mixer drivers, and construction HGV drivers to projects across Scotland, supporting contractors who require reliable, site-ready drivers.
              </p>

              <p className="text-black text-[17.5px] leading-[1.8] mb-4">
                We understand that compliance and speed are critical in logistics. Our AI recruitment technology monitors candidate availability 24/7, enabling our experienced consultants to present verified, compliant drivers to cover shift vacancies quickly.
              </p>
            </section>

            {/* Why Choose Recruitment Direct */}
            <section className="mb-12">
              <h2 className="text-black text-[26px] md:text-[34px] font-extrabold tracking-[-0.01em] border-b border-slate-100 pb-3 mb-6">
                Why Choose Recruitment Direct UK Ltd?
              </h2>

              <p className="text-black text-[17.5px] leading-[1.8] mb-6">
                Contractors and logistics firms choose Recruitment Direct UK Ltd because of our commitment to compliance, our rapid response times, and the high standards of our drivers.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                  <h3 className="text-black font-bold text-lg mb-2">Temporary Driver Supply</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    Reliable access to temporary construction drivers to cover emergency gaps, sickness, peak workloads, and planned leave.
                  </p>
                </div>
                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                  <h3 className="text-black font-bold text-lg mb-2">Strict Compliance</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    Every candidate undergoes extensive screening, including driving licence checks, CPC card verification, right to work checks, and reference verification.
                  </p>
                </div>
                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                  <h3 className="text-black font-bold text-lg mb-2">Permanent Placement</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    Tailored recruitment campaigns to source experienced permanent construction drivers, site logistics staff, and transport managers.
                  </p>
                </div>
              </div>
            </section>

            {/* Construction Driver Recruitment Services */}
            <section className="mb-12">
              <h2 className="text-black text-[26px] md:text-[34px] font-extrabold tracking-[-0.01em] border-b border-slate-100 pb-3 mb-6">
                Construction Driver Recruitment Services
              </h2>

              <p className="text-black text-[17.5px] leading-[1.8] mb-6">
                We design our services around the requirements of modern construction and logistics projects. We combine rigorous human checks with AI database search to ensure site standards are consistently maintained.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="p-5 bg-white border border-slate-100 rounded-xl shadow-sm">
                  <h3 className="text-black font-bold text-base mb-1.5">Temporary Driver Staffing</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">Fast supply of qualified tipper drivers, mixer drivers, and HGV drivers for short-term cover, peak demands, and contract roles.</p>
                </div>
                <div className="p-5 bg-white border border-slate-100 rounded-xl shadow-sm">
                  <h3 className="text-black font-bold text-base mb-1.5">Rigorous Vetting Process</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">Comprehensive background checks including driving licence category verification, CPC and tachograph card checks, and extensive reference checks.</p>
                </div>
                <div className="p-5 bg-white border border-slate-100 rounded-xl shadow-sm">
                  <h3 className="text-black font-bold text-base mb-1.5">Permanent Driver Recruitment</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">Connecting contractors with qualified permanent drivers, from tipper operators to logistics and transport management professionals.</p>
                </div>
                <div className="p-5 bg-white border border-slate-100 rounded-xl shadow-sm">
                  <h3 className="text-black font-bold text-base mb-1.5">AI-Powered Sourcing</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">AI screens availability and matches candidate qualifications to site requirements, before a consultant reviews and verifies each selection.</p>
                </div>
              </div>
            </section>

            {/* Types of Construction Drivers We Supply */}
            <section className="mb-12">
              <h2 className="text-black text-[26px] md:text-[34px] font-extrabold tracking-[-0.01em] border-b border-slate-100 pb-3 mb-6">
                Types of Construction Drivers We Supply
              </h2>

              <p className="text-black text-[17.5px] leading-[1.8] mb-6">
                Recruitment Direct UK Ltd sources and supplies qualified construction drivers for diverse projects, ensuring that site safety, efficiency, and compliance are prioritized.
              </p>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-6">
                <div>
                  <h4 className="text-black font-bold text-base mb-2">Heavy Goods Vehicles</h4>
                  <ul className="pl-0 list-none space-y-1.5">
                    <CheckListItem>Tipper Drivers</CheckListItem>
                    <CheckListItem>Mixer Drivers</CheckListItem>
                    <CheckListItem>Construction HGV Drivers</CheckListItem>
                    <CheckListItem>HIAB Drivers</CheckListItem>
                  </ul>
                </div>

                <div>
                  <h4 className="text-black font-bold text-base mb-2">Specialist Site Vehicles</h4>
                  <ul className="pl-0 list-none space-y-1.5">
                    <CheckListItem>Roll-on Roll-off Drivers</CheckListItem>
                    <CheckListItem>Skip Drivers</CheckListItem>
                    <CheckListItem>Low Loader Drivers</CheckListItem>
                    <CheckListItem>Plant Transport Drivers</CheckListItem>
                  </ul>
                </div>

                <div>
                  <h4 className="text-black font-bold text-base mb-2">Plant Operators</h4>
                  <ul className="pl-0 list-none space-y-1.5">
                    <CheckListItem>Plant Drivers</CheckListItem>
                    <CheckListItem>Dump Truck Operators</CheckListItem>
                    <CheckListItem>Telehandler Operators</CheckListItem>
                    <CheckListItem>Excavator Operators</CheckListItem>
                  </ul>
                </div>
              </div>
            </section>

            {/* Sectors We Support */}
            <section className="mb-12">
              <h2 className="text-black text-[26px] md:text-[34px] font-extrabold tracking-[-0.01em] border-b border-slate-100 pb-3 mb-6">
                Sectors We Support
              </h2>

              <p className="text-black text-[17.5px] leading-[1.8] mb-6">
                Our construction drivers support a wide variety of sectors, providing temporary shift cover and permanent placement solutions.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
                {[
                  { title: "Civil Engineering", desc: "Supplying vetted tipper and mixer drivers to maintain progress on roadworks, foundations, and major earthworks." },
                  { title: "Infrastructure Projects", desc: "Providing transport and logistics staff to support large-scale utilities, rail, and public sector developments." },
                  { title: "Residential Developments", desc: "Staffing residential construction sites with experienced material transport drivers and HIAB operators." },
                  { title: "Commercial Construction", desc: "Connecting principal contractors with reliable drivers for site clearance, material deliveries, and waste logistics." },
                  { title: "Utilities & Energy", desc: "Providing specialist drivers trained to work alongside utilities contractors and renewable energy projects." },
                  { title: "Site Logistics", desc: "Supplying compliant low loader and skip drivers through frameworks and project agreements nationwide." }
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
                Strict Vetting and Vouched Compliance
              </h2>

              <p className="text-black text-[17.5px] leading-[1.8] mb-4">
                Recruitment Direct UK Ltd prioritizes safety and compliance. We operate in strict alignment with DVLA standards, CPC requirements, and REC guidelines. Every driver undergoes an intensive vetting process.
              </p>

              <p className="text-black text-[17.5px] leading-[1.8] mb-4">
                No construction driver is supplied without comprehensive licence checks, CPC status verification, reference checking, and right to work checks. This ensures that every worker on site maintains the high standards expected by our clients.
              </p>
            </section>

            {/* Need Drivers? Call CTA */}
            <section>
              <h2 className="text-black text-[26px] md:text-[34px] font-extrabold tracking-[-0.01em] border-b border-slate-100 pb-3 mb-6">
                Looking to Recruit Construction Drivers?
              </h2>

              <p className="text-black text-[17.5px] leading-[1.8] mb-5">
                Whether you need urgent cover for a shift today or are looking to hire permanent drivers, Recruitment Direct UK Ltd delivers fully verified, compliant candidates.
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
                Construction Driver Staffing FAQs
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
              <Truck className="text-[#F7D774] w-10 h-10 mb-4" />
              <h3 className="text-white text-xl font-bold mb-2">Need Drivers?</h3>
              <p className="text-slate-200 text-sm leading-relaxed mb-6">
                Submit staffing requests 24/7. AI screens our database to match qualified construction drivers in minutes.
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
                  <span className="text-slate-600 text-sm">Full background & licence checks</span>
                </div>
                <div className="flex gap-3">
                  <CheckCircle2 className="text-[#C99A1F] w-5 h-5 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-600 text-sm">CPC & tachograph compliant</span>
                </div>
              </div>
            </div>

            {/* Related Sector Agencies widget */}
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
              <h3 className="text-slate-800 text-lg font-bold mb-4">Related Sector Agencies</h3>
              <div className="space-y-3 text-sm">
                <Link href="/construction-recruitment-agency" className="block text-[#001B5E] hover:text-[#C99A1F] font-semibold transition-colors">
                  → Construction Recruitment
                </Link>
                <Link href="/engineering-recruitment-agency" className="block text-[#001B5E] hover:text-[#C99A1F] font-semibold transition-colors">
                  → Engineering Recruitment
                </Link>
                <Link href="/healthcare-recruitment-agency" className="block text-[#001B5E] hover:text-[#C99A1F] font-semibold transition-colors">
                  → Healthcare Recruitment
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
      <FloatingElements />

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
                "name": "Logistics Recruitment Agency",
                "item": "https://rd1.co.uk/logistics-recruitment-agency"
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
              "https://www.linkedin.com/company/recruitment-direct/"
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
            "image": "https://rd1.co.uk/images/Logisticss.png",
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
            "name": "Logistics & Construction Driver Recruitment Agency",
            "url": "https://rd1.co.uk/logistics-recruitment-agency",
            "description": "Logistics and construction driver recruitment agency supplying temporary, contract and permanent drivers across the UK.",
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
