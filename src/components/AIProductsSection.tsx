"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

export default function AIProductsSection() {
  const [activeCard, setActiveCard] = useState(0);
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <section id="ai-products" className="saas-section">
      <div className="container">

        <div className="tag">AI-POWERED HIRING. REAL RESULTS.</div>
        <h2>Three Powerful Ways to Hire Smarter</h2>
        <p className="subtext">Faster Submissions, Human Verified.</p>

        <a 
          onClick={() => setIsVideoOpen(true)}
          className="btn btn-primary btn-saas mb-12 cursor-pointer"
        >
          AI Call Demo
        </a>

        <div className="cards mt-10">

          {/* CARD 1 */}
          <div
            className={`card cursor-pointer transition-all duration-300 ${activeCard === 0 ? 'featured' : ''}`}
            onClick={() => setActiveCard(0)}
          >
            <h3>CallPilot AI</h3>
            <p className="subtitle">AI Applicant Screening Calls</p>

            <ul>
              <li>AI calls applicants</li>
              <li>Role-based screening</li>
              <li>Instant results</li>
              <li>Document requests</li>
            </ul>

            <div className="price">£1.00 / minute</div>

            <Link href="/contact" className="btn btn-primary btn-saas mt-6">Start AI Call Journey →</Link>
          </div>

          {/* CARD 2 */}
          <div
            className={`card cursor-pointer transition-all duration-300 ${activeCard === 1 ? 'featured' : ''}`}
            onClick={() => setActiveCard(1)}
          >
            <h3>Temporary Staff</h3>
            <p className="subtitle">Hourly Workforce Supply</p>

            <ul>
              <li>AI-powered screening included</li>
              <li>Fast turnaround</li>
              <li>Reliable workers</li>
              <li>Competitive hourly rates</li>
            </ul>

            <div className="price muted">Pricing on request</div>

            <Link href="/contact" className="btn btn-primary btn-saas mt-6">Get Temporary Staff →</Link>
          </div>

          {/* CARD 3 */}
          <div
            className={`card cursor-pointer transition-all duration-300 ${activeCard === 2 ? 'featured' : ''}`}
            onClick={() => setActiveCard(2)}
          >
            <h3>Permanent Staff</h3>
            <p className="subtitle">Full Hiring Delivery</p>

            <ul>
              <li>Full hiring support</li>
              <li>AI-powered screening included</li>
              <li>CVs delivered fast</li>
              <li>Transparent fees</li>
            </ul>

            <div className="price muted">Pricing on request</div>

            <Link href="/contact" className="btn btn-primary btn-saas mt-6">Hire Permanent Staff →</Link>
          </div>

        </div>
      </div>

      <Dialog open={isVideoOpen} onOpenChange={setIsVideoOpen}>
        <DialogContent className="max-w-4xl p-0 overflow-hidden bg-black border-gray-800 lg:left-auto lg:right-10 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-0 lg:max-w-[45%] lg:h-auto">
          <DialogHeader className="sr-only">
            <DialogTitle>AI Screening Call Demo</DialogTitle>
          </DialogHeader>
          <div className="aspect-video w-full">
            {isVideoOpen && (
              <video
                src="/Video.mov"
                controls
                autoPlay
                preload="metadata"
                playsInline
                className="w-full h-full"
              >
                Your browser does not support the video tag.
              </video>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
}
