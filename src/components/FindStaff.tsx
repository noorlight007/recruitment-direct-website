'use client';

import { useMemo, useState, useEffect, useRef } from 'react';
import { SECTORS } from '@/lib/sectors';
import { POSITIONS, ALL_POSITIONS } from '@/data/positions';
import { getAllLocations } from '@/lib/locations';
import { api } from '@/services/api';

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
  const [showPositions, setShowPositions] = useState(false);
  const [submittedData, setSubmittedData] = useState<{
    name: string;
    position: string;
    location: string;
    sectorName: string;
    quantity: string;
    urgency: string;
  } | null>(null);
  const positionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (positionRef.current && !positionRef.current.contains(e.target as Node)) {
        setShowPositions(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

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
      const payload = {
        role: position,
        sector: sectorName,
        location: location,
        headcount: quantity,
        timeline: urgency,

        name: name,
        company: company,
        phone: phone,
        email: email,
      };

      const result = await api.post("/core/find-staff/", payload);

      setSubmittedData({
        name,
        position,
        location,
        sectorName,
        quantity,
        urgency,
      });

      // Clear all input fields upon successful response
      setSectorSlug('');
      setPosition('');
      setRoleSearch('');
      setLocation('');
      setQuantity(QUANTITIES[0]);
      setUrgency(URGENCY[0]);
      setName('');
      setCompany('');
      setPhone('');
      setEmail('');
      setHp('');
      setShowPositions(false);

      setStatus('sent');
    } catch (err: any) {
      console.error('Find staff submission error:', err);
      setStatus('error');
      setErrorMsg(err?.message || 'Could not send. Call 01324 613198.');
    }
  }

  if (status === 'sent') {
    return (
      <div className="fs fs--sent" role="status" aria-live="polite">
        <div className="fs__tick" aria-hidden="true">&#10003;</div>
        <h3>Thanks {submittedData?.name ? submittedData.name.split(' ')[0] : 'there'} — we&apos;ve got your enquiry</h3>
        <p className="fs__sent-lead">
          It&apos;s with our recruitment team. Someone will be in touch shortly.
        </p>
        <dl className="fs__recap">
          <div><dt>Role</dt><dd>{submittedData?.quantity ? `${submittedData.quantity} \u00D7 ` : ''}{submittedData?.position}</dd></div>
          <div><dt>Location</dt><dd>{submittedData?.location}</dd></div>
          <div><dt>Sector</dt><dd>{submittedData?.sectorName}</dd></div>
          <div><dt>When</dt><dd>{submittedData?.urgency}</dd></div>
        </dl>
        <button type="button" className="fs__again"
          onClick={() => {
            setStatus('idle');
            setSubmittedData(null);
          }}>
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
          className={`fs__search ${roleSearch ? 'has-clear' : ''}`}
          type="text"
          placeholder="Search a role"
          aria-label="Search a role"
          value={roleSearch}
          onChange={(e) => setRoleSearch(e.target.value)}
          autoComplete="off"
        />
        {roleSearch ? (
          <div
            role="button"
            tabIndex={0}
            className="fs__clear-btn"
            aria-label="Clear role search"
            title="Clear role search"
            onClick={() => setRoleSearch('')}
            onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); setRoleSearch(''); } }}
          >
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </div>
        ) : null}
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
        <div className="fs__field">
          <select
            aria-label="Sector"
            value={sectorSlug}
            className={sectorSlug ? 'has-clear' : ''}
            onChange={(e) => {
              setSectorSlug(e.target.value);
              setPosition('');
              setShowPositions(false);
            }}
          >
            <option value="">Sector</option>
            {SECTORS.map((s) => <option key={s.slug} value={s.slug}>{s.name}</option>)}
          </select>
          {sectorSlug ? (
            <div
              role="button"
              tabIndex={0}
              className="fs__clear-btn fs__clear-btn--select"
              aria-label="Clear sector"
              title="Clear sector"
              onClick={() => { setSectorSlug(''); setPosition(''); }}
              onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); setSectorSlug(''); setPosition(''); } }}
            >
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </div>
          ) : null}
        </div>

        {/* Dropdown, but free text is accepted too — a job title missing from
            the list must never block an enquiry. */}
        <div className="fs__field" ref={positionRef}>
          <input
            type="text"
            placeholder={sectorSlug ? 'Position' : 'Choose a sector first'}
            aria-label="Position"
            value={position}
            className={position ? 'has-clear' : ''}
            onChange={(e) => {
              setPosition(e.target.value);
              setShowPositions(true);
            }}
            onClick={() => {
              if (sectorSlug) setShowPositions(true);
            }}
            onFocus={() => {
              if (sectorSlug) setShowPositions(true);
            }}
            disabled={!sectorSlug}
            autoComplete="off"
          />
          {position ? (
            <div
              role="button"
              tabIndex={0}
              className="fs__clear-btn"
              aria-label="Clear position"
              title="Clear position"
              onClick={() => {
                setPosition('');
                setShowPositions(true);
              }}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  setPosition('');
                  setShowPositions(true);
                }
              }}
            >
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </div>
          ) : null}
          {showPositions && positionOptions.length > 0 && (
            <ul className="fs__suggest">
              {positionOptions.map((p) => (
                <li key={p}>
                  <button
                    type="button"
                    onClick={() => {
                      setPosition(p);
                      setShowPositions(false);
                    }}
                    style={p === position ? { fontWeight: 700, background: '#f1f5f9' } : undefined}
                  >
                    {p}
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="fs__field">
          <input
            type="text"
            placeholder="Location"
            aria-label="Location"
            value={location}
            className={location ? 'has-clear' : ''}
            onChange={(e) => setLocation(e.target.value)}
            autoComplete="off"
          />
          {location ? (
            <div
              role="button"
              tabIndex={0}
              className="fs__clear-btn"
              aria-label="Clear location"
              title="Clear location"
              onClick={() => setLocation('')}
              onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); setLocation(''); } }}
            >
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </div>
          ) : null}
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

      <div className="fs__chips-group">
        <div className="fs__chips-header">
          <span className="fs__chips-title">How many staff:</span>
          {quantity ? (
            <span className="fs__chips-selected">
              {quantity}
              <div
                role="button"
                tabIndex={0}
                className="fs__chip-remove"
                aria-label="Remove selected quantity"
                title="Remove quantity"
                onClick={() => setQuantity('')}
                onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); setQuantity(''); } }}
              >
                <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </div>
            </span>
          ) : null}
        </div>
        <div className="fs__chips" role="group" aria-label="How many staff">
          {QUANTITIES.map((q) => (
            <button
              key={q}
              type="button"
              className="fs__chip"
              aria-pressed={quantity === q}
              onClick={() => setQuantity(quantity === q ? '' : q)}
            >
              {q}
            </button>
          ))}
        </div>
      </div>

      <div className="fs__chips-group">
        <div className="fs__chips-header">
          <span className="fs__chips-title">When you need them:</span>
          {urgency ? (
            <span className="fs__chips-selected">
              {urgency}
              <div
                role="button"
                tabIndex={0}
                className="fs__chip-remove"
                aria-label="Remove selected urgency"
                title="Remove urgency"
                onClick={() => setUrgency('')}
                onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); setUrgency(''); } }}
              >
                <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </div>
            </span>
          ) : null}
        </div>
        <div className="fs__chips" role="group" aria-label="When you need them">
          {URGENCY.map((u) => (
            <button
              key={u}
              type="button"
              className="fs__chip"
              aria-pressed={urgency === u}
              onClick={() => setUrgency(urgency === u ? '' : u)}
            >
              {u}
            </button>
          ))}
        </div>
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
