import type { Metadata } from "next";
import Index from "./page-client";

export const metadata: Metadata = {
  title: "Recruitment Agency Scotland & UK | Recruitment Direct UK Ltd",
  description: "Recruitment Direct UK supplies temporary, contract and permanent staff across Scotland and the UK. Sourcing candidates since 2006.",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://rd1.co.uk",
  },
  openGraph: {
    title: "Recruitment Agency Scotland & UK | Recruitment Direct UK Ltd",
    description: "Recruitment Direct UK supplies temporary, contract and permanent staff across Scotland and the UK. Sourcing candidates since 2006.",
    url: "https://rd1.co.uk/",
    siteName: "Recruitment Direct UK",
    type: "website",
    images: [
      {
        url: "https://rd1.co.uk/logo.png",
        width: 1200,
        height: 630,
        alt: "Recruitment Direct UK Ltd Logo",
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Recruitment Agency Scotland & UK | Recruitment Direct UK Ltd",
    description: "Recruitment Direct UK supplies temporary, contract and permanent staff across Scotland and the UK. Sourcing candidates since 2006.",
    images: ["https://rd1.co.uk/logo.png"],
  },
};

export default function Page() {
  return <Index />;
}
