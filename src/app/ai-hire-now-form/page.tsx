import type { Metadata } from "next";
import PageClient from "./page-client";

export const metadata: Metadata = {
  title: "Request Staff | AI Hire Now | RDUK",
  description: "Submit your staffing requirements through our AI portal for rapid fulfillment.",
  alternates: {
    canonical: "https://rd1.co.uk/ai-hire-now-form",
  },
};

export default function Page() {
  return <PageClient />;
}
