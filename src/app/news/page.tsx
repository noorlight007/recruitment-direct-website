import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingElements from "@/components/FloatingElements";
import { getArticles } from "@/lib/news";

export const revalidate = 3600;

const TITLE = "Recruitment News & Hiring Advice | Recruitment Direct UK";
const DESCRIPTION =
  "Recruitment news, hiring advice and company updates from Recruitment Direct UK, the Scottish agency supplying temporary and permanent staff since 2006.";

export async function generateMetadata(): Promise<Metadata> {
  const articles = await getArticles();
  return {
    title: TITLE,
    description: DESCRIPTION,
    // Only indexable when real articles are in the server-rendered HTML.
    robots: { index: articles.length > 0, follow: true },
    alternates: { canonical: "https://rd1.co.uk/news" },
    openGraph: {
      title: TITLE,
      description: DESCRIPTION,
      url: "https://rd1.co.uk/news",
      type: "website",
      images: [
        {
          url: "https://rd1.co.uk/images/og-image.png",
          width: 1200,
          height: 630,
          alt: "News & Insights - Recruitment Direct UK Ltd",
        },
      ],
    },
    twitter: { card: "summary_large_image", title: TITLE, description: DESCRIPTION },
  };
}

const formatDate = (iso: string) =>
  new Date(iso).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  });

export default async function NewsPage() {
  const articles = await getArticles();

  return (
    <div className="min-h-screen bg-white text-[#121212]">
      <Navbar />

      <header className="pt-32 pb-12 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl tracking-tight mb-6 leading-tight">
            News &amp; Insights
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed mb-4 max-w-3xl">
            Stay updated with the latest news, recruitment trends, industry insights, and updates from Recruitment Direct.
          </p>
          <div className="text-base text-gray-600 leading-relaxed max-w-3xl space-y-4">
            <p>
              Welcome to our industry insights hub. Explore our articles, guides, and reports covering employment law, HMRC compliance (such as CIS, VAT, and IR35), recruitment strategies, and workforce planning.
            </p>
            <p>
              Our insights draw on our experience supplying temporary, contract, and permanent staff across Scotland and the UK since 2006. Whether you are an employer reviewing staffing trends in Construction, Logistics, and Engineering, or a candidate looking for market updates, we keep you informed.
            </p>
          </div>
        </div>
      </header>

      <main className="py-16 bg-[#fafafa]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl p-6 sm:p-8 md:p-12 shadow-sm border border-gray-100 min-h-[400px]">
            <h2 className="text-2xl font-bold font-heading mb-6 border-b border-gray-100 pb-4">
              Our Latest Articles &amp; Updates
            </h2>
            {articles.length === 0 ? (
              <p className="text-gray-600">Articles are temporarily unavailable. Please check back soon.</p>
            ) : (
              <ul className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 list-none p-0 m-0">
                {articles.map((a) => (
                  <li key={a.slug} className="rounded-xl border border-gray-100 overflow-hidden bg-white hover:shadow-md transition-shadow">
                    <Link href={`/news/${a.slug}`} className="block h-full">
                      {a.image && (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img src={a.image} alt="" loading="lazy" className="w-full aspect-[16/9] object-cover" />
                      )}
                      <div className="p-5">
                        <time dateTime={a.publishedAt} className="text-sm text-gray-500">
                          {formatDate(a.publishedAt)}
                        </time>
                        <h3 className="font-heading font-bold text-lg mt-1 mb-2 leading-snug">{a.title}</h3>
                        <p className="text-gray-600 text-sm leading-relaxed">{a.excerpt}</p>
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </main>

      <Footer />
      <FloatingElements />
    </div>
  );
}
