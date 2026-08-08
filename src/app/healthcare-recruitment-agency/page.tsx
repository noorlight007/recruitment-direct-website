import type { Metadata } from "next";
import HealthcareAgencyPage from "./page-client";

export const metadata: Metadata = {
  title: "Healthcare Recruitment Agency UK | Temporary & Permanent Care Staff | Recruitment Direct UK",
  description: "Healthcare Recruitment Agency supplying temporary, contract and permanent care assistants, support workers and care professionals across the UK. Trusted since 2006.",
  keywords: "Healthcare Recruitment Agency, Care Recruitment, Care Staff, Temporary Care, Permanent Care, Support Workers, UK",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://rd1.co.uk/healthcare-recruitment-agency",
  },
  openGraph: {
    type: "website",
    title: "Healthcare Recruitment Agency UK | Recruitment Direct UK",
    description: "Healthcare Recruitment Agency supplying temporary, contract and permanent care assistants, support workers and care professionals across the UK.",
    url: "https://rd1.co.uk/healthcare-recruitment-agency",
    images: [
      {
        url: "https://rd1.co.uk/images/Healthcares.png",
        width: 1200,
        height: 630,
        alt: "Healthcare Recruitment Agency UK",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Healthcare Recruitment Agency UK | Recruitment Direct UK",
    description: "Healthcare Recruitment Agency supplying temporary, contract and permanent care assistants, support workers and care professionals across the UK.",
    images: ["https://rd1.co.uk/images/Healthcares.png"],
  },
};

export default function Page() {
  return <HealthcareAgencyPage />;
}
