import type { Metadata } from "next";
import PolicyDocument from "@/components/PolicyDocument";

export const metadata: Metadata = {
  title: "Working Time Regulations Compliance Policy | Recruitment Direct UK",
  description:
    "Recruitment Direct UK Ltd's compliance with the Working Time Regulations 1998, covering maximum hours, rest breaks and annual leave for placed workers.",
  alternates: {
    canonical: "https://rd1.co.uk/working-time-regulations-policy",
  },
  openGraph: {
    title: "Working Time Regulations Compliance Policy | Recruitment Direct UK",
    description:
      "Recruitment Direct UK Ltd's compliance with the Working Time Regulations 1998, covering maximum hours, rest breaks and annual leave for placed workers.",
    url: "https://rd1.co.uk/working-time-regulations-policy",
    type: "website",
    siteName: "Recruitment Direct UK Ltd",
  },
};

export default function WorkingTimeRegulationsPolicyPage() {
  return (
    <PolicyDocument
      title="Working Time Regulations Compliance Policy"
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
            RD1 complies with the Working Time Regulations 1998 (as amended) for its own staff and monitors compliance for workers it places on assignment, working with client organisations to ensure statutory limits and entitlements are respected.
          </p>
        </div>
      </section>

      {/* Maximum weekly working time */}
      <section className="policy-section">
        <h2 className="text-xl md:text-2xl font-bold font-heading text-black mb-4">
          Maximum Weekly Working Time
        </h2>
        <div className="space-y-4 text-base md:text-lg text-gray-800 leading-relaxed">
          <p>
            Workers are not required to work more than an average of 48 hours per week (calculated over a 17-week reference period), unless they have signed a voluntary opt-out. RD1 does not pressure any worker to sign an opt-out, and a worker may cancel an opt-out at any time on giving the required notice.
          </p>
        </div>
      </section>

      {/* Rest breaks and rest periods */}
      <section className="policy-section">
        <h2 className="text-xl md:text-2xl font-bold font-heading text-black mb-4">
          Rest Breaks and Rest Periods
        </h2>
        <div className="space-y-4 text-base md:text-lg text-gray-800 leading-relaxed">
          <p>
            Workers are entitled to: a 20-minute rest break where a working day is longer than 6 hours; at least 11 consecutive hours of rest in each 24-hour period; and at least 24 hours of uninterrupted rest each week (or 48 hours per fortnight). Where a worker holds more than one assignment through RD1, or combines an RD1 assignment with other work RD1 is aware of, RD1 considers the combined hours when assessing compliance with these limits.
          </p>
        </div>
      </section>

      {/* Night work */}
      <section className="policy-section">
        <h2 className="text-xl md:text-2xl font-bold font-heading text-black mb-4">
          Night Work
        </h2>
        <div className="space-y-4 text-base md:text-lg text-gray-800 leading-relaxed">
          <p>
            Where a placement involves night work (work between 11pm and 6am, or an equivalent agreed period), RD1 ensures average night working hours do not exceed 8 hours in any 24-hour period, and that a worker in a role involving special hazards is not scheduled to work more than 8 hours in any 24-hour period during which night work is performed. Night workers are entitled to a free health assessment before starting night work and periodically afterwards.
          </p>
        </div>
      </section>

      {/* Annual leave */}
      <section className="policy-section">
        <h2 className="text-xl md:text-2xl font-bold font-heading text-black mb-4">
          Annual Leave
        </h2>
        <div className="space-y-4 text-base md:text-lg text-gray-800 leading-relaxed">
          <p>
            Workers are entitled to a minimum of 5.6 weeks&apos; paid annual leave per year (pro-rated for part-time or part-year workers), which can include public/bank holidays. Holiday entitlement and pay arrangements for each assignment are set out in the worker&apos;s Key Information Document.
          </p>
        </div>
      </section>

      {/* How we monitor this */}
      <section className="policy-section">
        <h2 className="text-xl md:text-2xl font-bold font-heading text-black mb-4">
          How We Monitor This
        </h2>
        <div className="space-y-4 text-base md:text-lg text-gray-800 leading-relaxed">
          <p>
            RD1 requests working-hours information from clients as part of assignment set-up, asks workers to raise any concern about hours or rest breaks directly, and does not knowingly continue to place a worker into a pattern of work that breaches these limits.
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
            Any worker with a concern about their hours, rest breaks, or annual leave should contact RD1 via accounts@rd1.co.uk.
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
            The Directors are responsible for ensuring this policy is applied and reviewed at least annually, or sooner following a relevant change in the law.
          </p>
        </div>
      </section>
    </PolicyDocument>
  );
}
