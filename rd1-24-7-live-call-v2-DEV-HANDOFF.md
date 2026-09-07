# RD1 — AI Applicant Screening board: embed handoff (v2, Sept 2026)

The widget is finished and signed off (funnel logic, timing and colours all locked — see
`rd1-24-7-live-call-v2-NOTES.md` for the full history and the "locked spec" section if timing ever needs
revisiting). This doc is just what a developer needs to put it on the live site.

**File:** `rd1-24-7-live-call-v2.html` — single self-contained file, no build step, no external requests (no CDN
fonts or scripts), so it drops in without adding any new network dependency to whatever page it sits on.

## Embed option A — iframe (simplest, safest)

```html
<iframe
  src="/assets/rd1-24-7-live-call-v2.html"
  style="width:100%; border:0; min-height:760px;"
  loading="lazy"
  title="AI Applicant Screening — live example">
</iframe>
```

Host the file at a real path under the site (`/assets/rd1-24-7-live-call-v2.html` or similar), not a orphaned raw
file — the last footer handoff already flagged the v1 file being linked as a bare asset path with no page around
it, which is what left `/assets/rd1-24-7-live-call.html` an orphaned direct download instead of a proper page.
Whatever path this lands on, link to that path everywhere, not the raw file.

Pros: fully isolated, can't clash with the site's own CSS/JS. Cons: fixed-height iframes need occasional manual
height tuning if the design changes.

## Embed option B — inline

Copy the contents of the `<style>` block into the page's stylesheet (or a scoped `<style>` tag around a wrapper
div) and the `<body>` markup + `<script>` block directly into the page template at the chosen spot. All the
widget's CSS is scoped under specific class names (`.card`, `.badge`, `.scoreboard`, `.ticker-shell`, etc.) — check
those class names don't collide with anything already on the page before merging stylesheets.

Pros: no iframe height issues, feels native to the page. Cons: more care needed to avoid CSS collisions with the
rest of the site.

## Where it goes

Not yet decided — flagging the natural candidate rather than deciding it here: the *Our Recruitment Process*
section is having its "WATCH AI SCREENING CALL" video button removed (see
`rd1-hero-and-buttons-DEV-HANDOFF.md`), which leaves a gap in that section. This board is the obvious thing to
drop into that gap if a replacement is wanted, but that's a separate call — the removal doc explicitly does not
add a replacement, so don't embed it there unless/until that's confirmed.

## Framing — still needs a decision before this goes live

The board currently labels itself "Illustrative example — simulated calls, real screening logic" in the
masthead subtitle. That's the honest default rather than presenting simulated numbers as genuine live call
activity — flagging again because it hasn't been explicitly signed off. If the site should instead call it a live
feed of real calls, that's a copy change in the subtitle, not a rebuild — say the word and it's a one-line edit.

## Known limitations, unchanged since the build

- Fully simulated client-side — not wired to JobAdder, Adzuna, or any real data source.
- Not yet tested against the live site's actual CSS (only tested standalone, desktop + ~420px mobile width).
- No pause-on-hover for the ticker — the ticker and card badges respect `prefers-reduced-motion` (freezes
  animation, lays ticker items out as a static wrapped row) but there's no manual pause control.

## If timing/behaviour ever needs changing again

Don't hand-tune the four stage delays by feel — the current values were reached by simulating the funnel
math against the row-cap and arrival rate (10 simulated minutes per test, checked across multiple random seeds)
because the four stages interact: lengthening one to fix one row's occupancy shifts every row after it. The
"locked spec" section at the top of `rd1-24-7-live-call-v2-NOTES.md` states what each row should typically show —
check any future change against all of it, not just the one row that prompted the change.
