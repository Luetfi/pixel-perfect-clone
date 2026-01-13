import React from 'react';
import { CustomButton } from './ui/CustomButton';
import { Phone } from 'lucide-react';
import logo from '@/assets/logo.png';
import icon from '@/assets/icon.png';

export const Navigation: React.FC = () => {
  return (
    <header className="bg-background">
      <nav className="flex w-full flex-col overflow-hidden items-center font-bold justify-center px-6 md:px-10 py-4">
        {/* Desktop Layout */}
        <div className="hidden md:flex w-full max-w-[1303px] items-center justify-between">
          <div className="flex items-center">
            <img src={logo} alt="mitarbyte - Mitarbeit von morgen" className="h-12" />
          </div>
          <div className="flex items-center gap-6">
            <a 
              href="tel:+4915122878503"
              className="flex items-center gap-2 text-foreground hover:text-brand-cyan transition-colors text-xl font-bold"
            >
              <Phone className="w-5 h-5 text-brand-cyan" />
              +49 1512 2878503
            </a>
            <CustomButton variant="primary" size="sm" className="text-base">
              Kostenloses Erstgespräch
            </CustomButton>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="flex md:hidden w-full flex-col items-center gap-4">
          {/* Phone number centered at top */}
          <a 
            href="tel:+4915122878503"
            className="flex items-center gap-2 text-foreground text-lg font-bold"
          >
            <Phone className="w-5 h-5 text-brand-cyan" />
            +49 1512 2878503
          </a>
          
          {/* Logo and CTA side by side */}
          <div className="flex items-center gap-4 w-full justify-center">
            <img src={icon} alt="mitarbyte" className="h-12" />
            <CustomButton variant="primary" size="sm" className="text-sm">
              Erstgespräch
            </CustomButton>
          </div>
        </div>
      </nav>
    </header>
  );
};
