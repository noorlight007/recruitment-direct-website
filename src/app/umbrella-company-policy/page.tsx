import type { Metadata } from "next";
import PolicyDocument from "@/components/PolicyDocument";

const TITLE = "Umbrella Company Policy | Recruitment Direct UK";
const DESCRIPTION =
  "Recruitment Direct UK Ltd does not use umbrella companies or intermediaries. All temporary and contract workers are paid via PAYE or engaged directly under CIS.";
const URL = "https://rd1.co.uk/umbrella-company-policy";

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

export default function UmbrellaCompanyPolicyPage() {
  return (
    <PolicyDocument
      title="Umbrella Company Policy"
      version="1.1"
      effectiveDate="13 October 2026"
      reviewDate="October 2027"
    >
      <section className="policy-section">
        <h2 className="text-xl md:text-2xl font-bold font-heading text-black mb-4">
          Purpose
        </h2>
        <div className="space-y-4 text-base md:text-lg text-gray-800 leading-relaxed">
          <p>
            This policy sets out how Recruitment Direct UK Ltd (RD1) pays its temporary and contract workers, and confirms RD1&apos;s position on umbrella companies and other payment intermediaries.
          </p>
        </div>
      </section>

      <section className="policy-section">
        <h2 className="text-xl md:text-2xl font-bold font-heading text-black mb-4">
          Our Position
        </h2>
        <div className="space-y-4 text-base md:text-lg text-gray-800 leading-relaxed">
          <p>
            RD1 does not use umbrella companies, mini umbrella companies, personal service companies or any other payment intermediary to engage or pay workers.
          </p>
        </div>
      </section>

      <section className="policy-section">
        <h2 className="text-xl md:text-2xl font-bold font-heading text-black mb-4">
          How Our Workers Are Paid
        </h2>
        <div className="space-y-4 text-base md:text-lg text-gray-800 leading-relaxed">
          <p>
            Every temporary and contract worker supplied by RD1 is paid in one of two ways:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong className="text-black">PAYE:</strong> the worker is paid through RD1&apos;s own payroll, with income tax and National Insurance deducted at source and holiday pay provided in line with our National Minimum Wage &amp; Holiday Pay Compliance Policy.</li>
            <li><strong className="text-black">CIS:</strong> construction workers who are genuinely self-employed are engaged directly by RD1 under the Construction Industry Scheme, with CIS deductions made and paid to HMRC.</li>
          </ul>
          <p>
            No third party sits between RD1 and the worker in the payment chain.
          </p>
        </div>
      </section>

      <section className="policy-section">
        <h2 className="text-xl md:text-2xl font-bold font-heading text-black mb-4">
          Why We Work This Way
        </h2>
        <div className="space-y-4 text-base md:text-lg text-gray-800 leading-relaxed">
          <p>
            Paying workers directly removes the risks linked to non-compliant umbrella arrangements, mini umbrella company fraud and disguised remuneration schemes. It gives clients a short, transparent supply chain and gives workers clear, accurate pay.
          </p>
        </div>
      </section>

      <section className="policy-section">
        <h2 className="text-xl md:text-2xl font-bold font-heading text-black mb-4">
          Worker Transparency
        </h2>
        <div className="space-y-4 text-base md:text-lg text-gray-800 leading-relaxed">
          <p>
            Every worker receives a Key Information Document before their first assignment, setting out their pay rate, how they are paid and any deductions, in line with the Conduct of Employment Agencies and Employment Businesses Regulations 2003 (as amended).
          </p>
        </div>
      </section>

      <section className="policy-section">
        <h2 className="text-xl md:text-2xl font-bold font-heading text-black mb-4">
          Requests to Use an Umbrella Company
        </h2>
        <div className="space-y-4 text-base md:text-lg text-gray-800 leading-relaxed">
          <p>
            If a worker asks to be paid through an umbrella company or their own limited company, RD1 will decline and offer engagement via PAYE, or via CIS where the worker is eligible.
          </p>
        </div>
      </section>

      <section className="policy-section">
        <h2 className="text-xl md:text-2xl font-bold font-heading text-black mb-4">
          Changes to This Position
        </h2>
        <div className="space-y-4 text-base md:text-lg text-gray-800 leading-relaxed">
          <p>
            If RD1 ever changes this position, this policy will be updated first, and full due diligence in line with HMRC guidance will be completed before any intermediary is used.
          </p>
        </div>
      </section>

      <section className="policy-section">
        <h2 className="text-xl md:text-2xl font-bold font-heading text-black mb-4">
          Responsibility
        </h2>
        <div className="space-y-4 text-base md:text-lg text-gray-800 leading-relaxed">
          <p>
            The Directors are responsible for this policy and for ensuring all workers are paid via PAYE or CIS only.
          </p>
        </div>
      </section>
    </PolicyDocument>
  );
}
