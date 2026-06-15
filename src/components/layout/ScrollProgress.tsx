import { useEffect, useState } from 'react';

export function ScrollProgress() {
  const [w, setW] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement.scrollHeight - window.innerHeight;
      setW(h > 0 ? (window.scrollY / h) * 100 : 0);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);
  return (
    <div className="fixed top-0 inset-x-0 z-[60] h-[3px] pointer-events-none">
      <div className="h-full bg-accent-500 shadow-[0_0_10px_rgba(224,168,46,0.6)]" style={{ width: `${w}%` }} />
    </div>
  );
}
