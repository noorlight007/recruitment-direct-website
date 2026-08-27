import type { Metadata } from "next";
import AIRecruitmentPageClient from "./page-client";

export const metadata: Metadata = {
  title: "AI Recruitment & Automated Screening | Recruitment Direct UK Ltd",
  description: "Learn about Recruitment Direct UK's advanced AI capabilities, including CallPilot, AI Steve, automated screening calls, and high-speed volume hiring.",
  alternates: {
    canonical: "https://rd1.co.uk/ai-recruitment",
  },
};

export default function AIRecruitmentPage() {
  return <AIRecruitmentPageClient />;
}
