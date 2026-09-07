import type { Metadata } from "next";
import PolicyDocument from "@/components/PolicyDocument";

export const metadata: Metadata = {
  title: "Prompt Payment Policy | Recruitment Direct UK",
  description:
    "Recruitment Direct UK Ltd's commitment to paying suppliers, contractors and placed workers promptly and transparently.",
  alternates: {
    canonical: "https://rd1.co.uk/prompt-payment-policy",
  },
  openGraph: {
    title: "Prompt Payment Policy | Recruitment Direct UK",
    description:
      "Recruitment Direct UK Ltd's commitment to paying suppliers, contractors and placed workers promptly and transparently.",
    url: "https://rd1.co.uk/prompt-payment-policy",
    type: "website",
    siteName: "Recruitment Direct UK Ltd",
  },
};

export default function PromptPaymentPolicyPage() {
  return (
    <PolicyDocument
      title="Prompt Payment Policy"
      effectiveDate="7 September 2026"
      reviewDate="September 2027"
    >
      {/* Our commitment */}
      <section className="policy-section">
        <h2 className="text-xl md:text-2xl font-bold font-heading text-black mb-4">
          Our Commitment
        </h2>
        <div className="space-y-4 text-base md:text-lg text-gray-800 leading-relaxed">
          <p>
            RD1 is committed to paying suppliers, subcontractors, and self-employed contractors promptly and in accordance with agreed terms, recognising the importance of cash flow to the small businesses and individuals we work with.
          </p>
        </div>
      </section>

      {/* Standard payment terms */}
      <section className="policy-section">
        <h2 className="text-xl md:text-2xl font-bold font-heading text-black mb-4">
          Standard Payment Terms
        </h2>
        <div className="space-y-4 text-base md:text-lg text-gray-800 leading-relaxed">
          <p>
            RD1&apos;s standard payment terms are <strong className="text-black">30 days</strong> from receipt of a valid invoice, unless a shorter period is agreed in a specific contract. Placed workers paid via RD1&apos;s PAYE or umbrella arrangements are paid weekly/monthly in line with their engagement terms, regardless of when RD1 receives payment from the end client.
          </p>
        </div>
      </section>

      {/* How we ensure prompt payment */}
      <section className="policy-section">
        <h2 className="text-xl md:text-2xl font-bold font-heading text-black mb-4">
          How We Ensure Prompt Payment
        </h2>
        <div className="space-y-4 text-base md:text-lg text-gray-800 leading-relaxed">
          <p>
            Invoices are processed on receipt and queried promptly if there is a discrepancy, rather than left unresolved; RD1 does not make undisclosed deductions from supplier or contractor payments; and disputes over an invoice are raised and resolved separately from payment of any undisputed amount.
          </p>
        </div>
      </section>

      {/* Worker pay */}
      <section className="policy-section">
        <h2 className="text-xl md:text-2xl font-bold font-heading text-black mb-4">
          Worker Pay
        </h2>
        <div className="space-y-4 text-base md:text-lg text-gray-800 leading-relaxed">
          <p>
            For agency workers, RD1&apos;s pay arrangements and any deductions are set out transparently in the Key Information Document provided before an assignment begins, in line with the Conduct of Employment Agencies and Employment Businesses Regulations 2003.
          </p>
        </div>
      </section>

      {/* Queries */}
      <section className="policy-section">
        <h2 className="text-xl md:text-2xl font-bold font-heading text-black mb-4">
          Queries
        </h2>
        <div className="space-y-4 text-base md:text-lg text-gray-800 leading-relaxed">
          <p>
            Any supplier, contractor, or worker with a payment query should contact RD1 via{" "}
            <a href="mailto:accounts@rd1.co.uk" className="text-blue-600 hover:underline">
              accounts@rd1.co.uk
            </a>{" "}
            in the first instance.
          </p>
        </div>
      </section>
    </PolicyDocument>
  );
}
