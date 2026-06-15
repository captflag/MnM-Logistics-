import { Link } from 'react-router-dom';
import { ArrowRight, Check } from 'lucide-react';
import { company, coreValues, truckImg, FALLBACK_TRUCK } from '../../data/company';
import { Img } from '../ui/Img';
import { SectionHeading } from '../ui/SectionHeading';
import { Reveal } from '../ui/Reveal';

export function AboutSnippet() {
  return (
    <section className="py-20 lg:py-28">
      <div className="container-x grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <Reveal>
          <div className="relative">
            <Img
              src={truckImg.container}
              fallback={FALLBACK_TRUCK}
              alt="MNM Logistics container truck on the highway"
              className="rounded-2xl border border-ink-700 w-full object-cover aspect-[4/3]"
            />
            <div className="absolute -bottom-6 -right-4 sm:right-6 card bg-ink-900 px-5 py-4">
              <div className="font-display font-extrabold text-2xl text-white">Since {company.foundedYear}</div>
              <div className="text-mist-400 text-sm">Moving India, delivering trust</div>
            </div>
          </div>
        </Reveal>

        <div>
          <SectionHeading
            eyebrow="Who we are"
            title="A premier supply chain partner, built on trust."
            subtitle="MNM Logistics is trusted by leading manufacturers and enterprises across India for reliable, technology-driven Full Truck Load transportation."
          />
          <ul className="mt-7 space-y-3">
            {coreValues.map((v) => (
              <li key={v.title} className="flex gap-3">
                <Check size={18} className="text-accent-500 shrink-0 mt-1" />
                <span className="text-mist-300"><span className="text-white font-semibold">{v.title}.</span> {v.text}</span>
              </li>
            ))}
          </ul>
          <Link to="/about" className="btn-secondary mt-8">More about us <ArrowRight size={16} /></Link>
        </div>
      </div>
    </section>
  );
}
