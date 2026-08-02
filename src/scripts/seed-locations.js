import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const scotlandCities = [
  "Aberdeen", "Airdrie", "Alloa", "Arbroath", "Ayr", "Bathgate", "Bellshill", "Bishopbriggs", 
  "Bo'ness", "Bonnybridge", "Broxburn", "Coatbridge", "Cumbernauld", "Cupar", "Dalkeith", 
  "Dumbarton", "Dumfries", "Dundee", "Dunfermline", "East Kilbride", "Edinburgh", "Elgin", 
  "Falkirk", "Forfar", "Fort William", "Fraserburgh", "Galashiels", "Glenrothes", "Glasgow", 
  "Grangemouth", "Greenock", "Hamilton", "Hawick", "Inverness", "Irvine", "Kilmarnock", 
  "Kilsyth", "Kirkcaldy", "Kirkintilloch", "Lanark", "Larbert", "Larkhall", "Linlithgow", 
  "Livingston", "Montrose", "Motherwell", "Musselburgh", "Oban", "Paisley", "Perth", 
  "Peterhead", "Port Glasgow", "Renfrew", "Rutherglen", "St Andrews", "Stirling", "Stonehaven", 
  "Stranraer", "Uddingston", "Westhill", "Whitburn", "Wishaw"
];

const englandCities = [
  "Barnsley", "Basildon", "Bath", "Bedford", "Birkenhead", "Blackburn", "Blackpool", "Bolton", 
  "Bournemouth", "Bradford", "Brentwood", "Brighton", "Bristol", "Burnley", "Burton upon Trent", 
  "Bury", "Cambridge", "Canterbury", "Carlisle", "Chelmsford", "Cheltenham", "Chester", 
  "Colchester", "Coventry", "Crewe", "Darlington", "Derby", "Doncaster", "Durham", "Exeter", 
  "Gloucester", "Grimsby", "Halifax", "Harrogate", "Hartlepool", "Hereford", "Huddersfield", 
  "Hull", "Ipswich", "King's Lynn", "Lancaster", "Leeds", "Leicester", "Lincoln", "Liverpool", 
  "London", "Luton", "Maidstone", "Manchester", "Mansfield", "Middlesbrough", "Milton Keynes", 
  "Newcastle upon Tyne", "Northampton", "Norwich", "Nottingham", "Oldham", "Oxford", 
  "Peterborough", "Plymouth", "Portsmouth", "Preston", "Reading", "Rochdale", "Rotherham", 
  "Salford", "Scarborough", "Sheffield", "Shrewsbury", "Slough", "Southampton", "Southend-on-Sea", 
  "Southport", "St Helens", "Stoke-on-Trent", "Sunderland", "Swindon", "Telford", "Wakefield", 
  "Warrington", "Wigan", "Wolverhampton", "Worcester", "York"
];

const walesCities = [
  "Aberystwyth", "Bangor", "Bridgend", "Caerphilly", "Cardiff", "Carmarthen", "Colwyn Bay", 
  "Haverfordwest", "Llandudno", "Llanelli", "Merthyr Tydfil", "Neath", "Newport", "Pontypridd", 
  "Port Talbot", "Rhyl", "Swansea", "Wrexham"
];

const northernIrelandCities = [
  "Antrim", "Ballymena", "Bangor", "Belfast", "Carrickfergus", "Coleraine", "Craigavon", 
  "Dungannon", "Enniskillen", "Lisburn", "Londonderry (Derry)", "Newry", "Newtownabbey", 
  "Omagh", "Portadown"
];

const irelandCities = [
  "Athlone", "Carlow", "Carrick-on-Shannon", "Clonmel", "Cork", "Donegal", "Drogheda", 
  "Dublin", "Dundalk", "Ennis", "Galway", "Kilkenny", "Killarney", "Letterkenny", 
  "Limerick", "Mullingar", "Naas", "Navan", "Sligo", "Tralee", "Waterford", "Wexford"
];

