"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingElements from "@/components/FloatingElements";

export default function AWRPolicyPage() {
  return (
    <div className="min-h-screen bg-white text-black flex flex-col font-sans">
      <FloatingElements />
      <Navbar />

      <main className="flex-grow pt-[120px] md:pt-[160px] pb-20 px-6 max-w-4xl mx-auto w-full awr-container">
        {/* Page Title */}
        <h1 className="text-3xl md:text-5xl font-bold font-heading text-black mb-6 tracking-tight">
          Agency Workers Regulations
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-xl font-medium text-gray-900 mb-8 border-l-4 border-blue-600 pl-4 py-1 leading-relaxed">
          Recruitment Direct UK Ltd supports clients with Agency Workers Regulations compliance as part of our temporary recruitment service.
        </p>

        {/* Introduction */}
        <p className="text-base md:text-lg text-gray-800 mb-12 leading-relaxed">
          The Agency Workers Regulations 2010, commonly known as AWR, apply to temporary agency workers supplied to hirers in Great Britain. The regulations are designed to make sure agency workers receive certain rights from the start of an assignment and, after a qualifying period, equal treatment in relation to basic working and employment conditions. <span className="text-gray-500 text-sm">(GOV.UK)</span>
        </p>

        {/* Sections */}
        <div className="space-y-12">
          {/* What AWR Means */}
          <section className="awr-section">
            <h2 className="text-xl md:text-2xl font-bold font-heading text-black mb-4">
              What AWR Means
            </h2>
            <div className="space-y-4 text-base md:text-lg text-gray-800 leading-relaxed">
              <p>
                AWR gives agency workers certain rights when they are supplied by a temporary work agency to work under the supervision and direction of a hirer.
              </p>
              <p>
                From day one of an assignment, agency workers are entitled to access certain workplace facilities and information on relevant job vacancies. After 12 weeks in the same role with the same hirer, agency workers qualify for equal treatment in relation to pay and basic working conditions, subject to the rules of the regulations. <span className="text-gray-500 text-sm">(GOV.UK)</span>
              </p>
            </div>
          </section>

          {/* The 12-Week Qualifying Period */}
          <section className="awr-section">
            <h2 className="text-xl md:text-2xl font-bold font-heading text-black mb-4">
              The 12-Week Qualifying Period
            </h2>
            <div className="space-y-4 text-base md:text-lg text-gray-800 leading-relaxed">
              <p>
                The 12-week qualifying period is a key part of AWR.
              </p>
              <p>
                After an agency worker has completed 12 weeks in the same role with the same hirer, they qualify for equal treatment on relevant pay and basic working conditions as if they had been recruited directly by the hirer for that role. <span className="text-gray-500 text-sm">(GOV.UK)</span>
              </p>
              <p>
                This makes it important for clients and agencies to share accurate information about assignments, pay, working hours, breaks, holiday entitlement and other relevant working conditions.
              </p>
            </div>
          </section>

          {/* How RDUK Supports AWR Compliance */}
          <section className="awr-section">
            <h2 className="text-xl md:text-2xl font-bold font-heading text-black mb-4">
              How RDUK Supports AWR Compliance
            </h2>
            <div className="space-y-4 text-base md:text-lg text-gray-800 leading-relaxed">
              <p>
                Recruitment Direct UK Ltd supports clients by helping organise the information needed to manage AWR responsibilities correctly.
              </p>
              <p>
                Our process can support:
              </p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-2 pl-2">
                {[
                  "Assignment tracking",
                  "Worker assignment records",
                  "Pay and working time information",
                  "Role and location details",
                  "Hirer information",
                  "Relevant basic working conditions",
                  "AWR review points",
                  "Compliance audit trail records",
                  "Consultant-led review"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-gray-800">
                    <span className="w-1.5 h-1.5 bg-blue-600 rounded-full flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-4">
                RDUK uses AI-supported AWR compliance workflows to help organise relevant assignment and worker information for consultant and compliance review.
              </p>
            </div>
          </section>

          {/* Client Information Required */}
          <section className="awr-section">
            <h2 className="text-xl md:text-2xl font-bold font-heading text-black mb-4">
              Client Information Required
            </h2>
            <div className="space-y-4 text-base md:text-lg text-gray-800 leading-relaxed">
              <p>
                To support AWR compliance, clients may be asked to provide relevant information about the role and comparable working conditions.
              </p>
              <p>
                This can include:
              </p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-2 pl-2">
                {[
                  "Job title and duties",
                  "Assignment location",
                  "Start date and shift pattern",
                  "Pay rate and overtime arrangements",
                  "Working hours",
                  "Breaks",
                  "Holiday entitlement",
                  "Bonus or commission information where relevant",
                  "Comparable role information",
                  "Site or department details"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-gray-800">
                    <span className="w-1.5 h-1.5 bg-blue-600 rounded-full flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-4">
                Having this information early helps reduce delays and supports a clearer compliance process.
              </p>
            </div>
          </section>

          {/* Consultant-Led Compliance Review */}
          <section className="awr-section">
            <h2 className="text-xl md:text-2xl font-bold font-heading text-black mb-4">
              Consultant-Led Compliance Review
            </h2>
            <div className="space-y-4 text-base md:text-lg text-gray-800 leading-relaxed">
              <p>
                AI-supported workflows help organise AWR information, but final review remains consultant-led.
              </p>
              <p>
                Our consultant and compliance team review assignment details, worker records and client information before making decisions or updates linked to AWR.
              </p>
              <p>
                This helps combine speed, structure and human oversight throughout the recruitment process.
              </p>
            </div>
          </section>

          {/* Why AWR Compliance Matters */}
          <section className="awr-section">
            <h2 className="text-xl md:text-2xl font-bold font-heading text-black mb-4">
              Why AWR Compliance Matters
            </h2>
            <div className="space-y-4 text-base md:text-lg text-gray-800 leading-relaxed">
              <p>
                AWR compliance protects agency workers and helps clients manage temporary labour responsibly.
              </p>
              <p>
                For clients, a clear AWR process helps support:
              </p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-2 pl-2">
                {[
                  "Better assignment records",
                  "Clearer pay and working condition information",
                  "Reduced compliance risk",
                  "Stronger audit visibility",
                  "More professional temporary labour supply",
                  "Better communication between client, agency and worker"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-gray-800">
                    <span className="w-1.5 h-1.5 bg-blue-600 rounded-full flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* Our Approach */}
          <section className="awr-section">
            <h2 className="text-xl md:text-2xl font-bold font-heading text-black mb-4">
              Our Approach
            </h2>
            <div className="space-y-4 text-base md:text-lg text-gray-800 leading-relaxed">
              <p>
                Recruitment Direct UK Ltd is committed to responsible temporary recruitment.
              </p>
              <p>
                We work with clients to keep assignment information clear, support AWR review points and maintain structured compliance records throughout the recruitment process.
              </p>
              <p className="text-gray-500 text-sm italic">
                For specific legal advice on Agency Workers Regulations, clients should seek independent legal guidance.
              </p>
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
        
        .awr-container h1,
        .awr-container h2,
        .awr-container h3,
        .awr-container p,
        .awr-container li,
        .awr-container span {
          color: #000000 !important;
        }

        .awr-section {
          border-bottom: 1px solid #e5e7eb;
          padding-bottom: 2rem;
        }

        .awr-section:last-child {
          border-bottom: none;
          padding-bottom: 0;
        }
      `}</style>
    </div>
  );
}
