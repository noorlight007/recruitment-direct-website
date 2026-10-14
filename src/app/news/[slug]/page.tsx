import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingElements from "@/components/FloatingElements";
import { getArticle, getArticles } from "@/lib/news";

export const revalidate = 3600;

type Params = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return (await getArticles()).map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const a = await getArticle(slug);
  if (!a) return {};
  const url = `https://rd1.co.uk/news/${a.slug}`;
  // Brand suffix only when it fits; long article titles stand alone.
  const withBrand = `${a.title} | RDUK`;
  const title = withBrand.length <= 62 ? withBrand : a.title;
  return {
    title,
    description: a.excerpt,
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      url,
      title: a.title,
      description: a.excerpt,
      publishedTime: a.publishedAt,
      images: a.image ? [a.image] : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title: a.title,
      description: a.excerpt,
      images: a.image ? [a.image] : undefined,
    },
  };
}

export default async function ArticlePage({ params }: Params) {
  const { slug } = await params;
  const a = await getArticle(slug);
  if (!a) notFound();

  const url = `https://rd1.co.uk/news/${a.slug}`;
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: a.title,
    description: a.excerpt,
    image: a.image,
    datePublished: a.publishedAt,
    dateModified: a.publishedAt,
    mainEntityOfPage: url,
    author: { "@type": "Organization", name: "Recruitment Direct UK Ltd" },
    publisher: {
      "@type": "Organization",
      name: "Recruitment Direct UK Ltd",
      logo: { "@type": "ImageObject", url: "https://rd1.co.uk/images/og-image.png" },
    },
  };

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://rd1.co.uk" },
      { "@type": "ListItem", position: 2, name: "News & Insights", item: "https://rd1.co.uk/news" },
      { "@type": "ListItem", position: 3, name: a.title, item: url },
    ],
  };

  return (
    <div className="min-h-screen bg-white text-[#121212]">
      <Navbar />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd).replace(/</g, "\\u003c") }}
      />
      <style>{`
        .news-article-body { font-size: 1.05rem; line-height: 1.75; color: #222; }
        .news-article-body h2 { font-size: 1.6rem; font-weight: 700; margin: 2rem 0 .75rem; line-height: 1.25; }
        .news-article-body h3 { font-size: 1.25rem; font-weight: 700; margin: 1.5rem 0 .5rem; }
        .news-article-body p { margin: 0 0 1.1rem; }
        .news-article-body ul, .news-article-body ol { margin: 0 0 1.1rem 1.5rem; }
        .news-article-body ul { list-style: disc; }
        .news-article-body ol { list-style: decimal; }
        .news-article-body a { text-decoration: underline; }
        .news-article-body img { max-width: 100%; height: auto; border-radius: 8px; }
      `}</style>

      <article className="pt-32 pb-20 px-4 sm:px-6 max-w-3xl mx-auto">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
        />
        <Link href="/news" className="text-sm font-medium hover:underline">
          ← All News &amp; Insights
        </Link>
        <h1 className="font-heading font-extrabold text-3xl sm:text-4xl tracking-tight mt-6 mb-3 leading-tight">
          {a.title}
        </h1>
        <time dateTime={a.publishedAt} className="text-sm text-gray-500 block mb-8">
          {new Date(a.publishedAt).toLocaleDateString("en-GB", {
            day: "numeric",
            month: "long",
            year: "numeric",
            timeZone: "UTC",
          })}
        </time>
        <div className="news-article-body" dangerouslySetInnerHTML={{ __html: a.html }} />
      </article>

      <Footer />
      <FloatingElements />
    </div>
  );
}
