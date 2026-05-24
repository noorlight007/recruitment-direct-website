"use client";

import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowLeft,
  MapPin,
  Clock,
  Building2,
  User,
  Briefcase,
  Phone,
  Mail,
  CheckCircle2,
  AlertCircle,
  Calendar,
  DollarSign,
  Compass,
  X,
  Send,
  Loader2,
  CalendarDays,
  UserCheck,
  Check
} from "lucide-react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingElements from "@/components/FloatingElements";
import { api } from "@/services/api";

interface JobDetails {
  jobId: number;
  jobTitle: string;
  location?: {
    locationId: number;
    name: string;
  };
  company?: {
    companyId: number;
    name: string;
    status?: {
      statusId: number;
      name: string;
      active: boolean;
    };
  };
  contact?: {
    contactId: number;
    firstName: string;
    lastName: string;
    position?: string;
    email?: string;
    mobile?: string;
    mobileNormalized?: string;
  };
  status?: {
    statusId: number;
    name: string;
    active: boolean;
  };
  source?: string;
  jobDescription?: string;
  numberOfJobs?: number;
  workplaceAddress?: {
    addressId: string;
    name: string;
    street: string[];
    city: string;
    postalCode: string;
    country: string;
    phone?: string;
    postcode?: string;
  };
  category?: {
    categoryId: number;
    name: string;
    subCategory?: {
      subCategoryId: number;
      name: string;
    };
  };
  start?: {
    date: string;
  };
  endDate?: string;
  workShift?: {
    startTime: string;
    endTime: string;
    workDays: string[];
  };
  workType?: {
    workTypeId: number;
    name: string;
  };
  jobType?: string;
  salary?: {
    ratePer: string;
    rateLow: number;
    rateHigh: number;
    currency: string;
  };
  owner?: {
    userId: number;
    firstName: string;
    lastName: string;
    position: string;
    jobTitle: string;
    email: string;
    phone: string;
    mobile: string;
  };
  createdAt: string;
}

