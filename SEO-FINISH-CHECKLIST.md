# RD1 SEO – finish checklist (14 Oct 2026)

Code is done and pushed to `main` (latest `0bbdd22`). Only the items below need a person with access.

## 1. Deploy (Noor / whoever has the server) – 5 minutes
Not live yet: breadcrumb schema site-wide, shortened titles, job locations as "Town, Country".

1. Create `.deploy.local` in the repo root (gitignored):
   ```
   DEPLOY_HOST=<server ip or hostname>
   DEPLOY_USER=root
   DEPLOY_PASSWORD=<only if not using an SSH key>
   ```
2. Create `.env.deploy.local` with the production env vars (copy from the server's current `/var/www/recruitment-direct-website/.env`).
3. Run `./deploy.sh`
4. Verify:
   ```
   curl -s https://rd1.co.uk/about | grep -c BreadcrumbList          # expect 1
   curl -s https://rd1.co.uk/find-staff | grep -o '<title>[^<]*'     # expect "... | RDUK"
   curl -s https://rd1.co.uk/news | grep -c 'href="/news/'           # expect > 0
   ```
5. Search Console > URL inspection > Request indexing for `/`, `/about`, `/locations/scotland`.

## 2. GA4 (Steven / Noor) – no code needed
1. analytics.google.com: create a GA4 property for rd1.co.uk, copy the `G-XXXXXXXXXX` measurement ID.
2. tagmanager.google.com > container `GTM-PWQ7VMJC`: check for an existing "Google tag" / GA4 Configuration tag.
3. If none: New tag > Google tag > paste the ID > trigger "All Pages" > Submit > Publish.
4. Check GA4 > Reports > Realtime while loading https://rd1.co.uk.
5. Consent: GTM currently loads before the cookie banner choice. Ask a compliance adviser whether analytics tags should wait for consent (UK PECR).

## 3. Google Business Profile (Steven – owner login)
- business.google.com > the RD1 profile > Edit profile > Business category
- Primary: Employment agency. Add website https://rd1.co.uk. Phone 01324 613198.
- Ask 10 clients and 10 candidates for reviews with the profile's review link.

## 4. Backlinks and content (Steven)
Ready-to-send text is in `rd1-offsite-seo-drafts-2026-10.md`:
- Agency Central listing (Scotland)
- Email to RecruitmentUp
- REC member directory check
- APUC Lot 1 news post in Soro (confirm facts first)

## 5. Review in 2–4 weeks
Search Console > Performance > export Queries and Pages as CSV. Baseline (28 days to 11 Oct 2026): 376 clicks, 25.4K impressions, CTR 1.5%, average position 16.
