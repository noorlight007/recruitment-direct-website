// lib/policies-data.ts
//
// Single source of truth for the /policies-and-compliance hub page.
// Drives both the categorised listing and the search/autocomplete box in
// components/PoliciesHub.tsx.
//
// All 19 policies and compliance statements are fully drafted and live.

export type PolicyStatus = "live" | "draft" | "action-needed";

export interface PolicyItem {
  /** Stable id, used for React keys and deep-linking (#slug). */
  slug: string;
  title: string;
  category: string;
  status: PolicyStatus;
  /** One or two sentence, plain-English summary for the card. */
  summary: string;
  /** e.g. "7 September 2026". Omit if not yet set. */
  effectiveDate?: string;
  /** Real URL once status is "live". */
  href?: string;
  /** Only for "draft" / "action-needed" — what has to happen before this goes live. */
  actionNote?: string;
  /** Extra terms the search box should match against, beyond the title. */
  keywords: string[];
}

export const POLICY_CATEGORIES = [
  "Data Protection & Privacy",
  "Equality, Ethics & Conduct",
  "Health, Safety & Safeguarding",
  "Employment & Workforce Compliance",
  "Financial & Commercial Assurance",
  "Environmental & Social Value",
  "Legal & General",
] as const;

export type PolicyCategory = (typeof POLICY_CATEGORIES)[number];

