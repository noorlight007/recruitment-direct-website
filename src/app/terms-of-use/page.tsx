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
          Terms of Use
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-xl font-medium text-gray-900 mb-8 border-l-4 border-blue-600 pl-4 py-1 leading-relaxed">
          These Terms of Use explain the terms on which visitors may access and use the Recruitment Direct UK Ltd website.
        </p>

        {/* Introduction */}
        <div className="space-y-4 text-base md:text-lg text-gray-800 mb-12 leading-relaxed">
          <p>
            By using this website, you agree to use it responsibly and in accordance with these Terms of Use. If you do not agree with these terms, you should not use this website.
          </p>
        </div>

        {/* Sections */}
        <div className="space-y-12">
          {/* About Recruitment Direct UK Ltd */}
          <section className="terms-section">
            <h2 className="text-xl md:text-2xl font-bold font-heading text-black mb-4">
              About Recruitment Direct UK Ltd
            </h2>
            <div className="space-y-4 text-base md:text-lg text-gray-800 leading-relaxed">
              <p>
                This website is operated by:
              </p>
              <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 text-sm md:text-base mb-4">
                <p className="font-semibold text-black">Recruitment Direct UK Ltd</p>
                <p>Herkimer House</p>
                <p>Mill Road Industrial Estate</p>
                <p>Linlithgow</p>
                <p>EH49 7SF</p>
                <p>Scotland</p>
                <p>United Kingdom</p>
              </div>
              <p>
                Recruitment Direct UK Ltd provides temporary, contract and permanent recruitment services to clients and applicants.
              </p>
            </div>
          </section>

          {/* Use of This Website */}
          <section className="terms-section">
            <h2 className="text-xl md:text-2xl font-bold font-heading text-black mb-4">
              Use of This Website
            </h2>
            <div className="space-y-4 text-base md:text-lg text-gray-800 leading-relaxed">
              <p>
                This website is provided for general information about Recruitment Direct UK Ltd, our recruitment services, applicant opportunities, client services, policies and contact information.
              </p>
              <p>
                Visitors must not use this website:
              </p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-2 pl-2">
                {[
                  "For any unlawful purpose",
                  "To submit false, misleading or inaccurate information",
                  "To interfere with the operation, security or availability of the website",
                  "To attempt unauthorised access to any system, data or account",
                  "To upload malicious content, viruses or harmful code",
                  "To copy or misuse website content without permission",
                  "To impersonate another person or organisation",
                  "To misuse forms, contact routes or application processes"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-gray-800">
                    <span className="w-1.5 h-1.5 bg-blue-600 rounded-full flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-4">
                Recruitment Direct UK Ltd may restrict access to the website or take appropriate action if misuse is identified.
              </p>
            </div>
          </section>

          {/* Website Content */}
          <section className="terms-section">
            <h2 className="text-xl md:text-2xl font-bold font-heading text-black mb-4">
              Website Content
            </h2>
            <div className="space-y-4 text-base md:text-lg text-gray-800 leading-relaxed">
              <p>
                The content on this website is provided for general information only.
              </p>
              <p>
                We aim to keep website information accurate and up to date, but we do not guarantee that all content will always be complete, current or free from error.
              </p>
              <p>
                Website content may be updated, changed or removed at any time without notice.
              </p>
              <p>
                Nothing on this website should be treated as legal, financial, tax, immigration or professional advice. Visitors should seek appropriate professional advice where required.
              </p>
            </div>
          </section>

          {/* Recruitment Information */}
          <section className="terms-section">
            <h2 className="text-xl md:text-2xl font-bold font-heading text-black mb-4">
              Recruitment Information
            </h2>
            <div className="space-y-4 text-base md:text-lg text-gray-800 leading-relaxed">
              <p>
                Information about vacancies, assignments, pay rates, locations, shift patterns, job descriptions or client requirements may change.
              </p>
              <p>
                Submission of an application, enquiry, staffing request or form through this website does not guarantee:
              </p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-2 pl-2">
                {[
                  "Employment",
                  "An interview",
                  "Placement",
                  "Assignment availability",
                  "Client acceptance",
                  "Staff availability",
                  "A confirmed staff order",
                  "A confirmed price or charge rate",
                  "A credit account approval"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-gray-800">
                    <span className="w-1.5 h-1.5 bg-blue-600 rounded-full flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-4">
                All recruitment activity remains subject to consultant review, applicant suitability, client requirements, compliance checks, account status and availability.
              </p>
            </div>
          </section>

          {/* AI-Supported Recruitment Tools */}
          <section className="terms-section">
            <h2 className="text-xl md:text-2xl font-bold font-heading text-black mb-4">
              AI-Supported Recruitment Tools
            </h2>
            <div className="space-y-4 text-base md:text-lg text-gray-800 leading-relaxed">
              <p>
                Recruitment Direct UK Ltd may use AI-supported recruitment tools to help improve speed, communication, matching, document collection, compliance workflows and consultant review preparation.
              </p>
              <p>
                AI-supported tools are used to support the recruitment process. They do not replace consultant judgement.
              </p>
              <p>
                No applicant is submitted or placed solely because of an AI result. Final review remains with Recruitment Direct UK Ltd’s consultant and compliance team.
              </p>
              <p className="text-gray-500 text-sm">
                For more information, please refer to our AI Transparency Statement and Human Review Statement.
              </p>
            </div>
          </section>

          {/* AI Hire Now Orders and Enquiries */}
          <section className="terms-section">
            <h2 className="text-xl md:text-2xl font-bold font-heading text-black mb-4">
              AI Hire Now Orders and Enquiries
            </h2>
            <div className="space-y-4 text-base md:text-lg text-gray-800 leading-relaxed">
              <p>
                Existing clients may use AI Hire Now to submit staff orders online.
              </p>
              <p>
                New clients may use AI Hire Now to place a staff order or submit a staffing enquiry.
              </p>
              <p>
                For new clients, any staff order or enquiry remains subject to consultant follow-up, pricing confirmation, Terms of Business, account setup and approval before recruitment activity or placement is confirmed.
              </p>
              <p>
                Every AI Hire Now staff order or enquiry triggers AI Candidate Skill Search 24/7 to help identify suitable applicants for consultant review.
              </p>
              <p>
                Submission of a staff order or enquiry does not guarantee that suitable applicants will be available or that a placement will be made.
              </p>
            </div>
          </section>

          {/* Applicant Applications */}
          <section className="terms-section">
            <h2 className="text-xl md:text-2xl font-bold font-heading text-black mb-4">
              Applicant Applications
            </h2>
            <div className="space-y-4 text-base md:text-lg text-gray-800 leading-relaxed">
              <p>
                Applicants may use this website to apply for roles, submit information or contact Recruitment Direct UK Ltd.
              </p>
              <p>
                Applicants are responsible for ensuring that information submitted is accurate, complete and not misleading.
              </p>
              <p>
                Applicants may be asked to provide further information, documents or evidence before being considered for submission or placement.
              </p>
              <p>
                This may include right-to-work evidence, ID, licences, tickets, qualifications, references, availability information or other role-specific details.
              </p>
            </div>
          </section>

          {/* Client Enquiries and Staff Orders */}
          <section className="terms-section">
            <h2 className="text-xl md:text-2xl font-bold font-heading text-black mb-4">
              Client Enquiries and Staff Orders
            </h2>
            <div className="space-y-4 text-base md:text-lg text-gray-800 leading-relaxed">
              <p>
                Clients and prospective clients may use this website to submit staffing requirements, enquiries or contact requests.
              </p>
              <p>
                Clients are responsible for providing accurate information about the role, assignment, location, duties, shift pattern, pay rate, required skills, licences, tickets, qualifications and any compliance requirements.
              </p>
              <p>
                Recruitment Direct UK Ltd may contact the client to confirm the requirement, prices, terms, account status and next steps before proceeding.
              </p>
            </div>
          </section>

          {/* Intellectual Property */}
          <section className="terms-section">
            <h2 className="text-xl md:text-2xl font-bold font-heading text-black mb-4">
              Intellectual Property
            </h2>
            <div className="space-y-4 text-base md:text-lg text-gray-800 leading-relaxed">
              <p>
                Unless otherwise stated, the content on this website belongs to Recruitment Direct UK Ltd or is used with permission.
              </p>
              <p>
                This includes text, design, layout, branding, graphics, logos, documents, policies and website materials.
              </p>
              <p>
                Visitors may view and download website content for personal or internal business reference only.
              </p>
              <p>
                Visitors must not copy, reproduce, publish, distribute, modify, sell or exploit website content without written permission from Recruitment Direct UK Ltd.
              </p>
            </div>
          </section>

          {/* Links to Other Websites */}
          <section className="terms-section">
            <h2 className="text-xl md:text-2xl font-bold font-heading text-black mb-4">
              Links to Other Websites
            </h2>
            <div className="space-y-4 text-base md:text-lg text-gray-800 leading-relaxed">
              <p>
                This website may contain links to external websites, documents or third-party services.
              </p>
              <p>
                These links are provided for convenience only.
              </p>
              <p>
                Recruitment Direct UK Ltd is not responsible for the content, availability, accuracy, security or privacy practices of external websites.
              </p>
              <p>
                Visitors should review the terms and privacy policies of any third-party website they access.
              </p>
            </div>
          </section>

          {/* Website Availability */}
          <section className="terms-section">
            <h2 className="text-xl md:text-2xl font-bold font-heading text-black mb-4">
              Website Availability
            </h2>
            <div className="space-y-4 text-base md:text-lg text-gray-800 leading-relaxed">
              <p>
                We aim to keep the website available and functioning correctly, but we do not guarantee that the website will always be available, uninterrupted, secure or free from errors.
              </p>
              <p>
                Recruitment Direct UK Ltd may suspend, withdraw, update or restrict access to the website at any time.
              </p>
              <p>
                We are not responsible for any loss or inconvenience caused by website downtime, technical issues or unavailable services.
              </p>
            </div>
          </section>

          {/* Limitation of Liability */}
          <section className="terms-section">
            <h2 className="text-xl md:text-2xl font-bold font-heading text-black mb-4">
              Limitation of Liability
            </h2>
            <div className="space-y-4 text-base md:text-lg text-gray-800 leading-relaxed">
              <p>
                Recruitment Direct UK Ltd will not be liable for losses arising from use of, or reliance on, this website except where liability cannot be excluded by law.
              </p>
              <p>
                This includes loss arising from:
              </p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-2 pl-2">
                {[
                  "Inaccurate or outdated website information",
                  "Website unavailability",
                  "Technical issues",
                  "External website links",
                  "Delays in responding to enquiries",
                  "Recruitment outcomes",
                  "Applicant availability",
                  "Client decisions",
                  "Unauthorised use or misuse of the website"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-gray-800">
                    <span className="w-1.5 h-1.5 bg-blue-600 rounded-full flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-4">
                Nothing in these Terms of Use excludes or limits liability where it would be unlawful to do so.
              </p>
            </div>
          </section>

          {/* Data Protection and Privacy */}
          <section className="terms-section">
            <h2 className="text-xl md:text-2xl font-bold font-heading text-black mb-4">
              Data Protection and Privacy
            </h2>
            <div className="space-y-4 text-base md:text-lg text-gray-800 leading-relaxed">
              <p>
                Recruitment Direct UK Ltd handles personal data in line with its data protection and privacy processes.
              </p>
              <p>
                Information submitted through the website may be used to respond to enquiries, manage applications, process staffing requests, support recruitment activity, complete compliance checks and manage client or applicant relationships.
              </p>
              <p className="text-gray-500 text-sm">
                For more information, please refer to our Privacy Policy and Data Protection Policy.
              </p>
            </div>
          </section>

          {/* Security */}
          <section className="terms-section">
            <h2 className="text-xl md:text-2xl font-bold font-heading text-black mb-4">
              Security
            </h2>
            <div className="space-y-4 text-base md:text-lg text-gray-800 leading-relaxed">
              <p>
                Visitors must not attempt to damage, disrupt, compromise or gain unauthorised access to this website, its systems or data.
              </p>
              <p>
                Any misuse of the website, including attempted unauthorised access, malicious activity or fraudulent submissions, may be reported to the appropriate authorities.
              </p>
            </div>
          </section>

          {/* Changes to These Terms */}
          <section className="terms-section">
            <h2 className="text-xl md:text-2xl font-bold font-heading text-black mb-4">
              Changes to These Terms
            </h2>
            <div className="space-y-4 text-base md:text-lg text-gray-800 leading-relaxed">
              <p>
                Recruitment Direct UK Ltd may update these Terms of Use from time to time.
              </p>
              <p>
                The updated version will apply from the date it is published on the website.
              </p>
              <p>
                Visitors should review this page regularly to ensure they understand the terms that apply when using the website.
              </p>
            </div>
          </section>

          {/* Policy Review */}
          <section className="terms-section">
            <h2 className="text-xl md:text-2xl font-bold font-heading text-black mb-4">
              Policy Review
            </h2>
            <div className="space-y-4 text-base md:text-lg text-gray-800 leading-relaxed">
              <p>
                These Terms of Use are effective from 10 June 2026 and will be reviewed annually, or sooner if required due to changes in law, regulation, guidance or Recruitment Direct UK Ltd business processes.
              </p>
            </div>
          </section>

          {/* Contact Us */}
          <section className="terms-section">
            <h2 className="text-xl md:text-2xl font-bold font-heading text-black mb-4">
              Contact Us
            </h2>
            <div className="space-y-4 text-base md:text-lg text-gray-800 leading-relaxed">
              <p>
                For questions about these Terms of Use, please contact:
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
        
        .terms-container h1,
        .terms-container h2,
        .terms-container h3,
        .terms-container p,
        .terms-container li,
        .terms-container span {
          color: #000000 !important;
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
