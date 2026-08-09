import type { Metadata } from "next";
import ConstructionAgencyPage from "./page-client";

export const metadata: Metadata = {
  title: "Construction Recruitment Agency | Recruitment Direct",
  description: "Construction Recruitment Agency supplying temporary, contract and permanent construction professionals across the UK and Ireland. Trusted since 2006.",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    title: "Construction Recruitment Agency UK | Recruitment Direct UK",
    description: "Construction Recruitment Agency supplying temporary, contract and permanent construction professionals across the UK and Republic of Ireland.",
    url: "https://rd1.co.uk/construction-recruitment-agency",
    images: [
      {
        url: "https://rd1.co.uk/images/construction-recruitment-agency.webp",
        width: 1200,
        height: 630,
        alt: "Construction Recruitment Agency UK",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Construction Recruitment Agency UK | Recruitment Direct UK",
    description: "Construction Recruitment Agency supplying temporary, contract and permanent construction professionals across the UK and Republic of Ireland.",
    images: ["https://rd1.co.uk/images/construction-recruitment-agency.webp"],
  },
};

export default function Page() {
  return <ConstructionAgencyPage />;
}
