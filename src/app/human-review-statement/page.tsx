import type { Metadata } from "next";
import PageClient from "./page-client";

export const metadata: Metadata = {
  title: "Human Review & Oversight Statement | Recruitment Direct UK",
  description: "Statement on mandatory human review and consultant oversight in all AI-supported recruitment screening and placement decisions.",
  alternates: {
    canonical: "https://rd1.co.uk/human-review-statement",
  },
  openGraph: {
    title: "Human Review & Oversight Statement | Recruitment Direct UK",
    description: "Statement on mandatory human review and consultant oversight in all AI-supported recruitment screening and placement decisions.",
    url: "https://rd1.co.uk/human-review-statement",
    type: "website",
    siteName: "Recruitment Direct UK Ltd",
  },
};

export default function Page() {
  return <PageClient />;
}
