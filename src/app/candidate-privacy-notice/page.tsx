import type { Metadata } from "next";
import PageClient from "./page-client";

export const metadata: Metadata = {
  title: "Candidate Privacy Notice | RDUK",
  description: "Privacy policy and data handling information for job candidates and applicants.",
  alternates: {
    canonical: "https://rd1.co.uk/candidate-privacy-notice",
  },
};

export default function Page() {
  return <PageClient />;
}
