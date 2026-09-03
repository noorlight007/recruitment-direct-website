import type { Metadata } from "next";
import PageClient from "./page-client";

export const metadata: Metadata = {
  title: "AI Transparency Statement | Recruitment Direct UK",
  description: "Our policy and commitment to ethical AI use, human oversight, and algorithmic transparency in recruitment operations.",
  alternates: {
    canonical: "https://rd1.co.uk/ai-transparency-statement",
  },
  openGraph: {
    title: "AI Transparency Statement | Recruitment Direct UK",
    description: "Our policy and commitment to ethical AI use, human oversight, and algorithmic transparency in recruitment operations.",
    url: "https://rd1.co.uk/ai-transparency-statement",
    type: "website",
    siteName: "Recruitment Direct UK Ltd",
  },
};

export default function Page() {
  return <PageClient />;
}
