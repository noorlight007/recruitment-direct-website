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
  isHub?: boolean;
  hubSlug?: string;
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

function createFAQs(city: string, surroundingArea: string, areas: string[]): RecruitmentFAQ[] {
  const areasText = areas && areas.length > 0
    ? areas.slice(0, 5).join(", ").replace(/, ([^,]*)$/, " and $1")
    : surroundingArea;

  return [
    {
      question: `What sectors does RDUK recruit for in ${city}?`,
      answer: `We recruit across construction, civil engineering, engineering, renewable energy, facilities management, logistics, healthcare, education, IT and technology, commercial and office support, and hospitality in the ${city} area.`,
    },
    {
      question: `Can RDUK provide temporary staff in ${city}?`,
      answer: `Yes. We provide temporary personnel in ${city} for urgent cover, seasonal demand, projects, increased workloads and ongoing workforce requirements.`,
    },
    {
      question: `Does Recruitment Direct UK provide permanent recruitment in ${city}?`,
      answer: `Yes. We recruit permanent employees across every RDUK sector in ${city}, from operational and skilled positions to professional, technical and senior appointments.`,
    },
    {
      question: `Which areas around ${city} does RDUK cover?`,
      answer: `We support employers and supply candidates throughout ${city} and surrounding areas, including ${areasText}.`,
    },
    {
      question: `How quickly can RDUK begin recruiting in ${city}?`,
      answer: `Our consultants can begin sourcing and screening candidates for ${city} vacancies as soon as the requirements, working arrangements and compliance criteria have been confirmed.`,
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
    faqs: createFAQs(config.city, config.widerArea, config.areas),
  };
}

const flagshipCities: CityPageData[] = [
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
    country: "Republic of Ireland",
    countrySlug: "republic-of-ireland",
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

  createCity({
    city: "Liverpool",
    country: "England",
    countrySlug: "england",
    slug: "liverpool",
    widerArea: "Merseyside",
    metaDescription: "Recruitment agency in Liverpool supplying temporary, contract and permanent staff across construction, engineering, logistics, healthcare, IT, education and hospitality.",
    introduction: [
      "Recruitment Direct UK provides temporary, contract and permanent recruitment services to employers throughout Liverpool and Merseyside.",
      "We supply skilled, operational, technical and professional candidates across every core RDUK recruitment sector.",
      "Our services support urgent temporary cover, specialist contracts, permanent vacancies and larger project workforces.",
    ],
    localMarket: [
      "Liverpool has a diverse maritime, commercial, logistical and manufacturing economy with strong demand across infrastructure, construction, logistics, healthcare, education and hospitality.",
      "RDUK works with regional and national organisations, managing candidate sourcing, screening, shortlisting and Right to Work checks.",
    ],
    areas: [
      "Liverpool city centre", "Aigburth", "Allerton", "Anfield", "Crosby", "Kirkby", "Speke", "Toxteth",
      "West Derby", "Birkenhead", "Wallasey", "St Helens", "Southport", "Bootle", "Prescot",
    ],
  }),

  createCity({
    city: "Sheffield",
    country: "England",
    countrySlug: "england",
    slug: "sheffield",
    widerArea: "South Yorkshire",
    metaDescription: "Recruitment agency in Sheffield supplying temporary, contract and permanent staff across construction, engineering, logistics, healthcare, IT, education and hospitality.",
    introduction: [
      "Recruitment Direct UK provides temporary, contract and permanent recruitment services to employers throughout Sheffield and South Yorkshire.",
      "Our experienced consultants supply operational, technical, professional and skilled personnel across all core RDUK sectors.",
      "We support urgent temporary coverage, contract assignments, permanent recruitment and high-volume workforce requirements.",
    ],
    localMarket: [
      "Sheffield supports a broad industrial and commercial employment market with demand across engineering, advanced manufacturing, construction, healthcare, education and logistics.",
      "RDUK matches qualified local candidates with employers, ensuring Right to Work and compliance checks are fully satisfied before placement.",
    ],
    areas: [
      "Sheffield city centre", "Attercliffe", "Darnall", "Ecclesall", "Hillsborough", "Meadowhall", "Mosborough",
      "Rotherham", "Barnsley", "Doncaster", "Chesterfield", "Worksop",
    ],
  }),

  createCity({
    city: "Nottingham",
    country: "England",
    countrySlug: "england",
    slug: "nottingham",
    widerArea: "Nottinghamshire",
    metaDescription: "Recruitment agency in Nottingham supplying temporary, contract and permanent staff across construction, engineering, logistics, healthcare, IT, education and hospitality.",
    introduction: [
      "Recruitment Direct UK provides temporary, contract and permanent recruitment services to employers throughout Nottingham and Nottinghamshire.",
      "We support businesses with operational, skilled, professional and technical personnel across every core RDUK recruitment sector.",
      "From urgent temporary cover to specialist permanent appointments and larger contract workforces, our consultants provide responsive support.",
    ],
    localMarket: [
      "Nottingham has an active regional economy creating demand across construction, healthcare, education, technology, logistics, commercial office and hospitality.",
      "Our consultants combine local market knowledge with AI-supported candidate screening and robust compliance procedures.",
    ],
    areas: [
      "Nottingham city centre", "Beeston", "Clifton", "Lenton", "Sherwood", "West Bridgford", "Wollaton",
      "Mansfield", "Worksop", "Newark-on-Trent", "Sutton-in-Ashfield", "Hucknall",
    ],
  }),

  createCity({
    city: "Leicester",
    country: "England",
    countrySlug: "england",
    slug: "leicester",
    widerArea: "Leicestershire",
    metaDescription: "Recruitment agency in Leicester supplying temporary, contract and permanent staff across construction, engineering, logistics, healthcare, IT, education and hospitality.",
    introduction: [
      "Recruitment Direct UK provides temporary, contract and permanent recruitment services to employers throughout Leicester and Leicestershire.",
      "Our experienced consultants supply operational, technical, professional and skilled personnel across all core RDUK sectors.",
      "We support urgent temporary cover, contract assignments, permanent recruitment and high-volume workforce requirements.",
    ],
    localMarket: [
      "Leicester supports a diverse commercial and manufacturing market with demand across engineering, logistics, healthcare, construction, education and commercial office roles.",
      "RDUK coordinates local candidate sourcing and screening with Right to Work checks completed in line with assignment requirements.",
    ],
    areas: [
      "Leicester city centre", "Aylestone", "Belgrave", "Braunstone", "Evington", "Oadby", "Wigston",
      "Loughborough", "Hinckley", "Melton Mowbray", "Coalville", "Market Harborough",
    ],
  }),

  createCity({
    city: "Bristol",
    country: "England",
    countrySlug: "england",
    slug: "bristol",
    widerArea: "the West of England",
    metaDescription: "Recruitment agency in Bristol supplying temporary, contract and permanent staff across construction, engineering, logistics, healthcare, IT, education and hospitality.",
    introduction: [
      "Recruitment Direct UK provides temporary, contract and permanent recruitment services to employers throughout Bristol and the West of England.",
      "We recruit skilled, operational, technical and professional personnel across every core RDUK recruitment sector.",
      "Our consultants support urgent temporary vacancies, contract recruitment, permanent appointments and larger campaign requirements.",
    ],
    localMarket: [
      "Bristol has a strong regional economy with demand across engineering, technology, construction, aerospace, logistics, facilities management and commercial services.",
      "RDUK manages candidate sourcing, applicant screening, shortlisting and relevant compliance checks.",
    ],
    areas: [
      "Bristol city centre", "Clifton", "Bedminster", "Brislington", "Redland", "Horfield", "Filton", "Keynsham",
      "Kingswood", "Bath", "Weston-super-Mare", "Yate", "Clevedon",
    ],
  }),
];


// Mark flagship cities as hubs
flagshipCities.forEach(city => {
  city.isHub = true;
});

// Spoke (town) page creator helper
function createTown(config: {
  city: string;
  hubSlug: string;
  country: string;
  countrySlug: string;
  widerArea: string;
  employers?: string[];
  infrastructure?: string[];
  mainSectors?: string[];
  areas?: string[];
}): CityPageData {
  const slug = config.city.toLowerCase().replace(/[^a-z0-9]+/g, "-");
  const path = `/locations/${config.countrySlug}/${slug}`;
  const seoTitle = `Recruitment Agency ${config.city} | Recruitment Direct UK`;
  const metaDescription = `Recruitment agency in ${config.city} supplying temporary, contract and permanent staff across construction, engineering and logistics.`;

  const hubName = config.hubSlug.charAt(0).toUpperCase() + config.hubSlug.slice(1);

  const employersList = config.employers || ["local business parks", "commercial trade zones"];
  const infraList = config.infrastructure || ["local transport networks", "road connections"];
  const sectorsList = config.mainSectors || ["Construction", "Logistics", "Commercial"];
  const areasList = config.areas || [config.city, `surrounding ${config.city} districts`];

  const introduction = [
    `Recruitment Direct UK provides temporary, contract and permanent recruitment services to employers throughout ${config.city}, ${config.widerArea} and the surrounding region.`,
    `Supporting local business growth and national operations, we leverage ${config.city}'s strategic position and connections to the ${hubName} employment hub to supply pre-screened, compliant personnel.`,
    `Whether you require urgent temporary cover, short-term contract staff or permanent placements, our experienced consultants deliver responsive and efficient recruitment services.`
  ];

  const localMarket = [
    `The employment market in ${config.city} is supported by key business parks, industrial estates and local infrastructure including ${employersList.join(" and ")}, as well as the ${infraList.join(" and ")}.`,
    `With demand across ${sectorsList.join(", ").replace(/, ([^,]*)$/, " and $1")}, RDUK supplies high-quality candidates who have undergone full Right to Work, qualification and compliance screening.`,
    `We work closely with employers in ${config.city} to reduce recruitment admin times and ensure staffing continuity for critical operations.`
  ];

  return {
    city: config.city,
    country: config.country,
    countrySlug: config.countrySlug,
    slug,
    path,
    seoTitle,
    metaDescription,
    introduction,
    localMarket,
    areas: areasList,
    sectors: createSectors(config.city, config.widerArea),
    faqs: createFAQs(config.city, config.widerArea, areasList),
    isHub: false,
    hubSlug: config.hubSlug,
  };
}

const townConfigs = [
  // ================= EDINBURGH HUB =================
  { city: "Falkirk", hubSlug: "edinburgh", country: "Scotland", countrySlug: "scotland", widerArea: "Forth Valley", employers: ["Middlefield Industrial Estate", "Falkirk Gateway"], infrastructure: ["M9 motorway corridor", "Falkirk Grahamston station"], mainSectors: ["Logistics", "Manufacturing", "Commercial"], areas: ["Camelon", "Laurieston", "Bainsford", "Polmont"] },
  { city: "Grangemouth", hubSlug: "edinburgh", country: "Scotland", countrySlug: "scotland", widerArea: "Falkirk district", employers: ["Grangemouth Port", "petrochemical complexes"], infrastructure: ["M9 motorway", "docks container terminals"], mainSectors: ["Logistics", "Industrial", "Engineering"], areas: ["Skinflats", "Newhouse", "Grangemouth docks"] },
  { city: "Linlithgow", hubSlug: "edinburgh", country: "Scotland", countrySlug: "scotland", widerArea: "West Lothian", employers: ["Mill Road Industrial Estate", "high street commercial district"], infrastructure: ["M9 corridor", "Linlithgow railway station"], mainSectors: ["Commercial", "Facilities Management", "IT"], areas: ["Bridgend", "Kingsfield", "Philpstoun"] },
  { city: "Bo'ness", hubSlug: "edinburgh", country: "Scotland", countrySlug: "scotland", widerArea: "Falkirk district", employers: ["Bo'ness Business Centre", "Bridgeness industrial area"], infrastructure: ["Forth Estuary shipping routes", "A904 link road"], mainSectors: ["Manufacturing", "Industrial", "Construction"], areas: ["Carriden", "Muirhouses", "Kinneil"] },
  { city: "Polmont", hubSlug: "edinburgh", country: "Scotland", countrySlug: "scotland", widerArea: "Forth Valley", employers: ["Grangemouth business fringe", "local service sector business parks"], infrastructure: ["M9 Junction 4", "Polmont railway station"], mainSectors: ["Logistics", "Commercial", "Healthcare"], areas: ["Brightons", "Rumford", "Maddiston"] },
  { city: "Larbert", hubSlug: "edinburgh", country: "Scotland", countrySlug: "scotland", widerArea: "Falkirk area", employers: ["Glenbervie Business Park", "Forth Valley Royal Hospital"], infrastructure: ["M876 corridor", "Larbert railway station"], mainSectors: ["Healthcare", "Commercial", "IT"], areas: ["Stenhousemuir", "Kinnaird", "Torwood"] },
  { city: "Stenhousemuir", hubSlug: "edinburgh", country: "Scotland", countrySlug: "scotland", widerArea: "Forth Valley", employers: ["Stenhousemuir town centre", "local trade parks"], infrastructure: ["A9 road", "M876 motorway access"], mainSectors: ["Commercial", "Healthcare", "Logistics"], areas: ["Larbert", "Carron", "Carronshore"] },
  { city: "Denny", hubSlug: "edinburgh", country: "Scotland", countrySlug: "scotland", widerArea: "Falkirk district", employers: ["Winchester Avenue Industrial Estate", "local commercial businesses"], infrastructure: ["M80 motorway", "A872 corridor"], mainSectors: ["Construction", "Industrial", "Logistics"], areas: ["Dunipace", "Head of Muir", "Fankerton"] },
  { city: "Bonnybridge", hubSlug: "edinburgh", country: "Scotland", countrySlug: "scotland", widerArea: "Forth Valley", employers: ["Bonnybridge industrial parks", "local engineering yards"], infrastructure: ["M80 motorway corridor", "A905 road"], mainSectors: ["Engineering", "Industrial", "Manufacturing"], areas: ["High Bonnybridge", "Greenhill", "Allandale"] },
  { city: "Livingston", hubSlug: "edinburgh", country: "Scotland", countrySlug: "scotland", widerArea: "West Lothian", employers: ["Kirkton Campus", "Almondvale Business Park"], infrastructure: ["M8 motorway", "Livingston North railway station"], mainSectors: ["IT & Technology", "Logistics", "Commercial"], areas: ["Eliburn", "Howden", "Dedridge", "Murieston"] },
  { city: "Bathgate", hubSlug: "edinburgh", country: "Scotland", countrySlug: "scotland", widerArea: "West Lothian", employers: ["Whitehill Industrial Estate", "Pirelli site trade parks"], infrastructure: ["M8 motorway Junction 4", "Bathgate station"], mainSectors: ["Logistics", "Industrial", "Commercial"], areas: ["Armadale", "Blackburn", "Boghall"] },
  { city: "Broxburn", hubSlug: "edinburgh", country: "Scotland", countrySlug: "scotland", widerArea: "West Lothian", employers: ["East Mains Industrial Estate", "Dunnet Way trade zone"], infrastructure: ["A89 road corridor", "Edinburgh Airport flight path area"], mainSectors: ["Logistics", "Warehouse", "Manufacturing"], areas: ["Uphall", "Dechmont", "Pumpherston"] },
  { city: "Uphall", hubSlug: "edinburgh", country: "Scotland", countrySlug: "scotland", widerArea: "West Lothian", employers: ["Uphall business park", "local hospitality operations"], infrastructure: ["A89 road", "Uphall railway station"], mainSectors: ["Commercial", "Facilities Management", "Logistics"], areas: ["Broxburn", "Dechmont", "Ecclesmachan"] },
  { city: "Whitburn", hubSlug: "edinburgh", country: "Scotland", countrySlug: "scotland", widerArea: "West Lothian", employers: ["Heartlands business park", "local manufacturing centres"], infrastructure: ["M8 Junction 4A", "A706 corridor"], mainSectors: ["Logistics", "Construction", "Manufacturing"], areas: ["Harthill", "Fauldhouse", "Greenburn"] },
  { city: "Armadale", hubSlug: "edinburgh", country: "Scotland", countrySlug: "scotland", widerArea: "West Lothian", employers: ["Armadale industrial zones", "local construction depots"], infrastructure: ["A89 corridor", "Armadale railway station"], mainSectors: ["Construction", "Industrial", "Logistics"], areas: ["Blackridge", "Bathgate", "Westrigg"] },
  { city: "Blackburn (West Lothian)", hubSlug: "edinburgh", country: "Scotland", countrySlug: "scotland", widerArea: "West Lothian", employers: ["Blackburn commercial parks", "local warehousing facilities"], infrastructure: ["M8 motorway access", "A705 road"], mainSectors: ["Logistics", "Facilities Management", "Commercial"], areas: ["Bathgate", "Seafield", "Whitburn"] },
  { city: "East Calder", hubSlug: "edinburgh", country: "Scotland", countrySlug: "scotland", widerArea: "West Lothian", employers: ["East Calder commercial centre", "Lothian regional business depots"], infrastructure: ["A71 road corridor", "Kirknewton railway station"], mainSectors: ["Commercial", "Construction", "Facilities Management"], areas: ["Mid Calder", "Pumpherston", "Kirknewton"] },
  { city: "Mid Calder", hubSlug: "edinburgh", country: "Scotland", countrySlug: "scotland", widerArea: "West Lothian", employers: ["Mid Calder village commercial zones", "Almond Valley business hubs"], infrastructure: ["A71 corridor", "M8 motorway access"], mainSectors: ["Commercial", "Healthcare", "Hospitality"], areas: ["East Calder", "Livingston", "Pumpherston"] },
  { city: "South Queensferry", hubSlug: "edinburgh", country: "Scotland", countrySlug: "scotland", widerArea: "City of Edinburgh boundary", employers: ["Forth Bridges commercial park", "hospitality and tourism operators"], infrastructure: ["Queensferry Crossing", "Dalmeny railway station"], mainSectors: ["Hospitality", "Facilities Management", "Engineering"], areas: ["Newton", "Dalmeny", "Kirkliston"] },
  { city: "Kirkliston", hubSlug: "edinburgh", country: "Scotland", countrySlug: "scotland", widerArea: "West Lothian border", employers: ["Kirkliston trade parks", "local logistical transport depots"], infrastructure: ["M9 motorway access", "Edinburgh Airport proximity"], mainSectors: ["Logistics", "Warehouse", "Construction"], areas: ["South Queensferry", "Winchburgh", "Newbridge"] },
  { city: "Musselburgh", hubSlug: "edinburgh", country: "Scotland", countrySlug: "scotland", widerArea: "East Lothian", employers: ["Musselburgh business hub", "Inveresk industrial estate"], infrastructure: ["A1 road corridor", "Musselburgh railway station"], mainSectors: ["Commercial", "Healthcare", "Education"], areas: ["Wallyford", "Whitecraig", "Prestonpans"] },
  { city: "Dalkeith", hubSlug: "edinburgh", country: "Scotland", countrySlug: "scotland", widerArea: "Midlothian", employers: ["Hardengreen Industrial Estate", "Dalkeith commercial district"], infrastructure: ["A68 corridor", "Eskbank railway station"], mainSectors: ["Commercial", "Logistics", "Construction"], areas: ["Eskbank", "Newbattle", "Woodburn"] },
  { city: "Bonnyrigg", hubSlug: "edinburgh", country: "Scotland", countrySlug: "scotland", widerArea: "Midlothian", employers: ["Bonnyrigg business parks", "Lothian local services hubs"], infrastructure: ["A7 corridor", "Borders Railway access"], mainSectors: ["Construction", "Healthcare", "Commercial"], areas: ["Lasswade", "Polton", "Rosewell"] },
  { city: "Loanhead", hubSlug: "edinburgh", country: "Scotland", countrySlug: "scotland", widerArea: "Midlothian", employers: ["Bilston Glen Industrial Estate", "Straiton Retail Park"], infrastructure: ["Edinburgh City Bypass (A720)", "A701 road"], mainSectors: ["Logistics", "Warehouse", "Engineering"], areas: ["Straiton", "Bilston", "Roslin"] },
  { city: "Penicuik", hubSlug: "edinburgh", country: "Scotland", countrySlug: "scotland", widerArea: "Midlothian", employers: ["Eastfield Industrial Estate", "Penicuik commercial zone"], infrastructure: ["A702 road corridor", "A701 link road"], mainSectors: ["Manufacturing", "Industrial", "Commercial"], areas: ["Roslin", "Milton Bridge", "Auchendinny"] },
  { city: "Tranent", hubSlug: "edinburgh", country: "Scotland", countrySlug: "scotland", widerArea: "East Lothian", employers: ["Tranent business park", "Elphinstone industrial area"], infrastructure: ["A1 motorway corridor", "A199 road"], mainSectors: ["Construction", "Logistics", "Facilities Management"], areas: ["Elphinstone", "Macmerry", "Ormiston"] },
  { city: "Prestonpans", hubSlug: "edinburgh", country: "Scotland", countrySlug: "scotland", widerArea: "East Lothian", employers: ["Prestonpans commercial operations", "Forth estuary trade sites"], infrastructure: ["Prestonpans railway station", "A1 road link"], mainSectors: ["Industrial", "Construction", "Facilities Management"], areas: ["Cockenzie", "Port Seton", "Tranent"] },
  { city: "Haddington", hubSlug: "edinburgh", country: "Scotland", countrySlug: "scotland", widerArea: "East Lothian", employers: ["Gateside Commerce Park", "Haddington business hub"], infrastructure: ["A1 trunk road", "A199 link road"], mainSectors: ["Commercial", "Healthcare", "Agriculture & Food Processing"], areas: ["Athelstaneford", "Garvald", "Gifford"] },
  { city: "North Berwick", hubSlug: "edinburgh", country: "Scotland", countrySlug: "scotland", widerArea: "East Lothian", employers: ["North Berwick business park", "local leisure and hospitality operators"], infrastructure: ["North Berwick station", "A198 coastal corridor"], mainSectors: ["Hospitality", "Facilities Management", "Healthcare"], areas: ["Dirleton", "Gullane", "Aberlady"] },
  { city: "Dunbar", hubSlug: "edinburgh", country: "Scotland", countrySlug: "scotland", widerArea: "East Lothian", employers: ["Spott Road Industrial Estate", "Dunbar business hubs"], infrastructure: ["East Coast Main Line", "A1 motorway link"], mainSectors: ["Manufacturing", "Industrial", "Logistics"], areas: ["West Barns", "Belhaven", "East Linton"] },

  // ================= GLASGOW HUB =================
  { city: "Paisley", hubSlug: "glasgow", country: "Scotland", countrySlug: "scotland", widerArea: "Renfrewshire", employers: ["Hawley Industrial Estate", "Paisley town centre"], infrastructure: ["M8 motorway", "Glasgow Airport", "Gilmour Street station"], mainSectors: ["Logistics", "Commercial", "Healthcare"], areas: ["Elderslie", "Featherhall", "Shortroods"] },
  { city: "Renfrew", hubSlug: "glasgow", country: "Scotland", countrySlug: "scotland", widerArea: "Renfrewshire", employers: ["Meadowside Industrial Estate", "Braehead retail and commercial complex"], infrastructure: ["M8 motorway", "River Clyde transport corridors"], mainSectors: ["Logistics", "Retail & Hospitality", "Engineering"], areas: ["Arkleston", "Blythswood", "Gallowhill"] },
  { city: "Erskine", hubSlug: "glasgow", country: "Scotland", countrySlug: "scotland", widerArea: "Renfrewshire", employers: ["Erskine business centres", "local care and healthcare operations"], infrastructure: ["Erskine Bridge", "A898 road corridor"], mainSectors: ["Healthcare", "Commercial", "Facilities Management"], areas: ["Bargarran", "Park Mains", "Craigends"] },
  { city: "Bishopton", hubSlug: "glasgow", country: "Scotland", countrySlug: "scotland", widerArea: "Renfrewshire", employers: ["Dargavel Village retail sector", "local engineering depots"], infrastructure: ["M8 Junction 31", "Bishopton railway station"], mainSectors: ["Construction", "Logistics", "Commercial"], areas: ["Dargavel", "Langbank", "Georgetown"] },
  { city: "Johnstone", hubSlug: "glasgow", country: "Scotland", countrySlug: "scotland", widerArea: "Renfrewshire", employers: ["Miller Street Industrial Estate", "Johnstone trade park"], infrastructure: ["A737 bypass corridor", "Johnstone railway station"], mainSectors: ["Manufacturing", "Logistics", "Facilities Management"], areas: ["Kilbarchan", "Howwood", "Quarrelton"] },
  { city: "Linwood", hubSlug: "glasgow", country: "Scotland", countrySlug: "scotland", widerArea: "Renfrewshire", employers: ["Linwood Industrial Estate", "Phoenix Retail Park"], infrastructure: ["A737 corridor", "M8 motorway access"], mainSectors: ["Logistics", "Warehouse", "Manufacturing"], areas: ["Johnstone", "Paisley", "Brookfield"] },
  { city: "Clydebank", hubSlug: "glasgow", country: "Scotland", countrySlug: "scotland", widerArea: "West Dunbartonshire", employers: ["Clydebank Business Park", "Queens Quay development"], infrastructure: ["A82 corridor", "Singer and Clydebank railway stations"], mainSectors: ["Engineering", "Manufacturing", "Commercial"], areas: ["Dalmuir", "Duntocher", "Faifley", "Hardgate"] },
  { city: "Milngavie", hubSlug: "glasgow", country: "Scotland", countrySlug: "scotland", widerArea: "East Dunbartonshire", employers: ["Milngavie commercial hub", "local tourism operations"], infrastructure: ["Milngavie railway station", "A81 road"], mainSectors: ["Commercial", "Hospitality", "Healthcare"], areas: ["Bearsden", "Baldernock", "Mugdock"] },
  { city: "Bearsden", hubSlug: "glasgow", country: "Scotland", countrySlug: "scotland", widerArea: "East Dunbartonshire", employers: ["Bearsden retail and commercial zone", "local professional firms"], infrastructure: ["A809 road corridor", "Bearsden railway station"], mainSectors: ["Commercial", "Healthcare", "Education"], areas: ["Milngavie", "Westerton", "Canniesburn"] },
  { city: "East Kilbride", hubSlug: "glasgow", country: "Scotland", countrySlug: "scotland", widerArea: "South Lanarkshire", employers: ["Peel Park", "College Milton", "Kelvin Industrial Estate"], infrastructure: ["A725 Expressway", "East Kilbride railway station"], mainSectors: ["Manufacturing", "IT & Tech", "Warehouse & Logistics"], areas: ["St Leonards", "Stewartfield", "Hairmyres", "Calderglen"] },
  { city: "Cambuslang", hubSlug: "glasgow", country: "Scotland", countrySlug: "scotland", widerArea: "South Lanarkshire", employers: ["Cambuslang Investment Park", "Westburn Industrial Estate"], infrastructure: ["M74 motorway corridor", "Cambuslang railway station"], mainSectors: ["Logistics", "Warehouse", "Manufacturing"], areas: ["Halfway", "Kirkhill", "Flemington"] },
  { city: "Rutherglen", hubSlug: "glasgow", country: "Scotland", countrySlug: "scotland", widerArea: "South Lanarkshire", employers: ["Rutherglen Links Business Park", "Shawfield industrial area"], infrastructure: ["M74 corridor", "Rutherglen railway station"], mainSectors: ["Commercial", "Logistics", "Facilities Management"], areas: ["Burnside", "Spittal", "Fernhill"] },
  { city: "Hamilton", hubSlug: "glasgow", country: "Scotland", countrySlug: "scotland", widerArea: "South Lanarkshire", employers: ["Hamilton International Technology Park", "Hamilton town centre"], infrastructure: ["M74 motorway Junction 5", "Hamilton Central station"], mainSectors: ["IT & Technology", "Commercial", "Healthcare"], areas: ["Burnbank", "Ferniegair", "Larkhall"] },
  { city: "Motherwell", hubSlug: "glasgow", country: "Scotland", countrySlug: "scotland", widerArea: "North Lanarkshire", employers: ["Motherwell Business Centre", "Eurocentral fringe industrial zone"], infrastructure: ["M74 motorway", "Motherwell railway station"], mainSectors: ["Engineering", "Logistics", "Industrial"], areas: ["Carfin", "Ravenscraig", "Cleland"] },
  { city: "Bellshill", hubSlug: "glasgow", country: "Scotland", countrySlug: "scotland", widerArea: "North Lanarkshire", employers: ["Righead Industrial Estate", "Eurocentral logistics park"], infrastructure: ["M8 and M74 interchange", "Bellshill railway station"], mainSectors: ["Logistics", "Warehouse", "Manufacturing"], areas: ["Mossend", "Holytown", "Newhouse"] },
  { city: "Bothwell", hubSlug: "glasgow", country: "Scotland", countrySlug: "scotland", widerArea: "South Lanarkshire", employers: ["Bothwell commercial services", "local premium hospitality venues"], infrastructure: ["M74 motorway corridor", "A729 road"], mainSectors: ["Hospitality", "Commercial", "Facilities Management"], areas: ["Uddingston", "Blantyre", "Hamilton"] },
  { city: "Uddingston", hubSlug: "glasgow", country: "Scotland", countrySlug: "scotland", widerArea: "South Lanarkshire", employers: ["Tannochside Business Park", "local food manufacturing sites"], infrastructure: ["M74 and M8 access", "Uddingston railway station"], mainSectors: ["Manufacturing", "Logistics", "Commercial"], areas: ["Bothwell", "Tannochside", "Viewpark"] },
  { city: "Blantyre", hubSlug: "glasgow", country: "Scotland", countrySlug: "scotland", widerArea: "South Lanarkshire", employers: ["Blantyre Industrial Estate", "local distribution centres"], infrastructure: ["A725 East Kilbride Expressway", "Blantyre railway station"], mainSectors: ["Logistics", "Manufacturing", "Healthcare"], areas: ["High Blantyre", "Burnbank", "Bothwell"] },
  { city: "Coatbridge", hubSlug: "glasgow", country: "Scotland", countrySlug: "scotland", widerArea: "North Lanarkshire", employers: ["North Caldeen Road Industrial Estate", "Coatbridge business parks"], infrastructure: ["M8 motorway corridor", "Sunnyside and Coatbridge Central stations"], mainSectors: ["Manufacturing", "Warehouse", "Logistics"], areas: ["Glenboig", "Townhead", "Gartsherrie"] },
  { city: "Airdrie", hubSlug: "glasgow", country: "Scotland", countrySlug: "scotland", widerArea: "North Lanarkshire", employers: ["Brownsburn Industrial Estate", "Airdrie retail sector"], infrastructure: ["A73 corridor", "Airdrie railway station"], mainSectors: ["Construction", "Logistics", "Commercial"], areas: ["Calderbank", "Chapelhall", "Gartness"] },
  { city: "Bargeddie", hubSlug: "glasgow", country: "Scotland", countrySlug: "scotland", widerArea: "North Lanarkshire", employers: ["Showcase Leisure Park commercial zone", "local freight hubs"], infrastructure: ["M8 Junction 8", "Bargeddie railway station"], mainSectors: ["Logistics", "Facilities Management", "Hospitality"], areas: ["Baillieston", "Coatbridge", "Garrowhill"] },
  { city: "Baillieston", hubSlug: "glasgow", country: "Scotland", countrySlug: "scotland", widerArea: "Glasgow east end", employers: ["Baillieston business depots", "east end trade centres"], infrastructure: ["M8, M73 and M74 motorway junction", "Baillieston station"], mainSectors: ["Logistics", "Warehouse", "Construction"], areas: ["Bargeddie", "Garrowhill", "Mount Vernon"] },
  { city: "Stepps", hubSlug: "glasgow", country: "Scotland", countrySlug: "scotland", widerArea: "North Lanarkshire", employers: ["Buchanan Business Park", "local corporate hubs"], infrastructure: ["M80 motorway", "Stepps railway station"], mainSectors: ["Commercial", "IT & Tech", "Facilities Management"], areas: ["Millerston", "Cardowan", "Chryston"] },
  { city: "Cumbernauld", hubSlug: "glasgow", country: "Scotland", countrySlug: "scotland", widerArea: "North Lanarkshire", employers: ["Wardpark Industrial Estate", "Westfield Industrial Estate"], infrastructure: ["M80 motorway", "Cumbernauld railway station"], mainSectors: ["Manufacturing", "Warehouse & Logistics", "Engineering"], areas: ["Condorrat", "Kildrum", "Carbrain", "Abronhill"] },
  { city: "Kilsyth", hubSlug: "glasgow", country: "Scotland", countrySlug: "scotland", widerArea: "North Lanarkshire", employers: ["Kilsyth trade centres", "local construction services"], infrastructure: ["A803 road", "M80 motorway corridor"], mainSectors: ["Construction", "Facilities Management", "Commercial"], areas: ["Queenzieburn", "Croy", "Banton"] },
  { city: "Moodiesburn", hubSlug: "glasgow", country: "Scotland", countrySlug: "scotland", widerArea: "North Lanarkshire", employers: ["Moodiesburn industrial zone", "food processing sites"], infrastructure: ["A80 road", "M80 motorway access"], mainSectors: ["Manufacturing", "Industrial", "Logistics"], areas: ["Chryston", "Gartcosh", "Muirhead"] },
  { city: "Wishaw", hubSlug: "glasgow", country: "Scotland", countrySlug: "scotland", widerArea: "North Lanarkshire", employers: ["Excelsior Industrial Estate", "University Hospital Wishaw"], infrastructure: ["A71 road", "Wishaw railway station"], mainSectors: ["Healthcare", "Logistics", "Engineering"], areas: ["Newmains", "Overtown", "Waterlands"] },
  { city: "Newmains", hubSlug: "glasgow", country: "Scotland", countrySlug: "scotland", widerArea: "North Lanarkshire", employers: ["Newmains commercial trade zones", "local engineering shops"], infrastructure: ["A71 corridor", "M8 motorway link"], mainSectors: ["Industrial", "Construction", "Logistics"], areas: ["Wishaw", "Overtown", "Cleland"] },
  { city: "Shotts", hubSlug: "glasgow", country: "Scotland", countrySlug: "scotland", widerArea: "North Lanarkshire", employers: ["Shotts industrial yards", "local logistics distribution centers"], infrastructure: ["M8 motorway Junction 5", "Shotts railway station"], mainSectors: ["Warehouse", "Logistics", "Industrial"], areas: ["Hartwood", "Salsburgh", "Allanton"] },

  // ================= ABERDEEN HUB =================
  { city: "Peterhead", hubSlug: "aberdeen", country: "Scotland", countrySlug: "scotland", widerArea: "Aberdeenshire", employers: ["Peterhead Port", "fish processing factories"], infrastructure: ["Peterhead Deepwater Port", "A90 road corridor"], mainSectors: ["Marine & Engineering", "Logistics", "Industrial"], areas: ["Boddam", "St Fergus", "Longside"] },
  { city: "Fraserburgh", hubSlug: "aberdeen", country: "Scotland", countrySlug: "scotland", widerArea: "Aberdeenshire", employers: ["Fraserburgh Harbour", "marine engineering firms"], infrastructure: ["A90 trunk road", "Fraserburgh port"], mainSectors: ["Marine", "Industrial", "Manufacturing"], areas: ["Sandhaven", "Rosehearty", "Inverallochy"] },
  { city: "Ellon", hubSlug: "aberdeen", country: "Scotland", countrySlug: "scotland", widerArea: "Aberdeenshire", employers: ["Balmacassie Industrial Estate", "BrewDog brewery headquarters"], infrastructure: ["A90 road", "AWPR link roads"], mainSectors: ["Manufacturing", "Logistics", "Commercial"], areas: ["Tipperty", "Newburgh", "Tarves"] },
  { city: "Inverurie", hubSlug: "aberdeen", country: "Scotland", countrySlug: "scotland", widerArea: "Aberdeenshire", employers: ["Inverurie Business Park", "Souterford industrial zones"], infrastructure: ["A96 road corridor", "Inverurie railway station"], mainSectors: ["Commercial", "Logistics", "Engineering"], areas: ["Port Elphinstone", "Kemnay", "Oldmeldrum"] },
  { city: "Stonehaven", hubSlug: "aberdeen", country: "Scotland", countrySlug: "scotland", widerArea: "Aberdeenshire", employers: ["Spurryhillock Industrial Estate", "Stonehaven tourism sector"], infrastructure: ["A90 bypass", "Stonehaven railway station"], mainSectors: ["Hospitality", "Commercial", "Construction"], areas: ["Newtonhill", "Muchalls", "Catterline"] },
  { city: "Portlethen", hubSlug: "aberdeen", country: "Scotland", countrySlug: "scotland", widerArea: "Aberdeenshire", employers: ["Badentoy Business Park", "Portlethen commercial trade parks"], infrastructure: ["A90 dual carriageway", "Portlethen railway station"], mainSectors: ["Logistics", "Engineering", "Commercial"], areas: ["Downies", "Findon", "Newtonhill"] },
  { city: "Westhill", hubSlug: "aberdeen", country: "Scotland", countrySlug: "scotland", widerArea: "Aberdeenshire", employers: ["Westhill Business Park", "subsea engineering global companies"], infrastructure: ["A944 road", "AWPR access junction"], mainSectors: ["Engineering", "IT & Tech", "Commercial"], areas: ["Kingswells", "Kirkton of Skene", "Elrick"] },
  { city: "Banchory", hubSlug: "aberdeen", country: "Scotland", countrySlug: "scotland", widerArea: "Aberdeenshire", employers: ["Banchory Business Centre", "local hospitality operations"], infrastructure: ["A93 Deeside corridor", "local transit networks"], mainSectors: ["Hospitality", "Commercial", "Healthcare"], areas: ["Torphins", "Strachan", "Drumoak"] },
  { city: "Aboyne", hubSlug: "aberdeen", country: "Scotland", countrySlug: "scotland", widerArea: "Aberdeenshire", employers: ["Aboyne business centre", "forestry and estate operations"], infrastructure: ["A93 road", "Deeside transport links"], mainSectors: ["Facilities Management", "Commercial", "Hospitality"], areas: ["Tarland", "Dinnet", "Kincardine O'Neil"] },
  { city: "Ballater", hubSlug: "aberdeen", country: "Scotland", countrySlug: "scotland", widerArea: "Aberdeenshire", employers: ["Royal Deeside commercial businesses", "hospitality and tourism venues"], infrastructure: ["A93 Deeside route", "local highway links"], mainSectors: ["Hospitality", "Facilities Management", "Commercial"], areas: ["Crathie", "Braemar", "Dinnet"] },
  { city: "Huntly", hubSlug: "aberdeen", country: "Scotland", countrySlug: "scotland", widerArea: "Aberdeenshire", employers: ["Huntly Business Park", "local food production facilities"], infrastructure: ["A96 trunk road", "Huntly railway station"], mainSectors: ["Manufacturing", "Industrial", "Agriculture & Commercial"], areas: ["Gartly", "Kennethmont", "Rothiemay"] },
  { city: "Turriff", hubSlug: "aberdeen", country: "Scotland", countrySlug: "scotland", widerArea: "Aberdeenshire", employers: ["Turriff business parks", "agricultural supply companies"], infrastructure: ["A947 road corridor", "local road networks"], mainSectors: ["Industrial", "Commercial", "Facilities Management"], areas: ["Cuminestown", "Fyvie", "Newbyth"] },
  { city: "Banff", hubSlug: "aberdeen", country: "Scotland", countrySlug: "scotland", widerArea: "Aberdeenshire", employers: ["Banff commercial business parks", "harbour commercial services"], infrastructure: ["A98 coastal road", "Banff bridge link"], mainSectors: ["Facilities Management", "Healthcare", "Hospitality"], areas: ["Macduff", "Whitehills", "Ladysbridge"] },
  { city: "Macduff", hubSlug: "aberdeen", country: "Scotland", countrySlug: "scotland", widerArea: "Aberdeenshire", employers: ["Macduff Harbour", "shipbuilding yards and seafood processing"], infrastructure: ["A98 road corridor", "Macduff port facilities"], mainSectors: ["Marine & Engineering", "Logistics", "Industrial"], areas: ["Banff", "Gardenstown", "King Edward"] },
  { city: "Mintlaw", hubSlug: "aberdeen", country: "Scotland", countrySlug: "scotland", widerArea: "Aberdeenshire", employers: ["Mintlaw commercial trade sites", "Aden Country Park operations"], infrastructure: ["A952 and A948 crossroads", "local road links"], mainSectors: ["Commercial", "Logistics", "Facilities Management"], areas: ["Old Deer", "New Deer", "Stuartfield"] },
  { city: "Oldmeldrum", hubSlug: "aberdeen", country: "Scotland", countrySlug: "scotland", widerArea: "Aberdeenshire", employers: ["Oldmeldrum business park", "local distilleries"], infrastructure: ["A947 road corridor", "A920 route"], mainSectors: ["Manufacturing", "Commercial", "Facilities Management"], areas: ["Inverurie", "Daviot", "Fyvie"] },
  { city: "Kintore", hubSlug: "aberdeen", country: "Scotland", countrySlug: "scotland", widerArea: "Aberdeenshire", employers: ["Kintore Business Park", "Midmill Industrial Estate"], infrastructure: ["A96 road bypass", "Kintore railway station"], mainSectors: ["Logistics", "Engineering", "Commercial"], areas: ["Blackburn", "Kemnay", "Inverurie"] },
  { city: "Blackburn (Aberdeenshire)", hubSlug: "aberdeen", country: "Scotland", countrySlug: "scotland", widerArea: "Aberdeenshire", employers: ["Blackburn commercial trade parks", "local logistics depots"], infrastructure: ["A96 trunk road", "Aberdeen Airport proximity"], mainSectors: ["Logistics", "Warehouse", "Commercial"], areas: ["Kintore", "Kingswells", "Dyce"] },
  { city: "Dyce", hubSlug: "aberdeen", country: "Scotland", countrySlug: "scotland", widerArea: "Aberdeen City", employers: ["Kirkhill Industrial Estate", "Dyce Business Park"], infrastructure: ["Aberdeen International Airport", "Dyce railway station"], mainSectors: ["Logistics", "Engineering", "IT & Tech"], areas: ["Bucksburn", "Bridge of Don", "Stoneywood"] },
  { city: "Bridge of Don", hubSlug: "aberdeen", country: "Scotland", countrySlug: "scotland", widerArea: "Aberdeen City", employers: ["Murcar Industrial Estate", "Denmore Industrial Estate"], infrastructure: ["A92 road corridor", "AWPR link road"], mainSectors: ["Logistics", "Engineering", "Commercial"], areas: ["Dyce", "Blackdog", "Balmedie"] },
  { city: "Cove Bay", hubSlug: "aberdeen", country: "Scotland", countrySlug: "scotland", widerArea: "Aberdeen City", employers: ["Altens Industrial Estate", "Gateway Business Park"], infrastructure: ["A92 road", "AWPR south junction"], mainSectors: ["Logistics", "Engineering", "Industrial"], areas: ["Nigg", "Findon", "Portlethen"] },
  { city: "Kingswells", hubSlug: "aberdeen", country: "Scotland", countrySlug: "scotland", widerArea: "Aberdeen City", employers: ["Prime Four Business Park", "local corporate headquarters"], infrastructure: ["A944 road", "AWPR link bypass"], mainSectors: ["Commercial", "IT & Tech", "Facilities Management"], areas: ["Westhill", "Blackburn", "Hazlehead"] },

  // ================= INVERNESS HUB =================
  { city: "Nairn", hubSlug: "inverness", country: "Scotland", countrySlug: "scotland", widerArea: "Highlands", employers: ["Nairn commercial sector", "local tourism and leisure operators"], infrastructure: ["A96 trunk road", "Nairn railway station"], mainSectors: ["Hospitality", "Commercial", "Construction"], areas: ["Auldearn", "Cawdor", "Ardersier"] },
  { city: "Forres", hubSlug: "inverness", country: "Scotland", countrySlug: "scotland", widerArea: "Moray", employers: ["Greshop Industrial Estate", "Benromach distillery and trade park"], infrastructure: ["A96 road corridor", "Forres railway station"], mainSectors: ["Manufacturing", "Industrial", "Commercial"], areas: ["Kinloss", "Findhorn", "Dyke"] },
  { city: "Elgin", hubSlug: "inverness", country: "Scotland", countrySlug: "scotland", widerArea: "Moray", employers: ["Linkwood Industrial Estate", "Elgin retail and commercial hub"], infrastructure: ["A96 trunk road", "Elgin railway station"], mainSectors: ["Commercial", "Healthcare", "Manufacturing"], areas: ["Lhanbryde", "Lossiemouth", "Burghead"] },
  { city: "Aviemore", hubSlug: "inverness", country: "Scotland", countrySlug: "scotland", widerArea: "Cairngorms National Park", employers: ["Aviemore tourism resort operations", "Cairngorm mountain business group"], infrastructure: ["A9 trunk road", "Aviemore railway station"], mainSectors: ["Hospitality", "Facilities Management", "Healthcare"], areas: ["Carrbridge", "Boat of Garten", "Coylumbridge"] },
  { city: "Grantown-on-Spey", hubSlug: "inverness", country: "Scotland", countrySlug: "scotland", widerArea: "Highlands", employers: ["Grantown business park", "local forestry and wood manufacturing sites"], infrastructure: ["A95 road", "Speyside travel routes"], mainSectors: ["Commercial", "Manufacturing", "Hospitality"], areas: ["Dulnain Bridge", "Nethy Bridge", "Cromdale"] },
  { city: "Kingussie", hubSlug: "inverness", country: "Scotland", countrySlug: "scotland", widerArea: "Cairngorms", employers: ["Kingussie commercial services", "local care operations"], infrastructure: ["A9 trunk road corridor", "Kingussie railway station"], mainSectors: ["Healthcare", "Commercial", "Hospitality"], areas: ["Newtonmore", "Kincraig", "Laggan"] },
  { city: "Newtonmore", hubSlug: "inverness", country: "Scotland", countrySlug: "scotland", widerArea: "Cairngorms", employers: ["Newtonmore trade depots", "local tourism businesses"], infrastructure: ["A9 corridor", "Newtonmore railway station"], mainSectors: ["Hospitality", "Construction", "Facilities Management"], areas: ["Kingussie", "Laggan", "Dalwhinnie"] },
  { city: "Fort Augustus", hubSlug: "inverness", country: "Scotland", countrySlug: "scotland", widerArea: "Loch Ness area", employers: ["Loch Ness tourism operations", "local marine and canal services"], infrastructure: ["A82 trunk road", "Caledonian Canal locks"], mainSectors: ["Hospitality", "Facilities Management", "Engineering"], areas: ["Invermoriston", "Invergarry", "Fort William link"] },
  { city: "Fort William", hubSlug: "inverness", country: "Scotland", countrySlug: "scotland", widerArea: "Lochaber", employers: ["Lochaber Smelter", "Ben Nevis Industrial Estate"], infrastructure: ["A82 and A830 corridors", "Fort William railway station"], mainSectors: ["Manufacturing", "Industrial", "Engineering"], areas: ["Caol", "Corpach", "Banavie", "Spean Bridge"] },
  { city: "Kyle of Lochalsh", hubSlug: "inverness", country: "Scotland", countrySlug: "scotland", widerArea: "West Highlands", employers: ["Kyle commercial trade park", "local marine shipping services"], infrastructure: ["Skye Bridge (A87)", "Kyle of Lochalsh railway station"], mainSectors: ["Logistics", "Marine", "Hospitality"], areas: ["Balmacara", "Plockton", "Dornie"] },
  { city: "Portree", hubSlug: "inverness", country: "Scotland", countrySlug: "scotland", widerArea: "Isle of Skye", employers: ["Portree industrial estate", "Skye tourism and hospitality hubs"], infrastructure: ["A87 road corridor", "Portree harbour"], mainSectors: ["Hospitality", "Healthcare", "Construction"], areas: ["Broadford", "Uig", "Dunvegan"] },
  { city: "Dingwall", hubSlug: "inverness", country: "Scotland", countrySlug: "scotland", widerArea: "Ross and Cromarty", employers: ["Dingwall Business Park", "Foulis commercial trade zones"], infrastructure: ["A835 road", "Dingwall railway station"], mainSectors: ["Commercial", "Logistics", "Construction"], areas: ["Maryburgh", "Conon Bridge", "Evanton"] },
  { city: "Alness", hubSlug: "inverness", country: "Scotland", countrySlug: "scotland", widerArea: "Easter Ross", employers: ["Alness Business Park", "local distillery operations"], infrastructure: ["A9 road corridor", "Alness railway station"], mainSectors: ["Manufacturing", "Industrial", "Commercial"], areas: ["Invergordon", "Evanton", "Dingwall"] },
  { city: "Invergordon", hubSlug: "inverness", country: "Scotland", countrySlug: "scotland", widerArea: "Easter Ross", employers: ["Port of Invergordon", "heavy engineering marine yards"], infrastructure: ["Invergordon deepwater port", "A9 corridor"], mainSectors: ["Marine & Engineering", "Logistics", "Industrial"], areas: ["Alness", "Saltburn", "Tain"] },
  { city: "Tain", hubSlug: "inverness", country: "Scotland", countrySlug: "scotland", widerArea: "Easter Ross", employers: ["Tain business park", "local distillers and craft manufacturers"], infrastructure: ["A9 trunk road bypass", "Tain railway station"], mainSectors: ["Commercial", "Manufacturing", "Healthcare"], areas: ["Edderton", "Fearn", "Balintore"] },
  { city: "Golspie", hubSlug: "inverness", country: "Scotland", countrySlug: "scotland", widerArea: "Sutherland", employers: ["Golspie business units", "local healthcare clinics"], infrastructure: ["A9 road corridor", "Golspie railway station"], mainSectors: ["Healthcare", "Commercial", "Facilities Management"], areas: ["Brora", "Lairg", "Dornoch"] },
  { city: "Brora", hubSlug: "inverness", country: "Scotland", countrySlug: "scotland", widerArea: "Sutherland", employers: ["Brora trade depots", "local tourism businesses"], infrastructure: ["A9 road", "Brora railway station"], mainSectors: ["Construction", "Hospitality", "Commercial"], areas: ["Golspie", "Helmsdale", "Dornoch"] },
  { city: "Helmsdale", hubSlug: "inverness", country: "Scotland", countrySlug: "scotland", widerArea: "Sutherland", employers: ["Helmsdale harbour commercial operations", "local hospitality hubs"], infrastructure: ["A9 trunk road", "Helmsdale railway station"], mainSectors: ["Hospitality", "Marine", "Facilities Management"], areas: ["Brora", "Dunbeath", "Lybster"] },
  { city: "Wick", hubSlug: "inverness", country: "Scotland", countrySlug: "scotland", widerArea: "Caithness", employers: ["Wick Business Park", "Wick Harbour marine operations"], infrastructure: ["Wick John O'Groats Airport", "Wick railway station"], mainSectors: ["Marine", "Logistics", "Commercial"], areas: ["Castletown", "Lybster", "Halkirk"] },
  { city: "Thurso", hubSlug: "inverness", country: "Scotland", countrySlug: "scotland", widerArea: "Caithness", employers: ["Dounreay nuclear facility", "Thurso Business Park"], infrastructure: ["Scrabster Harbour", "Thurso railway station"], mainSectors: ["Engineering", "Industrial", "Commercial"], areas: ["Scrabster", "Castletown", "Halkirk"] },
  { city: "Ullapool", hubSlug: "inverness", country: "Scotland", countrySlug: "scotland", widerArea: "Wester Ross", employers: ["Ullapool Harbour", "local fishing and ferry operations"], infrastructure: ["Stornoway ferry terminal", "A835 road"], mainSectors: ["Marine", "Hospitality", "Logistics"], areas: ["Gairloch", "Achiltibuie", "Lochinver"] },
  { city: "Gairloch", hubSlug: "inverness", country: "Scotland", countrySlug: "scotland", widerArea: "Wester Ross", employers: ["Gairloch commercial businesses", "local tourism services"], infrastructure: ["A832 road corridor", "local coastal networks"], mainSectors: ["Hospitality", "Facilities Management", "Healthcare"], areas: ["Aultbea", "Poolewe", "Ullapool link"] },
  { city: "Mallaig", hubSlug: "inverness", country: "Scotland", countrySlug: "scotland", widerArea: "Lochaber", employers: ["Mallaig Harbour", "marine ferry and fishery operations"], infrastructure: ["Road to the Isles (A830)", "Mallaig railway station"], mainSectors: ["Marine", "Logistics", "Hospitality"], areas: ["Arisaig", "Morar", "Spean Bridge link"] },
  { city: "Spean Bridge", hubSlug: "inverness", country: "Scotland", countrySlug: "scotland", widerArea: "Lochaber", employers: ["Spean Bridge commercial services", "local forestry operations"], infrastructure: ["A82 and A86 junction", "Spean Bridge station"], mainSectors: ["Logistics", "Construction", "Hospitality"], areas: ["Roy Bridge", "Fort William", "Gairlochy"] },
  { city: "Beauly", hubSlug: "inverness", country: "Scotland", countrySlug: "scotland", widerArea: "Highlands", employers: ["Beauly trade parks", "local electrical infrastructure depots"], infrastructure: ["A862 road", "Beauly railway station"], mainSectors: ["Engineering", "Construction", "Commercial"], areas: ["Muir of Ord", "Kiltarlity", "Kirkhill"] },
  { city: "Muir of Ord", hubSlug: "inverness", country: "Scotland", countrySlug: "scotland", widerArea: "Highlands", employers: ["Muir of Ord Industrial Estate", "local distillation complexes"], infrastructure: ["A862 corridor", "Muir of Ord station"], mainSectors: ["Manufacturing", "Industrial", "Logistics"], areas: ["Beauly", "Dingwall", "Tore"] },

  // ================= BELFAST HUB =================
  { city: "Lisburn", hubSlug: "belfast", country: "Northern Ireland", countrySlug: "northern-ireland", widerArea: "County Antrim" },
  { city: "Newtownabbey", hubSlug: "belfast", country: "Northern Ireland", countrySlug: "northern-ireland", widerArea: "County Antrim" },
  { city: "Bangor", hubSlug: "belfast", country: "Northern Ireland", countrySlug: "northern-ireland", widerArea: "County Down" },
  { city: "Holywood", hubSlug: "belfast", country: "Northern Ireland", countrySlug: "northern-ireland", widerArea: "County Down" },
  { city: "Carrickfergus", hubSlug: "belfast", country: "Northern Ireland", countrySlug: "northern-ireland", widerArea: "County Antrim" },
  { city: "Larne", hubSlug: "belfast", country: "Northern Ireland", countrySlug: "northern-ireland", widerArea: "County Antrim" },
  { city: "Antrim", hubSlug: "belfast", country: "Northern Ireland", countrySlug: "northern-ireland", widerArea: "County Antrim" },
  { city: "Ballymena", hubSlug: "belfast", country: "Northern Ireland", countrySlug: "northern-ireland", widerArea: "County Antrim" },
  { city: "Ballyclare", hubSlug: "belfast", country: "Northern Ireland", countrySlug: "northern-ireland", widerArea: "County Antrim" },
  { city: "Newtownards", hubSlug: "belfast", country: "Northern Ireland", countrySlug: "northern-ireland", widerArea: "County Down" },
  { city: "Comber", hubSlug: "belfast", country: "Northern Ireland", countrySlug: "northern-ireland", widerArea: "County Down" },
  { city: "Saintfield", hubSlug: "belfast", country: "Northern Ireland", countrySlug: "northern-ireland", widerArea: "County Down" },
  { city: "Downpatrick", hubSlug: "belfast", country: "Northern Ireland", countrySlug: "northern-ireland", widerArea: "County Down" },
  { city: "Banbridge", hubSlug: "belfast", country: "Northern Ireland", countrySlug: "northern-ireland", widerArea: "County Down" },
  { city: "Craigavon", hubSlug: "belfast", country: "Northern Ireland", countrySlug: "northern-ireland", widerArea: "County Armagh" },
  { city: "Lurgan", hubSlug: "belfast", country: "Northern Ireland", countrySlug: "northern-ireland", widerArea: "County Armagh" },
  { city: "Portadown", hubSlug: "belfast", country: "Northern Ireland", countrySlug: "northern-ireland", widerArea: "County Armagh" },
  { city: "Armagh", hubSlug: "belfast", country: "Northern Ireland", countrySlug: "northern-ireland", widerArea: "County Armagh" },
  { city: "Newry", hubSlug: "belfast", country: "Northern Ireland", countrySlug: "northern-ireland", widerArea: "County Down / Armagh" },
  { city: "Dungannon", hubSlug: "belfast", country: "Northern Ireland", countrySlug: "northern-ireland", widerArea: "County Tyrone" },
  { city: "Cookstown", hubSlug: "belfast", country: "Northern Ireland", countrySlug: "northern-ireland", widerArea: "County Tyrone" },
  { city: "Magherafelt", hubSlug: "belfast", country: "Northern Ireland", countrySlug: "northern-ireland", widerArea: "County Londonderry" },
  { city: "Coleraine", hubSlug: "belfast", country: "Northern Ireland", countrySlug: "northern-ireland", widerArea: "County Londonderry" },
  { city: "Portrush", hubSlug: "belfast", country: "Northern Ireland", countrySlug: "northern-ireland", widerArea: "County Antrim" },
  { city: "Omagh", hubSlug: "belfast", country: "Northern Ireland", countrySlug: "northern-ireland", widerArea: "County Tyrone" },
  { city: "Enniskillen", hubSlug: "belfast", country: "Northern Ireland", countrySlug: "northern-ireland", widerArea: "County Fermanagh" },

  // ================= DUBLIN HUB =================
  { city: "Swords", hubSlug: "dublin", country: "Republic of Ireland", countrySlug: "republic-of-ireland", widerArea: "Fingal / North Dublin", employers: ["Airside Retail & Business Park", "Dublin Airport Business Park"], infrastructure: ["M1 motorway corridor", "Dublin Airport proximity"], mainSectors: ["Logistics", "Commercial", "IT & Tech"] },
  { city: "Malahide", hubSlug: "dublin", country: "Republic of Ireland", countrySlug: "republic-of-ireland", widerArea: "Fingal / North Dublin", employers: ["Malahide retail sector", "local hospitality and yachting operations"], infrastructure: ["DART railway link", "R106 coastal road"], mainSectors: ["Hospitality", "Commercial", "Facilities Management"] },
  { city: "Donabate", hubSlug: "dublin", country: "Republic of Ireland", countrySlug: "republic-of-ireland", widerArea: "Fingal / North Dublin", employers: ["Donabate commercial zones", "local leisure operations"], infrastructure: ["DART rail link", "M1 motorway access"], mainSectors: ["Facilities Management", "Commercial", "Construction"] },
  { city: "Balbriggan", hubSlug: "dublin", country: "Republic of Ireland", countrySlug: "republic-of-ireland", widerArea: "Fingal / North Dublin", employers: ["Balbriggan Business Park", "Stephenstown Industrial Estate"], infrastructure: ["M1 motorway Junction 6", "Balbriggan station"], mainSectors: ["Manufacturing", "Industrial", "Logistics"] },
  { city: "Skerries", hubSlug: "dublin", country: "Republic of Ireland", countrySlug: "republic-of-ireland", widerArea: "Fingal / North Dublin", employers: ["Skerries commercial businesses", "local harbour services"], infrastructure: ["DART railway link", "R127 road"], mainSectors: ["Hospitality", "Facilities Management", "Healthcare"] },
  { city: "Rush", hubSlug: "dublin", country: "Republic of Ireland", countrySlug: "republic-of-ireland", widerArea: "Fingal / North Dublin", employers: ["Rush agricultural operations", "local trade facilities"], infrastructure: ["DART rail link", "R128 road"], mainSectors: ["Industrial", "Construction", "Facilities Management"] },
  { city: "Howth", hubSlug: "dublin", country: "Republic of Ireland", countrySlug: "republic-of-ireland", widerArea: "North Dublin", employers: ["Howth Harbour commercial fisheries", "local hospitality operations"], infrastructure: ["DART rail terminal", "R105 road"], mainSectors: ["Hospitality", "Marine", "Facilities Management"] },
  { city: "Portmarnock", hubSlug: "dublin", country: "Republic of Ireland", countrySlug: "republic-of-ireland", widerArea: "North Dublin", employers: ["Portmarnock business trade park", "local leisure and hospitality operators"], infrastructure: ["DART rail link", "R106 road"], mainSectors: ["Hospitality", "Facilities Management", "Commercial"] },
  { city: "Blanchardstown", hubSlug: "dublin", country: "Republic of Ireland", countrySlug: "republic-of-ireland", widerArea: "West Dublin", employers: ["Blanchardstown Corporate Park", "Ballycoolin Industrial Estate"], infrastructure: ["N3 dual carriageway", "M50 motorway Junction 6"], mainSectors: ["IT & Technology", "Logistics", "Warehouse & Commercial"] },
  { city: "Lucan", hubSlug: "dublin", country: "Republic of Ireland", countrySlug: "republic-of-ireland", widerArea: "West Dublin", employers: ["Lucan commercial parks", "Liffey Valley fringe trade zones"], infrastructure: ["N4 road corridor", "M50 motorway access"], mainSectors: ["Commercial", "Logistics", "Facilities Management"] },
  { city: "Clondalkin", hubSlug: "dublin", country: "Republic of Ireland", countrySlug: "republic-of-ireland", widerArea: "South West Dublin", employers: ["Grange Castle Business Park", "Oak Road Industrial Estate"], infrastructure: ["N7 corridor", "M50 Junction 9", "Luas Red Line"], mainSectors: ["Logistics", "Manufacturing", "IT & Tech"] },
  { city: "Tallaght", hubSlug: "dublin", country: "Republic of Ireland", countrySlug: "republic-of-ireland", widerArea: "South West Dublin", employers: ["Belgard Road industrial parks", "Tallaght University Hospital"], infrastructure: ["N81 road", "M50 motorway access", "Luas Red Line"], mainSectors: ["Healthcare", "Commercial", "Warehouse & Logistics"] },
  { city: "Leixlip", hubSlug: "dublin", country: "Republic of Ireland", countrySlug: "republic-of-ireland", widerArea: "County Kildare", employers: ["Intel Ireland campus", "Liffey Valley business complexes"], infrastructure: ["M4 motorway corridor", "Leixlip Louisa Bridge station"], mainSectors: ["Engineering", "IT & Tech", "Manufacturing"] },
  { city: "Maynooth", hubSlug: "dublin", country: "Republic of Ireland", countrySlug: "republic-of-ireland", widerArea: "County Kildare", employers: ["Maynooth Business Campus", "Maynooth University"], infrastructure: ["M4 motorway", "Maynooth railway station"], mainSectors: ["Education", "IT & Tech", "Commercial"] },
  { city: "Celbridge", hubSlug: "dublin", country: "Republic of Ireland", countrySlug: "republic-of-ireland", widerArea: "County Kildare", employers: ["Celbridge business park", "local commercial operations"], infrastructure: ["M4 and N7 road links", "Hazelhatch railway station"], mainSectors: ["Commercial", "Healthcare", "Facilities Management"] },
  { city: "Naas", hubSlug: "dublin", country: "Republic of Ireland", countrySlug: "republic-of-ireland", widerArea: "County Kildare", employers: ["Millennium Business Park", "Naas Enterprise Park"], infrastructure: ["M7 motorway Junction 9", "Sallins railway station"], mainSectors: ["Logistics", "Warehouse", "Commercial"] },
  { city: "Newbridge", hubSlug: "dublin", country: "Republic of Ireland", countrySlug: "republic-of-ireland", widerArea: "County Kildare", employers: ["Newbridge Industrial Estate", "Pfizer manufacturing site"], infrastructure: ["M7 motorway corridor", "Newbridge railway station"], mainSectors: ["Manufacturing", "Logistics", "Commercial"] },
  { city: "Bray", hubSlug: "dublin", country: "Republic of Ireland", countrySlug: "republic-of-ireland", widerArea: "County Wicklow", employers: ["Bray Business Park", "Southern Cross Business Park"], infrastructure: ["N11/M11 corridor", "Bray DART station"], mainSectors: ["Manufacturing", "Commercial", "Healthcare"] },
  { city: "Greystones", hubSlug: "dublin", country: "Republic of Ireland", countrySlug: "republic-of-ireland", widerArea: "County Wicklow", employers: ["Greystones Business Park", "local commercial retail sector"], infrastructure: ["M11 corridor", "Greystones DART station"], mainSectors: ["Commercial", "Facilities Management", "Hospitality"] },
  { city: "Wicklow", hubSlug: "dublin", country: "Republic of Ireland", countrySlug: "republic-of-ireland", widerArea: "County Wicklow", employers: ["Wicklow Port trade zones", "Murrough Industrial Estate"], infrastructure: ["N11 road", "Wicklow railway station"], mainSectors: ["Marine", "Facilities Management", "Healthcare"] },
  { city: "Arklow", hubSlug: "dublin", country: "Republic of Ireland", countrySlug: "republic-of-ireland", widerArea: "County Wicklow", employers: ["Arklow Business Park", "Croghan Industrial Estate"], infrastructure: ["M11 motorway corridor", "Arklow railway station"], mainSectors: ["Manufacturing", "Industrial", "Logistics"] },
  { city: "Drogheda", hubSlug: "dublin", country: "Republic of Ireland", countrySlug: "republic-of-ireland", widerArea: "County Louth", employers: ["Drogheda Industrial Park", "Donore Road business parks"], infrastructure: ["M1 motorway corridor", "Drogheda railway station"], mainSectors: ["Manufacturing", "Logistics", "Commercial"] },
  { city: "Ashbourne", hubSlug: "dublin", country: "Republic of Ireland", countrySlug: "republic-of-ireland", widerArea: "County Meath", employers: ["Ashbourne Business Park", "local distribution centres"], infrastructure: ["M2 motorway", "N2 corridor"], mainSectors: ["Logistics", "Warehouse", "Manufacturing"] },
  { city: "Navan", hubSlug: "dublin", country: "Republic of Ireland", countrySlug: "republic-of-ireland", widerArea: "County Meath", employers: ["Navan Enterprise Centre", "Mullaghboy Industrial Park"], infrastructure: ["M3 motorway corridor", "N51 road"], mainSectors: ["Manufacturing", "Industrial", "Commercial"] },

  // ================= CARDIFF HUB =================
  { city: "Newport", hubSlug: "cardiff", country: "Wales", countrySlug: "wales", widerArea: "South Wales", employers: ["Celestica", "Maesglas Industrial Estate"], infrastructure: ["M4 motorway corridor", "Newport railway station"], mainSectors: ["Logistics", "Manufacturing", "Commercial"] },
  { city: "Caerphilly", hubSlug: "cardiff", country: "Wales", countrySlug: "wales", widerArea: "South Wales valleys", employers: ["Gallagher Retail Park", "Pontygwindy Industrial Estate"], infrastructure: ["A469 road", "Caerphilly railway station"], mainSectors: ["Commercial", "Manufacturing", "Facilities Management"] },
  { city: "Pontypridd", hubSlug: "cardiff", country: "Wales", countrySlug: "wales", widerArea: "Rhondda Cynon Taf", employers: ["Treforest Industrial Estate", "Pontypridd commercial centre"], infrastructure: ["A470 corridor", "Pontypridd railway station"], mainSectors: ["Commercial", "Logistics", "Education"] },
  { city: "Barry", hubSlug: "cardiff", country: "Wales", countrySlug: "wales", widerArea: "Vale of Glamorgan", employers: ["Barry Docks trade zones", "Atlantic Trading Estate"], infrastructure: ["Barry Docks port", "Barry railway station"], mainSectors: ["Marine", "Logistics", "Industrial"] },
  { city: "Penarth", hubSlug: "cardiff", country: "Wales", countrySlug: "wales", widerArea: "Vale of Glamorgan", employers: ["Penarth retail sector", "local hospitality and leisure businesses"], infrastructure: ["A4160 road", "Penarth railway station"], mainSectors: ["Hospitality", "Commercial", "Facilities Management"] },
  { city: "Bridgend", hubSlug: "cardiff", country: "Wales", countrySlug: "wales", widerArea: "Bridgend county borough", employers: ["Bridgend Industrial Estate", "Waterton Industrial Estate"], infrastructure: ["M4 motorway corridor", "Bridgend railway station"], mainSectors: ["Manufacturing", "Logistics", "Commercial"] },
  { city: "Merthyr Tydfil", hubSlug: "cardiff", country: "Wales", countrySlug: "wales", widerArea: "South Wales valleys", employers: ["Pentrebach Industrial Estate", "Dowlais industrial zones"], infrastructure: ["A470 and A465 crossroads", "Merthyr railway station"], mainSectors: ["Manufacturing", "Industrial", "Construction"] },
  { city: "Aberdare", hubSlug: "cardiff", country: "Wales", countrySlug: "wales", widerArea: "Rhondda Cynon Taf", employers: ["Aberaman Industrial Estate", "Aberdare trade park"], infrastructure: ["A4059 road corridor", "Aberdare railway station"], mainSectors: ["Manufacturing", "Logistics", "Facilities Management"] },
  { city: "Treorchy", hubSlug: "cardiff", country: "Wales", countrySlug: "wales", widerArea: "Rhondda valleys", employers: ["Treorchy commercial trade sites", "local manufacturing centres"], infrastructure: ["A4061 road", "Treorchy railway station"], mainSectors: ["Manufacturing", "Commercial", "Facilities Management"] },
  { city: "Porth", hubSlug: "cardiff", country: "Wales", countrySlug: "wales", widerArea: "Rhondda Cynon Taf", employers: ["Porth commercial business parks", "Rhondda valley trade centers"], infrastructure: ["A4058 corridor", "Porth railway station"], mainSectors: ["Commercial", "Logistics", "Facilities Management"] },
  { city: "Blackwood", hubSlug: "cardiff", country: "Wales", countrySlug: "wales", widerArea: "South Wales valleys", employers: ["Blackwood Business Park", "Pen-y-Fan Industrial Estate"], infrastructure: ["A467 road corridor", "local transit routes"], mainSectors: ["Manufacturing", "Logistics", "Commercial"] },
  { city: "Cwmbran", hubSlug: "cardiff", country: "Wales", countrySlug: "wales", widerArea: "South Wales", employers: ["Cwmbran Business Park", "Springvale Industrial Estate"], infrastructure: ["A4042 road", "Cwmbran railway station"], mainSectors: ["Manufacturing", "Logistics", "Commercial"] },
  { city: "Pontypool", hubSlug: "cardiff", country: "Wales", countrySlug: "wales", widerArea: "South Wales", employers: ["Pont-y-Felin Industrial Estate", "Pontypool commercial zone"], infrastructure: ["A4042 road corridor", "local highway links"], mainSectors: ["Manufacturing", "Industrial", "Facilities Management"] },
  { city: "Ebbw Vale", hubSlug: "cardiff", country: "Wales", countrySlug: "wales", widerArea: "South Wales valleys", employers: ["Ebbw Vale Innovation Centre", "Rassau Industrial Estate"], infrastructure: ["A465 Heads of the Valleys Road", "Ebbw Vale Town station"], mainSectors: ["Manufacturing", "Industrial", "Engineering"] },
  { city: "Abergavenny", hubSlug: "cardiff", country: "Wales", countrySlug: "wales", widerArea: "Monmouthshire", employers: ["Abergavenny business park", "local food processing and hospitality sites"], infrastructure: ["A40 and A465 roads", "Abergavenny railway station"], mainSectors: ["Commercial", "Healthcare", "Hospitality"] },
  { city: "Chepstow", hubSlug: "cardiff", country: "Wales", countrySlug: "wales", widerArea: "Monmouthshire", employers: ["Chepstow Business Park", "Severn Bridge industrial area"], infrastructure: ["M48 Severn Bridge", "Chepstow railway station"], mainSectors: ["Logistics", "Warehouse", "Commercial"] },
  { city: "Neath", hubSlug: "cardiff", country: "Wales", countrySlug: "wales", widerArea: "Neath Port Talbot", employers: ["Neath Abbey Business Park", "Neath commercial district"], infrastructure: ["A465 corridor", "Neath railway station"], mainSectors: ["Manufacturing", "Industrial", "Healthcare"] },
  { city: "Port Talbot", hubSlug: "cardiff", country: "Wales", countrySlug: "wales", widerArea: "Neath Port Talbot", employers: ["Port Talbot Steelworks", "Baglan Energy Park"], infrastructure: ["M4 motorway", "Port Talbot Parkway station"], mainSectors: ["Engineering", "Manufacturing", "Industrial"] },
  { city: "Swansea", hubSlug: "cardiff", country: "Wales", countrySlug: "wales", widerArea: "South West Wales", employers: ["Swansea Enterprise Park", "Fforestfach Industrial Estate"], infrastructure: ["M4 motorway Junctions 44-47", "Swansea railway station"], mainSectors: ["Logistics", "Commercial", "Healthcare"] },
  { city: "Llanelli", hubSlug: "cardiff", country: "Wales", countrySlug: "wales", widerArea: "Carmarthenshire", employers: ["Dafen Industrial Estate", "Trostre Retail Park"], infrastructure: ["M4 motorway corridor", "Llanelli railway station"], mainSectors: ["Manufacturing", "Logistics", "Commercial"] },
  { city: "Carmarthen", hubSlug: "cardiff", country: "Wales", countrySlug: "wales", widerArea: "Carmarthenshire", employers: ["Carmarthen Business Park", "local administrative and farming hubs"], infrastructure: ["A40 and A48 crossroads", "Carmarthen railway station"], mainSectors: ["Commercial", "Healthcare", "Facilities Management"] },

  // ================= LONDON HUB =================
  { city: "Watford", hubSlug: "london", country: "England", countrySlug: "england", widerArea: "Hertfordshire" },
  { city: "St Albans", hubSlug: "london", country: "England", countrySlug: "england", widerArea: "Hertfordshire" },
  { city: "Hemel Hempstead", hubSlug: "london", country: "England", countrySlug: "england", widerArea: "Hertfordshire" },
  { city: "Stevenage", hubSlug: "london", country: "England", countrySlug: "england", widerArea: "Hertfordshire" },
  { city: "Welwyn Garden City", hubSlug: "london", country: "England", countrySlug: "england", widerArea: "Hertfordshire" },
  { city: "Hatfield", hubSlug: "london", country: "England", countrySlug: "england", widerArea: "Hertfordshire" },
  { city: "Luton", hubSlug: "london", country: "England", countrySlug: "england", widerArea: "Bedfordshire" },
  { city: "Slough", hubSlug: "london", country: "England", countrySlug: "england", widerArea: "Berkshire" },
  { city: "Reading", hubSlug: "london", country: "England", countrySlug: "england", widerArea: "Berkshire" },
  { city: "Bracknell", hubSlug: "london", country: "England", countrySlug: "england", widerArea: "Berkshire" },
  { city: "Woking", hubSlug: "london", country: "England", countrySlug: "england", widerArea: "Surrey" },
  { city: "Guildford", hubSlug: "london", country: "England", countrySlug: "england", widerArea: "Surrey" },
  { city: "Croydon", hubSlug: "london", country: "England", countrySlug: "england", widerArea: "Greater London" },
  { city: "Bromley", hubSlug: "london", country: "England", countrySlug: "england", widerArea: "Greater London" },
  { city: "Romford", hubSlug: "london", country: "England", countrySlug: "england", widerArea: "Greater London" },
  { city: "Ilford", hubSlug: "london", country: "England", countrySlug: "england", widerArea: "Greater London" },
  { city: "Enfield", hubSlug: "london", country: "England", countrySlug: "england", widerArea: "Greater London" },
  { city: "Harrow", hubSlug: "london", country: "England", countrySlug: "england", widerArea: "Greater London" },
  { city: "Uxbridge", hubSlug: "london", country: "England", countrySlug: "england", widerArea: "Greater London" },
  { city: "Dartford", hubSlug: "london", country: "England", countrySlug: "england", widerArea: "Kent" },
  { city: "Maidstone", hubSlug: "london", country: "England", countrySlug: "england", widerArea: "Kent" },
  { city: "Chelmsford", hubSlug: "london", country: "England", countrySlug: "england", widerArea: "Essex" },
  { city: "Basildon", hubSlug: "london", country: "England", countrySlug: "england", widerArea: "Essex" },
  { city: "Southend-on-Sea", hubSlug: "london", country: "England", countrySlug: "england", widerArea: "Essex" },

  // ================= BIRMINGHAM HUB =================
  { city: "Solihull", hubSlug: "birmingham", country: "England", countrySlug: "england", widerArea: "West Midlands" },
  { city: "Sutton Coldfield", hubSlug: "birmingham", country: "England", countrySlug: "england", widerArea: "West Midlands" },
  { city: "West Bromwich", hubSlug: "birmingham", country: "England", countrySlug: "england", widerArea: "West Midlands" },
  { city: "Walsall", hubSlug: "birmingham", country: "England", countrySlug: "england", widerArea: "West Midlands" },
  { city: "Dudley", hubSlug: "birmingham", country: "England", countrySlug: "england", widerArea: "West Midlands" },
  { city: "Wolverhampton", hubSlug: "birmingham", country: "England", countrySlug: "england", widerArea: "West Midlands" },
  { city: "Stourbridge", hubSlug: "birmingham", country: "England", countrySlug: "england", widerArea: "West Midlands" },
  { city: "Kidderminster", hubSlug: "birmingham", country: "England", countrySlug: "england", widerArea: "Worcestershire" },
  { city: "Redditch", hubSlug: "birmingham", country: "England", countrySlug: "england", widerArea: "Worcestershire" },
  { city: "Bromsgrove", hubSlug: "birmingham", country: "England", countrySlug: "england", widerArea: "Worcestershire" },
  { city: "Tamworth", hubSlug: "birmingham", country: "England", countrySlug: "england", widerArea: "Staffordshire" },
  { city: "Cannock", hubSlug: "birmingham", country: "England", countrySlug: "england", widerArea: "Staffordshire" },
  { city: "Lichfield", hubSlug: "birmingham", country: "England", countrySlug: "england", widerArea: "Staffordshire" },
  { city: "Burton upon Trent", hubSlug: "birmingham", country: "England", countrySlug: "england", widerArea: "Staffordshire" },
  { city: "Nuneaton", hubSlug: "birmingham", country: "England", countrySlug: "england", widerArea: "Warwickshire" },
  { city: "Rugby", hubSlug: "birmingham", country: "England", countrySlug: "england", widerArea: "Warwickshire" },
  { city: "Coventry", hubSlug: "birmingham", country: "England", countrySlug: "england", widerArea: "West Midlands" },
  { city: "Leamington Spa", hubSlug: "birmingham", country: "England", countrySlug: "england", widerArea: "Warwickshire" },
  { city: "Warwick", hubSlug: "birmingham", country: "England", countrySlug: "england", widerArea: "Warwickshire" },
  { city: "Telford", hubSlug: "birmingham", country: "England", countrySlug: "england", widerArea: "Shropshire" },
  { city: "Shrewsbury", hubSlug: "birmingham", country: "England", countrySlug: "england", widerArea: "Shropshire" },
  { city: "Worcester", hubSlug: "birmingham", country: "England", countrySlug: "england", widerArea: "Worcestershire" },

  // ================= MANCHESTER HUB =================
  { city: "Salford", hubSlug: "manchester", country: "England", countrySlug: "england", widerArea: "Greater Manchester" },
  { city: "Stockport", hubSlug: "manchester", country: "England", countrySlug: "england", widerArea: "Greater Manchester" },
  { city: "Bolton", hubSlug: "manchester", country: "England", countrySlug: "england", widerArea: "Greater Manchester" },
  { city: "Bury", hubSlug: "manchester", country: "England", countrySlug: "england", widerArea: "Greater Manchester" },
  { city: "Rochdale", hubSlug: "manchester", country: "England", countrySlug: "england", widerArea: "Greater Manchester" },
  { city: "Oldham", hubSlug: "manchester", country: "England", countrySlug: "england", widerArea: "Greater Manchester" },
  { city: "Ashton-under-Lyne", hubSlug: "manchester", country: "England", countrySlug: "england", widerArea: "Greater Manchester" },
  { city: "Hyde", hubSlug: "manchester", country: "England", countrySlug: "england", widerArea: "Greater Manchester" },
  { city: "Glossop", hubSlug: "manchester", country: "England", countrySlug: "england", widerArea: "Derbyshire" },
  { city: "Altrincham", hubSlug: "manchester", country: "England", countrySlug: "england", widerArea: "Greater Manchester" },
  { city: "Sale", hubSlug: "manchester", country: "England", countrySlug: "england", widerArea: "Greater Manchester" },
  { city: "Stretford", hubSlug: "manchester", country: "England", countrySlug: "england", widerArea: "Greater Manchester" },
  { city: "Trafford", hubSlug: "manchester", country: "England", countrySlug: "england", widerArea: "Greater Manchester" },
  { city: "Warrington", hubSlug: "manchester", country: "England", countrySlug: "england", widerArea: "Cheshire" },
  { city: "Macclesfield", hubSlug: "manchester", country: "England", countrySlug: "england", widerArea: "Cheshire" },
  { city: "Crewe", hubSlug: "manchester", country: "England", countrySlug: "england", widerArea: "Cheshire" },
  { city: "Wilmslow", hubSlug: "manchester", country: "England", countrySlug: "england", widerArea: "Cheshire" },
  { city: "Cheadle", hubSlug: "manchester", country: "England", countrySlug: "england", widerArea: "Greater Manchester" },

  // ================= LIVERPOOL HUB =================
  { city: "Bootle", hubSlug: "liverpool", country: "England", countrySlug: "england", widerArea: "Merseyside" },
  { city: "Crosby", hubSlug: "liverpool", country: "England", countrySlug: "england", widerArea: "Merseyside" },
  { city: "Southport", hubSlug: "liverpool", country: "England", countrySlug: "england", widerArea: "Merseyside" },
  { city: "Formby", hubSlug: "liverpool", country: "England", countrySlug: "england", widerArea: "Merseyside" },
  { city: "Birkenhead", hubSlug: "liverpool", country: "England", countrySlug: "england", widerArea: "Merseyside" },
  { city: "Wallasey", hubSlug: "liverpool", country: "England", countrySlug: "england", widerArea: "Merseyside" },
  { city: "Bebington", hubSlug: "liverpool", country: "England", countrySlug: "england", widerArea: "Merseyside" },
  { city: "Ellesmere Port", hubSlug: "liverpool", country: "England", countrySlug: "england", widerArea: "Cheshire" },
  { city: "Widnes", hubSlug: "liverpool", country: "England", countrySlug: "england", widerArea: "Cheshire" },
  { city: "Runcorn", hubSlug: "liverpool", country: "England", countrySlug: "england", widerArea: "Cheshire" },
  { city: "St Helens", hubSlug: "liverpool", country: "England", countrySlug: "england", widerArea: "Merseyside" },
  { city: "Prescot", hubSlug: "liverpool", country: "England", countrySlug: "england", widerArea: "Merseyside" },
  { city: "Huyton", hubSlug: "liverpool", country: "England", countrySlug: "england", widerArea: "Merseyside" },
  { city: "Kirkby", hubSlug: "liverpool", country: "England", countrySlug: "england", widerArea: "Merseyside" },
  { city: "Skelmersdale", hubSlug: "liverpool", country: "England", countrySlug: "england", widerArea: "Lancashire" },
  { city: "Ormskirk", hubSlug: "liverpool", country: "England", countrySlug: "england", widerArea: "Lancashire" },

  // ================= LEEDS HUB =================
  { city: "Bradford", hubSlug: "leeds", country: "England", countrySlug: "england", widerArea: "West Yorkshire" },
  { city: "Wakefield", hubSlug: "leeds", country: "England", countrySlug: "england", widerArea: "West Yorkshire" },
  { city: "Huddersfield", hubSlug: "leeds", country: "England", countrySlug: "england", widerArea: "West Yorkshire" },
  { city: "Halifax", hubSlug: "leeds", country: "England", countrySlug: "england", widerArea: "West Yorkshire" },
  { city: "Dewsbury", hubSlug: "leeds", country: "England", countrySlug: "england", widerArea: "West Yorkshire" },
  { city: "Batley", hubSlug: "leeds", country: "England", countrySlug: "england", widerArea: "West Yorkshire" },
  { city: "Pontefract", hubSlug: "leeds", country: "England", countrySlug: "england", widerArea: "West Yorkshire" },
  { city: "Castleford", hubSlug: "leeds", country: "England", countrySlug: "england", widerArea: "West Yorkshire" },
  { city: "Keighley", hubSlug: "leeds", country: "England", countrySlug: "england", widerArea: "West Yorkshire" },
  { city: "Harrogate", hubSlug: "leeds", country: "England", countrySlug: "england", widerArea: "North Yorkshire" },
  { city: "Ripon", hubSlug: "leeds", country: "England", countrySlug: "england", widerArea: "North Yorkshire" },
  { city: "Skipton", hubSlug: "leeds", country: "England", countrySlug: "england", widerArea: "North Yorkshire" },
  { city: "Selby", hubSlug: "leeds", country: "England", countrySlug: "england", widerArea: "North Yorkshire" },
  { city: "York", hubSlug: "leeds", country: "England", countrySlug: "england", widerArea: "North Yorkshire" },

  // ================= SHEFFIELD HUB =================
  { city: "Rotherham", hubSlug: "sheffield", country: "England", countrySlug: "england", widerArea: "South Yorkshire" },
  { city: "Barnsley", hubSlug: "sheffield", country: "England", countrySlug: "england", widerArea: "South Yorkshire" },
  { city: "Chesterfield", hubSlug: "sheffield", country: "England", countrySlug: "england", widerArea: "Derbyshire" },
  { city: "Worksop", hubSlug: "sheffield", country: "England", countrySlug: "england", widerArea: "Nottinghamshire" },
  { city: "Doncaster", hubSlug: "sheffield", country: "England", countrySlug: "england", widerArea: "South Yorkshire" },
  { city: "Mexborough", hubSlug: "sheffield", country: "England", countrySlug: "england", widerArea: "South Yorkshire" },
  { city: "Dronfield", hubSlug: "sheffield", country: "England", countrySlug: "england", widerArea: "Derbyshire" },
  { city: "Matlock", hubSlug: "sheffield", country: "England", countrySlug: "england", widerArea: "Derbyshire" },
  { city: "Bakewell", hubSlug: "sheffield", country: "England", countrySlug: "england", widerArea: "Derbyshire" },
  { city: "Buxton", hubSlug: "sheffield", country: "England", countrySlug: "england", widerArea: "Derbyshire" },
  { city: "Retford", hubSlug: "sheffield", country: "England", countrySlug: "england", widerArea: "Nottinghamshire" },

  // ================= NEWCASTLE HUB =================
  { city: "Gateshead", hubSlug: "newcastle", country: "England", countrySlug: "england", widerArea: "Tyne and Wear" },
  { city: "Sunderland", hubSlug: "newcastle", country: "England", countrySlug: "england", widerArea: "Tyne and Wear" },
  { city: "Washington", hubSlug: "newcastle", country: "England", countrySlug: "england", widerArea: "Tyne and Wear" },
  { city: "South Shields", hubSlug: "newcastle", country: "England", countrySlug: "england", widerArea: "Tyne and Wear" },
  { city: "North Shields", hubSlug: "newcastle", country: "England", countrySlug: "england", widerArea: "Tyne and Wear" },
  { city: "Whitley Bay", hubSlug: "newcastle", country: "England", countrySlug: "england", widerArea: "Tyne and Wear" },
  { city: "Cramlington", hubSlug: "newcastle", country: "England", countrySlug: "england", widerArea: "Northumberland" },
  { city: "Morpeth", hubSlug: "newcastle", country: "England", countrySlug: "england", widerArea: "Northumberland" },
  { city: "Ashington", hubSlug: "newcastle", country: "England", countrySlug: "england", widerArea: "Northumberland" },
  { city: "Blyth", hubSlug: "newcastle", country: "England", countrySlug: "england", widerArea: "Northumberland" },
  { city: "Durham", hubSlug: "newcastle", country: "England", countrySlug: "england", widerArea: "County Durham" },
  { city: "Bishop Auckland", hubSlug: "newcastle", country: "England", countrySlug: "england", widerArea: "County Durham" },
  { city: "Darlington", hubSlug: "newcastle", country: "England", countrySlug: "england", widerArea: "County Durham" },
  { city: "Hartlepool", hubSlug: "newcastle", country: "England", countrySlug: "england", widerArea: "County Durham" },
  { city: "Middlesbrough", hubSlug: "newcastle", country: "England", countrySlug: "england", widerArea: "North Yorkshire" },
  { city: "Stockton-on-Tees", hubSlug: "newcastle", country: "England", countrySlug: "england", widerArea: "County Durham" },

  // ================= BRISTOL HUB =================
  { city: "Bath", hubSlug: "bristol", country: "England", countrySlug: "england", widerArea: "Somerset" },
  { city: "Weston-super-Mare", hubSlug: "bristol", country: "England", countrySlug: "england", widerArea: "Somerset" },
  { city: "Clevedon", hubSlug: "bristol", country: "England", countrySlug: "england", widerArea: "Somerset" },
  { city: "Portishead", hubSlug: "bristol", country: "England", countrySlug: "england", widerArea: "Somerset" },
  { city: "Yate", hubSlug: "bristol", country: "England", countrySlug: "england", widerArea: "Gloucestershire" },
  { city: "Thornbury", hubSlug: "bristol", country: "England", countrySlug: "england", widerArea: "Gloucestershire" },
  { city: "Chippenham", hubSlug: "bristol", country: "England", countrySlug: "england", widerArea: "Wiltshire" },
  { city: "Trowbridge", hubSlug: "bristol", country: "England", countrySlug: "england", widerArea: "Wiltshire" },
  { city: "Frome", hubSlug: "bristol", country: "England", countrySlug: "england", widerArea: "Somerset" },
  { city: "Taunton", hubSlug: "bristol", country: "England", countrySlug: "england", widerArea: "Somerset" },
  { city: "Bridgwater", hubSlug: "bristol", country: "England", countrySlug: "england", widerArea: "Somerset" },
  { city: "Gloucester", hubSlug: "bristol", country: "England", countrySlug: "england", widerArea: "Gloucestershire" },
  { city: "Cheltenham", hubSlug: "bristol", country: "England", countrySlug: "england", widerArea: "Gloucestershire" },
  { city: "Stroud", hubSlug: "bristol", country: "England", countrySlug: "england", widerArea: "Gloucestershire" },
  { city: "Swindon", hubSlug: "bristol", country: "England", countrySlug: "england", widerArea: "Wiltshire" },

  // ================= NOTTINGHAM HUB =================
  { city: "Derby", hubSlug: "nottingham", country: "England", countrySlug: "england", widerArea: "Derbyshire" },
  { city: "Long Eaton", hubSlug: "nottingham", country: "England", countrySlug: "england", widerArea: "Derbyshire" },
  { city: "Ilkeston", hubSlug: "nottingham", country: "England", countrySlug: "england", widerArea: "Derbyshire" },
  { city: "Ripley", hubSlug: "nottingham", country: "England", countrySlug: "england", widerArea: "Derbyshire" },
  { city: "Alfreton", hubSlug: "nottingham", country: "England", countrySlug: "england", widerArea: "Derbyshire" },
  { city: "Mansfield", hubSlug: "nottingham", country: "England", countrySlug: "england", widerArea: "Nottinghamshire" },
  { city: "Newark", hubSlug: "nottingham", country: "England", countrySlug: "england", widerArea: "Nottinghamshire" },
  { city: "Grantham", hubSlug: "nottingham", country: "England", countrySlug: "england", widerArea: "Lincolnshire" },
  { city: "Lincoln", hubSlug: "nottingham", country: "England", countrySlug: "england", widerArea: "Lincolnshire" },
  { city: "Loughborough", hubSlug: "nottingham", country: "England", countrySlug: "england", widerArea: "Leicestershire" },
  { city: "Melton Mowbray", hubSlug: "nottingham", country: "England", countrySlug: "england", widerArea: "Leicestershire" },
  { city: "Ashfield", hubSlug: "nottingham", country: "England", countrySlug: "england", widerArea: "Nottinghamshire" },

  // ================= LEICESTER HUB =================
  { city: "Hinckley", hubSlug: "leicester", country: "England", countrySlug: "england", widerArea: "Leicestershire" },
  { city: "Coalville", hubSlug: "leicester", country: "England", countrySlug: "england", widerArea: "Leicestershire" },
  { city: "Market Harborough", hubSlug: "leicester", country: "England", countrySlug: "england", widerArea: "Leicestershire" },
  { city: "Lutterworth", hubSlug: "leicester", country: "England", countrySlug: "england", widerArea: "Leicestershire" },
  { city: "Ashby-de-la-Zouch", hubSlug: "leicester", country: "England", countrySlug: "england", widerArea: "Leicestershire" },
  { city: "Corby", hubSlug: "leicester", country: "England", countrySlug: "england", widerArea: "Northamptonshire" },
  { city: "Kettering", hubSlug: "leicester", country: "England", countrySlug: "england", widerArea: "Northamptonshire" },
  { city: "Wellingborough", hubSlug: "leicester", country: "England", countrySlug: "england", widerArea: "Northamptonshire" },
  { city: "Northampton", hubSlug: "leicester", country: "England", countrySlug: "england", widerArea: "Northamptonshire" },
  { city: "Daventry", hubSlug: "leicester", country: "England", countrySlug: "england", widerArea: "Northamptonshire" },
  { city: "Towcester", hubSlug: "leicester", country: "England", countrySlug: "england", widerArea: "Northamptonshire" }
];

const generatedTowns = townConfigs.map(config => createTown(config));

export const cities: CityPageData[] = [...flagshipCities, ...generatedTowns];
export function getCity(countrySlug: string, citySlug: string): CityPageData | undefined {
  return cities.find(
    (city) =>
      city.countrySlug === countrySlug.toLowerCase() &&
      city.slug === citySlug.toLowerCase()
  );
}
