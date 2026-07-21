import { Instagram, Sprout, Mail, Phone, MapPin } from 'lucide-react';
import Logo from './Logo';
import { COMPANY_INFO } from '../companyInfo';

interface FooterProps {
  setCurrentTab: (tab: string) => void;
  onReplayIntro?: () => void;
}

export default function Footer({ setCurrentTab, onReplayIntro }: FooterProps) {
  return (
    <footer className="bg-primary text-white pt-20 pb-10 overflow-hidden relative border-t-4 border-secondary/40">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none opacity-5">
        <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-secondary rounded-full blur-3xl" />
      </div>

          <div className="max-w-7xl mx-auto px-6 md:px-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 relative z-10">
        
        {/* Col 1: Brand Info */}
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <Logo className="h-10 w-10" />
            <span className="font-serif text-2xl font-bold italic text-white">
              Aranya Organic
            </span>
          </div>
          <p className="text-on-primary-container text-xs leading-relaxed font-medium">
            Handcrafted with organic botanical ingredients for skin, hair and everyday luxury self-care. Purity and botanical wisdom delivered directly to your doorstep.
          </p>
          <div className="flex items-center gap-2 text-xs text-secondary font-bold bg-white/5 px-4 py-2 rounded-full w-fit border border-secondary/20">
            <Sprout className="h-4 w-4 text-secondary" />
            <span>MSME Certified</span>
          </div>
        </div>

        {/* Col 2: Navigation Links */}
        <div className="space-y-4">
          <h4 className="font-serif text-lg font-bold text-secondary">Quick Links</h4>
          <ul className="space-y-2 text-xs">
            {[
              { id: 'home', label: 'Home Page' },
              { id: 'products', label: 'All Products' },
              { id: 'about-section', label: 'Our Story (About)' },
              { id: 'consultation', label: 'Personal Consultation' },
            ].map((link) => (
              <li key={link.id}>
                <button
                  onClick={() => {
                    if (link.id.endsWith('section')) {
                      setCurrentTab('home');
                      setTimeout(() => {
                        document.getElementById(link.id)?.scrollIntoView({ behavior: 'smooth' });
                      }, 100);
                    } else {
                      setCurrentTab(link.id);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }
                  }}
                  className="text-on-primary-container hover:text-secondary transition-colors cursor-pointer font-bold font-sans text-left"
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Col 3: Legal policies */}
        <div className="space-y-4">
          <h4 className="font-serif text-lg font-bold text-secondary">Policies & Legal</h4>
          <ul className="space-y-2 text-xs">
            {[
              { id: 'terms', label: 'Terms & Conditions' },
              { id: 'returns', label: 'Return Policy' },
              { id: 'shipping', label: 'Shipping Policy' },
            ].map((link) => (
              <li key={link.id}>
                <button
                  onClick={() => {
                    setCurrentTab(link.id);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="text-on-primary-container hover:text-secondary transition-colors cursor-pointer font-bold font-sans text-left"
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Col 4: Contact details */}
        <div className="space-y-4">
          <h4 className="font-serif text-lg font-bold text-secondary">Get In Touch</h4>
          <ul className="space-y-3 text-xs text-on-primary-container font-medium">
            <li className="flex items-start gap-3">
              <MapPin className="h-4 w-4 text-secondary shrink-0 mt-0.5" />
              <span>{COMPANY_INFO.address}</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="h-4 w-4 text-secondary shrink-0" />
              <span>{COMPANY_INFO.phoneDisplay}</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="h-4 w-4 text-secondary shrink-0" />
              <span>{COMPANY_INFO.email}</span>
            </li>
            <li className="flex items-center gap-3">
              <Instagram className="h-4 w-4 text-secondary shrink-0" />
              <a
                href={COMPANY_INFO.instagram}
                target="_blank"
                rel="noreferrer"
                className="hover:text-secondary transition-colors"
              >
                Instagram
              </a>
            </li>
          </ul>
        </div>

      </div>

      {/* Credit Row */}
      <div className="mt-16 pt-8 border-t border-primary-container/40 text-center max-w-7xl mx-auto px-6 md:px-16 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-on-primary-container">
        <p>© {new Date().getFullYear()} Aranya Organic. All rights reserved.</p>
        {onReplayIntro && (
          <button 
            onClick={onReplayIntro}
            className="text-secondary hover:text-white font-semibold transition-all hover:scale-102 cursor-pointer flex items-center gap-1 bg-white/5 hover:bg-white/10 px-4 py-1.5 rounded-full border border-secondary/20 hover:border-secondary"
          >
            <span>Replay Botanical Journey 🌿</span>
          </button>
        )}
        <p className="italic font-serif">Handcrafted with pure devotion for skin and planet.</p>
      </div>
    </footer>
  );
}
