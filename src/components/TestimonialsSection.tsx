import React from 'react';
import { CustomButton } from './ui/CustomButton';

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="bg-[rgba(235,235,235,1)] border flex w-full flex-col overflow-hidden items-center justify-center px-[90px] py-20 border-black border-solid max-md:max-w-full max-md:px-5">
      <div className="flex w-[1200px] max-w-full gap-8 justify-center">
        <div className="flex min-w-60 w-[1200px] flex-col items-stretch justify-center max-md:max-w-full">
          <div className="flex w-full flex-col items-stretch justify-center max-md:max-w-full">
            <h2 className="text-black text-[44px] font-semibold leading-[53px] text-center self-center w-[748px] max-md:max-w-full">
              Moderne Hausverwaltungen empfehlen uns begeistert weiter
            </h2>
            <div className="flex w-full gap-[40px_48px] flex-wrap mt-12 max-md:max-w-full max-md:mt-10">
              <div className="bg-white flex min-w-60 min-h-[311px] items-center gap-2.5 justify-center flex-1 shrink basis-[0%] pl-3 pr-[11px] py-[55px] border-black border-solid border-2">
                <div className="text-xl font-bold text-center text-black">Testimonial 1</div>
              </div>
              <div className="bg-white flex min-w-60 min-h-[311px] items-center gap-2.5 justify-center flex-1 shrink basis-[0%] pl-[11px] pr-2.5 py-14 border-black border-solid border-2">
                <div className="text-xl font-bold text-center text-black">Testimonial 2</div>
              </div>
              <div className="bg-white flex min-w-60 min-h-[311px] items-center gap-2.5 justify-center flex-1 shrink basis-[0%] px-[11px] py-[57px] border-black border-solid border-2">
                <div className="text-xl font-bold text-center text-black">Testimonial 3</div>
              </div>
            </div>
          </div>
          <div className="self-center flex gap-4 text-xl text-white font-bold text-center mt-12 max-md:mt-10">
            <CustomButton variant="primary">
              Kostenloses Erstgespräch
            </CustomButton>
          </div>
        </div>
      </div>
    </section>
  );
};
