// Internal notification for a new credit application.
// Full details stay in JobAdder - this email only points to them.
// Send from the backend that receives the form post (api.callpilot.pro).

const LOGO = 'https://rd1.co.uk/logo.png';

const esc = (v: string) =>
  v.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

export function creditApplicationEmail(opts: {
  recipientFirstName: string;
  companyName: string;
  submittedAt: Date;
  jobAdderUrl: string;
}) {
  const company = esc(opts.companyName);
  const name = esc(opts.recipientFirstName);
  const d = opts.submittedAt;
  const date = d.toLocaleDateString('en-GB', { day: 'numeric', month: 'long', timeZone: 'Europe/London' });
  const time = d.toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit', timeZone: 'Europe/London' });

  const subject = `New credit application — ${opts.companyName}`;
  const line = `${opts.companyName} submitted a credit application on ${date} at ${time}. The company record and full application are saved in JobAdder.`;

  const text = [
    'RECRUITMENT DIRECT',
    '',
    subject,
    '',
    `Hi ${opts.recipientFirstName},`,
    '',
    line,
    '',
    `Open in JobAdder: ${opts.jobAdderUrl}`,
  ].join('\n');

  const html = `<!doctype html>
<html><body style="margin:0;background:#ffffff;font-family:Arial,Helvetica,sans-serif;color:#111111">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0"><tr><td align="center" style="padding:24px 16px">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:520px">
    <tr><td style="padding-bottom:20px;border-bottom:1px solid #d4d4d4">
      <img src="${LOGO}" alt="Recruitment Direct" height="36" style="display:block;border:0;height:36px">
    </td></tr>
    <tr><td style="padding:24px 0 8px;font-size:18px;font-weight:700">New credit application — ${company}</td></tr>
    <tr><td style="padding:8px 0;font-size:15px;line-height:1.5">Hi ${name},</td></tr>
    <tr><td style="padding:8px 0 24px;font-size:15px;line-height:1.5">${esc(line)}</td></tr>
    <tr><td>
      <a href="${esc(opts.jobAdderUrl)}" style="display:inline-block;background:#1c1c1c;color:#ffffff;text-decoration:none;font-size:15px;font-weight:700;padding:12px 22px;border-radius:6px">Open in JobAdder</a>
    </td></tr>
  </table>
</td></tr></table>
</body></html>`;

  return { subject, text, html };
}
