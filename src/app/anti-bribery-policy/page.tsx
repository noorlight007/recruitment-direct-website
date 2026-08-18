import type { Metadata } from "next";
import PageClient from "./page-client";

export const metadata: Metadata = {
  title: "Anti-Bribery and Corruption Policy | RDUK",
  description: "Our commitment to zero tolerance towards bribery and corruption in all our business activities.",
  alternates: {
    canonical: "https://rd1.co.uk/anti-bribery-policy",
  },
};

export default function Page() {
  return <PageClient />;
}
