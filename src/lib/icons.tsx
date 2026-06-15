import {
  Truck, Factory, PackageCheck, HardHat, ShieldCheck, Network, Clock, Headset,
  MapPin, BadgeIndianRupee, TrendingUp, BadgeCheck, type LucideIcon,
} from 'lucide-react';

const map: Record<string, LucideIcon> = {
  Truck, Factory, PackageCheck, HardHat, ShieldCheck, Network, Clock, Headset,
  MapPin, BadgeIndianRupee, TrendingUp, BadgeCheck,
};

export function Icon({ name, ...props }: { name: string } & React.ComponentProps<LucideIcon>) {
  const Cmp = map[name] ?? Truck;
  return <Cmp {...props} />;
}
