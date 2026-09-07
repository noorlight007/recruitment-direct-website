import type { Metadata } from "next";
import Link from "next/link";
import PolicyDocument from "@/components/PolicyDocument";

export const metadata: Metadata = {
  title: "Safeguarding Policy | Recruitment Direct UK",
  description:
    "How Recruitment Direct UK Ltd safeguards children and vulnerable adults when placing workers into regulated roles.",
  alternates: {
    canonical: "https://rd1.co.uk/safeguarding-policy",
  },
  openGraph: {
    title: "Safeguarding Policy | Recruitment Direct UK",
    description:
      "How Recruitment Direct UK Ltd safeguards children and vulnerable adults when placing workers into regulated roles.",
    url: "https://rd1.co.uk/safeguarding-policy",
    type: "website",
    siteName: "Recruitment Direct UK Ltd",
  },
};

export default function SafeguardingPolicyPage() {
  return (
    <PolicyDocument
      title="Safeguarding Policy (Children & Vulnerable Adults)"
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
            Where RD1 places workers into roles that involve contact with children or vulnerable adults &mdash; for example in education, healthcare, or social care settings &mdash; we take our safeguarding responsibilities seriously, in line with the Children Act 1989 and 2004, the Care Act 2014, and the vetting and barring framework under the Protection of Freedoms Act 2012.
          </p>
        </div>
      </section>

      {/* Our commitment */}
      <section className="policy-section">
        <h2 className="text-xl md:text-2xl font-bold font-heading text-black mb-4">
          Our Commitment
        </h2>
        <div className="space-y-4 text-base md:text-lg text-gray-800 leading-relaxed">
          <p>
            RD1 will not knowingly place a worker into a role requiring contact with children or vulnerable adults without appropriate vetting having been completed and verified &mdash; see our{" "}
            <Link href="/safer-recruitment-vetting-policy" className="text-blue-600 hover:underline">
              Safer Recruitment &amp; Vetting Policy
            </Link>{" "}
            for the checks we carry out.
          </p>
        </div>
      </section>

      {/* Recognising and responding to concerns */}
      <section className="policy-section">
        <h2 className="text-xl md:text-2xl font-bold font-heading text-black mb-4">
          Recognising and Responding to Concerns
        </h2>
        <div className="space-y-4 text-base md:text-lg text-gray-800 leading-relaxed">
          <p>
            Any employee, worker, or client contact who has a safeguarding concern about a child or vulnerable adult connected with an RD1 placement &mdash; including a concern about the conduct of an RD1-placed worker &mdash; should report it immediately to a Director. Where there is immediate risk of harm, the matter should be reported directly to the police or emergency services, and to the relevant local authority safeguarding team, without waiting for an internal process.
          </p>
        </div>
      </section>

      {/* Confidentiality and information sharing */}
      <section className="policy-section">
        <h2 className="text-xl md:text-2xl font-bold font-heading text-black mb-4">
          Confidentiality and Information Sharing
        </h2>
        <div className="space-y-4 text-base md:text-lg text-gray-800 leading-relaxed">
          <p>
            Safeguarding concerns will be treated with appropriate confidentiality, but information will be shared with statutory agencies (such as the police, local authority, or the Disclosure and Barring Service) where necessary to protect a child or vulnerable adult, in line with data protection law&apos;s specific provisions for safeguarding disclosures.
          </p>
        </div>
      </section>

      {/* Working with client organisations */}
      <section className="policy-section">
        <h2 className="text-xl md:text-2xl font-bold font-heading text-black mb-4">
          Working with Client Organisations
        </h2>
        <div className="space-y-4 text-base md:text-lg text-gray-800 leading-relaxed">
          <p>
            Where RD1 places workers into regulated settings, we work with the client to confirm their own safeguarding policy and reporting lines, and ensure our workers are made aware of them as part of their assignment briefing.
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
            The Directors act as RD1&apos;s safeguarding lead and are responsible for ensuring this policy is followed and reviewed at least annually.
          </p>
        </div>
      </section>
    </PolicyDocument>
  );
}
