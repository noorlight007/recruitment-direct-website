"use client";

import React from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingElements from "@/components/FloatingElements";
import { MapPin, Phone, MessageSquare, Mail, ArrowLeft, ShieldCheck, Clock, Users, Building } from "lucide-react";

// City meta data to customize the pages
const cityData: Record<string, {
  name: string;
  isHeadOffice?: boolean;
  phone: string;
  email: string;
  address: string;
  description: string;
  sectors: string[];
}> = {
  london: {
    name: "London",
    phone: "0345 067 8022",
    email: "london.sales@rd1.co.uk",
    address: "128 City Road, London, EC1V 2NX",
    description: "Supporting businesses across the Greater London area with fast, compliant, and professional temporary, contract, and permanent staff.",
    sectors: ["Construction", "Logistics", "Business Support & IT", "Hospitality", "Engineering"],
  },
  birmingham: {
    name: "Birmingham",
    phone: "0345 067 8022",
    email: "birmingham.sales@rd1.co.uk",
    address: "Colmore Gate, 2-6 Colmore Row, Birmingham, B3 2QD",
    description: "Connecting local employers in the Midlands with fully qualified candidates, specializing in industrial, engineering, and commercial sectors.",
    sectors: ["Engineering", "Logistics", "Construction", "Renewables", "Business Support & IT"],
  },
  manchester: {
    name: "Manchester",
    phone: "0345 067 8022",
    email: "manchester.sales@rd1.co.uk",
    address: "3 Hardman Street, Spinningfields, Manchester, M3 3HF",
    description: "Providing premium recruitment services to the North West region, delivering vetted personnel 24/7 for critical vacancies.",
    sectors: ["Construction", "Engineering", "Logistics", "Healthcare", "Business Support & IT"],
  },
  edinburgh: {
    name: "Edinburgh (Head Office)",
    isHeadOffice: true,
    phone: "01324 613198",
    email: "sales@rd1.co.uk",
    address: "1 Hallglen Terrace, Falkirk, FK1 2PX",
    description: "Our National Headquarters coordinating compliance, timesheet approvals, and client accounts across Scotland and the entire United Kingdom.",
    sectors: ["Construction", "Renewable Energy", "Engineering", "Logistics", "Healthcare", "Education", "Hospitality", "Business Support & IT"],
  },
  glasgow: {
    name: "Glasgow",
    phone: "01324 613198",
    email: "glasgow.sales@rd1.co.uk",
    address: "West George Street, Glasgow, G2 1BP",
    description: "Dedicated staffing solutions for Glasgow and the West of Scotland. Available round-the-clock to manage high-volume temporary labour demands.",
    sectors: ["Renewable Energy", "Logistics", "Healthcare", "Engineering", "Construction", "Hospitality"],
  },
  cardiff: {
    name: "Cardiff",
    phone: "0345 067 8022",
    email: "cardiff.sales@rd1.co.uk",
    address: "Brunel House, 2 Fitzalan Road, Cardiff, CF24 0EB",
    description: "Providing Welsh businesses with exceptional staffing support across construction, logistics, and technical sectors.",
    sectors: ["Construction", "Logistics", "Engineering", "Business Support & IT"],
  },
  leeds: {
    name: "Leeds",
    phone: "0345 067 8022",
    email: "leeds.sales@rd1.co.uk",
    address: "1 City Square, Leeds, LS1 2AL",
    description: "Connecting Yorkshire employers with top-tier personnel, from major infrastructure projects to administrative and professional roles.",
    sectors: ["Construction", "Engineering", "Logistics", "Renewable Energy", "Business Support & IT"],
  },
  newcastle: {
    name: "Newcastle",
    phone: "0345 067 8022",
    email: "newcastle.sales@rd1.co.uk",
    address: "Gallowgate, Newcastle upon Tyne, NE1 4SG",
    description: "Serving the North East with rapid-response recruitment services, specializing in industrial, engineering, and technical recruitment.",
    sectors: ["Engineering", "Logistics", "Construction", "Hospitality"],
  },
  inverness: {
    name: "Inverness",
    phone: "01324 613198",
    email: "inverness.sales@rd1.co.uk",
    address: "Fairways Business Park, Inverness, IV2 6AA",
    description: "Supporting Highland employers with certified and vetted personnel, specializing in renewable energy, forestry, and construction projects.",
    sectors: ["Renewable Energy", "Construction", "Logistics", "Engineering"],
  },
  aberdeen: {
    name: "Aberdeen",
    phone: "01324 613198",
    email: "aberdeen.sales@rd1.co.uk",
    address: "Union Plaza, 1 Union Wynd, Aberdeen, AB10 1SL",
    description: "Premium staffing solutions for the North East of Scotland. Trusted partners for engineering, renewable energy, and logistical operations.",
    sectors: ["Renewable Energy", "Engineering", "Logistics", "Construction", "Business Support & IT"],
  },
};

