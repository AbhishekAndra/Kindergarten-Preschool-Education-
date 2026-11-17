import React from 'react';
import { Badge } from './Badge';

interface SectionHeaderProps {
  badgeText?: string;
  badgeVariant?: 'amber' | 'rose' | 'emerald' | 'sky' | 'purple' | 'orange';
  badgeIcon?: React.ReactNode;
  title: string;
  highlightedWord?: string;
  highlightColor?: 'amber' | 'rose' | 'emerald' | 'sky' | 'purple';
  subtitle?: string;
  align?: 'center' | 'left';
  className?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  badgeText,
  badgeVariant = 'amber',
  badgeIcon,
  title,
  highlightedWord,
  highlightColor = 'amber',
  subtitle,
  align = 'center',
  className = '',
}) => {
  const highlightStyles = {
    amber: 'text-amber-500 underline decoration-wavy decoration-amber-300 decoration-2 underline-offset-4',
    rose: 'text-rose-500 underline decoration-wavy decoration-rose-300 decoration-2 underline-offset-4',
    emerald: 'text-emerald-600 underline decoration-wavy decoration-emerald-300 decoration-2 underline-offset-4',
    sky: 'text-sky-600 underline decoration-wavy decoration-sky-300 decoration-2 underline-offset-4',
    purple: 'text-purple-600 underline decoration-wavy decoration-purple-300 decoration-2 underline-offset-4',
  };

  const renderTitle = () => {
    if (!highlightedWord) return title;
    const parts = title.split(highlightedWord);
    if (parts.length < 2) return title;

    return (
      <>
        {parts[0]}
        <span className={highlightStyles[highlightColor]}>{highlightedWord}</span>
        {parts[1]}
      </>
    );
  };

  return (
    <div className={`max-w-3xl mb-12 ${align === 'center' ? 'mx-auto text-center' : 'text-left'} ${className}`}>
      {badgeText && (
        <div className="mb-4">
          <Badge variant={badgeVariant} icon={badgeIcon} size="md">
            {badgeText}
          </Badge>
        </div>
      )}
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
        {renderTitle()}
      </h2>
      {subtitle && (
        <p className="mt-4 text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
};
