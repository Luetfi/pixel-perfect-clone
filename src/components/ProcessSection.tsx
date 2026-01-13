import React from 'react';
import { CustomButton } from './ui/CustomButton';

interface ProcessStepProps {
  step: string;
  title: string;
  description: string;
}

const ProcessStep: React.FC<ProcessStepProps> = ({ step, title, description }) => {
  return (
    <div className="bg-white flex flex-col items-center justify-start flex-1 min-w-[280px] max-w-[380px] p-8 border-2 border-foreground rounded-sm">
      <div className="text-center">
        <p className="font-bold text-lg mb-1">{step}</p>
        <p className="font-bold text-lg mb-4">{title}</p>
        <p className="text-base font-normal leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

export const ProcessSection: React.FC = () => {
  return (
    <section className="bg-muted/40 w-full flex flex-col items-center justify-center px-6 md:px-20 py-16 md:py-20">
      <div className="w-full max-w-[1200px] flex flex-col items-center">
        {/* Title */}
        <h2 className="text-3xl md:text-[44px] font-semibold leading-tight text-center text-foreground max-w-[800px] mb-12">
          How it works?
        </h2>

        {/* Steps Grid */}
        <div className="flex flex-col md:flex-row gap-6 md:gap-8 w-full justify-center items-stretch mb-12">
          <ProcessStep
            step="Schritt 1:"
            title="Book Assessment Call"
            description="Wir klären in wenigen Minuten Ihre Situation, Ziele und ob das Programm optimal zu Ihrer Verwaltung passt."
          />
          <ProcessStep
            step="Schritt 2:"
            title="Check, if Kickstart is right fit"
            description="Sie erhalten sofort Ihren Zugang, wir richten alles ein und bereiten Ihr Team auf einen reibungslosen Start vor."
          />
          <ProcessStep
            step="Schritt 3:"
            title="Let's go"
            description="Gemeinsam wählen wir den Starttermin – und Ihr Team legt direkt mit dem KI‑Kickstart‑Programm los."
          />
        </div>

        {/* CTA Button */}
        <CustomButton variant="primary" className="uppercase">
          Kostenloses Erstgespräch
        </CustomButton>
      </div>
    </section>
  );
};
