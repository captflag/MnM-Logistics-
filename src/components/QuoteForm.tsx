import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Send, CheckCircle2, Loader2, AlertCircle } from 'lucide-react';
import { company, services, cargoTypes, vehicleTypes } from '../data/company';
import { submitLead } from '../lib/leads';

type Status = 'idle' | 'sending' | 'sent' | 'error';

const emailOk = (v: string) => v === '' || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
const phoneOk = (v: string) => v.replace(/\D/g, '').length >= 7;

export function QuoteForm() {
  const [status, setStatus] = useState<Status>('idle');
  const [errMsg, setErrMsg] = useState('');
  const [via, setVia] = useState<'web3forms' | 'mailto'>('web3forms');
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [form, setForm] = useState({
    name: '', company: '', phone: '', email: '',
    origin: '', destination: '',
    vehicle: vehicleTypes[0], cargo: cargoTypes[0], weight: '',
    service: services[0].title, message: '', botcheck: '',
  });

  const [params] = useSearchParams();
  useEffect(() => {
    const origin = params.get('origin') ?? '';
    const destination = params.get('destination') ?? '';
    const vehicle = params.get('vehicle') ?? '';
    if (origin || destination || vehicle) {
      setForm((f) => ({ ...f, origin: origin || f.origin, destination: destination || f.destination, vehicle: vehicle || f.vehicle }));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const update = (k: string, v: string) => {
    setForm((f) => ({ ...f, [k]: v }));
    if (errors[k]) setErrors((e) => ({ ...e, [k]: '' }));
  };

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = 'Please enter your name';
    if (!phoneOk(form.phone)) e.phone = 'Enter a valid phone number';
    if (!emailOk(form.email)) e.email = 'Enter a valid email';
    if (!form.origin.trim()) e.origin = 'Required';
    if (!form.destination.trim()) e.destination = 'Required';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const onSubmit = async (ev: React.FormEvent) => {
    ev.preventDefault();
    if (!validate()) return;
    setStatus('sending');
    setErrMsg('');
    const res = await submitLead({ ...form, botcheck: !!form.botcheck, source: 'quote-form' });
    if (res.ok) {
      setVia(res.via ?? 'web3forms');
      setStatus('sent');
    } else {
      setErrMsg(res.error ?? 'Something went wrong. Please call or WhatsApp us.');
      setStatus('error');
    }
  };

  if (status === 'sent') {
    return (
      <div className="card p-10 text-center">
        <CheckCircle2 size={48} className="text-accent-500 mx-auto" />
        <h3 className="font-display font-bold text-2xl text-white mt-5">Thanks — we've got your request!</h3>
        <p className="text-mist-300 mt-3">
          {via === 'web3forms'
            ? "Our team will get back to you within a few business hours."
            : "Your email app should have opened with the details pre-filled — hit send and we'll respond shortly."}
          {' '}Prefer to talk now? Call{' '}
          <a href={`tel:${company.phoneE164}`} className="text-accent-400 hover:underline">{company.phoneDisplay}</a>.
        </p>
        <button onClick={() => setStatus('idle')} className="btn-secondary mt-7">Send another request</button>
      </div>
    );
  }

  const base = 'w-full bg-ink-950/60 border rounded-xl px-4 py-3 text-sm text-mist-100 placeholder:text-mist-400 focus:outline-none transition-colors';
  const field = (k: string) => `${base} ${errors[k] ? 'border-red-500/70 focus:border-red-500' : 'border-ink-600 focus:border-brand-500'}`;
  const label = 'block text-sm font-medium text-mist-200 mb-1.5';
  const err = (k: string) => errors[k] ? <span className="text-red-400 text-xs mt-1 block">{errors[k]}</span> : null;

  return (
    <form onSubmit={onSubmit} noValidate className="card p-7 sm:p-9">
      {/* honeypot (hidden from users) */}
      <input type="text" tabIndex={-1} autoComplete="off" value={form.botcheck}
        onChange={(e) => update('botcheck', e.target.value)}
        className="hidden" aria-hidden="true" />

      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label className={label}>Full name *</label>
          <input value={form.name} onChange={(e) => update('name', e.target.value)} className={field('name')} placeholder="Your name" />
          {err('name')}
        </div>
        <div>
          <label className={label}>Company</label>
          <input value={form.company} onChange={(e) => update('company', e.target.value)} className={field('company')} placeholder="Company name" />
        </div>
        <div>
          <label className={label}>Phone *</label>
          <input type="tel" value={form.phone} onChange={(e) => update('phone', e.target.value)} className={field('phone')} placeholder="+91 ..." />
          {err('phone')}
        </div>
        <div>
          <label className={label}>Email</label>
          <input type="email" value={form.email} onChange={(e) => update('email', e.target.value)} className={field('email')} placeholder="you@company.com" />
          {err('email')}
        </div>
        <div>
          <label className={label}>Pickup (origin) city *</label>
          <input value={form.origin} onChange={(e) => update('origin', e.target.value)} className={field('origin')} placeholder="Origin city" />
          {err('origin')}
        </div>
        <div>
          <label className={label}>Delivery (destination) city *</label>
          <input value={form.destination} onChange={(e) => update('destination', e.target.value)} className={field('destination')} placeholder="Destination city" />
          {err('destination')}
        </div>
        <div>
          <label className={label}>Required vehicle type</label>
          <select value={form.vehicle} onChange={(e) => update('vehicle', e.target.value)} className={field('vehicle') + ' cursor-pointer'}>
            {vehicleTypes.map((v) => <option key={v} value={v}>{v}</option>)}
          </select>
        </div>
        <div>
          <label className={label}>Service</label>
          <select value={form.service} onChange={(e) => update('service', e.target.value)} className={field('service') + ' cursor-pointer'}>
            {services.map((s) => <option key={s.id} value={s.title}>{s.title}</option>)}
          </select>
        </div>
        <div>
          <label className={label}>Cargo / material type</label>
          <select value={form.cargo} onChange={(e) => update('cargo', e.target.value)} className={field('cargo') + ' cursor-pointer'}>
            {cargoTypes.map((c) => <option key={c} value={c}>{c}</option>)}
          </select>
        </div>
        <div>
          <label className={label}>Estimated cargo weight</label>
          <input value={form.weight} onChange={(e) => update('weight', e.target.value)} className={field('weight')} placeholder="e.g. 18 tonnes" />
        </div>
      </div>
      <div className="mt-5">
        <label className={label}>Additional requirements</label>
        <textarea value={form.message} onChange={(e) => update('message', e.target.value)} rows={4} className={field('message')} placeholder="Multi-point drop, ODC, geofenced lock, timeline, dimensions — anything we should know." />
      </div>

      {status === 'error' && (
        <div className="mt-5 flex items-start gap-2 rounded-xl border border-red-500/40 bg-red-500/10 px-4 py-3 text-sm text-red-200">
          <AlertCircle size={18} className="shrink-0 mt-0.5" /> {errMsg}
        </div>
      )}

      <button type="submit" disabled={status === 'sending'} className="btn-primary w-full mt-6 text-base py-4 disabled:opacity-70">
        {status === 'sending' ? <><Loader2 size={18} className="animate-spin" /> Sending…</> : <>Request My FTL Quote <Send size={17} /></>}
      </button>
      <p className="text-mist-400 text-xs text-center mt-4">Transparent, itemized quotes with zero hidden charges. We typically respond within a few business hours.</p>
    </form>
  );
}
