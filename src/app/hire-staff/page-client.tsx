"use client";

import { motion } from "framer-motion";
import { Phone, Users, ShieldCheck, FileText, CheckCircle2, ChevronRight, Briefcase } from "lucide-react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingElements from "@/components/FloatingElements";
import FindStaffForm from "@/components/FindStaffForm";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
};

const SECTORS_DATA = {
  "Construction": ["Labourer", "Groundworker", "Joiner", "Bricklayer", "Site Manager"],
  "Renewables": ["Solar Installer", "Wind Turbine Technician", "Cable Jointer", "BESS Technician"],
  "Engineering": ["Mechanical Engineer", "Electrical Engineer", "CNC Machinist", "Welder/Fabricator"],
  "Logistics": ["Warehouse Operative", "Forklift Driver", "LGV Class 1 Driver", "Transport Planner"],
  "Healthcare": ["Care Assistant", "Support Worker", "Registered Nurse", "Healthcare Assistant"],
  "Education": ["Teaching Assistant", "SEN Support Worker", "Cover Supervisor", "Supply Teacher"],
  "Hospitality": ["Chef", "Kitchen Porter", "Waiting Staff", "Hotel Manager"],
  "Business Support & IT": ["Administrator", "Customer Service Advisor", "IT Support Technician", "Data Entry Clerk"],
  "Commercial & Office": ["Office Manager", "PA / EA", "Receptionist Cover", "Project Coordinator"],
  "Facilities Management": ["Cleaner", "Caretaker", "Maintenance Operative", "Security Officer"],
  "IT & Technology": ["Software Developer", "Data Analyst", "Cloud Engineer", "DevOps Engineer"],
  "Accountancy, Finance & Banking": ["Accountant", "Bookkeeper", "Credit Controller", "Payroll Administrator"],
  "Legal": ["Paralegal", "Legal Secretary", "Solicitor", "Conveyancer"],
  "Manufacturing & Production": ["Production Operative", "Machine Operator", "Quality Control Inspector", "Assembly Operative"],
  "Retail": ["Sales Assistant", "Store Manager", "Visual Merchandiser", "Retail Supervisor"],
  "Sales & Marketing": ["Sales Executive", "Account Manager", "Business Development Manager", "Marketing Executive"],
  "Human Resources": ["HR Advisor", "HR Administrator", "HR Manager", "Talent Acquisition Specialist"],
  "Insurance": ["Insurance Advisor", "Claims Handler", "Underwriter", "Insurance Broker"],
  "Energy & Oil/Gas": ["Energy Engineer", "Offshore Technician", "Rig Worker", "HSE Advisor"],
  "Property & Real Estate": ["Estate Agent", "Lettings Negotiator", "Property Manager", "Surveyor"]
};

const CORE_SECTORS = ["Construction", "Renewables", "Engineering", "Logistics", "Healthcare", "Education", "Hospitality", "Business Support & IT", "Commercial & Office", "Facilities Management"];

const FAQS = [
  {
    question: "How quickly can you find me staff?",
    answer: "Enquiries submitted through AI Hire Now are processed immediately, triggering candidate matching against our database. Recruitment consultants verify all profiles. WhatsApp and email requests are received directly by consultants for prompt setup."
  },
  {
    question: "Which sectors do you cover?",
    answer: "We cover 20 sectors including Construction, Renewables, Engineering, Logistics, Healthcare, Education, Hospitality, and Business Support. You can browse all available roles or type in a title directly in the form."
  },
  {
    question: "Can I hire just one person, or is this for bulk staffing only?",
    answer: "We handle orders of all sizes. Whether you need a single specialist to cover an absence or a large team for a new project, we scale our matching process to fit your brief."
  },
  {
    question: "Do you supply staff across the whole UK?",
    answer: "Yes, Recruitment Direct has provided national coverage since 2006. We support clients and candidates across England, Scotland, Wales, and Northern Ireland."
  },
  {
    question: "Is there a cost to submit an enquiry?",
    answer: "No. Submitting your staffing requirement or asking for a quote is completely free of charge. You will only discuss fee structures and terms once we start submitting candidates for your review."
  },
  {
    question: "What is AI Hire Now?",
    answer: "AI Hire Now is our direct system integration. It automatically creates a new job post in our CRM and triggers an AI search across our candidate pool, bypassing wait times to get matching started instantly."
  }
];

