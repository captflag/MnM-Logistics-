import { Link } from 'react-router-dom';
import { ArrowRight, Phone } from 'lucide-react';
import { company } from '../../data/company';
import { Reveal } from '../ui/Reveal';

export function MidCTA() {
  return (
    <section className="py-8 lg:py-10">
      <div className="container-x">
        <Reveal>
          <div className="relative overflow-hidden rounded-2xl border border-ink-700 bg-gradient-to-r from-ink-800 to-ink-900 px-7 py-8 sm:px-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="absolute -top-16 -right-10 w-60 h-60 rounded-full bg-accent-500/10 blur-3xl" />
            <div className="relative z-10">
              <h3 className="font-display font-bold text-white text-2xl sm:text-3xl tracking-tight">
                Need capacity on your lane this week?
              </h3>
              <p className="text-mist-300 mt-2">Tell us your route and cargo — we'll place the right truck, fast.</p>
            </div>
            <div className="relative z-10 flex flex-col sm:flex-row gap-3 shrink-0">
              <Link to="/contact" className="btn-primary">Get a Quote <ArrowRight size={16} /></Link>
              <a href={`tel:${company.phoneE164}`} className="btn-secondary"><Phone size={16} /> Call now</a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
