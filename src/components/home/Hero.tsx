import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, Play, ChevronDown } from 'lucide-react';
import { company, trustBadges } from '../../data/company';
import { Icon } from '../../lib/icons';
import { Magnetic } from '../ui/Magnetic';

function RotatingLine() {
  const phrases = company.heroRotating;
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((prev) => (prev + 1) % phrases.length), 2800);
    return () => clearInterval(t);
  }, [phrases.length]);
  return (
    <span className="block min-h-[1.15em] mt-1">
      <AnimatePresence mode="wait">
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -22 }}
          transition={{ duration: 0.55, ease: [0.21, 0.6, 0.35, 1] }}
          className="text-gradient inline-block"
        >
          {phrases[i]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}

function useScrollProgress() {
  const [p, setP] = useState(0);
  useEffect(() => {
    const onScroll = () => setP(Math.min(window.scrollY / window.innerHeight, 1));
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return p;
}

export function Hero() {
  const p = useScrollProgress();
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = true;
    v.defaultMuted = true;
    const tryPlay = () => v.play().catch(() => {});
    tryPlay();
    v.addEventListener('canplay', tryPlay, { once: true });
    return () => v.removeEventListener('canplay', tryPlay);
  }, []);

  return (
    <section className="relative h-[100svh] min-h-[640px] flex items-center justify-center overflow-hidden bg-ink-950">
      <div className="absolute inset-0 bg-ink-950 will-change-transform" style={{ transform: `scale(${1 + p * 0.12})` }}>
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          poster={company.heroPoster}
          className="w-full h-full object-cover"
        >
          <source src={company.heroVideo} type="video/mp4" />
          <source src={company.heroVideoAlt} type="video/mp4" />
        </video>
      </div>

      <div className="absolute inset-0 bg-ink-950/55" />
      <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/30 to-ink-950/70" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_30%,_rgba(8,18,20,0.7)_100%)]" />
      <div className="absolute inset-0 bg-grid opacity-25" />
      <div className="absolute -top-40 -left-40 w-[34rem] h-[34rem] rounded-full bg-brand-600/20 blur-[120px] animate-drift1" />
      <div className="absolute -bottom-48 -right-40 w-[34rem] h-[34rem] rounded-full bg-accent-500/12 blur-[120px] animate-drift2" />

      <div
        className="container-x relative z-10 text-center flex flex-col items-center will-change-transform"
        style={{ transform: `translateY(${p * 60}px)`, opacity: Math.max(1 - p * 1.5, 0) }}
      >
        <motion.span
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2.5 rounded-full border border-ink-600/70 bg-ink-950/40 backdrop-blur-sm px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-mist-200"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-500 opacity-70" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-500" />
          </span>
          {company.tagline}
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.12 }}
          className="font-display font-extrabold text-white text-5xl sm:text-7xl lg:text-[5.5rem] leading-[0.98] tracking-tight mt-7 max-w-5xl"
        >
          {company.heroHeadlineA}
          <RotatingLine />
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.28 }}
          className="text-mist-200 text-lg sm:text-xl mt-7 max-w-2xl leading-relaxed"
        >
          {company.heroBody}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.42 }}
          className="flex flex-col sm:flex-row gap-3 mt-9"
        >
          <Magnetic>
            <Link to="/contact" className="btn-primary text-base px-8 py-4">
              Request an FTL Quote <ArrowRight size={18} />
            </Link>
          </Magnetic>
          <Link to="/services" className="btn-secondary text-base px-8 py-4 bg-ink-950/40 backdrop-blur-sm">
            <Play size={16} /> Explore Services
          </Link>
        </motion.div>

        <motion.ul
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-wrap justify-center gap-x-6 gap-y-2 mt-12"
        >
          {trustBadges.map((b) => (
            <li key={b.label} className="flex items-center gap-1.5 text-sm text-mist-300">
              <Icon name={b.icon} size={16} className="text-accent-500" /> {b.label}
            </li>
          ))}
        </motion.ul>
      </div>

      <div
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1 text-mist-400"
        style={{ opacity: Math.max(1 - p * 2, 0) }}
      >
        <ChevronDown size={20} className="animate-floaty" />
      </div>
    </section>
  );
}
