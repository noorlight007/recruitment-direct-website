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

interface LinkItem {
  self?: string;
  applications?: string;
  logo?: string;
  mainContact?: string;
  photo?: string;
  company?: string;
}

interface StatusItem {
  statusId: number;
  name: string;
  active: boolean;
  default?: boolean;
}

interface UserProfile {
  userId: number;
  firstName: string;
  lastName: string;
  position?: string;
  jobTitle?: string;
  email?: string;
  phone?: string;
  mobile?: string;
  links?: LinkItem;
}

interface CompanyInfo {
  companyId: number;
  name: string;
  status?: StatusItem;
  owner?: UserProfile;
  links?: LinkItem;
}

interface ContactInfo {
  contactId: number;
  firstName: string;
  lastName: string;
  unsubscribed?: boolean;
  email?: string;
  status?: StatusItem;
  owner?: UserProfile;
  links?: LinkItem;
}

interface JobInfo {
  jobId: number;
  jobTitle: string;
  location?: {
    locationId: number;
    name: string;
  };
  company?: CompanyInfo;
  contact?: ContactInfo;
  status?: StatusItem;
  source?: string;
  owner?: UserProfile;
  links?: LinkItem;
}

interface JobBoard {
  boardId: number;
  name: string;
  reference?: string;
}

interface ApplyUrl {
  name: string;
  url: string;
}

interface JobDetails {
  adId: number;
  state: string;
  title: string;
  reference: string;
  summary: string;
  bulletPoints: string[];
  description?: string;
  job?: JobInfo;
  company?: CompanyInfo;
  contact?: ContactInfo;
  jobBoards?: JobBoard[];
  otherApplyUrls?: ApplyUrl[];
  owner?: UserProfile;
  createdBy?: UserProfile;
  postAt: string;
  expireAt: string;
  links?: LinkItem;

  // Fallbacks for other structures to keep compilation fully correct
  jobId?: number;
  jobTitle?: string;
  location?: {
    locationId: number;
    name: string;
  };
  category?: {
    categoryId: number;
    name: string;
    subCategory?: {
      subCategoryId: number;
      name: string;
    };
  };
  workShift?: {
    startTime: string;
    endTime: string;
    workDays: string[];
  };
  workplaceAddress?: {
    name: string;
    street: string[];
    city: string;
    postalCode: string;
    postcode?: string;
    country: string;
  };
  start?: {
    date: string;
  };
  jobType?: string;
  salary?: {
    ratePer: string;
    rateLow: number;
    rateHigh: number;
    currency: string;
  };
  workType?: {
    workTypeId: number;
    name: string;
  };
  createdAt?: string;
}

