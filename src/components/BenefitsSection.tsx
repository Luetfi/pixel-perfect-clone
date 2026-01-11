import React from 'react';

interface BenefitCardProps {
  title: string;
  subtitle: string;
  description: string;
  imagePosition: 'left' | 'right';
}

const BenefitCard: React.FC<BenefitCardProps> = ({ title, subtitle, description, imagePosition }) => {
  const content = (
    <div className="self-stretch min-w-60 w-[534px] my-auto max-md:max-w-full">
      <div className="w-full max-md:max-w-full">
        <div className="w-full font-semibold max-md:max-w-full">
          <div className="text-[rgba(51,51,51,1)] text-base uppercase max-md:max-w-full">
            {title}
          </div>
          <h3 className="text-black text-[40px] leading-[48px] mt-2 max-md:max-w-full">
            {subtitle}
          </h3>
        </div>
        <p className="text-[#363328] text-base font-normal leading-6 mt-4 max-md:max-w-full">
          {description}
        </p>
      </div>
    </div>
  );

  const image = (
    <div className="bg-white border self-stretch flex min-w-60 min-h-[534px] flex-col overflow-hidden items-stretch text-2xl text-black font-normal text-center leading-[31px] justify-center w-[574px] my-auto px-[90px] py-[221px] border-black border-solid max-md:max-w-full max-md:px-5 max-md:py-[100px]">
      <div>
        <span className="font-bold">Image or video </span>that complements and reinforce core value proposition
      </div>
    </div>
  );

  return (
    <div className="bg-white flex flex-col overflow-hidden items-center justify-center px-[120px] py-10 max-md:max-w-full max-md:px-5">
      <div className="flex items-center gap-[40px_92px] flex-wrap max-md:max-w-full">
        {imagePosition === 'left' ? (
          <>
            {image}
            {content}
          </>
        ) : (
          <>
            {content}
            {image}
          </>
        )}
      </div>
    </div>
  );
};

export const BenefitsSection: React.FC = () => {
  return (
    <section>
      <BenefitCard
        title="Sofort spürbare Entlastung im Team."
        subtitle="So gewinnen Sie jede Woche mehrere Stunden"
        description="Kunden berichten im Durchschnitt von rund 4 Stunden Entlastung pro Woche pro Mitarbeitendem. KI übernimmt Schreiben, Recherchieren, Auswerten und viele der kleinen Aufgaben, die heute wertvolle Zeit blockieren."
        imagePosition="left"
      />
      <BenefitCard
        title="Souverän mit KI arbeiten – ohne Überforderung."
        subtitle="So befähigen Sie ihr Team KI sicher, bewusst und produktiv zu nutzen"
        description={"Wir bauen Unsicherheiten, Blockaden und Berührungsängste systematisch ab – egal ob technikaffin oder „Urgestein\". Durch praxisnahe Übungen, geführte Aufgaben und echte Beispiele entsteht ein souveräner und nachhaltiger Umgang mit KI. Das Ergebnis: weniger Stress, weniger manuelle Arbeit und ein Team, das gemeinsam vorankommt – statt sich abgehängt zu fühlen."}
        imagePosition="right"
      />
      <BenefitCard
        title="DREAM OUTCOME SUMMARY"
        subtitle="So legen Sie in 4 Wochen das Fundament für eine moderne, KI‑gestützte Organisation"
        description="Wir etablieren mit Ihnen ein funktionierendes KI‑Grundgerüst: ein UnternehmensGPT für KI-Assistenten, ein sicherer Umgang im Team und eine tragfähige KI-Infrastruktur für alles, was danach kommt. Der perfekte Startpunkt, um Ihre Verwaltung nachhaltig zu modernisieren."
        imagePosition="left"
      />
    </section>
  );
};
