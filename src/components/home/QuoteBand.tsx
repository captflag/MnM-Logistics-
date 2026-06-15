import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight, MapPin, Truck, ChevronDown } from 'lucide-react';
import { vehicleTypes } from '../../data/company';

export function QuoteBand() {
  const navigate = useNavigate();
  const [origin, setOrigin] = useState('');
  const [destination, setDestination] = useState('');
  const [vehicle, setVehicle] = useState(vehicleTypes[0]);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const q = new URLSearchParams({ origin, destination, vehicle }).toString();
    navigate(`/contact?${q}`);
  };

  const field =
    'w-full bg-ink-950/60 border border-ink-600 rounded-xl pl-10 pr-3 py-3.5 text-sm text-mist-100 placeholder:text-mist-400 focus:outline-none focus:border-accent-500 transition-colors';

  return (
    <section className="relative z-20 -mt-12 lg:-mt-16">
      <div className="container-x">
        <motion.form
          onSubmit={submit}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-ink-900/90 backdrop-blur-lg border border-ink-600/70 rounded-2xl shadow-2xl shadow-black/50 p-5 lg:p-6 grid gap-3 lg:grid-cols-[1fr_1fr_1fr_auto] lg:items-end"
        >
          <div>
            <label className="block text-xs font-medium text-mist-300 mb-1.5">Pickup city</label>
            <div className="relative">
              <MapPin size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-accent-500" />
              <input value={origin} onChange={(e) => setOrigin(e.target.value)} placeholder="e.g. Mumbai" className={field} />
            </div>
          </div>
          <div>
            <label className="block text-xs font-medium text-mist-300 mb-1.5">Delivery city</label>
            <div className="relative">
              <MapPin size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-brand-400" />
              <input value={destination} onChange={(e) => setDestination(e.target.value)} placeholder="e.g. Delhi NCR" className={field} />
            </div>
          </div>
          <div>
            <label className="block text-xs font-medium text-mist-300 mb-1.5">Vehicle type</label>
            <div className="relative">
              <Truck size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-mist-300 pointer-events-none" />
              <ChevronDown size={16} className="absolute right-3 top-1/2 -translate-y-1/2 text-mist-400 pointer-events-none" />
              <select value={vehicle} onChange={(e) => setVehicle(e.target.value)} className={field + ' appearance-none cursor-pointer pr-9'}>
                {vehicleTypes.map((v) => <option key={v} value={v}>{v}</option>)}
              </select>
            </div>
          </div>
          <button type="submit" className="btn-primary h-[50px] px-7 whitespace-nowrap">
            Get Quote <ArrowRight size={16} />
          </button>
        </motion.form>
      </div>
    </section>
  );
}
