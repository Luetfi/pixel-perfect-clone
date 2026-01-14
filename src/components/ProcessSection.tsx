import React from 'react';
import { CustomButton } from './ui/CustomButton';
import { motion } from 'framer-motion';
import { ArrowRight, Calendar, CheckCircle, Rocket } from 'lucide-react';

interface ProcessStepProps {
  step: number;
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}

const ProcessStep: React.FC<ProcessStepProps> = ({ step, icon, title, description, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="relative"
    >
      <div className="card-elevated p-8 text-center h-full">
        <div className="w-14 h-14 rounded-2xl bg-brand-cyan/10 flex items-center justify-center mx-auto mb-6">
          {icon}
        </div>
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-brand-cyan flex items-center justify-center text-sm font-bold text-primary">
          {step}
        </div>
        <h3 className="text-xl font-semibold text-foreground mb-3">
          {title}
        </h3>
        <p className="text-muted-foreground leading-relaxed">
          {description}
        </p>
      </div>
    </motion.div>
  );
};

export const ProcessSection: React.FC = () => {
  const steps = [
    {
      icon: <Calendar className="w-7 h-7 text-brand-cyan" />,
      title: "Assessment Call buchen",
      description: "Wir klären in wenigen Minuten Ihre Situation, Ziele und ob das Programm optimal zu Ihrer Verwaltung passt."
    },
    {
      icon: <CheckCircle className="w-7 h-7 text-brand-cyan" />,
      title: "Fit prüfen & entscheiden",
      description: "Sie erhalten sofort Ihren Zugang, wir richten alles ein und bereiten Ihr Team auf einen reibungslosen Start vor."
    },
    {
      icon: <Rocket className="w-7 h-7 text-brand-cyan" />,
      title: "Los geht's",
      description: "Gemeinsam wählen wir den Starttermin – und Ihr Team legt direkt mit dem KI‑Kickstart‑Programm los."
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
            So einfach starten Sie
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            In drei Schritten zum erfolgreichen KI-Einstieg
          </p>
        </motion.div>

        {/* Connection line for desktop */}
        <div className="hidden lg:block relative">
          <div className="absolute top-24 left-1/4 right-1/4 h-0.5 bg-gradient-to-r from-brand-cyan/20 via-brand-cyan to-brand-cyan/20" />
        </div>

        <div className="grid md:grid-cols-3 gap-8 relative">
          {steps.map((step, index) => (
            <ProcessStep key={index} step={index + 1} {...step} delay={index * 0.15} />
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
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
