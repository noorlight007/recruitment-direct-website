import type { Metadata } from "next";
import PolicyDocument from "@/components/PolicyDocument";

export const metadata: Metadata = {
  title: "GLAA Licence Statement | Recruitment Direct UK",
  description:
    "A statement on the applicability of GLAA licensing to Recruitment Direct UK Ltd's recruitment activities.",
  alternates: {
    canonical: "https://rd1.co.uk/glaa-licence-statement",
  },
  openGraph: {
    title: "GLAA Licence Statement | Recruitment Direct UK",
    description:
      "A statement on the applicability of GLAA licensing to Recruitment Direct UK Ltd's recruitment activities.",
    url: "https://rd1.co.uk/glaa-licence-statement",
    type: "website",
    siteName: "Recruitment Direct UK Ltd",
  },
};

export default function GlaaLicenceStatementPage() {
  return (
    <PolicyDocument
      title="GLAA Licence Applicability Statement"
      effectiveDate="7 September 2026"
      reviewDate="September 2027"
    >
      {/* Statement */}
      <section className="policy-section">
        <h2 className="text-xl md:text-2xl font-bold font-heading text-black mb-4">
          Statement of Applicability
        </h2>
        <div className="space-y-4 text-base md:text-lg text-gray-800 leading-relaxed">
          <p>
            The Gangmasters and Labour Abuse Authority (GLAA) licensing scheme applies to businesses that supply workers into specific licensable sectors: agricultural work, shellfish gathering, and any associated processing or packaging, and horticulture.
          </p>
          <p>
            Recruitment Direct UK Ltd does not currently supply workers into any GLAA-licensable sector, and a GLAA licence is therefore not applicable to RD1&apos;s business. Should RD1&apos;s client base extend into a licensable sector in future, a GLAA licence would be obtained before any worker is supplied into that sector.
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
            The Directors review RD1&apos;s sector coverage on an ongoing basis to ensure full compliance with all statutory licensing regimes.
          </p>
        </div>
      </section>
    </PolicyDocument>
  );
}
