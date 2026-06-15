/**
 * ============================================================================
 *  MNM LOGISTICS — CENTRAL CONTENT & BRAND CONFIG
 * ============================================================================
 *  This is the ONLY file you normally need to edit to make the site "real".
 *  Replace every value marked  // TODO  with your actual business details.
 *  Brand colours live in src/index.css (search for "BRAND TOKENS").
 * ============================================================================
 */

export const company = {
  name: 'MNM Logistics',
  legalName: 'MNM Logistics', // TODO: confirm registered name
  tagline: 'Reliable Nationwide FTL Freight',
  foundedYear: 2010, // TODO: real year founded

  // Hero (heritage / reliability focused)
  heroHeadlineA: "India's Trusted",
  heroHeadlineB: 'FTL Logistics Partner',
  heroTagline: 'Decades of Secure, Seamless & Scalable Trucking Solutions',
  heroBody:
    'MNM Logistics delivers highly dependable, high-capacity FTL and specialized heavy freight solutions pan-India. We back every single route with an uncompromising commitment to timely delivery, strict cargo integrity, and real-time milestone visibility.',

  // Hero rotating second line (cycles through value props)
  heroRotating: [
    'FTL Logistics Partner',
    'Full Truck Load Freight',
    'Dedicated Contract Carriage',
    'ODC & Project Cargo Experts',
  ],

  // Hero background video (swap for your own footage — a clip in /public works too,
  // e.g. heroVideo: '/hero.mp4'). Keep it short, muted-friendly, and well-lit.
  heroVideo: 'https://videos.pexels.com/video-files/11644561/11644561-hd_1920_1080_30fps.mp4', // FPP drive through the Rockies (Pexels, free license)
  heroVideoAlt: '/hero.mp4', // local fallback if the external clip is blocked
  heroPoster: 'https://images.pexels.com/videos/11644561/alberta-banff-banff-national-park-blue-sky-11644561.jpeg?auto=compress&cs=tinysrgb&w=2000',

  // Short pitch used in footer / meta
  pitch:
    'Dedicated, high-capacity Full Truck Load (FTL) freight movement for bulk, industrial and high-value cargo across India.',

  // ---- Contact ----------------------------------------------------------
  phoneDisplay: '+91 98765 43210', // TODO: insert corporate number
  phoneE164: '+919876543210', // TODO (used for tel: and WhatsApp links, no spaces)
  whatsapp: '919876543210', // TODO (country code + number, no +)
  email: 'booboogamesai@gmail.com', // TODO: insert business email
  salesEmail: 'booboogamesai@gmail.com', // TODO

  address: {
    line1: 'MNM Logistics', // TODO: street address
    line2: 'Registered Office', // TODO
    city: 'Mumbai',
    state: 'Maharashtra',
    pincode: '', // TODO
    country: 'India',
  },

  hours: 'Mon–Sat: 9:00 AM – 6:30 PM IST · Sunday: Emergency Fleet Operations Only',

  social: {
    linkedin: '#', // TODO
    instagram: '#', // TODO
    facebook: '#', // TODO
  },
};

// ---- Lead delivery (makes the quote/enquiry forms actually send) ---------
//  EASIEST SETUP (free, no backend):
//   1. Go to https://web3forms.com and enter your email to get an Access Key.
//   2. Paste the key below as web3formsKey.
//   Submissions are then emailed to you instantly and stored in the Web3Forms
//   dashboard (a simple lead inbox). Until a key is added, the form safely
//   falls back to opening the visitor's email app (mailto).
export const forms = {
  web3formsKey: '', // TODO: paste your Web3Forms access key here to go live
};

// ---- Headline statistics ------------------------------------------------
// `count` (optional) animates a number; otherwise `value` is shown as text.
export type Stat = { value: string; count?: number; suffix?: string; label: string; note: string };

export const stats: Stat[] = [
  { value: '100%', count: 100, suffix: '%', label: 'Dedicated FTL Focus', note: 'Full Truck Load specialists' },
  { value: '24/7', label: 'Fleet Operations & Support', note: 'Centralized control room' },
  { value: 'Pan-India', label: 'Strategic Network Coverage', note: 'Every major corridor & hub' },
  { value: '100%', count: 100, suffix: '%', label: 'Cargo Integrity & Safety', note: 'Compliance-first culture' },
];

// ---- Core FTL services --------------------------------------------------
export type Service = {
  id: string;
  title: string;
  short: string;
  description: string;
  features: string[];
  icon: string; // lucide icon name
  image: string;
};

