import { useEffect, useRef, useState } from 'react';
import { processSteps } from '../../data/company';
import { SectionHeading } from '../ui/SectionHeading';
import { Reveal } from '../ui/Reveal';

export function Process() {
  const ref = useRef<HTMLDivElement>(null);
  const [p, setP] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const el = ref.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      const vh = window.innerHeight;
      const prog = (vh * 0.78 - r.top) / (r.height * 0.85);
      setP(Math.max(0, Math.min(1, prog)));
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  return (
    <section className="relative py-20 lg:py-28 overflow-hidden">
      <div className="container-x relative z-10">
        <SectionHeading
          eyebrow="How it works"
          title="From quote to delivery, in six accountable steps."
          subtitle="A simple, transparent process designed to get your freight moving fast."
        />

        <div ref={ref} className="relative max-w-3xl mx-auto mt-14 pl-16">
          {/* track */}
          <div className="absolute left-6 top-1 bottom-1 w-0.5 bg-ink-700">
            <div className="absolute top-0 left-0 w-full bg-accent-500 transition-[height] duration-150" style={{ height: `${p * 100}%` }} />
          </div>

          {processSteps.map((s, i) => {
            const active = p * processSteps.length >= i + 0.35;
            return (
              <Reveal key={s.step} delay={(i % 2) * 0.05}>
                <div className="relative pb-10 last:pb-0">
                  <div
                    className={`absolute left-0 top-0 w-12 h-12 rounded-full border flex items-center justify-center font-display font-bold text-sm transition-colors duration-300 ${
                      active ? 'bg-accent-500 text-ink-950 border-accent-500 shadow-[0_0_18px_rgba(224,168,46,0.4)]' : 'bg-ink-800 text-mist-400 border-ink-600'
                    }`}
                  >
                    {s.step}
                  </div>
                  <div className="card p-6">
                    <h3 className="font-display font-semibold text-lg text-white">{s.title}</h3>
                    <p className="text-mist-400 text-sm mt-2 leading-relaxed">{s.text}</p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
