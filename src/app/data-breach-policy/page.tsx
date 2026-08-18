import type { Metadata } from "next";
import PageClient from "./page-client";

export const metadata: Metadata = {
  title: "Data Breach Notification Policy | RDUK",
  description: "Our procedures for identifying, managing, and reporting data breaches under GDPR.",
  alternates: {
    canonical: "https://rd1.co.uk/data-breach-policy",
  },
};

export default function Page() {
  return <PageClient />;
}
