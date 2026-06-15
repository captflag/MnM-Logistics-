import { Link } from 'react-router-dom';
import { ArrowRight, Check } from 'lucide-react';
import { company, coreValues } from '../../data/company';
import { SectionHeading } from '../ui/SectionHeading';
import { Reveal } from '../ui/Reveal';

export function AboutSnippet() {
  return (
    <section className="py-20 lg:py-28">
      <div className="container-x grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <Reveal>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=1200"
              alt="MNM Logistics fleet on the move"
              className="rounded-2xl border border-ink-700 w-full object-cover aspect-[4/3]"
              loading="lazy"
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
