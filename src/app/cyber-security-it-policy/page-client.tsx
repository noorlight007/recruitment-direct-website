"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingElements from "@/components/FloatingElements";

export default function CyberSecurityITPolicyPage() {
  return (
    <div className="min-h-screen bg-white text-black flex flex-col font-sans">
      <FloatingElements />
      <Navbar />

      <main className="flex-grow pt-[20px] md:pt-[40px] pb-20 px-6 max-w-4xl mx-auto w-full csip-container">
        {/* Page Title */}
        <h1 className="text-3xl md:text-5xl font-bold font-heading text-black mb-6 tracking-tight">
          Cyber Security & IT Policy
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
          <section className="csip-section">
            <h2 className="text-xl md:text-2xl font-bold font-heading text-black mb-4">
              1. Statement
            </h2>
            <div className="space-y-4 text-base md:text-lg text-gray-800 leading-relaxed">
              <p>
                Recruitment Direct UK Limited (&ldquo;RDUK&rdquo;, &ldquo;we&rdquo;, &ldquo;our&rdquo; or &ldquo;us&rdquo;) is committed to maintaining secure, reliable and resilient IT systems and protecting company, applicant, worker and client information from cyber security threats.
              </p>
              <p>
                The company recognises that effective cyber security and IT management are essential to business continuity, operational performance, regulatory compliance and the protection of confidential information.
              </p>
            </div>
          </section>

          {/* 2. Purpose */}
          <section className="csip-section">
            <h2 className="text-xl md:text-2xl font-bold font-heading text-black mb-4">
              2. Purpose
            </h2>
            <div className="space-y-4 text-base md:text-lg text-gray-800 leading-relaxed">
              <p>
                The purpose of this policy is to:
              </p>
              <ul className="space-y-3 mt-2 pl-2">
                {[
                  "Protect company systems, devices and information.",
                  "Reduce cyber security risks.",
                  "Support compliance with UK GDPR and data protection legislation.",
                  "Promote secure use of technology.",
                  "Protect confidential and personal information.",
                  "Maintain business continuity and operational resilience."
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
          <section className="csip-section">
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
                The policy applies to all company devices, cloud systems, recruitment software, databases, communication platforms, email systems and information assets used by Recruitment Direct UK Limited.
              </p>
            </div>
          </section>

          {/* 4. Technology Environment */}
          <section className="csip-section">
            <h2 className="text-xl md:text-2xl font-bold font-heading text-black mb-4">
              4. Technology Environment
            </h2>
            <div className="space-y-4 text-base md:text-lg text-gray-800 leading-relaxed">
              <p>
                Recruitment Direct UK Limited operates primarily through secure cloud-based systems. Business information, recruitment records, compliance records and operational data are stored within secure cloud environments.
              </p>
              <p>
                The company supports remote and hybrid working arrangements and utilises digital technologies to deliver recruitment and business services efficiently and securely.
              </p>
            </div>
          </section>

          {/* 5. Existing Security Measures */}
          <section className="csip-section">
            <h2 className="text-xl md:text-2xl font-bold font-heading text-black mb-4">
              5. Existing Security Measures
            </h2>
            <div className="space-y-4 text-base md:text-lg text-gray-800 leading-relaxed">
              <p>
                Recruitment Direct UK Limited maintains a range of security controls including:
              </p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-2 pl-2">
                {[
                  "Cyber Essentials certification.",
                  "Cloud-based data storage.",
                  "Daily automated backups.",
                  "Password and authentication controls.",
                  "User access controls and permissions.",
                  "Secure remote and hybrid working arrangements.",
                  "Software updates and security patching.",
                  "Device security controls.",
                  "Use of reputable technology providers.",
                  "Ongoing monitoring of cyber security risks."
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-gray-800">
                    <span className="w-1.5 h-1.5 bg-blue-600 rounded-full flex-shrink-0 mt-2.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-4">
                These measures are designed to protect the confidentiality, integrity and availability of company information.
              </p>
            </div>
          </section>

          {/* 6. AI-Assisted Technology */}
          <section className="csip-section">
            <h2 className="text-xl md:text-2xl font-bold font-heading text-black mb-4">
              6. AI-Assisted Technology
            </h2>
            <div className="space-y-4 text-base md:text-lg text-gray-800 leading-relaxed">
              <p>
                Recruitment Direct UK Limited may utilise artificial intelligence (&ldquo;AI&rdquo;), machine learning and automated technologies to support recruitment, compliance, administration and information management activities.
              </p>
              <p>
                These technologies may assist with:
              </p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-2 pl-2">
                {[
                  "Recruitment workflows.",
                  "Applicant screening processes.",
                  "Compliance monitoring.",
                  "GDPR compliance activities.",
                  "Database maintenance and record management.",
                  "Identification of incomplete, inaccurate or duplicate records.",
                  "Reporting and operational efficiency."
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

          {/* 7. User Responsibilities */}
          <section className="csip-section">
            <h2 className="text-xl md:text-2xl font-bold font-heading text-black mb-4">
              7. User Responsibilities
            </h2>
            <div className="space-y-4 text-base md:text-lg text-gray-800 leading-relaxed">
              <p>
                All users of company systems are responsible for:
              </p>
              <ul className="space-y-3 mt-2 pl-2">
                {[
                  "Protecting passwords and login credentials.",
                  "Maintaining the security of company devices.",
                  "Using company systems responsibly.",
                  "Protecting confidential information.",
                  "Reporting suspicious activity immediately.",
                  "Following company IT and cyber security procedures."
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-gray-800">
                    <span className="w-1.5 h-1.5 bg-blue-600 rounded-full flex-shrink-0 mt-2.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-4 font-semibold">
                Users must not:
              </p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-2 pl-2">
                {[
                  "Share passwords.",
                  "Install unauthorised software.",
                  "Circumvent security controls.",
                  "Use company systems for unlawful purposes."
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-gray-800">
                    <span className="w-1.5. h-1.5 bg-red-600 rounded-full flex-shrink-0 mt-2.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* 8. Remote Working */}
          <section className="csip-section">
            <h2 className="text-xl md:text-2xl font-bold font-heading text-black mb-4">
              8. Remote Working
            </h2>
            <div className="space-y-4 text-base md:text-lg text-gray-800 leading-relaxed">
              <p>
                Individuals working remotely are expected to:
              </p>
              <ul className="space-y-3 mt-2 pl-2">
                {[
                  "Use secure internet connections.",
                  "Protect company devices and information.",
                  "Prevent unauthorised access to systems.",
                  "Follow company security requirements.",
                  "Report security concerns promptly."
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
          <section className="csip-section">
            <h2 className="text-xl md:text-2xl font-bold font-heading text-black mb-4">
              9. Incident Reporting
            </h2>
            <div className="space-y-4 text-base md:text-lg text-gray-800 leading-relaxed">
              <p>
                Any actual or suspected cyber security or IT incident must be reported immediately.
              </p>
              <p>
                Examples include:
              </p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-2 pl-2">
                {[
                  "Phishing attacks.",
                  "Malware infections.",
                  "Data breaches.",
                  "Unauthorised access attempts.",
                  "Lost or stolen devices.",
                  "Suspicious account activity.",
                  "System failures affecting business operations."
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-gray-800">
                    <span className="w-1.5 h-1.5 bg-blue-600 rounded-full flex-shrink-0 mt-2.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-4">
                All incidents will be investigated and managed appropriately.
              </p>
            </div>
          </section>

          {/* 10. Business Continuity and Recovery */}
          <section className="csip-section">
            <h2 className="text-xl md:text-2xl font-bold font-heading text-black mb-4">
              10. Business Continuity and Recovery
            </h2>
            <div className="space-y-4 text-base md:text-lg text-gray-800 leading-relaxed">
              <p>
                Recruitment Direct UK Limited stores business and recruitment data within secure cloud-based systems.
              </p>
              <p>
                Daily automated backups are maintained to support:
              </p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-2 pl-2">
                {[
                  "Data protection.",
                  "Disaster recovery.",
                  "Business continuity.",
                  "Operational resilience."
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-gray-800">
                    <span className="w-1.5 h-1.5 bg-blue-600 rounded-full flex-shrink-0 mt-2.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-4">
                The company will take reasonable steps to restore access to systems and information in the event of a cyber security incident, technical failure or operational disruption.
              </p>
            </div>
          </section>

          {/* 11. Review */}
          <section className="csip-section">
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
              I confirm that this Cyber Security &amp; IT Policy has been reviewed and approved on behalf of Recruitment Direct UK Limited.
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
        
        .csip-container h1,
        .csip-container h2,
        .csip-container h3,
        .csip-container p,
        .csip-container li,
        .csip-container span {
          color: #000000 !important;
        }

        .csip-container h1 {
          line-height: 1.25 !important;
        }

        .csip-container h2 {
          line-height: 1.35 !important;
        }

        .csip-section {
          border-bottom: 1px solid #e5e7eb;
          padding-bottom: 2rem;
        }

        .csip-section:last-child {
          border-bottom: none;
          padding-bottom: 0;
        }
      `}</style>
    </div>
  );
}
