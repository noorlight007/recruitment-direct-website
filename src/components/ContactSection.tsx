"use client";

import React from "react";

export default function ContactSection() {
  return (
    <>
      <section className="rd-contact-section">
        <div className="rd-contact-container">
          <p className="rd-eyebrow">CONTACT US</p>
          <h2>How can we help?</h2>
          <p className="rd-intro">
            Choose the option that best suits your requirements.
          </p>

          <div className="rd-contact-cards">
            <div className="rd-contact-card">
              <h3>AI HIRE NOW</h3>
              <p>
                Order Staff 24/7. Powered by AI.
              </p>
              <a href="/ai-hire-now" className="rd-btn">
                Hire Now →
              </a>
            </div>

            <div className="rd-contact-card">
              <h3>LOOKING FOR STAFF?</h3>
              <p>
                Temporary, Contract & Permanent.
              </p>
              <a href="/contact" className="rd-btn">
                Request Quote →
              </a>
            </div>
          </div>

          <div className="rd-contact-links">
            <a href="tel:01324623198" className="rd-contact-link">
              <span>Call Us</span>
              <strong>01324 623198</strong>
            </a>

            <a href="https://wa.me/447590882626" className="rd-contact-link">
              <span>WhatsApp</span>
              <strong>Start Conversation</strong>
            </a>

            <a href="mailto:sales@rd1.co.uk" className="rd-contact-link">
              <span>Email Us</span>
              <strong>sales@rd1.co.uk</strong>
            </a>
          </div>
        </div>
      </section>

      <style dangerouslySetInnerHTML={{ __html: `
        :root {
            --rd-black: #111111;
            --rd-grey: #5f6368;
            --rd-brass: #c8a24a;
            --rd-border: #e8e8e8;
            --rd-white: #ffffff;
        }

        .rd-contact-section {
            background: #ffffff;
            padding: 10px 10px;
        }

        .rd-contact-container {
            max-width: 1200px;
            margin: 0 auto;
        }

        .rd-eyebrow {
            color: var(--rd-brass);
            font-size: 14px;
            font-weight: 700;
            letter-spacing: 3px;
            text-transform: uppercase;
            margin-bottom: 18px;
        }

        .rd-contact-section h2 {
            font-size: clamp(42px, 6vw, 72px);
            font-weight: 800;
            color: var(--rd-black);
            line-height: 1.1;
            margin-bottom: 18px;
        }

        .rd-intro {
            color: var(--rd-grey);
            font-size: 20px;
            margin-bottom: 50px;
        }

        .rd-contact-cards {
            display: grid;
            grid-template-columns: repeat(2,1fr);
            gap: 30px;
            margin-bottom: 50px;
        }

        .rd-contact-card {
            background: #ffffff;
            border: 1px solid var(--rd-border);
            border-radius: 24px;
            padding: 48px;
            box-shadow: 0 10px 30px rgba(0,0,0,0.05);
            transition: all .3s ease;
        }

        .rd-contact-card:hover {
            transform: translateY(-4px);
            box-shadow: 0 20px 50px rgba(0,0,0,0.08);
        }

        .rd-contact-card h3 {
            color: var(--rd-black);
            font-size: 32px;
            font-weight: 800;
            margin-bottom: 20px;
        }

        .rd-contact-card p {
            color: var(--rd-grey);
            font-size: 18px;
            line-height: 1.7;
            margin-bottom: 35px;
        }

        .rd-btn {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            padding: 16px 32px;
            border: 1.5px solid var(--rd-brass);
            border-radius: 12px;
            color: var(--rd-black);
            text-decoration: none;
            font-weight: 700;
            transition: all .3s ease;
        }

        .rd-btn:hover {
            background: var(--rd-black);
            border-color: var(--rd-black);
            color: #ffffff;
        }

        .rd-contact-links {
            display: flex;
            justify-content: center;
            gap: 60px;
            flex-wrap: wrap;
            border-top: 1px solid var(--rd-border);
            padding-top: 40px;
            padding-bottom: 60px;
        }

        .rd-contact-link {
            text-decoration: none;
            text-align: center;
        }

        .rd-contact-link span {
            display: block;
            color: var(--rd-black);
            font-size: 16px;
            margin-bottom: 8px;
        }

        .rd-contact-link strong {
            color: var(--rd-brass);
            font-size: 18px;
            font-weight: 700;
        }

        @media (max-width: 768px) {
            .rd-contact-section {
                padding: 20px 20px;
            }

            .rd-contact-cards {
                grid-template-columns: 1fr;
            }

            .rd-contact-card {
                padding: 35px;
                text-align: center;
            }

            .rd-contact-links {
                flex-direction: column;
                gap: 12px;
                padding-top: 25px;
                padding-bottom: 25px;
            }

            .rd-contact-section h2 {
                font-size: 42px;
            }

            .rd-intro {
                font-size: 18px;
            }
        }
      ` }} />
    </>
  );
}
