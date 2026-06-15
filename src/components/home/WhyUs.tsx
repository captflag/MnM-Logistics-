import { whyUs } from '../../data/company';
import { Icon } from '../../lib/icons';
import { SectionHeading } from '../ui/SectionHeading';
import { Reveal } from '../ui/Reveal';
import { TiltCard } from '../ui/TiltCard';
import { ContourLines } from '../ui/Decor';

export function WhyUs() {
  return (
    <section className="relative py-20 lg:py-28 bg-ink-900/40 border-y border-ink-800 overflow-hidden">
      <ContourLines className="opacity-70" />
      <div className="container-x relative z-10">
        <SectionHeading
          center
          eyebrow="Why MNM Logistics"
          title="Logistics you can actually rely on."
          subtitle="We obsess over the details that keep your supply chain predictable — so you never have to chase an update again."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-14">
          {whyUs.map((w, i) => (
            <Reveal key={w.title} delay={(i % 3) * 0.08}>
              <TiltCard className="h-full">
                <div className="card p-7 h-full">
                  <div className="w-12 h-12 rounded-xl bg-brand-600/15 border border-brand-600/30 flex items-center justify-center text-brand-400">
                    <Icon name={w.icon} size={22} />
                  </div>
                  <h3 className="font-display font-semibold text-lg text-white mt-5">{w.title}</h3>
                  <p className="text-mist-400 text-sm mt-2 leading-relaxed">{w.text}</p>
                </div>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
