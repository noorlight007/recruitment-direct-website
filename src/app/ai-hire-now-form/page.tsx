"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingElements from "@/components/FloatingElements";

export default function AIHireNowFormPage() {
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setMessage("Sending request...");
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("/api/ai-hire-now-order", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || "Unable to send request.");
      }

      setMessage("Order received. Our team is now reviewing your request and will be in touch shortly.");
      (e.target as HTMLFormElement).reset();
    } catch (error: any) {
      setMessage(error.message || "Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-20">
        <section className="ai-hire-now-section">
          <div className="ai-hire-now-container">
            <div className="ai-hire-now-header">
              <span className="ai-hire-now-eyebrow">EXISTING CLIENTS</span>
              <h1 className="ai-hire-now-title">AI Hire Now</h1>
              <p className="ai-hire-now-lead">
                Fast staff ordering for existing clients.
              </p>
              <p className="ai-hire-now-copy">
                Agreed rates are already in place, so your request can move immediately.
                If anything falls outside agreed terms, we will confirm rates straight away.
              </p>
            </div>

            <form id="aiHireNowForm" className="ai-hire-now-form" onSubmit={handleSubmit}>
              <div className="ai-hire-now-grid">
                <div className="ai-hire-now-field">
                  <label htmlFor="company">Company</label>
                  <input id="company" name="company" type="text" placeholder="Company name" required />
                </div>

                <div className="ai-hire-now-field">
                  <label htmlFor="contactName">Your Name</label>
                  <input id="contactName" name="contactName" type="text" placeholder="Your full name" required />
                </div>

                <div className="ai-hire-now-field">
                  <label htmlFor="phone">Phone Number</label>
                  <input id="phone" name="phone" type="tel" placeholder="Your phone number" required />
                </div>

                <div className="ai-hire-now-field">
                  <label htmlFor="jobTitles">Job Title(s)</label>
                  <input id="jobTitles" name="jobTitles" type="text" placeholder="e.g. Labourers, Forklift Drivers, Supervisor" required />
                </div>

                <div className="ai-hire-now-field">
                  <label htmlFor="workers">Number of Workers</label>
                  <input id="workers" name="workers" type="number" min="1" placeholder="e.g. 5" required />
                </div>

                <div className="ai-hire-now-field">
                  <label htmlFor="startDate">Start Date</label>
                  <input id="startDate" name="startDate" type="date" required />
                </div>
              </div>

              <div className="ai-hire-now-grid ai-hire-now-grid-bottom">
                <div className="ai-hire-now-field ai-hire-now-field-wide">
                  <label htmlFor="location">Location</label>
                  <textarea id="location" name="location" rows={4} placeholder="Main site, postcode, or first location" required></textarea>
                </div>

                <div className="ai-hire-now-field ai-hire-now-field-wide">
                  <label htmlFor="notes">Site &amp; role details (if multiple)</label>
                  <textarea id="notes" name="notes" rows={4} placeholder="Example: 6 labourers - Glasgow site, 4 drivers - Edinburgh depot, 2 supervisors - Falkirk site"></textarea>
                </div>
              </div>

              <div className="ai-hire-now-actions">
                <button type="submit" className="ai-hire-now-button" disabled={isSubmitting}>
                  {isSubmitting ? "Sending..." : "AI Hire Now"}
                </button>
                <p className="ai-hire-now-trust">24/7 ordering • Fast response • Existing client service</p>
                <p id="aiHireNowMessage" className="ai-hire-now-message" aria-live="polite">
                  {message}
                </p>
              </div>
            </form>
          </div>
        </section>
      </main>

      <Footer />
      <FloatingElements />

      <style jsx>{`
        .ai-hire-now-section {
          background: #ffffff;
          padding: 84px 20px;
        }

        .ai-hire-now-container {
          width: 100%;
          max-width: 1280px;
          margin: 0 auto;
        }

        .ai-hire-now-header {
          max-width: 840px;
          margin-bottom: 42px;
        }

        .ai-hire-now-eyebrow {
          display: inline-block;
          margin-bottom: 18px;
          font-size: 0.95rem;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: #2563eb;
        }

        .ai-hire-now-title {
          margin: 0 0 18px;
          color: #0a0a0a;
          font-family: inherit;
          font-size: clamp(2.9rem, 6vw, 5.4rem);
          font-weight: inherit;
          line-height: 0.96;
          letter-spacing: -0.04em;
        }

        .ai-hire-now-lead {
          margin: 0 0 10px;
          color: #111111;
          font-family: inherit;
          font-size: clamp(1.2rem, 2vw, 1.5rem);
          font-weight: 600;
          line-height: 1.35;
        }

        .ai-hire-now-copy {
          margin: 0;
          max-width: 860px;
          color: #222222;
          font-family: inherit;
          font-size: 1.08rem;
          line-height: 1.7;
        }

        .ai-hire-now-form {
          padding-top: 34px;
          border-top: 1px solid #e5e7eb;
        }

        .ai-hire-now-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 28px 26px;
          margin-bottom: 28px;
        }

        .ai-hire-now-grid-bottom {
          grid-template-columns: repeat(2, minmax(0, 1fr));
        }

        .ai-hire-now-field {
          display: flex;
          flex-direction: column;
        }

        .ai-hire-now-field label {
          margin-bottom: 10px;
          color: #111111;
          font-family: inherit;
          font-size: 1rem;
          font-weight: 600;
          line-height: 1.4;
        }

        .ai-hire-now-field input,
        .ai-hire-now-field textarea {
          width: 100%;
          border: 1px solid #d9dde5;
          border-radius: 14px;
          background: #ffffff;
          color: #111111;
          font-family: inherit;
          font-size: 1rem;
          line-height: 1.5;
          padding: 18px 18px;
          outline: none;
          transition: border-color 0.2s ease, box-shadow 0.2s ease, transform 0.2s ease;
          box-sizing: border-box;
          appearance: none;
          -webkit-appearance: none;
        }

        .ai-hire-now-field textarea {
          resize: vertical;
          min-height: 132px;
        }

        .ai-hire-now-field input::placeholder,
        .ai-hire-now-field textarea::placeholder {
          color: #8a8f98;
          opacity: 1;
        }

        .ai-hire-now-field input:focus,
        .ai-hire-now-field textarea:focus {
          border-color: #111111;
          box-shadow: 0 0 0 4px rgba(17, 17, 17, 0.06);
        }

        .ai-hire-now-actions {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding-top: 10px;
        }

        .ai-hire-now-button {
          min-width: 360px;
          border: 0;
          border-radius: 16px;
          background: #000000;
          color: #ffffff;
          font-family: inherit;
          font-size: 1.2rem;
          font-weight: 700;
          line-height: 1;
          padding: 22px 34px;
          cursor: pointer;
          transition: transform 0.2s ease, opacity 0.2s ease, box-shadow 0.2s ease;
          box-shadow: 0 14px 34px rgba(0, 0, 0, 0.14);
        }

        .ai-hire-now-button:hover {
          transform: translateY(-1px);
          opacity: 0.96;
          box-shadow: 0 18px 40px rgba(0, 0, 0, 0.18);
        }

        .ai-hire-now-button:active {
          transform: translateY(0);
        }

        .ai-hire-now-button:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }

        .ai-hire-now-trust {
          margin: 22px 0 0;
          color: #111111;
          font-family: inherit;
          font-size: 1rem;
          font-weight: 500;
          line-height: 1.5;
          text-align: center;
        }

        .ai-hire-now-message {
          min-height: 24px;
          margin: 14px 0 0;
          color: #111111;
          font-family: inherit;
          font-size: 0.98rem;
          text-align: center;
        }

        @media (max-width: 991px) {
          .ai-hire-now-section {
            padding: 72px 18px;
          }

          .ai-hire-now-grid,
          .ai-hire-now-grid-bottom {
            grid-template-columns: 1fr;
          }

          .ai-hire-now-button {
            min-width: 100%;
            width: 100%;
          }
        }

        @media (max-width: 640px) {
          .ai-hire-now-section {
            padding: 58px 16px;
          }

          .ai-hire-now-header {
            margin-bottom: 30px;
          }

          .ai-hire-now-form {
            padding-top: 26px;
          }

          .ai-hire-now-grid {
            gap: 20px;
            margin-bottom: 20px;
          }

          .ai-hire-now-field input,
          .ai-hire-now-field textarea {
            padding: 16px 16px;
            font-size: 16px;
          }

          .ai-hire-now-button {
            padding: 20px 24px;
            font-size: 1.08rem;
            border-radius: 14px;
          }

          .ai-hire-now-trust {
            font-size: 0.95rem;
          }
        }
      `}</style>
    </div>
  );
}
