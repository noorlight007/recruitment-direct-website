import type { Metadata } from "next";
import ClientsPageClient from "./page-client";

export const metadata: Metadata = {
  title: "Client Staffing Services | Recruitment Direct UK Ltd",
  description: "Find temporary, contract and permanent staffing solutions across the UK. Partner with RDUK to fulfill your business workforce requirements.",
  alternates: {
    canonical: "https://rd1.co.uk/clients",
  },
  openGraph: {
    title: "Client Staffing Services | Recruitment Direct UK Ltd",
    description: "Find temporary, contract and permanent staffing solutions across the UK. Partner with RDUK to fulfill your business workforce requirements.",
    url: "https://rd1.co.uk/clients",
    type: "website",
    images: [
      {
        url: "https://rd1.co.uk/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Client Staffing Services - Recruitment Direct UK Ltd",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Client Staffing Services | Recruitment Direct UK Ltd",
    description: "Find temporary, contract and permanent staffing solutions across the UK.",
  },
};

export default function ClientsPage() {
  return <ClientsPageClient />;
}
