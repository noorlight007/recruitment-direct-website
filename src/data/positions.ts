// Positions per sector for the Find Staff picker.
//
// Keyed by the sector slugs in src/lib/sectors.ts.
//
// This is a working set covering the common roles. The Find Staff field also
// ACCEPTS FREE TEXT, so a role missing from this list never blocks an enquiry —
// it is submitted as typed. Expand the lists as gaps appear rather than trying
// to be exhaustive up front.

export const POSITIONS: Record<string, string[]> = {
  construction: [
    'Labourer (CSCS)', 'Groundworker', 'Joiner', 'Bricklayer', 'Plumber',
    'Electrician', 'Painter & Decorator', 'Scaffolder', 'Roofer', 'Plasterer',
    'Carpenter', 'Steel Fixer', 'Shuttering Carpenter', 'Concrete Finisher',
    'Dryliner', 'Tiler', 'Glazier', 'Site Manager', 'Site Supervisor',
    'Assistant Site Manager', 'Quantity Surveyor', 'Contracts Manager',
    'Plant Operator', 'Telehandler Operator', 'Forklift Driver (Site)',
    'Traffic Marshal / Banksman', 'Site Labourer', 'Demolition Operative',
  ],

  'civil-engineering': [
    'Groundworker', 'General Operative', 'Setting-Out Engineer', 'Site Engineer',
    'Section Engineer', 'Sub-Agent', 'Agent', 'Foreperson', 'Site Supervisor',
    'Project Manager', 'Quantity Surveyor', 'Assistant Quantity Surveyor',
    'Estimator', 'Planner', 'Health & Safety Adviser', 'Environmental Adviser',
    'Pipelayer', 'Drainage Operative', 'Kerb Layer', 'Steel Fixer',
    '360 Excavator Operator', 'Dozer Operator', 'ADT Dumper Driver',
    'Loading Shovel Operator', 'Roller Operator', 'Plant Fitter',
    'Slinger Signaller', 'Traffic Management Operative (NRSWA)',
  ],

  engineering: [
    'Mechanical Engineer', 'Electrical Engineer', 'Design Engineer',
    'Maintenance Engineer', 'Project Engineer', 'Manufacturing Engineer',
    'Process Engineer', 'Quality Engineer', 'CNC Machinist', 'CNC Programmer',
    'Welder', 'Fabricator', 'Welder/Fabricator', 'Pipefitter', 'Machinist',
    'CAD Technician', 'Engineering Technician', 'Toolmaker',
    'Engineering Manager', 'Maintenance Technician',
  ],

  renewables: [
    'Wind Turbine Technician', 'Solar PV Installer', 'Cable Jointer',
    'Renewables Electrical Technician', 'HV Engineer', 'LV Engineer',
    'Commissioning Engineer', 'Project Manager (Renewables)',
    'Environmental Specialist', 'Sustainability Consultant',
    'BESS Technician', 'Offshore Technician', 'SCADA Engineer',
  ],

  'facilities-management': [
    'Cleaner', 'Cleaning Supervisor', 'Caretaker', 'Janitor',
    'Maintenance Operative', 'Maintenance Technician', 'Multi-Skilled Engineer',
    'HVAC Engineer', 'Air Conditioning Engineer', 'Electrician (FM)',
    'Plumber (FM)', 'Fabric Maintenance Operative', 'Handyperson',
    'Security Officer (SIA)', 'Porter', 'Grounds Maintenance Operative',
    'Waste & Recycling Operative', 'Catering Assistant', 'Window Cleaner',
    'Facilities Manager', 'Contract Manager', 'Helpdesk Administrator',
    'CAFM Administrator', 'Mobilisation Manager',
  ],

  logistics: [
    'LGV Class 1 Driver (C+E)', 'LGV Class 2 Driver (C)', 'Van Driver',
    'Delivery Driver', '7.5t Driver', 'Multi-Drop Driver',
    'Warehouse Operative', 'Forklift Driver (Counterbalance)',
    'Forklift Driver (Reach)', 'Forklift Driver (VNA)', 'Picker & Packer',
    'Goods In/Out Operative', 'Warehouse Supervisor', 'Warehouse Manager',
    'Transport Planner', 'Transport Manager', 'Logistics Coordinator',
    'Dispatch Administrator', 'Supply Chain Coordinator', 'Yard Operative',
  ],

  healthcare: [
    'Care Assistant', 'Senior Care Assistant', 'Support Worker',
    'Healthcare Assistant', 'Registered Nurse (RGN)', 'Registered Nurse (RMN)',
    'Domiciliary Carer', 'Mental Health Support Worker', 'Learning Disability Support Worker',
    'Pharmacist', 'Pharmacy Assistant', 'Domestic Assistant',
    'Healthcare Administrator', 'Service Coordinator', 'Registered Manager',
    'Deputy Manager', 'Clinical Lead',
  ],

  education: [
    'Teacher (Primary)', 'Teacher (Secondary)', 'Supply Teacher',
    'Teaching Assistant', 'SEN Teaching Assistant', 'Learning Support Assistant',
    'Cover Supervisor', 'Nursery Practitioner', 'Nursery Assistant',
    'Lecturer', 'School Administrator', 'School Receptionist',
    'Exam Invigilator', 'School Caretaker', 'Catering Assistant (School)',
    'Pastoral Support Worker', 'Head of Department',
  ],

  'it-technology': [
    'Software Developer', 'Front-End Developer', 'Back-End Developer',
    'Full-Stack Developer', 'Data Analyst', 'Business Analyst',
    'Data Engineer', 'Cloud Engineer', 'DevOps Engineer',
    'Cybersecurity Analyst', 'Systems Administrator', 'Network Engineer',
    '1st Line IT Support', '2nd Line IT Support', '3rd Line IT Support',
    'IT Project Manager', 'QA Engineer', 'Test Analyst',
    'Product Manager', 'IT Manager',
  ],

  'commercial-office': [
    'Administrator', 'Office Manager', 'Receptionist', 'Data Entry Clerk',
    'Customer Service Adviser', 'Personal Assistant', 'Executive Assistant',
    'Team Assistant', 'Sales Administrator', 'Purchase Ledger Clerk',
    'Sales Ledger Clerk', 'Accounts Assistant', 'Bookkeeper',
    'Payroll Administrator', 'Credit Controller', 'HR Administrator',
    'HR Adviser', 'Marketing Executive', 'Sales Executive', 'Account Manager',
  ],

  hospitality: [
    'Chef de Partie', 'Sous Chef', 'Head Chef', 'Commis Chef', 'Kitchen Porter',
    'Kitchen Assistant', 'Waiting Staff', 'Bar Staff', 'Barista',
    'Housekeeper', 'Room Attendant', 'Hotel Receptionist', 'Porter',
    'Event Staff', 'Banqueting Staff', 'Duty Manager', 'Restaurant Manager',
    'Hotel Manager', 'Hospitality Supervisor', 'Catering Assistant',
  ],
};

/** Flat list of every position with its sector, for the reverse role search. */
export const ALL_POSITIONS: { position: string; sectorSlug: string }[] =
  Object.entries(POSITIONS).flatMap(([sectorSlug, roles]) =>
    roles.map((position) => ({ position, sectorSlug })),
  );
