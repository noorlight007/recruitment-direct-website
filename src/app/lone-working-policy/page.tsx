import type { Metadata } from "next";
import PolicyDocument from "@/components/PolicyDocument";

export const metadata: Metadata = {
  title: "Lone Working Policy | Recruitment Direct UK",
  description:
    "How Recruitment Direct UK Ltd assesses and manages the risks to workers placed in lone-working roles, in line with HSE guidance.",
  alternates: {
    canonical: "https://rd1.co.uk/lone-working-policy",
  },
  openGraph: {
    title: "Lone Working Policy | Recruitment Direct UK",
    description:
      "How Recruitment Direct UK Ltd assesses and manages the risks to workers placed in lone-working roles, in line with HSE guidance.",
    url: "https://rd1.co.uk/lone-working-policy",
    type: "website",
    siteName: "Recruitment Direct UK Ltd",
  },
};

export default function LoneWorkingPolicyPage() {
  return (
    <PolicyDocument
      title="Lone Working Policy"
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
            Where RD1 places workers into roles that involve working alone — without direct supervision or immediate access to colleague support, for example home visits, out-of-hours or night shifts, security, or certain care and site-based roles — this policy sets out how those risks are assessed and managed, in line with the Health and Safety at Work etc. Act 1974 and the Management of Health and Safety at Work Regulations 1999, and current HSE guidance on lone working.
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
            RD1 does not currently have any active placements that involve lone working. This policy is published so that, should a future placement involve lone working, the correct assessment and management process is already in place and applied from day one rather than developed after the fact.
          </p>
        </div>
      </section>

      {/* Before placement */}
      <section className="policy-section">
        <h2 className="text-xl md:text-2xl font-bold font-heading text-black mb-4">
          Before Placement
        </h2>
        <div className="space-y-4 text-base md:text-lg text-gray-800 leading-relaxed">
          <p>
            Before placing a worker into a role RD1 knows or reasonably suspects involves lone working, RD1: confirms with the client that a specific risk assessment covering lone working has been carried out for the role; establishes what supervision, check-in, and emergency arrangements the client has in place; and briefs the worker on those arrangements, and on how to raise a concern, before the assignment starts.
          </p>
        </div>
      </section>

      {/* Client responsibilities */}
      <section className="policy-section">
        <h2 className="text-xl md:text-2xl font-bold font-heading text-black mb-4">
          Client Responsibilities
        </h2>
        <div className="space-y-4 text-base md:text-lg text-gray-800 leading-relaxed">
          <p>
            As the workplace controller, the client is responsible for the day-to-day risk assessment and control measures at the site — including whether the role is suitable for lone working at all, whether the worker needs specific training or equipment (e.g. a personal alarm or lone-worker device), and what the check-in/escalation procedure is if the worker doesn&apos;t check in as expected.
          </p>
        </div>
      </section>

      {/* RD1's ongoing role */}
      <section className="policy-section">
        <h2 className="text-xl md:text-2xl font-bold font-heading text-black mb-4">
          RD1&apos;s Ongoing Role
        </h2>
        <div className="space-y-4 text-base md:text-lg text-gray-800 leading-relaxed">
          <p>
            RD1 requires workers in lone-working roles to report any incident, near-miss, or safety concern to both the client and to RD1, and will not continue to place a worker into a lone-working role where the client cannot demonstrate adequate arrangements are in place. Where a worker raises a concern about the adequacy of lone-working arrangements at a client site, RD1 will follow this up with the client before the worker returns to that site.
          </p>
        </div>
      </section>

      {/* Higher-risk situations */}
      <section className="policy-section">
        <h2 className="text-xl md:text-2xl font-bold font-heading text-black mb-4">
          Higher-Risk Situations
        </h2>
        <div className="space-y-4 text-base md:text-lg text-gray-800 leading-relaxed">
          <p>
            Extra care is taken where a lone-working role also involves a higher individual risk factor — for example a new or young worker, a worker with a condition that could affect their safety when unsupervised, or first-time attendance at an unfamiliar site — with a check-in arranged for the first shift or visit where appropriate.
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
            The Directors are responsible for ensuring this policy is applied before any placement RD1 knows to involve lone working, and for reviewing it annually or after any relevant incident.
          </p>
        </div>
      </section>
    </PolicyDocument>
  );
}
