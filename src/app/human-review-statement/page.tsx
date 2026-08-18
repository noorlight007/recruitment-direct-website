import type { Metadata } from "next";
import PageClient from "./page-client";

export const metadata: Metadata = {
  title: "Human Review Statement | RDUK",
  description: "Our policy on human oversight and review in automated and AI recruitment decisions.",
  alternates: {
    canonical: "https://rd1.co.uk/human-review-statement",
  },
};

export default function Page() {
  return <PageClient />;
}
