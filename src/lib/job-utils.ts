import { api } from "@/services/api";

export interface LinkItem {
  self?: string;
  applications?: string;
  logo?: string;
  mainContact?: string;
  photo?: string;
  company?: string;
}

export interface StatusItem {
  statusId: number;
  name: string;
  active: boolean;
  default?: boolean;
}

export interface UserProfile {
  userId: number;
  firstName: string;
  lastName: string;
  position?: string;
  jobTitle?: string;
  email?: string;
  phone?: string;
  mobile?: string;
  links?: LinkItem;
}

export interface CompanyInfo {
  companyId: number;
  name: string;
  status?: StatusItem;
  owner?: UserProfile;
  links?: LinkItem;
}

export interface ContactInfo {
  contactId: number;
  firstName: string;
  lastName: string;
  unsubscribed?: boolean;
  email?: string;
  status?: StatusItem;
  owner?: UserProfile;
  links?: LinkItem;
}

export interface JobInfo {
  jobId: number;
  jobTitle: string;
  location?: {
    locationId: number;
    name: string;
  };
  company?: CompanyInfo;
  contact?: ContactInfo;
  status?: StatusItem;
  source?: string;
  owner?: UserProfile;
  links?: LinkItem;
}

export interface JobBoard {
  boardId: number;
  name: string;
  reference?: string;
}

export interface ApplyUrl {
  name: string;
  url: string;
}

export interface JobDetails {
  adId: number;
  state: string;
  title: string;
  reference: string;
  summary: string;
  bulletPoints: string[];
  description?: string;
  job?: JobInfo;
  company?: CompanyInfo;
  contact?: ContactInfo;
  jobBoards?: JobBoard[];
  otherApplyUrls?: ApplyUrl[];
  owner?: UserProfile;
  createdBy?: UserProfile;
  postAt: string;
  expireAt: string;
  links?: LinkItem;

  jobId?: number;
  jobTitle?: string;
  location?: string | {
    locationId: number;
    name: string;
  };
  category?: string | {
    categoryId: number;
    name: string;
    subCategory?: {
      subCategoryId: number;
      name: string;
    };
  } | null;
  industry?: string | null;
  job_type?: string | null;
  workShift?: {
    startTime: string;
    endTime: string;
    workDays: string[];
  };
  workplaceAddress?: {
    name: string;
    street: string[];
    city: string;
    postalCode: string;
    postcode?: string;
    country: string;
  };
  start?: {
    date: string;
  };
  jobType?: string;
  salary?: {
    ratePer: string;
    rateLow: number;
    rateHigh: number;
    currency: string;
  };
  workType?: {
    workTypeId: number;
    name: string;
  };
  createdAt?: string;
}

/**
 * Extracts a numeric Job ID from various URL slug patterns:
 * - "joiner-aberdeen-707421" -> "707421"
 * - "Joiner£18perhourAberdeen-707421" -> "707421"
 * - "707421" -> "707421"
 */
export function extractIdFromSlug(slug: string): string {
  if (!slug) return "";
  const decoded = decodeURIComponent(slug);
  if (/^\d+$/.test(decoded)) return decoded;
  const match = decoded.match(/-(\d+)$/);
  if (match) return match[1];
  const trailingDigits = decoded.match(/(\d+)$/);
  if (trailingDigits) return trailingDigits[1];
  return decoded;
}

/**
 * Generates an SEO-clean ASCII slug: /jobs/{job-title}-{location}-{id}
 * No rate symbols, no %C2%A3, strictly lowercase with hyphens.
 */
export function createJobSlug(title: string, location: string, adId: number | string): string {
  const cleanTitle = getJobCleanTitleString(title);
  const cleanLoc = (location || "").replace(/[^a-zA-Z0-9]/g, " ").trim();

  const titleSlug = cleanTitle
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

  const locSlug = cleanLoc
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

  let base = titleSlug;
  if (locSlug && !titleSlug.includes(locSlug)) {
    base = `${titleSlug}-${locSlug}`;
  }

  const cleanBase = (base || "job").replace(/-+/g, "-").replace(/^-+|-+$/g, "");
  return `${cleanBase}-${adId}`;
}

export function getJobCleanTitleString(title: string): string {
  if (!title) return "Job Opening";
  let clean = title;
  if (clean.includes("|")) {
    clean = clean.split("|")[0].trim();
  }
  // Strip rate patterns from title like "Joiner £18 per hour Aberdeen" or "£18ph"
  clean = clean.replace(/£\s*\d+(\.\d+)?(\s*(per\s*hour|ph|hr|p\/h|k|per\s*annum))?/gi, "").trim();
  // Strip duplicate whitespace
  clean = clean.replace(/\s+/g, " ").trim();
  return clean || title;
}

export function getJobAdCleanTitle(item: JobDetails): string {
  return getJobCleanTitleString(item.title);
}

