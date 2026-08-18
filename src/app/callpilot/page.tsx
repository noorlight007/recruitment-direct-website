import type { Metadata } from "next";
import PageClient from "./page-client";

export const metadata: Metadata = {
  title: "CallPilot AI Voice Call | RDUK",
  description: "Learn about CallPilot, our automated candidate screening voice call system.",
  alternates: {
    canonical: "https://rd1.co.uk/callpilot",
  },
};

export default function Page() {
  return <PageClient />;
}
