"use client";

import React from "react";

export default function Footer() {
  return (
    <>
      <style jsx global>{`
        .rd-premium-wrap {
          background: radial-gradient(
              circle at top,
              rgba(38, 112, 255, 0.1) 0%,
              rgba(38, 112, 255, 0) 34%
            ),
            linear-gradient(180deg, #040b18 0%, #020814 100%);
          padding: 64px 24px 0;
          border-top: 1px solid rgba(255, 255, 255, 0.06);
          font-family: Inter, ui-sans-serif, system-ui, -apple-system,
            BlinkMacSystemFont, "Segoe UI", sans-serif;
        }
        .rd-premium-container {
          max-width: 1320px;
          margin: 0 auto;
        }
        .rd-premium-head {
          text-align: center;
          margin-bottom: 38px;
        }
        .rd-premium-head h2 {
          margin: 0 0 12px;
          color: #fff;
          font-size: clamp(28px, 3.5vw, 48px);
          line-height: 1.08;
          font-weight: 700;
          letter-spacing: -0.03em;
        }
        .rd-premium-head p {
          max-width: 860px;
          margin: 0 auto;
          color: rgba(255, 255, 255, 0.72);
          font-size: 17px;
          line-height: 1.7;
          font-weight: 400;
        }
        .rd-cards {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
          gap: 20px;
          margin-bottom: 32px;
        }
        .rd-card {
          background: linear-gradient(
            180deg,
            rgba(255, 255, 255, 0.04) 0%,
            rgba(255, 255, 255, 0.02) 100%
          );
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 28px;
          padding: 22px 20px 18px;
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.28),
            inset 0 1px 0 rgba(255, 255, 255, 0.04);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          text-align: center;
          transition: transform 0.25s ease, box-shadow 0.25s ease,
            border-color 0.25s ease;
        }
        .rd-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 18px 50px rgba(0, 0, 0, 0.34),
            0 0 30px rgba(54, 124, 255, 0.1),
            inset 0 1px 0 rgba(255, 255, 255, 0.06);
          border-color: rgba(94, 168, 255, 0.28);
        }
        .rd-card-logo {
          height: 130px;
          border-radius: 20px;
          background: #fff;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 18px;
          padding: 16px;
        }
        .rd-card-logo img {
          max-width: 180px;
          max-height: 92px;
          width: auto;
          height: auto;
          display: block;
          object-fit: contain;
        }
        .rd-card h3 {
          margin: 0 0 6px;
          color: #fff;
          font-size: 19px;
          line-height: 1.2;
          font-weight: 600;
        }
        .rd-card .rd-sub {
          margin: 0 0 4px;
          color: rgba(255, 255, 255, 0.72);
          font-size: 14px;
          line-height: 1.5;
        }
        .rd-card .rd-num {
          margin: 0 0 16px;
          color: #5ea8ff;
          font-size: 17px;
          font-weight: 500;
          line-height: 1.3;
        }
        .rd-card .rd-btn-wrap {
          padding-top: 16px;
          border-top: 1px solid rgba(255, 255, 255, 0.08);
        }
        .rd-card .rd-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          width: 100%;
          min-height: 54px;
          border-radius: 16px;
          border: 1px solid rgba(94, 168, 255, 0.85);
          color: #fff;
          text-decoration: none;
          font-size: 15px;
          font-weight: 500;
          letter-spacing: -0.01em;
          background: linear-gradient(
            180deg,
            rgba(94, 168, 255, 0.08),
            rgba(94, 168, 255, 0.02)
          );
          box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.06),
            0 0 18px rgba(54, 124, 255, 0.1);
          transition: all 0.18s ease;
        }
        .rd-card .rd-btn:hover {
          border-color: #5ea8ff;
          box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.08),
            0 0 26px rgba(54, 124, 255, 0.3), 0 8px 30px rgba(0, 0, 0, 0.2);
          transform: translateY(-3px);
        }
        .rd-card .rd-btn:active {
          transform: translateY(1px) scale(0.97);
          box-shadow: inset 0 3px 8px rgba(0, 0, 0, 0.45),
            0 0 12px rgba(54, 124, 255, 0.25);
          border-color: #3b82f6;
        }
        .rd-btn-arrow {
          font-size: 22px;
          line-height: 1;
        }
        .rd-trust {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 14px;
          padding-bottom: 40px;
          color: rgba(255, 255, 255, 0.72);
          font-size: 15px;
          text-align: center;
        }
        .rd-trust-icon {
          color: #5ea8ff;
          font-size: 20px;
          line-height: 1;
        }
        .rd-footer {
          border-top: 1px solid rgba(255, 255, 255, 0.08);
          padding: 38px 0 28px;
        }
        .rd-footer-grid {
          display: grid;
          grid-template-columns: 1.5fr 0.8fr 1.2fr;
          gap: clamp(30px, 4vw, 60px) !important;
          align-items: start;
          margin-bottom: 26px;
          width: 100%;
        }
        .rd-footer-grid > * {
          text-align: left;
        }
        .rd-footer-logo {
          max-width: 250px;
          width: 100%;
          height: auto;
          display: block;
          margin-bottom: 18px;
        }
        .rd-footer-brand {
          min-width: 260px;
        }
        .rd-footer-brand p {
          margin: 0;
          color: rgba(255, 255, 255, 0.9);
          font-size: 15px;
          line-height: 1.8;
          max-width: 100%;
        }
        .rd-footer h4 {
          margin: 0 0 16px;
          color: #fff;
          font-size: 16px;
          font-weight: 700;
          letter-spacing: -0.01em;
          text-align: left;
        }
        .rd-footer-links {
          display: flex;
          flex-direction: column;
          gap: 12px;
          text-align: left;
        }
        .rd-footer a,
        .rd-footer p {
          color: rgba(255, 255, 255, 0.85);
          text-decoration: none;
          font-size: 15px;
          line-height: 1.8;
          position: relative;
          transition: all 0.2s ease;
          text-align: left;
        }
        .rd-footer a:hover {
          color: #fff;
        }
        .rd-footer a::after {
          content: "";
          position: absolute;
          left: 0;
          bottom: -2px;
          width: 0%;
          height: 1px;
          background: #5ea8ff;
          transition: width 0.25s ease;
        }
        .rd-footer a:hover::after {
          width: 100%;
        }
        .rd-footer a:active {
          opacity: 0.7;
          transform: translateY(1px);
        }
        .rd-whatsapp {
          color: #39e58c !important;
          font-weight: 600;
        }
        .rd-footer-bottom {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 20px;
          padding-top: 18px;
          border-top: 1px solid rgba(255, 255, 255, 0.06);
          flex-wrap: wrap;
        }
        .rd-footer-bottom div {
          color: rgba(255, 255, 255, 0.55);
          font-size: 13px;
        }

        /* ============================= */
        /*  BUTTON SYSTEM */
        /* ============================= */
        :root {
          --bg:#050816;
          --panel:#081224;
          --panel-2:#0a1328;
          --line:rgba(125,157,255,.16);
          --line-strong:rgba(171,110,255,.28);
          --text:#f5f7ff;
          --muted:#b9c3da;
          --soft:#8b97b4;
          --blue:#1f7bff;
          --blue-2:#3d8cff;
          --purple:#b23cff;
          --purple-2:#7a3cff;
          --green:#39e58c;
          --green-2:#1ecf73;
          --shadow:0 20px 60px rgba(0,0,0,.45);
          --glow-blue:0 0 0 1px rgba(52,124,255,.28), 0 0 28px rgba(52,124,255,.14);
          --glow-purple:0 0 0 1px rgba(178,60,255,.30), 0 0 36px rgba(178,60,255,.16);
          --radius-xl:28px;
          --radius-lg:20px;
          --radius-md:16px;
          --radius-sm:14px;
        }

        .ask-ai-steve-wrap,
        .ask-ai-steve-wrap * {
          box-sizing: border-box;
          font-family: 'Inter', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
        }

        .ask-ai-steve-wrap {
          width: 100%;
          max-width: 560px;
          margin: 0;
        }

        .ask-ai-steve-card {
          position: relative;
          overflow: hidden;
          background:
            radial-gradient(circle at 85% 10%, rgba(178,60,255,.18), transparent 28%),
            radial-gradient(circle at 8% 0%, rgba(31,123,255,.16), transparent 24%),
            linear-gradient(180deg, rgba(10,19,40,.96) 0%, rgba(6,12,28,.98) 100%);
          border: 1px solid rgba(129,152,255,.18);
          border-radius: var(--radius-xl);
          box-shadow: var(--shadow), var(--glow-purple);
          padding: 30px 28px 22px;
        }

        .ask-ai-steve-card::before {
          content: "";
          position: absolute;
          inset: 0;
          border-radius: inherit;
          padding: 1px;
          background: linear-gradient(135deg, rgba(38,132,255,.95), rgba(177,60,255,.9));
          -webkit-mask:
            linear-gradient(#fff 0 0) content-box,
            linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          pointer-events: none;
          opacity: .55;
        }

        .ask-ai-steve-top {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 18px;
          margin-bottom: 18px;
        }

        .ask-ai-steve-copy {
          min-width: 0;
          flex: 1 1 auto;
        }

        .ask-ai-steve-kicker {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 8px;
        }

        .ask-ai-steve-star {
          width: 18px;
          height: 18px;
          flex: 0 0 18px;
          color: #59a6ff;
          filter: drop-shadow(0 0 10px rgba(89,166,255,.35));
        }

        .ask-ai-steve-title {
          margin: 0;
          font-size: clamp(34px, 4vw, 52px);
          line-height: 1.02;
          letter-spacing: -0.035em;
          font-weight: 800;
          color: var(--text);
        }

        .ask-ai-steve-status {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          margin-top: 14px;
          font-size: 15px;
          line-height: 1;
          font-weight: 600;
          color: var(--green);
        }

        .ask-ai-steve-status-dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: linear-gradient(180deg, #54f3a1 0%, #15c765 100%);
          box-shadow: 0 0 0 4px rgba(57,229,140,.10), 0 0 18px rgba(57,229,140,.38);
          flex: 0 0 10px;
        }

        .ask-ai-steve-avatar {
          flex: 0 0 132px;
          width: 132px;
          height: 132px;
          border-radius: 24px;
          display: grid;
          place-items: center;
          background:
            radial-gradient(circle at 50% 38%, rgba(90,182,255,.34), transparent 22%),
            radial-gradient(circle at 50% 20%, rgba(182,61,255,.24), transparent 40%),
            linear-gradient(180deg, rgba(16,27,52,.82), rgba(10,16,34,.92));
          border: 1px solid rgba(161,120,255,.24);
          box-shadow: inset 0 1px 0 rgba(255,255,255,.04), 0 0 28px rgba(178,60,255,.18);
        }

        .ask-ai-steve-avatar img {
          width: 100%;
          height: 100%;
          object-fit: contain;
          display: block;
          border-radius: 24px;
        }

        .ask-ai-steve-divider {
          height: 1px;
          width: 100%;
          background: linear-gradient(90deg, rgba(76,114,255,.28), rgba(178,60,255,.18), rgba(255,255,255,0));
          margin: 6px 0 18px;
        }

        .ask-ai-steve-sub {
          margin: 0 0 20px;
          max-width: 330px;
          color: var(--muted);
          font-size: 18px;
          line-height: 1.55;
          font-weight: 500;
          letter-spacing: -0.015em;
        }

        .ask-ai-steve-actions {
          display: grid;
          gap: 14px;
        }

        .ask-ai-btn {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          width: 100%;
          text-decoration: none;
          border-radius: 20px;
          padding: 18px 20px;
          transition: transform .22s ease, box-shadow .22s ease, border-color .22s ease, background .22s ease;
          will-change: transform;
          overflow: hidden;
        }

        .ask-ai-btn:hover {
          transform: translateY(-2px);
        }

        .ask-ai-btn-primary {
          background: linear-gradient(90deg, #166cff 0%, #2b6fff 28%, #6c42ff 68%, #b13dff 100%);
          border: 1px solid rgba(255,255,255,.14);
          box-shadow: 0 12px 30px rgba(41,91,255,.28), 0 0 0 1px rgba(255,255,255,.06);
        }

        .ask-ai-btn-primary::after {
          content: "";
          position: absolute;
          top: 0;
          left: -120%;
          width: 60%;
          height: 100%;
          background: linear-gradient(120deg, transparent, rgba(255,255,255,0.35), transparent);
          transform: skewX(-20deg);
          transition: 0.6s;
        }

        .ask-ai-btn-primary:hover {
          box-shadow: 0 18px 42px rgba(84,73,255,.34), 0 0 24px rgba(177,61,255,.20);
        }

        .ask-ai-btn-primary:hover::after {
          left: 130%;
        }

        .ask-ai-btn-secondary {
          background: linear-gradient(180deg, rgba(8,16,34,.98), rgba(5,12,26,.98));
          border: 1px solid rgba(71,126,255,.38);
          box-shadow: 0 10px 24px rgba(0,0,0,.24);
        }

        .ask-ai-btn-secondary:hover {
          border-color: rgba(114,149,255,.62);
          box-shadow: 0 14px 32px rgba(25,72,255,.16), 0 0 20px rgba(52,124,255,.10);
        }

        .ask-ai-btn-left {
          display: flex;
          align-items: center;
          gap: 16px;
          min-width: 0;
        }

        .ask-ai-btn-icon {
          width: 54px;
          height: 54px;
          border-radius: 16px;
          display: grid;
          place-items: center;
          flex: 0 0 54px;
        }

        .ask-ai-btn-primary .ask-ai-btn-icon {
          background: rgba(255,255,255,.10);
          border: 1px solid rgba(255,255,255,.14);
        }

        .ask-ai-btn-secondary .ask-ai-btn-icon {
          background: rgba(20,34,72,.72);
          border: 1px solid rgba(88,132,255,.22);
        }

        .ask-ai-btn-text {
          min-width: 0;
        }

        .ask-ai-btn-title {
          margin: 0;
          color: #fff;
          font-size: 18px;
          line-height: 1.1;
          font-weight: 700;
          letter-spacing: -0.02em;
        }

        .ask-ai-btn-sub {
          margin: 6px 0 0 !important;
          color: rgba(245,247,255,.84);
          font-size: 15px !important;
          line-height: 1.2 !important;
          font-weight: 500 !important;
        }

        .ask-ai-btn-arrow {
          width: 28px;
          height: 28px;
          flex: 0 0 28px;
          color: #fff;
          opacity: .95;
        }

        .ask-ai-steve-trust {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-top: 20px;
          padding-top: 18px;
          border-top: 1px solid rgba(255,255,255,.08);
          color: #d8def0;
          font-size: 15px;
          line-height: 1.35;
          font-weight: 500;
        }

        .ask-ai-steve-trust-icon {
          width: 22px;
          height: 22px;
          color: #b64bff;
          flex: 0 0 22px;
          filter: drop-shadow(0 0 10px rgba(182,75,255,.24));
        }

        .footer-social-right {
          display: flex;
          justify-content: flex-end;
          align-items: center;
          gap: 14px;
          margin-top: 18px;
        }

        .footer-social-link {
          width: 58px;
          height: 58px;
          border-radius: 50%;
          display: grid;
          place-items: center;
          text-decoration: none;
          background: linear-gradient(180deg, rgba(8,16,34,.96), rgba(5,12,26,.96));
          border: 1px solid rgba(100,125,255,.22);
          box-shadow: 0 8px 20px rgba(0,0,0,.22);
          transition: transform .2s ease, box-shadow .2s ease, border-color .2s ease;
        }

        .footer-social-link:hover {
          transform: translateY(-2px);
          border-color: rgba(137,157,255,.52);
          box-shadow: 0 12px 26px rgba(0,0,0,.3), 0 0 18px rgba(82,114,255,.12);
        }

        .footer-social-link svg {
          width: 24px;
          height: 24px;
          display: block;
        }

        .footer-social-link.linkedin svg { color: #ffffff; }
        .footer-social-link.facebook svg { color: #ffffff; }
        .footer-social-link.whatsapp {
          border-color: rgba(57,229,140,.34);
          box-shadow: 0 8px 20px rgba(0,0,0,.22), 0 0 18px rgba(57,229,140,.08);
        }
        .footer-social-link.whatsapp:hover {
          border-color: rgba(57,229,140,.6);
          box-shadow: 0 12px 30px rgba(0,0,0,.3), 0 0 22px rgba(57,229,140,.18);
        }
        .footer-social-link.whatsapp svg { color: #39e58c; }

        @media (max-width: 1300px) {
          .rd-footer-grid {
            grid-template-columns: 1fr 1fr;
            gap: 50px;
          }
          .ask-ai-steve-wrap {
            max-width: 100%;
          }
        }

        @media (max-width: 768px) {
          .rd-footer-grid {
            grid-template-columns: 1fr;
            gap: 32px;
          }
          .rd-footer h4 {
            white-space: normal;
          }
        }

        @media (max-width: 640px) {
          .rd-premium-wrap {
            padding: 72px 18px 0;
          }
          .rd-premium-head {
            margin-bottom: 38px;
          }
          .rd-premium-head p {
            font-size: 17px;
          }
          .rd-card {
            padding: 24px 20px 20px;
            border-radius: 22px;
          }
          .rd-card-logo {
            height: 140px;
            border-radius: 16px;
            margin-bottom: 22px;
          }
          .rd-card h3 {
            font-size: 21px;
          }
          .rd-card .rd-sub {
            font-size: 15px;
          }
          .rd-card .rd-num {
            font-size: 18px;
          }
          .rd-card .rd-btn {
            min-height: 58px;
            font-size: 17px;
          }
          .rd-trust {
            font-size: 16px;
            padding-bottom: 42px;
            flex-direction: column;
          }
          .rd-footer-grid {
            grid-template-columns: 1fr;
            gap: 26px;
          }
          .rd-footer-bottom {
            flex-direction: column;
            align-items: flex-start;
          }
          .ask-ai-steve-card {
            padding: 24px 20px 20px;
            border-radius: 22px;
          }
          .ask-ai-steve-top {
            gap: 14px;
          }
          .ask-ai-steve-title {
            font-size: 36px;
          }
          .ask-ai-steve-avatar {
            width: 98px;
            height: 98px;
            flex-basis: 98px;
            border-radius: 18px;
          }
          .ask-ai-steve-sub {
            font-size: 16px;
            max-width: none;
          }
          .ask-ai-btn {
            padding: 16px 16px;
            border-radius: 18px;
          }
          .ask-ai-btn-icon {
            width: 48px;
            height: 48px;
            flex-basis: 48px;
            border-radius: 14px;
          }
          .ask-ai-btn-title {
            font-size: 17px;
          }
          .ask-ai-btn-sub {
            font-size: 14px;
          }
          .footer-social-link {
            width: 52px;
            height: 52px;
          }
        }
      `}</style>

      <section className="rd-premium-wrap" id="compliance">
        <div className="rd-premium-container">
          <div className="rd-premium-head">
            <h2>Compliance, Quality & Security</h2>
            <p>
              Recognised standards supporting consistent, compliant recruitment
              delivery.
            </p>
          </div>

          <div className="rd-cards">
            {/* REC Membership */}
            <div className="rd-card">
              <div className="rd-card-logo">
                <img src="/assets/compliance/rec-member.png" alt="REC Membership" />
              </div>
              <h3>REC Membership</h3>
              <p className="rd-sub">Corporate Member</p>
              <p className="rd-num">00207320</p>
              <div className="rd-btn-wrap">
                <a
                  className="rd-btn"
                  href="/certificates/rec-corporate-membership.pdf"
                  target="_blank"
                  rel="noopener"
                >
                  <span>View Certificate</span>
                  <span className="rd-btn-arrow">→</span>
                </a>
              </div>
            </div>

            {/* ISO 9001:2015 */}
            <div className="rd-card">
              <div className="rd-card-logo">
                <img src="/assets/compliance/cqs-iso9001.png" alt="ISO 9001:2015" />
              </div>
              <h3>ISO 9001:2015</h3>
              <p className="rd-sub">Quality Management</p>
              <p className="rd-num">GB2006088</p>
              <div className="rd-btn-wrap">
                <a
                  className="rd-btn"
                  href="/certificates/iso-9001-2015-gb2006088.pdf"
                  target="_blank"
                  rel="noopener"
                >
                  <span>View Certificate</span>
                  <span className="rd-btn-arrow">→</span>
                </a>
              </div>
            </div>

            {/* Constructionline Gold */}
            <div className="rd-card">
              <div className="rd-card-logo">
                <img
                  src="/assets/compliance/constructionline-gold.png"
                  alt="Constructionline Gold"
                />
              </div>
              <h3>Constructionline Gold</h3>
              <p className="rd-sub">Gold Member</p>
              <p className="rd-num">1324569</p>
              <div className="rd-btn-wrap">
                <a
                  className="rd-btn"
                  href="/certificates/constructionline-gold-1324569.pdf"
                  target="_blank"
                  rel="noopener"
                >
                  <span>View Certificate</span>
                  <span className="rd-btn-arrow">→</span>
                </a>
              </div>
            </div>

            {/* Cyber Essentials */}
            <div className="rd-card">
              <div className="rd-card-logo">
                <img
                  src="/assets/compliance/cyber-essentials.png"
                  alt="Cyber Essentials"
                />
              </div>
              <h3>Cyber Essentials</h3>
              <p className="rd-sub">Certified</p>
              <p className="rd-num">Valid until 21/01/2027</p>
              <div className="rd-btn-wrap">
                <a
                  className="rd-btn"
                  href="/certificates/cyber-essentials-4686a995.pdf"
                  target="_blank"
                  rel="noopener"
                >
                  <span>View Certificate</span>
                  <span className="rd-btn-arrow">→</span>
                </a>
              </div>
            </div>
          </div>

          <div className="rd-trust">
            <span className="rd-trust-icon">🛡</span>
            <span>Verified credentials. Transparent proof. Trusted delivery.</span>
          </div>

          <footer className="rd-footer">
            <div className="rd-footer-grid">
              <div className="rd-footer-brand">
                <img
                  className="rd-footer-logo"
                  src="/assets/logo.png"
                  alt="Recruitment Direct UK Ltd"
                />
                <p>
                  Recruitment Direct UK Ltd supplies temporary, contract and
                  permanent staff across construction, logistics, industrial and
                  specialist sectors throughout Scotland.
                </p>
              </div>

              <div>
                <h4>Quick Links</h4>
                <div className="rd-footer-links">
                  <a href="/">Home</a>
                  <a href="/#job-search">Job Search</a>
                  <a href="/#clients">Clients</a>
                  <a href="/contact">Contact</a>
                </div>
              </div>

              <div>
                <h4>Contact</h4>
                <p>
                  Recruitment Direct UK Limited
                  <br />
                  Herkimer House
                  <br />
                  Mill Road Industrial Estate
                  <br />
                  Linlithgow
                  <br />
                  EH49 7SF
                </p>
                <div className="footer-social-right" style={{ justifyContent: "flex-start", marginTop: "24px" }}>
                  <a className="footer-social-link linkedin" href="https://www.linkedin.com/" target="_blank" rel="noopener" aria-label="LinkedIn">
                    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path d="M6.94 8.5H3.56V20h3.38V8.5ZM5.25 3A2.02 2.02 0 1 0 5.3 7.04 2.02 2.02 0 0 0 5.25 3ZM20.44 12.92c0-3.48-1.85-5.1-4.32-5.1-1.99 0-2.88 1.1-3.38 1.86V8.5H9.36c.04.79 0 11.5 0 11.5h3.38v-6.42c0-.34.02-.68.12-.92.27-.68.9-1.38 1.95-1.38 1.37 0 1.92 1.04 1.92 2.57V20h3.38v-7.08Z" />
                    </svg>
                  </a>

                  <a className="footer-social-link facebook" href="https://www.facebook.com/" target="_blank" rel="noopener" aria-label="Facebook">
                    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path d="M13.5 21v-7.4h2.5l.38-2.9H13.5V8.86c0-.84.23-1.42 1.43-1.42h1.53V4.84c-.27-.04-1.18-.12-2.24-.12-2.22 0-3.74 1.35-3.74 3.83v2.15H8v2.9h2.48V21h3.02Z" />
                    </svg>
                  </a>

                  <a className="footer-social-link whatsapp" href="https://wa.me/447590882626" target="_blank" rel="noopener" aria-label="WhatsApp">
                    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path d="M20.52 3.48A11.86 11.86 0 0 0 12.06 0C5.54 0 .23 5.3.23 11.83c0 2.08.54 4.1 1.57 5.88L0 24l6.48-1.7a11.8 11.8 0 0 0 5.58 1.42h.01c6.52 0 11.83-5.3 11.83-11.83 0-3.16-1.23-6.13-3.38-8.41ZM12.07 21.7h-.01a9.84 9.84 0 0 1-5.01-1.37l-.36-.21-3.84 1 1.03-3.74-.24-.39a9.8 9.8 0 0 1-1.51-5.16c0-5.42 4.41-9.83 9.84-9.83 2.63 0 5.09 1.02 6.95 2.88a9.77 9.77 0 0 1 2.88 6.95c0 5.43-4.41 9.84-9.83 9.84Zm5.39-7.35c-.3-.15-1.77-.87-2.05-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.95 1.16-.17.2-.35.22-.65.08-.3-.15-1.26-.46-2.4-1.48a8.98 8.98 0 0 1-1.66-2.06c-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.38-.03-.53-.08-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.5h-.57c-.2 0-.52.08-.79.38-.27.3-1.04 1.01-1.04 2.46s1.07 2.86 1.22 3.06c.15.2 2.1 3.2 5.1 4.48.71.31 1.27.5 1.7.64.72.23 1.38.2 1.89.12.58-.09 1.77-.72 2.02-1.42.25-.69.25-1.28.17-1.4-.07-.12-.27-.2-.57-.35Z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            <div className="rd-footer-bottom">
              <div>
                © {new Date().getFullYear()} Recruitment Direct UK Ltd. All rights
                reserved.
              </div>
              <div>Premium recruitment delivery backed by verified standards.</div>
            </div>
          </footer>
        </div>
      </section>
    </>
  );
}

