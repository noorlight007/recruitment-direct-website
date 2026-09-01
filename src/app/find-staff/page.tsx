import type { Metadata } from 'next';
import { Suspense } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingElements from '@/components/FloatingElements';
import FindStaff from '@/components/FindStaff';
import '@/components/FindStaff.css';

export const metadata: Metadata = {
  title: 'Find Staff | Temporary, Contract & Permanent Recruitment | RDUK',
  description:
    'Need staff? Tell us the role, the location and how many. Recruitment Direct UK ' +
    'supplies temporary, contract and permanent workers across the UK, 24/7. ' +
    'Trusted since 2006. Call 01324 613198.',
  alternates: { canonical: 'https://rd1.co.uk/find-staff' },
  openGraph: {
    title: 'Find Staff | Recruitment Direct UK',
    description:
      'Tell us the role, the location and how many. Temporary, contract and ' +
      'permanent staff across the UK, 24/7.',
    url: 'https://rd1.co.uk/find-staff',
    siteName: 'Recruitment Direct UK',
    type: 'website',
    locale: 'en_GB',
    images: [{ url: '/images/og-image.png', width: 1200, height: 630, alt: 'Recruitment Direct UK Ltd' }],
  },
  twitter: { card: 'summary_large_image' },
  robots: { index: true, follow: true },
};

interface Props {
  searchParams: Promise<{ location?: string; sector?: string }> | { location?: string; sector?: string };
}

export default async function FindStaffPage({ searchParams }: Props) {
  const resolvedParams = await searchParams;
  const location = typeof resolvedParams?.location === 'string' ? resolvedParams.location : '';
  const sector = typeof resolvedParams?.sector === 'string' ? resolvedParams.sector : '';

  return (
    <div className="min-h-screen bg-background flex flex-col justify-between">
      <Navbar />
      <FloatingElements />

      <main className="find-staff-page flex-grow pt-28 sm:pt-36 pb-16 sm:pb-24 px-4">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <span className="not-found-badge mb-3">Client Enquiry</span>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-white mt-2 mb-3">
              Find Staff Fast
            </h1>
            <p className="text-base sm:text-lg text-[#cbd5e1]">
              Tell us what you need. Sourcing screened temporary, contract and permanent workers across the UK 24/7.
            </p>
          </div>

          <div className="flex justify-center">
            <Suspense fallback={<div className="text-white">Loading enquiry form...</div>}>
              <FindStaff defaultLocation={location} defaultSectorSlug={sector} />
            </Suspense>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
