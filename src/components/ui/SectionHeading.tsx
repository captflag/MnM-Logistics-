import { Reveal } from './Reveal';

export function SectionHeading({ eyebrow, title, subtitle, center = false }: {
  eyebrow?: string; title: React.ReactNode; subtitle?: string; center?: boolean;
}) {
  return (
    <div className={`max-w-3xl ${center ? 'mx-auto text-center' : ''}`}>
      {eyebrow && (
        <Reveal>
          <span className="eyebrow mb-4">
            <span className="h-px w-7 bg-accent-500 inline-block" />
            {eyebrow}
          </span>
        </Reveal>
      )}
      <Reveal delay={0.05}>
        <h2 className="font-display font-bold text-white text-3xl sm:text-4xl lg:text-5xl tracking-tight leading-[1.1] mt-3">
          {title}
        </h2>
      </Reveal>
      {subtitle && (
        <Reveal delay={0.1}>
          <p className="text-mist-300 text-base sm:text-lg mt-5 leading-relaxed">{subtitle}</p>
        </Reveal>
      )}
    </div>
  );
}
