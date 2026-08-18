import type { Metadata } from "next";
import PageClient from "./page-client";

export const metadata: Metadata = {
  title: "Environmental & Carbon Policy | RDUK",
  description: "Our commitment to environmental sustainability and reducing carbon footprint.",
  alternates: {
    canonical: "https://rd1.co.uk/environmental-carbon-policy",
  },
};

export default function Page() {
  return <PageClient />;
}
