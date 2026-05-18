import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const data = await request.json();

    console.log("Supplier Verification Data Received:", data);

    // MOCK WORKFLOW ACTIONS FOR DEVELOPER:
    
    // 1. Companies House Verification Mock
    const companyNumber = data.company_number || "";
    const isCompanyActive = companyNumber.length > 0; // Simulated check
    console.log("1. Companies House check status: Active");

    // 2. HMRC VAT Verification Mock
    const vatNumber = data.vat_number || "";
    const isVatValid = vatNumber.length > 0 ? true : false;
    console.log("2. HMRC VAT validation status: Verified", isVatValid);

    // 3. Generate AI supplier verification score:
    // Green = approved, Amber = manual review, Red = high risk / reject
    let verificationScore = "GREEN";
    if (!data.insurance_provider || !data.public_liability) {
      verificationScore = "AMBER";
    }
    if (!isCompanyActive) {
      verificationScore = "RED";
    }
    console.log(`3. AI Supplier Verification Score generated: ${verificationScore}`);

    // 4. Create supplier/compliance record in JobAdder
    console.log("4. JobAdder CRM Sync successful.");

    // 5. Create supplier/vendor record in Sage
    console.log("5. Sage Accounting Vendor Sync successful.");

    // 6. Send internal approval email to Recruitment Direct
    console.log("6. Internal notifications dispatched.");

    return NextResponse.json(
      {
        message: "Thank you. Your supplier verification form has been received. Our team will review your details shortly.",
        score: verificationScore,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Supplier verification error:", error);
    return NextResponse.json(
      { message: "There was a problem submitting the form. Please try again or contact Recruitment Direct." },
      { status: 500 }
    );
  }
}
