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
        ];
    }
};

export default nextConfig;
