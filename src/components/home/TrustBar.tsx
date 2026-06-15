import { Building2, Factory, Boxes, Package, Ship, Warehouse } from 'lucide-react';
import { clients } from '../../data/company';

const marks = [Building2, Factory, Boxes, Package, Ship, Warehouse];

export function TrustBar() {
  return (
    <section className="border-y border-ink-800 bg-ink-900/40 py-12">
      <div className="container-x">
        <p className="text-center text-xs uppercase tracking-[0.25em] text-mist-400 mb-8">
          Trusted by businesses across India
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {clients.map((c, i) => {
            const M = marks[i % marks.length];
            return (
              <div
                key={c}
                className="group card flex flex-col items-center justify-center gap-2.5 py-6 px-3 grayscale opacity-70 hover:opacity-100 hover:grayscale-0 transition-all duration-300"
              >
                <M size={26} className="text-brand-400" />
                <span className="font-display font-bold text-sm text-mist-200 text-center leading-tight">{c}</span>
              </div>
            );
          })}
        </div>
        <p className="text-center text-mist-400/70 text-xs mt-5">Representative — swap in your real client logos.</p>
      </div>
    </section>
  );
}
