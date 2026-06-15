import { company, forms } from '../data/company';

export type Lead = {
  name: string;
  company?: string;
  phone: string;
  email?: string;
  origin?: string;
  destination?: string;
  vehicle?: string;
  cargo?: string;
  weight?: string;
  service?: string;
  message?: string;
  source?: string;
  botcheck?: boolean;
};

export type SubmitResult = { ok: boolean; via?: 'web3forms' | 'mailto'; error?: string };

function buildText(lead: Lead) {
  return [
    `Name: ${lead.name}`,
    `Company: ${lead.company || '-'}`,
    `Phone: ${lead.phone}`,
    `Email: ${lead.email || '-'}`,
    `Service: ${lead.service || '-'}`,
    `Vehicle: ${lead.vehicle || '-'}`,
    `Cargo: ${lead.cargo || '-'}`,
    `Est. weight: ${lead.weight || '-'}`,
    `Route: ${lead.origin || '?'} -> ${lead.destination || '?'}`,
    '',
    'Message:',
    lead.message || '-',
    '',
    `Source: ${lead.source || 'website'}`,
  ].join('\n');
}

const KEY = (forms.web3formsKey || '').trim();
const isConfigured = KEY.length > 10;

export async function submitLead(lead: Lead): Promise<SubmitResult> {
  // Honeypot — if filled, silently "succeed" (bot).
  if (lead.botcheck) return { ok: true, via: 'web3forms' };

  const subject = `FTL Quote Request — ${lead.name || 'Website enquiry'}`;

  if (isConfigured) {
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: KEY,
          subject,
          from_name: lead.name || 'Website enquiry',
          replyto: lead.email || '',
          name: lead.name,
          company: lead.company,
          phone: lead.phone,
          email: lead.email,
          service: lead.service,
          vehicle: lead.vehicle,
          cargo: lead.cargo,
          weight: lead.weight,
          origin: lead.origin,
          destination: lead.destination,
          message: lead.message,
          source: lead.source || 'website',
        }),
      });
      const data = await res.json().catch(() => ({}));
      if (res.ok && data.success) return { ok: true, via: 'web3forms' };
      return { ok: false, error: data.message || 'Submission failed. Please try again or call us.' };
    } catch {
      return { ok: false, error: 'Network error. Please check your connection or call us.' };
    }
  }

  // Fallback: open the visitor's email client pre-filled.
  try {
    const body = encodeURIComponent(buildText(lead));
    window.location.href = `mailto:${company.salesEmail}?subject=${encodeURIComponent(subject)}&body=${body}`;
    return { ok: true, via: 'mailto' };
  } catch {
    return { ok: false, error: 'Could not open your email app. Please call or WhatsApp us.' };
  }
}
