"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingElements from "@/components/FloatingElements";

export default function InformationSecurityPolicyPage() {
  return (
    <div className="min-h-screen bg-white text-black flex flex-col font-sans">
      <FloatingElements />
      <Navbar />

      <main className="flex-grow pt-[20px] md:pt-[40px] pb-20 px-6 max-w-4xl mx-auto w-full isp-container">
        {/* Page Title */}
        <h1 className="text-3xl md:text-5xl font-bold font-heading text-black mb-6 tracking-tight">
          Information Security Policy
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
          <section className="isp-section">
            <h2 className="text-xl md:text-2xl font-bold font-heading text-black mb-4">
              1. Statement
            </h2>
            <div className="space-y-4 text-base md:text-lg text-gray-800 leading-relaxed">
              <p>
                Recruitment Direct UK Limited (&ldquo;RDUK&rdquo;, &ldquo;we&rdquo;, &ldquo;our&rdquo; or &ldquo;us&rdquo;) is committed to protecting the confidentiality, integrity and availability of information entrusted to the business.
              </p>
              <p>
                We recognise that information security is essential to maintaining the trust of applicants, workers, clients, suppliers and business partners and to ensuring compliance with legal, regulatory and contractual obligations.
              </p>
            </div>
          </section>

          {/* 2. Purpose */}
          <section className="isp-section">
            <h2 className="text-xl md:text-2xl font-bold font-heading text-black mb-4">
              2. Purpose
            </h2>
            <div className="space-y-4 text-base md:text-lg text-gray-800 leading-relaxed">
              <p>
                The purpose of this policy is to:
              </p>
              <ul className="space-y-3 mt-2 pl-2">
                {[
                  "Protect company information and data assets.",
                  "Prevent unauthorised access, disclosure, loss or misuse of information.",
                  "Support compliance with UK GDPR and data protection legislation.",
                  "Promote secure working practices.",
                  "Reduce information security risks.",
                  "Support business continuity and operational resilience."
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
          <section className="isp-section">
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
                  "Suppliers",
                  "Third parties with authorised access to company systems or information"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-gray-800">
                    <span className="w-1.5 h-1.5 bg-blue-600 rounded-full flex-shrink-0 mt-2.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-4">
                The policy applies to all information held or processed by Recruitment Direct UK Limited in electronic, digital and physical formats.
              </p>
            </div>
          </section>

          {/* 4. Information Security Principles */}
          <section className="isp-section">
            <h2 className="text-xl md:text-2xl font-bold font-heading text-black mb-4">
              4. Information Security Principles
            </h2>
            <div className="space-y-4 text-base md:text-lg text-gray-800 leading-relaxed">
              <p>
                Recruitment Direct UK Limited is committed to ensuring that information is:
              </p>
              <ul className="space-y-3 mt-2 pl-2">
                {[
                  "Protected against unauthorised access.",
                  "Accurate and reliable.",
                  "Available when required for legitimate business purposes.",
                  "Processed securely and lawfully.",
                  "Retained and disposed of appropriately."
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-gray-800">
                    <span className="w-1.5 h-1.5 bg-blue-600 rounded-full flex-shrink-0 mt-2.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* 5. AI-Assisted Information Security */}
          <section className="isp-section">
            <h2 className="text-xl md:text-2xl font-bold font-heading text-black mb-4">
              5. AI-Assisted Information Security
            </h2>
            <div className="space-y-4 text-base md:text-lg text-gray-800 leading-relaxed">
              <p>
                Recruitment Direct UK Limited may utilise artificial intelligence (&ldquo;AI&rdquo;), machine learning and automated technologies to support information security, compliance and operational activities.
              </p>
              <p>
                These technologies may assist with:
              </p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-2 pl-2">
                {[
                  "Monitoring system activity.",
                  "Identifying duplicate, incomplete or inaccurate records.",
                  "Supporting GDPR compliance activities.",
                  "Monitoring document expiry dates and compliance requirements.",
                  "Supporting recruitment database maintenance.",
                  "Identifying potential security or compliance risks.",
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

          {/* 6. Access Control */}
          <section className="isp-section">
            <h2 className="text-xl md:text-2xl font-bold font-heading text-black mb-4">
              6. Access Control
            </h2>
            <div className="space-y-4 text-base md:text-lg text-gray-800 leading-relaxed">
              <p>
                Access to company systems, databases and information will be restricted to authorised individuals who require access for legitimate business purposes.
              </p>
              <p>
                Users are responsible for:
              </p>
              <ul className="space-y-3 mt-2 pl-2">
                {[
                  "Protecting passwords and login credentials.",
                  "Preventing unauthorised access.",
                  "Reporting suspected security incidents.",
                  "Following company security procedures."
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-gray-800">
                    <span className="w-1.5 h-1.5 bg-blue-600 rounded-full flex-shrink-0 mt-2.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* 7. Information Handling */}
          <section className="isp-section">
            <h2 className="text-xl md:text-2xl font-bold font-heading text-black mb-4">
              7. Information Handling
            </h2>
            <div className="space-y-4 text-base md:text-lg text-gray-800 leading-relaxed">
              <p>
                Information must be:
              </p>
              <ul className="space-y-3 mt-2 pl-2">
                {[
                  "Stored securely.",
                  "Shared only where authorised and necessary.",
                  "Protected against loss, theft or unauthorised disclosure.",
                  "Disposed of securely when no longer required."
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-gray-800">
                    <span className="w-1.5 h-1.5 bg-blue-600 rounded-full flex-shrink-0 mt-2.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-4">
                Particular care must be taken when handling personal data, confidential information and commercially sensitive information.
              </p>
            </div>
          </section>

          {/* 8. Cyber Security */}
          <section className="isp-section">
            <h2 className="text-xl md:text-2xl font-bold font-heading text-black mb-4">
              8. Cyber Security
            </h2>
            <div className="space-y-4 text-base md:text-lg text-gray-800 leading-relaxed">
              <p>
                Recruitment Direct UK Limited will implement appropriate technical and organisational measures to protect information systems.
              </p>
              <p>
                These measures may include:
              </p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-2 pl-2">
                {[
                  "Secure authentication controls.",
                  "Access management procedures.",
                  "Antivirus and malware protection.",
                  "System monitoring.",
                  "Secure cloud-based systems.",
                  "Data backup procedures.",
                  "Software updates and security patching."
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-gray-800">
                    <span className="w-1.5 h-1.5 bg-blue-600 rounded-full flex-shrink-0 mt-2.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* 9. Incident Reporting */}
          <section className="isp-section">
            <h2 className="text-xl md:text-2xl font-bold font-heading text-black mb-4">
              9. Incident Reporting
            </h2>
            <div className="space-y-4 text-base md:text-lg text-gray-800 leading-relaxed">
              <p>
                Any actual or suspected information security incident must be reported immediately.
              </p>
              <p>
                Examples include:
              </p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-2 pl-2">
                {[
                  "Data breaches.",
                  "Unauthorised access.",
                  "Phishing attempts.",
                  "Loss of devices or information.",
                  "Malware or cyber security incidents."
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-gray-800">
                    <span className="w-1.5 h-1.5 bg-blue-600 rounded-full flex-shrink-0 mt-2.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-4">
                Incidents will be investigated and managed appropriately.
              </p>
            </div>
          </section>

          {/* 10. Compliance */}
          <section className="isp-section">
            <h2 className="text-xl md:text-2xl font-bold font-heading text-black mb-4">
              10. Compliance
            </h2>
            <div className="space-y-4 text-base md:text-lg text-gray-800 leading-relaxed">
              <p>
                Failure to comply with this policy may result in disciplinary action, termination of engagement, contractual action or referral to relevant authorities where appropriate.
              </p>
            </div>
          </section>

          {/* 11. Review */}
          <section className="isp-section">
            <h2 className="text-xl md:text-2xl font-bold font-heading text-black mb-4">
              11. Review
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
              I confirm that this Information Security Policy has been reviewed and approved on behalf of Recruitment Direct UK Limited.
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
        
        .isp-container h1,
        .isp-container h2,
        .isp-container h3,
        .isp-container p,
        .isp-container li,
        .isp-container span {
          color: #000000 !important;
        }

        .isp-container h1 {
          line-height: 1.25 !important;
        }

        .isp-container h2 {
          line-height: 1.35 !important;
        }

        .isp-section {
          border-bottom: 1px solid #e5e7eb;
          padding-bottom: 2rem;
        }

        .isp-section:last-child {
          border-bottom: none;
          padding-bottom: 0;
        }
      `}</style>
    </div>
  );
}
