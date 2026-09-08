import type { Metadata } from "next";
import PolicyDocument from "@/components/PolicyDocument";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Risk Management Policy | Recruitment Direct UK",
  description:
    "How Recruitment Direct UK Ltd identifies, assesses and manages the risks to its recruitment business and the clients and workers it serves.",
  alternates: {
    canonical: "https://rd1.co.uk/risk-management-policy",
  },
  openGraph: {
    title: "Risk Management Policy | Recruitment Direct UK",
    description:
      "How Recruitment Direct UK Ltd identifies, assesses and manages the risks to its recruitment business and the clients and workers it serves.",
    url: "https://rd1.co.uk/risk-management-policy",
    type: "website",
    siteName: "Recruitment Direct UK Ltd",
  },
};

export default function RiskManagementPolicyPage() {
  return (
    <PolicyDocument
      title="Risk Management Policy"
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
            This policy sets out how RD1 identifies, assesses, and manages risk across its business, so that risks to the company, its clients, candidates, and placed workers are recognised early and managed proportionately, rather than addressed only after something goes wrong.
          </p>
        </div>
      </section>

      {/* Categories of risk considered */}
      <section className="policy-section">
        <h2 className="text-xl md:text-2xl font-bold font-heading text-black mb-4">
          Categories of Risk Considered
        </h2>
        <div className="space-y-4 text-base md:text-lg text-gray-800 leading-relaxed">
          <p>
            RD1&apos;s risk management covers: compliance risk (employment law, data protection, right to work, and sector-specific regulation); operational risk (loss of key systems, premises, or personnel — see our{" "}
            <Link href="/business-continuity-policy" className="text-blue-600 underline hover:text-blue-800">
              Business Continuity &amp; Disaster Recovery Policy
            </Link>
            ); financial risk (client payment default, cash flow, insurance adequacy); reputational risk (service failure, data breach, misconduct by staff or placed workers); and commercial risk (over-reliance on a single client or sector).
          </p>
        </div>
      </section>

      {/* How risk is identified and assessed */}
      <section className="policy-section">
        <h2 className="text-xl md:text-2xl font-bold font-heading text-black mb-4">
          How Risk Is Identified and Assessed
        </h2>
        <div className="space-y-4 text-base md:text-lg text-gray-800 leading-relaxed">
          <p>
            Risks are identified through day-to-day business activity, client and candidate feedback, complaints and incidents, compliance audits, and horizon-scanning for relevant legal or market change. Identified risks are assessed for likelihood and impact, and prioritised accordingly, with the most significant risks — such as those affecting worker pay, data security, or right to work compliance — receiving the closest and most frequent attention.
          </p>
        </div>
      </section>

      {/* Managing and mitigating risk */}
      <section className="policy-section">
        <h2 className="text-xl md:text-2xl font-bold font-heading text-black mb-4">
          Managing and Mitigating Risk
        </h2>
        <div className="space-y-4 text-base md:text-lg text-gray-800 leading-relaxed">
          <p>
            For each significant risk, RD1 identifies practical mitigations — for example, the due diligence and vetting processes in our{" "}
            <Link href="/safer-recruitment-vetting-policy" className="text-blue-600 underline hover:text-blue-800">
              Safer Recruitment &amp; Vetting Policy
            </Link>{" "}
            and{" "}
            <Link href="/right-to-work-policy" className="text-blue-600 underline hover:text-blue-800">
              Right to Work Policy
            </Link>
            , the insurance cover set out in our{" "}
            <Link href="/insurance-statement-of-cover" className="text-blue-600 underline hover:text-blue-800">
              Insurance Statement of Cover
            </Link>
            , and the continuity arrangements in our Business Continuity Policy — and monitors whether those mitigations remain effective.
          </p>
        </div>
      </section>

      {/* Review */}
      <section className="policy-section">
        <h2 className="text-xl md:text-2xl font-bold font-heading text-black mb-4">
          Review
        </h2>
        <div className="space-y-4 text-base md:text-lg text-gray-800 leading-relaxed">
          <p>
            RD1&apos;s risk register and this policy are reviewed at least annually by the Directors, and sooner following a significant incident, near-miss, or relevant change in law or client requirements.
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
            The Directors have overall responsibility for risk management at RD1 and for ensuring risks are reviewed and mitigated on an ongoing basis.
          </p>
        </div>
      </section>
    </PolicyDocument>
  );
}
