import { NextResponse } from "next/server";
import { cities } from "@/data/cities";

const FALLBACK_LOCATIONS = [
  "Newcastle", "London", "Hull", "Coventry", "Durham", "Birkenhead",
  "Glasgow", "Edinburgh", "Aberdeen", "Falkirk", "Cardiff", "Belfast",
  "Manchester", "Liverpool", "Leeds", "Bristol"
];

export async function GET() {
  try {
    const cityNames = cities.map((c) => c.city);
    const combined = [...cityNames, ...FALLBACK_LOCATIONS];
    const uniqueLocations = Array.from(new Set(combined)).sort();
    
    return NextResponse.json({ locations: uniqueLocations });
  } catch (error) {
    console.error("Error fetching locations:", error);
    return NextResponse.json(
      { error: "Failed to retrieve locations" },
      { status: 500 }
    );
  }
}
