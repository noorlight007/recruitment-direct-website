"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ArrowRight, CheckCircle2, Star, Shield, Heart } from "lucide-react";

// Helper component for standard checklist items
const CheckListItem = ({ children }: { children: React.ReactNode }) => (
  <li className="text-slate-600 text-[16.5px] mb-2.5 relative pl-7 leading-[1.6] list-none">
    <span className="absolute left-0 text-[#C99A1F] font-black text-lg">✓</span>
    {children}
  </li>
);

export default function HealthcareAgencyPage() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What healthcare sectors do you recruit for?",
      answer: "Recruitment Direct UK Ltd recruits across care homes, nursing homes, residential care settings, supported living facilities, domiciliary care services, mental health facilities, and local authority healthcare frameworks throughout the UK."
    },
    {
      question: "What care professionals can you supply?",
      answer: "We supply care assistants, support workers, senior care assistants, residential support workers, domiciliary care staff, mental health support workers, healthcare assistants, and specialist care personnel."
    },
    {
      question: "What compliance and vetting checks do you perform?",
      answer: "All care staff undergo strict compliance checks, including PVG Scheme/DBS clearance, right to work checks, professional registration verification (SSSC/NMC where applicable), reference verification, and mandatory training compliance."
    },
    {
      question: "Do you provide temporary care staff cover?",
      answer: "Yes. We specialize in supplying temporary healthcare staff to cover planned absences, unexpected shortages, shift vacancies, and long-term assignments."
    },
    {
      question: "Do you recruit permanent care staff?",
      answer: "Yes. We provide permanent recruitment solutions for healthcare organizations, recruiting managers, senior carers, support teams, and specialized care professionals."
    },
    {
      question: "How does AI Hire Now work?",
      answer: "Submit your care staffing requirement online 24/7. AI searches our healthcare database before a dedicated recruitment consultant reviews the vacancy details and contacts you to discuss candidate matches."
    },
    {
      question: "Why choose Recruitment Direct UK Ltd?",
      answer: "Since 2006, Recruitment Direct UK Ltd has delivered reliable, compliant healthcare staffing. We combine AI-driven search with comprehensive human verification to supply skilled, verified care staff when you need them."
    }
  ];

  const goldButtonClass = "rd-btn rd-btn-gold standard-cta-btn w-[200px] h-[52px] text-center justify-center";
  const blueButtonClass = "rd-btn bg-gradient-to-r from-black/80 to-[#151C62] text-white border border-[#001B5E] font-extrabold shadow-md standard-cta-btn w-[200px] h-[52px]";
  const goldButtonDefaultClass = "rd-btn rd-btn-gold standard-cta-btn";

  return (
    <div className="min-h-screen bg-[#ffffff] text-slate-900 font-sans">
      <Navbar />

      <main className="max-w-[1140px] mx-auto px-5 pt-[100px] md:pt-[120px] pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-8">
            {/* Hero Section */}
            <section className="mb-6">
              <span className="inline-block mb-3 px-3 py-1 bg-amber-50 text-[#C99A1F] border border-amber-200/50 rounded-full text-xs font-semibold uppercase tracking-wider">
                Compliant Healthcare Staffing Since 2006
              </span>

              <h1 className="text-black text-[38px] md:text-[54px] font-extrabold leading-[1.15] tracking-[-0.02em] mb-4">
                Healthcare Recruitment Agency UK | Temporary & Permanent Care Staff
              </h1>

              <p className="text-black text-[17.5px] leading-[1.8] mb-3">
                <strong>Recruitment Direct UK Ltd</strong> is a trusted <strong>Healthcare Recruitment Agency</strong> supplying <strong>temporary, contract, and permanent care staff</strong> to care settings across England, Scotland, Wales, and Northern Ireland.
              </p>

              <p className="text-black text-[17.5px] leading-[1.8] mb-3">
                We support care homes, supported living providers, residential settings, domiciliary care services, and local authority frameworks by supplying vetted and experienced care professionals who are ready to make a positive impact.
              </p>

              <p className="text-black text-[17.5px] leading-[1.8] mb-3">
                Whether you require temporary cover for shift gaps or permanent team members, we combine healthcare recruitment expertise with AI-powered database searches to identify suitable staff quickly, with every shortlisted candidate verified by our consultants.
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
                <span className="bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-100">PVG/DBS Cleared</span>
                <span className="bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-100">ISO 9001 Certified</span>
                <span className="bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-100">REC Corporate Member</span>
                <span className="bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-100">Trusted Since 2006</span>
              </div>
            </section>

            {/* Hero Image */}
            <div className="relative w-full h-[280px] md:h-[420px] rounded-2xl overflow-hidden mb-12 shadow-md border border-slate-200">
              <Image
                src="/images/Healthcares.png"
                alt="Healthcare Recruitment Agency supplying temporary and permanent care assistants and support workers"
                fill
                priority
                className="object-cover"
              />
            </div>

            {/* Introduction */}
            <section className="mb-12">
              <h2 className="text-black text-[26px] md:text-[34px] font-extrabold tracking-[-0.01em] border-b border-slate-100 pb-3 mb-6">
                Healthcare Recruitment Supply
              </h2>

              <p className="text-black text-[17.5px] leading-[1.8] mb-4">
                Recruitment Direct UK Ltd delivers high-quality healthcare recruitment solutions designed to help care providers maintain staffing levels without compromising quality of care. Since 2006, we have supplied qualified care assistants and support workers to care homes and supported living environments.
              </p>

              <p className="text-black text-[17.5px] leading-[1.8] mb-4">
                We understand that compliance and speed are critical in healthcare. Our AI recruitment technology monitors candidate availability 24/7, enabling our experienced consultants to present verified, compliant staff to cover shift vacancies quickly.
              </p>
            </section>

            {/* Why Choose Recruitment Direct */}
            <section className="mb-12">
              <h2 className="text-black text-[26px] md:text-[34px] font-extrabold tracking-[-0.01em] border-b border-slate-100 pb-3 mb-6">
                Why Choose Recruitment Direct UK Ltd?
              </h2>

              <p className="text-black text-[17.5px] leading-[1.8] mb-6">
                Healthcare providers choose Recruitment Direct UK Ltd because of our commitment to compliance, our rapid response times, and the high standards of our care personnel.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                  <h3 className="text-black font-bold text-lg mb-2">Temporary Care Staff</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    Reliable access to temporary care assistants and support workers to cover emergency gaps, sickness, and planned leave.
                  </p>
                </div>
                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                  <h3 className="text-black font-bold text-lg mb-2">Strict Compliance</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    Every candidate undergoes extensive screening, PVG/DBS verification, right to work checks, and training compliance.
                  </p>
                </div>
                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                  <h3 className="text-black font-bold text-lg mb-2">Permanent Placement</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    Tailored recruitment campaigns to source experienced permanent care staff, senior assistants, and managers.
                  </p>
                </div>
              </div>
            </section>

            {/* Healthcare Recruitment Services */}
            <section className="mb-12">
              <h2 className="text-black text-[26px] md:text-[34px] font-extrabold tracking-[-0.01em] border-b border-slate-100 pb-3 mb-6">
                Healthcare Recruitment Services
              </h2>

              <p className="text-black text-[17.5px] leading-[1.8] mb-6">
                We design our services around the requirements of modern healthcare providers. We combine rigorous human checks with AI database search to ensure care standards are consistently maintained.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="p-5 bg-white border border-slate-100 rounded-xl shadow-sm">
                  <h3 className="text-black font-bold text-base mb-1.5">Temporary Healthcare Staffing</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">Fast supply of qualified care assistants and support workers for short-term cover, shift gaps, and contract roles.</p>
                </div>
                <div className="p-5 bg-white border border-slate-100 rounded-xl shadow-sm">
                  <h3 className="text-black font-bold text-base mb-1.5">Rigorous Vetting Process</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">Comprehensive background checks including PVG/DBS, SSSC/NMC status, mandatory training reviews, and extensive reference checks.</p>
                </div>
                <div className="p-5 bg-white border border-slate-100 rounded-xl shadow-sm">
                  <h3 className="text-black font-bold text-base mb-1.5">Permanent Care Recruitment</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">Connecting care providers with qualified permanent staff, from entry-level carers to residential care managers.</p>
                </div>
                <div className="p-5 bg-white border border-slate-100 rounded-xl shadow-sm">
                  <h3 className="text-black font-bold text-base mb-1.5">AI-Powered Database Sourcing</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">AI screens availability and matches candidate qualifications to care settings, before a consultant reviews and verifies each selection.</p>
                </div>
              </div>
            </section>

            {/* Healthcare Roles */}
            <section className="mb-12">
              <h2 className="text-black text-[26px] md:text-[34px] font-extrabold tracking-[-0.01em] border-b border-slate-100 pb-3 mb-6">
                Healthcare Roles We Recruit
              </h2>

              <p className="text-black text-[17.5px] leading-[1.8] mb-6">
                Recruitment Direct UK Ltd sources and supplies qualified healthcare professionals for diverse care settings, ensuring that safety, dignity, and standard of care are prioritized.
              </p>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-6">
                <div>
                  <h4 className="text-black font-bold text-base mb-2">Care Support Staff</h4>
                  <ul className="pl-0 list-none space-y-1.5">
                    <CheckListItem>Care Assistants</CheckListItem>
                    <CheckListItem>Support Workers</CheckListItem>
                    <CheckListItem>Healthcare Assistants</CheckListItem>
                    <CheckListItem>Domiciliary Carers</CheckListItem>
                    <CheckListItem>Personal Carers</CheckListItem>
                    <CheckListItem>Home Care Staff</CheckListItem>
                  </ul>
                </div>

                <div>
                  <h4 className="text-black font-bold text-base mb-2">Specialist Care</h4>
                  <ul className="pl-0 list-none space-y-1.5">
                    <CheckListItem>Mental Health Carers</CheckListItem>
                    <CheckListItem>Learning Disability staff</CheckListItem>
                    <CheckListItem>Complex Care Carers</CheckListItem>
                    <CheckListItem>Palliative Care assistants</CheckListItem>
                    <CheckListItem>Live-in Carers</CheckListItem>
                    <CheckListItem>Rehabilitation assistants</CheckListItem>
                  </ul>
                </div>

                <div>
                  <h4 className="text-black font-bold text-base mb-2">Management & Seniors</h4>
                  <ul className="pl-0 list-none space-y-1.5">
                    <CheckListItem>Senior Care Assistants</CheckListItem>
                    <CheckListItem>Care Team Leaders</CheckListItem>
                    <CheckListItem>Residential Managers</CheckListItem>
                    <CheckListItem>Care Coordinators</CheckListItem>
                    <CheckListItem>Deputy Managers</CheckListItem>
                    <CheckListItem>Deputy Care Leads</CheckListItem>
                  </ul>
                </div>
              </div>
            </section>

            {/* Healthcare Sectors */}
            <section className="mb-12">
              <h2 className="text-black text-[26px] md:text-[34px] font-extrabold tracking-[-0.01em] border-b border-slate-100 pb-3 mb-6">
                Healthcare Sectors We Support
              </h2>

              <p className="text-black text-[17.5px] leading-[1.8] mb-6">
                Our care workers support a wide variety of healthcare settings, providing temporary shift cover and permanent placement solutions.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
                {[
                  { title: "Residential Care Homes", desc: "Supplying vetted care assistants and support workers to maintain safe staffing ratios in elderly care homes." },
                  { title: "Nursing Care Facilities", desc: "Providing support staff and senior assistants to assist in clinical and nursing environments." },
                  { title: "Supported Living", desc: "Staffing supported living and residential facilities for adults with learning disabilities or mental health needs." },
                  { title: "Domiciliary Care Services", desc: "Connecting home care providers with reliable care staff for visiting care and live-in care assignments." },
                  { title: "Mental Health Settings", desc: "Providing specialist support staff trained to work in mental health hospitals and rehabilitation clinics." },
                  { title: "Local Authority Frameworks", desc: "Supplying compliant healthcare staff through framework agreements with councils and public sector providers." }
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
                Recruitment Direct UK Ltd prioritizes safety and compliance. We operate in strict alignment with SSSC (Scottish Social Services Council) standards, the Care Inspectorate, and equivalent bodies in England and Wales. Every care assistant and support worker undergoes an intensive vetting process.
              </p>

              <p className="text-black text-[17.5px] leading-[1.8] mb-4">
                No care worker is supplied without comprehensive PVG/DBS check clearance, verification of training credentials, full reference checking, and right to work checks. This ensures that every worker on site maintains the high standard of care expected by our clients.
              </p>
            </section>

            {/* Need Care Staff? Call CTA */}
            <section>
              <h2 className="text-black text-[26px] md:text-[34px] font-extrabold tracking-[-0.01em] border-b border-slate-100 pb-3 mb-6">
                Looking to Recruit Healthcare Staff?
              </h2>

              <p className="text-black text-[17.5px] leading-[1.8] mb-5">
                Whether you need urgent cover for a shift today or are looking to hire permanent care assistants, Recruitment Direct UK Ltd delivers fully verified, compliant staff.
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
                Healthcare Staffing FAQs
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
              <Heart className="text-[#F7D774] w-10 h-10 mb-4" />
              <h3 className="text-white text-xl font-bold mb-2">Need Care Staff?</h3>
              <p className="text-slate-200 text-sm leading-relaxed mb-6">
                Submit care staffing requests 24/7. AI screens our database to match qualified care assistants and support workers in minutes.
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
                  <span className="text-slate-600 text-sm">Full background checks (PVG/DBS)</span>
                </div>
                <div className="flex gap-3">
                  <CheckCircle2 className="text-[#C99A1F] w-5 h-5 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-600 text-sm">SSSC compliance and framework ready</span>
                </div>
              </div>
            </div>

            {/* Related Sector Agencies widget */}
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
              <h3 className="text-slate-800 text-lg font-bold mb-4">Related Sector Agencies</h3>
              <div className="space-y-3 text-sm">
                <Link href="/education-recruitment-agency" className="block text-[#001B5E] hover:text-[#C99A1F] font-semibold transition-colors">
                  → Education Recruitment
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
                "name": "Healthcare Recruitment Agency",
                "item": "https://rd1.co.uk/healthcare-recruitment-agency"
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
            "image": "https://rd1.co.uk/images/Healthcares.png",
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
            "name": "Healthcare Recruitment Agency UK",
            "url": "https://rd1.co.uk/healthcare-recruitment-agency",
            "description": "Healthcare Recruitment Agency supplying temporary, contract and permanent care assistants, support workers and care professionals across the UK.",
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
