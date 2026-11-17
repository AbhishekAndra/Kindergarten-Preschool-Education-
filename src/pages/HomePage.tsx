import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Compass, Star, Check, ArrowRight, ChevronDown, ChevronUp } from 'lucide-react';
import { useTour } from '../context/TourContext';
import { PROGRAMS, FAQS, SCHOOL_INFO } from '../data/preschoolData';

export const HomePage: React.FC = () => {
  const { openTourModal } = useTour();
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  // Tour Booking Form State on Home Page
  const [parentName, setParentName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [childAge, setChildAge] = useState('Toddler (18m - 3y)');
  const [tourDate, setTourDate] = useState('2026-05-15');
  const [tourBooked, setTourBooked] = useState(false);

  const handleHomeTourSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setTourBooked(true);
  };

  return (
    <div className="bg-[#fbfcfa] min-h-screen text-slate-800">
      
      {/* 1. Hero Section */}
      <section className="pt-10 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Headlines & CTA */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Top 3 Pills */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#e6f4ea] text-[#137333] text-xs font-bold border border-[#ceead6]">
                <span className="w-2 h-2 rounded-full bg-[#137333]" />
                Fall 2026 Enrolling
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#ffedd5] text-[#9a3412] text-xs font-bold border border-[#fed7aa]">
                Ages 6w – 6y
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#e0f2fe] text-[#0369a1] text-xs font-bold border border-[#bae6fd]">
                5-Star Quality Rated
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.12] font-display">
              Where Little Curiosity Grows Into{' '}
              <span className="text-[#006747]">
                Confident Learners
              </span>
            </h1>

            {/* Subheading */}
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl font-normal">
              At Little Sprouts, we blend Reggio-inspired exploration with evidence-backed early childhood care. A sunlit sanctuary where every child is celebrated, nurtured, and empowered.
            </p>

            {/* Dual CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-1">
              <button
                onClick={() => openTourModal()}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#006747] hover:bg-[#005238] text-white font-bold text-xs shadow-sm transition-all transform active:scale-95 cursor-pointer"
              >
                <Calendar className="w-4 h-4 text-emerald-200" />
                <span>Schedule a Campus Tour</span>
              </button>

              <Link
                to="/programs"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#fde2cb] hover:bg-[#fad5b8] text-slate-900 font-bold text-xs transition-all"
              >
                <Compass className="w-4 h-4 text-slate-700" />
                <span>Explore Programs</span>
              </Link>
            </div>

            {/* Rating / Social Proof */}
            <div className="pt-2 flex items-center gap-3">
              <div className="flex -space-x-2">
                <img className="w-8 h-8 rounded-full border-2 border-white object-cover" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=100&q=80" alt="parent" />
                <img className="w-8 h-8 rounded-full border-2 border-white object-cover" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80" alt="parent" />
                <img className="w-8 h-8 rounded-full border-2 border-white object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80" alt="parent" />
              </div>
              <div className="text-xs">
                <div className="flex items-center gap-1 font-bold text-slate-900">
                  <span>4.9</span>
                  <div className="flex text-amber-500">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                    ))}
                  </div>
                  <span className="text-slate-500 font-normal">(120+ Verified Parent Reviews)</span>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Hero Collage */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Primary Image */}
              <div className="rounded-3xl overflow-hidden border-4 border-white shadow-xl aspect-4/3 bg-slate-100">
                <img
                  src="https://images.unsplash.com/photo-1587654780291-39c9404d746b?auto=format&fit=crop&w=900&q=80"
                  alt="Educator reading with smiling children"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Secondary Sub-image and Ratio card */}
              <div className="grid grid-cols-2 gap-3 mt-3">
                <div className="rounded-2xl overflow-hidden border-2 border-white shadow-md aspect-4/3">
                  <img
                    src="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=500&q=80"
                    alt="Child playing with blocks"
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="bg-white rounded-2xl p-4 border border-slate-200 shadow-md flex flex-col justify-center">
                  <span className="text-2xl font-black font-display text-[#006747]">1:4 Ratio</span>
                  <span className="text-xs text-slate-600 font-medium mt-0.5">
                    Infant & Toddler Low Ratio Care
                  </span>
                  <span className="text-[10px] text-emerald-700 font-bold mt-1">
                    ✓ High Individual Attention
                  </span>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* 4 Quick Badges Bar Below Hero */}
        <div className="mt-12 pt-8 border-t border-slate-200 grid grid-cols-2 sm:grid-cols-4 gap-4">
          {[
            { label: "100% Organic Meals & Snacks", icon: "🥗" },
            { label: "Full-Day & Part-Time Schedules", icon: "⏰" },
            { label: "NAEYC Accredited Curriculum", icon: "🏆" },
            { label: "Real-Time Parent App Updates", icon: "📱" },
          ].map((item, idx) => (
            <div key={idx} className="flex items-center gap-2.5 bg-white p-3.5 rounded-2xl border border-slate-200 shadow-2xs">
              <span className="text-lg">{item.icon}</span>
              <span className="text-xs font-bold text-slate-800">{item.label}</span>
            </div>
          ))}
        </div>

      </section>

      {/* 2. Age-Appropriate Programs Section */}
      <section className="py-16 bg-[#f4f9f6] border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="inline-block px-3 py-1 rounded-full bg-[#e6f4ea] text-[#137333] text-xs font-bold uppercase tracking-wider mb-2">
              Our Classrooms
            </span>
            <h2 className="text-3xl font-extrabold text-slate-900 font-display">
              Age-Appropriate Programs
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-slate-600">
              Thoughtfully designed spaces and developmental frameworks for every stage of your child's earliest years.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {PROGRAMS.slice(0, 3).map((prog) => (
              <div
                key={prog.id}
                className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-2xs hover:shadow-xl transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="relative aspect-16/10 overflow-hidden bg-slate-100">
                    <img
                      src={prog.image}
                      alt={prog.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-3 left-3 bg-white/95 px-3 py-1 rounded-full text-xs font-bold text-slate-900 shadow-xs">
                      {prog.ageRange}
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold text-slate-900 font-display mb-2">
                      {prog.name}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed mb-4">
                      {prog.shortDescription}
                    </p>

                    <div className="space-y-2 border-t border-slate-100 pt-3">
                      {prog.features.slice(0, 3).map((feat, i) => (
                        <div key={i} className="flex items-center gap-2 text-xs text-slate-700">
                          <Check className="w-3.5 h-3.5 text-[#006747] shrink-0" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <Link
                    to="/programs"
                    className="w-full py-2.5 rounded-full border border-slate-300 hover:border-[#006747] hover:bg-emerald-50 text-slate-800 hover:text-[#006747] text-xs font-bold transition flex items-center justify-center gap-1.5"
                  >
                    <span>Explore Program</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 3. Cultivating Joy, Security & Lifelong Learning */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-[#006747]">Why Little Sprouts</span>
            <h2 className="text-3xl font-extrabold text-slate-900 font-display mt-1">
              Cultivating Joy, Security & Lifelong Learning
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-slate-600">
              Every detail of our campus is designed around early neurological development, emotional safety, and natural curiosity.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Low Student-to-Teacher Ratio",
                desc: "We strictly preserve 1:3 infant and 1:4 toddler ratios, ensuring high emotional responsiveness and deep care.",
                icon: "👥",
                color: "bg-emerald-50 text-emerald-800 border-emerald-200"
              },
              {
                title: "Organic Chef-Prepared Meals",
                desc: "Chef Maria prepares 100% USDA organic breakfasts, hot lunches, and snacks from scratch. Always nut-free.",
                icon: "🥗",
                color: "bg-amber-50 text-amber-800 border-amber-200"
              },
              {
                title: "Daily Nature & Outdoor Play",
                desc: "90+ minutes outside daily in our fenced meadow yard, edible garden beds, and bike tracks.",
                icon: "🌿",
                color: "bg-sky-50 text-sky-800 border-sky-200"
              },
              {
                title: "Safe & Secure Campus",
                desc: "Biometric access gates, hospital-grade HEPA 13 filtration, and full authorized guardian pick-up logs.",
                icon: "🛡️",
                color: "bg-rose-50 text-rose-800 border-rose-200"
              }
            ].map((card, idx) => (
              <div key={idx} className="bg-[#fbfcfa] p-6 rounded-3xl border border-slate-200 hover:border-[#006747] transition">
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center text-xl border mb-4 ${card.color}`}>
                  {card.icon}
                </div>
                <h3 className="font-bold text-base text-slate-900 font-display mb-2">
                  {card.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {card.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 4. Classroom & Play Yard Photo Showcase */}
      <section className="py-16 bg-[#f4f9f6] border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-display">
              A Look Inside Our Classrooms & Play Yards
            </h2>
            <p className="mt-1 text-xs text-slate-500">
              Natural daylight, warm timber loose parts, and sensory living gardens.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { title: "Art & Water Atelier", img: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=600&q=80" },
              { title: "Outdoor Nature Trail", img: "https://images.unsplash.com/photo-1472162072942-cd5147eb3902?auto=format&fit=crop&w=600&q=80" },
              { title: "STEAM Tinkering Wall", img: "https://images.unsplash.com/photo-1596496050827-8299e0220de1?auto=format&fit=crop&w=600&q=80" },
              { title: "Sunlit Gathering Room", img: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=600&q=80" },
            ].map((item, idx) => (
              <div key={idx} className="group relative rounded-2xl overflow-hidden aspect-4/3 border border-slate-200 shadow-2xs">
                <img src={item.img} alt={item.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <span className="absolute bottom-3 left-3 text-white font-bold text-xs">{item.title}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Parent Testimonials ("Heard in the Community") */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-[#006747]">Parent Community</span>
            <h2 className="text-3xl font-extrabold text-slate-900 font-display mt-1">
              Heard in the Community
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Samantha & Brian Collins",
                child: "Parents of Leo (Pre-K)",
                quote: "Finding Little Sprouts was a true blessing. Leo was so shy at first, but within weeks he was running into class excited to build waterwheels and inspect ladybugs. The daily photo updates give us so much peace of mind.",
                avatar: "https://images.unsplash.com/photo-1548142813-c348350df52b?auto=format&fit=crop&w=150&q=80"
              },
              {
                name: "Dr. Jonathan Reyes",
                child: "Father of Maya (Toddler)",
                quote: "As a physician, safety, nutrition, and hygiene were my top criteria. Little Sprouts exceeds every benchmark: HEPA filtration, 100% organic meals, and the most loving, certified educators you could ever ask for.",
                avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80"
              },
              {
                name: "Priya & Rohan Mehta",
                child: "Parents of Arjun (Kindergarten)",
                quote: "Arjun transitioned to elementary school this fall and his teacher noted how remarkably ahead he was in reading, math, and empathy. We credit this entire foundation to Little Sprouts Academy.",
                avatar: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?auto=format&fit=crop&w=150&q=80"
              }
            ].map((test, idx) => (
              <div key={idx} className="bg-[#fbfcfa] p-6 rounded-3xl border border-slate-200 shadow-2xs flex flex-col justify-between">
                <div>
                  <div className="flex text-amber-500 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed italic mb-6">
                    "{test.quote}"
                  </p>
                </div>

                <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
                  <img src={test.avatar} alt={test.name} className="w-10 h-10 rounded-full object-cover border" />
                  <div>
                    <h4 className="font-bold text-xs text-slate-900">{test.name}</h4>
                    <p className="text-[11px] text-slate-500">{test.child}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 6. Frequently Asked Questions */}
      <section className="py-16 bg-[#f4f9f6] border-y border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-display">
              Frequently Asked Questions
            </h2>
            <p className="mt-1 text-xs text-slate-500">
              Clear answers to parents' most common queries regarding enrollment, nutrition, and safety.
            </p>
          </div>

          <div className="space-y-3">
            {FAQS.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div key={idx} className="bg-white rounded-2xl border border-slate-200 overflow-hidden">
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full p-4 sm:p-5 text-left flex items-center justify-between font-bold text-xs sm:text-sm text-slate-900 cursor-pointer"
                  >
                    <span>{faq.question}</span>
                    {isOpen ? <ChevronUp className="w-4 h-4 text-[#006747]" /> : <ChevronDown className="w-4 h-4 text-slate-400" />}
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 text-xs text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 7. Bottom Tour Booking Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#006747] rounded-3xl p-8 sm:p-12 text-white shadow-xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              <div className="lg:col-span-7 space-y-4">
                <span className="inline-block px-3 py-1 rounded-full bg-white/20 text-white font-bold text-xs uppercase tracking-wider">
                  Campus Discovery
                </span>
                <h2 className="text-3xl sm:text-4xl font-black font-display leading-tight">
                  Schedule a Campus Tour Today
                </h2>
                <p className="text-xs sm:text-sm text-emerald-100 max-w-lg leading-relaxed">
                  Walk through our sunlit classrooms, meet lead educators, and experience how our play-based Reggio curriculum nurtures curious minds.
                </p>
                <div className="pt-2 text-xs text-emerald-200 font-semibold space-y-1">
                  <div>📞 Admissions Office: {SCHOOL_INFO.phone}</div>
                  <div>✉️ Email: {SCHOOL_INFO.email}</div>
                </div>
              </div>

              {/* Mini Booking Form */}
              <div className="lg:col-span-5 bg-white text-slate-900 p-6 rounded-2xl shadow-lg">
                {tourBooked ? (
                  <div className="text-center py-6 space-y-3">
                    <div className="w-12 h-12 bg-emerald-100 text-[#006747] rounded-full flex items-center justify-center mx-auto">
                      <Check className="w-6 h-6" />
                    </div>
                    <h4 className="font-bold text-lg font-display">Tour Request Received!</h4>
                    <p className="text-xs text-slate-600">
                      We look forward to welcoming you on <strong>{tourDate}</strong>! A confirmation email has been sent.
                    </p>
                    <button
                      onClick={() => setTourBooked(false)}
                      className="mt-2 text-xs font-bold text-[#006747] underline"
                    >
                      Book Another Date
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleHomeTourSubmit} className="space-y-3">
                    <h3 className="font-bold text-sm text-slate-900 font-display">
                      Book Your Personal Visit
                    </h3>

                    <div>
                      <input
                        type="text"
                        required
                        value={parentName}
                        onChange={(e) => setParentName(e.target.value)}
                        placeholder="Parent / Guardian Name *"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs focus:outline-none focus:border-[#006747]"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-2">
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Email Address *"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs focus:outline-none focus:border-[#006747]"
                      />
                      <input
                        type="tel"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="Phone Number *"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs focus:outline-none focus:border-[#006747]"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-2">
                      <select
                        value={childAge}
                        onChange={(e) => setChildAge(e.target.value)}
                        className="w-full px-3 py-2.5 rounded-xl border border-slate-200 text-xs bg-white focus:outline-none focus:border-[#006747]"
                      >
                        <option value="Infant (6w - 18m)">Infant (6w - 18m)</option>
                        <option value="Toddler (18m - 3y)">Toddler (18m - 3y)</option>
                        <option value="Preschool (2.5 - 4y)">Preschool (2.5 - 4y)</option>
                        <option value="Pre-K (4 - 6y)">Pre-K (4 - 6y)</option>
                      </select>

                      <input
                        type="date"
                        required
                        value={tourDate}
                        onChange={(e) => setTourDate(e.target.value)}
                        className="w-full px-3 py-2.5 rounded-xl border border-slate-200 text-xs focus:outline-none focus:border-[#006747]"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-3 rounded-full bg-[#006747] hover:bg-[#005238] text-white font-bold text-xs transition shadow-xs cursor-pointer"
                    >
                      Schedule My Campus Tour
                    </button>
                  </form>
                )}
              </div>

            </div>
          </div>
        </div>
      </section>

    </div>
  );
};
