import type { Metadata } from "next";
import PageClient from "./page-client";

export const metadata: Metadata = {
  title: "News & Insights | Recruitment Direct UK",
  description: "Stay updated with the latest recruitment industry trends, employment law compliance, and workforce advice from Recruitment Direct UK.",
  alternates: {
    canonical: "https://rd1.co.uk/news",
  },
  openGraph: {
    title: "News & Insights | Recruitment Direct UK",
    description: "Stay updated with the latest recruitment industry trends, employment law compliance, and workforce advice from Recruitment Direct UK.",
    url: "https://rd1.co.uk/news",
    type: "website",
    images: [
      {
        url: "https://rd1.co.uk/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "News & Insights - Recruitment Direct UK Ltd",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "News & Insights | Recruitment Direct UK",
    description: "Stay updated with the latest recruitment industry trends, employment law compliance, and workforce advice from Recruitment Direct UK.",
  },
};

export default function Page() {
  return <PageClient />;
}
