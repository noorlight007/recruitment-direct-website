# RD1 — Landing page white background (first 3 sections) + button removals (Sept 2026)

**Scope update:** this extends the earlier version of this handoff, which covered the hero section only. Per
the latest instruction, the white background now covers the first 3 sections of the homepage, not just the hero
— the reasoning being the site reads too dark overall. Everything else in this doc (button colours untouched, the
three button/video removals) is unchanged from before; nothing here duplicates the footer rebuild doc
(`rd1-footer-DEV-HANDOFF.md`) or the AI Applicant Screening board work (separate doc, see
`rd1-24-7-live-call-v2-DEV-HANDOFF.md`).

**Not in scope, flagged separately:** the H1 heading text/copy — the client has instructed the dev directly on
that change, so nothing in this doc touches heading wording, only backgrounds and colours around it.

---

## 1. First 3 landing page sections — white background, buttons and the map unchanged

The three sections, in order, based on the current live homepage:

1. **Hero** — "Need Staff?" / "Trusted UK Recruitment Agency Since 2006", with the AI Hire Now / Job Search
   buttons.
2. **Trust indicators strip** — the row of short badges (Framework Approved, UK Wide Coverage, 100% Compliance,
   Multi-Sector Expertise).
3. **Sectors We Support** — the "Sectors We Support" heading and the grid of 10 recruitment category links.

Set all three sections' background to white:

```css
.hero, .trust-indicators, .sectors /* substitute the actual section selectors from the live template */ {
  background: #ffffff;
}
```

As with the hero-only version of this change, this will expose any text in these sections currently styled
light/white-on-dark. Audit every heading, body line and badge label across all three sections and swap light
text colours to a dark ink for contrast, e.g.:

```css
.hero h1, .hero p, .trust-indicators .badge, .sectors h2, .sectors a {
  color: #0b0f19; /* or the existing site-wide dark body-text colour */
}
```

**Leave button colours exactly as they are** — AI Hire Now, Job Search, and any CTA styling inside the Sectors
section. A button's own background/text colour combination still works fine sitting on a white page background,
since the contrast is against the button itself, not the page.

**Leave the coverage/locations map exactly as it is**, wherever it appears within these three sections — its own
colours are not part of this change, only the section background and surrounding text around it. If the map sits
on its own coloured panel or card within one of these sections, that panel can stay as-is; only the section's
outer background should go white.

Quick QA once deployed: run all three sections through a contrast checker (WebAIM or the Lighthouse accessibility
audit) — white-on-white is the most common miss when a dark-background section flips to light, and it's easy to
catch one section and miss the next two.

---

## 2. Delete — "WATCH AI SCREENING CALL" button + video

Location: *Our Recruitment Process* section on the homepage — further down the page, outside the first 3
sections above, so this isn't affected by the background change.

Remove:
- the button itself
- the `<video>` / `<iframe>` embed it opens
- any modal or player script that only exists to serve that button (check it isn't shared with something else
  on the page before deleting the script wholesale)

No replacement needed in that slot — do not insert another CTA there. If the section looks empty afterwards,
that's a layout question for whoever owns the template, not something to patch by adding a different demo. (If a
replacement for that slot is wanted later, the AI Applicant Screening board is the natural candidate — see
`rd1-24-7-live-call-v2-DEV-HANDOFF.md` — but that's a separate decision, not part of this deletion.)

---

## 3. Delete — the two "AI Call Demo" buttons in the footer

Both currently point at `/assets/rd1-24-7-live-call.html` — a raw file, not a page, which was already flagged
as wrong in the last footer handoff.

1. **"Book an AI Call Demo"** — in the Get in Touch column.
2. **"AI Call Demo →"** — the standalone panel/widget sitting at the bottom of the footer, separate from the
   column links.

Delete both entirely. Do not add a replacement link in either slot — per instruction, no duplication. If the
footer's Get in Touch column ends up with one fewer link than the others, that's expected until/unless the fuller
footer rebuild in `rd1-footer-DEV-HANDOFF.md` is picked up — this pass isn't rebalancing columns.

**Do not delete `/ai-screening-call-statement`** itself — that's the compliance page, not the promo button, and
it should stay live regardless (already flagged in the earlier audit as needing a home in the policies hub).

---

## 4. What this deliberately does not cover

- The H1 heading text — client has briefed the dev on this directly.
- The 5-column footer rebuild (columns, symmetry, new Ask AI Steve pill) — separate doc, separate decision.
- The `/ai-recruitment` page's own "Book an AI Call Demo" button — same fix applies there if/when that page gets
  the same pass, but wasn't named in this request so it's left alone for now. Flagging it so it doesn't get
  missed: it still points at the same raw asset file.
- Sections 4 onward on the homepage (Solutions, Process, Why Choose Us, Team, Testimonials, CTA, Compliance) —
  only the first 3 sections are going white in this pass.
- Embedding the AI Applicant Call board anywhere on the site — see `rd1-24-7-live-call-v2-DEV-HANDOFF.md`; that's
  a separate embed decision.