export const services: Service[] = [
  {
    id: 'ftl',
    title: 'Standard Full Truck Load (FTL) Freight',
    short: 'Dedicated truck capacity for high-volume cargo.',
    description:
      'Move high-volume cargo efficiently with fully dedicated truck capacity tailored to your schedule. Our core FTL services eliminate transshipment risks, drastically reduce transit times, and ensure your goods arrive entirely intact — whether raw materials, finished consumer goods, or industrial equipment.',
    features: [
      'Pan-India coverage to Tier 1, 2 & 3 markets',
      'Close-body, open & multi-axle vehicles',
      'GPS-enabled real-time fleet tracking',
      'Dedicated account relationship manager',
    ],
    icon: 'Truck',
    image: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&q=80&w=1200',
  },
  {
    id: 'contract',
    title: 'Dedicated Contract Carriage & Corporate Fleet',
    short: 'Guaranteed, recurring capacity without fleet ownership.',
    description:
      'For businesses requiring guaranteed, recurring capacity without the burden of fleet ownership. We provide dedicated trucks and trained drivers exclusively assigned to your distribution network — stabilising logistics costs and ensuring priority placement even during peak seasons.',
    features: [
      'Customized corporate vehicle branding',
      'Fixed, predictable long-term pricing',
      'Strict adherence to corporate SLAs',
      'Integrated with factory & warehouse dispatch',
    ],
    icon: 'Factory',
    image: 'https://images.unsplash.com/photo-1565008447742-97f6f38c985c?auto=format&fit=crop&q=80&w=1200',
  },
  {
    id: 'odc',
    title: 'Industrial & Heavy Project Cargo (ODC)',
    short: 'Over-dimensional & heavy infrastructure cargo.',
    description:
      'Certain shipments demand exceptional scale and specialized engineering. We operate heavy-duty transport solutions for over-dimensional cargo (ODC), structural steel, high-value machinery, and infrastructure components.',
    features: [
      'Multi-axle pullers, low-bed & semi-low-bed trailers',
      'Route surveys, feasibility mapping & permits',
      'Expert load-securing & lashing protocols',
      'Transit insurance & cargo liability support',
    ],
    icon: 'HardHat',
    image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&q=80&w=1200',
  },
  {
    id: 'secure',
    title: 'Secure & Sensitive FTL Transport',
    short: 'Tamper-proof transport with strict chain-of-custody.',
    description:
      'High-value commercial cargo requires strict chain-of-custody protocols. We provide high-security, tamper-proof FTL transport for sensitive electronics, premium apparel, retail goods, and non-hazardous chemical loads that cannot afford contamination or theft.',
    features: [
      'Digital container locking & geofencing',
      'Instant digital Proof of Delivery (ePOD)',
      'Vetted long-haul drivers, clean safety records',
      'Point-to-point transit, zero unverified layovers',
    ],
    icon: 'ShieldCheck',
    image: 'https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?auto=format&fit=crop&q=80&w=1200',
  },
];

// ---- Why choose us (Section 4) ------------------------------------------
export const whyUs = [
  { icon: 'TrendingUp', title: 'Deep Domain Experience', text: 'We have navigated shifting economic cycles, evolving highways, and complex disruptions — delivering for clients through it all.' },
  { icon: 'MapPin', title: 'Unmatched Pan-India Reach', text: 'Our carrier network and dispatch points span every major industrial corridor, port city, and distribution hub in India.' },
  { icon: 'Network', title: 'Technology-Driven Fleet', text: 'Active GPS tracking, automated status alerts, and digital document management give you complete control and transparency.' },
  { icon: 'Headset', title: 'Client-First Account Management', text: 'Every corporate account gets a dedicated manager who knows your lanes, anticipates needs, and resolves issues proactively.' },
  { icon: 'ShieldCheck', title: 'Safety & Compliance Culture', text: 'Cargo protection is embedded everywhere — driver wellness checks, vehicle fitness standards, and load-distribution compliance.' },
  { icon: 'Clock', title: 'On-Time, Operations-First', text: 'Moving India, delivering trust — on-time FTL delivery on every shipment, every single time.' },
];

// ---- Industries we serve (Section 5) ------------------------------------
export const industries = [
  { icon: 'Factory', title: 'Manufacturing & Engineering', text: 'Raw material movement, heavy machinery deployment, ODC transport, and Just-In-Time factory line feeding.' },
  { icon: 'PackageCheck', title: 'FMCG & Consumer Goods', text: 'High-volume primary distribution from factories to regional distribution centres with strict SLA adherence.' },
  { icon: 'ShieldCheck', title: 'Apparel & Textiles', text: 'Secure, high-capacity containerized transport for seasonal rollouts, bulk fabric, and multi-location fulfillment.' },
  { icon: 'HardHat', title: 'Automotive & Components', text: 'Specialized components transit, structured schedules, and damage-free delivery protocols for assembly lines.' },
  { icon: 'Truck', title: 'E-Commerce & Retail Bulk', text: 'High-speed line-haul trucking connecting major fulfillment centres across primary logistics corridors.' },
  { icon: 'Network', title: 'Industrial Supply Chains', text: 'End-to-end lane planning and dedicated capacity engineered for complex, high-volume enterprise networks.' },
];

