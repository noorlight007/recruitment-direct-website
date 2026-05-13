"use client";

import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

export default function EliteAISection() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <>
      <section className="elite-ai-section">
        <div className="elite-wrap">
          <p className="elite-kicker">AI-POWERED HIRING. REAL RESULTS.</p>

          {/* <h1>
            AI-Powered Hiring.
            <span> Real Results.</span>
          </h1> */}
          <h1 className="text-3xl md:text-5xl font-extrabold leading-[1.1] mb-4 lg:mb-5 tracking-tight">
            AI-Powered Hiring. <br />
            <span className="hero-gradient-text">Real Results.</span>
          </h1>

          <p className="elite-sub">
            From application to fast submission — automated by AI, verified by consultants.
          </p>

          <div className="elite-flow">
            <div>Job Posted</div>
            <span>→</span>
            <div>Applicant Applies</div>
            <span>→</span>
            <div>AI Calls</div>
            <span>→</span>
            <div>WhatsApp Uploads</div>
            <span>→</span>
            <div>CRM Sync</div>
            <span>→</span>
            <div>Consultant Submits</div>
          </div>

          <div className="elite-cards">
            {/* AI Volume Hiring */}
            <div className="elite-card featured">
              <div className="badge">Most Popular</div>
              <div className="card-icon">☎</div>
              <h2>AI Volume Hiring</h2>

              <ul>
                <li>AI Applicant Calls</li>
                <li>24/7 Screening</li>
                <li>WhatsApp Uploads</li>
                <li>CRM Automation</li>
                <li>Consultant Verified</li>
              </ul>

              <div className="price">
                <small>Pricing</small>
                <strong>Custom Pricing</strong>
              </div>

              <a
                href="/ai-volume-hiring"
                className="elite-btn primary"
              >
                Start AI Call Journey →
              </a>
            </div>

            {/* Temporary & Contract Staff */}
            <div className="elite-card">
              <div className="card-icon">👥</div>
              <h2>Temporary Staff</h2>

              <ul>
                <li>Rapid Workforce Supply</li>
                <li>Flexible Labour Support</li>
                <li>AI Screening Included</li>
                <li>Reliable Workers</li>
                <li>Fast Turnaround</li>
              </ul>

              <div className="price">
                <small>Pricing</small>
                <strong>Custom Pricing</strong>
              </div>

              <a href="/temporary-staff" className="elite-btn">
                Get Temporary Staff →
              </a>
            </div>

            {/* Permanent Staff */}
            <div className="elite-card">
              <div className="card-icon">◎</div>
              <h2>Permanent Staff</h2>

              <ul>
                <li>Qualified Hiring</li>
                <li>Skilled Professionals</li>
                <li>Consultant Shortlisted</li>
                <li>AI Screening Included</li>
                <li>Faster Placements</li>
              </ul>

              <div className="price">
                <small>Pricing</small>
                <strong>Custom Pricing</strong>
              </div>

              <a href="/parmanent-staff" className="elite-btn">
                Hire Permanent Staff →
              </a>
            </div>
          </div>

          <div className="elite-benefits">
            <div><strong>Save Time</strong><span>Automate repetitive tasks</span></div>
            <div><strong>Improve Quality</strong><span>AI screens for best fit</span></div>
            <div><strong>Reduce Costs</strong><span>Lower admin overhead</span></div>
            <div><strong>Human Control</strong><span>Consultant verified</span></div>
          </div>
        </div>
      </section>

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
    </>
  );
}
