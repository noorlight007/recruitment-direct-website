import type { Metadata } from "next";
import PageClient from "./page-client";

export const metadata: Metadata = {
  title: "Data Protection & GDPR Policy | Recruitment Direct UK",
  description: "Comprehensive data protection policy establishing UK GDPR compliance, data subject rights, and security measures.",
  alternates: {
    canonical: "https://rd1.co.uk/data-protection-gdpr-policy",
  },
  openGraph: {
    title: "Data Protection & GDPR Policy | Recruitment Direct UK",
    description: "Comprehensive data protection policy establishing UK GDPR compliance, data subject rights, and security measures.",
    url: "https://rd1.co.uk/data-protection-gdpr-policy",
    type: "website",
    siteName: "Recruitment Direct UK Ltd",
  },
};

export default function Page() {
  return <PageClient />;
}
