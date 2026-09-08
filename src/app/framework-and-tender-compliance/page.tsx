import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingElements from "@/components/FloatingElements";

export const metadata: Metadata = {
  title: "Framework & Tender Compliance | Recruitment Direct UK",
  description:
    "Recruitment Direct UK Ltd's full compliance pack for procurement, framework and tender evaluation — one page linking every relevant policy, certification and statement.",
  alternates: {
    canonical: "https://rd1.co.uk/framework-and-tender-compliance",
  },
  openGraph: {
    title: "Framework & Tender Compliance | Recruitment Direct UK",
    description:
      "Recruitment Direct UK Ltd's full compliance pack for procurement, framework and tender evaluation — one page linking every relevant policy, certification and statement.",
    url: "https://rd1.co.uk/framework-and-tender-compliance",
    type: "website",
    siteName: "Recruitment Direct UK Ltd",
  },
};

export default function FrameworkAndTenderCompliancePage() {
  return (
    <div className="min-h-screen bg-white text-black flex flex-col font-sans">
      <FloatingElements />
      <Navbar />

      <main className="flex-grow pt-[20px] md:pt-[40px] pb-20 px-6 max-w-4xl mx-auto w-full">
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

        <div className="border border-slate-200 rounded-xl p-6 sm:p-10 shadow-sm bg-white">
          <h1 className="text-2xl sm:text-3xl font-bold text-[#0b2545] mb-3">
            Framework &amp; Tender Compliance
          </h1>
          <p className="text-[#5b6b7a] text-sm sm:text-base leading-relaxed mb-6 max-w-3xl">
            Every policy, certification and statement relevant to procurement, framework and tender evaluation, in one place. This page links to our full policy set rather than repeating it, so each document below has a single, current, authoritative version.
          </p>

          <div className="flex flex-wrap gap-2.5 sm:gap-3 p-4 bg-[#eef3f9] rounded-lg text-xs sm:text-sm text-[#0b2545] mb-8 font-medium">
            <span>REC Corporate Member <b>No. 00207320</b></span>
            <span className="text-slate-400">|</span>
            <span>Constructionline Gold <b>No. 1324569</b></span>
            <span className="text-slate-400">|</span>
            <span>Cyber Essentials <b>No. 4686a995</b></span>
            <span className="text-slate-400">|</span>
            <span>ISO 9001:2015 <b>Certificate No. GB2006088</b></span>
          </div>

          <div className="space-y-8 text-sm sm:text-base">
            {/* 1. Company & Financial Assurance */}
            <div>
              <h2 className="text-[#0b2545] font-bold text-lg border-b-2 border-slate-100 pb-2 mb-3">
                Company &amp; Financial Assurance
              </h2>
              <ul className="divide-y divide-slate-100">
                <li className="py-2.5 flex items-center justify-between">
                  <Link href="/insurance-statement-of-cover" className="text-[#1d6fd6] hover:underline font-medium">
                    Insurance Certificates &amp; Statement of Cover
                  </Link>
                </li>
                <li className="py-2.5 flex items-center justify-between">
                  <Link href="/prompt-payment-policy" className="text-[#1d6fd6] hover:underline font-medium">
                    Prompt Payment Policy
                  </Link>
                </li>
                <li className="py-2.5 flex items-center justify-between">
                  <Link href="/quality-policy" className="text-[#1d6fd6] hover:underline font-medium">
                    Quality Policy (ISO 9001)
                  </Link>
                </li>
                <li className="py-2.5 flex items-center justify-between">
                  <Link href="/risk-management-policy" className="text-[#1d6fd6] hover:underline font-medium">
                    Risk Management Policy
                  </Link>
                  <span className="bg-[#e4f3ea] text-[#1a7a43] text-xs px-2 py-0.5 rounded-full font-semibold">new</span>
                </li>
                <li className="py-2.5 flex items-center justify-between">
                  <Link href="/supplier-subcontractor-due-diligence-policy" className="text-[#1d6fd6] hover:underline font-medium">
                    Supplier &amp; Subcontractor Due-Diligence Policy
                  </Link>
                  <span className="bg-[#e4f3ea] text-[#1a7a43] text-xs px-2 py-0.5 rounded-full font-semibold">new</span>
                </li>
              </ul>
            </div>

            {/* 2. Employment & Workforce Compliance */}
            <div>
              <h2 className="text-[#0b2545] font-bold text-lg border-b-2 border-slate-100 pb-2 mb-3">
                Employment &amp; Workforce Compliance
              </h2>
              <ul className="divide-y divide-slate-100">
                <li className="py-2.5 flex items-center justify-between">
                  <Link href="/awr-compliance-statement" className="text-[#1d6fd6] hover:underline font-medium">
                    Agency Workers Regulations (AWR) Compliance Statement
                  </Link>
                </li>
                <li className="py-2.5 flex items-center justify-between">
                  <Link href="/right-to-work-policy" className="text-[#1d6fd6] hover:underline font-medium">
                    Right to Work &amp; Immigration Compliance Policy
                  </Link>
                </li>
                <li className="py-2.5 flex items-center justify-between">
                  <Link href="/safer-recruitment-vetting-policy" className="text-[#1d6fd6] hover:underline font-medium">
                    Safer Recruitment &amp; Vetting Policy
                  </Link>
                </li>
                <li className="py-2.5 flex items-center justify-between">
                  <Link href="/ir35-off-payroll-statement" className="text-[#1d6fd6] hover:underline font-medium">
                    IR35 / Off-Payroll Working Compliance Statement
                  </Link>
                </li>
                <li className="py-2.5 flex items-center justify-between">
                  <Link href="/working-time-regulations-policy" className="text-[#1d6fd6] hover:underline font-medium">
                    Working Time Regulations Compliance Policy
                  </Link>
                  <span className="bg-[#e4f3ea] text-[#1a7a43] text-xs px-2 py-0.5 rounded-full font-semibold">new</span>
                </li>
                <li className="py-2.5 flex items-center justify-between">
                  <Link href="/national-minimum-wage-holiday-pay-policy" className="text-[#1d6fd6] hover:underline font-medium">
                    National Minimum Wage &amp; Holiday Pay Compliance Policy
                  </Link>
                  <span className="bg-[#e4f3ea] text-[#1a7a43] text-xs px-2 py-0.5 rounded-full font-semibold">new</span>
                </li>
                <li className="py-2.5 flex items-center justify-between">
                  <Link href="/lone-working-policy" className="text-[#1d6fd6] hover:underline font-medium">
                    Lone Working Policy
                  </Link>
                  <span className="bg-[#e4f3ea] text-[#1a7a43] text-xs px-2 py-0.5 rounded-full font-semibold">new</span>
                </li>
                <li className="py-2.5 flex items-center justify-between">
                  <Link href="/tupe-policy" className="text-[#1d6fd6] hover:underline font-medium">
                    TUPE (Transfer of Undertakings) Policy
                  </Link>
                  <span className="bg-[#e4f3ea] text-[#1a7a43] text-xs px-2 py-0.5 rounded-full font-semibold">new</span>
                </li>
                <li className="py-2.5 flex items-center justify-between">
                  <Link href="/umbrella-company-due-diligence-policy" className="text-[#1d6fd6] hover:underline font-medium">
                    Umbrella Company Due-Diligence Policy
                  </Link>
                  <span className="bg-[#e4f3ea] text-[#1a7a43] text-xs px-2 py-0.5 rounded-full font-semibold">new</span>
                </li>
                <li className="py-2.5 flex items-center justify-between">
                  <Link href="/rec-code-of-practice-statement" className="text-[#1d6fd6] hover:underline font-medium">
                    REC Code of Practice Compliance Statement
                  </Link>
                </li>
              </ul>
            </div>

            {/* 3. Health, Safety & Safeguarding */}
            <div>
              <h2 className="text-[#0b2545] font-bold text-lg border-b-2 border-slate-100 pb-2 mb-3">
                Health, Safety &amp; Safeguarding
              </h2>
              <ul className="divide-y divide-slate-100">
                <li className="py-2.5 flex items-center justify-between">
                  <Link href="/health-safety-policy" className="text-[#1d6fd6] hover:underline font-medium">
                    Health &amp; Safety Policy
                  </Link>
                </li>
                <li className="py-2.5 flex items-center justify-between">
                  <Link href="/safeguarding-policy" className="text-[#1d6fd6] hover:underline font-medium">
                    Safeguarding Policy (Children &amp; Vulnerable Adults)
                  </Link>
                </li>
                <li className="py-2.5 flex items-center justify-between">
                  <Link href="/business-continuity-policy" className="text-[#1d6fd6] hover:underline font-medium">
                    Business Continuity &amp; Disaster Recovery Policy
                  </Link>
                </li>
              </ul>
            </div>

            {/* 4. Data Protection & AI */}
            <div>
              <h2 className="text-[#0b2545] font-bold text-lg border-b-2 border-slate-100 pb-2 mb-3">
                Data Protection &amp; AI
              </h2>
              <ul className="divide-y divide-slate-100">
                <li className="py-2.5 flex items-center justify-between">
                  <Link href="/privacy-policy" className="text-[#1d6fd6] hover:underline font-medium">
                    Privacy Policy
                  </Link>
                </li>
                <li className="py-2.5 flex items-center justify-between">
                  <Link href="/candidate-privacy-notice" className="text-[#1d6fd6] hover:underline font-medium">
                    Candidate Privacy Notice
                  </Link>
                </li>
                <li className="py-2.5 flex items-center justify-between">
                  <Link href="/client-privacy-notice" className="text-[#1d6fd6] hover:underline font-medium">
                    Client Privacy Notice
                  </Link>
                </li>
                <li className="py-2.5 flex items-center justify-between">
                  <Link href="/data-retention-policy" className="text-[#1d6fd6] hover:underline font-medium">
                    Data Retention &amp; Deletion Policy
                  </Link>
                  <span className="bg-[#e4f3ea] text-[#1a7a43] text-xs px-2 py-0.5 rounded-full font-semibold">new</span>
                </li>
                <li className="py-2.5 flex items-center justify-between">
                  <Link href="/data-breach-response-procedure" className="text-[#1d6fd6] hover:underline font-medium">
                    Data Breach Response Procedure
                  </Link>
                  <span className="bg-[#e4f3ea] text-[#1a7a43] text-xs px-2 py-0.5 rounded-full font-semibold">new</span>
                </li>
                <li className="py-2.5 flex items-center justify-between">
                  <Link href="/subject-access-request-procedure" className="text-[#1d6fd6] hover:underline font-medium">
                    Subject Access Request (SAR) Procedure
                  </Link>
                  <span className="bg-[#e4f3ea] text-[#1a7a43] text-xs px-2 py-0.5 rounded-full font-semibold">new</span>
                </li>
                <li className="py-2.5 flex items-center justify-between">
                  <Link href="/ai-automated-decision-making-policy" className="text-[#1d6fd6] hover:underline font-medium">
                    AI &amp; Automated Decision-Making Policy
                  </Link>
                  <span className="bg-[#e4f3ea] text-[#1a7a43] text-xs px-2 py-0.5 rounded-full font-semibold">new</span>
                </li>
                <li className="py-2.5 flex items-center justify-between">
                  <Link href="/security" className="text-[#1d6fd6] hover:underline font-medium">
                    Data &amp; Platform Security
                  </Link>
                </li>
              </ul>
            </div>

            {/* 5. Equality, Ethics & Conduct */}
            <div>
              <h2 className="text-[#0b2545] font-bold text-lg border-b-2 border-slate-100 pb-2 mb-3">
                Equality, Ethics &amp; Conduct
              </h2>
              <ul className="divide-y divide-slate-100">
                <li className="py-2.5 flex items-center justify-between">
                  <Link href="/equality-diversity-inclusion-policy" className="text-[#1d6fd6] hover:underline font-medium">
                    Equality, Diversity and Inclusion Policy
                  </Link>
                </li>
                <li className="py-2.5 flex items-center justify-between">
                  <Link href="/anti-harassment-sexual-harassment-policy" className="text-[#1d6fd6] hover:underline font-medium">
                    Anti-Harassment &amp; Sexual Harassment Policy
                  </Link>
                  <span className="bg-[#e4f3ea] text-[#1a7a43] text-xs px-2 py-0.5 rounded-full font-semibold">new</span>
                </li>
                <li className="py-2.5 flex items-center justify-between">
                  <Link href="/anti-bribery-corruption-policy" className="text-[#1d6fd6] hover:underline font-medium">
                    Anti-Bribery &amp; Corruption Policy
                  </Link>
                </li>
                <li className="py-2.5 flex items-center justify-between">
                  <Link href="/whistleblowing-policy" className="text-[#1d6fd6] hover:underline font-medium">
                    Whistleblowing Policy
                  </Link>
                </li>
                <li className="py-2.5 flex items-center justify-between">
                  <Link href="/conflict-of-interest-policy" className="text-[#1d6fd6] hover:underline font-medium">
                    Conflict of Interest Policy
                  </Link>
                </li>
                <li className="py-2.5 flex items-center justify-between">
                  <Link href="/modern-slavery-policy" className="text-[#1d6fd6] hover:underline font-medium">
                    Modern Slavery and Human Trafficking Policy
                  </Link>
                </li>
                <li className="py-2.5 flex items-center justify-between">
                  <Link href="/complaints-policy" className="text-[#1d6fd6] hover:underline font-medium">
                    Complaints Policy
                  </Link>
                </li>
              </ul>
            </div>

            {/* 6. Environmental & Social Value */}
            <div>
              <h2 className="text-[#0b2545] font-bold text-lg border-b-2 border-slate-100 pb-2 mb-3">
                Environmental &amp; Social Value
              </h2>
              <ul className="divide-y divide-slate-100">
                <li className="py-2.5 flex items-center justify-between">
                  <Link href="/environmental-sustainability-policy" className="text-[#1d6fd6] hover:underline font-medium">
                    Environmental &amp; Sustainability Policy
                  </Link>
                </li>
                <li className="py-2.5 flex items-center justify-between">
                  <Link href="/carbon-reduction-plan" className="text-[#1d6fd6] hover:underline font-medium">
                    Carbon Reduction Plan
                  </Link>
                </li>
                <li className="py-2.5 flex items-center justify-between">
                  <Link href="/social-value-statement" className="text-[#1d6fd6] hover:underline font-medium">
                    Social Value Statement
                  </Link>
                </li>
              </ul>
            </div>

            {/* 7. Legal & General */}
            <div>
              <h2 className="text-[#0b2545] font-bold text-lg border-b-2 border-slate-100 pb-2 mb-3">
                Legal &amp; General
              </h2>
              <ul className="divide-y divide-slate-100">
                <li className="py-2.5 flex items-center justify-between">
                  <Link href="/glaa-licence-statement" className="text-[#1d6fd6] hover:underline font-medium">
                    GLAA Licence Applicability Statement
                  </Link>
                </li>
                <li className="py-2.5 flex items-center justify-between">
                  <Link href="/accreditations" className="text-[#1d6fd6] hover:underline font-medium">
                    Accreditations &amp; Certifications
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-8 text-xs text-[#5b6b7a] text-center">
          Recruitment Direct UK Ltd &middot; Registered in Scotland No. SC301107 &middot; Herkimer House, Mill Road Industrial Estate, Linlithgow, EH49 7SF
        </div>
      </main>

      <Footer />
    </div>
  );
}
