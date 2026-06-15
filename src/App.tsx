import { lazy, Suspense } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'motion/react';
import { Loader2 } from 'lucide-react';
import { Nav } from './components/layout/Nav';
import { Footer } from './components/layout/Footer';
import { FloatingCTA } from './components/layout/FloatingCTA';
import { ScrollToTop } from './components/layout/ScrollToTop';
import { ScrollProgress } from './components/layout/ScrollProgress';

const Home = lazy(() => import('./pages/Home').then((m) => ({ default: m.Home })));
const About = lazy(() => import('./pages/About').then((m) => ({ default: m.About })));
const ServicesPage = lazy(() => import('./pages/Services').then((m) => ({ default: m.ServicesPage })));
const Network = lazy(() => import('./pages/Network').then((m) => ({ default: m.Network })));
const Contact = lazy(() => import('./pages/Contact').then((m) => ({ default: m.Contact })));
const NotFound = lazy(() => import('./pages/NotFound').then((m) => ({ default: m.NotFound })));

function PageFallback() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center">
      <Loader2 size={28} className="animate-spin text-accent-500" />
    </div>
  );
}

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
        <Suspense fallback={<PageFallback />}>
          <Routes location={location}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/network" element={<Network />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
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
