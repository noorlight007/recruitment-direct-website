import type { Metadata } from "next";
import PolicyDocument from "@/components/PolicyDocument";

export const metadata: Metadata = {
  title: "Insurance & Statement of Cover | Recruitment Direct UK",
  description:
    "Recruitment Direct UK Ltd's Professional Indemnity, Employers' Liability and Public Liability insurance cover, underwritten by Aviva.",
  alternates: {
    canonical: "https://rd1.co.uk/insurance-statement-of-cover",
  },
  openGraph: {
    title: "Insurance & Statement of Cover | Recruitment Direct UK",
    description:
      "Recruitment Direct UK Ltd's Professional Indemnity, Employers' Liability and Public Liability insurance cover, underwritten by Aviva.",
    url: "https://rd1.co.uk/insurance-statement-of-cover",
    type: "website",
    siteName: "Recruitment Direct UK Ltd",
  },
};

export default function InsuranceStatementOfCoverPage() {
  return (
    <PolicyDocument
      title="Insurance Certificates & Statement of Cover"
      effectiveDate="7 September 2026"
      reviewDate="at each policy renewal (annually, December)"
    >
      {/* Statement & Schedule */}
      <section className="policy-section">
        <h2 className="text-xl md:text-2xl font-bold font-heading text-black mb-4">
          Statement of Cover
        </h2>
        <div className="space-y-4 text-base md:text-lg text-gray-800 leading-relaxed">
          <p>
            Recruitment Direct UK Ltd maintains the following insurance cover, appropriate to the scale and nature of our recruitment business, underwritten by Aviva Insurance Limited and placed through PIB Insurance Brokers:
          </p>

          <div className="overflow-x-auto my-6">
            <table className="min-w-full divide-y divide-gray-200 border border-gray-200 rounded-lg text-sm text-left">
              <thead className="bg-gray-50 text-gray-900 font-semibold">
                <tr>
                  <th scope="col" className="px-4 py-3 border-b">Cover</th>
                  <th scope="col" className="px-4 py-3 border-b">Insurer</th>
                  <th scope="col" className="px-4 py-3 border-b">Limit of indemnity</th>
                  <th scope="col" className="px-4 py-3 border-b">Current period</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white text-gray-800">
                <tr>
                  <td className="px-4 py-3 font-medium text-gray-900">Professional Indemnity</td>
                  <td className="px-4 py-3">Aviva Insurance Limited</td>
                  <td className="px-4 py-3">£5,000,000 any one claim</td>
                  <td className="px-4 py-3">19 Dec 2025 &ndash; 18 Dec 2026</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium text-gray-900">Employers&apos; Liability</td>
                  <td className="px-4 py-3">Aviva Insurance Limited</td>
                  <td className="px-4 py-3">£10,000,000 any one event</td>
                  <td className="px-4 py-3">19 Dec 2025 &ndash; 18 Dec 2026</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium text-gray-900">Public &amp; Products Liability</td>
                  <td className="px-4 py-3">Aviva Insurance Limited</td>
                  <td className="px-4 py-3">£10,000,000 any one event</td>
                  <td className="px-4 py-3">19 Dec 2025 &ndash; 18 Dec 2026</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p>
            Policy number <strong>019281/12/25</strong>. Professional Indemnity cover carries a retroactive date of <strong>31 May 2006</strong>, meaning it covers work carried out by RD1 back to that date. Cover is renewed annually each December.
          </p>
        </div>
      </section>

      {/* Employers' Liability certificate */}
      <section className="policy-section">
        <h2 className="text-xl md:text-2xl font-bold font-heading text-black mb-4">
          Employers&apos; Liability Certificate
        </h2>
        <div className="space-y-4 text-base md:text-lg text-gray-800 leading-relaxed">
          <p>
            RD1&apos;s Certificate of Employers&apos; Liability Insurance is displayed at our registered office as required by the Employers&apos; Liability (Compulsory Insurance) Act 1969, confirming cover of no less than £5 million (our actual limit is £10 million, above the statutory minimum). A copy is available on request via{" "}
            <a href="mailto:accounts@rd1.co.uk" className="text-blue-600 hover:underline">
              accounts@rd1.co.uk
            </a>{" "}
            &mdash; this is a standard requirement clients and framework assessors will ask to see.
          </p>
        </div>
      </section>

      {/* Requesting certificates */}
      <section className="policy-section">
        <h2 className="text-xl md:text-2xl font-bold font-heading text-black mb-4">
          Requesting Certificates
        </h2>
        <div className="space-y-4 text-base md:text-lg text-gray-800 leading-relaxed">
          <p>
            Full certificates of insurance for any of the above can be requested via{" "}
            <a href="mailto:accounts@rd1.co.uk" className="text-blue-600 hover:underline">
              accounts@rd1.co.uk
            </a>{" "}
            and are typically issued within 2 working days.
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
            The Directors are responsible for ensuring RD1&apos;s insurance cover remains current and adequate for the business&apos;s activities, and for renewing this statement whenever cover is renewed or changed.
          </p>
        </div>
      </section>
    </PolicyDocument>
  );
}
