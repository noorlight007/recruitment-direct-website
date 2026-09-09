# RD1 — Urgent live-site fixes (9 Sept 2026)

Three things flagged as live-broken on desktop/PC today. Two of these already have a signed-off fix sitting in
an earlier handoff that evidently hasn't been shipped yet — this doc exists so nothing gets lost between docs
a second time. The third needs one more piece of info before it can be spec'd precisely.

Note on how this doc was put together: I don't have a way to render the live JS-driven "Recent calls" widget
from here to screenshot it directly (checked — network access to rd1.co.uk isn't reachable from this session's
browser, and a plain content-fetch only sees the static HTML, not the widget's live output). Everything below is
built from the previously agreed specs and dev handoffs, cross-checked against what's being reported live. Point
3 needs a screenshot or a bit more detail to nail down exact pixel values.

---

## 1. Header "Find Staff" button — oversized, wrong code

**This was already fixed and handed to the developer on 7 Sept** (`rd1-footer-fixes-code.md`, job 8) but it's
evidently still not live — that's the "wrong code" being seen now. Nothing new to design here, it just needs to
actually ship.

Measured live at the time: the header pill was 111×52px against ~36px-tall text links ("About", "Contact") right
next to it — badly out of proportion, which matches "header size is massive."

```css
/* 1. Fix the button colour/style — shared by every dark pill button site-wide */
.btn.btn-primary {
  background-image: none;
  background-color: #0a0a0d;
  background: linear-gradient(135deg, #17171c 0%, #0a0a0d 100%);
  border: 2px solid #ffffff;
  border-radius: 999px;
}
.btn.btn-primary:hover {
  background: linear-gradient(135deg, #232329 0%, #131316 100%);
}

/* 2. Then shrink ONLY the header instance — leave the card CTA elsewhere alone */
.nav-btn.btn-primary {
  padding: 8px 22px;      /* was 0px 26px */
  height: auto;           /* remove whatever's forcing 52px — check for an explicit height/min-height on .nav-btn */
  font-size: 14px;        /* was 15px, matches the other nav items */
}
```

Target once shipped: the header pill sits at roughly the same visual height as "About"/"Contact" (~36–40px), not
52px.

**Ask the developer directly whether this was ever deployed** — if it was and it's reverted, something in the
deploy/cache pipeline is the actual problem, not the CSS.

---

## 2. "Recent calls" feed showing 4 rows instead of 6, and hardly any construction jobs

Both of these point at the same root cause: **the live site is very likely running the wrong build of the AI
Applicant Screening widget.**

The signed-off version (`rd1-24-7-live-call-v2.html`, locked spec in `rd1-24-7-live-call-v2-NOTES.md`) is built
to:
- show **exactly 6 rows** in the Recent calls feed (capped down from 12 during development, per instruction), and
- weight **Construction 3x** the pull of most other sectors, with a wide trades bench (Bricklayer, Electrician,
  Plumber, Carpenter, Steel Fixer, Scaffolder, Painter & Decorator, Welder, Plant Operator, Site
  Supervisor/Labourer/Groundworker) — this was a deliberate, explicit change from the original build.

If the live page is showing 4 rows and barely any construction, it's almost certainly running an older or
different copy of the file than the one that was signed off, not a live bug in the correct file. **First thing
for the developer to check: confirm the exact file deployed is `rd1-24-7-live-call-v2.html`** (compare a
checksum or just diff it against the copy in this project) **and that it's the current version, not a cached or
superseded upload.**

If it turns out the correct v2 file genuinely is deployed and it's still only showing 4 rows: that's a container
height problem, not a widget bug. The embed spec (`rd1-24-7-live-call-v2-DEV-HANDOFF.md`) calls for:

```html
<iframe
  src="/assets/rd1-24-7-live-call-v2.html"
  style="width:100%; border:0; min-height:760px;"
  loading="lazy"
  title="AI Applicant Screening — live example">
</iframe>
```

If the iframe (or inline container, if it was embedded inline instead) is shorter than ~760px, or has
`overflow:hidden`/`max-height` clipping it, rows 5 and 6 will be cut off from view even though the widget itself
is generating all 6 — visually indistinguishable from "only 4 rows" without opening dev tools. Worth checking
before assuming it's the wrong file.

**Want a symmetrical/tidier look on PC:** once it's confirmed to be the right file at the right height, the 6-row
card layout is already built to be visually even (equal card heights, single column) — if it still doesn't look
symmetrical once those two things are fixed, send a screenshot and I'll get exact spacing/alignment values from
it rather than guessing.

---

## 3. General text sizing "not in line with a UK recruitment agency" look

This one isn't in any earlier handoff, so I don't have exact live pixel values to hand the developer the way I
could for the header button. To spec this precisely (rather than a vague "make it smaller"), it'd help to know:

- Which text specifically — the big H1 headline, the nav links, body paragraphs, or all of the above?
- A screenshot of the section that looks oversized would let me pull the actual computed font sizes and give the
  developer exact before/after values, the same way job 8 above did for the button.

Once that's confirmed, I'll turn it into the same kind of copy-paste CSS fix as sections 1 and 2 rather than a
vague instruction.

---

## Summary for the developer

1. **Ship the header button fix from 7 Sept** (`rd1-footer-fixes-code.md`, job 8) — it was approved but doesn't
   appear to be live.
2. **Confirm `rd1-24-7-live-call-v2.html` (not an older build) is what's actually deployed**, and that its
   container is at least 760px tall — this should fix both the 4-vs-6-row issue and the missing construction
   jobs in one go, since both come from the same file/version.
3. **Heading/body text sizing** — flagged, needs one more round with a screenshot to spec exactly.
