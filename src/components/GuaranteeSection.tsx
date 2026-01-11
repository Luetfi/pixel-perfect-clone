import React from 'react';

export const GuaranteeSection: React.FC = () => {
  return (
    <section className="flex w-full flex-col items-stretch text-[32px] text-black font-semibold text-center leading-[1.2] justify-center py-0.5 max-md:max-w-full">
      <div className="border flex w-full flex-col overflow-hidden items-center justify-center py-12 border-black border-solid max-md:max-w-full">
        <div className="flex flex-col items-center max-md:max-w-full">
          <div className="flex flex-col items-center max-md:max-w-full">
            <p className="max-md:max-w-full">
              100% Zufriedenheitsgarantie: Erstattung, falls Sie nach der ersten Sitzung aufhören.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
