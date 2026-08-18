"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingElements from "@/components/FloatingElements";

export default function TermsOfUsePage() {
  return (
    <div className="min-h-screen bg-white text-black flex flex-col font-sans">
      <FloatingElements />
      <Navbar />

      <main className="flex-grow pt-[20px] md:pt-[40px] pb-20 px-6 max-w-4xl mx-auto w-full terms-container">
        {/* Page Title */}
        <h1 className="text-3xl md:text-5xl font-bold font-heading text-black mb-6 tracking-tight">
          Website Terms of Use
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
          <section className="terms-section">
            <h2 className="text-xl md:text-2xl font-bold font-heading text-black mb-4">
              1. Introduction
            </h2>
            <div className="space-y-4 text-base md:text-lg text-gray-800 leading-relaxed">
              <p>
                These Terms of Use govern your access to and use of the Recruitment Direct UK Limited (&ldquo;RDUK&rdquo;, &ldquo;we&rdquo;, &ldquo;our&rdquo; or &ldquo;us&rdquo;) website.
              </p>
              <p>
                By accessing or using this website, you agree to be bound by these Terms of Use. If you do not agree to these terms, you should not use this website.
              </p>
            </div>
          </section>

          {/* 2. About Us */}
          <section className="terms-section">
            <h2 className="text-xl md:text-2xl font-bold font-heading text-black mb-4">
              2. About Us
            </h2>
            <div className="space-y-4 text-base md:text-lg text-gray-800 leading-relaxed">
              <p>
                Recruitment Direct UK Limited provides temporary, contract and permanent recruitment services throughout the United Kingdom. The information contained on this website is provided for general information purposes only.
              </p>
            </div>
          </section>

          {/* 3. Website Content */}
          <section className="terms-section">
            <h2 className="text-xl md:text-2xl font-bold font-heading text-black mb-4">
              3. Website Content
            </h2>
            <div className="space-y-4 text-base md:text-lg text-gray-800 leading-relaxed">
              <p>
                Whilst RDUK takes reasonable care to ensure information published on this website is accurate and up to date, we do not guarantee the completeness, accuracy or reliability of any information displayed.
              </p>
              <p>
                Content may be updated, amended or removed without notice.
              </p>
            </div>
          </section>

          {/* 4. AI-Assisted Services */}
          <section className="terms-section">
            <h2 className="text-xl md:text-2xl font-bold font-heading text-black mb-4">
              4. AI-Assisted Services
            </h2>
            <div className="space-y-4 text-base md:text-lg text-gray-800 leading-relaxed">
              <p>
                Recruitment Direct UK Limited may use artificial intelligence (&ldquo;AI&rdquo;), machine learning and automated technologies to support recruitment, communication, compliance and business operations.
              </p>
              <p>
                AI-assisted services may include:
              </p>
              <ul className="space-y-3 mt-2 pl-2">
                {[
                  "Applicant screening and qualification.",
                  "Skills and job matching.",
                  "Automated communications.",
                  "Website chat and enquiry handling.",
                  "Compliance and document verification processes.",
                  "Recruitment workflow automation."
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-gray-800">
                    <span className="w-1.5 h-1.5 bg-blue-600 rounded-full flex-shrink-0 mt-2.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-4">
                AI-generated information is provided for assistance purposes only and should not be relied upon as professional, legal, financial or employment advice.
              </p>
              <p>
                All recruitment decisions remain subject to appropriate human review and oversight.
              </p>
            </div>
          </section>

          {/* 5. Job Vacancies */}
          <section className="terms-section">
            <h2 className="text-xl md:text-2xl font-bold font-heading text-black mb-4">
              5. Job Vacancies
            </h2>
            <div className="space-y-4 text-base md:text-lg text-gray-800 leading-relaxed">
              <p>
                Job advertisements displayed on this website are provided for information purposes only.
              </p>
              <p>
                RDUK reserves the right to amend, withdraw or close vacancies without notice.
              </p>
              <p>
                Submission of an application does not guarantee employment, interview or placement.
              </p>
            </div>
          </section>

          {/* 6. User Responsibilities */}
          <section className="terms-section">
            <h2 className="text-xl md:text-2xl font-bold font-heading text-black mb-4">
              6. User Responsibilities
            </h2>
            <div className="space-y-4 text-base md:text-lg text-gray-800 leading-relaxed">
              <p>
                Users agree not to:
              </p>
              <ul className="space-y-3 mt-2 pl-2">
                {[
                  "Use the website unlawfully.",
                  "Submit false or misleading information.",
                  "Upload malicious software, viruses or harmful code.",
                  "Attempt unauthorised access to systems or data.",
                  "Interfere with website functionality or security."
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-gray-800">
                    <span className="w-1.5 h-1.5 bg-blue-600 rounded-full flex-shrink-0 mt-2.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* 7. Intellectual Property */}
          <section className="terms-section">
            <h2 className="text-xl md:text-2xl font-bold font-heading text-black mb-4">
              7. Intellectual Property
            </h2>
            <div className="space-y-4 text-base md:text-lg text-gray-800 leading-relaxed">
              <p>
                All content on this website, including text, graphics, branding, logos, designs, software and documentation, is owned by or licensed to Recruitment Direct UK Limited unless otherwise stated.
              </p>
              <p>
                Content may not be copied, reproduced, distributed or used without prior written permission.
              </p>
            </div>
          </section>

          {/* 8. Third-Party Links */}
          <section className="terms-section">
            <h2 className="text-xl md:text-2xl font-bold font-heading text-black mb-4">
              8. Third-Party Links
            </h2>
            <div className="space-y-4 text-base md:text-lg text-gray-800 leading-relaxed">
              <p>
                This website may contain links to third-party websites.
              </p>
              <p>
                RDUK has no control over third-party websites and accepts no responsibility for their content, services or privacy practices.
              </p>
              <p>
                Users access third-party websites at their own risk.
              </p>
            </div>
          </section>

          {/* 9. Limitation of Liability */}
          <section className="terms-section">
            <h2 className="text-xl md:text-2xl font-bold font-heading text-black mb-4">
              9. Limitation of Liability
            </h2>
            <div className="space-y-4 text-base md:text-lg text-gray-800 leading-relaxed">
              <p>
                To the fullest extent permitted by law, Recruitment Direct UK Limited shall not be liable for any loss, damage, costs or expenses arising directly or indirectly from:
              </p>
              <ul className="space-y-3 mt-2 pl-2">
                {[
                  "Use of this website.",
                  "Reliance upon information contained on this website.",
                  "Temporary website unavailability.",
                  "Technical issues, interruptions or errors.",
                  "AI-generated content or automated communications."
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-gray-800">
                    <span className="w-1.5 h-1.5 bg-blue-600 rounded-full flex-shrink-0 mt-2.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-4">
                Nothing in these Terms of Use excludes liability where such exclusion is prohibited by law.
              </p>
            </div>
          </section>

          {/* 10. Privacy and Cookies */}
          <section className="terms-section">
            <h2 className="text-xl md:text-2xl font-bold font-heading text-black mb-4">
              10. Privacy and Cookies
            </h2>
            <div className="space-y-4 text-base md:text-lg text-gray-800 leading-relaxed">
              <p>
                Use of this website is also governed by our:
              </p>
              <ul className="space-y-3 mt-2 pl-2">
                <li>
                  <a href="/privacy-policy" className="text-blue-600 hover:underline">Privacy Policy</a>
                </li>
                <li>
                  <a href="/cookie-policy" className="text-blue-600 hover:underline">Cookie Policy</a>
                </li>
              </ul>
              <p className="mt-4">
                Users should review these documents before providing personal information.
              </p>
            </div>
          </section>

          {/* 11. Changes to These Terms */}
          <section className="terms-section">
            <h2 className="text-xl md:text-2xl font-bold font-heading text-black mb-4">
              11. Changes to These Terms
            </h2>
            <div className="space-y-4 text-base md:text-lg text-gray-800 leading-relaxed">
              <p>
                Recruitment Direct UK Limited reserves the right to amend these Terms of Use at any time.
              </p>
              <p>
                Updated versions will be published on this website and become effective immediately upon publication.
              </p>
            </div>
          </section>

          {/* 12. Governing Law */}
          <section className="terms-section">
            <h2 className="text-xl md:text-2xl font-bold font-heading text-black mb-4">
              12. Governing Law
            </h2>
            <div className="space-y-4 text-base md:text-lg text-gray-800 leading-relaxed">
              <p>
                These Terms of Use shall be governed by and interpreted in accordance with the laws of Scotland.
              </p>
              <p>
                Any disputes arising from the use of this website shall be subject to the exclusive jurisdiction of the Scottish courts.
              </p>
            </div>
          </section>

          {/* Director Approval Box */}
          <section className="bg-gray-50 border border-gray-200 rounded-xl p-8 mt-12 space-y-4">
            <h3 className="text-lg font-bold text-gray-900 border-b border-gray-200 pb-2">
              Director Approval
            </h3>
            <p className="text-base text-gray-800 leading-relaxed italic">
              I confirm that these Website Terms of Use have been reviewed and approved on behalf of Recruitment Direct UK Limited.
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
        
        .terms-container h1,
        .terms-container h2,
        .terms-container h3,
        .terms-container p,
        .terms-container li,
        .terms-container span {
          color: #000000 !important;
        }

        .terms-container h1 {
          line-height: 1.25 !important;
        }

        .terms-container h2 {
          line-height: 1.35 !important;
        }

        .terms-section {
          border-bottom: 1px solid #e5e7eb;
          padding-bottom: 2rem;
        }

        .terms-section:last-child {
          border-bottom: none;
          padding-bottom: 0;
        }
      `}</style>
    </div>
  );
}
