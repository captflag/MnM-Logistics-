import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Linkedin, Instagram, Facebook } from 'lucide-react';
import { Logo } from '../Logo';
import { company, services } from '../../data/company';

export function Footer() {
  const { address } = company;
  return (
    <footer className="border-t border-ink-700/60 bg-ink-950 mt-24">
      <div className="container-x py-16 grid gap-12 md:grid-cols-2 lg:grid-cols-4">
        <div className="lg:col-span-1">
          <div className="flex items-center gap-3 mb-5">
            <Logo variant="mark" className="h-11 w-auto" />
            <span className="font-display font-extrabold text-xl tracking-tight text-white leading-none">
              MNM <span className="text-brand-400">Logistics</span>
            </span>
          </div>
          <p className="text-mist-400 text-sm leading-relaxed max-w-xs">
            {company.pitch}
          </p>
          <div className="flex gap-3 mt-6">
            <a href={company.social.linkedin} aria-label="LinkedIn" className="p-2.5 rounded-full bg-ink-800 text-mist-300 hover:text-white hover:bg-brand-600 transition-colors"><Linkedin size={18} /></a>
            <a href={company.social.instagram} aria-label="Instagram" className="p-2.5 rounded-full bg-ink-800 text-mist-300 hover:text-white hover:bg-brand-600 transition-colors"><Instagram size={18} /></a>
            <a href={company.social.facebook} aria-label="Facebook" className="p-2.5 rounded-full bg-ink-800 text-mist-300 hover:text-white hover:bg-brand-600 transition-colors"><Facebook size={18} /></a>
          </div>
        </div>

        <div>
          <h4 className="text-white font-display font-semibold mb-4">Company</h4>
          <ul className="space-y-2.5 text-sm">
            <li><Link to="/about" className="text-mist-400 hover:text-accent-400 transition-colors">About Us</Link></li>
            <li><Link to="/services" className="text-mist-400 hover:text-accent-400 transition-colors">Services</Link></li>
            <li><Link to="/fleet" className="text-mist-400 hover:text-accent-400 transition-colors">Our Fleet</Link></li>
            <li><Link to="/network" className="text-mist-400 hover:text-accent-400 transition-colors">Our Network</Link></li>
            <li><Link to="/contact" className="text-mist-400 hover:text-accent-400 transition-colors">Get a Quote</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-display font-semibold mb-4">Services</h4>
          <ul className="space-y-2.5 text-sm">
            {services.slice(0, 5).map((s) => (
              <li key={s.id}>
                <Link to="/services" className="text-mist-400 hover:text-accent-400 transition-colors">{s.title}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-white font-display font-semibold mb-4">Get in Touch</h4>
          <ul className="space-y-3.5 text-sm">
            <li className="flex gap-3 text-mist-400"><MapPin size={18} className="text-accent-500 shrink-0 mt-0.5" /><span>{address.line1}, {address.line2}, {address.city}, {address.state} {address.pincode}</span></li>
            <li><a href={`tel:${company.phoneE164}`} className="flex gap-3 text-mist-400 hover:text-accent-400 transition-colors"><Phone size={18} className="text-accent-500 shrink-0" />{company.phoneDisplay}</a></li>
            <li><a href={`mailto:${company.email}`} className="flex gap-3 text-mist-400 hover:text-accent-400 transition-colors"><Mail size={18} className="text-accent-500 shrink-0" />{company.email}</a></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-ink-800">
        <div className="container-x py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-mist-400">
          <p>© {new Date().getFullYear()} {company.legalName}. All rights reserved.</p>
          <p>{company.hours}</p>
        </div>
      </div>
    </footer>
  );
}
