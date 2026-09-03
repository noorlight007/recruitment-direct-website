import type { Metadata } from "next";
import PageClient from "./page-client";

export const metadata: Metadata = {
  title: "Information Security Policy | Recruitment Direct UK",
  description: "Information security governance, access control, and ISO 27001/Cyber Essentials protocols at Recruitment Direct UK.",
  alternates: {
    canonical: "https://rd1.co.uk/information-security-policy",
  },
  openGraph: {
    title: "Information Security Policy | Recruitment Direct UK",
    description: "Information security governance, access control, and ISO 27001/Cyber Essentials protocols at Recruitment Direct UK.",
    url: "https://rd1.co.uk/information-security-policy",
    type: "website",
    siteName: "Recruitment Direct UK Ltd",
  },
};

export default function Page() {
  return <PageClient />;
}
