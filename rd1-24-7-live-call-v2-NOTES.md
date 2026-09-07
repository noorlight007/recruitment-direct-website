# AI Applicant Screening board — v2 (white/vibrant re-skin)

**Revised same day per feedback:** pace roughly 3x faster end-to-end (new call every ~1.1s instead of ~3.2s;
verification resolves in ~1-2s instead of 4-9s), no driver/LGV roles anywhere in the mix, Construction weighted
up (3x the pull of most other sectors) with a much wider trades bench — Bricklayer, Electrician, Plumber,
Carpenter, Steel Fixer, Scaffolder, Painter & Decorator, Welder, alongside Plant Operator and Site
Supervisor/Labourer/Groundworker. Also swapped the one dark accent colour (used on the "Submitted to Client"
badge and the logo mark) from a navy-tinted blue to true black — no navy anywhere in the design now, per
instruction.

**Revised again same day — formula rebuilt as a strict funnel, Unsuccessful removed entirely:**
Docs Requested, Docs Received and Submitted to Client are no longer three parallel outcomes of a screening call —
they're now sequential milestones (Requested ⊇ Received ⊇ Submitted), which is what makes "Requested always
higher than Received" true by construction rather than by luck. Targets: Docs Requested 55% of all screenings
(range asked for: 50-60%), Docs Received 32.5% of all screenings (range asked for: 30-35%, i.e. roughly 59% of
those who reached Requested), Submitted to Client 26.5% of all screenings (range asked for: 25-28%, i.e. roughly
81.5% of those who reached Received). Each level is its own self-correcting allocator, same deficit-based method
as before, so the ratios hold from early on rather than drifting.

There's no longer any "Unsuccessful" state, badge, colour or scoreboard tile. A call that doesn't advance past a
given stage simply stays there — stuck at Applied, or at Docs Requested, or at Recruiter Verifying — rather than
being labelled a failure. Ran the simulation for two minutes headless to check convergence: at 114 total
screenings it read 55.3% / 32.5% / 24.6% against targets of 55% / 32.5% / 26.5% — the first two are dead on, the
third is still closing the gap (this is a live board with a constant backlog sitting in verification at any given
moment, so "Submitted" understates its true rate until the run has been going a while — it was still climbing,
not stalled, when the test ended).

**Revised again same day — scoreboard is now 6 boxes, and stalled calls sink out of view fast:**
The boxes are, in order: Screened Today, Applied, Docs. Requested, Docs. Received, Recruiter Verifying, Submitted
to Client. Docs Requested / Docs Received / Submitted to Client are still the cumulative funnel milestones from
the formula rebuild above — untouched, same targets, same speed. Applied and Recruiter Verifying are new and
different in kind: they're **live gauges**, not running totals — they show how many calls are sitting in that
exact stage right now, and go up and down as calls move through. That's what makes "Recruiter Verifying" worth
watching rather than just another counter that only ever climbs.

A call that doesn't advance at some gate — stays at Applied, stays at Docs Requested, or doesn't get submitted
after verifying — no longer just sits wherever it happens to be. It fades slightly and jumps straight to the
bottom of the "Recent calls" list, and gets trimmed away by the normal 12-row cap almost immediately after. There's
still no "Unsuccessful" label or colour anywhere, per the instruction to delete it — this is purely about a
stalled card not lingering near the top looking like it's still doing something.

**Revised again same day — red Unsuccessful is back, in the results only, not a box:** a call that stalls at any
gate now flips its card badge (and fires a ticker chip) to red "Unsuccessful" before sinking to the bottom of the
list, so it's visible in the screening results. The scoreboard is still exactly 6 boxes — Screened Today, Applied,
Docs. Requested, Docs. Received, Recruiter Verifying, Submitted to Client — there's no seventh "Unsuccessful" tile
and no change to any of the funnel counts or targets. A call that stalls after reaching Docs Requested or Docs
Received stays counted in that box (it did reach that milestone), it just also shows red and drops out of the
visible feed — the box counts and the red badge aren't in tension, they're answering different questions
(“did it ever reach this stage” vs “what just happened to it”).

