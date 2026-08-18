import type { Metadata } from "next";
import PageClient from "./page-client";

export const metadata: Metadata = {
  title: "Modern Slavery Act Statement | RDUK",
  description: "Our annual statement and policy on preventing modern slavery in our operations and supply chains.",
  alternates: {
    canonical: "https://rd1.co.uk/modern-slavery-policy",
  },
};

export default function Page() {
  return <PageClient />;
}
