"use client";

import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { FileText, Shield, Scale, Lock, Users, Info } from "lucide-react";

export default function Footer() {
  const [isPoliciesOpen, setIsPoliciesOpen] = useState(false);
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  const policyCategories = [
    {
      title: "FRAMEWORK & COMPLIANCE",
      icon: <Scale className="w-5 h-5 text-blue-400" />,
      items: [
        "Modern Slavery Policy",
        "Equality Policy",
        "Health & Safety Policy",
        "Carbon Reduction / Environmental Policy"
      ]
    },
    {
      title: "DATA & PRIVACY",
      icon: <Lock className="w-5 h-5 text-blue-400" />,
      items: [
        "Privacy Policy",
        "Cookie Policy",
        "Candidate Privacy Notice",
        "Client Privacy Notice",
        "Data Retention Policy"
      ]
    },
    {
      title: "AI & TECHNOLOGY",
      icon: <Shield className="w-5 h-5 text-blue-400" />,
      items: [
        "AI Transparency Statement",
        "Human Review Statement",
        "Bias / Fairness Statement"
      ]
    },
    {
      title: "SECURITY",
      icon: <Shield className="w-5 h-5 text-blue-400" />,
      items: [
        "Information Security Policy",
        "Data Breach Policy",
        "Cyber Security / IT Policy"
      ]
    },
    {
      title: "RECRUITMENT COMPLIANCE",
      icon: <Users className="w-5 h-5 text-blue-400" />,
      items: [
        "AWR Policy",
        "Right to Work Policy",
        "Complaints Policy",
        "Safeguarding Policy"
      ]
    },
    {
      title: "WEBSITE LEGAL",
      icon: <Info className="w-5 h-5 text-blue-400" />,
      items: [
        "Terms of Use"
      ]
    }
  ];

  return (
    <>
      <style jsx global>{`
        .rd-premium-wrap {
          background: linear-gradient(
            180deg,
            rgba(8,8,8,0.96) 0%,
            rgba(12,12,12,0.98) 55%,
            rgba(16,20,28,0.98) 100%
          ) !important;
          padding: 64px 24px 0;
          border-top: 1px solid rgba(255, 255, 255, 0.06);
          position: relative;
          overflow: hidden;
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
          color: #CBD5E1;
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
          background: rgba(255, 255, 255, 0.04) !important;
          border: 1px solid rgba(0, 140, 255, 0.18) !important;
          border-radius: 28px;
          padding: 22px 20px 18px;
          box-shadow:
            0 0 0 1px rgba(255,255,255,0.02) inset,
            0 10px 30px rgba(0,0,0,0.55),
            0 0 18px rgba(0,102,255,0.08) !important;
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
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
          color: #CBD5E1;
          font-size: 14px;
          line-height: 1.5;
        }
        .rd-card .rd-num {
          margin: 0 0 16px;
          color: #60A5FA;
          font-size: 17px;
          font-weight: 500;
          line-height: 1.3;
        }
        .rd-card .rd-btn-wrap {
          padding-top: 16px;
          border-top: 1px solid rgba(255, 255, 255, 0.08);
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
          background: transparent !important;
          padding: 34px 0 24px;
          color: #ffffff;
          position: relative;
          overflow: hidden;
        }

        .rd-footer-inner {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 28px;
          position: relative;
          z-index: 2;
        }

        /* Main grid */
        .rd-footer-main {
          display: grid;
          grid-template-columns: 1fr auto;
          gap: 64px;
          align-items: flex-start;
          border-top: 1px solid rgba(255,255,255,0.18);
          padding-top: 48px;
          max-width: 1200px;
          margin: 0 auto;
        }

        /* 4 left columns */
        .rd-footer-columns {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 40px;
          flex: 1;
          margin-top: 40px;
        }

        .footer-col {
          padding-right: 20px;
          border-right: 1px solid rgba(255, 255, 255, 0.12);
          min-height: 240px;
        }

        .footer-col:last-child {
          border-right: none;
        }

        .footer-col h4 {
          margin: 0 0 20px;
          font-size: 15px;
          text-transform: uppercase;
          letter-spacing: 2px;
          font-weight: 700;
          color: #F4F4F2;
        }

        .footer-col h4::after {
          content: "";
          display: block;
          width: 32px;
          height: 2px;
          margin-top: 10px;
          border-radius: 20px;
          background: rgba(255, 255, 255, 0.35);
        }

        .footer-col a {
          display: block;
          color: #CFCFCB;
          text-decoration: none;
          font-size: 14px;
          margin-bottom: 16px;
          transition: 0.2s ease;
        }

        .footer-col a:hover {
          color: #ffffff;
          text-shadow: 0 0 8px rgba(255,255,255,0.45);
        }

        /* Standardize footer buttons to match text links on desktop */
        .footer-col button {
          all: unset !important;
          display: block !important;
          width: auto !important;
          min-width: 0 !important;
          padding: 0 !important;
          margin-bottom: 16px !important;
          color: #CFCFCB !important;
          font-size: 14px !important;
          font-weight: 400 !important;
          letter-spacing: normal !important;
          cursor: pointer !important;
          background: none !important;
          border: none !important;
          border-radius: 0 !important;
          box-shadow: none !important;
          transition: color 0.2s ease !important;
          text-align: left !important;
        }

        .footer-col button:hover,
        .footer-col a:hover {
          color: #ffffff !important;
          text-shadow: 0 0 8px rgba(255,255,255,0.45) !important;
          transform: none !important;
        }

        .footer-col button:active,
        .footer-col a:active {
          color: #ffffff !important;
        }

        /* Right column */
        .rd-footer-right {
          display: flex;
          flex-direction: column;
          align-items: stretch;
        }

        /* AI STEVE CARD (Preserved but scaled down) */
        .rd-ai-steve-card {
          padding: 18px;
          border-radius: 18px;
          border: 1px solid rgba(0, 140, 255, 0.18) !important;
          background: rgba(255, 255, 255, 0.04) !important;
          backdrop-filter: blur(8px) !important;
          box-shadow:
            0 0 0 1px rgba(255,255,255,0.02) inset,
            0 10px 30px rgba(0,0,0,0.55),
            0 0 18px rgba(0,102,255,0.08) !important;
          margin-top: 0;
          max-width: 320px;
          margin-left: auto;
        }

        .rd-ai-top {
          display: flex;
          gap: 16px;
          align-items: center;
          margin-bottom: 16px;
        }

        .rd-ai-steve-card h3 {
          margin: 0 0 4px;
          font-size: 19px;
          letter-spacing: 0.5px;
          color: #fff;
        }

        .rd-live {
          margin: 0 0 6px;
          color: #57ff93;
          font-weight: 700;
          font-size: 12px;
        }

        .rd-live span {
          display: inline-block;
          width: 8px;
          height: 8px;
          background: #30ff86;
          border-radius: 50%;
          margin-right: 6px;
          box-shadow: 0 0 10px rgba(48, 255, 134, 0.9);
        }

        .rd-ai-text {
          margin: 0;
          color: rgba(236, 244, 255, 0.78);
          line-height: 1.4;
          font-size: 12px;
        }

        /* MOVING ORB */
        .rd-ai-orb {
          width: 64px;
          height: 64px;
          border-radius: 50%;
          position: relative;
          display: grid;
          place-items: center;
          background:
            radial-gradient(circle at 35% 30%, #63e7ff, transparent 18%),
            radial-gradient(circle at 65% 70%, #b52dff, transparent 26%),
            radial-gradient(circle, #0d7dff 0%, #061a52 48%, #050817 72%);
          box-shadow:
            0 0 16px rgba(0, 213, 255, 0.75),
            0 0 28px rgba(132, 52, 255, 0.65);
          animation: rdOrbPulse 3s ease-in-out infinite;
        }

        .rd-ai-orb::before {
          content: "";
          position: absolute;
          inset: -5px;
          border-radius: 50%;
          border: 2px solid transparent;
          border-top-color: #00e5ff;
          border-right-color: #9b4dff;
          animation: rdOrbSpin 4.5s linear infinite;
        }

        .rd-ai-orb span {
          position: absolute;
          inset: 7px;
          border-radius: 50%;
          border: 1px solid rgba(255,255,255,0.26);
          animation: rdOrbSpinReverse 6s linear infinite;
        }

        .rd-orb-core {
          font-size: 22px;
          font-weight: 900;
          letter-spacing: 1px;
          color: #bff6ff;
          text-shadow: 0 0 10px rgba(0, 213, 255, 0.95);
        }

        @keyframes rdOrbSpin {
          to { transform: rotate(360deg); }
        }

        @keyframes rdOrbSpinReverse {
          to { transform: rotate(-360deg); }
        }

        @keyframes rdOrbPulse {
          0%, 100% { transform: scale(1); filter: brightness(1); }
          50% { transform: scale(1.04); filter: brightness(1.25); }
        }

        .rd-ai-steve-card .btn {
          padding: 10px 20px;
          font-size: 14px;
        }

        .rd-ai-btn-text {
          font-weight: 700;
          letter-spacing: 0.2px;
          font-size: 13px;
        }
        .rd-ai-btn-arrow {
          font-size: 18px;
          font-weight: 400;
        }

        /* Connect directly under AI Steve */
        .footer-connect {
          margin-top: 32px;
          margin-bottom: 24px;
          text-align: center;
          width: 100%;
          max-width: 1200px;
          margin-left: auto;
          margin-right: auto;
        }

        .connect-title span {
          height: 1px;
          background: rgba(255,255,255,0.18);
        }

        .connect-title strong {
          font-size: 14px;
          letter-spacing: 4px;
          color: #CFCFCB;
        }

        .footer-social-icons-wrap {
          display: flex;
          justify-content: center;
          margin-top: 16px;
        }

        /* Ensure no extra margin on the first icon when centered */
        .footer-social-icons-wrap .header-social-icons a:first-child {
          margin-left: 0;
        }

        /* Bottom legal */
        .rd-footer-bottom {
          margin-top: 48px;
          padding-top: 24px;
          border-top: 1px solid rgba(255,255,255,0.18);
          text-align: center;
          max-width: 1200px;
          margin-left: auto;
          margin-right: auto;
        }

        .rd-footer-bottom .rd-footer-info {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 12px 24px;
          font-size: 13px;
          color: #CFCFCB;
        }

        .rd-footer-bottom .rd-footer-info .rd-sep {
          color: rgba(255,255,255,0.18);
        }

        .rd-footer-info.mobile-only {
          display: none;
          margin: 20px 0 0;
          padding: 20px 0;
          // border-top: 1px solid rgba(255,255,255,0.14);
          // border-bottom: 1px solid rgba(255,255,255,0.14);
          width: 100%;
        }

        .rd-footer-bottom p {
          margin: 0;
          font-size: 13px;
          color: rgba(255,255,255,0.35);
        }

        /* Mobile */
        @media (max-width: 1000px) {
          .rd-footer-main {
            grid-template-columns: 1fr;
          }

          .rd-footer-columns {
            grid-template-columns: repeat(2, 1fr);
          }

          .rd-footer-right {
            max-width: 430px;
            margin: 0 auto;
          }
        }

        @media (max-width: 600px) {
          .rd-footer-columns {
            grid-template-columns: 1fr;
          }

          .footer-col {
            border-right: none;
            border-bottom: 1px solid rgba(0, 170, 255, 0.18);
            padding-bottom: 20px;
          }

          .rd-footer-bottom .rd-footer-info.desktop-only {
            display: none;
          }

          .rd-footer-info.mobile-only {
            display: flex;
            flex-direction: column;
            gap: 8px;
            text-align: center;
          }

          .rd-footer-info .rd-sep {
            display: none;
          }

          .rd-footer-bottom p {
            border-top: 1px solid rgba(255,255,255,0.14);
            padding-top: 18px;
            margin-top: 18px;
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
                  className="btn btn-secondary btn-saas"
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
                  className="btn btn-secondary btn-saas"
                  href="/certificates/cyber-essentials-4686a995.pdf"
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
                  className="btn btn-secondary btn-saas"
                  href="/certificates/iso-9001-2015-gb2006088.pdf"
                  target="_blank"
                  rel="noopener"
                >
                  <span>View Certificate</span>
                  <span className="rd-btn-arrow">→</span>
                </a>
              </div>
            </div>

            {/* REC Membership */}
            <div className="rd-card">
              <div className="rd-card-logo">
                <img src="/rec_logo_new.png" alt="REC Membership" />
              </div>
              <h3>REC Membership</h3>
              <p className="rd-sub">Corporate Member</p>
              <p className="rd-num">00207320</p>
              <div className="rd-btn-wrap">
                <a
                  className="btn btn-secondary btn-saas"
                  href="/certificates/rec-corporate-membership.pdf"
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
            <div className="rd-footer-inner">


              <div className="rd-footer-main">

                {/* LEFT COLUMNS */}
                <div className="rd-footer-columns">

                  <div className="footer-col">
                    <h4>Company</h4>
                    <a href="/about">About Us</a>
                    <a href="/services">Services</a>
                    <a href="/why-choose-us">Why RDUK</a>
                    <a href="/our-process">Our Process</a>
                    <a href="/contact">Contact Us</a>
                  </div>

                  <div className="footer-col">
                    <h4>AI Platform</h4>
                    <a href="/ai-hire-now">Request Staff</a>
                    <a href="/#ai-recruitment">AI Recruitment</a>
                    <a href="/callpilot">CallPilot (AI Voice)</a>
                    <a href="/integrations">Integrations</a>
                    <a href="/security">Security</a>
                  </div>

                  <div className="footer-col">
                    <h4>Resources</h4>
                    <a href="/#clients">Clients</a>
                    <a href="/#job-search">Job Search</a>
                    <button
                      onClick={() => setIsPoliciesOpen(true)}
                    >
                      Policies
                    </button>
                    <a href="/accreditations">Accreditations</a>
                    <a href="/news">News & Insights</a>
                  </div>

                  <div className="footer-col">
                    <h4>Policies</h4>
                    <a href="https://rduk.group/privacy" target="_blank" rel="noopener noreferrer">Privacy Policy</a>
                    <a href="https://rduk.group/cookiepolicy" target="_blank" rel="noopener noreferrer">Cookie Policy</a>
                    <a href="https://rduk.group/termsofuse" target="_blank" rel="noopener noreferrer">Terms of Use</a>
                    <a href="https://rduk.group/modernslaverypolucy" target="_blank" rel="noopener noreferrer">Modern Slavery</a>
                    <a href="https://rduk.group/equalitydiversity" target="_blank" rel="noopener noreferrer">Equality Policy</a>
                  </div>

                </div>


                {/* RIGHT SIDE: KEEP EXISTING AI STEVE DESIGN */}
                <div className="rd-footer-right">

                  {/* ASK AI STEVE PANEL */}
                  <div className="rd-ai-steve-card">
                    <div className="rd-ai-top">
                      <div className="rd-ai-orb">
                        <div className="rd-orb-core">AI</div>
                        <span></span>
                      </div>

                      <div>
                        <h3>Ask AI Steve</h3>
                        <p className="rd-live"><span></span> Live Now</p>
                        <p className="rd-ai-text">Instant answers.<br />Smart AI calls.</p>
                      </div>
                    </div>

                    <a 
                      onClick={() => window.dispatchEvent(new CustomEvent('open-ai-steve'))}
                      className="btn btn-primary btn-saas w-full mt-4 !justify-between cursor-pointer"
                    >
                      <span className="rd-ai-btn-text">Ask AI Steve</span>
                      <b className="rd-ai-btn-arrow">→</b>
                    </a>

                    <a 
                      onClick={() => setIsVideoOpen(true)}
                      className="btn btn-secondary btn-saas w-full mt-3 !justify-between cursor-pointer"
                    >
                      <span className="rd-ai-btn-text">Ai Call Demo</span>
                      <b className="rd-ai-btn-arrow">→</b>
                    </a>

                    <a href="/#ai-recruitment" className="btn btn-primary btn-saas w-full mt-3 !justify-between">
                      <span className="rd-ai-btn-text">AI Platform</span>
                      <b className="rd-ai-btn-arrow">→</b>
                    </a>
                  </div>

                </div>

              </div>

              <div className="footer-connect">
                <div className="connect-title">
                  <span></span>
                  <strong>CONNECT</strong>
                  <span></span>
                </div>

                <div className="footer-social-icons-wrap">
                  <div className="header-social-icons">
                    <a href="https://wa.me/447590882626" target="_blank" rel="noopener" aria-label="WhatsApp">
                      <svg viewBox="0 0 24 24" className="fill-[#25D366]">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                      </svg>
                    </a>
                    <a href="https://www.linkedin.com/" target="_blank" rel="noopener" aria-label="LinkedIn">
                      <svg viewBox="0 0 24 24" fill="#0A66C2">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                      </svg>
                    </a>
                    <a href="https://www.facebook.com/" target="_blank" rel="noopener" aria-label="Facebook">
                      <svg viewBox="0 0 24 24" fill="#1877F2">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>

              <div className="rd-footer-bottom">
                <div className="rd-footer-info desktop-only">
                  <span>Recruitment Direct UK Ltd</span>
                  <span className="rd-sep">|</span>
                  <span>Company No: SC301107</span>
                  <span className="rd-sep">|</span>
                  <span>VAT No: GB880406428</span>
                </div>
                {/* MIDDLE POINT FOR MOBILE */}
                <div className="rd-footer-info mobile-only">
                  <span>Recruitment Direct UK Ltd</span>
                  <span className="rd-sep">|</span>
                  <span>Company No: SC301107</span>
                  <span className="rd-sep">|</span>
                  <span>VAT No: GB880406428</span>
                </div>

                <p>© {new Date().getFullYear()} Recruitment Direct UK Ltd. All rights reserved.</p>
              </div>
            </div>
          </footer>
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

      <Dialog open={isPoliciesOpen} onOpenChange={setIsPoliciesOpen}>
        <DialogContent className="max-w-4xl max-h-[85vh] overflow-y-auto bg-[#020817] border-white/10 text-white">
          <DialogHeader className="mb-6">
            <DialogTitle className="text-3xl font-bold flex items-center gap-3">
              <FileText className="text-blue-500" />
              Compliance & Policies
            </DialogTitle>
            <p className="text-gray-400 mt-2">
              Our commitment to transparency, security, and ethical recruitment practices.
            </p>
          </DialogHeader>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {policyCategories.map((category, idx) => (
              <div key={idx} className="space-y-4">
                <div className="flex items-center gap-3 pb-2 border-b border-white/10">
                  {category.icon}
                  <h4 className="font-bold text-sm tracking-widest text-gray-200 uppercase">
                    {category.title}
                  </h4>
                </div>
                <ul className="space-y-2">
                  {category.items.map((item, i) => (
                    <li key={i}>
                      <button className="text-gray-400 hover:text-blue-400 transition-colors text-sm flex items-center gap-2 group">
                        <div className="w-1 h-1 bg-blue-500/50 rounded-full group-hover:bg-blue-400" />
                        {item}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-8 pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-xs text-gray-500">
              Last updated: {new Date().toLocaleDateString('en-GB', { month: 'long', year: 'numeric' })}
            </div>
            <button
              onClick={() => setIsPoliciesOpen(false)}
              className="btn btn-secondary py-2 px-6 text-sm"
            >
              Close
            </button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
