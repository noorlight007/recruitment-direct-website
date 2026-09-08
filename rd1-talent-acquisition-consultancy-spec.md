# RD1 Talent Acquisition Consultancy section (SEO and AI search spec)

Prepared for Steven Peddie, Recruitment Direct UK Ltd. New content section for rd1.co.uk, requested 7 September 2026: a page and dropdown entry aimed at large corporations who are moving away from traditional contingency recruitment fees and instead asking for a talent acquisition consultancy or partnership, engaged on an hourly, half day and full day basis. Not a full outsourced HR or RPO service. UK wide, not region limited.

**Status as of 7 September 2026:** APUC has been removed as a proof point, per instruction. Scope confirmed as UK wide. Copy avoids "rate" language for RDUK's own pricing and avoids em dashes and unnecessary hyphens throughout, per Steven's instruction, so the page reads as a professional consultancy offering. Colours and fonts have been matched exactly to the live rd1.co.uk hero (see Section 5a). The service list has been broadened beyond benchmarking (see Section 6), with one open item: what else the APUC tender required, so the list can be broadened further.

---

## 1. What's actually changed in the market

Large corporates increasingly don't want a contingency recruiter working on a placement fee, and they don't want, or can't justify, a full RPO or managed service contract either. What they're asking for instead is a named consultancy engagement: a recruiter or small team embedded part time, engaged like any other consultancy, by the hour, the half day, or the full day. Buyers and procurement teams describe this several different ways, and the page needs to answer to all of them, not just one:

- Talent acquisition consultancy
- Talent acquisition partner or partnership
- Embedded or fractional talent acquisition support
- Interim talent acquisition or recruitment support
- Recruitment consultancy on an hourly or day rate basis
- RPO alternative or flexible RPO, without the full RPO commitment or price tag
- Recruitment and hiring benchmarking, market rate advisory

This is the new recruitment word. There isn't one single term corporates have converged on yet, which is why the page names all of them rather than picking one and hoping it matches the search. This synonym list is now written directly into the page copy (the "whatever your team calls it" paragraph right under the hero) rather than only living in this spec.

## 2. Positioning: what this is, and what it explicitly is not

**It is:** flexible, paid by time talent acquisition support, available UK wide, for organisations that want a recruitment specialist's hands on help: sourcing, screening, market rate benchmarking, hiring process advice, without committing to a placement fee model or a full outsourced function.

**It is not:** full HR outsourcing. No employee relations, disciplinary or grievance handling, payroll, HR policy ownership, or any function beyond talent acquisition. This is stated plainly on the page, not left implied. It's the difference between a client short listing RDUK correctly and a client contacting RDUK for a service it doesn't provide.

**Positioning statement** (the sentence AI search engines are most likely to lift verbatim, so it stays exact and self contained):

> Recruitment Direct UK provides UK wide talent acquisition consultancy on an hourly, half day or full day basis. Hands on hiring support and market benchmarking for organisations that want a recruitment partner, not a full HR outsourcing contract.

## 3. Proof point: accreditations

With APUC removed, the page's credibility rests on RDUK's existing, verifiable accreditations, the same ones already used elsewhere on the site: REC Corporate Member, ISO 9001:2015 certification, Constructionline Gold, Cyber Essentials. Framed as independent points of assurance that RDUK's compliance and quality standards have already been through external scrutiny. That's the reassurance a procurement or HR director wants before engaging a consultancy they haven't used before. No claim beyond what these accreditations actually cover.

## 4. SEO and AI search keyword targets

Two audiences read this page differently: a person typing into Google, and an LLM answering a question like "who offers talent acquisition consultancy in the UK" or "recruitment agency that works on a day rate basis." The page needs to satisfy both, with natural search intent phrasing for Google and clear, quotable, standalone statements of fact for AI answer engines: short declarative sentences, the company named explicitly rather than "we," and answers that don't need the rest of the page to make sense.

**Primary targets, all now present in the page copy:**
- talent acquisition consultancy UK
- talent acquisition partner
- recruitment consultancy day rate
- hire a recruitment consultant hourly rate
- flexible talent acquisition support
- interim talent acquisition services
- recruitment benchmarking service
- embedded talent acquisition
- fractional talent acquisition
- RPO alternative

**Secondary and long tail:**
- talent acquisition support without full RPO
- market rate benchmarking recruitment agency
- UK wide talent acquisition consultancy
- talent pipelining
- hiring process design

