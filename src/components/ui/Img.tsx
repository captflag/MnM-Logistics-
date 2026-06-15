import { useState } from 'react';

/* Image with graceful fallback: shows `src`; if it fails to load (e.g. the real
   file hasn't been added yet), it swaps to `fallback` so nothing looks broken. */
export function Img({
  src, fallback, alt, className = '', loading = 'lazy',
}: { src: string; fallback: string; alt: string; className?: string; loading?: 'lazy' | 'eager' }) {
  const [cur, setCur] = useState(src);
  return (
    <img
      src={cur}
      alt={alt}
      className={className}
      loading={loading}
      onError={() => { if (cur !== fallback) setCur(fallback); }}
    />
  );
}
