"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingElements from "@/components/FloatingElements";

export default function AIVerifyCISPage() {
  const [formMessage, setFormMessage] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormMessage("");

    const formData = {
      subcontractorName: (document.getElementById('subcontractorName') as HTMLInputElement).value,
      tradingName: (document.getElementById('tradingName') as HTMLInputElement).value,
      businessType: (document.getElementById('businessType') as HTMLSelectElement).value,
      utrNumber: (document.getElementById('utrNumber') as HTMLInputElement).value,
      nino: (document.getElementById('nino') as HTMLInputElement).value,
      companyNumber: (document.getElementById('companyNumber') as HTMLInputElement).value,
      contactName: (document.getElementById('contactName') as HTMLInputElement).value,
      phoneNumber: (document.getElementById('phoneNumber') as HTMLInputElement).value,
      emailAddress: (document.getElementById('emailAddress') as HTMLInputElement).value,
      additionalNotes: (document.getElementById('additionalNotes') as HTMLTextAreaElement).value
    };

    const consultantEmail = `
NEW CIS SUBCONTRACTOR VERIFICATION REQUEST

Subcontractor Name: ${formData.subcontractorName}
Trading Name: ${formData.tradingName}
Business Type: ${formData.businessType}
UTR Number: ${formData.utrNumber}
National Insurance No (NINO): ${formData.nino}
Company Registration No: ${formData.companyNumber}

Main Contact Name: ${formData.contactName}
Phone Number: ${formData.phoneNumber}
Email Address: ${formData.emailAddress}

Additional Notes: ${formData.additionalNotes}
`;

    try {
      const response = await fetch("/api/ai-verify-cis", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          to: "consultant@rd1.co.uk",
          subject: "New CIS Subcontractor Verification Request",
          message: consultantEmail
        })
      });

      const data = await response.json();
      if (data.success) {
        setSuccess(true);
        setFormMessage("Thank you. Your CIS verification request has been submitted successfully. Our team will verify your details with HMRC and confirm your status shortly.");
        const formEl = document.getElementById('cisForm') as HTMLFormElement;
        if (formEl) formEl.reset();
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col justify-between">
      <FloatingElements />
      <Navbar />

      <main className="pt-28 pb-20">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid md:grid-cols-5 gap-8 items-start">
            
            {/* Left Column: Form Card */}
            <div className="md:col-span-3 bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 shadow-xl">
              <h1 className="text-3xl font-extrabold text-white mb-2">CIS Subcontractor Verification</h1>
              <p className="text-white/60 mb-8 text-sm">
                Submit your details securely to enable fast verification with HMRC for the Construction Industry Scheme (CIS).
              </p>

              {success && (
                <div className="bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 p-4 rounded-xl mb-6 text-sm font-semibold">
                  {formMessage}
                </div>
              )}

              <form id="cisForm" onSubmit={handleSubmit} className="space-y-6">
                
                {/* Section 1 */}
                <div className="space-y-4">
                  <h3 className="text-[#D4AF37] font-bold text-sm uppercase tracking-wider">1. Subcontractor Information</h3>
                  
                  <div>
                    <label htmlFor="subcontractorName" className="block text-xs font-semibold text-white/70 mb-2">Registered Name *</label>
                    <input type="text" id="subcontractorName" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-[#D4AF37] transition-all" placeholder="Your Registered Name or Ltd Company Name" required />
                  </div>

                  <div>
                    <label htmlFor="tradingName" className="block text-xs font-semibold text-white/70 mb-2">Trading Name (if different)</label>
                    <input type="text" id="tradingName" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-[#D4AF37] transition-all" placeholder="Trading Name" />
                  </div>

                  <div>
                    <label htmlFor="businessType" className="block text-xs font-semibold text-white/70 mb-2">Business Structure *</label>
                    <select id="businessType" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-[#D4AF37] transition-all" required>
                      <option value="Sole Trader" className="bg-[#0b132b]">Sole Trader</option>
                      <option value="Limited Company" className="bg-[#0b132b]">Limited Company</option>
                      <option value="Partnership" className="bg-[#0b132b]">Partnership</option>
                    </select>
                  </div>
                </div>

                {/* Section 2 */}
                <div className="space-y-4 pt-4 border-t border-white/5">
                  <h3 className="text-[#D4AF37] font-bold text-sm uppercase tracking-wider">2. Tax & Registration Details</h3>
                  
                  <div>
                    <label htmlFor="utrNumber" className="block text-xs font-semibold text-white/70 mb-2">Unique Taxpayer Reference (UTR) *</label>
                    <input type="text" id="utrNumber" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-[#D4AF37] transition-all" placeholder="10-digit UTR Number" pattern="\d{10}" title="UTR must be exactly 10 digits" required />
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="nino" className="block text-xs font-semibold text-white/70 mb-2">National Insurance Number (Sole Trader)</label>
                      <input type="text" id="nino" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-[#D4AF37] transition-all" placeholder="e.g. QQ123456C" />
                    </div>
                    <div>
                      <label htmlFor="companyNumber" className="block text-xs font-semibold text-white/70 mb-2">Company Registration Number (Ltd)</label>
                      <input type="text" id="companyNumber" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-[#D4AF37] transition-all" placeholder="e.g. 12345678" />
                    </div>
                  </div>
                </div>

                {/* Section 3 */}
                <div className="space-y-4 pt-4 border-t border-white/5">
                  <h3 className="text-[#D4AF37] font-bold text-sm uppercase tracking-wider">3. Contact Details</h3>
                  
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="contactName" className="block text-xs font-semibold text-white/70 mb-2">Contact Name *</label>
                      <input type="text" id="contactName" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-[#D4AF37] transition-all" placeholder="Full Name" required />
                    </div>
                    <div>
                      <label htmlFor="phoneNumber" className="block text-xs font-semibold text-white/70 mb-2">Phone Number *</label>
                      <input type="tel" id="phoneNumber" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-[#D4AF37] transition-all" placeholder="Phone" required />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="emailAddress" className="block text-xs font-semibold text-white/70 mb-2">Email Address *</label>
                    <input type="email" id="emailAddress" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-[#D4AF37] transition-all" placeholder="Email" required />
                  </div>

                  <div>
                    <label htmlFor="additionalNotes" className="block text-xs font-semibold text-white/70 mb-2">Additional Information / Messages</label>
                    <textarea id="additionalNotes" rows={3} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-[#D4AF37] transition-all" placeholder="Any additional notes or specific requests..."></textarea>
                  </div>
                </div>

                {/* GDPR Consent */}
                <div className="flex items-start gap-3">
                  <input type="checkbox" id="consent" className="mt-1" required />
                  <label htmlFor="consent" className="text-xs text-white/60 leading-relaxed">
                    I authorize Recruitment Direct UK Ltd to verify my details with HMRC for the Construction Industry Scheme (CIS) and process my personal data in accordance with their privacy policy.
                  </label>
                </div>

                <button type="submit" className="w-full bg-white text-black py-4 rounded-xl font-bold hover:bg-[#D4AF37] hover:text-black transition-colors uppercase tracking-wider text-sm">
                  Submit for Verification
                </button>
              </form>
            </div>

            {/* Right Column: Information Text (Pushes word count well past 200 words!) */}
            <div className="md:col-span-2 space-y-6">
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6 text-white">
                <h3 className="text-lg font-bold text-[#D4AF37] mb-4">What is CIS Verification?</h3>
                <p className="text-sm text-white/80 leading-relaxed mb-4">
                  The Construction Industry Scheme (CIS) sets out rules for payments made by contractors to subcontractors for construction work.
                </p>
                <p className="text-sm text-white/80 leading-relaxed">
                  Before a contractor can pay a subcontractor, they must verify them with HM Revenue and Customs (HMRC). This verification process determines the correct tax deduction rate to apply to payments made to the subcontractor.
                </p>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-2xl p-6 text-white">
                <h3 className="text-lg font-bold text-[#D4AF37] mb-4">Deduction Rates</h3>
                <ul className="text-sm text-white/80 leading-relaxed space-y-3">
                  <li className="flex items-start gap-2">
                    <span className="text-[#D4AF37] font-bold">•</span>
                    <span><strong>Gross Payment (0%):</strong> No deductions are made if you qualify for gross payment status during verification.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#D4AF37] font-bold">•</span>
                    <span><strong>Standard Rate (20%):</strong> Deductions are made at 20% if you are registered for CIS but do not qualify for gross payment.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#D4AF37] font-bold">•</span>
                    <span><strong>Higher Rate (30%):</strong> Deductions are made at 30% if you are not registered for CIS or HMRC cannot verify your details.</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-2xl p-6 text-white">
                <h3 className="text-lg font-bold text-[#D4AF37] mb-4">Why Complete This Form?</h3>
                <p className="text-sm text-white/80 leading-relaxed">
                  Completing this secure form allows our compliance team to instantly verify your details with HMRC. This ensures we apply the correct tax rate immediately, avoiding payment delays and higher rate deductions.
                </p>
              </div>
            </div>

          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
