# RD1 — Find Staff: Developer Handoff

## The code

One file: `rd1-hire-staff-landing-page.html` — the full `/hire-staff` page, self-contained, no build step. It contains the complete Find Staff tool embedded directly in it. For the header placement, pull the `.tool` panel and its script out of this same file (see "Embedding into the real site" below) — it's the same component, just wrapped differently on the page versus behind the header toggle. This file replaces anything sent previously, including the earlier standalone `rd1-hire-staff-tool.html` — that file is now redundant, don't use it.

## What still needs doing, in order of priority

**1. Locations — source from Mapword, not the hardcoded array.**
Both files currently have a `LOCATIONS` array hand-typed in the `<script>` block. Replace it: pull the full locations list straight from Mapword — the same source already driving the location pages and map on rd1.co.uk — via whatever feed/API/export it provides. Every place the Find Staff tool appears (header, hire-staff page, and wherever else it gets embedded per the placement doc) must read from that one Mapword feed, not a separate copy per page. If each embed keeps its own hardcoded list, they'll drift out of sync with each other and with the real location pages — that's already happened once.

**2. AI Hire Now button — wire it live.**
The `sendAi` click handler in both files now builds the real handoff, not a placeholder — it collects sector, position, quantity, location, name, company, website, phone and email into a `URLSearchParams` object and constructs `/ai-hire-now-form?sector=...&position=...&...`. Right now that URL is only shown inside the demo confirm box. To go live: delete the `showConfirm(...)` line at the end of that handler and replace it with `window.location.href = aiHireNowUrl;`. Before that ships, confirm the query parameter names used (`sector`, `position`, `quantity`, `location`, `name`, `company`, `website`, `phone`, `email`) match what `/ai-hire-now-form` actually expects — check with whoever built AI Hire Now/CallPilot.

**3. WhatsApp button — still needs a real number.**
`sendWhatsapp` currently just displays the message text in the demo confirm box. Build a `wa.me/<branch-number>?text=<url-encoded-message>` link from that same message and open it. No backend needed, just the real branch WhatsApp number(s).

**4. Email button — needs a real destination.**
`sendEmail` is the same — displays the summary, doesn't send anything. Either a `mailto:` link (simplest, no backend) or a proper form-to-inbox send through whatever the rest of the site already uses for contact forms.

**5. Sector/position data — replace what's installed.**
The `SECTORS` object has grown from the original sample to ~794 real job titles across all 20 sectors (Construction alone covers ~176, including the plant operator specialisms — 360, ADT, dozer, telehandler, loading shovel — and quarry roles). This is a straight data replacement — same structure, same variable name, just far more complete. Cross-check the titles against JobAdder's own category list so the picker and the ATS agree.

## What's already working, no action needed

Cascading Sector → Position dropdowns. Reverse role search — typing a job title sets the sector automatically, and (as of the latest version) typing something *not* on the list no longer gets silently dropped, it's accepted as free text so the enquiry can still be submitted. Location field with autocomplete. Quantity picker. Contact form validation — the three send buttons stay disabled until sector, position, location, name, company, and at least one of phone/email are filled. The Find Staff button's open/close toggle.

## Embedding into the real site

`rd1-hire-staff-landing-page.html` is the full page for `/hire-staff` under Clients — the tool sits directly in place on the page, no toggle needed there, just build the page as-is.

For the header: relabel the existing "Request Staff" button to "Find Staff," same position top right next to the phone number, and wire its click handler to open a collapsible version of the same panel instead of linking straight to `/ai-hire-now`. Pull the `.tool` element and its script out of the landing page file for this — it's the same component, just needs wrapping in an open/close toggle on the real site's own header, not RD1's actual header markup (which this file doesn't attempt to reproduce for production use).

## Colours

Match the real RD1 website — white header, dark navy (`#0c1730`) primary header button, gold (`#d3a94a`) as RD1's own accent colour, matching the gold already used in the site's hero. Nothing to do with CallPilot — CallPilot is the backend AI-calling admin tool, unrelated to the site's visual branding. The Find Staff form panel itself is white background / black text.

## Accessibility / responsive

Not yet tested on mobile viewports or with a screen reader. Buttons use `aria-pressed` (quantity picker) and `aria-expanded` (Find Staff toggle) — carry these through if rebuilt in a framework. Respects keyboard focus (`:focus-visible` throughout) — re-check after any framework port.
