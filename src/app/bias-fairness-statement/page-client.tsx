"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingElements from "@/components/FloatingElements";

export default function BiasFairnessStatementPage() {
  return (
    <div className="min-h-screen bg-white text-black flex flex-col font-sans">
      <FloatingElements />
      <Navbar />

      <main className="flex-grow pt-[20px] md:pt-[40px] pb-20 px-6 max-w-4xl mx-auto w-full bfs-container">
        {/* Page Title */}
        <h1 className="text-3xl md:text-5xl font-bold font-heading text-black mb-6 tracking-tight">
          AI Fairness and Bias Statement
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
          <section className="bfs-section">
            <h2 className="text-xl md:text-2xl font-bold font-heading text-black mb-4">
              1. Statement
            </h2>
            <div className="space-y-4 text-base md:text-lg text-gray-800 leading-relaxed">
              <p>
                Recruitment Direct UK Limited (&ldquo;RDUK&rdquo;, &ldquo;we&rdquo;, &ldquo;our&rdquo; or &ldquo;us&rdquo;) is committed to the responsible, ethical and fair use of artificial intelligence (&ldquo;AI&rdquo;), machine learning and automated technologies.
              </p>
              <p>
                We recognise that AI-assisted systems must operate in a manner that supports fairness, transparency, consistency and accountability throughout recruitment, compliance and business operations.
              </p>
            </div>
          </section>

          {/* 2. Purpose */}
          <section className="bfs-section">
            <h2 className="text-xl md:text-2xl font-bold font-heading text-black mb-4">
              2. Purpose
            </h2>
            <div className="space-y-4 text-base md:text-lg text-gray-800 leading-relaxed">
              <p>
                The purpose of this statement is to outline the principles that govern the use of AI technologies within Recruitment Direct UK Limited and our commitment to reducing the risk of unfair outcomes, bias and discrimination.
              </p>
            </div>
          </section>

          {/* 3. Fairness Principles */}
          <section className="bfs-section">
            <h2 className="text-xl md:text-2xl font-bold font-heading text-black mb-4">
              3. Fairness Principles
            </h2>
            <div className="space-y-4 text-base md:text-lg text-gray-800 leading-relaxed">
              <p>
                Recruitment Direct UK Limited is committed to ensuring that AI-assisted technologies are used to:
              </p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-2 pl-2">
                {[
                  "Support fair recruitment practices.",
                  "Improve consistency in recruitment processes.",
                  "Assist with skills and vacancy matching.",
                  "Improve operational efficiency.",
                  "Support compliance and administrative activities.",
                  "Promote objective decision-making processes."
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-gray-800">
                    <span className="w-1.5 h-1.5 bg-blue-600 rounded-full flex-shrink-0 mt-2.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-4">
                AI technologies are used as support tools and do not replace professional judgement or human responsibility.
              </p>
            </div>
          </section>

          {/* 4. Human Oversight */}
          <section className="bfs-section">
            <h2 className="text-xl md:text-2xl font-bold font-heading text-black mb-4">
              4. Human Oversight
            </h2>
            <div className="space-y-4 text-base md:text-lg text-gray-800 leading-relaxed">
              <p>
                Appropriate human oversight is maintained throughout AI-assisted recruitment and compliance processes.
              </p>
              <p>
                AI technologies may assist with:
              </p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-2 pl-2">
                {[
                  "Applicant screening.",
                  "Skills and vacancy matching.",
                  "Recruitment communications.",
                  "Compliance administration.",
                  "Database management."
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-gray-800">
                    <span className="w-1.5 h-1.5 bg-blue-600 rounded-full flex-shrink-0 mt-2.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-4">
                Final recruitment, placement, compliance and business decisions remain subject to human review and approval.
              </p>
            </div>
          </section>

          {/* 5. Monitoring and Review */}
          <section className="bfs-section">
            <h2 className="text-xl md:text-2xl font-bold font-heading text-black mb-4">
              5. Monitoring and Review
            </h2>
            <div className="space-y-4 text-base md:text-lg text-gray-800 leading-relaxed">
              <p>
                Recruitment Direct UK Limited seeks to:
              </p>
              <ul className="space-y-3 mt-2 pl-2">
                {[
                  "Monitor AI-assisted processes.",
                  "Review AI-generated outputs where appropriate.",
                  "Identify potential inaccuracies or inconsistencies.",
                  "Maintain accountability for decisions.",
                  "Continually improve AI-assisted processes."
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-gray-800">
                    <span className="w-1.5 h-1.5 bg-blue-600 rounded-full flex-shrink-0 mt-2.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-4">
                Where concerns are identified, appropriate corrective action will be taken.
              </p>
            </div>
          </section>

          {/* 6. Data Quality */}
          <section className="bfs-section">
            <h2 className="text-xl md:text-2xl font-bold font-heading text-black mb-4">
              6. Data Quality
            </h2>
            <div className="space-y-4 text-base md:text-lg text-gray-800 leading-relaxed">
              <p>
                The effectiveness of AI-assisted systems depends on the quality of the information processed.
              </p>
              <p>
                Recruitment Direct UK Limited may utilise AI-assisted technologies to:
              </p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-2 pl-2">
                {[
                  "Identify incomplete records.",
                  "Identify duplicate records.",
                  "Support recruitment database maintenance.",
                  "Improve data quality.",
                  "Support GDPR compliance activities."
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-gray-800">
                    <span className="w-1.5 h-1.5 bg-blue-600 rounded-full flex-shrink-0 mt-2.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-4">
                All significant updates and actions remain subject to appropriate human oversight.
              </p>
            </div>
          </section>

          {/* 7. Transparency */}
          <section className="bfs-section">
            <h2 className="text-xl md:text-2xl font-bold font-heading text-black mb-4">
              7. Transparency
            </h2>
            <div className="space-y-4 text-base md:text-lg text-gray-800 leading-relaxed">
              <p>
                Recruitment Direct UK Limited is committed to being transparent regarding the use of AI technologies within recruitment, communication, compliance and business operations.
              </p>
              <p>
                Information regarding AI-assisted processing is provided within our:
              </p>
              <ul className="space-y-3 mt-2 pl-2">
                <li>
                  <a href="/privacy-policy" className="text-blue-600 hover:underline">Privacy Policy</a>.
                </li>
                <li>
                  <a href="/candidate-privacy-notice" className="text-blue-600 hover:underline">Candidate Privacy Notice</a>.
                </li>
                <li>
                  <a href="/client-privacy-notice" className="text-blue-600 hover:underline">Client Privacy Notice</a>.
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
              </ul>
            </div>
          </section>

          {/* 8. Continuous Improvement */}
          <section className="bfs-section">
            <h2 className="text-xl md:text-2xl font-bold font-heading text-black mb-4">
              8. Continuous Improvement
            </h2>
            <div className="space-y-4 text-base md:text-lg text-gray-800 leading-relaxed">
              <p>
                Recruitment Direct UK Limited will continue to review developments in AI technology, regulatory requirements and industry best practice.
              </p>
              <p>
                We are committed to ensuring that AI technologies are deployed responsibly and in a manner that supports fairness, accountability and compliance.
              </p>
            </div>
          </section>

          {/* 9. Contact Information */}
          <section className="bfs-section">
            <h2 className="text-xl md:text-2xl font-bold font-heading text-black mb-4">
              9. Contact Information
            </h2>
            <div className="space-y-4 text-base md:text-lg text-gray-800 leading-relaxed">
              <p>
                Questions regarding the use of AI technologies within Recruitment Direct UK Limited may be directed to:
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
              I confirm that this AI Fairness and Bias Statement has been reviewed and approved on behalf of Recruitment Direct UK Limited.
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
        
        .bfs-container h1,
        .bfs-container h2,
        .bfs-container h3,
        .bfs-container p,
        .bfs-container li,
        .bfs-container span {
          color: #000000 !important;
        }

        .bfs-container h1 {
          line-height: 1.25 !important;
        }

        .bfs-container h2 {
          line-height: 1.35 !important;
        }

        .bfs-section {
          border-bottom: 1px solid #e5e7eb;
          padding-bottom: 2rem;
        }

        .bfs-section:last-child {
          border-bottom: none;
          padding-bottom: 0;
        }
      `}</style>
    </div>
  );
}
