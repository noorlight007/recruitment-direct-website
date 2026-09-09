# rd1.co.uk — Full health check, 9 September 2026

Live-site check run against homepage, /clients, /news, /job-search, a job detail page, and off-site
citations. Focus: what is stopping RD1 winning new clients.

Two findings below are new and serious. Everything else is either confirmed shipped, or a known item
with an updated status.

---

## Confirmed shipped since the September audit — no action needed

Verified live on the homepage this morning:

- v3 AI screening board is live (`/assets/rd1-24-7-live-call-v3.html`) — the old video is gone.
- New five-column footer is live, with the Policies & Compliance hub link.
- NAP is the canonical Herkimer House string.
- Locations is in the main nav.
- Header "Find Staff" points to `/find-staff` on the new build.
- Titles, meta descriptions and canonicals on homepage, /clients and /news are clean.
- Accreditation block with certificate PDFs is live on every page checked.

That block is closed. Nothing below repeats it.

---

# CRITICAL 1 — Every job page is an empty shell to Google

This is the most important finding in this document.

Fetched `https://rd1.co.uk/job_details/Joiner£18perhourAberdeen-707421`. The server returns:

```
Retrieving job details...
```

That is the entire body. The job title, description, location, rate and apply path are all fetched
client-side after load. What Google, Bing, ChatGPT and every other crawler receives is a blank page
carrying:

- `title` = "Recruitment Agency Scotland & UK | Recruitment Direct UK Ltd" — the generic homepage title
- no canonical tag at all
- the generic site-wide meta description
- no `JobPosting` structured data
- no job content of any kind

**Why this matters more than it looks.** There are hundreds of these URLs. From a search engine's point
of view the site contains hundreds of near-identical, contentless pages sharing one title. That is a
textbook thin-content pattern, and it applies downward pressure on the whole domain — including the 354
location pages that are being asked to rank. The standing diagnosis has been "lack of authority." A
large block of empty duplicate pages is an active drag sitting alongside it, and it is fixable without
building a single backlink.

It also means **Google Jobs is currently impossible.** Google Jobs requires server-rendered `JobPosting`
JSON-LD. It is a free, high-volume, zero-competition channel that RD1 is fully excluded from today.
Candidate volume is what clients buy, so this is a client-acquisition issue, not just a candidate one.

### Fix

1. **Server-render job detail pages.** The site is Next.js — use `getServerSideProps` or an equivalent
   server component so the job content is in the initial HTML. Confirm by viewing source, not dev tools.
2. **Per-job metadata.** Title `{Job Title} — {Location} | Recruitment Direct UK`. Meta description from
   the first ~155 characters of the job description. Self-referencing canonical on every job page.
3. **Add `JobPosting` JSON-LD**, server-rendered. Minimum required fields: `title`, `description`,
   `datePosted`, `validThrough`, `hiringOrganization`, `jobLocation`, `employmentType`,
   `baseSalary`, `identifier`.
4. **Fix the URL pattern.** Current URLs contain an encoded pound sign and no word separators:
   `/job_details/Joiner%C2%A318perhourAberdeen-707421`. Move to
   `/jobs/{job-title}-{location}-{id}`, e.g. `/jobs/joiner-aberdeen-707421`. Lower case, hyphens,
   ASCII only, no rate in the slug. 301 the old pattern to the new one.
5. **Expire jobs properly.** Filled or closed jobs must return 404 or 410, or carry a `validThrough`
   date in the past. Leaving dead jobs live as 200s is what gets a Google Jobs feed suspended.
6. **Take the rate out of the job title, put it in `baseSalary`.** Titles currently read
   "Joiner £18 per hour Aberdeen" while the card underneath says "Competitive" — the page contradicts
   itself in two places, and the title field is being used to carry data that belongs in a schema field.

### Acceptance criteria

- `curl` (or view-source) on any job URL shows the full job description in the HTML, with no
  "Retrieving job details..." string present.
- Google Rich Results Test on three job URLs returns a valid `JobPosting` with no errors.
- Three job URLs have three different `<title>` values and three self-referencing canonicals.
- Old `/job_details/...` URLs return 301 to the new `/jobs/...` equivalent.

---

# CRITICAL 2 — Two different builds are live at the same time

`/job-search` and `/job_details/*` are serving an **older build** than the homepage. Confirmed by
fetching both and diffing what came back.

