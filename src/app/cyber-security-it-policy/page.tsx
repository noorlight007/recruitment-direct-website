import type { Metadata } from "next";
import PageClient from "./page-client";

export const metadata: Metadata = {
  title: "Cyber Security & IT Policy | RDUK",
  description: "Our protocols and standards for cyber security and information technology management.",
  alternates: {
    canonical: "https://rd1.co.uk/cyber-security-it-policy",
  },
};

export default function Page() {
  return <PageClient />;
}
