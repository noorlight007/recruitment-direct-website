import type { Metadata } from "next";
import Link from "next/link";
import PolicyDocument from "@/components/PolicyDocument";

export const metadata: Metadata = {
  title: "Environmental & Sustainability Policy | Recruitment Direct UK",
  description:
    "How Recruitment Direct UK Ltd reduces its environmental impact through hybrid working, paperless processes and supplier engagement.",
  alternates: {
    canonical: "https://rd1.co.uk/environmental-sustainability-policy",
  },
  openGraph: {
    title: "Environmental & Sustainability Policy | Recruitment Direct UK",
    description:
      "How Recruitment Direct UK Ltd reduces its environmental impact through hybrid working, paperless processes and supplier engagement.",
    url: "https://rd1.co.uk/environmental-sustainability-policy",
    type: "website",
    siteName: "Recruitment Direct UK Ltd",
  },
};

export default function EnvironmentalSustainabilityPolicyPage() {
  return (
    <PolicyDocument
      title="Environmental & Sustainability Policy"
      effectiveDate="7 September 2026"
      reviewDate="September 2027"
    >
      {/* Statement of commitment */}
      <section className="policy-section">
        <h2 className="text-xl md:text-2xl font-bold font-heading text-black mb-4">
          Statement of Commitment
        </h2>
        <div className="space-y-4 text-base md:text-lg text-gray-800 leading-relaxed">
          <p>
            As a recruitment and technology business, RD1&apos;s direct environmental impact is modest, but we recognise a responsibility to minimise it and to encourage more sustainable practice among our clients and suppliers where we can.
          </p>
        </div>
      </section>

      {/* Our commitments */}
      <section className="policy-section">
        <h2 className="text-xl md:text-2xl font-bold font-heading text-black mb-4">
          Our Commitments
        </h2>
        <div className="space-y-4 text-base md:text-lg text-gray-800 leading-relaxed">
          <ul className="space-y-3 pl-2">
            {[
              "Encouraging home working to reduce commuting-related emissions: RD1 staff work from the office on average 40% of working time, with the remaining 60% home-based.",
              "Operating a largely paperless recruitment process (digital applications, e-signed terms, cloud-based candidate and client records) to reduce paper and print consumption.",
              "Minimising unnecessary business travel by using video interviewing and remote screening — including CallPilot's AI-assisted candidate screening — where appropriate, reducing travel-related emissions for both RD1 staff and candidates.",
              "Encouraging suppliers and partners to demonstrate reasonable environmental practice where relevant to a contract.",
              "Complying with all applicable environmental legislation relevant to our office operations, including waste and WEEE (electronic equipment) disposal requirements.",
            ].map((item, idx) => (
              <li key={idx} className="flex items-start gap-3 text-gray-800">
                <span className="w-1.5 h-1.5 bg-blue-600 rounded-full flex-shrink-0 mt-2.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Governance */}
      <section className="policy-section">
        <h2 className="text-xl md:text-2xl font-bold font-heading text-black mb-4">
          Governance
        </h2>
        <div className="space-y-4 text-base md:text-lg text-gray-800 leading-relaxed">
          <p>
            The Directors are responsible for this policy and for identifying practical opportunities to reduce RD1&apos;s environmental footprint as the business grows, including considering a formal{" "}
            <Link href="/carbon-reduction-plan" className="text-blue-600 hover:underline">
              Carbon Reduction Plan
            </Link>{" "}
            as client and framework requirements develop.
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
            This policy is reviewed annually to ensure it reflects current practice and any new legal requirements.
          </p>
        </div>
      </section>
    </PolicyDocument>
  );
}
