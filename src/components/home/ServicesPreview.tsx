import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { services } from '../../data/company';
import { Icon } from '../../lib/icons';
import { SectionHeading } from '../ui/SectionHeading';
import { Reveal } from '../ui/Reveal';
import { TiltCard } from '../ui/TiltCard';

export function ServicesPreview() {
  return (
    <section className="py-20 lg:py-28">
      <div className="container-x">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <SectionHeading
            eyebrow="What we move"
            title={<>Freight solutions built<br className="hidden sm:block" /> around your cargo.</>}
            subtitle="From dedicated full truck loads to specialised project cargo, we match the right capacity to every shipment."
          />
          <Reveal>
            <Link to="/services" className="btn-secondary shrink-0">
              All services <ArrowRight size={16} />
            </Link>
          </Reveal>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-12">
          {services.map((s, i) => (
            <Reveal key={s.id} delay={(i % 3) * 0.08}>
              <TiltCard className="h-full">
                <Link to="/services" className="group card p-7 h-full block hover:border-brand-500/60 transition-colors">
                  <div className="flex items-start justify-between">
                    <div className="w-12 h-12 rounded-xl bg-ink-800 border border-ink-600 flex items-center justify-center text-accent-500 group-hover:bg-accent-500 group-hover:text-ink-950 transition-colors">
                      <Icon name={s.icon} size={22} />
                    </div>
                    <ArrowUpRight size={20} className="text-mist-400 group-hover:text-accent-400 transition-colors" />
                  </div>
                  <h3 className="font-display font-semibold text-xl text-white mt-5">{s.title}</h3>
                  <p className="text-mist-400 text-sm mt-2 leading-relaxed">{s.short}</p>
                </Link>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
