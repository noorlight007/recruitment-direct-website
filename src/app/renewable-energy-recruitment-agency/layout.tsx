import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Renewable Energy Recruitment Agency UK | Wind, Solar & BESS Recruitment | Recruitment Direct UK",
  description: "Renewable Energy Recruitment Agency supplying temporary, contract and permanent wind, solar, BESS, EV charging, hydrogen and utilities professionals across the UK and Republic of Ireland. Trusted since 2006.",
  keywords: "Renewable Energy Recruitment Agency, Renewable Recruitment, Wind Recruitment, Offshore Wind Recruitment, Solar Recruitment, Solar PV Recruitment, BESS Recruitment, Battery Energy Storage Recruitment, EV Charging Recruitment, Hydrogen Recruitment, Renewable Energy Jobs UK",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://www.rd1.co.uk/renewable-energy-recruitment-agency",
  },
  openGraph: {
    type: "website",
    title: "Renewable Energy Recruitment Agency UK | Recruitment Direct UK",
    description: "Renewable Energy Recruitment Agency supplying temporary, contract and permanent professionals across the UK and Republic of Ireland.",
    url: "https://www.rd1.co.uk/renewable-energy-recruitment-agency",
    images: [
      {
        url: "https://www.rd1.co.uk/images/renewable-energy-recruitment-agency.webp",
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
    images: ["https://www.rd1.co.uk/images/renewable-energy-recruitment-agency.webp"],
  },
};

export default function RenewableEnergyAgencyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
