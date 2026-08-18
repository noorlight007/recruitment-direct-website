"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingElements from "@/components/FloatingElements";

export default function HumanReviewStatementPage() {
  return (
    <div className="min-h-screen bg-white text-black flex flex-col font-sans">
      <FloatingElements />
      <Navbar />

      <main className="flex-grow pt-[20px] md:pt-[40px] pb-20 px-6 max-w-4xl mx-auto w-full hrs-container">
        {/* Page Title */}
        <h1 className="text-3xl md:text-5xl font-bold font-heading text-black mb-6 tracking-tight">
          Human Review Statement
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
          <section className="hrs-section">
            <h2 className="text-xl md:text-2xl font-bold font-heading text-black mb-4">
              1. Statement
            </h2>
            <div className="space-y-4 text-base md:text-lg text-gray-800 leading-relaxed">
              <p>
                Recruitment Direct UK Limited (&ldquo;RDUK&rdquo;, &ldquo;we&rdquo;, &ldquo;our&rdquo; or &ldquo;us&rdquo;) is committed to ensuring that appropriate human oversight and review are maintained throughout our recruitment, compliance and business operations.
              </p>
              <p>
                Whilst we utilise artificial intelligence (&ldquo;AI&rdquo;), machine learning and automated technologies to improve efficiency, service delivery and compliance, we recognise the importance of human judgement, accountability and decision-making.
              </p>
            </div>
          </section>

          {/* 2. Purpose */}
          <section className="hrs-section">
            <h2 className="text-xl md:text-2xl font-bold font-heading text-black mb-4">
              2. Purpose
            </h2>
            <div className="space-y-4 text-base md:text-lg text-gray-800 leading-relaxed">
              <p>
                The purpose of this statement is to confirm that AI-assisted technologies are used to support business operations and do not replace human responsibility, accountability or professional judgement.
              </p>
            </div>
          </section>

          {/* 3. Human Oversight */}
          <section className="hrs-section">
            <h2 className="text-xl md:text-2xl font-bold font-heading text-black mb-4">
              3. Human Oversight
            </h2>
            <div className="space-y-4 text-base md:text-lg text-gray-800 leading-relaxed">
              <p>
                Recruitment Direct UK Limited maintains appropriate human oversight over:
              </p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-2 pl-2">
                {[
                  "Recruitment activities.",
                  "Applicant screening processes.",
                  "Placement decisions.",
                  "Compliance activities.",
                  "GDPR compliance processes.",
                  "Client relationship management.",
                  "Business operations and administration.",
                  "AI-assisted communications."
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-gray-800">
                    <span className="w-1.5 h-1.5 bg-blue-600 rounded-full flex-shrink-0 mt-2.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-4">
                Human review may be applied before, during or after AI-assisted processes depending on the nature of the activity.
              </p>
            </div>
          </section>

          {/* 4. Recruitment Decisions */}
          <section className="hrs-section">
            <h2 className="text-xl md:text-2xl font-bold font-heading text-black mb-4">
              4. Recruitment Decisions
            </h2>
            <div className="space-y-6 text-base md:text-lg text-gray-800 leading-relaxed">
              <div>
                <p className="mb-2">AI technologies may assist with:</p>
                <ul className="space-y-3 mt-2 pl-2">
                  {[
                    "Applicant screening.",
                    "Skills and vacancy matching.",
                    "Candidate communications.",
                    "Compliance administration.",
                    "Recruitment workflow management."
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-gray-800">
                      <span className="w-1.5 h-1.5 bg-blue-600 rounded-full flex-shrink-0 mt-2.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <p className="mb-2">However, final decisions relating to:</p>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-2 pl-2">
                  {[
                    "Applicant suitability.",
                    "Client submissions.",
                    "Placements.",
                    "Recruitment outcomes."
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-gray-800">
                      <span className="w-1.5 h-1.5 bg-blue-600 rounded-full flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-4">
                  remain subject to human review and approval.
                </p>
              </div>
            </div>
          </section>

          {/* 5. Compliance and Data Management */}
          <section className="hrs-section">
            <h2 className="text-xl md:text-2xl font-bold font-heading text-black mb-4">
              5. Compliance and Data Management
            </h2>
            <div className="space-y-4 text-base md:text-lg text-gray-800 leading-relaxed">
              <p>
                Recruitment Direct UK Limited may utilise AI-assisted systems to support:
              </p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-2 pl-2">
                {[
                  "GDPR compliance monitoring.",
                  "Database maintenance.",
                  "Identification of incomplete, inaccurate or duplicate records.",
                  "Document verification.",
                  "Compliance reporting."
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-gray-800">
                    <span className="w-1.5 h-1.5 bg-blue-600 rounded-full flex-shrink-0 mt-2.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-4">
                Any significant compliance actions remain subject to human oversight and review.
              </p>
            </div>
          </section>

          {/* 6. Fairness and Accountability */}
          <section className="hrs-section">
            <h2 className="text-xl md:text-2xl font-bold font-heading text-black mb-4">
              6. Fairness and Accountability
            </h2>
            <div className="space-y-4 text-base md:text-lg text-gray-800 leading-relaxed">
              <p>
                RDUK is committed to:
              </p>
              <ul className="space-y-3 mt-2 pl-2">
                {[
                  "Maintaining accountability for decisions.",
                  "Reviewing AI-assisted outputs where appropriate.",
                  "Promoting fairness and consistency.",
                  "Reducing the risk of errors.",
                  "Ensuring compliance with applicable legislation."
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-gray-800">
                    <span className="w-1.5 h-1.5 bg-blue-600 rounded-full flex-shrink-0 mt-2.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-4">
                The use of AI does not remove human responsibility for decisions made by Recruitment Direct UK Limited.
              </p>
            </div>
          </section>

          {/* 7. Continuous Review */}
          <section className="hrs-section">
            <h2 className="text-xl md:text-2xl font-bold font-heading text-black mb-4">
              7. Continuous Review
            </h2>
            <div className="space-y-4 text-base md:text-lg text-gray-800 leading-relaxed">
              <p>
                Recruitment Direct UK Limited will continue to assess the effectiveness of AI-assisted technologies and ensure that appropriate human oversight remains in place as technology and regulatory requirements evolve.
              </p>
            </div>
          </section>

          {/* Director Approval Box */}
          <section className="bg-gray-50 border border-gray-200 rounded-xl p-8 mt-12 space-y-4">
            <h3 className="text-lg font-bold text-gray-900 border-b border-gray-200 pb-2">
              Director Approval
            </h3>
            <p className="text-base text-gray-800 leading-relaxed italic">
              I confirm that this Human Review Statement has been reviewed and approved on behalf of Recruitment Direct UK Limited.
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
        
        .hrs-container h1,
        .hrs-container h2,
        .hrs-container h3,
        .hrs-container p,
        .hrs-container li,
        .hrs-container span {
          color: #000000 !important;
        }

        .hrs-container h1 {
          line-height: 1.25 !important;
        }

        .hrs-container h2 {
          line-height: 1.35 !important;
        }

        .hrs-section {
          border-bottom: 1px solid #e5e7eb;
          padding-bottom: 2rem;
        }

        .hrs-section:last-child {
          border-bottom: none;
          padding-bottom: 0;
        }
      `}</style>
    </div>
  );
}
