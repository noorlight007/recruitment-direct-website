import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Construction Recruitment Agency UK | Temporary & Permanent Staff | Recruitment Direct UK Ltd",
  description: "UK-wide construction recruitment agency supplying temporary, contract and permanent construction staff. Labour, trades, plant operators, civil engineering, quarries, aggregates and facilities management. Trusted since 2006.",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://www.rd1.co.uk/construction-recruitment-agency",
  },
};

export default function ConstructionAgencyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
