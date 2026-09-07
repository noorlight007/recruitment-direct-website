import type { Metadata } from "next";
import PolicyDocument from "@/components/PolicyDocument";

export const metadata: Metadata = {
  title: "Conflict of Interest Policy | Recruitment Direct UK",
  description:
    "How Recruitment Direct UK Ltd identifies, declares and manages conflicts of interest in recruitment and commercial decisions.",
  alternates: {
    canonical: "https://rd1.co.uk/conflict-of-interest-policy",
  },
  openGraph: {
    title: "Conflict of Interest Policy | Recruitment Direct UK",
    description:
      "How Recruitment Direct UK Ltd identifies, declares and manages conflicts of interest in recruitment and commercial decisions.",
    url: "https://rd1.co.uk/conflict-of-interest-policy",
    type: "website",
    siteName: "Recruitment Direct UK Ltd",
  },
};

export default function ConflictOfInterestPolicyPage() {
  return (
    <PolicyDocument
      title="Conflict of Interest Policy"
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
            This policy ensures that decisions made by RD1 staff &mdash; particularly around which candidates are put forward, which clients are prioritised, and which suppliers or partners are engaged &mdash; are made fairly and are not improperly influenced by personal interest.
          </p>
        </div>
      </section>

      {/* What counts as a conflict */}
      <section className="policy-section">
        <h2 className="text-xl md:text-2xl font-bold font-heading text-black mb-4">
          What Counts as a Conflict
        </h2>
        <div className="space-y-4 text-base md:text-lg text-gray-800 leading-relaxed">
          <p>
            A conflict of interest may arise where an employee or worker, or a close family member: has a financial interest in a client or candidate business; is related to or in a personal relationship with a candidate being considered for a role, or a client contact making a hiring decision; holds a second job or directorship with a competing recruitment business; or stands to gain personally (beyond normal remuneration) from a placement, referral, or supplier choice.
          </p>
        </div>
      </section>

      {/* Declaration */}
      <section className="policy-section">
        <h2 className="text-xl md:text-2xl font-bold font-heading text-black mb-4">
          Declaration
        </h2>
        <div className="space-y-4 text-base md:text-lg text-gray-800 leading-relaxed">
          <p>
            Any actual, potential, or perceived conflict of interest must be declared to a Director as soon as it becomes apparent, before any related decision is made. Declarations are recorded and reviewed to decide whether the individual should be excluded from the decision, whether additional oversight is needed, or whether no action is required.
          </p>
        </div>
      </section>

      {/* Ongoing obligation */}
      <section className="policy-section">
        <h2 className="text-xl md:text-2xl font-bold font-heading text-black mb-4">
          Ongoing Obligation
        </h2>
        <div className="space-y-4 text-base md:text-lg text-gray-800 leading-relaxed">
          <p>
            This is a continuing duty, not a one-off disclosure &mdash; new conflicts must be declared as they arise, including changes in personal circumstances or outside business interests.
          </p>
        </div>
      </section>

      {/* Consequences */}
      <section className="policy-section">
        <h2 className="text-xl md:text-2xl font-bold font-heading text-black mb-4">
          Consequences
        </h2>
        <div className="space-y-4 text-base md:text-lg text-gray-800 leading-relaxed">
          <p>
            Failure to declare a known conflict of interest will be treated as a disciplinary matter and may affect the validity of any placement or commercial decision involved.
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
            The Directors maintain the register of declared interests and are the point of contact for any declaration or query under this policy.
          </p>
        </div>
      </section>
    </PolicyDocument>
  );
}
