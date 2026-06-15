import { Link } from 'react-router-dom';
import { Home } from 'lucide-react';

export function NotFound() {
  return (
    <section className="min-h-[70vh] flex items-center">
      <div className="container-x text-center">
        <div className="font-display font-extrabold text-7xl sm:text-9xl text-gradient">404</div>
        <h1 className="font-display font-bold text-2xl sm:text-3xl text-white mt-4">This route doesn't exist.</h1>
        <p className="text-mist-300 mt-3">Looks like this load took a wrong turn. Let's get you back on track.</p>
        <Link to="/" className="btn-primary mt-8"><Home size={16} /> Back to home</Link>
      </div>
    </section>
  );
}
