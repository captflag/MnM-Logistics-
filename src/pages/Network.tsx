import { Link } from 'react-router-dom';
import { ArrowRight, MapPin, Route } from 'lucide-react';
import { PageHero } from '../components/ui/PageHero';
import { SectionHeading } from '../components/ui/SectionHeading';
import { Reveal } from '../components/ui/Reveal';
import { hubs, lanes } from '../data/company';
import { IndiaNetworkMap } from '../components/IndiaNetworkMap';

export function Network() {
  return (
    <>
      <PageHero
        crumb="Network"
        title={<>A truly <span className="text-gradient">pan-India</span> freight network.</>}
        subtitle="From metros to manufacturing corridors, we connect the cities your business depends on — with capacity available on every major lane."
      />

      <section className="py-20 lg:py-28">
        <div className="container-x grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <Reveal>
            <div className="relative card p-6 sm:p-8 overflow-hidden">
              <div className="absolute top-4 right-4 eyebrow"><MapPin size={14} /> Live network</div>
              <IndiaNetworkMap />
            </div>
          </Reveal>
          <div>
            <SectionHeading eyebrow="Where we operate" title="Key hubs we serve." subtitle="Dedicated capacity and reliable transit across India's busiest commercial centres." />
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-8">
              {hubs.map((h, i) => (
                <Reveal key={h} delay={(i % 6) * 0.05}>
                  <div className="flex items-center gap-2 card px-4 py-3 text-sm text-mist-200">
                    <MapPin size={15} className="text-accent-500 shrink-0" /> {h}
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-20 bg-ink-900/40 border-y border-ink-800">
        <div className="container-x">
          <SectionHeading center eyebrow="Popular lanes" title="High-frequency routes." />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-12">
            {lanes.map((l, i) => (
              <Reveal key={i} delay={(i % 3) * 0.08}>
                <div className="card p-6 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Route size={20} className="text-accent-500" />
                    <span className="text-white font-medium">{l.from}</span>
                  </div>
                  <ArrowRight size={16} className="text-mist-400" />
                  <span className="text-white font-medium">{l.to}</span>
                </div>
              </Reveal>
            ))}
          </div>
          <p className="text-center text-mist-400 text-sm mt-8">Need a lane that's not listed? We likely cover it — <Link to="/contact" className="text-accent-400 hover:underline">just ask</Link>.</p>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="container-x">
          <Reveal>
            <div className="card p-10 lg:p-14 text-center bg-gradient-to-br from-ink-800 to-ink-900">
              <h2 className="font-display font-bold text-2xl sm:text-3xl text-white">Have freight to move on one of our lanes?</h2>
              <Link to="/contact" className="btn-primary mt-7">Check availability <ArrowRight size={16} /></Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
