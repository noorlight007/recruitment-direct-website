"use client";

import Image from "next/image";
import cyberEssentials from "@/assets/compliance/cyber-essentials.png";
import recMember from "@/assets/compliance/rec-member.png";
import constructionlineGold from "@/assets/compliance/constructionline-gold.png";
import cqsIso9001 from "@/assets/compliance/cqs-iso9001.png";
// import logo from "@/assets/logo.png";

const complianceLogos = [
    // { src: logo, alt: "Recruitment Direct", isCompany: true },
    { src: cyberEssentials, alt: "Cyber Essentials" },
    { src: recMember, alt: "REC Corporate Member" },
    { src: constructionlineGold, alt: "Constructionline Gold Member" },
    { src: cqsIso9001, alt: "CQS ISO 9001" },
];

export default function ComplianceSection() {
    return (
        <section className="py-12 bg-[#F3F4F6]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-center font-sans text-[40px] font-semibold tracking-[-0.3px] text-gray-900 leading-[1.2] mb-6">
                    Compliance
                </h2>
                <div className="flex flex-nowrap justify-center lg:justify-center items-center gap-4 sm:gap-6 lg:gap-10 overflow-x-auto pb-4 no-scrollbar">
                    {complianceLogos.map((logo: any, index) => (
                        <div key={index} className="flex-shrink-0 transition-transform duration-300">
                            <Image
                                src={logo.src}
                                alt={logo.alt}
                                width={logo.isCompany ? 350 : logo.alt === "REC Corporate Member" ? 220 : 150}
                                height={80}
                                className={`${logo.isCompany ? "h-14 sm:h-24 md:h-32 lg:h-40" : "h-10 sm:h-16 md:h-24 lg:h-32"} w-auto object-contain`}
                                unoptimized
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
