import type { Metadata } from "next";
import PageClient from "./page-client";

export const metadata: Metadata = {
  title: "Carbon Reduction Plan | Recruitment Direct UK",
  description: "Recruitment Direct UK's Carbon Reduction Plan outlining emissions baselines, environmental commitments, and Net Zero targets.",
  alternates: {
    canonical: "https://rd1.co.uk/carbon-reduction-plan",
  },
  openGraph: {
    title: "Carbon Reduction Plan | Recruitment Direct UK",
    description: "Recruitment Direct UK's Carbon Reduction Plan outlining emissions baselines, environmental commitments, and Net Zero targets.",
    url: "https://rd1.co.uk/carbon-reduction-plan",
    type: "website",
    siteName: "Recruitment Direct UK Ltd",
  },
};

export default function Page() {
  return <PageClient />;
}
