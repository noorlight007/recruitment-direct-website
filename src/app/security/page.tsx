"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ShieldCheck,
  CheckCircle,
  Lock,
  Eye,
  FileText,
  UserCheck,
  ShieldAlert,
  Database,
  Briefcase,
  Cpu,
  Scale,
  Check,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingElements from "@/components/FloatingElements";

export default function SecurityPage() {
  return (
    <div className="min-h-screen security-page">
      <style jsx global>{`
        .security-page {
          background-color: #ffffff !important;
          background-image: none !important;
          font-family: var(--font-inter), var(--font-poppins), sans-serif;
        }
        
        .security-page-content h1,
        .security-page-content h2,
        .security-page-content h3,
        .security-page-content h4,
        .security-page-content p,
        .security-page-content li,
        .security-page-content span {
          color: #0c0f19 !important;
        }

        .security-page-content .text-muted-dark {
          color: #475569 !important;
        }

        .security-page-content .btn-gold {
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

        .security-page-content .btn-gold span {
          color: #071424 !important;
        }

        .security-page-content .btn-gold:hover {
          filter: brightness(1.15) !important;
          box-shadow:
            inset 0 1px 0 rgba(255, 255, 255, 0.8),
            inset 0 -2px 0 rgba(70, 45, 5, 0.4),
            0 10px 22px rgba(184, 134, 11, 0.38) !important;
          transform: translateY(-2px) !important;
        }

        .security-page-content .btn-gold:active {
          transform: scale(0.98) !important;
        }

        .security-page-content .btn-outline-dark {
          color: #0c0f19 !important;
          background: transparent !important;
          border: 2px solid #0c0f19 !important;
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

        .security-page-content .btn-outline-dark span {
          color: #0c0f19 !important;
        }

        .security-page-content .btn-outline-dark:hover {
          background-color: #0c0f19 !important;
          transform: translateY(-2px) !important;
        }

        .security-page-content .btn-outline-dark:hover span {
          color: #ffffff !important;
        }

        .security-page-content .bg-gold-light {
          background: linear-gradient(135deg, rgba(246, 215, 125, 0.08) 0%, rgba(200, 149, 40, 0.04) 100%);
          border: 1px solid rgba(200, 149, 40, 0.15);
        }

        .security-page-content .bg-gray-soft {
          background-color: #f8fafc;
          border: 1px solid #e2e8f0;
        }
      `}</style>

      <Navbar />

      <div className="security-page-content">
        {/* Hero Header */}
        <header className="pt-32 pb-16 border-b border-gray-100 bg-[#ffffff]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center"
            >
              <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center mb-6 mx-auto">
                <Lock className="w-6 h-6 text-blue-600" />
              </div>
              <h1 className="font-heading font-extrabold text-4xl sm:text-5xl md:text-6xl tracking-tight mb-6 leading-none">
                Security
              </h1>
              <p className="text-xl md:text-2xl text-muted-dark max-w-3xl mx-auto leading-relaxed font-normal">
                Recruitment Direct UK Ltd takes data security, compliance and responsible recruitment technology seriously.
              </p>
              <div className="mt-4 text-base text-muted-dark max-w-3xl mx-auto leading-relaxed">
                Our recruitment process involves applicant information, client requirements, documents, communication records and compliance checks. That is why our systems and workflows are designed to support secure handling, controlled access, audit visibility and consultant-led review.
                We use AI-supported recruitment technology to improve speed and organisation, but final recruitment decisions, compliance checks and client communication remain with our consultant and compliance team.
              </div>
            </motion.div>
          </div>
        </header>

        {/* Secure Recruitment Workflows */}
        <section className="py-20 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -25 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold font-heading mb-4 text-[#0c0f19]">
                  Secure Recruitment Workflows
                </h2>
                <p className="text-base text-muted-dark mb-6 leading-relaxed">
                  Our recruitment workflows are designed to keep information organised and controlled throughout the process.
                  This includes staff orders, applicant applications, screening responses, document uploads, compliance information, CRM updates and consultant review notes.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 25 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-gray-soft p-8 rounded-2xl"
              >
                <h3 className="text-sm font-bold uppercase tracking-wider mb-4 text-muted-dark">
                  Security is built into the process by supporting:
                </h3>
                <ul className="space-y-3">
                  {[
                    "Controlled handling of applicant and client information",
                    "Secure document upload workflows",
                    "CRM-based record management",
                    "Compliance review points",
                    "Audit trail visibility",
                    "Consultant-led final review",
                    "Reduced reliance on manual email chasing and disconnected records",
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-sm">
                      <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Secure Document Collection */}
        <section className="py-20 bg-gray-50 border-y border-gray-100">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm"
              >
                <h3 className="text-sm font-bold uppercase tracking-wider mb-4 text-muted-dark">
                  This can include:
                </h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
                  {[
                    "ID documents",
                    "Right-to-work evidence",
                    "Licences",
                    "Tickets",
                    "Qualifications",
                    "Certificates",
                    "References",
                    "Role-specific documents",
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-sm">
                      <CheckCircle className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-xs text-muted-dark italic">
                  The aim is to reduce delays, avoid unnecessary manual handling and keep document collection more organised.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center mb-6">
                  <FileText className="w-6 h-6 text-blue-600" />
                </div>
                <h2 className="text-3xl font-bold font-heading mb-4 text-[#0c0f19]">
                  Secure Document Collection
                </h2>
                <p className="text-base text-muted-dark leading-relaxed">
                  Applicants may be asked to provide documents as part of the recruitment process.
                  Where required, secure upload links are used to collect documents needed for consultant and compliance review.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* GDPR & AWR Compliance Support */}
        <section className="py-20 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              
              {/* GDPR-Aware Recruitment Process */}
              <motion.div
                initial={{ opacity: 0, x: -25 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-gray-soft p-8 rounded-2xl"
              >
                <div className="w-12 h-12 rounded-xl bg-[#c89528]/10 flex items-center justify-center mb-6">
                  <ShieldCheck className="w-6 h-6 text-[#8a6417]" />
                </div>
                <h3 className="text-2xl font-bold mb-4 font-heading">
                  GDPR-Aware Recruitment Process
                </h3>
                <p className="text-base text-muted-dark mb-6 leading-relaxed">
                  RDUK uses AI-supported GDPR compliance workflows to help organise applicant, client and recruitment data more consistently.
                  Our process supports clearer records, improved audit visibility and better organisation of recruitment information.
                </p>
                <div className="border-t border-gray-200 pt-6">
                  <h4 className="text-sm font-bold uppercase tracking-wider mb-4 text-muted-dark">
                    GDPR-related workflow support includes:
                  </h4>
                  <ul className="space-y-3">
                    {[
                      "Applicant data handling visibility",
                      "Consent and communication workflow support",
                      "Recruitment record organisation",
                      "Compliance record updates",
                      "Audit trail support",
                      "Consultant and compliance team review",
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-sm">
                        <CheckCircle className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="text-xs text-muted-dark mt-4 italic">
                    AI supports the process, but GDPR responsibility remains subject to human review and company compliance controls.
                  </p>
                </div>
              </motion.div>

              {/* AI AWR Compliance Support */}
              <motion.div
                initial={{ opacity: 0, x: 25 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-gray-soft p-8 rounded-2xl"
              >
                <div className="w-12 h-12 rounded-xl bg-[#c89528]/10 flex items-center justify-center mb-6">
                  <Scale className="w-6 h-6 text-[#8a6417]" />
                </div>
                <h3 className="text-2xl font-bold mb-4 font-heading">
                  AI AWR Compliance Support
                </h3>
                <p className="text-base text-muted-dark mb-6 leading-relaxed">
                  For relevant assignments, RDUK uses AI-supported AWR compliance workflows to help organise assignment and worker information.
                  This supports the consultant and compliance team by making AWR-related information easier to review during the recruitment and placement process.
                </p>
                <div className="border-t border-gray-200 pt-6">
                  <h4 className="text-sm font-bold uppercase tracking-wider mb-4 text-muted-dark">
                    AWR workflow support can include:
                  </h4>
                  <ul className="space-y-3">
                    {[
                      "Assignment information organisation",
                      "Worker information review support",
                      "Pay and working time information visibility",
                      "Relevant assignment record updates",
                      "Compliance workflow support",
                      "Audit trail information",
                      "Consultant and compliance team review",
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

        {/* AI Document Checking Support & CRM Access Control */}
        <section className="py-20 bg-gray-50 border-y border-gray-100">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              
              {/* AI Document Checking Support */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center mb-6">
                  <Eye className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold font-heading mb-4 text-[#0c0f19]">
                  AI Document Checking Support
                </h3>
                <p className="text-base text-muted-dark mb-6 leading-relaxed">
                  RDUK uses AI-supported document checking to help organise and review applicant documents more efficiently.
                  This supports faster document processing while keeping consultant and compliance review in place.
                </p>
                <h4 className="text-sm font-bold uppercase tracking-wider mb-3 text-muted-dark">
                  AI document checking support can help with:
                </h4>
                <ul className="space-y-2 text-sm font-medium">
                  <li className="flex items-center gap-2">• Document status visibility & missing prompts</li>
                  <li className="flex items-center gap-2">• ID document organisation</li>
                  <li className="flex items-center gap-2">• Right-to-work evidence review support</li>
                  <li className="flex items-center gap-2">• Licence and ticket document review support</li>
                  <li className="flex items-center gap-2">• Qualification and certificate organisation</li>
                  <li className="flex items-center gap-2">• Compliance review preparation</li>
                </ul>
              </motion.div>

              {/* CRM and Access Control */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <div className="w-12 h-12 rounded-xl bg-purple-50 flex items-center justify-center mb-6">
                  <Database className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="text-2xl font-bold font-heading mb-4 text-[#0c0f19]">
                  CRM and Access Control
                </h3>
                <p className="text-base text-muted-dark mb-6 leading-relaxed">
                  Our recruitment process is designed to keep client, applicant and compliance information connected to the appropriate recruitment workflow.
                  CRM integration helps ensure information is stored, updated and reviewed in one place rather than spread across disconnected messages or manual records.
                </p>
                <h4 className="text-sm font-bold uppercase tracking-wider mb-3 text-muted-dark">
                  CRM-based workflows support:
                </h4>
                <ul className="space-y-2 text-sm font-medium">
                  <li className="flex items-center gap-2">• Applicant record & staffing order updates</li>
                  <li className="flex items-center gap-2">• Screening response capture</li>
                  <li className="flex items-center gap-2">• Document storage visibility</li>
                  <li className="flex items-center gap-2">• Consultant notes & status updates</li>
                  <li className="flex items-center gap-2">• Compliance workflow visibility & audit trails</li>
                </ul>
                <p className="text-xs text-muted-dark mt-4 italic">
                  Access to recruitment information is managed through appropriate internal controls and consultant review processes.
                </p>
              </motion.div>

            </div>
          </div>
        </section>

        {/* Consultant-Led, AI-Supported */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              
              <motion.div
                initial={{ opacity: 0, x: -25 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div className="w-12 h-12 rounded-xl bg-[#c89528]/10 flex items-center justify-center mb-6">
                  <UserCheck className="w-6 h-6 text-[#8a6417]" />
                </div>
                <h2 className="text-3xl font-bold font-heading mb-4 text-[#0c0f19]">
                  Consultant-Led, AI-Supported
                </h2>
                <p className="text-base text-muted-dark leading-relaxed">
                  AI is used to improve speed, organisation and consistency across recruitment workflows.
                  It supports applicant matching, communication, screening, document collection, compliance organisation and CRM updates.
                  However, AI does not replace consultant judgement.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 25 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-gray-soft p-8 rounded-2xl"
              >
                <h3 className="text-sm font-bold uppercase tracking-wider mb-4 text-muted-dark">
                  Our consultants remain responsible for:
                </h3>
                <ul className="space-y-3">
                  {[
                    "Reviewing applicant suitability",
                    "Checking client requirements",
                    "Confirming compliance information",
                    "Managing client communication",
                    "Preparing submissions",
                    "Confirming placements",
                    "Supporting workers and clients during assignments",
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-sm font-medium">
                      <Check className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

            </div>
          </div>
        </section>

        {/* Responsible Use of AI */}
        <section className="py-20 bg-gold-light border-y border-gray-100">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#f6d77d]/20 border border-[#c89528]/30 mb-6">
                <Cpu className="w-4 h-4 text-[#8a6417]" />
                <span className="text-sm font-bold uppercase tracking-wider text-[#8a6417]">Ethics & Control</span>
              </div>
              
              <h2 className="text-3xl sm:text-4xl font-extrabold mb-6 font-heading">
                Responsible Use of AI
              </h2>
              
              <div className="space-y-6 text-base text-muted-dark max-w-3xl mx-auto leading-relaxed text-left md:text-center">
                <p>
                  RDUK uses AI-supported tools to improve recruitment efficiency, but the process remains controlled and human-reviewed.
                </p>
                <h4 className="text-sm font-bold uppercase tracking-wider mb-3 text-muted-dark text-center">
                  Our responsible AI approach is based on:
                </h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-2xl mx-auto text-left">
                  {[
                    "Human review before submission or placement",
                    "Clear consultant accountability",
                    "Organised recruitment records",
                    "Secure document collection",
                    "Compliance workflow visibility",
                    "Avoiding unnecessary manual handling",
                    "Supporting applicants and clients with faster communication",
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-sm font-medium">
                      <CheckCircle className="w-4 h-4 text-[#8a6417] mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="pt-4 text-xs text-muted-dark text-center">
                  This helps combine the speed of AI with the control of an experienced recruitment team.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Client Confidence & Final Call Box */}
        <section className="py-24 bg-white text-center">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-extrabold mb-6 font-heading">
                Client Confidence
              </h2>
              
              <p className="text-base text-muted-dark max-w-2xl mx-auto leading-relaxed mb-10">
                Security is not just about technology. It is about having a clear process, controlled information handling and responsible review before decisions are made.
                RDUK’s security and compliance approach helps clients benefit from faster recruitment while maintaining consultant oversight, document control and compliance visibility throughout the process.
              </p>

              <div className="mt-12 p-8 rounded-2xl bg-gray-soft text-center border border-gray-200 max-w-2xl mx-auto">
                <h3 className="text-lg font-bold font-heading mb-4 text-[#0c0f19]">
                  For further information about our compliance processes, please contact Recruitment Direct UK Ltd.
                </h3>
                <div className="mt-6">
                  <Link href="/contact" className="btn-outline-dark">
                    <span>Contact Us</span>
                  </Link>
                </div>
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
