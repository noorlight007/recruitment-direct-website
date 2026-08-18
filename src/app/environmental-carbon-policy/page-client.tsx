"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingElements from "@/components/FloatingElements";

export default function EnvironmentalCarbonPolicyPage() {
  return (
    <div className="min-h-screen bg-white text-black flex flex-col font-sans">
      <FloatingElements />
      <Navbar />

      <main className="flex-grow pt-[20px] md:pt-[40px] pb-20 px-6 max-w-4xl mx-auto w-full ecp-container">
        {/* Page Title */}
        <h1 className="text-3xl md:text-5xl font-bold font-heading text-black mb-6 tracking-tight">
          Environmental and Carbon Reduction Policy
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
          <section className="ecp-section">
            <h2 className="text-xl md:text-2xl font-bold font-heading text-black mb-4">
              1. Statement
            </h2>
            <div className="space-y-4 text-base md:text-lg text-gray-800 leading-relaxed">
              <p>
                Recruitment Direct UK Limited (&ldquo;RDUK&rdquo;, &ldquo;we&rdquo;, &ldquo;our&rdquo; or &ldquo;us&rdquo;) is committed to minimising the environmental impact of its operations and promoting sustainable business practices.
              </p>
              <p>
                We recognise our responsibility to reduce carbon emissions, conserve resources and operate in an environmentally responsible manner while continuing to provide high-quality recruitment services throughout the United Kingdom.
              </p>
            </div>
          </section>

          {/* 2. Purpose */}
          <section className="ecp-section">
            <h2 className="text-xl md:text-2xl font-bold font-heading text-black mb-4">
              2. Purpose
            </h2>
            <div className="space-y-4 text-base md:text-lg text-gray-800 leading-relaxed">
              <p>
                The purpose of this policy is to:
              </p>
              <ul className="space-y-3 mt-2 pl-2">
                {[
                  "Reduce the environmental impact of business activities.",
                  "Promote sustainable working practices.",
                  "Reduce carbon emissions where reasonably practicable.",
                  "Improve resource efficiency.",
                  "Support compliance with environmental legislation.",
                  "Encourage environmental awareness throughout the organisation."
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
          <section className="ecp-section">
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
                The policy applies to all business activities undertaken by Recruitment Direct UK Limited.
              </p>
            </div>
          </section>

          {/* 4. Our Environmental Commitments */}
          <section className="ecp-section">
            <h2 className="text-xl md:text-2xl font-bold font-heading text-black mb-4">
              4. Our Environmental Commitments
            </h2>
            <div className="space-y-4 text-base md:text-lg text-gray-800 leading-relaxed">
              <p>
                Recruitment Direct UK Limited is committed to:
              </p>
              <ul className="space-y-3 mt-2 pl-2">
                {[
                  "Reducing energy consumption.",
                  "Reducing unnecessary travel.",
                  "Increasing the use of digital systems and documentation.",
                  "Minimising waste generation.",
                  "Promoting recycling and responsible disposal practices.",
                  "Reducing paper consumption.",
                  "Supporting environmentally responsible procurement where appropriate.",
                  "Continually improving environmental performance."
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-gray-800">
                    <span className="w-1.5 h-1.5 bg-blue-600 rounded-full flex-shrink-0 mt-2.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* 5. Carbon Reduction Initiatives */}
          <section className="ecp-section">
            <h2 className="text-xl md:text-2xl font-bold font-heading text-black mb-4">
              5. Carbon Reduction Initiatives
            </h2>
            <div className="space-y-4 text-base md:text-lg text-gray-800 leading-relaxed">
              <p>
                RDUK will seek to reduce carbon emissions by:
              </p>
              <ul className="space-y-3 mt-2 pl-2">
                {[
                  "Promoting remote meetings and video conferencing.",
                  "Reducing unnecessary business travel.",
                  "Encouraging electronic documentation and digital signatures.",
                  "Utilising cloud-based and AI-assisted technologies to reduce paper-based administration.",
                  "Improving operational efficiency through automation and digital workflows.",
                  "Monitoring opportunities to further reduce energy consumption and environmental impact."
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-gray-800">
                    <span className="w-1.5 h-1.5 bg-blue-600 rounded-full flex-shrink-0 mt-2.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* 6. Technology and Sustainability */}
          <section className="ecp-section">
            <h2 className="text-xl md:text-2xl font-bold font-heading text-black mb-4">
              6. Technology and Sustainability
            </h2>
            <div className="space-y-4 text-base md:text-lg text-gray-800 leading-relaxed">
              <p>
                Recruitment Direct UK Limited may use artificial intelligence (&ldquo;AI&rdquo;), automation and digital technologies to improve operational efficiency and reduce environmental impact.
              </p>
              <p>
                These technologies may assist in:
              </p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-2 pl-2">
                {[
                  "Reducing paper usage.",
                  "Streamlining recruitment processes.",
                  "Reducing administrative tasks.",
                  "Supporting remote communication.",
                  "Improving resource efficiency."
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-gray-800">
                    <span className="w-1.5 h-1.5 bg-blue-600 rounded-full flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-4">
                RDUK is committed to ensuring technology is used responsibly and in a manner that supports environmental sustainability objectives.
              </p>
            </div>
          </section>

          {/* 7. Employee Responsibilities */}
          <section className="ecp-section">
            <h2 className="text-xl md:text-2xl font-bold font-heading text-black mb-4">
              7. Employee Responsibilities
            </h2>
            <div className="space-y-4 text-base md:text-lg text-gray-800 leading-relaxed">
              <p>
                Employees and workers are encouraged to:
              </p>
              <ul className="space-y-3 mt-2 pl-2">
                {[
                  "Reduce unnecessary printing.",
                  "Switch off equipment when not in use.",
                  "Minimise waste.",
                  "Recycle where facilities exist.",
                  "Consider environmental impacts when carrying out business activities."
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-gray-800">
                    <span className="w-1.5 h-1.5 bg-blue-600 rounded-full flex-shrink-0 mt-2.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* 8. Compliance */}
          <section className="ecp-section">
            <h2 className="text-xl md:text-2xl font-bold font-heading text-black mb-4">
              8. Compliance
            </h2>
            <div className="space-y-4 text-base md:text-lg text-gray-800 leading-relaxed">
              <p>
                Recruitment Direct UK Limited will comply with applicable environmental legislation and seek continual improvement in environmental performance.
              </p>
            </div>
          </section>

          {/* 9. Review */}
          <section className="ecp-section">
            <h2 className="text-xl md:text-2xl font-bold font-heading text-black mb-4">
              9. Review
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
              I confirm that this Environmental and Carbon Reduction Policy has been reviewed and approved on behalf of Recruitment Direct UK Limited.
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
        
        .ecp-container h1,
        .ecp-container h2,
        .ecp-container h3,
        .ecp-container p,
        .ecp-container li,
        .ecp-container span {
          color: #000000 !important;
        }

        .ecp-container h1 {
          line-height: 1.25 !important;
        }

        .ecp-container h2 {
          line-height: 1.35 !important;
        }

        .ecp-section {
          border-bottom: 1px solid #e5e7eb;
          padding-bottom: 2rem;
        }

        .ecp-section:last-child {
          border-bottom: none;
          padding-bottom: 0;
        }
      `}</style>
    </div>
  );
}
