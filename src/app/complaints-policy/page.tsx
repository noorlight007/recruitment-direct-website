import type { Metadata } from "next";
import PageClient from "./page-client";

export const metadata: Metadata = {
  title: "Complaints Policy | RDUK",
  description: "Our procedure for handling complaints and ensuring high service standards.",
  alternates: {
    canonical: "https://rd1.co.uk/complaints-policy",
  },
};

export default function Page() {
  return <PageClient />;
}
