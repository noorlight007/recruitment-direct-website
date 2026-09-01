'use client';

import { useMemo, useState } from 'react';
import { SECTORS } from '@/lib/sectors';
import { POSITIONS, ALL_POSITIONS } from '@/data/positions';
import { getAllLocations } from '@/lib/locations';

// ---------------------------------------------------------------------------
// Find Staff — client enquiry tool.
//
// Deliberately short. No field labels, no intro paragraph, no helper text,
// no phone number. Placeholders do the labelling; screen readers get aria-label.
//
// TWO send actions: WhatsApp and Email. AI Hire Now is a SEPARATE journey
// (existing clients ordering, at /ai-hire-now) and is not a button here.
// ---------------------------------------------------------------------------

const WHATSAPP_NUMBER = '447590882626';

const QUANTITIES = ['1', '2–5', '6–10', '10+'] as const;
const URGENCY = ['ASAP', '2 weeks', 'Flexible'] as const;

interface Props {
  defaultLocation?: string;
  defaultSectorSlug?: string;
  /** Heading above the form. Pass '' for none (header panel embed). */
  heading?: string;
}

export default function FindStaff({
  defaultLocation = '',
  defaultSectorSlug = '',
  heading = '20 seconds to send your enquiry',
}: Props) {
  const [sectorSlug, setSectorSlug] = useState(defaultSectorSlug);
  const [position, setPosition] = useState('');
  const [roleSearch, setRoleSearch] = useState('');
  const [location, setLocation] = useState(defaultLocation);
  const [quantity, setQuantity] = useState<string>(QUANTITIES[0]);
  const [urgency, setUrgency] = useState<string>(URGENCY[0]);

  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [hp, setHp] = useState('');

  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const locations = useMemo(() => getAllLocations().map((l) => l.name), []);
  const sectorName = SECTORS.find((s) => s.slug === sectorSlug)?.name ?? '';
  const positionOptions = sectorSlug ? POSITIONS[sectorSlug] ?? [] : [];

  const roleMatches = useMemo(() => {
    const q = roleSearch.trim().toLowerCase();
    if (q.length < 2) return [];
    return ALL_POSITIONS.filter((p) => p.position.toLowerCase().includes(q)).slice(0, 6);
  }, [roleSearch]);

  const locationMatches = useMemo(() => {
    const q = location.trim().toLowerCase();
    if (q.length < 2) return [];
    return locations.filter((l) => l.toLowerCase().startsWith(q)).slice(0, 6);
  }, [location, locations]);

  function pickRole(p: { position: string; sectorSlug: string }) {
    setSectorSlug(p.sectorSlug);
    setPosition(p.position);
    setRoleSearch('');
  }

  const ready =
    Boolean(sectorSlug) &&
    position.trim().length > 1 &&
    location.trim().length > 1 &&
    name.trim().length > 1 &&
    company.trim().length > 1 &&
    (phone.trim().length > 5 || /\S+@\S+\.\S+/.test(email));

  function summary() {
    return [
      'Staffing enquiry via rd1.co.uk',
      '',
      `Sector: ${sectorName}`,
      `Position: ${position}`,
      `Location: ${location}`,
      `How many: ${quantity}`,
      `When: ${urgency}`,
      '',
      `Name: ${name}`,
      `Company: ${company}`,
      phone.trim() ? `Phone: ${phone}` : '',
      email.trim() ? `Email: ${email}` : '',
    ].filter((l) => l !== '').join('\n');
  }

  function sendWhatsapp() {
    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(summary())}`,
      '_blank',
      'noopener',
    );
  }

  async function sendEnquiry() {
    setStatus('sending');
    setErrorMsg('');
    try {
      const res = await fetch('/api/find-staff', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          sector: sectorName, position, location, quantity, urgency,
          name, company, phone, email, hp,
        }),
      });
      const data = await res.json().catch(() => ({ ok: false }));
      if (res.ok && data.ok) {
        setStatus('sent');
      } else {
        setStatus('error');
        setErrorMsg(data.error || 'Could not send. Call 01324 613198.');
      }
    } catch {
      setStatus('error');
      setErrorMsg('Could not send. Call 01324 613198.');
    }
  }

  if (status === 'sent') {
    return (
      <div className="fs fs--sent" role="status" aria-live="polite">
        <div className="fs__tick" aria-hidden="true">&#10003;</div>
        <h3>Thanks {name.split(' ')[0]} — we&apos;ve got your enquiry</h3>
        <p className="fs__sent-lead">
          It&apos;s with our recruitment team. Someone will be in touch shortly.
        </p>
        <dl className="fs__recap">
          <div><dt>Role</dt><dd>{quantity} &times; {position}</dd></div>
          <div><dt>Location</dt><dd>{location}</dd></div>
          <div><dt>Sector</dt><dd>{sectorName}</dd></div>
          <div><dt>When</dt><dd>{urgency}</dd></div>
        </dl>
        <button type="button" className="fs__again"
          onClick={() => { setStatus('idle'); setPosition(''); setRoleSearch(''); }}>
          Send another enquiry
        </button>
      </div>
    );
  }

  return (
    <div className="fs">
      {heading ? <p className="fs__heading">{heading}</p> : null}

      <div className="fs__field">
        <span className="fs__search-icon" aria-hidden="true">
          <svg width="17" height="17" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <circle cx="10.5" cy="10.5" r="6.5" /><path d="M15.5 15.5 21 21" />
          </svg>
        </span>
        <input
          className="fs__search"
          type="text"
          placeholder="Search a role"
          aria-label="Search a role"
          value={roleSearch}
          onChange={(e) => setRoleSearch(e.target.value)}
          autoComplete="off"
        />
        {roleMatches.length > 0 && (
          <ul className="fs__suggest">
            {roleMatches.map((m) => (
              <li key={`${m.sectorSlug}-${m.position}`}>
                <button type="button" onClick={() => pickRole(m)}>
                  {m.position}
                  <span className="fs__suggest-sector">
                    {SECTORS.find((s) => s.slug === m.sectorSlug)?.name}
                  </span>
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className="fs__stack">
        <select
          aria-label="Sector"
          value={sectorSlug}
          onChange={(e) => { setSectorSlug(e.target.value); setPosition(''); }}
        >
          <option value="">Sector</option>
          {SECTORS.map((s) => <option key={s.slug} value={s.slug}>{s.name}</option>)}
        </select>

        {/* Dropdown, but free text is accepted too — a job title missing from
            the list must never block an enquiry. */}
        <input
          type="text"
          list="fs-positions"
          placeholder={sectorSlug ? 'Position' : 'Choose a sector first'}
          aria-label="Position"
          value={position}
          onChange={(e) => setPosition(e.target.value)}
          disabled={!sectorSlug}
          autoComplete="off"
        />
        <datalist id="fs-positions">
          {positionOptions.map((p) => <option key={p} value={p} />)}
        </datalist>

        <div className="fs__field">
          <input
            type="text"
            placeholder="Location"
            aria-label="Location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            autoComplete="off"
          />
          {locationMatches.length > 0 && locationMatches[0] !== location && (
            <ul className="fs__suggest">
              {locationMatches.map((l) => (
                <li key={l}>
                  <button type="button" onClick={() => setLocation(l)}>{l}</button>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      <div className="fs__chips" role="group" aria-label="How many staff">
        {QUANTITIES.map((q) => (
          <button key={q} type="button" className="fs__chip"
            aria-pressed={quantity === q} onClick={() => setQuantity(q)}>
            {q}
          </button>
        ))}
      </div>

      <div className="fs__chips" role="group" aria-label="When you need them">
        {URGENCY.map((u) => (
          <button key={u} type="button" className="fs__chip"
            aria-pressed={urgency === u} onClick={() => setUrgency(u)}>
            {u}
          </button>
        ))}
      </div>

      <div className="fs__contact-grid">
        <input type="text" placeholder="Name" aria-label="Name"
          value={name} onChange={(e) => setName(e.target.value)} autoComplete="name" />
        <input type="text" placeholder="Company" aria-label="Company"
          value={company} onChange={(e) => setCompany(e.target.value)} autoComplete="organization" />
        <input type="tel" placeholder="Phone" aria-label="Phone"
          value={phone} onChange={(e) => setPhone(e.target.value)} autoComplete="tel" />
        <input type="email" placeholder="Email" aria-label="Email"
          value={email} onChange={(e) => setEmail(e.target.value)} autoComplete="email" />
      </div>

      <div className="fs__hp" aria-hidden="true">
        <input type="text" tabIndex={-1} autoComplete="off"
          aria-label="Leave blank" value={hp} onChange={(e) => setHp(e.target.value)} />
      </div>

      <div className="fs__actions">
        <button type="button" className="fs__send fs__send--wa"
          disabled={!ready || status === 'sending'} onClick={sendWhatsapp}>
          Send on WhatsApp
        </button>
        <button type="button" className="fs__send fs__send--email"
          disabled={!ready || status === 'sending'} onClick={sendEnquiry}>
          {status === 'sending' ? 'Sending…' : 'Send enquiry'}
        </button>
      </div>

      {status === 'error' && <p className="fs__error" role="alert">{errorMsg}</p>}
    </div>
  );
}
