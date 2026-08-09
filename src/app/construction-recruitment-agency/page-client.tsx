"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ArrowRight, CheckCircle2, Star, Shield, HardHat } from "lucide-react";

// Helper component for standard checklist items
const CheckListItem = ({ children }: { children: React.ReactNode }) => (
  <li className="text-slate-600 text-[16.5px] mb-2.5 relative pl-7 leading-[1.6] list-none">
    <span className="absolute left-0 text-[#C99A1F] font-black text-lg">✓</span>
    {children}
  </li>
);

export default function ConstructionAgencyPage() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What construction sectors do you recruit for?",
      answer: "Recruitment Direct UK Ltd recruits across commercial construction, residential construction, civil engineering, infrastructure, rail, highways, utilities, industrial construction, fit out and refurbishment projects throughout the UK and Republic of Ireland."
    },
    {
      question: "What construction professionals can you supply?",
      answer: "We recruit project managers, site managers, quantity surveyors, civil engineers, site engineers, estimators, tradespeople, plant operators, labourers and many other construction professionals."
    },
    {
      question: "Do you provide temporary construction recruitment?",
      answer: "Yes. We supply temporary construction professionals for planned projects, peak workloads, shutdowns, holiday cover and emergency workforce requirements."
    },
    {
      question: "Do you recruit permanent construction staff?",
      answer: "Yes. We recruit permanent construction professionals across management, engineering, commercial, technical, trades and labour disciplines."
    },
    {
      question: "Which locations do you cover?",
      answer: "We provide construction recruitment services throughout England, Scotland, Wales, Northern Ireland and the Republic of Ireland."
    },
    {
      question: "How does AI Hire Now work?",
      answer: "Submit your staffing requirement online 24 hours a day. AI searches our candidate database before one of our recruitment consultants reviews your vacancy and contacts you to discuss your recruitment requirements."
    },
    {
      question: "Why choose Recruitment Direct UK Ltd?",
      answer: "Since 2006, Recruitment Direct UK Ltd has supported construction businesses with experienced recruitment consultants, AI-powered candidate search, consultant verified candidates and nationwide recruitment coverage across the UK and Republic of Ireland."
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
                Trusted Construction Recruitment Since 2006
              </span>

              <h1 className="text-black text-[38px] md:text-[54px] font-extrabold leading-[1.15] tracking-[-0.02em] mb-4">
                Construction Recruitment Agency UK | Temporary & Permanent Staff
              </h1>

              <p className="text-black text-[17.5px] leading-[1.8] mb-3">
                <strong>Recruitment Direct UK Ltd</strong> is an established <strong>Construction Recruitment Agency</strong> supplying <strong>temporary, contract and permanent construction professionals</strong> across England, Scotland, Wales, Northern Ireland and the <strong>Republic of Ireland</strong>.
              </p>

              <p className="text-black text-[17.5px] leading-[1.8] mb-3">
                We support construction companies, principal contractors, developers, civil engineering contractors, infrastructure providers, utilities, local authorities and house builders by supplying skilled construction professionals for projects of every size.
              </p>

              <p className="text-black text-[17.5px] leading-[1.8] mb-3">
                Whether you require a single skilled tradesperson, site manager, project engineer or an entire project workforce, our experienced recruitment consultants combine construction recruitment expertise with AI-powered candidate search to identify suitable candidates quickly, with every shortlisted applicant consultant verified before submission.
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
                <span className="bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-100">Cyber Essentials</span>
                <span className="bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-100">Trusted Since 2006</span>
              </div>
            </section>

            {/* Hero Image */}
            <div className="relative w-full h-[280px] md:h-[420px] rounded-2xl overflow-hidden mb-12 shadow-md border border-slate-200">
              <Image
                src="/images/construction-recruitment-agency.webp"
                alt="Construction Recruitment Agency supplying temporary, contract and permanent construction professionals across the UK and Republic of Ireland"
                fill
                priority
                className="object-cover"
              />
            </div>

            {/* Introduction */}
            <section className="mb-12">
              <h2 className="text-black text-[26px] md:text-[34px] font-extrabold tracking-[-0.01em] border-b border-slate-100 pb-3 mb-6">
                Construction Recruitment Supply
              </h2>

              <p className="text-black text-[17.5px] leading-[1.8] mb-4">
                Recruitment Direct UK Ltd delivers temporary, contract and permanent construction recruitment solutions for organisations throughout the UK and Republic of Ireland. Since 2006, we have supported commercial construction, civil engineering, infrastructure, rail, highways, utilities, industrial, residential and public sector projects by supplying skilled construction professionals when and where they are needed.
              </p>

              <p className="text-black text-[17.5px] leading-[1.8] mb-4">
                Whether you require a single contractor, a permanent employee or an entire site workforce, our recruitment consultants work closely with your business to understand your project, timescales and workforce requirements before sourcing suitable candidates from our extensive construction talent network.
              </p>
            </section>

            {/* Why Choose Recruitment Direct */}
            <section className="mb-12">
              <h2 className="text-black text-[26px] md:text-[34px] font-extrabold tracking-[-0.01em] border-b border-slate-100 pb-3 mb-6">
                Why Choose Recruitment Direct UK Ltd?
              </h2>

              <p className="text-black text-[17.5px] leading-[1.8] mb-6">
                Since 2006, Recruitment Direct UK Ltd has helped construction businesses recruit skilled temporary, contract and permanent professionals across the UK and Republic of Ireland. Our experienced consultants understand the demands of the construction industry, delivering recruitment solutions that help clients secure the right people quickly while maintaining high standards of service and compliance.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                  <h3 className="text-black font-bold text-lg mb-2">Temporary Recruitment</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    Rapid access to skilled construction professionals to support planned projects, additional workloads, holiday cover and emergency requirements.
                  </p>
                </div>
                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                  <h3 className="text-black font-bold text-lg mb-2">Contract Recruitment</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    Flexible contract recruitment solutions supporting commercial construction, civil engineering, infrastructure, utilities and major project delivery.
                  </p>
                </div>
                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                  <h3 className="text-black font-bold text-lg mb-2">Permanent Recruitment</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    Recruiting experienced construction professionals from site level through to senior management across every stage of the construction lifecycle.
                  </p>
                </div>
              </div>
            </section>

            {/* Construction Recruitment Services */}
            <section className="mb-12">
              <h2 className="text-black text-[26px] md:text-[34px] font-extrabold tracking-[-0.01em] border-b border-slate-100 pb-3 mb-6">
                Construction Recruitment Services
              </h2>

              <p className="text-black text-[17.5px] leading-[1.8] mb-6">
                Recruitment Direct UK Ltd provides specialist construction recruitment services to contractors, developers, civil engineering companies, infrastructure providers, utilities, local authorities, housing developers and private sector organisations throughout England, Scotland, Wales, Northern Ireland and the Republic of Ireland.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="p-5 bg-white border border-slate-100 rounded-xl shadow-sm">
                  <h3 className="text-black font-bold text-base mb-1.5">Temporary Construction Recruitment</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">We supply experienced temporary construction professionals for short-term cover, peak workloads, shutdowns, project mobilisation and long-term assignments.</p>
                </div>
                <div className="p-5 bg-white border border-slate-100 rounded-xl shadow-sm">
                  <h3 className="text-black font-bold text-base mb-1.5">Contract Construction Recruitment</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">Our consultants recruit contract construction professionals for major infrastructure, commercial construction, utilities, highways, rail and civil engineering projects.</p>
                </div>
                <div className="p-5 bg-white border border-slate-100 rounded-xl shadow-sm">
                  <h3 className="text-black font-bold text-base mb-1.5">Permanent Construction Recruitment</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">We recruit permanent construction professionals across management, engineering, trades, technical and commercial disciplines.</p>
                </div>
                <div className="p-5 bg-white border border-slate-100 rounded-xl shadow-sm">
                  <h3 className="text-black font-bold text-base mb-1.5">AI-Powered Candidate Skill Search</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">AI helps identify suitable candidates 24/7 from our database, while every shortlisted applicant is reviewed by one of our experienced recruitment consultants before being presented to your business.</p>
                </div>
              </div>
            </section>

            {/* Construction Roles */}
            <section className="mb-12">
              <h2 className="text-black text-[26px] md:text-[34px] font-extrabold tracking-[-0.01em] border-b border-slate-100 pb-3 mb-6">
                Construction Roles We Recruit
              </h2>

              <p className="text-black text-[17.5px] leading-[1.8] mb-6">
                Recruitment Direct UK Ltd recruits temporary, contract and permanent construction professionals across every stage of the construction lifecycle. We support contractors, developers, civil engineering companies, infrastructure providers, utilities and house builders throughout the UK and Republic of Ireland.
              </p>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-6">
                <div>
                  <h4 className="text-black font-bold text-base mb-2">Construction Management</h4>
                  <ul className="pl-0 list-none space-y-1.5">
                    <CheckListItem>Project Managers</CheckListItem>
                    <CheckListItem>Construction Managers</CheckListItem>
                    <CheckListItem>Contracts Managers</CheckListItem>
                    <CheckListItem>Site Managers</CheckListItem>
                    <CheckListItem>Site Supervisors</CheckListItem>
                    <CheckListItem>General Foremen</CheckListItem>
                    <CheckListItem>Works Managers</CheckListItem>
                    <CheckListItem>Section Engineers</CheckListItem>
                  </ul>
                </div>

                <div>
                  <h4 className="text-black font-bold text-base mb-2">Civil Engineering & Technical</h4>
                  <ul className="pl-0 list-none space-y-1.5">
                    <CheckListItem>Civil Engineers</CheckListItem>
                    <CheckListItem>Site Engineers</CheckListItem>
                    <CheckListItem>Setting Out Engineers</CheckListItem>
                    <CheckListItem>Structural Engineers</CheckListItem>
                    <CheckListItem>Design Engineers</CheckListItem>
                    <CheckListItem>CAD Technicians</CheckListItem>
                    <CheckListItem>Planning Engineers</CheckListItem>
                    <CheckListItem>Temporary Works Coordinators</CheckListItem>
                  </ul>
                </div>

                <div>
                  <h4 className="text-black font-bold text-base mb-2">Commercial & Professional</h4>
                  <ul className="pl-0 list-none space-y-1.5">
                    <CheckListItem>Quantity Surveyors</CheckListItem>
                    <CheckListItem>Senior Quantity Surveyors</CheckListItem>
                    <CheckListItem>Estimators</CheckListItem>
                    <CheckListItem>Commercial Managers</CheckListItem>
                    <CheckListItem>Buyers</CheckListItem>
                    <CheckListItem>Procurement Managers</CheckListItem>
                    <CheckListItem>Planning Managers</CheckListItem>
                    <CheckListItem>Project Planners</CheckListItem>
                  </ul>
                </div>

                <div>
                  <h4 className="text-black font-bold text-base mb-2">Trades & Labour</h4>
                  <ul className="pl-0 list-none space-y-1.5">
                    <CheckListItem>Groundworkers</CheckListItem>
                    <CheckListItem>Bricklayers</CheckListItem>
                    <CheckListItem>Joiners</CheckListItem>
                    <CheckListItem>Carpenters</CheckListItem>
                    <CheckListItem>Electricians</CheckListItem>
                    <CheckListItem>Plumbers</CheckListItem>
                    <CheckListItem>Painters & Decorators</CheckListItem>
                    <CheckListItem>Steel Fixers</CheckListItem>
                    <CheckListItem>Dry Liners</CheckListItem>
                    <CheckListItem>Ceiling Fixers</CheckListItem>
                    <CheckListItem>Roofers</CheckListItem>
                    <CheckListItem>Welders</CheckListItem>
                  </ul>
                </div>

                <div>
                  <h4 className="text-black font-bold text-base mb-2">Plant & Heavy Equipment</h4>
                  <ul className="pl-0 list-none space-y-1.5">
                    <CheckListItem>360 Excavator Operators</CheckListItem>
                    <CheckListItem>180 Excavator Operators</CheckListItem>
                    <CheckListItem>Telehandler Operators</CheckListItem>
                    <CheckListItem>Dumper Drivers</CheckListItem>
                    <CheckListItem>Roller Drivers</CheckListItem>
                    <CheckListItem>ADT Operators</CheckListItem>
                    <CheckListItem>Crane Operators</CheckListItem>
                    <CheckListItem>Slinger Signallers</CheckListItem>
                    <CheckListItem>Plant Fitters</CheckListItem>
                  </ul>
                </div>

                <div>
                  <h4 className="text-black font-bold text-base mb-2">Site Support</h4>
                  <ul className="pl-0 list-none space-y-1.5">
                    <CheckListItem>Labourers</CheckListItem>
                    <CheckListItem>Skilled Labourers</CheckListItem>
                    <CheckListItem>Traffic Marshals</CheckListItem>
                    <CheckListItem>Banksmen</CheckListItem>
                    <CheckListItem>Gatemen</CheckListItem>
                    <CheckListItem>Storepersons</CheckListItem>
                    <CheckListItem>Logistics Coordinators</CheckListItem>
                    <CheckListItem>Site Administrators</CheckListItem>
                  </ul>
                </div>
              </div>
            </section>

            {/* Construction Sectors */}
            <section className="mb-12">
              <h2 className="text-black text-[26px] md:text-[34px] font-extrabold tracking-[-0.01em] border-b border-slate-100 pb-3 mb-6">
                Construction Sectors We Recruit For
              </h2>

              <p className="text-black text-[17.5px] leading-[1.8] mb-6">
                Recruitment Direct UK Ltd supplies skilled construction professionals across a wide range of construction sectors throughout England, Scotland, Wales, Northern Ireland and the Republic of Ireland. From large infrastructure projects to residential developments, our experienced consultants deliver temporary, contract and permanent recruitment solutions tailored to your project requirements.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
                {[
                  { title: "Commercial Construction", desc: "Office developments, retail, mixed-use developments, hotels, leisure facilities and commercial building projects." },
                  { title: "Civil Engineering", desc: "Groundworks, bridges, structures, drainage, heavy civils, earthworks and major civil engineering projects." },
                  { title: "Infrastructure", desc: "National infrastructure, transport, public sector, strategic infrastructure and large-scale development programmes." },
                  { title: "Rail", desc: "Rail infrastructure, station upgrades, track renewals, maintenance and associated engineering projects." },
                  { title: "Highways", desc: "Road construction, highways maintenance, bridge schemes, junction improvements and motorway infrastructure." },
                  { title: "Utilities", desc: "Water, gas, electricity, telecoms and utility infrastructure projects across the UK and Republic of Ireland." },
                  { title: "Residential Construction", desc: "Housing developments, apartment schemes, affordable housing and large residential construction projects." },
                  { title: "Industrial Construction", desc: "Manufacturing facilities, warehouses, logistics hubs, production sites and industrial developments." },
                  { title: "Fit Out & Refurbishment", desc: "Commercial fit out, office refurbishment, retail refurbishment, education, healthcare and public sector refurbishment projects." }
                ].map((s, idx) => (
                  <div key={idx} className="bg-slate-50 p-5 rounded-xl border border-slate-100 flex flex-col justify-between">
                    <h4 className="text-black font-bold text-sm mb-1">{s.title}</h4>
                    <p className="text-slate-600 text-xs leading-relaxed mt-1">{s.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Construction Recruitment Specialists Since 2006 */}
            <section className="mb-12">
              <h2 className="text-black text-[26px] md:text-[34px] font-extrabold tracking-[-0.01em] border-b border-slate-100 pb-3 mb-6">
                Construction Recruitment Specialists Since 2006
              </h2>

              <p className="text-black text-[17.5px] leading-[1.8] mb-4">
                Recruitment Direct UK Ltd has supported construction businesses since 2006, supplying temporary, contract and permanent construction professionals for projects ranging from local developments to nationally significant infrastructure schemes. Our consultants understand the challenges of recruiting within the construction industry and work closely with clients to identify skilled professionals who meet the technical, commercial and operational requirements of every project.
              </p>

              <p className="text-black text-[17.5px] leading-[1.8] mb-4">
                Whether you require a single construction professional or a complete workforce, we combine experienced recruitment consultants with AI-powered candidate search to identify suitable candidates efficiently. Every shortlisted applicant is reviewed by a recruitment consultant before submission, ensuring quality remains at the centre of every recruitment campaign.
              </p>
            </section>

            {/* Construction Recruitment Across Every Discipline */}
            <section className="mb-12">
              <h2 className="text-black text-[26px] md:text-[34px] font-extrabold tracking-[-0.01em] border-b border-slate-100 pb-3 mb-6">
                Construction Recruitment Across Every Discipline
              </h2>

              <p className="text-black text-[17.5px] leading-[1.8] mb-6">
                Our experienced consultants recruit construction professionals across multiple disciplines, helping clients secure skilled workers for projects of every size throughout the UK and Republic of Ireland.
              </p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div>
                  <h4 className="text-black font-bold text-base mb-2">Management</h4>
                  <ul className="pl-0 list-none space-y-1 text-slate-600 text-sm">
                    <li>✓ Project Managers</li>
                    <li>✓ Construction Managers</li>
                    <li>✓ Contracts Managers</li>
                    <li>✓ Site Managers</li>
                    <li>✓ Site Supervisors</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-black font-bold text-base mb-2">Engineering</h4>
                  <ul className="pl-0 list-none space-y-1 text-slate-600 text-sm">
                    <li>✓ Civil Engineers</li>
                    <li>✓ Site Engineers</li>
                    <li>✓ Structural Engineers</li>
                    <li>✓ Quantity Surveyors</li>
                    <li>✓ Estimators</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-black font-bold text-base mb-2">Trades</h4>
                  <ul className="pl-0 list-none space-y-1 text-slate-600 text-sm">
                    <li>✓ Groundworkers</li>
                    <li>✓ Bricklayers</li>
                    <li>✓ Joiners</li>
                    <li>✓ Electricians</li>
                    <li>✓ Plumbers</li>
                    <li>✓ Steel Fixers</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-black font-bold text-base mb-2">Plant & Labour</h4>
                  <ul className="pl-0 list-none space-y-1 text-slate-600 text-sm">
                    <li>✓ 360 Operators</li>
                    <li>✓ 180 Operators</li>
                    <li>✓ Telehandler Operators</li>
                    <li>✓ Dumper Drivers</li>
                    <li>✓ Banksmen</li>
                    <li>✓ Labourers</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Why Construction Companies Choose RD */}
            <section className="mb-12">
              <h2 className="text-black text-[26px] md:text-[34px] font-extrabold tracking-[-0.01em] border-b border-slate-100 pb-3 mb-6">
                Why Construction Companies Choose Recruitment Direct UK Ltd
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-black font-bold text-base mb-1.5">Industry Experience</h4>
                  <p className="text-slate-600 text-sm leading-relaxed">Since 2006, Recruitment Direct UK Ltd has supported construction businesses with reliable recruitment solutions backed by experienced consultants who understand the demands of the construction industry.</p>
                </div>
                <div>
                  <h4 className="text-black font-bold text-base mb-1.5">Consultant Verified Candidates</h4>
                  <p className="text-slate-600 text-sm leading-relaxed">Every shortlisted applicant is reviewed by one of our recruitment consultants before submission, helping maintain quality throughout the recruitment process.</p>
                </div>
                <div>
                  <h4 className="text-black font-bold text-base mb-1.5">AI-Powered Candidate Search</h4>
                  <p className="text-slate-600 text-sm leading-relaxed">AI technology helps identify suitable candidates faster from our database, allowing our consultants to respond quickly while retaining human oversight throughout the recruitment process.</p>
                </div>
                <div>
                  <h4 className="text-black font-bold text-base mb-1.5">UK & Republic of Ireland Coverage</h4>
                  <p className="text-slate-600 text-sm leading-relaxed">We support construction businesses across England, Scotland, Wales, Northern Ireland and the Republic of Ireland with temporary, contract and permanent recruitment solutions.</p>
                </div>
              </div>
            </section>

            {/* Commercial Construction Recruitment */}
            <section className="mb-12">
              <h2 className="text-black text-[26px] md:text-[34px] font-extrabold tracking-[-0.01em] border-b border-slate-100 pb-3 mb-6">
                Commercial Construction Recruitment
              </h2>

              <p className="text-black text-[17.5px] leading-[1.8] mb-4">
                Recruitment Direct UK Ltd supports commercial construction companies by supplying temporary, contract and permanent construction professionals for office developments, retail, mixed-use developments, education, healthcare, industrial and public sector construction projects throughout the UK and Republic of Ireland.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <p className="text-slate-600 text-sm leading-relaxed">
                  Our consultants recruit experienced construction managers, site managers, engineers, quantity surveyors, tradespeople and labour across every stage of commercial construction projects, helping clients secure skilled professionals to support new build, refurbishment and fit-out programmes.
                </p>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Whether your project requires a single specialist or an entire workforce, Recruitment Direct UK Ltd delivers construction recruitment solutions tailored to your project requirements, programme and timescales.
                </p>
              </div>
            </section>

            {/* Civil Engineering Recruitment */}
            <section className="mb-12">
              <h2 className="text-black text-[26px] md:text-[34px] font-extrabold tracking-[-0.01em] border-b border-slate-100 pb-3 mb-6">
                Civil Engineering Recruitment
              </h2>

              <p className="text-black text-[17.5px] leading-[1.8] mb-5">
                Recruitment Direct UK Ltd supplies experienced civil engineering professionals for highways, bridges, drainage, utilities, infrastructure, earthworks, water, environmental and major engineering projects throughout England, Scotland, Wales, Northern Ireland and the Republic of Ireland.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div>
                  <h4 className="text-black font-bold text-sm mb-2">Engineering Roles</h4>
                  <ul className="pl-5 list-disc space-y-1 text-slate-600 text-xs leading-relaxed">
                    <li>Civil Engineers</li>
                    <li>Site Engineers</li>
                    <li>Setting Out Engineers</li>
                    <li>Structural Engineers</li>
                    <li>Section Engineers</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-black font-bold text-sm mb-2">Commercial Roles</h4>
                  <ul className="pl-5 list-disc space-y-1 text-slate-600 text-xs leading-relaxed">
                    <li>Quantity Surveyors</li>
                    <li>Estimators</li>
                    <li>Commercial Managers</li>
                    <li>Project Planners</li>
                    <li>Planning Engineers</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-black font-bold text-sm mb-2">Management Roles</h4>
                  <ul className="pl-5 list-disc space-y-1 text-slate-600 text-xs leading-relaxed">
                    <li>Project Managers</li>
                    <li>Construction Managers</li>
                    <li>Contracts Managers</li>
                    <li>Site Managers</li>
                    <li>General Foremen</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Trades & Labour Recruitment */}
            <section className="mb-12">
              <h2 className="text-black text-[26px] md:text-[34px] font-extrabold tracking-[-0.01em] border-b border-slate-100 pb-3 mb-6">
                Trades & Labour Recruitment
              </h2>

              <p className="text-black text-[17.5px] leading-[1.8] mb-5">
                Recruitment Direct UK Ltd supplies skilled tradespeople and construction labour to contractors, developers, civil engineering companies and infrastructure providers throughout the UK and Republic of Ireland.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
                <div>
                  <h4 className="text-black font-bold text-sm mb-2">Groundworks</h4>
                  <ul className="pl-5 list-disc space-y-1 text-slate-600 text-xs leading-relaxed">
                    <li>Groundworkers</li>
                    <li>Pipelayers</li>
                    <li>Kerb Layers</li>
                    <li>Drainage Operatives</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-black font-bold text-sm mb-2">Building Trades</h4>
                  <ul className="pl-5 list-disc space-y-1 text-slate-600 text-xs leading-relaxed">
                    <li>Bricklayers</li>
                    <li>Joiners</li>
                    <li>Carpenters</li>
                    <li>Roofers</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-black font-bold text-sm mb-2">M&E</h4>
                  <ul className="pl-5 list-disc space-y-1 text-slate-600 text-xs leading-relaxed">
                    <li>Electricians</li>
                    <li>Plumbers</li>
                    <li>Mechanical Fitters</li>
                    <li>Welders</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-black font-bold text-sm mb-2">General Site</h4>
                  <ul className="pl-5 list-disc space-y-1 text-slate-600 text-xs leading-relaxed">
                    <li>Labourers</li>
                    <li>Traffic Marshals</li>
                    <li>Banksmen</li>
                    <li>Gatemen</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Plant Operator Recruitment */}
            <section className="mb-12">
              <h2 className="text-black text-[26px] md:text-[34px] font-extrabold tracking-[-0.01em] border-b border-slate-100 pb-3 mb-6">
                Plant Operator Recruitment
              </h2>

              <p className="text-black text-[17.5px] leading-[1.8] mb-5">
                Recruitment Direct UK Ltd recruits experienced CPCS and NPORS qualified plant operators for construction, civil engineering, utilities, highways and infrastructure projects throughout the UK and Republic of Ireland.
              </p>

              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 mt-4 pl-0 list-none">
                <CheckListItem>360 Excavator Operators</CheckListItem>
                <CheckListItem>180 Excavator Operators</CheckListItem>
                <CheckListItem>Telehandler Operators</CheckListItem>
                <CheckListItem>Dumper Drivers</CheckListItem>
                <CheckListItem>Roller Drivers</CheckListItem>
                <CheckListItem>ADT Operators</CheckListItem>
                <CheckListItem>Loading Shovel Operators</CheckListItem>
                <CheckListItem>Crane Operators</CheckListItem>
                <CheckListItem>Slinger Signallers</CheckListItem>
                <CheckListItem>Plant Fitters</CheckListItem>
                <CheckListItem>Dozer Operators</CheckListItem>
              </ul>
            </section>

            {/* Construction Recruitment Process */}
            <section className="mb-12">
              <h2 className="text-black text-[26px] md:text-[34px] font-extrabold tracking-[-0.01em] border-b border-slate-100 pb-3 mb-6">
                Our Construction Recruitment Process
              </h2>

              <p className="text-black text-[17.5px] leading-[1.8] mb-6">
                Recruitment Direct UK Ltd combines experienced recruitment consultants with AI-powered candidate search to help construction businesses recruit skilled professionals quickly across the UK and Republic of Ireland.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
                {[
                  { num: "1", desc: "Submit your vacancy using AI Hire Now or contact our recruitment team." },
                  { num: "2", desc: "AI searches our candidate database to identify suitable construction professionals." },
                  { num: "3", desc: "A recruitment consultant reviews your vacancy, confirms your requirements and refines the search." },
                  { num: "4", desc: "Suitable candidates are screened and every shortlisted applicant is consultant verified before submission." },
                  { num: "5", desc: "Candidate CVs are presented for interview or immediate placement." },
                  { num: "6", desc: "Ongoing support throughout the recruitment process." }
                ].map((step, idx) => (
                  <div key={idx} className="bg-slate-50 p-4 rounded-xl border border-slate-100 flex flex-col text-center">
                    <span className="text-[#001B5E] text-2xl font-black mb-1">{step.num}</span>
                    <p className="text-slate-600 text-[11px] leading-[1.5]">{step.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* UK & Republic of Ireland */}
            <section className="mb-12">
              <h2 className="text-black text-[26px] md:text-[34px] font-extrabold tracking-[-0.01em] border-b border-slate-100 pb-3 mb-6">
                Construction Recruitment Across the UK & Republic of Ireland
              </h2>

              <p className="text-black text-[17.5px] leading-[1.8] mb-4">
                Recruitment Direct UK Ltd provides construction recruitment services throughout England, Scotland, Wales, Northern Ireland and the Republic of Ireland. We support regional contractors, national construction companies, civil engineering organisations, utilities, infrastructure providers and developers with temporary, contract and permanent recruitment solutions.
              </p>

              <p className="text-black text-[17.5px] leading-[1.8] mb-4">
                Whether your project is located in a major city, regional town or remote location, our recruitment consultants work with businesses of all sizes to source experienced construction professionals across a broad range of disciplines.
              </p>
            </section>

            {/* Looking to Recruit Construction Staff */}
            <section>
              <h2 className="text-black text-[26px] md:text-[34px] font-extrabold tracking-[-0.01em] border-b border-slate-100 pb-3 mb-6">
                Looking to Recruit Construction Staff?
              </h2>

              <p className="text-black text-[17.5px] leading-[1.8] mb-5">
                Whether you require one construction professional or an entire workforce, Recruitment Direct UK Ltd can support your recruitment requirements with temporary, contract and permanent recruitment solutions.
              </p>

              <div className="mt-6 flex flex-wrap gap-4">
                <Link href="/ai-hire-now" className={goldButtonClass}>
                  AI Hire Now <ArrowRight className="w-5 h-5" />
                </Link>
                <Link href="/request-quote" className={blueButtonClass}>
                  Request Quote
                </Link>
                <a href="tel:01324613198" className={goldButtonClass}>
                  Call Now
                </a>
              </div>
            </section>

            {/* Accordion FAQ Section */}
            <section className="mt-12 bg-slate-50 p-6 rounded-2xl border border-slate-100">
              <h2 className="text-black text-[26px] md:text-[34px] font-extrabold tracking-[-0.01em] border-b border-slate-200 pb-3 mb-6 mt-0">
                Construction Recruitment FAQs
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
              <HardHat className="text-[#F7D774] w-10 h-10 mb-4" />
              <h3 className="text-white text-xl font-bold mb-2">Need Staff Now?</h3>
              <p className="text-slate-200 text-sm leading-relaxed mb-6">
                Submit staffing requests 24/7. AI screens our database to match qualified construction workers in minutes.
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
                <Link href="/renewable-energy-recruitment-agency" className="block text-[#001B5E] hover:text-[#C99A1F] font-semibold transition-colors">
                  → Renewable Energy Recruitment
                </Link>
                <Link href="/engineering-recruitment-agency" className="block text-[#001B5E] hover:text-[#C99A1F] font-semibold transition-colors">
                  → Engineering Recruitment
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
                "name": "Construction Recruitment Agency",
                "item": "https://rd1.co.uk/construction-recruitment-agency"
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
            "image": "https://rd1.co.uk/images/construction-recruitment-agency.webp",
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
            "name": "Construction Recruitment Agency UK",
            "url": "https://rd1.co.uk/construction-recruitment-agency",
            "description": "Construction Recruitment Agency supplying temporary, contract and permanent construction professionals across England, Scotland, Wales, Northern Ireland and the Republic of Ireland.",
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
