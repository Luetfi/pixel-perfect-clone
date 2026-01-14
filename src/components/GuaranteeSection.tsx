import React from 'react';
import { motion } from 'framer-motion';
import { Shield } from 'lucide-react';

export const GuaranteeSection: React.FC = () => {
  return (
    <section className="py-12 md:py-16 px-4 md:px-6">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="container-tight"
      >
        <div className="bg-gradient-to-r from-brand-cyan/5 via-brand-cyan/10 to-brand-cyan/5 rounded-2xl border border-brand-cyan/20 p-8 md:p-12">
          <div className="flex flex-col md:flex-row items-center gap-6 text-center md:text-left">
            <div className="flex-shrink-0">
              <div className="w-16 h-16 rounded-2xl bg-brand-cyan/20 flex items-center justify-center">
                <Shield className="w-8 h-8 text-brand-cyan" />
              </div>
            </div>
            <div>
              <h3 className="text-xl md:text-2xl font-semibold text-foreground mb-2">
                100% Zufriedenheitsgarantie
              </h3>
              <p className="text-muted-foreground text-lg">
                Erstattung, falls Sie nach der ersten Sitzung nicht 100%ig zufrieden sind.
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
