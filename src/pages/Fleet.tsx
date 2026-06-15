import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Container, Truck, HardHat, ShieldCheck, Check, Weight, Ruler, ArrowRight } from 'lucide-react';
import { PageHero } from '../components/ui/PageHero';
import { Reveal } from '../components/ui/Reveal';
import { TiltCard } from '../components/ui/TiltCard';
import { vehicles, fleetGroups, groupCount } from '../data/fleet';

const groupIcon: Record<string, typeof Truck> = {
  container: Container, open: Truck, heavy: HardHat, secure: ShieldCheck,
};

export function Fleet() {
  const [active, setActive] = useState<string>('all');
  const list = active === 'all' ? vehicles : vehicles.filter((v) => v.group === active);

  return (
    <>
      <PageHero
        crumb="Fleet"
        eyebrow="Our FTL Fleet"
        title={<>Built for <span className="text-gradient">every kind of load.</span></>}
        subtitle="11 vehicle types across closed containers, open bodies, heavy ODC trailers, and secure FTL transport. Our dispatch team matches the right vehicle to your route."
      />

      <section className="py-14 lg:py-20">
        <div className="container-x">
          {/* Filter tabs */}
          <div className="flex flex-wrap gap-2.5 mb-10">
            {fleetGroups.map((g) => {
              const isActive = active === g.key;
              return (
                <button
                  key={g.key}
                  onClick={() => setActive(g.key)}
                  className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium border transition-colors ${
                    isActive
                      ? 'bg-accent-500 text-ink-950 border-accent-500'
                      : 'bg-ink-900/60 text-mist-300 border-ink-600 hover:border-accent-500/50 hover:text-white'
                  }`}
                >
                  {g.label}
                  <span className={`text-xs font-bold rounded-full px-1.5 py-0.5 ${isActive ? 'bg-ink-950/20 text-ink-950' : 'bg-ink-800 text-mist-400'}`}>
                    {groupCount(g.key)}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Vehicle grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {list.map((v, i) => {
              const Ico = groupIcon[v.group] ?? Truck;
              return (
                <Reveal key={v.name} delay={(i % 3) * 0.06}>
                  <TiltCard className="h-full" max={4}>
                    <article className="card h-full flex flex-col overflow-hidden">
                      <div className="p-6 flex-1">
                        <div className="flex items-center justify-between">
                          <span className="inline-flex items-center gap-1.5 rounded-full bg-ink-800 border border-ink-600 px-3 py-1 text-xs font-semibold text-accent-400">
                            <Ico size={13} /> {v.tag}
                          </span>
                        </div>
                        <h3 className="font-display font-bold text-xl text-white mt-4">{v.name}</h3>

                        <div className="grid grid-cols-2 gap-3 mt-5">
                          <div className="rounded-xl bg-ink-950/50 border border-ink-700 p-3">
                            <div className="flex items-center gap-1.5 text-mist-400 text-[11px] uppercase tracking-wider"><Weight size={13} /> Capacity</div>
                            <div className="text-white font-semibold text-sm mt-1">{v.capacity}</div>
                          </div>
                          <div className="rounded-xl bg-ink-950/50 border border-ink-700 p-3">
                            <div className="flex items-center gap-1.5 text-mist-400 text-[11px] uppercase tracking-wider"><Ruler size={13} /> Dimensions</div>
                            <div className="text-white font-semibold text-sm mt-1">{v.dimensions}</div>
                          </div>
                        </div>

                        <div className="mt-5">
                          <div className="text-mist-400 text-[11px] uppercase tracking-wider mb-2">Best for</div>
                          <div className="flex flex-wrap gap-1.5">
                            {v.bestFor.map((b) => (
                              <span key={b} className="rounded-md bg-ink-800/70 border border-ink-700 px-2 py-1 text-xs text-mist-300">{b}</span>
                            ))}
                          </div>
                        </div>
                      </div>

                      <ul className="border-t border-ink-700 p-5 space-y-2">
                        {v.features.map((f) => (
                          <li key={f} className="flex items-center gap-2 text-sm text-mist-200">
                            <Check size={15} className="text-accent-500 shrink-0" /> {f}
                          </li>
                        ))}
                      </ul>
                    </article>
                  </TiltCard>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="pb-24">
        <div className="container-x">
          <Reveal>
            <div className="card p-10 lg:p-14 text-center bg-gradient-to-br from-ink-800 to-ink-900">
              <h2 className="font-display font-bold text-2xl sm:text-3xl text-white">Not sure which vehicle fits your load?</h2>
              <p className="text-mist-300 mt-3 max-w-xl mx-auto">Tell us your cargo, weight, and route — our dispatch team will recommend the right truck and quote it.</p>
              <Link to="/contact" className="btn-primary mt-7">Get a Quote <ArrowRight size={16} /></Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
