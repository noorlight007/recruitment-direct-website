import type { Metadata } from "next";
import PolicyDocument from "@/components/PolicyDocument";

export const metadata: Metadata = {
  title: "Business Continuity Policy | Recruitment Direct UK",
  description:
    "How Recruitment Direct UK Ltd maintains and recovers critical recruitment services, including payroll continuity, during a major disruption.",
  alternates: {
    canonical: "https://rd1.co.uk/business-continuity-policy",
  },
  openGraph: {
    title: "Business Continuity Policy | Recruitment Direct UK",
    description:
      "How Recruitment Direct UK Ltd maintains and recovers critical recruitment services, including payroll continuity, during a major disruption.",
    url: "https://rd1.co.uk/business-continuity-policy",
    type: "website",
    siteName: "Recruitment Direct UK Ltd",
  },
};

export default function BusinessContinuityPolicyPage() {
  return (
    <PolicyDocument
      title="Business Continuity & Disaster Recovery Policy"
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
            This policy sets out how RD1 plans to maintain and recover its critical recruitment services &mdash; including candidate and client data systems, the CallPilot AI screening platform, and payroll continuity for placed workers &mdash; in the event of a significant disruption.
          </p>
        </div>
      </section>

      {/* Scope of risks considered */}
      <section className="policy-section">
        <h2 className="text-xl md:text-2xl font-bold font-heading text-black mb-4">
          Scope of Risks Considered
        </h2>
        <div className="space-y-4 text-base md:text-lg text-gray-800 leading-relaxed">
          <p>
            IT and systems failure or cyber incident (RD1 holds Cyber Essentials certification, No. 4686a995, as part of its baseline cyber resilience); loss of access to premises (fire, flood, utility failure); loss of key personnel; and supplier or third-party platform outage (including client-facing ATS/CRM and CallPilot infrastructure).
          </p>
        </div>
      </section>

      {/* Continuity arrangements */}
      <section className="policy-section">
        <h2 className="text-xl md:text-2xl font-bold font-heading text-black mb-4">
          Continuity Arrangements
        </h2>
        <div className="space-y-4 text-base md:text-lg text-gray-800 leading-relaxed">
          <ul className="space-y-3 pl-2">
            {[
              "Data and systems: candidate, client, and worker data is held in cloud-based systems with vendor-managed backup and redundancy, reducing reliance on any single physical location.",
              "Remote working: RD1's core recruitment functions (candidate sourcing, client liaison, payroll administration) can be carried out remotely, allowing continued service if the Linlithgow office is unavailable.",
              "Key contacts: an up-to-date list of essential supplier, client, and payroll contacts is maintained separately from primary systems.",
              "Communication: in a disruption affecting service, RD1 will notify affected clients and workers as soon as practicable with an expected timeline for resumption.",
            ].map((item, idx) => (
              <li key={idx} className="flex items-start gap-3 text-gray-800">
                <span className="w-1.5 h-1.5 bg-blue-600 rounded-full flex-shrink-0 mt-2.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Incident response */}
      <section className="policy-section">
        <h2 className="text-xl md:text-2xl font-bold font-heading text-black mb-4">
          Incident Response
        </h2>
        <div className="space-y-4 text-base md:text-lg text-gray-800 leading-relaxed">
          <p>
            On identifying a significant incident, a Director will assess impact and priority (payroll continuity for placed workers is treated as the highest priority, given its impact on individuals&apos; income), stand up whatever remote or alternative working arrangement is needed, and communicate with affected parties.
          </p>
        </div>
      </section>

      {/* Testing and review */}
      <section className="policy-section">
        <h2 className="text-xl md:text-2xl font-bold font-heading text-black mb-4">
          Testing and Review
        </h2>
        <div className="space-y-4 text-base md:text-lg text-gray-800 leading-relaxed">
          <p>
            This policy, and the practical arrangements behind it, is reviewed at least annually and after any incident that tests it in practice.
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
            The Directors are responsible for maintaining and invoking this policy.
          </p>
        </div>
      </section>
    </PolicyDocument>
  );
}
