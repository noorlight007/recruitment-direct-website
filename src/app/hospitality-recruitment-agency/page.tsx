import type { Metadata } from "next";
import HospitalityAgencyPage from "./page-client";

export const metadata: Metadata = {
  title: "Hospitality Recruitment Agency UK | Temporary & Permanent Catering Staff | Recruitment Direct UK",
  description: "Hospitality Recruitment Agency supplying temporary, contract and permanent chefs, waiting staff, kitchen assistants and bar staff across the UK. Trusted since 2006.",
  keywords: "Hospitality Recruitment Agency, Catering Recruitment, Catering Staff, Temporary Hospitality Staff, Permanent Hospitality Staff, UK",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://rd1.co.uk/hospitality-recruitment-agency",
  },
  openGraph: {
    type: "website",
    title: "Hospitality Recruitment Agency UK | Recruitment Direct UK",
    description: "Hospitality Recruitment Agency supplying temporary, contract and permanent chefs, waiting staff, kitchen assistants and bar staff across the UK.",
    url: "https://rd1.co.uk/hospitality-recruitment-agency",
    images: [
      {
        url: "https://rd1.co.uk/images/Hospitalitys.png",
        width: 1200,
        height: 630,
        alt: "Hospitality Recruitment Agency UK",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hospitality Recruitment Agency UK | Recruitment Direct UK",
    description: "Hospitality Recruitment Agency supplying temporary, contract and permanent chefs, waiting staff, kitchen assistants and bar staff across the UK.",
    images: ["https://rd1.co.uk/images/Hospitalitys.png"],
  },
};

export default function Page() {
  return <HospitalityAgencyPage />;
}
