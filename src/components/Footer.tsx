import React from 'react';
import logo from '@/assets/logo.png';
import { Phone, Mail, MapPin } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-navy text-white py-16 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Logo & Beschreibung */}
          <div className="flex flex-col items-start">
            <img 
              src={logo} 
              alt="mitarbyte Logo" 
              className="h-12 mb-4 brightness-0 invert"
            />
            <p className="text-gray-300 text-sm leading-relaxed">
              Mitarbeit von morgen – Wir machen Ihr Team fit für die KI-Zukunft.
            </p>
          </div>

          {/* Kontakt */}
          <div className="flex flex-col">
            <h4 className="text-brand-cyan font-bold text-lg mb-4">Kontakt</h4>
            <div className="space-y-3">
              <a 
                href="tel:+4917624084651" 
                className="flex items-center gap-3 text-gray-300 hover:text-brand-cyan transition-colors"
              >
                <Phone className="h-4 w-4 text-brand-cyan" />
                <span>+49 176 24084651</span>
              </a>
              <a 
                href="mailto:info@mitarbyte.de" 
                className="flex items-center gap-3 text-gray-300 hover:text-brand-cyan transition-colors"
              >
                <Mail className="h-4 w-4 text-brand-cyan" />
                <span>info@mitarbyte.de</span>
              </a>
              <div className="flex items-start gap-3 text-gray-300">
                <MapPin className="h-4 w-4 text-brand-cyan mt-0.5" />
                <span>Deutschland</span>
              </div>
            </div>
          </div>

          {/* Links */}
          <div className="flex flex-col">
            <h4 className="text-brand-cyan font-bold text-lg mb-4">Rechtliches</h4>
            <div className="space-y-3">
              <a 
                href="#" 
                className="block text-gray-300 hover:text-brand-cyan transition-colors"
              >
                Impressum
              </a>
              <a 
                href="#" 
                className="block text-gray-300 hover:text-brand-cyan transition-colors"
              >
                Datenschutz
              </a>
              <a 
                href="#" 
                className="block text-gray-300 hover:text-brand-cyan transition-colors"
              >
                AGB
              </a>
            </div>
          </div>
        </div>

        {/* Trennlinie & Copyright */}
        <div className="border-t border-gray-600 pt-8">
          <p className="text-center text-gray-400 text-sm">
            © {new Date().getFullYear()} mitarbyte. Alle Rechte vorbehalten.
          </p>
        </div>
      </div>
    </footer>
  );
};
