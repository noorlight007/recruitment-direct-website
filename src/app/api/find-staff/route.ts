import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// ---------------------------------------------------------------------------
// Find Staff enquiry endpoint.
//
// Sends to sales@rd1.co.uk (Nicola + Steven).
//
// SMTP settings come from environment variables — do NOT hardcode credentials.
// Add these in Vercel (or wherever this deploys):
//
//   SMTP_HOST=          e.g. smtp.office365.com
//   SMTP_PORT=587
//   SMTP_USER=
//   SMTP_PASS=
//   ENQUIRY_TO=sales@rd1.co.uk
//   ENQUIRY_FROM=       an address the SMTP account is allowed to send as
//
// If the site already sends the contact form somewhere, reuse that transport
// instead of adding a second one.
// ---------------------------------------------------------------------------

const TO = process.env.ENQUIRY_TO || 'sales@rd1.co.uk';

interface Enquiry {
  sector: string;
  position: string;
  location: string;
  quantity: string;
  urgency: string;
  name: string;
  company: string;
  website?: string;
  phone?: string;
  email?: string;
  /** Honeypot — must be empty. Bots fill it in. */
  hp?: string;
}

function clean(v: unknown, max = 200): string {
  return typeof v === 'string' ? v.trim().slice(0, max) : '';
}

export async function POST(request: Request) {
  let body: Enquiry;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: 'Bad request' }, { status: 400 });
  }

  // Silently accept and discard bot submissions.
  if (clean(body.hp)) {
    return NextResponse.json({ ok: true });
  }

  const enquiry = {
    sector: clean(body.sector),
    position: clean(body.position),
    location: clean(body.location),
    quantity: clean(body.quantity, 20),
    urgency: clean(body.urgency, 40),
    name: clean(body.name, 100),
    company: clean(body.company, 150),
    website: clean(body.website, 200),
    phone: clean(body.phone, 40),
    email: clean(body.email, 150),
  };

  const missing =
    !enquiry.sector ||
    !enquiry.position ||
    !enquiry.location ||
    !enquiry.name ||
    !enquiry.company ||
    (!enquiry.phone && !enquiry.email);

  if (missing) {
    return NextResponse.json(
      { ok: false, error: 'Please complete the required fields.' },
      { status: 422 },
    );
  }

  const subject =
    `Staffing enquiry — ${enquiry.quantity} × ${enquiry.position} in ${enquiry.location}`;

  const text = [
    'New staffing enquiry from rd1.co.uk',
    '',
    `Sector:       ${enquiry.sector}`,
    `Position:     ${enquiry.position}`,
    `Location:     ${enquiry.location}`,
    `How many:     ${enquiry.quantity}`,
    `When:         ${enquiry.urgency}`,
    '',
    `Name:         ${enquiry.name}`,
    `Company:      ${enquiry.company}`,
    enquiry.website ? `Website:      ${enquiry.website}` : '',
    enquiry.phone ? `Phone:        ${enquiry.phone}` : '',
    enquiry.email ? `Email:        ${enquiry.email}` : '',
    '',
    `Received:     ${new Date().toLocaleString('en-GB', { timeZone: 'Europe/London' })}`,
  ]
    .filter(Boolean)
    .join('\n');

  const html = `
    <h2 style="font-family:system-ui,sans-serif;color:#0c1730;margin:0 0 16px">
      New staffing enquiry
    </h2>
    <table style="font-family:system-ui,sans-serif;font-size:15px;border-collapse:collapse">
      ${row('Sector', enquiry.sector)}
      ${row('Position', enquiry.position)}
      ${row('Location', enquiry.location)}
      ${row('How many', enquiry.quantity)}
      ${row('When', enquiry.urgency)}
      <tr><td colspan="2" style="padding:10px 0"><hr style="border:0;border-top:1px solid #d9dde4"></td></tr>
      ${row('Name', enquiry.name)}
      ${row('Company', enquiry.company)}
      ${enquiry.website ? row('Website', enquiry.website) : ''}
      ${enquiry.phone ? row('Phone', `<a href="tel:${enquiry.phone}">${enquiry.phone}</a>`) : ''}
      ${enquiry.email ? row('Email', `<a href="mailto:${enquiry.email}">${enquiry.email}</a>`) : ''}
    </table>
  `;

  try {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT || 587),
      secure: Number(process.env.SMTP_PORT) === 465,
      auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
    });

    await transporter.sendMail({
      from: process.env.ENQUIRY_FROM || process.env.SMTP_USER,
      to: TO,
      // Hitting reply in the inbox goes straight back to the client.
      replyTo: enquiry.email || undefined,
      subject,
      text,
      html,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error('Find Staff enquiry send failed:', err);
    return NextResponse.json(
      { ok: false, error: 'Could not send. Please call 01324 613198.' },
      { status: 500 },
    );
  }
}

function row(label: string, value: string) {
  return `<tr>
    <td style="padding:4px 16px 4px 0;color:#5b6472;white-space:nowrap">${label}</td>
    <td style="padding:4px 0;color:#101418"><strong>${value}</strong></td>
  </tr>`;
}
