/** @type {import('next').NextConfig} */

// Legacy policy, sector, and content URL pairs still indexed or referenced.
// All are permanently (301) redirected to their canonical live pages.
const LEGACY_URL_REDIRECTS = [
  // Policy & compliance redirects
  ['/fair-treatment-equality-policy',                  '/equality-diversity-policy'],
  ['/ai-transparency',                                 '/ai-transparency-statement'],
  ['/modern-slavery-and-human-trafficking-policy',     '/modern-slavery-policy'],
  ['/health-and-safety-policy',                        '/health-safety-policy'],
  ['/equality-plan',                                   '/equality-diversity-policy'],
  ['/data-protection-policy',                          '/data-protection-gdpr-policy'],
  ['/terms-and-conditions',                            '/terms-of-use'],
  ['/wp-content/uploads/2024/11/RDUK-Privacy-Statement-.pdf', '/privacy-policy'],
  ['/wp-content/uploads/2024/11/RDUK-Equality-Policy-1.pdf',   '/equality-diversity-policy'],
  ['/wp-content/uploads/2024/11/Recruitment-Direct-UK-Ltd-Terms-Conditions.pdf', '/terms-of-use'],

  // Sector redirects
  ['/construction',                                    '/construction-recruitment-agency'],
  ['/sectors/construction',                            '/construction-recruitment-agency'],
  ['/education',                                       '/education-recruitment-agency'],
  ['/sectors/education',                               '/education-recruitment-agency'],
  ['/healthcare',                                      '/healthcare-recruitment-agency'],
  ['/sectors/healthcare',                              '/healthcare-recruitment-agency'],
  ['/hospitality',                                     '/hospitality-recruitment-agency'],
  ['/sectors/hospitality',                             '/hospitality-recruitment-agency'],
  ['/logistics',                                       '/logistics-recruitment-agency'],
  ['/sectors/logistics',                               '/logistics-recruitment-agency'],
  ['/engineering',                                     '/engineering-recruitment-agency'],
  ['/sectors/engineering',                             '/engineering-recruitment-agency'],
  ['/renewables',                                      '/renewable-energy-recruitment-agency'],
  ['/sectors/renewables',                              '/renewable-energy-recruitment-agency'],
  ['/it-tech',                                         '/it-technology-recruitment-agency'],
  ['/sectors/it-tech',                                 '/it-technology-recruitment-agency'],
  ['/it-technology',                                   '/it-technology-recruitment-agency'],
  ['/sectors/it-technology',                           '/it-technology-recruitment-agency'],
  ['/commercial',                                      '/commercial-office-recruitment-agency'],
  ['/sectors/commercial',                              '/commercial-office-recruitment-agency'],
  ['/commercial-office',                               '/commercial-office-recruitment-agency'],
  ['/sectors/commercial-office',                       '/commercial-office-recruitment-agency'],
  ['/civil-engineering',                               '/civil-engineering-recruitment-agency'],
  ['/sectors/civil-engineering',                       '/civil-engineering-recruitment-agency'],
  ['/facilities-management',                           '/facilities-management-recruitment-agency'],
  ['/sectors/facilities-management',                   '/facilities-management-recruitment-agency'],
  ['/business-support-it',                              '/it-technology-recruitment-agency'],

  // General & typo redirects
  ['/about-us',                                        '/about'],
  ['/contact-us',                                      '/contact'],
  ['/why-rduk',                                        '/why-choose-us'],
  ['/try-ai-call-demo',                                '/assets/rd1-24-7-live-call.html'],
  ['/equality-diversity-inclusion-policy',             '/equality-diversity-policy'],
  ['/parmanent-staff',                                 '/permanent-staff'],
  ['/blogs',                                           '/news'],
  ['/register-a-vacancy',                              '/ai-hire-now'],
  ['/office-locations',                                '/locations'],
  ['/people-locations',                                '/locations'],
  ['/recruitment-services',                             '/services'],
  ['/place-enquiry',                                   '/find-staff'],
  ['/hire-staff',                                      '/find-staff'],
];

const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  // Keeps /path and /path/ from both resolving.
  trailingSlash: false,

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
    ];
  },
};

export default nextConfig;
