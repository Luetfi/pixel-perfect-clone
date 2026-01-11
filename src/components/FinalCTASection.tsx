import React from 'react';
import { CustomButton } from './ui/CustomButton';
import { Check } from 'lucide-react';

export const FinalCTASection: React.FC = () => {
  return (
    <section className="bg-[rgba(235,235,235,1)] flex w-full flex-col overflow-hidden items-center justify-center pl-[69px] pr-[68px] py-20 max-md:max-w-full max-md:px-5">
      <div className="flex max-w-full w-[1303px] items-stretch gap-[40px_80px] flex-wrap">
        <div className="flex min-w-60 flex-col items-stretch justify-center grow shrink w-[469px] max-md:max-w-full">
          <div className="max-w-full w-[585px]">
            <div className="text-[rgba(51,51,51,1)] text-xl font-normal max-md:max-w-full">
              Bereits 12+ Verwaltungen erfolgreich gestartet
            </div>
            <div className="flex w-full max-w-[585px] flex-col items-stretch mt-4 max-md:max-w-full">
              <div className="w-full max-md:max-w-full">
                <h2 className="text-black text-[42px] font-bold leading-[50px] max-md:max-w-full">
                  Jetzt Platz sichern – nur 4 Durchführungen pro Monat möglich
                </h2>
                <p className="text-[rgba(51,51,51,1)] text-xl font-normal leading-[30px] mt-4 max-md:max-w-full">
                  Wir begleiten jedes Team persönlich – deshalb ist die Anzahl der Durchführungen pro Monat begrenzt. Wenn Sie zeitnah starten wollen, sichern Sie sich jetzt einen der freien Termine.
                </p>
                <div className="w-full mt-4 max-md:max-w-full">
                  <div className="flex w-full items-center gap-4 flex-wrap max-md:max-w-full">
                    <div className="bg-[rgba(204,204,204,1)] self-stretch flex min-h-6 items-center justify-center gap-2.5 w-6 h-6 my-auto p-1 rounded-xl">
                      <Check className="w-4 h-4" />
                    </div>
                    <div className="text-[rgba(51,51,51,1)] text-xl font-normal self-stretch flex-1 shrink basis-[0%] my-auto max-md:max-w-full">
                      Persönliche Begleitung durch Berater & Trainer
                    </div>
                  </div>
                  <div className="flex w-full items-center gap-4 flex-wrap mt-2 max-md:max-w-full">
                    <div className="bg-[rgba(204,204,204,1)] self-stretch flex min-h-6 items-center justify-center gap-2.5 w-6 h-6 my-auto p-1 rounded-xl">
                      <Check className="w-4 h-4" />
                    </div>
                    <div className="text-[rgba(51,51,51,1)] text-xl font-normal leading-[30px] self-stretch flex-1 shrink basis-[0%] my-auto max-md:max-w-full">
                      Spürbare Entlastung und echte KI‑Ergebnisse in 4 Wochen
                    </div>
                  </div>
                  <div className="flex w-full items-center gap-4 flex-wrap mt-2 max-md:max-w-full">
                    <div className="bg-[rgba(204,204,204,1)] self-stretch flex min-h-6 items-center justify-center gap-2.5 w-6 h-6 my-auto p-1 rounded-xl">
                      <Check className="w-4 h-4" />
                    </div>
                    <div className="text-[rgba(51,51,51,1)] text-xl font-normal self-stretch flex-1 shrink basis-[0%] my-auto max-md:max-w-full">
                      Sicherer, praxisnaher Einstieg ohne technischen Aufwand
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex gap-4 text-xl text-white font-bold text-center uppercase mt-8">
                <CustomButton variant="primary">
                  Kostenloses Erstgespräch
                </CustomButton>
              </div>
            </div>
            <p className="text-[rgba(51,51,51,1)] text-base font-semibold mt-4 max-md:max-w-full">
              Unverbindlich. Erstgespräch dient der Bedarfsklärung – kein Risiko.
            </p>
          </div>
        </div>
        <div className="bg-white flex min-w-60 min-h-[530px] flex-col items-center text-2xl text-black text-center justify-center grow shrink w-[520px] pl-[42px] pr-[43px] py-[105px] border-black border-solid border-2 max-md:max-w-full max-md:px-5 max-md:py-[100px]">
          <div className="font-bold leading-[1.3]">
            Bild, das Druck aufbaut
          </div>
          <div className="font-normal leading-[31px] mt-2.5 max-md:max-w-full">
            zB: zwei Flughafen - Checkin Counter
            <br />
            einer mit einer langen Schlange von Menschen und überschrift "Handlungsunsicherheit"
            <br />
            <br />
            der andere mit überschrift "erstgespräch gebucht und handlungssicher" mit weniger menschen.
            <br />
            "vorzugsbehandlung"
          </div>
        </div>
      </div>
    </section>
  );
};
