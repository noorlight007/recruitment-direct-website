"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { CheckCircle2, AlertCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingElements from "@/components/FloatingElements";
import { api } from "@/services/api";

interface FormErrors {
  company_name?: string;
  full_name?: string;
  phone_number?: string;
  job_title?: string;
  num_of_workers?: string;
  start_date?: string;
  location?: string;
  siteAndroles?: string;
}

const fieldLabels: Record<string, string> = {
  company_name: "Company Name",
  full_name: "Full Name",
  phone_number: "Phone Number",
  job_title: "Job Title",
  num_of_workers: "Number of Workers",
  start_date: "Start Date",
  location: "Location",
  siteAndroles: "Site & role details",
};

const mapFieldToInputId = (field: string): string | null => {
  const mapping: Record<string, string> = {
    company_name: "company",
    full_name: "contactName",
    phone_number: "phone",
    job_title: "jobTitles",
    num_of_workers: "workers",
    start_date: "startDate",
    location: "location",
    siteAndroles: "notes",
  };
  return mapping[field] || null;
};

export default function AIHireNowFormPage() {
  const router = useRouter();
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Validation / Error States
  const [formErrors, setFormErrors] = useState<FormErrors>({});

  // Modals States
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [successInfo, setSuccessInfo] = useState<{ companyName?: string; jobId?: number } | null>(null);

  const [showErrorModal, setShowErrorModal] = useState(false);
  const [errorDetails, setErrorDetails] = useState<{ message: string; detail?: string } | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setMessage("");
    setIsSubmitting(true);
    setFormErrors({});

    const formData = new FormData(e.currentTarget);
    const payload = {
      company_name: formData.get("company") as string,
      full_name: formData.get("contactName") as string,
      phone_number: formData.get("phone") as string,
      job_title: formData.get("jobTitles") as string,
      num_of_workers: parseInt(formData.get("workers") as string) || 0,
      start_date: formData.get("startDate") as string,
      location: formData.get("location") as string,
      siteAndroles: formData.get("notes") as string,
    };

    try {
      // POST payload to "/core/live/ai-hire-now" via api.post helper
      const result = await api.post("/core/live/ai-hire-now", payload);

      if (result.success) {
        setSuccessInfo({
          companyName: result.company?.name || payload.company_name,
          jobId: result.job?.jobId,
        });
        setShowSuccessModal(true);
        setMessage("");
        (e.target as HTMLFormElement).reset();
      } else if (result.error === "Missing required fields" && Array.isArray(result.fields)) {
        // Validation failure from server
        const errors: FormErrors = {};
        result.fields.forEach((field: string) => {
          errors[field as keyof FormErrors] = `Missing required field: ${fieldLabels[field] || field}`;
        });
        setFormErrors(errors);

        // Auto scroll to the first invalid field
        const firstField = result.fields[0];
        const elementId = mapFieldToInputId(firstField);
        if (elementId) {
          const el = document.getElementById(elementId);
          if (el) {
            el.scrollIntoView({ behavior: "smooth", block: "center" });
            el.focus();
          }
        }
        setMessage("");
      } else {
        // General or conflict error response
        let displayMessage = result.error || "An error occurred while creating order.";
        let detail = result.detail || "";
        if (result.response) {
          try {
            const parsedRes = JSON.parse(result.response);
            if (parsedRes.message) {
              displayMessage = parsedRes.message;
            }
          } catch (err) {
            // Ignored
          }
        }
        setErrorDetails({
          message: displayMessage,
          detail: detail,
        });
        setShowErrorModal(true);
        setMessage("");
      }
    } catch (error: any) {
      console.error("API submission error:", error);
      setErrorDetails({
        message: error.message || "Something went wrong. Please check your connection and try again.",
      });
      setShowErrorModal(true);
      setMessage("");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="min-h-screen bg-[#ffffff] relative">
      <Navbar />

      <main className="pt-[140px] pb-20">
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
                  <input
                    id="company"
                    name="company"
                    type="text"
                    placeholder="Company name"
                    //required
                    className={formErrors.company_name ? "has-error" : ""}
                    onChange={() => {
                      if (formErrors.company_name) {
                        setFormErrors((prev) => ({ ...prev, company_name: undefined }));
                      }
                    }}
                  />
                  {formErrors.company_name && (
                    <span className="error-message">⚠️ {formErrors.company_name}</span>
                  )}
                </div>

                <div className="ai-hire-now-field">
                  <label htmlFor="contactName">Your Name</label>
                  <input
                    id="contactName"
                    name="contactName"
                    type="text"
                    placeholder="Your full name"
                    //required
                    className={formErrors.full_name ? "has-error" : ""}
                    onChange={() => {
                      if (formErrors.full_name) {
                        setFormErrors((prev) => ({ ...prev, full_name: undefined }));
                      }
                    }}
                  />
                  {formErrors.full_name && (
                    <span className="error-message">⚠️ {formErrors.full_name}</span>
                  )}
                </div>

                <div className="ai-hire-now-field">
                  <label htmlFor="phone">Phone Number</label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="Your phone number"
                    //required
                    className={formErrors.phone_number ? "has-error" : ""}
                    onChange={() => {
                      if (formErrors.phone_number) {
                        setFormErrors((prev) => ({ ...prev, phone_number: undefined }));
                      }
                    }}
                  />
                  {formErrors.phone_number && (
                    <span className="error-message">⚠️ {formErrors.phone_number}</span>
                  )}
                </div>

                <div className="ai-hire-now-field">
                  <label htmlFor="jobTitles">Job Title(s)</label>
                  <input
                    id="jobTitles"
                    name="jobTitles"
                    type="text"
                    placeholder="e.g. Labourers, Forklift Drivers, Supervisor"
                    //required
                    className={formErrors.job_title ? "has-error" : ""}
                    onChange={() => {
                      if (formErrors.job_title) {
                        setFormErrors((prev) => ({ ...prev, job_title: undefined }));
                      }
                    }}
                  />
                  {formErrors.job_title && (
                    <span className="error-message">⚠️ {formErrors.job_title}</span>
                  )}
                </div>

                <div className="ai-hire-now-field">
                  <label htmlFor="workers">Number of Workers</label>
                  <input
                    id="workers"
                    name="workers"
                    type="number"
                    min="1"
                    placeholder="e.g. 5"
                    //required
                    className={formErrors.num_of_workers ? "has-error" : ""}
                    onChange={() => {
                      if (formErrors.num_of_workers) {
                        setFormErrors((prev) => ({ ...prev, num_of_workers: undefined }));
                      }
                    }}
                  />
                  {formErrors.num_of_workers && (
                    <span className="error-message">⚠️ {formErrors.num_of_workers}</span>
                  )}
                </div>

                <div className="ai-hire-now-field">
                  <label htmlFor="startDate">Start Date</label>
                  <input
                    id="startDate"
                    name="startDate"
                    type="date"
                    //required
                    className={formErrors.start_date ? "has-error" : ""}
                    onChange={() => {
                      if (formErrors.start_date) {
                        setFormErrors((prev) => ({ ...prev, start_date: undefined }));
                      }
                    }}
                  />
                  {formErrors.start_date && (
                    <span className="error-message">⚠️ {formErrors.start_date}</span>
                  )}
                </div>
              </div>

              <div className="ai-hire-now-grid ai-hire-now-grid-bottom">
                <div className="ai-hire-now-field ai-hire-now-field-wide">
                  <label htmlFor="location">Location</label>
                  <textarea
                    id="location"
                    name="location"
                    rows={4}
                    placeholder="Main site, postcode, or first location"
                    //required
                    className={formErrors.location ? "has-error" : ""}
                    onChange={() => {
                      if (formErrors.location) {
                        setFormErrors((prev) => ({ ...prev, location: undefined }));
                      }
                    }}
                  ></textarea>
                  {formErrors.location && (
                    <span className="error-message">⚠️ {formErrors.location}</span>
                  )}
                </div>

                <div className="ai-hire-now-field ai-hire-now-field-wide">
                  <label htmlFor="notes">Site &amp; role details (if multiple)</label>
                  <textarea
                    id="notes"
                    name="notes"
                    rows={4}
                    placeholder="Example: 6 labourers - Glasgow site, 4 drivers - Edinburgh depot, 2 supervisors - Falkirk site"
                    className={formErrors.siteAndroles ? "has-error" : ""}
                    onChange={() => {
                      if (formErrors.siteAndroles) {
                        setFormErrors((prev) => ({ ...prev, siteAndroles: undefined }));
                      }
                    }}
                  ></textarea>
                  {formErrors.siteAndroles && (
                    <span className="error-message">⚠️ {formErrors.siteAndroles}</span>
                  )}
                </div>
              </div>

              <div className="ai-hire-now-actions">
                <button type="submit" className="btn-ai-cta" disabled={isSubmitting}>
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

      {/* Success Modal */}
      {showSuccessModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md animate-fade-in">
          <div className="bg-white rounded-2xl p-8 max-w-md w-full shadow-2xl border border-gray-100 transform scale-up relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-emerald-500 to-teal-500" />
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-emerald-500/10 text-emerald-600 rounded-full flex items-center justify-center mb-6">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Request Confirmed!</h3>
              <div className="text-gray-600 text-sm mb-6 leading-relaxed">
                Your request has been successfully processed.
                {successInfo?.jobId && (
                  <span className="block mt-2 font-semibold text-gray-800">
                    Job ID: #{successInfo.jobId} {successInfo.companyName && `(${successInfo.companyName})`}
                  </span>
                )}
              </div>
              <button
                onClick={() => {
                  setShowSuccessModal(false);
                  router.push("/");
                }}
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 hover:shadow-lg hover:shadow-emerald-500/20 text-white font-bold text-sm transition-all duration-300 flex items-center justify-center cursor-pointer font-heading"
              >
                OK
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Error Modal */}
      {showErrorModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md animate-fade-in">
          <div className="bg-white rounded-2xl p-8 max-w-md w-full shadow-2xl border border-gray-100 transform scale-up relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-2 bg-red-500" />
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-red-500/10 text-red-600 rounded-full flex items-center justify-center mb-6">
                <AlertCircle className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Submission Failed</h3>
              <div className="text-gray-600 text-sm mb-6 leading-relaxed max-h-[180px] overflow-y-auto w-full pr-1">
                <p className="font-semibold text-red-600 mb-1 text-center">{errorDetails?.message}</p>
                {errorDetails?.detail && (
                  <p className="text-xs text-gray-400 font-mono bg-gray-50 p-2 rounded mt-2 text-left whitespace-pre-wrap break-all">
                    {errorDetails.detail}
                  </p>
                )}
              </div>
              <button
                onClick={() => setShowErrorModal(false)}
                className="w-full py-3.5 rounded-xl bg-gray-900 hover:bg-black text-white font-bold text-sm transition-all duration-300 flex items-center justify-center cursor-pointer font-heading"
              >
                OK
              </button>
            </div>
          </div>
        </div>
      )}

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

        .ai-hire-now-field input.has-error,
        .ai-hire-now-field textarea.has-error {
          border-color: #ef4444 !important;
          box-shadow: 0 0 0 4px rgba(239, 68, 68, 0.15) !important;
        }

        .error-message {
          color: #ef4444;
          font-size: 0.85rem;
          margin-top: 6px;
          font-weight: 500;
          display: flex;
          align-items: center;
          gap: 4px;
          animation: fadeIn 0.2s ease-out forwards;
        }

        .ai-hire-now-actions {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding-top: 10px;
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

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-4px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes scaleUp {
          from { transform: scale(0.95); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }

        .animate-fade-in {
          animation: fadeIn 0.25s ease-out forwards;
        }

        .scale-up {
          animation: scaleUp 0.3s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
        }

        @media (max-width: 991px) {
          .ai-hire-now-section {
            padding: 72px 18px;
          }

          .ai-hire-now-grid,
          .ai-hire-now-grid-bottom {
            grid-template-columns: 1fr;
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

          .ai-hire-now-trust {
            font-size: 0.95rem;
          }
        }
      `}</style>
    </div>
  );
}
