"use client";

import React from "react";

export default function TrustTechSection() {
  return (
    <section className="trusted-section">
      <style jsx>{`
        .trusted-section {
          background: linear-gradient(180deg, #05070d 0%, #070b14 100%);
          padding: 80px 24px;
          text-align: center;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
        }

        .section-title {
          color: #f4f4f2;
          font-size: 20px;
          letter-spacing: 4px;
          text-transform: uppercase;
          margin-bottom: 50px;
          font-weight: 700;
        }

        .trusted-grid {
          display: flex;
          justify-content: center;
          gap: 40px;
          max-width: 1000px;
          margin: 0 auto;
        }

        .trusted-card {
          flex: 1;
          padding: 40px;
          border-radius: 24px;
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          min-height: 180px;
        }

        .trusted-card:hover {
          border-color: rgba(255, 255, 255, 0.3);
          box-shadow: 0 0 30px rgba(255, 255, 255, 0.08);
          transform: translateY(-5px);
        }

        .trusted-card::before {
          content: "";
          position: absolute;
          inset: 0;
          border-radius: 24px;
          background: linear-gradient(120deg, transparent, rgba(255,255,255,0.05), transparent);
          opacity: 0;
          transition: 0.3s;
        }

        .trusted-card:hover::before {
          opacity: 1;
        }

        .trusted-card img {
          max-width: 180px;
          width: 100%;
          height: auto;
          object-fit: contain;
        }

        .subtle-text {
          font-size: 13px;
          color: #cfcfcb;
          margin-top: 15px;
          font-weight: 500;
        }

        @media (max-width: 768px) {
          .trusted-grid {
            flex-direction: column;
            gap: 20px;
          }
          
          .trusted-section {
            padding: 60px 20px;
          }

          .trusted-card {
            padding: 30px;
          }
        }
      `}</style>

      <div className="container">
        <h2 className="section-title">Trusted Clients & Technology</h2>

        <div className="trusted-grid">
          {/* Cirrus */}
          <div className="trusted-card">
            <img src="/images/cirrus-logo.png" alt="Cirrus Consortium" />
          </div>

          {/* CallPilot */}
          <div className="trusted-card">
            <img src="/images/callpilot-logo.png" alt="CallPilot" />
            {/* <p className="subtle-text">AI Call Technology</p> */}
          </div>
        </div>
      </div>
    </section>
  );
}