// Helper database of known coordinates to place cities reasonably
const coords = {
  // Scotland
  "Edinburgh": [-3.1883, 55.9533],
  "Glasgow": [-4.2518, 55.8642],
  "Aberdeen": [-2.0981, 57.1497],
  "Inverness": [-4.2247, 57.4778],
  "Dundee": [-2.9701, 56.4620],
  "Falkirk": [-3.7849, 56.0011],
  "Stirling": [-3.9369, 56.1165],
  "Perth": [-3.4308, 56.3950],
  "Livingston": [-3.5222, 55.8893],
  "Hamilton": [-4.0373, 55.7774],
  "Motherwell": [-3.9902, 55.7925],
  "Paisley": [-4.4231, 55.8464],
  "Dunfermline": [-3.4475, 56.0694],
  "Ayr": [-4.6292, 55.4586],
  "Dumfries": [-3.6067, 55.0709],

  // England
  "London": [-0.1278, 51.5074],
  "Manchester": [-2.2426, 53.4808],
  "Birmingham": [-1.8904, 52.4862],
  "Leeds": [-1.5491, 53.8008],
  "Newcastle upon Tyne": [-1.6178, 54.9783],
  "Liverpool": [-2.9916, 53.4084],
  "Bristol": [-2.5879, 51.4545],
  "Sheffield": [-1.4701, 53.3811],
  "Nottingham": [-1.1501, 52.9548],
  "Leicester": [-1.1398, 52.6369],
  "Southampton": [-1.4043, 50.9105],
  "Plymouth": [-4.1427, 50.3755],
  "Norwich": [1.2974, 52.6309],
  "Oxford": [-1.2577, 51.7520],
  "Cambridge": [0.1218, 52.2053],

  // Wales
  "Cardiff": [-3.1791, 51.4816],
  "Swansea": [-3.9436, 51.6214],
  "Newport": [-2.9916, 51.5880],
  "Wrexham": [-2.9926, 53.0430],

  // NI
  "Belfast": [-5.9301, 54.5973],
  "Londonderry (Derry)": [-7.3074, 54.9966],
  "Lisburn": [-6.0336, 54.5126],

  // Ireland
  "Dublin": [-6.2603, 53.3498],
  "Cork": [-8.4756, 51.8985],
  "Limerick": [-8.6268, 52.6680],
  "Galway": [-9.0568, 53.2719],
  "Waterford": [-7.1119, 52.2593]
};

// Generates approximate coordinates relative to country center or key cities
function getCoordinates(name, country) {
  if (coords[name]) return coords[name];
  
  // Approximate based on country
  let center = [-3.8, 55.0];
  if (country === 'scotland') center = [-4.2026, 56.4907];
  else if (country === 'england') center = [-1.1743, 52.3555];
  else if (country === 'wales') center = [-3.7837, 52.1307];
  else if (country === 'northern-ireland') center = [-6.4923, 54.7877];
  else if (country === 'republic-of-ireland') center = [-8.2439, 53.4129];
  
  // Deterministic offset based on name string sum
  let sum = 0;
  for (let i = 0; i < name.length; i++) sum += name.charCodeAt(i);
  const latOffset = ((sum % 100) - 50) / 100 * 1.5; // +/- 0.75 deg
  const lngOffset = (((sum * 7) % 100) - 50) / 100 * 1.5;
  
  return [parseFloat((center[0] + lngOffset).toFixed(4)), parseFloat((center[1] + latOffset).toFixed(4))];
}

