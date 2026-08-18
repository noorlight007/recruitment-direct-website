import type { Metadata } from "next";
import PageClient from "./page-client";

export const metadata: Metadata = {
  title: "AI Volume Hiring Solutions | RDUK",
  description: "Manage large-scale temporary and contract recruitment campaigns efficiently with AI.",
  alternates: {
    canonical: "https://rd1.co.uk/ai-volume-hiring",
  },
};

export default function Page() {
  return <PageClient />;
}
