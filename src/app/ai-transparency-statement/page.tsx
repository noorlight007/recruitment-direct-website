"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingElements from "@/components/FloatingElements";

export default function AITransparencyStatementPage() {
  return (
    <div className="min-h-screen bg-white text-black flex flex-col font-sans">
      <FloatingElements />
      <Navbar />

      <main className="flex-grow pt-[120px] md:pt-[160px] pb-20 px-6 max-w-4xl mx-auto w-full ai-transparency-container">
        {/* Page Title */}
        <h1 className="text-3xl md:text-5xl font-bold font-heading text-black mb-6 tracking-tight">
          AI Transparency Statement
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-xl font-medium text-gray-900 mb-8 border-l-4 border-blue-600 pl-4 py-1 leading-relaxed">
          Recruitment Direct UK Ltd uses AI-supported recruitment technology to improve speed, communication, organisation and efficiency across parts of our recruitment process.
        </p>

        {/* Introduction */}
        <div className="space-y-4 text-base md:text-lg text-gray-800 mb-12 leading-relaxed">
          <p>
            We believe it is important to be clear about how AI is used, what it supports and where human review remains in place.
          </p>
          <p>
            Our AI tools are designed to support our consultant team, not replace human judgement.
          </p>
        </div>

        {/* Sections */}
        <div className="space-y-12">
          {/* Purpose of This Statement */}
          <section className="ai-transparency-section">
            <h2 className="text-xl md:text-2xl font-bold font-heading text-black mb-4">
              Purpose of This Statement
            </h2>
            <div className="space-y-4 text-base md:text-lg text-gray-800 leading-relaxed">
              <p>
                The purpose of this statement is to explain how Recruitment Direct UK Ltd uses AI-supported tools within its recruitment workflows.
              </p>
              <p>
                This statement applies to AI-supported activity connected with:
              </p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-2 pl-2">
                {[
                  "Staff orders and enquiries",
                  "Applicant matching",
                  "Applicant communication",
                  "Screening questions",
                  "Document collection",
                  "Compliance workflow support",
                  "CRM updates",
                  "Consultant review preparation",
                  "Recruitment administration"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-gray-800">
                    <span className="w-1.5 h-1.5 bg-blue-600 rounded-full flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* How We Use AI */}
          <section className="ai-transparency-section">
            <h2 className="text-xl md:text-2xl font-bold font-heading text-black mb-4">
              How We Use AI
            </h2>
            <div className="space-y-4 text-base md:text-lg text-gray-800 leading-relaxed">
              <p>
                Recruitment Direct UK Ltd uses AI to help organise information, reduce manual administration and speed up parts of the recruitment process.
              </p>
              <p>
                AI-supported workflows may assist with:
              </p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-2 pl-2">
                {[
                  "Matching staffing requirements to applicant information",
                  "Supporting AI Candidate Skill Search",
                  "Contacting applicants quickly",
                  "Asking role-specific screening questions",
                  "Organising screening responses",
                  "Supporting document upload workflows",
                  "Helping identify missing information",
                  "Supporting compliance record organisation",
                  "Updating recruitment workflow information for consultant review"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-gray-800">
                    <span className="w-1.5 h-1.5 bg-blue-600 rounded-full flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-4">
                AI helps our team work faster and more consistently, particularly where roles are urgent or where applicants need to be contacted quickly.
              </p>
            </div>
          </section>

          {/* AI Hire Now and AI Candidate Skill Search */}
          <section className="ai-transparency-section">
            <h2 className="text-xl md:text-2xl font-bold font-heading text-black mb-4">
              AI Hire Now and AI Candidate Skill Search
            </h2>
            <div className="space-y-4 text-base md:text-lg text-gray-800 leading-relaxed">
              <p>
                When an AI Hire Now staff order or enquiry is submitted, it triggers AI Candidate Skill Search 24/7.
              </p>
              <p>
                This helps match the staffing requirement against applicant information such as skills, experience, location, availability, tickets and licences.
              </p>
              <p>
                The purpose is to identify suitable applicants earlier in the process so that consultants can review potential matches faster.
              </p>
              <p>
                AI Candidate Skill Search supports the recruitment process, but it does not make the final hiring, submission or placement decision.
              </p>
            </div>
          </section>

          {/* Consultant-Led Decision Making */}
          <section className="ai-transparency-section">
            <h2 className="text-xl md:text-2xl font-bold font-heading text-black mb-4">
              Consultant-Led Decision Making
            </h2>
            <div className="space-y-4 text-base md:text-lg text-gray-800 leading-relaxed">
              <p>
                Recruitment Direct UK Ltd remains a consultant-led recruitment business.
              </p>
              <p>
                AI supports the process, but our consultants remain responsible for:
              </p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-2 pl-2">
                {[
                  "Reviewing applicant suitability",
                  "Checking client requirements",
                  "Reviewing screening information",
                  "Confirming compliance information",
                  "Preparing submissions",
                  "Speaking with clients and applicants",
                  "Confirming placements",
                  "Managing assignments and ongoing support"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-gray-800">
                    <span className="w-1.5 h-1.5 bg-blue-600 rounded-full flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-4 font-semibold">
                AI does not replace consultant judgement.
              </p>
              <p>
                No applicant is submitted or placed solely because of an AI result. Final review remains with Recruitment Direct UK Ltd’s consultant and compliance team.
              </p>
            </div>
          </section>

          {/* Applicant Communication and Screening */}
          <section className="ai-transparency-section">
            <h2 className="text-xl md:text-2xl font-bold font-heading text-black mb-4">
              Applicant Communication and Screening
            </h2>
            <div className="space-y-4 text-base md:text-lg text-gray-800 leading-relaxed">
              <p>
                AI-supported tools may be used to contact applicants, ask role-specific screening questions and organise responses for consultant review.
              </p>
              <p>
                This helps improve response times and supports screening outside normal office hours.
              </p>
              <p>
                Screening information may include:
              </p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-2 pl-2">
                {[
                  "Availability",
                  "Experience",
                  "Skills",
                  "Tickets or licences",
                  "Location",
                  "Transport",
                  "Shift preference",
                  "Role-specific requirements",
                  "Document status"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-gray-800">
                    <span className="w-1.5 h-1.5 bg-blue-600 rounded-full flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-4">
                This information helps consultants review suitability more quickly and decide the next step in the recruitment process.
              </p>
            </div>
          </section>

          {/* Compliance Workflow Support */}
          <section className="ai-transparency-section">
            <h2 className="text-xl md:text-2xl font-bold font-heading text-black mb-4">
              Compliance Workflow Support
            </h2>
            <div className="space-y-4 text-base md:text-lg text-gray-800 leading-relaxed">
              <p>
                Recruitment Direct UK Ltd uses AI-supported compliance workflows to help organise recruitment and compliance information.
              </p>
              <p>
                This may include support for:
              </p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-2 pl-2">
                {[
                  "Right-to-work review preparation",
                  "GDPR workflow organisation",
                  "AWR compliance workflow support",
                  "Document checking support",
                  "Missing document prompts",
                  "Audit trail visibility",
                  "Assignment information organisation"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-gray-800">
                    <span className="w-1.5 h-1.5 bg-blue-600 rounded-full flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-4">
                AI helps organise information for review, but compliance decisions remain subject to human checking.
              </p>
            </div>
          </section>

          {/* Data Handling and Privacy */}
          <section className="ai-transparency-section">
            <h2 className="text-xl md:text-2xl font-bold font-heading text-black mb-4">
              Data Handling and Privacy
            </h2>
            <div className="space-y-4 text-base md:text-lg text-gray-800 leading-relaxed">
              <p>
                Recruitment Direct UK Ltd handles personal data in line with its data protection and privacy processes.
              </p>
              <p>
                AI-supported workflows are used to support recruitment administration, communication and review preparation. Personal data is handled only where it is relevant to the recruitment process, client requirement, compliance check or assignment management.
              </p>
              <p>
                We aim to ensure that applicant and client information is handled responsibly, securely and only for legitimate recruitment and business purposes.
              </p>
              <p className="text-gray-500 text-sm">
                For more information, please refer to our Privacy Policy and Data Protection Policy.
              </p>
            </div>
          </section>

          {/* Fairness and Human Review */}
          <section className="ai-transparency-section">
            <h2 className="text-xl md:text-2xl font-bold font-heading text-black mb-4">
              Fairness and Human Review
            </h2>
            <div className="space-y-4 text-base md:text-lg text-gray-800 leading-relaxed">
              <p>
                Recruitment Direct UK Ltd aims to use AI responsibly and fairly.
              </p>
              <p>
                AI-supported tools help organise information and support faster review, but they do not remove the need for human judgement.
              </p>
              <p>
                Our process is designed so that consultants can review information before decisions are made about applicant suitability, client submission or placement.
              </p>
              <p>
                Applicants can contact Recruitment Direct UK Ltd if they have questions about the recruitment process or information held about them.
              </p>
            </div>
          </section>

          {/* Limitations of AI */}
          <section className="ai-transparency-section">
            <h2 className="text-xl md:text-2xl font-bold font-heading text-black mb-4">
              Limitations of AI
            </h2>
            <div className="space-y-4 text-base md:text-lg text-gray-800 leading-relaxed">
              <p>
                AI-supported tools are not perfect and may require human checking.
              </p>
              <p>
                Recruitment Direct UK Ltd recognises that AI outputs may need to be reviewed, corrected or verified before being relied upon.
              </p>
              <p>
                That is why our process keeps consultants involved in the review of applicant information, compliance records, client requirements and placement decisions.
              </p>
            </div>
          </section>

          {/* Responsible Use of AI */}
          <section className="ai-transparency-section">
            <h2 className="text-xl md:text-2xl font-bold font-heading text-black mb-4">
              Responsible Use of AI
            </h2>
            <div className="space-y-4 text-base md:text-lg text-gray-800 leading-relaxed">
              <p>
                Recruitment Direct UK Ltd’s approach to AI is based on:
              </p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-2 pl-2">
                {[
                  "Improving recruitment speed",
                  "Reducing repetitive administration",
                  "Supporting faster applicant contact",
                  "Keeping consultants in control of decisions",
                  "Maintaining compliance review points",
                  "Supporting clearer records and audit visibility",
                  "Using AI as a support tool, not as a replacement for human judgement"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-gray-800">
                    <span className="w-1.5 h-1.5 bg-blue-600 rounded-full flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* Policy Review */}
          <section className="ai-transparency-section">
            <h2 className="text-xl md:text-2xl font-bold font-heading text-black mb-4">
              Policy Review
            </h2>
            <div className="space-y-4 text-base md:text-lg text-gray-800 leading-relaxed">
              <p>
                This AI Transparency Statement is effective from 10 June 2026 and will be reviewed annually, or sooner if required due to changes in law, regulation, guidance or Recruitment Direct UK Ltd business processes.
              </p>
            </div>
          </section>

          {/* Contact Us */}
          <section className="ai-transparency-section">
            <h2 className="text-xl md:text-2xl font-bold font-heading text-black mb-4">
              Contact Us
            </h2>
            <div className="space-y-4 text-base md:text-lg text-gray-800 leading-relaxed">
              <p>
                For questions about this AI Transparency Statement or how AI is used within our recruitment process, please contact:
              </p>
              <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 text-sm md:text-base">
                <p className="font-semibold text-black">Recruitment Direct UK Ltd</p>
                <p>Herkimer House</p>
                <p>Mill Road Industrial Estate</p>
                <p>Linlithgow</p>
                <p>EH49 7SF</p>
                <p>Scotland</p>
                <p>United Kingdom</p>
                <p className="mt-4"><strong>Email:</strong> <a href="mailto:accounts@rd1.co.uk" className="text-blue-600 hover:underline">accounts@rd1.co.uk</a></p>
                <p><strong>Phone:</strong> <a href="tel:01324613198" className="text-blue-600 hover:underline">01324 613198</a></p>
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
        
        .ai-transparency-container h1,
        .ai-transparency-container h2,
        .ai-transparency-container h3,
        .ai-transparency-container p,
        .ai-transparency-container li,
        .ai-transparency-container span {
          color: #000000 !important;
        }

        .ai-transparency-section {
          border-bottom: 1px solid #e5e7eb;
          padding-bottom: 2rem;
        }

        .ai-transparency-section:last-child {
          border-bottom: none;
          padding-bottom: 0;
        }
      `}</style>
    </div>
  );
}
