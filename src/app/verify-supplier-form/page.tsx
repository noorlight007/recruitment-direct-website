"use client";

import { useState, useEffect, useRef } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingElements from "@/components/FloatingElements";
import countries from "./countries.json";

export default function SupplierVerificationFormPage() {
  const [formMessage, setFormMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const dropdownRef = useRef<HTMLDivElement>(null);

  const [selectedCis, setSelectedCis] = useState("");
  const [isCisDropdownOpen, setIsCisDropdownOpen] = useState(false);
  const cisDropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
      if (cisDropdownRef.current && !cisDropdownRef.current.contains(event.target as Node)) {
        setIsCisDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const filteredCountries = countries.filter((c) =>
    c.country.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormMessage("");

    const formData = new FormData(e.currentTarget);
    const rawData = Object.fromEntries(formData.entries());
    const supplierData = {
      supplier_company_name: rawData.supplier_company_name,
      company_registration_number: rawData.company_registration_number,
      vat_number: rawData.vat_number,
      address_line_1: rawData.address_line_1,
      address_line_2: rawData.address_line_2,
      postal_code: rawData.postal_code,
      country: rawData.country,
      contact_name: rawData.contact_name,
      job_title: rawData.job_title,
      phone: rawData.phone,
      email: rawData.email,
      utr_number: rawData.utr_number,
      cis_registered: rawData.cis_registered,
      bank_name: rawData.bank_name,
      account_name: rawData.account_name,
      sort_code: rawData.sort_code,
      account_number: rawData.account_number,
    };

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
      // setSelectedCountry("United Kingdom");
      setSelectedCis("");
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

      <main className="pt-[10px] pb-8">
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
                  name="company_registration_number"
                  placeholder="Company Registration Number *"
                  required
                />
                <input type="text" name="vat_number" placeholder="VAT Number (Optional)" />
                <input
                  type="text"
                  name="address_line_1"
                  placeholder="Address Line 1 *"
                  required
                />
                <input
                  type="text"
                  name="address_line_2"
                  placeholder="Address Line 2 (Optional)"
                />
                <input
                  type="text"
                  name="postal_code"
                  placeholder="Postal Code *"
                  required
                />

                {/* Country Searchable Dropdown */}
                <div className="custom-select-container" ref={dropdownRef}>
                  <input
                    type="text"
                    name="country"
                    value={selectedCountry}
                    required
                    style={{ position: "absolute", width: 0, height: 0, opacity: 0, pointerEvents: "none" }}
                    onChange={() => {}}
                  />
                  <div
                    className="custom-select-trigger"
                    onClick={() => {
                      setIsDropdownOpen(!isDropdownOpen);
                      setSearchTerm("");
                    }}
                  >
                    <span className={selectedCountry ? "selected-text" : "placeholder-text"}>
                      {selectedCountry ? selectedCountry : "Select Country *"}
                    </span>
                    <div className="select-action-container">
                      {selectedCountry && (
                        <span
                          className="select-remove-icon"
                          onClick={(e) => {
                            e.stopPropagation();
                            setSelectedCountry("");
                            setIsDropdownOpen(false);
                          }}
                        >
                          ✕
                        </span>
                      )}
                      <span className="arrow-icon">▼</span>
                    </div>
                  </div>

                  {isDropdownOpen && (
                    <div className="custom-select-menu">
                      <div className="country-search-container">
                        <span className="search-icon">🔍</span>
                        <input
                          type="text"
                          className="country-search-input"
                          placeholder="Search country..."
                          value={searchTerm}
                          onChange={(e) => setSearchTerm(e.target.value)}
                          autoFocus
                        />
                        {/* {searchTerm && (
                          <button
                            type="button"
                            className="search-clear-button"
                            onClick={() => setSearchTerm("")}
                          >
                            ✕
                          </button>
                        )} */}
                      </div>
                      <ul className="custom-options-list" style={{ maxHeight: "240px", overflowY: "auto" }}>
                        {filteredCountries.length > 0 ? (
                          filteredCountries.map((c) => (
                            <li
                              key={c.country_code}
                              className={`custom-option-item ${
                                selectedCountry === c.country ? "selected" : ""
                              }`}
                              onClick={() => {
                                setSelectedCountry(c.country);
                                setIsDropdownOpen(false);
                              }}
                            >
                              {c.country}
                            </li>
                          ))
                        ) : (
                          <li className="country-no-results">No countries found</li>
                        )}
                      </ul>
                    </div>
                  )}
                </div>
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
                <input type="text" name="job_title" placeholder="Job Title (Optional)" />
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
                {/* <input
                  type="text"
                  name="supplier_services"
                  placeholder="Services Supplied"
                /> */}
                <input type="text" name="utr_number" placeholder="UTR Number (Optional)" />
                <div className="custom-select-container" ref={cisDropdownRef}>
                  <input type="hidden" name="cis_registered" value={selectedCis} />
                  <div
                    className="custom-select-trigger"
                    onClick={() => setIsCisDropdownOpen(!isCisDropdownOpen)}
                  >
                    <span className={selectedCis ? "selected-text" : "placeholder-text"}>
                      {selectedCis ? selectedCis : "CIS Registered? (Optional)"}
                    </span>
                    <div className="select-action-container">
                      {selectedCis && (
                        <span
                          className="select-remove-icon"
                          onClick={(e) => {
                            e.stopPropagation();
                            setSelectedCis("");
                            setIsCisDropdownOpen(false);
                          }}
                        >
                          ✕
                        </span>
                      )}
                      <span className="arrow-icon">▼</span>
                    </div>
                  </div>

                  {isCisDropdownOpen && (
                    <div className="custom-select-menu">
                      <ul className="custom-options-list">
                        <li
                          className={`custom-option-item ${selectedCis === "Yes" ? "selected" : ""}`}
                          onClick={() => {
                            setSelectedCis("Yes");
                            setIsCisDropdownOpen(false);
                          }}
                        >
                          Yes
                        </li>
                        <li
                          className={`custom-option-item ${selectedCis === "No" ? "selected" : ""}`}
                          onClick={() => {
                            setSelectedCis("No");
                            setIsCisDropdownOpen(false);
                          }}
                        >
                          No
                        </li>
                        <li
                          className={`custom-option-item ${selectedCis === "Not Applicable" ? "selected" : ""}`}
                          onClick={() => {
                            setSelectedCis("Not Applicable");
                            setIsCisDropdownOpen(false);
                          }}
                        >
                          Not Applicable
                        </li>
                      </ul>
                    </div>
                  )}
                </div>
              </div>

              {/* INSURANCE & COMPLIANCE */}
              {/* <div className="form-card">
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
              </div> */}

              {/* BANK DETAILS */}
              <div className="form-card">
                <h2>Bank Details</h2>
                <input type="text" name="bank_name" placeholder="Bank Name (Optional)" />
                <input
                  type="text"
                  name="account_name"
                  placeholder="Account Name (Optional)"
                />
                <input type="text" name="sort_code" placeholder="Sort Code (Optional)" />
                <input
                  type="text"
                  name="account_number"
                  placeholder="Account Number (Optional)"
                />
              </div>

              {/* DECLARATION */}
              <div className="form-card">
                <h2>Declaration</h2>
                <label className="checkbox-label">
                  <input type="checkbox" name="confirm_accuracy" required />
                  <span>I confirm the information provided is accurate.</span>
                </label>
                {/* <input
                  type="text"
                  name="digital_signature"
                  placeholder="Digital Signature *"
                  required
                /> */}
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

        /* COUNTRY DROPDOWN (Reused custom-select classes) */

        .country-search-container {
          position: relative;
          display: flex;
          align-items: center;
          background: #f8fafc;
          border-bottom: 1px solid #e2e8f0;
          padding: 4px 16px;
          transition: background-color 0.2s ease, border-color 0.2s ease;
        }

        .country-search-container:focus-within {
          background: #ffffff;
          border-color: #1f6fff;
        }

        .country-search-container .search-icon {
          font-size: 14px;
          color: #94a3b8;
          margin-right: 8px;
          pointer-events: none;
        }

        .country-search-input {
          flex: 1;
          padding: 10px 0;
          border: none !important;
          background: transparent !important;
          width: 100%;
          box-sizing: border-box;
          font-size: 15px;
          outline: none;
          color: #1e293b;
          border-radius: 0 !important;
          margin-bottom: 0 !important;
        }

        .country-search-input::placeholder {
          color: #94a3b8;
          transition: color 0.2s ease;
        }

        .country-search-input:focus::placeholder {
          color: #cbd5e1;
        }

        .search-clear-button {
          background: none;
          border: none;
          color: #94a3b8;
          font-size: 12px;
          cursor: pointer;
          padding: 4px;
          margin-left: 8px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 2px;
          transition: background-color 0.2s ease, color 0.2s ease;
        }

        .search-clear-button:hover {
          background-color: #f1f5f9;
          color: #ef4444;
        }



        .country-no-results {
          padding: 16px;
          color: #777777;
          font-size: 15px;
          text-align: center;
        }

        /* CUSTOM SELECT (e.g. CIS) */
        .custom-select-container {
          position: relative;
          width: 100%;
        }

        .custom-select-trigger {
          width: 100%;
          padding: 16px;
          margin-bottom: 15px;
          border-radius: 12px;
          border: 1px solid #d9e2f2;
          font-size: 16px;
          background: #ffffff;
          box-sizing: border-box;
          text-align: left;
          display: flex;
          justify-content: space-between;
          align-items: center;
          cursor: pointer;
          font-family: Arial, sans-serif;
          transition: border-color 0.2s ease;
        }

        .custom-select-trigger:focus {
          outline: none;
          border-color: #1f6fff;
        }

        .custom-select-trigger .placeholder-text {
          color: #777777;
        }

        .custom-select-trigger .selected-text {
          color: #111111;
        }

        .custom-select-trigger .arrow-icon {
          font-size: 10px;
          color: #777777;
        }

        .select-action-container {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .select-remove-icon {
          color: #94a3b8;
          font-size: 14px;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 20px;
          height: 20px;
          border-radius: 50%;
          transition: background-color 0.2s ease, color 0.2s ease;
        }

        .select-remove-icon:hover {
          background-color: #f1f5f9;
          color: #ef4444;
        }

        .custom-select-menu {
          position: absolute;
          top: 100%;
          left: 0;
          right: 0;
          background: #ffffff;
          border: 1px solid #d9e2f2;
          border-radius: 12px;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.08);
          z-index: 50;
          overflow: hidden;
          margin-top: 4px;
        }

        .custom-options-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .custom-option-item {
          padding: 14px 16px;
          cursor: pointer;
          font-size: 16px;
          color: #111111;
          transition: background 0.2s ease, color 0.2s ease;
        }

        .custom-option-item:hover {
          background: #f0f5ff;
          color: #1f6fff;
        }

        .custom-option-item.selected {
          background: #e1ecff;
          color: #1f6fff;
          font-weight: 600;
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
