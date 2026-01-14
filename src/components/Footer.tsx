import React from 'react';
import logo from '@/assets/logo.png';
import { Phone, Mail, MapPin, ArrowUpRight } from 'lucide-react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container-wide section-padding pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Logo & Description */}
          <div className="lg:col-span-2">
            <img 
              src={logo} 
              alt="mitarbyte Logo" 
              className="h-10 mb-6 brightness-0 invert"
            />
            <p className="text-primary-foreground/70 leading-relaxed max-w-md">
              Mitarbeit von morgen – Wir machen Ihr Team fit für die KI-Zukunft. 
              Praxisnah, begleitet und auf Ihre Bedürfnisse zugeschnitten.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-brand-cyan font-semibold mb-6">Kontakt</h4>
            <div className="space-y-4">
              <a 
                href="tel:+4917624084651" 
                className="flex items-center gap-3 text-primary-foreground/70 hover:text-brand-cyan transition-colors group"
              >
                <div className="w-8 h-8 rounded-lg bg-primary-foreground/10 flex items-center justify-center group-hover:bg-brand-cyan/20 transition-colors">
                  <Phone className="h-4 w-4 text-brand-cyan" />
                </div>
                <span>+49 176 24084651</span>
              </a>
              <a 
                href="mailto:info@mitarbyte.de" 
                className="flex items-center gap-3 text-primary-foreground/70 hover:text-brand-cyan transition-colors group"
              >
                <div className="w-8 h-8 rounded-lg bg-primary-foreground/10 flex items-center justify-center group-hover:bg-brand-cyan/20 transition-colors">
                  <Mail className="h-4 w-4 text-brand-cyan" />
                </div>
                <span>info@mitarbyte.de</span>
              </a>
              <div className="flex items-center gap-3 text-primary-foreground/70">
                <div className="w-8 h-8 rounded-lg bg-primary-foreground/10 flex items-center justify-center">
                  <MapPin className="h-4 w-4 text-brand-cyan" />
                </div>
                <span>Deutschland</span>
              </div>
            </div>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-brand-cyan font-semibold mb-6">Rechtliches</h4>
            <div className="space-y-4">
              {['Impressum', 'Datenschutz', 'AGB'].map((item) => (
                <a 
                  key={item}
                  href="#" 
                  className="flex items-center gap-2 text-primary-foreground/70 hover:text-brand-cyan transition-colors group"
                >
                  <span>{item}</span>
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-primary-foreground/10">
          <p className="text-center text-primary-foreground/50 text-sm">
            © {currentYear} mitarbyte. Alle Rechte vorbehalten.
          </p>
        </div>
      </div>
    </footer>
  );
};