export default function JobDetailsPage() {
  const router = useRouter();
  const { adId } = useParams();

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

  // Helper to dynamically extract location from title, bullet points, or reference
  const getJobAdLocation = (item: JobDetails): string => {
    if (item.job?.location?.name) {
      return item.job.location.name;
    }

    if (item.title && item.title.includes("|")) {
      const parts = item.title.split("|").map(p => p.trim());
      if (parts.length >= 3) {
        return parts[2];
      }
      if (parts.length === 2 && !parts[1].includes("hour") && !parts[1].includes("£")) {
        return parts[1];
      }
    }

    if (item.bulletPoints && item.bulletPoints.length > 0) {
      for (const bp of item.bulletPoints) {
        if (
          bp.includes(",") ||
          bp.toLowerCase().includes("scotland") ||
          bp.toLowerCase().includes("edinburgh") ||
          bp.toLowerCase().includes("glasgow") ||
          bp.toLowerCase().includes("lanark") ||
          bp.toLowerCase().includes("stirling") ||
          bp.toLowerCase().includes("ayrshire") ||
          bp.toLowerCase().includes("kilmarnock") ||
          bp.toLowerCase().includes("greenock")
        ) {
          return bp;
        }
      }
    }

    if (item.reference && isNaN(Number(item.reference))) {
      return item.reference;
    }

    return "Scotland";
  };

  // Helper to dynamically extract salary from title or bullet points
  const getJobAdSalary = (item: JobDetails): string => {
    if (item.title && item.title.includes("|")) {
      const parts = item.title.split("|").map(p => p.trim());
      for (const part of parts) {
        if (part.includes("£") || part.toLowerCase().includes("hour") || part.toLowerCase().includes("ph")) {
          return part;
        }
      }
    }

    if (item.bulletPoints && item.bulletPoints.length > 0) {
      for (const bp of item.bulletPoints) {
        if (bp.includes("£") || bp.toLowerCase().includes("ph") || bp.toLowerCase().includes("hour")) {
          return bp;
        }
      }
    }

    return "Competitive Rate";
  };

  // Helper to dynamically extract employment type from title or bullet points
  const getJobAdWorkType = (item: JobDetails): string => {
    if (item.title) {
      const lowerTitle = item.title.toLowerCase();
      if (lowerTitle.includes("permanent")) return "Permanent";
      if (lowerTitle.includes("contract")) return "Contract";
      if (lowerTitle.includes("temporary") || lowerTitle.includes("ongoing")) return "Temporary";
    }

    if (item.bulletPoints && item.bulletPoints.length > 0) {
      for (const bp of item.bulletPoints) {
        const lowerBp = bp.toLowerCase();
        if (lowerBp.includes("permanent")) return "Permanent";
        if (lowerBp.includes("contract")) return "Contract";
        if (lowerBp.includes("temporary") || lowerBp.includes("ongoing")) return "Temporary";
      }
    }

    return "Ongoing Temporary";
  };

  // Fetch job details by ID
  useEffect(() => {
    if (!adId) return;

    async function fetchJobDetails() {
      try {
        setLoading(true);
        setError(null);
        // Call the core live job ads API dynamically by specific ID (adId contains dynamic adId parameter)
        const data = await api.get(`/core/live/jobads/${adId}`);
        if (data) {
          setJob(data);
        } else {
          setError("No records were found for this specific Job Ad ID.");
        }
      } catch (err: any) {
        console.error("Error fetching job details:", err);
        setError("Unable to retrieve job details. The job opening may have been closed or is temporarily unavailable.");
      } finally {
        setLoading(false);
      }
    }

    fetchJobDetails();
  }, [adId]);

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
              {/* Category and State tags */}
              <div className="flex flex-wrap items-center justify-center gap-3">
                <div className="inline-flex items-center gap-2 text-xs text-blue-400 font-bold bg-blue-500/10 border border-blue-500/20 px-3.5 py-1.5 rounded-full uppercase tracking-widest shadow-sm shadow-blue-500/5">
                  <Briefcase className="w-3.5 h-3.5 text-blue-400" />
                  <span>{"Live Vacancy"}</span>
                </div>

                {job.state && (
                  <span className={`inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full border ${
                    job.state.toLowerCase() === 'expired'
                      ? 'text-red-400 bg-red-500/10 border-red-500/20'
                      : 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20'
                  }`}>
                    {job.state}
                  </span>
                )}

                {job.reference && (
                  <span className="inline-flex items-center gap-1.5 text-xs text-slate-400 bg-slate-900 border border-white/10 px-3.5 py-1.5 rounded-full tracking-wider font-mono">
                    REF: {job.reference}
                  </span>
                )}
              </div>

              {/* Title Redesigned with Styled Gradient Word Splitting */}
              <h2 className="text-4xl md:text-5xl lg:text-7xl font-heading font-black tracking-tight leading-tight max-w-4xl text-white text-center mx-auto">
                {job.title}
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
                    <div className="text-sm font-bold text-white leading-tight">{getJobAdLocation(job)}</div>
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
                      {getJobAdSalary(job)}
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
                      {getJobAdWorkType(job)}
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
                      Immediate Start
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
            <>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">

               {/* Left Column: Job Description and Shift/Address Details */}
              <div className="lg:col-span-2 space-y-8">

                {/* Description & Summary Overview Card */}
                <section className="p-6 md:p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md shadow-2xl relative overflow-hidden group hover:border-blue-500/20 transition-all duration-300">
                  {/* <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/5 to-transparent rounded-tr-2xl pointer-events-none" /> */}
                  <h2 className="text-xl font-heading font-bold text-white mb-6 flex items-center gap-3 pb-3 border-b border-white/5">
                    <Briefcase className="w-5 h-5 text-blue-400" />
                    Job Description & Overview
                  </h2>
                  <div 
                    className="text-gray-300 leading-relaxed font-body text-sm space-y-4 html-description"
                    dangerouslySetInnerHTML={{ __html: job.description || job.summary || "No description provided." }}
                  />

                  {job.bulletPoints && job.bulletPoints.length > 0 && (
                    <div className="mt-8 pt-6 border-t border-white/5">
                      <h3 className="text-sm font-bold text-white uppercase tracking-widest mb-4">
                        Key Requirements & Bullet Points
                      </h3>
                      <ul className="space-y-3">
                        {job.bulletPoints.map((bp: string, idx: number) => (
                          <li key={idx} className="flex items-start gap-2.5 text-xs text-gray-300 font-body">
                            <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                            <span className="flex-1 leading-relaxed">{bp}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </section>



                {/* Shift Details Widget */}
                {job.workShift && (
                  <section className="p-6 md:p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md shadow-2xl relative overflow-hidden group hover:border-blue-500/20 transition-all duration-300">
                    {/* <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-indigo-500/5 to-transparent rounded-tr-2xl pointer-events-none" /> */}
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

                {/* Key Dates & System Timeline */}
                <section className="p-6 md:p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md shadow-2xl relative overflow-hidden group hover:border-blue-500/20 transition-all duration-300">
                  {/* <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-indigo-500/5 to-transparent rounded-tr-2xl pointer-events-none" /> */}
                  <h2 className="text-xl font-heading font-bold text-white mb-6 flex items-center gap-3 pb-3 border-b border-white/5">
                    <CalendarDays className="w-5 h-5 text-blue-400" />
                    Key Dates & System Timeline
                  </h2>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Created At */}
                    <div className="p-4 rounded-xl bg-slate-900/60 border border-white/5 flex flex-col justify-between relative overflow-hidden">
                      <span className="text-[10px] text-gray-500 uppercase tracking-widest font-bold mb-2">Drafted / Created</span>
                      <div>
                        <div className="text-sm font-bold text-white">
                          {formatDate(job.createdAt)}
                        </div>
                        <p className="text-[10px] text-gray-400 mt-1 font-mono">{job.createdAt ? new Date(job.createdAt).toLocaleTimeString() : "N/A"}</p>
                      </div>
                    </div>

                    {/* Posted At */}
                    <div className="p-4 rounded-xl bg-slate-900/60 border border-white/5 flex flex-col justify-between relative overflow-hidden">
                      <span className="text-[10px] text-gray-500 uppercase tracking-widest font-bold mb-2">Published / Post At</span>
                      <div>
                        <div className="text-sm font-bold text-emerald-400">
                          {formatDate(job.postAt)}
                        </div>
                        <p className="text-[10px] text-gray-400 mt-1 font-mono">{job.postAt ? new Date(job.postAt).toLocaleTimeString() : "N/A"}</p>
                      </div>
                    </div>

                    {/* Expire At */}
                    <div className="p-4 rounded-xl bg-slate-900/60 border border-white/5 flex flex-col justify-between relative overflow-hidden">
                      <span className="text-[10px] text-gray-500 uppercase tracking-widest font-bold mb-2">Expiration Date</span>
                      <div>
                        <div className="text-sm font-bold text-red-400">
                          {formatDate(job.expireAt)}
                        </div>
                        <p className="text-[10px] text-gray-400 mt-1 font-mono">{job.expireAt ? new Date(job.expireAt).toLocaleTimeString() : "N/A"}</p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Underlying Job File Record */}
                {job.job && (
                  <section className="p-6 md:p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md shadow-2xl relative overflow-hidden group hover:border-blue-500/20 transition-all duration-300">
                    {/* <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/5 to-transparent rounded-tr-2xl pointer-events-none" /> */}
                    <h2 className="text-xl font-heading font-bold text-white mb-6 flex items-center gap-3 pb-3 border-b border-white/5">
                      <Briefcase className="w-5 h-5 text-blue-400" />
                      Linked System Job Record
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div className="p-4 rounded-xl bg-slate-900/40 border border-white/5">
                        <div className="text-[10px] text-gray-500 uppercase tracking-widest font-bold mb-1">System Job ID</div>
                        <div className="text-sm font-mono font-bold text-white">{job.job.jobId}</div>
                      </div>
                      <div className="p-4 rounded-xl bg-slate-900/40 border border-white/5">
                        <div className="text-[10px] text-gray-500 uppercase tracking-widest font-bold mb-1">Job Record Title</div>
                        <div className="text-sm font-bold text-white">{job.job.jobTitle || "N/A"}</div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      {/* Job Location Details */}
                      <div className="p-4 rounded-xl bg-slate-900/60 border border-white/5">
                        <span className="text-[10px] text-gray-500 uppercase tracking-widest font-bold mb-1.5 block">Job File Location</span>
                        <div className="text-xs text-white font-bold mb-1">{job.job.location?.name || "N/A"}</div>
                        {/* <div className="text-[10px] text-slate-400 font-mono">ID: {job.job.location?.locationId || "N/A"}</div> */}
                      </div>

                      {/* Job Status Details */}
                      <div className="p-4 rounded-xl bg-slate-900/60 border border-white/5">
                        <span className="text-[10px] text-gray-500 uppercase tracking-widest font-bold mb-1.5 block">Job Record Status</span>
                        <div className="flex items-center gap-2 mb-1">
                          <span className={`w-2 h-2 rounded-full ${job.job.status?.active ? "bg-emerald-500" : "bg-red-500"}`} />
                          <span className="text-xs text-white font-bold">{job.job.status?.name || "N/A"}</span>
                        </div>
                        {/* <div className="text-[10px] text-slate-400 font-mono">ID: {job.job.status?.statusId || "N/A"}</div> */}
                      </div>

                      {/* Job Source */}
                      <div className="p-4 rounded-xl bg-slate-900/60 border border-white/5">
                        <span className="text-[10px] text-gray-500 uppercase tracking-widest font-bold mb-1.5 block">Job Intake Source</span>
                        <div className="text-xs text-white font-bold">{job.job.source || "N/A"}</div>
                        <div className="text-[10px] text-slate-400">System Intake File</div>
                      </div>
                    </div>
                  </section>
                )}

                {/* Client Company Profile */}
                {job.company && (
                  <section className="p-6 md:p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md shadow-2xl relative overflow-hidden group hover:border-blue-500/20 transition-all duration-300">
                    {/* <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-indigo-500/5 to-transparent rounded-tr-2xl pointer-events-none" /> */}
                    <h2 className="text-xl font-heading font-bold text-white mb-6 flex items-center gap-3 pb-3 border-b border-white/5">
                      <Building2 className="w-5 h-5 text-blue-400" />
                      Client Company & Ownership Profile
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-6">
                      {/* Logo and Core Info */}
                      <div className="md:col-span-12 p-5 rounded-xl bg-slate-900/40 border border-white/5 flex items-start gap-4">
                        {job.company.links?.logo ? (
                          <div className="w-16 h-16 rounded-xl border border-white/10 bg-white/5 p-1.5 flex items-center justify-center flex-shrink-0 relative overflow-hidden">
                            <img 
                              src={job.company.links.logo} 
                              alt={`${job.company.name} Logo`} 
                              className="w-full h-full object-contain filter invert brightness-200" 
                              onError={(e) => {
                                e.currentTarget.style.display = 'none';
                              }}
                            />
                            <Building2 className="w-8 h-8 text-gray-500 absolute" />
                          </div>
                        ) : (
                          <div className="w-16 h-16 rounded-xl border border-white/10 bg-white/5 flex items-center justify-center text-blue-400 flex-shrink-0">
                            <Building2 className="w-8 h-8" />
                          </div>
                        )}
                        <div>
                          <div className="text-[10px] text-gray-500 uppercase tracking-widest font-bold mb-1">Company Entity (ID: {job.company.companyId})</div>
                          <h3 className="text-lg font-bold text-white leading-tight">{job.company.name}</h3>
                          <div className="flex flex-wrap gap-2 mt-2">
                            {job.company.status && (
                              <span className={`inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full border ${
                                job.company.status.active 
                                  ? 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20' 
                                  : 'text-red-400 bg-red-500/10 border-red-500/20'
                              }`}>
                                <span className={`w-1.5 h-1.5 rounded-full ${job.company.status.active ? 'bg-emerald-500' : 'bg-red-500'}`} />
                                {job.company.status.name} (ID: {job.company.status.statusId})
                              </span>
                            )}
                            {job.company.status?.default && (
                              <span className="inline-flex items-center text-[10px] text-slate-400 bg-slate-900 border border-white/15 px-2 py-0.5 rounded-full uppercase tracking-wider font-semibold">
                                Default Status
                              </span>
                            )}
                          </div>
                        </div>
                      </div>

                      {/* Company Endpoints */}
                      {/* <div className="md:col-span-4 p-5 rounded-xl bg-slate-900/40 border border-white/5 flex flex-col justify-center gap-3">
                        <span className="text-[10px] text-gray-500 uppercase tracking-widest font-bold block mb-1">System Integrations</span>
                        {job.company.links?.self && (
                          <a href={job.company.links.self} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-[10px] text-blue-400 hover:text-blue-300 hover:underline font-mono truncate block cursor-pointer">
                            <Compass className="w-3.5 h-3.5 flex-shrink-0" />
                            Entity API Link
                          </a>
                        )}
                        {job.company.links?.mainContact && (
                          <a href={job.company.links.mainContact} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-[10px] text-blue-400 hover:text-blue-300 hover:underline font-mono truncate block cursor-pointer">
                            <Compass className="w-3.5 h-3.5 flex-shrink-0" />
                            Main Contact API
                          </a>
                        )}
                      </div> */}
                    </div>

                    {/* Company Owner Profile */}
                    {job.company.owner && (
                      <div className="p-5 rounded-xl bg-slate-900/60 border border-white/5">
                        <h4 className="text-[10px] text-gray-500 uppercase tracking-widest font-bold mb-4 font-heading">
                          Company Account Executive / Owner
                        </h4>
                        
                        <div className="flex flex-col sm:flex-row gap-5 items-start sm:items-center justify-between">
                          <div className="flex items-center gap-3.5">
                            {job.company.owner.links?.photo ? (
                              <div className="w-12 h-12 rounded-full border border-blue-500/25 bg-blue-500/5 overflow-hidden flex-shrink-0">
                                <img src={job.company.owner.links.photo} alt="Owner Photo" className="w-full h-full object-cover" />
                              </div>
                            ) : (
                              <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-blue-600 to-indigo-600 border border-blue-400/30 flex items-center justify-center text-white font-extrabold text-lg flex-shrink-0 shadow-[0_0_15px_rgba(59,130,246,0.15)]">
                                <User className="w-6 h-6 text-white" />
                              </div>
                            )}
                            <div>
                              <div className="text-sm font-bold text-white">{job.company.owner.firstName} {job.company.owner.lastName} (ID: {job.company.owner.userId})</div>
                              <div className="text-xs text-blue-300 font-medium mt-0.5">{job.company.owner.position || job.company.owner.jobTitle || "Director"}</div>
                            </div>
                          </div>

                          <div className="flex flex-wrap gap-2 text-xs w-full sm:w-auto">
                            {job.company.owner.email && (
                              <a href={`mailto:${job.company.owner.email}`} className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-950 hover:bg-slate-900 border border-white/10 text-gray-300 hover:text-white transition-colors cursor-pointer">
                                <Mail className="w-3.5 h-3.5 text-gray-500" />
                                <span>{job.company.owner.email}</span>
                              </a>
                            )}
                            {job.company.owner.phone && (
                              <a href={`tel:${job.company.owner.phone}`} className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-950 hover:bg-slate-900 border border-white/10 text-gray-300 hover:text-white transition-colors cursor-pointer">
                                <Phone className="w-3.5 h-3.5 text-gray-500" />
                                <span>{job.company.owner.phone}</span>
                              </a>
                            )}
                            {job.company.owner.mobile && (
                              <a href={`tel:${job.company.owner.mobile}`} className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-950 hover:bg-slate-900 border border-white/10 text-gray-300 hover:text-white transition-colors cursor-pointer">
                                <Phone className="w-3.5 h-3.5 text-gray-500" />
                                <span>{job.company.owner.mobile} (Mob)</span>
                              </a>
                            )}
                          </div>
                        </div>

                        {/* {job.company.owner.links?.self && (
                          <div className="mt-4 pt-3.5 border-t border-white/5 flex items-center justify-between text-[10px] text-gray-500 font-mono">
                            <span>Owner API Profile:</span>
                            <a href={job.company.owner.links.self} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline truncate max-w-[250px]">{job.company.owner.links.self}</a>
                          </div>
                        )} */}
                      </div>
                    )}
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
                    onClick={() => window.open(`https://apply.jobadder.com/eu3/1108/${job.adId}/l4ctmmabsdnuvmmrlk3jpydtma`, "_blank")}
                    className="apply-now-btn w-full relative overflow-hidden group py-4 px-6 rounded-xl font-extrabold text-center flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-600 bg-[length:200%_auto] hover:bg-right transition-all duration-500 hover:shadow-[0_0_35px_rgba(59,130,246,0.4)] cursor-pointer text-white border border-blue-400/20"
                  >
                    {/* Continuous Lightsweep shimmer */}
                    <div className="absolute inset-y-0 -left-full w-1/2 bg-gradient-to-r from-transparent via-white/15 to-transparent skew-x-[30deg] group-hover:animate-[shimmer_1.6s_ease-out_infinite]" />
                    Apply Now
                    <Send className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-0.5" />
                  </button>

                  <div className="text-center mt-4">
                    <span className="text-[9px] font-bold text-gray-500 uppercase tracking-widest block font-mono">Job Clearance ID: RD-{job.adId || job.jobId}</span>
                  </div>
                </div>

                {/* System Administrators & Operations */}
                {(job.owner || job.createdBy) && (
                  <section className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md shadow-xl group hover:border-blue-500/20 transition-all duration-300">
                    <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-6 font-heading border-b border-white/5 pb-3">
                      Ad Operations & Creators
                    </h3>

                    {/* Owner Details */}
                    {job.owner && (
                      <div className="mb-6 pb-6 border-b border-white/5">
                        <div className="text-[10px] text-gray-500 uppercase tracking-widest font-bold mb-3">System Ad Owner (ID: {job.owner.userId})</div>
                        <div className="flex items-center gap-3 mb-4">
                          <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-blue-600 to-indigo-600 border border-blue-400/30 flex items-center justify-center text-white font-extrabold text-sm flex-shrink-0">
                            {job.owner.firstName[0]}{job.owner.lastName[0]}
                          </div>
                          <div>
                            <div className="text-sm font-bold text-white">{job.owner.firstName} {job.owner.lastName}</div>
                            <div className="text-[10px] text-blue-300 font-semibold">{job.owner.position || job.owner.jobTitle || "Ad Manager"}</div>
                          </div>
                        </div>

                        <div className="space-y-2 text-xs">
                          {job.owner.email && (
                            <a href={`mailto:${job.owner.email}`} className="flex items-center gap-2 text-gray-300 hover:text-blue-400 transition-colors p-2 rounded-lg bg-slate-900/40 border border-white/5 group cursor-pointer">
                              <Mail className="w-3.5 h-3.5 text-gray-500" />
                              <span className="truncate">{job.owner.email}</span>
                            </a>
                          )}
                          {job.owner.phone && (
                            <a href={`tel:${job.owner.phone}`} className="flex items-center gap-2 text-gray-300 hover:text-blue-400 transition-colors p-2 rounded-lg bg-slate-900/40 border border-white/5 group cursor-pointer">
                              <Phone className="w-3.5 h-3.5 text-gray-500" />
                              <span>{job.owner.phone}</span>
                            </a>
                          )}
                          {job.owner.mobile && (
                            <a href={`tel:${job.owner.mobile}`} className="flex items-center gap-2 text-gray-300 hover:text-blue-400 transition-colors p-2 rounded-lg bg-slate-900/40 border border-white/5 group cursor-pointer">
                              <Phone className="w-3.5 h-3.5 text-gray-500" />
                              <span>{job.owner.mobile} (Mobile)</span>
                            </a>
                          )}
                          {/* {job.owner.links?.self && (
                            <div className="pt-2 text-[9px] text-gray-500 font-mono truncate">
                              API Profile: <a href={job.owner.links.self} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">{job.owner.links.self}</a>
                            </div>
                          )} */}
                        </div>
                      </div>
                    )}

                    {/* Created By Details */}
                    {job.createdBy && (
                      <div>
                        <div className="text-[10px] text-gray-500 uppercase tracking-widest font-bold mb-3">Intake File Created By (ID: {job.createdBy.userId})</div>
                        <div className="flex items-center gap-3 mb-4">
                          <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-indigo-600 to-purple-600 border border-indigo-400/30 flex items-center justify-center text-white font-extrabold text-sm flex-shrink-0">
                            {job.createdBy.firstName[0]}{job.createdBy.lastName[0]}
                          </div>
                          <div>
                            <div className="text-sm font-bold text-white">{job.createdBy.firstName} {job.createdBy.lastName}</div>
                            <div className="text-[10px] text-indigo-300 font-semibold">{job.createdBy.position || job.createdBy.jobTitle || "Operations Specialist"}</div>
                          </div>
                        </div>

                        <div className="space-y-2 text-xs">
                          {job.createdBy.email && (
                            <a href={`mailto:${job.createdBy.email}`} className="flex items-center gap-2 text-gray-300 hover:text-blue-400 transition-colors p-2 rounded-lg bg-slate-900/40 border border-white/5 group cursor-pointer">
                              <Mail className="w-3.5 h-3.5 text-gray-500" />
                              <span className="truncate">{job.createdBy.email}</span>
                            </a>
                          )}
                          {job.createdBy.phone && (
                            <a href={`tel:${job.createdBy.phone}`} className="flex items-center gap-2 text-gray-300 hover:text-blue-400 transition-colors p-2 rounded-lg bg-slate-900/40 border border-white/5 group cursor-pointer">
                              <Phone className="w-3.5 h-3.5 text-gray-500" />
                              <span>{job.createdBy.phone}</span>
                            </a>
                          )}
                          {job.createdBy.mobile && (
                            <a href={`tel:${job.createdBy.mobile}`} className="flex items-center gap-2 text-gray-300 hover:text-blue-400 transition-colors p-2 rounded-lg bg-slate-900/40 border border-white/5 group cursor-pointer">
                              <Phone className="w-3.5 h-3.5 text-gray-500" />
                              <span>{job.createdBy.mobile} (Mobile)</span>
                            </a>
                          )}
                        </div>
                      </div>
                    )}
                  </section>
                )}

                {/* Expanded Client Representative Details */}
                {job.contact && (
                  <section className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md shadow-xl group hover:border-blue-500/20 transition-all duration-300">
                    <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-6 font-heading border-b border-white/5 pb-3">
                      Client Contact Record
                    </h3>

                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-14 h-14 rounded-full bg-gradient-to-tr from-emerald-600 to-teal-600 border border-emerald-400/30 flex items-center justify-center text-white font-extrabold text-xl shadow-[0_0_20px_rgba(16,185,129,0.2)] flex-shrink-0">
                        {job.contact.firstName[0]}{job.contact.lastName[0]}
                      </div>
                      <div>
                        <div className="text-base font-bold text-white leading-tight">
                          {job.contact.firstName} {job.contact.lastName} (ID: {job.contact.contactId})
                        </div>
                        <div className="text-[10px] text-emerald-300 font-semibold uppercase tracking-wider mt-1.5 bg-emerald-500/10 border border-emerald-500/25 px-2.5 py-0.5 rounded-full inline-block">
                          {job.company?.name || "Client Contact"}
                        </div>
                      </div>
                    </div>

                    <div className="space-y-3.5 text-xs font-body mb-6">
                      {job.contact.email && (
                        <a
                          href={`mailto:${job.contact.email}`}
                          className="flex items-center gap-3 text-gray-300 hover:text-blue-400 transition-colors p-2.5 rounded-xl bg-slate-900/40 border border-white/5 hover:border-blue-500/20 group cursor-pointer"
                        >
                          <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/5 flex items-center justify-center text-gray-500 group-hover:text-blue-400 group-hover:bg-blue-500/10 transition-colors flex-shrink-0">
                            <Mail className="w-4 h-4" />
                          </div>
                          <span className="truncate font-semibold">{job.contact.email}</span>
                        </a>
                      )}

                      {/* Unsubscribed details */}
                      <div className="flex items-center justify-between p-2.5 rounded-xl bg-slate-900/40 border border-white/5">
                        <span className="text-[10px] text-gray-500 uppercase tracking-widest font-bold">Email Status</span>
                        <span className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider border ${
                          job.contact.unsubscribed 
                            ? 'text-red-400 bg-red-500/10 border-red-500/20' 
                            : 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20'
                        }`}>
                          <span className={`w-1.5 h-1.5 rounded-full ${job.contact.unsubscribed ? 'bg-red-500' : 'bg-emerald-500'}`} />
                          {job.contact.unsubscribed ? "Unsubscribed" : "Subscribed / Active"}
                        </span>
                      </div>

                      {/* Contact Status */}
                      {job.contact.status && (
                        <div className="flex items-center justify-between p-2.5 rounded-xl bg-slate-900/40 border border-white/5">
                          <span className="text-[10px] text-gray-500 uppercase tracking-widest font-bold">Status Details</span>
                          <span className="text-[10px] font-bold text-white uppercase font-mono">
                            {job.contact.status.name} (ID: {job.contact.status.statusId})
                          </span>
                        </div>
                      )}

                      {/* Contact System Links */}
                      {/* {(job.contact.links?.self || job.contact.links?.company) && (
                        <div className="p-2.5 rounded-xl bg-slate-900/40 border border-white/5 text-[9px] text-gray-500 font-mono space-y-1.5">
                          {job.contact.links.self && (
                            <div className="truncate">Contact API: <a href={job.contact.links.self} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 hover:underline">{job.contact.links.self}</a></div>
                          )}
                          {job.contact.links.company && (
                            <div className="truncate">Company API: <a href={job.contact.links.company} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 hover:underline">{job.contact.links.company}</a></div>
                          )}
                        </div>
                      )} */}
                    </div>

                    {/* Contact Owner */}
                    {job.contact.owner && (
                      <div className="p-4 rounded-xl bg-slate-900/60 border border-white/5">
                        <h4 className="text-[10px] text-gray-500 uppercase tracking-widest font-bold mb-3 font-heading">
                          Contact Relationship Manager
                        </h4>
                        <div className="flex items-center gap-3 mb-3">
                          <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-emerald-600 to-teal-600 border border-emerald-400/30 flex items-center justify-center text-white font-extrabold text-xs flex-shrink-0 animate-[pulse_3s_ease-in-out_infinite]">
                            {job.contact.owner.firstName[0]}{job.contact.owner.lastName[0]}
                          </div>
                          <div>
                            <div className="text-xs font-bold text-white leading-tight">{job.contact.owner.firstName} {job.contact.owner.lastName} (ID: {job.contact.owner.userId})</div>
                            <div className="text-[9px] text-emerald-300 font-semibold">{job.contact.owner.position || job.contact.owner.jobTitle || "Relationship Manager"}</div>
                          </div>
                        </div>

                        <div className="space-y-1.5 text-[11px] font-body">
                          {job.contact.owner.email && (
                            <a href={`mailto:${job.contact.owner.email}`} className="flex items-center gap-2 text-gray-300 hover:text-blue-400 transition-colors p-1.5 rounded bg-slate-950 border border-white/5 group cursor-pointer">
                              <Mail className="w-3 h-3 text-gray-500 group-hover:text-blue-400" />
                              <span className="truncate">{job.contact.owner.email}</span>
                            </a>
                          )}
                          {job.contact.owner.phone && (
                            <a href={`tel:${job.contact.owner.phone}`} className="flex items-center gap-2 text-gray-300 hover:text-blue-400 transition-colors p-1.5 rounded bg-slate-950 border border-white/5 group cursor-pointer">
                              <Phone className="w-3 h-3 text-gray-500 group-hover:text-blue-400" />
                              <span>{job.contact.owner.phone}</span>
                            </a>
                          )}
                          {job.contact.owner.mobile && (
                            <a href={`tel:${job.contact.owner.mobile}`} className="flex items-center gap-2 text-gray-300 hover:text-blue-400 transition-colors p-1.5 rounded bg-slate-950 border border-white/5 group cursor-pointer">
                              <Phone className="w-3 h-3 text-gray-500 group-hover:text-blue-400" />
                              <span>{job.contact.owner.mobile} (Mobile)</span>
                            </a>
                          )}
                        </div>
                      </div>
                    )}
                  </section>
                )}

                {/* Syndicated Job Boards Details Card */}
                {/* {job.jobBoards && job.jobBoards.length > 0 && (
                  <section className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md shadow-xl group hover:border-blue-500/20 transition-all duration-300">
                    <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-6 font-heading border-b border-white/5 pb-3">
                      Syndicated Job Boards
                    </h3>
                    <div className="grid grid-cols-2 gap-3">
                      {job.jobBoards.map((board) => (
                        <div key={board.boardId} className="p-3 rounded-xl bg-slate-900/40 border border-white/5 flex flex-col justify-between">
                          <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">{board.name}</span>
                          {board.reference && (
                            <span className="text-[9px] text-blue-400 font-mono mt-1.5 truncate">ID: {board.reference.substring(0, 10)}...</span>
                          )}
                        </div>
                      ))}
                    </div>
                  </section>
                )} */}

                {/* Other Apply Social Channels Card */}
                {job.otherApplyUrls && job.otherApplyUrls.length > 0 && (
                  <section className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md shadow-xl group hover:border-blue-500/20 transition-all duration-300">
                    <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-6 font-heading border-b border-white/5 pb-3">
                      Apply via Other Channels
                    </h3>
                    <div className="grid grid-cols-2 gap-3">
                      {job.otherApplyUrls.map((apply, idx) => (
                        <a
                          key={idx}
                          href={apply.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-3 rounded-xl bg-blue-500/5 hover:bg-blue-500/10 border border-blue-500/20 hover:border-blue-500/40 text-center text-xs font-bold text-blue-300 transition-all cursor-pointer"
                        >
                          {apply.name}
                        </a>
                      ))}
                    </div>
                  </section>
                )}

              </div>

            </div>

            {/* Developer Console & API System Links */}
            {/* {job.links && (
              <section className="mt-8 p-6 md:p-8 rounded-2xl bg-slate-950/60 border border-white/10 backdrop-blur-md shadow-2xl relative overflow-hidden group hover:border-blue-500/20 transition-all duration-300">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/5 to-transparent rounded-tr-2xl pointer-events-none" />
                <h2 className="text-sm font-bold text-white uppercase tracking-widest mb-4 flex items-center gap-3 pb-3 border-b border-white/5">
                  <Compass className="w-4.5 h-4.5 text-blue-400" />
                  Developer Console & API System Links
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl bg-slate-900/60 border border-white/5 flex flex-col justify-between">
                    <span className="text-[10px] text-gray-500 uppercase tracking-widest font-bold block mb-1">Self GET Endpoint</span>
                    <a href={job.links.self} target="_blank" rel="noopener noreferrer" className="text-xs text-blue-400 hover:text-blue-300 font-mono truncate hover:underline block cursor-pointer">
                      {job.links.self}
                    </a>
                  </div>
                  <div className="p-4 rounded-xl bg-slate-900/60 border border-white/5 flex flex-col justify-between">
                    <span className="text-[10px] text-gray-500 uppercase tracking-widest font-bold block mb-1">Applications POST/GET Endpoint</span>
                    <a href={job.links.applications} target="_blank" rel="noopener noreferrer" className="text-xs text-blue-400 hover:text-blue-300 font-mono truncate hover:underline block cursor-pointer">
                      {job.links.applications}
                    </a>
                  </div>
                </div>
              </section>
            )} */}
            </>
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
                  {job && <p className="text-xs text-gray-400 mt-1 truncate">Job Ref: #{job.adId || job.jobId} - {job.title || job.jobTitle}</p>}
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
