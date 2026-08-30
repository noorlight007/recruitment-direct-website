import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const locationsRedirects = JSON.parse(
    readFileSync(join(__dirname, 'src/data/locations-redirects.json'), 'utf-8')
);

/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        unoptimized: true,
    },
    experimental: {
        workerThreads: false,
        cpus: 1
    },
    async headers() {
        return [
            {
                source: '/:path*',
                headers: [
                    {
                        key: 'Referrer-Policy',
                        value: 'strict-origin-when-cross-origin',
                    },
                    {
                        key: 'X-Frame-Options',
                        value: 'SAMEORIGIN',
                    },
                    {
                        key: 'X-Content-Type-Options',
                        value: 'nosniff',
                    },
                    {
                        key: 'X-XSS-Protection',
                        value: '1; mode=block',
                    },
                    {
                        key: 'Strict-Transport-Security',
                        value: 'max-age=31536000; includeSubDomains; preload',
                    },
                    {
                        key: 'Content-Security-Policy',
                        value: "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://app.trysoro.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; img-src 'self' data: blob: *; font-src 'self' https://fonts.gstatic.com data:; connect-src 'self' *; frame-src 'self' https://www.googletagmanager.com https://www.google.com https://maps.google.com; frame-ancestors 'self'; worker-src 'self' blob:; child-src 'self' blob:;",
                    },
                ],
            },
        ];
    },
    async redirects() {
        return [
            // Old Legacy URLs -> New URLs (301 Redirects)
            {
                source: '/construction',
                destination: '/construction-recruitment-agency',
                permanent: true,
            },
            {
                source: '/construction/',
                destination: '/construction-recruitment-agency',
                permanent: true,
            },
            {
                source: '/healthcare',
                destination: '/healthcare-recruitment-agency',
                permanent: true,
            },
            {
                source: '/healthcare/',
                destination: '/healthcare-recruitment-agency',
                permanent: true,
            },
            {
                source: '/education',
                destination: '/education-recruitment-agency',
                permanent: true,
            },
            {
                source: '/education/',
                destination: '/education-recruitment-agency',
                permanent: true,
            },
            {
                source: '/hospitality',
                destination: '/hospitality-recruitment-agency',
                permanent: true,
            },
            {
                source: '/hospitality/',
                destination: '/hospitality-recruitment-agency',
                permanent: true,
            },
            {
                source: '/logistics',
                destination: '/logistics-recruitment-agency',
                permanent: true,
            },
            {
                source: '/logistics/',
                destination: '/logistics-recruitment-agency',
                permanent: true,
            },
            {
                source: '/about/',
                destination: '/about',
                permanent: true,
            },
            {
                source: '/recruitment-services',
                destination: '/services',
                permanent: true,
            },
            {
                source: '/recruitment-services/',
                destination: '/services',
                permanent: true,
            },
            {
                source: '/people-locations',
                destination: '/locations',
                permanent: true,
            },
            {
                source: '/people-locations/',
                destination: '/locations',
                permanent: true,
            },
            // Legacy WordPress Job URLs
            {
                source: '/job/:slug*',
                destination: '/job-search',
                permanent: true,
            },
            // WordPress/Legacy Crawled-but-not-indexed URL Redirects
            {
                source: '/job search/:path*',
                destination: '/job-search',
                permanent: true,
            },
            {
                source: '/job%20search/:path*',
                destination: '/job-search',
                permanent: true,
            },
            {
                source: '/video gallery',
                destination: '/',
                permanent: true,
            },
            {
                source: '/video gallery/',
                destination: '/',
                permanent: true,
            },
            {
                source: '/video%20gallery',
                destination: '/',
                permanent: true,
            },
            {
                source: '/video%20gallery/',
                destination: '/',
                permanent: true,
            },
            {
                source: '/author/:path*',
                destination: '/',
                permanent: true,
            },
            // WordPress Category Redirects
            {
                source: '/category/:path*',
                destination: '/news',
                permanent: true,
            },
            // Legacy WordPress Uploads/PDFs Redirects
            {
                source: '/wp-content/uploads/2024/11/RDUK-Privacy-Statement-.pdf',
                destination: '/privacy-policy',
                permanent: true,
            },
            {
                source: '/wp-content/uploads/2024/11/RDUK-Equality-Policy-1.pdf',
                destination: '/equality-diversity-policy',
                permanent: true,
            },
            {
                source: '/wp-content/uploads/2024/11/Recruitment-Direct-UK-Ltd-Terms-Conditions.pdf',
                destination: '/terms-of-use',
                permanent: true,
            },
            // Legacy Blog Posts Redirects
            {
                source: '/10-proven-ways-to-speed-up-your-hiring-process',
                destination: '/news',
                permanent: true,
            },
            {
                source: '/10-proven-ways-to-speed-up-your-hiring-process/',
                destination: '/news',
                permanent: true,
            },
            {
                source: '/combining-ai-telephone-screening-with-experienced-recruiters-to-deliver-faster-and-more-cost-effective-hiring',
                destination: '/news',
                permanent: true,
            },
            {
                source: '/combining-ai-telephone-screening-with-experienced-recruiters-to-deliver-faster-and-more-cost-effective-hiring/',
                destination: '/news',
                permanent: true,
            },
            {
                source: '/how-to-attract-gen-z-candidates',
                destination: '/news',
                permanent: true,
            },
            {
                source: '/how-to-attract-gen-z-candidates/',
                destination: '/news',
                permanent: true,
            },
            // Legacy Policies and Compliance Redirects
            {
                source: '/modern-slavery-and-human-trafficking-policy',
                destination: '/modern-slavery-policy',
                permanent: true,
            },
            {
                source: '/modern-slavery-and-human-trafficking-policy/',
                destination: '/modern-slavery-policy',
                permanent: true,
            },
            {
                source: '/sustainability-and-policies',
                destination: '/environmental-carbon-policy',
                permanent: true,
            },
            {
                source: '/sustainability-and-policies/',
                destination: '/environmental-carbon-policy',
                permanent: true,
            },
            {
                source: '/policies-and-compliance',
                destination: '/privacy-policy',
                permanent: true,
            },
            {
                source: '/policies-and-compliance/',
                destination: '/privacy-policy',
                permanent: true,
            },
            {
                source: '/',
                has: [{ type: 'query', key: 'page_id' }],
                destination: '/',
                permanent: true,
            },
            // Trailing slash redirects for active pages to avoid GSC crawling duplicates
            {
                source: '/client-privacy-notice/',
                destination: '/client-privacy-notice',
                permanent: true,
            },
            {
                source: '/our-process/',
                destination: '/our-process',
                permanent: true,
            },
            {
                source: '/terms-of-use/',
                destination: '/terms-of-use',
                permanent: true,
            },
            {
                source: '/news/',
                destination: '/news',
                permanent: true,
            },
            {
                source: '/services/',
                destination: '/services',
                permanent: true,
            },
            // Legacy 404 URL Redirects from Search Console
            {
                source: '/blogs',
                destination: '/news',
                permanent: true,
            },
            {
                source: '/blogs/',
                destination: '/news',
                permanent: true,
            },
            {
                source: '/register-a-vacancy',
                destination: '/ai-hire-now',
                permanent: true,
            },
            {
                source: '/register-a-vacancy/',
                destination: '/ai-hire-now',
                permanent: true,
            },
            {
                source: '/fair-treatment-equality-policy',
                destination: '/equality-diversity-policy',
                permanent: true,
            },
            {
                source: '/fair-treatment-equality-policy/',
                destination: '/equality-diversity-policy',
                permanent: true,
            },
            {
                source: '/terms-and-conditions',
                destination: '/terms-of-use',
                permanent: true,
            },
            {
                source: '/terms-and-conditions/',
                destination: '/terms-of-use',
                permanent: true,
            },
            {
                source: '/office-locations',
                destination: '/locations',
                permanent: true,
            },
            {
                source: '/office-locations/',
                destination: '/locations',
                permanent: true,
            },
            {
                source: '/health-and-safety-policy',
                destination: '/health-safety-policy',
                permanent: true,
            },
            {
                source: '/health-and-safety-policy/',
                destination: '/health-safety-policy',
                permanent: true,
            },
            {
                source: '/equality-plan',
                destination: '/equality-diversity-policy',
                permanent: true,
            },
            {
                source: '/equality-plan/',
                destination: '/equality-diversity-policy',
                permanent: true,
            },
            // Legacy Location Page Redirects
            {
                source: '/locations/republic-of-ireland/tralee',
                destination: '/locations',
                permanent: true,
            },
            {
                source: '/locations/republic-of-ireland/tralee/',
                destination: '/locations',
                permanent: true,
            },
            {
                source: '/locations/wales/wrexham',
                destination: '/locations/wales',
                permanent: true,
            },
            {
                source: '/locations/wales/wrexham/',
                destination: '/locations/wales',
                permanent: true,
            },
            {
                source: '/locations/scotland/greenock',
                destination: '/locations/scotland',
                permanent: true,
            },
            {
                source: '/locations/scotland/greenock/',
                destination: '/locations/scotland',
                permanent: true,
            },
            {
                source: '/locations/scotland/bishopbriggs',
                destination: '/locations/scotland',
                permanent: true,
            },
            {
                source: '/locations/scotland/bishopbriggs/',
                destination: '/locations/scotland',
                permanent: true,
            },
            {
                source: '/locations/england/scarborough',
                destination: '/locations/england',
                permanent: true,
            },
            {
                source: '/locations/england/scarborough/',
                destination: '/locations/england',
                permanent: true,
            },
            {
                source: '/locations/scotland/dunfermline',
                destination: '/locations/scotland',
                permanent: true,
            },
            {
                source: '/locations/scotland/dunfermline/',
                destination: '/locations/scotland',
                permanent: true,
            },
            {
                source: '/locations/wales/rhyl',
                destination: '/locations/wales',
                permanent: true,
            },
            {
                source: '/locations/wales/rhyl/',
                destination: '/locations/wales',
                permanent: true,
            },
            {
                source: '/locations/england/chester',
                destination: '/locations/england',
                permanent: true,
            },
            {
                source: '/locations/england/chester/',
                destination: '/locations/england',
                permanent: true,
            },
            {
                source: '/locations/republic-of-ireland/donegal',
                destination: '/locations',
                permanent: true,
            },
            {
                source: '/locations/republic-of-ireland/donegal/',
                destination: '/locations',
                permanent: true,
            },
            {
                source: '/locations/scotland/dumfries',
                destination: '/locations/scotland',
                permanent: true,
            },
            {
                source: '/locations/scotland/dumfries/',
                destination: '/locations/scotland',
                permanent: true,
            },
            {
                source: '/locations/wales/aberystwyth',
                destination: '/locations/wales',
                permanent: true,
            },
            {
                source: '/locations/wales/aberystwyth/',
                destination: '/locations/wales',
                permanent: true,
            },
            // Legacy WordPress system paths
            {
                source: '/wp-includes/:path*',
                destination: '/',
                permanent: true,
            },
            {
                source: '/wp-content/:path*',
                destination: '/',
                permanent: true,
            },
            {
                source: '/locations/scotland/kirkintilloch',
                destination: '/locations/scotland/glasgow',
                permanent: true,
            },
            {
                source: '/locations/scotland/kirkintilloch/',
                destination: '/locations/scotland/glasgow',
                permanent: true,
            },
            {
                source: '/locations/england/grimsby',
                destination: '/locations',
                permanent: true,
            },
            {
                source: '/locations/england/grimsby/',
                destination: '/locations',
                permanent: true,
            },
            {
                source: '/locations/republic-of-ireland/naas',
                destination: '/locations/republic-of-ireland/dublin',
                permanent: true,
            },
            {
                source: '/locations/republic-of-ireland/naas/',
                destination: '/locations/republic-of-ireland/dublin',
                permanent: true,
            },
            {
                source: '/locations/scotland/kilmarnock',
                destination: '/locations',
                permanent: true,
            },
            {
                source: '/locations/scotland/kilmarnock/',
                destination: '/locations',
                permanent: true,
            },
            {
                source: '/locations/scotland/irvine',
                destination: '/locations',
                permanent: true,
            },
            {
                source: '/locations/scotland/irvine/',
                destination: '/locations',
                permanent: true,
            },
            {
                source: '/locations/scotland/forfar',
                destination: '/locations',
                permanent: true,
            },
            {
                source: '/locations/scotland/forfar/',
                destination: '/locations',
                permanent: true,
            },
            {
                source: '/locations/england/brighton',
                destination: '/locations',
                permanent: true,
            },
            {
                source: '/locations/england/brighton/',
                destination: '/locations',
                permanent: true,
            },
            {
                source: '/locations/scotland/cupar',
                destination: '/locations',
                permanent: true,
            },
            {
                source: '/locations/scotland/cupar/',
                destination: '/locations',
                permanent: true,
            },
            {
                source: '/locations/republic-of-ireland/carrick%20on%20shannon',
                destination: '/locations',
                permanent: true,
            },
            {
                source: '/locations/republic-of-ireland/carrick%20on%20shannon/',
                destination: '/locations',
                permanent: true,
            },
            {
                source: '/locations/republic-of-ireland/carrick-on-shannon',
                destination: '/locations',
                permanent: true,
            },
            {
                source: '/locations/republic-of-ireland/carrick-on-shannon/',
                destination: '/locations',
                permanent: true,
            },
            // Country trailing slash explicit redirects
            {
                source: '/locations/scotland/',
                destination: '/locations/scotland',
                permanent: true,
            },
            {
                source: '/locations/england/',
                destination: '/locations/england',
                permanent: true,
            },
            {
                source: '/locations/wales/',
                destination: '/locations/wales',
                permanent: true,
            },
            {
                source: '/locations/northern-ireland/',
                destination: '/locations/northern-ireland',
                permanent: true,
            },
            {
                source: '/locations/republic-of-ireland/',
                destination: '/locations/republic-of-ireland',
                permanent: true,
            },
            // Redirect `/job_details` (the old search page) to the new `/job-search` URL
            {
                source: '/job_details',
                destination: '/job-search',
                permanent: true,
            },
            // Redirect old job-search URLs containing a path segment (i.e. specific jobs) to the job_details pages
            {
                source: '/job-search/:path+',
                destination: '/job_details/:path+',
                permanent: true,
            },
            // Force www to non-www
            {
                source: '/:path*',
                has: [{ type: 'host', value: 'www.rd1.co.uk' }],
                destination: 'https://rd1.co.uk/:path*',
                permanent: true,
            },
            // Redirect any feed URL to its parent page
            {
                source: '/:path*/feed',
                destination: '/:path*',
                permanent: true,
            },
            {
                source: '/:path*/feed/',
                destination: '/:path*',
                permanent: true,
            },
            // Legacy policy redirects to GDPR policy
            {
                source: '/data-protection-policy',
                destination: '/data-protection-gdpr-policy',
                permanent: true,
            },
            {
                source: '/data-protection-policy/',
                destination: '/data-protection-gdpr-policy',
                permanent: true,
            },
            // Disambiguated duplicate town name: two distinct real places named "Blackburn"
            // (West Lothian and Aberdeenshire) previously collided on the same slug, with the
            // West Lothian entry winning the lookup. Preserve that old URL as a 301.
            {
                source: '/locations/scotland/blackburn',
                destination: '/locations/scotland/blackburn-west-lothian',
                permanent: true,
            },
            {
                source: '/locations/scotland/blackburn/',
                destination: '/locations/scotland/blackburn-west-lothian',
                permanent: true,
            },
            // Blackburn trailing hyphen redirects from Search Console
            {
                source: '/locations/scotland/blackburn-west-lothian-',
                destination: '/locations/scotland/blackburn-west-lothian',
                permanent: true,
            },
            {
                source: '/locations/scotland/blackburn-west-lothian-/',
                destination: '/locations/scotland/blackburn-west-lothian',
                permanent: true,
            },
            {
                source: '/locations/scotland/blackburn-aberdeenshire-',
                destination: '/locations/scotland/blackburn-aberdeenshire',
                permanent: true,
            },
            {
                source: '/locations/scotland/blackburn-aberdeenshire-/',
                destination: '/locations/scotland/blackburn-aberdeenshire',
                permanent: true,
            },
            // Spelling correction redirects
            {
                source: '/parmanent-staff',
                destination: '/permanent-staff',
                permanent: true,
            },
            {
                source: '/parmanent-staff/',
                destination: '/permanent-staff',
                permanent: true,
            },
            // Construction redirects
            {
                source: '/construction',
                destination: '/construction-recruitment-agency',
                permanent: true,
            },
            {
                source: '/construction/',
                destination: '/construction-recruitment-agency',
                permanent: true,
            },
            {
                source: '/sectors/construction',
                destination: '/construction-recruitment-agency',
                permanent: true,
            },
            {
                source: '/sectors/construction/',
                destination: '/construction-recruitment-agency',
                permanent: true,
            },
            // Healthcare redirects
            {
                source: '/healthcare',
                destination: '/healthcare-recruitment-agency',
                permanent: true,
            },
            {
                source: '/healthcare/',
                destination: '/healthcare-recruitment-agency',
                permanent: true,
            },
            {
                source: '/sectors/healthcare',
                destination: '/healthcare-recruitment-agency',
                permanent: true,
            },
            {
                source: '/sectors/healthcare/',
                destination: '/healthcare-recruitment-agency',
                permanent: true,
            },
            // Education redirects
            {
                source: '/education',
                destination: '/education-recruitment-agency',
                permanent: true,
            },
            {
                source: '/education/',
                destination: '/education-recruitment-agency',
                permanent: true,
            },
            {
                source: '/sectors/education',
                destination: '/education-recruitment-agency',
                permanent: true,
            },
            {
                source: '/sectors/education/',
                destination: '/education-recruitment-agency',
                permanent: true,
            },
            // Hospitality redirects
            {
                source: '/hospitality',
                destination: '/hospitality-recruitment-agency',
                permanent: true,
            },
            {
                source: '/hospitality/',
                destination: '/hospitality-recruitment-agency',
                permanent: true,
            },
            {
                source: '/sectors/hospitality',
                destination: '/hospitality-recruitment-agency',
                permanent: true,
            },
            {
                source: '/sectors/hospitality/',
                destination: '/hospitality-recruitment-agency',
                permanent: true,
            },
            // Engineering redirects
            {
                source: '/engineering',
                destination: '/engineering-recruitment-agency',
                permanent: true,
            },
            {
                source: '/engineering/',
                destination: '/engineering-recruitment-agency',
                permanent: true,
            },
            {
                source: '/sectors/engineering',
                destination: '/engineering-recruitment-agency',
                permanent: true,
            },
            {
                source: '/sectors/engineering/',
                destination: '/engineering-recruitment-agency',
                permanent: true,
            },
            // Renewables redirects
            {
                source: '/renewables',
                destination: '/renewable-energy-recruitment-agency',
                permanent: true,
            },
            {
                source: '/renewables/',
                destination: '/renewable-energy-recruitment-agency',
                permanent: true,
            },
            {
                source: '/sectors/renewables',
                destination: '/renewable-energy-recruitment-agency',
                permanent: true,
            },
            {
                source: '/sectors/renewables/',
                destination: '/renewable-energy-recruitment-agency',
                permanent: true,
            },
            {
                source: '/renewable-energy',
                destination: '/renewable-energy-recruitment-agency',
                permanent: true,
            },
            {
                source: '/renewable-energy/',
                destination: '/renewable-energy-recruitment-agency',
                permanent: true,
            },
            {
                source: '/sectors/renewable-energy',
                destination: '/renewable-energy-recruitment-agency',
                permanent: true,
            },
            {
                source: '/sectors/renewable-energy/',
                destination: '/renewable-energy-recruitment-agency',
                permanent: true,
            },
            // Logistics redirects
            {
                source: '/logistics',
                destination: '/logistics-recruitment-agency',
                permanent: true,
            },
            {
                source: '/logistics/',
                destination: '/logistics-recruitment-agency',
                permanent: true,
            },
            {
                source: '/sectors/logistics',
                destination: '/logistics-recruitment-agency',
                permanent: true,
            },
            {
                source: '/sectors/logistics/',
                destination: '/logistics-recruitment-agency',
                permanent: true,
            },
            // IT & Tech redirects
            {
                source: '/it-tech',
                destination: '/it-technology-recruitment-agency',
                permanent: true,
            },
            {
                source: '/it-tech/',
                destination: '/it-technology-recruitment-agency',
                permanent: true,
            },
            {
                source: '/sectors/it-tech',
                destination: '/it-technology-recruitment-agency',
                permanent: true,
            },
            {
                source: '/sectors/it-tech/',
                destination: '/it-technology-recruitment-agency',
                permanent: true,
            },
            {
                source: '/it-technology',
                destination: '/it-technology-recruitment-agency',
                permanent: true,
            },
            {
                source: '/it-technology/',
                destination: '/it-technology-recruitment-agency',
                permanent: true,
            },
            {
                source: '/sectors/it-technology',
                destination: '/it-technology-recruitment-agency',
                permanent: true,
            },
            {
                source: '/sectors/it-technology/',
                destination: '/it-technology-recruitment-agency',
                permanent: true,
            },
            // Commercial & Office redirects
            {
                source: '/commercial',
                destination: '/commercial-office-recruitment-agency',
                permanent: true,
            },
            {
                source: '/commercial/',
                destination: '/commercial-office-recruitment-agency',
                permanent: true,
            },
            {
                source: '/sectors/commercial',
                destination: '/commercial-office-recruitment-agency',
                permanent: true,
            },
            {
                source: '/sectors/commercial/',
                destination: '/commercial-office-recruitment-agency',
                permanent: true,
            },
            {
                source: '/commercial-office',
                destination: '/commercial-office-recruitment-agency',
                permanent: true,
            },
            {
                source: '/commercial-office/',
                destination: '/commercial-office-recruitment-agency',
                permanent: true,
            },
            {
                source: '/sectors/commercial-office',
                destination: '/commercial-office-recruitment-agency',
                permanent: true,
            },
            {
                source: '/sectors/commercial-office/',
                destination: '/commercial-office-recruitment-agency',
                permanent: true,
            },
            // Civil Engineering redirects
            {
                source: '/civil-engineering',
                destination: '/engineering-recruitment-agency',
                permanent: true,
            },
            {
                source: '/civil-engineering/',
                destination: '/engineering-recruitment-agency',
                permanent: true,
            },
            {
                source: '/sectors/civil-engineering',
                destination: '/engineering-recruitment-agency',
                permanent: true,
            },
            {
                source: '/sectors/civil-engineering/',
                destination: '/engineering-recruitment-agency',
                permanent: true,
            },
            {
                source: '/civil-engineering-recruitment-agency',
                destination: '/engineering-recruitment-agency',
                permanent: true,
            },
            {
                source: '/civil-engineering-recruitment-agency/',
                destination: '/engineering-recruitment-agency',
                permanent: true,
            },
            // Facilities Management redirects
            {
                source: '/facilities-management',
                destination: '/commercial-office-recruitment-agency',
                permanent: true,
            },
            {
                source: '/facilities-management/',
                destination: '/commercial-office-recruitment-agency',
                permanent: true,
            },
            {
                source: '/sectors/facilities-management',
                destination: '/commercial-office-recruitment-agency',
                permanent: true,
            },
            {
                source: '/sectors/facilities-management/',
                destination: '/commercial-office-recruitment-agency',
                permanent: true,
            },
            {
                source: '/facilities-management-recruitment-agency',
                destination: '/commercial-office-recruitment-agency',
                permanent: true,
            },
            {
                source: '/facilities-management-recruitment-agency/',
                destination: '/commercial-office-recruitment-agency',
                permanent: true,
            },
            // Business Support & IT redirects (Legacy typo protection)
            {
                source: '/business-support-it',
                destination: '/it-technology-recruitment-agency',
                permanent: true,
            },
            {
                source: '/business-support-it/',
                destination: '/it-technology-recruitment-agency',
                permanent: true,
            },
            // Recruitment Services redirects
            {
                source: '/recruitment-services',
                destination: '/',
                permanent: true,
            },
            {
                source: '/recruitment-services/',
                destination: '/',
                permanent: true,
            },
            // Dynamic locations redirects (both flat and trailing-slash flat paths)
            ...locationsRedirects.map(r => ({
                source: r.source,
                destination: r.destination,
                permanent: true,
            })),
            ...locationsRedirects.map(r => ({
                source: `${r.source}/`,
                destination: r.destination,
                permanent: true,
            })),
            // Ireland split redirects (Belfast and Dublin hubs + spokes)
            {
                source: '/locations/ireland/:town(belfast|derry|lisburn|newtownabbey|bangor|holywood|carrickfergus|larne|antrim|ballymena|ballyclare|newtownards|comber|saintfield|downpatrick|banbridge|craigavon|lurgan|portadown|armagh|newry|dungannon|cookstown|magherafelt|coleraine|portrush|omagh|enniskillen)',
                destination: '/locations/northern-ireland/:town',
                permanent: true,
            },
            {
                source: '/locations/ireland/:town(dublin|cork|galway|swords|malahide|donabate|balbriggan|skerries|rush|howth|portmarnock|blanchardstown|lucan|clondalkin|tallaght|leixlip|maynooth|celbridge|naas|newbridge|bray|greystones|wicklow|arklow|drogheda|ashbourne|navan)',
                destination: '/locations/republic-of-ireland/:town',
                permanent: true,
            },
            {
                source: '/locations/ireland',
                destination: '/locations',
                permanent: true,
            },
            {
                source: '/locations/ireland/',
                destination: '/locations',
                permanent: true,
            },
        ];
    }
};

export default nextConfig;
