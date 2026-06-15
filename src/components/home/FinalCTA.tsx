import { Link } from 'react-router-dom';
import { ArrowRight, Phone } from 'lucide-react';
import { company } from '../../data/company';
import { Reveal } from '../ui/Reveal';
import { Magnetic } from '../ui/Magnetic';

export function FinalCTA() {
  return (
    <section className="py-20 lg:py-28">
      <div className="container-x">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-ink-700 bg-gradient-to-br from-ink-800 to-ink-900 p-10 lg:p-16 text-center">
            <div className="absolute inset-0 bg-grid opacity-30" />
            <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-brand-600/20 blur-3xl" />
            <div className="absolute -bottom-24 -left-24 w-72 h-72 rounded-full bg-accent-500/10 blur-3xl" />
            <div className="relative z-10 max-w-2xl mx-auto">
              <h2 className="font-display font-bold text-white text-3xl sm:text-4xl lg:text-5xl tracking-tight leading-tight">
                Ready to move your freight with confidence?
              </h2>
              <p className="text-mist-300 text-lg mt-5">
                Get a transparent quote in hours, not days. Tell us your route and cargo — we'll handle the rest.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center mt-9">
                <Magnetic>
                  <Link to="/contact" className="btn-primary text-base px-7 py-4">
                    Get a Free Quote <ArrowRight size={18} />
                  </Link>
                </Magnetic>
                <a href={`tel:${company.phoneE164}`} className="btn-secondary text-base px-7 py-4">
                  <Phone size={18} /> {company.phoneDisplay}
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
