"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingElements from "@/components/FloatingElements";

export default function ComplaintsPolicyPage() {
  return (
    <div className="min-h-screen bg-white text-black flex flex-col font-sans">
      <FloatingElements />
      <Navbar />

      <main className="flex-grow pt-[20px] md:pt-[40px] pb-20 px-6 max-w-4xl mx-auto w-full complaints-container">
        {/* Page Title */}
        <h1 className="text-3xl md:text-5xl font-bold font-heading text-black mb-6 tracking-tight">
          Complaints Policy
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-xl font-medium text-gray-900 mb-8 border-l-4 border-blue-600 pl-4 py-1 leading-relaxed">
          Recruitment Direct UK Ltd is committed to providing a professional, reliable and responsive recruitment service to clients, applicants and workers.
        </p>

        {/* Introduction */}
        <div className="space-y-4 text-base md:text-lg text-gray-800 mb-12 leading-relaxed">
          <p>
            We aim to deal with everyone fairly and professionally. However, if something goes wrong or someone is unhappy with our service, we want to know so that we can investigate the matter properly and take appropriate action where required.
          </p>
        </div>

        {/* Sections */}
        <div className="space-y-12">
          {/* Purpose of This Policy */}
          <section className="complaints-section">
            <h2 className="text-xl md:text-2xl font-bold font-heading text-black mb-4">
              Purpose of This Policy
            </h2>
            <div className="space-y-4 text-base md:text-lg text-gray-800 leading-relaxed">
              <p>
                The purpose of this policy is to explain how complaints can be raised, how they will be handled and what steps Recruitment Direct UK Ltd will take to review and respond.
              </p>
              <p>
                This policy applies to complaints from:
              </p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-2 pl-2">
                {[
                  "Clients",
                  "Applicants",
                  "Temporary workers",
                  "Contractors",
                  "Permanent applicants",
                  "Suppliers",
                  "Other parties who have dealt with Recruitment Direct UK Ltd"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-gray-800">
                    <span className="w-1.5 h-1.5 bg-blue-600 rounded-full flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* What Is a Complaint? */}
          <section className="complaints-section">
            <h2 className="text-xl md:text-2xl font-bold font-heading text-black mb-4">
              What Is a Complaint?
            </h2>
            <div className="space-y-4 text-base md:text-lg text-gray-800 leading-relaxed">
              <p>
                A complaint is any expression of dissatisfaction about the service, conduct, communication, process or outcome provided by Recruitment Direct UK Ltd.
              </p>
              <p>
                This may include concerns about:
              </p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-2 pl-2">
                {[
                  "Communication or response times",
                  "Recruitment process handling",
                  "Applicant or worker treatment",
                  "Assignment details",
                  "Pay or timesheet queries",
                  "Compliance or documentation handling",
                  "Client service",
                  "Consultant conduct",
                  "Data handling concerns",
                  "Any other matter relating to our recruitment service"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-gray-800">
                    <span className="w-1.5 h-1.5 bg-blue-600 rounded-full flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* How to Raise a Complaint */}
          <section className="complaints-section">
            <h2 className="text-xl md:text-2xl font-bold font-heading text-black mb-4">
              How to Raise a Complaint
            </h2>
            <div className="space-y-4 text-base md:text-lg text-gray-800 leading-relaxed">
              <p>
                Complaints should be raised as soon as possible so that we can review the issue promptly.
              </p>
              <p>
                Complaints can be submitted by email, phone or in writing.
              </p>
              <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 space-y-2 text-sm md:text-base">
                <p><strong>Email:</strong> <a href="mailto:accounts@rd1.co.uk" className="text-blue-600 hover:underline">accounts@rd1.co.uk</a></p>
                <p><strong>Phone:</strong> <a href="tel:01324613198" className="text-blue-600 hover:underline">01324 613198</a></p>
                <p><strong>Address:</strong> Recruitment Direct UK Limited, Herkimer House, Mill Road Industrial Estate, Linlithgow, EH49 7SF, Scotland, United Kingdom</p>
              </div>
              <p className="mt-4">
                When raising a complaint, please provide as much information as possible, including:
              </p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-2 pl-2">
                {[
                  "Your name and contact details",
                  "Company name, if applicable",
                  "Details of the complaint",
                  "Relevant dates and times",
                  "Names of any people involved",
                  "Copies of relevant documents, emails or messages",
                  "The outcome you are seeking"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-gray-800">
                    <span className="w-1.5 h-1.5 bg-blue-600 rounded-full flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* How We Handle Complaints */}
          <section className="complaints-section">
            <h2 className="text-xl md:text-2xl font-bold font-heading text-black mb-4">
              How We Handle Complaints
            </h2>
            <div className="space-y-4 text-base md:text-lg text-gray-800 leading-relaxed">
              <p>
                Once a complaint is received, Recruitment Direct UK Ltd will review the information provided and decide the most appropriate person to investigate the matter.
              </p>
              <p>
                Our complaints process will normally include:
              </p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-2 pl-2">
                {[
                  "Acknowledging receipt of the complaint",
                  "Reviewing the details provided",
                  "Speaking with relevant members of staff where required",
                  "Reviewing records, emails, documents, timesheets or assignment information where applicable",
                  "Contacting the complainant for further information if needed",
                  "Providing a response once the review is complete"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-gray-800">
                    <span className="w-1.5 h-1.5 bg-blue-600 rounded-full flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-4">
                We aim to acknowledge complaints promptly and provide a fair response as quickly as possible.
              </p>
            </div>
          </section>

          {/* Complaint Response Times */}
          <section className="complaints-section">
            <h2 className="text-xl md:text-2xl font-bold font-heading text-black mb-4">
              Complaint Response Times
            </h2>
            <div className="space-y-4 text-base md:text-lg text-gray-800 leading-relaxed">
              <p>
                Recruitment Direct UK Ltd will aim to acknowledge a complaint within 3 working days of receipt.
              </p>
              <p>
                We will aim to provide a full response within 10 working days, where possible.
              </p>
              <p>
                If the complaint is complex or requires additional investigation, we may need more time. If this happens, we will provide an update and explain when a response is expected.
              </p>
            </div>
          </section>

          {/* Investigation and Review */}
          <section className="complaints-section">
            <h2 className="text-xl md:text-2xl font-bold font-heading text-black mb-4">
              Investigation and Review
            </h2>
            <div className="space-y-4 text-base md:text-lg text-gray-800 leading-relaxed">
              <p>
                Complaints will be reviewed fairly and objectively.
              </p>
              <p>
                The investigation may include reviewing:
              </p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-2 pl-2">
                {[
                  "Recruitment records",
                  "Client or applicant communication",
                  "Assignment details",
                  "Timesheets or payroll information",
                  "Compliance documents",
                  "Consultant notes",
                  "CRM records",
                  "Any other relevant information"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-gray-800">
                    <span className="w-1.5 h-1.5 bg-blue-600 rounded-full flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-4">
                Where appropriate, Recruitment Direct UK Ltd will take steps to resolve the complaint and reduce the chance of the issue happening again.
              </p>
            </div>
          </section>

          {/* Possible Outcomes */}
          <section className="complaints-section">
            <h2 className="text-xl md:text-2xl font-bold font-heading text-black mb-4">
              Possible Outcomes
            </h2>
            <div className="space-y-4 text-base md:text-lg text-gray-800 leading-relaxed">
              <p>
                Following a complaint review, the outcome may include:
              </p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-2 pl-2">
                {[
                  "An explanation of what happened",
                  "An apology where appropriate",
                  "Correction of an error",
                  "Further communication with the complainant",
                  "Review of internal processes",
                  "Additional staff guidance or training",
                  "Updated records or documentation",
                  "Confirmation that no further action is required"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-gray-800">
                    <span className="w-1.5 h-1.5 bg-blue-600 rounded-full flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-4">
                Each complaint will be considered based on its own facts and circumstances.
              </p>
            </div>
          </section>

          {/* Escalation */}
          <section className="complaints-section">
            <h2 className="text-xl md:text-2xl font-bold font-heading text-black mb-4">
              Escalation
            </h2>
            <div className="space-y-4 text-base md:text-lg text-gray-800 leading-relaxed">
              <p>
                If the complainant is unhappy with the response, they may ask for the matter to be reviewed further by a senior member of Recruitment Direct UK Ltd.
              </p>
              <p>
                The request for escalation should explain why the complainant remains dissatisfied and provide any further information they would like considered.
              </p>
              <p>
                A senior review will be carried out where appropriate, and a final response will be provided.
              </p>
            </div>
          </section>

          {/* Confidentiality */}
          <section className="complaints-section">
            <h2 className="text-xl md:text-2xl font-bold font-heading text-black mb-4">
              Confidentiality
            </h2>
            <div className="space-y-4 text-base md:text-lg text-gray-800 leading-relaxed">
              <p>
                Complaints will be handled confidentially and only shared with those who need to be involved in reviewing or resolving the matter.
              </p>
              <p>
                Information will be handled in line with our data protection and privacy processes.
              </p>
            </div>
          </section>

          {/* Data Protection Complaints */}
          <section className="complaints-section">
            <h2 className="text-xl md:text-2xl font-bold font-heading text-black mb-4">
              Data Protection Complaints
            </h2>
            <div className="space-y-4 text-base md:text-lg text-gray-800 leading-relaxed">
              <p>
                If a complaint relates to personal data, data handling or privacy, Recruitment Direct UK Ltd will review the matter in line with our data protection processes.
              </p>
              <p>
                Where required, the complaint may be treated as a data protection matter and handled under the relevant privacy or GDPR procedures.
              </p>
            </div>
          </section>

          {/* Commitment to Improvement */}
          <section className="complaints-section">
            <h2 className="text-xl md:text-2xl font-bold font-heading text-black mb-4">
              Commitment to Improvement
            </h2>
            <div className="space-y-4 text-base md:text-lg text-gray-800 leading-relaxed">
              <p>
                Recruitment Direct UK Ltd takes complaints seriously.
              </p>
              <p>
                Complaints help us identify where improvements may be needed in our service, communication, compliance processes or internal systems.
              </p>
              <p>
                We are committed to learning from complaints and maintaining a professional recruitment service for clients, applicants and workers.
              </p>
            </div>
          </section>

          {/* Policy Review */}
          <section className="complaints-section">
            <h2 className="text-xl md:text-2xl font-bold font-heading text-black mb-4">
              Policy Review
            </h2>
            <div className="space-y-4 text-base md:text-lg text-gray-800 leading-relaxed">
              <p>
                This Complaints Policy is effective from 10 June 2026 and will be reviewed annually, or sooner if required due to changes in law, regulation, guidance or Recruitment Direct UK Ltd business processes.
              </p>
            </div>
          </section>

          {/* Contact Us */}
          <section className="complaints-section">
            <h2 className="text-xl md:text-2xl font-bold font-heading text-black mb-4">
              Contact Us
            </h2>
            <div className="space-y-4 text-base md:text-lg text-gray-800 leading-relaxed">
              <p>
                For complaints or service concerns, please contact:
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
        
        .complaints-container h1,
        .complaints-container h2,
        .complaints-container h3,
        .complaints-container p,
        .complaints-container li,
        .complaints-container span {
          color: #000000 !important;
        }

        .complaints-section {
          border-bottom: 1px solid #e5e7eb;
          padding-bottom: 2rem;
        }

        .complaints-section:last-child {
          border-bottom: none;
          padding-bottom: 0;
        }
      `}</style>
    </div>
  );
}
