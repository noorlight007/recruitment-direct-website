"use client";

import React from "react";

export default function ContactSection() {
  return (
    <>
      <section className="rd-contact-section standard-section">
        <div className="rd-contact-container">
          <p className="rd-eyebrow">CONTACT US</p>
          <h2 className="standard-h1">How can we help?</h2>
          <p className="rd-intro standard-h2">
            Choose the option that best suits your requirements.
          </p>

          <div className="rd-contact-cards">
            <div className="rd-contact-card standard-card">
              <h3>AI HIRE NOW</h3>
              <p className="standard-body-p">
                Order Staff 24/7. Powered by AI.
              </p>
              <a href="/ai-hire-now" className="rd-contact-card-btn standard-cta-btn rd-btn-gold">
                Hire Now →
              </a>
            </div>

            <div className="rd-contact-card standard-card">
              <h3>LOOKING FOR STAFF?</h3>
              <p className="standard-body-p">
                Temporary, Contract & Permanent.
              </p>
              <a href="/ai-hire-now-form?type=quote" className="rd-contact-card-btn standard-cta-btn">
                Request Quote →
              </a>
            </div>
          </div>

          <div className="rd-contact-links">
            <a href="tel:01324613198" className="rd-contact-link">
              <span>Call Us</span>
              <strong>01324 613198</strong>
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
            text-align: center !important;
            font-size: 14px;
            font-weight: 700;
            letter-spacing: 3px;
            text-transform: uppercase;
            margin-bottom: 18px;
        }

        .rd-contact-section h2 {
            font-size: 39.2px !important;
            font-weight: 800;
            color: var(--rd-black);
            line-height: 1.1;
            margin-bottom: 18px;
        }

        @media (max-width: 768px) {
            .rd-contact-section h2 {
                font-size: 25.2px !important;
            }
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
            font-size: 24px !important; /* Reduced by 25% (originally 32px) */
            font-weight: 800;
            margin-bottom: 20px;
        }

        .rd-contact-card p {
            color: var(--rd-grey);
            font-size: 18px;
            line-height: 1.7;
            margin-bottom: 35px;
        }

        .rd-contact-card-btn {
            display: inline-flex !important;
            align-items: center !important;
            justify-content: center !important;
            width: 260px !important;
            height: 64px !important;
            line-height: 64px !important;
            padding: 0 !important;
            border-radius: 8px !important;
            font-size: 18px !important;
            font-weight: 800 !important;
            text-transform: uppercase !important;
            letter-spacing: 0.2px !important;
            cursor: pointer !important;
            transition: all .25s ease !important;
            text-decoration: none !important;
            border: 1.5px solid var(--rd-brass) !important;
            color: var(--rd-black) !important;
            background: transparent !important;
            box-sizing: border-box !important;
        }

        .rd-contact-card-btn:hover {
            background: var(--rd-black) !important;
            border-color: var(--rd-black) !important;
            color: #ffffff !important;
            transform: translateY(-2px) !important;
        }

        .rd-contact-card-btn.rd-btn-gold {
            color: #071424 !important;
            background: linear-gradient(135deg, #8a6417 0%, #c89528 24%, #f6d77d 50%, #c28b20 74%, #6f4b10 100%) !important;
            border: 2px solid #f7d98a !important;
            box-shadow:
                inset 0 1px 0 rgba(255, 255, 255, .7),
                inset 0 -2px 0 rgba(70, 45, 5, .35),
                0 10px 24px rgba(184, 134, 11, .32) !important;
        }

        .rd-contact-card-btn.rd-btn-gold:hover {
            background: linear-gradient(135deg, #8a6417 0%, #c89528 24%, #f6d77d 50%, #c28b20 74%, #6f4b10 100%) !important;
            border-color: #f7d98a !important;
            filter: brightness(1.1) !important;
            color: #071424 !important;
            box-shadow:
                inset 0 1px 0 rgba(255, 255, 255, .8),
                inset 0 -2px 0 rgba(70, 45, 5, .4),
                0 12px 28px rgba(184, 134, 11, .45) !important;
            transform: translateY(-2px) !important;
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

            .rd-contact-card-btn {
                width: 100% !important;
                max-width: 280px !important;
                height: 52px !important;
                line-height: 52px !important;
                font-size: 15px !important;
                margin: 0 auto !important;
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
