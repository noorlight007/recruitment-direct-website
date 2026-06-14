"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingElements from "@/components/FloatingElements";

export default function CandidatePrivacyNoticePage() {
  return (
    <div className="min-h-screen bg-white text-black flex flex-col font-sans">
      <FloatingElements />
      <Navbar />

      <main className="flex-grow pt-[20px] md:pt-[40px] pb-20 px-6 max-w-4xl mx-auto w-full cpn-container">
        {/* Page Title */}
        <h1 className="text-3xl md:text-5xl font-bold font-heading text-black mb-6 tracking-tight">
          Candidate Privacy Notice
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
          {/* 1. Introduction */}
          <section className="cpn-section">
            <h2 className="text-xl md:text-2xl font-bold font-heading text-black mb-4">
              1. Introduction
            </h2>
            <div className="space-y-4 text-base md:text-lg text-gray-800 leading-relaxed">
              <p>
                Recruitment Direct UK Limited (&ldquo;RDUK&rdquo;, &ldquo;we&rdquo;, &ldquo;our&rdquo; or &ldquo;us&rdquo;) is committed to protecting the privacy, security and confidentiality of applicant and worker information.
              </p>
              <p>
                This Candidate Privacy Notice explains how we collect, use, process, store, share and protect personal information relating to individuals seeking temporary, contract or permanent employment opportunities through Recruitment Direct UK Limited.
              </p>
            </div>
          </section>

          {/* 2. Who This Notice Applies To */}
          <section className="cpn-section">
            <h2 className="text-xl md:text-2xl font-bold font-heading text-black mb-4">
              2. Who This Notice Applies To
            </h2>
            <div className="space-y-4 text-base md:text-lg text-gray-800 leading-relaxed">
              <p>
                This notice applies to:
              </p>
              <ul className="space-y-3 mt-2 pl-2">
                {[
                  "Job applicants.",
                  "Temporary workers.",
                  "Contract workers.",
                  "Permanent placement applicants.",
                  "Former applicants and workers where records are retained in accordance with legal, regulatory and business requirements."
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-gray-800">
                    <span className="w-1.5 h-1.5 bg-blue-600 rounded-full flex-shrink-0 mt-2.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* 3. Information We Collect */}
          <section className="cpn-section">
            <h2 className="text-xl md:text-2xl font-bold font-heading text-black mb-4">
              3. Information We Collect
            </h2>
            <div className="space-y-4 text-base md:text-lg text-gray-800 leading-relaxed">
              <p>
                Recruitment Direct UK Limited may collect and process:
              </p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-2 pl-2">
                {[
                  "Name and contact details.",
                  "Address history.",
                  "Date of birth.",
                  "Employment history.",
                  "CVs and application forms.",
                  "Qualifications and training records.",
                  "References.",
                  "Right to work documentation.",
                  "Passport and identification documents.",
                  "National Insurance numbers.",
                  "Payroll and banking information.",
                  "Interview notes and assessments.",
                  "Communications and correspondence.",
                  "Information provided during telephone, video and online interviews.",
                  "Information submitted through websites, applications and online forms.",
                  "Information collected through AI-assisted recruitment, compliance and communication systems."
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-gray-800">
                    <span className="w-1.5 h-1.5 bg-blue-600 rounded-full flex-shrink-0 mt-2.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* 4. How We Use Your Information */}
          <section className="cpn-section">
            <h2 className="text-xl md:text-2xl font-bold font-heading text-black mb-4">
              4. How We Use Your Information
            </h2>
            <div className="space-y-4 text-base md:text-lg text-gray-800 leading-relaxed">
              <p>
                We may use your personal information to:
              </p>
              <ul className="space-y-3 mt-2 pl-2">
                {[
                  "Assess suitability for vacancies.",
                  "Match skills and experience to employment opportunities.",
                  "Contact you regarding vacancies, assignments and opportunities.",
                  "Verify identity and right to work status.",
                  "Conduct compliance and background checks.",
                  "Process payroll and payments.",
                  "Meet legal and regulatory obligations.",
                  "Manage recruitment and employment relationships.",
                  "Improve recruitment processes and service delivery."
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-gray-800">
                    <span className="w-1.5 h-1.5 bg-blue-600 rounded-full flex-shrink-0 mt-2.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* 5. AI-Assisted Recruitment and Communication */}
          <section className="cpn-section">
            <h2 className="text-xl md:text-2xl font-bold font-heading text-black mb-4">
              5. AI-Assisted Recruitment and Communication
            </h2>
            <div className="space-y-4 text-base md:text-lg text-gray-800 leading-relaxed">
              <p>
                Recruitment Direct UK Limited may use artificial intelligence (&ldquo;AI&rdquo;), machine learning and automated technologies to support recruitment, communication, compliance, administration and data management activities.
              </p>
              <p>
                These technologies may assist with:
              </p>
              <ul className="space-y-3 mt-2 pl-2">
                {[
                  "Screening and assessing applications.",
                  "Matching applicants to suitable vacancies.",
                  "Identifying skills, qualifications and experience relevant to vacancies.",
                  "Conducting automated communications via telephone, email, SMS, WhatsApp and other messaging platforms.",
                  "Supporting document verification and compliance processes.",
                  "Maintaining and updating recruitment database records.",
                  "Identifying incomplete, inaccurate or duplicate records.",
                  "Supporting GDPR compliance and data management activities.",
                  "Improving recruitment response times and operational efficiency."
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-gray-800">
                    <span className="w-1.5 h-1.5 bg-blue-600 rounded-full flex-shrink-0 mt-2.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-4">
                AI technologies are used to support recruitment activities and business operations and do not replace appropriate human oversight.
              </p>
              <p>
                Final recruitment and placement decisions remain subject to human review where appropriate.
              </p>
            </div>
          </section>

          {/* 6. Lawful Basis for Processing */}
          <section className="cpn-section">
            <h2 className="text-xl md:text-2xl font-bold font-heading text-black mb-4">
              6. Lawful Basis for Processing
            </h2>
            <div className="space-y-4 text-base md:text-lg text-gray-800 leading-relaxed">
              <p>
                Recruitment Direct UK Limited processes personal data under one or more of the following lawful bases:
              </p>
              <ul className="space-y-3 mt-2 pl-2">
                {[
                  "Consent.",
                  "Performance of a contract.",
                  "Compliance with legal obligations.",
                  "Legitimate business interests."
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-gray-800">
                    <span className="w-1.5 h-1.5 bg-blue-600 rounded-full flex-shrink-0 mt-2.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* 7. Sharing Information */}
          <section className="cpn-section">
            <h2 className="text-xl md:text-2xl font-bold font-heading text-black mb-4">
              7. Sharing Information
            </h2>
            <div className="space-y-4 text-base md:text-lg text-gray-800 leading-relaxed">
              <p>
                Personal information may be shared where necessary with:
              </p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-2 pl-2">
                {[
                  "Clients and prospective employers.",
                  "Payroll providers.",
                  "Umbrella companies.",
                  "Compliance and screening providers.",
                  "Professional advisers.",
                  "Technology and software providers.",
                  "Government authorities and regulators where legally required."
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-gray-800">
                    <span className="w-1.5 h-1.5 bg-blue-600 rounded-full flex-shrink-0 mt-2.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-4">
                Information is only shared where lawful, necessary and proportionate.
              </p>
            </div>
          </section>

          {/* 8. Data Security */}
          <section className="cpn-section">
            <h2 className="text-xl md:text-2xl font-bold font-heading text-black mb-4">
              8. Data Security
            </h2>
            <div className="space-y-4 text-base md:text-lg text-gray-800 leading-relaxed">
              <p>
                Recruitment Direct UK Limited maintains appropriate technical and organisational measures to protect personal information against unauthorised access, loss, misuse, disclosure or destruction.
              </p>
            </div>
          </section>

          {/* 9. Data Retention */}
          <section className="cpn-section">
            <h2 className="text-xl md:text-2xl font-bold font-heading text-black mb-4">
              9. Data Retention
            </h2>
            <div className="space-y-4 text-base md:text-lg text-gray-800 leading-relaxed">
              <p>
                Personal information will only be retained for as long as necessary to fulfil recruitment, legal, regulatory and business requirements.
              </p>
              <p>
                RDUK may utilise AI-assisted compliance systems to support record maintenance, retention monitoring and GDPR compliance processes.
              </p>
              <p>
                Information will be securely deleted, destroyed or anonymised when no longer required.
              </p>
            </div>
          </section>

          {/* 10. Your Rights */}
          <section className="cpn-section">
            <h2 className="text-xl md:text-2xl font-bold font-heading text-black mb-4">
              10. Your Rights
            </h2>
            <div className="space-y-4 text-base md:text-lg text-gray-800 leading-relaxed">
              <p>
                You may have the right to:
              </p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-2 pl-2 mb-4">
                {[
                  "Access your personal information.",
                  "Correct inaccurate information.",
                  "Request deletion of information.",
                  "Restrict processing.",
                  "Object to processing.",
                  "Request data portability.",
                  "Withdraw consent where applicable."
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-gray-800">
                    <span className="w-1.5 h-1.5 bg-blue-600 rounded-full flex-shrink-0 mt-2.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-4">
                Requests should be submitted to:
              </p>
              <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 pl-8 text-sm text-gray-800">
                Email: <a href="mailto:accounts@rd1.co.uk" className="text-blue-600 hover:underline">accounts@rd1.co.uk</a>
              </div>
            </div>
          </section>

          {/* 11. Complaints */}
          <section className="cpn-section">
            <h2 className="text-xl md:text-2xl font-bold font-heading text-black mb-4">
              11. Complaints
            </h2>
            <div className="space-y-4 text-base md:text-lg text-gray-800 leading-relaxed">
              <p>
                If you have concerns regarding how your personal information is processed, please contact Recruitment Direct UK Limited.
              </p>
              <p>
                You also have the right to lodge a complaint with the Information Commissioner&apos;s Office (ICO).
              </p>
            </div>
          </section>

          {/* 12. Acknowledgement */}
          <section className="cpn-section">
            <h2 className="text-xl md:text-2xl font-bold font-heading text-black mb-4">
              12. Acknowledgement
            </h2>
            <div className="space-y-4 text-base md:text-lg text-gray-800 leading-relaxed">
              <p>
                By registering with Recruitment Direct UK Limited, submitting an application, uploading documents or providing personal information, you acknowledge that you have been provided with access to this Candidate Privacy Notice.
              </p>
            </div>
          </section>

          {/* Director Approval Box */}
          <section className="bg-gray-50 border border-gray-200 rounded-xl p-8 mt-12 space-y-4">
            <h3 className="text-lg font-bold text-gray-900 border-b border-gray-200 pb-2">
              Director Approval
            </h3>
            <p className="text-base text-gray-800 leading-relaxed italic">
              I confirm that this Candidate Privacy Notice has been reviewed and approved on behalf of Recruitment Direct UK Limited.
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
        
        .cpn-container h1,
        .cpn-container h2,
        .cpn-container h3,
        .cpn-container p,
        .cpn-container li,
        .cpn-container span {
          color: #000000 !important;
        }

        .cpn-container h1 {
          line-height: 1.25 !important;
        }

        .cpn-container h2 {
          line-height: 1.35 !important;
        }

        .cpn-section {
          border-bottom: 1px solid #e5e7eb;
          padding-bottom: 2rem;
        }

        .cpn-section:last-child {
          border-bottom: none;
          padding-bottom: 0;
        }
      `}</style>
    </div>
  );
}
