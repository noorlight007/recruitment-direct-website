"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

export default function ContactSection() {
  return (
    <section className="saas-contact py-20 px-5 bg-[#f8fafc]">
      <div className="max-w-[1200px] mx-auto">
        <motion.div
          {...fadeUp}
          className="saas-contact-card bg-white rounded-[32px] p-[64px_32px] md:p-[80px_64px] shadow-[0_25px_60px_rgba(15,23,42,0.04)] border border-[#eef2f6] max-w-[600px] mx-auto text-center"
        >
          <div className="saas-contact-header">
            <h2 className="text-[36px] md:text-[42px] leading-[1.05] tracking-[-0.04em] font-[800] mb-[18px] text-[#0b1533]">
              Speak to our team instantly
            </h2>
            <p className="text-[18px] leading-[1.6] text-[#667085] mb-[40px]">
              Get a fast response by phone, WhatsApp or email.
            </p>
          </div>

          <div className="saas-contact-actions flex flex-col md:flex-row gap-[16px] justify-center mb-[40px]">
            <Link
              href="/contact"
              className="btn-primary w-full md:w-auto px-10 h-[60px] rounded-[20px] flex items-center justify-center text-[17px] font-[700] text-white transition-all duration-200"
            >
              Contact Us
            </Link>
            <a
              href="https://wa.me/447590882626"
              className="btn-secondary w-full md:w-auto px-10 h-[60px] rounded-[20px] flex items-center justify-center text-[17px] font-[700] text-white transition-all duration-200"
            >
              Message us on WhatsApp
            </a>
          </div>

          <div className="saas-divider h-[1px] bg-[#edf1f7] my-[24px]"></div>

          <div className="saas-contact-info flex flex-col md:flex-row md:flex-wrap gap-[22px] md:gap-[40px]">
            <div className="info-block">
              <span className="label block text-[12px] uppercase tracking-[0.08em] font-[700] text-[#98a2b3] mb-[6px]">
                Call
              </span>
              <div className="value text-[14px] font-[600] text-[#101828] leading-[1.4] flex flex-col">
                <a href="tel:01324613198" className="hover:text-[#2563eb] transition-colors">01324 613198</a>
                {/* <a href="tel:07590882626" className="hover:text-[#2563eb] transition-colors">07590 882626</a> */}
              </div>
            </div>

            <div className="info-block">
              <span className="label block text-[12px] uppercase tracking-[0.08em] font-[700] text-[#98a2b3] mb-[6px]">
                Email
              </span>
              <div className="value text-[14px] font-[600] text-[#101828] leading-[1.4]">
                <a href="mailto:sales@rd1.co.uk" className="hover:text-[#2563eb] transition-colors">sales@rd1.co.uk</a>
              </div>
            </div>

            {/* <div className="info-block">
              <span className="label block text-[12px] uppercase tracking-[0.08em] font-[700] text-[#98a2b3] mb-[6px]">
                Location
              </span>
              <div className="value text-[18px] font-[600] text-[#101828] leading-[1.4]">
                Linlithgow, Scotland
              </div>
            </div> */}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

