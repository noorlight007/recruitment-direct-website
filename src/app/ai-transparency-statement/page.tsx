import type { Metadata } from "next";
import PageClient from "./page-client";

export const metadata: Metadata = {
  title: "AI Transparency Statement | RDUK",
  description: "Our commitment to ethical, transparent, and compliant use of artificial intelligence in recruitment.",
  alternates: {
    canonical: "https://rd1.co.uk/ai-transparency-statement",
  },
};

export default function Page() {
  return <PageClient />;
}
