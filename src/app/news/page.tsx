import type { Metadata } from "next";
import PageClient from "./page-client";

export const metadata: Metadata = {
  title: "News & Insights | Recruitment Direct UK",
  description: "Stay updated with the latest recruitment industry trends, advice, and RDUK company news.",
  alternates: {
    canonical: "https://rd1.co.uk/news",
  },
};

export default function Page() {
  return <PageClient />;
}
