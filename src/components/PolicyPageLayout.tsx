"use client"; // needed for the print button's onClick — the page.tsx that
// renders this can stay a server component; only this shared layout needs
// the directive.

// components/PolicyPageLayout.tsx
//
// Shared layout for individual policy pages (e.g. /anti-bribery-corruption-policy).
// This is what makes "framework should be able to click through to a real,
// citable URL per policy" actually true — every new policy gets its own
// page at its own root-level URL, not just an entry on the hub. Same
// visual language as the hub for a consistent, professional feel.

import type { ReactNode } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function PolicyPageLayout({
  title,
  effectiveDate,
  children,
}: {
  title: string;
  effectiveDate?: string;
  children: ReactNode;
}) {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col justify-between">
      <div className="print:hidden">
        <Navbar />
      </div>
      <main className="flex-grow pt-24 sm:pt-28 pb-16">
        <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6 bg-white rounded-2xl border border-slate-200 shadow-sm print:shadow-none print:border-none print:p-0">
          <a
            href="/policies-and-compliance"
            className="mb-8 inline-flex items-center gap-1 text-sm font-medium text-blue-700 hover:text-blue-900 print:hidden"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path
                d="M15 6l-6 6 6 6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            All Policies &amp; Compliance
          </a>

          <h1 className="text-3xl font-bold text-slate-900">{title}</h1>
          {effectiveDate && (
            <p className="mt-2 text-sm text-slate-400">Effective {effectiveDate}</p>
          )}

          <div className="prose prose-slate mt-8 max-w-none prose-headings:font-semibold prose-a:text-blue-700">
            {children}
          </div>

          <div className="mt-12 border-t border-slate-200 pt-6 print:hidden">
            <button
              type="button"
              onClick={() => window.print()}
              className="text-sm font-medium text-slate-500 hover:text-slate-700"
            >
              Print / save as PDF
            </button>
          </div>
        </div>
      </main>
      <div className="print:hidden">
        <Footer />
      </div>
    </div>
  );
}
