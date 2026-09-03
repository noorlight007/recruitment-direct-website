import type { Metadata } from "next";
import PageClient from "./page-client";

export const metadata: Metadata = {
  title: "Complaints Policy & Procedure | Recruitment Direct UK",
  description: "Recruitment Direct UK's formal complaints procedure for candidates and clients, ensuring prompt, transparent resolution.",
  alternates: {
    canonical: "https://rd1.co.uk/complaints-policy",
  },
  openGraph: {
    title: "Complaints Policy & Procedure | Recruitment Direct UK",
    description: "Recruitment Direct UK's formal complaints procedure for candidates and clients, ensuring prompt, transparent resolution.",
    url: "https://rd1.co.uk/complaints-policy",
    type: "website",
    siteName: "Recruitment Direct UK Ltd",
  },
};

export default function Page() {
  return <PageClient />;
}
