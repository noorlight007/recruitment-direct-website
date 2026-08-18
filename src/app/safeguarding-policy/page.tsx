import type { Metadata } from "next";
import PageClient from "./page-client";

export const metadata: Metadata = {
  title: "Safeguarding Policy | RDUK",
  description: "Our safeguarding procedures for protecting children and vulnerable adults in recruitment.",
  alternates: {
    canonical: "https://rd1.co.uk/safeguarding-policy",
  },
};

export default function Page() {
  return <PageClient />;
}
