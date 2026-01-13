import React from 'react';
import { CustomButton } from './ui/CustomButton';

interface FeatureCardProps {
  title: string;
  description: string;
  className?: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, className = "" }) => {
  return (
    <div className={`bg-white flex min-w-60 items-center gap-2.5 justify-center flex-1 shrink basis-[0%] px-[23px] border-black border-solid border-2 max-md:px-5 ${className}`}>
      <div className="self-stretch flex min-w-60 w-[322px] flex-col justify-center my-auto">
        <div className="font-bold leading-[1.3]">
          {title}
        </div>
        <div className="font-normal leading-[31px] mt-2.5">
          {description}
        </div>
      </div>
    </div>
  );
};

export const FeaturesSection: React.FC = () => {
  return (
    <section className="bg-white border flex w-full flex-col overflow-hidden items-center text-center justify-center px-[90px] py-20 border-black border-solid max-md:max-w-full max-md:px-5">
      <div className="flex w-[1200px] max-w-full gap-8 justify-center">
        <div className="flex min-w-60 w-[1200px] flex-col items-stretch justify-center max-md:max-w-full">
          <div className="flex w-full flex-col items-stretch text-2xl text-black justify-center max-md:max-w-full">
            <h2 className="text-[44px] font-semibold leading-[53px] self-center w-[748px] max-md:max-w-full">
              Benefit Driven headline - how you do it as well as what makes you different
            </h2>
            <div className="flex w-full gap-[40px_48px] flex-wrap mt-12 max-md:max-w-full max-md:mt-10">
              <FeatureCard
                title="Ergebnisse in 4 Wochen"
                description="Ihr Team baut eigene KI‑Assistenten, die echte Arbeit abnehmen. Klare Schritte, klare Übungen, klare Ergebnisse."
                className="min-h-[320px] aspect-[1] p-8"
              />
              <FeatureCard
                title="24/7 Betreuung"
                description="Ihr Trainer ist auch zwischen den Terminen für Fragen da, geht auf individuelle Bedürfnisse ein und stellt sicher, dass wirklich alle mitkommen."
                className="min-h-[320px] aspect-[1] p-8"
              />
              <FeatureCard
                title="Inhalte jederzeit nachholbar"
                description="Alle Webinare werden aufgezeichnet, damit Mitarbeitende Ausfälle oder Engpässe unkompliziert nacharbeiten können."
                className="min-h-[320px] aspect-[1] p-8"
              />
            </div>
            <div className="flex w-full gap-[40px_48px] flex-wrap mt-12 max-md:max-w-full max-md:mt-10">
              <FeatureCard
                title="DSGVO‑konforme KI"
                description="Mit Langdock als CompanyGPT sicher und unternehmenseigen."
                className="min-h-[320px] aspect-[1] p-8"
              />
              <FeatureCard
                title="Webinare, Diskussionsrunden und Praxisaufgaben"
                description="Mit verschiedenen Formaten stellen wir sicher, dass das Team KI wirklich versteht – und dauerhaft damit arbeiten kann."
                className="min-h-[320px] aspect-[1] p-8"
              />
              <FeatureCard
                title="Spürbare Entlastung"
                description="Kunden berichten von 4 Stunden Entlastung pro Woche pro Mitarbeitendem."
                className="min-h-[320px] aspect-[1] p-8"
              />
            </div>
          </div>
          <div className="self-center flex gap-4 text-xl text-white font-bold uppercase mt-12 max-md:mt-10">
            <CustomButton variant="primary">
              Kostenloses Erstgespräch
            </CustomButton>
          </div>
        </div>
      </div>
    </section>
  );
};
