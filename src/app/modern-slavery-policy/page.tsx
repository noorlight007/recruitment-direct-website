"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingElements from "@/components/FloatingElements";

export default function ModernSlaveryPolicyPage() {
  return (
    <div className="min-h-screen bg-white text-black flex flex-col font-sans">
      <FloatingElements />
      <Navbar />

      <main className="flex-grow pt-[20px] md:pt-[40px] pb-20 px-6 max-w-4xl mx-auto w-full ms-container">
        {/* Page Title */}
        <h1 className="text-3xl md:text-5xl font-bold font-heading text-black mb-6 tracking-tight">
          Modern Slavery and Human Trafficking Policy
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
          <section className="ms-section">
            <h2 className="text-xl md:text-2xl font-bold font-heading text-black mb-4">
              1. Statement
            </h2>
            <div className="space-y-4 text-base md:text-lg text-gray-800 leading-relaxed">
              <p>
                Recruitment Direct UK Limited (&ldquo;RDUK&rdquo;, &ldquo;we&rdquo;, &ldquo;our&rdquo; or &ldquo;us&rdquo;) is committed to preventing modern slavery, servitude, forced labour and human trafficking in all areas of its business operations and supply chains.
              </p>
              <p>
                We operate a zero-tolerance approach to modern slavery and are committed to conducting business ethically, responsibly and with integrity.
              </p>
            </div>
          </section>

          {/* 2. Purpose */}
          <section className="ms-section">
            <h2 className="text-xl md:text-2xl font-bold font-heading text-black mb-4">
              2. Purpose
            </h2>
            <div className="space-y-4 text-base md:text-lg text-gray-800 leading-relaxed">
              <p>
                The purpose of this policy is to:
              </p>
              <ul className="space-y-3 mt-2 pl-2">
                {[
                  "Prevent modern slavery and human trafficking within our business.",
                  "Promote ethical recruitment and employment practices.",
                  "Protect workers, applicants and vulnerable individuals from exploitation.",
                  "Ensure compliance with applicable legislation and regulatory requirements."
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
          <section className="ms-section">
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
                The policy applies across all business activities undertaken by Recruitment Direct UK Limited.
              </p>
            </div>
          </section>

          {/* 4. Our Commitment */}
          <section className="ms-section">
            <h2 className="text-xl md:text-2xl font-bold font-heading text-black mb-4">
              4. Our Commitment
            </h2>
            <div className="space-y-4 text-base md:text-lg text-gray-800 leading-relaxed">
              <p>
                Recruitment Direct UK Limited is committed to:
              </p>
              <ul className="space-y-3 mt-2 pl-2">
                {[
                  "Complying with all applicable laws relating to modern slavery and human trafficking.",
                  "Recruiting workers fairly and transparently.",
                  "Ensuring all work is undertaken voluntarily.",
                  "Preventing the exploitation of vulnerable individuals.",
                  "Maintaining appropriate compliance and verification procedures.",
                  "Encouraging the reporting of concerns relating to modern slavery."
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-gray-800">
                    <span className="w-1.5 h-1.5 bg-blue-600 rounded-full flex-shrink-0 mt-2.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* 5. Recruitment and Compliance Procedures */}
          <section className="ms-section">
            <h2 className="text-xl md:text-2xl font-bold font-heading text-black mb-4">
              5. Recruitment and Compliance Procedures
            </h2>
            <div className="space-y-4 text-base md:text-lg text-gray-800 leading-relaxed">
              <p>
                As part of our recruitment and compliance processes, RDUK undertakes:
              </p>
              <ul className="space-y-3 mt-2 pl-2">
                {[
                  "Right to work verification.",
                  "Identity checks.",
                  "Compliance screening.",
                  "Verification of worker documentation.",
                  "Monitoring of recruitment practices.",
                  "Investigation of any concerns raised by applicants, workers, clients or third parties."
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-gray-800">
                    <span className="w-1.5 h-1.5 bg-blue-600 rounded-full flex-shrink-0 mt-2.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-4">
                RDUK does not knowingly engage with organisations or individuals involved in modern slavery, forced labour or human trafficking.
              </p>
            </div>
          </section>

          {/* 6. Suppliers and Business Partners */}
          <section className="ms-section">
            <h2 className="text-xl md:text-2xl font-bold font-heading text-black mb-4">
              6. Suppliers and Business Partners
            </h2>
            <div className="space-y-4 text-base md:text-lg text-gray-800 leading-relaxed">
              <p>
                Recruitment Direct UK Limited expects suppliers, contractors and business partners to operate ethically and comply with all applicable laws relating to employment practices and modern slavery.
              </p>
              <p>
                Where appropriate, concerns relating to suppliers or business partners may be investigated and reviewed.
              </p>
            </div>
          </section>

          {/* 7. AI-Assisted Recruitment Processes */}
          <section className="ms-section">
            <h2 className="text-xl md:text-2xl font-bold font-heading text-black mb-4">
              7. AI-Assisted Recruitment Processes
            </h2>
            <div className="space-y-4 text-base md:text-lg text-gray-800 leading-relaxed">
              <p>
                Recruitment Direct UK Limited may use artificial intelligence (&ldquo;AI&rdquo;), machine learning and automated technologies to support recruitment, communication, compliance and administrative processes.
              </p>
              <p>
                AI technologies may assist with:
              </p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-2 pl-2">
                {[
                  "Applicant screening.",
                  "Skills and vacancy matching.",
                  "Compliance administration.",
                  "Recruitment communications."
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-gray-800">
                    <span className="w-1.5 h-1.5 bg-blue-600 rounded-full flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-4">
                AI systems are used to support recruitment activities and operational efficiency and do not replace appropriate human oversight.
              </p>
              <p>
                RDUK remains committed to ensuring that technology is used responsibly and does not contribute to unfair treatment, exploitation or unlawful employment practices.
              </p>
            </div>
          </section>

          {/* 8. Reporting Concerns */}
          <section className="ms-section">
            <h2 className="text-xl md:text-2xl font-bold font-heading text-black mb-4">
              8. Reporting Concerns
            </h2>
            <div className="space-y-4 text-base md:text-lg text-gray-800 leading-relaxed">
              <p>
                Any individual who suspects modern slavery, forced labour or human trafficking in connection with Recruitment Direct UK Limited&apos;s business activities should report their concerns immediately.
              </p>
              <p>
                Reports will be treated seriously and investigated appropriately.
              </p>
            </div>
          </section>

          {/* 9. Responsibility */}
          <section className="ms-section">
            <h2 className="text-xl md:text-2xl font-bold font-heading text-black mb-4">
              9. Responsibility
            </h2>
            <div className="space-y-4 text-base md:text-lg text-gray-800 leading-relaxed">
              <p>
                The Director of Recruitment Direct UK Limited has overall responsibility for ensuring compliance with this policy and reviewing its effectiveness.
              </p>
            </div>
          </section>

          {/* 10. Review */}
          <section className="ms-section">
            <h2 className="text-xl md:text-2xl font-bold font-heading text-black mb-4">
              10. Review
            </h2>
            <div className="space-y-4 text-base md:text-lg text-gray-800 leading-relaxed">
              <p>
                This policy will be reviewed annually or sooner if required by legislative, regulatory or business changes.
              </p>
            </div>
          </section>

          {/* Director Approval Box */}
          <section className="bg-gray-50 border border-gray-200 rounded-xl p-8 mt-12 space-y-4">
            <h3 className="text-lg font-bold text-gray-900 border-b border-gray-200 pb-2">
              Director Approval
            </h3>
            <p className="text-base text-gray-800 leading-relaxed italic">
              I confirm that this Modern Slavery and Human Trafficking Policy has been reviewed and approved on behalf of Recruitment Direct UK Limited.
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
        
        .ms-container h1,
        .ms-container h2,
        .ms-container h3,
        .ms-container p,
        .ms-container li,
        .ms-container span {
          color: #000000 !important;
        }

        .ms-container h1 {
          line-height: 1.25 !important;
        }

        .ms-container h2 {
          line-height: 1.35 !important;
        }

        .ms-section {
          border-bottom: 1px solid #e5e7eb;
          padding-bottom: 2rem;
        }

        .ms-section:last-child {
          border-bottom: none;
          padding-bottom: 0;
        }
      `}</style>
    </div>
  );
}
