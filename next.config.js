/** @type {import('next').NextConfig} */

// Legacy policy, sector, and content URL pairs still indexed or referenced.
// All are permanently (301) redirected to their canonical live pages.
const LEGACY_URL_REDIRECTS = [
  // Policy & compliance redirects
  ['/fair-treatment-equality-policy',                  '/equality-diversity-policy'],
  ['/equality-plan',                                   '/equality-diversity-policy'],
  ['/equality-policy',                                 '/equality-diversity-policy'],
  ['/equality-diversity-inclusion-policy',             '/equality-diversity-policy'],
  ['/ai-transparency',                                 '/ai-transparency-statement'],
  ['/modern-slavery-and-human-trafficking-policy',     '/modern-slavery-policy'],
  ['/health-and-safety-policy',                        '/health-safety-policy'],
  ['/health-and-safety',                               '/health-safety-policy'],
  ['/data-protection-policy',                          '/data-protection-gdpr-policy'],
  ['/data-protection',                                 '/data-protection-gdpr-policy'],
  ['/terms-and-conditions',                            '/terms-of-use'],
  ['/terms-conditions',                                '/terms-of-use'],
  ['/terms',                                           '/terms-of-use'],
  ['/wp-content/uploads/2024/11/RDUK-Privacy-Statement-.pdf', '/privacy-policy'],
  ['/wp-content/uploads/2024/11/RDUK-Equality-Policy-1.pdf',   '/equality-diversity-policy'],
  ['/wp-content/uploads/2024/11/Recruitment-Direct-UK-Ltd-Terms-Conditions.pdf', '/terms-of-use'],

  // Sector redirects
  ['/construction',                                    '/construction-recruitment-agency'],
  ['/construction-recruitment',                        '/construction-recruitment-agency'],
  ['/sectors/construction',                            '/construction-recruitment-agency'],
  ['/sectors/construction-recruitment',                '/construction-recruitment-agency'],
  ['/sector/construction',                             '/construction-recruitment-agency'],
  ['/education',                                       '/education-recruitment-agency'],
  ['/education-recruitment',                           '/education-recruitment-agency'],
  ['/sectors/education',                               '/education-recruitment-agency'],
  ['/sectors/education-recruitment',                   '/education-recruitment-agency'],
  ['/sector/education',                                '/education-recruitment-agency'],
  ['/healthcare',                                      '/healthcare-recruitment-agency'],
  ['/healthcare-recruitment',                          '/healthcare-recruitment-agency'],
  ['/sectors/healthcare',                              '/healthcare-recruitment-agency'],
  ['/sectors/healthcare-recruitment',                  '/healthcare-recruitment-agency'],
  ['/sector/healthcare',                               '/healthcare-recruitment-agency'],
  ['/hospitality',                                     '/hospitality-recruitment-agency'],
  ['/hospitality-recruitment',                         '/hospitality-recruitment-agency'],
  ['/sectors/hospitality',                             '/hospitality-recruitment-agency'],
  ['/sectors/hospitality-recruitment',                 '/hospitality-recruitment-agency'],
  ['/sector/hospitality',                              '/hospitality-recruitment-agency'],
  ['/logistics',                                       '/logistics-recruitment-agency'],
  ['/logistics-recruitment',                           '/logistics-recruitment-agency'],
  ['/sectors/logistics',                               '/logistics-recruitment-agency'],
  ['/sectors/logistics-recruitment',                   '/logistics-recruitment-agency'],
  ['/sector/logistics',                                '/logistics-recruitment-agency'],
  ['/engineering',                                     '/engineering-recruitment-agency'],
  ['/engineering-recruitment',                         '/engineering-recruitment-agency'],
  ['/sectors/engineering',                             '/engineering-recruitment-agency'],
  ['/sectors/engineering-recruitment',                 '/engineering-recruitment-agency'],
  ['/sector/engineering',                              '/engineering-recruitment-agency'],
  ['/renewables',                                      '/renewable-energy-recruitment-agency'],
  ['/renewables-recruitment',                          '/renewable-energy-recruitment-agency'],
  ['/sectors/renewables',                              '/renewable-energy-recruitment-agency'],
  ['/sector/renewables',                               '/renewable-energy-recruitment-agency'],
  ['/renewable-energy',                                '/renewable-energy-recruitment-agency'],
  ['/renewable-energy-recruitment',                    '/renewable-energy-recruitment-agency'],
  ['/sectors/renewable-energy',                        '/renewable-energy-recruitment-agency'],
  ['/sectors/renewable-energy-recruitment',            '/renewable-energy-recruitment-agency'],
  ['/sector/renewable-energy',                         '/renewable-energy-recruitment-agency'],
  ['/it-tech',                                         '/it-technology-recruitment-agency'],
  ['/it-tech-recruitment',                             '/it-technology-recruitment-agency'],
  ['/sectors/it-tech',                                 '/it-technology-recruitment-agency'],
  ['/sector/it-tech',                                  '/it-technology-recruitment-agency'],
  ['/it-technology',                                   '/it-technology-recruitment-agency'],
  ['/it-technology-recruitment',                       '/it-technology-recruitment-agency'],
  ['/it-recruitment',                                  '/it-technology-recruitment-agency'],
  ['/sectors/it-technology',                           '/it-technology-recruitment-agency'],
  ['/sectors/it-technology-recruitment',               '/it-technology-recruitment-agency'],
  ['/sector/it-technology',                            '/it-technology-recruitment-agency'],
  ['/commercial',                                      '/commercial-office-recruitment-agency'],
  ['/commercial-recruitment',                          '/commercial-office-recruitment-agency'],
  ['/sectors/commercial',                              '/commercial-office-recruitment-agency'],
  ['/sector/commercial',                               '/commercial-office-recruitment-agency'],
  ['/commercial-office',                               '/commercial-office-recruitment-agency'],
  ['/commercial-office-recruitment',                   '/commercial-office-recruitment-agency'],
  ['/sectors/commercial-office',                       '/commercial-office-recruitment-agency'],
  ['/sectors/commercial-office-recruitment',           '/commercial-office-recruitment-agency'],
  ['/sector/commercial-office',                        '/commercial-office-recruitment-agency'],
  ['/civil-engineering',                               '/civil-engineering-recruitment-agency'],
  ['/civil-engineering-recruitment',                   '/civil-engineering-recruitment-agency'],
  ['/sectors/civil-engineering',                       '/civil-engineering-recruitment-agency'],
  ['/sectors/civil-engineering-recruitment',           '/civil-engineering-recruitment-agency'],
  ['/sector/civil-engineering',                        '/civil-engineering-recruitment-agency'],
  ['/facilities-management',                           '/facilities-management-recruitment-agency'],
  ['/facilities-management-recruitment',               '/facilities-management-recruitment-agency'],
  ['/sectors/facilities-management',                   '/facilities-management-recruitment-agency'],
  ['/sectors/facilities-management-recruitment',       '/facilities-management-recruitment-agency'],
  ['/sector/facilities-management',                    '/facilities-management-recruitment-agency'],
  ['/facilities',                                      '/facilities-management-recruitment-agency'],
  ['/facilities-recruitment',                          '/facilities-management-recruitment-agency'],
  ['/sectors/facilities',                              '/facilities-management-recruitment-agency'],
  ['/business-support-it',                             '/it-technology-recruitment-agency'],
  ['/business-support-recruitment',                    '/it-technology-recruitment-agency'],

  // General & typo redirects
  ['/about-us',                                        '/about'],
  ['/contact-us',                                      '/contact'],
  ['/why-rduk',                                        '/why-choose-us'],
  ['/try-ai-call-demo',                                '/assets/rd1-24-7-live-call.html'],
  ['/parmanent-staff',                                 '/permanent-staff'],
  ['/blogs',                                           '/news'],
  ['/blog',                                            '/news'],
  ['/10-proven-ways-to-speed-up-your-hiring-process',  '/news'],
  ['/combining-ai-telephone-screening-with-experienced-recruiters-to-deliver-faster-and-more-cost-effective-hiring', '/news'],
  ['/how-to-attract-gen-z-candidates',                 '/news'],
  ['/sustainability-and-policies',                     '/policies-and-compliance'],
  ['/sustainability-policy',                           '/environmental-carbon-policy'],
  ['/sustainability',                                  '/environmental-carbon-policy'],
  ['/register-a-vacancy',                              '/ai-hire-now'],
  ['/office-locations',                                '/locations'],
  ['/people-locations',                                '/locations'],
  ['/our-locations',                                   '/locations'],
  ['/recruitment-services',                            '/services'],
  ['/place-enquiry',                                   '/find-staff'],
  ['/hire-staff',                                      '/find-staff'],
];

