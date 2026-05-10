"use client";

import React from "react";

export default function TrustTechSection() {
  return (
    <section className="trusted-section light-section py-24">
      <style jsx>{`
        .trusted-section {
          position: relative;
          overflow: hidden;
          background: #f8fafc !important;
        }

        .trusted-section h2 {
          color: #0f172a;
          text-align: center;
          letter-spacing: 6px;
          font-weight: 800;
          margin-bottom: 55px;
        }

        .trusted-link {
          display: block;
          text-decoration: none;
          color: inherit;
        }

        .trusted-card {
          max-width: 640px;
          min-height: 260px;
          margin: 0 auto 42px;
          padding: 40px;
          position: relative;
          overflow: hidden;
          border-radius: 28px;
          border: 1px solid #e2e8f0;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #ffffff;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .trusted-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
          border-color: #3b82f6;
        }

        .trusted-card img {
          position: relative;
          z-index: 2;
          display: block;
          max-width: 78%;
          height: auto;
          margin: auto;
          filter: grayscale(1) opacity(0.7);
          transition: transform 0.3s ease, filter 0.3s ease;
        }

        .trusted-card:hover img {
          transform: scale(1.04);
          filter: grayscale(0) opacity(1);
        }

        @media (max-width: 768px) {
          .trusted-section h2 {
            font-size: 24px;
            letter-spacing: 5px;
          }
          .trusted-card {
            min-height: 210px;
            padding: 30px;
          }
        }
      `}</style>

      <h2>TRUSTED CLIENTS & TECHNOLOGY</h2>

      <div className="trusted-card">
        <img src="/images/cirrus-logo.png" alt="Cirrus Consortium Agency Framework Supplier" />
      </div>

      <a href="/ai-volume-hiring" className="trusted-link">
        <div className="trusted-card">
          <img src="/images/callpilot-logo.png" alt="CallPilot AI Phone Calls" />
        </div>
      </a>
    </section>
  );
}
