"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { CheckCircle2, AlertCircle, User, Briefcase, MapPin, Sparkles, ChevronDown, Calendar } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingElements from "@/components/FloatingElements";
import { api } from "@/services/api";

interface FormErrors {
  company_name?: string;
  company_website?: string;
  email?: string;
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
  company_website: "Company Website",
  email: "Email Address",
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
    company_website: "companyWebsite",
    email: "email",
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
  const [clientType, setClientType] = useState("existing");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      const type = params.get("type");
      if (type === "quote") {
        setClientType("new");
      } else if (type === "order") {
        setClientType("existing");
      }
    }
  }, []);

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
    const companyWebsite = (formData.get("companyWebsite") as string || "").trim();
    const firstName = (formData.get("firstName") as string || "").trim();
    const lastName = (formData.get("lastName") as string || "").trim();
    const email = (formData.get("email") as string || "").trim();
    const phone = (formData.get("phone") as string || "").trim();
    const jobTitles = (formData.get("jobTitles") as string || "").trim();
    const workersStr = formData.get("workers") as string;
    const startDate = formData.get("startDate") as string;
    const location = (formData.get("location") as string || "").trim();
    const notes = (formData.get("notes") as string || "").trim();
    const qualifications = (formData.get("qualifications") as string || "").trim();

    const isValidUrl = (urlStr: string) => {
      if (!urlStr) return true;
      const formattedUrl = /^https?:\/\//i.test(urlStr) ? urlStr : `https://${urlStr}`;
      try {
        const parsed = new URL(formattedUrl);
        return Boolean(parsed.hostname && parsed.hostname.includes(".") && parsed.hostname.split(".").every((part) => part.length > 0));
      } catch (e) {
        return false;
      }
    };

    if (!company) errors.company_name = "Missing required field: Company Name";
    if (companyWebsite && !isValidUrl(companyWebsite)) {
      errors.company_website = "Please enter a valid website URL (e.g. https://example.com or example.com)";
    }
    if (!firstName) errors.first_name = "Missing required field: First Name";
    if (!lastName) errors.last_name = "Missing required field: Last Name";
    if (!email) errors.email = "Missing required field: Email Address";
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
      company_website: (formData.get("companyWebsite") as string || "").trim(),
      email: formData.get("email") as string,
      full_name: `${formData.get("firstName") || ""} ${formData.get("lastName") || ""}`.trim(),
      phone_number: formData.get("phone") as string,
      job_title: formData.get("jobTitles") as string,
      num_of_workers: parseInt(formData.get("workers") as string) || 0,
      start_date: formData.get("startDate") as string,
      location: formData.get("location") as string,
      siteAndroles: `[Client Status: ${clientType === "existing" ? "Existing Client – Order Now" : "New Client – Quote Request"}]\n\n${formData.get("notes") as string}`,
      workplace_type: formData.get("workplaceType") as string,
      contract_type: formData.get("contractType") as string,
      working_days: selectedDays,
      salary_min: salaryMinStr ? parseFloat(salaryMinStr) : 0,
      salary_max: salaryMaxStr ? parseFloat(salaryMaxStr) : 0,
      salary_per: formData.get("salaryPer") as string,
      qualifications: formData.get("qualifications") as string,
      client_type: clientType,
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
      } else if (
        result.status === 502 ||
        result.statusCode === 502 ||
        result.error === 502 ||
        result.error === "502"
      ) {
        setErrorDetails({
          message: "A contact with this email address already exists under another company.",
        });
        setShowErrorModal(true);
        setMessage("");
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
      const is502 = error.status === 502 || 
                    (error.message && (error.message.includes("502") || error.message.toLowerCase().includes("bad gateway")));
      
      setErrorDetails({
        message: is502 
          ? "A contact with this email address already exists under another company." 
          : (error.message || "Something went wrong. Please check your connection and try again."),
      });
      setShowErrorModal(true);
      setMessage("");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="min-h-screen bg-[#f8fafc] relative">
      <Navbar />

      <main className="pt-2 pb-2 px-4 sm:px-6">
        <div className="ai-hire-now-header text-center max-w-2xl mx-auto mb-0">
          <h1 className="ai-hire-now-title text-4xl sm:text-5xl font-bold tracking-tight text-[#091e42] mb-1">
            AI Hire Now
          </h1>
          <p className="ai-hire-now-lead text-lg text-[#42526E] font-medium leading-relaxed">
            Fast staff ordering for existing clients and quote requests for new clients.
          </p>
        </div>

        <div className="ai-hire-now-card bg-transparent border border-[#e2e8f0] rounded-2xl shadow-sm max-w-[960px] mx-auto p-6 md:p-6">
          <form id="aiHireNowForm" className="ai-hire-now-form" onSubmit={handleSubmit} noValidate>

            {/* Client Status Section */}
            <div className="form-section mb-6">
              <div className="form-section-header flex items-center border-b border-[#f1f5f9] pb-3 mb-6">
                <Sparkles className="w-5 h-5 text-[#001737] mr-2 flex-shrink-0" />
                <h2 className="text-[17px] font-bold text-[#001737] tracking-wide uppercase">
                  Client Status & Request Type
                </h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <label className="flex items-center gap-3 p-4 border border-gray-200 rounded-xl cursor-pointer hover:bg-slate-50 transition-colors">
                  <input
                    type="radio"
                    name="clientType"
                    value="existing"
                    checked={clientType === "existing"}
                    onChange={() => setClientType("existing")}
                    className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                  />
                  <div>
                    <span className="block font-bold text-[#001737]">Existing Client – Order Now</span>
                    <span className="block text-xs text-gray-500">Order staff directly under existing agreements</span>
                  </div>
                </label>
                <label className="flex items-center gap-3 p-4 border border-gray-200 rounded-xl cursor-pointer hover:bg-slate-50 transition-colors">
                  <input
                    type="radio"
                    name="clientType"
                    value="new"
                    checked={clientType === "new"}
                    onChange={() => setClientType("new")}
                    className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                  />
                  <div>
                    <span className="block font-bold text-[#001737]">New Client – Quote Request</span>
                    <span className="block text-xs text-gray-500">Submit staffing requirements to request pricing and setup</span>
                  </div>
                </label>
              </div>
            </div>

            {/* Section 1: Contact Details */}
            <div className="form-section mb-6">
              <div className="form-section-header flex items-center border-b border-[#f1f5f9] pb-3 mb-6">
                <User className="w-5 h-5 text-[#001737] mr-2 flex-shrink-0" />
                <h2 className="text-[17px] font-bold text-[#001737] tracking-wide uppercase">
                  Contact Details
                </h2>
              </div>

              <div className="grid-3-col">
                <div className="ai-hire-now-field">
                  <label htmlFor="company">Company</label>
                  <input
                    id="company"
                    name="company"
                    type="text"
                    placeholder="Company name"
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
                  <label htmlFor="firstName">First Name</label>
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
                  <label htmlFor="lastName">Last Name</label>
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
              </div>

              <div className="grid-3-col mt-5">
                <div className="ai-hire-now-field">
                  <label htmlFor="email">Email</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="you@example.com"
                    className={formErrors.email ? "has-error" : ""}
                    onChange={() => {
                      if (formErrors.email) {
                        setFormErrors((prev) => ({ ...prev, email: undefined }));
                      }
                    }}
                  />
                  {formErrors.email && (
                    <span className="error-message">⚠️ {formErrors.email}</span>
                  )}
                </div>

                <div className="ai-hire-now-field">
                  <label htmlFor="phone">Phone Number</label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="Your phone number"
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
              </div>

              <div className="grid-3-col mt-5">
                <div className="ai-hire-now-field">
                  <label htmlFor="workers">Number of Workers</label>
                  <input
                    id="workers"
                    name="workers"
                    type="number"
                    min="1"
                    placeholder="e.g. 5"
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
                    placeholder="mm/dd/yyyy"
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

                <div className="ai-hire-now-field">
                  <label htmlFor="companyWebsite">Company Website</label>
                  <input
                    id="companyWebsite"
                    name="companyWebsite"
                    type="url"
                    placeholder="https://example.com"
                    className={formErrors.company_website ? "has-error" : ""}
                    onChange={() => {
                      if (formErrors.company_website) {
                        setFormErrors((prev) => ({ ...prev, company_website: undefined }));
                      }
                    }}
                  />
                  {formErrors.company_website && (
                    <span className="error-message">⚠️ {formErrors.company_website}</span>
                  )}
                </div>
              </div>
            </div>

            {/* Section 2: Role Details */}
            <div className="form-section mb-6">
              <div className="form-section-header flex items-center border-b border-[#f1f5f9] pb-3 mb-6">
                <Briefcase className="w-5 h-5 text-[#001737] mr-2 flex-shrink-0" />
                <h2 className="text-[17px] font-bold text-[#001737] tracking-wide uppercase">
                  Role Details
                </h2>
              </div>

              <div className="grid-3-col">
                <div className="ai-hire-now-field" id="workplaceTypeContainer" style={{ position: 'relative' }}>
                  <label htmlFor="workplaceType">Work Place Type</label>
                  <div className="relative">
                    <div
                      id="workplaceType"
                      role="button"
                      tabIndex={0}
                      className={`multiselect-trigger ${formErrors.workplace_type ? "has-error" : ""}`}
                      onClick={() => setIsWorkplaceDropdownOpen(!isWorkplaceDropdownOpen)}
                      onKeyDown={(e) => {
                        if (e.key === "Enter" || e.key === " ") {
                          e.preventDefault();
                          setIsWorkplaceDropdownOpen(!isWorkplaceDropdownOpen);
                        }
                      }}
                      aria-haspopup="listbox"
                      aria-expanded={isWorkplaceDropdownOpen}
                    >
                      {selectedWorkplace === "" ? (
                        <span className="placeholder-text">Select Work Place Type</span>
                      ) : (
                        <span className="selected-value">{selectedWorkplace}</span>
                      )}
                      {selectedWorkplace !== "" && (
                        <span
                          className="clear-select-value"
                          onClick={(e) => {
                            e.stopPropagation();
                            setSelectedWorkplace("");
                            if (formErrors.workplace_type) {
                              setFormErrors((prev) => ({ ...prev, workplace_type: undefined }));
                            }
                          }}
                          role="button"
                          aria-label="Clear workplace type"
                        >
                          &times;
                        </span>
                      )}
                      <svg className="dropdown-chevron-icon" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M0 6L12 18L24 6H0Z" />
                      </svg>
                    </div>

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
                    <div
                      id="contractType"
                      role="button"
                      tabIndex={0}
                      className={`multiselect-trigger ${formErrors.contract_type ? "has-error" : ""}`}
                      onClick={() => setIsContractDropdownOpen(!isContractDropdownOpen)}
                      onKeyDown={(e) => {
                        if (e.key === "Enter" || e.key === " ") {
                          e.preventDefault();
                          setIsContractDropdownOpen(!isContractDropdownOpen);
                        }
                      }}
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
                      {selectedContract !== "" && (
                        <span
                          className="clear-select-value"
                          onClick={(e) => {
                            e.stopPropagation();
                            setSelectedContract("");
                            if (formErrors.contract_type) {
                              setFormErrors((prev) => ({ ...prev, contract_type: undefined }));
                            }
                          }}
                          role="button"
                          aria-label="Clear contract type"
                        >
                          &times;
                        </span>
                      )}
                      <svg className="dropdown-chevron-icon" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M0 6L12 18L24 6H0Z" />
                      </svg>
                    </div>

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

                <div className="ai-hire-now-field" id="workingDaysContainer" style={{ position: 'relative' }}>
                  <label id="workingDaysLabel">Working Days</label>
                  <div className="relative">
                    <div
                      role="button"
                      tabIndex={0}
                      className={`multiselect-trigger ${formErrors.working_days ? "has-error" : ""}`}
                      onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                      onKeyDown={(e) => {
                        if (e.key === "Enter" || e.key === " ") {
                          e.preventDefault();
                          setIsDropdownOpen(!isDropdownOpen);
                        }
                      }}
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
                      <svg className="dropdown-chevron-icon" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M0 6L12 18L24 6H0Z" />
                      </svg>
                    </div>

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
                              <span className="option-text flex items-center justify-between w-full">
                                {day}
                                {isSelected && <span className="selected-check font-bold ml-2">✓</span>}
                              </span>
                            </div>
                          );
                        })}
                      </div>
                    )}
                  </div>
                  {formErrors.working_days && (
                    <span className="error-message">⚠️ {formErrors.working_days}</span>
                  )}
                </div>
              </div>

              <div className="grid-3-col mt-5">
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
                    <div
                      id="salaryPer"
                      role="button"
                      tabIndex={0}
                      className={`multiselect-trigger ${formErrors.salary_per ? "has-error" : ""}`}
                      onClick={() => setIsSalaryPerDropdownOpen(!isSalaryPerDropdownOpen)}
                      onKeyDown={(e) => {
                        if (e.key === "Enter" || e.key === " ") {
                          e.preventDefault();
                          setIsSalaryPerDropdownOpen(!isSalaryPerDropdownOpen);
                        }
                      }}
                      aria-haspopup="listbox"
                      aria-expanded={isSalaryPerDropdownOpen}
                    >
                      {selectedSalaryPer === "" ? (
                        <span className="placeholder-text">Select Period</span>
                      ) : (
                        <span className="selected-value">{selectedSalaryPer}</span>
                      )}
                      {selectedSalaryPer !== "" && (
                        <span
                          className="clear-select-value"
                          onClick={(e) => {
                            e.stopPropagation();
                            setSelectedSalaryPer("");
                            if (formErrors.salary_per) {
                              setFormErrors((prev) => ({ ...prev, salary_per: undefined }));
                            }
                          }}
                          role="button"
                          aria-label="Clear salary period"
                        >
                          &times;
                        </span>
                      )}
                      <svg className="dropdown-chevron-icon" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M0 6L12 18L24 6H0Z" />
                      </svg>
                    </div>

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
              </div>
            </div>

            {/* Section 3: Location & Details */}
            <div className="form-section mb-6">
              <div className="form-section-header flex items-center border-b border-[#f1f5f9] pb-3 mb-6">
                <MapPin className="w-5 h-5 text-[#001737] mr-2 flex-shrink-0" />
                <h2 className="text-[17px] font-bold text-[#001737] tracking-wide uppercase">
                  Location & Details
                </h2>
              </div>

              <div className="grid-2-col">
                <div className="ai-hire-now-field">
                  <label htmlFor="location">Location</label>
                  <textarea
                    id="location"
                    name="location"
                    rows={4}
                    placeholder="Main site, postcode, or first location"
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

                <div className="ai-hire-now-field">
                  <label htmlFor="notes">Site & Role Details (if multiple)</label>
                  <textarea
                    id="notes"
                    name="notes"
                    rows={4}
                    placeholder="Example: 6 labourers - Glasgow site, 4 drivers - Edinburgh depot"
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

              <div className="ai-hire-now-field mt-5">
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
            </div>

            {/* Submit Actions */}
            <div className="ai-hire-now-actions-wrapper pt-1">
              <div className="ai-hire-now-actions">
                <button type="submit" className="btn-ai-cta flex items-center justify-center" disabled={isSubmitting}>
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>
                      <Sparkles className="w-4 h-4 mr-2" />
                      AI Hire Now
                    </>
                  )}
                </button>
                <p id="aiHireNowMessage" className="ai-hire-now-message mt-2" aria-live="polite">
                  {message}
                </p>
              </div>
            </div>
          </form>
        </div>
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
        .ai-hire-now-header {
          margin-bottom: 1.5rem;
        }

        .ai-hire-now-title {
          color: #091e42;
          font-family: inherit;
          font-weight: 700;
          line-height: 1.2;
          letter-spacing: -0.02em;
        }

        .ai-hire-now-lead {
          color: #42526e;
          font-weight: 500;
        }

        .ai-hire-now-card {
          background: #ffffff;
          border: 1px solid #e2e8f0;
          border-radius: 16px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.03);
          margin-bottom: 1rem;
        }

        .form-section-header {
          display: flex;
          align-items: center;
          border-bottom: 1px solid #f1f5f9;
          padding-bottom: 0.75rem;
          margin-bottom: 1.5rem;
        }

        .form-section-header h2 {
          font-size: 0.9rem;
          font-weight: 700;
          color: #0f172a;
          letter-spacing: 0.05em;
          margin: 0;
        }

        .grid-3-col {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 1.25rem 1.5rem;
        }

        .grid-2-col {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 1.25rem 1.5rem;
        }

        .ai-hire-now-field {
          display: flex;
          flex-direction: column;
          position: relative;
        }

        .ai-hire-now-field label {
          margin-bottom: 0.5rem;
          color: #334155;
          font-size: 0.85rem;
          font-weight: 600;
          line-height: 1.4;
        }

        .ai-hire-now-field input,
        .ai-hire-now-field textarea,
        .multiselect-trigger {
          width: 100%;
          border: 1px solid #cbd5e1;
          border-radius: 8px;
          background: #ffffff;
          color: #0f172a;
          font-family: inherit;
          font-size: 0.95rem;
          line-height: 1.5;
          padding: 10px 14px;
          outline: none;
          transition: border-color 0.15s ease, box-shadow 0.15s ease;
          box-sizing: border-box;
        }

        .ai-hire-now-field .relative {
          width: 100%;
        }

        .multiselect-trigger {
          width: 100% !important;
          display: flex !important;
          align-items: center !important;
          justify-content: space-between !important;
          text-align: left !important;
          cursor: pointer !important;
          min-height: 44px !important;
          height: auto !important;
          box-shadow: none !important;
          background: #ffffff !important;
          padding: 6px 12px !important;
          border: 1px solid #cbd5e1 !important;
          border-radius: 8px !important;
          box-sizing: border-box !important;
          overflow: visible !important;
          gap: 8px !important;
          user-select: none;
        }

        .clear-select-value {
          margin-left: 6px;
          // margin-right: auto;
          color: #94a3b8;
          font-weight: bold;
          font-size: 1.2rem;
          cursor: pointer;
          line-height: 1;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          transition: color 0.15s ease;
          flex-shrink: 0;
        }

        .clear-select-value:hover {
          color: #ef4444;
        }

        .selected-tags {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 6px;
          flex: 1;
          min-width: 0;
          padding: 2px 0;
        }

        .selected-tag {
          display: inline-flex;
          align-items: center;
          background: #f1f5f9;
          color: #0f172a;
          font-size: 0.825rem;
          font-weight: 600;
          line-height: 1.2;
          padding: 4px 8px;
          border-radius: 6px;
          border: 1px solid #cbd5e1;
          transition: all 0.15s ease;
          white-space: nowrap;
        }

        .selected-tag:hover {
          background: #e2e8f0;
          border-color: #94a3b8;
        }

        .remove-tag {
          margin-left: 6px;
          color: #64748b;
          font-weight: bold;
          font-size: 1rem;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          line-height: 1;
          border-radius: 50%;
          width: 14px;
          height: 14px;
          transition: all 0.15s ease;
        }

        .remove-tag:hover {
          color: #ef4444;
          background: rgba(239, 68, 68, 0.1);
        }

        .multiselect-trigger:hover {
          border-color: #94a3b8 !important;
        }

        .multiselect-trigger:focus,
        .ai-hire-now-field input:focus,
        .ai-hire-now-field textarea:focus {
          border-color: #0f172a;
          box-shadow: 0 0 0 2px rgba(15, 23, 42, 0.05);
        }

        .ai-hire-now-field input::placeholder,
        .ai-hire-now-field textarea::placeholder {
          color: #94a3b8;
          opacity: 1;
        }

        .placeholder-text {
          color: #94a3b8;
        }

        .selected-value {
          color: #0f172a;
          font-weight: 500;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .dropdown-chevron-icon {
          width: 10px;
          height: 10px;
          color: #0f172a;
          flex-shrink: 0;
          opacity: 0.8;
          align-self: center;
          margin-left: auto;
        }

        .multiselect-dropdown {
          position: absolute;
          top: 100%;
          left: 0;
          right: 0;
          margin-top: 4px;
          background: #ffffff;
          border: 1px solid #e2e8f0;
          border-radius: 8px;
          box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1);
          z-index: 50;
          max-height: 220px;
          overflow-y: auto;
          padding: 4px;
          box-sizing: border-box;
        }

        .multiselect-option {
          display: flex;
          align-items: center;
          padding: 8px 12px;
          border-radius: 6px;
          cursor: pointer;
          transition: background 0.1s ease;
          color: #334155;
          font-size: 0.9rem;
          font-weight: 500;
        }

        .multiselect-option:hover {
          background: #f1f5f9;
          color: #0f172a;
        }

        .multiselect-option.selected {
          background: #eff6ff;
          color: #1d4ed8;
          font-weight: 600;
        }

        .selected-check {
          color: #2563eb;
          font-weight: 700;
        }

        .ai-hire-now-field textarea {
          resize: vertical;
          min-height: 100px;
        }

        .ai-hire-now-field input.has-error,
        .ai-hire-now-field textarea.has-error,
        .multiselect-trigger.has-error {
          border-color: #ef4444 !important;
          box-shadow: 0 0 0 2px rgba(239, 68, 68, 0.1) !important;
        }

        .error-message {
          color: #ef4444;
          font-size: 0.8rem;
          margin-top: 4px;
          font-weight: 500;
          display: flex;
          align-items: center;
          gap: 4px;
        }

        .ai-hire-now-actions-wrapper {
          display: flex;
          justify-content: center;
          width: 100%;
        }

        .ai-hire-now-actions {
          display: flex;
          flex-direction: column;
          align-items: center;
          width: 100%;
          max-width: 320px;
        }

        .btn-ai-cta {
          width: 100%;
          padding: 12px 24px;
          background: #001737;
          color: #ffffff;
          border: none;
          border-radius: 8px;
          font-size: 1rem;
          font-weight: 600;
          cursor: pointer;
          transition: background-color 0.15s ease, transform 0.15s ease, box-shadow 0.15s ease;
          box-shadow: 0 2px 4px rgba(0, 23, 55, 0.1);
        }

        .btn-ai-cta:hover:not(:disabled) {
          background: #091e42;
          box-shadow: 0 4px 8px rgba(0, 23, 55, 0.15);
        }

        .btn-ai-cta:active:not(:disabled) {
          transform: translateY(1px);
        }

        .btn-ai-cta:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }

        .ai-hire-now-message {
          font-size: 0.9rem;
          color: #42526e;
          text-align: center;
        }

        input[type="date"]::-webkit-calendar-picker-indicator {
          cursor: pointer;
        }

        @media (max-width: 768px) {
          .grid-3-col {
            grid-template-columns: 1fr;
            gap: 1rem;
          }

          .grid-2-col {
            grid-template-columns: 1fr;
            gap: 1rem;
          }

          .hidden-on-mobile {
            display: none;
          }

          .ai-hire-now-card {
            padding: 1.0rem;
          }
        }
      `}</style>
    </div>
  );
}