| Element | Homepage (current build) | `/job-search` (old build) |
|---|---|---|
| Footer | 5 columns, Policies & Compliance hub | 4 columns, old Resources/Policies split |
| LinkedIn link | clean URL | `?utm_source=chatgpt%2Ecom&originalSubdomain=uk` |
| AI Call Demo link | not present | `/assets/rd1-24-7-live-call.html` (v1) |
| Header "Find Staff" | `/find-staff` | `/ai-hire-now-form?type=quote` |
| Nav Clients / Locations / AI Recruitment | real `href` links | **no `href` — not crawlable** |
| Canonical tag | present | **absent** |
| Page title | page-specific | generic homepage title |

Three consequences:

1. **The "Find Staff" routing rule is broken on this build.** A button labelled Find Staff is going to
   `/ai-hire-now-form?type=quote`. Those are unrelated systems. Anyone landing on a job page and
   clicking Find Staff ends up in the wrong funnel.
2. **The utm_source that was supposed to be stripped is still live** on these pages, so it is still
   being served site-wide as far as crawlers are concerned.
3. **Clients, Locations and AI Recruitment are not crawlable from these pages.** Locations was fixed in
   the nav on the new build — but on the old build the nav item still has no `href`, so a crawler
   entering the site via a job page cannot reach the 354 location pages at all.

### Fix

Find out from the developer **why these routes render from a different build**. Likely causes: a
separate legacy route group not migrated, a stale CDN/edge cache on the `/job*` path prefix, or a
second deployment target. This needs diagnosing, not patching — patching the old footer just leaves two
builds in production.

Once identified, `/job-search` and `/job_details/*` must render from the same layout component as the
homepage, and `href` attributes must be real anchors on every nav item.

**Related, and worth asking directly:** the header button fix from 7 Sept (`rd1-footer-fixes-code.md`,
job 8) was reported as still not live. Two builds in production is a plausible explanation for fixes
appearing to revert. Worth raising as the same investigation, not a separate ticket.

---

# HIGH — /news is empty, and the page says otherwise

`/news` renders the heading "Our Latest Articles & Updates" with **zero articles beneath it.**

The intro copy on that page currently states that RD1 publishes weekly articles and reports covering
employment law, HMRC compliance (CIS, VAT, IR35), sourcing and hiring advice.

A prospective client who clicks News & Insights sees a page promising weekly publishing with nothing on
it. That is worse than not having the page. It reads as abandoned.

