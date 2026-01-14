import React from 'react';
import { CustomButton } from './ui/CustomButton';
import { motion } from 'framer-motion';
import { ArrowRight, Clock, MessageCircle, Video, Shield, BookOpen, TrendingUp } from 'lucide-react';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="card-subtle p-8 hover:bg-muted/50"
    >
      <div className="w-12 h-12 rounded-xl bg-brand-cyan/10 flex items-center justify-center mb-5">
        {icon}
      </div>
      <h3 className="text-lg font-semibold text-foreground mb-3">
        {title}
      </h3>
      <p className="text-muted-foreground leading-relaxed">
        {description}
      </p>
    </motion.div>
  );
};

export const FeaturesSection: React.FC = () => {
  const features = [
    {
      icon: <Clock className="w-6 h-6 text-brand-cyan" />,
      title: "Ergebnisse in 4 Wochen",
      description: "Ihr Team baut eigene KI‑Assistenten, die echte Arbeit abnehmen. Klare Schritte, klare Übungen, klare Ergebnisse."
    },
    {
      icon: <MessageCircle className="w-6 h-6 text-brand-cyan" />,
      title: "24/7 Betreuung",
      description: "Ihr Trainer ist auch zwischen den Terminen für Fragen da und stellt sicher, dass wirklich alle mitkommen."
    },
    {
      icon: <Video className="w-6 h-6 text-brand-cyan" />,
      title: "Inhalte jederzeit nachholbar",
      description: "Alle Webinare werden aufgezeichnet, damit Mitarbeitende Ausfälle unkompliziert nacharbeiten können."
    },
    {
      icon: <Shield className="w-6 h-6 text-brand-cyan" />,
      title: "DSGVO‑konforme KI",
      description: "Mit Langdock als CompanyGPT sicher und unternehmenseigen."
    },
    {
      icon: <BookOpen className="w-6 h-6 text-brand-cyan" />,
      title: "Praxisnahe Formate",
      description: "Mit Webinaren, Diskussionsrunden und Praxisaufgaben stellen wir sicher, dass das Team KI wirklich versteht."
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-brand-cyan" />,
      title: "Spürbare Entlastung",
      description: "Kunden berichten von 4 Stunden Entlastung pro Woche pro Mitarbeitendem."
    }
  ];

  return (
    <section className="section-padding bg-background">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-foreground mb-4">
            Was den KI-Kickstart besonders macht
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Praxisnah, begleitet und auf Ihre Bedürfnisse zugeschnitten
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} delay={index * 0.1} />
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
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
