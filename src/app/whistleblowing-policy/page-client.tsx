"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingElements from "@/components/FloatingElements";

export default function WhistleblowingPolicyPage() {
  return (
    <div className="min-h-screen bg-white text-black flex flex-col font-sans">
      <FloatingElements />
      <Navbar />

      <main className="flex-grow pt-[20px] md:pt-[40px] pb-20 px-6 max-w-4xl mx-auto w-full wp-container">
        {/* Page Title */}
        <h1 className="text-3xl md:text-5xl font-bold font-heading text-black mb-6 tracking-tight">
          Whistleblowing Policy
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
          <section className="wp-section">
            <h2 className="text-xl md:text-2xl font-bold font-heading text-black mb-4">
              1. Statement
            </h2>
            <div className="space-y-4 text-base md:text-lg text-gray-800 leading-relaxed">
              <p>
                Recruitment Direct UK Limited (&ldquo;RDUK&rdquo;, &ldquo;we&rdquo;, &ldquo;our&rdquo; or &ldquo;us&rdquo;) is committed to conducting its business with honesty, integrity, transparency and accountability.
              </p>
              <p>
                We encourage employees, workers, applicants, contractors, suppliers and business partners to raise genuine concerns regarding suspected wrongdoing, misconduct, illegal activity or unethical behaviour without fear of retaliation.
              </p>
            </div>
          </section>

          {/* 2. Purpose */}
          <section className="wp-section">
            <h2 className="text-xl md:text-2xl font-bold font-heading text-black mb-4">
              2. Purpose
            </h2>
            <div className="space-y-4 text-base md:text-lg text-gray-800 leading-relaxed">
              <p>
                The purpose of this policy is to:
              </p>
              <ul className="space-y-3 mt-2 pl-2">
                {[
                  "Encourage the reporting of genuine concerns.",
                  "Promote ethical and lawful business conduct.",
                  "Provide a clear procedure for reporting concerns.",
                  "Protect individuals who raise concerns in good faith.",
                  "Ensure concerns are investigated appropriately."
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
          <section className="wp-section">
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
                  "Contractors",
                  "Consultants",
                  "Suppliers",
                  "Business partners",
                  "Any person associated with Recruitment Direct UK Limited"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-gray-800">
                    <span className="w-1.5 h-1.5 bg-blue-600 rounded-full flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-4">
                The policy applies to concerns relating to business activities undertaken by Recruitment Direct UK Limited.
              </p>
            </div>
          </section>

          {/* 4. Reportable Concerns */}
          <section className="wp-section">
            <h2 className="text-xl md:text-2xl font-bold font-heading text-black mb-4">
              4. Reportable Concerns
            </h2>
            <div className="space-y-4 text-base md:text-lg text-gray-800 leading-relaxed">
              <p>
                Concerns that may be reported under this policy include:
              </p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-2 pl-2">
                {[
                  "Criminal offences.",
                  "Fraud or financial misconduct.",
                  "Bribery or corruption.",
                  "Breaches of legal or regulatory obligations.",
                  "Health and safety risks.",
                  "Environmental damage.",
                  "Modern slavery or human trafficking.",
                  "Data protection breaches.",
                  "Unethical business practices.",
                  "Misuse of company systems or resources.",
                  "Deliberate concealment of wrongdoing."
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-gray-800">
                    <span className="w-1.5 h-1.5 bg-blue-600 rounded-full flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* 5. Raising a Concern */}
          <section className="wp-section">
            <h2 className="text-xl md:text-2xl font-bold font-heading text-black mb-4">
              5. Raising a Concern
            </h2>
            <div className="space-y-4 text-base md:text-lg text-gray-800 leading-relaxed font-sans">
              <p>
                Concerns should be reported as soon as reasonably possible.
              </p>
              <p>
                Reports may be made verbally or in writing to:
              </p>
              <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 pl-8 space-y-1 text-sm text-gray-800">
                <p className="font-bold text-gray-900">Director</p>
                <p>Recruitment Direct UK Limited</p>
                <p>Email: <a href="mailto:accounts@rd1.co.uk" className="text-blue-600 hover:underline">accounts@rd1.co.uk</a></p>
              </div>
              <p className="mt-4">
                Individuals should provide as much information as possible to assist with any investigation.
              </p>
            </div>
          </section>

          {/* 6. Confidentiality */}
          <section className="wp-section">
            <h2 className="text-xl md:text-2xl font-bold font-heading text-black mb-4">
              6. Confidentiality
            </h2>
            <div className="space-y-4 text-base md:text-lg text-gray-800 leading-relaxed">
              <p>
                Recruitment Direct UK Limited will treat whistleblowing reports seriously and, where possible, maintain confidentiality.
              </p>
              <p>
                Information will only be disclosed where necessary for investigation, legal compliance or regulatory requirements.
              </p>
            </div>
          </section>

          {/* 7. Investigation Process */}
          <section className="wp-section">
            <h2 className="text-xl md:text-2xl font-bold font-heading text-black mb-4">
              7. Investigation Process
            </h2>
            <div className="space-y-4 text-base md:text-lg text-gray-800 leading-relaxed">
              <p>
                All concerns raised under this policy will be reviewed and assessed appropriately.
              </p>
              <p>
                Where necessary:
              </p>
              <ul className="space-y-3 mt-2 pl-2">
                {[
                  "Investigations will be conducted.",
                  "Additional information may be requested.",
                  "Appropriate corrective action may be taken.",
                  "Relevant authorities may be informed where required."
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-gray-800">
                    <span className="w-1.5 h-1.5 bg-blue-600 rounded-full flex-shrink-0 mt-2.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* 8. Protection from Retaliation */}
          <section className="wp-section">
            <h2 className="text-xl md:text-2xl font-bold font-heading text-black mb-4">
              8. Protection from Retaliation
            </h2>
            <div className="space-y-4 text-base md:text-lg text-gray-800 leading-relaxed">
              <p>
                Recruitment Direct UK Limited will not tolerate retaliation against any individual who raises a genuine concern in good faith.
              </p>
              <p>
                Any person found to have subjected an individual to retaliation, victimisation or detrimental treatment may be subject to disciplinary action.
              </p>
            </div>
          </section>

          {/* 9. False Allegations */}
          <section className="wp-section">
            <h2 className="text-xl md:text-2xl font-bold font-heading text-black mb-4">
              9. False Allegations
            </h2>
            <div className="space-y-4 text-base md:text-lg text-gray-800 leading-relaxed">
              <p>
                Deliberately false, malicious or misleading allegations may result in disciplinary action or other appropriate measures.
              </p>
              <p>
                This policy is intended to protect individuals who raise genuine concerns honestly and in good faith.
              </p>
            </div>
          </section>

          {/* 10. Technology and AI-Assisted Operations */}
          <section className="wp-section">
            <h2 className="text-xl md:text-2xl font-bold font-heading text-black mb-4">
              10. Technology and AI-Assisted Operations
            </h2>
            <div className="space-y-4 text-base md:text-lg text-gray-800 leading-relaxed">
              <p>
                Recruitment Direct UK Limited may use artificial intelligence (&ldquo;AI&rdquo;), machine learning and automated technologies to support recruitment, communication, compliance and administrative processes.
              </p>
              <p>
                Concerns relating to the misuse of technology, automated systems, AI-assisted recruitment processes, data handling or compliance matters may be reported under this policy.
              </p>
              <p>
                All reports will be reviewed appropriately and subject to human oversight.
              </p>
            </div>
          </section>

          {/* 11. Compliance */}
          <section className="wp-section">
            <h2 className="text-xl md:text-2xl font-bold font-heading text-black mb-4">
              11. Compliance
            </h2>
            <div className="space-y-4 text-base md:text-lg text-gray-800 leading-relaxed">
              <p>
                Recruitment Direct UK Limited is committed to complying with all applicable legislation relating to whistleblowing and protected disclosures.
              </p>
            </div>
          </section>

          {/* 12. Review */}
          <section className="wp-section">
            <h2 className="text-xl md:text-2xl font-bold font-heading text-black mb-4">
              12. Review
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
              I confirm that this Whistleblowing Policy has been reviewed and approved on behalf of Recruitment Direct UK Limited.
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
        
        .wp-container h1,
        .wp-container h2,
        .wp-container h3,
        .wp-container p,
        .wp-container li,
        .wp-container span {
          color: #000000 !important;
        }

        .wp-container h1 {
          line-height: 1.25 !important;
        }

        .wp-container h2 {
          line-height: 1.35 !important;
        }

        .wp-section {
          border-bottom: 1px solid #e5e7eb;
          padding-bottom: 2rem;
        }

        .wp-section:last-child {
          border-bottom: none;
          padding-bottom: 0;
        }
      `}</style>
    </div>
  );
}
