import type { Metadata } from "next";
import PolicyDocument from "@/components/PolicyDocument";

export const metadata: Metadata = {
  title: "Right to Work & Immigration Policy | Recruitment Direct UK",
  description:
    "How Recruitment Direct UK Ltd checks and verifies every candidate's right to work in the UK, in line with Home Office guidance.",
  alternates: {
    canonical: "https://rd1.co.uk/right-to-work-policy",
  },
  openGraph: {
    title: "Right to Work & Immigration Policy | Recruitment Direct UK",
    description:
      "How Recruitment Direct UK Ltd checks and verifies every candidate's right to work in the UK, in line with Home Office guidance.",
    url: "https://rd1.co.uk/right-to-work-policy",
    type: "website",
    siteName: "Recruitment Direct UK Ltd",
  },
};

export default function RightToWorkPolicyPage() {
  return (
    <PolicyDocument
      title="Right to Work & Immigration Compliance Policy"
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
            RD1 complies with the Immigration, Asylum and Nationality Act 2006 and the Immigration Act 2016, and follows current Home Office guidance, to ensure that every candidate placed into work in the UK has the legal right to do so.
          </p>
        </div>
      </section>

      {/* Our checking process */}
      <section className="policy-section">
        <h2 className="text-xl md:text-2xl font-bold font-heading text-black mb-4">
          Our Checking Process
        </h2>
        <div className="space-y-4 text-base md:text-lg text-gray-800 leading-relaxed">
          <p>
            Before any candidate is placed into an assignment or permanent role, RD1 (or, where contractually agreed, the client) carries out a right to work check consisting of: obtaining original or Home Office-verified digital documents evidencing the individual&apos;s right to work; checking the documents are genuine and belong to the candidate; and retaining a clear copy of the check, along with the date it was carried out, for the duration of employment plus two years, as required by Home Office guidance.
          </p>
        </div>
      </section>

      {/* Digital and share code checks */}
      <section className="policy-section">
        <h2 className="text-xl md:text-2xl font-bold font-heading text-black mb-4">
          Digital and Share Code Checks
        </h2>
        <div className="space-y-4 text-base md:text-lg text-gray-800 leading-relaxed">
          <p>
            Where a candidate holds an eVisa or biometric residence status, RD1 uses the Home Office online right to work checking service and share codes, and, where appropriate, an Identity Service Provider for digital identity verification of British and Irish passport holders, in line with current Home Office certified-provider requirements.
          </p>
        </div>
      </section>

      {/* Ongoing and follow-up checks */}
      <section className="policy-section">
        <h2 className="text-xl md:text-2xl font-bold font-heading text-black mb-4">
          Ongoing and Follow-Up Checks
        </h2>
        <div className="space-y-4 text-base md:text-lg text-gray-800 leading-relaxed">
          <p>
            Where a candidate has time-limited permission to work, RD1 diarises and carries out a follow-up check before that permission expires, and will not continue to place the individual in work if a valid right to work cannot be re-confirmed.
          </p>
        </div>
      </section>

      {/* No discrimination */}
      <section className="policy-section">
        <h2 className="text-xl md:text-2xl font-bold font-heading text-black mb-4">
          No Discrimination
        </h2>
        <div className="space-y-4 text-base md:text-lg text-gray-800 leading-relaxed">
          <p>
            Right to work checks are applied consistently to all candidates regardless of nationality, to avoid any risk of discrimination, in line with the Home Office&apos;s statutory Code of Practice on avoiding unlawful discrimination.
          </p>
        </div>
      </section>

      {/* Illegal working */}
      <section className="policy-section">
        <h2 className="text-xl md:text-2xl font-bold font-heading text-black mb-4">
          Illegal Working
        </h2>
        <div className="space-y-4 text-base md:text-lg text-gray-800 leading-relaxed">
          <p>
            RD1 will not knowingly place, or continue to place, any individual who does not have the right to work in the UK, and will end an assignment immediately if this comes to light.
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
            The Directors are responsible for ensuring right to work checking procedures are followed and kept up to date with current Home Office guidance.
          </p>
        </div>
      </section>
    </PolicyDocument>
  );
}
