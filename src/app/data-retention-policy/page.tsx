import type { Metadata } from "next";
import Link from "next/link";
import PolicyDocument from "@/components/PolicyDocument";

export const metadata: Metadata = {
  title: "Data Retention & Deletion Policy | Recruitment Direct UK",
  description:
    "How Recruitment Direct UK Ltd retains, protects and deletes candidate, client and worker data in line with UK GDPR and the Data Protection Act 2018.",
  alternates: {
    canonical: "https://rd1.co.uk/data-retention-policy",
  },
  openGraph: {
    title: "Data Retention & Deletion Policy | Recruitment Direct UK",
    description:
      "How Recruitment Direct UK Ltd retains, protects and deletes candidate, client and worker data in line with UK GDPR and the Data Protection Act 2018.",
    url: "https://rd1.co.uk/data-retention-policy",
    type: "website",
    siteName: "Recruitment Direct UK Ltd",
  },
};

export default function DataRetentionPolicyPage() {
  return (
    <PolicyDocument
      title="Data Retention & Deletion Policy"
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
            This policy sets out how Recruitment Direct UK Ltd (&ldquo;RD1&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;) retains and disposes of personal data collected from candidates, clients, and workers in the course of providing recruitment services, in line with UK GDPR and the Data Protection Act 2018.
          </p>
        </div>
      </section>

      {/* Scope */}
      <section className="policy-section">
        <h2 className="text-xl md:text-2xl font-bold font-heading text-black mb-4">
          Scope
        </h2>
        <div className="space-y-4 text-base md:text-lg text-gray-800 leading-relaxed">
          <p>
            Applies to all personal data held by RD1 in any format &mdash; our applicant tracking system, CallPilot AI screening records, email, and paper files &mdash; covering candidates, placed workers, client contacts, and website users.
          </p>
        </div>
      </section>

      {/* Retention principles */}
      <section className="policy-section">
        <h2 className="text-xl md:text-2xl font-bold font-heading text-black mb-4">
          Retention Principles
        </h2>
        <div className="space-y-4 text-base md:text-lg text-gray-800 leading-relaxed">
          <p>
            We keep personal data only for as long as it is needed for the purpose it was collected for, or as required by law. As a standard position:
          </p>
          <ul className="space-y-3 mt-2 pl-2">
            {[
              "Candidate records (CVs, application data, interview notes): retained for up to 24 months from last contact, in line with REC guidance, to allow us to consider candidates for future roles — candidates can ask us to delete their data sooner at any time.",
              "Placed worker/payroll-relevant records: retained for 6 years after the end of the assignment, to meet HMRC, pension auto-enrolment, and employment law limitation periods.",
              "Client contract and commercial records: retained for 6 years after the end of the business relationship, in line with the Limitation Act 1980.",
              "Right to Work documentation: retained for the duration of employment plus 2 years, per Home Office guidance.",
              "Call recordings and screening data processed via CallPilot: retained for 12 months unless a longer period is needed for a live recruitment process or a legal claim.",
              "Marketing consents and website enquiry data: retained until consent is withdrawn or 24 months of inactivity, whichever is sooner.",
            ].map((item, idx) => (
              <li key={idx} className="flex items-start gap-3 text-gray-800">
                <span className="w-1.5 h-1.5 bg-blue-600 rounded-full flex-shrink-0 mt-2.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Deletion and disposal */}
      <section className="policy-section">
        <h2 className="text-xl md:text-2xl font-bold font-heading text-black mb-4">
          Deletion and Disposal
        </h2>
        <div className="space-y-4 text-base md:text-lg text-gray-800 leading-relaxed">
          <p>
            On expiry of the relevant retention period, personal data is securely deleted from active systems and backups within a reasonable operational cycle, and paper records are cross-shredded. Anonymised or aggregated data (e.g. for management reporting) may be retained indefinitely as it no longer identifies an individual.
          </p>
        </div>
      </section>

      {/* Individual rights */}
      <section className="policy-section">
        <h2 className="text-xl md:text-2xl font-bold font-heading text-black mb-4">
          Individual Rights
        </h2>
        <div className="space-y-4 text-base md:text-lg text-gray-800 leading-relaxed">
          <p>
            Candidates, clients, and workers can request earlier deletion, a copy of their data, or a correction at any time &mdash; see our{" "}
            <Link href="/candidate-privacy-notice" className="text-blue-600 hover:underline">
              Candidate Privacy Notice
            </Link>{" "}
            and{" "}
            <Link href="/client-privacy-notice" className="text-blue-600 hover:underline">
              Client Privacy Notice
            </Link>{" "}
            for how to exercise these rights.
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
            The Directors are responsible for this policy and for ensuring retention schedules are applied consistently across all systems, including third-party platforms used to deliver our services.
          </p>
        </div>
      </section>
    </PolicyDocument>
  );
}