Meanwhile the Facebook page is actively posting hiring-guide content ("temporary vs permanent — the
right plan for demand, risk and speed") that is not on the website at all. The content exists. It is
being published to the one channel that generates no search authority and no indexable pages.

### Fix, in order

1. **Immediately:** either publish three or four articles, or soften the intro copy so it does not
   promise weekly output. Do not leave a live page claiming a publishing cadence it does not have.
2. **Then:** move the Facebook content onto `/news` first, and syndicate to Facebook and LinkedIn
   second. Every post should be a page on rd1.co.uk with `Article` schema and a link into the relevant
   sector or location page.
3. **Target client-side search intent, not candidate intent.** The commercially valuable queries are
   things hiring managers type: agency fee structures, IR35 status for contract workers, CIS
   verification for construction subcontractors, what to check before engaging a labour supplier,
   temp-to-perm conversion terms. That content wins links from trade press and procurement blogs, which
   is exactly the authority gap the audits keep identifying.
4. **Volume target:** two per month, consistently, beats twelve in one burst.

---

# HIGH — /clients converts poorly, and it is the page clients land on

Checked live. Issues, in order of commercial impact:

1. **The primary CTAs are not links.** "Find Staff" in the hero and "Find Staff Now" in the closing
   block render with no `href`. They are JS click handlers. That means no crawler follows them, and any
   user with a JS failure hits a dead button on the main client conversion page. Make them real
   `<a href="/find-staff">` anchors with the click handler attached on top.
2. **No client names, no logos, no case studies.** Every credibility signal on the page is a
   self-description. The three homepage testimonials carry a person's name and a sector but no company,
   which reads as fabricated whether or not it is. Fix: a client logo wall (with permission), and three
   short written case studies. The Coventry cleaners, Durham facilities manager and Birkenhead
   labourers placements are the obvious first three — real roles, real locations, real outcomes.
3. **"Transparent pricing structures" is claimed with no pricing page.** Either add a page explaining
   the fee model in principle (no rate figures — that stays the rule), or drop the claim.
4. **The Talent Acquisition Consultancy page is still not linked from /clients.** The full handoff
   exists (`rd1-talent-acquisition-consultancy-DEV-HANDOFF.md`), specced with schema and the dropdown
   markup. It has not shipped. That is a whole service line with no route to it.
5. **`og:title` is wrong.** `/clients`, `/news` and `/job-search` all set `og:title` to the generic
   homepage title instead of their own. Every LinkedIn or WhatsApp share of the clients page shows the
   homepage title. One-line fix, meaningful for social sharing.

---

# MEDIUM — Off-site citations are wrong and contradict each other

Still no Google Business Profile. Confirmed again this morning — Facebook, Companies House, LinkedIn,
Indeed and ProvenExpert surface, no GBP or Maps result.

Two wrong citations found live:

- **ProvenExpert** lists the address as **"Pinnacle House, Mill Road, Industrial Estate, Linlithgow."**
  Wrong building name, and it is a public, indexed profile. It also shows "recommendation rate: 0%",
  which is a display artefact of an unclaimed profile but reads badly to anyone who finds it. Claim it
  and correct the address to the Herkimer House string.
- **Indeed** company profile claims **"offices in London, Leeds, Aberdeen and Central Scotland."** The
  website says nothing of the kind. A procurement contact who cross-checks will find two different
  descriptions of the business. Update or remove.

Inconsistent NAP across citations is one of the strongest negative local-ranking signals there is, and
it is also a trust problem in front of a buyer.

### Fix

1. Correct ProvenExpert and Indeed to the canonical NAP string first.
2. **Then** claim the GBP. Order matters — the Linlithgow address versus Falkirk phone number
   discrepancy has to be settled before verification, because changing the address afterwards triggers
   re-verification and restarts the clock.
3. Then work the citation list: Constructionline supplier directory, Cyber Essentials (IASME) directory,
   the CQS/ISO 9001 certificate register, and the REC member directory. Four authoritative,
   industry-relevant links that competitors cannot easily get, all already earned and all currently
   unclaimed as link assets.

---

# Still open, unchanged, no new information

- **Organization / LocalBusiness schema.** Could not verify this session — JSON-LD is stripped by the
  content extractor and direct curl to rd1.co.uk is blocked from here. Run three URLs through Google's
  Rich Results Test to get a definitive answer rather than another inconclusive check.
- **Internal linking between nearby location pages.** Still the highest-leverage unshipped SEO item
  after the two criticals above. Aberdeen names Peterhead, Inverurie, Stonehaven and Ellon in its own
  body copy without linking to any of them.
- **Equality policy duplicate.** 301 the non-canonical slug, repoint the hub link.
- **Core Web Vitals.** Still unmeasured. Pull it from GSC rather than PageSpeed Insights.
- **recruitmentdirect.info.** Open since August.

---

# What to do first

Ordered by effect on new client acquisition per unit of developer time.

| # | Action | Owner | Why it is here |
|---|---|---|---|
| 1 | Server-render job pages + `JobPosting` schema + URL fix | Dev | Removes hundreds of thin pages dragging the domain down, and unlocks Google Jobs |
| 2 | Diagnose the two-builds problem | Dev | Broken CTA routing, uncrawlable nav, and probably why shipped fixes look reverted |
| 3 | Real `href` on /clients CTAs + `og:title` fix | Dev | Small change, main client conversion page |
| 4 | Fix or soften /news, then publish two client-intent articles a month | Steven | Only lever that builds the authority the audits keep naming |
| 5 | Correct ProvenExpert and Indeed, then claim GBP | Steven | Trust + local pack, in the right order |
| 6 | Three case studies with named clients | Steven | The single biggest missing conversion asset on the site |
| 7 | Ship the Talent Acquisition Consultancy page | Dev | Fully specced, ready, an entire service line with no route to it |
| 8 | Location-to-location internal links | Dev | Distributes authority to the 354 pages |

Items 1 and 2 are likely the same investigation. Start there.

---

# Developer acceptance checklist

- [ ] View-source on three job URLs shows full job content in the initial HTML.
- [ ] Rich Results Test passes `JobPosting` on those three URLs with zero errors.
- [ ] Three job URLs have three distinct titles and self-referencing canonicals.
- [ ] `/job_details/*` 301s to `/jobs/*`; no `%C2%A3` in any live URL.
- [ ] Filled jobs return 404/410 or carry a past `validThrough`.
- [ ] `/job-search` renders the same five-column footer as the homepage.
- [ ] No `utm_source` parameter on any LinkedIn link anywhere on the site.
- [ ] Nav Clients, Locations and AI Recruitment are real anchors with `href` on every route.
- [ ] Every button labelled "Find Staff" resolves to `/find-staff` — checked on homepage,
      /clients, /job-search and a job detail page.
- [ ] `/clients` hero and closing CTAs are `<a href="/find-staff">`.
- [ ] `og:title` on /clients, /news and /job-search matches each page's own `<title>`.
- [ ] Checked at 375px, 768px and 1440px.
