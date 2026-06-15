/* Fleet data — edit here to add/adjust vehicles. */
export type Vehicle = {
  tag: string;          // small badge shown on the card
  group: 'container' | 'open' | 'heavy' | 'secure';
  name: string;
  capacity: string;
  dimensions: string;
  bestFor: string[];
  features: string[];
};

export const vehicles: Vehicle[] = [
  { tag: 'Container', group: 'container', name: '20 ft Closed Container', capacity: '7 — 9 tonnes', dimensions: '20 ft × 7 ft × 7 ft',
    bestFor: ['FMCG primary distribution', 'Apparel & textiles', 'Retail goods'],
    features: ['Weather-sealed', 'Theft protection', 'GPS tracked'] },
  { tag: 'Container', group: 'container', name: '32 ft Single-Axle Container', capacity: '14 — 16 tonnes', dimensions: '32 ft × 8 ft × 8 ft',
    bestFor: ['Bulk FMCG', 'Apparel volumes', 'E-commerce line-haul'],
    features: ['High cubic volume', 'Side & rear loading', 'Long-haul ready'] },
  { tag: 'Multi-Axle', group: 'container', name: '32 ft Multi-Axle Container', capacity: '21 — 25 tonnes', dimensions: '32 ft × 8 ft × 8 ft',
    bestFor: ['High-volume FTL', 'Long-distance corridors', 'Heavy FMCG'],
    features: ['Multi-axle stability', 'Optimized for highways', 'Driver-trained fleet'] },
  { tag: 'Open Truck', group: 'open', name: '19 ft Open Body', capacity: '7 tonnes', dimensions: '19 ft × 7 ft',
    bestFor: ['Construction materials', 'Industrial supplies', 'Bulk cargo'],
    features: ['Tarpaulin covered', 'Top & side load', 'All-weather'] },
  { tag: 'Open Truck', group: 'open', name: '22 ft Open Body', capacity: '9 — 10 tonnes', dimensions: '22 ft × 7.5 ft',
    bestFor: ['Heavy materials', 'Steel & cement', 'Long-haul B2B'],
    features: ['Reinforced floor', 'GPS tracked', 'Insured cargo'] },
  { tag: 'Trailer', group: 'heavy', name: '40 ft Flatbed Trailer', capacity: '25 — 30 tonnes', dimensions: '40 ft × 8 ft',
    bestFor: ['Steel coils', 'Heavy machinery', 'Pipes & structures'],
    features: ['Multi-axle', 'Pan-India routing', 'Driver-trained fleet'] },
  { tag: 'Low-Bed', group: 'heavy', name: 'Low-Bed Trailer', capacity: '25 — 40 tonnes', dimensions: '30 — 40 ft × 8 ft',
    bestFor: ['Construction equipment', 'Transformers', 'Industrial assemblies'],
    features: ['Reduced loading height', 'Permit-managed routing', 'Route surveys'] },
  { tag: 'Low-Bed', group: 'heavy', name: 'Semi Low-Bed Trailer', capacity: '30 — 50 tonnes', dimensions: '35 — 45 ft × 8 ft',
    bestFor: ['ODC cargo', 'Wind turbine sections', 'Power plant equipment'],
    features: ['ODC certified', 'Specialized lashing', 'Project cargo handling'] },
  { tag: 'Specialized', group: 'heavy', name: 'Multi-Axle Hydraulic Puller', capacity: '60+ tonnes', dimensions: 'Configurable',
    bestFor: ['Infrastructure projects', 'Pre-cast structures', 'Heavy lifts'],
    features: ['Hydraulic axles', 'Custom permit handling', 'Specialist operators'] },
  { tag: 'Secure', group: 'secure', name: '32 ft Secure Container', capacity: '16 — 20 tonnes', dimensions: '32 ft × 8 ft × 8 ft',
    bestFor: ['High-value electronics', 'Premium apparel', 'Sensitive retail'],
    features: ['Digital container lock', 'Geofenced routing', 'Vetted drivers'] },
  { tag: 'Secure', group: 'secure', name: 'Secure Multi-Drop Container', capacity: '10 — 14 tonnes', dimensions: '20 — 24 ft × 7 ft × 7 ft',
    bestFor: ['Multi-city distribution', 'High-value SKUs', 'Brand-sensitive cargo'],
    features: ['ePOD per drop', 'Tamper alerts', 'Direct point-to-point'] },
];

export const fleetGroups = [
  { key: 'all', label: 'All Vehicles' },
  { key: 'container', label: 'Closed Container' },
  { key: 'open', label: 'Open Truck' },
  { key: 'heavy', label: 'Heavy & ODC' },
  { key: 'secure', label: 'Secure FTL' },
] as const;

export const groupCount = (key: string) =>
  key === 'all' ? vehicles.length : vehicles.filter((v) => v.group === key).length;
