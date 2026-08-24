"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingElements from "@/components/FloatingElements";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ArrowRight, CheckCircle2, Star, Shield, Cpu } from "lucide-react";

// Helper component for standard checklist items
const CheckListItem = ({ children }: { children: React.ReactNode }) => (
  <li className="text-slate-600 text-[16.5px] mb-2.5 relative pl-7 leading-[1.6] list-none">
    <span className="absolute left-0 text-[#C99A1F] font-black text-lg">✓</span>
    {children}
  </li>
);

export default function ITTechSectorPageClient() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What IT sectors do you recruit for?",
      answer: "Recruitment Direct UK Ltd recruits across software development, IT support, network infrastructure, cloud engineering, cybersecurity, data analysis, and technical project management throughout the UK and Ireland."
    },
    {
      question: "What IT professionals can you supply?",
      answer: "We supply software developers, web developers, network engineers, cloud developers, cybersecurity specialists, systems administrators, business analysts, IT project managers, and technical support staff."
    },
    {
      question: "What compliance and vetting checks do you perform?",
      answer: "All candidates undergo strict compliance checks, including right to work checks, qualification and certification checks, reference verification, and technical skills reviews."
    },
    {
      question: "Do you provide contract or temporary IT staff?",
      answer: "Yes. We specialize in supplying contract IT professionals and support technicians to cover project gaps, digital transformations, shutdowns, and peak workloads."
    },
    {
      question: "Do you recruit permanent IT staff?",
      answer: "Yes. We provide permanent recruitment solutions for businesses, sourcing qualified IT professionals for permanent development, operations, and management roles."
    },
    {
      question: "How does AI Hire Now work?",
      answer: "Submit your IT staffing requirements online 24/7. AI searches our database before a dedicated recruitment consultant reviews the vacancy details and contacts you to discuss candidate matches."
    },
    {
      question: "Why choose Recruitment Direct UK Ltd?",
      answer: "Since 2006, Recruitment Direct UK Ltd has delivered reliable, compliant staffing. We combine AI-driven search with comprehensive human verification to supply skilled, verified IT staff when you need them."
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
                IT & Tech Recruitment
              </span>

              <h1 className="text-black text-[38px] md:text-[54px] font-extrabold leading-[1.15] tracking-[-0.02em] mb-4">
                IT & Technology Professionals | IT Recruitment Agency
              </h1>

              <p className="text-black text-[17.5px] leading-[1.8] mb-3">
                <strong>Recruitment Direct UK Ltd</strong> is a trusted <strong>IT & Technology Recruitment Agency</strong> supplying reliable, consultant-verified IT and technology professionals across London, Manchester, Birmingham, Leeds, Bristol, Edinburgh, Glasgow, Cambridge, Reading, Dublin, and throughout the UK and Ireland.
              </p>

              <p className="text-black text-[17.5px] leading-[1.8] mb-3">
                We support businesses across multiple sectors including construction, engineering, commercial, and technology companies requiring reliable IT and software professionals.
              </p>

              <p className="text-black text-[17.5px] leading-[1.8] mb-3">
                Whether you require contract cover for specific digital projects or permanent team members, we combine technical recruitment expertise with AI-powered database searches to identify suitable staff quickly, with every shortlisted candidate reviewed and human verified by our consultants.
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
                <span className="bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-100">Vetted IT Professionals</span>
                <span className="bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-100">Contract & Permanent</span>
                <span className="bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-100">ISO 9001 Certified</span>
                <span className="bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-100">REC Corporate Member</span>
                <span className="bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-100">Trusted Since 2006</span>
              </div>
            </section>

            {/* Hero Image */}
            <div className="relative w-full h-[280px] md:h-[420px] rounded-2xl overflow-hidden mb-12 shadow-md border border-slate-200">
              <Image
                src="/images/Businesssss.png"
                alt="IT & Technology Recruitment Agency supplying temporary and permanent software developers and IT support"
                fill
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
                className="object-cover"
              />
            </div>

            {/* Introduction */}
            <section className="mb-12">
              <h2 className="text-black text-[26px] md:text-[34px] font-extrabold tracking-[-0.01em] border-b border-slate-100 pb-3 mb-6">
                IT & Tech Recruitment Built for Speed
              </h2>

              <p className="text-black text-[17.5px] leading-[1.8] mb-4">
                Recruitment Direct UK Ltd delivers temporary, contract, and permanent IT and technology recruitment solutions for organisations throughout the UK and Ireland. Since 2006, we have supported businesses across multiple sectors including construction, engineering, commercial, and technology companies by supplying experienced IT and tech professionals.
              </p>

              <p className="text-black text-[17.5px] leading-[1.8] mb-4">
                We understand that speed and technical accuracy are critical in IT. Our AI recruitment technology monitors candidate availability 24/7, enabling our experienced consultants to present verified, compliant professionals to meet project requirements quickly.
              </p>
            </section>

            {/* Why Choose Recruitment Direct */}
            <section className="mb-12">
              <h2 className="text-black text-[26px] md:text-[34px] font-extrabold tracking-[-0.01em] border-b border-slate-100 pb-3 mb-6">
                Why Choose Recruitment Direct UK Ltd?
              </h2>

              <p className="text-black text-[17.5px] leading-[1.8] mb-6">
                Businesses choose Recruitment Direct UK Ltd because of our commitment to technical vetting, our rapid response times, and the high standards of our IT and tech professionals.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                  <h3 className="text-black font-bold text-lg mb-2">Contractor Supply</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    Reliable access to skilled IT contractors and support technicians to cover project demands, development phases, and planned leave.
                  </p>
                </div>
                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                  <h3 className="text-black font-bold text-lg mb-2">Technical Vetting</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    Every candidate undergoes extensive screening, verifying technical skills, certifications, work history, and right to work.
                  </p>
                </div>
                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                  <h3 className="text-black font-bold text-lg mb-2">Permanent Placement</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    Tailored recruitment campaigns to source experienced permanent software developers, system engineers, and managers.
                  </p>
                </div>
              </div>
            </section>

            {/* IT & Technology Recruitment Services */}
            <section className="mb-12">
              <h2 className="text-black text-[26px] md:text-[34px] font-extrabold tracking-[-0.01em] border-b border-slate-100 pb-3 mb-6">
                IT & Technology Recruitment Services
              </h2>

              <p className="text-black text-[17.5px] leading-[1.8] mb-6">
                We design our services around the requirements of modern technology teams. We combine technical vetting with AI database search to ensure project delivery standards are consistently maintained.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="p-5 bg-white border border-slate-100 rounded-xl shadow-sm">
                  <h3 className="text-black font-bold text-base mb-1.5">Contract IT Staffing</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">Fast supply of qualified software developers, network engineers, and system administrators for project-based and contract roles.</p>
                </div>
                <div className="p-5 bg-white border border-slate-100 rounded-xl shadow-sm">
                  <h3 className="text-black font-bold text-base mb-1.5">Rigorous Vetting Process</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">Comprehensive background checks including technical proficiency verification, reference checks, and right to work checks.</p>
                </div>
                <div className="p-5 bg-white border border-slate-100 rounded-xl shadow-sm">
                  <h3 className="text-black font-bold text-base mb-1.5">Permanent Tech Recruitment</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">Connecting technology groups with qualified permanent professionals, from helpdesk engineers to IT project and program managers.</p>
                </div>
                <div className="p-5 bg-white border border-slate-100 rounded-xl shadow-sm">
                  <h3 className="text-black font-bold text-base mb-1.5">AI-Powered Sourcing</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">AI screens availability and matches candidate qualifications to role requirements, before a consultant reviews and verifies each selection.</p>
                </div>
              </div>
            </section>

            {/* IT & Technology Roles We Recruit */}
            <section className="mb-12">
              <h2 className="text-black text-[26px] md:text-[34px] font-extrabold tracking-[-0.01em] border-b border-slate-100 pb-3 mb-6">
                IT & Technology Roles We Recruit
              </h2>

              <p className="text-black text-[17.5px] leading-[1.8] mb-6">
                Recruitment Direct UK Ltd sources and supplies qualified IT professionals for diverse technical requirements, ensuring that development speed, security, and infrastructure stability are prioritized.
              </p>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-6">
                <div>
                  <h4 className="text-black font-bold text-base mb-2">Development & Design</h4>
                  <ul className="pl-0 list-none space-y-1.5">
                    <CheckListItem>Software Developers</CheckListItem>
                    <CheckListItem>Web Developers</CheckListItem>
                    <CheckListItem>DevOps Engineers</CheckListItem>
                    <CheckListItem>Database Engineers</CheckListItem>
                  </ul>
                </div>

                <div>
                  <h4 className="text-black font-bold text-base mb-2">Infrastructure & Support</h4>
                  <ul className="pl-0 list-none space-y-1.5">
                    <CheckListItem>Network Engineers</CheckListItem>
                    <CheckListItem>Infrastructure Engineers</CheckListItem>
                    <CheckListItem>Cloud Engineers</CheckListItem>
                    <CheckListItem>Systems Administrators</CheckListItem>
                  </ul>
                </div>

                <div>
                  <h4 className="text-black font-bold text-base mb-2">Analysis & Management</h4>
                  <ul className="pl-0 list-none space-y-1.5">
                    <CheckListItem>Data Analysts</CheckListItem>
                    <CheckListItem>IT Project Managers</CheckListItem>
                    <CheckListItem>Business Analysts</CheckListItem>
                    <CheckListItem>Technical Support Staff</CheckListItem>
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
                Our IT and technology professionals support a wide variety of sectors, providing project contract cover and permanent placement solutions.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
                {[
                  { title: "Construction & Engineering", desc: "Supplying vetted IT support technicians and network engineers to keep site operations and head offices connected." },
                  { title: "Digital Infrastructure", desc: "Providing systems administrators and cloud engineers to maintain and scale server infrastructure and digital environments." },
                  { title: "Software Development", desc: "Supplying skilled developers and DevOps engineers to support coding sprints and release cycles." },
                  { title: "Cybersecurity", desc: "Connecting organizations with qualified cybersecurity specialists to defend systems and review security posture." },
                  { title: "Business Operations", desc: "Providing business analysts and database administrators to optimize systems and improve operational efficiency." },
                  { title: "Project Delivery", desc: "Supplying compliant IT project managers and technical support staff through framework agreements nationwide." }
                ].map((s, idx) => (
                  <div key={idx} className="bg-slate-50 p-5 rounded-xl border border-slate-100 flex flex-col justify-between">
                    <h4 className="text-black font-bold text-sm mb-1">{s.title}</h4>
                    <p className="text-slate-600 text-xs leading-relaxed mt-1">{s.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Strict Vetting and Quality Compliance */}
            <section className="mb-12">
              <h2 className="text-black text-[26px] md:text-[34px] font-extrabold tracking-[-0.01em] border-b border-slate-100 pb-3 mb-6">
                Strict Vetting and Quality Compliance
              </h2>

              <p className="text-black text-[17.5px] leading-[1.8] mb-4">
                Recruitment Direct UK Ltd prioritizes safety and compliance. We operate in strict alignment with data protection regulations (GDPR), technical standards, and REC guidelines. Every IT professional undergoes an intensive vetting process.
              </p>

              <p className="text-black text-[17.5px] leading-[1.8] mb-4">
                No IT professional is supplied without comprehensive certification checks, technical skills verification, reference checking, and right to work checks. This ensures that every worker on site maintains the high standards expected by our clients.
              </p>
            </section>

            {/* Need Tech Staff? Call CTA */}
            <section>
              <h2 className="text-black text-[26px] md:text-[34px] font-extrabold tracking-[-0.01em] border-b border-slate-100 pb-3 mb-6">
                Looking to Recruit IT & Technology Staff?
              </h2>

              <p className="text-black text-[17.5px] leading-[1.8] mb-5">
                Whether you need urgent contractor support today or are looking to hire permanent developers, Recruitment Direct UK Ltd delivers fully verified, compliant candidates.
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
                IT & Technology Staffing FAQs
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
              <Cpu className="text-[#F7D774] w-10 h-10 mb-4" />
              <h3 className="text-white text-xl font-bold mb-2">Need Tech Staff?</h3>
              <p className="text-slate-200 text-sm leading-relaxed mb-6">
                Submit staffing requests 24/7. AI screens our database to match qualified IT and software professionals in minutes.
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
                  <span className="text-slate-600 text-sm">Full technical & certification checks</span>
                </div>
                <div className="flex gap-3">
                  <CheckCircle2 className="text-[#C99A1F] w-5 h-5 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-600 text-sm">Contract & permanent ready</span>
                </div>
              </div>
            </div>

            {/* Related Sector Agencies widget */}
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
              <h3 className="text-slate-800 text-lg font-bold mb-4">Related Sector Agencies</h3>
              <div className="space-y-3 text-sm">
                <Link href="/commercial-office-recruitment-agency" className="block text-[#001B5E] hover:text-[#C99A1F] font-semibold transition-colors">
                  → Commercial & Office Recruitment
                </Link>
                <Link href="/engineering-recruitment-agency" className="block text-[#001B5E] hover:text-[#C99A1F] font-semibold transition-colors">
                  → Engineering Recruitment
                </Link>
                <Link href="/construction-recruitment-agency" className="block text-[#001B5E] hover:text-[#C99A1F] font-semibold transition-colors">
                  → Construction Recruitment
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
                "name": "IT & Technology Recruitment",
                "item": "https://rd1.co.uk/it-technology-recruitment-agency"
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
            "image": "https://rd1.co.uk/images/Businesssss.png",
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
            "name": "IT & Technology Recruitment Agency",
            "url": "https://rd1.co.uk/it-technology-recruitment-agency",
            "description": "IT and technology recruitment agency supplying temporary, contract and permanent developers and IT professionals across the UK.",
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
