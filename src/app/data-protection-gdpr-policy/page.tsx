import type { Metadata } from "next";
import PageClient from "./page-client";

export const metadata: Metadata = {
  title: "Data Protection & GDPR Policy | RDUK",
  description: "Our data protection policy ensuring compliance with GDPR and UK data laws.",
  alternates: {
    canonical: "https://rd1.co.uk/data-protection-gdpr-policy",
  },
};

export default function Page() {
  return <PageClient />;
}
