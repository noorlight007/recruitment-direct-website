"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingElements from "@/components/FloatingElements";

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-white text-black flex flex-col font-sans">
      <FloatingElements />
      <Navbar />

      <main className="flex-grow pt-[20px] md:pt-[40px] pb-20 px-6 max-w-4xl mx-auto w-full pp-container">
        {/* Page Title */}
        <h1 className="text-3xl md:text-5xl font-bold font-heading text-black mb-6 tracking-tight">
          Privacy Policy
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
          <section className="pp-section">
            <h2 className="text-xl md:text-2xl font-bold font-heading text-black mb-4">
              1. Introduction
            </h2>
            <div className="space-y-4 text-base md:text-lg text-gray-800 leading-relaxed">
              <p>
                Recruitment Direct UK Limited (&ldquo;RDUK&rdquo;, &ldquo;we&rdquo;, &ldquo;our&rdquo; or &ldquo;us&rdquo;) is committed to protecting the privacy and security of personal information.
              </p>
              <p>
                This Privacy Policy explains how we collect, use, store, share and protect personal data relating to applicants, workers, clients, suppliers and visitors to our website.
              </p>
            </div>
          </section>

          {/* 2. Information We Collect */}
          <section className="pp-section">
            <h2 className="text-xl md:text-2xl font-bold font-heading text-black mb-4">
              2. Information We Collect
            </h2>
            <div className="space-y-4 text-base md:text-lg text-gray-800 leading-relaxed">
              <p>
                We may collect and process the following information:
              </p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-2 pl-2">
                {[
                  "Name and contact details",
                  "Address information",
                  "Email addresses",
                  "Telephone numbers",
                  "CVs and employment history",
                  "Qualifications and training records",
                  "Right to work documentation",
                  "Identification documents",
                  "National Insurance numbers",
                  "Payroll and banking information",
                  "References",
                  "Website usage information",
                  "IP addresses and cookie data",
                  "Communications and correspondence",
                  "Information submitted through online forms",
                  "Information collected through AI-assisted recruitment and communication systems"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-gray-800">
                    <span className="w-1.5 h-1.5 bg-blue-600 rounded-full flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* 3. How We Use Personal Information */}
          <section className="pp-section">
            <h2 className="text-xl md:text-2xl font-bold font-heading text-black mb-4">
              3. How We Use Personal Information
            </h2>
            <div className="space-y-4 text-base md:text-lg text-gray-800 leading-relaxed">
              <p>
                We may use personal information to:
              </p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-2 pl-2">
                {[
                  "Provide recruitment and employment services",
                  "Match applicants with suitable opportunities",
                  "Verify identity and right to work",
                  "Conduct compliance checks",
                  "Process payroll and payments",
                  "Communicate with clients and applicants",
                  "Improve our services",
                  "Meet legal and regulatory obligations",
                  "Operate AI-assisted recruitment and communication systems",
                  "Analyse recruitment data and workforce trends"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-gray-800">
                    <span className="w-1.5 h-1.5 bg-blue-600 rounded-full flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* 4. AI and Automated Processing */}
          <section className="pp-section">
            <h2 className="text-xl md:text-2xl font-bold font-heading text-black mb-4">
              4. AI and Automated Processing
            </h2>
            <div className="space-y-4 text-base md:text-lg text-gray-800 leading-relaxed">
              <p>
                Recruitment Direct UK Limited may use artificial intelligence (&ldquo;AI&rdquo;), machine learning and automated technologies to support recruitment, compliance, communication and business operations.
              </p>
              <p>
                These technologies may be used to:
              </p>
              <ul className="space-y-3 mt-2 pl-2">
                {[
                  "Screen and assess applications.",
                  "Match applicant skills, qualifications and experience to vacancies.",
                  "Support applicant sourcing activities.",
                  "Conduct automated communications via telephone, email, SMS, WhatsApp and other messaging platforms.",
                  "Assist with compliance, document verification and administrative processes.",
                  "Improve response times and service delivery."
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-gray-800">
                    <span className="w-1.5 h-1.5 bg-blue-600 rounded-full flex-shrink-0 mt-2.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-4">
                AI technologies are used to support recruitment activities and operational efficiency. Final recruitment decisions remain subject to appropriate human review and oversight.
              </p>
              <p>
                Where automated processing is used, Recruitment Direct UK Limited will take reasonable steps to ensure accuracy, fairness, transparency and compliance with applicable data protection legislation.
              </p>
              <p>
                Individuals may contact Recruitment Direct UK Limited for further information regarding the processing of their personal data or the use of automated decision-making technologies.
              </p>
            </div>
          </section>

          {/* 5. Sharing Information */}
          <section className="pp-section">
            <h2 className="text-xl md:text-2xl font-bold font-heading text-black mb-4">
              5. Sharing Information
            </h2>
            <div className="space-y-4 text-base md:text-lg text-gray-800 leading-relaxed">
              <p>
                Personal information may be shared with:
              </p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-2 pl-2 mb-4">
                {[
                  "Clients and prospective employers",
                  "Payroll providers",
                  "Umbrella companies",
                  "Regulatory authorities",
                  "Professional advisers",
                  "Technology and software providers",
                  "Compliance and screening providers"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-gray-800">
                    <span className="w-1.5 h-1.5 bg-blue-600 rounded-full flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-4">
                Information is only shared where necessary and lawful to do so.
              </p>
            </div>
          </section>

          {/* 6. Data Security */}
          <section className="pp-section">
            <h2 className="text-xl md:text-2xl font-bold font-heading text-black mb-4">
              6. Data Security
            </h2>
            <div className="space-y-4 text-base md:text-lg text-gray-800 leading-relaxed">
              <p>
                RDUK maintains appropriate technical and organisational measures to protect personal information from unauthorised access, loss, misuse or disclosure.
              </p>
            </div>
          </section>

          {/* 7. Data Retention */}
          <section className="pp-section">
            <h2 className="text-xl md:text-2xl font-bold font-heading text-black mb-4">
              7. Data Retention
            </h2>
            <div className="space-y-4 text-base md:text-lg text-gray-800 leading-relaxed">
              <p>
                Personal information will be retained only for as long as necessary to fulfil recruitment, legal, regulatory and business requirements.
              </p>
              <p>
                Retention periods may vary depending upon the nature of the information and applicable legal obligations.
              </p>
            </div>
          </section>

          {/* 8. Your Rights */}
          <section className="pp-section">
            <h2 className="text-xl md:text-2xl font-bold font-heading text-black mb-4">
              8. Your Rights
            </h2>
            <div className="space-y-4 text-base md:text-lg text-gray-800 leading-relaxed">
              <p>
                Individuals may have the right to:
              </p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-2 pl-2 mb-4">
                {[
                  "Access personal information",
                  "Correct inaccurate information",
                  "Request deletion of information",
                  "Restrict processing",
                  "Object to processing",
                  "Request data portability",
                  "Withdraw consent where applicable"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-gray-800">
                    <span className="w-1.5 h-1.5 bg-blue-600 rounded-full flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-4">
                Requests should be sent to:
              </p>
              <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 pl-8 text-sm text-gray-800">
                Email: <a href="mailto:accounts@rd1.co.uk" className="text-blue-600 hover:underline">accounts@rd1.co.uk</a>
              </div>
            </div>
          </section>

          {/* 9. Cookies */}
          <section className="pp-section">
            <h2 className="text-xl md:text-2xl font-bold font-heading text-black mb-4">
              9. Cookies
            </h2>
            <div className="space-y-4 text-base md:text-lg text-gray-800 leading-relaxed">
              <p>
                Our website may use cookies and similar technologies to improve functionality, performance and user experience.
              </p>
              <p>
                Further details are available within our Cookie Policy.
              </p>
            </div>
          </section>

          {/* 10. Complaints */}
          <section className="pp-section">
            <h2 className="text-xl md:text-2xl font-bold font-heading text-black mb-4">
              10. Complaints
            </h2>
            <div className="space-y-4 text-base md:text-lg text-gray-800 leading-relaxed">
              <p>
                If you have concerns regarding how your personal information is handled, please contact Recruitment Direct UK Limited.
              </p>
              <p>
                You also have the right to lodge a complaint with the Information Commissioner&apos;s Office (ICO).
              </p>
            </div>
          </section>

          {/* 11. Review */}
          <section className="pp-section">
            <h2 className="text-xl md:text-2xl font-bold font-heading text-black mb-4">
              11. Review
            </h2>
            <div className="space-y-4 text-base md:text-lg text-gray-800 leading-relaxed">
              <p>
                This Privacy Policy will be reviewed annually or sooner if required by changes in legislation, regulatory requirements or business operations.
              </p>
            </div>
          </section>

          {/* Director Approval Box */}
          <section className="bg-gray-50 border border-gray-200 rounded-xl p-8 mt-12 space-y-4">
            <h3 className="text-lg font-bold text-gray-900 border-b border-gray-200 pb-2">
              Director Approval
            </h3>
            <p className="text-base text-gray-800 leading-relaxed italic">
              I confirm that this Privacy Policy has been reviewed and approved on behalf of Recruitment Direct UK Limited.
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
        
        .pp-container h1,
        .pp-container h2,
        .pp-container h3,
        .pp-container p,
        .pp-container li,
        .pp-container span {
          color: #000000 !important;
        }

        .pp-container h1 {
          line-height: 1.25 !important;
        }

        .pp-container h2 {
          line-height: 1.35 !important;
        }

        .pp-section {
          border-bottom: 1px solid #e5e7eb;
          padding-bottom: 2rem;
        }

        .pp-section:last-child {
          border-bottom: none;
          padding-bottom: 0;
        }
      `}</style>
    </div>
  );
}
