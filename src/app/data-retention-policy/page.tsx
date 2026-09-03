import type { Metadata } from "next";
import PageClient from "./page-client";

export const metadata: Metadata = {
  title: "Data Retention Policy | Recruitment Direct UK",
  description: "Retention schedules and deletion guidelines for candidate CVs, compliance documents, and commercial records.",
  alternates: {
    canonical: "https://rd1.co.uk/data-retention-policy",
  },
  openGraph: {
    title: "Data Retention Policy | Recruitment Direct UK",
    description: "Retention schedules and deletion guidelines for candidate CVs, compliance documents, and commercial records.",
    url: "https://rd1.co.uk/data-retention-policy",
    type: "website",
    siteName: "Recruitment Direct UK Ltd",
  },
};

export default function Page() {
  return <PageClient />;
}
