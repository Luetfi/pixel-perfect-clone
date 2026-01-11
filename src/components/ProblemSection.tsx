import React from 'react';
import { CustomButton } from './ui/CustomButton';

export const ProblemSection: React.FC = () => {
  return (
    <section className="bg-white border flex w-full flex-col overflow-hidden items-center text-center justify-center px-[90px] py-20 border-black border-solid max-md:max-w-full max-md:px-5">
      <div className="flex w-[836px] max-w-full gap-8 justify-center">
        <div className="flex min-w-60 w-[836px] flex-col items-center max-md:max-w-full">
          <div className="flex w-full flex-col items-stretch justify-center">
            <h2 className="text-black text-[44px] font-semibold leading-[53px] max-md:max-w-full">
              Fühlen Sie sich gefangen im reaktiven Tagesgeschäft, ohne klare Struktur und ohne Zeit für das Wesentliche?
            </h2>
            <p className="text-[rgba(51,51,51,1)] text-lg font-normal leading-[27px] self-center mt-4 max-md:max-w-full">
              Jeden Tag kämpfen Sie gegen dieselben Engpässe: übervolle Postfächer, fragmentierte Systeme, ständige Unterbrechungen und ein Team, das kaum noch hinterherkommt.
              <br />
              <br />
              Wir zeigen Ihnen, wie Sie mit einer modernen, KI‑augmentierten Arbeitsweise Ordnung schaffen, Routinen automatisieren und Ihrem Team spürbar mehr Stabilität und Zeit zurückgeben – ohne komplizierte Umstellungen.
            </p>
          </div>
          <div className="flex gap-4 text-xl text-white font-bold uppercase mt-8">
            <CustomButton variant="primary">
              Kostenloses Erstgespräch
            </CustomButton>
          </div>
        </div>
      </div>
    </section>
  );
};
