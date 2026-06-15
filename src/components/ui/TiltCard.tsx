import { useRef, useState } from 'react';
import type { ReactNode, CSSProperties } from 'react';

export function TiltCard({ children, className = '', max = 6 }: { children: ReactNode; className?: string; max?: number; }) {
  const ref = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState<CSSProperties>({ transform: 'perspective(900px) rotateX(0deg) rotateY(0deg)' });
  const [glow, setGlow] = useState({ x: 50, y: 50, on: false });

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width;
    const py = (e.clientY - r.top) / r.height;
    setTilt({ transform: `perspective(900px) rotateX(${(0.5 - py) * max}deg) rotateY(${(px - 0.5) * max}deg)` });
    setGlow({ x: px * 100, y: py * 100, on: true });
  };
  const onLeave = () => {
    setTilt({ transform: 'perspective(900px) rotateX(0deg) rotateY(0deg)' });
    setGlow((g) => ({ ...g, on: false }));
  };

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={tilt}
      className={`relative transition-transform duration-200 ease-out [transform-style:preserve-3d] ${className}`}
    >
      {children}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-2xl z-20"
        style={{
          opacity: glow.on ? 1 : 0,
          transition: 'opacity 0.3s ease',
          mixBlendMode: 'screen',
          background: `radial-gradient(360px circle at ${glow.x}% ${glow.y}%, rgba(45,212,191,0.18), transparent 55%)`,
        }}
      />
    </div>
  );
}
