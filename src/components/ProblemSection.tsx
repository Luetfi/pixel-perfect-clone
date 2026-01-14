import React from 'react';
import { CustomButton } from './ui/CustomButton';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export const ProblemSection: React.FC = () => {
  return (
    <section className="section-padding bg-muted/30">
      <div className="container-tight">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-foreground mb-6">
            Fühlen Sie sich gefangen im reaktiven Tagesgeschäft, ohne klare Struktur?
          </h2>
          
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            Jeden Tag kämpfen Sie gegen dieselben Engpässe: übervolle Postfächer, fragmentierte Systeme, 
            ständige Unterbrechungen und ein Team, das kaum noch hinterherkommt.
          </p>
          
          <p className="text-lg text-muted-foreground leading-relaxed mb-10">
            Wir zeigen Ihnen, wie Sie mit einer modernen, KI‑augmentierten Arbeitsweise Ordnung schaffen, 
            Routinen automatisieren und Ihrem Team spürbar mehr Stabilität und Zeit zurückgeben – 
            ohne komplizierte Umstellungen.
          </p>

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
