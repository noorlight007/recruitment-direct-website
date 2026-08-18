import type { Metadata } from "next";
import PageClient from "./page-client";

export const metadata: Metadata = {
  title: "AI Hire Now Transparency Statement | RDUK",
  description: "Our principles and guidelines for AI Hire Now, ensuring fair and compliant AI recruiting.",
  alternates: {
    canonical: "https://rd1.co.uk/ai-hire-now-statement",
  },
};

export default function Page() {
  return <PageClient />;
}
