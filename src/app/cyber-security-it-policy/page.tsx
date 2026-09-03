import type { Metadata } from "next";
import PageClient from "./page-client";

export const metadata: Metadata = {
  title: "Cyber Security & IT Policy | Recruitment Direct UK",
  description: "Cyber Security and IT Management Policy covering infrastructure security, data encryption, and Cyber Essentials standards.",
  alternates: {
    canonical: "https://rd1.co.uk/cyber-security-it-policy",
  },
  openGraph: {
    title: "Cyber Security & IT Policy | Recruitment Direct UK",
    description: "Cyber Security and IT Management Policy covering infrastructure security, data encryption, and Cyber Essentials standards.",
    url: "https://rd1.co.uk/cyber-security-it-policy",
    type: "website",
    siteName: "Recruitment Direct UK Ltd",
  },
};

export default function Page() {
  return <PageClient />;
}
