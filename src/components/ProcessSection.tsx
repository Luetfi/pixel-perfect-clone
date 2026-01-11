import React from 'react';
import { CustomButton } from './ui/CustomButton';

interface ProcessStepProps {
  title: string;
  description: string;
  className?: string;
}

const ProcessStep: React.FC<ProcessStepProps> = ({ title, description, className = "" }) => {
  return (
    <div className={`bg-white flex min-w-60 items-center gap-2.5 justify-center flex-1 shrink basis-[0%] px-[23px] border-black border-solid border-2 max-md:px-5 ${className}`}>
      <div className="self-stretch flex min-w-60 w-[322px] flex-col justify-center my-auto">
        <div className="font-bold">
          {title}
        </div>
        <div className="font-normal mt-2.5">
          {description}
        </div>
      </div>
    </div>
  );
};

export const ProcessSection: React.FC = () => {
  return (
    <section className="bg-[rgba(235,235,235,1)] border flex w-full flex-col overflow-hidden items-center text-center justify-center px-[90px] py-20 border-black border-solid max-md:max-w-full max-md:px-5">
      <div className="flex w-[1200px] max-w-full gap-8 justify-center">
        <div className="flex min-w-60 w-[1200px] flex-col items-stretch justify-center max-md:max-w-full">
          <div className="flex w-full flex-col items-stretch text-black justify-center max-md:max-w-full">
            <h2 className="text-[44px] font-semibold leading-[53px] self-center w-[748px] max-md:max-w-full">
              How it works?
            </h2>
            <div className="flex min-h-[353px] w-full gap-[40px_48px] text-2xl leading-[31px] flex-wrap mt-12 max-md:max-w-full max-md:mt-10">
              <ProcessStep
                title="Schritt 1: Book Assessment Call"
                description="Wir klären in wenigen Minuten Ihre Situation, Ziele und ob das Programm optimal zu Ihrer Verwaltung passt."
                className="min-h-[319px] py-[46px]"
              />
              <ProcessStep
                title="Schritt 2: Check, if Kickstart is right fit"
                description="Sie erhalten sofort Ihren Zugang, wir richten alles ein und bereiten Ihr Team auf einen reibungslosen Start vor."
                className="min-h-[319px] py-[31px]"
              />
              <ProcessStep
                title="Schritt 3: Let's go"
                description="Gemeinsam wählen wir den Starttermin – und Ihr Team legt direkt mit dem KI‑Kickstart‑Programm los."
                className="min-h-[319px] py-[62px]"
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
