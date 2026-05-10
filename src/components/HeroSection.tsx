/*
Button Colours (System)

→ Primary buttons (main actions)
Use gradient:
linear-gradient(135deg, #2F80ED, #8E2DE2)

⸻

→ Secondary buttons
Dark background + subtle border

* light blue/purple glow on hover

⸻

→ Tertiary buttons (e.g. Watch AI Call)
Transparent / outlined

* subtle glow on hover

⸻

→ Do NOT use:

* Flat blue buttons
* Full green buttons (WhatsApp)
* Different styles on same page

⸻

Rule:
Primary = gradient
Secondary = dark
Tertiary = outline
*/

"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import {
  User,
  Building2,
  Phone,
  Briefcase,
  ArrowRight,
  FileText,
  PhoneCall,
  Activity,
  Search,
  UserCheck,
  ShieldCheck,
  CheckCircle2,
  Play,
  Gauge,
  Users,
  Target,
  Clock,
  Lock,
  CheckCircle
} from "lucide-react";

export default function HeroSection() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <section className="hero-section relative bg-[#020817] pt-12 lg:pt-20 pb-8 overflow-hidden text-white">
      {/* Background Gradients */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-600/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-900/10 rounded-full blur-[120px]" />
        <div className="hero-glow-subtle" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-10">
          {/* Left Column: Content and Action Cards */}
          <div className="flex flex-col">
            <div className="hero-title">
              <h1 className="text-3xl md:text-5xl font-extrabold leading-[1.1] mb-4 lg:mb-5 tracking-tight">
                Recruitment That Moves <br />
                <span className="hero-gradient-text">Faster.</span>
              </h1>
            </div>

            <div className="hero-sub">
              <div className="space-y-1 text-gray-400 text-base mb-4 lg:mb-6 max-w-lg">
                <p>Temporary, contract and permanent staffing delivered with speed, accuracy and full compliance.</p>
                <p className="pt-2 font-medium text-gray-300">Powered by AI, delivered by experienced consultants.</p>
              </div>
            </div>

            <div className="hero-buttons grid gap-3 max-w-[340px]">
              {/* Card 1: AI Hire Now */}
              <a href="/ai-hire-now" className="ai-button group">
                <div className="ai-button-icon">
                  <User className="icon" />
                </div>
                <div className="flex flex-col">
                  <div className="ai-button-title">AI Hire Now</div>
                  <div className="ai-button-subtitle">Existing Clients</div>
                </div>
                <ArrowRight className="ai-button-arrow arrow" />
              </a>

              {/* Card 2: Place Enquiry */}
              <a href="/place-enquiry" className="ai-button group">
                <div className="ai-button-icon">
                  <Building2 className="icon" />
                </div>
                <div className="flex flex-col">
                  <div className="ai-button-title">Place Enquiry</div>
                  <div className="ai-button-subtitle">New Clients</div>
                </div>
                <ArrowRight className="ai-button-arrow arrow" />
              </a>

              {/* Card 3: AI Call Demo */}
              <a href="https://callpilot.pro/" className="ai-button group">
                <div className="ai-button-icon">
                  <Phone className="icon" />
                </div>
                <div className="flex flex-col">
                  <div className="ai-button-title">AI Volume Hiring 24/7 Screening</div>
                  <div className="ai-button-subtitle">Ask AI to call you</div>
                </div>
                <ArrowRight className="ai-button-arrow arrow" />
              </a>

              {/* Card 4: Job Search */}
              <a href="/#job-search" className="ai-button group">
                <div className="ai-button-icon">
                  <Briefcase className="icon" />
                </div>
                <div className="flex flex-col">
                  <div className="ai-button-title">Job Search</div>
                  <div className="ai-button-subtitle">Live Jobs</div>
                </div>
                <ArrowRight className="ai-button-arrow arrow" />
              </a>
            </div>
          </div>

          {/* Right Column: AI Automation Dashboard */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="ai-call-panel bg-[#0b1224] border border-gray-800 rounded-3xl p-6 shadow-2xl relative"
          >
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 mb-6">
              <h3 className="text-lg font-semibold text-gray-300">AI Call Screening & Automation</h3>
              <button
                onClick={() => setIsVideoOpen(true)}
                className="btn btn-primary watch-btn flex items-center justify-center gap-2 text-xs font-semibold cursor-pointer py-2"
              >
                <Play className="w-3.5 h-3.5 fill-current text-white" />
                <span className="text-white">Watch AI Call</span>
              </button>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Timeline Section */}
              <div className="relative space-y-6">
                {/* Vertical Line */}
                <div className="timeline-line absolute left-6 top-4 bottom-4 w-0.5 border-l-2 border-dashed border-gray-700 z-0" />

                {[
                  { icon: <FileText className="w-5 h-5" />, title: "Application Received", status: "completed", color: "text-green-500" },
                  { icon: <PhoneCall className="w-5 h-5" />, title: "AI Call Initiated", status: "completed", color: "text-green-500" },
                  { icon: <Activity className="w-5 h-5" />, title: "AI Screening", time: "01:00", status: "completed", color: "text-green-500" },
                  { icon: <Search className="w-5 h-5" />, title: "Analysis", time: "01:05", status: "current", color: "text-yellow-500" },
                  { icon: <UserCheck className="w-5 h-5" />, title: "Shortlisted", status: "pending", color: "text-green-500" },
                ].map((step, idx) => (
                  <div key={idx} className="flex items-center gap-6 relative z-10">
                    <div className={`timeline-icon w-12 h-12 rounded-full border border-gray-800 bg-[#020817] flex items-center justify-center text-gray-400`}>
                      {step.icon}
                    </div>
                    <div className="flex-1 flex items-center justify-between">
                      <span className="timeline-title text-gray-300 text-sm font-medium">{step.title}</span>
                      <div className="flex items-center gap-3">
                        {step.time && <span className="timeline-time text-blue-400 text-xs">{step.time}</span>}
                        <div className={`w-3 h-3 rounded-full ${step.status === 'completed' ? 'status-green' : step.status === 'current' ? 'status-yellow' : 'status-grey'}`} />
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Score and Checklist Section */}
              <div className="space-y-6">
                {/* Match Score Circle */}
                <div className="match-score-card bg-[#020817] border border-gray-800 rounded-2xl p-6 flex flex-col items-center justify-center text-center">
                  <div className="relative w-28 h-28 mb-4">
                    <svg className="w-full h-full -rotate-90">
                      <circle cx="56" cy="56" r="50" stroke="currentColor" strokeWidth="8" fill="transparent" className="text-gray-800" />
                      <circle cx="56" cy="56" r="50" stroke="currentColor" strokeWidth="8" fill="transparent" strokeDasharray={314} strokeDashoffset={314 * (1 - 0.92)} className="score-ring text-blue-500" strokeLinecap="round" />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="score text-2xl font-bold">92<span className="text-xs">%</span></span>
                    </div>
                  </div>
                  <div className="text-base font-bold text-gray-200">Match Score</div>
                  <div className="score-sub text-blue-400 text-sm font-medium">Strong Match</div>
                </div>

                {/* Checklist */}
                <div className="checklist-card bg-[#020817] border border-gray-800 rounded-2xl p-6 space-y-4">
                  {[
                    { label: "Screened", sub: "Skills verified" },
                    { label: "Compliant", sub: "Right to work confirmed" },
                    { label: "Ready to Submit", sub: "Qualified applicant" }
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-blue-500/10 rounded-lg">
                          {idx === 0 ? <ShieldCheck className="w-5 h-5 text-blue-500" /> : idx === 1 ? <FileText className="w-5 h-5 text-blue-500" /> : <UserCheck className="w-5 h-5 text-blue-500" />}
                        </div>
                        <div>
                          <div className="text-xs font-bold text-gray-200">{item.label}</div>
                          <div className="text-[10px] text-gray-500">{item.sub}</div>
                        </div>
                      </div>
                      <CheckCircle2 className="check-icon w-4 h-4 text-green-500" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>


        {/* Bottom Strip: Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 pt-8 border-t border-gray-800"
        >
          {[
            { icon: <Gauge className="w-6 h-6" />, val: "50%", label: "Filled Faster", sub: "Positions Filled Faster", sub2: "From brief to placement" },
            { icon: <Users className="w-6 h-6" />, val: "10K+", label: "Placements Delivered", sub: "Across multiple", sub2: "sectors" },
            { icon: <Target className="w-6 h-6" />, val: "87%", label: "Match Accuracy", sub: "Quality applicants, faster", sub2: "AI-driven shortlisting" },
            { icon: <Clock className="w-6 h-6" />, val: "70%", label: "Time Saved", sub: "Reduced admin workload", sub2: "Through AI automation" },
            { icon: <CheckCircle className="w-6 h-6" />, val: "100%", label: "Compliance", sub: "Right to work verified", sub2: "Every applicant checked" },
          ].map((stat, idx) => (
            <div key={idx} className="flex flex-col items-center text-center">
              <div className="icon-box mb-4">
                {stat.icon}
              </div>
              <div className="text-3xl font-bold text-white mb-1">{stat.val}</div>
              <div className="text-sm font-bold text-gray-200 mb-2">{stat.label}</div>
              <div className="text-[11px] text-gray-500 leading-tight">
                {stat.sub} <br /> {stat.sub2}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      <Dialog open={isVideoOpen} onOpenChange={setIsVideoOpen}>
        <DialogContent className="max-w-4xl p-0 overflow-hidden bg-black border-gray-800 lg:left-auto lg:right-10 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-0 lg:max-w-[45%] lg:h-auto">
          <DialogHeader className="sr-only">
            <DialogTitle>AI Call Demo Video</DialogTitle>
          </DialogHeader>
          <div className="aspect-video w-full">
            <video
              src="/Video.mov"
              controls
              autoPlay
              className="w-full h-full"
            />
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
}
