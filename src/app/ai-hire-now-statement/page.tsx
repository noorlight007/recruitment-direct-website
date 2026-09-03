import type { Metadata } from "next";
import PageClient from "./page-client";

export const metadata: Metadata = {
  title: "AI Hire Now Transparency Statement | Recruitment Direct UK",
  description: "Transparency statement on Recruitment Direct UK's AI Hire Now on-demand staffing platform and operational procedures.",
  alternates: {
    canonical: "https://rd1.co.uk/ai-hire-now-statement",
  },
  openGraph: {
    title: "AI Hire Now Transparency Statement | Recruitment Direct UK",
    description: "Transparency statement on Recruitment Direct UK's AI Hire Now on-demand staffing platform and operational procedures.",
    url: "https://rd1.co.uk/ai-hire-now-statement",
    type: "website",
    siteName: "Recruitment Direct UK Ltd",
  },
};

export default function Page() {
  return <PageClient />;
}
