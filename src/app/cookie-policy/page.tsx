import type { Metadata } from "next";
import PageClient from "./page-client";

export const metadata: Metadata = {
  title: "Cookie Policy | Recruitment Direct UK",
  description: "Information on how Recruitment Direct UK uses cookies and tracking technologies to improve your website experience.",
  alternates: {
    canonical: "https://rd1.co.uk/cookie-policy",
  },
  openGraph: {
    title: "Cookie Policy | Recruitment Direct UK",
    description: "Information on how Recruitment Direct UK uses cookies and tracking technologies to improve your website experience.",
    url: "https://rd1.co.uk/cookie-policy",
    type: "website",
    siteName: "Recruitment Direct UK Ltd",
  },
};

export default function Page() {
  return <PageClient />;
}
