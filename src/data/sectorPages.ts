// Content data for sector landing pages.
//
// Only the two missing sectors are defined here. The existing nine pages are
// untouched — when convenient they can be migrated onto this same shape so all
// eleven render from one template.
//
// RULES: no invented client names, no fabricated case studies, no placement
// figures that can't be evidenced.

export interface SectorRoleGroup {
  heading: string;
  roles: string[];
}

export interface SectorFaq {
  question: string;
  answer: string;
}

export interface SectorPageData {
  slug: string;
  name: string;
  /** Path this page lives at. */
  path: string;
  /** <title> — singular "Recruitment Agency" matches sector search queries. */
  title: string;
  metaDescription: string;
  h1: string;
  /** 2-3 paragraphs. Opening copy. */
  intro: string[];
  /** Roles grouped by discipline. */
  roleGroups: SectorRoleGroup[];
  /** Environments / project types served. */
  servedHeading: string;
  served: { title: string; body: string }[];
  /** Compliance points genuinely relevant to this sector. */
  complianceHeading: string;
  compliance: string[];
  faqs: SectorFaq[];
}

// ---------------------------------------------------------------------------
// FACILITIES MANAGEMENT
// ---------------------------------------------------------------------------

export const facilitiesManagement: SectorPageData = {
  slug: 'facilities-management',
  name: 'Facilities Management',
  path: '/facilities-management-recruitment-agency',

  title: 'Facilities Management Recruitment Agency | Hard & Soft FM Staff UK',
  metaDescription:
    'Facilities management recruitment agency supplying cleaners, caretakers, ' +
    'maintenance technicians, FM managers and security staff across the UK. ' +
    'Temporary, contract and permanent. Trusted since 2006. Call 01324 613198.',
  h1: 'Facilities Management Recruitment Agency',

  intro: [
    'Recruitment Direct UK supplies facilities management personnel to offices, ' +
      'schools, hospitals, retail sites, public buildings, industrial premises and ' +
      'managed properties across the UK. We cover both hard FM — the engineering, ' +
      'maintenance and building services side — and soft FM, including cleaning, ' +
      'security, catering support and grounds maintenance.',
    'FM staffing rarely runs to a predictable schedule. Contracts mobilise at ' +
      'short notice, sites need cover the same day, and a missed shift on a live ' +
      'contract has immediate consequences. We operate 24/7 with AI-supported ' +
      'applicant screening, so sourcing begins the moment a requirement is ' +
      'confirmed rather than the next working morning.',
    'Every candidate is Right to Work checked and compliance screened before ' +
      'submission, with DBS or Disclosure Scotland checks arranged where the site ' +
      'or role requires it.',
  ],

  roleGroups: [
    {
      heading: 'Hard FM and building services',
      roles: [
        'Maintenance technicians',
        'Multi-skilled engineers',
        'HVAC engineers',
        'Electricians',
        'Plumbers',
        'Fabric maintenance operatives',
        'Handypersons',
        'Air conditioning engineers',
        'Fire and security systems engineers',
      ],
    },
    {
      heading: 'Soft FM and site services',
      roles: [
        'Cleaners and cleaning supervisors',
        'Caretakers and janitors',
        'Security officers (SIA licensed)',
        'Porters',
        'Grounds maintenance operatives',
        'Waste and recycling operatives',
        'Catering assistants',
        'Window cleaners',
      ],
    },
    {
      heading: 'FM management and support',
      roles: [
        'Facilities managers',
        'Contract managers',
        'Site supervisors',
        'Helpdesk and CAFM administrators',
        'Health and safety advisers',
        'Compliance coordinators',
        'Mobilisation managers',
      ],
    },
  ],

  servedHeading: 'Environments We Staff',
  served: [
    {
      title: 'Commercial offices',
      body: 'Cleaning teams, reception support, maintenance cover and building ' +
        'services engineers for single sites and multi-site portfolios.',
    },
    {
      title: 'Education',
      body: 'Caretakers, cleaners and grounds staff for schools, academies and ' +
        'colleges, with enhanced DBS or PVG checks arranged as required.',
    },
    {
      title: 'Healthcare',
      body: 'Domestic assistants, porters and maintenance operatives for ' +
        'hospitals, clinics and care settings, screened to sector standards.',
    },
    {
      title: 'Retail and leisure',
      body: 'Cleaning, security and maintenance cover for shopping centres, ' +
        'retail parks, hotels and venues, including out-of-hours shifts.',
    },
    {
      title: 'Industrial and logistics',
      body: 'Site cleaning, waste handling and mechanical maintenance for ' +
        'warehouses, distribution centres and manufacturing premises.',
    },
    {
      title: 'Public sector and local authority',
      body: 'FM personnel for council buildings, leisure centres and community ' +
        'facilities, supplied under framework and PSA arrangements.',
    },
  ],

  complianceHeading: 'Compliance and Accreditation',
  compliance: [
    'Right to Work verification on every candidate before submission',
    'Enhanced DBS and Disclosure Scotland / PVG checks where the role requires',
    'SIA licence verification for security personnel',
    'Constructionline Gold member',
    'ISO 9001:2015 certified quality management',
    'Cyber Essentials certified',
    'REC corporate member',
  ],

  faqs: [
    {
      question: 'How quickly can you supply facilities management staff?',
      answer:
        'For most FM roles we can supply screened candidates within 24 hours, ' +
        'and same-day for cleaning and caretaking cover in areas where we hold an ' +
        'active local candidate pool. Our applicant screening runs 24/7, so ' +
        'sourcing starts as soon as the requirement is confirmed rather than the ' +
        'next working day.',
    },
    {
      question: 'Do you cover both hard and soft FM?',
      answer:
        'Yes. Hard FM covers maintenance technicians, multi-skilled and HVAC ' +
        'engineers, electricians and plumbers. Soft FM covers cleaning, security, ' +
        'portering, grounds maintenance and catering support. We also supply FM ' +
        'management, helpdesk and compliance roles.',
    },
    {
      question: 'Can you support a new contract mobilisation?',
      answer:
        'Yes. We handle high-volume mobilisations where a full site team is ' +
        'needed from a fixed start date, including phased starts across multiple ' +
        'sites. Give us the start date, shift pattern and headcount and we build ' +
        'the pipeline against it.',
    },
    {
      question: 'Are your FM candidates DBS checked?',
      answer:
        'Where the role or site requires it, yes. We arrange enhanced DBS checks ' +
        'in England and Wales, and Disclosure Scotland or PVG scheme membership in ' +
        'Scotland, before a candidate starts on a regulated site.',
    },
    {
      question: 'Do you supply FM staff nationwide?',
      answer:
        'Yes. Recruitment Direct UK supplies facilities management personnel ' +
        'throughout Scotland, England, Wales, Northern Ireland and the Republic of ' +
        'Ireland, from our office in Linlithgow with a national candidate database.',
    },
  ],
};

