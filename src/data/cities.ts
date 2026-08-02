export type RecruitmentSector = {
  name: string;
  slug: string;
  heading: string;
  description: string;
  roles: string[];
};

export type RecruitmentFAQ = {
  question: string;
  answer: string;
};

export type CityPageData = {
  city: string;
  country: string;
  countrySlug: string;
  slug: string;
  path: string;
  seoTitle: string;
  metaDescription: string;
  introduction: string[];
  localMarket: string[];
  areas: string[];
  sectors: RecruitmentSector[];
  faqs: RecruitmentFAQ[];
};

const sectorDefinitions = [
  {
    name: "Construction",
    slug: "construction",
    roles: [
      "CSCS labourers",
      "Joiners",
      "Electricians",
      "Plumbers",
      "Painters and decorators",
      "Bricklayers",
      "Groundworkers",
      "Plant operators",
      "Site supervisors",
      "Site managers",
      "Quantity surveyors",
      "Contracts managers",
    ],
  },
  {
    name: "Civil Engineering",
    slug: "civil-engineering",
    roles: [
      "Groundworkers",
      "Machine operators",
      "Setting-out engineers",
      "Site engineers",
      "General operatives",
      "Forepersons",
      "Site supervisors",
      "Project managers",
      "Quantity surveyors",
      "Health and safety professionals",
    ],
  },
  {
    name: "Engineering",
    slug: "engineering",
    roles: [
      "Mechanical engineers",
      "Electrical engineers",
      "Maintenance engineers",
      "Design engineers",
      "Project engineers",
      "Engineering technicians",
      "CAD technicians",
      "Engineering managers",
      "Skilled tradespeople",
    ],
  },
  {
    name: "Renewable Energy",
    slug: "renewable-energy",
    roles: [
      "Wind-energy technicians",
      "Solar-energy personnel",
      "Electrical engineers",
      "Project managers",
      "Environmental specialists",
      "Sustainability professionals",
      "Commercial specialists",
      "Energy-sector tradespeople",
    ],
  },
  {
    name: "Facilities Management",
    slug: "facilities-management",
    roles: [
      "Facilities managers",
      "Maintenance technicians",
      "Electricians",
      "Plumbers",
      "HVAC engineers",
      "Caretakers",
      "Porters",
      "Cleaners",
      "Helpdesk staff",
      "Contract managers",
    ],
  },
  {
    name: "Logistics",
    slug: "logistics",
    roles: [
      "HGV drivers",
      "Van drivers",
      "Delivery drivers",
      "Warehouse operatives",
      "Forklift drivers",
      "Transport planners",
      "Logistics coordinators",
      "Dispatch staff",
      "Warehouse supervisors",
      "Transport managers",
    ],
  },
  {
    name: "Healthcare",
    slug: "healthcare",
    roles: [
      "Nurses",
      "Pharmacists",
      "Healthcare assistants",
      "Support workers",
      "Care staff",
      "Clinical professionals",
      "Healthcare administrators",
      "Service coordinators",
      "Healthcare managers",
    ],
  },
  {
    name: "Education",
    slug: "education",
    roles: [
      "Teachers",
      "Lecturers",
      "Classroom assistants",
      "Learning-support staff",
      "Administrators",
      "Receptionists",
      "Facilities staff",
      "IT-support personnel",
      "Finance staff",
      "Senior appointments",
    ],
  },
  {
    name: "IT & Technology",
    slug: "it-technology",
    roles: [
      "Software developers",
      "IT-support engineers",
      "Data analysts",
      "Business analysts",
      "Project managers",
      "Cybersecurity specialists",
      "Systems administrators",
      "Product professionals",
      "Technical-support staff",
      "Technology leaders",
    ],
  },
  {
    name: "Commercial & Office",
    slug: "commercial-office",
    roles: [
      "Administrators",
      "Receptionists",
      "Customer-service advisers",
      "Personal assistants",
      "Executive assistants",
      "Finance staff",
      "Payroll staff",
      "HR professionals",
      "Sales personnel",
      "Marketing professionals",
      "Office managers",
    ],
  },
  {
    name: "Hospitality",
    slug: "hospitality",
    roles: [
      "Chefs",
      "Kitchen assistants",
      "Waiting staff",
      "Bar staff",
      "Housekeepers",
      "Receptionists",
      "Porters",
      "Event staff",
      "Duty managers",
      "Hotel managers",
      "Hospitality supervisors",
    ],
  },
] as const;

