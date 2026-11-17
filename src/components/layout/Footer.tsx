import React from 'react';
import { Link } from 'react-router-dom';
import { Check } from 'lucide-react';
import { SCHOOL_INFO } from '../../data/preschoolData';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#f8fcfa] text-slate-700 pt-16 pb-12 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-slate-200">
          
          {/* Brand & Description */}
          <div className="md:col-span-5 space-y-4">
            <Link to="/" className="inline-block">
              <span className="text-3xl font-black tracking-tight text-[#006747] font-display">
                Stackly
              </span>
            </Link>

            <p className="text-xs sm:text-sm text-slate-500 leading-relaxed max-w-sm">
              {SCHOOL_INFO.description}
            </p>

            {/* Social Icons - linking to /404 */}
            <div className="flex items-center gap-2.5 pt-2">
              <Link
                to="/404"
                className="w-9 h-9 rounded-full border border-slate-300 flex items-center justify-center text-slate-700 hover:text-[#006747] hover:border-[#006747] bg-white transition text-xs font-bold shadow-2xs cursor-pointer"
                aria-label="Facebook"
              >
                f
              </Link>
              <Link
                to="/404"
                className="w-9 h-9 rounded-full border border-slate-300 flex items-center justify-center text-slate-700 hover:text-[#006747] hover:border-[#006747] bg-white transition text-xs font-bold shadow-2xs cursor-pointer"
                aria-label="Twitter / X"
              >
                𝕏
              </Link>
              <Link
                to="/404"
                className="w-9 h-9 rounded-full border border-slate-300 flex items-center justify-center text-slate-700 hover:text-[#006747] hover:border-[#006747] bg-white transition text-[11px] font-bold shadow-2xs cursor-pointer"
                aria-label="YouTube"
              >
                ▶
              </Link>
              <Link
                to="/404"
                className="w-9 h-9 rounded-full border border-slate-300 flex items-center justify-center text-slate-700 hover:text-[#006747] hover:border-[#006747] bg-white transition text-xs font-bold shadow-2xs cursor-pointer"
                aria-label="Instagram"
              >
                📷
              </Link>
            </div>

            {/* Accreditation Badges */}
            <div className="flex flex-wrap items-center gap-2.5 pt-2">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#ebfbf3] text-[#006747] text-[11px] font-bold border border-[#b7e1cd]">
                <Check className="w-3.5 h-3.5 text-[#006747]" />
                NAEYC Accredited
              </span>
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#f0f9ff] text-[#0284c7] text-[11px] font-bold border border-[#bae6fd]">
                <Check className="w-3.5 h-3.5 text-[#0284c7]" />
                State Licensed
              </span>
            </div>
          </div>

          <div className="md:col-span-1" />

          {/* Programs & Resources */}
          <div className="md:col-span-3">
            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-4 font-display">
              Programs & Resources
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-600 font-medium">
              <li>
                <Link to="/programs" className="hover:text-[#006747] transition">Programs & Care</Link>
              </li>
              <li>
                <Link to="/admissions" className="hover:text-[#006747] transition">Admissions & Tuition</Link>
              </li>
              <li>
                <Link to="/parent-life" className="hover:text-[#006747] transition">Parent Handbook</Link>
              </li>
              <li>
                <Link to="/curriculum" className="hover:text-[#006747] transition">Daily Rhythms</Link>
              </li>
            </ul>
          </div>

          {/* Safety & Accreditation */}
          <div className="md:col-span-3">
            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-4 font-display">
              Safety & Accreditation
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-600 font-medium">
              <li>
                <Link to="/about" className="hover:text-[#006747] transition">Emergency Protocols</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-[#006747] transition">Licensing & Accreditations</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-[#006747] transition">Privacy Policy</Link>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Legal Row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            © 2024 Little Sprouts Academy. NAEYC Accredited & State Licensed Early Childhood Education Center. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <span className="hover:text-slate-800 cursor-pointer">Security Standards</span>
            <span className="hover:text-slate-800 cursor-pointer">Accessibility</span>
            <Link to="/login" className="hover:text-[#006747] font-semibold">Staff Login</Link>
          </div>
        </div>

      </div>
    </footer>
  );
};
