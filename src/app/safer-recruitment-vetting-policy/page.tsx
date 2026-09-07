import type { Metadata } from "next";
import Link from "next/link";
import PolicyDocument from "@/components/PolicyDocument";

export const metadata: Metadata = {
  title: "Safer Recruitment & Vetting Policy | Recruitment Direct UK",
  description:
    "The DBS, PVG and background vetting checks Recruitment Direct UK Ltd carries out for roles involving children or vulnerable adults.",
  alternates: {
    canonical: "https://rd1.co.uk/safer-recruitment-vetting-policy",
  },
  openGraph: {
    title: "Safer Recruitment & Vetting Policy | Recruitment Direct UK",
    description:
      "The DBS, PVG and background vetting checks Recruitment Direct UK Ltd carries out for roles involving children or vulnerable adults.",
    url: "https://rd1.co.uk/safer-recruitment-vetting-policy",
    type: "website",
    siteName: "Recruitment Direct UK Ltd",
  },
};

export default function SaferRecruitmentVettingPolicyPage() {
  return (
    <PolicyDocument
      title="Safer Recruitment & Vetting Policy"
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
            For roles involving contact with children, vulnerable adults, or regulated activity (particularly in healthcare, education, and social care), RD1 applies enhanced vetting before a candidate is put forward or placed, consistent with the Protection of Freedoms Act 2012 and the requirements of the relevant vetting and barring schemes.
          </p>
        </div>
      </section>

      {/* Checks carried out */}
      <section className="policy-section">
        <h2 className="text-xl md:text-2xl font-bold font-heading text-black mb-4">
          Checks Carried Out
        </h2>
        <div className="space-y-4 text-base md:text-lg text-gray-800 leading-relaxed">
          <p>
            Depending on the role and sector, RD1&apos;s vetting can include:
          </p>
          <ul className="space-y-3 mt-2 pl-2">
            {[
              "Identity verification;",
              "Disclosure and Barring Service (DBS) checks for roles in England and Wales, or Protecting Vulnerable Groups (PVG) scheme membership for roles in Scotland, at the level appropriate to the role (basic, standard, or enhanced, including barred list checks where the role involves regulated activity);",
              "Employment history and reference checks covering, as a minimum, the previous 3 years or as required by the sector/client;",
              "Professional registration checks (e.g. NMC, HCPC, GMC) where the role requires it; and",
              "Qualification verification where relevant to the role."
            ].map((item, idx) => (
              <li key={idx} className="flex items-start gap-3 text-gray-800">
                <span className="w-1.5 h-1.5 bg-blue-600 rounded-full flex-shrink-0 mt-2.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Currency of checks */}
      <section className="policy-section">
        <h2 className="text-xl md:text-2xl font-bold font-heading text-black mb-4">
          Currency of Checks
        </h2>
        <div className="space-y-4 text-base md:text-lg text-gray-800 leading-relaxed">
          <p>
            RD1 checks the currency of DBS/PVG certificates before placement and, where a client requires it, uses the DBS/PVG update service to confirm a certificate is still current rather than requesting a new check for every assignment.
          </p>
        </div>
      </section>

      {/* Record keeping */}
      <section className="policy-section">
        <h2 className="text-xl md:text-2xl font-bold font-heading text-black mb-4">
          Record Keeping
        </h2>
        <div className="space-y-4 text-base md:text-lg text-gray-800 leading-relaxed">
          <p>
            Vetting records are retained in line with our{" "}
            <Link href="/data-retention-policy" className="text-blue-600 hover:underline">
              Data Retention &amp; Deletion Policy
            </Link>{" "}
            and are available to clients, on request, as evidence of compliance for their own safeguarding and audit purposes.
          </p>
        </div>
      </section>

      {/* Where a check raises a concern */}
      <section className="policy-section">
        <h2 className="text-xl md:text-2xl font-bold font-heading text-black mb-4">
          Where a Check Raises a Concern
        </h2>
        <div className="space-y-4 text-base md:text-lg text-gray-800 leading-relaxed">
          <p>
            Where a DBS/PVG check, reference, or other vetting step raises a relevant conviction, caution, or concern, RD1 makes an individual risk assessment in line with its obligations, rather than an automatic exclusion, except where the role falls within a category legally barred to the individual.
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
            The Directors are responsible for ensuring vetting procedures are applied consistently and kept current with sector and legislative requirements.
          </p>
        </div>
      </section>
    </PolicyDocument>
  );
}
