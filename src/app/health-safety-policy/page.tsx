import type { Metadata } from "next";
import PolicyDocument from "@/components/PolicyDocument";

export const metadata: Metadata = {
  title: "Health & Safety Policy | Recruitment Direct UK",
  description:
    "Recruitment Direct UK Ltd's commitment to employee, worker and client health and safety under the Health and Safety at Work etc. Act 1974.",
  alternates: {
    canonical: "https://rd1.co.uk/health-safety-policy",
  },
  openGraph: {
    title: "Health & Safety Policy | Recruitment Direct UK",
    description:
      "Recruitment Direct UK Ltd's commitment to employee, worker and client health and safety under the Health and Safety at Work etc. Act 1974.",
    url: "https://rd1.co.uk/health-safety-policy",
    type: "website",
    siteName: "Recruitment Direct UK Ltd",
  },
};

export default function HealthSafetyPolicyPage() {
  return (
    <PolicyDocument
      title="Health & Safety Policy"
      effectiveDate="7 September 2026"
      reviewDate="September 2027"
    >
      {/* Statement of intent */}
      <section className="policy-section">
        <h2 className="text-xl md:text-2xl font-bold font-heading text-black mb-4">
          Statement of Intent
        </h2>
        <div className="space-y-4 text-base md:text-lg text-gray-800 leading-relaxed">
          <p>
            RD1 is committed to ensuring, so far as is reasonably practicable, the health, safety, and welfare of its employees, temporary workers, clients, and visitors, in line with the Health and Safety at Work etc. Act 1974 and associated regulations, including the Management of Health and Safety at Work Regulations 1999. As an employment business, RD1 also has specific duties to ensure workers it places are adequately briefed on health and safety before starting an assignment.
          </p>
        </div>
      </section>

      {/* Organisation and responsibility */}
      <section className="policy-section">
        <h2 className="text-xl md:text-2xl font-bold font-heading text-black mb-4">
          Organisation and Responsibility
        </h2>
        <div className="space-y-4 text-base md:text-lg text-gray-800 leading-relaxed">
          <p>
            Overall responsibility for health and safety rests with the Directors. Day-to-day responsibility for ensuring safe working practices in RD1&apos;s own offices sits with the designated Health &amp; Safety Compliance Officer and Operations Management. All staff have a duty to take reasonable care of their own health and safety and that of others affected by their work, and to cooperate with this policy.
          </p>
        </div>
      </section>

      {/* Our approach as an employment business */}
      <section className="policy-section">
        <h2 className="text-xl md:text-2xl font-bold font-heading text-black mb-4">
          Our Approach as an Employment Business
        </h2>
        <div className="space-y-4 text-base md:text-lg text-gray-800 leading-relaxed">
          <p>
            Before placing a worker with a client, RD1:
          </p>
          <ul className="space-y-3 mt-2 pl-2">
            {[
              "Carries out a health and safety questionnaire or site check with the client covering the specific risks of the role;",
              "Ensures the worker is given a suitable induction and any necessary PPE by the client (or by RD1 where applicable);",
              "Confirms the client has employer's liability insurance in place for agency workers; and",
              "Ensures workers know how to report an accident, near-miss, or safety concern, both to the client and to RD1."
            ].map((item, idx) => (
              <li key={idx} className="flex items-start gap-3 text-gray-800">
                <span className="w-1.5 h-1.5 bg-blue-600 rounded-full flex-shrink-0 mt-2.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Risk assessment */}
      <section className="policy-section">
        <h2 className="text-xl md:text-2xl font-bold font-heading text-black mb-4">
          Risk Assessment
        </h2>
        <div className="space-y-4 text-base md:text-lg text-gray-800 leading-relaxed">
          <p>
            RD1 undertakes risk assessments for its own premises and working practices, and requires client sites to confirm that suitable risk assessments are in place for roles our workers are placed into, particularly in higher-risk sectors such as construction, healthcare, and industrial/warehouse work.
          </p>
        </div>
      </section>

      {/* Accident and incident reporting */}
      <section className="policy-section">
        <h2 className="text-xl md:text-2xl font-bold font-heading text-black mb-4">
          Accident and Incident Reporting
        </h2>
        <div className="space-y-4 text-base md:text-lg text-gray-800 leading-relaxed">
          <p>
            Any accident, injury, or dangerous occurrence involving an RD1-placed worker must be reported to RD1 immediately by the client and/or the worker. RD1 will record the incident and, where required, ensure it is reported to the enforcing authority under RIDDOR (the Reporting of Injuries, Diseases and Dangerous Occurrences Regulations 2013).
          </p>
        </div>
      </section>

      {/* Training and review */}
      <section className="policy-section">
        <h2 className="text-xl md:text-2xl font-bold font-heading text-black mb-4">
          Training and Review
        </h2>
        <div className="space-y-4 text-base md:text-lg text-gray-800 leading-relaxed">
          <p>
            RD1 keeps its own staff up to date on relevant health and safety obligations and reviews this policy at least annually, or sooner following any significant incident or change in legislation.
          </p>
        </div>
      </section>
    </PolicyDocument>
  );
}
