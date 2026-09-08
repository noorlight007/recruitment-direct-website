import type { Metadata } from "next";
import PolicyDocument from "@/components/PolicyDocument";

export const metadata: Metadata = {
  title: "Subject Access Request Procedure | Recruitment Direct UK",
  description:
    "How to make a Subject Access Request to Recruitment Direct UK Ltd and how we respond, in line with UK GDPR.",
  alternates: {
    canonical: "https://rd1.co.uk/subject-access-request-procedure",
  },
  openGraph: {
    title: "Subject Access Request Procedure | Recruitment Direct UK",
    description:
      "How to make a Subject Access Request to Recruitment Direct UK Ltd and how we respond, in line with UK GDPR.",
    url: "https://rd1.co.uk/subject-access-request-procedure",
    type: "website",
    siteName: "Recruitment Direct UK Ltd",
  },
};

export default function SubjectAccessRequestProcedurePage() {
  return (
    <PolicyDocument
      title="Subject Access Request (SAR) Procedure"
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
            This procedure explains how a candidate, worker, client contact, or other individual can request a copy of the personal data RD1 holds about them (a Subject Access Request, or SAR), and how RD1 responds, in line with Article 15 of the UK GDPR and the Data Protection Act 2018.
          </p>
        </div>
      </section>

      {/* How to make a request */}
      <section className="policy-section">
        <h2 className="text-xl md:text-2xl font-bold font-heading text-black mb-4">
          How to Make a Request
        </h2>
        <div className="space-y-4 text-base md:text-lg text-gray-800 leading-relaxed">
          <p>
            A SAR can be made in any form — by email to accounts@rd1.co.uk, in writing, or verbally to any member of RD1 staff — and does not need to mention &quot;Subject Access Request&quot; by name to be valid; any clear request for a copy of one&apos;s own personal data is treated as a SAR.
          </p>
        </div>
      </section>

      {/* Verifying identity */}
      <section className="policy-section">
        <h2 className="text-xl md:text-2xl font-bold font-heading text-black mb-4">
          Verifying Identity
        </h2>
        <div className="space-y-4 text-base md:text-lg text-gray-800 leading-relaxed">
          <p>
            RD1 will ask for reasonable proof of identity before releasing personal data, to ensure data is not disclosed to the wrong person. This is proportionate to the sensitivity of the data being requested and will not be used to create unnecessary delay.
          </p>
        </div>
      </section>

      {/* What we provide */}
      <section className="policy-section">
        <h2 className="text-xl md:text-2xl font-bold font-heading text-black mb-4">
          What We Provide
        </h2>
        <div className="space-y-4 text-base md:text-lg text-gray-800 leading-relaxed">
          <p>
            On a valid request, RD1 provides confirmation of whether we process the individual&apos;s personal data, a copy of that data, and supplementary information including the purposes of processing, the categories of data held, who it has been or will be shared with, how long it is kept, and the individual&apos;s other rights (including to rectification, erasure, and to complain to the ICO).
          </p>
        </div>
      </section>

      {/* Timescale */}
      <section className="policy-section">
        <h2 className="text-xl md:text-2xl font-bold font-heading text-black mb-4">
          Timescale
        </h2>
        <div className="space-y-4 text-base md:text-lg text-gray-800 leading-relaxed">
          <p>
            RD1 responds within one calendar month of receiving the request (and confirming identity, where verification is needed). This can be extended by a further two months for requests that are complex or numerous, in which case RD1 will explain the reason for the extension within the first month.
          </p>
        </div>
      </section>

      {/* Exemptions and third-party data */}
      <section className="policy-section">
        <h2 className="text-xl md:text-2xl font-bold font-heading text-black mb-4">
          Exemptions and Third-Party Data
        </h2>
        <div className="space-y-4 text-base md:text-lg text-gray-800 leading-relaxed">
          <p>
            Some information may be withheld or redacted where an exemption applies — for example where it would reveal another individual&apos;s personal data without their consent, or where it is protected by legal privilege. Where information is withheld, RD1 explains the general reason unless doing so would itself undermine the exemption.
          </p>
        </div>
      </section>

      {/* No fee, usually */}
      <section className="policy-section">
        <h2 className="text-xl md:text-2xl font-bold font-heading text-black mb-4">
          No Fee, Usually
        </h2>
        <div className="space-y-4 text-base md:text-lg text-gray-800 leading-relaxed">
          <p>
            RD1 does not charge a fee for a SAR, unless the request is manifestly unfounded or excessive (for example, repetitive requests), in which case RD1 may charge a reasonable administrative fee or refuse the request, explaining why.
          </p>
        </div>
      </section>

      {/* If a request is refused or delayed */}
      <section className="policy-section">
        <h2 className="text-xl md:text-2xl font-bold font-heading text-black mb-4">
          If a Request Is Refused or Delayed
        </h2>
        <div className="space-y-4 text-base md:text-lg text-gray-800 leading-relaxed">
          <p>
            Where RD1 cannot comply with a request, in whole or in part, we explain why, and inform the individual of their right to complain to the ICO or to seek a judicial remedy.
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
            The Directors are responsible for handling SARs and ensuring they are logged, verified, and responded to within the statutory timescale.
          </p>
        </div>
      </section>
    </PolicyDocument>
  );
}
