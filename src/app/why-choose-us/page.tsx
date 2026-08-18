import type { Metadata } from "next";
import PageClient from "./page-client";

export const metadata: Metadata = {
  title: "Why Choose RDUK | Recruitment Direct UK",
  description: "Discover what sets Recruitment Direct UK apart, from framework alignment to AI delivery.",
  alternates: {
    canonical: "https://rd1.co.uk/why-choose-us",
  },
};

export default function Page() {
  return <PageClient />;
}
