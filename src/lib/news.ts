// Server-side access to the Soro blog feed (the same source the old browser
// embed used). Everything here runs on the server so articles are in the HTML.

const SORO_BASE = "https://app.trysoro.com";
const SORO_TOKEN = process.env.SORO_EMBED_TOKEN || "c9ed8402-55ef-4760-b165-0096c36917ea";
const REVALIDATE = 3600;

export type Article = {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  image?: string;
  publishedAt: string; // ISO
};

type SoroListItem = {
  id: string;
  slug: string;
  title: string;
  excerpt?: string;
  image?: string | null;
  isoDate: string;
};

export async function getArticles(): Promise<Article[]> {
  try {
    const res = await fetch(`${SORO_BASE}/api/embed/${SORO_TOKEN}`, {
      next: { revalidate: REVALIDATE },
    });
    if (!res.ok) return [];
    const script = await res.text();
    // The article list is embedded in the script as `var SORO_ARTICLES = [...];`
    const match = script.match(/var SORO_ARTICLES = (\[[\s\S]*?\]);\s*\n/);
    if (!match) return [];
    const items = JSON.parse(match[1]) as SoroListItem[];
    return items
      .filter((a) => a.slug && a.title)
      .map((a) => ({
        id: a.id,
        slug: a.slug,
        title: a.title,
        excerpt: a.excerpt ?? "",
        image: a.image ?? undefined,
        publishedAt: a.isoDate,
      }))
      .sort((a, b) => b.publishedAt.localeCompare(a.publishedAt));
  } catch (err) {
    console.error("[news] Failed to load Soro articles:", err);
    return [];
  }
}

export async function getArticle(
  slug: string
): Promise<(Article & { html: string }) | null> {
  const article = (await getArticles()).find((a) => a.slug === slug);
  if (!article) return null;
  try {
    const res = await fetch(
      `${SORO_BASE}/api/embed/${SORO_TOKEN}/article/${article.id}`,
      { next: { revalidate: REVALIDATE } }
    );
    if (!res.ok) return null;
    const data = (await res.json()) as { content?: string };
    if (!data.content) return null;
    return { ...article, html: data.content };
  } catch (err) {
    console.error("[news] Failed to load Soro article:", err);
    return null;
  }
}
