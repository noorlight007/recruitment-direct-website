"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingElements from "@/components/FloatingElements";

export default function HumanReviewStatementPage() {
  return (
    <div className="min-h-screen bg-white text-black flex flex-col font-sans">
      <FloatingElements />
      <Navbar />

      <main className="flex-grow pt-[20px] md:pt-[40px] pb-20 px-6 max-w-4xl mx-auto w-full human-review-container">
        {/* Page Title */}
        <h1 className="text-3xl md:text-5xl font-bold font-heading text-black mb-6 tracking-tight">
          Human Review Statement
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-xl font-medium text-gray-900 mb-8 border-l-4 border-blue-600 pl-4 py-1 leading-relaxed">
          Recruitment Direct UK Ltd uses AI-supported recruitment technology to improve speed, organisation and efficiency across parts of our recruitment process.
        </p>

        {/* Introduction */}
        <div className="space-y-4 text-base md:text-lg text-gray-800 mb-12 leading-relaxed">
          <p>
            However, our recruitment process remains consultant-led. AI supports our team, but it does not replace human judgement, consultant review or compliance checks.
          </p>
        </div>

        {/* Sections */}
        <div className="space-y-12">
          {/* Purpose of This Statement */}
          <section className="human-review-section">
            <h2 className="text-xl md:text-2xl font-bold font-heading text-black mb-4">
              Purpose of This Statement
            </h2>
            <div className="space-y-4 text-base md:text-lg text-gray-800 leading-relaxed">
              <p>
                The purpose of this statement is to make clear that human review remains in place throughout Recruitment Direct UK Ltd’s recruitment process.
              </p>
              <p>
                This applies to areas including:
              </p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-2 pl-2">
                {[
                  "Staff orders and enquiries",
                  "Applicant matching",
                  "Applicant communication",
                  "Screening responses",
                  "Document collection",
                  "Compliance workflows",
                  "Client submissions",
                  "Placement decisions",
                  "Assignment management"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-gray-800">
                    <span className="w-1.5 h-1.5 bg-blue-600 rounded-full flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* Consultant-Led Recruitment */}
          <section className="human-review-section">
            <h2 className="text-xl md:text-2xl font-bold font-heading text-black mb-4">
              Consultant-Led Recruitment
            </h2>
            <div className="space-y-4 text-base md:text-lg text-gray-800 leading-relaxed">
              <p>
                Recruitment Direct UK Ltd remains a consultant-led recruitment business.
              </p>
              <p>
                Our consultants are responsible for reviewing staffing requirements, checking applicant suitability, communicating with clients and applicants, and confirming the appropriate next steps.
              </p>
              <p>
                AI-supported tools help organise information and speed up parts of the process, but consultants remain responsible for reviewing the information before submission or placement.
              </p>
            </div>
          </section>

          {/* No Solely Automated Placement Decisions */}
          <section className="human-review-section">
            <h2 className="text-xl md:text-2xl font-bold font-heading text-black mb-4">
              No Solely Automated Placement Decisions
            </h2>
            <div className="space-y-4 text-base md:text-lg text-gray-800 leading-relaxed">
              <p>
                Recruitment Direct UK Ltd does not place applicants into roles solely because of an AI result.
              </p>
              <p>
                AI may help identify potential matches, organise screening responses or highlight missing information, but final recruitment decisions remain subject to human review.
              </p>
              <p>
                Before submission or placement, our consultant and compliance team review relevant information, including client requirements, applicant suitability and compliance status.
              </p>
            </div>
          </section>

          {/* Human Review in Applicant Matching */}
          <section className="human-review-section">
            <h2 className="text-xl md:text-2xl font-bold font-heading text-black mb-4">
              Human Review in Applicant Matching
            </h2>
            <div className="space-y-4 text-base md:text-lg text-gray-800 leading-relaxed">
              <p>
                AI Candidate Skill Search helps match staffing requirements against applicant information, including skills, experience, location, availability, tickets and licences.
              </p>
              <p>
                This helps identify suitable applicants faster.
              </p>
              <p>
                However, AI Candidate Skill Search does not make the final decision on whether an applicant is suitable for submission or placement.
              </p>
              <p>
                A consultant reviews potential matches before deciding the next step.
              </p>
            </div>
          </section>

          {/* Human Review in Screening */}
          <section className="human-review-section">
            <h2 className="text-xl md:text-2xl font-bold font-heading text-black mb-4">
              Human Review in Screening
            </h2>
            <div className="space-y-4 text-base md:text-lg text-gray-800 leading-relaxed">
              <p>
                AI-supported tools may help contact applicants, ask role-specific screening questions and organise responses.
              </p>
              <p>
                Screening responses are reviewed by the consultant team before any applicant is submitted or placed.
              </p>
              <p>
                Where further information is required, consultants can contact the applicant directly to clarify details, confirm availability or complete additional checks.
              </p>
            </div>
          </section>

          {/* Human Review in Compliance */}
          <section className="human-review-section">
            <h2 className="text-xl md:text-2xl font-bold font-heading text-black mb-4">
              Human Review in Compliance
            </h2>
            <div className="space-y-4 text-base md:text-lg text-gray-800 leading-relaxed">
              <p>
                Recruitment Direct UK Ltd uses AI-supported compliance workflows to help organise documents, compliance records and review points.
              </p>
              <p>
                This may support areas such as right-to-work checks, GDPR workflow organisation, AWR compliance support and document checking.
              </p>
              <p>
                AI helps organise information for review, but compliance decisions remain subject to human checking.
              </p>
              <p>
                Our consultant and compliance team remain responsible for reviewing relevant information before submission or placement.
              </p>
            </div>
          </section>

          {/* Human Review in Client Communication */}
          <section className="human-review-section">
            <h2 className="text-xl md:text-2xl font-bold font-heading text-black mb-4">
              Human Review in Client Communication
            </h2>
            <div className="space-y-4 text-base md:text-lg text-gray-800 leading-relaxed">
              <p>
                Clients remain supported by Recruitment Direct UK Ltd’s consultant team.
              </p>
              <p>
                AI may support faster organisation of staff orders, enquiries and applicant information, but client communication, pricing confirmation, account setup, submission discussions and placement confirmation remain consultant-led.
              </p>
              <p>
                For new clients, our consultant team confirms requirements, prices, terms and account setup before recruitment activity or placement is confirmed.
              </p>
            </div>
          </section>

          {/* Applicant Rights and Questions */}
          <section className="human-review-section">
            <h2 className="text-xl md:text-2xl font-bold font-heading text-black mb-4">
              Applicant Rights and Questions
            </h2>
            <div className="space-y-4 text-base md:text-lg text-gray-800 leading-relaxed">
              <p>
                Applicants can contact Recruitment Direct UK Ltd if they have questions about the recruitment process, their information, screening responses or the outcome of an application.
              </p>
              <p>
                Where appropriate, applicants can ask for clarification or request that relevant information is reviewed by a member of our team.
              </p>
            </div>
          </section>

          {/* Responsible Use of AI */}
          <section className="human-review-section">
            <h2 className="text-xl md:text-2xl font-bold font-heading text-black mb-4">
              Responsible Use of AI
            </h2>
            <div className="space-y-4 text-base md:text-lg text-gray-800 leading-relaxed">
              <p>
                Recruitment Direct UK Ltd uses AI as a support tool.
              </p>
              <p>
                Our approach is based on:
              </p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-2 pl-2">
                {[
                  "Keeping consultants in control of recruitment decisions",
                  "Reviewing AI-supported outputs before submission or placement",
                  "Maintaining compliance review points",
                  "Supporting clearer records and audit visibility",
                  "Reducing repetitive administration",
                  "Improving response times",
                  "Protecting the role of human judgement in recruitment"
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
          <section className="human-review-section">
            <h2 className="text-xl md:text-2xl font-bold font-heading text-black mb-4">
              Policy Review
            </h2>
            <div className="space-y-4 text-base md:text-lg text-gray-800 leading-relaxed">
              <p>
                This Human Review Statement is effective from 10 June 2026 and will be reviewed annually, or sooner if required due to changes in law, regulation, guidance or Recruitment Direct UK Ltd business processes.
              </p>
            </div>
          </section>

          {/* Contact Us */}
          <section className="human-review-section">
            <h2 className="text-xl md:text-2xl font-bold font-heading text-black mb-4">
              Contact Us
            </h2>
            <div className="space-y-4 text-base md:text-lg text-gray-800 leading-relaxed">
              <p>
                For questions about this Human Review Statement or the role of human review in our recruitment process, please contact:
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
        
        .human-review-container h1,
        .human-review-container h2,
        .human-review-container h3,
        .human-review-container p,
        .human-review-container li,
        .human-review-container span {
          color: #000000 !important;
        }

        .human-review-section {
          border-bottom: 1px solid #e5e7eb;
          padding-bottom: 2rem;
        }

        .human-review-section:last-child {
          border-bottom: none;
          padding-bottom: 0;
        }
      `}</style>
    </div>
  );
}
