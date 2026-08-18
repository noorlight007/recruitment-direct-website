import type { Metadata } from "next";
import PageClient from "./page-client";

export const metadata: Metadata = {
  title: "Data Security & Compliance | RDUK",
  description: "How we secure our platform, candidates data, and maintain SOC2/GDPR compliance.",
  alternates: {
    canonical: "https://rd1.co.uk/security",
  },
};

export default function Page() {
  return <PageClient />;
}
