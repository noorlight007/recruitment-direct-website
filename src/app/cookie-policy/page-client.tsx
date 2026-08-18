"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingElements from "@/components/FloatingElements";

export default function CookiePolicyPage() {
  return (
    <div className="min-h-screen bg-white text-black flex flex-col font-sans">
      <FloatingElements />
      <Navbar />

      <main className="flex-grow pt-[20px] md:pt-[40px] pb-20 px-6 max-w-4xl mx-auto w-full cp-container">
        {/* Page Title */}
        <h1 className="text-3xl md:text-5xl font-bold font-heading text-black mb-6 tracking-tight">
          Cookie Policy
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
          <section className="cp-section">
            <h2 className="text-xl md:text-2xl font-bold font-heading text-black mb-4">
              1. Introduction
            </h2>
            <div className="space-y-4 text-base md:text-lg text-gray-800 leading-relaxed">
              <p>
                This Cookie Policy explains how Recruitment Direct UK Limited (&ldquo;RDUK&rdquo;, &ldquo;we&rdquo;, &ldquo;our&rdquo; or &ldquo;us&rdquo;) uses cookies and similar technologies on our website.
              </p>
              <p>
                By continuing to use our website, you agree to the use of cookies in accordance with this policy, subject to your cookie preferences.
              </p>
            </div>
          </section>

          {/* 2. What Are Cookies? */}
          <section className="cp-section">
            <h2 className="text-xl md:text-2xl font-bold font-heading text-black mb-4">
              2. What Are Cookies?
            </h2>
            <div className="space-y-4 text-base md:text-lg text-gray-800 leading-relaxed">
              <p>
                Cookies are small text files stored on your device when you visit a website.
              </p>
              <p>
                They help websites function efficiently, remember preferences, improve user experience and provide information about how visitors interact with the website.
              </p>
            </div>
          </section>

          {/* 3. Types of Cookies We Use */}
          <section className="cp-section">
            <h2 className="text-xl md:text-2xl font-bold font-heading text-black mb-4">
              3. Types of Cookies We Use
            </h2>
            <div className="space-y-6 text-base md:text-lg text-gray-800 leading-relaxed">
              <div>
                <h3 className="font-bold text-gray-900 mb-2">Essential Cookies</h3>
                <p className="mb-2">These cookies are necessary for the operation of the website and cannot be disabled. Examples include:</p>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-2 pl-2">
                  {[
                    "Security cookies",
                    "Session management cookies",
                    "Form submission functionality",
                    "Authentication services"
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-gray-800">
                      <span className="w-1.5 h-1.5 bg-blue-600 rounded-full flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="font-bold text-gray-900 mb-2">Performance and Analytics Cookies</h3>
                <p className="mb-2">These cookies help us understand how visitors use our website and allow us to improve performance and user experience. Examples may include:</p>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-2 pl-2">
                  {[
                    "Google Analytics",
                    "Visitor behaviour monitoring",
                    "Website performance measurement",
                    "Traffic analysis"
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-gray-800">
                      <span className="w-1.5 h-1.5 bg-blue-600 rounded-full flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="font-bold text-gray-900 mb-2">Functional Cookies</h3>
                <p className="mb-2">These cookies allow the website to remember choices made by users. Examples include:</p>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-2 pl-2">
                  {[
                    "Language preferences",
                    "Form preferences",
                    "User settings"
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-gray-800">
                      <span className="w-1.5 h-1.5 bg-blue-600 rounded-full flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="font-bold text-gray-900 mb-2">Marketing Cookies</h3>
                <p className="mb-2">These cookies may be used to measure advertising effectiveness and deliver relevant content. Examples may include:</p>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-2 pl-2">
                  {[
                    "Google Ads",
                    "LinkedIn Insight Tag",
                    "Meta Pixel",
                    "Remarketing technologies"
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-gray-800">
                      <span className="w-1.5 h-1.5 bg-blue-600 rounded-full flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* 4. AI and Automated Technologies */}
          <section className="cp-section">
            <h2 className="text-xl md:text-2xl font-bold font-heading text-black mb-4">
              4. AI and Automated Technologies
            </h2>
            <div className="space-y-4 text-base md:text-lg text-gray-800 leading-relaxed">
              <p>
                Recruitment Direct UK Limited may use artificial intelligence (&ldquo;AI&rdquo;), machine learning and automated technologies in connection with its recruitment services, website functionality and communication systems.
              </p>
              <p>
                Cookies and similar technologies may be used to:
              </p>
              <ul className="space-y-3 mt-2 pl-2">
                {[
                  "Improve website performance and user experience.",
                  "Analyse visitor interactions with website content.",
                  "Support AI-assisted communication tools.",
                  "Improve recruitment service delivery.",
                  "Monitor website usage patterns and engagement.",
                  "Assist in fraud prevention, security and system optimisation."
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-gray-800">
                    <span className="w-1.5 h-1.5 bg-blue-600 rounded-full flex-shrink-0 mt-2.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-4">
                Any personal data collected through such technologies will be processed in accordance with our Privacy Policy.
              </p>
              <p>
                AI technologies are used to support business operations and do not replace appropriate human oversight where required.
              </p>
            </div>
          </section>

          {/* 5. Managing Cookies */}
          <section className="cp-section">
            <h2 className="text-xl md:text-2xl font-bold font-heading text-black mb-4">
              5. Managing Cookies
            </h2>
            <div className="space-y-4 text-base md:text-lg text-gray-800 leading-relaxed">
              <p>
                Most web browsers allow users to control cookies through browser settings.
              </p>
              <p>
                Users may:
              </p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-2 pl-2">
                {[
                  "Accept cookies.",
                  "Reject cookies.",
                  "Delete existing cookies.",
                  "Configure browser preferences."
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-gray-800">
                    <span className="w-1.5 h-1.5 bg-blue-600 rounded-full flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-4">
                Disabling certain cookies may affect website functionality.
              </p>
            </div>
          </section>

          {/* 6. Third-Party Services */}
          <section className="cp-section">
            <h2 className="text-xl md:text-2xl font-bold font-heading text-black mb-4">
              6. Third-Party Services
            </h2>
            <div className="space-y-4 text-base md:text-lg text-gray-800 leading-relaxed">
              <p>
                Our website may use third-party services which place cookies on your device.
              </p>
              <p>
                These services may include:
              </p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-2 pl-2 mb-4">
                {[
                  "Analytics providers",
                  "Recruitment software providers",
                  "Communication platforms",
                  "Social media platforms",
                  "Advertising partners"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-gray-800">
                    <span className="w-1.5 h-1.5 bg-blue-600 rounded-full flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-4">
                Users should review the privacy and cookie policies of those providers where applicable.
              </p>
            </div>
          </section>

          {/* 7. Changes to This Policy */}
          <section className="cp-section">
            <h2 className="text-xl md:text-2xl font-bold font-heading text-black mb-4">
              7. Changes to This Policy
            </h2>
            <div className="space-y-4 text-base md:text-lg text-gray-800 leading-relaxed">
              <p>
                Recruitment Direct UK Limited reserves the right to update this Cookie Policy from time to time.
              </p>
              <p>
                Any updates will be published on this website.
              </p>
            </div>
          </section>

          {/* Director Approval Box */}
          <section className="bg-gray-50 border border-gray-200 rounded-xl p-8 mt-12 space-y-4">
            <h3 className="text-lg font-bold text-gray-900 border-b border-gray-200 pb-2">
              Director Approval
            </h3>
            <p className="text-base text-gray-800 leading-relaxed italic">
              I confirm that this Cookie Policy has been reviewed and approved on behalf of Recruitment Direct UK Limited.
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
        
        .cp-container h1,
        .cp-container h2,
        .cp-container h3,
        .cp-container p,
        .cp-container li,
        .cp-container span {
          color: #000000 !important;
        }

        .cp-container h1 {
          line-height: 1.25 !important;
        }

        .cp-container h2 {
          line-height: 1.35 !important;
        }

        .cp-section {
          border-bottom: 1px solid #e5e7eb;
          padding-bottom: 2rem;
        }

        .cp-section:last-child {
          border-bottom: none;
          padding-bottom: 0;
        }
      `}</style>
    </div>
  );
}
