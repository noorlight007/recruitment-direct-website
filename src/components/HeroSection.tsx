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

import { motion } from "framer-motion";
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
  return (
    <section className="hero-section relative bg-[#020817] pt-32 pb-10 overflow-hidden text-white">
      <style jsx global>{`
        .rd-hero-btn {
          transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
          overflow: hidden;
        }
        .rd-hero-btn:active {
          transform: translateY(1px) scale(0.98);
          box-shadow: inset 0 3px 10px rgba(0, 0, 0, 0.5);
        }
      `}</style>

      {/* Background Gradients */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-600/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-900/10 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-12">
          {/* Left Column: Content and Action Cards */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col"
          >
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-3">
              Recruitment That <br /> Moves Faster.
            </h1>

            <div className="space-y-1 text-gray-400 text-lg mb-6 max-w-lg">
              <p>Temporary, contract and permanent staffing delivered</p>
              <p>with speed, accuracy and full compliance.</p>
              <p className="pt-2 font-medium text-gray-300">Powered by AI, delivered by experienced consultants.</p>
            </div>

            <div className="grid gap-3 max-w-md">
              {/* Card 1: AI Hire Now */}
              <a href="/ai-hire-now" className="rd-hero-btn btn-primary flex items-center justify-between p-4 rounded-xl group">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-white/10 rounded-lg">
                    <User className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-left">
                    <div className="font-bold text-lg leading-tight">AI Hire Now</div>
                    <div className="text-sm text-white/70">Existing Clients</div>
                  </div>
                </div>
                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </a>

              {/* Card 2: Place Enquiry */}
              <a href="/place-enquiry" className="rd-hero-btn btn-secondary flex items-center justify-between p-4 rounded-xl group">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-gray-800 rounded-lg">
                    <Building2 className="w-6 h-6 text-gray-400" />
                  </div>
                  <div className="text-left">
                    <div className="font-bold text-lg leading-tight text-white">Place Enquiry</div>
                    <div className="text-sm text-gray-500">New Clients</div>
                  </div>
                </div>
                <ArrowRight className="w-6 h-6 text-gray-500 group-hover:translate-x-1 transition-transform" />
              </a>

              {/* Card 3: AI Call Enquiry */}
              <a href="https://callpilot.pro/" className="rd-hero-btn btn-secondary flex items-center justify-between p-4 rounded-xl group">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-gray-800 rounded-lg">
                    <Phone className="w-6 h-6 text-gray-400" />
                  </div>
                  <div className="text-left">
                    <div className="font-bold text-lg leading-tight text-white">AI Call Test</div>
                    <div className="text-sm text-gray-500">Ask AI to call you</div>
                  </div>
                </div>
                <ArrowRight className="w-6 h-6 text-gray-500 group-hover:translate-x-1 transition-transform" />
              </a>

              {/* Card 4: Job Search */}
              <a href="/#job-search" className="rd-hero-btn btn-secondary flex items-center justify-between p-4 rounded-xl group">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-gray-800 rounded-lg">
                    <Briefcase className="w-6 h-6 text-gray-400" />
                  </div>
                  <div className="text-left">
                    <div className="font-bold text-lg leading-tight text-white">Job Search</div>
                    <div className="text-sm text-gray-500">Live Jobs</div>
                  </div>
                </div>
                <ArrowRight className="w-6 h-6 text-gray-500 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </motion.div>

          {/* Right Column: AI Automation Dashboard */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-[#0b1224] border border-gray-800 rounded-3xl p-8 shadow-2xl relative"
          >
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
              <h3 className="text-xl font-semibold text-gray-300">AI Call Screening & Automation</h3>
              <a href="/callpilot" className="rd-hero-btn btn-tertiary flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold">
                <Play className="w-4 h-4 fill-current" />
                Watch AI Call
              </a>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Timeline Section */}
              <div className="relative space-y-6">
                {/* Vertical Line */}
                <div className="absolute left-6 top-4 bottom-4 w-0.5 border-l-2 border-dashed border-gray-700 z-0" />

                {[
                  { icon: <FileText className="w-5 h-5" />, title: "Application Received", status: "completed", color: "text-green-500" },
                  { icon: <PhoneCall className="w-5 h-5" />, title: "AI Call Initiated", status: "completed", color: "text-green-500" },
                  { icon: <Activity className="w-5 h-5" />, title: "AI Screening", time: "01:00", status: "completed", color: "text-green-500" },
                  { icon: <Search className="w-5 h-5" />, title: "Analysis", time: "01:05", status: "current", color: "text-yellow-500" },
                  { icon: <UserCheck className="w-5 h-5" />, title: "Shortlisted", status: "pending", color: "text-green-500" },
                ].map((step, idx) => (
                  <div key={idx} className="flex items-center gap-6 relative z-10">
                    <div className={`w-12 h-12 rounded-full border border-gray-800 bg-[#020817] flex items-center justify-center text-gray-400`}>
                      {step.icon}
                    </div>
                    <div className="flex-1 flex items-center justify-between">
                      <span className="text-gray-300 text-sm font-medium">{step.title}</span>
                      <div className="flex items-center gap-3">
                        {step.time && <span className="text-blue-400 text-xs">{step.time}</span>}
                        <div className={`w-3 h-3 rounded-full ${step.status === 'completed' ? 'bg-green-500' : step.status === 'current' ? 'bg-yellow-500' : 'bg-gray-700'}`} />
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Score and Checklist Section */}
              <div className="space-y-6">
                {/* Match Score Circle */}
                <div className="bg-[#020817] border border-gray-800 rounded-2xl p-6 flex flex-col items-center justify-center text-center">
                  <div className="relative w-28 h-28 mb-4">
                    <svg className="w-full h-full -rotate-90">
                      <circle cx="56" cy="56" r="50" stroke="currentColor" strokeWidth="8" fill="transparent" className="text-gray-800" />
                      <circle cx="56" cy="56" r="50" stroke="currentColor" strokeWidth="8" fill="transparent" strokeDasharray={314} strokeDashoffset={314 * (1 - 0.92)} className="text-blue-500" strokeLinecap="round" />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-2xl font-bold">92<span className="text-xs">%</span></span>
                    </div>
                  </div>
                  <div className="text-base font-bold text-gray-200">Match Score</div>
                  <div className="text-blue-400 text-sm font-medium">Strong Match</div>
                </div>

                {/* Checklist */}
                <div className="bg-[#020817] border border-gray-800 rounded-2xl p-6 space-y-4">
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
                      <CheckCircle2 className="w-4 h-4 text-green-500" />
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
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 pt-10 border-t border-gray-800"
        >
          {[
            { icon: <Gauge className="w-6 h-6" />, val: "50%", label: "Faster Fill", sub: "Positions Filled Faster", sub2: "From brief to placement" },
            { icon: <Users className="w-6 h-6" />, val: "10K+", label: "Placements Delivered", sub: "Across multiple", sub2: "sectors" },
            { icon: <Target className="w-6 h-6" />, val: "87%", label: "Match Accuracy", sub: "Quality applicants, faster", sub2: "AI-driven shortlisting" },
            { icon: <Clock className="w-6 h-6" />, val: "70%", label: "Time Saved", sub: "Reduced admin workload", sub2: "Through AI automation" },
            { icon: <CheckCircle className="w-6 h-6" />, val: "100%", label: "Compliance", sub: "Right to work verified", sub2: "Every applicant checked" },
          ].map((stat, idx) => (
            <div key={idx} className="flex flex-col items-center text-center">
              <div className="mb-4 p-3 bg-blue-500/10 rounded-full text-blue-500">
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
    </section>
  );
}
