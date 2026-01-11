import React from 'react';
import { CustomButton } from './ui/CustomButton';

export const HeroSection: React.FC = () => {
  return (
    <section className="flex w-full flex-col overflow-hidden items-center justify-center pl-[69px] pr-[68px] pt-4 pb-16 max-md:max-w-full max-md:px-5">
      <div className="flex w-full max-w-[1303px] items-stretch gap-[40px_80px] flex-wrap max-md:max-w-full">
        <div className="flex min-w-60 flex-col items-stretch justify-center grow shrink w-[469px] max-md:max-w-full">
          <div className="max-w-full w-[585px]">
            <div className="text-[rgba(51,51,51,1)] text-xl font-normal max-md:max-w-full">
              Mit 12+ Verwaltungen erfolgreich durchgeführt
            </div>
            <div className="flex w-full max-w-[585px] flex-col items-stretch mt-4 max-md:max-w-full">
              <div className="w-full max-md:max-w-full">
                <h1 className="text-black text-[56px] font-bold leading-[67px] max-md:max-w-full max-md:text-[40px] max-md:leading-[54px]">
                  In 4 Wochen von Systemchaos zu klarer Struktur – mit KI, die wirklich entlastet
                </h1>
                <p className="text-[rgba(51,51,51,1)] text-xl font-normal leading-[30px] mt-4 max-md:max-w-full">
                  Wir befähigen Ihre Mitarbeitenden, KI sicher und souverän zu nutzen. Das Ergebnis: weniger Überlastung, weniger manuelle Aufgaben, mehr Stabilität im Alltag.
                </p>
              </div>
              <div className="flex gap-4 text-xl text-white font-bold text-center uppercase mt-8">
                <CustomButton variant="primary" className="min-w-60">
                  Kostenloses Erstgespräch
                </CustomButton>
              </div>
            </div>
            <p className="text-[rgba(51,51,51,1)] text-base font-semibold uppercase mt-4 max-md:max-w-full">
              Unverbindlich. Erstgespräch dient der Bedarfsklärung.
            </p>
          </div>
        </div>
        <div className="bg-white flex min-w-60 h-[530px] items-center gap-2.5 justify-center grow shrink w-[520px] border-black border-solid border-2 max-md:max-w-full">
          <div className="text-2xl font-bold text-center text-black">
            Image or video placeholder
          </div>
        </div>
      </div>
    </section>
  );
};
