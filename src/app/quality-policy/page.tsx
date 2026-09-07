import type { Metadata } from "next";
import PolicyDocument from "@/components/PolicyDocument";

export const metadata: Metadata = {
  title: "Quality Policy (ISO 9001) | Recruitment Direct UK",
  description:
    "Recruitment Direct UK Ltd's ISO 9001:2015-certified approach to quality in recruitment service delivery (Certificate No. GB2006088).",
  alternates: {
    canonical: "https://rd1.co.uk/quality-policy",
  },
  openGraph: {
    title: "Quality Policy (ISO 9001) | Recruitment Direct UK",
    description:
      "Recruitment Direct UK Ltd's ISO 9001:2015-certified approach to quality in recruitment service delivery (Certificate No. GB2006088).",
    url: "https://rd1.co.uk/quality-policy",
    type: "website",
    siteName: "Recruitment Direct UK Ltd",
  },
};

export default function QualityPolicyPage() {
  return (
    <PolicyDocument
      title="Quality Policy"
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
            RD1 operates a quality management system certified to <strong className="text-black">ISO 9001:2015</strong> (Certificate No. <strong className="text-black">GB2006088</strong>), reflecting our commitment to consistent, high-quality recruitment services for candidates and clients.
          </p>
        </div>
      </section>

      {/* Our approach */}
      <section className="policy-section">
        <h2 className="text-xl md:text-2xl font-bold font-heading text-black mb-4">
          Our Approach
        </h2>
        <div className="space-y-4 text-base md:text-lg text-gray-800 leading-relaxed">
          <p>
            Quality at RD1 means:
          </p>
          <ul className="space-y-3 mt-2 pl-2">
            {[
              "Understanding client requirements accurately before searching for candidates;",
              "Applying consistent, documented processes for sourcing, screening, and compliance checking;",
              "Monitoring service performance through client and candidate feedback;",
              "Identifying and correcting non-conformances promptly; and",
              "Continually improving our processes, including how we use technology such as CallPilot's AI-assisted screening to support, not replace, professional judgement."
            ].map((item, idx) => (
              <li key={idx} className="flex items-start gap-3 text-gray-800">
                <span className="w-1.5 h-1.5 bg-blue-600 rounded-full flex-shrink-0 mt-2.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Objectives */}
      <section className="policy-section">
        <h2 className="text-xl md:text-2xl font-bold font-heading text-black mb-4">
          Objectives
        </h2>
        <div className="space-y-4 text-base md:text-lg text-gray-800 leading-relaxed">
          <p>
            RD1 sets measurable quality objectives annually, covering areas such as candidate placement success rates, time-to-fill, client and candidate satisfaction, and compliance audit outcomes, reviewed by the Directors as part of management review.
          </p>
        </div>
      </section>

      {/* Continual improvement */}
      <section className="policy-section">
        <h2 className="text-xl md:text-2xl font-bold font-heading text-black mb-4">
          Continual Improvement
        </h2>
        <div className="space-y-4 text-base md:text-lg text-gray-800 leading-relaxed">
          <p>
            We maintain our ISO 9001:2015 certification through regular internal review and external audit, using audit findings, complaints, and feedback to drive improvement in our service delivery.
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
            The Directors have overall responsibility for the quality management system; all staff are responsible for following documented processes and raising quality concerns as they arise.
          </p>
        </div>
      </section>
    </PolicyDocument>
  );
}
