import React from 'react';
import { CustomButton } from './ui/CustomButton';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export const SocialProofSection: React.FC = () => {
  const stats = [
    { value: '12+', label: 'Verwaltungen erfolgreich betreut' },
    { value: '4h+', label: 'Zeitersparnis pro Woche/Person' },
    { value: '100%', label: 'Zufriedenheitsgarantie' },
    { value: '4', label: 'Wochen zum Ergebnis' }
  ];

  return (
    <section className="section-padding bg-primary text-primary-foreground">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-primary-foreground mb-4">
            Zahlen, die für sich sprechen
          </h2>
          <p className="text-lg text-primary-foreground/70 max-w-2xl mx-auto">
            Messbare Ergebnisse für Ihr Team
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <p className="text-4xl md:text-5xl font-bold text-brand-cyan mb-2">
                {stat.value}
              </p>
              <p className="text-primary-foreground/70 text-sm md:text-base">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center"
        >
          <a href="#erstgespraech">
            <CustomButton variant="primary" size="lg" className="group">
              Kostenloses Erstgespräch
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </CustomButton>
          </a>
        </motion.div>
      </div>
    </section>
  );
};
