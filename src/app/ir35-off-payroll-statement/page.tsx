import type { Metadata } from "next";
import Link from "next/link";
import PolicyDocument from "@/components/PolicyDocument";

const TITLE = "IR35 / Off-Payroll Working Statement | Recruitment Direct UK";
const DESCRIPTION =
  "Recruitment Direct UK Ltd does not supply contractors through personal service companies. All workers are paid via PAYE or engaged directly under CIS.";
const URL = "https://rd1.co.uk/ir35-off-payroll-statement";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: URL },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: URL,
    type: "website",
    siteName: "Recruitment Direct UK Ltd",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
  },
};

export default function Ir35OffPayrollStatementPage() {
  return (
    <PolicyDocument
      title="IR35 / Off-Payroll Working Compliance Statement"
      version="1.1"
      effectiveDate="13 October 2026"
      reviewDate="October 2027"
    >
      <section className="policy-section">
        <h2 className="text-xl md:text-2xl font-bold font-heading text-black mb-4">
          Our Position
        </h2>
        <div className="space-y-4 text-base md:text-lg text-gray-800 leading-relaxed">
          <p>
            Recruitment Direct UK Ltd (RD1) does not supply contractors through personal service companies (PSCs) or umbrella companies. All temporary and contract workers are paid through RD1&apos;s own PAYE payroll or engaged directly by RD1 under the Construction Industry Scheme (CIS).
          </p>
        </div>
      </section>

      <section className="policy-section">
        <h2 className="text-xl md:text-2xl font-bold font-heading text-black mb-4">
          What This Means for IR35
        </h2>
        <div className="space-y-4 text-base md:text-lg text-gray-800 leading-relaxed">
          <p>
            The off-payroll working rules (Chapter 10, Income Tax (Earnings and Pensions) Act 2003), commonly known as IR35, apply where a worker provides their services through their own intermediary, such as a PSC. Because RD1 does not engage workers through PSCs or other intermediaries, the off-payroll rules do not apply to workers supplied by RD1, and clients do not need to issue a Status Determination Statement for RD1 workers.
          </p>
        </div>
      </section>

      <section className="policy-section">
        <h2 className="text-xl md:text-2xl font-bold font-heading text-black mb-4">
          Employment Status Under CIS
        </h2>
        <div className="space-y-4 text-base md:text-lg text-gray-800 leading-relaxed">
          <p>
            RD1 engages workers under CIS only where they are genuinely self-employed. Workers who will be subject to supervision, direction or control are paid through PAYE, in line with the agency legislation (sections 44 to 47, Income Tax (Earnings and Pensions) Act 2003).
          </p>
        </div>
      </section>

      <section className="policy-section">
        <h2 className="text-xl md:text-2xl font-bold font-heading text-black mb-4">
          Client Requests
        </h2>
        <div className="space-y-4 text-base md:text-lg text-gray-800 leading-relaxed">
          <p>
            If a client asks RD1 to supply a worker through a PSC or other intermediary, RD1 will not supply on that basis and will offer PAYE or CIS engagement instead.
          </p>
        </div>
      </section>

      <section className="policy-section">
        <h2 className="text-xl md:text-2xl font-bold font-heading text-black mb-4">
          Related Policies
        </h2>
        <div className="space-y-4 text-base md:text-lg text-gray-800 leading-relaxed">
          <ul className="list-disc pl-6 space-y-2">
            <li><Link href="/umbrella-company-policy" className="text-[#222222] hover:underline font-medium">Umbrella Company Policy</Link></li>
            <li><Link href="/awr-compliance-statement" className="text-[#222222] hover:underline font-medium">Agency Workers Regulations (AWR) Compliance Statement</Link></li>
            <li><Link href="/national-minimum-wage-holiday-pay-policy" className="text-[#222222] hover:underline font-medium">National Minimum Wage &amp; Holiday Pay Compliance Policy</Link></li>
          </ul>
        </div>
      </section>

      <section className="policy-section">
        <h2 className="text-xl md:text-2xl font-bold font-heading text-black mb-4">
          Queries
        </h2>
        <div className="space-y-4 text-base md:text-lg text-gray-800 leading-relaxed">
          <p>
            Questions about how a worker is engaged should be sent to <a href="mailto:accounts@rd1.co.uk" className="text-[#222222] hover:underline font-medium">accounts@rd1.co.uk</a>.
          </p>
        </div>
      </section>
    </PolicyDocument>
  );
}
