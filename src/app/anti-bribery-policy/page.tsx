"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingElements from "@/components/FloatingElements";

export default function AntiBriberyPolicyPage() {
  return (
    <div className="min-h-screen bg-white text-black flex flex-col font-sans">
      <FloatingElements />
      <Navbar />

      <main className="flex-grow pt-[20px] md:pt-[40px] pb-20 px-6 max-w-4xl mx-auto w-full abp-container">
        {/* Page Title */}
        <h1 className="text-3xl md:text-5xl font-bold font-heading text-black mb-6 tracking-tight">
          Anti-Bribery and Corruption Policy
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
          <section className="abp-section">
            <h2 className="text-xl md:text-2xl font-bold font-heading text-black mb-4">
              1. Statement
            </h2>
            <div className="space-y-4 text-base md:text-lg text-gray-800 leading-relaxed">
              <p>
                Recruitment Direct UK Limited (&ldquo;RDUK&rdquo;, &ldquo;we&rdquo;, &ldquo;our&rdquo; or &ldquo;us&rdquo;) is committed to conducting business ethically, professionally and with integrity.
              </p>
              <p>
                We operate a zero-tolerance approach to bribery and corruption and are committed to complying with the Bribery Act 2010 and all other applicable laws and regulations.
              </p>
            </div>
          </section>

          {/* 2. Purpose */}
          <section className="abp-section">
            <h2 className="text-xl md:text-2xl font-bold font-heading text-black mb-4">
              2. Purpose
            </h2>
            <div className="space-y-4 text-base md:text-lg text-gray-800 leading-relaxed">
              <p>
                The purpose of this policy is to:
              </p>
              <ul className="space-y-3 mt-2 pl-2">
                {[
                  "Prevent bribery and corruption in all business activities.",
                  "Promote ethical business practices.",
                  "Protect the reputation of Recruitment Direct UK Limited.",
                  "Ensure compliance with legal and regulatory requirements.",
                  "Provide guidance to employees, workers and business partners."
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
          <section className="abp-section">
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
                  "Business partners",
                  "Any person acting on behalf of Recruitment Direct UK Limited"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-gray-800">
                    <span className="w-1.5 h-1.5 bg-blue-600 rounded-full flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-4">
                The policy applies to all business activities undertaken by Recruitment Direct UK Limited.
              </p>
            </div>
          </section>

          {/* 4. Our Commitment */}
          <section className="abp-section">
            <h2 className="text-xl md:text-2xl font-bold font-heading text-black mb-4">
              4. Our Commitment
            </h2>
            <div className="space-y-4 text-base md:text-lg text-gray-800 leading-relaxed">
              <p>
                Recruitment Direct UK Limited will not:
              </p>
              <ul className="space-y-3 mt-2 pl-2">
                {[
                  "Offer, promise or give a bribe.",
                  "Request, agree to receive or accept a bribe.",
                  "Make facilitation payments.",
                  "Engage in corrupt business practices.",
                  "Offer improper financial or non-financial advantages to secure business or influence decisions."
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-gray-800">
                    <span className="w-1.5 h-1.5 bg-blue-600 rounded-full flex-shrink-0 mt-2.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-4">
                All business dealings must be conducted honestly, fairly and transparently.
              </p>
            </div>
          </section>

          {/* 5. Gifts and Hospitality */}
          <section className="abp-section">
            <h2 className="text-xl md:text-2xl font-bold font-heading text-black mb-4">
              5. Gifts and Hospitality
            </h2>
            <div className="space-y-6 text-base md:text-lg text-gray-800 leading-relaxed">
              <div>
                <p className="mb-2">Reasonable and proportionate business hospitality may be provided or accepted where it is:</p>
                <ul className="space-y-2 pl-2 mb-4">
                  {["Lawful.", "Appropriate.", "Transparent.", "Not intended to improperly influence a business decision."].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-gray-800">
                      <span className="w-1.5 h-1.5 bg-blue-600 rounded-full flex-shrink-0 mt-2.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <p className="mb-2">Gifts, hospitality or benefits must never:</p>
                <ul className="space-y-2 pl-2">
                  {[
                    "Influence recruitment decisions.",
                    "Influence tender evaluations.",
                    "Influence framework awards.",
                    "Influence procurement decisions.",
                    "Create actual or perceived conflicts of interest."
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-gray-800">
                      <span className="w-1.5 h-1.5 bg-blue-600 rounded-full flex-shrink-0 mt-2.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* 6. Recruitment and Client Relationships */}
          <section className="abp-section">
            <h2 className="text-xl md:text-2xl font-bold font-heading text-black mb-4">
              6. Recruitment and Client Relationships
            </h2>
            <div className="space-y-4 text-base md:text-lg text-gray-800 leading-relaxed">
              <p>
                Recruitment Direct UK Limited is committed to ensuring that:
              </p>
              <ul className="space-y-3 mt-2 pl-2">
                {[
                  "Recruitment decisions are based on merit and suitability.",
                  "Client relationships are managed ethically.",
                  "Tender and framework opportunities are pursued fairly.",
                  "No improper payments or incentives are offered to secure business."
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-gray-800">
                    <span className="w-1.5 h-1.5 bg-blue-600 rounded-full flex-shrink-0 mt-2.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* 7. Technology and AI-Assisted Operations */}
          <section className="abp-section">
            <h2 className="text-xl md:text-2xl font-bold font-heading text-black mb-4">
              7. Technology and AI-Assisted Operations
            </h2>
            <div className="space-y-4 text-base md:text-lg text-gray-800 leading-relaxed">
              <p>
                Recruitment Direct UK Limited may use artificial intelligence (&ldquo;AI&rdquo;), machine learning and automated technologies to support recruitment, communication, compliance and administrative processes.
              </p>
              <p>
                All technology systems must be used ethically, transparently and in accordance with applicable laws and company policies.
              </p>
              <p>
                The use of technology does not remove the responsibility of employees, workers or representatives to comply with this Anti-Bribery and Corruption Policy.
              </p>
            </div>
          </section>

          {/* 8. Reporting Concerns */}
          <section className="abp-section">
            <h2 className="text-xl md:text-2xl font-bold font-heading text-black mb-4">
              8. Reporting Concerns
            </h2>
            <div className="space-y-4 text-base md:text-lg text-gray-800 leading-relaxed">
              <p>
                Any suspected bribery, corruption, fraud or unethical conduct should be reported immediately to management.
              </p>
              <p>
                All reports will be treated seriously and investigated appropriately.
              </p>
              <p>
                Recruitment Direct UK Limited will not tolerate retaliation against any individual who raises a genuine concern in good faith.
              </p>
            </div>
          </section>

          {/* 9. Compliance */}
          <section className="abp-section">
            <h2 className="text-xl md:text-2xl font-bold font-heading text-black mb-4">
              9. Compliance
            </h2>
            <div className="space-y-4 text-base md:text-lg text-gray-800 leading-relaxed">
              <p>
                Failure to comply with this policy may result in disciplinary action, termination of engagement, termination of contracts and, where appropriate, referral to regulatory or law enforcement authorities.
              </p>
            </div>
          </section>

          {/* 10. Review */}
          <section className="abp-section">
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
              I confirm that this Anti-Bribery and Corruption Policy has been reviewed and approved on behalf of Recruitment Direct UK Limited.
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
        
        .abp-container h1,
        .abp-container h2,
        .abp-container h3,
        .abp-container p,
        .abp-container li,
        .abp-container span {
          color: #000000 !important;
        }

        .abp-container h1 {
          line-height: 1.25 !important;
        }

        .abp-container h2 {
          line-height: 1.35 !important;
        }

        .abp-section {
          border-bottom: 1px solid #e5e7eb;
          padding-bottom: 2rem;
        }

        .abp-section:last-child {
          border-bottom: none;
          padding-bottom: 0;
        }
      `}</style>
    </div>
  );
}
