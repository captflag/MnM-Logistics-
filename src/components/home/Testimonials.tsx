import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Quote } from 'lucide-react';
import { testimonials } from '../../data/company';
import { SectionHeading } from '../ui/SectionHeading';

export function Testimonials() {
  const [idx, setIdx] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => setIdx((i) => (i + 1) % testimonials.length), 5500);
    return () => clearInterval(t);
  }, [paused]);

  const t = testimonials[idx];

  return (
    <section className="relative py-20 lg:py-28 overflow-hidden border-y border-ink-800">
      <img
        aria-hidden
        src="https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&q=80&w=2000"
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-ink-950/88" />
      <div className="absolute inset-0 bg-gradient-to-r from-ink-950 via-ink-950/70 to-ink-950" />

      <div className="container-x relative z-10">
        <SectionHeading center eyebrow="Client voices" title="Trusted on every lane." />

        <div
          className="max-w-3xl mx-auto mt-12 text-center min-h-[260px] flex flex-col items-center justify-center"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <Quote size={40} className="text-accent-500/60 mb-6" />
          <AnimatePresence mode="wait">
            <motion.blockquote
              key={idx}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -18 }}
              transition={{ duration: 0.5, ease: [0.21, 0.6, 0.35, 1] }}
              className="text-mist-100 text-xl sm:text-2xl font-display font-medium leading-relaxed"
            >
              "{t.quote}"
              <footer className="mt-7 not-italic">
                <div className="text-white font-semibold text-base">{t.name}</div>
                <div className="text-accent-400 text-sm">{t.role}</div>
              </footer>
            </motion.blockquote>
          </AnimatePresence>

          <div className="flex items-center gap-2.5 mt-9">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setIdx(i)}
                aria-label={`Show testimonial ${i + 1}`}
                className={`h-2 rounded-full transition-all ${i === idx ? 'w-8 bg-accent-500' : 'w-2 bg-ink-600 hover:bg-ink-500'}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
