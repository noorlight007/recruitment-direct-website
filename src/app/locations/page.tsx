import type { Metadata } from "next";
import LocationsClient from "./LocationsClient";

export const metadata: Metadata = {
  title: "Our Locations | Recruitment Direct UK",
  description: "Find our office locations and recruitment services across England, Scotland, Wales, Ireland and Northern Ireland.",
};

export default function LocationsPage() {
  return <LocationsClient />;
}
