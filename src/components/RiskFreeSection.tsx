import React from 'react';

export const RiskFreeSection: React.FC = () => {
  return (
    <section className="flex w-full flex-col items-stretch text-[32px] text-black font-semibold text-center leading-[38px] justify-center py-0.5 max-md:max-w-full">
      <div className="border flex w-full flex-col overflow-hidden items-center justify-center py-12 border-black border-solid max-md:max-w-full">
        <div className="flex flex-col items-center max-md:max-w-full">
          <div className="flex flex-col items-center max-md:max-w-full">
            <p className="max-md:max-w-full">
              <span className="font-semibold">Null-Risiko-Starthilfe:</span>
              <span className="font-normal"> Sie entscheiden erst nach dem Erstgespräch final, ob Sie das Programm beginnen. Keine Verpflichtung, keine versteckten Kosten, volle Transparenz.</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
