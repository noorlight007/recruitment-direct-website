"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingElements from "@/components/FloatingElements";

export default function DataProtectionGdprPolicyPage() {
  return (
    <div className="min-h-screen bg-white text-black flex flex-col font-sans">
      <FloatingElements />
      <Navbar />

      <main className="flex-grow pt-[20px] md:pt-[40px] pb-20 px-6 max-w-4xl mx-auto w-full gdpr-container">
        {/* Page Title */}
        <h1 className="text-3xl md:text-5xl font-bold font-heading text-black mb-6 tracking-tight">
          Data Protection and GDPR Policy
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
          <section className="gdpr-section">
            <h2 className="text-xl md:text-2xl font-bold font-heading text-black mb-4">
              1. Statement
            </h2>
            <div className="space-y-4 text-base md:text-lg text-gray-800 leading-relaxed">
              <p>
                Recruitment Direct UK Limited (&ldquo;RDUK&rdquo;, &ldquo;we&rdquo;, &ldquo;our&rdquo; or &ldquo;us&rdquo;) is committed to protecting personal data and ensuring compliance with the UK General Data Protection Regulation (UK GDPR), the Data Protection Act 2018 and all applicable data protection legislation.
              </p>
              <p>
                We recognise the importance of protecting the privacy, confidentiality, integrity and security of personal information entrusted to us by applicants, workers, clients, suppliers and website users.
              </p>
            </div>
          </section>

          {/* 2. Purpose */}
          <section className="gdpr-section">
            <h2 className="text-xl md:text-2xl font-bold font-heading text-black mb-4">
              2. Purpose
            </h2>
            <div className="space-y-4 text-base md:text-lg text-gray-800 leading-relaxed">
              <p>
                The purpose of this policy is to:
              </p>
              <ul className="space-y-3 mt-2 pl-2">
                {[
                  "Protect personal information.",
                  "Ensure compliance with data protection legislation.",
                  "Promote responsible handling of personal data.",
                  "Establish clear responsibilities regarding data protection.",
                  "Reduce the risk of data breaches and unauthorised disclosure.",
                  "Support the lawful use of AI-assisted technologies within recruitment and compliance operations."
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
          <section className="gdpr-section">
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
              <p className="mt-4">
                The policy applies to all personal data processed by Recruitment Direct UK Limited in electronic, digital and paper formats.
              </p>
            </div>
          </section>

          {/* 4. Data Protection Principles */}
          <section className="gdpr-section">
            <h2 className="text-xl md:text-2xl font-bold font-heading text-black mb-4">
              4. Data Protection Principles
            </h2>
            <div className="space-y-4 text-base md:text-lg text-gray-800 leading-relaxed">
              <p>
                Recruitment Direct UK Limited will ensure that personal data is:
              </p>
              <ul className="space-y-3 mt-2 pl-2">
                {[
                  "Processed lawfully, fairly and transparently.",
                  "Collected for specified and legitimate purposes.",
                  "Adequate, relevant and limited to what is necessary.",
                  "Accurate and kept up to date.",
                  "Retained only for as long as necessary.",
                  "Protected through appropriate security measures.",
                  "Processed in accordance with individuals' rights."
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-gray-800">
                    <span className="w-1.5 h-1.5 bg-blue-600 rounded-full flex-shrink-0 mt-2.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* 5. Types of Personal Data */}
          <section className="gdpr-section">
            <h2 className="text-xl md:text-2xl font-bold font-heading text-black mb-4">
              5. Types of Personal Data
            </h2>
            <div className="space-y-4 text-base md:text-lg text-gray-800 leading-relaxed">
              <p>
                RDUK may process:
              </p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-2 pl-2">
                {[
                  "Names and contact details.",
                  "CVs and employment history.",
                  "Qualifications and training records.",
                  "Identification documents.",
                  "Right to work documentation.",
                  "Payroll and banking information.",
                  "References.",
                  "Communications and correspondence.",
                  "Website usage information.",
                  "Compliance documentation.",
                  "Information collected through AI-assisted recruitment and communication systems."
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-gray-800">
                    <span className="w-1.5 h-1.5 bg-blue-600 rounded-full flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* 6. AI-Assisted Compliance and Operations */}
          <section className="gdpr-section">
            <h2 className="text-xl md:text-2xl font-bold font-heading text-black mb-4">
              6. AI-Assisted Compliance and Operations
            </h2>
            <div className="space-y-4 text-base md:text-lg text-gray-800 leading-relaxed">
              <p>
                Recruitment Direct UK Limited may use artificial intelligence (&ldquo;AI&rdquo;), machine learning and automated technologies to support recruitment, communication, compliance, administration and data management activities.
              </p>
              <p>
                These technologies may assist with:
              </p>
              <ul className="space-y-3 pl-2">
                {[
                  "Applicant screening and assessment.",
                  "Skills and vacancy matching.",
                  "Automating communications via telephone, email, SMS and messaging platforms.",
                  "Document verification and compliance checks.",
                  "GDPR compliance monitoring.",
                  "Identifying incomplete, inaccurate or duplicate records.",
                  "Updating and maintaining recruitment database records.",
                  "Monitoring document expiry dates and retention periods.",
                  "Supporting compliance audits and reporting.",
                  "Recruitment workflow automation.",
                  "Improving operational efficiency and service delivery."
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-gray-800">
                    <span className="w-1.5 h-1.5 bg-blue-600 rounded-full flex-shrink-0 mt-2.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-4">
                RDUK may utilise AI-assisted GDPR compliance technologies to improve the accuracy, quality and maintenance of recruitment database records.
              </p>
              <p>
                AI technologies are used to support business operations and regulatory compliance and do not replace human responsibility, accountability or legal obligations.
              </p>
              <p>
                All AI-assisted activities remain subject to appropriate human oversight, review and compliance controls. Final recruitment, compliance and business decisions remain subject to human review where appropriate.
              </p>
            </div>
          </section>

          {/* 7. Data Security */}
          <section className="gdpr-section">
            <h2 className="text-xl md:text-2xl font-bold font-heading text-black mb-4">
              7. Data Security
            </h2>
            <div className="space-y-4 text-base md:text-lg text-gray-800 leading-relaxed">
              <p>
                Recruitment Direct UK Limited will implement appropriate technical and organisational measures to protect personal data from:
              </p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-2 pl-2 mb-4">
                {[
                  "Unauthorised access.",
                  "Unauthorised disclosure.",
                  "Accidental loss.",
                  "Alteration or destruction.",
                  "Misuse or unlawful processing."
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-gray-800">
                    <span className="w-1.5 h-1.5 bg-blue-600 rounded-full flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-4">
                Security measures may include:
              </p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-2 pl-2">
                {[
                  "Access controls.",
                  "Secure authentication procedures.",
                  "Encryption technologies.",
                  "Secure cloud-based systems.",
                  "Staff awareness and training.",
                  "System monitoring and auditing.",
                  "Regular review of security controls."
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-gray-800">
                    <span className="w-1.5 h-1.5 bg-blue-600 rounded-full flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* 8. Data Sharing */}
          <section className="gdpr-section">
            <h2 className="text-xl md:text-2xl font-bold font-heading text-black mb-4">
              8. Data Sharing
            </h2>
            <div className="space-y-4 text-base md:text-lg text-gray-800 leading-relaxed">
              <p>
                Personal data may be shared where necessary with:
              </p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-2 pl-2">
                {[
                  "Clients and prospective employers.",
                  "Payroll providers.",
                  "Umbrella companies.",
                  "Professional advisers.",
                  "Technology and software providers.",
                  "Compliance providers.",
                  "Government bodies and regulators where legally required."
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-gray-800">
                    <span className="w-1.5 h-1.5 bg-blue-600 rounded-full flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-4">
                All sharing of personal data will be carried out in accordance with applicable legislation and appropriate safeguards.
              </p>
            </div>
          </section>

          {/* 9. Data Retention */}
          <section className="gdpr-section">
            <h2 className="text-xl md:text-2xl font-bold font-heading text-black mb-4">
              9. Data Retention
            </h2>
            <div className="space-y-4 text-base md:text-lg text-gray-800 leading-relaxed">
              <p>
                Personal data will be retained only for as long as necessary to fulfil recruitment, employment, legal, regulatory and business requirements.
              </p>
              <p>
                RDUK may utilise automated and AI-assisted systems to support the monitoring of retention periods and identify records due for review or deletion.
              </p>
              <p>
                Data will be securely deleted, destroyed or anonymised when no longer required.
              </p>
            </div>
          </section>

          {/* 10. Individual Rights */}
          <section className="gdpr-section">
            <h2 className="text-xl md:text-2xl font-bold font-heading text-black mb-4">
              10. Individual Rights
            </h2>
            <div className="space-y-4 text-base md:text-lg text-gray-800 leading-relaxed">
              <p>
                Individuals may have the right to:
              </p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-2 pl-2 mb-4">
                {[
                  "Access their personal data.",
                  "Correct inaccurate information.",
                  "Request deletion of information.",
                  "Restrict processing.",
                  "Object to processing.",
                  "Request data portability.",
                  "Withdraw consent where applicable."
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-gray-800">
                    <span className="w-1.5 h-1.5 bg-blue-600 rounded-full flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-4">
                Requests should be submitted to:
              </p>
              <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 pl-8 text-sm text-gray-800">
                Email: <a href="mailto:accounts@rd1.co.uk" className="text-blue-600 hover:underline">accounts@rd1.co.uk</a>
              </div>
            </div>
          </section>

          {/* 11. Data Breaches */}
          <section className="gdpr-section">
            <h2 className="text-xl md:text-2xl font-bold font-heading text-black mb-4">
              11. Data Breaches
            </h2>
            <div className="space-y-4 text-base md:text-lg text-gray-800 leading-relaxed">
              <p>
                Any actual or suspected data breach must be reported immediately.
              </p>
              <p>
                Recruitment Direct UK Limited will investigate incidents promptly and take appropriate corrective action.
              </p>
              <p>
                Where required by law, breaches will be reported to the Information Commissioner&apos;s Office (ICO) and affected individuals.
              </p>
            </div>
          </section>

          {/* 12. Training and Awareness */}
          <section className="gdpr-section">
            <h2 className="text-xl md:text-2xl font-bold font-heading text-black mb-4">
              12. Training and Awareness
            </h2>
            <div className="space-y-4 text-base md:text-lg text-gray-800 leading-relaxed">
              <p>
                Recruitment Direct UK Limited will promote awareness of data protection obligations and encourage responsible handling of personal information.
              </p>
              <p>
                Employees and workers are expected to comply with data protection requirements and report concerns relating to privacy, security or compliance.
              </p>
            </div>
          </section>

          {/* 13. Compliance */}
          <section className="gdpr-section">
            <h2 className="text-xl md:text-2xl font-bold font-heading text-black mb-4">
              13. Compliance
            </h2>
            <div className="space-y-4 text-base md:text-lg text-gray-800 leading-relaxed">
              <p>
                Failure to comply with this policy may result in disciplinary action, termination of engagement, contractual action or referral to regulatory authorities where appropriate.
              </p>
            </div>
          </section>

          {/* 14. Review */}
          <section className="gdpr-section">
            <h2 className="text-xl md:text-2xl font-bold font-heading text-black mb-4">
              14. Review
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
              I confirm that this Data Protection and GDPR Policy has been reviewed and approved on behalf of Recruitment Direct UK Limited.
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
        
        .gdpr-container h1,
        .gdpr-container h2,
        .gdpr-container h3,
        .gdpr-container p,
        .gdpr-container li,
        .gdpr-container span {
          color: #000000 !important;
        }

        .gdpr-container h1 {
          line-height: 1.25 !important;
        }

        .gdpr-container h2 {
          line-height: 1.35 !important;
        }

        .gdpr-section {
          border-bottom: 1px solid #e5e7eb;
          padding-bottom: 2rem;
        }

        .gdpr-section:last-child {
          border-bottom: none;
          padding-bottom: 0;
        }
      `}</style>
    </div>
  );
}
