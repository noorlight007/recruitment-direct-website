import type { Metadata } from "next";
import PolicyDocument from "@/components/PolicyDocument";
import Link from "next/link";

export const metadata: Metadata = {
  title: "AI & Automated Decision-Making Policy | Recruitment Direct UK",
  description:
    "How Recruitment Direct UK Ltd uses AI-assisted tools responsibly in candidate screening, in line with UK GDPR and ICO guidance on AI in recruitment.",
  alternates: {
    canonical: "https://rd1.co.uk/ai-automated-decision-making-policy",
  },
  openGraph: {
    title: "AI & Automated Decision-Making Policy | Recruitment Direct UK",
    description:
      "How Recruitment Direct UK Ltd uses AI-assisted tools responsibly in candidate screening, in line with UK GDPR and ICO guidance on AI in recruitment.",
    url: "https://rd1.co.uk/ai-automated-decision-making-policy",
    type: "website",
    siteName: "Recruitment Direct UK Ltd",
  },
};

export default function AIAutomatedDecisionMakingPolicyPage() {
  return (
    <PolicyDocument
      title="AI & Automated Decision-Making Policy"
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
            RD1 uses AI-assisted tools as part of its candidate screening process, alongside its own recruiters&apos; professional judgement. This policy sets out how that technology is used responsibly, in line with UK GDPR (including Article 22 on automated decision-making), the Equality Act 2010, and current ICO guidance on the use of AI in recruitment.
          </p>
        </div>
      </section>

      {/* What AI is, and isn't, used for */}
      <section className="policy-section">
        <h2 className="text-xl md:text-2xl font-bold font-heading text-black mb-4">
          What AI Is, and Isn&apos;t, Used For
        </h2>
        <div className="space-y-4 text-base md:text-lg text-gray-800 leading-relaxed">
          <p>
            AI-assisted tools are used to support early-stage screening tasks — such as initial candidate engagement, structured information gathering, and consistent first-pass questioning — helping RD1 process applications efficiently and consistently. AI-assisted output informs, but does not replace, a human recruiter&apos;s judgement: no candidate is rejected from a role, or offered a role, on the basis of an AI-generated output alone, without a human recruiter reviewing the outcome before any decision that has a legal or similarly significant effect on the candidate.
          </p>
        </div>
      </section>

      {/* No solely automated decisions with legal effect */}
      <section className="policy-section">
        <h2 className="text-xl md:text-2xl font-bold font-heading text-black mb-4">
          No Solely Automated Decisions with Legal Effect
        </h2>
        <div className="space-y-4 text-base md:text-lg text-gray-800 leading-relaxed">
          <p>
            In line with UK GDPR Article 22, RD1 does not make decisions that produce legal effects or similarly significantly affect a candidate (such as a final rejection from a role) based solely on automated processing. A human recruiter reviews the relevant information and makes the final decision.
          </p>
        </div>
      </section>

      {/* Fairness and bias */}
      <section className="policy-section">
        <h2 className="text-xl md:text-2xl font-bold font-heading text-black mb-4">
          Fairness and Bias
        </h2>
        <div className="space-y-4 text-base md:text-lg text-gray-800 leading-relaxed">
          <p>
            RD1 selects and configures its screening tools with the aim of applying the same questions and criteria consistently to every candidate for a given role, to reduce the risk of inconsistent or subjective early-stage screening. RD1 monitors outcomes for signs of unintended bias against candidates with a protected characteristic under the Equality Act 2010, and will adjust or stop using a tool or process found to produce discriminatory outcomes.
          </p>
        </div>
      </section>

      {/* Candidate transparency */}
      <section className="policy-section">
        <h2 className="text-xl md:text-2xl font-bold font-heading text-black mb-4">
          Candidate Transparency
        </h2>
        <div className="space-y-4 text-base md:text-lg text-gray-800 leading-relaxed">
          <p>
            Candidates are told when an AI-assisted tool forms part of RD1&apos;s screening process for a role, what it is used for, and how to request a human review of any outcome, in line with our{" "}
            <Link href="/candidate-privacy-notice" className="text-blue-600 underline hover:text-blue-800">
              Candidate Privacy Notice
            </Link>
            .
          </p>
        </div>
      </section>

      {/* Data used by AI tools */}
      <section className="policy-section">
        <h2 className="text-xl md:text-2xl font-bold font-heading text-black mb-4">
          Data Used by AI Tools
        </h2>
        <div className="space-y-4 text-base md:text-lg text-gray-800 leading-relaxed">
          <p>
            Personal data processed by AI-assisted screening tools is handled in line with RD1&apos;s{" "}
            <Link href="/privacy-policy" className="text-blue-600 underline hover:text-blue-800">
              Privacy Policy
            </Link>
            ,{" "}
            <Link href="/candidate-privacy-notice" className="text-blue-600 underline hover:text-blue-800">
              Candidate Privacy Notice
            </Link>
            , and{" "}
            <Link href="/data-retention-policy" className="text-blue-600 underline hover:text-blue-800">
              Data Retention &amp; Deletion Policy
            </Link>{" "}
            — the same standards that apply to all other candidate data RD1 holds.
          </p>
        </div>
      </section>

      {/* Candidate rights */}
      <section className="policy-section">
        <h2 className="text-xl md:text-2xl font-bold font-heading text-black mb-4">
          Candidate Rights
        </h2>
        <div className="space-y-4 text-base md:text-lg text-gray-800 leading-relaxed">
          <p>
            Any candidate can ask for a screening decision to be reviewed by a human recruiter, ask what role AI played in their application process, or object to automated processing, by contacting RD1 via accounts@rd1.co.uk.
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
            The Directors are responsible for approving any AI-assisted tool used in RD1&apos;s recruitment process, for monitoring it for fairness and accuracy, and for reviewing this policy as the technology or relevant guidance develops.
          </p>
        </div>
      </section>
    </PolicyDocument>
  );
}
