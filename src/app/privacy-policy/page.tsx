import type { Metadata } from "next";
import PageClient from "./page-client";

export const metadata: Metadata = {
  title: "Privacy Policy | Recruitment Direct UK",
  description: "Our privacy policy describing how we collect, use, and protect your personal data.",
  alternates: {
    canonical: "https://rd1.co.uk/privacy-policy",
  },
};

export default function Page() {
  return <PageClient />;
}
