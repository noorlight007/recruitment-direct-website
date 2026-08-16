"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Award,
  CheckCircle,
  FileText,
  ShieldCheck,
  Users,
  Scale,
  ArrowRight,
  ExternalLink,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingElements from "@/components/FloatingElements";

export default function AccreditationsPage() {
  return (
    <div className="min-h-screen accreditations-page">
      <style jsx global>{`
        .accreditations-page {
          background-color: #ffffff !important;
          background-image: none !important;
          font-family: var(--font-inter), var(--font-poppins), sans-serif;
        }
        
        .accreditations-page-content h1,
        .accreditations-page-content h2,
        .accreditations-page-content h3,
        .accreditations-page-content h4,
        .accreditations-page-content p,
        .accreditations-page-content li,
        .accreditations-page-content span {
          color: #0c0f19 !important;
        }

        .accreditations-page-content .text-muted-dark {
          color: #475569 !important;
        }

        .accreditations-page-content .btn-gold {
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

        .accreditations-page-content .btn-gold span {
          color: #071424 !important;
        }

        .accreditations-page-content .btn-gold:hover {
          filter: brightness(1.15) !important;
          box-shadow:
            inset 0 1px 0 rgba(255, 255, 255, 0.8),
            inset 0 -2px 0 rgba(70, 45, 5, 0.4),
            0 10px 22px rgba(184, 134, 11, 0.38) !important;
          transform: translateY(-2px) !important;
        }

        .accreditations-page-content .btn-gold:active {
          transform: scale(0.98) !important;
        }

        .accreditations-page-content .btn-outline-dark {
          color: #0c0f19 !important;
          background: transparent !important;
          border: 2px solid #0c0f19 !important;
          transition: all 0.25s ease !important;
          font-weight: 800 !important;
          font-size: 15px !important;
          height: 52px !important;
          line-height: 52px !important;
          padding: 0 28px !important;
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

        .accreditations-page-content .btn-outline-dark span {
          color: #0c0f19 !important;
        }

        .accreditations-page-content .btn-outline-dark:hover {
          background-color: #0c0f19 !important;
          transform: translateY(-2px) !important;
        }

        .accreditations-page-content .btn-outline-dark:hover span {
          color: #ffffff !important;
        }

        .accreditations-page-content .bg-gold-light {
          background: linear-gradient(135deg, rgba(246, 215, 125, 0.08) 0%, rgba(200, 149, 40, 0.04) 100%);
          border: 1px solid rgba(200, 149, 40, 0.15);
        }

        .accreditations-page-content .bg-gray-soft {
          background-color: #f8fafc;
          border: 1px solid #e2e8f0;
        }
      `}</style>

      <Navbar />

      <div className="accreditations-page-content">
        {/* Hero Header */}
        <header className="pt-32 pb-16 border-b border-gray-100 bg-[#ffffff]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center"
            >
              <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center mb-6 mx-auto">
                <Award className="w-6 h-6 text-blue-600" />
              </div>
              <h1 className="font-heading font-extrabold text-4xl sm:text-5xl md:text-6xl tracking-tight mb-6 leading-none">
                Accreditations
              </h1>
              <p className="text-xl md:text-2xl text-muted-dark max-w-3xl mx-auto leading-relaxed font-normal">
                Recruitment Direct UK Ltd maintains recognised accreditations and certifications to support professional recruitment, compliance, quality management and secure information handling.
              </p>
              <div className="mt-4 text-base text-muted-dark max-w-3xl mx-auto leading-relaxed">
                Our accreditations help give clients confidence that they are working with an established recruitment supplier with structured processes, recognised standards and a commitment to responsible labour supply.
                We work with private sector and public sector clients who need recruitment support that is reliable, compliant and professionally managed.
              </div>
            </motion.div>
          </div>
        </header>

        {/* Recognised Standards */}
        <section className="py-20 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -25 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold font-heading mb-4 text-[#0c0f19]">
                  Recognised Standards
                </h2>
                <p className="text-base text-muted-dark mb-6 leading-relaxed">
                  Recruitment is about more than filling vacancies. Clients need confidence that their recruitment partner has proper processes in place for applicant handling, documentation, compliance, communication and service delivery.
                  Our accreditations support the way we work across temporary, contract and permanent recruitment.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 25 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-gray-soft p-8 rounded-2xl"
              >
                <h3 className="text-sm font-bold uppercase tracking-wider mb-4 text-muted-dark">
                  They help demonstrate our commitment to:
                </h3>
                <ul className="space-y-3">
                  {[
                    "Professional recruitment standards",
                    "Responsible labour supply",
                    "Quality management",
                    "Secure information handling",
                    "Compliance-focused recruitment",
                    "Public sector and framework readiness",
                    "Reliable service delivery",
                    "Continuous improvement",
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

        {/* Our Accreditations and Certifications (List/Cards) */}
        <section className="py-20 bg-gray-50 border-t border-b border-gray-100">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold font-heading mb-4 text-[#0c0f19]">
                Our Accreditations and Certifications
              </h2>
              <p className="text-base text-muted-dark max-w-2xl mx-auto">
                Recruitment Direct UK Ltd holds a number of recognised accreditations and certifications.
                These are displayed on our website so clients can view the relevant certificates directly.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              
              {/* Constructionline Gold */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 rounded-xl bg-gray-50 flex items-center justify-center p-2 flex-shrink-0">
                      <img
                        src="/assets/compliance/constructionline-gold.png"
                        alt="Constructionline Gold"
                        className="max-h-full max-w-full object-contain"
                      />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold font-heading">Constructionline Gold</h3>
                      <span className="text-xs text-muted-dark">Gold Member | No: 1324569</span>
                    </div>
                  </div>
                  <p className="text-sm text-muted-dark mb-6 leading-relaxed">
                    Constructionline Gold supports our position as a trusted supplier for clients operating in construction, public sector, facilities management, maintenance and site-based environments.
                    It helps demonstrate that RDUK has been assessed against recognised supplier standards and provides clients with additional confidence when appointing a recruitment partner.
                  </p>
                </div>
                <div>
                  <a
                    href="/certificates/constructionline-gold-1324569.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-outline-dark w-full text-center"
                  >
                    <span>View Constructionline Gold Certificate</span>
                    <ExternalLink className="w-4 h-4 flex-shrink-0" />
                  </a>
                </div>
              </motion.div>

              {/* Cyber Essentials */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 rounded-xl bg-gray-50 flex items-center justify-center p-2 flex-shrink-0">
                      <img
                        src="/assets/compliance/cyber-essentials.png"
                        alt="Cyber Essentials"
                        className="max-h-full max-w-full object-contain"
                      />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold font-heading">Cyber Essentials</h3>
                      <span className="text-xs text-muted-dark">Certified | No: 4686a995</span>
                    </div>
                  </div>
                  <p className="text-sm text-muted-dark mb-6 leading-relaxed">
                    Cyber Essentials supports our commitment to secure information handling and protection against common cyber risks.
                    As recruitment involves applicant data, client information, documents and communication records, cyber security is an important part of our wider compliance approach.
                  </p>
                </div>
                <div>
                  <a
                    href="/certificates/cyber-essentials-4686a995.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-outline-dark w-full text-center"
                  >
                    <span>View Cyber Essentials Certificate</span>
                    <ExternalLink className="w-4 h-4 flex-shrink-0" />
                  </a>
                </div>
              </motion.div>

              {/* ISO 9001 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 rounded-xl bg-gray-50 flex items-center justify-center p-2 flex-shrink-0">
                      <img
                        src="/assets/compliance/cqs-iso9001.png"
                        alt="ISO 9001"
                        className="max-h-full max-w-full object-contain"
                      />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold font-heading">ISO 9001 Quality Management</h3>
                      <span className="text-xs text-muted-dark">GB2006088</span>
                    </div>
                  </div>
                  <p className="text-sm text-muted-dark mb-6 leading-relaxed">
                    ISO 9001 supports our commitment to quality management, structured processes and continuous improvement.
                    For clients, this means our recruitment service is supported by documented procedures, consistent ways of working and a focus on reliable service delivery.
                  </p>
                </div>
                <div>
                  <a
                    href="/certificates/iso-9001-2015-gb2006088.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-outline-dark w-full text-center"
                  >
                    <span>View ISO 9001 Certificate</span>
                    <ExternalLink className="w-4 h-4 flex-shrink-0" />
                  </a>
                </div>
              </motion.div>

              {/* REC Membership */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 rounded-xl bg-gray-50 flex items-center justify-center p-2 flex-shrink-0">
                      <img
                        src="/rec_logo_new.png"
                        alt="REC Membership"
                        className="max-h-full max-w-full object-contain text-black"
                      />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold font-heading">REC Membership</h3>
                      <span className="text-xs text-muted-dark">Corporate Member | No: 00207320</span>
                    </div>
                  </div>
                  <p className="text-sm text-muted-dark mb-6 leading-relaxed">
                    REC membership supports our commitment to professional recruitment standards and responsible working practices within the UK recruitment industry.
                    It helps demonstrate that RDUK operates as a professional recruitment business with a focus on both client and applicant service.
                  </p>
                </div>
                <div>
                  <a
                    href="/certificates/rec-corporate-membership.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-outline-dark w-full text-center"
                  >
                    <span>View REC Certificate</span>
                    <ExternalLink className="w-4 h-4 flex-shrink-0" />
                  </a>
                </div>
              </motion.div>

            </div>
          </div>
        </section>

        {/* Why Accreditations Matter to Clients */}
        <section className="py-20 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              
              <motion.div
                initial={{ opacity: 0, x: -25 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center mb-6">
                  <ShieldCheck className="w-6 h-6 text-blue-600" />
                </div>
                <h2 className="text-3xl font-bold font-heading mb-4 text-[#0c0f19]">
                  Why Accreditations Matter to Clients
                </h2>
                <p className="text-base text-muted-dark leading-relaxed">
                  When choosing a recruitment supplier, clients need to know that the agency can deliver more than quick responses.
                  They need confidence that the agency understands compliance, manages information properly, follows structured processes and can support both urgent and planned recruitment requirements.
                  Our accreditations help support client confidence by showing that RDUK takes supplier standards seriously.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 25 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-gray-soft p-8 rounded-2xl"
              >
                <h3 className="text-sm font-bold uppercase tracking-wider mb-4 text-muted-dark">
                  For clients, this means:
                </h3>
                <ul className="space-y-3">
                  {[
                    "A more professional recruitment supply chain",
                    "Clearer supplier assurance",
                    "Stronger compliance visibility",
                    "Better quality management",
                    "Greater confidence in document handling",
                    "Support for public sector procurement requirements",
                    "A recruitment partner with recognised standards in place",
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-sm font-medium">
                      <CheckCircle className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Supporting Framework & Public Sector Requirements */}
        <section className="py-20 bg-gray-50 border-t border-b border-gray-100">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold font-heading mb-6 text-[#0c0f19]">
                Supporting Framework and Public Sector Requirements
              </h2>
              <p className="text-base text-muted-dark leading-relaxed mb-4 max-w-3xl mx-auto">
                Many public sector and framework-based clients require evidence of supplier standards before engaging a recruitment partner.
              </p>
              <p className="text-base text-muted-dark leading-relaxed max-w-3xl mx-auto">
                RDUK’s accreditations help support this requirement by providing clear evidence of our commitment to quality, compliance, secure information handling and responsible recruitment.
                This is particularly important where clients need dependable temporary, contract or permanent staffing support with clear processes and audit visibility.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Professional, Compliance-Focused Recruitment */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold font-heading mb-6 text-[#0c0f19]">
                Professional, Compliance-Focused Recruitment
              </h2>
              <p className="text-base text-muted-dark leading-relaxed max-w-3xl mx-auto mb-12">
                Our accreditations are part of a wider approach to recruitment.
                RDUK combines experienced consultant review, organised compliance workflows, secure document handling and structured recruitment processes to support both clients and applicants.
                This helps us deliver recruitment support that is fast, professional and controlled.
              </p>

              <div className="bg-gray-soft rounded-2xl p-8 max-w-2xl mx-auto border border-gray-100 shadow-sm">
                <h3 className="text-xl font-bold mb-4 font-heading text-[#0c0f19]">
                  View Our Certificates
                </h3>
                <p className="text-sm text-muted-dark mb-6">
                  Our current certificates are available to view in the Compliance Section.
                  For further information about our accreditations or compliance processes, please contact Recruitment Direct UK Ltd.
                </p>
                <div className="flex gap-4 justify-center items-center flex-wrap">
                  <Link href="/contact" className="btn-outline-dark">
                    <span>Contact Us</span>
                  </Link>
                  <a href="#compliance" className="btn-outline-dark">
                    <span>Compliance Section</span>
                  </a>
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
