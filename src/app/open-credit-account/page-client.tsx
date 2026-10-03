"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingElements from "@/components/FloatingElements";

export default function OpenCreditAccountPage() {
  const [formMessage, setFormMessage] = useState("");

  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const get = (name: string) => String(data.get(name) ?? "").trim();

    // Unselected / empty fields are sent as empty strings.
    const payload = {
      company_name: get("company_registered_name"),
      registered_address: get("registered_address"),
      company_registration_number: get("company_registration_number"),
      vat_number: get("vat_number"),
      contact_name: get("contact_name"),
      job_title: get("job_title"),
      phone: get("phone"),
      email: get("email"),
      accounts_contact_name: get("accounts_contact_name"),
      accounts_email: get("accounts_email"),
      accounts_phone: get("accounts_phone"),
      purchase_order_required: get("purchase_order_required"),
      preferred_invoice_email: get("preferred_invoice_email"),
      service_type: get("staff_type"),
      sectors_required: get("sectors_required"),
      expected_weekly_spend: get("expected_weekly_spend"),
      preferred_payment_terms: get("preferred_payment_terms"),
    };

    setSubmitting(true);
    setFormMessage("");
    try {
      const res = await fetch(
        "https://api.callpilot.pro/api/v1/core/live/credit-application",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        }
      );
      if (!res.ok) throw new Error(`Request failed: ${res.status}`);
      form.reset();
      setFormMessage(
        "Thank you. Your credit account application has been received. Our team will review your details and contact you shortly."
      );
    } catch {
      setFormMessage(
        "Sorry, something went wrong submitting your application. Please try again."
      );
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#ffffff]">
      <FloatingElements />
      <Navbar />

      <main className="pt-[140px] pb-20">
        <section className="credit-account-page">
          <div className="credit-form-container">
            <h1>Open Credit Account</h1>
            <p className="intro-text">
              Complete the form below and our team will review your application.
            </p>

            <form id="creditAccountForm" onSubmit={handleSubmit}>
              {/* STEP 1 */}
              <div className="form-card">
                <h2>Step 1 — Registered Office Address</h2>
                <input
                  type="text"
                  name="company_registered_name"
                  placeholder="Company Registered Name *"
                  required
                />
                <input
                  type="text"
                  name="registered_address"
                  placeholder="Registered Address *"
                  required
                />
                <input
                  type="text"
                  name="company_registration_number"
                  placeholder="Company Registration Number"
                />
                <input type="text" name="vat_number" placeholder="VAT Number" />
              </div>

              {/* STEP 2 */}
              <div className="form-card">
                <h2>Step 2 — Main Contact</h2>
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

              {/* STEP 3 */}
              <div className="form-card">
                <h2>Step 3 — Accounts Details</h2>
                <input
                  type="text"
                  name="accounts_contact_name"
                  placeholder="Accounts Contact Name"
                />
                <input
                  type="email"
                  name="accounts_email"
                  placeholder="Accounts Email"
                />
                <input
                  type="tel"
                  name="accounts_phone"
                  placeholder="Accounts Phone"
                />
                <select name="purchase_order_required">
                  <option value="">Purchase Order Required?</option>
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </select>
                <input
                  type="email"
                  name="preferred_invoice_email"
                  placeholder="Preferred Invoice Email"
                />
              </div>

              {/* STEP 4 */}
              <div className="form-card">
                <h2>Step 4 — Additional Information</h2>
                <select name="staff_type">
                  <option value="">Temporary and Permanent Staff</option>
                  <option value="Temporary Staff">Temporary Staff</option>
                  <option value="Contract Staff">Contract Staff</option>
                  <option value="Permanent Staff">Permanent Staff</option>
                </select>
                <input
                  type="text"
                  name="sectors_required"
                  placeholder="Sectors Required"
                />
                <input
                  type="text"
                  name="expected_weekly_spend"
                  placeholder="Expected Weekly Spend"
                />
                <input
                  type="text"
                  name="preferred_payment_terms"
                  placeholder="Preferred Payment Terms"
                />
              </div>

              {/* BUTTON */}
              <button
                type="submit"
                className="submit-button"
                disabled={submitting}
              >
                {submitting ? "Submitting..." : "Submit Credit Application"}
                <span>FAST CLIENT SETUP</span>
              </button>

              <p id="formMessage">{formMessage}</p>
            </form>
          </div>
        </section>
      </main>

      <Footer />

      <style jsx>{`
        /* PAGE */
        .credit-account-page {
          background: #ffffff;
          padding: 60px 20px;
          font-family: Arial, sans-serif;
        }

        /* CONTAINER */
        .credit-form-container {
          max-width: 760px;
          margin: 0 auto;
        }

        /* HEADINGS */
        .credit-form-container h1 {
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
        #creditAccountForm {
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

        .submit-button:hover {
          background: #0b1f3d;
        }

        /* MESSAGE */
        #formMessage {
          text-align: center;
          margin-top: 15px;
          color: #1f6fff;
          font-weight: 600;
        }

        /* MOBILE */
        @media (max-width: 768px) {
          .credit-form-container h1 {
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
