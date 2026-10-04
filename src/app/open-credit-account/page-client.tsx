"use client";

import { useState } from "react";
import { toast } from "sonner";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingElements from "@/components/FloatingElements";

export default function OpenCreditAccountPage() {
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

    // Clear previous highlights, then validate field by field.
    form
      .querySelectorAll(".field-error")
      .forEach((el) => el.classList.remove("field-error"));
    form.querySelectorAll(".field-error-msg").forEach((el) => el.remove());

    const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const required: [string, string][] = [
      ["company_registered_name", "Company name"],
      ["registered_address", "Registered address"],
      ["contact_name", "Contact name"],
      ["phone", "Phone"],
      ["email", "Email"],
    ];
    const errors: { name: string; message: string }[] = [];
    for (const [name, label] of required) {
      if (!get(name)) errors.push({ name, message: `${label} is required` });
    }
    for (const name of ["email", "accounts_email"]) {
      const v = get(name);
      if (v && !emailRe.test(v) && !errors.some((x) => x.name === name)) {
        errors.push({ name, message: "Please enter a valid email address" });
      }
    }

    if (errors.length) {
      const fields = errors.map(
        (er) => form.elements.namedItem(er.name) as HTMLElement | null
      );
      fields.forEach((el, i) => {
        if (!el) return;
        el.classList.add("field-error");
        const msg = document.createElement("span");
        msg.className = "field-error-msg";
        msg.setAttribute("role", "alert");
        msg.textContent = errors[i].message;
        el.insertAdjacentElement("afterend", msg);
        el.addEventListener(
          "input",
          () => {
            el.classList.remove("field-error");
            msg.remove();
          },
          { once: true }
        );
      });
      const first = fields.find(Boolean);
      first?.scrollIntoView({ behavior: "smooth", block: "center" });
      window.setTimeout(() => (first as HTMLInputElement | null)?.focus({ preventScroll: true }), 400);
      toast.warning(errors[0].message, {
        description:
          errors.length > 1
            ? `${errors.length - 1} more field(s) need attention.`
            : undefined,
      });
      return;
    }

    setSubmitting(true);
    try {
      const res = await fetch(
        "https://api.callpilot.pro/api/v1/core/live/credit-application",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        }
      );
      if (!res.ok) {
        let detail = "";
        try {
          const body = await res.json();
          detail = body?.message || body?.error || "";
        } catch {}
        if (res.status >= 400 && res.status < 500) {
          toast.warning("Please check your details", {
            description:
              detail || "Some information couldn't be accepted. Please review the form and try again.",
          });
        } else {
          toast.error("Server error", {
            description: "We couldn't process your application right now. Please try again shortly.",
          });
        }
        return;
      }
      form.reset();
      toast.success("Application received", {
        description:
          "Thank you. Our team will review your details and contact you shortly.",
        duration: 8000,
      });
    } catch {
      toast.error("Submission failed", {
        description: "Network problem. Please check your connection and try again.",
      });
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

            <form id="creditAccountForm" onSubmit={handleSubmit} noValidate>
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
                <select name="preferred_payment_terms" defaultValue="">
                  <option value="">Preferred Payment Terms</option>
                  <option value="Days From Invoice Date">Days From Invoice Date</option>
                  <option value="Days From End Of Invoice Month">Days From End Of Invoice Month</option>
                  <option value="Day Of The Current Month">Day Of The Current Month</option>
                  <option value="Day Of The Following Month">Day Of The Following Month</option>
                </select>
              </div>

              {/* BUTTON */}
              <button
                type="submit"
                className="submit-button"
                disabled={submitting}
              >
                {submitting ? "Submitting..." : "Submit Credit Application"}
              </button>

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
          color: #111111;
          margin-bottom: 15px;
          text-align: center;
        }

        .intro-text {
          text-align: center;
          color: #555555;
          margin-bottom: 32px;
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
          border: 1px solid #d4d4d4;
          border-radius: 18px;
          padding: 30px;
          box-shadow: 0 4px 18px rgba(0, 0, 0, 0.04);
        }

        .form-card h2 {
          margin-bottom: 20px;
          color: #111111;
          font-size: 22px;
        }

        /* INPUTS */
        .form-card input,
        .form-card select {
          width: 100%;
          padding: 16px;
          margin-bottom: 15px;
          border-radius: 12px;
          border: 1px solid #d4d4d4;
          font-size: 16px;
          color: #111111;
          background: #ffffff;
          box-sizing: border-box;
        }

        .form-card input:focus,
        .form-card select:focus {
          outline: none;
          border-color: #1c1c1c;
        }

        .form-card input.field-error,
        .form-card select.field-error {
          border-color: #e5484d;
          background: #fff5f5;
          box-shadow: 0 0 0 3px rgba(229, 72, 77, 0.2);
          animation: field-shake 0.35s;
        }

        :global(.field-error-msg) {
          display: block;
          margin: -6px 0 10px;
          color: #e5484d;
          font-size: 13px;
          font-weight: 600;
        }

        @keyframes field-shake {
          25% { transform: translateX(-4px); }
          75% { transform: translateX(4px); }
        }

        /* PLACEHOLDER */
        .form-card input::placeholder {
          color: #777777;
        }

        /* BUTTON */
        .submit-button {
          background: #1c1c1c;
          border: 1px solid #1c1c1c;
          color: #ffffff;
          padding: 18px;
          border-radius: 16px;
          font-size: 18px;
          font-weight: 700;
          cursor: pointer;
          transition: 0.3s ease;
        }

        .submit-button:hover {
          background: #3a3a3a;
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
