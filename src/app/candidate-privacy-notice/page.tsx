import type { Metadata } from "next";
import PageClient from "./page-client";

export const metadata: Metadata = {
  title: "Candidate Privacy Notice | Recruitment Direct UK",
  description: "Detailed privacy notice for job seekers and candidates explaining how Recruitment Direct UK collects and processes personal data under UK GDPR.",
  alternates: {
    canonical: "https://rd1.co.uk/candidate-privacy-notice",
  },
  openGraph: {
    title: "Candidate Privacy Notice | Recruitment Direct UK",
    description: "Detailed privacy notice for job seekers and candidates explaining how Recruitment Direct UK collects and processes personal data under UK GDPR.",
    url: "https://rd1.co.uk/candidate-privacy-notice",
    type: "website",
    siteName: "Recruitment Direct UK Ltd",
  },
};

export default function Page() {
  return <PageClient />;
}