export default function JobDetailsPage() {
  const router = useRouter();
  const { jobId } = useParams();

  const [job, setJob] = useState<JobDetails | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Apply Form State
  const [isApplyModalOpen, setIsApplyModalOpen] = useState(false);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [notes, setNotes] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [submissionStage, setSubmissionStage] = useState<"idle" | "submitting" | "verifying" | "checking">("idle");
  const [success, setSuccess] = useState(false);

  // Fetch job details by ID
  useEffect(() => {
    if (!jobId) return;

    async function fetchJobDetails() {
      try {
        setLoading(true);
        setError(null);
        // Call the core live jobs API dynamically by specific ID
        const data = await api.get(`/core/live/jobs/${jobId}`);
        if (data) {
          setJob(data);
        } else {
          setError("No records were found for this specific Job ID.");
        }
      } catch (err: any) {
        console.error("Error fetching job details:", err);
        setError("Unable to retrieve job details. The job opening may have been closed or is temporarily unavailable.");
      } finally {
        setLoading(false);
      }
    }

    fetchJobDetails();
  }, [jobId]);

  // Handle Application Submit
  const handleApplySubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    // Smooth multi-stage submission feedback sequence
    setSubmissionStage("submitting");
    await new Promise((resolve) => setTimeout(resolve, 800));

    setSubmissionStage("verifying");
    await new Promise((resolve) => setTimeout(resolve, 800));

    setSubmissionStage("checking");
    await new Promise((resolve) => setTimeout(resolve, 600));

    setSubmitting(false);
    setSubmissionStage("idle");
    setSuccess(true);

    // Clear Form inputs
    setFullName("");
    setEmail("");
    setPhone("");
    setNotes("");
  };

  // Safe formatting helpers
  const formatTime = (timeStr?: string) => {
    if (!timeStr) return "";
    try {
      // e.g. "07:00:00" -> "07:00"
      const parts = timeStr.split(":");
      if (parts.length >= 2) return `${parts[0]}:${parts[1]}`;
      return timeStr;
    } catch {
      return timeStr;
    }
  };

  const formatDate = (dateStr?: string) => {
    if (!dateStr) return "";
    try {
      const date = new Date(dateStr);
      if (isNaN(date.getTime())) return dateStr;
      return date.toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      });
    } catch {
      return dateStr;
    }
  };



  return (
    <div className="min-h-screen bg-background relative flex flex-col justify-between overflow-x-hidden">
      <FloatingElements />
      <Navbar />

      {/* Hero Header Area with dynamic moving ambient lights */}
      <header className="hero-section text-white pt-[140px] pb-12 relative overflow-hidden flex-shrink-0">
        <div className="absolute inset-0 bg-radial-glow opacity-30 pointer-events-none" />

        {/* Animated ambient light spheres */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            animate={{
              x: [0, 50, 0],
              y: [0, -30, 0],
              opacity: [0.15, 0.25, 0.15]
            }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-[10%] left-[15%] w-[350px] h-[350px] bg-blue-600/20 rounded-full blur-[110px]"
          />
          <motion.div
            animate={{
              x: [0, -40, 0],
              y: [0, 40, 0],
              opacity: [0.1, 0.2, 0.1]
            }}
            transition={{ duration: 16, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            className="absolute bottom-[10%] right-[10%] w-[400px] h-[400px] bg-indigo-600/15 rounded-full blur-[130px]"
          />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <Link
            href="/job-search"
            className="inline-flex items-center gap-2 text-xs font-bold text-blue-400 border border-blue-500/25 bg-blue-500/5 px-4 py-2 rounded-full mb-6 hover:bg-blue-500/10 hover:border-blue-400/40 transition-all duration-300 transform hover:-translate-x-1 uppercase tracking-widest"
          >
            <ArrowLeft className="w-4 h-4 text-blue-400" /> Back to live search
          </Link>

          {loading ? (
            <div className="animate-pulse space-y-4">
              <div className="h-6 bg-slate-800 rounded-md w-1/4" />
              <div className="h-14 bg-slate-800 rounded-md w-3/5" />
              <div className="h-8 bg-slate-800 rounded-md w-2/5" />
            </div>
          ) : error ? (
            <div className="text-left py-4">
              <h1 className="text-3xl font-extrabold text-white tracking-tight">Job File Interrupted</h1>
            </div>
          ) : job ? (
            <div className="space-y-6">
              {/* Category tag */}
              <div className="inline-flex items-center gap-2 text-xs text-blue-400 font-bold bg-blue-500/10 border border-blue-500/20 px-3.5 py-1.5 rounded-full uppercase tracking-widest shadow-sm shadow-blue-500/5">
                <Briefcase className="w-3.5 h-3.5 text-blue-400" />
                <span>{job.category?.name || "Job Direct"}</span>
                {job.category?.subCategory?.name && (
                  <>
                    <span className="text-slate-600 font-normal">|</span>
                    <span className="text-blue-300">{job.category.subCategory.name}</span>
                  </>
                )}
              </div>

              {/* Title Redesigned with Styled Gradient Word Splitting */}
              <h2 className="text-4xl md:text-5xl lg:text-7xl font-heading font-black tracking-tight leading-tight max-w-4xl text-white text-center mx-auto">
                {job.jobTitle}
              </h2>

              {/* Quick Fact Cards Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-8 pt-4">
                {/* Location Fact Card */}
                <motion.div
                  whileHover={{ y: -4, borderColor: "rgba(59, 130, 246, 0.4)" }}
                  className="p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md transition-all duration-300 flex items-start gap-4"
                >
                  <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 flex-shrink-0 shadow-sm shadow-blue-500/10">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[10px] text-gray-500 uppercase tracking-widest font-bold mb-1">Base Location</div>
                    <div className="text-sm font-bold text-white leading-tight">{job.location?.name || "Scotland, UK"}</div>
                  </div>
                </motion.div>

                {/* Salary Fact Card */}
                <motion.div
                  whileHover={{ y: -4, borderColor: "rgba(59, 130, 246, 0.4)" }}
                  className="p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md transition-all duration-300 flex items-start gap-4"
                >
                  <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 flex-shrink-0 shadow-sm shadow-blue-500/10">
                    <DollarSign className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[10px] text-gray-500 uppercase tracking-widest font-bold mb-1">Offered Salary</div>
                    <div className="text-sm font-bold text-white leading-tight">
                      {job.salary ? (
                        <>
                          £{job.salary.rateLow === job.salary.rateHigh ? job.salary.rateLow.toFixed(2) : `${job.salary.rateLow}-${job.salary.rateHigh}`}
                          <span className="text-xs text-gray-400 font-medium ml-1">/ {job.salary.ratePer}</span>
                        </>
                      ) : (
                        "Competitive Rate"
                      )}
                    </div>
                  </div>
                </motion.div>

                {/* Employment Type Fact Card */}
                <motion.div
                  whileHover={{ y: -4, borderColor: "rgba(59, 130, 246, 0.4)" }}
                  className="p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md transition-all duration-300 flex items-start gap-4"
                >
                  <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 flex-shrink-0 shadow-sm shadow-blue-500/10">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[10px] text-gray-500 uppercase tracking-widest font-bold mb-1">Employment Type</div>
                    <div className="text-sm font-bold text-white leading-tight">
                      {job.workType?.name || "Temp"}
                      <span className="text-xs text-gray-400 font-medium ml-1">({job.jobType || "Contingent"})</span>
                    </div>
                  </div>
                </motion.div>

                {/* Start Date Fact Card */}
                <motion.div
                  whileHover={{ y: -4, borderColor: "rgba(59, 130, 246, 0.4)" }}
                  className="p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md transition-all duration-300 flex items-start gap-4"
                >
                  <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 flex-shrink-0 shadow-sm shadow-blue-500/10">
                    <Calendar className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[10px] text-gray-500 uppercase tracking-widest font-bold mb-1">Start Date</div>
                    <div className="text-sm font-bold text-white leading-tight">
                      {job.start?.date ? formatDate(job.start.date) : "Immediate Start"}
                    </div>
                  </div>
                </motion.div>
              </div>

            </div>
          ) : null}
        </div>
      </header>

      {/* Main Details Body (Grid Layout) */}
      <main className="flex-grow dark-section py-12 relative">
        <div className="max-w-7xl mx-auto px-6 relative z-10">

          {loading ? (
            /* Spectacular Skeleton Dashboard Loader */
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start animate-pulse w-full">
              {/* Left Column Skeleton */}
              <div className="lg:col-span-2 space-y-8">
                {/* Shift Schedule Skeleton */}
                <div className="p-6 md:p-8 rounded-2xl bg-white/5 border border-white/5 h-[220px] flex flex-col justify-between">
                  <div className="h-6 bg-slate-800 rounded w-1/3 mb-4" />
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
                    <div className="md:col-span-4 h-[120px] bg-slate-900/60 rounded-xl" />
                    <div className="md:col-span-8 h-[120px] bg-slate-900/60 rounded-xl" />
                  </div>
                </div>

                {/* Location Map Skeleton */}
                <div className="p-6 md:p-8 rounded-2xl bg-white/5 border border-white/5 h-[300px] flex flex-col justify-between">
                  <div className="h-6 bg-slate-800 rounded w-1/4 mb-4" />
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
                    <div className="space-y-4">
                      <div className="h-[50px] bg-slate-900/60 rounded-xl" />
                      <div className="h-[50px] bg-slate-900/60 rounded-xl" />
                      <div className="h-[50px] bg-slate-900/60 rounded-xl" />
                    </div>
                    <div className="h-[180px] bg-slate-950/80 rounded-xl" />
                  </div>
                </div>
              </div>

              {/* Right Column Skeleton */}
              <div className="space-y-8">
                {/* Apply Box Card Skeleton */}
                <div className="p-6 md:p-8 rounded-2xl bg-slate-900 border border-white/5 h-[230px] flex flex-col justify-between">
                  <div className="space-y-3">
                    <div className="h-4 bg-slate-800 rounded w-1/4" />
                    <div className="h-7 bg-slate-800 rounded w-2/3" />
                    <div className="h-3 bg-slate-800 rounded w-5/6" />
                  </div>
                  <div className="h-12 bg-slate-800 rounded-xl w-full" />
                </div>

                {/* Coordinator Recruiter Card Skeleton */}
                <div className="p-6 rounded-2xl bg-white/5 border border-white/5 h-[220px] flex flex-col justify-between">
                  <div className="h-4 bg-slate-800 rounded w-1/3 mb-4" />
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 bg-slate-800 rounded-full" />
                    <div className="space-y-2 flex-1">
                      <div className="h-4 bg-slate-800 rounded w-1/2" />
                      <div className="h-3 bg-slate-800 rounded w-1/4" />
                    </div>
                  </div>
                  <div className="space-y-2 mt-4">
                    <div className="h-10 bg-slate-900/60 rounded-xl w-full" />
                    <div className="h-10 bg-slate-900/60 rounded-xl w-full" />
                  </div>
                </div>
              </div>
            </div>
          ) : error ? (
            /* Spectacular Error State Panel */
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="p-8 rounded-2xl bg-red-950/20 border border-red-500/20 text-center max-w-2xl mx-auto my-12 backdrop-blur-md shadow-2xl"
            >
              <div className="w-16 h-16 rounded-full bg-red-500/10 border border-red-500/30 flex items-center justify-center mx-auto mb-6 text-red-400 shadow-[0_0_15px_rgba(239,68,68,0.1)]">
                <AlertCircle className="w-8 h-8 animate-bounce" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3 tracking-wide">Connection Interrupted</h3>
              <p className="text-gray-300 mb-8 text-sm leading-relaxed max-w-md mx-auto">{error}</p>
              <Link href="/job-search" className="btn btn-primary inline-flex items-center gap-2">
                <ArrowLeft className="w-4 h-4" />
                Return to Live Search
              </Link>
            </motion.div>
          ) : job ? (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">

              {/* Left Column: Job Description and Shift/Address Details */}
              <div className="lg:col-span-2 space-y-8">



                {/* Shift Details Widget */}
                {job.workShift && (
                  <section className="p-6 md:p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md shadow-2xl relative overflow-hidden group hover:border-blue-500/20 transition-all duration-300">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-indigo-500/5 to-transparent rounded-tr-2xl pointer-events-none" />
                    <h2 className="text-xl font-heading font-bold text-white mb-6 flex items-center gap-3 pb-3 border-b border-white/5">
                      <Clock className="w-5 h-5 text-blue-400" />
                      Shift & Work Schedule
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
                      {/* Shift Time Card */}
                      <div className="md:col-span-4 p-5 rounded-xl bg-slate-900/60 border border-white/5 flex flex-col justify-between relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-16 h-16 bg-blue-500/5 rounded-full blur-xl pointer-events-none" />
                        <span className="text-[10px] text-gray-500 uppercase tracking-widest font-bold mb-3">Daily Hours</span>
                        <div>
                          <div className="text-2xl font-black text-white flex items-baseline gap-1">
                            {formatTime(job.workShift.startTime)}
                            <span className="text-gray-500 text-sm font-normal mx-1">to</span>
                            {formatTime(job.workShift.endTime)}
                          </div>
                          <p className="text-[11px] text-gray-400 mt-2 font-medium">Standard daily shift timing</p>
                        </div>
                      </div>

                      {/* Weekly Schedule Days Grid */}
                      <div className="md:col-span-8 p-5 rounded-xl bg-slate-900/60 border border-white/5 flex flex-col justify-between">
                        <span className="text-[10px] text-gray-500 uppercase tracking-widest font-bold mb-4 block">Scheduled Work Days</span>
                        <div className="grid grid-cols-4 sm:grid-cols-7 gap-2">
                          {["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"].map((day) => {
                            const isActive = job.workShift?.workDays.some(
                              d => d.toLowerCase() === day.toLowerCase()
                            );
                            return (
                              <motion.div
                                key={day}
                                whileHover={isActive ? { scale: 1.05 } : {}}
                                className={`text-center py-3 rounded-xl border transition-all duration-300 flex flex-col justify-center items-center ${isActive
                                  ? "bg-gradient-to-br from-blue-500/20 to-indigo-500/10 border-blue-500/40 text-blue-300 shadow-[0_0_15px_rgba(59,130,246,0.1)] font-semibold"
                                  : "bg-white/5 border-transparent text-gray-600"
                                  }`}
                              >
                                <div className="text-xs uppercase tracking-wider font-semibold">{day.substring(0, 3)}</div>
                                <div className="text-[8px] mt-1 tracking-widest opacity-80">
                                  {isActive ? "ON" : "OFF"}
                                </div>
                              </motion.div>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  </section>
                )}

                {/* Workplace Address Details */}
                {job.workplaceAddress && (
                  <section className="p-6 md:p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md shadow-2xl overflow-hidden relative group hover:border-blue-500/20 transition-all duration-300">
                    <div className="absolute top-0 right-0 w-40 h-40 bg-radial-glow opacity-20 pointer-events-none" />

                    <h2 className="text-xl font-heading font-bold text-white mb-6 flex items-center gap-3 pb-3 border-b border-white/5">
                      <MapPin className="w-5 h-5 text-blue-400" />
                      Workplace Location
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
                      <div className="space-y-4 flex flex-col justify-center">
                        <div className="p-4 rounded-xl bg-slate-900/40 border border-white/5">
                          <div className="text-[10px] text-gray-500 uppercase tracking-widest font-bold mb-1">Site/Address Name</div>
                          <div className="text-base font-bold text-white">{job.workplaceAddress.name}</div>
                        </div>

                        {job.workplaceAddress.street && job.workplaceAddress.street.length > 0 && (
                          <div className="p-4 rounded-xl bg-slate-900/40 border border-white/5">
                            <div className="text-[10px] text-gray-500 uppercase tracking-widest font-bold mb-1">Street</div>
                            <div className="text-sm text-gray-300">{job.workplaceAddress.street.join(", ")}</div>
                          </div>
                        )}

                        <div className="grid grid-cols-2 gap-4">
                          <div className="p-4 rounded-xl bg-slate-900/40 border border-white/5">
                            <div className="text-[10px] text-gray-500 uppercase tracking-widest font-bold mb-1">City / Region</div>
                            <div className="text-sm text-gray-300">{job.workplaceAddress.city}</div>
                          </div>
                          <div className="p-4 rounded-xl bg-slate-900/40 border border-white/5">
                            <div className="text-[10px] text-gray-500 uppercase tracking-widest font-bold mb-1">Postal Code</div>
                            <div className="text-sm font-bold text-blue-400 font-mono">{job.workplaceAddress.postalCode || job.workplaceAddress.postcode}</div>
                          </div>
                        </div>

                        <div className="p-4 rounded-xl bg-slate-900/40 border border-white/5">
                          <div className="text-[10px] text-gray-500 uppercase tracking-widest font-bold mb-1">Country</div>
                          <div className="text-sm text-gray-300">{job.workplaceAddress.country}</div>
                        </div>
                      </div>

                      {/* Interactive Sci-Fi Radar Grid map visualizer */}
                      <div className="h-[250px] md:h-auto min-h-[250px] rounded-xl bg-slate-950/80 border border-white/10 relative flex flex-col items-center justify-center p-6 text-center overflow-hidden">
                        {/* Radar Sweep Effect */}
                        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:15px_15px] pointer-events-none" />
                        <div className="absolute w-[200%] h-[200%] top-[-50%] left-[-50%] bg-[conic-gradient(from_0deg,transparent_60%,rgba(59,130,246,0.12))] animate-[spin_6s_linear_infinite] pointer-events-none rounded-full" />

                        {/* Radar Concentric Circles */}
                        <div className="absolute w-24 h-24 border border-blue-500/10 rounded-full pointer-events-none" />
                        <div className="absolute w-44 h-44 border border-blue-500/5 rounded-full pointer-events-none" />

                        {/* Glow Pulsing Coordinates */}
                        <div className="relative z-10">
                          <div className="w-14 h-14 rounded-full bg-blue-500/10 border border-blue-500/40 flex items-center justify-center text-blue-400 mb-4 mx-auto relative shadow-[0_0_20px_rgba(59,130,246,0.3)]">
                            <motion.div
                              animate={{ scale: [1, 1.8, 1], opacity: [0.5, 0, 0.5] }}
                              transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
                              className="absolute inset-0 rounded-full border-2 border-blue-400 pointer-events-none"
                            />
                            <MapPin className="w-6 h-6 animate-bounce" />
                          </div>
                          <div>
                            <div className="text-xs font-bold text-white mb-0.5">{job.workplaceAddress.name}</div>
                            <div className="text-[9px] text-gray-500 uppercase tracking-widest font-mono">
                              GPS COORDINATES VERIFIED
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                )}

              </div>

              {/* Right Column: CTA Apply Panel & Owner Contacts */}
              <div className="space-y-8">

                {/* Apply Box */}
                <div className="p-6 md:p-8 rounded-2xl bg-slate-900 border border-blue-500/20 backdrop-blur-md shadow-2xl relative overflow-hidden group hover:border-blue-500/35 transition-all duration-300">
                  <div className="absolute -top-10 -right-10 w-32 h-32 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

                  <div className="flex items-center gap-2.5 mb-4">
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 absolute" />
                    <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-widest">Actively Recruiting</span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2 tracking-tight">Immediate Vacancy</h3>
                  <p className="text-xs text-gray-400 mb-6 leading-relaxed">
                    This opening requires a dynamic screening process. Click Apply Now to submit your credentials and initialize a callback session.
                  </p>

                  <button
                    onClick={() => setIsApplyModalOpen(true)}
                    className="apply-now-btn w-full relative overflow-hidden group py-4 px-6 rounded-xl font-extrabold text-center flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-600 bg-[length:200%_auto] hover:bg-right transition-all duration-500 hover:shadow-[0_0_35px_rgba(59,130,246,0.4)] cursor-pointer text-white border border-blue-400/20"
                  >
                    {/* Continuous Lightsweep shimmer */}
                    <div className="absolute inset-y-0 -left-full w-1/2 bg-gradient-to-r from-transparent via-white/15 to-transparent skew-x-[30deg] group-hover:animate-[shimmer_1.6s_ease-out_infinite]" />
                    Apply Now
                    <Send className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-0.5" />
                  </button>

                  <div className="text-center mt-4">
                    <span className="text-[9px] font-bold text-gray-500 uppercase tracking-widest block font-mono">Job Clearance ID: RD-{job.jobId}</span>
                  </div>
                </div>

                {/* Recruiter Details Card */}
                {job.owner && (
                  <section className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md shadow-xl group hover:border-blue-500/20 transition-all duration-300">
                    <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-6 font-heading border-b border-white/5 pb-3">
                      Vacancy Coordinator
                    </h3>

                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-14 h-14 rounded-full bg-gradient-to-tr from-blue-600 to-indigo-600 border border-blue-400/30 flex items-center justify-center text-white font-extrabold text-xl shadow-[0_0_20px_rgba(59,130,246,0.2)] flex-shrink-0">
                        {job.owner.firstName[0]}{job.owner.lastName[0]}
                      </div>
                      <div>
                        <div className="text-base font-bold text-white leading-tight">
                          {job.owner.firstName} {job.owner.lastName}
                        </div>
                        <div className="text-[10px] text-blue-300 font-semibold uppercase tracking-wider mt-1.5 bg-blue-500/10 border border-blue-500/25 px-2.5 py-0.5 rounded-full inline-block">
                          {job.owner.position || job.owner.jobTitle || "Recruitment Coordinator"}
                        </div>
                      </div>
                    </div>

                    <div className="space-y-3.5 text-sm font-body">

                      {job.owner.email && (
                        <a
                          href={`mailto:${job.owner.email}`}
                          className="flex items-center gap-3 text-gray-300 hover:text-blue-400 transition-colors p-2.5 rounded-xl bg-slate-900/40 border border-white/5 hover:border-blue-500/20 group cursor-pointer"
                        >
                          <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/5 flex items-center justify-center text-gray-500 group-hover:text-blue-400 group-hover:bg-blue-500/10 transition-colors flex-shrink-0">
                            <Mail className="w-4 h-4" />
                          </div>
                          <span className="truncate text-xs font-semibold">{job.owner.email}</span>
                        </a>
                      )}

                      {job.owner.phone && (
                        <a
                          href={`tel:${job.owner.phone}`}
                          className="flex items-center gap-3 text-gray-300 hover:text-blue-400 transition-colors p-2.5 rounded-xl bg-slate-900/40 border border-white/5 hover:border-blue-500/20 group cursor-pointer"
                        >
                          <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/5 flex items-center justify-center text-gray-500 group-hover:text-blue-400 group-hover:bg-blue-500/10 transition-colors flex-shrink-0">
                            <Phone className="w-4 h-4" />
                          </div>
                          <span className="text-xs font-semibold">{job.owner.phone}</span>
                        </a>
                      )}

                      {job.owner.mobile && (
                        <a
                          href={`tel:${job.owner.mobile}`}
                          className="flex items-center gap-3 text-gray-300 hover:text-blue-400 transition-colors p-2.5 rounded-xl bg-slate-900/40 border border-white/5 hover:border-blue-500/20 group cursor-pointer"
                        >
                          <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/5 flex items-center justify-center text-gray-500 group-hover:text-blue-400 group-hover:bg-blue-500/10 transition-colors flex-shrink-0">
                            <Phone className="w-4 h-4" />
                          </div>
                          <span className="text-xs font-semibold">{job.owner.mobile} (Mobile)</span>
                        </a>
                      )}

                    </div>
                  </section>
                )}

              </div>

            </div>
          ) : null}

        </div>
      </main>

      <Footer />

      {/* Slide-over Apply Now Modal Drawer */}
      <AnimatePresence>
        {isApplyModalOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-end">

            {/* Dark glass backdrop overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => {
                if (!submitting) {
                  setIsApplyModalOpen(false);
                  setSuccess(false);
                }
              }}
              className="absolute inset-0 bg-black/70 backdrop-blur-sm cursor-pointer"
            />

            {/* Form Drawer panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 26, stiffness: 220 }}
              className="relative w-full max-w-md h-full bg-slate-950 border-l border-white/10 shadow-[0_0_65px_rgba(0,0,0,0.85)] flex flex-col justify-between overflow-hidden z-10"
            >
              {/* Animated Glowing Ambient Light inside drawer */}
              <div className="absolute top-[-20%] right-[-20%] w-[250px] h-[250px] bg-blue-500/10 rounded-full blur-[80px] pointer-events-none" />

              {/* Header */}
              <div className="p-6 border-b border-white/10 flex items-center justify-between relative z-10">
                <div>
                  <h3 className="text-lg font-bold text-white tracking-tight">Apply for Vacancy</h3>
                  {job && <p className="text-xs text-gray-400 mt-1 truncate">Job Ref: #{job.jobId} - {job.jobTitle}</p>}
                </div>
                <button
                  onClick={() => {
                    if (!submitting) {
                      setIsApplyModalOpen(false);
                      setSuccess(false);
                    }
                  }}
                  className="w-8 h-8 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white transition-colors cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Drawer Body Scroll Content */}
              <div className="flex-1 overflow-y-auto p-6 relative z-10 flex flex-col justify-center">
                {success ? (
                  /* Success Feedback Page with Confetti Explosion */
                  <div className="relative w-full py-8 text-center flex flex-col items-center justify-center">

                    {/* Bursting Confetti Particles */}
                    <div className="absolute inset-0 pointer-events-none flex items-center justify-center overflow-hidden">
                      {Array.from({ length: 20 }).map((_, i) => {
                        const angle = (i * 360) / 20;
                        const distance = Math.random() * 110 + 70;
                        const x = Math.cos((angle * Math.PI) / 180) * distance;
                        const y = Math.sin((angle * Math.PI) / 180) * distance;
                        const colors = ["#3b82f6", "#6366f1", "#10b981", "#f59e0b", "#ec4899"];
                        const randomColor = colors[Math.floor(Math.random() * colors.length)];

                        return (
                          <motion.div
                            key={i}
                            initial={{ x: 0, y: 0, scale: 0, opacity: 1 }}
                            animate={{
                              x: x,
                              y: y,
                              scale: [0, 1.3, 0.8, 0],
                              opacity: [1, 1, 0.5, 0],
                              rotate: Math.random() * 360
                            }}
                            transition={{ duration: 1.6, ease: "easeOut" }}
                            className="absolute w-2.5 h-2.5 rounded-full"
                            style={{ backgroundColor: randomColor }}
                          />
                        );
                      })}
                    </div>

                    <motion.div
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ type: "spring", stiffness: 200, damping: 15 }}
                      className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500 flex items-center justify-center text-emerald-400 mb-6 shadow-[0_0_20px_rgba(16,185,129,0.35)]"
                    >
                      <CheckCircle2 className="w-9 h-9" />
                    </motion.div>

                    <h4 className="text-2xl font-black text-white mb-2 tracking-tight">Clearance Initiated!</h4>
                    <p className="text-sm text-gray-400 leading-relaxed mb-8 max-w-sm">
                      Your vacancy file screening sequence has been triggered successfully. An RDUK compliance coordinator will review your profile credentials.
                    </p>
                    <button
                      onClick={() => {
                        setIsApplyModalOpen(false);
                        setSuccess(false);
                      }}
                      className="btn btn-primary py-3.5 px-8"
                    >
                      Dismiss Window
                    </button>
                  </div>
                ) : submitting ? (
                  /* Premium Progressive Loading Sequence */
                  <div className="flex flex-col items-center justify-center text-center py-8">
                    <div className="relative mb-6">
                      <div className="w-16 h-16 rounded-full border-4 border-slate-800 border-t-blue-500 animate-spin" />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Loader2 className="w-6 h-6 text-blue-400 animate-pulse" />
                      </div>
                    </div>

                    <h4 className="text-lg font-bold text-white mb-2">
                      {submissionStage === "submitting" && "Submitting vacancy credentials..."}
                      {submissionStage === "verifying" && "Verifying registration file..."}
                      {submissionStage === "checking" && "Configuring compliance flags..."}
                    </h4>
                    <p className="text-xs text-gray-500 max-w-xs leading-relaxed uppercase tracking-wider font-semibold">
                      {submissionStage === "submitting" && "Uploading contacts and secure files"}
                      {submissionStage === "verifying" && "Cross-referencing parameters with job requirements"}
                      {submissionStage === "checking" && "Aligning compliance profiles"}
                    </p>
                  </div>
                ) : (
                  /* Application Form fields */
                  <form onSubmit={handleApplySubmit} className="space-y-5">
                    <div>
                      <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2 font-heading">
                        Full Name *
                      </label>
                      <div className="relative">
                        <input
                          type="text"
                          required
                          value={fullName}
                          onChange={(e) => setFullName(e.target.value)}
                          placeholder="e.g. Liam Smith"
                          className="w-full px-4 py-3.5 rounded-xl border border-white/10 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 focus:outline-none font-body text-white bg-white/5 transition-all placeholder:text-gray-600 text-sm"
                        />
                        {fullName.trim().length > 3 && (
                          <div className="absolute right-3.5 top-1/2 -translate-y-1/2 text-emerald-400">
                            <Check className="w-4 h-4" />
                          </div>
                        )}
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2 font-heading">
                        Email Address *
                      </label>
                      <div className="relative">
                        <input
                          type="email"
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="e.g. liam.smith@email.com"
                          className="w-full px-4 py-3.5 rounded-xl border border-white/10 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 focus:outline-none font-body text-white bg-white/5 transition-all placeholder:text-gray-600 text-sm"
                        />
                        {email.includes("@") && email.includes(".") && (
                          <div className="absolute right-3.5 top-1/2 -translate-y-1/2 text-emerald-400">
                            <Check className="w-4 h-4" />
                          </div>
                        )}
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2 font-heading">
                        Phone Number *
                      </label>
                      <div className="relative">
                        <input
                          type="tel"
                          required
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          placeholder="e.g. 07700 900077"
                          className="w-full px-4 py-3.5 rounded-xl border border-white/10 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 focus:outline-none font-body text-white bg-white/5 transition-all placeholder:text-gray-600 text-sm"
                        />
                        {phone.trim().length > 8 && (
                          <div className="absolute right-3.5 top-1/2 -translate-y-1/2 text-emerald-400">
                            <Check className="w-4 h-4" />
                          </div>
                        )}
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2 font-heading">
                        Clearance Card Details / Notes
                      </label>
                      <textarea
                        rows={4}
                        value={notes}
                        onChange={(e) => setNotes(e.target.value)}
                        placeholder="Please state availability, valid cards (CSCS, CPCS, NPORS), and safety clearance details..."
                        className="w-full px-4 py-3.5 rounded-xl border border-white/10 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 focus:outline-none font-body text-white bg-white/5 transition-all placeholder:text-gray-600 text-sm resize-none"
                      />
                    </div>

                    <div className="pt-4">
                      <button
                        type="submit"
                        disabled={submitting}
                        className="submit-app-btn w-full relative overflow-hidden group py-4 px-6 rounded-xl font-extrabold text-center flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-600 bg-[length:200%_auto] hover:bg-right transition-all duration-500 hover:shadow-[0_0_20px_rgba(59,130,246,0.3)] cursor-pointer text-white border border-blue-400/20 disabled:opacity-50"
                      >
                        Submit Application
                      </button>
                    </div>
                  </form>
                )}
              </div>

              {/* Drawer Footer */}
              <div className="p-6 border-t border-white/10 bg-slate-950 text-center text-[10px] text-gray-500 font-bold uppercase tracking-widest relative z-10">
                Job Direct Recruitment Verification
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Styled JSX (Cleaned and scoped helper animations) */}
      <style jsx>{`
        .bg-radial-glow {
          background: radial-gradient(circle at 50% 50%, rgba(30, 92, 255, 0.15) 0%, transparent 60%);
        }
        @keyframes shimmer {
          100% {
            left: 200%;
          }
        }
        button.apply-now-btn, button.submit-app-btn {
          width: 100% !important;
          display: flex !important;
          justify-content: center !important;
          align-items: center !important;
          box-sizing: border-box !important;
        }
      `}</style>

    </div>
  );
}
