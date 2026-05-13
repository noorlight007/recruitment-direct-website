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
    <section className="hero-section text-white">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column: Content and Primary Actions */}
          <div className="flex flex-col">
            <h1 className="hero-heading">
              Recruitment That Moves <br />
              Faster.
            </h1>

            <p className="hero-subtext">
              Temporary, contract and permanent staffing delivered with speed, accuracy and full compliance.
              Powered by AI, delivered by experienced consultants.
            </p>

            <div className="button-group mb-8">
              <button onClick={() => setIsVideoOpen(true)} className="btn-secondary">
                <Play className="mr-2 w-4 h-4 fill-current" />
                Watch AI Call
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
              {/* Button 1: Request Staff */}
              <a href="/ai-hire-now" className="btn-primary flex flex-col !h-auto !py-3 !px-4 text-center items-center group w-full">
                <span className="text-base font-bold">Request Staff</span>
                <span className="text-[10px] opacity-80 font-semibold uppercase tracking-widest mt-0.5">Existing Clients</span>
              </a>

              {/* Button 2: Place Enquiry */}
              <a href="/place-enquiry" className="btn-primary flex flex-col !h-auto !py-3 !px-4 text-center items-center group w-full">
                <span className="text-base font-bold">Place Enquiry</span>
                <span className="text-[10px] opacity-80 font-semibold uppercase tracking-widest mt-0.5">New Clients</span>
              </a>

              {/* Button 3: Job Search */}
              <a href="/#job-search" className="btn-primary flex flex-col !h-auto !py-3 !px-4 text-center items-center group w-full">
                <span className="text-base font-bold">Job Search</span>
                <span className="text-[10px] opacity-80 font-semibold uppercase tracking-widest mt-0.5">Live Jobs</span>
              </a>
            </div>

          </div>

          {/* Right Column: AI Automation Dashboard */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="hero-box relative overflow-hidden"
          >
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-xl font-bold">AI Screening Live</h3>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-xs font-medium text-green-500 uppercase tracking-wider">System Active</span>
              </div>
            </div>

            <div className="space-y-6">
              {[
                { icon: <FileText className="w-5 h-5" />, title: "Application Received", status: "completed" },
                { icon: <PhoneCall className="w-5 h-5" />, title: "AI Call Initiated", status: "completed" },
                { icon: <Activity className="w-5 h-5" />, title: "AI Screening Analysis", status: "current" },
                { icon: <UserCheck className="w-5 h-5" />, title: "Automated Shortlisting", status: "pending" },
              ].map((step, idx) => (
                <div key={idx} className="flex items-center gap-4">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center border ${step.status === 'completed' ? 'border-blue-500 bg-blue-500/10 text-blue-400' :
                      step.status === 'current' ? 'border-yellow-500 bg-yellow-500/10 text-yellow-400' :
                        'border-gray-800 bg-gray-900 text-gray-600'
                    }`}>
                    {step.icon}
                  </div>
                  <div className="flex-1">
                    <div className="text-sm font-medium">{step.title}</div>
                    <div className="text-[10px] text-gray-500 uppercase tracking-widest">{step.status}</div>
                  </div>
                  {step.status === 'completed' && <CheckCircle2 className="w-4 h-4 text-green-500" />}
                </div>
              ))}
            </div>

            <div className="mt-8 pt-8 border-t border-white/5 grid grid-cols-2 gap-4">
              <div className="p-2 rounded-xl bg-white/5 border border-white/10 items-center justify-center flex flex-col">
                <div className="text-2xl font-bold">92%</div>
                <div className="text-[10px] text-gray-500 uppercase tracking-widest">Match Accuracy</div>
              </div>
              <div className="p-4 rounded-xl bg-white/5 border border-white/10 items-center justify-center flex flex-col">
                <div className="text-2xl font-bold">58s</div>
                <div className="text-[10px] text-gray-500 uppercase tracking-widest">Screening Time</div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Strip: Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mt-20">
          {[
            { val: "50%", label: "Filled Faster" },
            // { val: "10K+", label: "Placements" },
            { val: "87%", label: "Accuracy" },
            { val: "70%", label: "Time Saved" },
            { val: "100%", label: "Compliance" },
          ].map((stat, idx) => (
            <div key={idx} className="hero-box p-6 flex flex-col items-center text-center">
              <div className="text-2xl font-bold text-white mb-1">{stat.val}</div>
              <div className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      <Dialog open={isVideoOpen} onOpenChange={setIsVideoOpen}>
        <DialogContent className="max-w-4xl p-0 overflow-hidden bg-black border-gray-800">
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
