import type { Metadata } from "next";
import PageClient from "./page-client";

export const metadata: Metadata = {
  title: "Environmental & Carbon Policy | Recruitment Direct UK",
  description: "Our environmental management policy, ISO 14001 alignment, and carbon reduction measures across UK recruitment operations.",
  alternates: {
    canonical: "https://rd1.co.uk/environmental-carbon-policy",
  },
  openGraph: {
    title: "Environmental & Carbon Policy | Recruitment Direct UK",
    description: "Our environmental management policy, ISO 14001 alignment, and carbon reduction measures across UK recruitment operations.",
    url: "https://rd1.co.uk/environmental-carbon-policy",
    type: "website",
    siteName: "Recruitment Direct UK Ltd",
  },
};

export default function Page() {
  return <PageClient />;
}