**AI search technique:** the page opens with a single self contained paragraph stating who RDUK is, what this service is, how it's engaged, and what it excludes, before any hero imagery or navigation content, because AI crawlers and answer engines weight the first substantive text block heavily and often quote it directly. Immediately under that sits the "whatever your team calls it" paragraph naming the synonym terms, so keyword coverage doesn't rely on a single phrase.

## 5. Placement

**URL:** `/talent-acquisition-consultancy`
**Placement, confirmed 7 September 2026 after checking the live site:** the "Clients" nav item already opens a dropdown menu (Find Staff, Temporary Staff, Contract Staff, Permanent Staff, Why Choose Us, Open Credit Account). "Talent Acquisition Consultancy" is added as a new item after Permanent Staff, before the Why Choose Us and Open Credit Account utility links, matching the existing icon, title and subtitle row style. See `rd1-clients-dropdown-mockup.png` for a rendered preview and `rd1-talent-acquisition-consultancy-DEV-HANDOFF.md`, Section 2, for the markup.

An optional secondary card on the `/clients` page body itself is worth adding too, for anyone who lands there without opening the dropdown. Copy is in the DEV-HANDOFF doc.

The full copy, keyword targeting and FAQ schema live on the dedicated URL either way. A standalone page can fully target its own topic, which ranks and gets cited by AI answer engines far more reliably than a paragraph sharing a page whose main audience, an SME hiring manager wanting staff fast, has different search intent from a procurement or HR director scoping a consultancy engagement.

The full, current page copy is built out in `rd1-talent-acquisition-consultancy.html`. That file is the source of truth for exact wording; this doc carries the rationale.

**Title tag:** Talent Acquisition Consultancy | Hourly, Half Day and Full Day Engagements | Recruitment Direct UK
**Meta description:** Flexible, UK wide talent acquisition consultancy from Recruitment Direct UK. Hourly, half day and full day engagements covering sourcing, screening and benchmarking. Not full HR outsourcing.

## 5a. Colours and fonts, matched to the live hero

Checked directly against the live rd1.co.uk homepage on 7 September 2026 using the page's own computed styles, not guessed from an earlier mockup:

| Element | Live value |
|---|---|
| H1 colour | `#0b0f19` |
| Body paragraph colour | `#374151` |
| Heading and button font | Poppins (Inter fallback) |
| Body font | Inter |
| Primary button fill | `linear-gradient(135deg, #8a6417 0%, #c89528 24%, #f6d77d 50%, #c28b20 74%, #6f4b10 100%)` |
| Primary button border | 2px solid `#f7d98a` |
| Primary button text | `#071424`, weight 800, all caps |
| Secondary button | white or transparent fill, 2px solid `#c89528` border, dark ink text |
| Button corner radius | 8px |
| Hero and content section background | white (`#ffffff`); the dark navy tone visible around the page edges belongs to the outer body background, not the content sections |

This page's CSS has been rebuilt to these exact values, replacing the earlier approximate palette (flat gold `#d3a94a`, Inter only) used in the first draft.

## 6. What the consultancy covers

The page previously led with benchmarking as if it were the whole service. It now lists a fuller set of service areas under "What this covers": sourcing and candidate search, screening and shortlisting, market and salary benchmarking, hiring process design and review, talent pipelining, interview and assessment day support, and job description and employer branding input.

**Open question for Steven:** the APUC tender had other job requirements beyond benchmarking that should inform this list further. This project doesn't have that tender document, so the specifics are needed directly: what other service areas or job categories did APUC's requirements cover that aren't yet reflected above? Once confirmed, add them to the "What this covers" list in the HTML file and this doc.

## 7. Structured data

The September 2026 audit already flagged that rd1.co.uk has no Organization, LocalBusiness or JobPosting JSON-LD schema anywhere on the site. This new page is a good place to also close part of that gap, since it directly helps AI search visibility:

- **Service** schema for the page itself (serviceType "Talent Acquisition Consultancy," provider Organization referencing RDUK, areaServed United Kingdom). No price or offer schema.
- **FAQPage** schema wrapping the FAQ block above verbatim, the single highest leverage item for showing up in AI Overviews and ChatGPT style answers.
- **BreadcrumbList**: Home, Clients, Talent Acquisition Consultancy.

All three are already built into `rd1-talent-acquisition-consultancy.html`.

## 8. Open questions for Steven

1. What else did the APUC tender require, beyond benchmarking, that should be added to the "What this covers" service list (Section 6)?
2. Should the enquiry route be the existing AI Hire Now flow, or a separate, simpler consultancy enquiry form? The existing flow is built around role, quantity and location for staffing orders, which doesn't fit a "we want two days a week of your time for six weeks" enquiry well.
