"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { CheckCircle2, AlertCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingElements from "@/components/FloatingElements";
import { api } from "@/services/api";

interface FormErrors {
  company_name?: string;
  full_name?: string;
  first_name?: string;
  last_name?: string;
  phone_number?: string;
  job_title?: string;
  num_of_workers?: string;
  start_date?: string;
  location?: string;
  siteAndroles?: string;
  workplace_type?: string;
  contract_type?: string;
  working_days?: string;
  salary_min?: string;
  salary_max?: string;
  salary_per?: string;
  qualifications?: string;
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
  workplace_type: "Work Place Type",
  contract_type: "Contract Type",
  working_days: "Working Days",
  salary_min: "Minimum Salary",
  salary_max: "Maximum Salary",
  salary_per: "Salary Per",
  qualifications: "Specific Qualification Required",
};

const mapFieldToInputId = (field: string): string | null => {
  const mapping: Record<string, string> = {
    company_name: "company",
    full_name: "firstName",
    first_name: "firstName",
    last_name: "lastName",
    phone_number: "phone",
    job_title: "jobTitles",
    num_of_workers: "workers",
    start_date: "startDate",
    location: "location",
    siteAndroles: "notes",
    workplace_type: "workplaceType",
    contract_type: "contractType",
    working_days: "workingDays",
    salary_min: "salaryMin",
    salary_max: "salaryMax",
    salary_per: "salaryPer",
    qualifications: "qualifications",
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

  const [selectedDays, setSelectedDays] = useState<string[]>([]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const [selectedWorkplace, setSelectedWorkplace] = useState("");
  const [isWorkplaceDropdownOpen, setIsWorkplaceDropdownOpen] = useState(false);

  const [selectedContract, setSelectedContract] = useState("");
  const [isContractDropdownOpen, setIsContractDropdownOpen] = useState(false);

  const [selectedSalaryPer, setSelectedSalaryPer] = useState("");
  const [isSalaryPerDropdownOpen, setIsSalaryPerDropdownOpen] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;

      const workingDaysContainer = document.getElementById("workingDaysContainer");
      if (workingDaysContainer && !workingDaysContainer.contains(target)) {
        setIsDropdownOpen(false);
      }

      const workplaceContainer = document.getElementById("workplaceTypeContainer");
      if (workplaceContainer && !workplaceContainer.contains(target)) {
        setIsWorkplaceDropdownOpen(false);
      }

      const contractContainer = document.getElementById("contractTypeContainer");
      if (contractContainer && !contractContainer.contains(target)) {
        setIsContractDropdownOpen(false);
      }

      const salaryPerContainer = document.getElementById("salaryPerContainer");
      if (salaryPerContainer && !salaryPerContainer.contains(target)) {
        setIsSalaryPerDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleDay = (day: string) => {
    setSelectedDays((prev) =>
      prev.includes(day) ? prev.filter((d) => d !== day) : [...prev, day]
    );
    if (formErrors.working_days) {
      setFormErrors((prev) => ({ ...prev, working_days: undefined }));
    }
  };

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setMessage("");
    setIsSubmitting(true);
    setFormErrors({});

    const formData = new FormData(e.currentTarget);
    const salaryMinStr = formData.get("salaryMin") as string;
    const salaryMaxStr = formData.get("salaryMax") as string;

    // Client-side Frontend Validation
    const errors: FormErrors = {};
    const company = (formData.get("company") as string || "").trim();
    const firstName = (formData.get("firstName") as string || "").trim();
    const lastName = (formData.get("lastName") as string || "").trim();
    const phone = (formData.get("phone") as string || "").trim();
    const jobTitles = (formData.get("jobTitles") as string || "").trim();
    const workersStr = formData.get("workers") as string;
    const startDate = formData.get("startDate") as string;
    const location = (formData.get("location") as string || "").trim();
    const notes = (formData.get("notes") as string || "").trim();
    const qualifications = (formData.get("qualifications") as string || "").trim();

    if (!company) errors.company_name = "Missing required field: Company Name";
    if (!firstName) errors.first_name = "Missing required field: First Name";
    if (!lastName) errors.last_name = "Missing required field: Last Name";
    if (!phone) errors.phone_number = "Missing required field: Phone Number";
    if (!jobTitles) errors.job_title = "Missing required field: Job Title";
    // if (!workersStr || parseInt(workersStr) <= 0) errors.num_of_workers = "Missing required field: Number of Workers";
    if (!startDate) errors.start_date = "Missing required field: Start Date";
    if (!location) errors.location = "Missing required field: Location";
    if (!notes) errors.siteAndroles = "Missing required field: Site & role details";
    if (!selectedWorkplace) errors.workplace_type = "Missing required field: Work Place Type";
    if (!selectedContract) errors.contract_type = "Missing required field: Contract Type";
    if (selectedDays.length === 0) errors.working_days = "Missing required field: Working Days";
    if (!salaryMinStr) errors.salary_min = "Missing required field: Minimum Salary";
    if (!salaryMaxStr) errors.salary_max = "Missing required field: Maximum Salary";
    if (!selectedSalaryPer) errors.salary_per = "Missing required field: Salary Per";
    if (!qualifications) errors.qualifications = "Missing required field: Specific Qualification Required";

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      setIsSubmitting(false);

      // Auto scroll/focus first invalid field
      const firstErrorKey = Object.keys(errors)[0];
      const elementId = mapFieldToInputId(firstErrorKey);
      if (elementId) {
        const el = document.getElementById(elementId);
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "center" });
          el.focus();
        }
      }
      return;
    }

    const payload = {
      company_name: formData.get("company") as string,
      full_name: `${formData.get("firstName") || ""} ${formData.get("lastName") || ""}`.trim(),
      phone_number: formData.get("phone") as string,
      job_title: formData.get("jobTitles") as string,
      num_of_workers: parseInt(formData.get("workers") as string) || 0,
      start_date: formData.get("startDate") as string,
      location: formData.get("location") as string,
      siteAndroles: formData.get("notes") as string,
      workplace_type: formData.get("workplaceType") as string,
      contract_type: formData.get("contractType") as string,
      working_days: selectedDays,
      salary_min: salaryMinStr ? parseFloat(salaryMinStr) : 0,
      salary_max: salaryMaxStr ? parseFloat(salaryMaxStr) : 0,
      salary_per: formData.get("salaryPer") as string,
      qualifications: formData.get("qualifications") as string,
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
        setSelectedDays([]);
        setIsDropdownOpen(false);
        setSelectedWorkplace("");
        setSelectedContract("");
        setSelectedSalaryPer("");
        setIsWorkplaceDropdownOpen(false);
        setIsContractDropdownOpen(false);
        setIsSalaryPerDropdownOpen(false);
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

      <main className="pt-[2px] pb-20">
        <section className="ai-hire-now-section">
          <div className="ai-hire-now-container">
            <div className="ai-hire-now-header">
              {/* <span className="ai-hire-now-eyebrow">EXISTING CLIENTS</span> */}
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
                  <label htmlFor="firstName">Your First Name</label>
                  <input
                    id="firstName"
                    name="firstName"
                    type="text"
                    placeholder="First name"
                    className={formErrors.first_name || formErrors.full_name ? "has-error" : ""}
                    onChange={() => {
                      if (formErrors.first_name || formErrors.full_name) {
                        setFormErrors((prev) => ({
                          ...prev,
                          first_name: undefined,
                          full_name: undefined,
                        }));
                      }
                    }}
                  />
                  {formErrors.first_name && (
                    <span className="error-message">⚠️ {formErrors.first_name}</span>
                  )}
                </div>

                <div className="ai-hire-now-field">
                  <label htmlFor="lastName">Your Last Name</label>
                  <input
                    id="lastName"
                    name="lastName"
                    type="text"
                    placeholder="Last name"
                    className={formErrors.last_name || formErrors.full_name ? "has-error" : ""}
                    onChange={() => {
                      if (formErrors.last_name || formErrors.full_name) {
                        setFormErrors((prev) => ({
                          ...prev,
                          last_name: undefined,
                          full_name: undefined,
                        }));
                      }
                    }}
                  />
                  {formErrors.last_name && (
                    <span className="error-message">⚠️ {formErrors.last_name}</span>
                  )}
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

              <div className="ai-hire-now-grid ai-hire-now-grid-two-col">
                <div className="ai-hire-now-field" id="workplaceTypeContainer" style={{ position: 'relative' }}>
                  <label htmlFor="workplaceType">Work Place Type</label>
                  <div className="relative">
                    <button
                      id="workplaceType"
                      type="button"
                      className={`multiselect-trigger ${formErrors.workplace_type ? "has-error" : ""}`}
                      onClick={() => setIsWorkplaceDropdownOpen(!isWorkplaceDropdownOpen)}
                      aria-haspopup="listbox"
                      aria-expanded={isWorkplaceDropdownOpen}
                    >
                      {selectedWorkplace === "" ? (
                        <span className="placeholder-text">Select Work Place Type</span>
                      ) : (
                        <span className="selected-value">{selectedWorkplace}</span>
                      )}
                      <span className="dropdown-arrow"></span>
                    </button>

                    {isWorkplaceDropdownOpen && (
                      <div className="multiselect-dropdown" role="listbox">
                        {[
                          { label: "Select Work Place Type", value: "" },
                          { label: "On-Site", value: "On-Site" },
                          { label: "Hybrid", value: "Hybrid" },
                          { label: "Fully Remote", value: "Fully Remote" }
                        ].map((opt) => {
                          const isSelected = selectedWorkplace === opt.value;
                          return (
                            <div
                              key={opt.value}
                              className={`multiselect-option ${isSelected ? "selected" : ""}`}
                              role="option"
                              aria-selected={isSelected}
                              onClick={() => {
                                setSelectedWorkplace(opt.value);
                                setIsWorkplaceDropdownOpen(false);
                                if (formErrors.workplace_type) {
                                  setFormErrors((prev) => ({ ...prev, workplace_type: undefined }));
                                }
                              }}
                            >
                              <span className="option-text">{opt.label}</span>
                            </div>
                          );
                        })}
                      </div>
                    )}
                  </div>
                  <input type="hidden" name="workplaceType" value={selectedWorkplace} />
                  {formErrors.workplace_type && (
                    <span className="error-message">⚠️ {formErrors.workplace_type}</span>
                  )}
                </div>

                <div className="ai-hire-now-field" id="contractTypeContainer" style={{ position: 'relative' }}>
                  <label htmlFor="contractType">Contract Type</label>
                  <div className="relative">
                    <button
                      id="contractType"
                      type="button"
                      className={`multiselect-trigger ${formErrors.contract_type ? "has-error" : ""}`}
                      onClick={() => setIsContractDropdownOpen(!isContractDropdownOpen)}
                      aria-haspopup="listbox"
                      aria-expanded={isContractDropdownOpen}
                    >
                      {selectedContract === "" ? (
                        <span className="placeholder-text">Select Contract Type</span>
                      ) : (
                        <span className="selected-value">
                          {selectedContract === "418" ? "Temporary" : selectedContract === "417" ? "Contract" : "Permanent"}
                        </span>
                      )}
                      <span className="dropdown-arrow"></span>
                    </button>

                    {isContractDropdownOpen && (
                      <div className="multiselect-dropdown" role="listbox">
                        {[
                          { label: "Select Contract Type", value: "" },
                          { label: "Temporary", value: "418" },
                          { label: "Contract", value: "417" },
                          { label: "Permanent", value: "416" }
                        ].map((opt) => {
                          const isSelected = selectedContract === opt.value;
                          return (
                            <div
                              key={opt.value}
                              className={`multiselect-option ${isSelected ? "selected" : ""}`}
                              role="option"
                              aria-selected={isSelected}
                              onClick={() => {
                                setSelectedContract(opt.value);
                                setIsContractDropdownOpen(false);
                                if (formErrors.contract_type) {
                                  setFormErrors((prev) => ({ ...prev, contract_type: undefined }));
                                }
                              }}
                            >
                              <span className="option-text">{opt.label}</span>
                            </div>
                          );
                        })}
                      </div>
                    )}
                  </div>
                  <input type="hidden" name="contractType" value={selectedContract} />
                  {formErrors.contract_type && (
                    <span className="error-message">⚠️ {formErrors.contract_type}</span>
                  )}
                </div>
              </div>

              <div className="ai-hire-now-grid">
                <div className="ai-hire-now-field">
                  <label htmlFor="salaryMin">Minimum Salary</label>
                  <input
                    id="salaryMin"
                    name="salaryMin"
                    type="number"
                    step="0.01"
                    min="0"
                    placeholder="e.g. 12.50"
                    className={formErrors.salary_min ? "has-error" : ""}
                    onChange={() => {
                      if (formErrors.salary_min) {
                        setFormErrors((prev) => ({ ...prev, salary_min: undefined }));
                      }
                    }}
                  />
                  {formErrors.salary_min && (
                    <span className="error-message">⚠️ {formErrors.salary_min}</span>
                  )}
                </div>

                <div className="ai-hire-now-field">
                  <label htmlFor="salaryMax">Maximum Salary</label>
                  <input
                    id="salaryMax"
                    name="salaryMax"
                    type="number"
                    step="0.01"
                    min="0"
                    placeholder="e.g. 15.00"
                    className={formErrors.salary_max ? "has-error" : ""}
                    onChange={() => {
                      if (formErrors.salary_max) {
                        setFormErrors((prev) => ({ ...prev, salary_max: undefined }));
                      }
                    }}
                  />
                  {formErrors.salary_max && (
                    <span className="error-message">⚠️ {formErrors.salary_max}</span>
                  )}
                </div>

                <div className="ai-hire-now-field" id="salaryPerContainer" style={{ position: 'relative' }}>
                  <label htmlFor="salaryPer">Salary Per</label>
                  <div className="relative">
                    <button
                      id="salaryPer"
                      type="button"
                      className={`multiselect-trigger ${formErrors.salary_per ? "has-error" : ""}`}
                      onClick={() => setIsSalaryPerDropdownOpen(!isSalaryPerDropdownOpen)}
                      aria-haspopup="listbox"
                      aria-expanded={isSalaryPerDropdownOpen}
                    >
                      {selectedSalaryPer === "" ? (
                        <span className="placeholder-text">Select Period</span>
                      ) : (
                        <span className="selected-value">{selectedSalaryPer}</span>
                      )}
                      <span className="dropdown-arrow"></span>
                    </button>

                    {isSalaryPerDropdownOpen && (
                      <div className="multiselect-dropdown" role="listbox">
                        {[
                          { label: "Select Period", value: "" },
                          { label: "Hour", value: "Hour" },
                          { label: "Day", value: "Day" },
                          { label: "Week", value: "Week" },
                          { label: "Month", value: "Month" },
                          { label: "Year", value: "Year" }
                        ].map((opt) => {
                          const isSelected = selectedSalaryPer === opt.value;
                          return (
                            <div
                              key={opt.value}
                              className={`multiselect-option ${isSelected ? "selected" : ""}`}
                              role="option"
                              aria-selected={isSelected}
                              onClick={() => {
                                setSelectedSalaryPer(opt.value);
                                setIsSalaryPerDropdownOpen(false);
                                if (formErrors.salary_per) {
                                  setFormErrors((prev) => ({ ...prev, salary_per: undefined }));
                                }
                              }}
                            >
                              <span className="option-text">{opt.label}</span>
                            </div>
                          );
                        })}
                      </div>
                    )}
                  </div>
                  <input type="hidden" name="salaryPer" value={selectedSalaryPer} />
                  {formErrors.salary_per && (
                    <span className="error-message">⚠️ {formErrors.salary_per}</span>
                  )}
                </div>

                <div className="ai-hire-now-field ai-hire-now-field-span-3" id="workingDaysContainer" style={{ position: 'relative' }}>
                  <label id="workingDaysLabel">Working Days</label>
                  <div className="relative">
                    <button
                      type="button"
                      className={`multiselect-trigger ${formErrors.working_days ? "has-error" : ""}`}
                      onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                      aria-haspopup="listbox"
                      aria-expanded={isDropdownOpen}
                    >
                      {selectedDays.length === 0 ? (
                        <span className="placeholder-text">Select Working Days</span>
                      ) : (
                        <div className="selected-tags">
                          {selectedDays.map((day) => (
                            <span key={day} className="selected-tag">
                              {day}
                              <span
                                className="remove-tag"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  toggleDay(day);
                                }}
                                role="button"
                                aria-label={`Remove ${day}`}
                              >
                                &times;
                              </span>
                            </span>
                          ))}
                        </div>
                      )}
                      <span className="dropdown-arrow"></span>
                    </button>

                    {isDropdownOpen && (
                      <div className="multiselect-dropdown" role="listbox" aria-multiselectable="true">
                        {["Saturday", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday"].map((day) => {
                          const isSelected = selectedDays.includes(day);
                          return (
                            <div
                              key={day}
                              className={`multiselect-option ${isSelected ? "selected" : ""}`}
                              role="option"
                              aria-selected={isSelected}
                              onClick={() => toggleDay(day)}
                            >
                              <span className="option-text">{day}</span>
                            </div>
                          );
                        })}
                      </div>
                    )}
                  </div>
                  {formErrors.working_days && (
                    <span className="error-message" style={{ marginTop: '8px' }}>⚠️ {formErrors.working_days}</span>
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

              <div className="ai-hire-now-field ai-hire-now-field-full-width" style={{ marginTop: '28px', marginBottom: '28px' }}>
                <label htmlFor="qualifications">Specific Qualification Required</label>
                <textarea
                  id="qualifications"
                  name="qualifications"
                  rows={4}
                  placeholder="e.g. CSCS card required, 2 years experience minimum"
                  className={formErrors.qualifications ? "has-error" : ""}
                  onChange={() => {
                    if (formErrors.qualifications) {
                      setFormErrors((prev) => ({ ...prev, qualifications: undefined }));
                    }
                  }}
                ></textarea>
                {formErrors.qualifications && (
                  <span className="error-message">⚠️ {formErrors.qualifications}</span>
                )}
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
          padding: 50px 20px;
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

        .ai-hire-now-grid-bottom,
        .ai-hire-now-grid-two-col {
          grid-template-columns: repeat(2, minmax(0, 1fr));
        }

        .ai-hire-now-field {
          display: flex;
          flex-direction: column;
        }

        .ai-hire-now-field-span-3 {
          grid-column: span 3;
        }

        .ai-hire-now-field-full-width {
          width: 100%;
        }

        .ai-hire-now-field select {
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
          background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3E%3Cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='m6 8 4 4 4-4'/%3E%3C/svg%3E");
          background-position: right 1rem center;
          background-repeat: no-repeat;
          background-size: 1.5em 1.5em;
          padding-right: 2.5rem;
          cursor: pointer;
        }

        .ai-hire-now-field select option {
          background-color: #ffffff !important;
          color: #111111 !important;
          font-family: inherit;
          font-size: 1rem;
        }

        .ai-hire-now-field select:focus {
          border-color: #111111;
          box-shadow: 0 0 0 4px rgba(17, 17, 17, 0.06);
        }

        .ai-hire-now-field select.has-error {
          border-color: #ef4444 !important;
          box-shadow: 0 0 0 4px rgba(239, 68, 68, 0.15) !important;
        }

        .multiselect-trigger {
          all: unset !important;
          width: 100% !important;
          height: auto !important;
          min-height: 58px !important;
          border: 1px solid #d9dde5 !important;
          border-radius: 14px !important;
          background: #ffffff !important;
          color: #111111 !important;
          font-family: inherit !important;
          font-size: 1rem !important;
          line-height: 1.5 !important;
          padding: 14px 18px !important;
          outline: none !important;
          transition: border-color 0.2s ease, box-shadow 0.2s ease, transform 0.2s ease !important;
          box-sizing: border-box !important;
          display: flex !important;
          align-items: center !important;
          justify-content: space-between !important;
          text-align: left !important;
          cursor: pointer !important;
          box-shadow: none !important;
          text-transform: none !important;
          letter-spacing: normal !important;
          filter: none !important;
        }

        .multiselect-trigger::before,
        .multiselect-trigger::after {
          display: none !important;
          content: none !important;
        }

        .multiselect-trigger:hover {
          transform: none !important;
          filter: none !important;
          box-shadow: none !important;
          background: #ffffff !important;
          border-color: #d9dde5 !important;
        }

        .multiselect-trigger:active {
          transform: none !important;
          filter: none !important;
          box-shadow: none !important;
          background: #ffffff !important;
        }

        .multiselect-trigger:focus {
          border-color: #111111 !important;
          box-shadow: 0 0 0 4px rgba(17, 17, 17, 0.06) !important;
        }

        .multiselect-trigger.has-error {
          border-color: #ef4444 !important;
          box-shadow: 0 0 0 4px rgba(239, 68, 68, 0.15) !important;
        }

        .placeholder-text {
          color: #8a8f98;
        }

        .selected-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
        }

        .selected-tag {
          display: inline-flex;
          align-items: center;
          background: #f3f4f6;
          color: #1f2937;
          font-size: 0.875rem;
          font-weight: 500;
          padding: 4px 10px;
          border-radius: 8px;
          border: 1px solid #e5e7eb;
          transition: all 0.15s ease;
        }

        .selected-tag:hover {
          background: #e5e7eb;
        }

        .remove-tag {
          margin-left: 6px;
          color: #9ca3af;
          font-weight: bold;
          font-size: 1.1rem;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          line-height: 1;
        }

        .remove-tag:hover {
          color: #ef4444;
        }

        .dropdown-arrow {
          width: 0;
          height: 0;
          border-left: 5px solid transparent;
          border-right: 5px solid transparent;
          border-top: 5px solid #6b7280;
          margin-left: 10px;
          transition: transform 0.2s ease;
        }

        .multiselect-dropdown {
          position: absolute;
          top: 100%;
          left: 0;
          right: 0;
          margin-top: 6px;
          background: #ffffff;
          border: 1px solid #e5e7eb;
          border-radius: 14px;
          box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1);
          z-index: 50;
          max-height: 260px;
          overflow-y: auto;
          padding: 8px;
          box-sizing: border-box;
          animation: slideDown 0.2s ease-out;
        }

        .multiselect-option {
          display: flex;
          align-items: center;
          padding: 10px 14px;
          border-radius: 8px;
          cursor: pointer;
          transition: background 0.15s ease, color 0.15s ease;
          color: #111111;
          font-weight: 500;
          background: #ffffff;
        }

        .multiselect-option:hover {
          background: #f3f4f6;
          color: #111111;
        }

        .multiselect-option.selected {
          background: #e5e7eb;
          color: #111111;
          font-weight: 600;
        }

        .option-text {
          font-size: 0.95rem;
          user-select: none;
        }

        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-8px); }
          to { opacity: 1; transform: translateY(0); }
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
          .ai-hire-now-grid-bottom,
          .ai-hire-now-grid-two-col {
            grid-template-columns: 1fr;
          }

          .ai-hire-now-field-span-3 {
            grid-column: span 1;
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
          .ai-hire-now-field select,
          .multiselect-trigger,
          .ai-hire-now-field textarea {
            padding: 16px 16px !important;
            font-size: 16px !important;
          }

          .ai-hire-now-field select {
            padding-right: 2.5rem !important;
          }

          .multiselect-trigger {
            min-height: 52px !important;
          }

          .ai-hire-now-trust {
            font-size: 0.95rem;
          }
        }
      `}</style>
    </div>
  );
}
