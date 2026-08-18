"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingElements from "@/components/FloatingElements";

export default function AITransparencyStatementPage() {
  return (
    <div className="min-h-screen bg-white text-black flex flex-col font-sans">
      <FloatingElements />
      <Navbar />

      <main className="flex-grow pt-[20px] md:pt-[40px] pb-20 px-6 max-w-4xl mx-auto w-full aihns-container">
        {/* Page Title */}
        <h1 className="text-3xl md:text-5xl font-bold font-heading text-black mb-6 tracking-tight">
          AI Hire Now Statement
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
          <section className="aihns-section">
            <h2 className="text-xl md:text-2xl font-bold font-heading text-black mb-4">
              1. Statement
            </h2>
            <div className="space-y-4 text-base md:text-lg text-gray-800 leading-relaxed">
              <p>
                Recruitment Direct UK Limited (&ldquo;RDUK&rdquo;, &ldquo;we&rdquo;, &ldquo;our&rdquo; or &ldquo;us&rdquo;) is committed to using artificial intelligence (&ldquo;AI&rdquo;) responsibly to improve recruitment speed, efficiency and service delivery.
              </p>
              <p>
                Our AI Hire Now approach enables applicants to be engaged rapidly following application, helping to reduce delays and improve the recruitment experience for both applicants and clients.
              </p>
            </div>
          </section>

          {/* 2. Purpose */}
          <section className="aihns-section">
            <h2 className="text-xl md:text-2xl font-bold font-heading text-black mb-4">
              2. Purpose
            </h2>
            <div className="space-y-4 text-base md:text-lg text-gray-800 leading-relaxed">
              <p>
                The purpose of this statement is to explain how Recruitment Direct UK Limited uses AI-assisted recruitment technologies to accelerate recruitment processes while maintaining compliance, transparency and human oversight.
              </p>
            </div>
          </section>

          {/* 3. AI Hire Now Process */}
          <section className="aihns-section">
            <h2 className="text-xl md:text-2xl font-bold font-heading text-black mb-4">
              3. AI Hire Now Process
            </h2>
            <div className="space-y-4 text-base md:text-lg text-gray-800 leading-relaxed">
              <p>
                Recruitment Direct UK Limited may utilise AI-assisted technologies to:
              </p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-2 pl-2">
                {[
                  "Contact applicants shortly after an application is received.",
                  "Conduct initial screening and qualification conversations.",
                  "Ask role-specific recruitment questions.",
                  "Assess responses against vacancy requirements.",
                  "Support skills and experience matching.",
                  "Assist with document collection and compliance processes.",
                  "Support communication through telephone, email, SMS and WhatsApp.",
                  "Reduce administrative delays within the recruitment process."
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-gray-800">
                    <span className="w-1.5 h-1.5 bg-blue-600 rounded-full flex-shrink-0 mt-2.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-4">
                The objective is to ensure applicants are engaged quickly and efficiently while improving response times for clients.
              </p>
            </div>
          </section>

          {/* 4. Human Review */}
          <section className="aihns-section">
            <h2 className="text-xl md:text-2xl font-bold font-heading text-black mb-4">
              4. Human Review
            </h2>
            <div className="space-y-4 text-base md:text-lg text-gray-800 leading-relaxed">
              <p>
                AI technologies are used to support recruitment activities and improve operational efficiency.
              </p>
              <p>
                Final recruitment decisions, applicant submissions, placements and employment-related decisions remain subject to human review and approval.
              </p>
              <p>
                AI technologies do not replace professional judgement or human responsibility.
              </p>
            </div>
          </section>

          {/* 5. Compliance and Data Protection */}
          <section className="aihns-section">
            <h2 className="text-xl md:text-2xl font-bold font-heading text-black mb-4">
              5. Compliance and Data Protection
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

          {/* 6. Benefits of AI Hire Now */}
          <section className="aihns-section">
            <h2 className="text-xl md:text-2xl font-bold font-heading text-black mb-4">
              6. Benefits of AI Hire Now
            </h2>
            <div className="space-y-4 text-base md:text-lg text-gray-800 leading-relaxed">
              <p>
                The AI Hire Now approach helps to:
              </p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-2 pl-2">
                {[
                  "Improve applicant response times.",
                  "Increase recruitment efficiency.",
                  "Reduce administrative workloads.",
                  "Support faster vacancy fulfilment.",
                  "Improve communication throughout the recruitment process.",
                  "Enhance compliance and document management activities.",
                  "Support a consistent recruitment experience."
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-gray-800">
                    <span className="w-1.5 h-1.5 bg-blue-600 rounded-full flex-shrink-0 mt-2.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* 7. Continuous Improvement */}
          <section className="aihns-section">
            <h2 className="text-xl md:text-2xl font-bold font-heading text-black mb-4">
              7. Continuous Improvement
            </h2>
            <div className="space-y-4 text-base md:text-lg text-gray-800 leading-relaxed">
              <p>
                Recruitment Direct UK Limited will continue to review and improve AI-assisted recruitment technologies to ensure they remain effective, compliant and aligned with business and client requirements.
              </p>
            </div>
          </section>

          {/* Director Approval Box */}
          <section className="bg-gray-50 border border-gray-200 rounded-xl p-8 mt-12 space-y-4">
            <h3 className="text-lg font-bold text-gray-900 border-b border-gray-200 pb-2">
              Director Approval
            </h3>
            <p className="text-base text-gray-800 leading-relaxed italic">
              I confirm that this AI Hire Now Statement has been reviewed and approved on behalf of Recruitment Direct UK Limited.
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
        
        .aihns-container h1,
        .aihns-container h2,
        .aihns-container h3,
        .aihns-container p,
        .aihns-container li,
        .aihns-container span {
          color: #000000 !important;
        }

        .aihns-container h1 {
          line-height: 1.25 !important;
        }

        .aihns-container h2 {
          line-height: 1.35 !important;
        }

        .aihns-section {
          border-bottom: 1px solid #e5e7eb;
          padding-bottom: 2rem;
        }

        .aihns-section:last-child {
          border-bottom: none;
          padding-bottom: 0;
        }
      `}</style>
    </div>
  );
}
