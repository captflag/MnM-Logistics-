import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { Reveal } from './Reveal';

export function PageHero({ title, subtitle, crumb }: { title: React.ReactNode; subtitle?: string; crumb: string; }) {
  return (
    <section className="relative pt-36 pb-16 lg:pt-44 lg:pb-20 overflow-hidden border-b border-ink-800">
      <div className="absolute inset-0 bg-grid opacity-40" />
      <div className="absolute -top-32 right-0 w-96 h-96 rounded-full bg-brand-600/15 blur-3xl" />
      <div className="container-x relative z-10">
        <Reveal>
          <nav className="flex items-center gap-1.5 text-sm text-mist-400 mb-5">
            <Link to="/" className="hover:text-accent-400">Home</Link>
            <ChevronRight size={14} />
            <span className="text-mist-200">{crumb}</span>
          </nav>
        </Reveal>
        <Reveal delay={0.05}>
          <h1 className="font-display font-extrabold text-white text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-[1.05] max-w-4xl">
            {title}
          </h1>
        </Reveal>
        {subtitle && (
          <Reveal delay={0.1}>
            <p className="text-mist-300 text-lg mt-6 max-w-2xl leading-relaxed">{subtitle}</p>
          </Reveal>
        )}
      </div>
    </section>
  );
}
