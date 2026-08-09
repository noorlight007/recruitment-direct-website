"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ArrowRight, CheckCircle2, Star, Shield, Wrench } from "lucide-react";

// Helper component for standard checklist items
const CheckListItem = ({ children }: { children: React.ReactNode }) => (
  <li className="text-slate-600 text-[16.5px] mb-2.5 relative pl-7 leading-[1.6] list-none">
    <span className="absolute left-0 text-[#C99A1F] font-black text-lg">✓</span>
    {children}
  </li>
);

export default function EngineeringAgencyPage() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What engineering sectors do you recruit for?",
      answer: "Recruitment Direct UK Ltd recruits across manufacturing, mechanical engineering, electrical engineering, automation, process engineering, food and beverage manufacturing, aerospace, automotive, energy, utilities, pharmaceuticals, defence, chemical manufacturing and industrial engineering."
    },
    {
      question: "What engineering professionals can you supply?",
      answer: "We recruit engineers, technicians, engineering managers, maintenance professionals, automation specialists, project engineers, CAD engineers, manufacturing engineers, commissioning engineers and many other engineering professionals."
    },
    {
      question: "Do you recruit temporary engineering staff?",
      answer: "Yes. We recruit temporary engineering professionals for planned maintenance, production support, project work, shutdowns, holiday cover and short-term operational requirements."
    },
    {
      question: "Do you recruit contract engineering professionals?",
      answer: "Yes. We support engineering employers requiring contract professionals for capital projects, commissioning, automation, manufacturing improvements and technical programmes."
    },
    {
      question: "Do you recruit permanent engineering staff?",
      answer: "Yes. Recruitment Direct UK Ltd recruits permanent engineering professionals across technical, supervisory, management and executive engineering positions."
    },
    {
      question: "Which locations do you cover?",
      answer: "We provide engineering recruitment services throughout England, Scotland, Wales, Northern Ireland and the Republic of Ireland."
    },
    {
      question: "Why choose Recruitment Direct UK Ltd?",
      answer: "Since 2006, Recruitment Direct UK Ltd has supported engineering employers with recruitment solutions backed by experienced consultants, industry knowledge and recognised company accreditations, helping businesses recruit skilled engineering professionals across the UK and Republic of Ireland."
    }
  ];

  const goldButtonDefaultClass = "rd-btn rd-btn-gold standard-cta-btn";
  const goldButtonClass = "rd-btn rd-btn-gold standard-cta-btn w-[200px] h-[52px] text-center justify-center";
  const blueButtonClass = "rd-btn bg-gradient-to-r from-black/80 to-[#151C62] text-white border border-[#001B5E] font-extrabold shadow-md standard-cta-btn w-[200px] h-[52px]";

  return (
    <div className="min-h-screen bg-[#ffffff] text-slate-900 font-sans">
      <Navbar />

      <main className="max-w-[1140px] mx-auto px-5 pt-[100px] md:pt-[120px] pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-8">
            {/* Hero Section */}
            <section className="mb-6">
              <span className="inline-block mb-3 px-3 py-1 bg-amber-50 text-[#C99A1F] border border-amber-200/50 rounded-full text-xs font-semibold uppercase tracking-wider">
                Engineering Recruitment Since 2006
              </span>

              <h1 className="text-black text-[38px] md:text-[54px] font-extrabold leading-[1.15] tracking-[-0.02em] mb-4">
                Engineering Recruitment Agency UK | Temporary & Permanent Staff
              </h1>

              <p className="text-black text-[17.5px] leading-[1.8] mb-3">
                <strong>Recruitment Direct UK Ltd</strong> provides temporary, contract and permanent engineering recruitment solutions across England, Scotland, Wales, Northern Ireland and the Republic of Ireland, supporting employers with skilled engineering professionals across multiple disciplines.
              </p>

              <p className="text-black text-[17.5px] leading-[1.8] mb-3">
                We work with manufacturers, engineering consultancies, utilities, energy providers, aerospace organisations, automotive companies, food manufacturers, pharmaceutical businesses, defence contractors and industrial employers to recruit skilled engineering professionals at every level.
              </p>

              <p className="text-black text-[17.5px] leading-[1.8] mb-3">
                Whether you require a single engineer, a maintenance team, project support or permanent technical staff, our recruitment consultants take time to understand your business, technical requirements and recruitment objectives before identifying candidates suited to your vacancy.
              </p>

              <div className="mt-6 flex flex-wrap gap-4">
                <Link href="/ai-hire-now" className={goldButtonClass}>
                  AI Hire Now <ArrowRight className="w-5 h-5" />
                </Link>
                <Link href="/request-quote" className={blueButtonClass}>
                  Request Quote
                </Link>
              </div>

              <div className="mt-8 flex flex-wrap gap-3 text-slate-500 text-xs font-semibold">
                <span className="bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-100">Constructionline Gold</span>
                <span className="bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-100">ISO 9001 Certified</span>
                <span className="bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-100">REC Member</span>
                <span className="bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-100">Cyber Essentials Certified</span>
                <span className="bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-100">Recruiting Since 2006</span>
              </div>
            </section>

            {/* Hero Image */}
            <div className="relative w-full h-[280px] md:h-[420px] rounded-2xl overflow-hidden mb-12 shadow-md border border-slate-200">
              <Image
                src="/images/engineering-recruitment-agency.webp"
                alt="Engineering recruitment agency supplying temporary, contract and permanent engineering professionals across the UK and Republic of Ireland"
                fill
                priority
                className="object-cover"
              />
            </div>

            {/* Introduction */}
            <section className="mb-12">
              <h2 className="text-black text-[26px] md:text-[34px] font-extrabold tracking-[-0.01em] border-b border-slate-100 pb-3 mb-6">
                Engineering Recruitment For Modern Industry
              </h2>

              <p className="text-black text-[17.5px] leading-[1.8] mb-4">
                Recruitment Direct UK Ltd supports engineering employers with recruitment solutions tailored to today's technical industries. From high-volume production environments to highly specialised engineering projects, we help businesses recruit the people needed to keep operations moving and projects on schedule.
              </p>

              <p className="text-black text-[17.5px] leading-[1.8] mb-4">
                Our consultants recruit across mechanical, electrical, manufacturing, automation, maintenance, design, process and project engineering, supporting businesses ranging from local manufacturers to multinational engineering organisations throughout the UK and Republic of Ireland.
              </p>
            </section>

            {/* Why Choose Recruitment Direct */}
            <section className="mb-12">
              <h2 className="text-black text-[26px] md:text-[34px] font-extrabold tracking-[-0.01em] border-b border-slate-100 pb-3 mb-6">
                Why Engineering Employers Choose Recruitment Direct UK Ltd
              </h2>

              <p className="text-black text-[17.5px] leading-[1.8] mb-6">
                Engineering recruitment requires more than matching job titles to CVs. Our consultants focus on technical capability, industry experience, qualifications and cultural fit, helping employers recruit engineers who can add value from day one.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                  <h3 className="text-black font-bold text-lg mb-2">Temporary Recruitment</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    Flexible engineering recruitment supporting planned maintenance, shutdowns, production increases, project work and workforce cover.
                  </p>
                </div>
                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                  <h3 className="text-black font-bold text-lg mb-2">Contract Recruitment</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    Recruitment support for engineering projects requiring contract professionals across mechanical, electrical, manufacturing, automation and technical disciplines.
                  </p>
                </div>
                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                  <h3 className="text-black font-bold text-lg mb-2">Permanent Recruitment</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    Helping engineering businesses recruit skilled professionals for long-term growth across technical, operational and leadership positions.
                  </p>
                </div>
              </div>
            </section>

            {/* Engineering Recruitment Services */}
            <section className="mb-12">
              <h2 className="text-black text-[26px] md:text-[34px] font-extrabold tracking-[-0.01em] border-b border-slate-100 pb-3 mb-6">
                Engineering Recruitment Services
              </h2>

              <p className="text-black text-[17.5px] leading-[1.8] mb-6">
                Recruitment Direct UK Ltd delivers temporary, contract and permanent engineering recruitment solutions for employers throughout England, Scotland, Wales, Northern Ireland and the Republic of Ireland. We support businesses ranging from independent engineering companies to multinational manufacturers, helping recruit skilled professionals across technical, operational and management positions.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="p-5 bg-white border border-slate-100 rounded-xl shadow-sm">
                  <h3 className="text-black font-bold text-base mb-1.5">Temporary Engineering Recruitment</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">Flexible recruitment support for planned maintenance, production increases, machinery installations, shutdowns, holiday cover and short-term engineering projects.</p>
                </div>
                <div className="p-5 bg-white border border-slate-100 rounded-xl shadow-sm">
                  <h3 className="text-black font-bold text-base mb-1.5">Contract Engineering Recruitment</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">Engineering contractors for project delivery, commissioning, automation, maintenance, manufacturing improvements and specialist technical assignments.</p>
                </div>
                <div className="p-5 bg-white border border-slate-100 rounded-xl shadow-sm">
                  <h3 className="text-black font-bold text-base mb-1.5">Permanent Engineering Recruitment</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">Recruitment solutions for businesses looking to strengthen their engineering teams with permanent technical, supervisory, management and leadership appointments.</p>
                </div>
                <div className="p-5 bg-white border border-slate-100 rounded-xl shadow-sm">
                  <h3 className="text-black font-bold text-base mb-1.5">Recruitment Built Around Your Business</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">Every assignment begins with understanding your organisation, vacancy, technical requirements and working environment, enabling our consultants to identify candidates who are well suited to both the role and your business.</p>
                </div>
              </div>
            </section>

            {/* Engineering Roles */}
            <section className="mb-12">
              <h2 className="text-black text-[26px] md:text-[34px] font-extrabold tracking-[-0.01em] border-b border-slate-100 pb-3 mb-6">
                Engineering Roles We Recruit
              </h2>

              <p className="text-black text-[17.5px] leading-[1.8] mb-6">
                Recruitment Direct UK Ltd recruits engineering professionals across multiple technical disciplines, supporting employers throughout the UK and Republic of Ireland with permanent, contract and temporary recruitment solutions.
              </p>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-6">
                <div>
                  <h4 className="text-black font-bold text-base mb-2">Mechanical Engineering</h4>
                  <ul className="pl-0 list-none space-y-1.5">
                    <CheckListItem>Mechanical Engineers</CheckListItem>
                    <CheckListItem>Mechanical Design Engineers</CheckListItem>
                    <CheckListItem>Mechanical Fitters</CheckListItem>
                    <CheckListItem>Maintenance Engineers</CheckListItem>
                    <CheckListItem>Pipefitters</CheckListItem>
                    <CheckListItem>Service Engineers</CheckListItem>
                  </ul>
                </div>

                <div>
                  <h4 className="text-black font-bold text-base mb-2">Electrical Engineering</h4>
                  <ul className="pl-0 list-none space-y-1.5">
                    <CheckListItem>Electrical Engineers</CheckListItem>
                    <CheckListItem>EC&amp;I Engineers</CheckListItem>
                    <CheckListItem>Electricians</CheckListItem>
                    <CheckListItem>Instrument Technicians</CheckListItem>
                    <CheckListItem>Control Panel Wiremen</CheckListItem>
                    <CheckListItem>Commissioning Engineers</CheckListItem>
                  </ul>
                </div>

                <div>
                  <h4 className="text-black font-bold text-base mb-2">Manufacturing Engineering</h4>
                  <ul className="pl-0 list-none space-y-1.5">
                    <CheckListItem>Manufacturing Engineers</CheckListItem>
                    <CheckListItem>Production Engineers</CheckListItem>
                    <CheckListItem>Process Engineers</CheckListItem>
                    <CheckListItem>Quality Engineers</CheckListItem>
                    <CheckListItem>Continuous Improvement Engineers</CheckListItem>
                    <CheckListItem>Operations Engineers</CheckListItem>
                  </ul>
                </div>

                <div>
                  <h4 className="text-black font-bold text-base mb-2">Automation & Controls</h4>
                  <ul className="pl-0 list-none space-y-1.5">
                    <CheckListItem>Automation Engineers</CheckListItem>
                    <CheckListItem>PLC Engineers</CheckListItem>
                    <CheckListItem>Controls Engineers</CheckListItem>
                    <CheckListItem>SCADA Engineers</CheckListItem>
                    <CheckListItem>Robotics Engineers</CheckListItem>
                    <CheckListItem>Systems Engineers</CheckListItem>
                  </ul>
                </div>

                <div>
                  <h4 className="text-black font-bold text-base mb-2">Design & Projects</h4>
                  <ul className="pl-0 list-none space-y-1.5">
                    <CheckListItem>Project Engineers</CheckListItem>
                    <CheckListItem>Project Managers</CheckListItem>
                    <CheckListItem>Design Engineers</CheckListItem>
                    <CheckListItem>CAD Engineers</CheckListItem>
                    <CheckListItem>CAD Technicians</CheckListItem>
                    <CheckListItem>BIM Engineers</CheckListItem>
                  </ul>
                </div>

                <div>
                  <h4 className="text-black font-bold text-base mb-2">Leadership</h4>
                  <ul className="pl-0 list-none space-y-1.5">
                    <CheckListItem>Engineering Managers</CheckListItem>
                    <CheckListItem>Maintenance Managers</CheckListItem>
                    <CheckListItem>Production Managers</CheckListItem>
                    <CheckListItem>Operations Managers</CheckListItem>
                    <CheckListItem>Technical Managers</CheckListItem>
                    <CheckListItem>Engineering Directors</CheckListItem>
                  </ul>
                </div>
              </div>
            </section>

            {/* Engineering Industries We Support */}
            <section className="mb-12">
              <h2 className="text-black text-[26px] md:text-[34px] font-extrabold tracking-[-0.01em] border-b border-slate-100 pb-3 mb-6">
                Engineering Industries We Support
              </h2>

              <p className="text-black text-[17.5px] leading-[1.8] mb-6">
                Recruitment Direct UK Ltd works with engineering employers across a broad range of industries, supplying temporary, contract and permanent engineering professionals to support manufacturing, production, maintenance, project delivery and business growth throughout the UK and Republic of Ireland.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
                {[
                  { title: "Manufacturing", desc: "Supporting manufacturers with production, maintenance, quality, process improvement and engineering recruitment across high-volume and specialist manufacturing environments." },
                  { title: "Food & Beverage Manufacturing", desc: "Recruiting engineering professionals for food production, packaging, processing, hygiene systems, maintenance and continuous improvement programmes." },
                  { title: "Automotive", desc: "Engineering recruitment supporting vehicle manufacturing, component production, automation, robotics and assembly operations." },
                  { title: "Aerospace", desc: "Supplying engineering professionals for aerospace manufacturing, maintenance, quality assurance and technical project delivery." },
                  { title: "Energy & Utilities", desc: "Supporting electricity, gas, water and energy providers with engineering recruitment for operational, maintenance and capital investment programmes." },
                  { title: "Pharmaceutical & Life Sciences", desc: "Recruiting engineering professionals for regulated manufacturing, production facilities, maintenance, validation and process improvement." }
                ].map((s, idx) => (
                  <div key={idx} className="bg-slate-50 p-5 rounded-xl border border-slate-100 flex flex-col justify-between">
                    <h4 className="text-black font-bold text-sm mb-1">{s.title}</h4>
                    <p className="text-slate-600 text-xs leading-relaxed mt-1">{s.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Sub-Speciality Content Cards (Mechanical, Electrical, Automation, Process, Design) */}
            <section className="mb-12 space-y-12">
              {/* Mechanical Engineering */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center border-b border-slate-100 pb-8">
                <div>
                  <h2 className="text-black text-[22px] md:text-[28px] font-bold mb-3">Mechanical Engineering Recruitment</h2>
                  <p className="text-slate-600 text-sm leading-relaxed mb-3">
                    Mechanical engineering remains at the heart of manufacturing, production and industrial operations. Recruitment Direct UK Ltd helps employers recruit skilled mechanical engineers, maintenance engineers, design engineers, fitters and technical specialists for both planned growth and urgent recruitment requirements.
                  </p>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    Whether you're expanding an existing engineering team, replacing key personnel or delivering a major engineering project, our consultants work to understand your technical requirements before identifying suitable candidates with the right skills and industry experience.
                  </p>
                </div>
                <div className="relative w-full h-[220px] rounded-xl overflow-hidden shadow-sm border border-slate-100">
                  <Image src="/images/engineering-recruitment-agency.webp" alt="Mechanical engineering recruitment" fill className="object-cover" />
                </div>
              </div>

              {/* Electrical Engineering */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center border-b border-slate-100 pb-8">
                <div className="relative w-full h-[220px] rounded-xl overflow-hidden shadow-sm border border-slate-100 order-last sm:order-first">
                  <Image src="/images/engineering-recruitment-agency.webp" alt="Electrical engineering recruitment" fill className="object-cover" />
                </div>
                <div>
                  <h2 className="text-black text-[22px] md:text-[28px] font-bold mb-3">Electrical Engineering Recruitment</h2>
                  <p className="text-slate-600 text-sm leading-relaxed mb-3">
                    We recruit electrical engineering professionals for manufacturing, industrial, utilities, automation and infrastructure environments, helping employers secure engineers with the technical knowledge required to maintain, improve and develop complex engineering systems.
                  </p>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    Recruitment Direct UK Ltd supports permanent recruitment, contract appointments and temporary engineering requirements across electrical maintenance, controls, instrumentation, commissioning and project engineering.
                  </p>
                </div>
              </div>

              {/* Automation & Controls */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center border-b border-slate-100 pb-8">
                <div>
                  <h2 className="text-black text-[22px] md:text-[28px] font-bold mb-3">Automation & Controls Recruitment</h2>
                  <p className="text-slate-600 text-sm leading-relaxed mb-3">
                    Automation continues to transform manufacturing and industrial operations. Recruitment Direct UK Ltd helps businesses recruit automation professionals who support production efficiency, process improvements, machinery integration and digital manufacturing initiatives.
                  </p>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    We recruit permanent, contract and temporary professionals with experience in PLC programming, control systems, robotics, SCADA, instrumentation and industrial automation across a wide range of engineering environments.
                  </p>
                </div>
                <div className="relative w-full h-[220px] rounded-xl overflow-hidden shadow-sm border border-slate-100">
                  <Image src="/images/engineering-recruitment-agency.webp" alt="Automation and controls recruitment" fill className="object-cover" />
                </div>
              </div>

              {/* Process & Manufacturing */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center border-b border-slate-100 pb-8">
                <div className="relative w-full h-[220px] rounded-xl overflow-hidden shadow-sm border border-slate-100 order-last sm:order-first">
                  <Image src="/images/engineering-recruitment-agency.webp" alt="Process and manufacturing engineering recruitment" fill className="object-cover" />
                </div>
                <div>
                  <h2 className="text-black text-[22px] md:text-[28px] font-bold mb-3">Process & Manufacturing Engineering Recruitment</h2>
                  <p className="text-slate-600 text-sm leading-relaxed mb-3">
                    Efficient production depends on skilled engineering teams capable of improving quality, productivity and operational performance. Recruitment Direct UK Ltd supports manufacturers by recruiting engineers who understand modern production environments and continuous improvement principles.
                  </p>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    We work with manufacturers across food and drink, pharmaceuticals, FMCG, chemicals, automotive, aerospace and industrial production, helping recruit engineers who contribute to operational success.
                  </p>
                </div>
              </div>

              {/* Design & Project */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center pb-4">
                <div>
                  <h2 className="text-black text-[22px] md:text-[28px] font-bold mb-3">Design & Project Engineering Recruitment</h2>
                  <p className="text-slate-600 text-sm leading-relaxed mb-3">
                    Successful engineering projects require experienced professionals from concept through to commissioning. Recruitment Direct UK Ltd recruits design engineers, CAD professionals, BIM specialists, project engineers and project managers to support engineering programmes across multiple industries.
                  </p>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    Whether your organisation is delivering capital investment projects, expanding manufacturing facilities or introducing new production technology, our consultants help identify candidates with the technical and commercial skills required for successful delivery.
                  </p>
                </div>
                <div className="relative w-full h-[220px] rounded-xl overflow-hidden shadow-sm border border-slate-100">
                  <Image src="/images/engineering-recruitment-agency.webp" alt="Project engineering recruitment" fill className="object-cover" />
                </div>
              </div>
            </section>

            {/* Engineering Recruitment Across the UK */}
            <section className="mb-12">
              <h2 className="text-black text-[26px] md:text-[34px] font-extrabold tracking-[-0.01em] border-b border-slate-100 pb-3 mb-6">
                Engineering Recruitment Across the UK & Republic of Ireland
              </h2>

              <p className="text-black text-[17.5px] leading-[1.8] mb-4">
                Recruitment Direct UK Ltd provides engineering recruitment solutions throughout England, Scotland, Wales, Northern Ireland and the Republic of Ireland. We support employers ranging from local engineering companies to international organisations, helping recruit engineering professionals across manufacturing, production, maintenance, utilities, energy, infrastructure and technical services.
              </p>

              <p className="text-black text-[17.5px] leading-[1.8] mb-4">
                Our consultants work closely with clients to understand their recruitment objectives, technical requirements and business culture, enabling us to deliver recruitment solutions that support both immediate hiring needs and long-term workforce planning.
              </p>
            </section>

            {/* Recruitment Process */}
            <section className="mb-12">
              <h2 className="text-black text-[26px] md:text-[34px] font-extrabold tracking-[-0.01em] border-b border-slate-100 pb-3 mb-6">
                Our Engineering Recruitment Process
              </h2>

              <p className="text-black text-[17.5px] leading-[1.8] mb-6">
                Recruitment Direct UK Ltd follows a structured recruitment process designed to help engineering employers recruit efficiently while ensuring every vacancy receives the attention of an experienced recruitment consultant.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
                {[
                  { num: "01", desc: "Submit your vacancy online using AI Hire Now or contact our recruitment team." },
                  { num: "02", desc: "We review your vacancy, technical requirements, qualifications, experience and timescales." },
                  { num: "03", desc: "Suitable engineering professionals are identified from our talent network and active recruitment campaigns." },
                  { num: "04", desc: "Candidates are screened and assessed against your recruitment requirements before being shortlisted." },
                  { num: "05", desc: "Suitable candidates are presented for interview or immediate consideration." },
                  { num: "06", desc: "Ongoing support is provided throughout the recruitment process, from interview through to successful placement." }
                ].map((step, idx) => (
                  <div key={idx} className="bg-slate-50 p-4 rounded-xl border border-slate-100 flex flex-col text-center">
                    <span className="text-[#001B5E] text-2xl font-black mb-1">{step.num}</span>
                    <p className="text-slate-600 text-[11px] leading-[1.5]">{step.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Final CTA */}
            <section>
              <h2 className="text-black text-[26px] md:text-[34px] font-extrabold tracking-[-0.01em] border-b border-slate-100 pb-3 mb-6">
                Looking to Recruit Engineering Professionals?
              </h2>

              <p className="text-black text-[17.5px] leading-[1.8] mb-5">
                Whether you're recruiting a single engineer or expanding an entire engineering department, Recruitment Direct UK Ltd provides temporary, contract and permanent engineering recruitment solutions tailored to your business.
              </p>

              <div className="mt-6 flex flex-wrap gap-4">
                <Link href="/ai-hire-now" className={goldButtonClass}>
                  AI Hire Now <ArrowRight className="w-5 h-5" />
                </Link>
                <Link href="/request-quote" className={blueButtonClass}>
                  Request Quote
                </Link>
              </div>
            </section>

            {/* Accordion FAQ Section */}
            <section className="mt-12 bg-slate-50 p-6 rounded-2xl border border-slate-100">
              <h2 className="text-black text-[26px] md:text-[34px] font-extrabold tracking-[-0.01em] border-b border-slate-200 pb-3 mb-6 mt-0">
                Engineering Recruitment FAQs
              </h2>

              <div className="space-y-4 mt-6">
                {faqs.map((faq, index) => {
                  const isOpen = openFaqIndex === index;
                  return (
                    <div
                      key={index}
                      className="border-b border-slate-200 pb-4 last:border-0 last:pb-0"
                    >
                      <button
                        onClick={() => toggleFaq(index)}
                        className="w-full flex justify-between items-center text-left py-2 group focus:outline-none !bg-gradient-to-r from-black/80 to-[#151C62]"
                      >
                        <span className="font-bold text-white text-[17px] group-hover:text-[#ffffff]/80 transition-colors">
                          {faq.question}
                        </span>
                        <ChevronDown
                          className={`w-5 h-5 text-white transition-transform duration-300 ${isOpen ? "transform rotate-180" : ""
                            }`}
                        />
                      </button>
                      <AnimatePresence initial={false}>
                        {isOpen && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.25, ease: "easeInOut" }}
                            className="overflow-hidden"
                          >
                            <p className="mt-2 text-slate-600 text-[16px] leading-relaxed pr-6 mb-0">
                              {faq.answer}
                            </p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4 space-y-8">
            <div className="bg-gradient-to-r from-black/80 to-[#151C62] text-white p-6 rounded-2xl shadow-md border border-slate-200 mt-0 lg:mt-6">
              <Wrench className="text-[#F7D774] w-10 h-10 mb-4 animate-pulse" />
              <h3 className="text-white text-xl font-bold mb-2">Need Staff Now?</h3>
              <p className="text-slate-200 text-sm leading-relaxed mb-6">
                Submit staffing requests 24/7. AI screens our database to match qualified engineering specialists in minutes.
              </p>
              <div className="flex justify-center">
                <Link href="/ai-hire-now" className={`${goldButtonDefaultClass} w-auto text-center`}>
                  Submit Vacancy
                </Link>
              </div>
            </div>

            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
              <h3 className="text-slate-800 text-lg font-bold mb-4">Why Choose RD?</h3>
              <div className="space-y-4">
                <div className="flex gap-3">
                  <CheckCircle2 className="text-[#C99A1F] w-5 h-5 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-600 text-sm">Consultant reviewed, verified candidates</span>
                </div>
                <div className="flex gap-3">
                  <CheckCircle2 className="text-[#C99A1F] w-5 h-5 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-600 text-sm">Strict compliance & reference checking</span>
                </div>
                <div className="flex gap-3">
                  <CheckCircle2 className="text-[#C99A1F] w-5 h-5 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-600 text-sm">Supplying UK contractors since 2006</span>
                </div>
              </div>
            </div>

            {/* Related Sector Agencies widget for contextual internal link building */}
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
              <h3 className="text-slate-800 text-lg font-bold mb-4">Related Sector Agencies & Locations</h3>
              <div className="space-y-3 text-sm">
                <Link href="/construction-recruitment-agency" className="block text-[#001B5E] hover:text-[#C99A1F] font-semibold transition-colors">
                  → Construction Recruitment
                </Link>
                <Link href="/renewable-energy-recruitment-agency" className="block text-[#001B5E] hover:text-[#C99A1F] font-semibold transition-colors">
                  → Renewable Energy Recruitment
                </Link>
                <Link href="/locations/scotland/falkirk" className="block text-[#001B5E] hover:text-[#C99A1F] font-semibold transition-colors">
                  → Recruitment Agency Falkirk
                </Link>
                <Link href="/" className="block text-[#001B5E] hover:text-[#C99A1F] font-semibold transition-colors">
                  → Home
                </Link>
                <Link href="/#sectors" className="block text-[#001B5E] hover:text-[#C99A1F] font-semibold transition-colors">
                  → All Sectors We Support
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />

      {/* JSON-LD Schemas */}
      {/* 1. Breadcrumb Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://rd1.co.uk"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "Engineering Recruitment Agency",
                "item": "https://rd1.co.uk/engineering-recruitment-agency"
              }
            ]
          })
        }}
      />

      {/* 2. Organization Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Recruitment Direct UK Ltd",
            "url": "https://rd1.co.uk",
            "logo": "https://rd1.co.uk/logo.png",
            "sameAs": [
              "https://www.facebook.com/recruitmentdirect",
              "https://www.linkedin.com/company/recruitment-direct-uk-ltd"
            ]
          })
        }}
      />

      {/* 3. EmploymentAgency Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "EmploymentAgency",
            "name": "Recruitment Direct UK Ltd",
            "image": "https://rd1.co.uk/images/engineering-recruitment-agency.webp",
            "url": "https://rd1.co.uk",
            "logo": "https://rd1.co.uk/logo.png",
            "telephone": "01324613198",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Suite 3, Enterprise House, Springkerse Business Park",
              "addressLocality": "Stirling",
              "postalCode": "FK7 7UF",
              "addressCountry": "GB"
            },
            "priceRange": "$$",
            "areaServed": [
              "England",
              "Scotland",
              "Wales",
              "Northern Ireland",
              "Republic of Ireland"
            ]
          })
        }}
      />

      {/* 4. FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqs.map((faq) => ({
              "@type": "Question",
              "name": faq.question,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
              }
            }))
          })
        }}
      />

      {/* 5. WebPage Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Engineering Recruitment Agency UK",
            "url": "https://rd1.co.uk/engineering-recruitment-agency",
            "description": "Engineering Recruitment Agency supplying temporary, contract and permanent engineering professionals across England, Scotland, Wales, Northern Ireland and the Republic of Ireland.",
            "isPartOf": {
              "@type": "WebSite",
              "name": "Recruitment Direct UK",
              "url": "https://rd1.co.uk"
            }
          })
        }}
      />
    </div>
  );
}
