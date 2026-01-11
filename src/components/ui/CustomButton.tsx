import React from 'react';
import { cn } from '@/lib/utils';

interface CustomButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export const CustomButton: React.FC<CustomButtonProps> = ({
  variant = 'primary',
  size = 'md',
  className,
  children,
  ...props
}) => {
  const baseClasses = 'font-bold text-center transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2';
  
  const variantClasses = {
    primary: 'bg-[#8A31FF] text-white hover:bg-[#7A2BE5] focus:ring-[#8A31FF]',
    secondary: 'bg-white text-black border-2 border-black hover:bg-gray-50 focus:ring-black',
    outline: 'bg-transparent text-black border-2 border-black hover:bg-black hover:text-white focus:ring-black'
  };

  const sizeClasses = {
    sm: 'px-6 py-2 text-sm rounded-md',
    md: 'px-14 py-6 text-xl rounded-lg',
    lg: 'px-16 py-8 text-2xl rounded-lg'
  };

  return (
    <button
      className={cn(
        baseClasses,
        variantClasses[variant],
        sizeClasses[size],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};
