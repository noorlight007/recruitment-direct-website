// lib/policies-data.ts
//
// Single source of truth for the /policies-and-compliance hub page.
// Drives both the categorised listing and the search/autocomplete box in
// components/PoliciesHub.tsx.
//
// STATUS KEY — be honest here, this page will be read by procurement teams:
//   "live"           — the document exists on the site today, `href` is real.
//   "draft"          — copy has been written (see rd1-policy-content-drafts-2026-09.md)
//                      but is not yet reviewed/published. Flip to "live" once
//                      it's on a real page and set `href`.
//   "action-needed"  — cannot be published as-is because it depends on a fact
//                      only Steven can confirm (an insurance limit, a
//                      membership number, an emissions baseline, etc). See
//                      `actionNote` for exactly what's missing.
//
// Do not flip anything to "live" until the underlying page is actually
// published — this file is what the search results promise to a visitor.

export type PolicyStatus = "live" | "draft" | "action-needed";

export interface PolicyItem {
  /** Stable id, used for React keys and deep-linking (#slug). */
  slug: string;
  title: string;
  category: string;
  status: PolicyStatus;
  /** One or two sentence, plain-English summary for the card. */
  summary: string;
  /** e.g. "11 June 2026". Omit if not yet set. */
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
    status: "draft",
    summary:
      "How long candidate, client and worker records are retained, and the schedule for secure deletion once no longer needed.",
    actionNote:
      "Draft is generic UK GDPR practice — confirm actual retention periods per record type (candidate CVs, timesheets, right-to-work copies) with whoever manages JobAdder before publishing.",
    keywords: ["retention schedule", "data deletion", "gdpr", "records management"],
  },
  {
    slug: "security-page",
    title: "Data & Platform Security",
    category: "Data Protection & Privacy",
    status: "live",
    summary:
      "How call data, candidate records and platform access are secured for our AI screening and recruitment tools — complements our Cyber Essentials accreditation.",
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
    status: "draft",
    summary:
      "Our zero-tolerance position on bribery and corruption and the procedures in place under the Bribery Act 2010.",
    actionNote: "Generic draft ready — needs a named responsible officer before publishing.",
    keywords: ["bribery act 2010", "corruption", "gifts and hospitality", "anti-corruption"],
  },
  {
    slug: "whistleblowing-policy",
    title: "Whistleblowing Policy",
    category: "Equality, Ethics & Conduct",
    status: "draft",
    summary:
      "How staff and workers can raise concerns about wrongdoing safely and in confidence, protected under the Public Interest Disclosure Act 1998.",
    actionNote: "Generic draft ready — needs a named/independent reporting contact before publishing.",
    keywords: ["public interest disclosure act", "raising concerns", "speak up"],
  },
  {
    slug: "conflict-of-interest-policy",
    title: "Conflict of Interest Policy",
    category: "Equality, Ethics & Conduct",
    status: "draft",
    summary:
      "How we identify, declare and manage conflicts of interest in our dealings with clients, candidates and suppliers.",
    keywords: ["conflicts of interest", "declarations of interest", "impartiality"],
  },

  // ---------------------------------------------------------------------
  // Health, Safety & Safeguarding
  // ---------------------------------------------------------------------
  {
    slug: "health-safety-policy",
    title: "Health & Safety Policy",
    category: "Health, Safety & Safeguarding",
    status: "draft",
    summary:
      "Our approach to protecting the health, safety and welfare of staff, temporary workers and site visitors, per the Health and Safety at Work etc. Act 1974.",
    actionNote:
      "A written H&S policy is a legal requirement once you have 5+ employees — confirm this exists as an internal document (it may already, just not published) before publishing this version, and name the responsible director.",
    keywords: ["hswa 1974", "risk assessment", "workplace safety"],
  },
  {
    slug: "safeguarding-policy",
    title: "Safeguarding Policy (Children & Vulnerable Adults)",
    category: "Health, Safety & Safeguarding",
    status: "draft",
    summary:
      "Our commitment to safeguarding children and vulnerable adults where our workers are placed in Healthcare and Education settings.",
    actionNote:
      "Confirm actual DBS/PVG check levels used per sector/role before publishing — the draft leaves this as a placeholder rather than inventing a compliance claim.",
    keywords: ["dbs check", "pvg", "safer recruitment", "vulnerable adults", "children"],
  },
  {
    slug: "business-continuity-policy",
    title: "Business Continuity & Disaster Recovery Policy",
    category: "Health, Safety & Safeguarding",
    status: "draft",
    summary:
      "How we maintain service to clients and workers, and protect data, in the event of a major disruption.",
    keywords: ["disaster recovery", "continuity plan", "resilience", "iso 22301"],
  },

  // ---------------------------------------------------------------------
  // Employment & Workforce Compliance
  // ---------------------------------------------------------------------
  {
    slug: "complaints-policy",
    title: "Complaints Policy",
    category: "Employment & Workforce Compliance",
    status: "live",
    summary: "How to raise a complaint about our service, and how we handle and respond to it.",
    href: "/complaints-policy",
    actionNote:
      "Already live but currently has no effective/review date on the page — it's the one document in the set that stands out as undated. Add one to match the other 8 policies.",
    keywords: ["complaints procedure", "rec code of practice", "service issues"],
  },
  {
    slug: "awr-compliance-statement",
    title: "Agency Workers Regulations (AWR) Compliance Statement",
    category: "Employment & Workforce Compliance",
    status: "draft",
    summary:
      "How we apply the Agency Workers Regulations 2010, including equal treatment on pay and conditions after 12 weeks in a role.",
    keywords: ["awr 2010", "agency workers", "equal treatment", "12 week rule"],
  },
  {
    slug: "right-to-work-policy",
    title: "Right to Work & Immigration Compliance Policy",
    category: "Employment & Workforce Compliance",
    status: "draft",
    summary:
      "Our process for verifying right-to-work status for every candidate before placement, per the Immigration, Asylum and Nationality Act 2006.",
    keywords: ["right to work", "home office checks", "immigration compliance"],
  },
  {
    slug: "safer-recruitment-vetting-policy",
    title: "Safer Recruitment & Vetting Policy",
    category: "Employment & Workforce Compliance",
    status: "draft",
    summary:
      "Our vetting process for candidates before placement — identity checks, reference checks, and DBS/PVG screening where the role requires it.",
    actionNote: "Confirm actual vetting steps and check levels used today before publishing.",
    keywords: ["vetting", "reference checks", "dbs", "pvg", "safer recruitment"],
  },
  {
    slug: "ir35-compliance-statement",
    title: "IR35 / Off-Payroll Working Compliance Statement",
    category: "Employment & Workforce Compliance",
    status: "draft",
    summary:
      "How we support clients with off-payroll working (IR35) status determinations for contract placements.",
    keywords: ["ir35", "off-payroll working", "status determination statement", "sds"],
  },
  {
    slug: "rec-code-of-practice-statement",
    title: "REC Code of Practice Compliance Statement",
    category: "Employment & Workforce Compliance",
    status: "action-needed",
    summary:
      "A short statement confirming REC membership and adherence to its Code of Practice, alongside the REC logo already used on the site.",
    actionNote:
      "Confirm current REC membership status and number before publishing — do not publish this claim unconfirmed.",
    keywords: ["rec", "recruitment and employment confederation", "code of practice"],
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
    href: "/terms-of-use",
    keywords: ["website terms", "terms and conditions"],
  },
  {
    slug: "insurance-statement",
    title: "Insurance Certificates & Statement of Cover",
    category: "Financial & Commercial Assurance",
    status: "action-needed",
    summary:
      "Confirmation of Employers' Liability, Public Liability and Professional Indemnity cover, with limits — the single most commonly requested document in any tender pack.",
    actionNote:
      "Needs real cover levels/insurer details from Steven. Employers' Liability insurance is a legal requirement for any business with employees — confirm cover is in place even before deciding whether to publish figures.",
    keywords: ["employers liability", "public liability", "professional indemnity", "insurance certificate"],
  },
  {
    slug: "prompt-payment-policy",
    title: "Prompt Payment Policy",
    category: "Financial & Commercial Assurance",
    status: "action-needed",
    summary:
      "Our commitment to paying workers and suppliers on time, including any Prompt Payment Code commitments.",
    actionNote: "Confirm actual payment terms (worker pay cycle, supplier/subcontractor payment days) before publishing.",
    keywords: ["prompt payment code", "payment terms", "supply chain payment"],
  },
  {
    slug: "quality-policy",
    title: "Quality Policy",
    category: "Financial & Commercial Assurance",
    status: "draft",
    summary:
      "Our approach to service quality and continuous improvement, aligned with our ISO 9001 / CQS accreditation.",
    actionNote: "Draft references your existing CQS/ISO 9001 badge on /accreditations — confirm certificate number/scope before publishing.",
    keywords: ["iso 9001", "quality management", "cqs"],
  },

  // ---------------------------------------------------------------------
  // Environmental & Social Value
  // ---------------------------------------------------------------------
  {
    slug: "environmental-sustainability-policy",
    title: "Environmental & Sustainability Policy",
    category: "Environmental & Social Value",
    status: "draft",
    summary:
      "Our commitment to reducing environmental impact across our offices and operations.",
    keywords: ["environmental policy", "sustainability", "iso 14001", "net zero"],
  },
  {
    slug: "carbon-reduction-plan",
    title: "Carbon Reduction Plan",
    category: "Environmental & Social Value",
    status: "action-needed",
    summary:
      "Our current emissions baseline and reduction targets, in the PPN 006 (formerly PPN 06/21) format used across public sector procurement.",
    actionNote:
      "Needs real emissions data before it can be published — this can't be templated. Note: NHS procurements have required a Carbon Reduction Plan for every new contract regardless of value since April 2024 (not just contracts over £5m), so this is worth prioritising given your Healthcare client base.",
    keywords: ["ppn 006", "ppn 06/21", "carbon reduction plan", "net zero", "emissions"],
  },
  {
    slug: "social-value-statement",
    title: "Social Value Statement",
    category: "Environmental & Social Value",
    status: "draft",
    summary:
      "How our work creates wider social benefit — local employment, community engagement and support into work for underrepresented groups — in line with the Public Services (Social Value) Act 2012 and the Social Value Model (PPN 002).",
    actionNote: "Draft is generic — strongest version would include real examples (local placements, community partnerships) if you have them.",
    keywords: ["social value act 2012", "ppn 002", "social value model", "community benefit"],
  },

  // ---------------------------------------------------------------------
  // Legal & General
  // ---------------------------------------------------------------------
  {
    slug: "equality-act-statement",
    title: "Accreditations & Certifications",
    category: "Legal & General",
    status: "live",
    summary:
      "Constructionline Gold, Cyber Essentials and CQS/ISO 9001 — see the full detail on our accreditations page.",
    href: "/accreditations",
    keywords: ["constructionline", "cyber essentials", "iso 9001", "accreditations", "certifications"],
  },
];
