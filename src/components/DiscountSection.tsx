import React from 'react';
import { CustomButton } from './ui/CustomButton';
import { motion } from 'framer-motion';
import { ArrowRight, Award } from 'lucide-react';

export const DiscountSection: React.FC = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-tight">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-primary to-secondary rounded-3xl p-8 md:p-16 text-center relative overflow-hidden"
        >
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-cyan/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-brand-cyan/10 rounded-full blur-3xl" />
          
          <div className="relative">
            <div className="w-16 h-16 rounded-2xl bg-brand-cyan/20 flex items-center justify-center mx-auto mb-6">
              <Award className="w-8 h-8 text-brand-cyan" />
            </div>
            
            <h2 className="text-primary-foreground mb-4">
              Exklusiver Rabatt für IVD Mitglieder
            </h2>
            
            <p className="text-primary-foreground/70 text-lg max-w-2xl mx-auto mb-8">
              Als IVD-Mitglied profitieren Sie von besonderen Konditionen für den KI-Kickstart. 
              Sprechen Sie uns im Erstgespräch darauf an.
            </p>
            
            <a href="#erstgespraech">
              <CustomButton variant="primary" size="lg" className="group">
                Erstgespräch vereinbaren
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </CustomButton>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
