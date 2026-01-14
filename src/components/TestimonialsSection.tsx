import React from 'react';
import { CustomButton } from './ui/CustomButton';
import { motion } from 'framer-motion';
import { Quote, Star, ArrowRight } from 'lucide-react';

interface TestimonialCardProps {
  quote: string;
  name: string;
  role: string;
  company: string;
  delay: number;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ quote, name, role, company, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="card-elevated p-8"
    >
      <div className="flex gap-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="w-4 h-4 fill-brand-cyan text-brand-cyan" />
        ))}
      </div>
      <Quote className="w-8 h-8 text-muted-foreground/30 mb-4" />
      <p className="text-foreground text-lg leading-relaxed mb-6">
        {quote}
      </p>
      <div className="flex items-center gap-4 pt-4 border-t border-border/50">
        <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center text-lg font-semibold text-muted-foreground">
          {name.charAt(0)}
        </div>
        <div>
          <p className="font-semibold text-foreground">{name}</p>
          <p className="text-sm text-muted-foreground">{role}, {company}</p>
        </div>
      </div>
    </motion.div>
  );
};

export const TestimonialsSection: React.FC = () => {
  const testimonials = [
    {
      quote: "Das Programm hat uns die Angst vor KI genommen. Heute nutzen wir sie täglich und sparen wirklich Zeit.",
      name: "Maria S.",
      role: "Geschäftsführerin",
      company: "Hausverwaltung München"
    },
    {
      quote: "Endlich ein Programm, das auch unsere erfahrenen Mitarbeiter abholt. Alle sind jetzt mit dabei.",
      name: "Thomas K.",
      role: "Teamleiter",
      company: "Immobilienverwaltung Berlin"
    },
    {
      quote: "Die persönliche Betreuung macht den Unterschied. Fragen werden sofort beantwortet, niemand bleibt zurück.",
      name: "Sandra M.",
      role: "Prokuristin",
      company: "Verwaltungsgesellschaft Hamburg"
    }
  ];

  return (
    <section className="section-padding bg-muted/30">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-foreground mb-4">
            Moderne Hausverwaltungen empfehlen uns begeistert weiter
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Erfahren Sie, wie andere Verwaltungen mit dem KI-Kickstart erfolgreich gestartet sind
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} delay={index * 0.1} />
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-12"
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
