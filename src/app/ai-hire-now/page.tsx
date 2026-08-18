import type { Metadata } from "next";
import PageClient from "./page-client";

export const metadata: Metadata = {
  title: "AI-Powered Recruitment Solutions | RDUK",
  description: "Request staff instantly with our AI platform and secure pre-screened candidates within hours.",
  alternates: {
    canonical: "https://rd1.co.uk/ai-hire-now",
  },
};

export default function Page() {
  return <PageClient />;
}
