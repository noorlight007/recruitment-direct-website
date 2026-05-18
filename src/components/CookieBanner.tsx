"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Always show the cookie banner when the page is reloaded or rendered
    setIsVisible(true);
  }, []);

  const handleAccept = () => {
    localStorage.setItem("rd1CookieConsent", "accepted");
    setIsVisible(false);
  };

  const handleReject = () => {
    localStorage.setItem("rd1CookieConsent", "rejected");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div id="rd1-cookie-banner" className="rd1-cookie-banner">
      <div className="rd1-cookie-content">
        <h3>We use cookies</h3>
        <p>
          Recruitment Direct UK Ltd uses cookies to keep this website working properly,
          improve your browsing experience, analyse website traffic, and support our
          recruitment and marketing services.
        </p>
        <div className="rd1-cookie-buttons">
          <button onClick={handleAccept}>Accept All</button>
          <button onClick={handleReject} className="secondary">Reject Non-Essential</button>
          <Link href="/cookie-policy/" className="link">Cookie Policy</Link>
        </div>
      </div>

      <style jsx>{`
        .rd1-cookie-banner {
          position: fixed;
          bottom: 20px;
          left: 20px;
          right: 20px;
          max-width: 920px;
          margin: 0 auto;
          background: #ffffff;
          color: #1f2933;
          border: 1px solid #d6dce5;
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.18);
          border-radius: 10px;
          z-index: 99999;
          padding: 20px;
          font-family: Arial, sans-serif;
        }

        .rd1-cookie-content h3 {
          margin: 0 0 8px;
          font-size: 20px;
          color: #0b2f5b;
          font-weight: bold;
        }

        .rd1-cookie-content p {
          margin: 0 0 16px;
          font-size: 14px;
          line-height: 1.5;
          color: #1f2933;
        }

        .rd1-cookie-buttons {
          display: flex;
          gap: 10px;
          flex-wrap: wrap;
          align-items: center;
        }

        .rd1-cookie-buttons button {
          background: #0b2f5b;
          color: #ffffff;
          border: none;
          padding: 10px 18px;
          border-radius: 6px;
          cursor: pointer;
          font-weight: 600;
          font-size: 14px;
          transition: background 0.2s ease;
        }

        .rd1-cookie-buttons button:hover {
          background: #082243;
        }

        .rd1-cookie-buttons button.secondary {
          background: #eef2f6;
          color: #0b2f5b;
        }

        .rd1-cookie-buttons button.secondary:hover {
          background: #e1e7ee;
        }

        .rd1-cookie-buttons :global(.link) {
          color: #0b2f5b;
          text-decoration: underline;
          font-size: 14px;
          font-weight: 600;
        }

        @media (max-width: 600px) {
          .rd1-cookie-banner {
            left: 10px;
            right: 10px;
            bottom: 10px;
          }

          .rd1-cookie-buttons {
            flex-direction: column;
            align-items: stretch;
          }

          .rd1-cookie-buttons button,
          .rd1-cookie-buttons :global(.link) {
            width: 100%;
            text-align: center;
            box-sizing: border-box;
          }
        }
      `}</style>
    </div>
  );
}
