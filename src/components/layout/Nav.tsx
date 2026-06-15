import { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Phone, ArrowRight } from 'lucide-react';
import { Logo } from '../Logo';
import { company } from '../../data/company';

const links = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/services', label: 'Services' },
  { to: '/network', label: 'Network' },
  { to: '/contact', label: 'Contact' },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => { document.body.style.overflow = open ? 'hidden' : ''; }, [open]);

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className={`transition-all duration-300 ${scrolled ? 'bg-ink-950/85 backdrop-blur-lg border-b border-ink-700/60' : 'bg-transparent'}`}>
        <nav className="container-x flex items-center justify-between h-18 py-3.5">
          <Link to="/" className="shrink-0" onClick={() => setOpen(false)} aria-label="MNM Logistics home">
            <Logo className="h-9 w-auto" />
          </Link>

          <ul className="hidden lg:flex items-center gap-1">
            {links.map((l) => (
              <li key={l.to}>
                <NavLink
                  to={l.to}
                  className={({ isActive }) =>
                    `nav-underline px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                      isActive ? 'text-white bg-ink-800/80' : 'text-mist-300 hover:text-white'
                    }`
                  }
                >
                  {l.label}
                </NavLink>
              </li>
            ))}
          </ul>

          <div className="hidden lg:flex items-center gap-3">
            <a href={`tel:${company.phoneE164}`} className="btn-ghost text-sm">
              <Phone size={16} /> {company.phoneDisplay}
            </a>
            <Link to="/contact" className="btn-primary">
              Get a Quote <ArrowRight size={16} />
            </Link>
          </div>

          <button className="lg:hidden text-white p-2" onClick={() => setOpen((v) => !v)} aria-label="Toggle menu">
            {open ? <X size={26} /> : <Menu size={26} />}
          </button>
        </nav>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="lg:hidden bg-ink-950/97 backdrop-blur-lg border-b border-ink-700/60"
          >
            <ul className="container-x py-4 flex flex-col gap-1">
              {links.map((l) => (
                <li key={l.to}>
                  <NavLink
                    to={l.to}
                    onClick={() => setOpen(false)}
                    className={({ isActive }) =>
                      `block px-4 py-3 rounded-xl text-base font-medium ${
                        isActive ? 'text-white bg-ink-800' : 'text-mist-200'
                      }`
                    }
                  >
                    {l.label}
                  </NavLink>
                </li>
              ))}
              <li className="mt-2 flex flex-col gap-2">
                <a href={`tel:${company.phoneE164}`} className="btn-secondary w-full"><Phone size={16} /> {company.phoneDisplay}</a>
                <Link to="/contact" onClick={() => setOpen(false)} className="btn-primary w-full">Get a Quote <ArrowRight size={16} /></Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
