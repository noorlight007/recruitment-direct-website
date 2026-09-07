"use client";

import React, { ReactNode } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingElements from "@/components/FloatingElements";

export interface PolicyDocumentProps {
  title: string;
  documentOwner?: string;
  version?: string;
  effectiveDate: string;
  reviewDate: string;
  approvalDate?: string;
  directorName?: string;
  directorPosition?: string;
  children: ReactNode;
}

export default function PolicyDocument({
  title,
  documentOwner = "Recruitment Direct UK Ltd",
  version = "1.0",
  effectiveDate,
  reviewDate,
  approvalDate,
  directorName = "Steven Peddie",
  directorPosition = "Director",
  children,
}: PolicyDocumentProps) {
  const displayApprovalDate = approvalDate || effectiveDate;

  return (
    <div className="min-h-screen bg-white text-black flex flex-col font-sans">
      <FloatingElements />
      <Navbar />

      <main className="flex-grow pt-[20px] md:pt-[40px] pb-20 px-6 max-w-4xl mx-auto w-full policy-doc-container">
        {/* Hub Back Link */}
        <div className="mb-6 print:hidden">
          <Link
            href="/policies-and-compliance"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-blue-600 hover:text-blue-800 transition-colors"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M15 18l-6-6 6-6" />
            </svg>
            All Policies &amp; Compliance
          </Link>
        </div>

        {/* Page Title */}
        <h1 className="text-3xl md:text-5xl font-bold font-heading text-black mb-6 tracking-tight">
          {title}
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
            {documentOwner}
          </div>
          <div>
            <span className="font-semibold text-gray-900 block">Version:</span>
            {version}
          </div>
          <div>
            <span className="font-semibold text-gray-900 block">Effective Date:</span>
            {effectiveDate}
          </div>
          <div>
            <span className="font-semibold text-gray-900 block">Review Date:</span>
            {reviewDate}
          </div>
        </div>

        {/* Body Content */}
        <div className="space-y-12">{children}</div>

        {/* Director Approval Box */}
        <section className="bg-gray-50 border border-gray-200 rounded-xl p-8 mt-12 space-y-4">
          <h3 className="text-lg font-bold text-gray-900 border-b border-gray-200 pb-2">
            Director Approval
          </h3>
          <p className="text-base text-gray-800 leading-relaxed italic">
            I confirm that this {title} has been reviewed and approved on behalf of Recruitment Direct UK Limited.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-800 pt-2">
            <div>
              <span className="font-semibold text-gray-900 block">Name:</span>
              {directorName}
            </div>
            <div>
              <span className="font-semibold text-gray-900 block">Position:</span>
              {directorPosition}
            </div>
            <div>
              <span className="font-semibold text-gray-900 block">Date:</span>
              {displayApprovalDate}
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

        {/* Print / Save as PDF Action */}
        <div className="mt-8 pt-4 border-t border-gray-200 flex justify-end print:hidden">
          <button
            type="button"
            onClick={() => window.print()}
            className="inline-flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M6 9V2h12v7M6 18H4a2 2 0 01-2-2v-5a2 2 0 012-2h16a2 2 0 012 2v5a2 2 0 01-2 2h-2" />
              <path d="M6 14h12v8H6z" />
            </svg>
            Print / Save as PDF
          </button>
        </div>
      </main>

      <Footer />

      {/* Global CSS overrides to ensure consistent typography and light background */}
      <style jsx global>{`
        body {
          background-color: #ffffff !important;
          background-image: none !important;
          color: #000000 !important;
        }

        .policy-doc-container h1,
        .policy-doc-container h2,
        .policy-doc-container h3,
        .policy-doc-container p,
        .policy-doc-container li,
        .policy-doc-container span,
        .policy-doc-container table {
          color: #000000 !important;
        }

        .policy-doc-container h1 {
          line-height: 1.25 !important;
        }

        .policy-doc-container h2 {
          line-height: 1.35 !important;
        }

        .policy-doc-container h3 {
          line-height: 1.35 !important;
        }

        .policy-section {
          border-bottom: 1px solid #e5e7eb;
          padding-bottom: 2rem;
        }

        .policy-section:last-child {
          border-bottom: none;
          padding-bottom: 0;
        }
      `}</style>
    </div>
  );
}
