"use client";

import React, { useState, useEffect } from "react";
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
  const [maxPolicyBtnHeight, setMaxPolicyBtnHeight] = useState<number | undefined>(undefined);

  useEffect(() => {
    if (!isPoliciesOpen) {
      setMaxPolicyBtnHeight(undefined);
      return;
    }

    const calculateHeights = () => {
      const buttons = document.querySelectorAll(".policy-btn");
      if (buttons.length === 0) return;

      // Reset inline heights to auto so the browser can calculate the true natural heights for the current viewport width
      buttons.forEach((btn) => {
        (btn as HTMLElement).style.height = "auto";
      });

      // Find the tallest button height
      let maxH = 0;
      buttons.forEach((btn) => {
        const h = (btn as HTMLElement).offsetHeight;
        if (h > maxH) {
          maxH = h;
        }
      });

      // Set standard height for all buttons
      if (maxH > 0) {
        setMaxPolicyBtnHeight(maxH);
      }
    };

    // Calculate height after transition has settled
    const initialTimer = setTimeout(calculateHeights, 150);

    // Calculate height dynamically on any screen resize or mobile orientation change
    window.addEventListener("resize", calculateHeights);

    return () => {
      clearTimeout(initialTimer);
      window.removeEventListener("resize", calculateHeights);
    };
  }, [isPoliciesOpen]);

  const policyCategories = [
    {
      title: "FRAMEWORK & COMPLIANCE",
      icon: <Scale className="w-5 h-5 text-blue-600" />,
      items: [
        { name: "Modern Slavery Policy", link: "/modern-slavery-policy" },
        { name: "Equality & Diversity Policy", link: "/equality-diversity-policy" },
        { name: "Health & Safety Policy", link: "/health-safety-policy" },
        { name: "Carbon Reduction Plan", link: "/carbon-reduction-plan" },
        { name: "Environmental & Carbon Policy", link: "/environmental-carbon-policy" },
        { name: "Anti-Bribery Policy", link: "/anti-bribery-policy" },
        { name: "Whistleblowing Policy", link: "/whistleblowing-policy" },
        { name: "Data Protection & GDPR Policy", link: "/data-protection-gdpr-policy" },
      ]
    },
    {
      title: "DATA & PRIVACY",
      icon: <Lock className="w-5 h-5 text-blue-600" />,
      items: [
        { name: "Privacy Policy", link: "/privacy-policy" },
        { name: "Cookie Policy", link: "/cookie-policy" },
        { name: "Candidate Privacy Notice", link: "/candidate-privacy-notice" },
        { name: "Client Privacy Notice", link: "/client-privacy-notice" },
        { name: "Data Retention Policy", link: "/data-retention-policy" }
      ]
    },
    {
      title: "AI & TECHNOLOGY",
      icon: <Shield className="w-5 h-5 text-blue-600" />,
      items: [
        { name: "AI Transparency Policy", link: "/ai-transparency-statement" },
        { name: "Human Review Policy", link: "/human-review-statement" },
        { name: "AI Fairness & Bias Statement", link: "/bias-fairness-statement" },
        { name: "AI Hire Now Statement", link: "/ai-hire-now-statement" },
        { name: "AI Screening Call Statement", link: "/ai-screening-call-statement" },
      ]
    },
    {
      title: "SECURITY",
      icon: <Shield className="w-5 h-5 text-blue-600" />,
      items: [
        { name: "Information Security Policy", link: "/information-security-policy" },
        { name: "Data Breach Policy", link: "/data-breach-policy" },
        { name: "Cyber Security & IT Policy", link: "/cyber-security-it-policy" }
      ]
    },
    {
      title: "RECRUITMENT COMPLIANCE",
      icon: <Users className="w-5 h-5 text-blue-600" />,
      items: [
        { name: "AWR Policy", link: "/awr-policy" },
        { name: "Right to Work Policy", link: "/right-to-work-policy" },
        { name: "Complaints Policy", link: "/complaints-policy" },
        { name: "Safeguarding Policy", link: "/safeguarding-policy" }
      ]
    },
    {
      title: "WEBSITE LEGAL",
      icon: <Info className="w-5 h-5 text-blue-600" />,
      items: [
        { name: "Terms of Use", link: "/terms-of-use" }
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
          color: #ffffff !important;
          font-size: clamp(28px, 3.5vw, 48px);
          line-height: 1.08;
          font-weight: 700;
          letter-spacing: -0.03em;
        }
        .rd-premium-head p {
          max-width: 860px;
          margin: 0 auto;
          color: #CBD5E1 !important;
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
        @media (min-width: 1024px) {
          .rd-cards {
            grid-template-columns: repeat(4, 1fr) !important;
          }
        }
        .rd-card {
          background: rgba(255, 255, 255, 0.04) !important;
          border: 1px solid rgba(0, 140, 255, 0.18) !important;
          border-radius: 28px;
          padding: 22px 16px 18px !important;
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
          margin: 0 auto;
        }
        .rd-card h3 {
          margin: 0 0 6px !important;
          color: #ffffff !important;
          font-size: 18px !important;
          line-height: 1.25 !important;
          font-weight: 600 !important;
          text-transform: none !important;
        }
        .rd-card .rd-sub {
          margin: 0 0 4px !important;
          color: #CBD5E1 !important;
          font-size: 14px !important;
          line-height: 1.5 !important;
        }
        .rd-card .rd-num {
          margin: 0 0 16px !important;
          color: #60A5FA !important;
          font-size: 16px !important;
          font-weight: 500 !important;
          line-height: 1.3 !important;
        }
        .rd-card .rd-btn-wrap {
          padding-top: 16px;
          border-top: 1px solid rgba(255, 255, 255, 0.08);
        }
        .rd-btn-arrow {
          font-size: 22px;
          line-height: 1;
        }
        .rd-desktop-br {
          display: none;
        }
        @media (min-width: 1024px) {
          .rd-desktop-br {
            display: inline;
          }
        }
        .trust-strip {
          background: linear-gradient(135deg, #07111f, #0d1b2e) !important;
          border: 1px solid rgba(0, 153, 255, 0.35) !important;
          border-radius: 11px !important; /* 40% size reduction (originally 18px) */
          padding: 20.4px 14.4px !important; /* 40% size reduction (originally 34px 24px) */
          margin: 24px 13.2px !important; /* 40% size reduction (originally 40px 22px) */
          text-align: center !important;
          box-shadow: 0 10.8px 27px rgba(0,0,0,0.35) !important; /* 40% size reduction (originally 18px 45px) */
        }
        .trust-strip p {
          color: #ffffff !important;
          font-size: 14.4px !important; /* 40% size reduction (originally 24px) */
          line-height: 1.45 !important;
          font-weight: 500 !important;
          margin: 0 !important;
          letter-spacing: 0.3px !important;
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
          padding-top: 40px;
          max-width: 1200px;
          margin: 0 auto;
        }

        /* 4 left columns */
        .rd-footer-columns {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 40px;
          flex: 1;
          margin-top: 5px;
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
          color: #F4F4F2 !important;
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
          color: #CFCFCB !important;
          text-decoration: none;
          font-size: 14px;
          margin-bottom: 16px;
          transition: 0.2s ease;
        }

        .footer-col a:hover {
          color: #ffffff !important;
          text-shadow: 0 0 8px rgba(255,255,255,0.45) !important;
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
          max-width: 430px;
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
          color: #ffffff !important;
        }

        .rd-ai-steve-card .rd-ai-text{
          color: #ffffff !important;
        }

        .rd-ai-steve-card .rd-live{
          color: #ffffff !important;
        }

        .rd-live {
          margin: 0 0 6px;
          color: #57ff93 !important;
          font-weight: 700;
          font-size: 12px;
        }

        .rd-live span {
          display: inline-block;
          width: 8px;
          height: 8px;
          background: #30ff86 !important;
          border-radius: 50%;
          margin-right: 6px;
          box-shadow: 0 0 10px rgba(48, 255, 134, 0.9) !important;
        }

        .rd-ai-text {
          margin: 0;
          color: #ffffff !important;
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
          width: 80% !important;
          display: flex !important;
          margin: 12px auto 0 !important;
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
          justify-content: center;
          gap: 12px 24px;
          font-size: 13px;
          color: #CFCFCB !important;
        }

        .rd-footer-bottom .rd-footer-info .rd-sep {
          color: rgba(255,255,255,0.18) !important;
        }

        .rd-footer-info.mobile-only {
          display: none;
          margin: 20px 0 0;
          padding: 20px 0;
          /* border-top: 1px solid rgba(255,255,255,0.14); */
          /* border-bottom: 1px solid rgba(255,255,255,0.14); */
          width: 100%;
        }

        .rd-footer-bottom p {
          margin: 0;
          font-size: 13px;
          color: rgba(255,255,255,0.35) !important;
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

        .policy-btn {
          width: 100% !important;
          max-width: 100% !important;
          min-width: 0 !important;
          display: flex !important;
          align-items: center !important;
          justify-content: start !important;
          box-sizing: border-box !important;
          background: #ffffff !important;
          border: 1.5px solid #000000 !important;
          border-radius: 8px !important;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1) !important;
          color: #000000 !important;
          font-weight: 600 !important;
        }

        .policy-btn span {
          color: #000000 !important;
          font-weight: 600 !important;
        }

        .policy-btn:hover {
          transform: translateY(-2px) !important;
          background: #f3f4f6 !important;
          border-color: #000000 !important;
          color: #000000 !important;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08) !important;
        }

        .policy-btn:hover span {
          color: #000000 !important;
        }

        /* Target Dialog close button in top right */
        .policies-dialog button.absolute {
          background: #ffffff !important;
          border: 1.5px solid #000000 !important;
          color: #000000 !important;
          opacity: 1 !important;
          display: flex !important;
          align-items: center !important;
          justify-content: center !important;
          width: 28px !important;
          height: 28px !important;
          border-radius: 6px !important;
          transition: all 0.2s ease !important;
        }

        .policies-dialog button.absolute:hover {
          background: #f3f4f6 !important;
          color: #000000 !important;
        }
      `}</style>

      <section className="rd-premium-wrap standard-section" id="compliance">
        <div className="rd-premium-container">
          <div className="rd-premium-head">
            <h2 className="standard-h1">Compliance, Quality & Security</h2>
            <p className="standard-h2">
              Recognised standards supporting consistent, compliant recruitment
              delivery.
            </p>
          </div>

          <div className="rd-cards">
            {/* Constructionline Gold */}
            <div className="rd-card standard-card">
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
            <div className="rd-card standard-card">
              <div className="rd-card-logo">
                <img
                  src="/assets/compliance/cyber-essentials.png"
                  alt="Cyber Essentials"
                />
              </div>
              <h3>Cyber <br className="rd-desktop-br" />Essentials</h3>
              <p className="rd-sub">Certified</p>
              <p className="rd-num">4686a995</p>
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
            <div className="rd-card standard-card">
              <div className="rd-card-logo">
                <img src="/assets/compliance/cqs-iso9001.png" alt="ISO 9001:2015" />
              </div>
              <h3>ISO <br className="rd-desktop-br" />9001:2015</h3>
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
            <div className="rd-card standard-card">
              <div className="rd-card-logo">
                <img src="/rec_logo_new.png" alt="REC Membership" />
              </div>
              <h3>REC <br className="rd-desktop-br" />Membership</h3>
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

          <div className="trust-strip">
            <p>Verified credentials. Transparent proof. Trusted delivery.</p>
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
                    <a
                      href="/#ai-recruitment"
                      onClick={() => {
                        window.dispatchEvent(new CustomEvent('open-ai-recruitment'));
                      }}
                    >
                      AI Recruitment
                    </a>
                    <a
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        setIsVideoOpen(true);
                      }}
                    >
                      AI Voice Call
                    </a>
                    <a href="/integrations">Integrations</a>
                    <a href="/security">Security</a>
                  </div>

                  <div className="footer-col">
                    <h4>Resources</h4>
                    <a
                      href="/#clients"
                      onClick={() => {
                        window.dispatchEvent(new CustomEvent('open-clients'));
                      }}
                    >
                      Clients
                    </a>
                    <a href="/job-search">Job Search</a>
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
                    <a href="/privacy-policy">Privacy Policy</a>
                    <a href="/cookie-policy">Cookie Policy</a>
                    <a href="/terms-of-use">Terms of Use</a>
                    <a href="/modern-slavery-policy">Modern Slavery</a>
                    <a href="/equality-diversity-policy">Equality Policy</a>
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
                        <p className="rd-ai-text text-white">Instant answers.<br />Smart AI calls.</p>
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

                    <a
                      href="/#ai-recruitment"
                      onClick={() => {
                        window.dispatchEvent(new CustomEvent('open-ai-recruitment'));
                      }}
                      className="btn btn-primary btn-saas w-full mt-3 !justify-between"
                    >
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
        <DialogContent className="max-w-4xl p-0 overflow-hidden bg-black border-gray-800">
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
        <DialogContent className="max-w-6xl max-h-[85vh] overflow-y-auto bg-white border-gray-200 text-gray-900 shadow-2xl policies-dialog">
          <DialogHeader className="mb-6">
            <DialogTitle className="text-3xl font-bold flex items-center gap-3 text-gray-900">
              <FileText className="text-blue-600" />
              Compliance & Policies
            </DialogTitle>
            <p className="text-gray-600 mt-2">
              Our commitment to transparency, security, and ethical recruitment practices.
            </p>
          </DialogHeader>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
            {policyCategories.map((category, idx) => (
              <div key={idx} className="space-y-4">
                <div className="flex items-center gap-3 pb-2 border-b border-gray-200">
                  {category.icon}
                  <h4 className="font-bold text-sm tracking-widest text-gray-800 uppercase">
                    {category.title}
                  </h4>
                </div>
                <ul className="space-y-3">
                  {category.items.map((item, i) => {
                    const buttonProps = {
                      style: maxPolicyBtnHeight ? { height: `${maxPolicyBtnHeight}px` } : undefined,
                      className: "policy-btn w-full text-left transition-all duration-300 rounded-lg px-4 py-3 text-sm flex items-center gap-3 group"
                    };

                    const content = (
                      <>
                        <div className="w-1.5 h-1.5 bg-black/80 rounded-full group-hover:bg-black group-hover:scale-125 transition-all duration-300 flex-shrink-0" />
                        <span className="leading-snug">{item.name}</span>
                      </>
                    );

                    return (
                      <li key={i}>
                        <button
                          {...buttonProps}
                          onClick={() => {
                            if (item.link) {
                              window.open(item.link, "_self", "noopener,noreferrer");
                            }
                          }}
                        >
                          {content}
                        </button>
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-8 pt-6 border-t border-gray-200 flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-xs text-gray-500">
              Last updated: {new Date().toLocaleDateString('en-GB', { month: 'long', year: 'numeric' })}
            </div>
            <button
              onClick={() => setIsPoliciesOpen(false)}
              className="bg-white hover:bg-gray-50 text-black border border-black transition-all duration-200 rounded-lg py-2.5 px-6 font-semibold text-sm"
            >
              Close
            </button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