export default function LocationPage() {
  const params = useParams();
  const cityParam = typeof params?.city === "string" ? params.city.toLowerCase() : "";
  
  // Find matching city, fallback to generic
  const cityInfo = cityData[cityParam] || {
    name: typeof params?.city === "string" 
      ? params.city.charAt(0).toUpperCase() + params.city.slice(1) 
      : "United Kingdom",
    phone: "0345 067 8022",
    email: "sales@rd1.co.uk",
    address: "Nationwide Coverage",
    description: "Providing premium recruitment services across England, Scotland, and Wales, with 24/7 service delivery and framework compliance.",
    sectors: ["Construction", "Renewables", "Engineering", "Logistics", "Healthcare", "Education", "Hospitality", "Business Support & IT"],
  };

  return (
    <>
      <div className="min-h-screen bg-background text-foreground flex flex-col justify-between">
        <Navbar />
        <FloatingElements />

        <main className="flex-grow pt-28 pb-20">
          <div className="max-w-6xl mx-auto px-4 md:px-8">
            {/* Back Button */}
            <div className="mb-8">
              <Link
                href="/#map-container"
                className="inline-flex items-center gap-2 text-sm text-[#d6b25e] hover:text-white transition-colors duration-200 font-semibold"
              >
                <ArrowLeft className="w-4 h-4" /> Back to Coverage Map
              </Link>
            </div>

            {/* Hero Card */}
            <div className="bg-gradient-to-br from-[#0c1829] to-[#040913] border border-white/10 rounded-3xl p-8 md:p-12 mb-12 shadow-[0_20px_50px_rgba(0,0,0,0.3)] relative overflow-hidden">
              <div className="absolute top-0 right-0 w-96 h-96 bg-[#2e7dff]/10 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />
              <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#d6b25e]/5 rounded-full blur-3xl pointer-events-none -ml-20 -mb-20" />
              
              <div className="relative z-10">
                <div className="flex flex-wrap items-center gap-3 mb-6">
                  {cityInfo.isHeadOffice ? (
                    <span className="bg-[#d6b25e]/20 text-[#d6b25e] border border-[#d6b25e]/30 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                      UK Head Office
                    </span>
                  ) : (
                    <span className="bg-[#2e7dff]/20 text-[#5aa8ff] border border-[#2e7dff]/30 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                      Regional Coverage
                    </span>
                  )}
                  <span className="text-white/40 text-sm flex items-center gap-1">
                    <MapPin className="w-4 h-4 text-[#d6b25e]" /> {cityInfo.name}
                  </span>
                </div>

                <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight leading-none mb-6">
                  Recruitment in <span className="text-[#d6b25e]">{cityInfo.name.replace(" (Head Office)", "")}</span>
                </h1>
                
                <p className="text-gray-300 text-lg md:text-xl max-w-3xl leading-relaxed mb-8">
                  {cityInfo.description}
                </p>

                {/* Contact Strip */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 border-t border-white/10">
                  <div className="flex items-center gap-4 bg-white/5 border border-white/10 rounded-2xl p-4 hover:bg-white/10 transition-colors duration-200">
                    <Phone className="w-6 h-6 text-[#d6b25e]" />
                    <div>
                      <span className="text-xs text-white/50 block font-semibold">CALL US</span>
                      <a href={`tel:${cityInfo.phone.replace(/\s+/g, "")}`} className="text-white hover:text-[#d6b25e] transition-colors duration-200 font-bold text-lg">
                        {cityInfo.phone}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 bg-white/5 border border-white/10 rounded-2xl p-4 hover:bg-white/10 transition-colors duration-200">
                    <Mail className="w-6 h-6 text-[#d6b25e]" />
                    <div>
                      <span className="text-xs text-white/50 block font-semibold">EMAIL US</span>
                      <a href={`mailto:${cityInfo.email}`} className="text-white hover:text-[#d6b25e] transition-colors duration-200 font-bold text-sm md:text-base break-all">
                        {cityInfo.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 bg-white/5 border border-white/10 rounded-2xl p-4 hover:bg-white/10 transition-colors duration-200">
                    <MapPin className="w-6 h-6 text-[#d6b25e]" />
                    <div>
                      <span className="text-xs text-white/50 block font-semibold">ADDRESS</span>
                      <span className="text-white font-bold text-sm leading-tight block">
                        {cityInfo.address}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Two Column Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Main Content */}
              <div className="lg:col-span-2 space-y-12">
                <section>
                  <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-6">Nationwide Capability, Local Expertise</h2>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    Since 2006, Recruitment Direct has served clients throughout {cityInfo.name.replace(" (Head Office)", "")} and the surrounding regions. Our local knowledge, combined with our advanced AI screening tools and 24/7 sourcing capabilities, enables us to fulfill urgent temporary, contract, and permanent recruitment roles faster than traditional methods.
                  </p>
                  <p className="text-gray-300 leading-relaxed">
                    We maintain rigorous compliance checks, framework approvals, and candidate vetting standards, guaranteeing that the staff we provide are fully certified, compliant, and ready to contribute immediately.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-6">Key Sectors Supported</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {cityInfo.sectors.map((sector) => (
                      <div key={sector} className="bg-white/5 border border-white/10 rounded-xl p-4 flex items-center gap-3">
                        <div className="w-3 h-3 rounded-full bg-[#d6b25e]" />
                        <span className="text-white font-semibold text-base">{sector}</span>
                      </div>
                    ))}
                  </div>
                </section>

                {/* Why Choose Us */}
                <section className="bg-gradient-to-r from-[#071324] to-[#040913] border border-white/10 rounded-2xl p-8">
                  <h2 className="text-2xl font-extrabold text-white mb-6 text-center">Why Partner With Us?</h2>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                    <div className="space-y-2">
                      <Clock className="w-8 h-8 text-[#d6b25e] mx-auto" />
                      <h3 className="font-bold text-white">24/7 Dispatch</h3>
                      <p className="text-xs text-gray-400">Round-the-clock candidate search and emergency labor placement.</p>
                    </div>
                    <div className="space-y-2">
                      <ShieldCheck className="w-8 h-8 text-[#d6b25e] mx-auto" />
                      <h3 className="font-bold text-white">100% Compliant</h3>
                      <p className="text-xs text-gray-400">Full RTW, CSCS, and framework-level vetting on all candidates.</p>
                    </div>
                    <div className="space-y-2">
                      <Users className="w-8 h-8 text-[#d6b25e] mx-auto" />
                      <h3 className="font-bold text-white">Vetted Pool</h3>
                      <p className="text-xs text-gray-400">Thousands of active personnel mapped across UK locations.</p>
                    </div>
                  </div>
                </section>
              </div>

              {/* Sidebar CTA Card */}
              <div className="lg:col-span-1">
                <div className="bg-gradient-to-b from-[#0e1d35] to-[#060e1b] border border-white/10 rounded-3xl p-6 shadow-xl sticky top-28 space-y-6">
                  <div className="space-y-2 text-center">
                    <Building className="w-12 h-12 text-[#d6b25e] mx-auto" />
                    <h3 className="text-xl font-bold text-white">Hire Staff in {cityInfo.name.replace(" (Head Office)", "")}</h3>
                    <p className="text-xs text-gray-400 leading-relaxed">
                      Need staff fast? Our AI recruitment portal is open 24 hours a day to place immediate hiring requests.
                    </p>
                  </div>

                  <div className="space-y-3">
                    <Link
                      href="/ai-hire-now"
                      className="bg-[#d6b25e] text-[#071424] hover:bg-white hover:text-[#071424] transition-colors duration-300 font-extrabold text-sm uppercase py-4 rounded-xl text-center block w-full shadow-lg"
                    >
                      AI HIRE NOW
                    </Link>
                    <Link
                      href="/ai-hire-now-form?type=quote"
                      className="border border-[#d6b25e] text-[#d6b25e] hover:bg-[#d6b25e] hover:text-[#071424] transition-colors duration-300 font-extrabold text-sm uppercase py-4 rounded-xl text-center block w-full"
                    >
                      Request Call Back
                    </Link>
                  </div>

                  <div className="pt-4 border-t border-white/10 text-center">
                    <span className="text-xs text-white/40 block mb-2">WHATSAPP US DIRECTLY</span>
                    <a
                      href="https://wa.me/447590882626"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm text-[#25d366] hover:text-white font-bold transition-colors duration-200"
                    >
                      <MessageSquare className="w-4 h-4" /> Start Conversation
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
}
