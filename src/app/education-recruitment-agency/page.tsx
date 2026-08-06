"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ArrowRight, CheckCircle2, Star, Shield, GraduationCap } from "lucide-react";

// Helper component for standard checklist items
const CheckListItem = ({ children }: { children: React.ReactNode }) => (
  <li className="text-slate-600 text-[16.5px] mb-2.5 relative pl-7 leading-[1.6] list-none">
    <span className="absolute left-0 text-[#C99A1F] font-black text-lg">✓</span>
    {children}
  </li>
);

export default function EducationAgencyPage() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What education sectors do you recruit for?",
      answer: "Recruitment Direct UK Ltd recruits across primary schools, secondary schools, nurseries, special educational needs (SEN) settings, multi-academy trusts (MATs), and local authority educational frameworks."
    },
    {
      question: "What education professionals can you supply?",
      answer: "We supply teaching assistants, learning support assistants, SEN support staff, cover supervisors, nursery nurses, early years practitioners, supply teachers, and behavioral support specialists."
    },
    {
      question: "Are your candidates vetted for safeguarding?",
      answer: "Yes, absolutely. Safeguarding is our highest priority. All candidates undergo strict vetting including PVG Scheme/DBS clearance, children's barred list checks, right to work, qualification verification, reference checks, and safeguarding training verification."
    },
    {
      question: "Do you supply staff through frameworks?",
      answer: "Yes. Recruitment Direct UK Ltd is an approved supplier on key local authority and national educational staffing frameworks, ensuring full compliance and competitive pricing structures."
    },
    {
      question: "Do you provide temporary or supply cover?",
      answer: "Yes. We specialize in providing supply teachers and support staff for daily cover, emergency morning bookings, sickness, maternity leave, and long-term contract coverage."
    },
    {
      question: "How does AI Hire Now work?",
      answer: "Submit your vacancy details online 24/7. AI screens our database to match qualified candidates before an education consultant reviews the requirements and verifies the shortlist."
    },
    {
      question: "Why choose Recruitment Direct UK Ltd?",
      answer: "Since 2006, we have supported schools and local authorities with reliable recruitment. We combine AI candidate matching with rigorous human compliance checks to deliver dependable education staff."
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
                Safe & Compliant Education Staffing Since 2006
              </span>

              <h1 className="text-black text-[38px] md:text-[54px] font-extrabold leading-[1.15] tracking-[-0.02em] mb-4">
                Education Recruitment Agency UK | Temporary & Permanent Teaching Staff
              </h1>

              <p className="text-black text-[17.5px] leading-[1.8] mb-3">
                <strong>Recruitment Direct UK Ltd</strong> is a registered <strong>Education Recruitment Agency</strong> supplying <strong>teaching assistants, supply teachers, and learning support staff</strong> to educational institutions across England, Scotland, Wales, and Northern Ireland.
              </p>

              <p className="text-black text-[17.5px] leading-[1.8] mb-3">
                We support schools, academies, nurseries, special educational needs (SEN) providers, and local authorities by supplying reliable, vetted classroom support and teaching staff through approved frameworks.
              </p>

              <p className="text-black text-[17.5px] leading-[1.8] mb-3">
                Whether you need daily emergency supply cover or are looking for permanent staff, our experienced consultants combine education sector expertise with AI search to match candidates quickly and verify all credentials.
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
                <span className="bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-100">Approved Framework Supplier</span>
                <span className="bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-100">Vetted & PVG/DBS Checked</span>
                <span className="bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-100">ISO 9001 Certified</span>
                <span className="bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-100">REC Corporate Member</span>
                <span className="bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-100">Trusted Since 2006</span>
              </div>
            </section>

            {/* Hero Image */}
            <div className="relative w-full h-[280px] md:h-[420px] rounded-2xl overflow-hidden mb-12 shadow-md border border-slate-200">
              <Image
                src="/images/Educations.png"
                alt="Education Recruitment Agency supplying supply teachers, teaching assistants and learning support workers"
                fill
                priority
                className="object-cover"
              />
            </div>

            {/* Introduction */}
            <section className="mb-12">
              <h2 className="text-black text-[26px] md:text-[34px] font-extrabold tracking-[-0.01em] border-b border-slate-100 pb-3 mb-6">
                Education Staffing Supply
              </h2>

              <p className="text-black text-[17.5px] leading-[1.8] mb-4">
                Recruitment Direct UK Ltd provides compliant and reliable education staffing solutions, helping schools, MATs, and nurseries maintain learning environments with qualified professionals. Since 2006, we have supplied temporary and permanent teaching staff.
              </p>

              <p className="text-black text-[17.5px] leading-[1.8] mb-4">
                Safeguarding is at the center of our operation. Our recruitment consultants review and verify all safeguarding checks, professional registries, and qualifications before candidates are presented to any learning environment.
              </p>
            </section>

            {/* Why Choose Recruitment Direct */}
            <section className="mb-12">
              <h2 className="text-black text-[26px] md:text-[34px] font-extrabold tracking-[-0.01em] border-b border-slate-100 pb-3 mb-6">
                Why Choose Recruitment Direct UK Ltd?
              </h2>

              <p className="text-black text-[17.5px] leading-[1.8] mb-6">
                We combine industry-leading compliance protocols with speed and technology to deliver outstanding educational support staff when schools need them most.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                  <h3 className="text-black font-bold text-lg mb-2">Safeguarding First</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    A rigorous vetting policy matching SSSC, GTC, and DfE standards, with full PVG/DBS checks and barred list verification.
                  </p>
                </div>
                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                  <h3 className="text-black font-bold text-lg mb-2">Framework Approved</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    We supply education staff through approved local authority and national purchasing frameworks, guaranteeing transparent rates.
                  </p>
                </div>
                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                  <h3 className="text-black font-bold text-lg mb-2">AI-Driven Supply</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    AI screening matches certified, available supply staff to your school quickly to cover sudden absences or emergencies.
                  </p>
                </div>
              </div>
            </section>

            {/* Education Recruitment Services */}
            <section className="mb-12">
              <h2 className="text-black text-[26px] md:text-[34px] font-extrabold tracking-[-0.01em] border-b border-slate-100 pb-3 mb-6">
                Education Recruitment Services
              </h2>

              <p className="text-black text-[17.5px] leading-[1.8] mb-6">
                We support schools, nurseries, and academy trusts with flexible recruitment solutions for teaching assistants, support staff, and qualified teachers.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="p-5 bg-white border border-slate-100 rounded-xl shadow-sm">
                  <h3 className="text-black font-bold text-base mb-1.5">Supply Teacher & Cover Supply</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">Fast supply of qualified teachers and cover supervisors for day-to-day absences, sick cover, and short-term assignments.</p>
                </div>
                <div className="p-5 bg-white border border-slate-100 rounded-xl shadow-sm">
                  <h3 className="text-black font-bold text-base mb-1.5">Teaching Assistant Placements</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">Providing experienced classroom assistants, learning support workers, and early years practitioners to assist teaching teams.</p>
                </div>
                <div className="p-5 bg-white border border-slate-100 rounded-xl shadow-sm">
                  <h3 className="text-black font-bold text-base mb-1.5">Specialist SEN Support Staff</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">Recruiting skilled behavioral support workers and special needs assistants for dedicated one-to-one or group support.</p>
                </div>
                <div className="p-5 bg-white border border-slate-100 rounded-xl shadow-sm">
                  <h3 className="text-black font-bold text-base mb-1.5">Permanent Education Hires</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">Connecting schools with permanent teaching staff, SEN coordinators, subject specialists, and senior leadership teams.</p>
                </div>
              </div>
            </section>

            {/* Education Roles */}
            <section className="mb-12">
              <h2 className="text-black text-[26px] md:text-[34px] font-extrabold tracking-[-0.01em] border-b border-slate-100 pb-3 mb-6">
                Education Roles We Recruit
              </h2>

              <p className="text-black text-[17.5px] leading-[1.8] mb-6">
                We recruit qualified, safe, and professional personnel across multiple educational disciplines:
              </p>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-6">
                <div>
                  <h4 className="text-black font-bold text-base mb-2">Classroom Support</h4>
                  <ul className="pl-0 list-none space-y-1.5">
                    <CheckListItem>Teaching Assistants</CheckListItem>
                    <CheckListItem>Learning Support Staff</CheckListItem>
                    <CheckListItem>Classroom Assistants</CheckListItem>
                    <CheckListItem>Cover Supervisors</CheckListItem>
                    <CheckListItem>Scribes & Readers</CheckListItem>
                  </ul>
                </div>

                <div>
                  <h4 className="text-black font-bold text-base mb-2">Specialist & SEN</h4>
                  <ul className="pl-0 list-none space-y-1.5">
                    <CheckListItem>SEN Support Assistants</CheckListItem>
                    <CheckListItem>1:1 Support Workers</CheckListItem>
                    <CheckListItem>Behavioral Specialists</CheckListItem>
                    <CheckListItem>Speech & Language assistants</CheckListItem>
                    <CheckListItem>Autism Support staff</CheckListItem>
                  </ul>
                </div>

                <div>
                  <h4 className="text-black font-bold text-base mb-2">Early Years & Teaching</h4>
                  <ul className="pl-0 list-none space-y-1.5">
                    <CheckListItem>Supply Teachers</CheckListItem>
                    <CheckListItem>Nursery Nurses</CheckListItem>
                    <CheckListItem>Early Years Practitioners</CheckListItem>
                    <CheckListItem>Primary Teachers</CheckListItem>
                    <CheckListItem>Secondary Teachers</CheckListItem>
                  </ul>
                </div>
              </div>
            </section>

            {/* Education Sectors */}
            <section className="mb-12">
              <h2 className="text-black text-[26px] md:text-[34px] font-extrabold tracking-[-0.01em] border-b border-slate-100 pb-3 mb-6">
                Education Sectors We Support
              </h2>

              <p className="text-black text-[17.5px] leading-[1.8] mb-6">
                Our candidates support diverse educational institutions, ensuring continuity of learning and a safe classroom environment.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
                {[
                  { title: "Primary Schools", desc: "Supplying supply teachers, early years assistants, and classroom helpers to primary and junior schools." },
                  { title: "Secondary Schools", desc: "Providing subject-specialist supply teachers, cover supervisors, and learning support assistants." },
                  { title: "Nurseries & Early Years", desc: "Connecting early years providers with qualified nursery practitioners and support staff." },
                  { title: "SEN Settings", desc: "Supplying specialist personnel to special schools, pupil referral units (PRUs), and SEN departments." },
                  { title: "Multi-Academy Trusts", desc: "Supporting MATs with strategic recruitment partnerships, permanent campaigns, and supply pools." },
                  { title: "Local Authority Frameworks", desc: "Delivering fully audited educational support staff through council supply framework agreements." }
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
                Gold-Standard Vetting & Safeguarding
              </h2>

              <p className="text-black text-[17.5px] leading-[1.8] mb-4">
                Recruitment Direct UK Ltd operates a strict, zero-compromise vetting policy for all education personnel. Safe recruitment is essential to protecting children in educational environments. We verify all qualifications, right to work status, reference history, and professional body registry standing (such as the GTC).
              </p>

              <p className="text-black text-[17.5px] leading-[1.8] mb-4">
                All supply teachers, teaching assistants, and support workers undergo an extensive PVG Scheme/DBS background clearance check. We perform continuous reviews to maintain compliance with DfE (Department for Education) and Care Inspectorate regulations.
              </p>
            </section>

            {/* Need Education Staff? Call CTA */}
            <section>
              <h2 className="text-black text-[26px] md:text-[34px] font-extrabold tracking-[-0.01em] border-b border-slate-100 pb-3 mb-6">
                Looking to Recruit Education Staff?
              </h2>

              <p className="text-black text-[17.5px] leading-[1.8] mb-5">
                Whether you need immediate supply cover for tomorrow morning or are recruiting a permanent teaching assistant, Recruitment Direct UK Ltd can support your school with safe, verified personnel.
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
                Education Staffing FAQs
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
              <GraduationCap className="text-[#F7D774] w-10 h-10 mb-4" />
              <h3 className="text-white text-xl font-bold mb-2">Need Supply Cover?</h3>
              <p className="text-slate-200 text-sm leading-relaxed mb-6">
                Submit supply staffing requests 24/7. AI screens our database to match qualified teachers and classroom assistants in minutes.
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
                  <span className="text-slate-600 text-sm">Strict background checks (PVG/DBS)</span>
                </div>
                <div className="flex gap-3">
                  <CheckCircle2 className="text-[#C99A1F] w-5 h-5 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-600 text-sm">Framework approved transparent rates</span>
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
                "name": "Education Recruitment Agency",
                "item": "https://rd1.co.uk/education-recruitment-agency"
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
            "image": "https://rd1.co.uk/images/Educations.png",
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
            "name": "Education Recruitment Agency UK",
            "url": "https://rd1.co.uk/education-recruitment-agency",
            "description": "Education Recruitment Agency supplying temporary, contract and permanent teaching assistants, supply teachers and learning support workers across the UK.",
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
