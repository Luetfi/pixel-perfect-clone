import React from 'react';
import { motion } from 'framer-motion';
import { Info } from 'lucide-react';

export const RiskFreeSection: React.FC = () => {
  return (
    <section className="py-12 md:py-16 px-4 md:px-6">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="container-tight"
      >
        <div className="bg-muted/50 rounded-2xl border border-border/50 p-8 md:p-12">
          <div className="flex flex-col md:flex-row items-start gap-6">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <Info className="w-6 h-6 text-primary" />
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                Null-Risiko-Starthilfe
              </h3>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Buchen Sie Ihr unverbindliches Erstgespräch. 
                Erst im Anschluss entscheiden wir gemeinsam, ob und wann wir mit der Durchführung beginnen. 
                Keine Verpflichtung, keine versteckten Kosten, volle Transparenz.
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
