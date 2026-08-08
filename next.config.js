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
