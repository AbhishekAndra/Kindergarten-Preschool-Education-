import React from 'react';
import { Link } from 'react-router-dom';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'coral' | 'sky' | 'emerald' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  to?: string;
  href?: string;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  to,
  href,
  icon,
  iconPosition = 'left',
  className = '',
  ...props
}) => {
  const baseStyles = "inline-flex items-center justify-center font-bold tracking-tight rounded-full transition-all duration-300 transform active:scale-95 cursor-pointer shadow-sm disabled:opacity-60 disabled:cursor-not-allowed select-none";

  const variantStyles = {
    primary: "bg-amber-400 hover:bg-amber-500 text-slate-900 hover:shadow-md hover:shadow-amber-200 border-2 border-amber-400 hover:border-amber-500",
    secondary: "bg-purple-600 hover:bg-purple-700 text-white hover:shadow-md hover:shadow-purple-200 border-2 border-purple-600 hover:border-purple-700",
    coral: "bg-rose-500 hover:bg-rose-600 text-white hover:shadow-md hover:shadow-rose-200 border-2 border-rose-500 hover:border-rose-600",
    sky: "bg-sky-500 hover:bg-sky-600 text-white hover:shadow-md hover:shadow-sky-200 border-2 border-sky-500 hover:border-sky-600",
    emerald: "bg-emerald-500 hover:bg-emerald-600 text-white hover:shadow-md hover:shadow-emerald-200 border-2 border-emerald-500 hover:border-emerald-600",
    outline: "bg-white hover:bg-amber-50 text-slate-800 border-2 border-slate-200 hover:border-amber-300",
    ghost: "bg-transparent hover:bg-slate-100 text-slate-700 shadow-none border-2 border-transparent",
  };

  const sizeStyles = {
    sm: "text-sm px-4 py-2 gap-1.5",
    md: "text-base px-6 py-3 gap-2",
    lg: "text-lg px-8 py-4 gap-2.5 shadow-md",
  };

  const content = (
    <>
      {icon && iconPosition === 'left' && <span className="shrink-0">{icon}</span>}
      <span>{children}</span>
      {icon && iconPosition === 'right' && <span className="shrink-0">{icon}</span>}
    </>
  );

  const combinedClasses = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;

  if (to) {
    return (
      <Link to={to} className={combinedClasses}>
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={combinedClasses}>
        {content}
      </a>
    );
  }

  return (
    <button className={combinedClasses} {...props}>
      {content}
    </button>
  );
};
