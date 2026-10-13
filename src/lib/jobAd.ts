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

  // Fallbacks for other structures to keep compilation fully correct
  jobId?: number;
  jobTitle?: string;
  location?: {
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

// Helper to dynamically extract location from title, bullet points, or reference
export const getJobAdLocation = (item: JobDetails): string => {
  if (item.job?.location?.name) {
    return item.job.location.name;
  }

  if (item.title && item.title.includes("|")) {
    const parts = item.title.split("|").map(p => p.trim());
    if (parts.length >= 3) {
      return parts[2];
    }
    if (parts.length === 2 && !parts[1].includes("hour") && !parts[1].includes("£")) {
      return parts[1];
    }
  }

  if (item.bulletPoints && item.bulletPoints.length > 0) {
    for (const bp of item.bulletPoints) {
      if (
        bp.includes(",") ||
        bp.toLowerCase().includes("scotland") ||
        bp.toLowerCase().includes("edinburgh") ||
        bp.toLowerCase().includes("glasgow") ||
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
};

// Helper to dynamically extract salary from title or bullet points
export const getJobAdSalary = (item: JobDetails): string => {
  if (item.title && item.title.includes("|")) {
    const parts = item.title.split("|").map(p => p.trim());
    for (const part of parts) {
      if (part.includes("£") || part.toLowerCase().includes("hour") || part.toLowerCase().includes("ph")) {
        return part;
      }
    }
  }

  if (item.bulletPoints && item.bulletPoints.length > 0) {
    for (const bp of item.bulletPoints) {
      if (bp.includes("£") || bp.toLowerCase().includes("ph") || bp.toLowerCase().includes("hour")) {
        return bp;
      }
    }
  }

  return "Competitive Rate";
};

// Helper to format job type (e.g. Temp -> Temporary, Perm -> Permanent)
export const formatJobType = (jobType: string | null | undefined): string => {
  if (!jobType) return "";
  if (jobType.toLowerCase() === "temp") return "Temporary";
  if (jobType.toLowerCase() === "perm") return "Permanent";
  return jobType;
};

// Helper to dynamically extract employment type from title or bullet points
export const getJobAdWorkType = (item: JobDetails): string => {
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
};

// Helper to dynamically clean job title
export const getJobAdCleanTitle = (item: JobDetails): string => {
  if (item.title && item.title.includes("|")) {
    return item.title.split("|")[0].trim();
  }
  return item.title;
};

// Rate extractor & parser functions to mirror job list styling
export const getJobAdPayRate = (item: JobDetails): string => {
  if (item.title && item.title.includes("|")) {
    const parts = item.title.split("|").map(p => p.trim());
    if (parts.length >= 2) return parts[1];
  }
  return "Competitive Rate";
};

export const parsePayRate = (payRate: string): { amount: string; frequency: string } => {
  const clean = payRate.trim();
  if (clean.toLowerCase() === "competitive rate") {
    return { amount: "Competitive", frequency: "Rate" };
  }

  const match = clean.match(/^£\s*(\d+(?:\.\d+)?)\s*(?:ph|per hour|h)?/i);
  if (match) {
    let val = match[1];
    if (!val.includes(".")) {
      val = val + ".00";
    } else {
      const decimals = val.split(".")[1];
      if (decimals.length === 1) {
        val = val + "0";
      }
    }
    return { amount: `£${val}`, frequency: "per hour" };
  }

  return { amount: clean, frequency: "" };
};

