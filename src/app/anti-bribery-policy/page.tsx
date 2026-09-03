import type { Metadata } from "next";
import PageClient from "./page-client";

export const metadata: Metadata = {
  title: "Anti-Bribery and Corruption Policy | Recruitment Direct UK",
  description: "Our anti-bribery and corruption policy detailing ethical compliance and anti-fraud standards across all operations.",
  alternates: {
    canonical: "https://rd1.co.uk/anti-bribery-policy",
  },
  openGraph: {
    title: "Anti-Bribery and Corruption Policy | Recruitment Direct UK",
    description: "Our anti-bribery and corruption policy detailing ethical compliance and anti-fraud standards across all operations.",
    url: "https://rd1.co.uk/anti-bribery-policy",
    type: "website",
    siteName: "Recruitment Direct UK Ltd",
  },
};

export default function Page() {
  return <PageClient />;
}
