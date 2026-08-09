import type { Metadata } from "next";
import CommercialSectorPageClient from "./page-client";

export const metadata: Metadata = {
  title: "Commercial & Office Recruitment Agency | Office Staffing | RDUK",
  description: "Recruitment Direct UK recruits and supplies office administrators, receptionists, customer service advisors, accounts, and payroll staff for temporary and contract work.",
  alternates: {
    canonical: "https://rd1.co.uk/commercial-office-recruitment-agency",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Commercial & Office Recruitment Agency | Office Staffing | RDUK",
    description: "Recruitment Direct UK recruits and supplies office administrators, receptionists, customer service advisors, accounts, and payroll staff for temporary and contract work.",
    url: "https://rd1.co.uk/commercial-office-recruitment-agency",
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
    title: "Commercial & Office Recruitment Agency | Office Staffing | RDUK",
    description: "Recruitment Direct UK recruits and supplies office administrators, receptionists, customer service advisors, accounts, and payroll staff for temporary and contract work.",
    images: ["https://rd1.co.uk/logo.png"],
  }
};

export default function CommercialSectorPage() {
  return <CommercialSectorPageClient />;
}
