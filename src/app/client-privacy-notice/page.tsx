"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingElements from "@/components/FloatingElements";

export default function ClientPrivacyNoticePage() {
  return (
    <div className="min-h-screen bg-white text-black flex flex-col font-sans">
      <FloatingElements />
      <Navbar />

      <main className="flex-grow pt-[20px] md:pt-[40px] pb-20 px-6 max-w-4xl mx-auto w-full clpn-container">
        {/* Page Title */}
        <h1 className="text-3xl md:text-5xl font-bold font-heading text-black mb-6 tracking-tight">
          Client Privacy Notice
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
          {/* 1. Introduction */}
          <section className="clpn-section">
            <h2 className="text-xl md:text-2xl font-bold font-heading text-black mb-4">
              1. Introduction
            </h2>
            <div className="space-y-4 text-base md:text-lg text-gray-800 leading-relaxed">
              <p>
                Recruitment Direct UK Limited (&ldquo;RDUK&rdquo;, &ldquo;we&rdquo;, &ldquo;our&rdquo; or &ldquo;us&rdquo;) is committed to protecting the privacy, security and confidentiality of client information.
              </p>
              <p>
                This Client Privacy Notice explains how we collect, use, process, store, share and protect personal information relating to client organisations, client representatives and individuals acting on behalf of our clients.
              </p>
            </div>
          </section>

          {/* 2. Who This Notice Applies To */}
          <section className="clpn-section">
            <h2 className="text-xl md:text-2xl font-bold font-heading text-black mb-4">
              2. Who This Notice Applies To
            </h2>
            <div className="space-y-4 text-base md:text-lg text-gray-800 leading-relaxed">
              <p>
                This notice applies to:
              </p>
              <ul className="space-y-3 mt-2 pl-2">
                {[
                  "Existing clients.",
                  "Prospective clients.",
                  "Client contacts.",
                  "Hiring managers.",
                  "Procurement representatives.",
                  "Framework and contract managers.",
                  "Individuals acting on behalf of client organisations."
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-gray-800">
                    <span className="w-1.5 h-1.5 bg-blue-600 rounded-full flex-shrink-0 mt-2.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* 3. Information We Collect */}
          <section className="clpn-section">
            <h2 className="text-xl md:text-2xl font-bold font-heading text-black mb-4">
              3. Information We Collect
            </h2>
            <div className="space-y-4 text-base md:text-lg text-gray-800 leading-relaxed">
              <p>
                Recruitment Direct UK Limited may collect and process:
              </p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-2 pl-2">
                {[
                  "Names and job titles.",
                  "Business contact details.",
                  "Email addresses.",
                  "Telephone numbers.",
                  "Company information.",
                  "Billing and invoicing information.",
                  "Contractual information.",
                  "Recruitment requirements.",
                  "Communications and correspondence.",
                  "Meeting notes.",
                  "Information submitted through websites, forms and enquiries.",
                  "Information collected through AI-assisted communication and business systems."
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-gray-800">
                    <span className="w-1.5 h-1.5 bg-blue-600 rounded-full flex-shrink-0 mt-2.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* 4. How We Use Your Information */}
          <section className="clpn-section">
            <h2 className="text-xl md:text-2xl font-bold font-heading text-black mb-4">
              4. How We Use Your Information
            </h2>
            <div className="space-y-4 text-base md:text-lg text-gray-800 leading-relaxed">
              <p>
                We may use your information to:
              </p>
              <ul className="space-y-3 mt-2 pl-2">
                {[
                  "Provide recruitment services.",
                  "Respond to enquiries and requests.",
                  "Manage client relationships.",
                  "Deliver temporary, contract and permanent staffing solutions.",
                  "Manage contracts and framework agreements.",
                  "Process invoicing and payments.",
                  "Provide customer support.",
                  "Meet legal and regulatory obligations.",
                  "Improve business operations and service delivery."
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-gray-800">
                    <span className="w-1.5 h-1.5 bg-blue-600 rounded-full flex-shrink-0 mt-2.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* 5. AI-Assisted Business Operations */}
          <section className="clpn-section">
            <h2 className="text-xl md:text-2xl font-bold font-heading text-black mb-4">
              5. AI-Assisted Business Operations
            </h2>
            <div className="space-y-4 text-base md:text-lg text-gray-800 leading-relaxed">
              <p>
                Recruitment Direct UK Limited may use artificial intelligence (&ldquo;AI&rdquo;), machine learning and automated technologies to support communication, administration, compliance and client relationship management activities.
              </p>
              <p>
                These technologies may assist with:
              </p>
              <ul className="space-y-3 mt-2 pl-2">
                {[
                  "Managing client enquiries.",
                  "Communication and correspondence.",
                  "Scheduling and administration.",
                  "CRM database management.",
                  "Compliance monitoring.",
                  "Identifying incomplete, inaccurate or duplicate records.",
                  "Maintaining and updating client database records.",
                  "Supporting GDPR compliance activities.",
                  "Business reporting and operational efficiency."
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-gray-800">
                    <span className="w-1.5 h-1.5 bg-blue-600 rounded-full flex-shrink-0 mt-2.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-4">
                AI technologies are used to support business operations and do not replace appropriate human oversight.
              </p>
              <p>
                Business decisions, commercial decisions and contractual decisions remain subject to human review and approval.
              </p>
            </div>
          </section>

          {/* 6. Lawful Basis for Processing */}
          <section className="clpn-section">
            <h2 className="text-xl md:text-2xl font-bold font-heading text-black mb-4">
              6. Lawful Basis for Processing
            </h2>
            <div className="space-y-4 text-base md:text-lg text-gray-800 leading-relaxed">
              <p>
                Recruitment Direct UK Limited processes personal information under one or more of the following lawful bases:
              </p>
              <ul className="space-y-3 mt-2 pl-2">
                {[
                  "Performance of a contract.",
                  "Compliance with legal obligations.",
                  "Legitimate business interests.",
                  "Consent where applicable."
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-gray-800">
                    <span className="w-1.5 h-1.5 bg-blue-600 rounded-full flex-shrink-0 mt-2.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* 7. Sharing Information */}
          <section className="clpn-section">
            <h2 className="text-xl md:text-2xl font-bold font-heading text-black mb-4">
              7. Sharing Information
            </h2>
            <div className="space-y-4 text-base md:text-lg text-gray-800 leading-relaxed">
              <p>
                Personal information may be shared where necessary with:
              </p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-2 pl-2">
                {[
                  "Recruitment Direct UK Limited employees and authorised representatives.",
                  "Professional advisers.",
                  "Technology and software providers.",
                  "Compliance providers.",
                  "Government authorities and regulators where legally required."
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-gray-800">
                    <span className="w-1.5 h-1.5 bg-blue-600 rounded-full flex-shrink-0 mt-2.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-4">
                Information will only be shared where lawful, necessary and proportionate.
              </p>
            </div>
          </section>

          {/* 8. Data Security */}
          <section className="clpn-section">
            <h2 className="text-xl md:text-2xl font-bold font-heading text-black mb-4">
              8. Data Security
            </h2>
            <div className="space-y-4 text-base md:text-lg text-gray-800 leading-relaxed">
              <p>
                Recruitment Direct UK Limited maintains appropriate technical and organisational measures to protect personal information against unauthorised access, loss, misuse, disclosure or destruction.
              </p>
            </div>
          </section>

          {/* 9. Data Retention */}
          <section className="clpn-section">
            <h2 className="text-xl md:text-2xl font-bold font-heading text-black mb-4">
              9. Data Retention
            </h2>
            <div className="space-y-4 text-base md:text-lg text-gray-800 leading-relaxed">
              <p>
                Personal information will only be retained for as long as necessary to fulfil contractual, legal, regulatory and business requirements.
              </p>
              <p>
                RDUK may utilise AI-assisted compliance systems to support record maintenance, retention monitoring and GDPR compliance activities.
              </p>
              <p>
                Information will be securely deleted, destroyed or anonymised when no longer required.
              </p>
            </div>
          </section>

          {/* 10. Your Rights */}
          <section className="clpn-section">
            <h2 className="text-xl md:text-2xl font-bold font-heading text-black mb-4">
              10. Your Rights
            </h2>
            <div className="space-y-4 text-base md:text-lg text-gray-800 leading-relaxed">
              <p>
                Individuals may have the right to:
              </p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-2 pl-2 mb-4">
                {[
                  "Access personal information.",
                  "Correct inaccurate information.",
                  "Request deletion of information.",
                  "Restrict processing.",
                  "Object to processing.",
                  "Request data portability.",
                  "Withdraw consent where applicable."
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-gray-800">
                    <span className="w-1.5 h-1.5 bg-blue-600 rounded-full flex-shrink-0 mt-2.5" />
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

          {/* 11. Complaints */}
          <section className="clpn-section">
            <h2 className="text-xl md:text-2xl font-bold font-heading text-black mb-4">
              11. Complaints
            </h2>
            <div className="space-y-4 text-base md:text-lg text-gray-800 leading-relaxed">
              <p>
                If you have concerns regarding how your personal information is processed, please contact Recruitment Direct UK Limited.
              </p>
              <p>
                You also have the right to lodge a complaint with the Information Commissioner&apos;s Office (ICO).
              </p>
            </div>
          </section>

          {/* 12. Acknowledgement */}
          <section className="clpn-section">
            <h2 className="text-xl md:text-2xl font-bold font-heading text-black mb-4">
              12. Acknowledgement
            </h2>
            <div className="space-y-4 text-base md:text-lg text-gray-800 leading-relaxed">
              <p>
                By contacting Recruitment Direct UK Limited, requesting services, entering into a contract or otherwise engaging with our business, you acknowledge that you have been provided with access to this Client Privacy Notice.
              </p>
            </div>
          </section>

          {/* Director Approval Box */}
          <section className="bg-gray-50 border border-gray-200 rounded-xl p-8 mt-12 space-y-4">
            <h3 className="text-lg font-bold text-gray-900 border-b border-gray-200 pb-2">
              Director Approval
            </h3>
            <p className="text-base text-gray-800 leading-relaxed italic">
              I confirm that this Client Privacy Notice has been reviewed and approved on behalf of Recruitment Direct UK Limited.
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
        
        .clpn-container h1,
        .clpn-container h2,
        .clpn-container h3,
        .clpn-container p,
        .clpn-container li,
        .clpn-container span {
          color: #000000 !important;
        }

        .clpn-container h1 {
          line-height: 1.25 !important;
        }

        .clpn-container h2 {
          line-height: 1.35 !important;
        }

        .clpn-section {
          border-bottom: 1px solid #e5e7eb;
          padding-bottom: 2rem;
        }

        .clpn-section:last-child {
          border-bottom: none;
          padding-bottom: 0;
        }
      `}</style>
    </div>
  );
}
