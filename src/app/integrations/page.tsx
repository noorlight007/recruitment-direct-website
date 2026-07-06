"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Link as LinkIcon,
  ShieldCheck,
  CheckCircle,
  Database,
  Users,
  Search,
  MessageSquare,
  FileText,
  Lock,
  Scale,
  Zap,
  ArrowRight,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingElements from "@/components/FloatingElements";

export default function IntegrationsPage() {
  return (
    <div className="min-h-screen integrations-page">
      <style jsx global>{`
        .integrations-page {
          background-color: #ffffff !important;
          background-image: none !important;
          font-family: 'Inter', 'Poppins', sans-serif;
        }
        
        .integrations-page-content h1,
        .integrations-page-content h2,
        .integrations-page-content h3,
        .integrations-page-content h4,
        .integrations-page-content p,
        .integrations-page-content li,
        .integrations-page-content span {
          color: #0c0f19 !important;
        }

        .integrations-page-content .text-muted-dark {
          color: #475569 !important;
        }

        .integrations-page-content .btn-gold {
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

        .integrations-page-content .btn-gold span {
          color: #071424 !important;
        }

        .integrations-page-content .btn-gold:hover {
          filter: brightness(1.15) !important;
          box-shadow:
            inset 0 1px 0 rgba(255, 255, 255, 0.8),
            inset 0 -2px 0 rgba(70, 45, 5, 0.4),
            0 10px 22px rgba(184, 134, 11, 0.38) !important;
          transform: translateY(-2px) !important;
        }

        .integrations-page-content .btn-gold:active {
          transform: scale(0.98) !important;
        }

        .integrations-page-content .bg-gold-light {
          background: linear-gradient(135deg, rgba(246, 215, 125, 0.08) 0%, rgba(200, 149, 40, 0.04) 100%);
          border: 1px solid rgba(200, 149, 40, 0.15);
        }

        .integrations-page-content .bg-gray-soft {
          background-color: #f8fafc;
          border: 1px solid #e2e8f0;
        }
      `}</style>

      <Navbar />

      <div className="integrations-page-content">
        {/* Hero Header */}
        <header className="pt-32 pb-16 border-b border-gray-100 bg-[#ffffff]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center"
            >
              <h1 className="font-heading font-extrabold text-4xl sm:text-5xl md:text-6xl tracking-tight mb-6 leading-none">
                Integrations
              </h1>
              <p className="text-xl md:text-2xl text-muted-dark max-w-3xl mx-auto leading-relaxed font-normal">
                Recruitment Direct UK Ltd uses connected AI-supported recruitment, compliance and CRM workflows to help make the recruitment process faster, clearer and easier to manage.
              </p>
              <div className="mt-4 text-base text-muted-dark max-w-3xl mx-auto leading-relaxed">
                Our integrations support staff orders, applicant matching, communication, document collection, compliance checks, account setup and consultant review.
                The aim is simple: reduce manual administration, improve response times and help our consultant team move from staffing requirement to suitable applicant review more quickly.
              </div>
            </motion.div>
          </div>
        </header>

        {/* Connected Recruitment Workflow */}
        <section className="py-20 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -25 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center mb-6">
                  <LinkIcon className="w-6 h-6 text-blue-600" />
                </div>
                <h2 className="text-3xl font-bold font-heading mb-4 text-[#0c0f19]">
                  Connected Recruitment Workflow
                </h2>
                <p className="text-base text-muted-dark mb-6 leading-relaxed">
                  Our connected recruitment workflow supports the full process from staff order or applicant application through to consultant review, compliance checking and placement.
                  It helps keep information organised, reduces duplicated admin and gives consultants faster access to the details they need.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 25 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-gray-soft p-8 rounded-2xl"
              >
                <h3 className="text-sm font-bold uppercase tracking-wider mb-4 text-muted-dark">
                  Our connected workflow supports:
                </h3>
                <ul className="space-y-3">
                  {[
                    "Staff orders and new client enquiries",
                    "Applicant applications",
                    "AI Candidate Skill Search",
                    "Applicant communication",
                    "Screening questions",
                    "Document upload links",
                    "Compliance checks",
                    "CRM updates",
                    "Consultant review",
                    "Submission and placement support",
                    "Timesheet and payroll administration",
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-sm font-medium">
                      <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        {/* AI Hire Now Integration */}
        <section className="py-20 bg-gray-50 border-y border-gray-100">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="order-2 md:order-1 bg-white p-8 rounded-2xl border border-gray-100 shadow-sm"
              >
                <h3 className="text-sm font-bold uppercase tracking-wider mb-4 text-muted-dark">
                  AI Hire Now supports:
                </h3>
                <ul className="space-y-3">
                  {[
                    "Temporary staff orders",
                    "Contract staffing requirements",
                    "Permanent vacancy enquiries",
                    "New client staffing enquiries",
                    "Existing client staff orders",
                    "Role, location and shift details",
                    "Skills, tickets, licences and experience requirements",
                    "24/7 staffing requirement capture",
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-sm">
                      <CheckCircle className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8">
                  <Link href="/ai-hire-now" className="btn-gold">
                    <span>AI Hire Now</span>
                    <ArrowRight className="w-4 h-4 text-[#071424]" />
                  </Link>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="order-1 md:order-2"
              >
                <div className="w-12 h-12 rounded-xl bg-[#c89528]/10 flex items-center justify-center mb-6">
                  <Zap className="w-6 h-6 text-[#8a6417]" />
                </div>
                <h2 className="text-3xl font-bold font-heading mb-4 text-[#0c0f19]">
                  AI Hire Now Integration
                </h2>
                <p className="text-base text-muted-dark leading-relaxed">
                  AI Hire Now allows existing clients to order staff 24/7 and new clients to submit staffing requirements online.
                  When a staff order or enquiry is submitted, it triggers AI Candidate Skill Search 24/7, helping identify suitable applicants before a consultant reviews the requirement.
                  This connects the client requirement directly with applicant matching, helping the consultant team respond faster.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* AI Candidate Skill Search */}
        <section className="py-20 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -25 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center mb-6">
                  <Search className="w-6 h-6 text-blue-600" />
                </div>
                <h2 className="text-3xl font-bold font-heading mb-4 text-[#0c0f19]">
                  AI Candidate Skill Search
                </h2>
                <p className="text-base text-muted-dark leading-relaxed">
                  AI Candidate Skill Search matches staffing requirements against applicant information.
                  When an AI Hire Now order or enquiry is submitted, the requirement is matched against applicant data such as skills, experience, location, availability, tickets and licences.
                  This helps prepare suitable applicants for consultant review before submission, advert placement or further screening.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 25 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-gray-soft p-8 rounded-2xl"
              >
                <h3 className="text-sm font-bold uppercase tracking-wider mb-4 text-muted-dark">
                  AI Candidate Skill Search supports:
                </h3>
                <ul className="space-y-3 mb-4">
                  {[
                    "Skill matching",
                    "Ticket and licence matching",
                    "Location matching",
                    "Availability matching",
                    "Experience matching",
                    "Faster consultant review",
                    "Earlier applicant identification",
                    "Shortlist preparation",
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-sm">
                      <CheckCircle className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-xs text-muted-dark italic">
                  Consultants remain in control of final suitability checks, compliance and submission.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CRM and Recruitment System Integration */}
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
                  CRM integration supports:
                </h3>
                <ul className="space-y-3 mb-4">
                  {[
                    "New client enquiry capture",
                    "Existing client staff orders",
                    "Applicant record updates",
                    "Screening response capture",
                    "Document storage",
                    "Status updates",
                    "Consultant review notes",
                    "Submission preparation",
                    "Audit trail records",
                    "Account and compliance workflow visibility",
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-sm">
                      <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-xs text-muted-dark italic">
                  This reduces manual data entry and helps consultants spend more time reviewing suitable applicants and supporting clients.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <div className="w-12 h-12 rounded-xl bg-purple-50 flex items-center justify-center mb-6">
                  <Database className="w-6 h-6 text-purple-600" />
                </div>
                <h2 className="text-3xl font-bold font-heading mb-4 text-[#0c0f19]">
                  CRM and Recruitment System Integration
                </h2>
                <p className="text-base text-muted-dark leading-relaxed">
                  Our AI-supported process is designed to connect with recruitment CRM and applicant tracking workflows.
                  This helps ensure staff orders, applicant responses, documents, screening information and consultant notes are organised in one place for review.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Modular Integrations Grid */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold font-heading text-center mb-12 text-[#0c0f19]">
              Specialist Compliance & Account Integrations
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              
              {/* Credit Account Integration to CRM */}
              <div className="bg-gray-soft p-6 rounded-2xl shadow-xs border border-gray-100 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold mb-3 font-heading">
                    Credit Account Integration to CRM
                  </h3>
                  <p className="text-sm text-muted-dark mb-4 leading-relaxed">
                    For new clients, the account opening process is an important part of moving from enquiry to live recruitment activity.
                    Our credit account integration helps capture new client account details and connect them with the recruitment CRM workflow.
                    This supports a clearer onboarding process and helps the consultant team manage new client information before recruitment activity or placement is confirmed.
                  </p>
                </div>
                <div className="border-t border-gray-200 pt-4 mt-2">
                  <h4 className="text-xs font-bold uppercase tracking-wider mb-2 text-muted-dark">Supports:</h4>
                  <ul className="space-y-1 text-sm text-muted-dark">
                    <li>• New client details capture</li>
                    <li>• Company and contact details</li>
                    <li>• Invoicing & payment terms</li>
                    <li>• CRM record setup</li>
                  </ul>
                </div>
              </div>

              {/* AI Verify Supplier Integration */}
              <div className="bg-gray-soft p-6 rounded-2xl shadow-xs border border-gray-100 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold mb-3 font-heading">
                    AI Verify Supplier Integration
                  </h3>
                  <p className="text-sm text-muted-dark mb-4 leading-relaxed">
                    RDUK uses AI-supported supplier verification workflows to help organise supplier information and support review.
                    AI Verify Supplier integration is designed to improve visibility, reduce manual administration and help supplier information be checked in a more structured way.
                  </p>
                </div>
                <div className="border-t border-gray-200 pt-4 mt-2">
                  <h4 className="text-xs font-bold uppercase tracking-wider mb-2 text-muted-dark">Supports:</h4>
                  <ul className="space-y-1 text-sm text-muted-dark">
                    <li>• Supplier information capture</li>
                    <li>• Record organisation</li>
                    <li>• Verification workflow support</li>
                    <li>• Internal audit trail & review</li>
                  </ul>
                </div>
              </div>

              {/* AI GDPR Compliance Integration */}
              <div className="bg-gray-soft p-6 rounded-2xl shadow-xs border border-gray-100 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold mb-3 font-heading">
                    AI GDPR Compliance Integration
                  </h3>
                  <p className="text-sm text-muted-dark mb-4 leading-relaxed">
                    RDUK uses AI-supported GDPR compliance workflows to help organise applicant, client and recruitment information within the process.
                    The purpose is to support clearer records, reduce manual checking and help maintain a more consistent compliance workflow.
                  </p>
                </div>
                <div className="border-t border-gray-200 pt-4 mt-2">
                  <h4 className="text-xs font-bold uppercase tracking-wider mb-2 text-muted-dark">Supports:</h4>
                  <ul className="space-y-1 text-sm text-muted-dark">
                    <li>• GDPR record organisation</li>
                    <li>• Consent and communication workflows</li>
                    <li>• Applicant data handling visibility</li>
                    <li>• Audit trail records</li>
                  </ul>
                </div>
              </div>

              {/* AI AWR Compliance Integration */}
              <div className="bg-gray-soft p-6 rounded-2xl shadow-xs border border-gray-100 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold mb-3 font-heading">
                    AI AWR Compliance Integration
                  </h3>
                  <p className="text-sm text-muted-dark mb-4 leading-relaxed">
                    RDUK uses AI-supported AWR compliance workflows to help organise relevant assignment and worker information.
                    This supports the consultant and compliance team by helping make AWR-related information easier to review during the recruitment and placement process.
                  </p>
                </div>
                <div className="border-t border-gray-200 pt-4 mt-2">
                  <h4 className="text-xs font-bold uppercase tracking-wider mb-2 text-muted-dark">Supports:</h4>
                  <ul className="space-y-1 text-sm text-muted-dark">
                    <li>• Assignment info organisation</li>
                    <li>• Worker info review support</li>
                    <li>• Pay & working time visibility</li>
                    <li>• Compliance workflow support</li>
                  </ul>
                </div>
              </div>

              {/* AI Document Checking Integration */}
              <div className="bg-gray-soft p-6 rounded-2xl shadow-xs border border-gray-100 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold mb-3 font-heading">
                    AI Document Checking Integration
                  </h3>
                  <p className="text-sm text-muted-dark mb-4 leading-relaxed">
                    RDUK uses AI-supported document checking to help organise and review applicant documents more efficiently.
                    Where required, applicants can provide documents through secure upload links, allowing the recruitment team to review the information needed for the role.
                  </p>
                </div>
                <div className="border-t border-gray-200 pt-4 mt-2">
                  <h4 className="text-xs font-bold uppercase tracking-wider mb-2 text-muted-dark">Supports:</h4>
                  <ul className="space-y-1 text-sm text-muted-dark">
                    <li>• ID and Right-to-Work docs</li>
                    <li>• Licences and tickets</li>
                    <li>• Qualification certificates</li>
                    <li>• Missing document alerts</li>
                  </ul>
                </div>
              </div>

              {/* Digital Timesheet Option */}
              <div className="bg-gray-soft p-6 rounded-2xl shadow-xs border border-gray-100 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold mb-3 font-heading">
                    Digital Timesheet Option
                  </h3>
                  <p className="text-sm text-muted-dark mb-4 leading-relaxed">
                    RDUK can support clients with a digital timesheet option to reduce paperwork and improve payroll accuracy.
                    Digital timesheets help workers and clients submit, review and approve hours more efficiently, while giving the recruitment team a clearer audit trail.
                  </p>
                </div>
                <div className="border-t border-gray-200 pt-4 mt-2">
                  <h4 className="text-xs font-bold uppercase tracking-wider mb-2 text-muted-dark">Supports:</h4>
                  <ul className="space-y-1 text-sm text-muted-dark">
                    <li>• Timesheet submission</li>
                    <li>• Client approval</li>
                    <li>• Payroll details and tracking</li>
                    <li>• Paperwork reduction & audit trails</li>
                  </ul>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Detailed Integrations List */}
        <section className="py-20 bg-gray-50 border-t border-gray-100">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              
              {/* WhatsApp & SMS */}
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#25D366]/10 flex items-center justify-center mb-6">
                  <MessageSquare className="w-6 h-6 text-[#25D366]" />
                </div>
                <h3 className="text-2xl font-bold font-heading mb-4 text-[#0c0f19]">
                  WhatsApp and SMS Communication
                </h3>
                <p className="text-base text-muted-dark mb-6 leading-relaxed">
                  RDUK uses WhatsApp and SMS communication to improve applicant response times.
                  This helps applicants receive screening questions, updates and document upload links quickly, especially when urgent roles need to be filled.
                </p>
                <ul className="space-y-2 text-sm text-muted-dark font-medium">
                  <li className="flex items-center gap-2">• Applicant screening messages</li>
                  <li className="flex items-center gap-2">• Secure document upload links</li>
                  <li className="flex items-center gap-2">• Availability checks & role updates</li>
                  <li className="flex items-center gap-2">• Shift info & follow-up messages</li>
                </ul>
              </div>

              {/* Document Upload & Compliance */}
              <div>
                <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center mb-6">
                  <ShieldCheck className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold font-heading mb-4 text-[#0c0f19]">
                  Document Upload and Compliance Workflow
                </h3>
                <p className="text-base text-muted-dark mb-6 leading-relaxed">
                  Our process supports secure document collection for applicants moving through the recruitment process.
                  Where required, applicants receive a secure upload link to provide the documents needed for consultant and compliance review.
                </p>
                <ul className="space-y-2 text-sm text-muted-dark font-medium">
                  <li className="flex items-center gap-2">• ID & Right-to-work evidence</li>
                  <li className="flex items-center gap-2">• Licences & tickets</li>
                  <li className="flex items-center gap-2">• Qualifications & certificates</li>
                  <li className="flex items-center gap-2">• References & role-specific docs</li>
                </ul>
              </div>

            </div>
          </div>
        </section>

        {/* Consultant-Led, AI-Supported */}
        <section className="py-20 bg-gold-light border-y border-gray-100">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#f6d77d]/20 border border-[#c89528]/30 mb-6">
                <Zap className="w-4 h-4 text-[#8a6417]" />
                <span className="text-sm font-bold uppercase tracking-wider text-[#8a6417]">Human Checks</span>
              </div>
              
              <h2 className="text-3xl sm:text-4xl font-extrabold mb-6 font-heading">
                Consultant-Led, AI-Supported
              </h2>
              
              <div className="space-y-6 text-base text-muted-dark max-w-3xl mx-auto leading-relaxed text-left md:text-center">
                <p>
                  Our integrations are designed to support the consultant team, not replace it.
                </p>
                <p>
                  AI helps speed up matching, communication, screening, document collection, compliance organisation and CRM updates, while consultants remain responsible for reviewing applicants, checking suitability, confirming compliance and managing client relationships.
                </p>
                <p>
                  This gives clients the benefit of faster technology while keeping recruitment decisions in experienced hands.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-24 bg-white text-center">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-extrabold mb-6 font-heading">
                Built for Faster, More Controlled Recruitment
              </h2>
              
              <p className="text-base text-muted-dark max-w-2xl mx-auto leading-relaxed mb-10">
                By connecting staff orders, AI Candidate Skill Search, applicant communication, credit account setup, CRM workflows, compliance checks, document collection and consultant review, RDUK helps clients move from staffing requirement to suitable applicant review more quickly.
              </p>

              <div>
                <Link href="/ai-hire-now" className="btn-gold">
                  <span>AI Hire Now</span>
                  <ArrowRight className="w-4 h-4 text-[#071424]" />
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
