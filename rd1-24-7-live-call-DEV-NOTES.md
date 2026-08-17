# RD1 24/7 Applicant Call — Developer Handoff

**File:** `rd1-24-7-live-call.html`
Single self-contained file — no build step, no framework, no dependencies to install. Everything (HTML, CSS, JS) is inline in that one file. Open it directly in a browser to preview.

## What it is

A simulated "live" screening board widget: a candidate card that cycles through fake AI screening calls (name reveal, sector/role/location, 4 Yes/No questions, verdict), a fast-moving ticker of recent outcomes, and a scoreboard tally (Screened Today / Submitted to Client / Docs Received / Docs Requested / Unsuccessful). All data is randomly generated client-side — there is no backend and no connection to real applicant data.

## Embedding on rd1.co.uk

Two straightforward options:

1. **Iframe embed** — simplest, fully isolates the widget's CSS/JS from the rest of the site:
   ```html
   <iframe src="/assets/rd1-24-7-live-call.html" style="width:100%;max-width:1100px;height:520px;border:0;" title="RD1 24/7 Applicant Call"></iframe>
   ```
2. **Inline embed** — copy the contents of `<body>` and `<style>` into the page template. All CSS selectors are scoped under classes like `.board`, `.tally`, `.ticker` etc. — check for collisions with existing site styles before doing this (particularly generic tags like `b`, `em`, `i` which this file restyles).

Either way, keep the Google Fonts `<link>` tags in `<head>` (Archivo Black + Space Mono) — the design depends on them and there's no local fallback bundled.

## Structure of the file

- **CSS custom properties** (`:root` block near the top) — all colours in one place. Currently matched to RD1's real logo palette (navy `--board`, silver `--off`/`--silver`, electric blue `--blue`), with the functional red/amber/green status colours (`--red`/`--amber`/`--green`) left untouched since those carry meaning (unsuccessful/requested/received), not brand styling.
- **Data arrays** (`NAMES`, `CITIES`, `SECTORS`) — 100 combinatorial UK names, 30 UK cities (with `SCOTLAND_CITIES` flagged for Disclosure-vs-DBS wording), and 10 sectors × 10 jobs each with their own Yes/No question banks, DBS/Disclosure rules, and per-job question overrides (e.g. LGV Class 1 vs Class 2 licence category).
- **`runCall()`** — drives one candidate's card: builds the 4-question set (right-to-work + up to 3 more, DBS/Disclosure only where the job needs it), stops immediately on the first "No" (→ Unsuccessful), otherwise splits into Docs Received / Docs Requested, with Docs Received chaining into Recruiter Verifying → Submitted to Client (with a small chance of failing verification).
- **Ticker (`pushTicker`/`tickerFrame`)** — a `requestAnimationFrame`-driven marquee where each item tracks its own x-position, so items never overlap or spawn off-timing regardless of how fast calls resolve.
- **Scoreboard (`scoreboardTick`)** — intentionally decoupled from the fast card/ticker above; runs on its own slower, randomised interval so "Screened Today" doesn't visibly race upward in real time. Uses a self-correcting allocation (see comments in code) so the Docs Received / Docs Requested / Unsuccessful ratios sit inside their target bands even at low totals, not just over a long run: Docs Received 35-40%, Docs Requested 30-35%, Unsuccessful ~30-32%, Submitted 33% (88% of Docs Received).

## Known limitations / not yet done

- Not tested on mobile/narrow viewports.
- Not wired to any real data source (JobAdder, Adzuna, etc.) — everything is simulated. If this is ever hooked up to live pipeline data, note the real business rule that Adzuna-sourced leads don't receive an AI call.
- No pause-on-hover or `prefers-reduced-motion` handling yet for the ticker/animations — worth adding for accessibility before this goes live on the public site.
- Percentage figures were tried in the scoreboard and removed at the client's request — counts only, no percentages, is the current signed-off state.

## Customising

- To change the "screened today" starting point or pacing, see the `total`/`scoreboardTick` section near the bottom of the `<script>`.
- To retheme colours, edit the `:root` block only — everything else references those variables.
- To add/edit sectors, jobs, or questions, edit the `SECTORS` array — each job can override individual questions via `questionOverrides` and opt into DBS/Disclosure via `dbsJobs`.
