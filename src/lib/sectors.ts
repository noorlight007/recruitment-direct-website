// Single source of truth for sectors.
// Anything that renders a sector name or link MUST import from here.
// Do not hardcode a sector URL anywhere else in the codebase.

export interface Sector {
  slug: string;
  name: string;
  href: string;
  /** false = page not built yet; renders as text, not a link */
  live: boolean;
  /** shown on homepage sector grid */
  onHomepage: boolean;
  /** max 4 — shown on location pages. Full lists live on the sector page. */
  topRoles: string[];
}

export const SECTORS: Sector[] = [
  {
    slug: 'construction',
    name: 'Construction',
    href: '/construction-recruitment-agency',
    live: true,
    onHomepage: true,
    topRoles: ['CSCS labourers', 'Joiners', 'Groundworkers', 'Site managers'],
  },
  {
    slug: 'civil-engineering',
    name: 'Civil Engineering',
    href: '/civil-engineering-recruitment-agency',
    live: true,
    onHomepage: true,
    topRoles: ['Site engineers', 'Setting-out engineers', 'Machine operators', 'Forepersons'],
  },
  {
    slug: 'engineering',
    name: 'Engineering',
    href: '/engineering-recruitment-agency',
    live: true,
    onHomepage: true,
    topRoles: ['Mechanical engineers', 'Electrical engineers', 'Maintenance engineers', 'CAD technicians'],
  },
  {
    slug: 'renewables',
    name: 'Renewable Energy',
    href: '/renewable-energy-recruitment-agency',
    live: true,
    onHomepage: true,
    topRoles: ['Wind-energy technicians', 'Solar-energy personnel', 'Electrical engineers', 'Project managers'],
  },
  {
    slug: 'facilities-management',
    name: 'Facilities Management',
    href: '/facilities-management-recruitment-agency',
    live: true,
    onHomepage: true,
    topRoles: ['Facilities managers', 'Maintenance technicians', 'Cleaners', 'Caretakers'],
  },
  {
    slug: 'logistics',
    name: 'Logistics',
    href: '/logistics-recruitment-agency',
    live: true,
    onHomepage: true,
    topRoles: ['HGV drivers', 'Warehouse operatives', 'Forklift drivers', 'Transport planners'],
  },
  {
    slug: 'healthcare',
    name: 'Healthcare',
    href: '/healthcare-recruitment-agency',
    live: true,
    onHomepage: true,
    topRoles: ['Nurses', 'Healthcare assistants', 'Support workers', 'Care staff'],
  },
  {
    slug: 'education',
    name: 'Education',
    href: '/education-recruitment-agency',
    live: true,
    onHomepage: true,
    topRoles: ['Teachers', 'Classroom assistants', 'Learning-support staff', 'Cover supervisors'],
  },
  {
    slug: 'it-technology',
    name: 'IT & Technology',
    href: '/it-technology-recruitment-agency',
    live: true,
    onHomepage: true,
    topRoles: ['Software developers', 'IT-support engineers', 'Data analysts', 'Systems administrators'],
  },
  {
    slug: 'commercial-office',
    name: 'Commercial & Office',
    href: '/commercial-office-recruitment-agency',
    live: true,
    onHomepage: true,
    topRoles: ['Administrators', 'Receptionists', 'Customer-service advisers', 'Payroll staff'],
  },
  {
    slug: 'hospitality',
    name: 'Hospitality',
    href: '/hospitality-recruitment-agency',
    live: true,
    onHomepage: true,
    topRoles: ['Chefs', 'Kitchen assistants', 'Waiting staff', 'Housekeepers'],
  },
];

export const getSector = (slug: string) => SECTORS.find((s) => s.slug === slug);

export const homepageSectors = () => SECTORS.filter((s) => s.onHomepage);

export const sectorUrls: Record<string, string> = {
  "construction": "/construction-recruitment-agency",
  "engineering": "/engineering-recruitment-agency",
  "renewable-energy": "/renewable-energy-recruitment-agency",
  "renewables": "/renewable-energy-recruitment-agency",
  "healthcare": "/healthcare-recruitment-agency",
  "education": "/education-recruitment-agency",
  "hospitality": "/hospitality-recruitment-agency",
  "logistics": "/logistics-recruitment-agency",
  "it-technology": "/it-technology-recruitment-agency",
  "it-tech": "/it-technology-recruitment-agency",
  "commercial-office": "/commercial-office-recruitment-agency",
  "commercial": "/commercial-office-recruitment-agency",
  "facilities-management": "/facilities-management-recruitment-agency",
  "civil-engineering": "/civil-engineering-recruitment-agency",
};

export function getSectorHref(slug: string): string | null {
  if (!slug) return null;
  const normalized = slug.toLowerCase();
  return sectorUrls[normalized] || null;
}
