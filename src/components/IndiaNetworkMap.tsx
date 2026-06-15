/* Accurate India network map (geometry from @svg-maps/india, MIT).
   Real state borders + pulsing hubs + bidirectional (to-and-fro) freight flow
   on every lane. SVG SMIL animations only — no JS runtime cost. */
import { INDIA_VIEWBOX, INDIA_PATHS } from '../data/indiaGeo';

type Hub = { n: string; x: number; y: number; a: 'start' | 'end'; dx: number; dy: number };
const hubs: Hub[] = [
  { n: 'Delhi NCR', x: 205, y: 200, a: 'start', dx: 9, dy: -9 },
  { n: 'Jaipur', x: 168, y: 226, a: 'end', dx: -9, dy: 5 },
  { n: 'Ahmedabad', x: 128, y: 332, a: 'end', dx: -9, dy: 5 },
  { n: 'Mumbai', x: 132, y: 410, a: 'end', dx: -9, dy: 5 },
  { n: 'Hyderabad', x: 235, y: 432, a: 'start', dx: 10, dy: 5 },
  { n: 'Bengaluru', x: 210, y: 527, a: 'end', dx: -10, dy: 7 },
  { n: 'Chennai', x: 272, y: 525, a: 'start', dx: 10, dy: 7 },
  { n: 'Kolkata', x: 388, y: 352, a: 'start', dx: 10, dy: 0 },
];

const lanePairs: [number, number][] = [
  [0, 3], [3, 5], [6, 7], [4, 0], [2, 6], [0, 7], [4, 6],
];

const lanes = lanePairs.map(([a, b]) => {
  const A = hubs[a], B = hubs[b];
  const len = Math.hypot(B.x - A.x, B.y - A.y);
  const dur = Math.max(3.2, Math.min(7, len / 48));
  return {
    fwd: `M${A.x},${A.y} L${B.x},${B.y}`,
    rev: `M${B.x},${B.y} L${A.x},${A.y}`,
    x1: A.x, y1: A.y, x2: B.x, y2: B.y,
    dur: +dur.toFixed(2),
  };
});

export function IndiaNetworkMap() {
  return (
    <svg viewBox={INDIA_VIEWBOX} className="w-full h-auto" role="img" aria-label="Animated map of MNM Logistics' pan-India network with two-way freight movement">
      <title>MNM Logistics pan-India network — two-way freight flow</title>

      {/* Country / states */}
      <g>
        {INDIA_PATHS.map((d, i) => (
          <path key={i} d={d} fill="rgba(45,212,191,0.07)" stroke="rgba(45,212,191,0.28)" strokeWidth="0.6" />
        ))}
      </g>

      {/* Static lane lines */}
      {lanes.map((l, i) => (
        <line key={i} x1={l.x1} y1={l.y1} x2={l.x2} y2={l.y2} stroke="rgba(170,190,200,0.18)" strokeWidth="1" />
      ))}

      {/* Bidirectional freight packets on every lane */}
      {lanes.map((l, i) => (
        <g key={`m${i}`}>
          {/* outbound (gold) */}
          <circle r="3.6" fill="#e0a82e">
            <animateMotion dur={`${l.dur}s`} repeatCount="indefinite" path={l.fwd} begin={`${(i * 0.5).toFixed(2)}s`} />
          </circle>
          <circle r="2" fill="#fff2d6">
            <animateMotion dur={`${l.dur}s`} repeatCount="indefinite" path={l.fwd} begin={`${(i * 0.5).toFixed(2)}s`} />
          </circle>
          {/* inbound (teal) */}
          <circle r="3.2" fill="#2dd4bf">
            <animateMotion dur={`${(l.dur * 1.1).toFixed(2)}s`} repeatCount="indefinite" path={l.rev} begin={`${(i * 0.5 + l.dur / 2).toFixed(2)}s`} />
          </circle>
          <circle r="1.8" fill="#d6fff6">
            <animateMotion dur={`${(l.dur * 1.1).toFixed(2)}s`} repeatCount="indefinite" path={l.rev} begin={`${(i * 0.5 + l.dur / 2).toFixed(2)}s`} />
          </circle>
        </g>
      ))}

      {/* Hub dots + labels */}
      {hubs.map((h) => (
        <g key={h.n}>
          <circle cx={h.x} cy={h.y} r="4" fill="none" stroke="rgba(45,212,191,0.7)">
            <animate attributeName="r" values="4;18" dur="2.6s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.7;0" dur="2.6s" repeatCount="indefinite" />
          </circle>
          <circle cx={h.x} cy={h.y} r="4.5" fill="#2dd4bf" />
          <text x={h.x + h.dx} y={h.y + h.dy} textAnchor={h.a} fontFamily="Inter, sans-serif" fontSize="13" fontWeight="700" fill="#eaf2f1">
            {h.n}
          </text>
        </g>
      ))}
    </svg>
  );
}
