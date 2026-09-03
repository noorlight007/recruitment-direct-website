import type { Metadata } from "next";
import PageClient from "./page-client";

export const metadata: Metadata = {
  title: "Client Privacy Notice | Recruitment Direct UK",
  description: "Privacy notice for clients and prospective commercial partners detailing business data protection and GDPR compliance.",
  alternates: {
    canonical: "https://rd1.co.uk/client-privacy-notice",
  },
  openGraph: {
    title: "Client Privacy Notice | Recruitment Direct UK",
    description: "Privacy notice for clients and prospective commercial partners detailing business data protection and GDPR compliance.",
    url: "https://rd1.co.uk/client-privacy-notice",
    type: "website",
    siteName: "Recruitment Direct UK Ltd",
  },
};

export default function Page() {
  return <PageClient />;
}
