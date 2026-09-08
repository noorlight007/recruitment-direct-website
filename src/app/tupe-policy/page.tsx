import type { Metadata } from "next";
import PolicyDocument from "@/components/PolicyDocument";

export const metadata: Metadata = {
  title: "TUPE Policy | Recruitment Direct UK",
  description:
    "How Recruitment Direct UK Ltd manages the transfer of workers under TUPE when taking over or exiting a staffing contract.",
  alternates: {
    canonical: "https://rd1.co.uk/tupe-policy",
  },
  openGraph: {
    title: "TUPE Policy | Recruitment Direct UK",
    description:
      "How Recruitment Direct UK Ltd manages the transfer of workers under TUPE when taking over or exiting a staffing contract.",
    url: "https://rd1.co.uk/tupe-policy",
    type: "website",
    siteName: "Recruitment Direct UK Ltd",
  },
};

export default function TUPEPolicyPage() {
  return (
    <PolicyDocument
      title="TUPE (Transfer of Undertakings) Policy"
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
            This policy sets out RD1&apos;s approach to the Transfer of Undertakings (Protection of Employment) Regulations 2006 (TUPE), covering how we manage the transfer of workers when RD1 takes over a staffing contract from an incumbent supplier, or when a contract RD1 holds transfers to a new supplier at the end of its term.
          </p>
        </div>
      </section>

      {/* When TUPE may apply */}
      <section className="policy-section">
        <h2 className="text-xl md:text-2xl font-bold font-heading text-black mb-4">
          When TUPE May Apply
        </h2>
        <div className="space-y-4 text-base md:text-lg text-gray-800 leading-relaxed">
          <p>
            TUPE can apply to a &quot;service provision change&quot; as well as a traditional business transfer — this means it may apply when RD1 wins a framework call-off or contract previously serviced by another agency, where an organised group of workers assigned to that contract could transfer to RD1 by operation of law, along with their existing terms and continuity of employment.
          </p>
        </div>
      </section>

      {/* Our approach when taking on a contract */}
      <section className="policy-section">
        <h2 className="text-xl md:text-2xl font-bold font-heading text-black mb-4">
          Our Approach When Taking on a Contract
        </h2>
        <div className="space-y-4 text-base md:text-lg text-gray-800 leading-relaxed">
          <p>
            Where RD1 is mobilising a new contract that may involve a TUPE transfer, we: engage with the outgoing supplier and client as early as possible to obtain accurate employee liability information (as required under the Employment Rights Act 1996&apos;s employee liability information provisions); assess which workers are genuinely &quot;assigned&quot; to the contract and therefore eligible to transfer; honour transferring employees&apos; existing terms and conditions and continuity of service, save for any permitted harmonisation after a reasonable period; and consult with affected employees or their representatives in good time before the transfer takes effect.
          </p>
        </div>
      </section>

      {/* Our approach when exiting a contract */}
      <section className="policy-section">
        <h2 className="text-xl md:text-2xl font-bold font-heading text-black mb-4">
          Our Approach When Exiting a Contract
        </h2>
        <div className="space-y-4 text-base md:text-lg text-gray-800 leading-relaxed">
          <p>
            Where RD1 is the outgoing supplier on a contract ending, we cooperate with the incoming supplier in providing accurate employee liability information, support a smooth and lawful handover for any affected workers, and meet our own consultation obligations as the outgoing employer.
          </p>
        </div>
      </section>

      {/* Pay and terms after transfer */}
      <section className="policy-section">
        <h2 className="text-xl md:text-2xl font-bold font-heading text-black mb-4">
          Pay and Terms After Transfer
        </h2>
        <div className="space-y-4 text-base md:text-lg text-gray-800 leading-relaxed">
          <p>
            Transferred employees keep their existing contractual terms at the point of transfer; changes are only made where TUPE permits (for example for an economic, technical, or organisational reason entailing changes in the workforce), and never simply because a transfer has occurred.
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
            Any worker affected by an actual or prospective TUPE transfer involving RD1 can raise questions via accounts@rd1.co.uk.
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
            The Directors are responsible for ensuring TUPE obligations are identified and met on every relevant contract mobilisation or exit, taking specific advice on a contract-by-contract basis where the position is unclear.
          </p>
        </div>
      </section>
    </PolicyDocument>
  );
}
