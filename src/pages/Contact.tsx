import { Phone, Mail, MapPin, Clock, MessageCircle } from 'lucide-react';
import { PageHero } from '../components/ui/PageHero';
import { Reveal } from '../components/ui/Reveal';
import { QuoteForm } from '../components/QuoteForm';
import { company } from '../data/company';

export function Contact() {
  const { address } = company;
  const waText = encodeURIComponent("Hi MNM Logistics, I'd like to enquire about FTL freight.");
  const cards = [
    { icon: Phone, label: 'Call us', value: company.phoneDisplay, href: `tel:${company.phoneE164}` },
    { icon: MessageCircle, label: 'WhatsApp', value: 'Chat with us', href: `https://wa.me/${company.whatsapp}?text=${waText}` },
    { icon: Mail, label: 'Email', value: company.email, href: `mailto:${company.email}` },
  ];

  return (
    <>
      <PageHero
        crumb="Contact"
        title={<>Streamline your bulk <span className="text-gradient">transportation today.</span></>}
        subtitle="Whether you have an immediate factory dispatch, a spot-market lane trial, or need a long-term FTL contract partner — the MNM Logistics team is ready to deploy solutions."
      />

      <section className="py-16 lg:py-24">
        <div className="container-x grid lg:grid-cols-5 gap-10">
          <div className="lg:col-span-2 space-y-4">
            {cards.map((c, i) => (
              <Reveal key={c.label} delay={i * 0.08}>
                <a href={c.href} target={c.href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer"
                  className="card p-6 flex items-center gap-4 hover:border-brand-500/60 transition-colors group">
                  <div className="w-12 h-12 rounded-xl bg-ink-800 border border-ink-600 flex items-center justify-center text-accent-500 group-hover:bg-accent-500 group-hover:text-ink-950 transition-colors shrink-0">
                    <c.icon size={22} />
                  </div>
                  <div>
                    <div className="text-mist-400 text-sm">{c.label}</div>
                    <div className="text-white font-semibold">{c.value}</div>
                  </div>
                </a>
              </Reveal>
            ))}
            <Reveal delay={0.24}>
              <div className="card p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-ink-800 border border-ink-600 flex items-center justify-center text-accent-500 shrink-0"><MapPin size={22} /></div>
                  <div>
                    <div className="text-mist-400 text-sm">Office</div>
                    <div className="text-white font-medium leading-relaxed">{address.line1}, {address.line2}<br />{address.city}, {address.state} {address.pincode}</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 mt-5 pt-5 border-t border-ink-700 text-mist-300 text-sm">
                  <Clock size={18} className="text-accent-500" /> {company.hours}
                </div>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-3">
            <Reveal delay={0.1}>
              <QuoteForm />
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
