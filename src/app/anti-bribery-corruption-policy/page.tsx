import type { Metadata } from "next";
import Link from "next/link";
import PolicyDocument from "@/components/PolicyDocument";

export const metadata: Metadata = {
  title: "Anti-Bribery & Corruption Policy | Recruitment Direct UK",
  description:
    "Recruitment Direct UK Ltd's zero-tolerance anti-bribery and corruption policy, in compliance with the Bribery Act 2010.",
  alternates: {
    canonical: "https://rd1.co.uk/anti-bribery-corruption-policy",
  },
  openGraph: {
    title: "Anti-Bribery & Corruption Policy | Recruitment Direct UK",
    description:
      "Recruitment Direct UK Ltd's zero-tolerance anti-bribery and corruption policy, in compliance with the Bribery Act 2010.",
    url: "https://rd1.co.uk/anti-bribery-corruption-policy",
    type: "website",
    siteName: "Recruitment Direct UK Ltd",
  },
};

export default function AntiBriberyCorruptionPolicyPage() {
  return (
    <PolicyDocument
      title="Anti-Bribery & Corruption Policy"
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
            RD1 has a zero-tolerance approach to bribery and corruption in any form, in compliance with the Bribery Act 2010. This policy applies to all directors, employees, workers, and anyone acting on RD1&apos;s behalf, including when introducing candidates to clients or negotiating commercial terms.
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
            It is a breach of this policy to: offer, promise, or give a financial or other advantage to induce or reward improper performance of a function (e.g. a payment to a hiring manager to secure a vacancy); request, agree to receive, or accept such an advantage; or bribe a foreign public official to obtain or retain business. This applies regardless of local custom, and regardless of whether RD1 or a third party benefits.
          </p>
        </div>
      </section>

      {/* Gifts and hospitality */}
      <section className="policy-section">
        <h2 className="text-xl md:text-2xl font-bold font-heading text-black mb-4">
          Gifts and Hospitality
        </h2>
        <div className="space-y-4 text-base md:text-lg text-gray-800 leading-relaxed">
          <p>
            Reasonable and proportionate gifts or hospitality connected to legitimate business activity (e.g. a client lunch) are not prohibited, but must be reasonable in value, occasional rather than routine, and never offered or accepted where it could be seen as an inducement. Anything of significant value must be declined or reported to a Director before acceptance.
          </p>
        </div>
      </section>

      {/* Facilitation payments */}
      <section className="policy-section">
        <h2 className="text-xl md:text-2xl font-bold font-heading text-black mb-4">
          Facilitation Payments
        </h2>
        <div className="space-y-4 text-base md:text-lg text-gray-800 leading-relaxed">
          <p>
            RD1 does not make facilitation payments (small payments to secure or speed up a routine action, such as customs clearance) under any circumstances.
          </p>
        </div>
      </section>

      {/* Third parties */}
      <section className="policy-section">
        <h2 className="text-xl md:text-2xl font-bold font-heading text-black mb-4">
          Third Parties
        </h2>
        <div className="space-y-4 text-base md:text-lg text-gray-800 leading-relaxed">
          <p>
            RD1 carries out reasonable due diligence on introducers, agents, and suppliers acting on its behalf, and expects the same standard from any client or partner organisation we work with, including under our iCIMS and other technology partnerships.
          </p>
        </div>
      </section>

      {/* Raising a concern */}
      <section className="policy-section">
        <h2 className="text-xl md:text-2xl font-bold font-heading text-black mb-4">
          Raising a Concern
        </h2>
        <div className="space-y-4 text-base md:text-lg text-gray-800 leading-relaxed">
          <p>
            Any employee or worker who suspects bribery or corruption connected to RD1&apos;s business must raise it immediately with a Director, or via the confidential route set out in our{" "}
            <Link href="/whistleblowing-policy" className="text-blue-600 hover:underline">
              Whistleblowing Policy
            </Link>
            . No one who raises a genuine concern in good faith will suffer any detriment as a result.
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
            Breach of this policy will be treated as gross misconduct and may result in disciplinary action up to and including dismissal, termination of a contract, and referral to the relevant authorities.
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
            The Directors own this policy and review it annually, or sooner if there is a relevant change in the law or in RD1&apos;s risk profile.
          </p>
        </div>
      </section>
    </PolicyDocument>
  );
}
