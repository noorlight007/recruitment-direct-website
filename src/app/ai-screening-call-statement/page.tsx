"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingElements from "@/components/FloatingElements";

export default function AIScreeningCallStatementPage() {
  return (
    <div className="min-h-screen bg-white text-black flex flex-col font-sans">
      <FloatingElements />
      <Navbar />

      <main className="flex-grow pt-[20px] md:pt-[40px] pb-20 px-6 max-w-4xl mx-auto w-full ascs-container">
        {/* Page Title */}
        <h1 className="text-3xl md:text-5xl font-bold font-heading text-black mb-6 tracking-tight">
          AI Applicant Screening Call Statement
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
          <section className="ascs-section">
            <h2 className="text-xl md:text-2xl font-bold font-heading text-black mb-4">
              1. Statement
            </h2>
            <div className="space-y-4 text-base md:text-lg text-gray-800 leading-relaxed">
              <p>
                Recruitment Direct UK Limited (&ldquo;RDUK&rdquo;, &ldquo;we&rdquo;, &ldquo;our&rdquo; or &ldquo;us&rdquo;) uses artificial intelligence (&ldquo;AI&rdquo;) to support the initial screening of applicants following the submission of a job application.
              </p>
              <p>
                The purpose of AI Applicant Screening Calls is to improve response times, enhance applicant engagement and support a more efficient recruitment process.
              </p>
            </div>
          </section>

          {/* 2. Purpose */}
          <section className="ascs-section">
            <h2 className="text-xl md:text-2xl font-bold font-heading text-black mb-4">
              2. Purpose
            </h2>
            <div className="space-y-4 text-base md:text-lg text-gray-800 leading-relaxed">
              <p>
                This statement explains how AI-assisted applicant screening calls operate and how information collected during these interactions may be used.
              </p>
            </div>
          </section>

          {/* 3. How AI Applicant Screening Calls Work */}
          <section className="ascs-section">
            <h2 className="text-xl md:text-2xl font-bold font-heading text-black mb-4">
              3. How AI Applicant Screening Calls Work
            </h2>
            <div className="space-y-4 text-base md:text-lg text-gray-800 leading-relaxed">
              <p>
                Following an application, applicants may receive an AI-assisted telephone call designed to:
              </p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-2 pl-2">
                {[
                  "Confirm application details.",
                  "Ask role-specific screening questions.",
                  "Verify availability and work preferences.",
                  "Gather additional information relevant to the vacancy.",
                  "Assess suitability against vacancy requirements.",
                  "Support recruitment and compliance processes.",
                  "Reduce delays in the recruitment process."
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-gray-800">
                    <span className="w-1.5 h-1.5 bg-blue-600 rounded-full flex-shrink-0 mt-2.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-4">
                These calls are intended to assist consultants by collecting relevant information efficiently and consistently.
              </p>
            </div>
          </section>

          {/* 4. Information Collected */}
          <section className="ascs-section">
            <h2 className="text-xl md:text-2xl font-bold font-heading text-black mb-4">
              4. Information Collected
            </h2>
            <div className="space-y-4 text-base md:text-lg text-gray-800 leading-relaxed">
              <p>
                During an AI-assisted screening call, information may be collected including:
              </p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-2 pl-2">
                {[
                  "Applicant contact details.",
                  "Employment history.",
                  "Skills and qualifications.",
                  "Availability for work.",
                  "Location preferences.",
                  "Right to work information.",
                  "Responses to vacancy-specific questions.",
                  "Compliance-related information."
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-gray-800">
                    <span className="w-1.5 h-1.5 bg-blue-600 rounded-full flex-shrink-0 mt-2.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-4">
                Information collected may be recorded and stored within Recruitment Direct UK Limited&apos;s recruitment systems.
              </p>
            </div>
          </section>

          {/* 5. Human Review */}
          <section className="ascs-section">
            <h2 className="text-xl md:text-2xl font-bold font-heading text-black mb-4">
              5. Human Review
            </h2>
            <div className="space-y-4 text-base md:text-lg text-gray-800 leading-relaxed">
              <p>
                AI-assisted screening calls are used to support recruitment activities and improve operational efficiency.
              </p>
              <p>
                Final recruitment decisions, applicant submissions, placements and employment-related decisions remain subject to human review and approval.
              </p>
              <p>
                AI technologies do not replace professional judgement or human responsibility.
              </p>
            </div>
          </section>

          {/* 6. Compliance and Data Protection */}
          <section className="ascs-section">
            <h2 className="text-xl md:text-2xl font-bold font-heading text-black mb-4">
              6. Compliance and Data Protection
            </h2>
            <div className="space-y-4 text-base md:text-lg text-gray-800 leading-relaxed">
              <p>
                All AI-assisted recruitment activities operate in conjunction with:
              </p>
              <ul className="space-y-3 mt-2 pl-2">
                <li>
                  <a href="/privacy-policy" className="text-blue-600 hover:underline">Privacy Policy</a>.
                </li>
                <li>
                  <a href="/candidate-privacy-notice" className="text-blue-600 hover:underline">Candidate Privacy Notice</a>.
                </li>
                <li>
                  <a href="/data-protection-gdpr-policy" className="text-blue-600 hover:underline">Data Protection and GDPR Policy</a>.
                </li>
                <li>
                  <a href="/ai-transparency-statement" className="text-blue-600 hover:underline">AI Transparency Statement</a>.
                </li>
                <li>
                  <a href="/human-review-statement" className="text-blue-600 hover:underline">Human Review Statement</a>.
                </li>
                <li>
                  <a href="/bias-fairness-statement" className="text-blue-600 hover:underline">AI Fairness and Bias Statement</a>.
                </li>
              </ul>
              <p className="mt-4">
                Recruitment Direct UK Limited is committed to ensuring that AI technologies are used lawfully, fairly and responsibly.
              </p>
            </div>
          </section>

          {/* 7. Applicant Choice */}
          <section className="ascs-section">
            <h2 className="text-xl md:text-2xl font-bold font-heading text-black mb-4">
              7. Applicant Choice
            </h2>
            <div className="space-y-4 text-base md:text-lg text-gray-800 leading-relaxed">
              <p>
                Participation in AI-assisted screening calls is optional. Applicants who prefer not to participate can request a manual screening call or a traditional interview with a recruitment consultant.
              </p>
              <p>
                This ensures all applicants have equal access to recruitment while maintaining appropriate human oversight.
              </p>
              <p>
                Applicants may request further information regarding AI-assisted screening processes by contacting Recruitment Direct UK Limited.
              </p>
            </div>
          </section>

          {/* 8. Benefits of AI Applicant Screening Calls */}
          <section className="ascs-section">
            <h2 className="text-xl md:text-2xl font-bold font-heading text-black mb-4">
              8. Benefits of AI Applicant Screening Calls
            </h2>
            <div className="space-y-4 text-base md:text-lg text-gray-800 leading-relaxed">
              <p>
                The use of AI-assisted screening calls helps:
              </p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-2 pl-2">
                {[
                  "Contact applicants quickly after application.",
                  "Improve applicant engagement.",
                  "Reduce recruitment administration.",
                  "Support consistent screening processes.",
                  "Accelerate recruitment timescales.",
                  "Improve service delivery to clients and applicants."
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-gray-800">
                    <span className="w-1.5 h-1.5 bg-blue-600 rounded-full flex-shrink-0 mt-2.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* 9. Continuous Improvement */}
          <section className="ascs-section">
            <h2 className="text-xl md:text-2xl font-bold font-heading text-black mb-4">
              9. Continuous Improvement
            </h2>
            <div className="space-y-4 text-base md:text-lg text-gray-800 leading-relaxed">
              <p>
                Recruitment Direct UK Limited will continue to review and improve AI-assisted recruitment technologies to ensure they remain effective, transparent and compliant with applicable legislation.
              </p>
            </div>
          </section>

          {/* 10. Contact Information */}
          <section className="ascs-section">
            <h2 className="text-xl md:text-2xl font-bold font-heading text-black mb-4">
              10. Contact Information
            </h2>
            <div className="space-y-4 text-base md:text-lg text-gray-800 leading-relaxed">
              <p>
                Questions regarding the use of AI screening technologies within Recruitment Direct UK Limited may be directed to:
              </p>
              <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 pl-8 text-sm text-gray-800">
                Email: <a href="mailto:accounts@rd1.co.uk" className="text-blue-600 hover:underline">accounts@rd1.co.uk</a>
              </div>
            </div>
          </section>

          {/* Director Approval Box */}
          <section className="bg-gray-50 border border-gray-200 rounded-xl p-8 mt-12 space-y-4">
            <h3 className="text-lg font-bold text-gray-900 border-b border-gray-200 pb-2">
              Director Approval
            </h3>
            <p className="text-base text-gray-800 leading-relaxed italic">
              I confirm that this AI Applicant Screening Call Statement has been reviewed and approved on behalf of Recruitment Direct UK Limited.
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
        
        .ascs-container h1,
        .ascs-container h2,
        .ascs-container h3,
        .ascs-container p,
        .ascs-container li,
        .ascs-container span {
          color: #000000 !important;
        }

        .ascs-container h1 {
          line-height: 1.25 !important;
        }

        .ascs-container h2 {
          line-height: 1.35 !important;
        }

        .ascs-section {
          border-bottom: 1px solid #e5e7eb;
          padding-bottom: 2rem;
        }

        .ascs-section:last-child {
          border-bottom: none;
          padding-bottom: 0;
        }
      `}</style>
    </div>
  );
}
