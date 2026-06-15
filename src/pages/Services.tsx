import { Link } from 'react-router-dom';
import { ArrowRight, Check } from 'lucide-react';
import { PageHero } from '../components/ui/PageHero';
import { Reveal } from '../components/ui/Reveal';
import { Icon } from '../lib/icons';
import { services, FALLBACK_TRUCK } from '../data/company';
import { Img } from '../components/ui/Img';

export function ServicesPage() {
  return (
    <>
      <PageHero
        crumb="Services"
        title={<>Freight capabilities for <span className="text-gradient">every kind of cargo.</span></>}
        subtitle="Whatever you ship and wherever it needs to go, we have a dedicated solution built to keep it safe and on schedule."
      />

      <section className="py-20 lg:py-24">
        <div className="container-x flex flex-col gap-6">
          {services.map((s, i) => (
            <Reveal key={s.id} delay={(i % 2) * 0.08}>
              <article className={`group card overflow-hidden grid lg:grid-cols-2 ${i % 2 === 1 ? 'lg:[direction:rtl]' : ''}`}>
                <div className="relative min-h-64 lg:[direction:ltr]">
                  <Img src={s.image} fallback={FALLBACK_TRUCK} alt={s.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink-900/80 to-transparent lg:bg-gradient-to-r" />
                </div>
                <div className="p-8 lg:p-10 lg:[direction:ltr]">
                  <div className="w-12 h-12 rounded-xl bg-ink-800 border border-ink-600 flex items-center justify-center text-accent-500">
                    <Icon name={s.icon} size={22} />
                  </div>
                  <h2 className="font-display font-bold text-2xl text-white mt-5">{s.title}</h2>
                  <p className="text-mist-300 leading-relaxed mt-3">{s.description}</p>
                  <ul className="grid sm:grid-cols-2 gap-2.5 mt-6">
                    {s.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-sm text-mist-200">
                        <Check size={16} className="text-accent-500 shrink-0" /> {f}
                      </li>
                    ))}
                  </ul>
                  <Link to="/contact" className="btn-secondary mt-7">Request this service <ArrowRight size={16} /></Link>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="pb-24">
        <div className="container-x">
          <Reveal>
            <div className="card p-10 lg:p-14 text-center bg-gradient-to-br from-ink-800 to-ink-900">
              <h2 className="font-display font-bold text-2xl sm:text-3xl text-white">Not sure which service fits?</h2>
              <p className="text-mist-300 mt-3 max-w-xl mx-auto">Tell us about your cargo and route — we'll recommend the right solution and quote it for you.</p>
              <Link to="/contact" className="btn-primary mt-7">Talk to our team <ArrowRight size={16} /></Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
