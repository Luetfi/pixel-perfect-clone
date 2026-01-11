import React from 'react';
import { CustomButton } from './ui/CustomButton';

export const Navigation: React.FC = () => {
  return (
    <header className="bg-white">
      <nav className="bg-white flex w-full flex-col overflow-hidden items-center font-bold justify-center px-[42px] py-4 max-md:max-w-full max-md:px-5">
        <div className="flex w-[1303px] max-w-full items-center gap-[40px_100px] justify-between flex-wrap">
          <div className="self-stretch flex items-center gap-6 text-base text-black whitespace-nowrap my-auto">
            <div className="self-stretch flex items-center gap-6 my-auto">
              <div className="rounded bg-white border self-stretch flex gap-2.5 overflow-hidden my-auto px-10 py-3 border-black border-solid max-md:px-5">
                <div>Logo</div>
              </div>
            </div>
          </div>
          <div className="self-stretch flex min-w-60 items-center gap-6 my-auto max-md:max-w-full">
            <div className="self-stretch flex min-w-60 items-center gap-4 my-auto rounded-[80px] max-md:max-w-full">
              <div className="self-stretch flex min-w-60 items-center gap-2 text-[23px] text-[#15242F] underline leading-none my-auto">
                <div className="self-stretch flex flex-col items-stretch justify-center my-auto">
                  <a 
                    href="tel:+4915122878503"
                    className="text-[#15242F] underline decoration-solid decoration-auto underline-offset-auto hover:text-[#8A31FF] transition-colors"
                  >
                    +49 1512 2878503
                  </a>
                </div>
              </div>
              <CustomButton variant="secondary" size="sm" className="w-48 text-base leading-6">
                Kostenloses Erstgespräch
              </CustomButton>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};
