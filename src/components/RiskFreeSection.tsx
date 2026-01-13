import React from 'react';

export const RiskFreeSection: React.FC = () => {
  return (
    <section className="flex w-full flex-col items-stretch text-[32px] text-black font-semibold text-center leading-[38px] justify-center py-0.5 max-md:max-w-full">
      <div className="border flex w-full flex-col overflow-hidden items-center justify-center py-12 border-black border-solid max-md:max-w-full">
        <div className="flex flex-col items-center max-md:max-w-full">
          <div className="flex flex-col items-center max-md:max-w-full max-w-[800px] px-4">
            <p className="font-semibold">Null-Risiko-Starthilfe:</p>
            <p className="font-normal text-xl leading-relaxed mt-2">
              Buchen Sie Ihr unverbindliches Erstgespräch.<br />
              Erst im Anschluss entscheiden wir ob und wann wir mit der Durchführung beginnen.<br />
              Keine Verpflichtung, keine versteckten Kosten, volle Transparenz.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
