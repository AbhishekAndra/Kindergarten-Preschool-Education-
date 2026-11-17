import React, { useState } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Lock, Calendar } from 'lucide-react';
import { useTour } from '../../context/TourContext';
import { SCHOOL_INFO } from '../../data/preschoolData';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { openTourModal } = useTour();
  const location = useLocation();

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'Programs', path: '/programs' },
    { label: 'Curriculum', path: '/curriculum' },
    { label: 'Admissions', path: '/admissions' },
    { label: 'Parent Life', path: '/parent-life' },
    { label: 'About', path: '/about' },
  ];

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo: Stackly */}
          <Link to="/" className="flex items-center gap-2 group">
            <span className="text-2xl sm:text-3xl font-black tracking-tight text-[#006747] font-display flex items-center gap-1">
              Stackly
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className={`text-sm font-semibold transition-colors duration-150 ${
                    isActive
                      ? 'text-[#006747] font-bold border-b-2 border-[#006747] pb-1'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {link.label}
                </NavLink>
              );
            })}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={`tel:${SCHOOL_INFO.phone}`}
              className="p-2.5 rounded-full hover:bg-slate-100 text-slate-700 transition"
              title={`Call ${SCHOOL_INFO.phone}`}
            >
              <Phone className="w-4 h-4 text-slate-700" />
            </a>

            <Link
              to={typeof window !== 'undefined' && localStorage.getItem('stackly_user_email') ? "/dashboard" : "/login"}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-bold text-slate-700 hover:text-[#006747] bg-white border border-slate-300 hover:border-[#006747] transition shadow-2xs"
            >
              <Lock className="w-3.5 h-3.5 text-slate-500" />
              <span>
                {typeof window !== 'undefined' && localStorage.getItem('stackly_user_email')
                  ? 'Portal Dashboard'
                  : 'Parent Portal Login'}
              </span>
            </Link>

            <button
              onClick={() => openTourModal()}
              className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full text-xs font-bold bg-[#006747] hover:bg-[#005238] text-white shadow-sm transition-all transform active:scale-95 cursor-pointer"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Book a Tour</span>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={() => openTourModal()}
              className="sm:hidden px-3 py-1.5 rounded-full bg-[#006747] text-white text-xs font-bold"
            >
              Tour
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-slate-700 hover:bg-slate-100"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 shadow-xl animate-fadeIn">
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`px-4 py-3 rounded-xl font-bold text-sm ${
                  location.pathname === link.path
                    ? 'bg-emerald-50 text-[#006747]'
                    : 'text-slate-700 hover:bg-slate-50'
                }`}
              >
                {link.label}
              </NavLink>
            ))}
          </div>

          <div className="mt-4 pt-4 border-t border-slate-100 space-y-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                openTourModal();
              }}
              className="w-full py-3 rounded-full bg-[#006747] text-white text-xs font-bold"
            >
              Book a Tour
            </button>
            <Link
              to={typeof window !== 'undefined' && localStorage.getItem('stackly_user_email') ? "/dashboard" : "/login"}
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-2.5 rounded-full border border-slate-300 text-center font-bold text-xs text-slate-700 block"
            >
              {typeof window !== 'undefined' && localStorage.getItem('stackly_user_email')
                ? 'Portal Dashboard'
                : 'Parent Portal Login'}
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};
