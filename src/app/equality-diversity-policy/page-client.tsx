"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingElements from "@/components/FloatingElements";

export default function EqualityDiversityPolicyPage() {
  return (
    <div className="min-h-screen bg-white text-black flex flex-col font-sans">
      <FloatingElements />
      <Navbar />

      <main className="flex-grow pt-[20px] md:pt-[40px] pb-20 px-6 max-w-4xl mx-auto w-full edi-container">
        {/* Page Title */}
        <h1 className="text-3xl md:text-5xl font-bold font-heading text-black mb-6 tracking-tight">
          Equality, Diversity and Inclusion Policy
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
          <section className="edi-section">
            <h2 className="text-xl md:text-2xl font-bold font-heading text-black mb-4">
              1. Statement
            </h2>
            <div className="space-y-4 text-base md:text-lg text-gray-800 leading-relaxed">
              <p>
                Recruitment Direct UK Limited (&ldquo;RDUK&rdquo;, &ldquo;we&rdquo;, &ldquo;our&rdquo; or &ldquo;us&rdquo;) is committed to providing a fair, professional and respectful working environment and recruitment process for all individuals.
              </p>
              <p>
                We are committed to complying with the Equality Act 2010 and promoting equality of opportunity throughout our recruitment, employment and business activities.
              </p>
            </div>
          </section>

          {/* 2. Purpose */}
          <section className="edi-section">
            <h2 className="text-xl md:text-2xl font-bold font-heading text-black mb-4">
              2. Purpose
            </h2>
            <div className="space-y-4 text-base md:text-lg text-gray-800 leading-relaxed">
              <p>
                The purpose of this policy is to:
              </p>
              <ul className="space-y-3 mt-2 pl-2">
                {[
                  "Promote equality of opportunity.",
                  "Encourage a respectful and professional working environment.",
                  "Prevent unlawful discrimination, harassment, bullying and victimisation.",
                  "Ensure recruitment and employment decisions are based on merit, competence and business requirements.",
                  "Support an inclusive workplace culture."
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
          <section className="edi-section">
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
                The policy applies throughout all stages of recruitment, selection, placement, training, promotion and business operations.
              </p>
            </div>
          </section>

          {/* 4. Our Commitment */}
          <section className="edi-section">
            <h2 className="text-xl md:text-2xl font-bold font-heading text-black mb-4">
              4. Our Commitment
            </h2>
            <div className="space-y-4 text-base md:text-lg text-gray-800 leading-relaxed">
              <p>
                Recruitment Direct UK Limited is committed to:
              </p>
              <ul className="space-y-3 mt-2 pl-2">
                {[
                  "Treating individuals fairly and with respect.",
                  "Providing equal access to employment opportunities.",
                  "Making recruitment decisions based on skills, qualifications, experience and suitability.",
                  "Maintaining a workplace free from unlawful discrimination, harassment and victimisation.",
                  "Investigating complaints promptly and appropriately.",
                  "Promoting professional conduct throughout the organisation."
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-gray-800">
                    <span className="w-1.5 h-1.5 bg-blue-600 rounded-full flex-shrink-0 mt-2.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* 5. Recruitment and Selection */}
          <section className="edi-section">
            <h2 className="text-xl md:text-2xl font-bold font-heading text-black mb-4">
              5. Recruitment and Selection
            </h2>
            <div className="space-y-4 text-base md:text-lg text-gray-800 leading-relaxed">
              <p>
                Recruitment decisions will be based on objective criteria, including:
              </p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-2 pl-2">
                {[
                  "Skills",
                  "Qualifications",
                  "Experience",
                  "Competence",
                  "Ability to perform the requirements of the role"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-gray-800">
                    <span className="w-1.5 h-1.5 bg-blue-600 rounded-full flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-4">
                Applicants will be assessed fairly and consistently in accordance with client requirements, role specifications and applicable legislation.
              </p>
            </div>
          </section>

          {/* 6. Workplace Inclusion */}
          <section className="edi-section">
            <h2 className="text-xl md:text-2xl font-bold font-heading text-black mb-4">
              6. Workplace Inclusion
            </h2>
            <div className="space-y-4 text-base md:text-lg text-gray-800 leading-relaxed">
              <p>
                RDUK is committed to creating a working environment where individuals are treated with dignity and respect.
              </p>
              <p>
                We encourage:
              </p>
              <ul className="space-y-3 mt-2 pl-2">
                {[
                  "Professional behaviour.",
                  "Respectful communication.",
                  "Fair treatment.",
                  "Equal access to opportunities.",
                  "A culture where concerns can be raised without fear of retaliation."
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-gray-800">
                    <span className="w-1.5 h-1.5 bg-blue-600 rounded-full flex-shrink-0 mt-2.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* 7. AI-Assisted Recruitment Processes */}
          <section className="edi-section">
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
                  "Recruitment communications.",
                  "Compliance administration.",
                  "Document verification processes."
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-gray-800">
                    <span className="w-1.5 h-1.5 bg-blue-600 rounded-full flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-4">
                AI systems are used to support recruitment activities and improve operational efficiency.
                Final recruitment and placement decisions remain subject to appropriate human review and oversight.
              </p>
              <p>
                RDUK is committed to monitoring AI-assisted processes to promote fairness, accuracy and compliance with applicable legislation.
              </p>
            </div>
          </section>

          {/* 8. Reporting Concerns */}
          <section className="edi-section">
            <h2 className="text-xl md:text-2xl font-bold font-heading text-black mb-4">
              8. Reporting Concerns
            </h2>
            <div className="space-y-4 text-base md:text-lg text-gray-800 leading-relaxed">
              <p>
                Any individual who believes they have experienced or witnessed unlawful discrimination, harassment, bullying, victimisation or unfair treatment should report the matter to Recruitment Direct UK Limited.
              </p>
              <p>
                All concerns will be treated seriously and investigated appropriately.
              </p>
            </div>
          </section>

          {/* 9. Compliance */}
          <section className="edi-section">
            <h2 className="text-xl md:text-2xl font-bold font-heading text-black mb-4">
              9. Compliance
            </h2>
            <div className="space-y-4 text-base md:text-lg text-gray-800 leading-relaxed">
              <p>
                Failure by employees, workers or representatives of RDUK to comply with this policy may result in disciplinary action, termination of engagement or other appropriate action.
              </p>
            </div>
          </section>

          {/* 10. Review */}
          <section className="edi-section">
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
              I confirm that this Equality, Diversity and Inclusion Policy has been reviewed and approved on behalf of Recruitment Direct UK Limited.
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
        
        .edi-container h1,
        .edi-container h2,
        .edi-container h3,
        .edi-container p,
        .edi-container li,
        .edi-container span {
          color: #000000 !important;
        }

        .edi-container h1 {
          line-height: 1.25 !important;
        }

        .edi-container h2 {
          line-height: 1.35 !important;
        }

        .edi-section {
          border-bottom: 1px solid #e5e7eb;
          padding-bottom: 2rem;
        }

        .edi-section:last-child {
          border-bottom: none;
          padding-bottom: 0;
        }
      `}</style>
    </div>
  );
}