**Rebuilt same day — the row position now IS the funnel stage, by construction:**
Previously each call ran on its own independent random timer, so at any given moment the 6 visible rows showed
whatever stage each call happened to have reached — readable in aggregate, but not a clean story row-by-row.
Rewired it to a single synchronised "tick" (same 1.1s cadence as before): every tick, every call already on
screen advances exactly one funnel step, then a new call is inserted at the top as Applied. Since there are
exactly 4 steps from Applied to a resolved outcome and the feed is capped at 6 rows, this makes row position and
stage track each other directly: row 1 = Applied (just arrived), row 2 = Docs Requested, row 3 = Docs Received,
row 4 = Recruiter Verifying, row 5 = mainly Submitted to Client. Row 6 is wherever an Unsuccessful call has sunk
to, or a slower-resolving Docs Requested/Received case that hasn't moved on yet — matching "sometimes to call 6"
in the brief. The underlying self-correcting formula (55% / 32.5% / 26.5% of screenings) and its speed are
untouched — this only changed the timing mechanism, not the maths.

While rebuilding this I caught and fixed a real bug: when two calls failed in the same tick, the eviction logic
was removing whichever one got sunk to the bottom last, so it could vanish before ever being shown as red
"Unsuccessful" — silently defeating the point of showing it at all. Fixed by always evicting the row that was
already oldest before this tick's sinking happens, so a newly-failed call is guaranteed at least one tick visible
at the bottom. Verified by instrumenting the simulation and tracking every call by ID across 30 ticks — every
failure now shows up before it eventually ages out.

**Reverted same day — Applied and Recruiter Verifying removed as boxes:** the scoreboard is back to 4 tiles —
Screened Today, Docs. Requested, Docs. Received, Submitted to Client — same as before that detour. "Applied" and
"Recruiter Verifying" still exist as per-card badges in the feed (and Recruiter Verifying still gates the
verification-delay logic internally), they're just not shown as their own counters any more.

**Recent calls capped at 6 rows**, down from 12, per instruction.

