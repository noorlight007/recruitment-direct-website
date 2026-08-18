"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingElements from "@/components/FloatingElements";

export default function DataRetentionPolicyPage() {
  return (
    <div className="min-h-screen bg-white text-black flex flex-col font-sans">
      <FloatingElements />
      <Navbar />

      <main className="flex-grow pt-[20px] md:pt-[40px] pb-20 px-6 max-w-4xl mx-auto w-full drp-container">
        {/* Page Title */}
        <h1 className="text-3xl md:text-5xl font-bold font-heading text-black mb-6 tracking-tight">
          Data Retention Policy
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
          <section className="drp-section">
            <h2 className="text-xl md:text-2xl font-bold font-heading text-black mb-4">
              1. Statement
            </h2>
            <div className="space-y-4 text-base md:text-lg text-gray-800 leading-relaxed">
              <p>
                Recruitment Direct UK Limited (&ldquo;RDUK&rdquo;, &ldquo;we&rdquo;, &ldquo;our&rdquo; or &ldquo;us&rdquo;) is committed to retaining personal and business information only for as long as necessary to fulfil legal, regulatory, contractual and operational requirements.
              </p>
              <p>
                This policy establishes the principles and procedures for the retention, review and disposal of information held by Recruitment Direct UK Limited.
              </p>
            </div>
          </section>

          {/* 2. Purpose */}
          <section className="drp-section">
            <h2 className="text-xl md:text-2xl font-bold font-heading text-black mb-4">
              2. Purpose
            </h2>
            <div className="space-y-4 text-base md:text-lg text-gray-800 leading-relaxed">
              <p>
                The purpose of this policy is to:
              </p>
              <ul className="space-y-3 mt-2 pl-2">
                {[
                  "Ensure compliance with UK GDPR and the Data Protection Act 2018.",
                  "Maintain accurate and relevant records.",
                  "Reduce the risk of retaining information longer than necessary.",
                  "Support regulatory and contractual compliance.",
                  "Protect confidential and personal information.",
                  "Support efficient data management and governance."
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-gray-800">
                    <span className="w-1.5 h-1.5 bg-blue-600 rounded-full flex-shrink-0 mt-2.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* 3. Scope */}
          <section className="drp-section">
            <h2 className="text-xl md:text-2xl font-bold font-heading text-black mb-4">
              3. Scope
            </h2>
            <div className="space-y-6 text-base md:text-lg text-gray-800 leading-relaxed">
              <div>
                <p className="mb-2">This policy applies to:</p>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-2 pl-2">
                  {[
                    "Employees",
                    "Workers",
                    "Applicants",
                    "Clients",
                    "Contractors",
                    "Suppliers",
                    "Business partners"
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-gray-800">
                      <span className="w-1.5 h-1.5 bg-blue-600 rounded-full flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <p className="mb-2">The policy applies to information held in:</p>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-2 pl-2">
                  {[
                    "Recruitment databases.",
                    "CRM systems.",
                    "AI-assisted systems.",
                    "Cloud-based systems.",
                    "Email systems.",
                    "Digital records.",
                    "Physical records and documentation."
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-gray-800">
                      <span className="w-1.5 h-1.5 bg-blue-600 rounded-full flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* 4. Retention Principles */}
          <section className="drp-section">
            <h2 className="text-xl md:text-2xl font-bold font-heading text-black mb-4">
              4. Retention Principles
            </h2>
            <div className="space-y-4 text-base md:text-lg text-gray-800 leading-relaxed">
              <p>
                Recruitment Direct UK Limited will ensure that information is:
              </p>
              <ul className="space-y-3 mt-2 pl-2">
                {[
                  "Retained only where necessary.",
                  "Accurate and up to date where practical.",
                  "Securely stored.",
                  "Reviewed periodically.",
                  "Deleted, destroyed or anonymised when no longer required."
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-gray-800">
                    <span className="w-1.5 h-1.5 bg-blue-600 rounded-full flex-shrink-0 mt-2.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-4">
                Retention periods may vary depending on legal, regulatory, contractual and business requirements.
              </p>
            </div>
          </section>

          {/* 5. AI-Assisted Data Management */}
          <section className="drp-section">
            <h2 className="text-xl md:text-2xl font-bold font-heading text-black mb-4">
              5. AI-Assisted Data Management
            </h2>
            <div className="space-y-4 text-base md:text-lg text-gray-800 leading-relaxed">
              <p>
                Recruitment Direct UK Limited may use artificial intelligence (&ldquo;AI&rdquo;), machine learning and automated technologies to support data management and compliance activities.
              </p>
              <p>
                These technologies may assist with:
              </p>
              <ul className="space-y-3 mt-2 pl-2">
                {[
                  "Monitoring document expiry dates.",
                  "Identifying incomplete, inaccurate or duplicate records.",
                  "Maintaining recruitment database records.",
                  "Supporting GDPR compliance activities.",
                  "Monitoring retention periods.",
                  "Identifying records due for review, deletion or archiving.",
                  "Supporting compliance audits and reporting."
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-gray-800">
                    <span className="w-1.5 h-1.5 bg-blue-600 rounded-full flex-shrink-0 mt-2.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-4">
                All AI-assisted activities remain subject to appropriate human oversight and review.
              </p>
            </div>
          </section>

          {/* 6. Retention Periods */}
          <section className="drp-section">
            <h2 className="text-xl md:text-2xl font-bold font-heading text-black mb-4">
              6. Retention Periods
            </h2>
            <div className="space-y-6 text-base md:text-lg text-gray-800 leading-relaxed">
              <div>
                <h3 className="font-bold text-gray-900 mb-1">Applicant Records</h3>
                <p>
                  Applicant records, CVs, communications and recruitment documentation will be retained only for as long as necessary for recruitment, compliance and business purposes.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-gray-900 mb-1">Worker Records</h3>
                <p>
                  Worker records, compliance documentation, payroll information and assignment records will be retained in accordance with legal, tax, employment and regulatory requirements.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-gray-900 mb-1">Client Records</h3>
                <p>
                  Client records, contracts, correspondence and invoicing information will be retained for as long as necessary to support contractual, legal and business requirements.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-gray-900 mb-1">Financial Records</h3>
                <p>
                  Financial and accounting records will be retained in accordance with applicable tax, accounting and regulatory requirements.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-gray-900 mb-1">Website and Communication Records</h3>
                <p>
                  Website enquiries, emails, communications and marketing records will be retained only where necessary for business, legal or compliance purposes.
                </p>
              </div>
            </div>
          </section>

          {/* 7. Secure Disposal */}
          <section className="drp-section">
            <h2 className="text-xl md:text-2xl font-bold font-heading text-black mb-4">
              7. Secure Disposal
            </h2>
            <div className="space-y-4 text-base md:text-lg text-gray-800 leading-relaxed">
              <p>
                Where information is no longer required, Recruitment Direct UK Limited will take appropriate steps to ensure information is:
              </p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-2 pl-2">
                {[
                  "Securely deleted.",
                  "Securely destroyed.",
                  "Permanently removed from active systems where appropriate.",
                  "Anonymised where suitable."
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-gray-800">
                    <span className="w-1.5 h-1.5 bg-blue-600 rounded-full flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* 8. Responsibilities */}
          <section className="drp-section">
            <h2 className="text-xl md:text-2xl font-bold font-heading text-black mb-4">
              8. Responsibilities
            </h2>
            <div className="space-y-4 text-base md:text-lg text-gray-800 leading-relaxed">
              <p>
                Recruitment Direct UK Limited is responsible for ensuring compliance with this policy.
              </p>
              <p>
                Employees, workers and authorised representatives are expected to:
              </p>
              <ul className="space-y-3 mt-2 pl-2">
                {[
                  "Follow data retention procedures.",
                  "Protect confidential information.",
                  "Report concerns relating to information management or retention practices."
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-gray-800">
                    <span className="w-1.5 h-1.5 bg-blue-600 rounded-full flex-shrink-0 mt-2.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* 9. Compliance */}
          <section className="drp-section">
            <h2 className="text-xl md:text-2xl font-bold font-heading text-black mb-4">
              9. Compliance
            </h2>
            <div className="space-y-4 text-base md:text-lg text-gray-800 leading-relaxed">
              <p>
                Failure to comply with this policy may result in disciplinary action, termination of engagement, contractual action or referral to regulatory authorities where appropriate.
              </p>
            </div>
          </section>

          {/* 10. Review */}
          <section className="drp-section">
            <h2 className="text-xl md:text-2xl font-bold font-heading text-black mb-4">
              10. Review
            </h2>
            <div className="space-y-4 text-base md:text-lg text-gray-800 leading-relaxed">
              <p>
                This policy will be reviewed annually or sooner if required by legislative, regulatory, technological or business changes.
              </p>
            </div>
          </section>

          {/* Director Approval Box */}
          <section className="bg-gray-50 border border-gray-200 rounded-xl p-8 mt-12 space-y-4">
            <h3 className="text-lg font-bold text-gray-900 border-b border-gray-200 pb-2">
              Director Approval
            </h3>
            <p className="text-base text-gray-800 leading-relaxed italic">
              I confirm that this Data Retention Policy has been reviewed and approved on behalf of Recruitment Direct UK Limited.
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
        
        .drp-container h1,
        .drp-container h2,
        .drp-container h3,
        .drp-container p,
        .drp-container li,
        .drp-container span {
          color: #000000 !important;
        }

        .drp-container h1 {
          line-height: 1.25 !important;
        }

        .drp-container h2 {
          line-height: 1.35 !important;
        }

        .drp-section {
          border-bottom: 1px solid #e5e7eb;
          padding-bottom: 2rem;
        }

        .drp-section:last-child {
          border-bottom: none;
          padding-bottom: 0;
        }
      `}</style>
    </div>
  );
}
