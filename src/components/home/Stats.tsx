import { stats } from '../../data/company';
import { CountUp } from '../ui/CountUp';
import { Reveal } from '../ui/Reveal';
import { Glow, GridOverlay } from '../ui/Decor';

export function Stats() {
  return (
    <section className="relative py-16 lg:py-20 overflow-hidden">
      <GridOverlay className="opacity-30" />
      <Glow color="brand" className="-top-24 -left-24 w-[26rem] h-[26rem]" />
      <div className="container-x relative z-10">
        <div className="text-center mb-10">
          <span className="eyebrow"><span className="h-px w-7 bg-accent-500 inline-block" /> MNM Logistics by the numbers</span>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.08}>
              <div className="card p-6 lg:p-8 h-full">
                <div className="font-display font-extrabold text-3xl lg:text-5xl text-white">
                  {typeof s.count === 'number'
                    ? <CountUp end={s.count} suffix={s.suffix} />
                    : s.value}
                </div>
                <div className="text-mist-200 font-semibold mt-2">{s.label}</div>
                <div className="text-mist-400 text-sm mt-1">{s.note}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
