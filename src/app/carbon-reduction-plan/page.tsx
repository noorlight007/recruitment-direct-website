import type { Metadata } from "next";
import PageClient from "./page-client";

export const metadata: Metadata = {
  title: "Carbon Reduction Plan | RDUK",
  description: "Our carbon reduction objectives and progress towards achieving net-zero emissions.",
  alternates: {
    canonical: "https://rd1.co.uk/carbon-reduction-plan",
  },
};

export default function Page() {
  return <PageClient />;
}
