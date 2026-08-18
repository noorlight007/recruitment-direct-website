"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingElements from "@/components/FloatingElements";

export default function SafeguardingPolicyPage() {
  return (
    <div className="min-h-screen bg-white text-black flex flex-col font-sans">
      <FloatingElements />
      <Navbar />

      <main className="flex-grow pt-[20px] md:pt-[40px] pb-20 px-6 max-w-4xl mx-auto w-full safeguarding-container">
        {/* Page Title */}
        <h1 className="text-3xl md:text-5xl font-bold font-heading text-black mb-6 tracking-tight">
          Safeguarding Policy
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-xl font-medium text-gray-900 mb-8 border-l-4 border-blue-600 pl-4 py-1 leading-relaxed">
          Recruitment Direct UK Ltd is committed to safeguarding and promoting the welfare of children, young people and adults at risk.
        </p>

        {/* Introduction */}
        <div className="space-y-4 text-base md:text-lg text-gray-800 mb-12 leading-relaxed">
          <p>
            As a recruitment business, we recognise the importance of safer recruitment, appropriate checks, clear reporting procedures and responsible handling of safeguarding concerns.
          </p>
          <p>
            This policy explains our approach to safeguarding within our recruitment process and our commitment to working with clients, applicants and workers in a professional and responsible way.
          </p>
        </div>

        {/* Sections */}
        <div className="space-y-12">
          {/* Purpose of This Policy */}
          <section className="safeguarding-section">
            <h2 className="text-xl md:text-2xl font-bold font-heading text-black mb-4">
              Purpose of This Policy
            </h2>
            <div className="space-y-4 text-base md:text-lg text-gray-800 leading-relaxed">
              <p>
                The purpose of this policy is to set out how Recruitment Direct UK Ltd supports safeguarding through its recruitment and placement processes.
              </p>
              <p>
                This policy is intended to help:
              </p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-2 pl-2">
                {[
                  "Protect children, young people and adults at risk",
                  "Support safer recruitment practices",
                  "Ensure safeguarding concerns are taken seriously",
                  "Provide clear reporting routes for concerns",
                  "Support appropriate document and background checks",
                  "Promote consultant-led review before placement",
                  "Maintain clear records and audit visibility"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-gray-800">
                    <span className="w-1.5 h-1.5 bg-blue-600 rounded-full flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* Scope of This Policy */}
          <section className="safeguarding-section">
            <h2 className="text-xl md:text-2xl font-bold font-heading text-black mb-4">
              Scope of This Policy
            </h2>
            <div className="space-y-4 text-base md:text-lg text-gray-800 leading-relaxed">
              <p>
                This policy applies to Recruitment Direct UK Ltd’s recruitment activities, including temporary, contract and permanent recruitment.
              </p>
              <p>
                It applies to:
              </p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-2 pl-2">
                {[
                  "Applicants",
                  "Temporary workers",
                  "Contractors",
                  "Permanent applicants",
                  "Clients",
                  "Consultants",
                  "Internal staff",
                  "Suppliers, where relevant",
                  "Any person involved in the recruitment or placement process"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-gray-800">
                    <span className="w-1.5 h-1.5 bg-blue-600 rounded-full flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-4">
                This policy is particularly important where a role involves working with children, young people, adults at risk or environments where safeguarding considerations apply.
              </p>
            </div>
          </section>

          {/* Our Safeguarding Commitment */}
          <section className="safeguarding-section">
            <h2 className="text-xl md:text-2xl font-bold font-heading text-black mb-4">
              Our Safeguarding Commitment
            </h2>
            <div className="space-y-4 text-base md:text-lg text-gray-800 leading-relaxed">
              <p>
                Recruitment Direct UK Ltd is committed to:
              </p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-2 pl-2">
                {[
                  "Treating safeguarding concerns seriously",
                  "Acting promptly where concerns are raised",
                  "Supporting safer recruitment checks where required",
                  "Working with clients to understand role requirements",
                  "Ensuring appropriate checks are considered before placement",
                  "Keeping safeguarding information confidential and controlled",
                  "Maintaining clear records of safeguarding concerns and actions taken",
                  "Escalating concerns where appropriate"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-gray-800">
                    <span className="w-1.5 h-1.5 bg-blue-600 rounded-full flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-4">
                Safeguarding is everyone’s responsibility. All staff involved in recruitment must be alert to potential concerns and follow the correct reporting process.
              </p>
            </div>
          </section>

          {/* Safer Recruitment */}
          <section className="safeguarding-section">
            <h2 className="text-xl md:text-2xl font-bold font-heading text-black mb-4">
              Safer Recruitment
            </h2>
            <div className="space-y-4 text-base md:text-lg text-gray-800 leading-relaxed">
              <p>
                Recruitment Direct UK Ltd supports safer recruitment by gathering relevant information before submitting or placing applicants.
              </p>
              <p>
                Depending on the role, this may include:
              </p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-2 pl-2">
                {[
                  "Identity checks",
                  "Right-to-work checks",
                  "Licence checks",
                  "Qualification checks",
                  "Reference checks",
                  "Employment history review",
                  "Role-specific compliance checks",
                  "DBS or PVG checks, where required",
                  "Client-specific safeguarding requirements"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-gray-800">
                    <span className="w-1.5 h-1.5 bg-blue-600 rounded-full flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-4">
                Where a role involves regulated activity or regulated roles with children or protected adults, the correct disclosure or PVG requirements must be considered before placement. In Scotland, the PVG scheme helps ensure people who are unsuitable to work with children and protected adults cannot do regulated roles with these groups. <span className="text-gray-500 text-sm">(mygov.scot)</span>
              </p>
            </div>
          </section>

          {/* DBS and PVG Checks */}
          <section className="safeguarding-section">
            <h2 className="text-xl md:text-2xl font-bold font-heading text-black mb-4">
              DBS and PVG Checks
            </h2>
            <div className="space-y-4 text-base md:text-lg text-gray-800 leading-relaxed">
              <p>
                Some roles require additional background checks before an applicant can be placed.
              </p>
              <p>
                Depending on the location, role and client requirements, this may include:
              </p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-2 pl-2">
                {[
                  "Disclosure and Barring Service checks",
                  "Disclosure Scotland checks",
                  "Protecting Vulnerable Groups scheme membership",
                  "Other role-specific checks required by law, regulation or client policy"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-gray-800">
                    <span className="w-1.5 h-1.5 bg-blue-600 rounded-full flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-4">
                Disclosure Scotland explains that PVG scheme membership is a legal requirement for regulated roles in Scotland, and Disclosure Scotland manages the PVG scheme. <span className="text-gray-500 text-sm">(mygov.scot)</span>
              </p>
              <p>
                Recruitment Direct UK Ltd will work with clients to understand whether a role requires these checks and will not knowingly place an applicant into a role requiring safeguarding checks unless the required process has been completed and reviewed.
              </p>
            </div>
          </section>

          {/* Client Responsibilities */}
          <section className="safeguarding-section">
            <h2 className="text-xl md:text-2xl font-bold font-heading text-black mb-4">
              Client Responsibilities
            </h2>
            <div className="space-y-4 text-base md:text-lg text-gray-800 leading-relaxed">
              <p>
                Clients must provide accurate role information so that Recruitment Direct UK Ltd can identify safeguarding requirements before submission or placement.
              </p>
              <p>
                Clients should tell us if the role involves:
              </p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-2 pl-2">
                {[
                  "Working with children",
                  "Working with young people",
                  "Working with adults at risk",
                  "Working in schools, care settings, healthcare settings or similar environments",
                  "Regulated activity or regulated roles",
                  "Access to sensitive sites or vulnerable service users",
                  "Any client-specific safeguarding checks or training requirements"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-gray-800">
                    <span className="w-1.5 h-1.5 bg-blue-600 rounded-full flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-4">
                Clients should also notify Recruitment Direct UK Ltd immediately if the duties, location, supervision arrangements or safeguarding requirements of a role change.
              </p>
            </div>
          </section>

          {/* Applicant and Worker Responsibilities */}
          <section className="safeguarding-section">
            <h2 className="text-xl md:text-2xl font-bold font-heading text-black mb-4">
              Applicant and Worker Responsibilities
            </h2>
            <div className="space-y-4 text-base md:text-lg text-gray-800 leading-relaxed">
              <p>
                Applicants and workers must provide accurate information during the recruitment process.
              </p>
              <p>
                This includes declaring information relevant to the role, providing requested documents and completing any required checks before starting work.
              </p>
              <p>
                Applicants and workers must notify Recruitment Direct UK Ltd immediately if:
              </p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-2 pl-2">
                {[
                  "Their right to work changes",
                  "A licence, qualification or certificate expires or becomes invalid",
                  "A disclosure, DBS or PVG status changes",
                  "They become subject to restrictions that may affect their suitability for a role",
                  "They have any safeguarding concern during an assignment"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-gray-800">
                    <span className="w-1.5 h-1.5 bg-blue-600 rounded-full flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-4">
                Failure to provide accurate information may result in removal from the recruitment process or assignment.
              </p>
            </div>
          </section>

          {/* Reporting Safeguarding Concerns */}
          <section className="safeguarding-section">
            <h2 className="text-xl md:text-2xl font-bold font-heading text-black mb-4">
              Reporting Safeguarding Concerns
            </h2>
            <div className="space-y-4 text-base md:text-lg text-gray-800 leading-relaxed">
              <p>
                Any safeguarding concern should be reported as soon as possible.
              </p>
              <p>
                Concerns may relate to:
              </p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-2 pl-2">
                {[
                  "The behaviour of an applicant, worker, client representative or member of staff",
                  "A child, young person or adult at risk being harmed or at risk of harm",
                  "Unsafe working environments",
                  "Inappropriate conduct",
                  "Allegations of abuse, neglect or exploitation",
                  "Breaches of safeguarding procedures",
                  "Any information that raises concern about a person’s suitability for a role"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-gray-800">
                    <span className="w-1.5 h-1.5 bg-blue-600 rounded-full flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-4">
                Safeguarding concerns should be reported to Recruitment Direct UK Ltd using the contact details below.
              </p>
              <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 space-y-2 text-sm md:text-base">
                <p><strong>Email:</strong> <a href="mailto:accounts@rd1.co.uk" className="text-blue-600 hover:underline">accounts@rd1.co.uk</a></p>
                <p><strong>Phone:</strong> <a href="tel:01324613198" className="text-blue-600 hover:underline">01324 613198</a></p>
              </div>
              <p className="mt-4">
                Where there is an immediate risk of harm, emergency services or the appropriate safeguarding authority should be contacted without delay.
              </p>
            </div>
          </section>

          {/* How We Handle Safeguarding Concerns */}
          <section className="safeguarding-section">
            <h2 className="text-xl md:text-2xl font-bold font-heading text-black mb-4">
              How We Handle Safeguarding Concerns
            </h2>
            <div className="space-y-4 text-base md:text-lg text-gray-800 leading-relaxed">
              <p>
                When a safeguarding concern is received, Recruitment Direct UK Ltd will review the information and decide the appropriate next steps.
              </p>
              <p>
                This may include:
              </p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-2 pl-2">
                {[
                  "Recording the concern",
                  "Escalating the concern internally",
                  "Contacting the client for further information",
                  "Speaking with the applicant or worker where appropriate",
                  "Reviewing recruitment records and compliance information",
                  "Removing an applicant or worker from consideration or assignment where appropriate",
                  "Referring the matter to the relevant authority where required",
                  "Cooperating with client safeguarding procedures or investigations"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-gray-800">
                    <span className="w-1.5 h-1.5 bg-blue-600 rounded-full flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-4">
                All concerns will be handled seriously, sensitively and confidentially.
              </p>
            </div>
          </section>

          {/* Confidentiality and Record Keeping */}
          <section className="safeguarding-section">
            <h2 className="text-xl md:text-2xl font-bold font-heading text-black mb-4">
              Confidentiality and Record Keeping
            </h2>
            <div className="space-y-4 text-base md:text-lg text-gray-800 leading-relaxed">
              <p>
                Safeguarding information will be handled carefully and shared only with people who need to know in order to review, manage or escalate the concern.
              </p>
              <p>
                Records may include:
              </p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-2 pl-2">
                {[
                  "Details of the concern",
                  "Date and time reported",
                  "People involved",
                  "Actions taken",
                  "Internal review notes",
                  "Client communication",
                  "Referral details, where applicable",
                  "Outcome or follow-up actions"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-gray-800">
                    <span className="w-1.5 h-1.5 bg-blue-600 rounded-full flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-4">
                Records will be managed in line with Recruitment Direct UK Ltd’s data protection and compliance processes.
              </p>
            </div>
          </section>

          {/* AI-Supported Compliance Workflows */}
          <section className="safeguarding-section">
            <h2 className="text-xl md:text-2xl font-bold font-heading text-black mb-4">
              AI-Supported Compliance Workflows
            </h2>
            <div className="space-y-4 text-base md:text-lg text-gray-800 leading-relaxed">
              <p>
                Recruitment Direct UK Ltd uses AI-supported compliance workflows to help organise recruitment records, document status, screening information and review points.
              </p>
              <p>
                These workflows support speed, consistency and audit visibility.
              </p>
              <p>
                AI does not replace human judgement in safeguarding matters. Safeguarding concerns, suitability checks and placement decisions remain subject to consultant and compliance team review.
              </p>
            </div>
          </section>

          {/* Training and Awareness */}
          <section className="safeguarding-section">
            <h2 className="text-xl md:text-2xl font-bold font-heading text-black mb-4">
              Training and Awareness
            </h2>
            <div className="space-y-4 text-base md:text-lg text-gray-800 leading-relaxed">
              <p>
                Recruitment Direct UK Ltd expects staff involved in recruitment to understand the importance of safeguarding and safer recruitment.
              </p>
              <p>
                Staff should be aware of:
              </p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-2 pl-2">
                {[
                  "Safeguarding responsibilities",
                  "Safer recruitment principles",
                  "How to identify potential concerns",
                  "How to report concerns",
                  "The importance of accurate records",
                  "Confidentiality and data protection requirements",
                  "Client-specific safeguarding requirements where relevant"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-gray-800">
                    <span className="w-1.5 h-1.5 bg-blue-600 rounded-full flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* Preventing Unsuitable Placements */}
          <section className="safeguarding-section">
            <h2 className="text-xl md:text-2xl font-bold font-heading text-black mb-4">
              Preventing Unsuitable Placements
            </h2>
            <div className="space-y-4 text-base md:text-lg text-gray-800 leading-relaxed">
              <p>
                Recruitment Direct UK Ltd will not knowingly place an applicant into a role where required safeguarding checks have not been completed or where information raises unresolved concerns about suitability.
              </p>
              <p>
                Where concerns arise, Recruitment Direct UK Ltd may pause the recruitment process, seek further information, remove the applicant from consideration or escalate the matter as appropriate.
              </p>
            </div>
          </section>

          {/* Policy Review */}
          <section className="safeguarding-section">
            <h2 className="text-xl md:text-2xl font-bold font-heading text-black mb-4">
              Policy Review
            </h2>
            <div className="space-y-4 text-base md:text-lg text-gray-800 leading-relaxed">
              <p>
                This Safeguarding Policy is effective from 10 June 2026 and will be reviewed annually, or sooner if required due to changes in law, regulation, guidance or Recruitment Direct UK Ltd business processes.
              </p>
            </div>
          </section>

          {/* Contact Us */}
          <section className="safeguarding-section">
            <h2 className="text-xl md:text-2xl font-bold font-heading text-black mb-4">
              Contact Us
            </h2>
            <div className="space-y-4 text-base md:text-lg text-gray-800 leading-relaxed">
              <p>
                For safeguarding concerns or questions about this policy, please contact:
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
        
        .safeguarding-container h1,
        .safeguarding-container h2,
        .safeguarding-container h3,
        .safeguarding-container p,
        .safeguarding-container li,
        .safeguarding-container span {
          color: #000000 !important;
        }

        .safeguarding-section {
          border-bottom: 1px solid #e5e7eb;
          padding-bottom: 2rem;
        }

        .safeguarding-section:last-child {
          border-bottom: none;
          padding-bottom: 0;
        }
      `}</style>
    </div>
  );
}
