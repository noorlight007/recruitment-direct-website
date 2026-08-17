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
          <div className="flex flex-col text-left items-start">
            <h1 className="hero-heading text-left">
              Recruitment Across the UK
            </h1>

            <h2 className="text-xl md:text-2xl font-bold text-[#60A5FA] mt-3 mb-2 tracking-tight glow-text text-left mr-auto lg:mx-0 w-full">
              Fast, reliable staffing solutions since 2006.
            </h2>

            <p className="hero-subtext text-left">
              Temporary, contract and permanent staffing delivered with speed, accuracy and full compliance, delivered by experienced consultants.
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
              <a href="/job_details" className="btn-primary flex flex-col !h-auto !py-3 !px-4 text-center items-center group w-full">
                <span className="text-base font-bold">Job Search</span>
                <span className="text-[10px] opacity-80 font-semibold uppercase tracking-widest mt-0.5">Live Jobs</span>
              </a>
            </div>

          </div>

          {/* Right Column: 24/7 Applicant Call Board Animation */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full flex justify-center items-center"
          >
            <iframe
              src="/assets/rd1-24-7-live-call.html"
              style={{ width: "100%", height: "520px", border: 0 }}
              title="RD1 24/7 Applicant Call"
              scrolling="no"
            />
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
