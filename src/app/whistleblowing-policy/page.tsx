import type { Metadata } from "next";
import PageClient from "./page-client";

export const metadata: Metadata = {
  title: "Whistleblowing Policy | Recruitment Direct UK",
  description: "Whistleblowing policy providing confidential channels to raise compliance, safety, and ethical concerns without fear of reprisal.",
  alternates: {
    canonical: "https://rd1.co.uk/whistleblowing-policy",
  },
  openGraph: {
    title: "Whistleblowing Policy | Recruitment Direct UK",
    description: "Whistleblowing policy providing confidential channels to raise compliance, safety, and ethical concerns without fear of reprisal.",
    url: "https://rd1.co.uk/whistleblowing-policy",
    type: "website",
    siteName: "Recruitment Direct UK Ltd",
  },
};

export default function Page() {
  return <PageClient />;
}
