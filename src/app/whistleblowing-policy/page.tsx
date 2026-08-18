import type { Metadata } from "next";
import PageClient from "./page-client";

export const metadata: Metadata = {
  title: "Whistleblowing Policy | RDUK",
  description: "Our policy encouraging staff to raise compliance and ethical concerns safely.",
  alternates: {
    canonical: "https://rd1.co.uk/whistleblowing-policy",
  },
};

export default function Page() {
  return <PageClient />;
}