// Get sensible nearby towns
function getNearbyTowns(name, country) {
  const defaults = {
    "Falkirk": ["Grangemouth", "Larbert", "Stenhousemuir", "Denny", "Bonnybridge", "Polmont", "Camelon", "Brightons"],
    "Livingston": ["Bathgate", "Broxburn", "Whitburn", "Armadale", "Uphall", "East Calder", "West Calder", "Blackburn"],
    "Hamilton": ["Blantyre", "Bothwell", "Uddingston", "Larkhall", "Stonehouse", "Strathaven"],
    "Motherwell": ["Bellshill", "Wishaw", "Holytown", "Newmains", "Cleland", "Carfin", "New Stevenston"],
    "Cumbernauld": ["Kilsyth", "Moodiesburn", "Chryston", "Stepps", "Condorrat", "Queenzieburn"],
    "Glasgow": ["Paisley", "Renfrew", "Clydebank", "Rutherglen", "Coatbridge", "East Kilbride", "Hamilton", "Bishopbriggs"],
    "Edinburgh": ["Leith", "Musselburgh", "Dalkeith", "Bonnyrigg", "Livingston", "Loanhead", "South Queensferry"],
    "Aberdeen": ["Westhill", "Dyce", "Portlethen", "Stonehaven", "Ellon", "Inverurie"],
    "London": ["Croydon", "Romford", "Enfield", "Wembley", "Ilford", "Kingston upon Thames"],
    "Manchester": ["Salford", "Stockport", "Bolton", "Bury", "Oldham", "Rochdale", "Trafford", "Altrincham"],
    "Birmingham": ["Solihull", "Sutton Coldfield", "West Bromwich", "Dudley", "Walsall", "Smethwick"],
    "Leeds": ["Wakefield", "Bradford", "Dewsbury", "Pudsey", "Castleford", "Pontefract"],
    "Liverpool": ["Bootle", "St Helens", "Southport", "Birkenhead", "Prescot", "Widnes"],
    "Sheffield": ["Rotherham", "Chesterfield", "Dronfield", "Worksop", "Barnsley"],
    "Newcastle upon Tyne": ["Gateshead", "Sunderland", "Washington", "South Shields", "Cramlington"],
    "Cardiff": ["Barry", "Penarth", "Caerphilly", "Pontypridd", "Cowbridge", "Dinas Powys"],
    "Swansea": ["Neath", "Port Talbot", "Llanelli", "Gorseinon", "Ammanford"],
    "Wrexham": ["Mold", "Deeside", "Chester", "Ruabon", "Llangollen"],
    "Belfast": ["Lisburn", "Newtownabbey", "Holywood", "Bangor", "Carryduff", "Dundonald"],
    "Newry": ["Banbridge", "Warrenpoint", "Kilkeel", "Crossmaglen"],
    "Dublin": ["Swords", "Tallaght", "Blanchardstown", "Lucan", "Bray", "Malahide"],
    "Cork": ["Cobh", "Midleton", "Carrigaline", "Mallow", "Bandon"],
    "Limerick": ["Shannon", "Ennis", "Nenagh", "Adare"],
    "Galway": ["Oranmore", "Athenry", "Tuam", "Claregalway"]
  };
  
  if (defaults[name]) return defaults[name];
  
  // Return mock nearby towns based on name
  return [
    name + " North",
    name + " South",
    name + " East",
    name + " West",
    "Local District"
  ];
}

function getCounty(name, country) {
  const counties = {
    // Scotland
    "Aberdeen": "Aberdeenshire", "Airdrie": "Lanarkshire", "Alloa": "Clackmannanshire", "Arbroath": "Angus", 
    "Ayr": "Ayrshire", "Bathgate": "West Lothian", "Bellshill": "Lanarkshire", "Bishopbriggs": "East Dunbartonshire",
    "Bo'ness": "West Lothian", "Bonnybridge": "Stirlingshire", "Broxburn": "West Lothian", "Coatbridge": "Lanarkshire", 
    "Cumbernauld": "North Lanarkshire", "Cupar": "Fife", "Dalkeith": "Midlothian", "Dumbarton": "West Dunbartonshire", 
    "Dumfries": "Dumfries and Galloway", "Dundee": "Angus", "Dunfermline": "Fife", "East Kilbride": "South Lanarkshire", 
    "Edinburgh": "Midlothian", "Elgin": "Moray", "Falkirk": "Stirlingshire", "Forfar": "Angus", 
    "Fort William": "Inverness-shire", "Fraserburgh": "Aberdeenshire", "Galashiels": "Scottish Borders", "Glenrothes": "Fife", 
    "Glasgow": "Lanarkshire", "Grangemouth": "Stirlingshire", "Greenock": "Renfrewshire", "Hamilton": "South Lanarkshire", 
    "Hawick": "Scottish Borders", "Inverness": "Inverness-shire", "Irvine": "Ayrshire", "Kilmarnock": "Ayrshire", 
    "Kilsyth": "North Lanarkshire", "Kirkcaldy": "Fife", "Kirkintilloch": "East Dunbartonshire", "Lanark": "South Lanarkshire", 
    "Larbert": "Stirlingshire", "Larkhall": "South Lanarkshire", "Linlithgow": "West Lothian", "Livingston": "West Lothian", 
    "Montrose": "Angus", "Motherwell": "North Lanarkshire", "Musselburgh": "East Lothian", "Oban": "Argyll", 
    "Paisley": "Renfrewshire", "Perth": "Perthshire", "Peterhead": "Aberdeenshire", "Port Glasgow": "Renfrewshire", 
    "Renfrew": "Renfrewshire", "Rutherglen": "South Lanarkshire", "St Andrews": "Fife", "Stirling": "Stirlingshire", 
    "Stonehaven": "Kincardineshire", "Stranraer": "Wigtownshire", "Uddingston": "South Lanarkshire", "Westhill": "Aberdeenshire", 
    "Whitburn": "West Lothian", "Wishaw": "North Lanarkshire",
    
    // England
    "London": "Greater London", "Manchester": "Greater Manchester", "Birmingham": "West Midlands", "Leeds": "West Yorkshire",
    "Bristol": "Bristol County", "Sheffield": "South Yorkshire", "Liverpool": "Merseyside", "Newcastle upon Tyne": "Tyne and Wear"
  };
  
  if (counties[name]) return counties[name];
  
  if (country === 'scotland') return "Scotland Region";
  if (country === 'england') return "England County";
  if (country === 'wales') return "Wales County";
  if (country === 'northern-ireland') return "Northern Ireland District";
  return "Ireland County";
}

