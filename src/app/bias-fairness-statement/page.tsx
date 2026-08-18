import type { Metadata } from "next";
import PageClient from "./page-client";

export const metadata: Metadata = {
  title: "AI Fairness and Bias Statement | RDUK",
  description: "How we ensure fairness and mitigate bias in our AI-driven recruitment and screening tools.",
  alternates: {
    canonical: "https://rd1.co.uk/bias-fairness-statement",
  },
};

export default function Page() {
  return <PageClient />;
}
