import type { Metadata } from "next";
import PageClient from "./page-client";

export const metadata: Metadata = {
  title: "Data Retention Policy | RDUK",
  description: "How long we retain personal data and business records in accordance with compliance.",
  alternates: {
    canonical: "https://rd1.co.uk/data-retention-policy",
  },
};

export default function Page() {
  return <PageClient />;
}
