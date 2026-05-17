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
    <div className="new-ai-section-wrapper">
      <style dangerouslySetInnerHTML={{ __html: `
        .new-ai-section-wrapper {
          font-family: 'Inter', sans-serif;
          background: radial-gradient(circle at top right,#0f2d68 0%,#050816 30%,#02040d 70%);
          color: white;
          overflow-x: hidden;
          padding-bottom: 80px;
        }

        /* HERO */
        .elite-new-hero {
          width: 100%;
          max-width: 1400px;
          margin: auto;
          padding: 80px 40px 120px;
        }

        .elite-new-badge {
          display: inline-block;
          border: 1px solid rgba(59,130,246,0.4);
          padding: 12px 24px;
          border-radius: 999px;
          font-size: 13px;
          letter-spacing: 0.12em;
          margin-bottom: 40px;
          color: #60a5fa;
        }

        .elite-new-hero-grid {
          display: grid;
          grid-template-columns: 1fr 520px;
          gap: 60px;
          align-items: center;
        }

        .elite-new-hero h1 {
          font-size: 88px;
          line-height: 0.95;
          font-weight: 800;
          letter-spacing: -0.04em;
          margin-bottom: 32px;
        }

        .elite-new-hero h1 span {
          color: #3b82f6;
        }

        .elite-new-hero p {
          font-size: 24px;
          line-height: 1.6;
          color: #cbd5e1;
          max-width: 720px;
          margin-bottom: 50px;
        }

        .elite-new-hero-buttons {
          display: flex;
          gap: 20px;
        }

        .elite-new-primary-btn {
          background: #2563eb;
          padding: 18px 34px;
          border-radius: 18px;
          color: white;
          text-decoration: none;
          font-weight: 600;
          font-size: 17px;
          cursor: pointer;
        }

        .elite-new-secondary-btn {
          border: 1px solid rgba(255,255,255,0.1);
          padding: 18px 34px;
          border-radius: 18px;
          color: white;
          text-decoration: none;
          font-weight: 600;
          font-size: 17px;
          background: rgba(255,255,255,0.03);
          cursor: pointer;
        }

        /* DASHBOARD CARD */
        .elite-new-dashboard {
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 30px;
          padding: 40px;
          backdrop-filter: blur(20px);
        }

        .elite-new-score {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 40px;
        }

        .elite-new-score-circle {
          width: 120px;
          height: 120px;
          border-radius: 50%;
          border: 10px solid #22c55e;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 34px;
          font-weight: 700;
        }

        .elite-new-stats {
          display: grid;
          grid-template-columns: repeat(2,1fr);
          gap: 24px;
        }

        .elite-new-stat h3 {
          font-size: 34px;
          margin-bottom: 8px;
        }

        .elite-new-stat p {
          font-size: 14px;
          color: #94a3b8;
        }

        /* WORKFLOW */
        .elite-new-workflow-section {
          margin-top: 100px;
          background: rgba(255,255,255,0.02);
          border: 1px solid rgba(255,255,255,0.06);
          border-radius: 32px;
          padding: 60px;
        }

        .elite-new-workflow-section h2 {
          font-size: 40px;
          margin-bottom: 60px;
        }

        .elite-new-workflow {
          display: grid;
          grid-template-columns: repeat(7,1fr);
          gap: 30px;
          align-items: center;
        }

        .elite-new-step {
          text-align: center;
        }

        .elite-new-step-number {
          color: #3b82f6;
          font-size: 22px;
          margin-bottom: 20px;
          font-weight: 700;
        }

        .elite-new-step-icon {
          width: 100px;
          height: 100px;
          border-radius: 50%;
          border: 1px solid rgba(255,255,255,0.08);
          display: flex;
          align-items: center;
          justify-content: center;
          margin: auto auto 20px;
          font-size: 40px;
          background: rgba(255,255,255,0.02);
        }

        .elite-new-step h3 {
          font-size: 18px;
          margin-bottom: 12px;
        }

        .elite-new-step p {
          font-size: 14px;
          color: #94a3b8;
          line-height: 1.5;
        }

        /* CARDS */
        .elite-new-cards {
          margin-top: 80px;
          display: grid;
          grid-template-columns: repeat(3,1fr);
          gap: 30px;
        }

        .elite-new-card {
          background: rgba(255,255,255,0.02);
          border: 1px solid rgba(255,255,255,0.06);
          border-radius: 28px;
          padding: 40px;
        }

        .elite-new-card h3 {
          font-size: 34px;
          margin-bottom: 20px;
        }

        .elite-new-card p {
          color: #cbd5e1;
          line-height: 1.7;
          font-size: 17px;
          margin-bottom: 40px;
        }

        .elite-new-card a {
          color: #3b82f6;
          text-decoration: none;
          font-size: 18px;
          font-weight: 600;
        }

        /* BENEFITS */
        .elite-new-benefits {
          margin-top: 80px;
          display: grid;
          grid-template-columns: repeat(4,1fr);
          gap: 30px;
        }

        .elite-new-benefit {
          background: rgba(255,255,255,0.02);
          border: 1px solid rgba(255,255,255,0.05);
          border-radius: 24px;
          padding: 30px;
        }

        .elite-new-benefit h4 {
          font-size: 24px;
          margin-bottom: 14px;
        }

        .elite-new-benefit p {
          color: #94a3b8;
          line-height: 1.6;
        }

        /* TRUST */
        .elite-new-trust {
          margin-top: 80px;
          display: grid;
          grid-template-columns: repeat(4,1fr);
          gap: 20px;
        }

        .elite-new-trust-item {
          text-align: center;
          padding: 20px;
          color: #94a3b8;
          font-size: 15px;
        }

        /* MOBILE */
        @media(max-width:1100px){
          .elite-new-hero-grid {
            grid-template-columns: 1fr;
          }
          .elite-new-workflow {
            grid-template-columns: 1fr 1fr;
          }
          .elite-new-cards {
            grid-template-columns: 1fr;
          }
          .elite-new-benefits {
            grid-template-columns: 1fr 1fr;
          }
          .elite-new-trust {
            grid-template-columns: 1fr 1fr;
          }
          .elite-new-hero h1 {
            font-size: 58px;
          }
        }

        @media(max-width:768px){
          .elite-new-hero {
            padding: 40px 24px 80px;
          }
          .elite-new-hero h1 {
            font-size: 46px;
          }
          .elite-new-hero p {
            font-size: 18px;
          }
          .elite-new-workflow {
            grid-template-columns: 1fr;
          }
          .elite-new-benefits {
            grid-template-columns: 1fr;
          }
          .elite-new-trust {
            grid-template-columns: 1fr;
          }
          .elite-new-workflow-section {
            padding: 30px;
          }
          .elite-new-cards {
            gap: 20px;
          }
        }
      `}} />

      <section className="elite-new-hero">
        <div className="elite-new-badge">AI RECRUITMENT PLATFORM</div>

        <div className="elite-new-hero-grid">
          <div>
            <h1>
              Hire Faster.<br />
              <span>Without The Admin.</span>
            </h1>

            <p>
              AI handles applicant calls, qualification scoring, WhatsApp document
              uploads and CRM updates — automatically.
            </p>

            <div className="elite-new-hero-buttons">
              <a href="/ai-hire-now" className="elite-new-primary-btn">
                Book a Demo
              </a>
              <button
                onClick={() => setIsVideoOpen(true)}
                className="elite-new-secondary-btn"
              >
                See How It Works
              </button>
            </div>
          </div>

          <div className="elite-new-dashboard">
            <div className="elite-new-score">
              <div className="elite-new-score-circle">85%</div>
              <div className="elite-new-stats">
                <div className="elite-new-stat">
                  <h3>1,248</h3>
                  <p>Total Calls</p>
                </div>
                <div className="elite-new-stat">
                  <h3>842</h3>
                  <p>Qualified</p>
                </div>
                <div className="elite-new-stat">
                  <h3>126</h3>
                  <p>Hired</p>
                </div>
                <div className="elite-new-stat">
                  <h3>320+</h3>
                  <p>Hours Saved</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="elite-new-workflow-section">
          <h2>The AI Call Journey</h2>
          <div className="elite-new-workflow">
            <div className="elite-new-step">
              <div className="elite-new-step-number">01</div>
              <div className="elite-new-step-icon">💼</div>
              <h3>Job<br/> Posted</h3>
              <p>Vacancy goes live instantly.</p>
            </div>
            <div className="elite-new-step">
              <div className="elite-new-step-number">02</div>
              <div className="elite-new-step-icon">👤</div>
              <h3>Applicant Applies</h3>
              <p>Applications enter automatically.</p>
            </div>
            <div className="elite-new-step">
              <div className="elite-new-step-number">03</div>
              <div className="elite-new-step-icon">📞</div>
              <h3>AI Applicant Call</h3>
              <p>AI contacts applicants instantly.</p>
            </div>
            <div className="elite-new-step">
              <div className="elite-new-step-number">04</div>
              <div className="elite-new-step-icon">🟢</div>
              <h3>Traffic Light Score</h3>
              <p>Qualification scoring completed.</p>
            </div>
            <div className="elite-new-step">
              <div className="elite-new-step-number">05</div>
              <div className="elite-new-step-icon">💬</div>
              <h3>WhatsApp Upload</h3>
              <p>Documents uploaded securely.</p>
            </div>
            <div className="elite-new-step">
              <div className="elite-new-step-number">06</div>
              <div className="elite-new-step-icon">🗂️</div>
              <h3>CRM<br/> Updated</h3>
              <p>Data synced automatically.</p>
            </div>
            <div className="elite-new-step">
              <div className="elite-new-step-number">07</div>
              <div className="elite-new-step-icon">✅</div>
              <h3>Consultant Review</h3>
              <p>Consultants review and submit.</p>
            </div>
          </div>
        </div>

        <div className="elite-new-cards">
          <div className="elite-new-card">
            <h3>AI Volume Hiring</h3>
            <p>
              AI manages high-volume applications, applicant calls, qualification
              scoring and CRM automation at scale.
            </p>
            <a href="/ai-volume-hiring">Start AI Call Journey →</a>
          </div>
          <div className="elite-new-card">
            <h3>Temporary Staff</h3>
            <p>
              Rapid access to temporary workers when demand increases across
              construction, logistics and industrial sectors.
            </p>
            <a href="/temporary-staff">Get Temporary Staff →</a>
          </div>
          <div className="elite-new-card">
            <h3>Permanent Staff</h3>
            <p>
              CVs, qualifications and applicant information submitted quickly for
              faster permanent placements.
            </p>
            <a href="/parmanent-staff">Hire Permanent Staff →</a>
          </div>
        </div>

        <div className="elite-new-benefits">
          <div className="elite-new-benefit">
            <h4>Save Time</h4>
            <p>Reduce repetitive admin and speed up recruitment workflows.</p>
          </div>
          <div className="elite-new-benefit">
            <h4>Improve Quality</h4>
            <p>Structured AI conversations identify stronger applicants faster.</p>
          </div>
          <div className="elite-new-benefit">
            <h4>Reduce Costs</h4>
            <p>Lower admin overheads and improve consultant efficiency.</p>
          </div>
          <div className="elite-new-benefit">
            <h4>Human Control</h4>
            <p>AI handles automation while consultants make final decisions.</p>
          </div>
        </div>

        <div className="elite-new-trust">
          <div className="elite-new-trust-item">Enterprise Grade Security</div>
          <div className="elite-new-trust-item">GDPR Compliant</div>
          <div className="elite-new-trust-item">99.9% Uptime</div>
          <div className="elite-new-trust-item">Dedicated Support</div>
        </div>
      </section>

      <Dialog open={isVideoOpen} onOpenChange={setIsVideoOpen}>
        <DialogContent className="max-w-4xl p-0 overflow-hidden bg-black border-gray-800 lg:left-auto lg:right-10 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-0 lg:max-w-[45%] lg:h-auto">
          <DialogHeader className="sr-only">
            <DialogTitle>AI Call Demo Video</DialogTitle>
          </DialogHeader>
          <div className="aspect-video w-full">
            <video src="/Video.mov" controls autoPlay className="w-full h-full" />
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
