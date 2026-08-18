"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingElements from "@/components/FloatingElements";

export default function HealthSafetyPolicyPage() {
  return (
    <div className="min-h-screen bg-white text-black flex flex-col font-sans">
      <FloatingElements />
      <Navbar />

      <main className="flex-grow pt-[20px] md:pt-[40px] pb-20 px-6 max-w-4xl mx-auto w-full hs-container">
        {/* Page Title */}
        <h1 className="text-3xl md:text-5xl font-bold font-heading text-black mb-6 tracking-tight">
          Health & Safety Policy
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
          <section className="hs-section">
            <h2 className="text-xl md:text-2xl font-bold font-heading text-black mb-4">
              1. Statement
            </h2>
            <div className="space-y-4 text-base md:text-lg text-gray-800 leading-relaxed">
              <p>
                Recruitment Direct UK Limited (&ldquo;RDUK&rdquo;, &ldquo;we&rdquo;, &ldquo;our&rdquo; or &ldquo;us&rdquo;) is committed to providing and maintaining a safe and healthy working environment for employees, workers, applicants, clients, contractors, suppliers and visitors.
              </p>
              <p>
                We recognise our responsibilities under the Health and Safety at Work etc. Act 1974 and all other applicable health and safety legislation.
              </p>
            </div>
          </section>

          {/* 2. Purpose */}
          <section className="hs-section">
            <h2 className="text-xl md:text-2xl font-bold font-heading text-black mb-4">
              2. Purpose
            </h2>
            <div className="space-y-4 text-base md:text-lg text-gray-800 leading-relaxed">
              <p>
                The purpose of this policy is to:
              </p>
              <ul className="space-y-3 mt-2 pl-2">
                {[
                  "Promote a safe and healthy working environment.",
                  "Prevent workplace accidents, injuries and ill health.",
                  "Reduce risks wherever reasonably practicable.",
                  "Ensure compliance with health and safety legislation.",
                  "Promote a positive health and safety culture throughout the organisation."
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
          <section className="hs-section">
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
                  "Visitors"
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
          <section className="hs-section">
            <h2 className="text-xl md:text-2xl font-bold font-heading text-black mb-4">
              4. Our Commitment
            </h2>
            <div className="space-y-4 text-base md:text-lg text-gray-800 leading-relaxed">
              <p>
                Recruitment Direct UK Limited is committed to:
              </p>
              <ul className="space-y-3 mt-2 pl-2">
                {[
                  "Providing a safe and healthy working environment.",
                  "Identifying and managing workplace risks.",
                  "Maintaining safe systems of work.",
                  "Providing appropriate information, instruction and guidance.",
                  "Promoting health, safety and wellbeing.",
                  "Investigating accidents, incidents and near misses.",
                  "Continually improving health and safety performance."
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-gray-800">
                    <span className="w-1.5 h-1.5 bg-blue-600 rounded-full flex-shrink-0 mt-2.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* 5. Responsibilities */}
          <section className="hs-section">
            <h2 className="text-xl md:text-2xl font-bold font-heading text-black mb-4">
              5. Responsibilities
            </h2>
            <div className="space-y-6 text-base md:text-lg text-gray-800 leading-relaxed">
              <div>
                <h3 className="font-bold text-gray-900 mb-2">Management Responsibilities</h3>
                <p className="mb-2">Management will:</p>
                <ul className="space-y-2 pl-2">
                  {[
                    "Promote health and safety throughout the organisation.",
                    "Assess and manage workplace risks.",
                    "Implement appropriate procedures and controls.",
                    "Investigate health and safety concerns.",
                    "Take corrective action where necessary."
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-gray-800">
                      <span className="w-1.5 h-1.5 bg-blue-600 rounded-full flex-shrink-0 mt-2.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="font-bold text-gray-900 mb-2">Employee and Worker Responsibilities</h3>
                <p className="mb-2">Employees and workers are expected to:</p>
                <ul className="space-y-2 pl-2">
                  {[
                    "Take reasonable care of their own health and safety.",
                    "Consider the health and safety of others affected by their actions.",
                    "Follow health and safety procedures.",
                    "Report hazards, accidents and unsafe conditions.",
                    "Co-operate with health and safety requirements."
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

          {/* 6. Risk Assessments */}
          <section className="hs-section">
            <h2 className="text-xl md:text-2xl font-bold font-heading text-black mb-4">
              6. Risk Assessments
            </h2>
            <div className="space-y-4 text-base md:text-lg text-gray-800 leading-relaxed">
              <p>
                Recruitment Direct UK Limited will undertake risk assessments where appropriate and implement suitable control measures to reduce identified risks.
              </p>
              <p>
                Risk assessments will be reviewed periodically and when significant changes occur.
              </p>
            </div>
          </section>

          {/* 7. Accident and Incident Reporting */}
          <section className="hs-section">
            <h2 className="text-xl md:text-2xl font-bold font-heading text-black mb-4">
              7. Accident and Incident Reporting
            </h2>
            <div className="space-y-4 text-base md:text-lg text-gray-800 leading-relaxed">
              <p>
                All accidents, incidents, near misses and health and safety concerns should be reported as soon as reasonably practicable.
              </p>
              <p>
                Reports will be investigated where appropriate and corrective action taken where necessary.
              </p>
            </div>
          </section>

          {/* 8. Client Sites and Placements */}
          <section className="hs-section">
            <h2 className="text-xl md:text-2xl font-bold font-heading text-black mb-4">
              8. Client Sites and Placements
            </h2>
            <div className="space-y-4 text-base md:text-lg text-gray-800 leading-relaxed">
              <p>
                Where workers are supplied to client locations, Recruitment Direct UK Limited will seek confirmation that appropriate health and safety arrangements are in place.
              </p>
              <p>
                Workers are expected to comply with site-specific health and safety requirements and immediately report any concerns.
              </p>
            </div>
          </section>

          {/* 9. Technology and AI-Assisted Operations */}
          <section className="hs-section">
            <h2 className="text-xl md:text-2xl font-bold font-heading text-black mb-4">
              9. Technology and AI-Assisted Operations
            </h2>
            <div className="space-y-4 text-base md:text-lg text-gray-800 leading-relaxed">
              <p>
                Recruitment Direct UK Limited may use artificial intelligence (&ldquo;AI&rdquo;), machine learning and automated technologies to support recruitment, communication, compliance and administrative processes.
              </p>
              <p>
                These technologies are intended to improve operational efficiency and service delivery.
              </p>
              <p>
                RDUK remains committed to ensuring that the use of technology does not compromise health, safety, wellbeing or legal compliance and that appropriate human oversight is maintained at all times.
              </p>
            </div>
          </section>

          {/* 10. Review */}
          <section className="hs-section">
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
              I confirm that this Health & Safety Policy has been reviewed and approved on behalf of Recruitment Direct UK Limited.
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
        
        .hs-container h1,
        .hs-container h2,
        .hs-container h3,
        .hs-container p,
        .hs-container li,
        .hs-container span {
          color: #000000 !important;
        }

        .hs-container h1 {
          line-height: 1.25 !important;
        }

        .hs-container h2 {
          line-height: 1.35 !important;
        }

        .hs-section {
          border-bottom: 1px solid #e5e7eb;
          padding-bottom: 2rem;
        }

        .hs-section:last-child {
          border-bottom: none;
          padding-bottom: 0;
        }
      `}</style>
    </div>
  );
}
