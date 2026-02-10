import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost';
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ variant = 'primary', children, className = '', ...props }) => {
  const baseStyles = "relative px-8 py-3 cinzel font-semibold tracking-[0.2em] text-xs transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed";
  
  const variants = {
    // Elegant Solid White/Silver
    primary: "bg-white text-black border border-white hover:bg-gray-200 hover:shadow-[0_0_20px_rgba(255,255,255,0.2)]",
    
    // Transparent with Border
    secondary: "bg-transparent text-white border border-white/30 hover:border-white hover:bg-white/5",
    
    // Ghost
    ghost: "text-gray-400 hover:text-white"
  };

  return (
    <button className={`${baseStyles} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
};