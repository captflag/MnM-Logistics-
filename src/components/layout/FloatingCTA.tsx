import { Phone } from 'lucide-react';
import { company } from '../../data/company';

export function FloatingCTA() {
  const waText = encodeURIComponent("Hi MNM Logistics, I'd like to enquire about FTL freight.");
  return (
    <div className="fixed right-4 bottom-4 z-40 flex flex-col gap-3">
      <a
        href={`https://wa.me/${company.whatsapp}?text=${waText}`}
        target="_blank" rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="group w-13 h-13 p-3.5 rounded-full bg-[#25D366] text-white shadow-lg shadow-black/30 hover:scale-110 transition-transform flex items-center justify-center"
      >
        <svg viewBox="0 0 32 32" width="24" height="24" fill="currentColor" aria-hidden="true">
          <path d="M16 3C9.4 3 4 8.4 4 15c0 2.1.6 4.2 1.6 6L4 29l8.2-1.6c1.7.9 3.7 1.4 5.8 1.4 6.6 0 12-5.4 12-12S22.6 3 16 3zm0 21.8c-1.8 0-3.5-.5-5-1.4l-.4-.2-4.9 1 1-4.8-.3-.4C5.5 18.3 5 16.7 5 15 5 9 9.9 4 16 4s11 5 11 11-4.9 9.8-11 9.8zm6-7.4c-.3-.2-1.9-1-2.2-1-.3-.1-.5-.2-.7.2s-.8 1-1 1.2c-.2.2-.4.2-.7.1-1.8-.9-3-1.6-4.2-3.6-.3-.5.3-.5.9-1.6.1-.2 0-.4 0-.6s-.7-1.7-1-2.3c-.3-.6-.5-.5-.7-.5h-.6c-.2 0-.6.1-.9.4-1.2 1.2-1.2 2.9-.1 4.6 1.6 2.4 3.3 4.4 6.1 5.6.4.2.8.3 1.1.4.5.2 1 .1 1.3.1.4-.1 1.3-.5 1.5-1.1.2-.5.2-1 .1-1.1 0-.1-.2-.2-.5-.3z"/>
        </svg>
      </a>
      <a
        href={`tel:${company.phoneE164}`}
        aria-label="Call us"
        className="w-13 h-13 p-3.5 rounded-full bg-accent-500 text-ink-950 shadow-lg shadow-black/30 hover:scale-110 transition-transform flex items-center justify-center"
      >
        <Phone size={22} />
      </a>
    </div>
  );
}
