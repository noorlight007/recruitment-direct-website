# RD1 homepage hero — full fix (Sept 2026)

Covers three faults, all on the homepage hero, all confirmed against the live site:

1. The board is clipped by a fixed-height iframe — desktop shows 2 of 6 calls, mobile shows none.
2. The board's stat tiles stack 2×2 in the hero column on laptops, eating the height the feed needed.
3. "Need Staff?" is still the H1, and on mobile the hero text and CTAs don't appear above the board.

Supersedes `rd1-24-7-live-call-v2-DEV-HANDOFF.md` for anything about the embed. The board's screening logic,
percentages and copy are otherwise unchanged.

---

## Files

| File | Where it goes |
|---|---|
| `assets/rd1-24-7-live-call-v3.html` | Host at `/assets/rd1-24-7-live-call-v3.html` |
| `hero-embed-snippet.html` | Markup, CSS and script to merge into the hero component |

The v3 board is a straight replacement for v2 — self-contained, no build step, no external requests, no CDN
fonts. Nothing else on the site needs to change to swap it in.

---

## 1. What changed inside the board

**It now reports its own height to the parent page.** The bottom of the file posts a `rd1Board` message
whenever its content height changes (`ResizeObserver`, plus `load`, `resize` and a 1-second safety net). The
parent listens and resizes the iframe. This is the actual fix for the clipping — a fixed pixel height on an
iframe works at exactly one viewport and silently cuts everything below it at every other one.

**Stat tiles go 4-across at 620px and up, 2×2 below that.** The board's media queries read the *iframe's* width,
not the screen's, so at ~700px in the hero column it was dropping into its phone layout on a laptop. 620px is
the point where four tiles still hold their numerals and labels.

**Rows no longer move.** There are six permanent rows; each runs its own call and its badge changes in place as
that call progresses. Nothing shifts position, so there's no bounce, and several rows show different stages at
once. When a call resolves it holds for about 1.5s, crossfades to a new applicant in the same row, and restarts.

**No flashing anywhere.** All motion is `transform` and `opacity` — the ticker drifts, the badge crossfades, and
a 2px bar fills toward each row's next stage change. There are no repeated luminance changes, so it's clear of
the WCAG three-flashes-per-second threshold. `prefers-reduced-motion` disables the ticker and the progress bars
entirely.

**Screening logic, unchanged from the signed-off version.** 55% of screenings reach Docs requested; 59% of those
reach Docs received; 81.5% of those are Submitted to client. Counters seed at 139 / 78 / 44 / 34 so the board
never opens at zero. All four are tunable at the top of the script (`P_REQ`, `P_REC`, `P_SUB`, `SEED`, `DWELL`).

**Also set:** `<meta name="robots" content="noindex">` on the asset, and `overflow:hidden` on `html, body` so the
document height is the content height.

---

## 2. Embedding it

Use `hero-embed-snippet.html`. Three parts:

- **Markup** — the iframe with `id="rd1-board"`, `scrolling="no"` and `loading="lazy"`.
- **Script** — the `message` listener that resizes the iframe. It checks `event.source` against the iframe's own
  `contentWindow`, so no other frame on the page can drive its height.
- **CSS** — an inline starting height of 820px plus per-breakpoint fallbacks. These exist so there's no layout
  jump before the first height message lands, and so the board is still usable if JS fails. Once the handshake
  runs, the measured height wins.

Do not put a fixed `height` or `min-height` back on this iframe. That's the bug this replaces.

---

## 3. Hero changes

**Delete "Need Staff?" and promote the heading.** Live now:

```html
<h1>Need Staff?</h1>
<h2>UK Recruitment Agency Supplying Temporary, Contract &amp; Permanent Staff Nationwide</h2>
```

Target: one H1, carrying the keyword heading, styled exactly as the H2 renders today so nothing changes
visually except the deleted line. Deleting the H1 without promoting the H2 leaves the homepage with no H1 at
all.

**Fix the mobile stacking order.** On phones the page currently runs header → board → trust strip, with no
heading and no CTAs above the fold. Required order: H1, subhead, AI Hire Now (+ caption), Job Search, board,
trust strip. The snippet's `@media (max-width: 900px)` block sets this with explicit `order` values — check in
devtools whether the text column is present but ordered after the board, or collapsing to zero height, since the
two have different causes.

**Symmetry.** Removing "Need Staff?" takes roughly 90–110px off the left column, which brings the two sides
close. `align-items: center` on the grid balances whatever delta remains. Don't put a fixed height on either
column — a hard height on the board column puts the clipping straight back.

---

## 4. Acceptance checklist

Test at 1440px, 1280px, 1024px, 768px, 390px and 360px.

- [ ] All six recent-call rows are visible at every width, with their badges.
- [ ] All four stat tiles are visible; 4-across on desktop, 2×2 on phones.
- [ ] Nothing is cut off at the bottom of the iframe, and the iframe has no scrollbar of its own.
- [ ] Badges change on rows further down the list, not only the top two.
- [ ] No row jumps or reflows the page while badges update.
- [ ] Rotate portrait ↔ landscape: the iframe resizes to match, no clip, no gap.
- [ ] On mobile, the H1 and both hero buttons appear above the board.
- [ ] "Need Staff?" is gone and exactly one H1 remains on the page.
- [ ] With reduced motion enabled in the OS, the ticker and progress bars stop and nothing else breaks.
- [ ] No console errors, and no visible jump on load.

---

## 5. Cleanup, still outstanding from earlier handoffs

- `/assets/rd1-24-7-live-call.html` (the v1 file) should return **410 Gone**, not 404.
- Apply `X-Robots-Tag: noindex` to `/assets/*`.
- `/ai-recruitment`'s "Book an AI Call Demo" still points at the raw v1 asset path — remove it.

---

## 6. If the timing ever needs changing again

Every dwell value and probability is a named constant at the top of the script. Change those, not the DOM
code. Rows are independent, so lengthening one stage no longer shifts every row after it — that constraint
came from the old synchronised-tick build and no longer applies.
