"use client";

import { useState, useEffect, useRef } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Search, Mail, Sparkles, CheckCircle2, AlertCircle } from "lucide-react";
import { cities } from "@/data/cities";
import { api } from "@/services/api";

const SECTORS: Record<string, string[]> = {
  "Construction": ["Labourer","Groundworker","Joiner","Bricklayer","Plumber","Electrician","Painter & Decorator","Scaffolder","Plant Operator","Carpenter","Roofer","Site Manager"],
  "Renewables": ["Solar Installer","Wind Turbine Technician","Cable Jointer","Renewables Electrical Technician"],
  "Engineering": ["Mechanical Engineer","Electrical Engineer","Design Engineer","Maintenance Engineer","CNC Machinist","Welder / Fabricator"],
  "Logistics": ["Warehouse Operative","Forklift Driver","LGV Class 1 Driver","LGV Class 2 Driver","Picker & Packer","Delivery Driver","Supply Chain Coordinator"],
  "Healthcare": ["Care Assistant","Support Worker","Registered Nurse","Healthcare Assistant","Domiciliary Carer"],
  "Education": ["Teaching Assistant","SEN Support Worker","Cover Supervisor","Learning Support Assistant"],
  "Hospitality": ["Chef","Kitchen Porter","Waiting Staff","Bar Staff","Housekeeping","Event Staff"],
  "Business Support & IT": ["Administrator","Customer Service Advisor","IT Support Technician","Data Entry Clerk","Receptionist"],
  "Commercial & Office": ["Office Manager","PA / EA","Receptionist Cover","Team Assistant"],
  "Facilities Management": ["Cleaner","Caretaker","Maintenance Operative","Security Officer","Grounds Maintenance"],
  "IT & Technology": ["Software Developer","Data Analyst","Cloud Engineer","DevOps Engineer","Cybersecurity Analyst","IT Project Manager","QA Engineer"],
  "Accountancy, Finance & Banking": ["Accountant","Bookkeeper","Credit Controller","Payroll Administrator","Financial Analyst","Mortgage Advisor"],
  "Legal": ["Paralegal","Legal Secretary","Solicitor","Conveyancer","Legal Cashier","Compliance Officer"],
  "Manufacturing & Production": ["Production Operative","Machine Operator","Quality Control Inspector","Production Supervisor","Assembly Operative"],
  "Retail": ["Sales Assistant","Store Manager","Visual Merchandiser","Retail Supervisor","Stock Assistant"],
  "Sales & Marketing": ["Sales Executive","Account Manager","Business Development Manager","Marketing Executive","Telesales Advisor"],
  "Human Resources": ["HR Advisor","HR Administrator","HR Manager","Talent Acquisition Specialist","Recruitment Consultant"],
  "Insurance": ["Insurance Advisor","Claims Handler","Underwriter","Insurance Broker"],
  "Energy & Oil/Gas": ["Energy Engineer","Offshore Technician","Rig Worker","HSE Advisor","Energy Analyst"],
  "Property & Real Estate": ["Estate Agent","Lettings Negotiator","Property Manager","Surveyor","Block Manager","Valuer"]
};

const CORE_SECTORS = ["Construction","Renewables","Engineering","Logistics","Healthcare","Education","Hospitality","Business Support & IT","Commercial & Office","Facilities Management"];

const ALL_ROLES = Object.values(SECTORS).flat().sort();
const UNIQUE_LOCATIONS = Array.from(new Set(cities.map((c) => c.city))).sort();

interface FindStaffModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  initialLocation?: string;
  initialSector?: string;
}

