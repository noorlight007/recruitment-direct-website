import type { Metadata } from "next";
import RenewableEnergyAgencyPage from "./page-client";

export const metadata: Metadata = {
  title: "Renewable Energy Recruitment | Recruitment Direct",
  description: "Renewable Energy Recruitment Agency supplying wind, solar, BESS, EV charging, hydrogen and utilities professionals across the UK. Trusted since 2006.",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    title: "Renewable Energy Recruitment Agency UK | Recruitment Direct UK",
    description: "Renewable Energy Recruitment Agency supplying temporary, contract and permanent professionals across the UK and Republic of Ireland.",
    url: "https://rd1.co.uk/renewable-energy-recruitment-agency",
    images: [
      {
        url: "https://rd1.co.uk/images/renewable-energy-recruitment-agency.webp",
        width: 1200,
        height: 630,
        alt: "Renewable Energy Recruitment Agency UK",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Renewable Energy Recruitment Agency UK | Recruitment Direct UK",
    description: "Renewable Energy Recruitment Agency supplying temporary, contract and permanent professionals across the UK and Republic of Ireland.",
    images: ["https://rd1.co.uk/images/renewable-energy-recruitment-agency.webp"],
  },
};

export default function Page() {
  return <RenewableEnergyAgencyPage />;
}
