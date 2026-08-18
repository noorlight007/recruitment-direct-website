"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingElements from "@/components/FloatingElements";

export default function RightToWorkPolicyPage() {
  return (
    <div className="min-h-screen bg-white text-black flex flex-col font-sans">
      <FloatingElements />
      <Navbar />

      <main className="flex-grow pt-[20px] md:pt-[40px] pb-20 px-6 max-w-4xl mx-auto w-full rtw-container">
        {/* Page Title */}
        <h1 className="text-3xl md:text-5xl font-bold font-heading text-black mb-6 tracking-tight">
          Right to Work Policy
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-xl font-medium text-gray-900 mb-8 border-l-4 border-blue-600 pl-4 py-1 leading-relaxed">
          Recruitment Direct UK Ltd is committed to responsible recruitment and compliance with UK right to work requirements.
        </p>

        {/* Introduction */}
        <div className="space-y-4 text-base md:text-lg text-gray-800 mb-12 leading-relaxed">
          <p>
            Before any applicant is placed into work, we carry out right to work checks to confirm that they have permission to work in the UK and that any work offered is in line with their permission, conditions or restrictions.
          </p>
          <p>
            Our process is designed to protect clients, applicants and Recruitment Direct UK Ltd by supporting legal, compliant and properly documented recruitment.
          </p>
        </div>

        {/* Sections */}
        <div className="space-y-12">
          {/* Purpose of This Policy */}
          <section className="rtw-section">
            <h2 className="text-xl md:text-2xl font-bold font-heading text-black mb-4">
              Purpose of This Policy
            </h2>
            <div className="space-y-4 text-base md:text-lg text-gray-800 leading-relaxed">
              <p>
                The purpose of this policy is to explain how Recruitment Direct UK Ltd manages right to work checks as part of our recruitment and placement process.
              </p>
              <p>
                Right to work checks are carried out to:
              </p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-2 pl-2">
                {[
                  "Confirm that applicants have permission to work in the UK",
                  "Check whether any work restrictions apply",
                  "Support compliance with Home Office requirements",
                  "Reduce the risk of illegal working",
                  "Maintain clear recruitment and compliance records",
                  "Protect clients and applicants through proper checks before placement"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-gray-800">
                    <span className="w-1.5 h-1.5 bg-blue-600 rounded-full flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-4">
                UK employers are required to check a person’s right to work before employment starts. The Home Office guidance explains how employers can conduct checks and retain evidence to help establish a statutory excuse against liability for a civil penalty. <span className="text-gray-500 text-sm">(GOV.UK)</span>
              </p>
            </div>
          </section>

          {/* When Checks Are Completed */}
          <section className="rtw-section">
            <h2 className="text-xl md:text-2xl font-bold font-heading text-black mb-4">
              When Checks Are Completed
            </h2>
            <div className="space-y-4 text-base md:text-lg text-gray-800 leading-relaxed">
              <p>
                Right to work checks must be completed before an applicant starts work.
              </p>
              <p>
                Recruitment Direct UK Ltd will not knowingly place an applicant into an assignment or role unless the required right to work check has been completed and reviewed.
              </p>
              <p>
                Where an applicant has time-limited permission to work, follow-up checks will be required before that permission expires.
              </p>
            </div>
          </section>

          {/* How Right to Work Checks Are Carried Out */}
          <section className="rtw-section">
            <h2 className="text-xl md:text-2xl font-bold font-heading text-black mb-4">
              How Right to Work Checks Are Carried Out
            </h2>
            <div className="space-y-4 text-base md:text-lg text-gray-800 leading-relaxed">
              <p>
                Depending on the applicant’s circumstances, right to work checks may be completed using one of the accepted Home Office checking methods.
              </p>
              <p>
                This can include:
              </p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-2 pl-2">
                {[
                  "A Home Office online right to work check using a share code",
                  "A manual document check, where permitted",
                  "A digital identity verification process, where applicable",
                  "The Home Office Employer Checking Service, where required"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-gray-800">
                    <span className="w-1.5 h-1.5 bg-blue-600 rounded-full flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-4">
                For online checks, the applicant provides a right to work share code and date of birth. The employer then uses the GOV.UK checking service to confirm the person’s right to work, the type of work permitted and whether there is a time limit. <span className="text-gray-500 text-sm">(GOV.UK)</span>
              </p>
            </div>
          </section>

          {/* Applicant Responsibilities */}
          <section className="rtw-section">
            <h2 className="text-xl md:text-2xl font-bold font-heading text-black mb-4">
              Applicant Responsibilities
            </h2>
            <div className="space-y-4 text-base md:text-lg text-gray-800 leading-relaxed">
              <p>
                Applicants are responsible for providing accurate and valid information to support their right to work check.
              </p>
              <p>
                Applicants may be asked to provide:
              </p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-2 pl-2">
                {[
                  "A right to work share code",
                  "Date of birth for the online check",
                  "Passport or identity document",
                  "Proof of immigration status, where applicable",
                  "Evidence of settled or pre-settled status, where applicable",
                  "Any other information required to confirm permission to work"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-gray-800">
                    <span className="w-1.5 h-1.5 bg-blue-600 rounded-full flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-4">
                Applicants must tell Recruitment Direct UK Ltd immediately if their right to work changes, expires, is withdrawn or becomes restricted.
              </p>
            </div>
          </section>

          {/* Client Responsibilities */}
          <section className="rtw-section">
            <h2 className="text-xl md:text-2xl font-bold font-heading text-black mb-4">
              Client Responsibilities
            </h2>
            <div className="space-y-4 text-base md:text-lg text-gray-800 leading-relaxed">
              <p>
                Clients must provide accurate assignment and role information so that Recruitment Direct UK Ltd can confirm whether the applicant is permitted to carry out the work offered.
              </p>
              <p>
                This may include:
              </p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-2 pl-2">
                {[
                  "Job title and duties",
                  "Work location",
                  "Start date",
                  "Working hours",
                  "Shift pattern",
                  "Assignment duration",
                  "Role-specific requirements",
                  "Any restrictions relevant to the assignment"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-gray-800">
                    <span className="w-1.5 h-1.5 bg-blue-600 rounded-full flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-4">
                Clients should notify Recruitment Direct UK Ltd immediately if the assignment, duties, location, hours or working arrangements change.
              </p>
            </div>
          </section>

          {/* Document Handling and Record Keeping */}
          <section className="rtw-section">
            <h2 className="text-xl md:text-2xl font-bold font-heading text-black mb-4">
              Document Handling and Record Keeping
            </h2>
            <div className="space-y-4 text-base md:text-lg text-gray-800 leading-relaxed">
              <p>
                Recruitment Direct UK Ltd keeps records of right to work checks in line with our compliance and data protection processes.
              </p>
              <p>
                Records may include:
              </p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-2 pl-2">
                {[
                  "Evidence of the check completed",
                  "Date the check was carried out",
                  "Copy of the online check result, where applicable",
                  "Relevant document copies, where permitted",
                  "Follow-up check dates for time-limited permission",
                  "Compliance notes and audit trail records"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-gray-800">
                    <span className="w-1.5 h-1.5 bg-blue-600 rounded-full flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-4">
                The Home Office guidance states that employers must retain evidence of the online right to work check. <span className="text-gray-500 text-sm">(GOV.UK)</span>
              </p>
            </div>
          </section>

          {/* Time-Limited Right to Work */}
          <section className="rtw-section">
            <h2 className="text-xl md:text-2xl font-bold font-heading text-black mb-4">
              Time-Limited Right to Work
            </h2>
            <div className="space-y-4 text-base md:text-lg text-gray-800 leading-relaxed">
              <p>
                Some applicants have permission to work in the UK for a limited period.
              </p>
              <p>
                Where this applies, Recruitment Direct UK Ltd will record the expiry date and complete follow-up checks before the permission expires.
              </p>
              <p>
                If an applicant cannot provide evidence of continued right to work, they will not be placed or continued in work until the required evidence has been reviewed.
              </p>
            </div>
          </section>

          {/* Use of AI-Supported Compliance Workflows */}
          <section className="rtw-section">
            <h2 className="text-xl md:text-2xl font-bold font-heading text-black mb-4">
              Use of AI-Supported Compliance Workflows
            </h2>
            <div className="space-y-4 text-base md:text-lg text-gray-800 leading-relaxed">
              <p>
                Recruitment Direct UK Ltd uses AI-supported compliance workflows to help organise right to work information, document status and review points.
              </p>
              <p>
                These workflows support speed, consistency and audit visibility, but final review remains consultant-led.
              </p>
              <p>
                AI does not replace human compliance review. Our consultant and compliance team remain responsible for checking right to work evidence before submission or placement.
              </p>
            </div>
          </section>

          {/* Preventing Discrimination */}
          <section className="rtw-section">
            <h2 className="text-xl md:text-2xl font-bold font-heading text-black mb-4">
              Preventing Discrimination
            </h2>
            <div className="space-y-4 text-base md:text-lg text-gray-800 leading-relaxed">
              <p>
                Right to work checks are carried out fairly and consistently.
              </p>
              <p>
                Recruitment Direct UK Ltd does not make assumptions about a person’s right to work based on nationality, background, accent, name, appearance or any other personal characteristic.
              </p>
              <p>
                All applicants are expected to complete the required right to work process before being placed into work.
              </p>
            </div>
          </section>

          {/* Failure to Provide Right to Work Evidence */}
          <section className="rtw-section">
            <h2 className="text-xl md:text-2xl font-bold font-heading text-black mb-4">
              Failure to Provide Right to Work Evidence
            </h2>
            <div className="space-y-4 text-base md:text-lg text-gray-800 leading-relaxed">
              <p>
                If an applicant does not provide acceptable right to work evidence, Recruitment Direct UK Ltd cannot place them into work.
              </p>
              <p>
                If right to work evidence expires or becomes invalid during an assignment, the applicant may be removed from the assignment unless valid evidence is provided and reviewed.
              </p>
            </div>
          </section>

          {/* Policy Review */}
          <section className="rtw-section">
            <h2 className="text-xl md:text-2xl font-bold font-heading text-black mb-4">
              Policy Review
            </h2>
            <div className="space-y-4 text-base md:text-lg text-gray-800 leading-relaxed">
              <p>
                This policy will be reviewed regularly to ensure it remains aligned with current Home Office guidance and Recruitment Direct UK Ltd’s compliance processes.
              </p>
              <p>
                For further information about right to work checks, applicants and clients can contact Recruitment Direct UK Ltd.
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
        
        .rtw-container h1,
        .rtw-container h2,
        .rtw-container h3,
        .rtw-container p,
        .rtw-container li,
        .rtw-container span {
          color: #000000 !important;
        }

        .rtw-section {
          border-bottom: 1px solid #e5e7eb;
          padding-bottom: 2rem;
        }

        .rtw-section:last-child {
          border-bottom: none;
          padding-bottom: 0;
        }
      `}</style>
    </div>
  );
}
