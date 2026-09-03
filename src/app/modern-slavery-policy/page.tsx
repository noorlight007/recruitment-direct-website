import type { Metadata } from "next";
import PageClient from "./page-client";

export const metadata: Metadata = {
  title: "Modern Slavery & Human Trafficking Policy | Recruitment Direct UK",
  description: "Modern Slavery and Human Trafficking Statement under Section 54 of the Modern Slavery Act 2015.",
  alternates: {
    canonical: "https://rd1.co.uk/modern-slavery-policy",
  },
  openGraph: {
    title: "Modern Slavery & Human Trafficking Policy | Recruitment Direct UK",
    description: "Modern Slavery and Human Trafficking Statement under Section 54 of the Modern Slavery Act 2015.",
    url: "https://rd1.co.uk/modern-slavery-policy",
    type: "website",
    siteName: "Recruitment Direct UK Ltd",
  },
};

export default function Page() {
  return <PageClient />;
}
