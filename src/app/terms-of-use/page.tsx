import type { Metadata } from "next";
import PageClient from "./page-client";

export const metadata: Metadata = {
  title: "Website Terms of Use | Recruitment Direct UK",
  description: "Terms and conditions governing the use of the Recruitment Direct UK Ltd website and online services.",
  alternates: {
    canonical: "https://rd1.co.uk/terms-of-use",
  },
  openGraph: {
    title: "Website Terms of Use | Recruitment Direct UK",
    description: "Terms and conditions governing the use of the Recruitment Direct UK Ltd website and online services.",
    url: "https://rd1.co.uk/terms-of-use",
    type: "website",
    siteName: "Recruitment Direct UK Ltd",
  },
};

export default function Page() {
  return <PageClient />;
}