**Colour swap, same day:** Applied is now black (to match the scoreboard's black numerals, as asked), Submitted
to Client is now blue, and the logo mark is solid blue rather than the blue-to-black gradient it was.

**Revised again same day — realism of where changes happen in the feed:** the initial screening call still
resolves fast (that's the "faster" fix above, untouched), but the verification step now deliberately takes
3-7 seconds instead of under 2, and the feed depth went from 8 rows to 12. Net effect: a card's badge doesn't
finish changing while it's still sitting in the top 2-3 rows — it keeps updating (Recruiter Verifying → Verified
→ Submitted, or → Unsuccessful) as it scrolls further down, so the lower half of the list stays live instead of
looking frozen. Verified with a scripted check: over a 6-second window, badges changed at rows 1, 2, 4, 5, 6, 8,
9, 11 and 12 (not just the top 3).

`rd1-24-7-live-call-v2.html` — self-contained, no build step, no external requests (no CDN fonts/scripts), so it
drops straight into an iframe or inline embed without adding any new network dependency to the page it sits on.

**Reverted same day — back to independent per-call timers, because "row = stage" was actually the wrong fix:**
The synchronised-tick rebuild above made every visible row track one funnel step in lockstep — but that's what
was then flagged as wrong: "Docs Requested only shows in call 2", "changes only happening in call 1&2", "speed
is slow again". Pinning a stage to exactly one row means it can only ever occupy that one row, however many calls
are actually sitting at that stage at once — the opposite of the brief. Reverted to each call running its own
independent timer chain (Applied → Docs Requested → Docs Received → Recruiter Verifying → Submitted/Unsuccessful),
with randomised dwell at each gate, so several rows can legitimately show the same stage label at the same time —
"Docs Requested" showing on 2-3 of the 6 rows at once is now normal, not a bug. Delays tuned short (roughly
0.35-0.65s to first result, 1.4-3.6s to Docs Received, 0.4-0.7s into Recruiter Verifying, 1.2-3s to a final
outcome) so the board still reads as fast — a full call resolves in well under 10 seconds — while leaving enough
spread that six calls in flight land on different stages rather than marching in step. A new call starts every
0.9 seconds, unchanged. The funnel maths (`decide()`, the 55% / 32.5% / 26.5% targets) is completely untouched;
only the timing mechanism changed, same as every revision before it.

While making this change, also caught that the top ticker strip wasn't firing a chip for the "Recruiter Verifying"
transition — every other stage change got a colour-matched chip in the scrolling strip except that one, which is
what "the fast moving strip needs to show accurate results and colours of the outcome" was pointing at. Added the
missing chip (grey, matching the Recruiter Verifying badge colour), so now every single stage change — Applied,
Docs Requested (amber), Docs Received (green), Recruiter Verifying (grey), Submitted to Client (blue), Unsuccessful
(red) — fires its own ticker chip in the matching colour, with nothing silently skipped.

Verified headless: 12.5 seconds into a fresh run, of the 6 visible rows, badges included Applied, Docs Requested,
Recruiter Verifying, Submitted to Client (x2) and Unsuccessful all at once — confirming stages spread across rows
rather than clustering in rows 1-2, and confirming the funnel still resolves (Submitted + Unsuccessful appearing)
well within the first 10-15 seconds. No console errors from removing the old tick-based code.

**Fixed same day — Submitted to Client was showing too early, because Docs Requested wasn't dwelling long
enough:** with all four stages given roughly the same ~1-second dwell, a card could sail through the whole funnel
in about 3.4 seconds — arriving at "Submitted to Client" while only 3-4 rows deep, i.e. call/row 3-4, exactly what
was flagged as wrong. The real fix wasn't about the submitted step itself; it was that Docs Requested — the one
stage that's a genuine back-office wait in real life — was resolving far too fast to occupy the roughly half the
board it's supposed to.

Rather than guess at new numbers and ask you to re-test again, this one was tuned with a small timing simulation
(same funnel percentages, same 900ms arrival rate, same 6-row cap, run for 10 simulated minutes) before touching
the live file, checking two things directly: how many of the 6 rows show "Docs Requested" on average, and which
row "Submitted to Client" lands on when it happens. Docs Requested's dwell went from ~0.9s to a 3.8-5.2 second
base wait (occasionally longer), while Applied, Docs Received and Recruiter Verifying stayed fast at ~0.9s each.
Simulated result: Docs Requested occupies 2.9 of 6 rows on average, and Submitted to Client lands at row 5 in the
large majority of cases (row 4 or 6 the rest of the time) — verified again against the actual published page
(not just the simulation), same numbers. Unsuccessful, unchanged, still lands at row 6 essentially every time
because it's always sunk straight to the bottom the instant it happens, at whichever gate it failed — which is
also what makes "if unsuccessful after applying this continues to 6" true regardless of how early in the funnel
the failure happens.

## Locked spec — the 6-row "Recent calls" feed (remember this before changing timing again)

This is the agreed reference for what each row should typically show, and it's what every timing tweak from here
on needs to be checked against before shipping:

- **Row 1 — Applied.**
- **Row 2 — Docs Requested** (also the row it's most concentrated in).
- **Row 3 — mostly Recruiter Verifying/Docs Requested, with Docs Received specifically showing here about a
  third of the time** (~33%, asked for as "35% in box 3").
- **Row 4 — Recruiter Verifying** (also common here).
- **Row 5 — mainly Submitted to Client.**
- **Row 6 — Unsuccessful**, essentially always: any call that fails at any gate (after Applied, after Docs
  Requested, or after Recruiter Verifying) sinks straight to the bottom row the instant it happens, regardless of
  how early in the funnel the failure occurred. Verified: 99%+ of Unsuccessful outcomes land at row 6.
- **Docs Requested overall should be visible on roughly 3 of the 6 rows at once** (~50% of the board) — this is
  a separate, board-wide check from the row-3-specific Docs Received number above; both were checked together
  since tightening one loosens the other.

**Fixed same day — Docs Received wasn't visible at row 3 at all (was ~0%), and Docs Requested's overall spread had
drifted:** the previous revision (which fixed "Submitted showing too early") made Docs Requested dwell so long
(3.8-5.2s, uniformly) that almost nothing had reached Docs Received by the time a card aged to row 3 — it was
still showing "Docs Requested" essentially 99% of the time there. Fixing "Submitted lands at row 5" and "Docs
Received shows at row 3 a third of the time" and "Docs Requested spans ~3 of 6 rows" all at once needed the four
stage dwells to trade off against each other, not just one lever — so this was tuned with the same timing
simulation approach as before, extended to track occupancy by row *and* by state (not just overall averages), and
run across multiple random seeds to avoid over-fitting to one lucky run. Landed on: Docs Requested now dwells
~1.5-2s most of the time (60% of calls) but stalls 4.5-9s for the rest — that long tail is what keeps it spread
across several rows at once, while the common fast case is what lets Docs Received actually reach row 3. Docs
Received itself now dwells ~1.6-2.1s (was near-instant), and Recruiter Verifying ~1.7-2.2s (also lengthened) — the
combined effect of both of those being longer than before is what pushes Submitted back out to row 5 despite Docs
Received now resolving faster on the common path.

Checked on the actual published page, not just the simulation: Docs Requested occupancy 2.3 of 6 rows, Docs
Received at row 3 32.5% of the time, Unsuccessful at row 6 100% of the observed cases (22 for 22). Submitted's
row varied 4-6 in this particular short run (small sample — 8 submissions in ~40 seconds); the longer
10-minute simulation behind this tuning put its average row at ~4.6, so row 4 alongside row 5 is expected and
consistent with "mainly row 5," not a miss.

## What changed vs. the signed-off v1

v1 was deliberately brand-matched: dark navy/black board, silver text, electric blue accents, to mirror the RD1
logo. v2 is a full re-skin per this instruction: white background, black text, vibrant colour-coded stage badges,
and a more "dashboard"-style premium feel (card list instead of a plain ticker, monospace tabular numerals on the
scoreboard, soft shadows instead of flat panels, a pulsing live indicator).

**The scoring logic is untouched.** Same targets as signed off in August: Docs Received 35–40%, Docs Requested
30–35%, Unsuccessful ~30–32%, Submitted to Client ≈33% (88% of everyone who reaches Docs Received). Same
self-correcting allocation approach so the ratios hold from the first few calls rather than drifting. Same 4
fixed questions per call, same instant halt on any "no", same LGV licence category wording (Class 1 → Category
C+E, Class 2 → Category C), same Scotland/PVG-phrased question for Glasgow, Edinburgh and Aberdeen calls.

## Colour mapping — my interpretation of your instruction, flag if wrong

You listed: Applied — blue, Docs Requested — amber, Docs Received — green, Recruiter Verifying — grey, Verified,
Submitted to Client — blue. That's six labels for what was previously five scoreboard states, and two of them
share a colour (Applied and Submitted). Here's how I resolved it — one message back if any of this isn't what
you meant:

- **Applied** — blue (as soon as a card appears in the feed)
- **Docs Requested** — amber
- **Docs Received** — green (permanent milestone, doesn't reverse)
- **Recruiter Verifying** — grey, as you flagged
- **Verified** — same blue as Applied and Submitted, shown as a brief in-between state right after verification
  passes and just before the card flips to Submitted. I read "Verified" as part of the same "blue = good
  standing" family you described rather than a seventh distinct hue — it's a two-second flash, not a colour I
  invented on top of your list.
- **Submitted to Client** — a deeper blue (same hue family, slightly richer) so it's still visibly "blue" per
  your instruction but distinguishable at a glance from the lighter "Applied" blue in a card list where both
  colours can appear on screen at once.
- **Unsuccessful** — red. Not in your list, but the board needs a colour for it and red is the one convention
  I didn't think was safe to guess away — shout if you want it changed.

## Structure

- **Top ticker** — a thin horizontal strip, independently-positioned chips sliding right to left (this preserves
  the "no shared-transform track" fix from v1 — each chip animates on its own, so they can never bunch up or
  overlap regardless of how many spawn close together).
- **Scoreboard** — five stat tiles, unchanged labels (Screened Today, Docs. Received, Docs. Requested, Submitted
  to Client, Unsuccessful), still counts only, no percentages, per the original client instruction.
- **Recent calls feed** — new in v2: a vertical list of cards, one per applicant, each carrying a coloured status
  badge that updates live as that applicant's call progresses (Applied → Requested/Received → Verifying →
  Verified → Submitted, or Unsuccessful at any point). This is what actually shows off the vibrant colour-coding
  you asked for — a single ticker line can't carry six distinct states clearly, a card list can.

## Also picked up while rebuilding (small, in scope, didn't need a separate decision)

- **Mobile layout** — was flagged as "not yet tested" in the original punch list; v2 is responsive (tested at
  desktop and ~420px mobile width).
- **`prefers-reduced-motion`** — was flagged as "not yet built" in the original punch list; v2 respects it,
  freezing the pulse and ticker animation and laying the ticker chips out as a static wrapped row instead.

## Still open — same as before

- **Framing decision** (still not made): is this labelled as a live feed of real calls, or an illustrative demo?
  v2 defaults to the honest option — "Illustrative example — simulated calls, real screening logic" — because
  presenting simulated numbers as genuine live customer activity isn't something I'd want to ship without you
  explicitly signing off on that framing. Easy to reword if you want different copy, just flagging the choice.
- **Not wired to a real data source** (JobAdder, Adzuna) — still fully simulated client-side, as before.
- **Embedding into the live site** — this is still a standalone file. Iframe vs. inline embed is the same open
  question noted in the v1 dev notes; nothing about the re-skin changes that decision.

## Screenshots (desktop + mobile, mid-simulation)
See attached — rendered directly from the file in a headless browser, not a mockup.
