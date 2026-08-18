"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingElements from "@/components/FloatingElements";

export default function CarbonReductionPlanPage() {
  return (
    <div className="min-h-screen bg-white text-black flex flex-col font-sans">
      <FloatingElements />
      <Navbar />

      <main className="flex-grow pt-[20px] md:pt-[40px] pb-20 px-6 max-w-4xl mx-auto w-full crp-container">
        {/* Page Title */}
        <h1 className="text-3xl md:text-5xl font-bold font-heading text-black mb-6 tracking-tight">
          Carbon Reduction Plan
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
          {/* 1. Commitment to Carbon Reduction */}
          <section className="crp-section">
            <h2 className="text-xl md:text-2xl font-bold font-heading text-black mb-4">
              1. Commitment to Carbon Reduction
            </h2>
            <div className="space-y-4 text-base md:text-lg text-gray-800 leading-relaxed">
              <p>
                Recruitment Direct UK Limited (&ldquo;RDUK&rdquo;) is committed to reducing its environmental impact and supporting the transition to a lower-carbon economy.
              </p>
              <p>
                As a technology-enabled recruitment business, RDUK seeks to minimise carbon emissions through digital operations, remote working, efficient business practices and continuous improvement.
              </p>
            </div>
          </section>

          {/* 2. Baseline Year */}
          <section className="crp-section">
            <h2 className="text-xl md:text-2xl font-bold font-heading text-black mb-4">
              2. Baseline Year
            </h2>
            <div className="space-y-4 text-base md:text-lg text-gray-800 leading-relaxed">
              <p>
                Recruitment Direct UK Limited has adopted 2026 as its baseline year for carbon reduction activities.
              </p>
              <p>
                The company will review its environmental performance annually and identify opportunities to further reduce its carbon footprint.
              </p>
            </div>
          </section>

          {/* 3. Current Carbon Reduction Activities */}
          <section className="crp-section">
            <h2 className="text-xl md:text-2xl font-bold font-heading text-black mb-4">
              3. Current Carbon Reduction Activities
            </h2>
            <div className="space-y-4 text-base md:text-lg text-gray-800 leading-relaxed">
              <p>
                RDUK currently supports carbon reduction through:
              </p>
              <ul className="space-y-3 mt-2 pl-2">
                {[
                  "Home and hybrid working arrangements.",
                  "Remote meetings and video conferencing.",
                  "Electronic documentation and digital signatures.",
                  "Cloud-based recruitment and compliance systems.",
                  "AI-assisted recruitment and compliance processes.",
                  "Reduced printing and paper usage.",
                  "Digital communication and record management.",
                  "Responsible use of office resources and energy."
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-gray-800">
                    <span className="w-1.5 h-1.5 bg-blue-600 rounded-full flex-shrink-0 mt-2.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-4">
                These measures reduce commuting requirements, business travel and paper consumption.
              </p>
            </div>
          </section>

          {/* 4. Carbon Reduction Objectives */}
          <section className="crp-section">
            <h2 className="text-xl md:text-2xl font-bold font-heading text-black mb-4">
              4. Carbon Reduction Objectives
            </h2>
            <div className="space-y-4 text-base md:text-lg text-gray-800 leading-relaxed">
              <p>
                Recruitment Direct UK Limited is committed to:
              </p>
              <ul className="space-y-3 mt-2 pl-2">
                {[
                  "Maintaining and expanding digital recruitment processes.",
                  "Continuing to reduce paper-based administration.",
                  "Minimising unnecessary travel.",
                  "Increasing the use of remote meetings and collaboration tools.",
                  "Reviewing opportunities to improve energy efficiency.",
                  "Promoting environmentally responsible working practices throughout the organisation."
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-gray-800">
                    <span className="w-1.5 h-1.5 bg-blue-600 rounded-full flex-shrink-0 mt-2.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* 5. Technology and Sustainability */}
          <section className="crp-section">
            <h2 className="text-xl md:text-2xl font-bold font-heading text-black mb-4">
              5. Technology and Sustainability
            </h2>
            <div className="space-y-4 text-base md:text-lg text-gray-800 leading-relaxed">
              <p>
                Recruitment Direct UK Limited utilises artificial intelligence (&ldquo;AI&rdquo;), automation and cloud-based technologies to improve operational efficiency and support sustainability objectives.
              </p>
              <p>
                These technologies assist with:
              </p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-2 pl-2">
                {[
                  "Reducing paper consumption.",
                  "Automating administrative processes.",
                  "Supporting remote communication.",
                  "Maintaining digital records.",
                  "Improving workflow efficiency.",
                  "Reducing the environmental impact associated with manual and paper-based processes."
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-gray-800">
                    <span className="w-1.5 h-1.5 bg-blue-600 rounded-full flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* 6. Future Commitments */}
          <section className="crp-section">
            <h2 className="text-xl md:text-2xl font-bold font-heading text-black mb-4">
              6. Future Commitments
            </h2>
            <div className="space-y-4 text-base md:text-lg text-gray-800 leading-relaxed">
              <p>
                During the next review period, Recruitment Direct UK Limited will:
              </p>
              <ul className="space-y-3 mt-2 pl-2">
                {[
                  "Continue monitoring opportunities to reduce environmental impact.",
                  "Encourage responsible use of resources.",
                  "Maintain flexible working arrangements where operationally appropriate.",
                  "Further develop digital and automated business processes.",
                  "Review sustainability initiatives as part of annual business planning."
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-gray-800">
                    <span className="w-1.5 h-1.5 bg-blue-600 rounded-full flex-shrink-0 mt-2.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* 7. Governance */}
          <section className="crp-section">
            <h2 className="text-xl md:text-2xl font-bold font-heading text-black mb-4">
              7. Governance
            </h2>
            <div className="space-y-4 text-base md:text-lg text-gray-800 leading-relaxed">
              <p>
                Responsibility for this Carbon Reduction Plan rests with the Director of Recruitment Direct UK Limited.
              </p>
              <p>
                The Director will review progress annually and approve any updates to this plan.
              </p>
            </div>
          </section>

          {/* Director Approval Box */}
          <section className="bg-gray-50 border border-gray-200 rounded-xl p-8 mt-12 space-y-4">
            <h3 className="text-lg font-bold text-gray-900 border-b border-gray-200 pb-2">
              Director Approval
            </h3>
            <p className="text-base text-gray-800 leading-relaxed italic">
              I confirm that this Carbon Reduction Plan has been reviewed and approved on behalf of Recruitment Direct UK Limited.
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
        
        .crp-container h1,
        .crp-container h2,
        .crp-container h3,
        .crp-container p,
        .crp-container li,
        .crp-container span {
          color: #000000 !important;
        }

        .crp-container h1 {
          line-height: 1.25 !important;
        }

        .crp-container h2 {
          line-height: 1.35 !important;
        }

        .crp-section {
          border-bottom: 1px solid #e5e7eb;
          padding-bottom: 2rem;
        }

        .crp-section:last-child {
          border-bottom: none;
          padding-bottom: 0;
        }
      `}</style>
    </div>
  );
}
