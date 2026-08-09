import type { Metadata } from "next";
import LogisticsSectorPageClient from "./page-client";

export const metadata: Metadata = {
  title: "Logistics Recruitment Agency | Driver Supply UK | RDUK",
  description: "Recruitment Direct UK recruits and supplies HGV drivers, tipper drivers, concrete mixer drivers, and logistics personnel for temporary and contract work.",
  alternates: {
    canonical: "https://rd1.co.uk/logistics-recruitment-agency",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Logistics Recruitment Agency | Driver Supply UK | RDUK",
    description: "Recruitment Direct UK recruits and supplies HGV drivers, tipper drivers, concrete mixer drivers, and logistics personnel for temporary and contract work.",
    url: "https://rd1.co.uk/logistics-recruitment-agency",
    siteName: "Recruitment Direct UK",
    type: "website",
    images: [
      {
        url: "https://rd1.co.uk/logo.png",
        width: 1200,
        height: 630,
        alt: "Recruitment Direct UK Logo",
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Logistics Recruitment Agency | Driver Supply UK | RDUK",
    description: "Recruitment Direct UK recruits and supplies HGV drivers, tipper drivers, concrete mixer drivers, and logistics personnel for temporary and contract work.",
    images: ["https://rd1.co.uk/logo.png"],
  }
};

export default function LogisticsSectorPage() {
  return <LogisticsSectorPageClient />;
}
