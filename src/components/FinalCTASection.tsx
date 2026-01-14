import React from 'react';
import { CustomButton } from './ui/CustomButton';
import { motion } from 'framer-motion';
import { Check, ArrowRight, Users, Zap, Shield, Play } from 'lucide-react';

export const FinalCTASection: React.FC = () => {
  const benefits = [
    { icon: <Users className="w-4 h-4" />, text: "Persönliche Begleitung durch Berater & Trainer" },
    { icon: <Zap className="w-4 h-4" />, text: "Spürbare Entlastung und echte KI‑Ergebnisse in 4 Wochen" },
    { icon: <Shield className="w-4 h-4" />, text: "Sicherer, praxisnaher Einstieg ohne technischen Aufwand" }
  ];

  return (
    <section className="section-padding bg-muted/30">
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-cyan/10 border border-brand-cyan/20 mb-6">
              <span className="text-sm font-medium text-brand-cyan">
                Bereits 12+ Verwaltungen erfolgreich gestartet
              </span>
            </div>

            <h2 className="text-foreground mb-6">
              Jetzt Platz sichern – nur 4 Durchführungen pro Monat möglich
            </h2>

            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Wir begleiten jedes Team persönlich – deshalb ist die Anzahl der Durchführungen pro Monat begrenzt. 
              Wenn Sie zeitnah starten wollen, sichern Sie sich jetzt einen der freien Termine.
            </p>

            <div className="space-y-4 mb-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-4"
                >
                  <div className="w-8 h-8 rounded-full bg-brand-cyan/10 flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4 text-brand-cyan" />
                  </div>
                  <span className="text-foreground">{benefit.text}</span>
                </motion.div>
              ))}
            </div>

            <CustomButton variant="primary" size="lg" className="group">
              Kostenloses Erstgespräch buchen
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </CustomButton>
          </motion.div>

          {/* Visual */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-muted to-muted/50 border border-border/50 shadow-xl overflow-hidden">
              <div className="h-full flex items-center justify-center p-8">
                <div className="text-center">
                  <div className="w-20 h-20 rounded-2xl bg-brand-cyan/10 border border-brand-cyan/20 flex items-center justify-center mx-auto mb-4">
                    <Play className="w-8 h-8 text-brand-cyan" />
                  </div>
                  <p className="text-muted-foreground font-medium">Visualisierung / Bild</p>
                  <p className="text-sm text-muted-foreground/70 mt-2 max-w-xs">
                    Von Unsicherheit zu klarer Handlungsfähigkeit
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
