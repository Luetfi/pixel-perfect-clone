import React from 'react';
import { CustomButton } from './ui/CustomButton';

interface FeatureCardProps {
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description }) => {
  return (
    <div className="bg-white flex flex-col items-start justify-start p-6 border border-black min-h-[180px] flex-1 basis-[calc(33.333%-32px)] min-w-[280px]">
      <h3 className="font-bold text-lg leading-tight mb-3 text-left italic">
        {title}
      </h3>
      <p className="font-normal text-base leading-relaxed text-left text-black">
        {description}
      </p>
    </div>
  );
};

export const FeaturesSection: React.FC = () => {
  return (
    <section className="bg-white flex w-full flex-col items-center justify-center px-6 py-16 max-md:px-4">
      <div className="w-full max-w-[1000px] flex flex-col items-center">
        <h2 className="text-3xl md:text-4xl font-semibold leading-tight text-center mb-12 max-w-[700px]">
          Benefit Driven headline - how you do it as well as what makes you different
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full mb-12">
          <FeatureCard
            title="Ergebnisse in 4 Wochen"
            description="Ihr Team baut eigene KI-Assistenten, die echte Arbeit abnehmen. Klare Schritte, klare Übungen, klare Ergebnisse."
          />
          <FeatureCard
            title="24/7 Betreuung"
            description="Ihr Trainer ist auch zwischen den Terminen für Fragen da, geht auf individuelle Bedürfnisse ein und stellt sicher, dass wirklich alle mitkommen."
          />
          <FeatureCard
            title="Inhalte jederzeit nachholbar"
            description="Alle Webinare werden aufgezeichnet, damit Mitarbeitende Ausfälle oder Engpässe unkompliziert nacharbeiten können."
          />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full mb-12">
          <FeatureCard
            title="DSGVO-konforme KI"
            description="Mit Langdock als CompanyGPT sicher und unternehmenseigen."
          />
          <FeatureCard
            title="Webinare, Diskussionsrunden und Praxisaufgaben"
            description="Mit verschiedenen Formaten stellen wir sicher, dass das Team KI wirklich versteht – und dauerhaft damit arbeiten kann."
          />
          <FeatureCard
            title="Spürbare Entlastung"
            description="Kunden berichten von 4 Stunden Entlastung pro Mitarbeitendem."
          />
        </div>
        
        <CustomButton variant="primary">
          Kostenloses Erstgespräch
        </CustomButton>
      </div>
    </section>
  );
};
