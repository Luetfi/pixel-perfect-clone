import React from 'react';
import { CustomButton } from './ui/CustomButton';
import { motion } from 'framer-motion';
import { ArrowRight, User } from 'lucide-react';

interface TeamMemberProps {
  name: string;
  role: string;
  description: string;
  imagePosition: 'left' | 'right';
  delay: number;
}

const TeamMember: React.FC<TeamMemberProps> = ({ name, role, description, imagePosition, delay }) => {
  const image = (
    <motion.div
      initial={{ opacity: 0, x: imagePosition === 'left' ? -20 : 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="relative"
    >
      <div className="aspect-square rounded-2xl bg-gradient-to-br from-muted to-muted/50 border border-border/50 overflow-hidden">
        <div className="h-full flex flex-col items-center justify-center p-8">
          <div className="w-24 h-24 rounded-full bg-brand-cyan/10 border border-brand-cyan/20 flex items-center justify-center mb-4">
            <User className="w-12 h-12 text-brand-cyan" />
          </div>
          <p className="text-xl font-semibold text-foreground">{name}</p>
          <p className="text-muted-foreground">{role}</p>
        </div>
      </div>
    </motion.div>
  );

  const content = (
    <motion.div
      initial={{ opacity: 0, x: imagePosition === 'left' ? 20 : -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: delay + 0.1 }}
      className="flex items-center"
    >
      <div className="card-subtle p-8">
        <p className="text-lg text-muted-foreground leading-relaxed">
          {description}
        </p>
      </div>
    </motion.div>
  );

  return (
    <div className="grid md:grid-cols-2 gap-8 items-center">
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

export const TeamSection: React.FC = () => {
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
            Ihr Team für den KI-Kickstart
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Persönliche Betreuung durch erfahrene KI-Experten
          </p>
        </motion.div>

        <div className="space-y-16">
          <TeamMember
            name="Victor Reisenauer"
            role="KI-Berater"
            description="Victor führt das Erstgespräch, klärt Ihre individuellen Ziele und beantwortet alle offenen Fragen. Er zeigt Ihnen, wie der KI‑Kickstart optimal zu Ihrer Verwaltung passt und welche Schritte für Sie den größten Nutzen bringen."
            imagePosition="left"
            delay={0}
          />
          <TeamMember
            name="Lukas Sontheimer"
            role="KI-Trainer"
            description="Lukas übernimmt Ihr Onboarding, richtet Zugänge ein und führt Ihr Team Schritt für Schritt durch das gesamte Programm. Er sorgt dafür, dass alle mitkommen, Blockaden abgebaut werden und die Inhalte sicher und praxisnah im Alltag ankommen."
            imagePosition="right"
            delay={0.2}
          />
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-16"
        >
          <CustomButton variant="primary" size="lg" className="group">
            Kostenloses Erstgespräch
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </CustomButton>
        </motion.div>
      </div>
    </section>
  );
};
