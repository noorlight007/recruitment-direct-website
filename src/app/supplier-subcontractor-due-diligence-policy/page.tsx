import type { Metadata } from "next";
import PolicyDocument from "@/components/PolicyDocument";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Supplier & Subcontractor Due-Diligence Policy | Recruitment Direct UK",
  description:
    "How Recruitment Direct UK Ltd carries out due diligence on suppliers and any associate agencies used to fulfil a client contract.",
  alternates: {
    canonical: "https://rd1.co.uk/supplier-subcontractor-due-diligence-policy",
  },
  openGraph: {
    title: "Supplier & Subcontractor Due-Diligence Policy | Recruitment Direct UK",
    description:
      "How Recruitment Direct UK Ltd carries out due diligence on suppliers and any associate agencies used to fulfil a client contract.",
    url: "https://rd1.co.uk/supplier-subcontractor-due-diligence-policy",
    type: "website",
    siteName: "Recruitment Direct UK Ltd",
  },
};

export default function SupplierSubcontractorDueDiligencePolicyPage() {
  return (
    <PolicyDocument
      title="Supplier & Subcontractor Due-Diligence Policy"
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
            This policy sets out the due diligence RD1 applies to suppliers and, where used, associate recruitment businesses or subcontractors engaged to help fulfil a client contract, so that RD1&apos;s own standards on legal compliance, worker treatment, and data protection extend through its supply chain.
          </p>
        </div>
      </section>

      {/* When this applies */}
      <section className="policy-section">
        <h2 className="text-xl md:text-2xl font-bold font-heading text-black mb-4">
          When This Applies
        </h2>
        <div className="space-y-4 text-base md:text-lg text-gray-800 leading-relaxed">
          <p>
            Where RD1 does engage an associate agency or subcontractor to help source or supply workers for a client contract, the checks below are applied before that arrangement begins.
          </p>
        </div>
      </section>

      {/* Due diligence checks */}
      <section className="policy-section">
        <h2 className="text-xl md:text-2xl font-bold font-heading text-black mb-4">
          Due Diligence Checks
        </h2>
        <div className="space-y-4 text-base md:text-lg text-gray-800 leading-relaxed">
          <p>
            Before engaging a supplier or associate, RD1 checks: the supplier holds relevant licences or memberships for its sector (for example REC membership, or a GLAA licence if operating in a licensable sector); the supplier has adequate insurance cover for the work involved; the supplier&apos;s approach to right to work checking, safeguarding, and safer recruitment meets or exceeds RD1&apos;s own standards; and the supplier has appropriate data protection arrangements in place for any candidate or client data shared with them.
          </p>
        </div>
      </section>

      {/* Modern slavery and labour standards */}
      <section className="policy-section">
        <h2 className="text-xl md:text-2xl font-bold font-heading text-black mb-4">
          Modern Slavery and Labour Standards
        </h2>
        <div className="space-y-4 text-base md:text-lg text-gray-800 leading-relaxed">
          <p>
            Consistent with our{" "}
            <Link href="/modern-slavery-policy" className="text-blue-600 underline hover:text-blue-800">
              Modern Slavery and Human Trafficking Policy
            </Link>
            , RD1 will not knowingly engage a supplier or associate found to be non-compliant with modern slavery, working time, or minimum wage legislation, and will end an arrangement where such non-compliance comes to light.
          </p>
        </div>
      </section>

      {/* Ongoing oversight */}
      <section className="policy-section">
        <h2 className="text-xl md:text-2xl font-bold font-heading text-black mb-4">
          Ongoing Oversight
        </h2>
        <div className="space-y-4 text-base md:text-lg text-gray-800 leading-relaxed">
          <p>
            Where an associate or subcontractor is used on an ongoing basis, RD1 reviews their compliance periodically, rather than relying solely on the checks carried out at the start of the relationship, and requires them to notify RD1 promptly of any material change (for example, loss of a relevant licence or insurance cover).
          </p>
        </div>
      </section>

      {/* Responsibility for the end client */}
      <section className="policy-section">
        <h2 className="text-xl md:text-2xl font-bold font-heading text-black mb-4">
          Responsibility for the End Client
        </h2>
        <div className="space-y-4 text-base md:text-lg text-gray-800 leading-relaxed">
          <p>
            Where RD1 uses a subcontractor or associate to help fulfil a client contract, RD1 remains responsible to the client for the standard of service delivered, and for ensuring the subcontractor operates in line with this policy.
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
            The Directors are responsible for approving any new supplier or associate relationship and for ensuring due diligence is refreshed periodically for those in ongoing use.
          </p>
        </div>
      </section>
    </PolicyDocument>
  );
}
