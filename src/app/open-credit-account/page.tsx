import type { Metadata } from "next";
import PageClient from "./page-client";

export const metadata: Metadata = {
  title: "Open a Credit Account | Recruitment Direct UK",
  description: "Apply to open a commercial credit account with Recruitment Direct UK and get fast access to temporary, contract and permanent staff across the UK.",
  alternates: {
    canonical: "https://rd1.co.uk/open-credit-account",
  },
};

export default function Page() {
  return <PageClient />;
}
