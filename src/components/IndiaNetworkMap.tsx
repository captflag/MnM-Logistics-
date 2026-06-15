/* Accurate India network map (geometry from @svg-maps/india, MIT).
   Real state borders + pulsing hubs, flowing lanes, and a moving truck.
   SVG SMIL animations only — no JS runtime cost. */
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

const lanes: [number, number][] = [
  [0, 3], [3, 5], [6, 7], [4, 0], [2, 6],
];

export function IndiaNetworkMap() {
  return (
    <svg viewBox={INDIA_VIEWBOX} className="w-full h-auto" role="img" aria-label="Animated map of MNM Logistics' pan-India network">
      <title>MNM Logistics pan-India network</title>

      {/* Country / states */}
      <g>
        {INDIA_PATHS.map((d, i) => (
          <path key={i} d={d} fill="rgba(45,212,191,0.07)" stroke="rgba(45,212,191,0.28)" strokeWidth="0.6" />
        ))}
      </g>

      {/* Lanes (flowing dashes) */}
      {lanes.map(([a, b], i) => (
        <line
          key={i}
          x1={hubs[a].x} y1={hubs[a].y} x2={hubs[b].x} y2={hubs[b].y}
          stroke="rgba(224,168,46,0.6)" strokeWidth="1.6" strokeDasharray="6 8" strokeLinecap="round"
        >
          <animate attributeName="stroke-dashoffset" values="0;-28" dur="1.3s" repeatCount="indefinite" />
        </line>
      ))}

      {/* Moving truck along the main corridor */}
      <g>
        <circle r="4.5" fill="#e0a82e" />
        <circle r="4.5" fill="#e0a82e" opacity="0.5">
          <animate attributeName="r" values="4.5;10" dur="1.4s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.5;0" dur="1.4s" repeatCount="indefinite" />
        </circle>
        <animateMotion dur="7s" repeatCount="indefinite" path="M205,200 L132,410 L210,527" />
      </g>

      {/* Hub dots + labels */}
      {hubs.map((h) => (
        <g key={h.n}>
          <circle cx={h.x} cy={h.y} r="4" fill="none" stroke="rgba(45,212,191,0.7)">
            <animate attributeName="r" values="4;18" dur="2.6s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.7;0" dur="2.6s" repeatCount="indefinite" />
          </circle>
          <circle cx={h.x} cy={h.y} r="4" fill="#2dd4bf" />
          <text x={h.x + h.dx} y={h.y + h.dy} textAnchor={h.a} fontFamily="Inter, sans-serif" fontSize="13" fontWeight="700" fill="#eaf2f1">
            {h.n}
          </text>
        </g>
      ))}
    </svg>
  );
}
