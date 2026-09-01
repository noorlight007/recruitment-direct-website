import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingElements from '@/components/FloatingElements';

export const metadata: Metadata = {
  title: 'Page Not Found | Recruitment Direct UK',
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col justify-between">
      <Navbar />
      <FloatingElements />

      <div className="flex-grow pt-28 sm:pt-36 pb-16 sm:pb-24">
        <main className="not-found max-w-3xl mx-auto px-4 text-center">
          <span className="not-found-badge">404 Error</span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white mt-4 mb-4">
            We couldn&apos;t find that page
          </h1>
          <p className="text-base sm:text-lg text-[#cbd5e1] mb-8">
            The page may have moved. Here&apos;s where most people are heading:
          </p>

          <ul className="not-found-links text-left max-w-xl mx-auto mb-8">
            <li>
              <Link href="/find-staff">
                <strong>Find Staff</strong> — tell us what you need, 24/7
              </Link>
            </li>
            <li>
              <Link href="/job-search">
                <strong>Job Search</strong> — current vacancies
              </Link>
            </li>
            <li>
              <Link href="/locations">
                <strong>Locations</strong> — recruitment in your area
              </Link>
            </li>
            <li>
              <Link href="/sectors">
                <strong>Sectors</strong> — the industries we cover
              </Link>
            </li>
            <li>
              <Link href="/contact">
                <strong>Contact</strong> — speak to a consultant
              </Link>
            </li>
          </ul>

          <p className="not-found-phone text-sm sm:text-base text-white/70">
            Need staff now? Call <a href="tel:01324613198" className="text-[#D4AF37] font-semibold hover:underline">01324 613198</a> or{' '}
            <a href="https://wa.me/447590882626" target="_blank" rel="noopener noreferrer" className="text-[#25D366] font-semibold hover:underline">message us on WhatsApp</a>.
          </p>
        </main>
      </div>

      <Footer />
    </div>
  );
}
