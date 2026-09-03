import type { Metadata } from "next";
import PageClient from "./page-client";

export const metadata: Metadata = {
  title: "AI Fairness and Bias Statement | Recruitment Direct UK",
  description: "Recruitment Direct UK's commitment to eliminating algorithmic bias and ensuring fair, inclusive AI-assisted hiring.",
  alternates: {
    canonical: "https://rd1.co.uk/bias-fairness-statement",
  },
  openGraph: {
    title: "AI Fairness and Bias Statement | Recruitment Direct UK",
    description: "Recruitment Direct UK's commitment to eliminating algorithmic bias and ensuring fair, inclusive AI-assisted hiring.",
    url: "https://rd1.co.uk/bias-fairness-statement",
    type: "website",
    siteName: "Recruitment Direct UK Ltd",
  },
};

export default function Page() {
  return <PageClient />;
}
