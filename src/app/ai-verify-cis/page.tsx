import type { Metadata } from "next";
import PageClient from "./page-client";

export const metadata: Metadata = {
  title: "AI CIS Verification | RDUK",
  description: "Verify Construction Industry Scheme (CIS) details securely using our AI tool.",
  alternates: {
    canonical: "https://rd1.co.uk/ai-verify-cis",
  },
};

export default function Page() {
  return <PageClient />;
}
