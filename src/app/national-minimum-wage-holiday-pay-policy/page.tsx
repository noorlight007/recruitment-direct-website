import type { Metadata } from "next";
import PolicyDocument from "@/components/PolicyDocument";
import Link from "next/link";

export const metadata: Metadata = {
  title: "National Minimum Wage & Holiday Pay Policy | Recruitment Direct UK",
  description:
    "Recruitment Direct UK Ltd's commitment to paying at least the National Minimum/Living Wage and correct, transparent holiday pay.",
  alternates: {
    canonical: "https://rd1.co.uk/national-minimum-wage-holiday-pay-policy",
  },
  openGraph: {
    title: "National Minimum Wage & Holiday Pay Policy | Recruitment Direct UK",
    description:
      "Recruitment Direct UK Ltd's commitment to paying at least the National Minimum/Living Wage and correct, transparent holiday pay.",
    url: "https://rd1.co.uk/national-minimum-wage-holiday-pay-policy",
    type: "website",
    siteName: "Recruitment Direct UK Ltd",
  },
};

export default function NationalMinimumWageHolidayPayPolicyPage() {
  return (
    <PolicyDocument
      title="National Minimum Wage & Holiday Pay Compliance Policy"
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
            RD1 pays every worker it engages at least the National Minimum Wage or National Living Wage applicable to their age band, in line with the National Minimum Wage Act 1998 and the National Minimum Wage Regulations 2015, and calculates holiday pay correctly and transparently in line with the Working Time Regulations 1998 (as amended).
          </p>
        </div>
      </section>

      {/* Current rates */}
      <section className="policy-section">
        <h2 className="text-xl md:text-2xl font-bold font-heading text-black mb-4">
          Current Rates
        </h2>
        <div className="space-y-4 text-base md:text-lg text-gray-800 leading-relaxed">
          <p>
            RD1&apos;s pay rates are reviewed against the current statutory rates each time they change (every 1 April). The rates in effect from April 2026 are:
          </p>
          <div className="overflow-x-auto my-4">
            <table className="w-full border-collapse border border-gray-200 text-left text-sm md:text-base">
              <thead>
                <tr className="bg-slate-100 text-[#0b2545]">
                  <th className="border border-gray-200 p-3 font-semibold">Age band</th>
                  <th className="border border-gray-200 p-3 font-semibold">Hourly rate</th>
                </tr>
              </thead>
              <tbody>
                <tr className="hover:bg-slate-50">
                  <td className="border border-gray-200 p-3 font-medium">21 and over (National Living Wage)</td>
                  <td className="border border-gray-200 p-3">£12.71</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="border border-gray-200 p-3 font-medium">18 to 20</td>
                  <td className="border border-gray-200 p-3">£10.85</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="border border-gray-200 p-3 font-medium">Under 18</td>
                  <td className="border border-gray-200 p-3">£8.00</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="border border-gray-200 p-3 font-medium">Apprentice</td>
                  <td className="border border-gray-200 p-3">£8.00</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p>
            No worker engaged by RD1 is paid below the applicable rate for their age band, and rates are checked at the point a placement begins and on each statutory uprating each April. <code className="bg-slate-100 text-xs px-1.5 py-0.5 rounded text-gray-700 font-mono">[This table should be checked against gov.uk/national-minimum-wage-rates at each annual review, as rates change every 1 April.]</code>
          </p>
        </div>
      </section>

      {/* Holiday pay */}
      <section className="policy-section">
        <h2 className="text-xl md:text-2xl font-bold font-heading text-black mb-4">
          Holiday Pay
        </h2>
        <div className="space-y-4 text-base md:text-lg text-gray-800 leading-relaxed">
          <p>
            Holiday pay is calculated in line with current legislation, including the specific rules for workers with irregular hours or who work only part of the year, where holiday pay is calculated using the 12.07% accrual method (or the applicable statutory method in force at the time) unless a worker&apos;s terms provide for holiday to be taken and paid in the conventional way. Holiday pay arrangements for each assignment are set out clearly in the worker&apos;s Key Information Document before the assignment begins, in line with the Conduct of Employment Agencies and Employment Businesses Regulations 2003.
          </p>
        </div>
      </section>

      {/* Payslips and transparency */}
      <section className="policy-section">
        <h2 className="text-xl md:text-2xl font-bold font-heading text-black mb-4">
          Payslips and Transparency
        </h2>
        <div className="space-y-4 text-base md:text-lg text-gray-800 leading-relaxed">
          <p>
            Workers receive an itemised payslip for each pay period showing gross pay, any deductions, and the basis of calculation, so that pay and holiday accrual can be checked against the rate and hours worked.
          </p>
        </div>
      </section>

      {/* Umbrella and third-party payroll */}
      <section className="policy-section">
        <h2 className="text-xl md:text-2xl font-bold font-heading text-black mb-4">
          Umbrella and Third-Party Payroll
        </h2>
        <div className="space-y-4 text-base md:text-lg text-gray-800 leading-relaxed">
          <p>
            Where a worker is paid via an umbrella company rather than directly by RD1, RD1 carries out reasonable due diligence on the umbrella company&apos;s compliance with NMW and holiday pay obligations before engaging them, consistent with HMRC guidance on avoiding non-compliant umbrella arrangements.
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
            RD1 keeps records sufficient to demonstrate NMW and holiday pay compliance for each worker, retained in line with our{" "}
            <Link href="/data-retention-policy" className="text-blue-600 underline hover:text-blue-800">
              Data Retention &amp; Deletion Policy
            </Link>
            .
          </p>
        </div>
      </section>

      {/* Queries or concerns */}
      <section className="policy-section">
        <h2 className="text-xl md:text-2xl font-bold font-heading text-black mb-4">
          Queries or Concerns
        </h2>
        <div className="space-y-4 text-base md:text-lg text-gray-800 leading-relaxed">
          <p>
            Any worker who believes they have been paid below the correct rate, or that their holiday pay has been calculated incorrectly, should raise this with RD1 directly via accounts@rd1.co.uk, and can also contact HMRC&apos;s Pay and Work Rights helpline.
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
            The Directors are responsible for ensuring pay rates and holiday pay calculations remain compliant with current law.
          </p>
        </div>
      </section>
    </PolicyDocument>
  );
}
