import type { Metadata } from "next";
import PolicyDocument from "@/components/PolicyDocument";

export const metadata: Metadata = {
  title: "Umbrella Company Due-Diligence Policy | Recruitment Direct UK",
  description:
    "How Recruitment Direct UK Ltd carries out due diligence on umbrella companies and intermediaries used to pay contractors, in line with HMRC guidance.",
  alternates: {
    canonical: "https://rd1.co.uk/umbrella-company-due-diligence-policy",
  },
  openGraph: {
    title: "Umbrella Company Due-Diligence Policy | Recruitment Direct UK",
    description:
      "How Recruitment Direct UK Ltd carries out due diligence on umbrella companies and intermediaries used to pay contractors, in line with HMRC guidance.",
    url: "https://rd1.co.uk/umbrella-company-due-diligence-policy",
    type: "website",
    siteName: "Recruitment Direct UK Ltd",
  },
};

export default function UmbrellaCompanyDueDiligencePolicyPage() {
  return (
    <PolicyDocument
      title="Umbrella Company Due-Diligence Policy"
      effectiveDate="7 September 2026"
      reviewDate="September 2027"
    >
      {/* Purpose */}
      <section className="policy-section">
        <h2 className="text-xl md:text-2xl font-bold font-heading text-black mb-4">
          Purpose
        </h2>
        <div className="space-y-4 text-base md:text-lg text-gray-800 leading-relaxed">
          <p>
            Where a worker chooses to be paid through an umbrella company rather than directly by RD1 or via PAYE, this policy sets out the due diligence RD1 carries out to ensure that intermediary is compliant, in line with HMRC guidance on avoiding non-compliant umbrella company arrangements, mini umbrella company fraud, and tax avoidance schemes.
          </p>
        </div>
      </section>

      {/* Current position */}
      <section className="policy-section">
        <h2 className="text-xl md:text-2xl font-bold font-heading text-black mb-4">
          Current Position
        </h2>
        <div className="space-y-4 text-base md:text-lg text-gray-800 leading-relaxed">
          <p>
            Where RD1 engages with umbrella companies as part of a worker&apos;s chosen payment route, the checks below are applied before that umbrella is used.
          </p>
        </div>
      </section>

      {/* Due diligence checks */}
      <section className="policy-section">
        <h2 className="text-xl md:text-2xl font-bold font-heading text-black mb-4">
          Due Diligence Checks
        </h2>
        <div className="space-y-4 text-base md:text-lg text-gray-800 leading-relaxed">
          <p>
            Before a worker is paid through a given umbrella company, RD1: confirms the umbrella is a genuine employer that operates PAYE correctly and does not promote or facilitate disguised remuneration or tax avoidance schemes; checks the umbrella against HMRC&apos;s published list of named tax avoidance schemes and promoters where relevant; requests evidence of the umbrella&apos;s compliance with National Minimum Wage and holiday pay obligations; and reviews whether the umbrella&apos;s fee structure and pay illustrations are clear and consistent with HMRC&apos;s guidance on transparent umbrella company pay.
          </p>
        </div>
      </section>

      {/* Red flags */}
      <section className="policy-section">
        <h2 className="text-xl md:text-2xl font-bold font-heading text-black mb-4">
          Red Flags
        </h2>
        <div className="space-y-4 text-base md:text-lg text-gray-800 leading-relaxed">
          <p>
            RD1 will not knowingly work with an umbrella company that: offers pay arrangements suggesting a significant proportion of income is paid as a &quot;loan,&quot; &quot;credit,&quot; or other non-taxed payment; cannot or will not provide a clear breakdown of deductions; or appears on, or is closely linked to an entity on, HMRC&apos;s list of named avoidance scheme promoters.
          </p>
        </div>
      </section>

      {/* Worker transparency */}
      <section className="policy-section">
        <h2 className="text-xl md:text-2xl font-bold font-heading text-black mb-4">
          Worker Transparency
        </h2>
        <div className="space-y-4 text-base md:text-lg text-gray-800 leading-relaxed">
          <p>
            Workers paid via an umbrella company are given a Key Information Document showing the total cost to the client, the umbrella&apos;s costs and margin, and the worker&apos;s actual net pay, in line with the Conduct of Employment Agencies and Employment Businesses Regulations 2003 (as amended) and current transparency requirements for umbrella company pay.
          </p>
        </div>
      </section>

      {/* Ongoing monitoring */}
      <section className="policy-section">
        <h2 className="text-xl md:text-2xl font-bold font-heading text-black mb-4">
          Ongoing Monitoring
        </h2>
        <div className="space-y-4 text-base md:text-lg text-gray-800 leading-relaxed">
          <p>
            RD1 reviews its list of used umbrella companies periodically and removes any umbrella from use where a compliance concern is identified, including one raised by HMRC, a worker, or a client.
          </p>
        </div>
      </section>

      {/* Responsibility */}
      <section className="policy-section">
        <h2 className="text-xl md:text-2xl font-bold font-heading text-black mb-4">
          Responsibility
        </h2>
        <div className="space-y-4 text-base md:text-lg text-gray-800 leading-relaxed">
          <p>
            The Directors are responsible for ensuring due diligence is carried out before any new umbrella company is used, and for acting promptly on any compliance concern raised about one already in use.
          </p>
        </div>
      </section>
    </PolicyDocument>
  );
}
