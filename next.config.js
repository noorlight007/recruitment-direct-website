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
                        value: 'DENY',
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
                        value: "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://app.trysoro.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; img-src 'self' data: blob: *; font-src 'self' https://fonts.gstatic.com data:; connect-src 'self' *; frame-src 'self' https://www.googletagmanager.com;",
                    },
                ],
            },
        ];
    },
    async redirects() {
        return [
            // Force www to non-www
            {
                source: '/:path*',
                has: [{ type: 'host', value: 'www.rd1.co.uk' }],
                destination: 'https://rd1.co.uk/:path*',
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
