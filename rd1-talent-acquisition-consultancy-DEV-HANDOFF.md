# RD1 Talent Acquisition Consultancy: Developer Handoff (Sept 2026)

Companion to `rd1-talent-acquisition-consultancy-spec.md` (positioning and copy rationale) and the working file `rd1-talent-acquisition-consultancy.html` (the page itself, ready to lift). This doc covers what to ship, where, and how to check it, in the same format as the footer and hero handoffs already in this project.

## 1. What to ship

Two things, from `rd1-talent-acquisition-consultancy.html`:

- Everything in `<head>` above the `<style>` block: title, meta description, canonical, Open Graph tags, and the three `<script type="application/ld+json">` blocks (Service, FAQPage, BreadcrumbList) into the new page's `<head>`.
- Everything between `<!-- PAGE MARKUP STARTS -->` and `<!-- PAGE MARKUP ENDS -->` into the site template at the new URL.

Delete the preview only chrome (`.preview-note`, the mock `<header>`, the mock `<footer>`). The real site header, footer and nav wrap around this content as normal. Only the CSS under `:root{...}` through the media query at the bottom is real and should move into the site's stylesheet, or stay scoped since every rule is prefixed `.rd-tac` and nothing leaks into other pages.

**New page URL:** `/talent-acquisition-consultancy`

## 2. Add it to the live "Clients" dropdown menu

The site was checked directly and the "Clients" nav item already opens a dropdown menu, not a flat link. Live today, in this exact order:

1. Find Staff: "Submit staffing requirements 24/7"
2. Temporary Staff: "Flexible short term staffing"
3. Contract Staff: "Project based professionals"
4. Permanent Staff: "Long term hires"
5. Why Choose Us: "See what makes our recruitment approach different"
6. Open Credit Account: "Apply for a credit account"

This is a better home for the new offering than a card further down the `/clients` page. It sits directly alongside Temporary, Contract and Permanent Staff, exactly where someone comparing engagement types is already looking, with zero new nav clutter since the dropdown already exists.

**Add as a new 5th item, after Permanent Staff and before the Why Choose Us / Open Credit Account utility links:**

```html
<div class="rd-nav-dropdown__item">
  <div class="rd-nav-dropdown__icon"><!-- reuse the existing icon component/style --></div>
  <div>
    <div class="rd-nav-dropdown__title">Talent Acquisition Consultancy</div>
    <div class="rd-nav-dropdown__sub">Hourly, half day and full day consultancy support</div>
  </div>
</div>
```

Link the item to `/talent-acquisition-consultancy`. Use the exact existing dropdown item markup and classes from the live template rather than this generic version. This is illustrative only; whoever owns the header component should drop it in using the real class names and icon component so it inherits the existing hover and focus states automatically. A rendered mockup (`rd1-clients-dropdown-mockup.png`) shows it inserted in position, styled to match the other rows.

**Optional secondary mention:** a short card on the `/clients` page body itself is still worth adding for anyone who lands there without using the dropdown, but the dropdown item above is the primary, higher visibility placement, not a replacement for it.

```html
<div class="rd-clients__card">
  <h3>Need a talent acquisition partner, not a full HR contract?</h3>
  <p>Hourly, half day and full day consultancy engagements for hiring, sourcing and benchmarking, without signing up to full HR outsourcing. UK wide.</p>
  <a href="/talent-acquisition-consultancy">Learn more &rarr;</a>
</div>
```

Wrap it in whichever card class `/clients` already uses for visual consistency. This markup is unstyled on purpose so it doesn't fight the page's existing component.

## 3. Internal links used on the page, verify before deploy

Confirmed 200 in the September 2026 SEO audit (`rd1-seo-audit-2026-09.md`) and the footer link verification pass (`rd1-footer-DEV-HANDOFF.md`, section 6):

| Link on this page | Target | Status |
|---|---|---|
| Clients | `/clients` | Confirmed 200 |
| Find Staff | `/find-staff` | Confirmed 200 (canonical survivor over `/hire-staff`) |
| AI Recruitment | `/ai-recruitment` | Confirmed 200 |
| AI Hire Now (main CTA, x3) | `/ai-hire-now` | Confirmed 200 |
| Accreditations | `/accreditations` | Confirmed 200 |
| Security | `/security` | Confirmed 200 |
| Policies and Compliance hub | `/policies-and-compliance` | Confirmed 200 |
| Contact | `/contact` | Confirmed 200 |
| Locations | `/locations` | Confirmed 200 |

**Not yet confirmed, check before deploy:** `/sectors` is used twice on this page (the "Who this is for" section and the related links strip) but wasn't in the confirmed link list from the audits above. Confirm the correct URL for the sectors index or hub before this ships, and swap both instances if the real path differs.

This page deliberately links out to several different site sections rather than sitting as an island. That addresses the same "poor internal linking" finding the audits keep raising, applied to a new page from day one instead of retrofitted later.

## 4. Structured data: what's in it and why

Three JSON-LD blocks, all already in the file's `<head>`:

