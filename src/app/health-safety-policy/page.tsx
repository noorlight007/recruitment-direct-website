import type { Metadata } from "next";
import PageClient from "./page-client";

export const metadata: Metadata = {
  title: "Health and Safety Policy | Recruitment Direct UK",
  description: "Health & Safety Policy ensuring safe working practices and duty of care for office staff and placed temporary workers.",
  alternates: {
    canonical: "https://rd1.co.uk/health-safety-policy",
  },
  openGraph: {
    title: "Health and Safety Policy | Recruitment Direct UK",
    description: "Health & Safety Policy ensuring safe working practices and duty of care for office staff and placed temporary workers.",
    url: "https://rd1.co.uk/health-safety-policy",
    type: "website",
    siteName: "Recruitment Direct UK Ltd",
  },
};

export default function Page() {
  return <PageClient />;
}