// ---------------------------------------------------------------------------
// CIVIL ENGINEERING
// ---------------------------------------------------------------------------

export const civilEngineering: SectorPageData = {
  slug: 'civil-engineering',
  name: 'Civil Engineering',
  path: '/civil-engineering-recruitment-agency',

  title: 'Civil Engineering Recruitment Agency | Site & Groundworks Staff UK',
  metaDescription:
    'Civil engineering recruitment agency supplying groundworkers, site ' +
    'engineers, setting-out engineers, plant operators and project staff across ' +
    'the UK. Temporary, contract and permanent. Since 2006. Call 01324 613198.',
  h1: 'Civil Engineering Recruitment Agency',

  intro: [
    'Recruitment Direct UK supplies civil engineering personnel to contractors ' +
      'working on infrastructure, utilities, groundworks, highways, water and major ' +
      'development projects across the UK. We cover site-based trades and ' +
      'operatives through to engineering, commercial and project management ' +
      'appointments.',
    'Civil engineering programmes move to fixed dates and penalty clauses. A ' +
      'delayed start or an under-resourced gang costs more than the labour itself. ' +
      'We supply against the programme rather than the vacancy, mobilising full ' +
      'gangs for site starts and covering short-notice absence on live works.',
    'All candidates are Right to Work checked and card-verified before ' +
      'submission — CSCS, CPCS or NPORS as the role requires, with NRSWA street ' +
      'works accreditation confirmed for highways and utilities work.',
  ],

  roleGroups: [
    {
      heading: 'Site operatives and trades',
      roles: [
        'Groundworkers',
        'General operatives',
        'Steel fixers',
        'Shuttering carpenters',
        'Concrete finishers',
        'Drainage operatives',
        'Kerb layers',
        'Pipelayers',
        'Traffic management operatives',
      ],
    },
    {
      heading: 'Plant and machine operation',
      roles: [
        '360 excavator operators',
        'Dozer operators',
        'ADT dumper drivers',
        'Telehandler operators',
        'Loading shovel operators',
        'Roller operators',
        'Plant fitters',
        'Banksmen and slinger signallers',
      ],
    },
    {
      heading: 'Engineering and site management',
      roles: [
        'Site engineers',
        'Setting-out engineers',
        'Sub-agents and agents',
        'Site supervisors and forepersons',
        'Section engineers',
        'Project managers',
        'Contracts managers',
      ],
    },
    {
      heading: 'Commercial and technical',
      roles: [
        'Quantity surveyors',
        'Assistant quantity surveyors',
        'Estimators',
        'Planners',
        'Health and safety advisers',
        'Environmental advisers',
        'Document controllers',
      ],
    },
  ],

  servedHeading: 'Project Types We Staff',
  served: [
    {
      title: 'Highways and infrastructure',
      body: 'Road schemes, junction improvements, surfacing and traffic ' +
        'management, including NRSWA-accredited street works operatives.',
    },
    {
      title: 'Utilities',
      body: 'Water, gas, power and telecoms networks — excavation, pipelaying, ' +
        'jointing support and reinstatement crews.',
    },
    {
      title: 'Groundworks and earthworks',
      body: 'Site clearance, bulk excavation, drainage, foundations and ' +
        'substructure packages for housing and commercial development.',
    },
    {
      title: 'Rail',
      body: 'Civils packages on rail infrastructure, with PTS-certified ' +
        'personnel supplied where the works require it.',
    },
    {
      title: 'Marine and coastal',
      body: 'Sea defence, harbour and flood alleviation schemes requiring ' +
        'specialist plant operation and groundworks experience.',
    },
    {
      title: 'Renewables civils',
      body: 'Access tracks, foundations and balance-of-plant works for wind and ' +
        'solar developments, alongside our renewable energy division.',
    },
  ],

  complianceHeading: 'Cards, Tickets and Accreditation',
  compliance: [
    'CSCS card verification on every site operative',
    'CPCS and NPORS plant tickets checked against the operating category',
    'NRSWA street works accreditation for highways and utilities works',
    'Right to Work verification before submission',
    'Constructionline Gold member',
    'ISO 9001:2015 certified quality management',
    'Cyber Essentials certified',
    'REC corporate member',
  ],

  faqs: [
    {
      question: 'Can you supply a full groundworks gang for a site start?',
      answer:
        'Yes. High-volume mobilisation is one of the things we do most often — ' +
        'give us the start date, the gang composition and the ticket requirements ' +
        'and we build the pipeline against the programme, with phased starts where ' +
        'the works require it.',
    },
    {
      question: 'Do you check plant tickets before candidates arrive on site?',
      answer:
        'Yes. CPCS or NPORS tickets are verified against the specific operating ' +
        'category before submission, not on arrival. A 360 operator is checked for ' +
        '360 excavator competence, not a generic plant ticket.',
    },
    {
      question: 'Do you supply NRSWA-accredited street works operatives?',
      answer:
        'Yes. For highways and utilities schemes we confirm NRSWA units against ' +
        'the works being carried out, including supervisor accreditation where the ' +
        'role requires it.',
    },
    {
      question:
        'What is the difference between your civil engineering and construction divisions?',
      answer:
        'Construction covers building trades and site management on residential, ' +
        'commercial and fit-out projects. Civil engineering covers infrastructure ' +
        'and groundworks — highways, utilities, drainage, earthworks and heavy ' +
        'plant. Many contractors use both, and the same consultant can handle a ' +
        'requirement spanning the two.',
    },
    {
      question: 'Do you cover civil engineering projects across the whole UK?',
      answer:
        'Yes. We supply civil engineering personnel throughout Scotland, England, ' +
        'Wales, Northern Ireland and the Republic of Ireland, including mobile ' +
        'gangs willing to travel and work away where the programme requires it.',
    },
  ],
};

export const NEW_SECTOR_PAGES = [facilitiesManagement, civilEngineering];

export const getSectorPage = (slug: string) =>
  NEW_SECTOR_PAGES.find((s) => s.slug === slug);
