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
  const baseClasses = 'font-bold text-center transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2';
  
  const variantClasses = {
    primary: 'bg-brand-cyan text-brand-navy hover:bg-brand-cyan/90 focus:ring-brand-cyan shadow-lg hover:shadow-xl',
    secondary: 'bg-brand-navy text-white hover:bg-brand-dark-blue focus:ring-brand-navy',
    outline: 'bg-transparent text-brand-navy border-2 border-brand-navy hover:bg-brand-navy hover:text-white focus:ring-brand-navy'
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
