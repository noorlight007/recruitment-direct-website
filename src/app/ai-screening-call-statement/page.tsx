import type { Metadata } from "next";
import PageClient from "./page-client";

export const metadata: Metadata = {
  title: "AI Applicant Screening Call Statement | Recruitment Direct UK",
  description: "Information statement explaining how AI-assisted applicant screening calls operate at Recruitment Direct UK.",
  alternates: {
    canonical: "https://rd1.co.uk/ai-screening-call-statement",
  },
  openGraph: {
    title: "AI Applicant Screening Call Statement | Recruitment Direct UK",
    description: "Information statement explaining how AI-assisted applicant screening calls operate at Recruitment Direct UK.",
    url: "https://rd1.co.uk/ai-screening-call-statement",
    type: "website",
    siteName: "Recruitment Direct UK Ltd",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Applicant Screening Call Statement | Recruitment Direct UK",
    description: "Information statement explaining how AI-assisted applicant screening calls operate at Recruitment Direct UK.",
  },
};

export default function Page() {
  return <PageClient />;
}
