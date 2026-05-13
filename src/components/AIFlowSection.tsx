"use client";

import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

export default function AIFlowSection() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <>
      <section className="ai-flow-section">
        <div className="ai-flow-inner">
          <button
            className="demo-pill"
            onClick={() => setIsVideoOpen(true)}
          >
            AI Call Demo
          </button>

          <h2>AI Volume Hiring – How It Works</h2>
          <p className="subtitle">
            From job post to fast submission — AI handles the screening, you close the hire.
          </p>

          <div className="flow-grid">
            {/* STEP 1 */}
            <div className="flow-card">
              <div className="step-badge">1</div>
              <div className="icon">▣</div>
              <h3>AI Volume Hiring</h3>
              <div className="flow-item">
                <strong>Job Posted</strong>
                <span>Advert published to JobAdder</span>
              </div>
              <div className="flow-item">
                <strong>Applicant Applies</strong>
                <span>Application received in JobAdder</span>
              </div>
            </div>

            <div className="flow-arrow">→</div>

            {/* STEP 2 */}
            <div className="flow-card">
              <div className="step-badge">2</div>
              <div className="icon">☎</div>
              <h3>AI Screening Calls</h3>
              <div className="flow-item">
                <strong>24/7 AI Screening</strong>
                <span>AI calls applicants automatically</span>
              </div>
              <div className="flow-item">
                <strong>Role-Based Screening</strong>
                <span>Questions matched to the vacancy</span>
              </div>
              <div className="flow-item">
                <strong>WhatsApp / SMS Uploads</strong>
                <span>Documents collected securely</span>
              </div>
            </div>

            <div className="flow-arrow">→</div>

            {/* STEP 3 */}
            <div className="flow-card">
              <div className="step-badge">3</div>
              <div className="icon">☁</div>
              <h3>CRM Integration</h3>
              <div className="flow-item">
                <strong>CRM Sync</strong>
                <span>Responses & documents synced to JobAdder</span>
              </div>
              <div className="flow-item">
                <strong>Consultant Verification</strong>
                <span>Consultant reviews before submission</span>
              </div>
              <div className="flow-item">
                <strong>Fast Applicant Submission</strong>
                <span>Submit to client faster</span>
              </div>
            </div>
          </div>

          <div className="bottom-cta">
            <div>
              <strong>AI does the heavy lifting. You make the placement.</strong>
              <span>Reduce manual admin. Screen more applicants. Submit faster.</span>
            </div>
            <a
              onClick={() => setIsVideoOpen(true)}
              className="cta-button cursor-pointer"
            >
              See Full Workflow →
            </a>
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