const nextConfig = {
  reactStrictMode: true,
  compress: true,
  poweredByHeader: false,
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 2592000, // 30 days
  },
  // Keeps /path and /path/ from both resolving.
  trailingSlash: false,

  async headers() {
    return [
      {
        source: '/certificates/:all*(pdf)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/images/:all*(webp|png|jpg|jpeg|svg)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/assets/:all*(webp|png|jpg|jpeg|svg)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },

  async redirects() {
    return [
      // ---------------------------------------------------------------
      // 1. www -> non-www, permanent (308/301).
      // ---------------------------------------------------------------
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'www.rd1.co.uk' }],
        destination: 'https://rd1.co.uk/:path*',
        permanent: true,
      },

      // ---------------------------------------------------------------
      // 2. Legacy URL redirects (both with and without trailing slash).
      // ---------------------------------------------------------------
      ...LEGACY_URL_REDIRECTS.flatMap(([from, to]) => [
        { source: from,          destination: to, permanent: true },
        { source: `${from}/`,    destination: to, permanent: true },
      ]),

      // ---------------------------------------------------------------
      // 3. Legacy wildcard paths (old blogs, category archives, etc.)
      // ---------------------------------------------------------------
      { source: '/blogs/:path+', destination: '/news', permanent: true },
      { source: '/blog/:path+', destination: '/news', permanent: true },
      { source: '/office-locations/:path+', destination: '/locations', permanent: true },
      { source: '/people-locations/:path+', destination: '/locations', permanent: true },
      { source: '/our-locations/:path+', destination: '/locations', permanent: true },
      { source: '/category/:path*', destination: '/news', permanent: true },
      { source: '/tag/:path*', destination: '/news', permanent: true },
      { source: '/author/:path*', destination: '/about', permanent: true },
      { source: '/job/:path*', destination: '/job-search', permanent: true },
      { source: '/jobs/:path*', destination: '/job-search', permanent: true },
      { source: '/job', destination: '/job-search', permanent: true },
      { source: '/jobs', destination: '/job-search', permanent: true },
      { source: '/vacancies/:path*', destination: '/job-search', permanent: true },
      { source: '/vacancy/:path*', destination: '/job-search', permanent: true },
      { source: '/vacancies', destination: '/job-search', permanent: true },
      { source: '/vacancy', destination: '/job-search', permanent: true },

      // ---------------------------------------------------------------
      // 4. Legacy WordPress internal paths & assets
      // ---------------------------------------------------------------
      { source: '/wp-includes/:path*', destination: '/', permanent: true },
      { source: '/wp-content/:path*', destination: '/', permanent: true },
      { source: '/wp-admin/:path*', destination: '/', permanent: true },
      { source: '/wp-login.php', destination: '/', permanent: true },
      { source: '/wp-json/:path*', destination: '/', permanent: true },
      { source: '/feed/:path*', destination: '/', permanent: true },
      { source: '/feed', destination: '/', permanent: true },
    ];
  },
};

export default nextConfig;