function createSectors(city: string, widerArea: string): RecruitmentSector[] {
  const descriptions: Record<string, string> = {
    construction: `Recruitment Direct UK supplies temporary, contract and permanent construction personnel to employers, developers and contractors throughout ${city} and ${widerArea}.`,
    "civil-engineering": `We recruit civil engineering personnel for infrastructure, utilities, groundworks and major development projects across ${city} and ${widerArea}.`,
    engineering: `RDUK recruits engineering professionals and skilled technical personnel for temporary, contract and permanent positions across ${city} and the surrounding employment market.`,
    "renewable-energy": `We support renewable energy, low-carbon and environmental employers requiring technical, operational, commercial and project personnel across ${city} and ${widerArea}.`,
    "facilities-management": `We provide facilities management recruitment for offices, public buildings, educational establishments, healthcare environments, hospitality venues and managed properties throughout ${city}.`,
    logistics: `Recruitment Direct UK supplies driving, transport, warehousing and logistics personnel to employers throughout ${city} and ${widerArea}.`,
    healthcare: `We recruit healthcare professionals, clinical personnel, support workers and administrative staff for temporary, contract and permanent appointments across ${city}.`,
    education: `RDUK supports schools, colleges, universities, training providers and educational organisations across ${city} with temporary, fixed-term and permanent recruitment.`,
    "it-technology": `We recruit technology and digital professionals for employers across software, data, cybersecurity, business systems and technical support throughout ${city}.`,
    "commercial-office": `We recruit commercial, administrative, customer-service and office professionals for employers throughout ${city} and the surrounding region.`,
    hospitality: `Recruitment Direct UK supplies temporary, contract and permanent hospitality personnel to hotels, venues, restaurants, events businesses and tourism employers across ${city}.`,
  };

  return sectorDefinitions.map((sector) => ({
    name: sector.name,
    slug: sector.slug,
    heading: `${sector.name} Recruitment in ${city}`,
    description: descriptions[sector.slug],
    roles: [...sector.roles],
  }));
}

function createFAQs(city: string, surroundingArea: string): RecruitmentFAQ[] {
  return [
    {
      question: `What sectors does RDUK recruit for in ${city}?`,
      answer: "We recruit across construction, civil engineering, engineering, renewable energy, facilities management, logistics, healthcare, education, IT and technology, commercial and office support, and hospitality.",
    },
    {
      question: `Can RDUK provide temporary staff in ${city}?`,
      answer: "Yes. We provide temporary personnel for urgent cover, seasonal demand, projects, increased workloads and ongoing workforce requirements.",
    },
    {
      question: `Does Recruitment Direct UK provide permanent recruitment in ${city}?`,
      answer: "Yes. We recruit permanent employees across every RDUK sector, from operational and skilled positions to professional, technical and senior appointments.",
    },
    {
      question: `Which areas around ${city} does RDUK cover?`,
      answer: "We support employers throughout Edinburgh, Glasgow, Aberdeen, Inverness, London, Birmingham, Manchester, Leeds, Newcastle, Cardiff, Belfast, Dublin and surrounding areas.",
    },
    {
      question: `How quickly can RDUK begin recruiting in ${city}?`,
      answer: "Our consultants can begin sourcing and screening candidates as soon as the vacancy requirements, working arrangements and compliance criteria have been confirmed.",
    },
  ];
}

function createCity(config: {
  city: string;
  country: string;
  countrySlug: string;
  slug: string;
  widerArea: string;
  metaDescription: string;
  introduction: string[];
  localMarket: string[];
  areas: string[];
}): CityPageData {
  const path = `/locations/${config.countrySlug}/${config.slug}`;

  return {
    city: config.city,
    country: config.country,
    countrySlug: config.countrySlug,
    slug: config.slug,
    path,
    seoTitle: `Recruitment Agency in ${config.city} | Temporary, Contract & Permanent Staff | RDUK`,
    metaDescription: config.metaDescription,
    introduction: config.introduction,
    localMarket: config.localMarket,
    areas: config.areas,
    sectors: createSectors(config.city, config.widerArea),
    faqs: createFAQs(config.city, config.widerArea),
  };
}

