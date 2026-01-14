import React from 'react';
import { motion } from 'framer-motion';
import { Clock, Users, Sparkles, Play } from 'lucide-react';

interface BenefitCardProps {
  icon: React.ReactNode;
  label: string;
  title: string;
  description: string;
  imagePosition: 'left' | 'right';
  index: number;
}

const BenefitCard: React.FC<BenefitCardProps> = ({ icon, label, title, description, imagePosition, index }) => {
  const content = (
    <motion.div 
      initial={{ opacity: 0, x: imagePosition === 'left' ? 20 : -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="flex flex-col justify-center"
    >
      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 rounded-xl bg-brand-cyan/10 flex items-center justify-center">
          {icon}
        </div>
        <span className="text-sm font-semibold text-brand-cyan uppercase tracking-wider">
          {label}
        </span>
      </div>
      <h3 className="text-2xl md:text-3xl font-semibold text-foreground mb-4 leading-tight">
        {title}
      </h3>
      <p className="text-muted-foreground text-lg leading-relaxed">
        {description}
      </p>
    </motion.div>
  );

  const image = (
    <motion.div 
      initial={{ opacity: 0, x: imagePosition === 'left' ? -20 : 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-muted to-muted/50 border border-border/50 overflow-hidden"
    >
      <div className="h-full flex items-center justify-center p-8">
        <div className="text-center">
          <div className="w-16 h-16 rounded-2xl bg-brand-cyan/10 border border-brand-cyan/20 flex items-center justify-center mx-auto mb-3">
            <Play className="w-6 h-6 text-brand-cyan" />
          </div>
          <p className="text-muted-foreground text-sm font-medium">Bild / Video</p>
        </div>
      </div>
    </motion.div>
  );

  return (
    <div className={`grid md:grid-cols-2 gap-8 md:gap-16 items-center ${index !== 0 ? 'mt-16 md:mt-24' : ''}`}>
      {imagePosition === 'left' ? (
        <>
          {image}
          {content}
        </>
      ) : (
        <>
          <div className="order-2 md:order-1">{content}</div>
          <div className="order-1 md:order-2">{image}</div>
        </>
      )}
    </div>
  );
};

export const BenefitsSection: React.FC = () => {
  const benefits = [
    {
      icon: <Clock className="w-5 h-5 text-brand-cyan" />,
      label: "Zeitersparnis",
      title: "So gewinnen Sie jede Woche mehrere Stunden",
      description: "Kunden berichten im Durchschnitt von rund 4 Stunden Entlastung pro Woche pro Mitarbeitendem. KI übernimmt Schreiben, Recherchieren, Auswerten und viele der kleinen Aufgaben, die heute wertvolle Zeit blockieren.",
      imagePosition: 'left' as const
    },
    {
      icon: <Users className="w-5 h-5 text-brand-cyan" />,
      label: "Team-Befähigung",
      title: "So befähigen Sie ihr Team KI sicher und produktiv zu nutzen",
      description: "Wir bauen Unsicherheiten, Blockaden und Berührungsängste systematisch ab – egal ob technikaffin oder „Urgestein\". Durch praxisnahe Übungen, geführte Aufgaben und echte Beispiele entsteht ein souveräner und nachhaltiger Umgang mit KI.",
      imagePosition: 'right' as const
    },
    {
      icon: <Sparkles className="w-5 h-5 text-brand-cyan" />,
      label: "Transformation",
      title: "So legen Sie das Fundament für eine moderne, KI‑gestützte Organisation",
      description: "Wir etablieren mit Ihnen ein funktionierendes KI‑Grundgerüst: ein UnternehmensGPT für KI-Assistenten, ein sicherer Umgang im Team und eine tragfähige KI-Infrastruktur für alles, was danach kommt.",
      imagePosition: 'left' as const
    }
  ];

  return (
    <section className="section-padding bg-background">
      <div className="container-wide">
        {benefits.map((benefit, index) => (
          <BenefitCard key={index} {...benefit} index={index} />
        ))}
      </div>
    </section>
  );
};