export default function HireStaffPage() {
  const scrollToForm = () => {
    document.getElementById("hire-staff-tool")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const scrollToSectors = () => {
    document.getElementById("sectors-section")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col justify-between">
      <Navbar />
      <FloatingElements />

      <div className="flex-grow pt-20">
        {/* Breadcrumbs */}
        <div className="max-w-7xl mx-auto px-6 pt-6">
          <nav className="city-breadcrumbs" aria-label="Breadcrumb">
            <ol className="flex flex-wrap items-center gap-1.5 sm:gap-2 text-xs sm:text-sm text-white/60">
              <li>
                <Link href="/" className="hover:text-white transition-colors">Home</Link>
              </li>
              <span className="separator text-white/40">/</span>
              <li>
                <span className="text-white/60">Clients</span>
              </li>
              {/* <span className="separator text-white/40">/</span>
              <li className="current text-[#D4AF37] font-semibold">Hire Staff</li> */}
            </ol>
          </nav>
        </div>

        {/* Hero Section */}
        <section className="relative overflow-hidden py-12 md:py-20">
          <div className="absolute inset-0 bg-radial-gradient opacity-10" />
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left Column */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="space-y-6"
              >
                <span className="text-xs font-mono font-bold text-[#d3a94a] tracking-wider uppercase">Hire Staff</span>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight tracking-tight">
                  Hire Staff UK-Wide
                  <span className="text-[#d3a94a] block mt-2">Any Sector. Any Role. Fast.</span>
                </h1>
                <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-xl">
                  From a x4 Pharmacist in Newcastle to 24 labourers in Liverpool — tell us who you need and we'll find them, fast. Backed by AI-powered screening, every candidate recruiter verified, and a UK-wide network built since 2006.
                </p>
                <div className="flex flex-wrap gap-4 pt-2">
                  <button
                    onClick={scrollToForm}
                    className="px-6 py-3.5 bg-[#d3a94a] text-slate-900 font-extrabold rounded-xl shadow-lg hover:bg-[#e6bb5c] transition-colors text-sm tracking-wide"
                  >
                    Find Staff Now
                  </button>
                  <button
                    onClick={scrollToSectors}
                    className="px-6 py-3.5 bg-white/5 border border-white/10 text-white font-extrabold rounded-xl hover:bg-white/10 transition-colors text-sm"
                  >
                    Browse Sectors
                  </button>
                </div>

                {/* Recent Placements */}
                <div className="border-t border-white/10 pt-6 mt-8 space-y-3">
                  <div className="text-[10px] font-mono font-bold tracking-widest text-[#6fa8ff] uppercase">
                    ● Recent placements — recruiter verified
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-slate-300">
                    <div className="flex items-center gap-2">
                      <span className="text-[9px] font-mono text-[#d3a94a] bg-[#d3a94a]/10 px-2 py-0.5 rounded">Healthcare</span>
                      <span><strong>Pharmacist</strong> — Coventry</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-[9px] font-mono text-[#d3a94a] bg-[#d3a94a]/10 px-2 py-0.5 rounded">Facilities</span>
                      <span><strong>Facilities Manager</strong> — Durham</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-[9px] font-mono text-[#d3a94a] bg-[#d3a94a]/10 px-2 py-0.5 rounded">Construction</span>
                      <span><strong>24× Labourers</strong> — Liverpool</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-[9px] font-mono text-[#d3a94a] bg-[#d3a94a]/10 px-2 py-0.5 rounded">Construction</span>
                      <span><strong>ADT Operator</strong> — Inverness</span>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Right Column (Live Board) */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.15 }}
                className="bg-[#05070d]/90 border border-white/10 rounded-2xl p-6 md:p-8 shadow-2xl space-y-6"
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-xs font-mono font-bold tracking-widest text-[#6fa8ff] uppercase">
                    24/7 Applicant Call — Live
                  </h3>
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/5 border border-white/5 rounded-xl p-4 text-center">
                    <div className="text-3xl font-extrabold text-white">132</div>
                    <div className="text-[10px] font-mono text-slate-400 mt-1 uppercase tracking-wide">Screened Today</div>
                  </div>
                  <div className="bg-white/5 border border-white/5 rounded-xl p-4 text-center">
                    <div className="text-3xl font-extrabold text-white">44</div>
                    <div className="text-[10px] font-mono text-slate-400 mt-1 uppercase tracking-wide">Submitted to Client</div>
                  </div>
                  <div className="bg-white/5 border border-white/5 rounded-xl p-4 text-center">
                    <div className="text-3xl font-extrabold text-white">50</div>
                    <div className="text-[10px] font-mono text-slate-400 mt-1 uppercase tracking-wide">Docs. Received</div>
                  </div>
                  <div className="bg-white/5 border border-white/5 rounded-xl p-4 text-center">
                    <div className="text-3xl font-extrabold text-white">39</div>
                    <div className="text-[10px] font-mono text-slate-400 mt-1 uppercase tracking-wide">Unsuccessful</div>
                  </div>
                </div>

                <div className="text-[11px] text-slate-400 text-center leading-relaxed">
                  CallPilot AI automates candidate screening and qualification verification around the clock.
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-16 border-t border-white/5 bg-white/5">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="text-xs font-mono font-bold text-[#d3a94a] tracking-wider uppercase">How It Works</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-2">From enquiry to shortlist, in minutes</h2>
              <p className="text-slate-400 text-sm sm:text-base mt-3">
                No account setup, no lengthy forms — search a role or browse by sector, and select your preferred callback method.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { step: "01", title: "Tell us who you need", desc: "Search a job title directly, or browse by sector and pick the exact role." },
                { step: "02", title: "Add location & quantity", desc: "One person or twenty — tell us where and how many staff you require." },
                { step: "03", title: "Choose how to send it", desc: "WhatsApp, email, or AI Hire Now for the fastest possible start." },
                { step: "04", title: "We get to work", desc: "AI-screened candidates, recruiter verified and compliance-checked, matched to your brief." }
              ].map((item) => (
                <div key={item.step} className="bg-[#05070d]/60 border border-white/10 rounded-xl p-6 space-y-3">
                  <div className="font-mono text-sm text-[#d3a94a] font-bold">{item.step}</div>
                  <h3 className="text-white font-bold text-base">{item.title}</h3>
                  <p className="text-slate-400 text-xs leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Sectors Section */}
        <section id="sectors-section" className="py-16 border-t border-white/5 bg-[#05070d]/30">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="text-xs font-mono font-bold text-[#d3a94a] tracking-wider uppercase">Every sector, one agency</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-2">Hire staff in any of these sectors</h2>
              <p className="text-slate-400 text-sm sm:text-base mt-3">
                Twenty sectors, all backed by the same AI-screened, compliance-checked process. Whatever your industry, we can staff it.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {Object.entries(SECTORS_DATA).map(([sector, roles]) => (
                <div
                  key={sector}
                  className={`bg-[#0d1526]/80 border rounded-xl p-5 space-y-3 hover:border-[#d3a94a]/30 transition-all ${
                    CORE_SECTORS.includes(sector) ? "border-[#d3a94a]/30" : "border-white/10"
                  }`}
                >
                  <h3 className="text-white font-extrabold text-sm flex items-center justify-between">
                    <span>{sector}</span>
                    {CORE_SECTORS.includes(sector) && (
                      <span className="text-[9px] font-mono text-[#d3a94a] bg-[#d3a94a]/10 px-2 py-0.5 rounded font-normal">Core</span>
                    )}
                  </h3>
                  <div className="text-xs text-slate-400 leading-relaxed">
                    {roles.map((r, i) => (
                      <span key={r}>
                        <strong>{r}</strong>
                        {i < roles.length - 1 ? ", " : ", ..."}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Form Section */}
        <section id="hire-staff-tool" className="py-16 border-t border-white/5 bg-slate-50">
          <div className="max-w-4xl mx-auto px-6">
            <div className="bg-white border border-slate-200 rounded-3xl p-6 md:p-10 shadow-2xl">
              <div className="mb-6 border-b border-slate-100 pb-6 text-center">
                <span className="text-[#d3a94a] text-xs font-mono font-bold tracking-wider uppercase">Find Staff</span>
                <h2 className="text-2xl md:text-3xl font-extrabold text-[#0c1730] mt-1">
                  Tell us who you need — takes around 15 seconds
                </h2>
                <p className="text-sm text-slate-500 mt-2">
                  Fill in your requirements below, no account setup needed.
                </p>
              </div>

              <FindStaffForm />
            </div>
          </div>
        </section>

        {/* Compliance Section */}
        <section className="py-16 border-t border-white/5 bg-white/5">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="text-xs font-mono font-bold text-[#d3a94a] tracking-wider uppercase">Why Choose Us</span>
              <h2 className="text-3xl font-extrabold text-white mt-2">Compliance you can hand straight to your ops team</h2>
            </div>

            <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
              {[
                "Constructionline Gold",
                "Cyber Essentials",
                "ISO 9001:2015",
                "REC Membership",
                "Framework Approved",
                "UK Wide Coverage"
              ].map((badge) => (
                <div key={badge} className="bg-white/5 border border-white/10 rounded-xl px-5 py-3 flex items-center gap-2 text-white font-bold text-sm">
                  <span className="w-2 h-2 rounded-full bg-[#d3a94a]" />
                  <span>{badge}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 border-t border-white/5 bg-[#05070d]/30">
          <div className="max-w-4xl mx-auto px-6">
            <div className="text-center mb-12">
              <span className="text-xs font-mono font-bold text-[#d3a94a] tracking-wider uppercase">Common Questions</span>
              <h2 className="text-3xl font-extrabold text-white mt-2">Hiring staff through Recruitment Direct</h2>
            </div>

            <div className="space-y-4">
              {FAQS.map((faq) => (
                <details
                  key={faq.question}
                  className="group border border-white/10 bg-[#05070d]/60 rounded-xl overflow-hidden [&_summary::-webkit-details-marker]:hidden"
                >
                  <summary className="flex items-center justify-between cursor-pointer p-5 text-white font-bold text-sm sm:text-base select-none">
                    <span>{faq.question}</span>
                    <span className="text-[#d3a94a] text-lg font-mono group-open:rotate-45 transition-transform duration-200">
                      +
                    </span>
                  </summary>
                  <p className="px-5 pb-5 text-xs sm:text-sm text-slate-400 leading-relaxed border-t border-white/5 pt-3 bg-white/[0.01]">
                    {faq.answer}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-20 border-t border-white/5 bg-radial-gradient text-center">
          <div className="max-w-4xl mx-auto px-6 space-y-6">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">Ready to hire?</h2>
            <p className="text-slate-300 text-sm sm:text-base max-w-xl mx-auto">
              Search a role, browse by sector, or send your requirement straight through — whichever's quickest for you.
            </p>
            <button
              onClick={scrollToForm}
              className="px-8 py-4 bg-[#d3a94a] text-slate-900 font-extrabold rounded-xl shadow-xl hover:bg-[#e6bb5c] transition-all transform hover:-translate-y-0.5 text-sm tracking-wide"
            >
              Find Staff Now
            </button>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
}
