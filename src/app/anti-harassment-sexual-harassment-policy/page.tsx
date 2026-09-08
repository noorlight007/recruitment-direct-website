import type { Metadata } from "next";
import PolicyDocument from "@/components/PolicyDocument";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Anti-Harassment & Sexual Harassment Policy | Recruitment Direct UK",
  description:
    "Recruitment Direct UK Ltd's zero-tolerance approach to harassment and sexual harassment, including the proactive duty under the Worker Protection Act 2023.",
  alternates: {
    canonical: "https://rd1.co.uk/anti-harassment-sexual-harassment-policy",
  },
  openGraph: {
    title: "Anti-Harassment & Sexual Harassment Policy | Recruitment Direct UK",
    description:
      "Recruitment Direct UK Ltd's zero-tolerance approach to harassment and sexual harassment, including the proactive duty under the Worker Protection Act 2023.",
    url: "https://rd1.co.uk/anti-harassment-sexual-harassment-policy",
    type: "website",
    siteName: "Recruitment Direct UK Ltd",
  },
};

export default function AntiHarassmentSexualHarassmentPolicyPage() {
  return (
    <PolicyDocument
      title="Anti-Harassment & Sexual Harassment Policy"
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
            RD1 is committed to a working environment — for its own staff, placed workers, candidates, and anyone dealing with the business — that is free from harassment and sexual harassment, in line with the Equality Act 2010 and the Worker Protection (Amendment of Equality Act 2010) Act 2023.
          </p>
        </div>
      </section>

      {/* Our duty to prevent, not just respond */}
      <section className="policy-section">
        <h2 className="text-xl md:text-2xl font-bold font-heading text-black mb-4">
          Our Duty to Prevent, Not Just Respond
        </h2>
        <div className="space-y-4 text-base md:text-lg text-gray-800 leading-relaxed">
          <p>
            Since October 2024, employers have a proactive legal duty to take reasonable steps to prevent sexual harassment of their employees in the course of employment — this is a higher bar than simply dealing with complaints after the fact. RD1 meets this duty by assessing where harassment risk may arise (including at client sites, during placements, and in remote/hybrid working), taking practical preventative steps, and treating this as an ongoing responsibility rather than a one-off exercise.
          </p>
        </div>
      </section>

      {/* What this covers */}
      <section className="policy-section">
        <h2 className="text-xl md:text-2xl font-bold font-heading text-black mb-4">
          What This Covers
        </h2>
        <div className="space-y-4 text-base md:text-lg text-gray-800 leading-relaxed">
          <p>
            Harassment is unwanted conduct related to a protected characteristic (age, disability, gender reassignment, race, religion or belief, sex, sexual orientation, marriage/civil partnership, pregnancy/maternity) that violates a person&apos;s dignity or creates an intimidating, hostile, degrading, humiliating, or offensive environment. Sexual harassment is unwanted conduct of a sexual nature and is treated with the same seriousness, whether it comes from a colleague, a manager, a client, a candidate, or any third party RD1 staff or placed workers come into contact with in the course of their work.
          </p>
        </div>
      </section>

      {/* Third-party harassment */}
      <section className="policy-section">
        <h2 className="text-xl md:text-2xl font-bold font-heading text-black mb-4">
          Third-Party Harassment
        </h2>
        <div className="space-y-4 text-base md:text-lg text-gray-800 leading-relaxed">
          <p>
            Because RD1 places workers with client organisations, this policy explicitly covers harassment by people who are not RD1 employees — a client&apos;s staff, a client&apos;s customers, or a candidate — where it occurs in connection with an RD1 placement or engagement. Workers and staff are encouraged to report this in exactly the same way as harassment by an RD1 colleague, and RD1 will act on it with the client where appropriate, including ending a placement where necessary to protect a worker.
          </p>
        </div>
      </section>

      {/* How to raise a concern */}
      <section className="policy-section">
        <h2 className="text-xl md:text-2xl font-bold font-heading text-black mb-4">
          How to Raise a Concern
        </h2>
        <div className="space-y-4 text-base md:text-lg text-gray-800 leading-relaxed">
          <p>
            Concerns can be raised with a Director, via our{" "}
            <Link href="/complaints-policy" className="text-blue-600 underline hover:text-blue-800">
              Complaints Policy
            </Link>
            , or confidentially via our{" "}
            <Link href="/whistleblowing-policy" className="text-blue-600 underline hover:text-blue-800">
              Whistleblowing Policy
            </Link>{" "}
            where appropriate. All concerns are treated seriously, investigated promptly and proportionately, and handled with as much confidentiality as the circumstances allow.
          </p>
        </div>
      </section>

      {/* No retaliation */}
      <section className="policy-section">
        <h2 className="text-xl md:text-2xl font-bold font-heading text-black mb-4">
          No Retaliation
        </h2>
        <div className="space-y-4 text-base md:text-lg text-gray-800 leading-relaxed">
          <p>
            No one who raises a genuine concern about harassment in good faith will suffer any detriment as a result, including where the concern relates to a client or third party rather than an RD1 colleague.
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
            Harassment or sexual harassment by an RD1 employee or worker is treated as gross misconduct and may result in disciplinary action up to and including dismissal or termination of engagement. Where the conduct involves a client or third party, RD1 will take proportionate action, which may include raising the matter formally with the client or ending the commercial relationship.
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
            The Directors are responsible for this policy, for keeping RD1&apos;s preventative steps under review as required by the Worker Protection Act 2023, and for ensuring concerns are handled fairly and promptly.
          </p>
        </div>
      </section>
    </PolicyDocument>
  );
}