export const policies: PolicyItem[] = [
  // ---------------------------------------------------------------------
  // Data Protection & Privacy
  // ---------------------------------------------------------------------
  {
    slug: "privacy-policy",
    title: "Privacy Policy",
    category: "Data Protection & Privacy",
    status: "live",
    summary:
      "How Recruitment Direct UK collects, uses and protects personal data across our website and services, in line with UK GDPR and the Data Protection Act 2018.",
    effectiveDate: "11 June 2026",
    href: "/privacy-policy",
    keywords: ["gdpr", "data protection", "dpa 2018"],
  },
  {
    slug: "candidate-privacy-notice",
    title: "Candidate Privacy Notice",
    category: "Data Protection & Privacy",
    status: "live",
    summary:
      "What we collect from job applicants and candidates, why, how long we keep it, and how to exercise your data rights.",
    effectiveDate: "11 June 2026",
    href: "/candidate-privacy-notice",
    keywords: ["candidate data", "gdpr", "applicant privacy", "article 13"],
  },
  {
    slug: "client-privacy-notice",
    title: "Client Privacy Notice",
    category: "Data Protection & Privacy",
    status: "live",
    summary:
      "How we process personal data belonging to client contacts and hiring managers we work with.",
    effectiveDate: "11 June 2026",
    href: "/client-privacy-notice",
    keywords: ["client data", "gdpr", "hiring manager privacy"],
  },
  {
    slug: "cookie-policy",
    title: "Cookie Policy",
    category: "Data Protection & Privacy",
    status: "live",
    summary:
      "The cookies and similar technologies rd1.co.uk uses, and how to control them, in line with PECR.",
    effectiveDate: "11 June 2026",
    href: "/cookie-policy",
    keywords: ["pecr", "cookies", "tracking"],
  },
  {
    slug: "data-retention-policy",
    title: "Data Retention & Deletion Policy",
    category: "Data Protection & Privacy",
    status: "live",
    summary:
      "How Recruitment Direct UK Ltd retains, protects and deletes candidate, client and worker data in line with UK GDPR and the Data Protection Act 2018.",
    effectiveDate: "7 September 2026",
    href: "/data-retention-policy",
    keywords: ["retention schedule", "data deletion", "gdpr", "records management", "data retention"],
  },
  {
    slug: "subject-access-request-procedure",
    title: "Subject Access Request (SAR) Procedure",
    category: "Data Protection & Privacy",
    status: "live",
    summary:
      "How to make a Subject Access Request to Recruitment Direct UK Ltd and how we respond, in line with Article 15 of the UK GDPR and Data Protection Act 2018.",
    effectiveDate: "7 September 2026",
    href: "/subject-access-request-procedure",
    keywords: ["sar", "subject access request", "gdpr article 15", "personal data request", "data access"],
  },
  {
    slug: "data-breach-response-procedure",
    title: "Data Breach Response Procedure",
    category: "Data Protection & Privacy",
    status: "live",
    summary:
      "How Recruitment Direct UK Ltd identifies, contains, assesses and reports personal data breaches in line with UK GDPR Articles 33 and 34.",
    effectiveDate: "7 September 2026",
    href: "/data-breach-response-procedure",
    keywords: ["data breach", "incident response", "ico notification", "72 hours", "security incident"],
  },
  {
    slug: "ai-automated-decision-making-policy",
    title: "AI & Automated Decision-Making Policy",
    category: "Data Protection & Privacy",
    status: "live",
    summary:
      "How Recruitment Direct UK Ltd uses AI-assisted tools responsibly in candidate screening, in line with UK GDPR Article 22 and ICO guidance.",
    effectiveDate: "7 September 2026",
    href: "/ai-automated-decision-making-policy",
    keywords: ["ai automated decision making", "article 22", "automated processing", "ico guidance", "ai ethics", "human review"],
  },
  {
    slug: "ai-screening-call-statement",
    title: "AI Screening Call Statement",
    category: "Data Protection & Privacy",
    status: "live",
    summary:
      "How our AI telephone screening system functions, data collected during candidate calls, call recording transparency, and candidate privacy protections.",
    effectiveDate: "7 September 2026",
    href: "/ai-screening-call-statement",
    keywords: ["ai screening", "voice screener", "telephone screening", "call recording", "transparency", "automated screening"],
  },
  {
    slug: "security-page",
    title: "Data & Platform Security",
    category: "Data Protection & Privacy",
    status: "live",
    summary:
      "How call data, candidate records and platform access are secured for our AI screening and recruitment tools — complements our Cyber Essentials accreditation.",
    effectiveDate: "11 June 2026",
    href: "/security",
    keywords: ["cyber essentials", "data security", "encryption", "platform security", "infosec"],
  },

  // ---------------------------------------------------------------------
  // Equality, Ethics & Conduct
  // ---------------------------------------------------------------------
  {
    slug: "equality-diversity-inclusion-policy",
    title: "Equality, Diversity and Inclusion Policy",
    category: "Equality, Ethics & Conduct",
    status: "live",
    summary:
      "Our commitment to fair treatment and equal opportunity for candidates, workers and staff, in line with the Equality Act 2010.",
    effectiveDate: "11 June 2026",
    href: "/equality-diversity-inclusion-policy",
    keywords: ["equal opportunities", "equality act 2010", "edi", "diversity"],
  },
  {
    slug: "anti-harassment-sexual-harassment-policy",
    title: "Anti-Harassment & Sexual Harassment Policy",
    category: "Equality, Ethics & Conduct",
    status: "live",
    summary:
      "Recruitment Direct UK Ltd's zero-tolerance approach to harassment and sexual harassment, including the proactive preventative duty under the Worker Protection Act 2023.",
    effectiveDate: "7 September 2026",
    href: "/anti-harassment-sexual-harassment-policy",
    keywords: ["worker protection act 2023", "sexual harassment", "harassment", "third party harassment", "equality act"],
  },
  {
    slug: "modern-slavery-policy",
    title: "Modern Slavery and Human Trafficking Policy",
    category: "Equality, Ethics & Conduct",
    status: "live",
    summary:
      "Our stance against modern slavery and human trafficking in our own business and supply chains, under the Modern Slavery Act 2015.",
    effectiveDate: "11 June 2026",
    href: "/modern-slavery-policy",
    keywords: ["modern slavery act 2015", "human trafficking", "ethical recruitment"],
  },
  {
    slug: "anti-bribery-corruption-policy",
    title: "Anti-Bribery & Corruption Policy",
    category: "Equality, Ethics & Conduct",
    status: "live",
    summary:
      "Recruitment Direct UK Ltd's zero-tolerance anti-bribery and corruption policy, in compliance with the Bribery Act 2010.",
    effectiveDate: "7 September 2026",
    href: "/anti-bribery-corruption-policy",
    keywords: ["bribery act 2010", "corruption", "gifts and hospitality", "anti-corruption", "bribery"],
  },
  {
    slug: "whistleblowing-policy",
    title: "Whistleblowing Policy",
    category: "Equality, Ethics & Conduct",
    status: "live",
    summary:
      "How to raise a concern about malpractice or wrongdoing at Recruitment Direct UK Ltd, protected under the Public Interest Disclosure Act 1998.",
    effectiveDate: "7 September 2026",
    href: "/whistleblowing-policy",
    keywords: ["public interest disclosure act", "raising concerns", "speak up", "whistleblowing", "pida 1998"],
  },
  {
    slug: "conflict-of-interest-policy",
    title: "Conflict of Interest Policy",
    category: "Equality, Ethics & Conduct",
    status: "live",
    summary:
      "How Recruitment Direct UK Ltd identifies, declares and manages conflicts of interest in recruitment and commercial decisions.",
    effectiveDate: "7 September 2026",
    href: "/conflict-of-interest-policy",
    keywords: ["conflicts of interest", "declarations of interest", "impartiality", "conflict of interest"],
  },

  // ---------------------------------------------------------------------
  // Health, Safety & Safeguarding
  // ---------------------------------------------------------------------
  {
    slug: "health-safety-policy",
    title: "Health & Safety Policy",
    category: "Health, Safety & Safeguarding",
    status: "live",
    summary:
      "Recruitment Direct UK Ltd's commitment to employee, worker and client health and safety under the Health and Safety at Work etc. Act 1974.",
    effectiveDate: "7 September 2026",
    href: "/health-safety-policy",
    keywords: ["hswa 1974", "risk assessment", "workplace safety", "health and safety", "riddor"],
  },
  {
    slug: "lone-working-policy",
    title: "Lone Working Policy",
    category: "Health, Safety & Safeguarding",
    status: "live",
    summary:
      "How Recruitment Direct UK Ltd assesses and manages the risks to workers placed in lone-working roles, in line with HSE guidance.",
    effectiveDate: "7 September 2026",
    href: "/lone-working-policy",
    keywords: ["lone working", "hse guidance", "risk assessment", "worker safety", "unsupervised work"],
  },
  {
    slug: "safeguarding-policy",
    title: "Safeguarding Policy (Children & Vulnerable Adults)",
    category: "Health, Safety & Safeguarding",
    status: "live",
    summary:
      "How Recruitment Direct UK Ltd safeguards children and vulnerable adults when placing workers into regulated roles.",
    effectiveDate: "7 September 2026",
    href: "/safeguarding-policy",
    keywords: ["dbs check", "pvg", "safer recruitment", "vulnerable adults", "children", "safeguarding"],
  },
  {
    slug: "business-continuity-policy",
    title: "Business Continuity & Disaster Recovery Policy",
    category: "Health, Safety & Safeguarding",
    status: "live",
    summary:
      "How Recruitment Direct UK Ltd maintains and recovers critical recruitment services, including payroll continuity, during a major disruption.",
    effectiveDate: "7 September 2026",
    href: "/business-continuity-policy",
    keywords: ["disaster recovery", "continuity plan", "resilience", "business continuity", "cyber essentials"],
  },

  // ---------------------------------------------------------------------
  // Employment & Workforce Compliance
  // ---------------------------------------------------------------------
  {
    slug: "national-minimum-wage-holiday-pay-policy",
    title: "National Minimum Wage & Holiday Pay Compliance Policy",
    category: "Employment & Workforce Compliance",
    status: "live",
    summary:
      "Recruitment Direct UK Ltd's commitment to paying at least the National Minimum/Living Wage and calculating correct, transparent holiday pay.",
    effectiveDate: "7 September 2026",
    href: "/national-minimum-wage-holiday-pay-policy",
    keywords: ["national minimum wage", "national living wage", "holiday pay", "working time regulations", "nmw"],
  },
  {
    slug: "working-time-regulations-policy",
    title: "Working Time Regulations Compliance Policy",
    category: "Employment & Workforce Compliance",
    status: "live",
    summary:
      "Recruitment Direct UK Ltd's compliance with the Working Time Regulations 1998, covering maximum 48-hour limits, rest breaks and annual leave.",
    effectiveDate: "7 September 2026",
    href: "/working-time-regulations-policy",
    keywords: ["working time regulations", "48 hour limit", "rest breaks", "night work", "annual leave", "wtr 1998"],
  },
  {
    slug: "complaints-policy",
    title: "Complaints Policy",
    category: "Employment & Workforce Compliance",
    status: "live",
    summary: "How to raise a complaint about our service, and how we handle and respond to it.",
    effectiveDate: "11 June 2026",
    href: "/complaints-policy",
    keywords: ["complaints procedure", "rec code of practice", "service issues"],
  },
  {
    slug: "awr-compliance-statement",
    title: "Agency Workers Regulations (AWR) Compliance Statement",
    category: "Employment & Workforce Compliance",
    status: "live",
    summary:
      "Recruitment Direct UK Ltd's compliance with the Agency Workers Regulations 2010, covering day-one rights and equal treatment after 12 weeks.",
    effectiveDate: "7 September 2026",
    href: "/awr-compliance-statement",
    keywords: ["awr 2010", "agency workers", "equal treatment", "12 week rule", "agency workers regulations"],
  },
  {
    slug: "right-to-work-policy",
    title: "Right to Work & Immigration Compliance Policy",
    category: "Employment & Workforce Compliance",
    status: "live",
    summary:
      "How Recruitment Direct UK Ltd checks and verifies every candidate's right to work in the UK, in line with Home Office guidance.",
    effectiveDate: "7 September 2026",
    href: "/right-to-work-policy",
    keywords: ["right to work", "home office checks", "immigration compliance", "share code", "evisa"],
  },
  {
    slug: "tupe-policy",
    title: "TUPE (Transfer of Undertakings) Policy",
    category: "Employment & Workforce Compliance",
    status: "live",
    summary:
      "How Recruitment Direct UK Ltd manages the transfer of workers under TUPE when taking over or exiting a staffing contract.",
    effectiveDate: "7 September 2026",
    href: "/tupe-policy",
    keywords: ["tupe", "transfer of undertakings", "service provision change", "employee liability information"],
  },
  {
    slug: "umbrella-company-due-diligence-policy",
    title: "Umbrella Company Due-Diligence Policy",
    category: "Employment & Workforce Compliance",
    status: "live",
    summary:
      "How Recruitment Direct UK Ltd carries out due diligence on umbrella companies and intermediaries used to pay contractors, in line with HMRC guidance.",
    effectiveDate: "7 September 2026",
    href: "/umbrella-company-due-diligence-policy",
    keywords: ["umbrella company", "hmrc compliance", "due diligence", "paye", "disguised remuneration", "key information document"],
  },
  {
    slug: "safer-recruitment-vetting-policy",
    title: "Safer Recruitment & Vetting Policy",
    category: "Employment & Workforce Compliance",
    status: "live",
    summary:
      "The DBS, PVG and background vetting checks Recruitment Direct UK Ltd carries out for roles involving children or vulnerable adults.",
    effectiveDate: "7 September 2026",
    href: "/safer-recruitment-vetting-policy",
    keywords: ["vetting", "reference checks", "dbs", "pvg", "safer recruitment", "background checks"],
  },
  {
    slug: "ir35-off-payroll-statement",
    title: "IR35 / Off-Payroll Working Compliance Statement",
    category: "Employment & Workforce Compliance",
    status: "live",
    summary:
      "Recruitment Direct UK Ltd's approach to IR35 and off-payroll working rules for contractors placed through personal service companies.",
    effectiveDate: "7 September 2026",
    href: "/ir35-off-payroll-statement",
    keywords: ["ir35", "off-payroll working", "status determination statement", "sds", "psc"],
  },
  {
    slug: "rec-code-of-practice-statement",
    title: "REC Code of Practice Compliance Statement",
    category: "Employment & Workforce Compliance",
    status: "live",
    summary:
      "Recruitment Direct UK Ltd is a Corporate Member of the REC (No. 00207320), committed to the REC Code of Professional Practice.",
    effectiveDate: "7 September 2026",
    href: "/rec-code-of-practice-statement",
    keywords: ["rec", "recruitment and employment confederation", "code of practice", "00207320"],
  },

  // ---------------------------------------------------------------------
  // Financial & Commercial Assurance
  // ---------------------------------------------------------------------
  {
    slug: "terms-of-use",
    title: "Terms of Use",
    category: "Financial & Commercial Assurance",
    status: "live",
    summary: "The terms that govern use of the rd1.co.uk website.",
    effectiveDate: "11 June 2026",
    href: "/terms-of-use",
    keywords: ["website terms", "terms and conditions"],
  },
  {
    slug: "insurance-statement-of-cover",
    title: "Insurance Certificates & Statement of Cover",
    category: "Financial & Commercial Assurance",
    status: "live",
    summary:
      "Recruitment Direct UK Ltd's Professional Indemnity, Employers' Liability and Public Liability insurance cover, underwritten by Aviva.",
    effectiveDate: "7 September 2026",
    href: "/insurance-statement-of-cover",
    keywords: [
      "employers liability",
      "public liability",
      "professional indemnity",
      "insurance certificate",
      "aviva",
      "statement of cover",
    ],
  },
  {
    slug: "prompt-payment-policy",
    title: "Prompt Payment Policy",
    category: "Financial & Commercial Assurance",
    status: "live",
    summary:
      "Recruitment Direct UK Ltd's commitment to paying suppliers, contractors and placed workers promptly and transparently.",
    effectiveDate: "7 September 2026",
    href: "/prompt-payment-policy",
    keywords: ["prompt payment code", "payment terms", "supply chain payment", "prompt payment"],
  },
  {
    slug: "quality-policy",
    title: "Quality Policy",
    category: "Financial & Commercial Assurance",
    status: "live",
    summary:
      "Recruitment Direct UK Ltd's ISO 9001:2015-certified approach to quality in recruitment service delivery (Certificate No. GB2006088).",
    effectiveDate: "7 September 2026",
    href: "/quality-policy",
    keywords: ["iso 9001", "quality management", "cqs", "iso 9001:2015", "gb2006088"],
  },
  {
    slug: "risk-management-policy",
    title: "Risk Management Policy",
    category: "Financial & Commercial Assurance",
    status: "live",
    summary:
      "How Recruitment Direct UK Ltd identifies, assesses and manages risk across compliance, operations, finance and service delivery.",
    effectiveDate: "7 September 2026",
    href: "/risk-management-policy",
    keywords: ["risk management", "risk register", "mitigation", "operational risk", "compliance risk"],
  },
  {
    slug: "supplier-subcontractor-due-diligence-policy",
    title: "Supplier & Subcontractor Due-Diligence Policy",
    category: "Financial & Commercial Assurance",
    status: "live",
    summary:
      "How Recruitment Direct UK Ltd carries out due diligence on suppliers and associate agencies used to fulfil client contracts.",
    effectiveDate: "7 September 2026",
    href: "/supplier-subcontractor-due-diligence-policy",
    keywords: ["supplier due diligence", "subcontractor policy", "supply chain compliance", "associate agencies"],
  },

  // ---------------------------------------------------------------------
  // Environmental & Social Value
  // ---------------------------------------------------------------------
  {
    slug: "environmental-sustainability-policy",
    title: "Environmental & Sustainability Policy",
    category: "Environmental & Social Value",
    status: "live",
    summary:
      "How Recruitment Direct UK Ltd reduces its environmental impact through hybrid working, paperless processes and supplier engagement.",
    effectiveDate: "7 September 2026",
    href: "/environmental-sustainability-policy",
    keywords: ["environmental policy", "sustainability", "iso 14001", "net zero", "hybrid working"],
  },
  {
    slug: "carbon-reduction-plan",
    title: "Carbon Reduction Plan",
    category: "Environmental & Social Value",
    status: "live",
    summary:
      "Recruitment Direct UK Ltd's commitment to reducing its carbon footprint, including a hybrid working policy that cuts commuting emissions.",
    effectiveDate: "7 September 2026",
    href: "/carbon-reduction-plan",
    keywords: ["ppn 006", "ppn 06/21", "carbon reduction plan", "net zero", "emissions", "climate change act"],
  },
  {
    slug: "social-value-statement",
    title: "Social Value Statement",
    category: "Environmental & Social Value",
    status: "live",
    summary:
      "How Recruitment Direct UK Ltd delivers social value through local employment, inclusive recruitment and community-focused client work.",
    effectiveDate: "7 September 2026",
    href: "/social-value-statement",
    keywords: [
      "social value act 2012",
      "ppn 002",
      "social value model",
      "community benefit",
      "social value",
    ],
  },

  // ---------------------------------------------------------------------
  // Legal & General
  // ---------------------------------------------------------------------
  {
    slug: "framework-and-tender-compliance",
    title: "Framework & Tender Compliance",
    category: "Legal & General",
    status: "live",
    summary:
      "Recruitment Direct UK Ltd's full compliance pack for procurement, framework and tender evaluation — linking every relevant policy, certification and statement.",
    effectiveDate: "7 September 2026",
    href: "/framework-and-tender-compliance",
    keywords: ["framework compliance", "tender pack", "procurement", "due diligence", "bid compliance", "accreditations"],
  },
  {
    slug: "accreditations",
    title: "Accreditations & Certifications",
    category: "Legal & General",
    status: "live",
    summary:
      "Constructionline Gold, Cyber Essentials and CQS/ISO 9001 — see the full detail on our accreditations page.",
    href: "/accreditations",
    keywords: ["constructionline", "cyber essentials", "iso 9001", "accreditations", "certifications"],
  },
  {
    slug: "glaa-licence-statement",
    title: "GLAA Licence Applicability Statement",
    category: "Legal & General",
    status: "live",
    summary:
      "A statement on the applicability of GLAA licensing to Recruitment Direct UK Ltd's recruitment activities.",
    effectiveDate: "7 September 2026",
    href: "/glaa-licence-statement",
    keywords: ["glaa", "gangmasters", "glaa licence", "licensing"],
  },
];