export const cities: CityPageData[] = [
  createCity({
    city: "Edinburgh",
    country: "Scotland",
    countrySlug: "scotland",
    slug: "edinburgh",
    widerArea: "the Lothians",
    metaDescription: "Recruitment agency in Edinburgh supplying temporary, contract and permanent staff across construction, engineering, logistics, healthcare, IT, education and hospitality.",
    introduction: [
      "Recruitment Direct UK provides temporary, contract and permanent recruitment services to employers throughout Edinburgh, the Lothians and surrounding areas.",
      "Established in 2006, we support organisations ranging from growing local businesses to major national employers. Our experienced recruitment consultants source, screen and supply suitable personnel across every core RDUK recruitment sector.",
      "Whether you require one permanent employee, urgent temporary cover or a complete contract workforce, Recruitment Direct UK provides a responsive, compliant and technology-supported recruitment service.",
    ],
    localMarket: [
      "Edinburgh has a diverse employment market covering financial and professional services, tourism, hospitality, education, healthcare, technology, construction, engineering and facilities management.",
      "Our team can manage individual appointments, urgent temporary cover and larger workforce requirements. We combine experienced recruitment consultants, nationwide candidate sourcing and AI-supported applicant screening to identify suitable people quickly.",
      "Candidates are reviewed for experience, availability and role suitability before submission. Relevant Right to Work, qualification and compliance checks are completed in line with the requirements of each assignment.",
    ],
    areas: [
      "Edinburgh city centre", "Leith", "Newhaven", "Portobello", "Corstorphine", "Gogar", "South Gyle",
      "Edinburgh Park", "Craigmillar", "Liberton", "Musselburgh", "Dalkeith", "Bonnyrigg", "Loanhead",
      "Penicuik", "Livingston", "Broxburn", "South Queensferry", "East Lothian", "Midlothian", "West Lothian",
    ],
  }),

  createCity({
    city: "Glasgow",
    country: "Scotland",
    countrySlug: "scotland",
    slug: "glasgow",
    widerArea: "the Glasgow City Region",
    metaDescription: "Recruitment agency in Glasgow supplying temporary, contract and permanent staff across construction, engineering, logistics, healthcare, IT, education and hospitality.",
    introduction: [
      "Recruitment Direct UK provides temporary, contract and permanent recruitment services to employers throughout Glasgow and the wider Glasgow City Region.",
      "Our consultants source and screen personnel across every core RDUK sector, from skilled trades and operational staff to technical professionals and senior appointments.",
      "We support urgent temporary requirements, contract recruitment, permanent vacancies and high-volume workforce needs.",
    ],
    localMarket: [
      "Glasgow has a large and varied employment market covering construction, engineering, infrastructure, healthcare, education, technology, logistics, commercial services, facilities management and hospitality.",
      "RDUK supports organisations across Glasgow and neighbouring local authority areas with flexible recruitment solutions.",
      "Our consultants combine local market knowledge, nationwide candidate sourcing and AI-supported applicant screening.",
    ],
    areas: [
      "Glasgow city centre", "Finnieston", "Partick", "Hillington", "Govan", "Pollokshields", "Maryhill",
      "Springburn", "Baillieston", "Cambuslang", "Rutherglen", "Paisley", "Renfrew", "Clydebank", "East Kilbride",
      "Hamilton", "Motherwell", "Coatbridge",
    ],
  }),

  createCity({
    city: "Aberdeen",
    country: "Scotland",
    countrySlug: "scotland",
    slug: "aberdeen",
    widerArea: "Aberdeenshire",
    metaDescription: "Recruitment agency in Aberdeen supplying temporary, contract and permanent staff across construction, engineering, logistics, healthcare, IT, education and hospitality.",
    introduction: [
      "Recruitment Direct UK provides temporary, contract and permanent recruitment services to employers throughout Aberdeen and Aberdeenshire.",
      "We recruit across all core RDUK sectors, including construction, engineering, energy, facilities management, logistics, healthcare, education, technology, commercial services and hospitality.",
      "Our consultants support individual vacancies, urgent temporary cover, specialist contracts and larger workforce requirements.",
    ],
    localMarket: [
      "Aberdeen has strong employment demand across energy, engineering, construction, marine services, logistics, healthcare, education, facilities management, commercial services and hospitality.",
      "RDUK supports employers throughout Aberdeen city and the wider Aberdeenshire region.",
      "Candidates are screened for experience, availability and suitability, with relevant compliance and Right to Work checks completed before placement.",
    ],
    areas: [
      "Aberdeen city centre", "Dyce", "Bridge of Don", "Altens", "Cove Bay", "Kingswells", "Westhill",
      "Portlethen", "Stonehaven", "Ellon", "Inverurie", "Kintore", "Banchory", "Peterhead", "Fraserburgh",
    ],
  }),

  createCity({
    city: "Inverness",
    country: "Scotland",
    countrySlug: "scotland",
    slug: "inverness",
    widerArea: "the Highlands",
    metaDescription: "Recruitment agency in Inverness supplying temporary, contract and permanent staff across construction, engineering, logistics, healthcare, IT, education and hospitality.",
    introduction: [
      "Recruitment Direct UK provides temporary, contract and permanent recruitment services to employers throughout Inverness and the Highlands.",
      "Our consultants recruit personnel across every core RDUK sector, supporting local, regional and national employers.",
      "We provide recruitment support for urgent temporary cover, project requirements, specialist contract positions and permanent appointments.",
    ],
    localMarket: [
      "Inverness serves as a major employment centre for the Highlands, with demand across construction, civil engineering, renewable energy, healthcare, education, logistics, facilities management, commercial services and hospitality.",
      "RDUK supports employers across a wide geographic region and can source candidates locally and nationally.",
      "Our recruitment process combines consultant-led assessment, applicant screening and relevant compliance checks.",
    ],
    areas: [
      "Inverness city centre", "Longman", "Raigmore", "Culloden", "Smithton", "Balloch", "Westhill",
      "North Kessock", "Dingwall", "Alness", "Invergordon", "Nairn", "Forres", "Aviemore", "Fort William", "Elgin",
    ],
  }),

  createCity({
    city: "London",
    country: "England",
    countrySlug: "england",
    slug: "london",
    widerArea: "Greater London",
    metaDescription: "Recruitment agency in London supplying temporary, contract and permanent staff across construction, engineering, logistics, healthcare, IT, education and hospitality.",
    introduction: [
      "Recruitment Direct UK provides temporary, contract and permanent recruitment services to employers throughout London and Greater London.",
      "We support organisations requiring operational, skilled, professional and technical personnel across every core RDUK recruitment sector.",
      "From urgent temporary cover to specialist permanent appointments and larger contract workforces, our consultants provide responsive and compliant recruitment support.",
    ],
    localMarket: [
      "London has one of the United Kingdom's largest and most varied employment markets, creating demand across construction, infrastructure, facilities management, healthcare, education, logistics, technology, commercial services and hospitality.",
      "RDUK supports employers with individual vacancies, urgent workforce requirements and high-volume recruitment campaigns.",
      "Our consultants combine nationwide candidate sourcing with AI-supported applicant screening and relevant compliance checks.",
    ],
    areas: [
      "Central London", "Westminster", "City of London", "Camden", "Islington", "Hackney", "Hammersmith and Fulham",
      "Ealing", "Hounslow", "Croydon", "Greenwich", "Lewisham", "Southwark", "Tower Hamlets", "Newham",
      "Barking and Dagenham", "Enfield", "Barnet", "Harrow", "Hillingdon",
    ],
  }),

  createCity({
    city: "Birmingham",
    country: "England",
    countrySlug: "england",
    slug: "birmingham",
    widerArea: "the West Midlands",
    metaDescription: "Recruitment agency in Birmingham supplying temporary, contract and permanent staff across construction, engineering, logistics, healthcare, IT, education and hospitality.",
    introduction: [
      "Recruitment Direct UK provides temporary, contract and permanent recruitment services to employers throughout Birmingham and the wider West Midlands.",
      "Our consultants recruit skilled, operational, technical and professional personnel across all core RDUK sectors.",
      "We support employers requiring urgent temporary staff, specialist contractors, permanent employees and larger project workforces.",
    ],
    localMarket: [
      "Birmingham has a broad employment market with demand across engineering, construction, logistics, healthcare, education, technology, commercial services and hospitality.",
      "Our recruitment team supports businesses of different sizes, from local employers to national organisations operating across the West Midlands.",
      "We manage candidate sourcing, screening, shortlisting and relevant compliance checks before submission.",
    ],
    areas: [
      "Birmingham city centre", "Aston", "Edgbaston", "Erdington", "Harborne", "Selly Oak", "Small Heath",
      "Sparkhill", "Sutton Coldfield", "Solihull", "West Bromwich", "Dudley", "Walsall", "Wolverhampton",
      "Coventry", "Redditch",
    ],
  }),

  createCity({
    city: "Manchester",
    country: "England",
    countrySlug: "england",
    slug: "manchester",
    widerArea: "Greater Manchester",
    metaDescription: "Recruitment agency in Manchester supplying temporary, contract and permanent staff across construction, engineering, logistics, healthcare, IT, education and hospitality.",
    introduction: [
      "Recruitment Direct UK provides temporary, contract and permanent recruitment services to employers throughout Manchester and Greater Manchester.",
      "We source, screen and supply candidates across construction, civil engineering, engineering, renewable energy, facilities management, logistics, healthcare, education, technology, commercial services and hospitality.",
      "Our consultants support urgent vacancies, specialist appointments and high-volume workforce requirements.",
    ],
    localMarket: [
      "Manchester has a varied regional economy with demand across construction, infrastructure, logistics, healthcare, education, digital technology, professional services and hospitality.",
      "RDUK supports employers requiring one key appointment or an entire project workforce.",
      "Nationwide candidate sourcing and AI-supported applicant screening help our consultants respond quickly to changing recruitment requirements.",
    ],
    areas: [
      "Manchester city centre", "Salford", "Trafford", "Stockport", "Bolton", "Bury", "Oldham", "Rochdale",
      "Tameside", "Wigan", "Altrincham", "Sale", "Eccles", "Cheadle", "Wilmslow", "Warrington",
    ],
  }),

  createCity({
    city: "Leeds",
    country: "England",
    countrySlug: "england",
    slug: "leeds",
    widerArea: "West Yorkshire",
    metaDescription: "Recruitment agency in Leeds supplying temporary, contract and permanent staff across construction, engineering, logistics, healthcare, IT, education and hospitality.",
    introduction: [
      "Recruitment Direct UK provides temporary, contract and permanent recruitment services to employers throughout Leeds and West Yorkshire.",
      "Our experienced consultants recruit operational, skilled, technical and professional personnel across every core RDUK sector.",
      "We support urgent temporary cover, specialist contracts, permanent recruitment and high-volume workforce requirements.",
    ],
    localMarket: [
      "Leeds supports a diverse employment market spanning commercial services, healthcare, education, technology, construction, engineering, facilities management, logistics and hospitality.",
      "RDUK works with employers requiring responsive local recruitment backed by nationwide candidate sourcing.",
      "Applicants are screened for suitability, availability, experience and relevant compliance requirements before submission.",
    ],
    areas: [
      "Leeds city centre", "Headingley", "Holbeck", "Hunslet", "Kirkstall", "Morley", "Pudsey", "Rothwell",
      "Seacroft", "Wetherby", "Bradford", "Wakefield", "Castleford", "Harrogate", "Dewsbury", "Huddersfield",
    ],
  }),

  createCity({
    city: "Newcastle",
    country: "England",
    countrySlug: "england",
    slug: "newcastle",
    widerArea: "the North East",
    metaDescription: "Recruitment agency in Newcastle supplying temporary, contract and permanent staff across construction, engineering, logistics, healthcare, IT, education and hospitality.",
    introduction: [
      "Recruitment Direct UK provides temporary, contract and permanent recruitment services to employers throughout Newcastle upon Tyne and the wider North East.",
      "We recruit across every core RDUK sector, supporting organisations with operational, skilled, technical and professional appointments.",
      "Our recruitment service covers urgent temporary requirements, contract assignments, permanent vacancies and project workforces.",
    ],
    localMarket: [
      "Newcastle and the wider North East have established employment demand across construction, engineering, energy, healthcare, education, technology, logistics, commercial services and hospitality.",
      "Our consultants support individual appointments and larger workforce requirements throughout the region.",
      "Candidate sourcing is supported by applicant screening, consultant review and appropriate Right to Work and compliance checks.",
    ],
    areas: [
      "Newcastle city centre", "Jesmond", "Gosforth", "Byker", "Walker", "Heaton", "Benwell", "Gateshead",
      "Team Valley", "North Shields", "South Shields", "Wallsend", "Whitley Bay", "Cramlington", "Washington",
      "Sunderland", "Durham",
    ],
  }),

  createCity({
    city: "Cardiff",
    country: "Wales",
    countrySlug: "wales",
    slug: "cardiff",
    widerArea: "South Wales",
    metaDescription: "Recruitment agency in Cardiff supplying temporary, contract and permanent staff across construction, engineering, logistics, healthcare, IT, education and hospitality.",
    introduction: [
      "Recruitment Direct UK provides temporary, contract and permanent recruitment services to employers throughout Cardiff and South Wales.",
      "We recruit skilled, operational, technical and professional personnel across every core RDUK recruitment sector.",
      "Our consultants support urgent temporary vacancies, specialist contracts, permanent appointments and larger recruitment campaigns.",
    ],
    localMarket: [
      "Cardiff has a broad employment market covering commercial services, public services, healthcare, education, construction, engineering, technology, logistics, facilities management and hospitality.",
      "RDUK supports employers throughout Cardiff and neighbouring South Wales employment centres.",
      "Our consultants manage sourcing, applicant screening, shortlisting and relevant compliance checks.",
    ],
    areas: [
      "Cardiff city centre", "Cardiff Bay", "Canton", "Cathays", "Grangetown", "Llanishen", "Pontprennau",
      "Roath", "Splott", "Penarth", "Barry", "Caerphilly", "Newport", "Pontypridd", "Bridgend", "Merthyr Tydfil",
    ],
  }),

  createCity({
    city: "Belfast",
    country: "Northern Ireland",
    countrySlug: "northern-ireland",
    slug: "belfast",
    widerArea: "Greater Belfast",
    metaDescription: "Recruitment agency in Belfast supplying temporary, contract and permanent staff across construction, engineering, logistics, healthcare, IT, education and hospitality.",
    introduction: [
      "Recruitment Direct UK provides temporary, contract and permanent recruitment services to employers throughout Belfast and the surrounding region.",
      "Our recruitment consultants support employers across construction, engineering, renewable energy, facilities management, logistics, healthcare, education, technology, commercial services and hospitality.",
      "We can assist with urgent temporary cover, specialist contracts, permanent recruitment and larger workforce projects.",
    ],
    localMarket: [
      "Belfast supports a diverse employment market with demand across construction, engineering, healthcare, education, technology, professional services, logistics, facilities management and hospitality.",
      "RDUK works with employers requiring responsive recruitment support backed by nationwide candidate sourcing.",
      "Applicants are screened for experience, availability and role suitability before submission.",
    ],
    areas: [
      "Belfast city centre", "Titanic Quarter", "Cathedral Quarter", "Ballyhackamore", "Dundonald", "Finaghy",
      "Lisburn Road", "Newtownabbey", "Carrickfergus", "Lisburn", "Bangor", "Holywood", "Newtownards",
      "Antrim", "Ballymena",
    ],
  }),

  createCity({
    city: "Dublin",
    country: "Ireland",
    countrySlug: "ireland",
    slug: "dublin",
    widerArea: "County Dublin",
    metaDescription: "Recruitment agency in Dublin supplying temporary, contract and permanent staff across construction, engineering, logistics, healthcare, IT, education and hospitality.",
    introduction: [
      "Recruitment Direct UK provides temporary, contract and permanent recruitment support to employers throughout Dublin and County Dublin, subject to applicable Irish employment and recruitment agency requirements.",
      "Our consultants source and screen personnel across every core RDUK sector, supporting employers with operational, skilled, technical and professional recruitment.",
      "We assist with urgent temporary requirements, contract appointments, permanent vacancies and high-volume recruitment campaigns.",
    ],
    localMarket: [
      "Dublin has a large employment market spanning technology, commercial services, construction, engineering, healthcare, education, logistics, facilities management and hospitality.",
      "RDUK can support employers recruiting within Dublin through compliant recruitment arrangements appropriate to the role and engagement type.",
      "Our consultants combine candidate sourcing, applicant screening, shortlisting and relevant eligibility checks.",
    ],
    areas: [
      "Dublin city centre", "Docklands", "Ballsbridge", "Sandyford", "Tallaght", "Blanchardstown", "Clondalkin",
      "Swords", "Dún Laoghaire", "Blackrock", "Lucan", "Malahide", "Finglas", "Santry", "Ballymount", "County Dublin",
    ],
  }),
];

export function getCity(countrySlug: string, citySlug: string): CityPageData | undefined {
  return cities.find(
    (city) =>
      city.countrySlug === countrySlug.toLowerCase() &&
      city.slug === citySlug.toLowerCase()
  );
}
