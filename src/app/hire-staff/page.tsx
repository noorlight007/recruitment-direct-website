import type { Metadata } from "next";
import PageClient from "./page-client";

export const metadata: Metadata = {
  title: "Hire Staff UK-Wide | Recruitment Direct UK",
  description: "Request temporary, contract, or permanent staff online 24/7. Fully screened, compliant, and verified candidates matching your sector requirements.",
  alternates: {
    canonical: "https://rd1.co.uk/hire-staff",
  },
};

export default function Page() {
  return <PageClient />;
}
