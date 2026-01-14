import React from 'react';
import { CustomButton } from './ui/CustomButton';
import { Phone } from 'lucide-react';
import logo from '@/assets/logo.png';
import icon from '@/assets/icon.png';

export const Navigation: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border/50">
      <nav className="flex w-full items-center justify-center px-4 md:px-6 py-4">
        {/* Desktop Layout */}
        <div className="hidden md:flex w-full max-w-7xl items-center justify-between">
          <a 
            href="#" 
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            className="flex items-center"
          >
            <img src={logo} alt="mitarbyte - Mitarbeit von morgen" className="h-14" />
          </a>
          <div className="flex items-center gap-6">
            <a 
              href="tel:+4915122878503"
              className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors text-sm font-medium"
            >
              <div className="w-8 h-8 rounded-full bg-brand-cyan/10 flex items-center justify-center">
                <Phone className="w-4 h-4 text-brand-cyan" />
              </div>
              +49 1512 2878503
            </a>
            <CustomButton variant="primary" size="sm">
              Erstgespräch buchen
            </CustomButton>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="flex md:hidden w-full items-center justify-between">
          <a 
            href="#" 
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
          >
            <img src={icon} alt="mitarbyte" className="h-10" />
          </a>
          <div className="flex items-center gap-3">
            <a 
              href="tel:+4915122878503"
              className="w-10 h-10 rounded-full bg-muted flex items-center justify-center"
            >
              <Phone className="w-5 h-5 text-brand-cyan" />
            </a>
            <CustomButton variant="primary" size="sm">
              Erstgespräch
            </CustomButton>
          </div>
        </div>
      </nav>
    </header>
  );
};
