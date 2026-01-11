import React from 'react';
import { CustomButton } from './ui/CustomButton';

interface TeamMemberProps {
  name: string;
  role: string;
  description: string;
  imagePosition: 'left' | 'right';
}

const TeamMember: React.FC<TeamMemberProps> = ({ name, role, description, imagePosition }) => {
  const imageCard = (
    <div className="bg-white flex min-w-60 min-h-[354px] w-full flex-col items-center justify-center flex-1 shrink basis-[0%] px-[127px] py-[126px] border-black border-solid border-2 max-md:max-w-full max-md:px-5 max-md:py-[100px]">
      <div className="flex max-w-full w-[322px] flex-col whitespace-nowrap leading-[1.3] justify-center">
        <div>Image</div>
      </div>
      <div className="leading-[31px] mt-2.5 text-center">
        <div className="font-bold">{name}</div>
        <div className="font-normal">{role}</div>
      </div>
    </div>
  );

  const descriptionCard = (
    <div className="bg-white flex min-w-60 w-full items-center gap-2.5 justify-center flex-1 shrink basis-[0%] px-[31px] py-[87px] border-black border-solid border-2 max-md:max-w-full max-md:px-5">
      <div className="self-stretch flex min-w-60 w-[514px] flex-col items-stretch justify-center my-auto">
        <div className="max-md:max-w-full font-normal leading-[31px]">
          {description}
        </div>
      </div>
    </div>
  );

  return (
    <div className="flex w-full gap-[40px_48px] flex-wrap mt-12 max-md:max-w-full max-md:mt-10">
      {imagePosition === 'left' ? (
        <>
          <div className="flex min-w-60 gap-[40px_48px] font-bold flex-1 shrink basis-[0%] max-md:max-w-full">
            {imageCard}
          </div>
          <div className="flex min-w-60 gap-[40px_48px] font-normal leading-[31px] flex-1 shrink basis-[0%] max-md:max-w-full">
            {descriptionCard}
          </div>
        </>
      ) : (
        <>
          <div className="flex min-w-60 gap-[40px_48px] font-normal leading-[31px] flex-1 shrink basis-[0%] max-md:max-w-full">
            {descriptionCard}
          </div>
          <div className="min-w-60 font-bold leading-[1.3] flex-1 shrink basis-[0%] max-md:max-w-full">
            {imageCard}
          </div>
        </>
      )}
    </div>
  );
};

export const TeamSection: React.FC = () => {
  return (
    <section className="bg-white border flex w-full flex-col overflow-hidden items-center text-center justify-center px-[90px] py-20 border-black border-solid max-md:max-w-full max-md:px-5">
      <div className="flex w-[1200px] max-w-full gap-8 justify-center">
        <div className="flex min-w-60 w-[1200px] flex-col items-stretch justify-center max-md:max-w-full">
          <div className="flex w-full flex-col items-stretch text-2xl text-black justify-center max-md:max-w-full">
            <h2 className="text-[44px] font-semibold leading-[1.2] self-center max-md:max-w-full">
              Meet The Team
            </h2>
            <TeamMember
              name="Victor Reisenauer"
              role="KI-Berater"
              description="Victor führt das Erstgespräch, klärt Ihre individuellen Ziele und beantwortet alle offenen Fragen. Er zeigt Ihnen, wie der KI‑Kickstart optimal zu Ihrer Verwaltung passt und welche Schritte für Sie den größten Nutzen bringen."
              imagePosition="left"
            />
            <TeamMember
              name="Lukas Sontheimer"
              role="Ihr professioneller KI-Trainer"
              description="Lukas übernimmt Ihr Onboarding, richtet Zugänge ein und führt Ihr Team Schritt für Schritt durch das gesamte Programm. Er sorgt dafür, dass alle mitkommen, Blockaden abgebaut werden und die Inhalte sicher und praxisnah im Alltag ankommen."
              imagePosition="right"
            />
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
