import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'motion/react';
import { Nav } from './components/layout/Nav';
import { Footer } from './components/layout/Footer';
import { FloatingCTA } from './components/layout/FloatingCTA';
import { ScrollToTop } from './components/layout/ScrollToTop';
import { ScrollProgress } from './components/layout/ScrollProgress';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { ServicesPage } from './pages/Services';
import { Network } from './pages/Network';
import { Contact } from './pages/Contact';
import { NotFound } from './pages/NotFound';

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.3, ease: [0.21, 0.6, 0.35, 1] }}
      >
        <Routes location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/network" element={<Network />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </motion.div>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-ink-950 text-mist-200 selection:bg-accent-500 selection:text-ink-950">
      <ScrollToTop />
      <ScrollProgress />
      <Nav />
      <main>
        <AnimatedRoutes />
      </main>
      <Footer />
      <FloatingCTA />
      <div className="grain pointer-events-none fixed inset-0 z-[200] opacity-[0.035] mix-blend-overlay" aria-hidden />
    </div>
  );
}
