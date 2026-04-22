import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const data = await request.json();

    // Log the data for now (in a real app, you'd send an email or save to DB)
    console.log("AI Hire Now Order received:", data);

    return NextResponse.json(
      { message: "Order received successfully." },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Error processing your request." },
      { status: 500 }
    );
  }
}
