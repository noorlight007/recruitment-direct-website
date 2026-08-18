import type { Metadata } from "next";
import PageClient from "./page-client";

export const metadata: Metadata = {
  title: "Health and Safety Policy | RDUK",
  description: "Our policy ensuring a safe and healthy environment for our staff and temporary workers.",
  alternates: {
    canonical: "https://rd1.co.uk/health-safety-policy",
  },
};

export default function Page() {
  return <PageClient />;
}
