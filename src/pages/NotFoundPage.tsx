import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Search, Home, Compass, Check, ArrowRight, Lightbulb, Phone, Mail, Clock, User, Users, GraduationCap, LifeBuoy } from 'lucide-react';
import { useTour } from '../context/TourContext';
import { SCHOOL_INFO } from '../data/preschoolData';

export const NotFoundPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();
  const { openTourModal } = useTour();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.toLowerCase().includes('program')) {
      navigate('/programs');
    } else if (searchQuery.toLowerCase().includes('admiss') || searchQuery.toLowerCase().includes('tuition')) {
      navigate('/admissions');
    } else if (searchQuery.toLowerCase().includes('parent') || searchQuery.toLowerCase().includes('feed')) {
      navigate('/parent-life');
    } else if (searchQuery.toLowerCase().includes('curric')) {
      navigate('/curriculum');
    } else {
      navigate('/');
    }
  };

  return (
    <div className="bg-[#fbfcfa] min-h-screen text-slate-800">
      
      {/* 1. Hero Section */}
      <section className="pt-12 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Error 404 details */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Top pill */}
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#ffedd5] text-[#9a3412] text-xs font-bold tracking-wide">
              <span>🌰</span>
              <span>Error 404 • Lost in the Garden</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-[52px] font-black text-slate-900 tracking-tight leading-[1.12] font-display">
              Oops! Looks like this sprout{' '}
              <span className="text-[#006747] underline decoration-[#006747] decoration-4 underline-offset-8">
                hasn't bloomed yet.
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-xl">
              The page you are looking for might have moved, been renamed, or is currently out playing in the sensory garden with our toddlers. Don't worry, even little explorers wander down a curious detour! Let us guide you back to familiar sunshine.
            </p>

            {/* Search Input Bar */}
            <form onSubmit={handleSearch} className="relative max-w-md">
              <Search className="w-4 h-4 text-slate-400 absolute left-4 top-3.5" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search our website or parent handbook..."
                className="w-full pl-11 pr-20 py-3 rounded-full bg-white border border-slate-300 text-xs focus:outline-none focus:border-[#006747] shadow-2xs"
              />
              <button
                type="submit"
                className="absolute right-1.5 top-1.5 px-4 py-1.5 rounded-full bg-[#006747] hover:bg-[#005238] font-bold text-xs text-white transition shadow-2xs cursor-pointer"
              >
                Find
              </button>
            </form>

            {/* Dual Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <Link
                to="/"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#006747] hover:bg-[#005238] text-white font-bold text-xs shadow-sm transition"
              >
                <Home className="w-4 h-4" />
                <span>Return to Homepage</span>
              </Link>

              <Link
                to="/programs"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#fde2cb] hover:bg-[#fad5b8] text-[#78350f] font-bold text-xs transition"
              >
                <Compass className="w-4 h-4 text-[#78350f]" />
                <span>Explore Our Programs</span>
              </Link>
            </div>

            {/* Trust Seals Bar */}
            <div className="pt-2 flex flex-wrap items-center gap-x-3 gap-y-2 text-xs font-semibold text-slate-600">
              <span className="flex items-center gap-1.5 text-slate-800 font-bold">
                <Check className="w-3.5 h-3.5 text-[#006747]" />
                NAEYC Accredited
              </span>
              <span>•</span>
              <span>State Licensed Quality Rated Center</span>
              <span>•</span>
              <span className="text-[#006747] font-bold">Safe Sprouts Promise</span>
            </div>

          </div>

          {/* Right Column: Hero Graphic Card */}
          <div className="lg:col-span-5">
            <div className="bg-white rounded-3xl p-8 border border-slate-200/90 shadow-xl max-w-md mx-auto text-center space-y-6">
              
              {/* Card top badges */}
              <div className="flex items-center justify-between text-xs">
                <span className="px-3 py-1 rounded-full bg-[#e0f2fe] text-[#0369a1] font-bold text-[11px] flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#0284c7]" />
                  Path: Discovery
                </span>
                <span className="px-3 py-1 rounded-full bg-[#ffedd5] text-[#9a3412] font-bold text-[11px]">
                  🐝 Curious Bee
                </span>
              </div>

              {/* Plant illustration in circle with magnifying glass badge */}
              <div className="w-44 h-44 rounded-full bg-[#e8f0fe] flex items-center justify-center mx-auto relative shadow-inner">
                <svg viewBox="0 0 160 160" className="w-32 h-32 select-none" fill="none" xmlns="http://www.w3.org/2000/svg">
                  {/* Pot Saucer */}
                  <rect x="52" y="112" width="56" height="8" rx="4" fill="#004731" />
                  
                  {/* Pot Body */}
                  <path d="M56 82 H104 L97 112 H63 L56 82 Z" fill="#006747" />
                  {/* Pot Rim */}
                  <rect x="53" y="78" width="54" height="7" rx="3.5" fill="#00563b" />
                  
                  {/* Central Stem & Leaf */}
                  <path d="M80 80 V50" stroke="#006747" strokeWidth="4" strokeLinecap="round" />
                  <path d="M80 50 C80 38 72 30 80 24 C88 30 80 38 80 50 Z" fill="#006747" />
                  
                  {/* Left Leaf */}
                  <path d="M80 64 C70 60 62 48 56 50 C54 62 66 66 80 66 Z" fill="#006747" />
                  
                  {/* Right Leaf */}
                  <path d="M80 58 C90 54 98 42 104 44 C106 56 94 60 80 60 Z" fill="#006747" />

                  {/* Magnifying Glass badge on bottom right */}
                  <g transform="translate(90, 88)">
                    {/* Shadow & Background Circle */}
                    <circle cx="20" cy="20" r="18" fill="white" filter="drop-shadow(0 2px 4px rgba(0,0,0,0.15))" />
                    {/* Outer Rim */}
                    <circle cx="18" cy="18" r="12" stroke="#006747" strokeWidth="2.5" fill="#f8fcfa" />
                    {/* Inner Lens Shine */}
                    <circle cx="18" cy="18" r="9.5" fill="#e8f8f2" opacity="0.7" />
                    <path d="M14 14 Q18 12 21 15" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                    {/* Handle */}
                    <line x1="26" y1="26" x2="34" y2="34" stroke="#b45309" strokeWidth="3.5" strokeLinecap="round" />
                    {/* Tiny sprout inside lens */}
                    <path d="M18 22 V17 M18 17 C16 15 14 16 15 18 C16 19 18 18 18 18 M18 17 C20 15 22 16 21 18 C20 19 18 18 18 18" stroke="#006747" strokeWidth="1.2" strokeLinecap="round" />
                  </g>
                </svg>
              </div>

              {/* Room 102 Tag & Quote */}
              <div className="space-y-2">
                <span className="inline-block px-3 py-1 rounded-md bg-[#e6f4ea] text-[#137333] font-bold text-xs border border-[#ceead6]">
                  🌱 Seedling Room 102
                </span>
                <h3 className="text-lg font-bold text-slate-900 font-display">
                  "Not all who wander are lost..."
                </h3>
                <p className="text-xs text-slate-500 max-w-xs mx-auto leading-relaxed">
                  Some are just inspecting a tiny ladybug or waiting for organic snack time!
                </p>
              </div>

              {/* Bottom Badges */}
              <div className="pt-2 flex items-center justify-center gap-3 text-xs">
                <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[#e6f4ea] text-[#137333] font-bold text-[11px]">
                  <Check className="w-3.5 h-3.5" />
                  Garden Open
                </span>
                <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[#ffedd5] text-[#9a3412] font-bold text-[11px]">
                  ☀️ Sunny Vibes
                </span>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* 2. Middle Section: Where would you like to sprout next? */}
      <section className="py-16 bg-[#f4f9f6] border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="relative text-center max-w-2xl mx-auto mb-12">
            {/* Subtle arched decorative shape matching design */}
            <div className="absolute left-1/2 -top-6 -translate-x-1/2 w-48 h-20 bg-[#e2ede6] rounded-t-full -z-0 opacity-80" />
            <h2 className="relative z-10 text-2xl sm:text-3xl font-extrabold text-slate-900 font-display">
              Where would you like to sprout next?
            </h2>
            <p className="relative z-10 mt-2 text-xs sm:text-sm text-slate-600">
              Pick a category below to quickly find enrollment dates, student schedules, or reach our friendly teaching staff.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Card 1: Admissions & Enrollment */}
            <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-2xs hover:shadow-md transition flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-2xl bg-[#e6f4ea] text-[#137333] flex items-center justify-center mb-4">
                  <User className="w-5 h-5 text-[#006747]" />
                </div>
                <h3 className="font-bold text-base text-slate-900 font-display mb-1.5">
                  Admissions & Enrollment
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed mb-6">
                  Join our loving learning nest. Explore tuition rates, age group openings, and enrollment steps.
                </p>
              </div>

              <div className="space-y-2 border-t border-slate-100 pt-4 text-xs font-bold text-[#006747]">
                <Link to="/admissions" className="flex items-center justify-between hover:underline">
                  <span>Tuition & Daily Schedule</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
                <button onClick={() => openTourModal()} className="flex items-center justify-between hover:underline w-full text-left cursor-pointer">
                  <span>Book a Campus Tour</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
                <Link to="/signup" className="flex items-center justify-between hover:underline">
                  <span>Family Registration Portal</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Card 2: Parent Life & Portal */}
            <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-2xs hover:shadow-md transition flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-2xl bg-[#ffedd5] text-[#c2410c] flex items-center justify-center mb-4">
                  <Users className="w-5 h-5 text-[#ea580c]" />
                </div>
                <h3 className="font-bold text-base text-slate-900 font-display mb-1.5">
                  Parent Life & Portal
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed mb-6">
                  Stay connected with daily photos, menu highlights, teacher notes, and attendance tracking.
                </p>
              </div>

              <div className="space-y-2 border-t border-slate-100 pt-4 text-xs font-bold text-[#006747]">
                <Link to="/login" className="flex items-center justify-between hover:underline">
                  <span>Parent Portal Login</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
                <Link to="/parent-life" className="flex items-center justify-between hover:underline">
                  <span>Daily Rhythms & Menus</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
                <Link to="/parent-life" className="flex items-center justify-between hover:underline">
                  <span>Health & Emergency Protocols</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Card 3: Learning Framework */}
            <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-2xs hover:shadow-md transition flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-2xl bg-[#e0f2fe] text-[#0284c7] flex items-center justify-center mb-4">
                  <GraduationCap className="w-5 h-5 text-[#0284c7]" />
                </div>
                <h3 className="font-bold text-base text-slate-900 font-display mb-1.5">
                  Learning Framework
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed mb-6">
                  Our Reggio Emilia-inspired, play-focused curriculum builds confident, joyful early thinkers.
                </p>
              </div>

              <div className="space-y-2 border-t border-slate-100 pt-4 text-xs font-bold text-[#006747]">
                <Link to="/curriculum" className="flex items-center justify-between hover:underline">
                  <span>Reggio Emilia Philosophy</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
                <Link to="/programs" className="flex items-center justify-between hover:underline">
                  <span>Infant & Toddler Nurture</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
                <Link to="/curriculum" className="flex items-center justify-between hover:underline">
                  <span>Forest & STEM Discovery</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Card 4: Need Assistance? */}
            <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-2xs hover:shadow-md transition flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-2xl bg-[#fee2e2] text-[#e11d48] flex items-center justify-center mb-4">
                  <LifeBuoy className="w-5 h-5 text-[#e11d48]" />
                </div>
                <h3 className="font-bold text-base text-slate-900 font-display mb-1.5">
                  Need Assistance?
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed mb-4">
                  Our friendly administrative team is right by the phone to help navigate enrollment or queries.
                </p>
              </div>

              <div className="space-y-2 border-t border-slate-100 pt-4 text-[11px] text-slate-600">
                <a href={`tel:${SCHOOL_INFO.phone}`} className="flex items-center gap-1.5 font-bold text-slate-900 hover:text-[#006747]">
                  <Phone className="w-3.5 h-3.5 text-[#006747]" />
                  <span>{SCHOOL_INFO.phone}</span>
                </a>
                <a href={`mailto:${SCHOOL_INFO.email}`} className="flex items-center gap-1.5 hover:text-[#006747]">
                  <Mail className="w-3.5 h-3.5 text-slate-400" />
                  <span>{SCHOOL_INFO.email}</span>
                </a>
                <div className="flex items-center gap-1.5 text-slate-400">
                  <Clock className="w-3.5 h-3.5" />
                  <span>{SCHOOL_INFO.hours}</span>
                </div>
              </div>
            </div>

          </div>

          {/* 3. Bottom App Banner Bar */}
          <div className="mt-8 bg-white p-4 sm:p-5 rounded-2xl border border-slate-200 shadow-2xs flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-[#006747] text-white flex items-center justify-center shrink-0">
                <Lightbulb className="w-4 h-4" />
              </div>
              <p className="text-xs text-slate-700">
                <strong>Looking for today's classroom check-in?</strong> Registered guardians can quickly open the Brightwheel or Procare partner sync from their smartphone.
              </p>
            </div>

            <Link
              to="/login"
              className="px-4 py-2 rounded-full border border-slate-300 hover:border-[#006747] text-slate-700 hover:text-[#006747] text-xs font-bold transition shrink-0 bg-white"
            >
              Open Parent App
            </Link>
          </div>

        </div>
      </section>

    </div>
  );
};
