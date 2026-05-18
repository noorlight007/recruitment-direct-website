"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingElements from "@/components/FloatingElements";

export default function SupplierVerificationFormPage() {
  const [formMessage, setFormMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormMessage("");

    const formData = new FormData(e.currentTarget);
    const supplierData = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("/api/supplier-verification", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(supplierData),
      });

      if (!response.ok) {
        throw new Error("Submission failed");
      }

      const result = await response.json();
      setFormMessage(result.message);
      (e.target as HTMLFormElement).reset();
    } catch (error) {
      setFormMessage(
        "There was a problem submitting the form. Please try again or contact Recruitment Direct."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#ffffff]">
      <FloatingElements />
      <Navbar />

      <main className="pt-[140px] pb-20">
        <section className="supplier-verify-page">
          <div className="supplier-form-container">
            <h1>AI Supplier Verification</h1>
            <p className="intro-text">
              Complete the form below so we can verify your supplier details.
            </p>

            <form id="supplierVerificationForm" onSubmit={handleSubmit}>
              {/* COMPANY DETAILS */}
              <div className="form-card">
                <h2>Company Details</h2>
                <input
                  type="text"
                  name="supplier_company_name"
                  placeholder="Supplier Company Name *"
                  required
                />
                <input
                  type="text"
                  name="company_number"
                  placeholder="Company Registration Number *"
                  required
                />
                <input type="text" name="vat_number" placeholder="VAT Number" />
                <input
                  type="text"
                  name="registered_address"
                  placeholder="Registered Address *"
                  required
                />
                <input
                  type="text"
                  name="trading_address"
                  placeholder="Trading Address"
                />
              </div>

              {/* MAIN CONTACT */}
              <div className="form-card">
                <h2>Main Contact</h2>
                <input
                  type="text"
                  name="contact_name"
                  placeholder="Contact Name *"
                  required
                />
                <input type="text" name="job_title" placeholder="Job Title" />
                <input type="tel" name="phone" placeholder="Phone *" required />
                <input
                  type="email"
                  name="email"
                  placeholder="Email *"
                  required
                />
              </div>

              {/* VERIFICATION CHECKS */}
              <div className="form-card">
                <h2>Verification Checks</h2>
                <input
                  type="text"
                  name="supplier_services"
                  placeholder="Services Supplied"
                />
                <input type="text" name="utr_number" placeholder="UTR Number" />
                <select name="cis_registered">
                  <option value="">CIS Registered?</option>
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                  <option value="Not Applicable">Not Applicable</option>
                </select>
              </div>

              {/* INSURANCE & COMPLIANCE */}
              <div className="form-card">
                <h2>Insurance & Compliance</h2>
                <input
                  type="text"
                  name="insurance_provider"
                  placeholder="Insurance Provider"
                />
                <input
                  type="text"
                  name="public_liability"
                  placeholder="Public Liability Cover Amount"
                />
                <input
                  type="text"
                  name="employers_liability"
                  placeholder="Employers Liability Cover Amount"
                />
                <input type="date" name="insurance_expiry" />
              </div>

              {/* BANK DETAILS */}
              <div className="form-card">
                <h2>Bank Details</h2>
                <input type="text" name="bank_name" placeholder="Bank Name" />
                <input
                  type="text"
                  name="account_name"
                  placeholder="Account Name"
                />
                <input type="text" name="sort_code" placeholder="Sort Code" />
                <input
                  type="text"
                  name="account_number"
                  placeholder="Account Number"
                />
              </div>

              {/* DECLARATION */}
              <div className="form-card">
                <h2>Declaration</h2>
                <label className="checkbox-label">
                  <input type="checkbox" name="confirm_accuracy" required />
                  <span>I confirm the information provided is accurate.</span>
                </label>
                <input
                  type="text"
                  name="digital_signature"
                  placeholder="Digital Signature *"
                  required
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="submit-button"
              >
                {isSubmitting ? "Submitting..." : "Submit Supplier Verification"}
                <span>AI VERIFICATION CHECK</span>
              </button>

              {formMessage && <p id="supplierFormMessage">{formMessage}</p>}
            </form>
          </div>
        </section>
      </main>

      <Footer />

      <style jsx>{`
        /* PAGE */
        .supplier-verify-page {
          background: #ffffff;
          padding: 60px 20px;
          font-family: Arial, sans-serif;
        }

        /* CONTAINER */
        .supplier-form-container {
          max-width: 760px;
          margin: 0 auto;
        }

        /* HEADINGS */
        .supplier-form-container h1 {
          font-size: 42px;
          color: #071426;
          margin-bottom: 15px;
          text-align: center;
        }

        .intro-text {
          text-align: center;
          color: #555555;
          margin-bottom: 40px;
          font-size: 18px;
        }

        /* FORM */
        #supplierVerificationForm {
          display: flex;
          flex-direction: column;
          gap: 25px;
        }

        /* CARDS */
        .form-card {
          background: #ffffff;
          border: 1px solid #d9e2f2;
          border-radius: 18px;
          padding: 30px;
          box-shadow: 0 4px 18px rgba(0, 0, 0, 0.04);
        }

        .form-card h2 {
          margin-bottom: 20px;
          color: #071426;
          font-size: 22px;
        }

        /* INPUTS */
        .form-card input,
        .form-card select {
          width: 100%;
          padding: 16px;
          margin-bottom: 15px;
          border-radius: 12px;
          border: 1px solid #d9e2f2;
          font-size: 16px;
          color: #111111;
          background: #ffffff;
          box-sizing: border-box;
        }

        .form-card input:focus,
        .form-card select:focus {
          outline: none;
          border-color: #1f6fff;
        }

        /* CHECKBOX */
        .checkbox-label {
          display: flex;
          gap: 12px;
          align-items: center;
          color: #071426;
          margin-bottom: 15px;
          cursor: pointer;
        }

        .checkbox-label input {
          width: auto;
          margin: 0;
        }

        /* PLACEHOLDER */
        .form-card input::placeholder {
          color: #777777;
        }

        /* BUTTON */
        .submit-button {
          background: #071426;
          border: 2px solid #1f6fff;
          color: #ffffff;
          padding: 18px;
          border-radius: 16px;
          font-size: 18px;
          font-weight: 700;
          cursor: pointer;
          transition: 0.3s ease;
        }

        .submit-button span {
          display: block;
          font-size: 12px;
          margin-top: 6px;
          color: #8fb7ff;
          letter-spacing: 1px;
        }

        .submit-button:hover:not(:disabled) {
          background: #0b1f3d;
        }

        .submit-button:disabled {
          opacity: 0.7;
          cursor: not-allowed;
        }

        /* MESSAGE */
        #supplierFormMessage {
          text-align: center;
          margin-top: 15px;
          color: #1f6fff;
          font-weight: 600;
        }

        /* MOBILE */
        @media (max-width: 768px) {
          .supplier-form-container h1 {
            font-size: 32px;
          }

          .form-card {
            padding: 22px;
          }
        }
      `}</style>
    </div>
  );
}
