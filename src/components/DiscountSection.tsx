import React from 'react';
import { CustomButton } from './ui/CustomButton';

export const DiscountSection: React.FC = () => {
  return (
    <section className="bg-white border flex w-full flex-col overflow-hidden items-center text-center justify-center px-[90px] py-20 border-black border-solid max-md:max-w-full max-md:px-5">
      <div className="flex w-[1200px] max-w-full gap-8 justify-center">
        <div className="flex min-w-60 w-[1200px] flex-col items-stretch justify-center max-md:max-w-full">
          <div className="flex w-full flex-col items-stretch text-black justify-center max-md:max-w-full">
            <h2 className="text-[44px] font-semibold leading-[1.2] self-center max-md:max-w-full">
              Rabatt für IVD Mitglieder
            </h2>
            <div className="flex w-full gap-[40px_48px] text-2xl leading-[1.3] mt-12 max-md:max-w-full max-md:mt-10">
              <div className="flex min-w-60 w-full gap-[40px_48px] flex-1 shrink basis-[0%] max-md:max-w-full">
                <div className="bg-white flex min-w-60 w-full items-center gap-2.5 justify-center flex-1 shrink basis-[0%] px-[157px] py-[140px] border-black border-solid border-2 max-md:max-w-full max-md:px-5 max-md:py-[100px]">
                  <div className="self-stretch flex min-w-60 w-[322px] flex-col justify-center my-auto">
                    <div className="font-bold">
                      Headline
                    </div>
                    <div className="font-normal mt-2.5">
                      Body text
                    </div>
                  </div>
                </div>
              </div>
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
