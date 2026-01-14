import React from 'react';
import { cn } from '@/lib/utils';

interface CustomButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
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
  const baseClasses = `
    inline-flex items-center justify-center
    font-semibold text-center 
    transition-all duration-300 ease-out
    focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2
    disabled:opacity-50 disabled:pointer-events-none
    active:scale-[0.98]
  `;
  
  const variantClasses = {
    primary: `
      bg-brand-cyan text-primary 
      hover:bg-brand-cyan/90 hover:shadow-lg hover:shadow-brand-cyan/25
      hover:-translate-y-0.5
    `,
    secondary: `
      bg-primary text-primary-foreground 
      hover:bg-primary/90 hover:shadow-lg
      hover:-translate-y-0.5
    `,
    outline: `
      bg-transparent text-foreground 
      border-2 border-border
      hover:bg-muted hover:border-foreground/20
    `,
    ghost: `
      bg-transparent text-foreground
      hover:bg-muted
    `
  };

  const sizeClasses = {
    sm: 'px-5 py-2.5 text-sm rounded-lg gap-2',
    md: 'px-8 py-4 text-base rounded-xl gap-2.5',
    lg: 'px-10 py-5 text-lg rounded-xl gap-3'
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
