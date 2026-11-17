import React, { useState } from 'react';
import { Sparkles, Phone, X, ArrowRight } from 'lucide-react';
import { useTour } from '../../context/TourContext';
import { SCHOOL_INFO } from '../../data/preschoolData';

export const TopBanner: React.FC = () => {
  const [visible, setVisible] = useState(true);
  const { openTourModal } = useTour();

  if (!visible) return null;

  return (
    <div className="bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-300 text-slate-900 text-xs sm:text-sm font-medium py-2 px-4 transition-all">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        <div className="flex items-center gap-2 overflow-hidden text-ellipsis whitespace-nowrap">
          <span className="inline-flex items-center gap-1 bg-white/80 text-amber-900 text-[11px] font-bold px-2 py-0.5 rounded-full shrink-0">
            <Sparkles className="w-3 h-3 text-amber-600" />
            2026 Admissions
          </span>
          <span className="hidden sm:inline font-semibold">
            Priority Enrollment is Now Open! Limited spots available for Toddlers & Pre-K.
          </span>
          <span className="sm:hidden font-semibold">
            Fall 2026 Enrollment Now Open!
          </span>
          <button
            onClick={() => openTourModal()}
            className="hidden md:inline-flex items-center gap-1 font-bold underline hover:text-amber-950 transition ml-1"
          >
            Schedule a Visit <ArrowRight className="w-3 h-3" />
          </button>
        </div>

        <div className="flex items-center gap-3 shrink-0">
          <a
            href={`tel:${SCHOOL_INFO.phone}`}
            className="hidden lg:flex items-center gap-1.5 font-bold hover:text-amber-950 transition"
          >
            <Phone className="w-3.5 h-3.5 text-amber-800" />
            <span>{SCHOOL_INFO.phone}</span>
          </a>
          <button
            onClick={() => setVisible(false)}
            className="p-1 hover:bg-black/10 rounded-full transition text-slate-800"
            aria-label="Dismiss banner"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
