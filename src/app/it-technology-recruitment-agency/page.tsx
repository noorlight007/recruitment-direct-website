import type { Metadata } from "next";
import ITTechSectorPageClient from "./page-client";

export const metadata: Metadata = {
  title: "IT & Technology Recruitment Agency | Tech Staffing UK | RDUK",
  description: "Recruitment Direct UK recruits and supplies IT support, developers, network engineers, cloud, and digital tech professionals for temporary, contract, and permanent jobs.",
  alternates: {
    canonical: "https://rd1.co.uk/it-technology-recruitment-agency",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "IT & Technology Recruitment Agency | Tech Staffing UK | RDUK",
    description: "Recruitment Direct UK recruits and supplies IT support, developers, network engineers, cloud, and digital tech professionals for temporary, contract, and permanent jobs.",
    url: "https://rd1.co.uk/it-technology-recruitment-agency",
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
    title: "IT & Technology Recruitment Agency | Tech Staffing UK | RDUK",
    description: "Recruitment Direct UK recruits and supplies IT support, developers, network engineers, cloud, and digital tech professionals for temporary, contract, and permanent jobs.",
    images: ["https://rd1.co.uk/logo.png"],
  }
};

export default function ITTechSectorPage() {
  return <ITTechSectorPageClient />;
}
