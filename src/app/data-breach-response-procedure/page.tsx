import type { Metadata } from "next";
import PolicyDocument from "@/components/PolicyDocument";

export const metadata: Metadata = {
  title: "Data Breach Response Procedure | Recruitment Direct UK",
  description:
    "How Recruitment Direct UK Ltd identifies, contains and reports personal data breaches in line with UK GDPR.",
  alternates: {
    canonical: "https://rd1.co.uk/data-breach-response-procedure",
  },
  openGraph: {
    title: "Data Breach Response Procedure | Recruitment Direct UK",
    description:
      "How Recruitment Direct UK Ltd identifies, contains and reports personal data breaches in line with UK GDPR.",
    url: "https://rd1.co.uk/data-breach-response-procedure",
    type: "website",
    siteName: "Recruitment Direct UK Ltd",
  },
};

export default function DataBreachResponseProcedurePage() {
  return (
    <PolicyDocument
      title="Data Breach Response Procedure"
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
            This procedure sets out how RD1 identifies, contains, assesses, and reports a personal data breach affecting candidate, client, or worker data, in line with UK GDPR Articles 33 and 34 and the Data Protection Act 2018.
          </p>
        </div>
      </section>

      {/* What counts as a breach */}
      <section className="policy-section">
        <h2 className="text-xl md:text-2xl font-bold font-heading text-black mb-4">
          What Counts as a Breach
        </h2>
        <div className="space-y-4 text-base md:text-lg text-gray-800 leading-relaxed">
          <p>
            A personal data breach is any incident leading to the accidental or unlawful destruction, loss, alteration, unauthorised disclosure of, or access to, personal data — this includes, for example, a misdirected email containing candidate CVs, a lost or stolen device holding candidate data, unauthorised access to RD1&apos;s applicant tracking system or CallPilot screening records, or a client or supplier reporting a breach affecting shared data.
          </p>
        </div>
      </section>

      {/* Immediate response */}
      <section className="policy-section">
        <h2 className="text-xl md:text-2xl font-bold font-heading text-black mb-4">
          Immediate Response
        </h2>
        <div className="space-y-4 text-base md:text-lg text-gray-800 leading-relaxed">
          <p>
            On discovering or being told of a suspected breach, the person who discovers it must report it to a Director immediately. RD1 will act to contain the breach as quickly as possible — for example revoking access, recalling an email, or isolating an affected system — and begin an assessment of what data and how many individuals are affected.
          </p>
        </div>
      </section>

      {/* Risk assessment */}
      <section className="policy-section">
        <h2 className="text-xl md:text-2xl font-bold font-heading text-black mb-4">
          Risk Assessment
        </h2>
        <div className="space-y-4 text-base md:text-lg text-gray-800 leading-relaxed">
          <p>
            RD1 assesses the likely risk to the rights and freedoms of the individuals affected, considering the type and sensitivity of the data involved, how many people are affected, and whether the data could be misused (for example to enable identity theft or fraud).
          </p>
        </div>
      </section>

      {/* Notifying the ICO */}
      <section className="policy-section">
        <h2 className="text-xl md:text-2xl font-bold font-heading text-black mb-4">
          Notifying the ICO
        </h2>
        <div className="space-y-4 text-base md:text-lg text-gray-800 leading-relaxed">
          <p>
            Where a breach is assessed as likely to result in a risk to individuals, RD1 notifies the Information Commissioner&apos;s Office within 72 hours of becoming aware of it, in line with UK GDPR Article 33, using the ICO&apos;s breach reporting service. Where a decision cannot be finalised within 72 hours, RD1 reports what is known at that stage and provides further information as it becomes available.
          </p>
        </div>
      </section>

      {/* Notifying affected individuals */}
      <section className="policy-section">
        <h2 className="text-xl md:text-2xl font-bold font-heading text-black mb-4">
          Notifying Affected Individuals
        </h2>
        <div className="space-y-4 text-base md:text-lg text-gray-800 leading-relaxed">
          <p>
            Where a breach is assessed as likely to result in a high risk to individuals, RD1 also notifies those individuals directly and without undue delay, explaining what happened, what data was involved, and what steps they can take to protect themselves, in line with UK GDPR Article 34.
          </p>
        </div>
      </section>

      {/* Internal record */}
      <section className="policy-section">
        <h2 className="text-xl md:text-2xl font-bold font-heading text-black mb-4">
          Internal Record
        </h2>
        <div className="space-y-4 text-base md:text-lg text-gray-800 leading-relaxed">
          <p>
            RD1 keeps a record of every personal data breach, including those not reportable to the ICO, covering the facts, effects, and remedial action taken, as required by UK GDPR accountability obligations.
          </p>
        </div>
      </section>

      {/* Learning from a breach */}
      <section className="policy-section">
        <h2 className="text-xl md:text-2xl font-bold font-heading text-black mb-4">
          Learning From a Breach
        </h2>
        <div className="space-y-4 text-base md:text-lg text-gray-800 leading-relaxed">
          <p>
            Following any breach, RD1 reviews what allowed it to happen and takes reasonable steps to prevent a recurrence, including updates to this or related policies where appropriate.
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
            The Directors act as RD1&apos;s data protection lead and are responsible for coordinating the response to any suspected or confirmed breach.
          </p>
        </div>
      </section>
    </PolicyDocument>
  );
}
