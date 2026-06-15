import { Link } from 'react-router-dom';
import { ArrowRight, Target, Eye, Truck, Handshake, Cpu } from 'lucide-react';
import { PageHero } from '../components/ui/PageHero';
import { SectionHeading } from '../components/ui/SectionHeading';
import { Reveal } from '../components/ui/Reveal';
import { CountUp } from '../components/ui/CountUp';
import { stats, coreValues, truckImg, FALLBACK_TRUCK } from '../data/company';
import { Img } from '../components/ui/Img';

const valueIcons = [Truck, Handshake, Cpu];

export function About() {
  return (
    <>
      <PageHero
        crumb="About"
        title={<>Logistics built on <span className="text-gradient">trust.</span></>}
        subtitle="MNM Logistics is a premier supply chain partner trusted by leading businesses and manufacturing enterprises across India — delivering reliable, efficient, and technology-driven Full Truck Load transportation."
      />

      <section className="py-20 lg:py-28">
        <div className="container-x grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <Reveal>
            <div className="relative">
              <Img
                src={truckImg.fleet}
                fallback={FALLBACK_TRUCK}
                alt="MNM Logistics flatbed fleet"
                className="rounded-2xl border border-ink-700 w-full object-cover aspect-[4/3]"
              />
              <div className="absolute -bottom-6 -right-4 sm:right-6 card p-5 bg-ink-900">
                <div className="font-display font-extrabold text-3xl text-white">100%</div>
                <div className="text-mist-400 text-sm">Dedicated FTL Focus</div>
              </div>
            </div>
          </Reveal>
          <div>
            <SectionHeading eyebrow="Our story" title="A premier supply chain partner." />
            <div className="text-mist-300 leading-relaxed mt-6 space-y-4">
              <p>
                We have consistently delivered reliable, efficient, and technology-driven Full Truck Load (FTL)
                transportation solutions — built firmly on the values of integrity, accountability, and operational excellence.
              </p>
              <p>
                We specialize in high-volume FTL freight, multi-axle heavy transport, and dedicated corporate fleet solutions.
                Every route we plan and every vehicle we deploy is engineered to ensure the safest, fastest, and most
                cost-effective movement of your commercial cargo across the length and breadth of India.
              </p>
            </div>
            <Link to="/contact" className="btn-primary mt-8">Work with us <ArrowRight size={16} /></Link>
          </div>
        </div>
      </section>

      <section className="py-16 bg-ink-900/40 border-y border-ink-800">
        <div className="container-x grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.08}>
              <div className="text-center">
                <div className="font-display font-extrabold text-3xl lg:text-5xl text-white">
                  {typeof s.count === 'number' ? <CountUp end={s.count} suffix={s.suffix} /> : s.value}
                </div>
                <div className="text-mist-300 font-medium mt-2">{s.label}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="container-x">
          <SectionHeading center eyebrow="Our core values" title="What drives every delivery." />
          <div className="grid sm:grid-cols-3 gap-5 mt-14">
            {coreValues.map((v, i) => {
              const I = valueIcons[i] ?? Truck;
              return (
                <Reveal key={v.title} delay={i * 0.08}>
                  <div className="card p-8 h-full">
                    <div className="w-12 h-12 rounded-xl bg-accent-500/15 border border-accent-500/30 flex items-center justify-center text-accent-400">
                      <I size={22} />
                    </div>
                    <h3 className="font-display font-semibold text-lg text-white mt-5">{v.title}</h3>
                    <p className="text-mist-400 text-sm mt-2 leading-relaxed">{v.text}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="pb-24">
        <div className="container-x grid lg:grid-cols-2 gap-10">
          <Reveal>
            <div className="card p-9 h-full">
              <span className="eyebrow"><Eye size={16} /> Our Vision</span>
              <p className="font-display font-semibold text-2xl text-white mt-4 leading-snug">
                To be India's most trusted, technology-enabled FTL logistics partner — connecting every business to every market.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="card p-9 h-full">
              <span className="eyebrow"><Target size={16} /> Our Mission</span>
              <p className="font-display font-semibold text-2xl text-white mt-4 leading-snug">
                To move freight safely, on time, and transparently — making supply chains simpler for the businesses we serve.
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
