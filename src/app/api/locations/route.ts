import { NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";
import { revalidatePath } from "next/cache";

const getFilePath = () => {
  return path.join(process.cwd(), "src", "data", "locations.json");
};

// GET: Retrieve all locations
export async function GET() {
  try {
    const filePath = getFilePath();
    const fileContent = await fs.readFile(filePath, "utf-8");
    const locations = JSON.parse(fileContent);
    return NextResponse.json(locations);
  } catch (error) {
    console.error("Failed to read locations database:", error);
    return NextResponse.json({ error: "Failed to read database" }, { status: 500 });
  }
}

// POST: Add a new location
export async function POST(request: Request) {
  try {
    const filePath = getFilePath();
    const fileContent = await fs.readFile(filePath, "utf-8");
    const locations = JSON.parse(fileContent);

    const newLoc = await request.json();
    
    if (!newLoc.name || !newLoc.slug || !newLoc.country) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    // Check for duplicate slug
    const duplicate = locations.find(
      (l: any) => l.country === newLoc.country && l.slug === newLoc.slug
    );
    if (duplicate) {
      return NextResponse.json({ error: "Location slug already exists in this country" }, { status: 409 });
    }

    newLoc.published = newLoc.published !== undefined ? newLoc.published : true;
    locations.push(newLoc);

    await fs.writeFile(filePath, JSON.stringify(locations, null, 2), "utf-8");

    // Revalidate routes to reflect changes immediately
    revalidatePath("/locations");
    revalidatePath(`/locations/${newLoc.country}`);
    revalidatePath(`/locations/${newLoc.country}/${newLoc.slug}`);

    return NextResponse.json({ success: true, location: newLoc });
  } catch (error) {
    console.error("Failed to add location:", error);
    return NextResponse.json({ error: "Failed to save to database" }, { status: 500 });
  }
}

// PUT: Update an existing location
export async function PUT(request: Request) {
  try {
    const filePath = getFilePath();
    const fileContent = await fs.readFile(filePath, "utf-8");
    const locations = JSON.parse(fileContent);

    const updatedLoc = await request.json();
    
    if (!updatedLoc.slug || !updatedLoc.country) {
      return NextResponse.json({ error: "Missing required fields (slug/country)" }, { status: 400 });
    }

    const index = locations.findIndex(
      (l: any) => l.country === updatedLoc.country && l.slug === updatedLoc.slug
    );

    if (index === -1) {
      return NextResponse.json({ error: "Location not found" }, { status: 444 });
    }

    // Update fields
    locations[index] = {
      ...locations[index],
      ...updatedLoc,
    };

    await fs.writeFile(filePath, JSON.stringify(locations, null, 2), "utf-8");

    // Revalidate routes to reflect changes immediately
    revalidatePath("/locations");
    revalidatePath(`/locations/${updatedLoc.country}`);
    revalidatePath(`/locations/${updatedLoc.country}/${updatedLoc.slug}`);

    return NextResponse.json({ success: true, location: locations[index] });
  } catch (error) {
    console.error("Failed to update location:", error);
    return NextResponse.json({ error: "Failed to save to database" }, { status: 500 });
  }
}

// DELETE: Remove a location
export async function DELETE(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const country = searchParams.get("country");
    const slug = searchParams.get("slug");

    if (!country || !slug) {
      return NextResponse.json({ error: "Missing parameters (country/slug)" }, { status: 400 });
    }

    const filePath = getFilePath();
    const fileContent = await fs.readFile(filePath, "utf-8");
    const locations = JSON.parse(fileContent);

    const index = locations.findIndex(
      (l: any) => l.country === country && l.slug === slug
    );

    if (index === -1) {
      return NextResponse.json({ error: "Location not found" }, { status: 404 });
    }

    const removedLoc = locations.splice(index, 1)[0];

    await fs.writeFile(filePath, JSON.stringify(locations, null, 2), "utf-8");

    // Revalidate routes
    revalidatePath("/locations");
    revalidatePath(`/locations/${country}`);
    revalidatePath(`/locations/${country}/${slug}`);

    return NextResponse.json({ success: true, removed: removedLoc });
  } catch (error) {
    console.error("Failed to delete location:", error);
    return NextResponse.json({ error: "Failed to delete from database" }, { status: 500 });
  }
}
