import React from 'react';
import { CustomButton } from './ui/CustomButton';
import { motion } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-background">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-muted/30 via-transparent to-transparent" />
      
      {/* Decorative elements */}
      <div className="absolute top-20 right-0 w-[600px] h-[600px] bg-brand-cyan/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-brand-cyan/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="relative container-wide section-padding pt-8 md:pt-16">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            {/* Trust badge */}
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-muted/80 border border-border/50 mb-6"
            >
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className="text-sm text-muted-foreground font-medium">
                Mit 12+ Verwaltungen erfolgreich durchgeführt
              </span>
            </motion.div>

            <h1 className="text-foreground mb-6">
              In 4 Wochen von Systemchaos zu{' '}
              <span className="text-brand-cyan">klarer Struktur</span>
              {' '}– mit KI, die wirklich entlastet
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8 max-w-xl">
              Wir befähigen Ihre Mitarbeitenden, KI sicher und souverän zu nutzen. 
              Das Ergebnis: weniger Überlastung, weniger manuelle Aufgaben, mehr Stabilität im Alltag.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <a href="#erstgespraech">
                <CustomButton variant="primary" size="lg" className="group">
                  Kostenloses Erstgespräch
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </CustomButton>
              </a>
            </div>

            <p className="text-sm text-muted-foreground">
              Unverbindlich. Erstgespräch dient der Bedarfsklärung.
            </p>
          </motion.div>

          {/* Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative"
          >
            <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-muted to-muted/50 border border-border/50 shadow-2xl shadow-black/5 overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-20 h-20 rounded-2xl bg-brand-cyan/10 border border-brand-cyan/20 flex items-center justify-center mx-auto mb-4">
                    <Play className="w-8 h-8 text-brand-cyan" />
                  </div>
                  <p className="text-muted-foreground font-medium">Video / Bild Placeholder</p>
                </div>
              </div>
            </div>
            
            {/* Floating card */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
              className="absolute -bottom-6 -left-6 bg-card rounded-xl shadow-xl border border-border/50 p-4 max-w-[200px]"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                  <span className="text-green-600 text-lg">✓</span>
                </div>
                <div>
                  <p className="text-sm font-semibold">4+ Stunden</p>
                  <p className="text-xs text-muted-foreground">Zeitersparnis/Woche</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
