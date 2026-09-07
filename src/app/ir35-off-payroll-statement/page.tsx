import type { Metadata } from "next";
import PolicyDocument from "@/components/PolicyDocument";

export const metadata: Metadata = {
  title: "IR35 / Off-Payroll Working Statement | Recruitment Direct UK",
  description:
    "Recruitment Direct UK Ltd's approach to IR35 and off-payroll working rules for contractors placed through personal service companies.",
  alternates: {
    canonical: "https://rd1.co.uk/ir35-off-payroll-statement",
  },
  openGraph: {
    title: "IR35 / Off-Payroll Working Statement | Recruitment Direct UK",
    description:
      "Recruitment Direct UK Ltd's approach to IR35 and off-payroll working rules for contractors placed through personal service companies.",
    url: "https://rd1.co.uk/ir35-off-payroll-statement",
    type: "website",
    siteName: "Recruitment Direct UK Ltd",
  },
};

export default function Ir35OffPayrollStatementPage() {
  return (
    <PolicyDocument
      title="IR35 / Off-Payroll Working Compliance Statement"
      effectiveDate="7 September 2026"
      reviewDate="September 2027"
    >
      {/* Our position */}
      <section className="policy-section">
        <h2 className="text-xl md:text-2xl font-bold font-heading text-black mb-4">
          Our Position
        </h2>
        <div className="space-y-4 text-base md:text-lg text-gray-800 leading-relaxed">
          <p>
            RD1 supports clients and contractors in meeting their obligations under the off-payroll working rules (Chapter 10, Income Tax (Earnings and Pensions) Act 2003, as amended by the Finance Act 2017 and Finance Act 2020), commonly known as IR35.
          </p>
        </div>
      </section>

      {/* Where the rules apply */}
      <section className="policy-section">
        <h2 className="text-xl md:text-2xl font-bold font-heading text-black mb-4">
          Where the Rules Apply
        </h2>
        <div className="space-y-4 text-base md:text-lg text-gray-800 leading-relaxed">
          <p>
            Since April 2021, medium and large private-sector clients (and all public-sector clients) are responsible for determining the employment status of contractors they engage through personal service companies, and for issuing a Status Determination Statement (SDS). Where RD1 is the fee-payer in the labour supply chain, we apply the client&apos;s SDS and operate PAYE and National Insurance accordingly where a role is determined to be inside IR35.
          </p>
        </div>
      </section>

      {/* What we do */}
      <section className="policy-section">
        <h2 className="text-xl md:text-2xl font-bold font-heading text-black mb-4">
          What We Do
        </h2>
        <div className="space-y-4 text-base md:text-lg text-gray-800 leading-relaxed">
          <p>
            RD1 requests the client&apos;s SDS before an off-payroll contractor assignment begins, ensures payments are processed correctly according to that determination, and provides the SDS to the contractor as required by law. Where a client is a &ldquo;small company&rdquo; as defined by the Companies Act 2006 and therefore outside the scope of the client-led rules, RD1 will confirm this and clarify who carries responsibility for the status determination.
          </p>
        </div>
      </section>

      {/* Contractor status disagreements */}
      <section className="policy-section">
        <h2 className="text-xl md:text-2xl font-bold font-heading text-black mb-4">
          Contractor Status Disagreements
        </h2>
        <div className="space-y-4 text-base md:text-lg text-gray-800 leading-relaxed">
          <p>
            Contractors who disagree with a status determination should raise this with the end client via the client-led status disagreement process required under the legislation; RD1 will support this process where we are part of the supply chain.
          </p>
        </div>
      </section>

      {/* Our own supply chain */}
      <section className="policy-section">
        <h2 className="text-xl md:text-2xl font-bold font-heading text-black mb-4">
          Our Own Supply Chain
        </h2>
        <div className="space-y-4 text-base md:text-lg text-gray-800 leading-relaxed">
          <p>
            RD1 carries out reasonable due diligence on any umbrella companies or intermediaries used in placing contractors, consistent with HMRC&apos;s guidance on avoiding non-compliant umbrella arrangements and tax avoidance schemes.
          </p>
        </div>
      </section>

      {/* Queries */}
      <section className="policy-section">
        <h2 className="text-xl md:text-2xl font-bold font-heading text-black mb-4">
          Queries
        </h2>
        <div className="space-y-4 text-base md:text-lg text-gray-800 leading-relaxed">
          <p>
            Questions about a specific assignment&apos;s IR35 status should be directed to RD1 via{" "}
            <a href="mailto:accounts@rd1.co.uk" className="text-blue-600 hover:underline">
              accounts@rd1.co.uk
            </a>
            .
          </p>
        </div>
      </section>
    </PolicyDocument>
  );
}
