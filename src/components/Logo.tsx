import { useState } from 'react';

/* Official MNM Logistics logo.
   variant="full" -> /logo.png (truck + wordmark lockup)
   variant="mark" -> /Logo-png-new.png (new standalone truck mark)
   Falls back to a built-in SVG if the file isn't present. */
export function Logo({ className = 'h-10 w-auto', variant = 'full' }: { className?: string; variant?: 'full' | 'mark' }) {
  const [failed, setFailed] = useState(false);
  const src = variant === 'mark' ? '/Logo-png-new.png' : '/logo.png';

  if (!failed) {
    return <img src={src} alt="MNM Logistics" className={className} onError={() => setFailed(true)} />;
  }

  return (
    <svg viewBox="0 0 200 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} role="img" aria-label="MNM Logistics">
      <g>
        <rect x="2" y="6" width="36" height="36" rx="9" fill="var(--color-ink-800)" stroke="var(--color-ink-600)" />
        <g stroke="var(--color-accent-500)" strokeWidth="2.6" strokeLinecap="round">
          <path d="M9 18h14" /><path d="M9 24h19" /><path d="M9 30h11" />
        </g>
        <path d="M24 21h6l4 5v5H24z" fill="var(--color-brand-500)" />
        <circle cx="27.5" cy="31.5" r="2" fill="var(--color-ink-800)" stroke="var(--color-accent-500)" strokeWidth="1.6" />
      </g>
      <text x="48" y="25" fontFamily="Sora, sans-serif" fontWeight="800" fontSize="17" fill="#ffffff" letterSpacing="0.5">MNM</text>
      <text x="48" y="39" fontFamily="Inter, sans-serif" fontWeight="600" fontSize="9.5" fill="var(--color-mist-300)" letterSpacing="3">LOGISTICS</text>
    </svg>
  );
}
