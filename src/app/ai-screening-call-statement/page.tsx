import type { Metadata } from "next";
import PageClient from "./page-client";

export const metadata: Metadata = {
  title: "AI Screening Call Statement | RDUK",
  description: "Transparency statement on how we conduct automated AI candidate screening calls.",
  alternates: {
    canonical: "https://rd1.co.uk/ai-screening-call-statement",
  },
};

export default function Page() {
  return <PageClient />;
}
