import type { LocationData } from './locations';
import { regionOf, travelRadiusOf } from './locations';
import { SECTORS, getSector } from './sectors';
import type { Faq } from './schema';

/**
 * Builds five FAQs whose ANSWERS differ per town.
 * Answers degrade gracefully when enriched data is missing.
 */
export function buildLocationFaqs(loc: LocationData): Faq[] {
  const region = regionOf(loc);
  const radius = travelRadiusOf(loc);

  const topSectorNames = (loc.prioritySectors ?? [])
    .map((s) => getSector(s)?.name)
    .filter(Boolean) as string[];

  const sectorSentence = topSectorNames.length
    ? `Demand in ${loc.name} is strongest in ${listOut(topSectorNames)}.`
    : `We cover all ${SECTORS.length} sectors in ${loc.name}.`;

  const sitesSentence = loc.employmentSites?.length
    ? ` We supply employers based around ${listOut(loc.employmentSites)}.`
    : '';

  const neighbourNames = (loc.neighbours ?? []).slice(0, 3).map((n) => n.name);
  const districtNames = (loc.districts ?? []).slice(0, 3);

  const travelFrom = [...neighbourNames, ...districtNames];
  const travelSentence = travelFrom.length
    ? `Most travel from within ${radius} miles, including ${listOut(travelFrom)}.`
    : `Most candidates travel from within ${radius} miles of ${loc.name}.`;

  return [
    {
      question: `Which sectors do you recruit for in ${loc.name}?`,
      answer:
        `Recruitment Direct UK recruits across ${SECTORS.length} sectors in ` +
        `${loc.name} and the wider ${region} area. ${sectorSentence}${sitesSentence}`,
    },
    {
      question: `How quickly can you supply temporary staff in ${loc.name}?`,
      answer:
        `We operate 24/7 with AI-supported applicant screening, so sourcing for ` +
        `${loc.name} vacancies starts as soon as requirements are confirmed. ` +
        `Candidates local to ${loc.name} can often start within 24 hours.`,
    },
    {
      question: `Where do candidates placed in ${loc.name} travel from?`,
      answer: travelSentence,
    },
    {
      question: `Do you supply permanent staff in ${loc.name}?`,
      answer:
        `Yes. We recruit permanent employees across every sector in ${loc.name}, ` +
        `from operational and skilled trades through to technical, professional ` +
        `and management appointments. All candidates are Right to Work checked ` +
        `and compliance screened before submission.`,
    },
    {
      question: `Is Recruitment Direct UK a local agency to ${loc.name}?`,
      answer:
        `Recruitment Direct UK has supplied staff since 2006 from our office in ` +
        `Linlithgow, West Lothian, with nationwide coverage. ${loc.name} is ` +
        `serviced with dedicated consultant support and a local candidate pool ` +
        `across ${region}.`,
    },
  ];
}

function listOut(items: string[]): string {
  if (items.length === 0) return '';
  if (items.length === 1) return items[0];
  if (items.length === 2) return `${items[0]} and ${items[1]}`;
  return `${items.slice(0, -1).join(', ')} and ${items[items.length - 1]}`;
}