// ---- How we work (Section 6 — 6 steps) ----------------------------------
export const processSteps = [
  { step: '01', title: 'Requirement Analysis', text: 'We evaluate your cargo profile, weight, volume, route dynamics, and required delivery timelines.' },
  { step: '02', title: 'Fleet Matching & Pricing', text: 'We map the ideal vehicle configuration and present a transparent, itemized quote with zero hidden charges.' },
  { step: '03', title: 'Compliance & Documentation', text: 'We verify e-way bills, consignment notes, and highway permits before the truck arrives at your bay.' },
  { step: '04', title: 'Secure Loading & Dispatch', text: 'Vehicles are loaded to strict weight-distribution guidelines; GPS tracking goes live at your gates.' },
  { step: '05', title: 'Transit Monitoring & Alerts', text: 'Our control room monitors movement along the safe route, providing your team milestone updates.' },
  { step: '06', title: 'Delivery & Digital ePOD', text: 'Cargo is safely offloaded and a digital Proof of Delivery is captured instantly to close the loop.' },
];

// ---- Testimonials (Section 8) -------------------------------------------
export const testimonials = [
  {
    quote:
      'MNM Logistics has become an indispensable asset to our primary distribution network. Their ability to consistently position high-quality 32ft containers exactly when we need them has stabilized our entire regional supply chain.',
    name: 'VP, Supply Chain', // TODO: real name
    role: 'National Consumer Goods Corporation', // TODO
  },
  {
    quote:
      'In heavy manufacturing, delays are incredibly costly. MNM Logistics understands the high stakes. They do not just provide trucks; they deliver real-time communication, meticulous document compliance, and flawless execution on long-haul routes.',
    name: 'Logistics Director', // TODO
    role: 'Infrastructure & Engineering Enterprise', // TODO
  },
];

// ---- Core values (Section 2) --------------------------------------------
export const coreValues = [
  { title: 'Moving India, Delivering Trust', text: 'Ensuring on-time, operations-first FTL delivery — every shipment, every time.' },
  { title: 'Accountable Partnerships', text: 'Building long-term enterprise partnerships through absolute transparency and contract compliance.' },
  { title: 'Digital Innovation', text: 'Continuously investing in logistics technology to maximize visibility, route optimization, and service quality.' },
];

// ---- Hero trust strip --------------------------------------------------
export const trustLine = '200+ businesses trust us'; // TODO: real number
export const trustBadges = [
  { icon: 'BadgeCheck', label: 'GST Registered' },
  { icon: 'ShieldCheck', label: 'Insured Transit' },
  { icon: 'Clock', label: '24/7 Operations' },
  { icon: 'MapPin', label: 'Pan-India Network' },
];

// ---- Clients / partners (TODO: replace with real names or logo files) ----
export const clients = [
  'Bharat Steel', 'NovaFMCG', 'Apex Motors', 'GreenHarvest', 'MetroRetail', 'IndusPharma',
]; // TODO: replace with your real client names / logo files

// ---- Network page: hubs & lanes -----------------------------------------
export const hubs = [
  'Delhi NCR', 'Mumbai', 'Bengaluru', 'Chennai', 'Kolkata', 'Hyderabad',
  'Pune', 'Ahmedabad', 'Jaipur', 'Coimbatore', 'Nagpur', 'Indore',
]; // TODO: confirm real coverage

export const lanes = [
  { from: 'Delhi NCR', to: 'Mumbai' },
  { from: 'Mumbai', to: 'Bengaluru' },
  { from: 'Chennai', to: 'Kolkata' },
  { from: 'Hyderabad', to: 'Delhi NCR' },
  { from: 'Ahmedabad', to: 'Chennai' },
  { from: 'Pune', to: 'Kolkata' },
]; // TODO

// ---- Quote form options -------------------------------------------------
export const vehicleTypes = [
  '20ft Container', '32ft MXL (Multi-axle)', '32ft SXL (Single-axle)',
  'Open Truck', 'Multi-axle Trailer', 'Low-bed / ODC', 'Not sure — advise me',
];

export const cargoTypes = [
  'Manufacturing / Industrial', 'FMCG / Consumer Goods', 'Apparel & Textiles',
  'Automotive & Components', 'Electronics / High-Value', 'ODC / Project Cargo', 'Other',
];
