"use client";

import React from "react";

const logos = [
  { src: "/images/cirrus-logo.png", alt: "Cirrus Consortium" },
  { src: "/assets/compliance/rec-member.png", alt: "REC Corporate Member" },
  { src: "/assets/compliance/cqs-iso9001.png", alt: "ISO 9001" },
  { src: "/assets/compliance/constructionline-gold.png", alt: "Constructionline Gold" },
  { src: "/images/callpilot-logo.png", alt: "CallPilot" },
];

export default function TrustTechSection() {
  return (
    <section className="trusted-tech-section">
      <style jsx>{`
        .trusted-tech-section {
          background: linear-gradient(180deg, #020202 0%, #05070A 60%, #0B1622 100%);
          padding: 70px 20px;
          overflow: hidden;
          text-align: center;
        }

        .trusted-tech-inner {
          max-width: 1280px;
          margin: 0 auto;
        }

        .trusted-tech-title {
          margin: 0;
          color: #FFFFFF !important;
          font-size: clamp(30px, 5vw, 58px);
          line-height: 1.08;
          font-weight: 800;
          letter-spacing: 1px;
        }

        .trusted-tech-title span {
          color: #008CFF !important;
        }

        .trusted-tech-subtitle {
          max-width: 760px;
          margin: 20px auto 45px;
          color: #D2DAE3 !important;
          font-size: clamp(16px, 2vw, 22px);
          line-height: 1.5;
        }

        .logo-slider {
          width: 100%;
          overflow: hidden;
          position: relative;
          padding: 28px 0;
          border-top: 1px solid rgba(0, 140, 255, 0.18);
          border-bottom: 1px solid rgba(0, 140, 255, 0.18);
        }

        .logo-track {
          display: flex;
          align-items: center;
          gap: 70px;
          width: max-content;
          animation: moveLogosLeftToRight 30s linear infinite;
        }

        .logo-track img {
          max-height: 48px;
          width: auto;
          object-fit: contain;
          opacity: 0.94;
          transition: transform 0.3s ease, filter 0.3s ease;
        }

        .logo-track img:hover {
          transform: scale(1.1);
          filter: brightness(1.2);
        }

        @keyframes moveLogosLeftToRight {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }

        @media (max-width: 768px) {
          .trusted-tech-section {
            padding: 60px 18px;
          }

          .trusted-tech-title {
            font-size: 34px;
          }

          .trusted-tech-subtitle {
            font-size: 17px;
            margin-bottom: 38px;
          }

          .logo-track {
            gap: 42px;
          }

          .logo-track img {
            max-height: 38px;
          }
        }
      `}</style>

      <div className="trusted-tech-inner">
        <h2 className="trusted-tech-title">
          TRUSTED CLIENTS &<br />
          <span>TECHNOLOGY</span>
        </h2>

        <p className="trusted-tech-subtitle">
          Delivering compliant, scalable and intelligent recruitment solutions.
        </p>

        <div className="logo-slider">
          <div className="logo-track">
            {/* Double the logos for infinite scroll effect */}
            {[...logos, ...logos].map((logo, idx) => (
              <img key={idx} src={logo.src} alt={logo.alt} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

