"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingElements from "@/components/FloatingElements";

export default function DataBreachPolicyPage() {
  return (
    <div className="min-h-screen bg-white text-black flex flex-col font-sans">
      <FloatingElements />
      <Navbar />

      <main className="flex-grow pt-[20px] md:pt-[40px] pb-20 px-6 max-w-4xl mx-auto w-full dbp-container">
        {/* Page Title */}
        <h1 className="text-3xl md:text-5xl font-bold font-heading text-black mb-6 tracking-tight">
          Data Breach Policy
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
          <section className="dbp-section">
            <h2 className="text-xl md:text-2xl font-bold font-heading text-black mb-4">
              1. Statement
            </h2>
            <div className="space-y-4 text-base md:text-lg text-gray-800 leading-relaxed">
              <p>
                Recruitment Direct UK Limited (&ldquo;RDUK&rdquo;, &ldquo;we&rdquo;, &ldquo;our&rdquo; or &ldquo;us&rdquo;) is committed to protecting personal information, confidential business information and company data.
              </p>
              <p>
                This policy sets out the procedures for identifying, reporting, investigating and responding to actual or suspected data breaches in accordance with UK GDPR, the Data Protection Act 2018 and other applicable legal requirements.
              </p>
            </div>
          </section>

          {/* 2. Purpose */}
          <section className="dbp-section">
            <h2 className="text-xl md:text-2xl font-bold font-heading text-black mb-4">
              2. Purpose
            </h2>
            <div className="space-y-4 text-base md:text-lg text-gray-800 leading-relaxed">
              <p>
                The purpose of this policy is to:
              </p>
              <ul className="space-y-3 mt-2 pl-2">
                {[
                  "Protect personal and confidential information.",
                  "Ensure prompt reporting of data breaches.",
                  "Minimise the impact of security incidents.",
                  "Support compliance with UK GDPR and data protection legislation.",
                  "Protect applicants, workers, clients and business operations.",
                  "Support business continuity and recovery."
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
          <section className="dbp-section">
            <h2 className="text-xl md:text-2xl font-bold font-heading text-black mb-4">
              3. Scope
            </h2>
            <div className="space-y-4 text-base md:text-lg text-gray-800 leading-relaxed">
              <p>
                This policy applies to:
              </p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-2 pl-2">
                {[
                  "Employees",
                  "Workers",
                  "Directors",
                  "Contractors",
                  "Consultants",
                  "Suppliers with authorised access to company systems"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-gray-800">
                    <span className="w-1.5 h-1.5 bg-blue-600 rounded-full flex-shrink-0 mt-2.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-4">
                The policy applies to all personal data and confidential information processed by Recruitment Direct UK Limited.
              </p>
            </div>
          </section>

          {/* 4. What Is a Data Breach? */}
          <section className="dbp-section">
            <h2 className="text-xl md:text-2xl font-bold font-heading text-black mb-4">
              4. What Is a Data Breach?
            </h2>
            <div className="space-y-4 text-base md:text-lg text-gray-800 leading-relaxed">
              <p>
                A data breach is any event that results in the accidental or unlawful:
              </p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-2 pl-2">
                {[
                  "Access to information.",
                  "Disclosure of information.",
                  "Loss of information.",
                  "Destruction of information.",
                  "Alteration of information.",
                  "Unauthorised use of information."
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-gray-800">
                    <span className="w-1.5 h-1.5 bg-blue-600 rounded-full flex-shrink-0 mt-2.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-4">
                Examples include:
              </p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-2 pl-2">
                {[
                  "Sending information to the wrong recipient.",
                  "Loss or theft of devices.",
                  "Unauthorised access to systems.",
                  "Cyber attacks.",
                  "Malware infections.",
                  "Accidental deletion of information.",
                  "Disclosure of confidential information."
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-gray-800">
                    <span className="w-1.5 h-1.5 bg-blue-600 rounded-full flex-shrink-0 mt-2.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* 5. AI-Assisted Compliance and Monitoring */}
          <section className="dbp-section">
            <h2 className="text-xl md:text-2xl font-bold font-heading text-black mb-4">
              5. AI-Assisted Compliance and Monitoring
            </h2>
            <div className="space-y-4 text-base md:text-lg text-gray-800 leading-relaxed">
              <p>
                Recruitment Direct UK Limited may utilise artificial intelligence (&ldquo;AI&rdquo;), machine learning and automated technologies to support compliance, information security and data management activities.
              </p>
              <p>
                These technologies may assist with:
              </p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-2 pl-2">
                {[
                  "Identifying unusual system activity.",
                  "Monitoring compliance processes.",
                  "Identifying duplicate, incomplete or inaccurate records.",
                  "Supporting GDPR compliance activities.",
                  "Monitoring document expiry dates and retention periods.",
                  "Supporting audit and reporting processes."
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

          {/* 6. Reporting a Data Breach */}
          <section className="dbp-section">
            <h2 className="text-xl md:text-2xl font-bold font-heading text-black mb-4">
              6. Reporting a Data Breach
            </h2>
            <div className="space-y-4 text-base md:text-lg text-gray-800 leading-relaxed">
              <p>
                Any actual or suspected data breach must be reported immediately to management.
              </p>
              <p>
                Information that should be reported includes:
              </p>
              <ul className="space-y-3 mt-2 pl-2">
                {[
                  "Date and time of the incident.",
                  "Nature of the breach.",
                  "Information involved.",
                  "Individuals potentially affected.",
                  "Actions already taken."
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-gray-800">
                    <span className="w-1.5 h-1.5 bg-blue-600 rounded-full flex-shrink-0 mt-2.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-4 font-medium text-gray-900">
                Prompt reporting is essential to minimise risk and comply with legal obligations.
              </p>
            </div>
          </section>

          {/* 7. Investigation and Response */}
          <section className="dbp-section">
            <h2 className="text-xl md:text-2xl font-bold font-heading text-black mb-4">
              7. Investigation and Response
            </h2>
            <div className="space-y-4 text-base md:text-lg text-gray-800 leading-relaxed">
              <p>
                Recruitment Direct UK Limited will:
              </p>
              <ul className="space-y-3 mt-2 pl-2">
                {[
                  "Investigate reported incidents promptly.",
                  "Assess the nature and severity of the breach.",
                  "Identify affected information and individuals.",
                  "Take steps to contain and mitigate the incident.",
                  "Implement corrective actions where appropriate.",
                  "Maintain records of breach investigations and outcomes."
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-gray-800">
                    <span className="w-1.5 h-1.5 bg-blue-600 rounded-full flex-shrink-0 mt-2.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* 8. ICO and Regulatory Reporting */}
          <section className="dbp-section">
            <h2 className="text-xl md:text-2xl font-bold font-heading text-black mb-4">
              8. ICO and Regulatory Reporting
            </h2>
            <div className="space-y-4 text-base md:text-lg text-gray-800 leading-relaxed">
              <p>
                Where required by law, Recruitment Direct UK Limited will report personal data breaches to the Information Commissioner&apos;s Office (ICO) without undue delay.
              </p>
              <p>
                Where appropriate, affected individuals may also be informed.
              </p>
            </div>
          </section>

          {/* 9. Existing Security Controls */}
          <section className="dbp-section">
            <h2 className="text-xl md:text-2xl font-bold font-heading text-black mb-4">
              9. Existing Security Controls
            </h2>
            <div className="space-y-4 text-base md:text-lg text-gray-800 leading-relaxed">
              <p>
                Recruitment Direct UK Limited maintains a range of security measures including:
              </p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-2 pl-2">
                {[
                  "Cyber Essentials certification.",
                  "Cloud-based data storage systems.",
                  "Daily automated backups.",
                  "Access controls and user permissions.",
                  "Secure authentication procedures.",
                  "Secure remote and hybrid working arrangements.",
                  "AI-assisted compliance and database management technologies."
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-gray-800">
                    <span className="w-1.5 h-1.5 bg-blue-600 rounded-full flex-shrink-0 mt-2.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-4">
                These controls are designed to reduce the likelihood and impact of data breaches.
              </p>
            </div>
          </section>

          {/* 10. Business Continuity and Recovery */}
          <section className="dbp-section">
            <h2 className="text-xl md:text-2xl font-bold font-heading text-black mb-4">
              10. Business Continuity and Recovery
            </h2>
            <div className="space-y-4 text-base md:text-lg text-gray-800 leading-relaxed">
              <p>
                Recruitment Direct UK Limited stores business and recruitment data within secure cloud-based systems.
              </p>
              <p>
                Daily backups are maintained to support recovery, business continuity and operational resilience.
              </p>
              <p>
                Where appropriate, recovery procedures will be implemented to restore access to systems and information following an incident.
              </p>
            </div>
          </section>

          {/* 11. Responsibilities */}
          <section className="dbp-section">
            <h2 className="text-xl md:text-2xl font-bold font-heading text-black mb-4">
              11. Responsibilities
            </h2>
            <div className="space-y-4 text-base md:text-lg text-gray-800 leading-relaxed">
              <p>
                All employees, workers and authorised users are responsible for:
              </p>
              <ul className="space-y-3 mt-2 pl-2">
                {[
                  "Protecting personal and confidential information.",
                  "Following company security procedures.",
                  "Reporting actual or suspected breaches immediately.",
                  "Co-operating with investigations where required."
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-gray-800">
                    <span className="w-1.5 h-1.5 bg-blue-600 rounded-full flex-shrink-0 mt-2.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* 12. Review */}
          <section className="dbp-section">
            <h2 className="text-xl md:text-2xl font-bold font-heading text-black mb-4">
              12. Review
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
              I confirm that this Data Breach Policy has been reviewed and approved on behalf of Recruitment Direct UK Limited.
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
        
        .dbp-container h1,
        .dbp-container h2,
        .dbp-container h3,
        .dbp-container p,
        .dbp-container li,
        .dbp-container span {
          color: #000000 !important;
        }

        .dbp-container h1 {
          line-height: 1.25 !important;
        }

        .dbp-container h2 {
          line-height: 1.35 !important;
        }

        .dbp-section {
          border-bottom: 1px solid #e5e7eb;
          padding-bottom: 2rem;
        }

        .dbp-section:last-child {
          border-bottom: none;
          padding-bottom: 0;
        }
      `}</style>
    </div>
  );
}
