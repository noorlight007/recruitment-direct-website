import type { Metadata } from "next";
import PageClient from "./page-client";

export const metadata: Metadata = {
  title: "Information Security Policy | RDUK",
  description: "Our standards for securing information assets, databases, and client/candidate records.",
  alternates: {
    canonical: "https://rd1.co.uk/information-security-policy",
  },
};

export default function Page() {
  return <PageClient />;
}
