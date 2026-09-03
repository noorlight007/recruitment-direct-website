import type { Metadata } from "next";
import PageClient from "./page-client";

export const metadata: Metadata = {
  title: "Data Breach Notification Policy | Recruitment Direct UK",
  description: "Procedures for detecting, investigating, and reporting personal data breaches in accordance with ICO and UK GDPR guidelines.",
  alternates: {
    canonical: "https://rd1.co.uk/data-breach-policy",
  },
  openGraph: {
    title: "Data Breach Notification Policy | Recruitment Direct UK",
    description: "Procedures for detecting, investigating, and reporting personal data breaches in accordance with ICO and UK GDPR guidelines.",
    url: "https://rd1.co.uk/data-breach-policy",
    type: "website",
    siteName: "Recruitment Direct UK Ltd",
  },
};

export default function Page() {
  return <PageClient />;
}
