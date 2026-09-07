import type { Metadata } from "next";
import Link from "next/link";
import PolicyDocument from "@/components/PolicyDocument";

export const metadata: Metadata = {
  title: "REC Code of Practice Statement | Recruitment Direct UK",
  description:
    "Recruitment Direct UK Ltd is a Corporate Member of the REC (No. 00207320), committed to the REC Code of Professional Practice.",
  alternates: {
    canonical: "https://rd1.co.uk/rec-code-of-practice-statement",
  },
  openGraph: {
    title: "REC Code of Practice Statement | Recruitment Direct UK",
    description:
      "Recruitment Direct UK Ltd is a Corporate Member of the REC (No. 00207320), committed to the REC Code of Professional Practice.",
    url: "https://rd1.co.uk/rec-code-of-practice-statement",
    type: "website",
    siteName: "Recruitment Direct UK Ltd",
  },
};

export default function RecCodeOfPracticeStatementPage() {
  return (
    <PolicyDocument
      title="REC Code of Practice Compliance Statement"
      effectiveDate="7 September 2026"
      reviewDate="September 2027"
    >
      {/* Membership */}
      <section className="policy-section">
        <h2 className="text-xl md:text-2xl font-bold font-heading text-black mb-4">
          Membership
        </h2>
        <div className="space-y-4 text-base md:text-lg text-gray-800 leading-relaxed">
          <p>
            Recruitment Direct UK Ltd is a Corporate Member of the Recruitment &amp; Employment Confederation (REC), membership number <strong className="text-black">00207320</strong>. REC is the professional body for the UK recruitment industry, and membership requires ongoing compliance with the REC Code of Professional Practice.
          </p>
        </div>
      </section>

      {/* What this means */}
      <section className="policy-section">
        <h2 className="text-xl md:text-2xl font-bold font-heading text-black mb-4">
          What This Means
        </h2>
        <div className="space-y-4 text-base md:text-lg text-gray-800 leading-relaxed">
          <p>
            As a REC member, RD1 commits to:
          </p>
          <ul className="space-y-3 mt-2 pl-2">
            {[
              "Acting professionally, lawfully, and with integrity in all dealings with candidates, clients, and workers;",
              "Complying with all relevant employment, equality, and data protection legislation, including the Conduct of Employment Agencies and Employment Businesses Regulations 2003;",
              "Providing clear terms of business to clients and candidates before providing services;",
              "Not discriminating against candidates or workers on any unlawful ground; and",
              "Maintaining professional indemnity and public liability insurance appropriate to our business."
            ].map((item, idx) => (
              <li key={idx} className="flex items-start gap-3 text-gray-800">
                <span className="w-1.5 h-1.5 bg-blue-600 rounded-full flex-shrink-0 mt-2.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Complaints */}
      <section className="policy-section">
        <h2 className="text-xl md:text-2xl font-bold font-heading text-black mb-4">
          Complaints
        </h2>
        <div className="space-y-4 text-base md:text-lg text-gray-800 leading-relaxed">
          <p>
            Any complaint about RD1&apos;s conduct that cannot be resolved through our own{" "}
            <Link href="/complaints-policy" className="text-blue-600 hover:underline">
              Complaints Policy
            </Link>{" "}
            can be escalated to the REC, who operate an independent disciplinary process for members&apos; compliance with the Code of Practice.
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
            The Directors are responsible for maintaining RD1&apos;s REC membership and ensuring ongoing compliance with the Code of Practice.
          </p>
        </div>
      </section>
    </PolicyDocument>
  );
}
