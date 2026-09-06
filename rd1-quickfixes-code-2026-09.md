# rd1.co.uk — Quick-fix code

The three small items from the original footer/link audit that are cheap
to ship alongside the new policies hub.

## 1. Full footer redesign — all 5 columns, balanced

Not just the Policies column — here's the whole footer rebalanced.
Current counts were Company 8 / AI Platform 6 / Locations 6 / Policies 8 /
Connect 3, which is why it read as lopsided even before you trim
anything. New counts: 6 / 6 / 6 / 5 / 4 (+ social icons) — much closer,
and nothing invented to pad a column out artificially.

```tsx
<footer className="footer">
  <div className="footer-grid">
    {/* 1. Company — trimmed from 8 to 6; News & Insights and Contact Us
           move to Get in Touch below so this column isn't still the odd
           one out */}
    <div>
      <h3 className="footer-heading">Company</h3>
      <ul>
        <li><a href="/about-us">About Us</a></li>
        <li><a href="/services">Services</a></li>
        <li><a href="/why-rduk">Why RDUK</a></li>
        <li><a href="/our-process">Our Process</a></li>
        <li><a href="/clients">Clients</a></li>
        <li><a href="/job-search">Job Search</a></li>
      </ul>
    </div>

    {/* 2. AI Platform — unchanged. Security stays (see note below) and
           now also cross-links from the new Policies hub, so it's doing
           double duty as a trust signal rather than sitting in isolation */}
    <div>
      <h3 className="footer-heading">AI Platform</h3>
      <ul>
        <li><a href="/ai-hire-now">AI Hire Now</a></li>
        <li><a href="/ai-recruitment">AI Recruitment</a></li>
        <li><a href="/ai-screening-call">AI Screening Call</a></li>
        <li><a href="/integrations">Integrations</a></li>
        <li><a href="/security">Security</a></li>
        <li><a href="/accreditations">Accreditations</a></li>
      </ul>
    </div>

    {/* 3. Locations — unchanged, it's a genuine list of 6 real markets */}
    <div>
      <h3 className="footer-heading">Locations</h3>
      <ul>
        <li><a href="/locations/scotland">Scotland</a></li>
        <li><a href="/locations/england">England</a></li>
        <li><a href="/locations/wales">Wales</a></li>
        <li><a href="/locations/northern-ireland">Northern Ireland</a></li>
        <li><a href="/locations/republic-of-ireland">Republic of Ireland</a></li>
        <li><a href="/locations">All Locations</a></li>
      </ul>
    </div>

    {/* 4. Policies & Compliance — the general-visitor set, plus the hub.
           Complaints Policy kept here (not just on the hub) since it's
           commonly looked for directly */}
    <div>
      <h3 className="footer-heading">Policies &amp; Compliance</h3>
      <ul>
        <li><a href="/privacy-policy">Privacy Policy</a></li>
        <li><a href="/terms-of-use">Terms of Use</a></li>
        <li><a href="/cookie-policy">Cookie Policy</a></li>
        <li><a href="/complaints-policy">Complaints Policy</a></li>
        <li>
          <a href="/policies-and-compliance" className="font-medium">
            All Policies &amp; Compliance →
          </a>
        </li>
      </ul>
    </div>

    {/* 5. Get in Touch — replaces the old 3-link "Connect" column.
           Find Staff added per your note; Contact Us and News & Insights
           moved here from Company to help balance it out */}
    <div>
      <h3 className="footer-heading">Get in Touch</h3>
      <ul>
        <li><a href="/contact-us">Contact Us</a></li>
        <li><a href="/news">News &amp; Insights</a></li>
        <li><a href="/ai-hire-now-form?type=quote">Find Staff</a></li>
        <li><a href="/try-ai-call-demo">Book an AI Call Demo</a></li>
      </ul>
      <div className="footer-social">
        {/* social icons */}
      </div>
    </div>
  </div>
</footer>
```

Notes on the decisions baked into this:

- **Find Staff** is now a proper footer link (you asked for this), and it
  points straight at the working `/ai-hire-now-form?type=quote` URL — not
  the broken `/find-staff` page — so it doesn't reintroduce the bug from
  item 2 below.
- **Get in Touch only has 4 links.** I didn't invent a 5th or 6th to force
  it level with the other columns — if you've got a real one in mind (a
  candidate portal, a careers page, live chat), tell me and I'll add it
  for real balance instead of padding.
- **Security stays.** You asked whether you even need it — my honest
  take: for a company positioning toward public-sector/framework work, a
  dedicated page on how call data and candidate records are secured is a
  genuine trust signal alongside your Cyber Essentials badge, not
  filler. Rather than cut it, I've added it as a cross-link from the new
  Policies hub too (Data Protection & Privacy category), so it works
  from both directions instead of sitting alone in the AI Platform
  column. If you still want it gone after that, it's a one-line removal.
- Every link above (Company, AI Platform, Locations) is one the original
  link audit already confirmed returns 200 OK — the redesign is about
  layout/grouping, not fixing brokenness, except Find Staff (below).

## 2. Repoint the two broken "Find Staff" buttons

Two of the four "Find Staff" links go to `/find-staff`, whose enquiry
form never mounts. Repoint those two to the link that already works:

```diff
- <a href="/find-staff">Find Staff</a>
+ <a href="/ai-hire-now-form?type=quote">Find Staff</a>
```

This is the today-fix. Separately, your dev still needs to debug why
`/find-staff`'s form component never mounts (no console error, no network
request fires) — that's a real bug on that page, not fixed by the
redirect.

## 3. `/sectors` — fix inherited OG tags + broken hero image

`/sectors` currently inherits the homepage's `og:title` / `og:description`
and has zero JSON-LD, while its own `<title>` and meta description are
already correct. Give it its own OG block:

```tsx
export const metadata: Metadata = {
  title: "Sectors We Recruit For | Recruitment Direct UK",
  description: "…", // keep your existing, already-correct meta description
  openGraph: {
    title: "Sectors We Recruit For | Recruitment Direct UK",
    description: "…", // sectors-specific, not the homepage's
    url: "https://www.rd1.co.uk/sectors",
    type: "website",
  },
};
```

And fix the hero image 404 — `assets/hero-multisector.jpg` doesn't
resolve. Either the file needs re-uploading to that path, or the
component references the wrong path; check both against whatever asset
pipeline the site uses (public/ folder vs. a CMS/CDN reference).

Worth having your dev sweep the other inner pages for the same
OG-inheritance and missing-schema pattern once this one's fixed — `/sectors`
was the only page spot-checked, not the only page affected.
