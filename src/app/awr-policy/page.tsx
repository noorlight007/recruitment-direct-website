import type { Metadata } from "next";
import PageClient from "./page-client";

export const metadata: Metadata = {
  title: "Agency Workers Regulations (AWR) Policy | RDUK",
  description: "Our policy ensuring compliance with the Agency Workers Regulations (AWR) for all temporary staff.",
  alternates: {
    canonical: "https://rd1.co.uk/awr-policy",
  },
};

export default function Page() {
  return <PageClient />;
}
