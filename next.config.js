/** @type {import('next').NextConfig} */

// Legacy WordPress-era sector URLs still indexed by Google and competing
// with the current sector pages. 301 them to the live equivalents.
const LEGACY_SECTOR_REDIRECTS = [
  ['/construction',          '/construction-recruitment-agency'],
  ['/education',             '/education-recruitment-agency'],
  ['/healthcare',            '/healthcare-recruitment-agency'],
  ['/hospitality',           '/hospitality-recruitment-agency'],
  ['/logistics',             '/logistics-recruitment-agency'],
  ['/engineering',           '/engineering-recruitment-agency'],
  ['/recruitment-services',  '/services'],
  ['/people-locations',      '/locations'],
];

const nextConfig = {
  // Keeps /path and /path/ from both resolving.
  trailingSlash: false,

  async redirects() {
    return [
      // ---------------------------------------------------------------
      // 1. www -> non-www, permanent.
      //    Google currently indexes www.rd1.co.uk and rd1.co.uk as two
      //    separate sites. This must be permanent (308/301), not temporary.
      // ---------------------------------------------------------------
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'www.rd1.co.uk' }],
        destination: 'https://rd1.co.uk/:path*',
        permanent: true,
      },

      // ---------------------------------------------------------------
      // 2. Legacy sector URLs -> current sector pages.
      //    Both with and without the trailing slash.
      // ---------------------------------------------------------------
      ...LEGACY_SECTOR_REDIRECTS.flatMap(([from, to]) => [
        { source: from,          destination: to, permanent: true },
        { source: `${from}/`,    destination: to, permanent: true },
      ]),

      // ---------------------------------------------------------------
      // 3. Confirmed broken pages linked from all 354 location pages.
      //    /place-enquiry is confirmed 404.
      // ---------------------------------------------------------------
      { source: '/place-enquiry',  destination: '/find-staff', permanent: true },
      { source: '/place-enquiry/', destination: '/find-staff', permanent: true },

      // The enquiry page is /find-staff, matching the button label everywhere.
      { source: '/hire-staff',  destination: '/find-staff', permanent: true },
      { source: '/hire-staff/', destination: '/find-staff', permanent: true },
    ];
  },
};

export default nextConfig;
