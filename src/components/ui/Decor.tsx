/* Reusable, performance-light decorative section backgrounds.
   All are absolutely positioned, pointer-events-none, and low-opacity. */

export function Glow({ className = '', color = 'brand' }: { className?: string; color?: 'brand' | 'accent' }) {
  const c = color === 'accent' ? 'bg-accent-500/12' : 'bg-brand-600/15';
  return <div aria-hidden className={`pointer-events-none absolute rounded-full blur-[120px] ${c} ${className}`} />;
}

export function GridOverlay({ className = '' }: { className?: string }) {
  return <div aria-hidden className={`pointer-events-none absolute inset-0 bg-grid ${className}`} />;
}

export function ContourLines({ className = '' }: { className?: string }) {
  return (
    <svg
      aria-hidden
      className={`pointer-events-none absolute inset-0 w-full h-full ${className}`}
      viewBox="0 0 1200 460"
      preserveAspectRatio="none"
      fill="none"
    >
      {[0, 1, 2, 3, 4, 5].map((i) => (
        <path
          key={i}
          d={`M0,${60 + i * 70} C220,${20 + i * 70} 420,${120 + i * 70} 640,${70 + i * 70} S1020,${20 + i * 70} 1200,${80 + i * 70}`}
          stroke="rgba(45,212,191,0.16)"
          strokeWidth="1"
        />
      ))}
    </svg>
  );
}

export function RouteMotif({ className = '' }: { className?: string }) {
  return (
    <svg
      aria-hidden
      className={`pointer-events-none absolute inset-0 w-full h-full ${className}`}
      viewBox="0 0 1200 420"
      preserveAspectRatio="none"
      fill="none"
    >
      <path
        d="M40,360 C260,300 320,120 540,150 S860,320 1160,90"
        stroke="rgba(224,168,46,0.28)"
        strokeWidth="2"
        strokeDasharray="2 12"
        strokeLinecap="round"
      />
      {[[40, 360], [540, 150], [1160, 90]].map(([x, y], i) => (
        <g key={i}>
          <circle cx={x} cy={y} r="7" fill="rgba(224,168,46,0.25)" />
          <circle cx={x} cy={y} r="3" fill="rgba(224,168,46,0.9)" />
        </g>
      ))}
    </svg>
  );
}

export function MapWatermark({ className = '' }: { className?: string }) {
  return (
    <img
      aria-hidden
      src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/India_administrative_blank_map.svg/640px-India_administrative_blank_map.svg.png"
      alt=""
      className={`pointer-events-none absolute select-none opacity-[0.05] mix-blend-luminosity ${className}`}
    />
  );
}
