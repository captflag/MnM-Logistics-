import { truckImg, FALLBACK_TRUCK } from '../../data/company';
import { Img } from '../ui/Img';
import { SectionHeading } from '../ui/SectionHeading';
import { Reveal } from '../ui/Reveal';

const fleet = [
  { img: truckImg.night, name: 'Closed-body FTL', sub: 'Secure full truck loads' },
  { img: truckImg.container, name: 'Container & Reefer', sub: 'Sealed & temperature-safe' },
  { img: truckImg.fleet, name: 'Flatbed (Open)', sub: 'Bulky & irregular cargo' },
  { img: truckImg.machinery, name: 'ODC / Project Cargo', sub: 'Heavy machinery & ODC' },
];

export function FleetShowcase() {
  return (
    <section className="py-20 lg:py-28">
      <div className="container-x">
        <SectionHeading
          eyebrow="Our fleet"
          title="Purpose-matched trucks for every load."
          subtitle="From closed-body and containers to flatbeds and over-dimensional trailers — we deploy the right vehicle for your cargo, every time."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-12">
          {fleet.map((f, i) => (
            <Reveal key={f.name} delay={(i % 4) * 0.07}>
              <div className="group card overflow-hidden h-full">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Img
                    src={f.img}
                    fallback={FALLBACK_TRUCK}
                    alt={`MNM Logistics — ${f.name}`}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink-950/80 to-transparent" />
                </div>
                <div className="p-5">
                  <h3 className="font-display font-semibold text-white">{f.name}</h3>
                  <p className="text-mist-400 text-sm mt-1">{f.sub}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
