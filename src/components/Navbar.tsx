"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Linkedin, Facebook, Menu, X, Zap, Users, Briefcase, UserCheck, Search, ShieldCheck, Phone, FileText, } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import logo from "@/assets/logo.png";
import callpilotLogo from "@/assets/callpilot_logo.png";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const aiProducts = [
  {
    title: "AI Hire Now",
    description: "Order Staff 24/7",
    icon: Zap,
    link: "/ai-hire-now",
    isImage: false,
  },
  {
    title: "Ask AI Steve",
    description: "Recruitment support 24/7",
    icon: UserCheck,
    link: "/",
    isImage: false,
  },
  {
    title: "AI Applicant Screening Call",
    description: "Watch screening in action",
    icon: Phone,
    link: "#play-video",
    isImage: false,
  },
  {
    title: "AI Verify Supplier",
    description: "Start supplier verification form",
    icon: ShieldCheck,
    link: "/verify-supplier-form",
    isImage: false,
  },
  {
    title: "AI Verify CIS",
    description: "Start CIS verification form",
    icon: ShieldCheck,
    link: "/ai-verify-cis",
    isImage: false,
  },
];

const clientSubmenu = [
  {
    title: "Temporary Staff",
    description: "Flexible short-term staffing",
    link: "/temporary-staff",
    icon: Users,
  },
  {
    title: "Contract Staff",
    description: "Project-based professionals",
    link: "/contract-staff",
    icon: FileText,
  },
  {
    title: "Permanent Staff",
    description: "Long-term hires",
    link: "/permanent-staff",
    icon: Briefcase,
  },
  {
    title: "Why Choose Us",
    description: "See what makes our recruitment approach different",
    link: "/why-choose-us",
    icon: ShieldCheck,
  },
  {
    title: "Open Credit Account",
    description: "Apply for a credit account",
    link: "/open-credit-account",
    icon: FileText,
  },
];

