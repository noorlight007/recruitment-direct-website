"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingElements from "@/components/FloatingElements";

export default function AITransparencyStatementPage() {
  return (
    <div className="min-h-screen bg-white text-black flex flex-col font-sans">
      <FloatingElements />
      <Navbar />

      <main className="flex-grow pt-[20px] md:pt-[40px] pb-20 px-6 max-w-4xl mx-auto w-full aits-container">
        {/* Page Title */}
        <h1 className="text-3xl md:text-5xl font-bold font-heading text-black mb-6 tracking-tight">
          AI Transparency Statement
        </h1>

        {/* Company Address Block */}
        <div className="text-sm text-gray-600 mb-8 border-l-4 border-blue-600 pl-4 py-1 leading-relaxed">
          <p className="font-semibold text-gray-900">Recruitment Direct UK Limited</p>
          <p>Herkimer House</p>
          <p>Mill Road Industrial Estate</p>
          <p>Linlithgow</p>
          <p>EH49 7SF</p>
          <p>Scotland</p>
          <p>United Kingdom</p>
        </div>

        {/* Document Info Card */}
        <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 mb-12 grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-700">
          <div>
            <span className="font-semibold text-gray-900 block">Document Owner:</span>
            Recruitment Direct UK Ltd
          </div>
          <div>
            <span className="font-semibold text-gray-900 block">Version:</span>
            1.0
          </div>
          <div>
            <span className="font-semibold text-gray-900 block">Effective Date:</span>
            11 June 2026
          </div>
          <div>
            <span className="font-semibold text-gray-900 block">Review Date:</span>
            11 June 2027
          </div>
        </div>

        {/* Sections */}
        <div className="space-y-12">
          {/* 1. Statement */}
          <section className="aits-section">
            <h2 className="text-xl md:text-2xl font-bold font-heading text-black mb-4">
              1. Statement
            </h2>
            <div className="space-y-4 text-base md:text-lg text-gray-800 leading-relaxed">
              <p>
                Recruitment Direct UK Limited (&ldquo;RDUK&rdquo;, &ldquo;we&rdquo;, &ldquo;our&rdquo; or &ldquo;us&rdquo;) is committed to the responsible, transparent and ethical use of artificial intelligence (&ldquo;AI&rdquo;), machine learning and automated technologies within its business operations.
              </p>
              <p>
                We recognise the importance of maintaining trust, accountability and compliance when using AI-assisted systems and are committed to ensuring that technology is used responsibly and in accordance with applicable legislation.
              </p>
            </div>
          </section>

          {/* 2. Purpose */}
          <section className="aits-section">
            <h2 className="text-xl md:text-2xl font-bold font-heading text-black mb-4">
              2. Purpose
            </h2>
            <div className="space-y-4 text-base md:text-lg text-gray-800 leading-relaxed">
              <p>
                The purpose of this statement is to explain how Recruitment Direct UK Limited uses AI technologies and the principles that govern their use.
              </p>
            </div>
          </section>

          {/* 3. Our Use of AI */}
          <section className="aits-section">
            <h2 className="text-xl md:text-2xl font-bold font-heading text-black mb-4">
              3. Our Use of AI
            </h2>
            <div className="space-y-4 text-base md:text-lg text-gray-800 leading-relaxed">
              <p>
                Recruitment Direct UK Limited may utilise AI technologies to support:
              </p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-2 pl-2">
                {[
                  "Recruitment processes.",
                  "Applicant screening and qualification.",
                  "Skills and vacancy matching.",
                  "Telephone, email, SMS and WhatsApp communications.",
                  "Compliance and document verification processes.",
                  "GDPR compliance activities.",
                  "Database management and record maintenance.",
                  "Business administration and workflow automation.",
                  "Reporting and operational efficiency."
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-gray-800">
                    <span className="w-1.5 h-1.5 bg-blue-600 rounded-full flex-shrink-0 mt-2.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-4">
                AI technologies are used to support business operations and improve service delivery.
              </p>
            </div>
          </section>

          {/* 4. Human Oversight */}
          <section className="aits-section">
            <h2 className="text-xl md:text-2xl font-bold font-heading text-black mb-4">
              4. Human Oversight
            </h2>
            <div className="space-y-4 text-base md:text-lg text-gray-800 leading-relaxed">
              <p>
                Recruitment Direct UK Limited does not rely solely on AI to make recruitment, employment or business decisions.
              </p>
              <p>
                Appropriate human oversight is maintained throughout our operations.
              </p>
              <p>
                Where AI-assisted technologies are used, final decisions relating to recruitment, compliance, contracts and business activities remain subject to human review and approval.
              </p>
            </div>
          </section>

          {/* 5. Fairness and Accountability */}
          <section className="aits-section">
            <h2 className="text-xl md:text-2xl font-bold font-heading text-black mb-4">
              5. Fairness and Accountability
            </h2>
            <div className="space-y-4 text-base md:text-lg text-gray-800 leading-relaxed">
              <p>
                RDUK is committed to ensuring that AI technologies are used fairly, responsibly and consistently.
              </p>
              <p>
                We seek to:
              </p>
              <ul className="space-y-3 mt-2 pl-2">
                {[
                  "Monitor AI-assisted processes.",
                  "Review outputs where appropriate.",
                  "Maintain accountability for decisions.",
                  "Promote accuracy and reliability.",
                  "Reduce the risk of unintended bias or errors."
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-gray-800">
                    <span className="w-1.5 h-1.5 bg-blue-600 rounded-full flex-shrink-0 mt-2.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* 6. Data Protection and Privacy */}
          <section className="aits-section">
            <h2 className="text-xl md:text-2xl font-bold font-heading text-black mb-4">
              6. Data Protection and Privacy
            </h2>
            <div className="space-y-4 text-base md:text-lg text-gray-800 leading-relaxed">
              <p>
                AI technologies used by Recruitment Direct UK Limited operate in conjunction with our:
              </p>
              <ul className="space-y-3 mt-2 pl-2">
                <li>
                  <a href="/privacy-policy" className="text-blue-600 hover:underline">Privacy Policy</a>.
                </li>
                <li>
                  <a href="/candidate-privacy-notice" className="text-blue-600 hover:underline">Candidate Privacy Notice</a>.
                </li>
                <li>
                  <a href="/client-privacy-notice" className="text-blue-600 hover:underline">Client Privacy Notice</a>.
                </li>
                <li>
                  <a href="/data-protection-gdpr-policy" className="text-blue-600 hover:underline">Data Protection and GDPR Policy</a>.
                </li>
                <li>
                  <a href="/data-retention-policy" className="text-blue-600 hover:underline">Data Retention Policy</a>.
                </li>
              </ul>
              <p className="mt-4">
                Personal information processed through AI-assisted systems remains subject to the same security, privacy and compliance controls that apply to all information processed by Recruitment Direct UK Limited.
              </p>
            </div>
          </section>

          {/* 7. AI-Assisted GDPR Compliance */}
          <section className="aits-section">
            <h2 className="text-xl md:text-2xl font-bold font-heading text-black mb-4">
              7. AI-Assisted GDPR Compliance
            </h2>
            <div className="space-y-4 text-base md:text-lg text-gray-800 leading-relaxed">
              <p>
                Recruitment Direct UK Limited may utilise AI-assisted compliance technologies to support:
              </p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-2 pl-2">
                {[
                  "GDPR compliance monitoring.",
                  "Recruitment database maintenance.",
                  "Identification of incomplete, inaccurate or duplicate records.",
                  "Monitoring of document expiry dates.",
                  "Data retention management.",
                  "Compliance reporting and audit activities."
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-gray-800">
                    <span className="w-1.5 h-1.5 bg-blue-600 rounded-full flex-shrink-0 mt-2.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-4">
                AI technologies are used to support compliance activities and do not replace legal obligations, professional judgement or human responsibility.
              </p>
            </div>
          </section>

          {/* 8. Continuous Improvement */}
          <section className="aits-section">
            <h2 className="text-xl md:text-2xl font-bold font-heading text-black mb-4">
              8. Continuous Improvement
            </h2>
            <div className="space-y-4 text-base md:text-lg text-gray-800 leading-relaxed">
              <p>
                Recruitment Direct UK Limited will continue to review and assess the effectiveness, security and compliance of AI technologies used within the business.
              </p>
              <p>
                We will seek to ensure that AI systems remain aligned with legal, regulatory and operational requirements.
              </p>
            </div>
          </section>

          {/* 9. Contact Information */}
          <section className="aits-section">
            <h2 className="text-xl md:text-2xl font-bold font-heading text-black mb-4">
              9. Contact Information
            </h2>
            <div className="space-y-4 text-base md:text-lg text-gray-800 leading-relaxed">
              <p>
                Questions regarding the use of AI within Recruitment Direct UK Limited may be directed to:
              </p>
              <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 pl-8 text-sm text-gray-800">
                Email: <a href="mailto:accounts@rd1.co.uk" className="text-blue-600 hover:underline">accounts@rd1.co.uk</a>
              </div>
            </div>
          </section>

          {/* Director Approval Box */}
          <section className="bg-gray-50 border border-gray-200 rounded-xl p-8 mt-12 space-y-4">
            <h3 className="text-lg font-bold text-gray-900 border-b border-gray-200 pb-2">
              Director Approval
            </h3>
            <p className="text-base text-gray-800 leading-relaxed italic">
              I confirm that this AI Transparency Statement has been reviewed and approved on behalf of Recruitment Direct UK Limited.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-800 pt-2">
              <div>
                <span className="font-semibold text-gray-900 block">Name:</span>
                Steven Peddie
              </div>
              <div>
                <span className="font-semibold text-gray-900 block">Position:</span>
                Director
              </div>
              <div>
                <span className="font-semibold text-gray-900 block">Date:</span>
                11 June 2026
              </div>
              <div>
                <span className="font-semibold text-gray-900 block mb-1">Signature:</span>
                <div className="relative inline-block mt-6">
                  <img
                    src="/images/signature.png"
                    alt="Steven Peddie Signature"
                    className="absolute bottom-2 left-24 h-14 w-auto object-contain pointer-events-none"
                  />
                  <span className="text-gray-400 select-none">__________________________________________</span>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>

      <Footer />

      {/* Local Styled-JSX style sheet to override global dark theme backgrounds/text colors if needed */}
      <style jsx global>{`
        body {
          background-color: #ffffff !important;
          background-image: none !important;
          color: #000000 !important;
        }
        
        .aits-container h1,
        .aits-container h2,
        .aits-container h3,
        .aits-container p,
        .aits-container li,
        .aits-container span {
          color: #000000 !important;
        }

        .aits-container h1 {
          line-height: 1.25 !important;
        }

        .aits-container h2 {
          line-height: 1.35 !important;
        }

        .aits-section {
          border-bottom: 1px solid #e5e7eb;
          padding-bottom: 2rem;
        }

        .aits-section:last-child {
          border-bottom: none;
          padding-bottom: 0;
        }
      `}</style>
    </div>
  );
}
