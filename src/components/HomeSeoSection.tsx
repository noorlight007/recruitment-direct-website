import Link from "next/link";

const SCOTTISH_HUBS = [
  { name: "Edinburgh", slug: "edinburgh" },
  { name: "Glasgow", slug: "glasgow" },
  { name: "Aberdeen", slug: "aberdeen" },
  { name: "Inverness", slug: "inverness" },
  { name: "Falkirk", slug: "falkirk" },
  { name: "Livingston", slug: "livingston" },
  { name: "Linlithgow", slug: "linlithgow" },
  { name: "Paisley", slug: "paisley" },
  { name: "Hamilton", slug: "hamilton" },
  { name: "Motherwell", slug: "motherwell" },
  { name: "Cumbernauld", slug: "cumbernauld" },
];

const SECTOR_LINKS = [
  { name: "Construction", href: "/construction-recruitment-agency" },
  { name: "Engineering", href: "/engineering-recruitment-agency" },
  { name: "Civil Engineering", href: "/civil-engineering-recruitment-agency" },
  { name: "Facilities Management", href: "/facilities-management-recruitment-agency" },
  { name: "Logistics", href: "/logistics-recruitment-agency" },
  { name: "Healthcare", href: "/healthcare-recruitment-agency" },
  { name: "Education", href: "/education-recruitment-agency" },
  { name: "Hospitality", href: "/hospitality-recruitment-agency" },
  { name: "Renewable Energy", href: "/renewable-energy-recruitment-agency" },
  { name: "IT & Technology", href: "/it-technology-recruitment-agency" },
  { name: "Commercial & Office", href: "/commercial-office-recruitment-agency" },
];

export const HOME_FAQS = [
  {
    question: "Which areas of Scotland does Recruitment Direct UK cover?",
    answer:
      "We supply staff across Scotland from our base in Linlithgow, including Edinburgh, Glasgow, Aberdeen, Inverness, Falkirk and Livingston, and we also recruit across England, Wales and Northern Ireland.",
  },
  {
    question: "What types of recruitment do you offer?",
    answer:
      "We supply temporary, contract and permanent staff across construction, engineering, facilities management, logistics, healthcare, education, hospitality, renewable energy, IT and commercial roles.",
  },
  {
    question: "How are your temporary and contract workers paid?",
    answer:
      "Every worker is paid through our own PAYE payroll or, where genuinely self-employed in construction, engaged directly under the Construction Industry Scheme (CIS). We do not use umbrella companies or other intermediaries.",
  },
  {
    question: "Which accreditations does Recruitment Direct UK hold?",
    answer:
      "We are a REC Corporate Member, ISO 9001 certified and Constructionline Gold accredited, and we have been supplying staff since 2006.",
  },
];

export default function HomeSeoSection() {
  return (
    <section className="bg-white border-t border-gray-100 py-16 px-4 sm:px-6 text-[#121212]">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-heading text-2xl md:text-4xl font-bold tracking-tight mb-5">
          Recruitment Agency in Scotland and the UK
        </h2>
        <div className="space-y-4 text-base md:text-lg text-gray-700 leading-relaxed max-w-4xl">
          <p>
            Recruitment Direct UK Ltd is a Scottish recruitment agency based in Linlithgow, supplying temporary, contract and permanent staff to employers across Scotland and the rest of the UK since 2006. We work with clients in construction, engineering, facilities management, logistics, healthcare, education and more.
          </p>
          <p>
            Every worker we supply is paid through PAYE or engaged directly under CIS, and we hold REC Corporate Membership, ISO 9001 and Constructionline Gold. Whether you need one skilled tradesperson tomorrow or a team for a long-term project, tell us the role, the location and how many.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 mt-10">
          <div>
            <h3 className="font-heading text-xl font-bold mb-3">Recruitment agencies across Scotland</h3>
            <ul className="flex flex-wrap gap-2 list-none p-0 m-0">
              {SCOTTISH_HUBS.map((c) => (
                <li key={c.slug}>
                  <Link
                    href={`/locations/scotland/${c.slug}`}
                    className="inline-block rounded-full border border-gray-200 px-4 py-1.5 text-sm font-medium hover:bg-gray-50"
                  >
                    {c.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/locations/scotland" className="inline-block rounded-full bg-zinc-900 text-white px-4 py-1.5 text-sm font-medium">
                  All Scotland locations
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-heading text-xl font-bold mb-3">Sectors we recruit for</h3>
            <ul className="flex flex-wrap gap-2 list-none p-0 m-0">
              {SECTOR_LINKS.map((s) => (
                <li key={s.href}>
                  <Link
                    href={s.href}
                    className="inline-block rounded-full border border-gray-200 px-4 py-1.5 text-sm font-medium hover:bg-gray-50"
                  >
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12">
          <h3 className="font-heading text-xl md:text-2xl font-bold mb-4">Frequently asked questions</h3>
          <div className="space-y-5 max-w-4xl">
            {HOME_FAQS.map((f) => (
              <div key={f.question}>
                <h4 className="font-semibold text-lg">{f.question}</h4>
                <p className="text-gray-700 leading-relaxed mt-1">{f.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