export function getJobAdLocation(item: JobDetails): string {
  if (typeof item.location === "string" && isNaN(Number(item.location))) {
    return item.location;
  }
  if (typeof item.location === "object" && item.location?.name) {
    return item.location.name;
  }
  if (item.job?.location?.name) {
    return item.job.location.name;
  }

  if (item.title && item.title.includes("|")) {
    const parts = item.title.split("|").map((p) => p.trim());
    if (parts.length >= 3) return parts[2];
    if (parts.length === 2 && !parts[1].includes("hour") && !parts[1].includes("£")) return parts[1];
  }

  if (item.bulletPoints && item.bulletPoints.length > 0) {
    for (const bp of item.bulletPoints) {
      if (
        bp.includes(",") ||
        bp.toLowerCase().includes("scotland") ||
        bp.toLowerCase().includes("edinburgh") ||
        bp.toLowerCase().includes("glasgow") ||
        bp.toLowerCase().includes("aberdeen") ||
        bp.toLowerCase().includes("dundee") ||
        bp.toLowerCase().includes("inverness") ||
        bp.toLowerCase().includes("falkirk") ||
        bp.toLowerCase().includes("lanark") ||
        bp.toLowerCase().includes("stirling") ||
        bp.toLowerCase().includes("ayrshire") ||
        bp.toLowerCase().includes("kilmarnock") ||
        bp.toLowerCase().includes("greenock")
      ) {
        return bp;
      }
    }
  }

  if (item.reference && isNaN(Number(item.reference))) {
    return item.reference;
  }

  return "Scotland / UK";
}

export function getJobAdPayRate(item: JobDetails): string {
  if (item.title && item.title.includes("|")) {
    const parts = item.title.split("|").map((p) => p.trim());
    if (parts.length >= 2) return parts[1];
  }
  if (item.bulletPoints && item.bulletPoints.length > 0) {
    for (const bp of item.bulletPoints) {
      if (bp.includes("£") || bp.toLowerCase().includes("ph") || bp.toLowerCase().includes("hour")) {
        return bp;
      }
    }
  }
  return "Competitive Rate";
}

export function parsePayRate(payRate: string): { amount: string; frequency: string; numericValue?: number } {
  const clean = payRate.trim();
  if (clean.toLowerCase() === "competitive rate" || clean.toLowerCase() === "competitive") {
    return { amount: "Competitive", frequency: "Rate" };
  }

  const match = clean.match(/^£\s*(\d+(?:\.\d+)?)\s*(?:ph|per hour|h|\/hr)?/i);
  if (match) {
    let val = match[1];
    const num = parseFloat(val);
    if (!val.includes(".")) {
      val = val + ".00";
    } else {
      const decimals = val.split(".")[1];
      if (decimals.length === 1) {
        val = val + "0";
      }
    }
    return { amount: `£${val}`, frequency: "per hour", numericValue: num };
  }

  const matchYear = clean.match(/^£\s*(\d+(?:,\d+)?(?:\.\d+)?)\s*(?:k|per annum|pa|\/yr)?/i);
  if (matchYear) {
    return { amount: clean, frequency: "per annum" };
  }

  return { amount: clean, frequency: "" };
}

export function formatJobType(jobType: string | null | undefined): string {
  if (!jobType) return "";
  if (jobType.toLowerCase() === "temp") return "Temporary";
  if (jobType.toLowerCase() === "perm") return "Permanent";
  return jobType;
}

export function getJobAdWorkType(item: JobDetails): string {
  if (item.job_type) return formatJobType(item.job_type);
  if (item.title) {
    const lowerTitle = item.title.toLowerCase();
    if (lowerTitle.includes("permanent")) return "Permanent";
    if (lowerTitle.includes("contract")) return "Contract";
    if (lowerTitle.includes("temporary") || lowerTitle.includes("ongoing")) return "Temporary";
  }

  if (item.bulletPoints && item.bulletPoints.length > 0) {
    for (const bp of item.bulletPoints) {
      const lowerBp = bp.toLowerCase();
      if (lowerBp.includes("permanent")) return "Permanent";
      if (lowerBp.includes("contract")) return "Contract";
      if (lowerBp.includes("temporary") || lowerBp.includes("ongoing")) return "Temporary";
    }
  }

  return "Ongoing Temporary";
}

export function getPostedTimeAgo(dateStr: string): string {
  try {
    const postDate = new Date(dateStr);
    if (isNaN(postDate.getTime())) return dateStr;

    const now = new Date();
    const d1 = Date.UTC(now.getFullYear(), now.getMonth(), now.getDate());
    const d2 = Date.UTC(postDate.getFullYear(), postDate.getMonth(), postDate.getDate());
    const diffDays = Math.floor((d1 - d2) / (1000 * 60 * 60 * 24));

    if (diffDays <= 0) return "Posted today";
    if (diffDays === 1) return "Posted 1 day ago";
    return `Posted ${diffDays} days ago`;
  } catch {
    return dateStr;
  }
}

export function formatDate(dateStr: string): string {
  try {
    const date = new Date(dateStr);
    if (isNaN(date.getTime())) return dateStr;
    return date.toLocaleDateString("en-GB", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  } catch {
    return dateStr;
  }
}

export async function fetchJobById(numericAdId: string | number): Promise<JobDetails | null> {
  if (!numericAdId) return null;
  try {
    const data = await api.get<JobDetails>(`/core/live/jobads/${numericAdId}`);
    if (!data || !data.adId) return null;

    // Enrich with list data if missing
    try {
      const listData = await api.get<{ items: any[] }>("/core/live/jobads");
      if (listData && Array.isArray(listData.items)) {
        const matched = listData.items.find((item) => item.adId === Number(numericAdId));
        if (matched) {
          data.industry = data.industry || matched.industry;
          data.category = data.category || matched.category;
          data.job_type = data.job_type || matched.job_type;
        }
      }
    } catch {
      // Enrichment failure is non-fatal
    }

    return data;
  } catch (error) {
    console.error(`[fetchJobById Error] ID ${numericAdId}:`, error);
    return null;
  }
}
