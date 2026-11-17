import React from 'react';

export const FloatingShapes: React.FC = () => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden select-none z-0" aria-hidden="true">
      {/* Sun / Star Doodle Top Right */}
      <div className="absolute top-12 right-12 text-amber-300 opacity-60 animate-float">
        <svg width="64" height="64" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2l2.4 5.3 5.6.8-4.2 3.9 1 5.6-4.8-2.7-4.8 2.7 1-5.6-4.2-3.9 5.6-.8z" />
        </svg>
      </div>

      {/* Cloud Bubble Top Left */}
      <div className="absolute top-28 left-8 text-sky-200 opacity-50 animate-float-reverse">
        <svg width="84" height="48" viewBox="0 0 24 24" fill="currentColor">
          <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z" />
        </svg>
      </div>

      {/* Playful Circle Doodles Bottom Left */}
      <div className="absolute bottom-24 left-16 w-16 h-16 rounded-full bg-rose-200/40 border-4 border-dashed border-rose-300 animate-wiggle" />

      {/* Playful Polygon Doodle Bottom Right */}
      <div className="absolute bottom-32 right-20 w-12 h-12 rounded-2xl bg-emerald-200/40 rotate-12 border-2 border-emerald-300 animate-float" />

      {/* Tiny Sparkles */}
      <div className="absolute top-1/2 left-6 text-purple-300 opacity-70 animate-pulse-gentle">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0L14 9L23 12L14 15L12 24L10 15L1 12L10 9Z" />
        </svg>
      </div>
      <div className="absolute top-1/3 right-1/4 text-amber-400 opacity-60 animate-bounce">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0L14 9L23 12L14 15L12 24L10 15L1 12L10 9Z" />
        </svg>
      </div>
    </div>
  );
};
