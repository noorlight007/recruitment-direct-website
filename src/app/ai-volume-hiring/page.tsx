"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingElements from "@/components/FloatingElements";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

export default function AIVolumeHiringPage() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background text-white font-sans">
      <Navbar />

      <section className="rd-ai-volume-page pt-32">
        <div className="rd-ai-hero">
          <div className="rd-ai-copy">
            <p className="rd-kicker">AI VOLUME HIRING</p>
            <h1>Automated Screening.<br />Consultant Verified.</h1>
            <p>
              AI handles applicant calls, screening, uploads and workflows — so consultants can deliver the right people, faster.
            </p>

            <div className="rd-actions">
              <a 
                onClick={() => setIsVideoOpen(true)}
                className="rd-btn rd-primary page-btn cursor-pointer"
              >
                ▶ Watch AI Call Demo
              </a>
              <a href="/contact" className="rd-btn page-btn">Start AI Journey →</a>
            </div>

            <div className="rd-mini-benefits">
              <span>24/7 Screening</span>
              <span>Faster Submissions</span>
              <span>Secure Uploads</span>
              <span>Consultant Verified</span>
            </div>
          </div>

          <div className="rd-ai-panel">
            <h3>AI Volume Hiring Workflow</h3>

            <div className="rd-workflow">
              <div><b>Job Posted</b><small>Vacancy goes live</small></div>
              <div><b>Applicant Applies</b><small>Application received</small></div>
              <div className="active"><b>AI Calls Automatically</b><small>Screening starts</small></div>
              <div><b>24/7 AI Screening</b><small>Role-based questions</small></div>
            </div>
          </div>
        </div>

        {/* Feature Strip */}
        <div className="rd-flow-strip mt-10">
          <span>Job Adder Sync</span>
          <b>→</b>
          <span>Automated Call</span>
          <b>→</b>
          <span>WhatsApp Proofs</span>
          <b>→</b>
          <span>Fast Submission</span>
        </div>

        <div className="rd-feature-grid">
          <div className="rd-card">
            <h3>AI Screening</h3>
            <p>Our AI voice assistant calls every applicant within seconds of their application, conducting deep technical and compliance screening.</p>
            <div className="rd-phone-mock">
              "Hi, I'm calling from <span>Recruitment Direct</span> regarding your application..."
            </div>
          </div>

          <div className="rd-card">
            <h3>Secure Uploads</h3>
            <p>Automatically collect Right to Work documents, certifications, and IDs via secure WhatsApp and SMS links immediately after the call.</p>
            <div className="rd-chat-mock">
              [Document Upload Link Sent]
            </div>
          </div>

          <div className="rd-card">
            <h3>CRM Sync</h3>
            <p>All call transcripts, screening scores, and uploaded documents are synced directly to your CRM (JobAdder) in real-time.</p>
            <a href="/contact" className="rd-small-btn">View Integrations</a>
          </div>

          <div className="rd-card">
            <h3>Human Touch</h3>
            <p>Every AI-screened applicant is reviewed by our expert consultants before being submitted to you, ensuring the perfect fit.</p>
            <a href="/contact" className="rd-small-btn">Learn More</a>
          </div>
        </div>

        <div className="rd-package-grid">
          <h2>Scalable Solutions</h2>
          <div className="rd-package-cards">
            <div>
              <h4>Small Projects</h4>
              <p>Perfect for niche roles or occasional hiring needs.</p>
            </div>
            <div>
              <h4>Volume Hiring</h4>
              <p>Designed for large scale contracts and rapid growth.</p>
            </div>
            <div>
              <h4>Enterprise</h4>
              <p>Custom workflows and deep API integrations for large firms.</p>
            </div>
            <div>
              <h4>Managed Service</h4>
              <p>Full end-to-end recruitment process management by RD.</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingElements />

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
    </div>
  );
}
