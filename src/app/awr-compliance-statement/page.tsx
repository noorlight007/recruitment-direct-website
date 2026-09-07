import type { Metadata } from "next";
import PolicyDocument from "@/components/PolicyDocument";

export const metadata: Metadata = {
  title: "AWR Compliance Statement | Recruitment Direct UK",
  description:
    "Recruitment Direct UK Ltd's compliance with the Agency Workers Regulations 2010, covering day-one rights and equal treatment after 12 weeks.",
  alternates: {
    canonical: "https://rd1.co.uk/awr-compliance-statement",
  },
  openGraph: {
    title: "AWR Compliance Statement | Recruitment Direct UK",
    description:
      "Recruitment Direct UK Ltd's compliance with the Agency Workers Regulations 2010, covering day-one rights and equal treatment after 12 weeks.",
    url: "https://rd1.co.uk/awr-compliance-statement",
    type: "website",
    siteName: "Recruitment Direct UK Ltd",
  },
};

export default function AwrComplianceStatementPage() {
  return (
    <PolicyDocument
      title="Agency Workers Regulations (AWR) Compliance Statement"
      effectiveDate="7 September 2026"
      reviewDate="September 2027"
    >
      {/* Our commitment */}
      <section className="policy-section">
        <h2 className="text-xl md:text-2xl font-bold font-heading text-black mb-4">
          Our Commitment
        </h2>
        <div className="space-y-4 text-base md:text-lg text-gray-800 leading-relaxed">
          <p>
            RD1 complies fully with the Agency Workers Regulations 2010 (AWR) for every worker it supplies on an assignment basis.
          </p>
        </div>
      </section>

      {/* Day-one rights */}
      <section className="policy-section">
        <h2 className="text-xl md:text-2xl font-bold font-heading text-black mb-4">
          Day-One Rights
        </h2>
        <div className="space-y-4 text-base md:text-lg text-gray-800 leading-relaxed">
          <p>
            From the first day of an assignment, every agency worker placed by RD1 is entitled to the same access to collective facilities and amenities provided by the hirer (such as staff canteens, childcare facilities, and transport services) as a comparable permanent employee, and to be informed of relevant job vacancies with the hirer.
          </p>
        </div>
      </section>

      {/* Equal treatment after 12 weeks */}
      <section className="policy-section">
        <h2 className="text-xl md:text-2xl font-bold font-heading text-black mb-4">
          Equal Treatment After 12 Weeks
        </h2>
        <div className="space-y-4 text-base md:text-lg text-gray-800 leading-relaxed">
          <p>
            Once an agency worker has completed 12 continuous calendar weeks in the same role with the same hirer (the &ldquo;qualifying period,&rdquo; calculated in line with AWR rules on breaks in assignment), RD1 ensures they receive at least the same basic working and employment conditions as they would have received if directly recruited by the hirer for the same role &mdash; covering pay, working time, night work, rest periods and breaks, and annual leave.
          </p>
        </div>
      </section>

      {/* How we manage this */}
      <section className="policy-section">
        <h2 className="text-xl md:text-2xl font-bold font-heading text-black mb-4">
          How We Manage This
        </h2>
        <div className="space-y-4 text-base md:text-lg text-gray-800 leading-relaxed">
          <p>
            Before an assignment begins, RD1 requests from the hirer the pay and basic working conditions that would apply to a comparable directly recruited employee, so that equal treatment can be applied correctly once the qualifying period is reached. RD1 tracks assignment length and any qualifying breaks to determine when the 12-week threshold is met, and adjusts pay and conditions accordingly without requiring the worker to request it.
          </p>
        </div>
      </section>

      {/* Worker information */}
      <section className="policy-section">
        <h2 className="text-xl md:text-2xl font-bold font-heading text-black mb-4">
          Worker Information
        </h2>
        <div className="space-y-4 text-base md:text-lg text-gray-800 leading-relaxed">
          <p>
            Every agency worker is given a Key Information Document before agreeing terms with RD1, setting out their pay arrangements, including any deductions, in line with the Conduct of Employment Agencies and Employment Businesses Regulations 2003 (as amended).
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
            Any worker with a question about their AWR entitlement, or who believes they have not received equal treatment they are entitled to, should contact RD1 directly via{" "}
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
