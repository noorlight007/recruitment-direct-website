import type { Metadata } from "next";
import EngineeringAgencyPage from "./page-client";

export const metadata: Metadata = {
  title: "Engineering Recruitment Agency UK | Temporary, Contract & Permanent Engineering Staff | Recruitment Direct UK",
  description: "Engineering Recruitment Agency supplying temporary, contract and permanent engineering professionals across England, Scotland, Wales, Northern Ireland and the Republic of Ireland. Trusted since 2006.",
  keywords: "Engineering Recruitment Agency, Engineering Recruitment, Engineering Staff, Temporary Engineering, Permanent Engineering, Contract Engineering, UK, Ireland",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://rd1.co.uk/engineering-recruitment-agency",
  },
  openGraph: {
    type: "website",
    title: "Engineering Recruitment Agency UK | Recruitment Direct UK",
    description: "Engineering Recruitment Agency supplying temporary, contract and permanent engineering professionals across the UK and Republic of Ireland.",
    url: "https://rd1.co.uk/engineering-recruitment-agency",
    images: [
      {
        url: "https://rd1.co.uk/images/engineering-recruitment-agency.webp",
        width: 1200,
        height: 630,
        alt: "Engineering Recruitment Agency UK",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Engineering Recruitment Agency UK | Recruitment Direct UK",
    description: "Engineering Recruitment Agency supplying temporary, contract and permanent engineering professionals across the UK and Republic of Ireland.",
    images: ["https://rd1.co.uk/images/engineering-recruitment-agency.webp"],
  },
};

export default function Page() {
  return <EngineeringAgencyPage />;
}
