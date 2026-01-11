import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white border flex w-full flex-col overflow-hidden items-center text-[44px] text-black font-semibold whitespace-nowrap text-center leading-[1.2] justify-center px-[90px] py-20 border-black border-solid max-md:max-w-full max-md:px-5">
      <div className="flex w-[1200px] max-w-full gap-8 justify-center">
        <div className="flex min-w-60 w-[1200px] flex-col items-stretch justify-center">
          <div className="flex w-full flex-col items-center justify-center max-md:max-w-full">
            <div className="max-md:max-w-full">
              Footer
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