const menuItems = [
  { label: "Home", href: "/" },
  { label: "Clients", href: "/#clients", hasDropdown: true, dropdownItems: clientSubmenu, columns: 1 },
  { label: "Job Search", href: "/job-search" },
  { label: "Sectors", href: "/#sectors" },
  { label: "AI Recruitment", href: "/#ai-recruitment", hasDropdown: true, dropdownItems: aiProducts, columns: 1 },
  // { label: "Integrations", href: "/integrations" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileSubmenu, setMobileSubmenu] = useState<string | null>(null);
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  useEffect(() => {
    const handleOpenAIRecruitment = () => {
      setActiveDropdown("AI Recruitment");
      setMobileOpen(true);
      setMobileSubmenu("AI Recruitment");
    };

    const handleOpenClients = () => {
      setActiveDropdown("Clients");
      setMobileOpen(true);
      setMobileSubmenu("Clients");
    };

    window.addEventListener("open-ai-recruitment", handleOpenAIRecruitment);
    window.addEventListener("open-clients", handleOpenClients);
    
    const checkHash = () => {
      if (window.location.hash === "#ai-recruitment") {
        setActiveDropdown("AI Recruitment");
        setMobileOpen(true);
        setMobileSubmenu("AI Recruitment");
      } else if (window.location.hash === "#clients") {
        setActiveDropdown("Clients");
        setMobileOpen(true);
        setMobileSubmenu("Clients");
      }
    };
    
    checkHash();
    window.addEventListener("hashchange", checkHash);

    return () => {
      window.removeEventListener("open-ai-recruitment", handleOpenAIRecruitment);
      window.removeEventListener("open-clients", handleOpenClients);
      window.removeEventListener("hashchange", checkHash);
    };
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-white border-b-4">
      <div className="w-full px-6 lg:px-6">
        <div className="flex items-center justify-between h-20 lg:h-24">
          {/* Logo */}
          <Link 
            href="/" 
            className={`flex-shrink-0 logo-premium transition-opacity duration-750 ${mobileOpen ? "opacity-0 pointer-events-none lg:opacity-100 lg:pointer-events-auto" : "opacity-100"}`}
          >
            {/* <Image src={logo} alt="Recruitment Direct" className="navbar-logo" unoptimized /> */}
            <img src="/logo.png" alt="Recruitment Direct" className="navbar-logo" width="350" height="140" />
          </Link>

          {/* Center Menu - Desktop */}
          <div className="hidden lg:flex items-center gap-1">
            <div className="flex items-center gap-1">
              {menuItems.map((item) =>
                item.hasDropdown ? (
                  <div key={item.label} className="relative" ref={item.label === activeDropdown ? dropdownRef : null}>
                    <button
                      onClick={() => setActiveDropdown(activeDropdown === item.label ? null : item.label)}
                      className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors rounded-lg hover:bg-primary/5"
                    >
                      {item.label}
                      <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === item.label ? "rotate-180" : ""}`} />
                    </button>
                    <AnimatePresence>
                      {activeDropdown === item.label && (
                        <motion.div
                          initial={{ opacity: 0, y: -5 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -5 }}
                          transition={{ duration: 0.2, ease: "easeOut" }}
                          className={`absolute top-full ${item.columns === 2 ? "left-1/2 -translate-x-1/2" : "left-0"} mt-2 dropdown-menu rounded-xl shadow-[0_10px_30px_rgba(0,0,0,0.08)] overflow-hidden p-3 min-w-[280px] ${item.columns === 2 ? "w-[600px]" : "w-[320px]"}`}
                        >
                          <div className={`grid ${item.columns === 2 ? "grid-cols-2 gap-x-6" : "grid-cols-1"} gap-y-1`}>
                            {item.dropdownItems?.map((subItem: any) => (
                              <Link
                                key={subItem.title}
                                href={subItem.link}
                                target={subItem.link?.startsWith("http") ? "_blank" : undefined}
                                rel={subItem.link?.startsWith("http") ? "noopener noreferrer" : undefined}
                                onClick={(e) => {
                                  if (subItem.title === "Ask AI Steve") {
                                    e.preventDefault();
                                    window.dispatchEvent(new CustomEvent('open-ai-steve'));
                                  } else if (subItem.link === "#play-video") {
                                    e.preventDefault();
                                    setIsVideoOpen(true);
                                  }
                                  setActiveDropdown(null);
                                }}
                                className="flex items-center gap-3 p-3 rounded-lg transition-all duration-200 group nav-btn dropdown-item"
                              >
                                <div className="dropdown-icon">
                                  {subItem.isImage ? (
                                    <Image src={subItem.icon} alt={subItem.title} className="object-contain" unoptimized />
                                  ) : (
                                    <subItem.icon />
                                  )}
                                </div>
                                <div className="flex flex-col">
                                  <span className="text-[14px] font-semibold text-white leading-tight group-hover:text-primary transition-colors">
                                    {subItem.title}
                                  </span>
                                  {subItem.description && (
                                    <span className="text-[13px] text-gray-400 mt-0.5 leading-tight">
                                      {subItem.description}
                                    </span>
                                  )}
                                </div>
                              </Link>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <a
                    key={item.label}
                    href={item.href}
                    className="px-4 py-2 text-sm font-medium text-gray-900 hover:text-white transition-colors rounded-lg hover:bg-[#020307] nav-btn"
                  >
                    {item.label}
                  </a>
                )
              )}
            </div>
            {/* <div className="h-6 w-px bg-primary/10 mx-2" /> */}
            {/* <div className="flex items-center gap-0.5">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="p-2.5 hover:opacity-80 transition-opacity">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="#0A66C2">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="p-2.5 hover:opacity-80 transition-opacity">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="#1877F2">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
            </div> */}
          </div>

          {/* Right Side - Desktop */}
          <div className="hidden lg:flex items-center gap-3">
            <div className="header-social-icons">
              <a
                href="https://wa.me/447590882626"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg viewBox="0 0 24 24" className="fill-[#25D366]">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </a>
              <a href="https://www.linkedin.com/company/recruitment-direct-uk-ltd" target="_blank" rel="noopener noreferrer">
                <svg viewBox="0 0 24 24" fill="#0A66C2">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
              <a href="https://www.facebook.com/recruitmentdirectukltd" target="_blank" rel="noopener noreferrer">
                <svg viewBox="0 0 24 24" fill="#1877F2">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
            </div>
            <a href="tel:01324613198" className="flex items-center gap-3 text-gray-800 font-medium hover:text-gray-900 transition-colors group">
              <div className="header-phone-icon">
                <Phone />
              </div>
              <span>01324 613198</span>
            </a>
            <a href="/ai-hire-now" className="btn btn-primary header-btn ai-hire-btn">Request Staff</a>
          </div>

          {/* Mobile/Tablet Menu Button */}
          <button onClick={() => setMobileOpen(!mobileOpen)} className="lg:hidden p-2 text-gray-900 menu-btn">
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile/Tablet Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-background border-t border-primary/10 overflow-hidden"
          >
            <div className="px-4 py-6 space-y-4 max-h-[80vh] overflow-y-auto">
              <div className="space-y-1">
                {menuItems.map((item) => (
                  <div key={item.label} className="flex flex-col">
                    {item.hasDropdown ? (
                      <>
                        <button
                          onClick={() => setMobileSubmenu(mobileSubmenu === item.label ? null : item.label)}
                          className="flex items-center justify-between w-full px-4 py-3 text-foreground font-medium rounded-lg hover:bg-primary/5 transition-colors"
                        >
                          <span>{item.label}</span>
                          <ChevronDown className={`w-4 h-4 transition-transform ${mobileSubmenu === item.label ? "rotate-180" : ""}`} />
                        </button>
                        <AnimatePresence>
                          {mobileSubmenu === item.label && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              className="overflow-hidden pl-4 space-y-1"
                            >
                              {item.dropdownItems?.map((subItem: any) => (
                                <Link
                                  key={subItem.title}
                                  href={subItem.link}
                                  onClick={(e) => {
                                    if (subItem.title === "Ask AI Steve") {
                                      e.preventDefault();
                                      window.dispatchEvent(new CustomEvent('open-ai-steve'));
                                    } else if (subItem.link === "#play-video") {
                                      e.preventDefault();
                                      setIsVideoOpen(true);
                                    }
                                    setMobileOpen(false);
                                  }}
                                  className="flex items-center gap-3 px-4 py-3 text-sm text-foreground/80 hover:text-primary hover:bg-primary/5 rounded-lg transition-all"
                                >
                                  <div className="dropdown-icon">
                                    {subItem.isImage ? (
                                      <Image src={subItem.icon} alt={subItem.title} className="object-contain" unoptimized />
                                    ) : (
                                      <subItem.icon />
                                    )}
                                  </div>
                                  <div className="flex flex-col">
                                    <span className="font-semibold">{subItem.title}</span>
                                    {subItem.description && (
                                      <span className="text-xs text-foreground/50 line-clamp-1">{subItem.description}</span>
                                    )}
                                  </div>
                                </Link>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </>
                    ) : (
                      <a
                        href={item.href}
                        onClick={() => setMobileOpen(false)}
                        className="block px-4 py-3 text-foreground font-medium rounded-lg hover:bg-primary/5 transition-colors"
                      >
                        {item.label}
                      </a>
                    )}
                  </div>
                ))}
              </div>

              {/* Mobile Socials */}
              <div className="header-social-icons px-4 py-2 border-t border-primary/5 pt-4">
                <a href="https://wa.me/447590882626" target="_blank" rel="noopener noreferrer">
                  <svg className="fill-[#25D366]" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                </a>
                <a href="https://www.linkedin.com/company/recruitment-direct-uk-ltd" target="_blank" rel="noopener noreferrer">
                  <svg viewBox="0 0 24 24" fill="#0A66C2">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
                <a href="https://www.facebook.com/recruitmentdirectukltd" target="_blank" rel="noopener noreferrer">
                  <svg viewBox="0 0 24 24" fill="#1877F2">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
              </div>

              {/* Mobile Actions */}
              <div className="grid grid-cols-1 gap-3 px-4 pt-2">
                <a href="/ai-hire-now" onClick={() => setMobileOpen(false)} className="btn btn-primary py-4 text-center">Request Staff</a>
              </div>
              <div className="px-4 pb-2 text-center text-xs text-foreground/60 font-medium">
                Prefer to speak? Call us on <a href="tel:01324613198" className="hover:text-primary transition-colors">01324 613198</a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <Dialog open={isVideoOpen} onOpenChange={setIsVideoOpen}>
        <DialogContent className="max-w-4xl p-0 overflow-hidden bg-black border-gray-800">
          <DialogHeader className="sr-only">
            <DialogTitle>AI Call Demo Video</DialogTitle>
          </DialogHeader>
          <div className="aspect-video w-full">
            <video
              src="/Video.mov"
              controls
              autoPlay
              className="w-full h-full"
            />
          </div>
        </DialogContent>
      </Dialog>
    </nav>
  );
}

