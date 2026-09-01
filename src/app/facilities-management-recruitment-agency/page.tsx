import type { Metadata } from 'next';
import SectorPage from '@/components/SectorPage';
import { facilitiesManagement as data } from '@/data/sectorPages';

export const metadata: Metadata = {
  title: data.title,
  description: data.metaDescription,
  alternates: { canonical: `https://rd1.co.uk${data.path}` },
  openGraph: {
    title: data.title,
    description: data.metaDescription,
    url: `https://rd1.co.uk${data.path}`,
    siteName: 'Recruitment Direct UK',
    type: 'website',
    locale: 'en_GB',
    images: [{ url: '/images/og-image.png', width: 1200, height: 630, alt: 'Recruitment Direct UK Ltd' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: data.title,
    description: data.metaDescription,
    images: ['/images/og-image.png'],
  },
  robots: { index: true, follow: true },
};

export default function Page() {
  return <SectorPage data={data} />;
}
