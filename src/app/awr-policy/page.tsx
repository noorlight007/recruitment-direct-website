import type { Metadata } from "next";
import PageClient from "./page-client";

export const metadata: Metadata = {
  title: "Agency Workers Regulations (AWR) Policy | Recruitment Direct UK",
  description: "Recruitment Direct UK's policy on the Agency Workers Regulations 2010 ensuring fair pay, rights, and equal treatment.",
  alternates: {
    canonical: "https://rd1.co.uk/awr-policy",
  },
  openGraph: {
    title: "Agency Workers Regulations (AWR) Policy | Recruitment Direct UK",
    description: "Recruitment Direct UK's policy on the Agency Workers Regulations 2010 ensuring fair pay, rights, and equal treatment.",
    url: "https://rd1.co.uk/awr-policy",
    type: "website",
    siteName: "Recruitment Direct UK Ltd",
  },
};

export default function Page() {
  return <PageClient />;
}
