import type { Metadata } from "next";
import PageClient from "./page-client";

export const metadata: Metadata = {
  title: "Safeguarding Policy | Recruitment Direct UK",
  description: "Safeguarding procedures and vetting standards to protect vulnerable groups, children, and adults at risk.",
  alternates: {
    canonical: "https://rd1.co.uk/safeguarding-policy",
  },
  openGraph: {
    title: "Safeguarding Policy | Recruitment Direct UK",
    description: "Safeguarding procedures and vetting standards to protect vulnerable groups, children, and adults at risk.",
    url: "https://rd1.co.uk/safeguarding-policy",
    type: "website",
    siteName: "Recruitment Direct UK Ltd",
  },
};

export default function Page() {
  return <PageClient />;
}
