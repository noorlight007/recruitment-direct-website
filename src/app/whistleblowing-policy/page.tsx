import type { Metadata } from "next";
import PolicyDocument from "@/components/PolicyDocument";

export const metadata: Metadata = {
  title: "Whistleblowing Policy | Recruitment Direct UK",
  description:
    "How to raise a concern about malpractice or wrongdoing at Recruitment Direct UK Ltd, protected under the Public Interest Disclosure Act 1998.",
  alternates: {
    canonical: "https://rd1.co.uk/whistleblowing-policy",
  },
  openGraph: {
    title: "Whistleblowing Policy | Recruitment Direct UK",
    description:
      "How to raise a concern about malpractice or wrongdoing at Recruitment Direct UK Ltd, protected under the Public Interest Disclosure Act 1998.",
    url: "https://rd1.co.uk/whistleblowing-policy",
    type: "website",
    siteName: "Recruitment Direct UK Ltd",
  },
};

export default function WhistleblowingPolicyPage() {
  return (
    <PolicyDocument
      title="Whistleblowing Policy"
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
            RD1 wants employees, workers, and candidates to feel able to raise genuine concerns about malpractice, risk, or wrongdoing without fear of reprisal. This policy reflects the protections available under the Public Interest Disclosure Act 1998 (as incorporated into the Employment Rights Act 1996).
          </p>
        </div>
      </section>

      {/* What is a qualifying disclosure */}
      <section className="policy-section">
        <h2 className="text-xl md:text-2xl font-bold font-heading text-black mb-4">
          What is a Qualifying Disclosure
        </h2>
        <div className="space-y-4 text-base md:text-lg text-gray-800 leading-relaxed">
          <p>
            A concern is covered by this policy where the person reasonably believes it is in the public interest and shows one or more of: a criminal offence, breach of a legal obligation, miscarriage of justice, danger to health and safety, damage to the environment, or the deliberate concealment of any of these. This includes concerns about how RD1 sources, screens, or places candidates, how client or candidate data is handled, or how CallPilot&apos;s automated screening is used.
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
            Concerns can be raised, in the first instance, with a Director, or in writing to{" "}
            <a href="mailto:accounts@rd1.co.uk" className="text-blue-600 hover:underline">
              accounts@rd1.co.uk
            </a>{" "}
            marked for the attention of the Directors. Concerns can be raised verbally or in writing and, where possible, will be treated confidentially &mdash; RD1 will not disclose the identity of the person raising a concern without their consent, unless required by law.
          </p>
        </div>
      </section>

      {/* What happens next */}
      <section className="policy-section">
        <h2 className="text-xl md:text-2xl font-bold font-heading text-black mb-4">
          What Happens Next
        </h2>
        <div className="space-y-4 text-base md:text-lg text-gray-800 leading-relaxed">
          <p>
            RD1 will acknowledge receipt within 5 working days, assess whether the matter falls within this policy, and carry out a proportionate investigation. The person raising the concern will be told the outcome so far as is appropriate and lawful, though the details of any resulting disciplinary action will remain confidential to the individuals involved.
          </p>
        </div>
      </section>

      {/* Protection from detriment */}
      <section className="policy-section">
        <h2 className="text-xl md:text-2xl font-bold font-heading text-black mb-4">
          Protection from Detriment
        </h2>
        <div className="space-y-4 text-base md:text-lg text-gray-800 leading-relaxed">
          <p>
            No one who raises a genuine concern in good faith under this policy will be subjected to any detriment, victimisation, or dismissal as a result, even if the concern turns out to be mistaken. Deliberately false or malicious allegations are treated as a disciplinary matter.
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
            The Directors are responsible for the operation of this policy and for ensuring concerns are dealt with fairly, promptly, and confidentially.
          </p>
        </div>
      </section>
    </PolicyDocument>
  );
}
