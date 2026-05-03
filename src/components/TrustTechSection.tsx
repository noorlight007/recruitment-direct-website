"use client";

import React from "react";

export default function TrustTechSection() {
  return (
    <section className="trusted-section">
      <style jsx>{`
        /* TRUSTED CLIENTS & TECHNOLOGY ONLY */

        .trusted-section {
          position: relative;
          overflow: hidden;
          padding: 90px 20px;
          background:
            radial-gradient(circle at 18% 20%, rgba(30,92,255,0.16), transparent 38%),
            radial-gradient(circle at 82% 80%, rgba(30,92,255,0.10), transparent 45%),
            linear-gradient(135deg, #01030A 0%, #020617 58%, #050C1F 100%);
        }

        .trusted-section h2 {
          color: #FFFFFF;
          text-align: center;
          letter-spacing: 6px;
          font-weight: 800;
          margin-bottom: 55px;
          text-shadow:
            0 0 18px rgba(30,92,255,0.22),
            0 0 34px rgba(30,92,255,0.12);
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
          border: 1px solid transparent;

          display: flex;
          align-items: center;
          justify-content: center;

          background:
            linear-gradient(135deg, #01030A 0%, #020617 55%, #050C1F 100%) padding-box,
            linear-gradient(135deg, #4F8BFF 0%, #1E5CFF 40%, #005BFF 70%, #4F8BFF 100%) border-box;

          box-shadow:
            inset 0 1px 0 rgba(255,255,255,0.08),
            0 0 18px rgba(30,92,255,0.28),
            0 24px 60px rgba(0,0,0,0.62);

          animation: trustedCardGlow 5.5s ease-in-out infinite;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .trusted-card::before {
          content: "";
          position: absolute;
          inset: 0;
          pointer-events: none;
          background:
            radial-gradient(circle at 50% 0%, rgba(30,92,255,0.25), transparent 42%);
          opacity: 0.35;
        }

        .trusted-card:hover {
          transform: translateY(-5px);
          box-shadow:
            inset 0 1px 0 rgba(255,255,255,0.12),
            0 0 30px rgba(30,92,255,0.55),
            0 0 70px rgba(30,92,255,0.28),
            0 34px 80px rgba(0,0,0,0.7);
        }

        .trusted-card img {
          position: relative;
          z-index: 2;
          display: block;
          max-width: 78%;
          height: auto;
          margin: auto;
          animation: trustedLogoFloat 5s ease-in-out infinite;
          filter: brightness(1.08) contrast(1.08);
          transition: transform 0.3s ease, filter 0.3s ease;
        }

        .trusted-card-callpilot {
          cursor: pointer;
          box-shadow:
            inset 0 1px 0 rgba(255,255,255,0.1),
            0 0 24px rgba(30,92,255,0.38),
            0 0 55px rgba(30,92,255,0.18),
            0 28px 70px rgba(0,0,0,0.66);
        }

        .trusted-card-callpilot img {
          animation-delay: 0.8s;
        }

        .trusted-card:hover img {
          transform: scale(1.04);
          filter: brightness(1.18) contrast(1.14);
        }

        .trusted-card:active {
          transform: scale(0.97);
          box-shadow:
            inset 0 5px 14px rgba(0,0,0,0.85),
            inset 0 0 10px rgba(30,92,255,0.5),
            0 0 15px rgba(30,92,255,0.7);
        }

        @keyframes trustedLogoFloat {
          0% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
          100% { transform: translateY(0); }
        }

        @keyframes trustedCardGlow {
          0%, 100% {
            box-shadow:
              inset 0 1px 0 rgba(255,255,255,0.08),
              0 0 18px rgba(30,92,255,0.28),
              0 24px 60px rgba(0,0,0,0.62);
          }

          50% {
            box-shadow:
              inset 0 1px 0 rgba(255,255,255,0.12),
              0 0 28px rgba(30,92,255,0.45),
              0 0 60px rgba(30,92,255,0.22),
              0 28px 70px rgba(0,0,0,0.68);
          }
        }

        @media (max-width: 768px) {
          .trusted-section {
            padding: 70px 16px;
          }

          .trusted-section h2 {
            font-size: 24px;
            letter-spacing: 5px;
          }

          .trusted-card {
            min-height: 210px;
            padding: 30px;
            border-radius: 26px;
          }

          .trusted-card img {
            max-width: 82%;
            animation-duration: 6s;
          }

          .trusted-card:hover {
            transform: none;
          }
        }
      `}</style>

      <h2>TRUSTED CLIENTS & TECHNOLOGY</h2>

      <div className="trusted-card">
        <img src="/images/cirrus-logo.png" alt="Cirrus Consortium Agency Framework Supplier" />
      </div>

      <a href="https://callpilot.pro" target="_blank" rel="noopener noreferrer" className="trusted-link">
        <div className="trusted-card trusted-card-callpilot">
          <img src="/images/callpilot-logo.png" alt="CallPilot AI Phone Calls" />
        </div>
      </a>
    </section>
  );
}
