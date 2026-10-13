import type { Metadata } from "next";
import PageClient from "./page-client";

export const metadata: Metadata = {
  title: "Recruitment News & Hiring Advice | Recruitment Direct UK",
  description: "Recruitment news, hiring advice and company updates from Recruitment Direct UK, the Scottish agency supplying temporary and permanent staff since 2006.",
  // Remove once real posts appear in the server-rendered HTML.
  robots: { index: false, follow: true },
  alternates: {
    canonical: "https://rd1.co.uk/news",
  },
  openGraph: {
    title: "Recruitment News & Hiring Advice | Recruitment Direct UK",
    description: "Recruitment news, hiring advice and company updates from Recruitment Direct UK, the Scottish agency supplying temporary and permanent staff since 2006.",
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
    title: "Recruitment News & Hiring Advice | Recruitment Direct UK",
    description: "Recruitment news, hiring advice and company updates from Recruitment Direct UK, the Scottish agency supplying temporary and permanent staff since 2006.",
  },
};

export default function Page() {
  return <PageClient />;
}
