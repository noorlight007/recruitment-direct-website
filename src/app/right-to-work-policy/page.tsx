import type { Metadata } from "next";
import PageClient from "./page-client";

export const metadata: Metadata = {
  title: "Right to Work Verification Policy | Recruitment Direct UK",
  description: "Statutory Right to Work verification procedures for UK and international workers compliant with Home Office guidance.",
  alternates: {
    canonical: "https://rd1.co.uk/right-to-work-policy",
  },
  openGraph: {
    title: "Right to Work Verification Policy | Recruitment Direct UK",
    description: "Statutory Right to Work verification procedures for UK and international workers compliant with Home Office guidance.",
    url: "https://rd1.co.uk/right-to-work-policy",
    type: "website",
    siteName: "Recruitment Direct UK Ltd",
  },
};

export default function Page() {
  return <PageClient />;
}
