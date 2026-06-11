"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingElements from "@/components/FloatingElements";

export default function BiasFairnessStatementPage() {
  return (
    <div className="min-h-screen bg-white text-black flex flex-col font-sans">
      <FloatingElements />
      <Navbar />

      <main className="flex-grow pt-[20px] md:pt-[40px] pb-20 px-6 max-w-4xl mx-auto w-full bias-fairness-container">
        {/* Page Title */}
        <h1 className="text-3xl md:text-5xl font-bold font-heading text-black mb-6 tracking-tight">
          Bias and Fairness Statement
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-xl font-medium text-gray-900 mb-8 border-l-4 border-blue-600 pl-4 py-1 leading-relaxed">
          Recruitment Direct UK Ltd is committed to fair, responsible and professional recruitment.
        </p>

        {/* Introduction */}
        <div className="space-y-4 text-base md:text-lg text-gray-800 mb-12 leading-relaxed">
          <p>
            We use AI-supported recruitment technology to improve speed, organisation and applicant matching, but our recruitment process remains consultant-led. AI supports our team by helping organise information and identify potential matches, but it does not replace human judgement.
          </p>
          <p>
            This statement explains our approach to bias, fairness and responsible review within our recruitment process.
          </p>
        </div>

        {/* Sections */}
        <div className="space-y-12">
          {/* Purpose of This Statement */}
          <section className="bias-fairness-section">
            <h2 className="text-xl md:text-2xl font-bold font-heading text-black mb-4">
              Purpose of This Statement
            </h2>
            <div className="space-y-4 text-base md:text-lg text-gray-800 leading-relaxed">
              <p>
                The purpose of this statement is to explain how Recruitment Direct UK Ltd approaches fairness when using AI-supported recruitment workflows.
              </p>
              <p>
                This applies to areas including:
              </p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-2 pl-2">
                {[
                  "Applicant matching",
                  "Applicant communication",
                  "Screening questions",
                  "Document collection",
                  "Compliance workflows",
                  "Consultant review",
                  "Client submission",
                  "Placement decisions"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-gray-800">
                    <span className="w-1.5 h-1.5 bg-blue-600 rounded-full flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* Fair Recruitment Principles */}
          <section className="bias-fairness-section">
            <h2 className="text-xl md:text-2xl font-bold font-heading text-black mb-4">
              Fair Recruitment Principles
            </h2>
            <div className="space-y-4 text-base md:text-lg text-gray-800 leading-relaxed">
              <p>
                Recruitment Direct UK Ltd aims to treat applicants fairly and consistently throughout the recruitment process.
              </p>
              <p>
                Our recruitment process is based on relevant role requirements such as:
              </p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-2 pl-2">
                {[
                  "Skills",
                  "Experience",
                  "Availability",
                  "Location",
                  "Tickets",
                  "Licences",
                  "Qualifications",
                  "Right-to-work status",
                  "Role-specific requirements",
                  "Client assignment requirements"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-gray-800">
                    <span className="w-1.5 h-1.5 bg-blue-600 rounded-full flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-4">
                We do not make recruitment decisions based on irrelevant personal characteristics.
              </p>
            </div>
          </section>

          {/* AI-Supported Matching */}
          <section className="bias-fairness-section">
            <h2 className="text-xl md:text-2xl font-bold font-heading text-black mb-4">
              AI-Supported Matching
            </h2>
            <div className="space-y-4 text-base md:text-lg text-gray-800 leading-relaxed">
              <p>
                AI Candidate Skill Search helps match staffing requirements against applicant information, including skills, experience, location, availability, tickets and licences.
              </p>
              <p>
                This helps identify suitable applicants faster and supports consultant review.
              </p>
              <p>
                AI Candidate Skill Search does not make the final decision on whether an applicant is submitted or placed.
              </p>
              <p>
                Potential matches are reviewed by Recruitment Direct UK Ltd’s consultant team before any applicant is progressed.
              </p>
            </div>
          </section>

          {/* Human Review and Fairness */}
          <section className="bias-fairness-section">
            <h2 className="text-xl md:text-2xl font-bold font-heading text-black mb-4">
              Human Review and Fairness
            </h2>
            <div className="space-y-4 text-base md:text-lg text-gray-800 leading-relaxed">
              <p>
                Human review is an important part of reducing unfair outcomes.
              </p>
              <p>
                Our consultants review applicant information, screening responses and client requirements before decisions are made about submission or placement.
              </p>
              <p>
                This helps ensure that AI-supported outputs are checked, relevant information is considered and applicants are reviewed against the actual requirements of the role.
              </p>
              <p className="font-semibold text-black">
                No applicant is submitted, rejected or placed solely because of an AI result.
              </p>
            </div>
          </section>

          {/* Screening Questions */}
          <section className="bias-fairness-section">
            <h2 className="text-xl md:text-2xl font-bold font-heading text-black mb-4">
              Screening Questions
            </h2>
            <div className="space-y-4 text-base md:text-lg text-gray-800 leading-relaxed">
              <p>
                Where screening questions are used, they are designed to relate to the role or assignment.
              </p>
              <p>
                Screening may cover relevant matters such as:
              </p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-2 pl-2">
                {[
                  "Work experience",
                  "Skills",
                  "Tickets or licences",
                  "Availability",
                  "Location",
                  "Transport",
                  "Shift preference",
                  "Compliance requirements",
                  "Role-specific duties"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-gray-800">
                    <span className="w-1.5 h-1.5 bg-blue-600 rounded-full flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-4">
                The purpose of screening is to help consultants assess suitability for the role, not to unfairly exclude applicants.
              </p>
            </div>
          </section>

          {/* Preventing Unfair Bias */}
          <section className="bias-fairness-section">
            <h2 className="text-xl md:text-2xl font-bold font-heading text-black mb-4">
              Preventing Unfair Bias
            </h2>
            <div className="space-y-4 text-base md:text-lg text-gray-800 leading-relaxed">
              <p>
                Recruitment Direct UK Ltd recognises that bias can occur in recruitment processes, including manual and technology-supported processes.
              </p>
              <p>
                Our approach to reducing unfair bias includes:
              </p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-2 pl-2">
                {[
                  "Keeping consultants involved in final decisions",
                  "Reviewing AI-supported matches before submission or placement",
                  "Using role-relevant criteria",
                  "Avoiding unnecessary personal information in decision-making",
                  "Keeping screening questions linked to the vacancy",
                  "Maintaining compliance review points",
                  "Supporting clear recruitment records and audit visibility"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-gray-800">
                    <span className="w-1.5 h-1.5 bg-blue-600 rounded-full flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* Protected Characteristics */}
          <section className="bias-fairness-section">
            <h2 className="text-xl md:text-2xl font-bold font-heading text-black mb-4">
              Protected Characteristics
            </h2>
            <div className="space-y-4 text-base md:text-lg text-gray-800 leading-relaxed">
              <p>
                Recruitment Direct UK Ltd does not make recruitment decisions based on protected characteristics.
              </p>
              <p>
                Protected characteristics under the Equality Act 2010 include age, disability, gender reassignment, marriage and civil partnership, pregnancy and maternity, race, religion or belief, sex and sexual orientation.
              </p>
              <p>
                Applicants are assessed against the requirements of the role, client assignment and relevant compliance obligations.
              </p>
            </div>
          </section>

          {/* Client Requirements */}
          <section className="bias-fairness-section">
            <h2 className="text-xl md:text-2xl font-bold font-heading text-black mb-4">
              Client Requirements
            </h2>
            <div className="space-y-4 text-base md:text-lg text-gray-800 leading-relaxed">
              <p>
                Clients are expected to provide role requirements that are lawful, relevant and connected to the work being performed.
              </p>
              <p>
                Recruitment Direct UK Ltd will not knowingly support discriminatory requirements.
              </p>
              <p>
                Where a client requirement raises fairness or compliance concerns, our team may ask for clarification, challenge the requirement or refuse to proceed where appropriate.
              </p>
            </div>
          </section>

          {/* Applicant Questions and Review */}
          <section className="bias-fairness-section">
            <h2 className="text-xl md:text-2xl font-bold font-heading text-black mb-4">
              Applicant Questions and Review
            </h2>
            <div className="space-y-4 text-base md:text-lg text-gray-800 leading-relaxed">
              <p>
                Applicants can contact Recruitment Direct UK Ltd if they have questions about the recruitment process, screening responses or the outcome of an application.
              </p>
              <p>
                Where appropriate, applicants can ask for relevant information to be reviewed by a member of our team.
              </p>
            </div>
          </section>

          {/* Responsible Use of AI */}
          <section className="bias-fairness-section">
            <h2 className="text-xl md:text-2xl font-bold font-heading text-black mb-4">
              Responsible Use of AI
            </h2>
            <div className="space-y-4 text-base md:text-lg text-gray-800 leading-relaxed">
              <p>
                Recruitment Direct UK Ltd uses AI as a support tool, not as a replacement for human judgement.
              </p>
              <p>
                Our responsible approach is based on:
              </p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-2 pl-2">
                {[
                  "Consultant-led review",
                  "Role-relevant screening",
                  "Human oversight before submission or placement",
                  "Clear compliance checks",
                  "Organised recruitment records",
                  "Audit trail visibility",
                  "Fair and consistent treatment of applicants"
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
          <section className="bias-fairness-section">
            <h2 className="text-xl md:text-2xl font-bold font-heading text-black mb-4">
              Policy Review
            </h2>
            <div className="space-y-4 text-base md:text-lg text-gray-800 leading-relaxed">
              <p>
                This Bias and Fairness Statement is effective from 10 June 2026 and will be reviewed annually, or sooner if required due to changes in law, regulation, guidance or Recruitment Direct UK Ltd business processes.
              </p>
            </div>
          </section>

          {/* Contact Us */}
          <section className="bias-fairness-section">
            <h2 className="text-xl md:text-2xl font-bold font-heading text-black mb-4">
              Contact Us
            </h2>
            <div className="space-y-4 text-base md:text-lg text-gray-800 leading-relaxed">
              <p>
                For questions about this Bias and Fairness Statement or fairness in our recruitment process, please contact:
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
        
        .bias-fairness-container h1,
        .bias-fairness-container h2,
        .bias-fairness-container h3,
        .bias-fairness-container p,
        .bias-fairness-container li,
        .bias-fairness-container span {
          color: #000000 !important;
        }

        .bias-fairness-section {
          border-bottom: 1px solid #e5e7eb;
          padding-bottom: 2rem;
        }

        .bias-fairness-section:last-child {
          border-bottom: none;
          padding-bottom: 0;
        }
      `}</style>
    </div>
  );
}
