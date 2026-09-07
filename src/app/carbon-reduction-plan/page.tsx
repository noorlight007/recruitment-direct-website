import type { Metadata } from "next";
import PolicyDocument from "@/components/PolicyDocument";

export const metadata: Metadata = {
  title: "Carbon Reduction Plan | Recruitment Direct UK",
  description:
    "Recruitment Direct UK Ltd's commitment to reducing its carbon footprint, including a hybrid working policy that cuts commuting emissions.",
  alternates: {
    canonical: "https://rd1.co.uk/carbon-reduction-plan",
  },
  openGraph: {
    title: "Carbon Reduction Plan | Recruitment Direct UK",
    description:
      "Recruitment Direct UK Ltd's commitment to reducing its carbon footprint, including a hybrid working policy that cuts commuting emissions.",
    url: "https://rd1.co.uk/carbon-reduction-plan",
    type: "website",
    siteName: "Recruitment Direct UK Ltd",
  },
};

export default function CarbonReductionPlanPage() {
  return (
    <PolicyDocument
      title="Carbon Reduction Plan"
      effectiveDate="7 September 2026"
      reviewDate="September 2027"
    >
      {/* Commitment to net zero */}
      <section className="policy-section">
        <h2 className="text-xl md:text-2xl font-bold font-heading text-black mb-4">
          Commitment to Net Zero
        </h2>
        <div className="space-y-4 text-base md:text-lg text-gray-800 leading-relaxed">
          <p>
            Recruitment Direct UK Ltd is committed to reducing its carbon footprint and supporting the UK&apos;s transition to net zero by 2050, in line with the UK Government&apos;s Climate Change Act 2008 (as amended by the Climate Change Act 2008 (2050 Target Amendment) Order 2019).
          </p>
        </div>
      </section>

      {/* Current emissions reduction measures */}
      <section className="policy-section">
        <h2 className="text-xl md:text-2xl font-bold font-heading text-black mb-4">
          Current Emissions Reduction Measures
        </h2>
        <div className="space-y-4 text-base md:text-lg text-gray-800 leading-relaxed">
          <ul className="space-y-3 pl-2">
            {[
              "Hybrid working: RD1 staff work from the Linlithgow office on average 40% of working time, with the remaining 60% home-based, substantially reducing commuting-related transport emissions compared with a fully office-based model.",
              "Video and AI-assisted screening (via CallPilot) reducing candidate and client travel for early-stage interviews.",
              "Digital-first processes reducing paper, printing, and postage.",
              "Office premises let on terms that include electricity and gas within the rental charge, incentivising the landlord to manage building-level energy efficiency.",
            ].map((item, idx) => (
              <li key={idx} className="flex items-start gap-3 text-gray-800">
                <span className="w-1.5 h-1.5 bg-blue-600 rounded-full flex-shrink-0 mt-2.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Baseline and reporting */}
      <section className="policy-section">
        <h2 className="text-xl md:text-2xl font-bold font-heading text-black mb-4">
          Baseline and Reporting
        </h2>
        <div className="space-y-4 text-base md:text-lg text-gray-800 leading-relaxed">
          <p>
            RD1&apos;s Linlithgow office is rented on an inclusive-rent basis, with electricity and gas supplied as part of the tenancy rather than separately metered and billed to RD1. This means a conventional Scope 1/2 baseline built from RD1&apos;s own utility bills isn&apos;t available, which is a common position for a small tenant in a serviced/inclusive-rent unit. RD1&apos;s most significant and directly measurable lever is therefore the amount of time worked from the office versus from home, tracked above at a 40/60 split.
          </p>
          <p className="text-sm text-gray-600 italic bg-gray-50 border border-gray-200 rounded-lg p-4">
            Note: If a specific public sector framework or procurement contract requires a fully quantified Scope 1/2/3 baseline, RD1 will work with the landlord to obtain apportioned building energy data.
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
            The Directors are responsible for this statement and for developing a fully quantified Carbon Reduction Plan should client or framework requirements make this necessary.
          </p>
        </div>
      </section>
    </PolicyDocument>
  );
}
