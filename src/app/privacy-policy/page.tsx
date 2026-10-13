import type { Metadata } from "next";
import PageClient from "./page-client";

export const metadata: Metadata = {
  title: "Privacy Policy | Recruitment Direct UK",
  description: "General Privacy Policy explaining data collection, cookies, and individual rights under the UK Data Protection Act and UK GDPR.",
  alternates: {
    canonical: "https://rd1.co.uk/privacy-policy",
  },
  openGraph: {
    title: "Privacy Policy | Recruitment Direct UK",
    description: "General Privacy Policy explaining data collection, cookies, and individual rights under the UK Data Protection Act and UK GDPR.",
    url: "https://rd1.co.uk/privacy-policy",
    type: "website",
    siteName: "Recruitment Direct UK Ltd",
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy | Recruitment Direct UK",
    description: "General Privacy Policy explaining data collection, cookies, and individual rights under the UK Data Protection Act and UK GDPR.",
  },
};

export default function Page() {
  return <PageClient />;
}