- **Service.** Names the offering, the provider (Recruitment Direct UK Ltd) and the audience, with `areaServed` set to the United Kingdom. No price or offer schema is included, deliberately, matching the site wide rule of never publishing a rate figure (the same rule already in the AI Steve chatbot script). Don't add an `"offers"` block with a price without checking with Steven first.
- **FAQPage.** The highest leverage piece for AI search visibility (ChatGPT, Google AI Overviews). **The text inside this schema block must match the visible `<details>` copy on the page exactly, word for word.** If the visible FAQ copy is edited later, this schema block has to be edited to match, or Google can discount or ignore it. There is no APUC or framework specific question. It has been replaced with a general accreditation question and a UK wide coverage question.
- **BreadcrumbList.** Home, Clients, Talent Acquisition Consultancy, matching the actual placement decision: dropdown item on Clients, dedicated page underneath.

This also chips away at the audit's long standing finding that rd1.co.uk has **no Organization, LocalBusiness or JobPosting schema anywhere on the site** (`rd1-seo-audit-2026-09.md`). It doesn't fix that site wide gap, but it means this new page isn't adding to the problem, and the `Organization` reference in the Service block can be swapped for a shared `@id` reference once site wide Organization schema exists, rather than left standalone.

## 5. Design notes

**Colours and fonts are pulled directly from the live rd1.co.uk hero**, checked via the page's own computed styles on 7 September 2026, not from the earlier Find Staff mockup work. Two corrections from the first draft of this page:

- **Fonts.** The live site uses Poppins for headings and buttons (Inter as fallback) and Inter for body copy, not Inter throughout. This page now matches: Poppins on the H1, H2, H3 and both CTA buttons, Inter on paragraph text.
- **Colours**, taken from the live hero's computed styles:
  - Heading colour `#0b0f19` (the live H1's exact colour).
  - Body paragraph colour `#374151` (the live paragraph colour, a softer grey than pure ink).
  - Primary CTA button: the live "AI Hire Now" button uses a metallic gold gradient, not a flat fill: `linear-gradient(135deg, #8a6417 0%, #c89528 24%, #f6d77d 50%, #c28b20 74%, #6f4b10 100%)`, with a 2px solid `#f7d98a` border and dark navy text `#071424`, weight 800, all caps. This page's primary button now uses the same gradient, border and text colour.
  - Secondary button: white or transparent fill, 2px solid `#c89528` border, dark ink text, matching the live "Job Search" style button.
  - Corner radius: 8px on both buttons, matching the live hero buttons (the fully rounded pill shape belongs only to the header nav's own "Find Staff" button, which isn't part of this page).

Full detail and the raw values pulled from the live DOM are in `rd1-talent-acquisition-consultancy-spec.md`, section 5a.

- FAQ uses native `<details>/<summary>`. No JS accordion library is needed, and critically the answer text is present in the server rendered HTML even when collapsed, so it's crawlable by Googlebot and AI crawlers without executing JavaScript. Don't rebuild this as a JS only accordion that hides the text from the DOM until clicked.
- The three engagement cards (Hourly, Half Day, Full Day) intentionally show no numbers. They describe when each applies, not how much. Copy avoids the word "rate" in reference to RDUK's own pricing. It's still used where it genuinely means market rate benchmarking, a service RDUK offers.
- **Style note:** copy across this page and its schema avoids em dashes and unnecessary hyphenation, per Steven's instruction (7 September 2026). Keep future edits to this page in the same style: short sentences joined with periods or commas rather than dashes.

## 6. What the consultancy actually covers

Per Steven's question on 7 September, the page now lists service areas beyond benchmarking: sourcing and candidate search, screening and shortlisting, hiring process design and review, talent pipelining, interview and assessment day support, and job description and employer branding input. See Section 6 of the spec doc for the open question on whether further areas should be added based on the scope of work RDUK covers through the APUC tender, since that document isn't available in this project and Steven needs to confirm what else it required.

## 7. QA checklist before this goes live

1. Validate both JSON-LD blocks in [Google's Rich Results Test](https://search.google.com/test/rich-results). Confirm FAQPage is eligible for rich results and there are no schema errors.
2. Confirm the FAQPage schema text matches the visible `<details>` text exactly (see Section 4). Repeat this check after any future copy edit to this page.
3. Run the page through a contrast checker (WebAIM or Lighthouse), the same QA step already used for the homepage white background change, since this page uses the same palette.
4. Confirm `/talent-acquisition-consultancy` is added to `sitemap.xml` and is not `noindex`.
5. Confirm the `/clients` card links correctly to `/talent-acquisition-consultancy` and renders inside whatever card component `/clients` already uses.
6. Mobile check: the three engagement cards stack to one column under 720px. Confirm this looks right on an actual device, not just a resized browser window.
7. Re-check the `/sectors` link target flagged in Section 3.

## 8. Still open

1. What else, beyond benchmarking, should the service list in Section 6 cover? Steven flagged that the APUC tender had other job requirements that should broaden this list; specifics needed.
2. Whether the enquiry route should stay `/ai-hire-now` (used throughout this page) or move to a separate consultancy specific enquiry form once one exists.
3. No rate figures anywhere on this page or its schema remains the confirmed approach. Flag immediately if that changes.
