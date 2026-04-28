"use client";

import React from "react";

export default function TrustTechSection() {
  return (
    <section className="trust-tech-section">
      <style jsx>{`
        .trust-tech-section {
          padding: 22px 18px;
          background: #050b18;
        }

        .trust-tech-card {
          border: 1px solid rgba(0, 150, 255, 0.45);
          border-radius: 24px;
          padding: 24px 18px;
          background: linear-gradient(135deg, rgba(0, 120, 255, 0.08), rgba(155, 40, 255, 0.08));
          box-shadow: 0 0 25px rgba(0, 140, 255, 0.15);
          text-align: center;
          max-width: 1200px;
          margin: 0 auto;
        }

        .trust-tech-card h2 {
          color: #28a8ff;
          font-size: 15px;
          letter-spacing: 4px;
          text-transform: uppercase;
          margin-bottom: 24px;
          font-weight: 700;
        }

        .trust-tech-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 18px;
        }

        .trust-tech-block {
          width: 48%;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .label {
          color: #aeb8cc;
          font-size: 14px;
          margin-bottom: 10px;
        }

        .client-logo {
          max-width: 145px;
          width: 100%;
          height: auto;
        }

        .callpilot-logo {
          max-width: 155px;
          width: 100%;
          height: auto;
        }

        .small-text {
          color: #d7dbea;
          font-size: 13px;
          margin-top: 12px;
        }

        .divider {
          width: 1px;
          height: 115px;
          background: rgba(255, 255, 255, 0.25);
        }

        @media (max-width: 600px) {
          .trust-tech-section {
            padding: 18px 14px;
          }

          .trust-tech-card {
            padding: 22px 14px;
          }

          .trust-tech-card h2 {
            font-size: 13px;
            letter-spacing: 3px;
          }

          .trust-tech-row {
            gap: 12px;
          }

          .client-logo {
            max-width: 130px;
          }

          .callpilot-logo {
            max-width: 140px;
          }

          .small-text {
            font-size: 12px;
          }
        }
      `}</style>

      <div className="trust-tech-card">
        <h2>Trusted Client & Technology</h2>

        <div className="trust-tech-row">
          <div className="trust-tech-block">
            <p className="label">Framework Client</p>
            <img src="/images/cirrus-logo.png" alt="Cirrus" className="client-logo" />
            <p className="small-text">Client of Recruitment Direct</p>
          </div>

          <div className="divider"></div>

          <div className="trust-tech-block">
            <p className="label">Powered By</p>
            <img src="/images/callpilot-logo.png" alt="CallPilot AI" className="callpilot-logo" />
            <p className="small-text">AI phone call platform</p>
          </div>
        </div>
      </div>
    </section>
  );
}