export default function FindStaffModal({
  open,
  onOpenChange,
  initialLocation = "",
  initialSector = "",
}: FindStaffModalProps) {
  // Form State
  const [roleQuery, setRoleQuery] = useState("");
  const [selectedSector, setSelectedSector] = useState(initialSector);
  const [selectedPosition, setSelectedPosition] = useState("");
  const [location, setLocation] = useState(initialLocation);
  const [quantity, setQuantity] = useState("1");
  
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [website, setWebsite] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  // UI state
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState<string | null>(null);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [locSuggestions, setLocSuggestions] = useState<string[]>([]);
  const [showLocSuggestions, setShowLocSuggestions] = useState(false);
  const [roleSuggestions, setRoleSuggestions] = useState<string[]>([]);
  const [showRoleSuggestions, setShowRoleSuggestions] = useState(false);

  const locRef = useRef<HTMLDivElement>(null);
  const roleRef = useRef<HTMLDivElement>(null);

  // Sync initials when they change or modal opens
  useEffect(() => {
    if (open) {
      setLocation(initialLocation);
      setSelectedSector(initialSector);
      setSelectedPosition("");
      setRoleQuery("");
      setQuantity("1");
      setSubmitSuccess(null);
      setSubmitError(null);
    }
  }, [open, initialLocation, initialSector]);

  // Click outside suggestions
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (locRef.current && !locRef.current.contains(e.target as Node)) {
        setShowLocSuggestions(false);
      }
      if (roleRef.current && !roleRef.current.contains(e.target as Node)) {
        setShowRoleSuggestions(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Filter role suggestions
  const handleRoleQueryChange = (val: string) => {
    setRoleQuery(val);
    if (!val.trim()) {
      setRoleSuggestions([]);
      setShowRoleSuggestions(false);
      return;
    }
    const filtered = ALL_ROLES.filter((r) =>
      r.toLowerCase().includes(val.toLowerCase())
    ).slice(0, 5);
    setRoleSuggestions(filtered);
    setShowRoleSuggestions(true);
  };

  const selectRole = (role: string) => {
    setRoleQuery(role);
    setShowRoleSuggestions(false);
    
    // Auto-detect sector
    for (const [sector, roles] of Object.entries(SECTORS)) {
      if (roles.includes(role)) {
        setSelectedSector(sector);
        setSelectedPosition(role);
        break;
      }
    }
  };

  // Filter location suggestions
  const handleLocationChange = (val: string) => {
    setLocation(val);
    if (!val.trim()) {
      setLocSuggestions([]);
      setShowLocSuggestions(false);
      return;
    }
    const filtered = UNIQUE_LOCATIONS.filter((l) =>
      l.toLowerCase().includes(val.toLowerCase())
    ).slice(0, 5);
    setLocSuggestions(filtered);
    setShowLocSuggestions(true);
  };

  const selectLocation = (loc: string) => {
    setLocation(loc);
    setShowLocSuggestions(false);
  };

  const isFormValid = () => {
    return (
      selectedSector &&
      selectedPosition &&
      location.trim() &&
      name.trim() &&
      company.trim() &&
      (phone.trim() || email.trim())
    );
  };

  const getSummaryText = () => {
    const qtyLabel =
      { "1": "1 person", "2-5": "2–5 people", "6-10": "6–10 people", "10+": "10+ people" }[
        quantity
      ] || quantity;
    return `${qtyLabel} · ${selectedPosition} · ${selectedSector} · ${location}`;
  };

  // Channel Handlers
  const handleWhatsApp = () => {
    if (!isFormValid()) return;
    const msg = `Hi RD1, I'd like to hire staff: ${getSummaryText()}. Company: ${company}. Contact: ${name}, ${phone || email}.`;
    const url = `https://wa.me/447590882626?text=${encodeURIComponent(msg)}`;
    window.open(url, "_blank");
  };

  const handleEmail = () => {
    if (!isFormValid()) return;
    const msg = `Hi RD1, I'd like to hire staff: ${getSummaryText()}. Company: ${company}. Contact: ${name}, ${phone || email}.`;
    const url = `mailto:sales@rd1.co.uk?subject=Staff Inquiry - ${company}&body=${encodeURIComponent(msg)}`;
    window.open(url, "_blank");
  };

  const handleAIHireNow = async () => {
    if (!isFormValid()) return;
    setIsSubmitting(true);
    setSubmitSuccess(null);
    setSubmitError(null);

    const payload = {
      company_name: company,
      company_website: website.trim(),
      email: email.trim() || "notprovided@rd1.co.uk",
      full_name: name,
      phone_number: phone.trim() || "Not provided",
      job_title: selectedPosition,
      num_of_workers: quantity === "1" ? 1 : quantity === "2-5" ? 3 : quantity === "6-10" ? 8 : 12,
      start_date: new Date().toISOString().split("T")[0],
      location: location,
      siteAndroles: `[Find Staff Tool Enquiry]\nSector: ${selectedSector}\nPosition: ${selectedPosition}\nQuantity: ${quantity}\nWebsite: ${website}`,
      workplace_type: "On-site",
      contract_type: "Temporary",
      working_days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      salary_min: 0,
      salary_max: 0,
      salary_per: "Hour",
      qualifications: "None",
      client_type: "existing",
    };

    try {
      const result = await api.post("/core/live/ai-hire-now", payload);
      if (result.success) {
        setSubmitSuccess(
          `Thank you! A new JobAdder job has been successfully created in the system for ${company}. Job ID: ${result.job?.jobId || "N/A"}.`
        );
      } else {
        setSubmitError(result.error || "An error occurred during submission.");
      }
    } catch (err: any) {
      console.error(err);
      setSubmitError(err.message || "Failed to connect to the recruitment system. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl bg-white text-slate-900 border border-slate-200 rounded-2xl p-6 md:p-8 max-h-[90vh] overflow-y-auto shadow-2xl">
        <DialogHeader className="border-b border-slate-100 pb-4 mb-4">
          <DialogTitle className="text-2xl font-extrabold text-[#0c1730]">
            Tell us who you need — takes around 15 seconds
          </DialogTitle>
          <p className="text-sm text-slate-500 mt-1">
            Let us match your requirements against our nationwide candidate database.
          </p>
        </DialogHeader>

        {submitSuccess ? (
          <div className="flex flex-col items-center text-center py-8 space-y-4">
            <CheckCircle2 className="w-16 h-16 text-emerald-500" />
            <h3 className="text-xl font-bold text-slate-800">Request Sent Successfully!</h3>
            <p className="text-slate-600 max-w-md">{submitSuccess}</p>
            <button
              onClick={() => onOpenChange(false)}
              className="mt-4 px-6 py-2 bg-[#0c1730] text-white rounded-lg font-bold hover:bg-[#15244b] transition-colors"
            >
              Close Window
            </button>
          </div>
        ) : (
          <div className="space-y-6">
            {submitError && (
              <div className="flex items-start gap-3 p-4 bg-rose-50 border border-rose-200 text-rose-800 rounded-xl text-sm">
                <AlertCircle className="w-5 h-5 flex-shrink-0 text-rose-600 mt-0.5" />
                <div>
                  <h4 className="font-bold">Submission Failed</h4>
                  <p>{submitError}</p>
                </div>
              </div>
            )}

            {/* STEP 1 */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#d3a94a] tracking-wider uppercase">
                <span className="w-5 h-5 flex items-center justify-center rounded-full bg-slate-100 border border-slate-200 text-slate-700">1</span>
                What do you need?
              </div>

              {/* Reverse role search */}
              <div className="relative" ref={roleRef}>
                <label className="block text-xs font-bold text-slate-700 mb-1">Search a role</label>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                  <input
                    type="text"
                    value={roleQuery}
                    onChange={(e) => handleRoleQueryChange(e.target.value)}
                    onFocus={() => roleQuery && setShowRoleSuggestions(true)}
                    placeholder="Start typing a job title, e.g. Joiner"
                    className="w-full pl-9 pr-4 py-2.5 text-sm bg-white border border-slate-300 rounded-lg focus:border-slate-800 focus:ring-1 focus:ring-slate-800 outline-none"
                  />
                </div>
                {showRoleSuggestions && roleSuggestions.length > 0 && (
                  <div className="absolute z-10 w-full mt-1 bg-white border border-slate-200 rounded-lg shadow-lg max-h-60 overflow-y-auto">
                    {roleSuggestions.map((r) => (
                      <button
                        key={r}
                        type="button"
                        onClick={() => selectRole(r)}
                        className="w-full text-left px-4 py-2 text-sm hover:bg-slate-50 transition-colors"
                      >
                        {r}
                      </button>
                    ))}
                  </div>
                )}
                <p className="text-[11px] text-slate-400 mt-1">Picking a role here sets the sector automatically.</p>
              </div>

              <div className="flex items-center gap-3 text-xs font-mono font-bold text-slate-400 uppercase py-1">
                <span className="flex-grow h-px bg-slate-200" />
                or browse by sector
                <span className="flex-grow h-px bg-slate-200" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Sector</label>
                  <select
                    value={selectedSector}
                    onChange={(e) => {
                      setSelectedSector(e.target.value);
                      setSelectedPosition("");
                    }}
                    className="w-full px-3 py-2.5 text-sm bg-white border border-slate-300 rounded-lg focus:border-slate-800 outline-none"
                  >
                    <option value="">Choose a sector…</option>
                    <optgroup label="Core Sectors">
                      {CORE_SECTORS.map((s) => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </optgroup>
                    <optgroup label="Also Available">
                      {Object.keys(SECTORS)
                        .filter((s) => !CORE_SECTORS.includes(s))
                        .map((s) => (
                          <option key={s} value={s}>{s}</option>
                        ))}
                    </optgroup>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Position</label>
                  <select
                    value={selectedPosition}
                    onChange={(e) => setSelectedPosition(e.target.value)}
                    disabled={!selectedSector}
                    className="w-full px-3 py-2.5 text-sm bg-white border border-slate-300 rounded-lg focus:border-slate-800 outline-none disabled:bg-slate-50 disabled:text-slate-400"
                  >
                    <option value="">
                      {selectedSector ? "Choose a position…" : "Choose a sector first…"}
                    </option>
                    {selectedSector &&
                      SECTORS[selectedSector]?.map((p) => (
                        <option key={p} value={p}>{p}</option>
                      ))}
                  </select>
                </div>
              </div>

              {(selectedSector || selectedPosition) && (
                <div className="flex flex-wrap gap-2 pt-1">
                  {selectedSector && (
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-slate-100 border border-slate-200 text-slate-700">
                      Sector: <strong>{selectedSector}</strong>
                    </span>
                  )}
                  {selectedPosition && (
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-slate-100 border border-slate-200 text-slate-700">
                      Role: <strong>{selectedPosition}</strong>
                    </span>
                  )}
                </div>
              )}
            </div>

            <hr className="border-slate-100" />

            {/* STEP 2 */}
            <div className="space-y-3" ref={locRef}>
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#d3a94a] tracking-wider uppercase">
                <span className="w-5 h-5 flex items-center justify-center rounded-full bg-slate-100 border border-slate-200 text-slate-700">2</span>
                Where
              </div>
              <div className="relative">
                <label className="block text-xs font-bold text-slate-700 mb-1">Location</label>
                <input
                  type="text"
                  value={location}
                  onChange={(e) => handleLocationChange(e.target.value)}
                  onFocus={() => location && setShowLocSuggestions(true)}
                  placeholder="e.g. Newcastle, Hull, Birkenhead"
                  className="w-full px-4 py-2.5 text-sm bg-white border border-slate-300 rounded-lg focus:border-slate-800 outline-none"
                />
                {showLocSuggestions && locSuggestions.length > 0 && (
                  <div className="absolute z-10 w-full mt-1 bg-white border border-slate-200 rounded-lg shadow-lg max-h-48 overflow-y-auto">
                    {locSuggestions.map((l) => (
                      <button
                        key={l}
                        type="button"
                        onClick={() => selectLocation(l)}
                        className="w-full text-left px-4 py-2 text-sm hover:bg-slate-50 transition-colors"
                      >
                        {l}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>

            <hr className="border-slate-100" />

            {/* STEP 3 */}
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#d3a94a] tracking-wider uppercase">
                <span className="w-5 h-5 flex items-center justify-center rounded-full bg-slate-100 border border-slate-200 text-slate-700">3</span>
                How many
              </div>
              <div className="flex gap-2">
                {["1", "2-5", "6-10", "10+"].map((q) => (
                  <button
                    key={q}
                    type="button"
                    onClick={() => setQuantity(q)}
                    aria-pressed={quantity === q}
                    className={`flex-grow font-mono font-bold text-sm py-2 px-4 rounded-lg border transition-all ${
                      quantity === q
                        ? "bg-[#0c1730] border-[#0c1730] text-white"
                        : "bg-white border-slate-300 text-slate-700 hover:bg-slate-50"
                    }`}
                  >
                    {q}
                  </button>
                ))}
              </div>
            </div>

            <hr className="border-slate-100" />

            {/* STEP 4 */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#d3a94a] tracking-wider uppercase">
                <span className="w-5 h-5 flex items-center justify-center rounded-full bg-slate-100 border border-slate-200 text-slate-700">4</span>
                Your details
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Name</label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-4 py-2 text-sm border border-slate-300 rounded-lg outline-none focus:border-slate-800"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Company</label>
                  <input
                    type="text"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    className="w-full px-4 py-2 text-sm border border-slate-300 rounded-lg outline-none focus:border-slate-800"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Website <span className="text-slate-400 font-normal">(optional)</span>
                  </label>
                  <input
                    type="text"
                    value={website}
                    onChange={(e) => setWebsite(e.target.value)}
                    placeholder="yourcompany.co.uk"
                    className="w-full px-4 py-2 text-sm border border-slate-300 rounded-lg outline-none focus:border-slate-800"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Phone Number</label>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-4 py-2 text-sm border border-slate-300 rounded-lg outline-none focus:border-slate-800"
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-xs font-bold text-slate-700 mb-1">Email</label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-2 text-sm border border-slate-300 rounded-lg outline-none focus:border-slate-800"
                  />
                </div>
              </div>
            </div>

            <hr className="border-slate-100" />

            {/* STEP 5 */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#d3a94a] tracking-wider uppercase">
                <span className="w-5 h-5 flex items-center justify-center rounded-full bg-slate-100 border border-slate-200 text-slate-700">5</span>
                Send it
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                {/* WhatsApp Button */}
                <button
                  type="button"
                  onClick={handleWhatsApp}
                  disabled={!isFormValid()}
                  className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl border border-emerald-200 text-emerald-700 font-bold text-sm bg-white hover:bg-emerald-50 transition-colors disabled:opacity-40 disabled:hover:bg-white disabled:cursor-not-allowed"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="flex-shrink-0 text-emerald-500">
                    <path d="M12.02 2C6.5 2 2.02 6.48 2.02 12c0 1.85.5 3.58 1.36 5.07L2 22l5.1-1.34A9.94 9.94 0 0012.02 22C17.53 22 22 17.52 22 12S17.53 2 12.02 2zm5.78 14.2c-.24.68-1.4 1.3-1.94 1.38-.5.08-1.12.11-1.8-.11-.42-.13-.96-.3-1.65-.6-2.9-1.25-4.8-4.17-4.94-4.36-.14-.2-1.18-1.57-1.18-3 0-1.42.75-2.12 1.02-2.41.27-.29.58-.36.78-.36.2 0 .4 0 .57.01.18.01.43-.07.68.52.24.6.82 2.07.9 2.22.07.15.12.32.02.52-.1.2-.15.32-.3.5-.15.17-.31.38-.44.51-.15.14-.3.3-.13.6.17.29.75 1.24 1.6 2 1.1 1 2.03 1.31 2.32 1.46.29.15.46.13.63-.08.17-.2.72-.84.92-1.13.19-.29.38-.24.64-.14.26.1 1.64.77 1.92.91.29.15.48.22.55.34.07.13.07.72-.17 1.4z" />
                  </svg>
                  WhatsApp
                </button>

                {/* Email Button */}
                <button
                  type="button"
                  onClick={handleEmail}
                  disabled={!isFormValid()}
                  className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl border border-slate-200 text-slate-800 font-bold text-sm bg-white hover:bg-slate-50 transition-colors disabled:opacity-40 disabled:hover:bg-white disabled:cursor-not-allowed"
                >
                  <Mail className="w-4.5 h-4.5 text-slate-600 flex-shrink-0" />
                  Email
                </button>

                {/* AI Hire Now Button */}
                <button
                  type="button"
                  onClick={handleAIHireNow}
                  disabled={!isFormValid() || isSubmitting}
                  className="flex flex-col items-center justify-center gap-0.5 py-2.5 px-4 rounded-xl border border-[#0c1730] bg-[#0c1730] hover:bg-[#15244b] text-white font-bold text-sm transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
                >
                  <span className="flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-[#d3a94a] flex-shrink-0" />
                    {isSubmitting ? "Creating..." : "AI Hire Now"}
                  </span>
                  <span className="text-[10px] font-mono font-medium text-slate-300">Creates JobAdder job</span>
                </button>
              </div>
              <p className="text-center text-[11px] text-slate-400">
                Fill in sector, position, location and contact details to enable sending.
              </p>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
