"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Clock,
  ShieldCheck,
  CheckCircle,
  Cpu,
  FileText,
  UserCheck,
  Users,
  Search,
  Database,
  Briefcase,
  Zap,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingElements from "@/components/FloatingElements";

export default function ServicesPage() {
  return (
    <div className="min-h-screen services-page">
      <style jsx global>{`
        .services-page {
          background-color: #ffffff !important;
          background-image: none !important;
          font-family: var(--font-inter), var(--font-poppins), sans-serif;
        }
        
        .services-page-content h1,
        .services-page-content h2,
        .services-page-content h3,
        .services-page-content h4,
        .services-page-content p,
        .services-page-content li,
        .services-page-content span {
          color: #0c0f19 !important;
        }

        .services-page-content .text-muted-dark {
          color: #475569 !important;
        }

        .services-page-content .btn-gold {
          color: #071424 !important;
          background: linear-gradient(135deg, #8a6417 0%, #c89528 24%, #f6d77d 50%, #c28b20 74%, #6f4b10 100%) !important;
          border: 2px solid #f7d98a !important;
          box-shadow:
            inset 0 1px 0 rgba(255, 255, 255, 0.7),
            inset 0 -2px 0 rgba(70, 45, 5, 0.35),
            0 8px 18px rgba(184, 134, 11, 0.25) !important;
          transition: all 0.25s ease !important;
          font-weight: 800 !important;
          font-size: 16px !important;
          height: 56px !important;
          line-height: 56px !important;
          padding: 0 36px !important;
          border-radius: 8px !important;
          text-transform: uppercase !important;
          display: inline-flex !important;
          align-items: center !important;
          justify-content: center !important;
          cursor: pointer !important;
          text-decoration: none !important;
          letter-spacing: 0.5px !important;
          gap: 8px !important;
        }

        .services-page-content .btn-gold span {
          color: #071424 !important;
        }

        .services-page-content .btn-gold:hover {
          filter: brightness(1.15) !important;
          box-shadow:
            inset 0 1px 0 rgba(255, 255, 255, 0.8),
            inset 0 -2px 0 rgba(70, 45, 5, 0.4),
            0 10px 22px rgba(184, 134, 11, 0.38) !important;
          transform: translateY(-2px) !important;
        }

        .services-page-content .btn-gold:active {
          transform: scale(0.98) !important;
        }

        .services-page-content .bg-gold-light {
          background: linear-gradient(135deg, rgba(246, 215, 125, 0.08) 0%, rgba(200, 149, 40, 0.04) 100%);
          border: 1px solid rgba(200, 149, 40, 0.15);
        }

        .services-page-content .bg-gray-soft {
          background-color: #f8fafc;
          border: 1px solid #e2e8f0;
        }
      `}</style>

      <Navbar />

      <div className="services-page-content">

      {/* Hero Header */}
      <header className="pt-32 pb-16 border-b border-gray-100 bg-[#ffffff]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="font-heading font-extrabold text-4xl sm:text-5xl md:text-6xl tracking-tight mb-6 leading-none">
              Recruitment Services
            </h1>
            <p className="text-xl md:text-2xl text-muted-dark max-w-3xl mx-auto leading-relaxed font-normal">
              Recruitment Direct UK Ltd provides temporary, contract and permanent recruitment services for employers across the UK.
            </p>
            <div className="mt-4 text-base text-muted-dark max-w-3xl mx-auto leading-relaxed">
              Founded in 2006, we support clients with multi-sector recruitment solutions, helping businesses source dependable staff for temporary cover, contract assignments and permanent roles.
              Our service is built around speed, compliance, clear communication and practical recruitment support for employers that need reliable staff quickly.
            </div>
          </motion.div>
        </div>
      </header>

      {/* Main Core Services Grid (Temporary, Contract, Permanent) */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Temporary Recruitment */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.05 }}
              className="bg-gray-soft rounded-2xl p-8 shadow-sm flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center mb-6">
                  <Clock className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold mb-4 font-heading">
                  Temporary Recruitment
                </h3>
                <p className="text-base text-muted-dark mb-6 leading-relaxed">
                  We supply temporary workers for short-term cover, urgent labour requirements, seasonal demand, project support and ongoing workforce needs.
                  Our consultant team can manage the full process, including vacancy briefing, applicant attraction, screening, availability checks, compliance checks, placement details and ongoing support.
                </p>
                <div className="border-t border-gray-200 pt-6">
                  <h4 className="text-sm font-bold uppercase tracking-wider mb-4 text-muted-dark">
                    Suitable for:
                  </h4>
                  <ul className="space-y-3">
                    {[
                      "Urgent shift cover",
                      "Holiday or sickness cover",
                      "Seasonal peaks",
                      "Site-based labour requirements",
                      "High-volume staffing",
                      "Ongoing temporary workforce support",
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-sm">
                        <CheckCircle className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Contract Recruitment */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              className="bg-gray-soft rounded-2xl p-8 shadow-sm flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-purple-50 flex items-center justify-center mb-6">
                  <FileText className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="text-2xl font-bold mb-4 font-heading">
                  Contract Recruitment
                </h3>
                <p className="text-base text-muted-dark mb-6 leading-relaxed">
                  Our contract recruitment service supports employers who require staff for fixed periods, specialist assignments or project-based work.
                  This gives clients the flexibility to bring in skilled workers when required without committing to a permanent appointment.
                </p>
                <div className="border-t border-gray-200 pt-6">
                  <h4 className="text-sm font-bold uppercase tracking-wider mb-4 text-muted-dark">
                    Suitable for:
                  </h4>
                  <ul className="space-y-3">
                    {[
                      "Fixed-term projects",
                      "Operational peaks",
                      "Specialist assignments",
                      "Public sector and framework-based supply",
                      "Planned workforce cover",
                      "Site or depot-based roles",
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-sm">
                        <CheckCircle className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Permanent Recruitment */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.25 }}
              className="bg-gray-soft rounded-2xl p-8 shadow-sm flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-orange-50 flex items-center justify-center mb-6">
                  <Briefcase className="w-6 h-6 text-orange-600" />
                </div>
                <h3 className="text-2xl font-bold mb-4 font-heading">
                  Permanent Recruitment
                </h3>
                <p className="text-base text-muted-dark mb-6 leading-relaxed">
                  We help clients recruit permanent employees for long-term roles across operational, technical, commercial and support functions.
                  Our consultants work with clients to understand the vacancy, advertise the role, screen applicants, shortlist suitable people and support the interview and offer process.
                </p>
                <div className="border-t border-gray-200 pt-6">
                  <h4 className="text-sm font-bold uppercase tracking-wider mb-4 text-muted-dark">
                    Suitable for:
                  </h4>
                  <ul className="space-y-3">
                    {[
                      "Skilled hires",
                      "Management and supervisor roles",
                      "Office and support positions",
                      "Technical appointments",
                      "Replacement hiring",
                      "Business growth",
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-sm">
                        <CheckCircle className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* AI Hire Now Section */}
      <section className="py-20 bg-gold-light border-y border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#f6d77d]/20 border border-[#c89528]/30 mb-6">
              <Zap className="w-4 h-4 text-[#8a6417]" />
              <span className="text-sm font-bold uppercase tracking-wider text-[#8a6417]">AI Platform</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl font-extrabold mb-6 font-heading">
              AI Hire Now — 24/7 Staff Orders and Enquiries
            </h2>
            
            <div className="space-y-4 text-base text-muted-dark max-w-3xl mx-auto leading-relaxed text-left md:text-center">
              <p>
                AI Hire Now allows employers to submit staffing requirements at any time, day or night.
              </p>
              <p>
                Existing clients can place staff orders 24/7 by submitting the role details online, including the job title, location, start date, shift pattern, pay rate and any required skills, tickets, licences or experience.
              </p>
              <p>
                New clients can also submit a staffing enquiry through AI Hire Now. Once received, one of our consultants will be in touch to confirm the requirement, pricing, terms and account setup before any recruitment activity or placement is confirmed.
              </p>
              <p>
                The key benefit is speed. When an AI Hire Now order or enquiry is submitted, it triggers AI Candidate Skill Search 24/7, helping identify suitable applicants from the database before a consultant reviews the requirement.
              </p>
              <p>
                This means that by the time the consultant picks up the request, suitable applicants are already being highlighted and prepared for review before submission, advert placement or further screening.
              </p>
            </div>

            <div className="mt-10">
              <Link href="/ai-hire-now" className="btn-gold">
                <span>AI Hire Now</span>
                <span>→</span>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* AI Supported Process & Candidate Skill Search */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            
            {/* AI-Supported Recruitment Process */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gray-soft p-8 rounded-2xl"
            >
              <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center mb-6">
                <Cpu className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold mb-4 font-heading">
                AI-Supported Recruitment Process
              </h3>
              <p className="text-base text-muted-dark mb-6 leading-relaxed">
                RDUK uses AI-supported recruitment tools to improve speed, applicant contact and screening.
                Our process can help contact applicants quickly, ask role-specific screening questions, organise responses and provide consultants with structured information for review.
                This supports faster shortlisting while keeping consultants in control of the final recruitment decision.
              </p>
              <div className="border-t border-gray-200 pt-6">
                <h4 className="text-sm font-bold uppercase tracking-wider mb-4 text-muted-dark">
                  Our AI-supported workflow can include:
                </h4>
                <ul className="space-y-3">
                  {[
                    "Applicant contact after application",
                    "Role-specific screening questions",
                    "Traffic-light screening results",
                    "WhatsApp and SMS communication",
                    "Secure document upload links",
                    "Document and response updates into the CRM",
                    "Faster consultant review and client submission",
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-sm">
                      <CheckCircle className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* AI Candidate Skill Search */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gray-soft p-8 rounded-2xl"
            >
              <div className="w-12 h-12 rounded-xl bg-emerald-50 flex items-center justify-center mb-6">
                <Search className="w-6 h-6 text-emerald-600" />
              </div>
              <h3 className="text-2xl font-bold mb-4 font-heading">
                AI Candidate Skill Search
              </h3>
              <p className="text-base text-muted-dark mb-6 leading-relaxed">
                AI Candidate Skill Search identifies suitable applicants faster by matching skills, experience, location and availability against a client’s staffing requirement.
                When a staffing order or enquiry is submitted through AI Hire Now, it triggers AI Candidate Skill Search 24/7. The requirement is matched against applicant data so consultants can quickly review potential matches.
                This supports temporary, contract and permanent recruitment by helping the team identify suitable applicants earlier in the process.
              </p>
              <div className="border-t border-gray-200 pt-6">
                <h4 className="text-sm font-bold uppercase tracking-wider mb-4 text-muted-dark">
                  AI Candidate Skill Search helps with:
                </h4>
                <ul className="space-y-3">
                  {[
                    "Matching applicants to role requirements",
                    "Searching by skills, tickets, licences or experience",
                    "Checking location and availability",
                    "Supporting urgent staffing requests",
                    "Preparing suitable applicants for consultant review",
                    "Helping consultants shortlist and submit faster",
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-sm">
                      <CheckCircle className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-xs text-muted-dark mt-4 italic">
                  Consultants remain in control of the final review, screening and submission process.
                </p>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Compliance & Timesheets */}
      <section className="py-20 bg-gray-50 border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            
            {/* Compliance and Documentation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100"
            >
              <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center mb-6">
                <ShieldCheck className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold mb-4 font-heading">
                Compliance and Documentation
              </h3>
              <p className="text-base text-muted-dark mb-6 leading-relaxed">
                We help clients reduce recruitment risk by managing applicant checks and assignment documentation before placement.
                Depending on the role, this may include:
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                {[
                  "Right-to-work checks",
                  "Identity document collection",
                  "Licence checks",
                  "Qualification checks",
                  "References",
                  "Assignment details",
                  "Pay and working time information",
                  "Audit trail records",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-sm font-semibold text-muted-dark pt-4 border-t border-gray-100">
                Our aim is to keep the recruitment process simple, accurate and compliant for both clients and applicants.
              </p>
            </motion.div>

            {/* Digital Timesheet Option */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100"
            >
              <div className="w-12 h-12 rounded-xl bg-[#c89528]/10 flex items-center justify-center mb-6">
                <FileText className="w-6 h-6 text-[#8a6417]" />
              </div>
              <h3 className="text-2xl font-bold mb-4 font-heading">
                Digital Timesheet Option
              </h3>
              <p className="text-base text-muted-dark mb-6 leading-relaxed">
                RDUK can support clients with a digital timesheet option, helping to reduce manual paperwork and improve payroll accuracy.
                Digital timesheets can make it easier for workers and clients to submit, review and approve hours, while giving the recruitment team a clearer audit trail.
              </p>
              <div className="border-t border-gray-100 pt-6">
                <h4 className="text-sm font-bold uppercase tracking-wider mb-4 text-muted-dark">
                  This can help with:
                </h4>
                <ul className="space-y-3">
                  {[
                    "Faster timesheet submission",
                    "Reduced paperwork",
                    "Improved accuracy",
                    "Easier approval tracking",
                    "Better visibility of hours worked",
                    "Reduced payroll queries",
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-sm">
                      <CheckCircle className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Submit a Staffing Requirement (Final CTA) */}
      <section className="py-24 bg-white text-center border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-extrabold mb-6 font-heading">
              Submit a Staffing Requirement
            </h2>
            <h3 className="text-xl font-bold text-muted-dark mb-6">
              Need temporary, contract or permanent staff?
            </h3>
            
            <p className="text-base text-muted-dark max-w-2xl mx-auto leading-relaxed mb-10">
              Use AI Hire Now to submit your staffing requirement 24/7.
              Existing clients can place staff orders online. New clients can submit an enquiry and our consultant team will contact you to confirm prices, terms and next steps.
              Every AI Hire Now order or enquiry triggers AI Candidate Skill Search 24/7, helping suitable applicants be identified and prepared for consultant review.
            </p>

            <div>
              <Link href="/ai-hire-now" className="btn-gold">
                <span>AI Hire Now</span>
                <span>→</span>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      </div>

      <Footer />
      <FloatingElements />
    </div>
  );
}
