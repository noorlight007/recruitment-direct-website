import type { Metadata } from "next";
import Link from "next/link";
import PolicyDocument from "@/components/PolicyDocument";

export const metadata: Metadata = {
  title: "Social Value Statement | Recruitment Direct UK",
  description:
    "How Recruitment Direct UK Ltd delivers social value through local employment, inclusive recruitment and community-focused client work.",
  alternates: {
    canonical: "https://rd1.co.uk/social-value-statement",
  },
  openGraph: {
    title: "Social Value Statement | Recruitment Direct UK",
    description:
      "How Recruitment Direct UK Ltd delivers social value through local employment, inclusive recruitment and community-focused client work.",
    url: "https://rd1.co.uk/social-value-statement",
    type: "website",
    siteName: "Recruitment Direct UK Ltd",
  },
};

export default function SocialValueStatementPage() {
  return (
    <PolicyDocument
      title="Social Value Statement"
      effectiveDate="7 September 2026"
      reviewDate="September 2027"
    >
      {/* Our approach to social value */}
      <section className="policy-section">
        <h2 className="text-xl md:text-2xl font-bold font-heading text-black mb-4">
          Our Approach to Social Value
        </h2>
        <div className="space-y-4 text-base md:text-lg text-gray-800 leading-relaxed">
          <p>
            RD1 recognises the role recruitment plays in local economic and social wellbeing, and considers social value an integral part of how we operate, consistent with the principles of the Public Services (Social Value) Act 2012 and the wider Social Value Model used in public procurement.
          </p>
        </div>
      </section>

      {/* How we deliver social value */}
      <section className="policy-section">
        <h2 className="text-xl md:text-2xl font-bold font-heading text-black mb-4">
          How We Deliver Social Value
        </h2>
        <div className="space-y-4 text-base md:text-lg text-gray-800 leading-relaxed">
          <ul className="space-y-3 pl-2">
            {[
              "Supporting local employment across Scotland, England, Wales, and Northern Ireland by connecting local candidates with local job opportunities.",
              "Working with candidates from a wide range of backgrounds, including those returning to work, career changers, and candidates facing barriers to employment, through fair and accessible recruitment processes.",
              "Investing in technology (CallPilot) that improves consistency and reduces unconscious bias risk in early-stage candidate screening, alongside our Equality, Diversity and Inclusion Policy.",
              "Supporting client organisations, including in healthcare, education, and public-facing sectors, to fill roles that directly support local service delivery.",
              "Operating as a Scottish-registered, long-established SME (trading since 2006), contributing to the local business economy around Linlithgow and beyond.",
            ].map((item, idx) => (
              <li key={idx} className="flex items-start gap-3 text-gray-800">
                <span className="w-1.5 h-1.5 bg-blue-600 rounded-full flex-shrink-0 mt-2.5" />
                <span>
                  {idx === 2 ? (
                    <>
                      Investing in technology (CallPilot) that improves consistency and reduces unconscious bias risk in early-stage candidate screening, alongside our{" "}
                      <Link href="/equality-diversity-inclusion-policy" className="text-blue-600 hover:underline">
                        Equality, Diversity and Inclusion Policy
                      </Link>
                      .
                    </>
                  ) : (
                    item
                  )}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Ongoing development */}
      <section className="policy-section">
        <h2 className="text-xl md:text-2xl font-bold font-heading text-black mb-4">
          Ongoing Development
        </h2>
        <div className="space-y-4 text-base md:text-lg text-gray-800 leading-relaxed">
          <p>
            RD1 is developing this statement further as we take on framework and public-sector work where a quantified social value contribution is required, and will update this page as specific commitments are agreed for individual contracts.
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
            The Directors are responsible for this statement and for agreeing any contract-specific social value commitments.
          </p>
        </div>
      </section>
    </PolicyDocument>
  );
}
