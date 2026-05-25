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
      companyName: (document.getElementById('companyName') as HTMLInputElement).value,
      registeredAddress: (document.getElementById('registeredAddress') as HTMLInputElement).value,
      companyNumber: (document.getElementById('companyNumber') as HTMLInputElement).value,
      vatNumber: (document.getElementById('vatNumber') as HTMLInputElement).value,

      contactName: (document.getElementById('contactName') as HTMLInputElement).value,
      jobTitle: (document.getElementById('jobTitle') as HTMLInputElement).value,
      phoneNumber: (document.getElementById('phoneNumber') as HTMLInputElement).value,
      emailAddress: (document.getElementById('emailAddress') as HTMLInputElement).value,

      accountsName: (document.getElementById('accountsName') as HTMLInputElement).value,
      accountsEmail: (document.getElementById('accountsEmail') as HTMLInputElement).value,
      accountsPhone: (document.getElementById('accountsPhone') as HTMLInputElement).value,
      purchaseOrder: (document.getElementById('purchaseOrder') as HTMLSelectElement).value,
      invoiceEmail: (document.getElementById('invoiceEmail') as HTMLInputElement).value,

      staffType: (document.getElementById('staffType') as HTMLSelectElement).value,
      sectors: (document.getElementById('sectors') as HTMLInputElement).value,
      weeklySpend: (document.getElementById('weeklySpend') as HTMLInputElement).value,
      paymentTerms: (document.getElementById('paymentTerms') as HTMLInputElement).value,
      additionalNotes: (document.getElementById('additionalNotes') as HTMLTextAreaElement).value
    };

    const consultantEmail = `
NEW CREDIT ACCOUNT APPLICATION

Company Name:
\${formData.companyName}

Registered Address:
\${formData.registeredAddress}

Company Number:
\${formData.companyNumber}

VAT Number:
\${formData.vatNumber}

Main Contact:
\${formData.contactName}

Job Title:
\${formData.jobTitle}

Phone:
\${formData.phoneNumber}

Email:
\${formData.emailAddress}

Accounts Contact:
\${formData.accountsName}

Accounts Email:
\${formData.accountsEmail}

Accounts Phone:
\${formData.accountsPhone}

Purchase Order Required:
\${formData.purchaseOrder}

Preferred Invoice Email:
\${formData.invoiceEmail}

Staff Type:
\${formData.staffType}

Sectors:
\${formData.sectors}

Expected Weekly Spend:
\${formData.weeklySpend}

Payment Terms:
\${formData.paymentTerms}

Additional Notes:
\${formData.additionalNotes}
`;

    try {
      // We first try posting to our Next.js backend API
      const response = await fetch("/api/ai-verify-cis", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          to: "consultant@rd1.co.uk",
          subject: "New Credit Account Application",
          message: consultantEmail
        })
      });

      const data = await response.json();
      if (data.success) {
        setSuccess(true);
        setFormMessage("Thank you. Your credit account application has been submitted successfully.");
        const formEl = document.getElementById('creditForm') as HTMLFormElement;
        if (formEl) formEl.reset();
        window.scrollTo({
          top: document.body.scrollHeight,
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
    <div className="min-h-screen bg-[#f5f7fb]">
      <FloatingElements />
      <Navbar />

      <main className="pt-[140px] pb-20">
        <div className="credit-form-wrapper">
          <div className="credit-form-card">
            <h1>Open Credit Account</h1>
            <p className="intro">
              Complete the form below and our team will review your application quickly and securely.
            </p>

            <form id="creditForm" onSubmit={handleSubmit}>
              {/* STEP 1 */}
              <div className="form-section">
                <h2>Step 1 — Company Details</h2>
                <div className="form-group">
                  <input type="text" id="companyName" placeholder="Company Registered Name *" required />
                </div>
                <div className="form-group">
                  <input type="text" id="registeredAddress" placeholder="Registered Address *" required />
                </div>
                <div className="form-group">
                  <input type="text" id="companyNumber" placeholder="Company Registration Number" />
                </div>
                <div className="form-group">
                  <input type="text" id="vatNumber" placeholder="VAT Number" />
                </div>
              </div>

              {/* STEP 2 */}
              <div className="form-section">
                <h2>Step 2 — Main Contact</h2>
                <div className="form-group">
                  <input type="text" id="contactName" placeholder="Contact Name *" required />
                </div>
                <div className="form-group">
                  <input type="text" id="jobTitle" placeholder="Job Title" />
                </div>
                <div className="form-group">
                  <input type="tel" id="phoneNumber" placeholder="Phone Number *" required />
                </div>
                <div className="form-group">
                  <input type="email" id="emailAddress" placeholder="Email Address *" required />
                </div>
              </div>

              {/* STEP 3 */}
              <div className="form-section">
                <h2>Step 3 — Accounts Details</h2>
                <div className="form-group">
                  <input type="text" id="accountsName" placeholder="Accounts Contact Name" />
                </div>
                <div className="form-group">
                  <input type="email" id="accountsEmail" placeholder="Accounts Email" />
                </div>
                <div className="form-group">
                  <input type="tel" id="accountsPhone" placeholder="Accounts Phone Number" />
                </div>
                <div className="form-group">
                  <select id="purchaseOrder">
                    <option value="">Purchase Order Required?</option>
                    <option>Yes</option>
                    <option>No</option>
                  </select>
                </div>
                <div className="form-group">
                  <input type="email" id="invoiceEmail" placeholder="Preferred Invoice Email" />
                </div>
              </div>

              {/* STEP 4 */}
              <div className="form-section">
                <h2>Step 4 — Additional Information</h2>
                <div className="form-group">
                  <select id="staffType">
                    <option value="">Staff Type Required</option>
                    <option>Temporary Staff</option>
                    <option>Permanent Staff</option>
                    <option>Contract Staff</option>
                    <option>Temp-to-Perm</option>
                  </select>
                </div>
                <div className="form-group">
                  <input type="text" id="sectors" placeholder="Sectors Required" />
                </div>
                <div className="form-group">
                  <input type="text" id="weeklySpend" placeholder="Expected Weekly Spend" />
                </div>
                <div className="form-group">
                  <input type="text" id="paymentTerms" placeholder="Preferred Payment Terms" />
                </div>
                <div className="form-group">
                  <textarea id="additionalNotes" placeholder="Additional Notes"></textarea>
                </div>
              </div>

              {/* GDPR */}
              <div className="gdpr-box">
                <input type="checkbox" required />
                <label>
                  I confirm that the information provided is accurate and agree to Recruitment Direct UK Ltd processing this information for account setup purposes in line with GDPR regulations.
                </label>
              </div>

              {/* BUTTON */}
              <button type="submit" className="submit-btn">
                Submit Credit Application
                <span>FAST CLIENT SETUP</span>
              </button>

              {/* SUCCESS */}
              <div className="success-message" id="successMessage" style={{ display: success ? 'block' : 'none' }}>
                {formMessage}
              </div>
            </form>
          </div>
        </div>
      </main>

      <Footer />

      <style jsx>{`
        .credit-form-wrapper {
          max-width: 760px;
          margin: auto;
        }

        .credit-form-card {
          background: #ffffff;
          border-radius: 20px;
          padding: 45px;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.08);
        }

        .credit-form-card h1 {
          text-align: center;
          font-size: 42px;
          margin-bottom: 12px;
          color: #071426;
        }

        .credit-form-card .intro {
          text-align: center;
          color: #667085;
          margin-bottom: 40px;
          line-height: 1.6;
        }

        .form-section {
          border: 1px solid #e5e7eb;
          border-radius: 16px;
          padding: 28px;
          margin-bottom: 24px;
        }

        .form-section h2 {
          font-size: 22px;
          margin-bottom: 20px;
          color: #071426;
        }

        .form-group {
          margin-bottom: 18px;
        }

        input,
        select,
        textarea {
          width: 100%;
          padding: 16px;
          border: 1px solid #d0d5dd;
          border-radius: 12px;
          font-size: 15px;
          background: #ffffff;
          color: #071426;
          transition: 0.3s ease;
        }

        input:focus,
        select:focus,
        textarea:focus {
          outline: none;
          border-color: #0066ff;
          box-shadow: 0 0 0 4px rgba(0, 102, 255, 0.12);
        }

        textarea {
          min-height: 120px;
          resize: vertical;
        }

        .gdpr-box {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          margin-top: 20px;
          margin-bottom: 28px;
        }

        .gdpr-box input {
          width: auto;
          margin-top: 5px;
        }

        .gdpr-box label {
          font-size: 14px;
          line-height: 1.6;
          color: #475467;
        }

        .submit-btn {
          background: #071426;
          border: 2px solid #1f6fff;
          color: #ffffff;
          padding: 18px;
          border-radius: 16px;
          font-size: 18px;
          font-weight: 700;
          cursor: pointer;
          transition: 0.3s ease;
          width: 94%;
        }

        .submit-btn span {
          display: block;
          font-size: 12px;
          margin-top: 6px;
          color: #8fb7ff;
          letter-spacing: 1px;
        }

        .submit-btn:hover {
          background: #0b1f3d;
        }

        .success-message {
          background: #ecfdf3;
          border: 1px solid #abefc6;
          color: #067647;
          padding: 18px;
          border-radius: 12px;
          margin-top: 24px;
          font-weight: 600;
        }

        @media (max-width: 768px) {
          .credit-form-card {
            padding: 28px;
          }

          .credit-form-card h1 {
            font-size: 32px;
          }

          .form-section {
            padding: 20px;
          }
        }
      `}</style>
    </div>
  );
}
