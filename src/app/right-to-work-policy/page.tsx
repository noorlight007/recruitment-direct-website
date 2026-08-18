import type { Metadata } from "next";
import PageClient from "./page-client";

export const metadata: Metadata = {
  title: "Right to Work Verification Policy | RDUK",
  description: "Our compliance policy for verifying candidates right to work in the UK.",
  alternates: {
    canonical: "https://rd1.co.uk/right-to-work-policy",
  },
};

export default function Page() {
  return <PageClient />;
}
