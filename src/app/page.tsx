"use client";

import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import TrustedBySection from "@/components/TrustedBySection";
import SearchJobsSection from "@/components/SearchJobsSection";
import SectorsSection from "@/components/SectorsSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import AIProductsSection from "@/components/AIProductsSection";
import EliteAISection from "@/components/EliteAISection";
import GeneralSection from "@/components/GeneralSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import FloatingElements from "@/components/FloatingElements";
import HowWeDeliverSection from "@/components/HowWeDeliverSection";
import AIFlowSection from "@/components/AIFlowSection";
import TrustTechSection from "@/components/TrustTechSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <TrustTechSection />
      <HowWeDeliverSection />
      {/* <AIFlowSection /> */}
      {/* <AIProductsSection /> */}
      {/* <EliteAISection /> */}
      {/* <HowItWorksSection /> */}
      <GeneralSection />
      {/* <SectorsSection /> */}
      {/* <TrustedBySection /> */}
      {/* <SearchJobsSection /> */}
      <ContactSection />
      <Footer />
      <FloatingElements />
    </div>
  );
};

export default Index;
