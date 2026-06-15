import { industries } from '../../data/company';
import { Icon } from '../../lib/icons';
import { SectionHeading } from '../ui/SectionHeading';
import { Reveal } from '../ui/Reveal';
import { TiltCard } from '../ui/TiltCard';
import { MapWatermark } from '../ui/Decor';

export function Industries() {
  return (
    <section className="relative py-20 lg:py-28 overflow-hidden">
      <MapWatermark className="right-0 top-1/2 -translate-y-1/2 h-[120%] w-auto" />
      <div className="container-x relative z-10">
        <SectionHeading
          eyebrow="Industries we serve"
          title="Sector-specific FTL expertise."
          subtitle="Effective long-haul trucking requires deep operational knowledge. We bring tailored solutions to India's most demanding manufacturing and consumer sectors."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-14">
          {industries.map((it, i) => (
            <Reveal key={it.title} delay={(i % 3) * 0.08}>
              <TiltCard className="h-full">
                <div className="card p-7 h-full flex gap-4">
                  <div className="w-11 h-11 rounded-xl bg-ink-800 border border-ink-600 flex items-center justify-center text-accent-500 shrink-0">
                    <Icon name={it.icon} size={20} />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-lg text-white">{it.title}</h3>
                    <p className="text-mist-400 text-sm mt-2 leading-relaxed">{it.text}</p>
                  </div>
                </div>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
