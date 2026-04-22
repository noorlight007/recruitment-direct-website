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
          className="saas-contact-card bg-white rounded-[24px] p-[28px_22px_110px] md:p-[50px_40px_110px] shadow-[0_12px_40px_rgba(15,23,42,0.06)] border border-[#e7ecf3]"
        >
          <div className="saas-contact-header">
            <h2 className="text-[36px] md:text-[38px] leading-[1.05] tracking-[-0.04em] font-[800] mb-[14px] text-[#0b1533]">
              Speak to our team instantly
            </h2>
            <p className="text-[17px] leading-[1.6] text-[#667085] mb-[24px]">
              Get a fast response by phone, WhatsApp or email.
            </p>
          </div>

          <div className="saas-contact-actions flex flex-col md:flex-row gap-[14px] mb-[28px]">
            <Link 
              href="/contact" 
              className="btn-primary w-full md:w-auto md:px-10 h-[56px] rounded-[14px] flex items-center justify-center text-[16px] font-[700] bg-gradient-to-br from-[#2a6cff] to-[#1958f2] text-white shadow-[0_10px_24px_rgba(37,99,235,0.25)] transition-all hover:-translate-y-px active:scale-[0.98]"
            >
              Contact Us
            </Link>
            <a 
              href="https://wa.me/447590882626" 
              className="btn-secondary w-full md:w-auto md:px-10 h-[56px] rounded-[14px] flex items-center justify-center text-[16px] font-[700] bg-[#22c55e] text-white shadow-[0_10px_24px_rgba(34,197,94,0.2)] transition-all hover:-translate-y-px active:scale-[0.98]"
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