function generateLocationRecord(name, country) {
  const cleanSlug = name.toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '') // remove non-alphanumeric except space and hyphen
    .replace(/\s+/g, '-') // spaces to hyphens
    .replace(/-\(derry\)/g, '')
    .trim();
  
  const county = getCounty(name, country);
  const [lng, lat] = getCoordinates(name, country);
  const nearby = getNearbyTowns(name, country);
  
  const defaultSectors = [
    "Construction", "Civil Engineering", "Engineering", "Renewable Energy", 
    "Facilities Management", "Logistics", "Healthcare", "Education", 
    "IT & Technology", "Commercial", "Office Support", "Hospitality"
  ];
  
  // Pick a subset of sectors dynamically
  let hash = 0;
  for (let i = 0; i < name.length; i++) hash += name.charCodeAt(i);
  const sectorCount = 5 + (hash % 4);
  const selectedSectors = [];
  for (let i = 0; i < sectorCount; i++) {
    const s = defaultSectors[(hash + i * 3) % defaultSectors.length];
    if (!selectedSectors.includes(s)) selectedSectors.push(s);
  }

  // Major roads, employers, industrial estates
  const roads = country === 'scotland' ? ["M9", "M8", "A9"] : ["M1", "M6", "A1"];
  const estates = [name + " Industrial Estate", name + " Business Park", "Enterprise Zone"];
  const employers = ["Local Health Service", "Construction Firms", "Engineering Contractors"];

  return {
    id: cleanSlug,
    name: name,
    slug: cleanSlug,
    country: country,
    county: county,
    latitude: lat,
    longitude: lng,
    nearbyTowns: nearby,
    population: (15000 + (hash * 179) % 250000).toLocaleString(),
    majorEmployers: employers,
    industrialEstates: estates,
    businessParks: [name + " Business Park"],
    majorRoads: roads,
    railwayStations: [name + " Central"],
    airports: ["Regional Airport"],
    sectors: selectedSectors,
    heroImage: "",
    published: true
  };
}

const allLocations = [];

scotlandCities.forEach(city => allLocations.push(generateLocationRecord(city, "scotland")));
englandCities.forEach(city => allLocations.push(generateLocationRecord(city, "england")));
walesCities.forEach(city => allLocations.push(generateLocationRecord(city, "wales")));
northernIrelandCities.forEach(city => allLocations.push(generateLocationRecord(city, "northern-ireland")));
irelandCities.forEach(city => allLocations.push(generateLocationRecord(city, "republic-of-ireland")));

// Make sure target directories exist
const dataDir = path.join(__dirname, '..', 'data');
if (!fs.existsSync(dataDir)) {
  fs.mkdirSync(dataDir, { recursive: true });
}

fs.writeFileSync(
  path.join(dataDir, 'locations.json'),
  JSON.stringify(allLocations, null, 2),
  'utf-8'
);

console.log(`Successfully generated ${allLocations.length} locations in src/data/locations.json!`);
