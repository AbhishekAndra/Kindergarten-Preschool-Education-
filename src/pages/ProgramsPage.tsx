import React, { useState } from 'react';
import { Check, ArrowRight } from 'lucide-react';
import { useTour } from '../context/TourContext';
import { SCHOOL_INFO } from '../data/preschoolData';

export const ProgramsPage: React.FC = () => {
  const { openTourModal } = useTour();
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [scheduleType, setScheduleType] = useState<'full' | 'half'>('full');

  const fullDaySchedule = [
    { time: "7:30 AM – 8:30 AM", title: "Arrival & Free Discovery", desc: "Gentle transition, soft table invitations, loose parts manipulation, and morning greeting with primary educators." },
    { time: "8:30 AM – 9:15 AM", title: "Morning Circle & Welcome", desc: "Greetings, weather song, emotional check-in chart, and introduction to the day's STEAM project questions." },
    { time: "9:15 AM – 10:15 AM", title: "STEAM & Sensory Centers", desc: "Small group rotations: water play, kinetic sand, Singapore math manipulatives, and writing atelier." },
    { time: "10:15 AM – 11:00 AM", title: "Outdoor Yard Exploration", desc: "90 minutes of active running, climbing wall, tricycle highway, and natural dirt digging in our fenced park." },
    { time: "11:00 AM – 12:00 PM", title: "Family-Style Organic Lunch", desc: "Hot, chef-cooked nutritious meal. Children practice pouring water, passing bowls, and self-feeding etiquette." },
    { time: "12:00 PM – 2:00 PM", title: "Rest & Nap Sanctuary", desc: "Dimmed natural lighting, gentle nature sounds, and individualized cots with hospital-grade HEPA purification." },
    { time: "2:00 PM – 3:00 PM", title: "Art Atelier & Loose Parts", desc: "Open-ended watercolor painting, natural clay sculpting, or Orff percussion musical rhythmics." },
    { time: "3:00 PM – 5:30 PM", title: "Outdoor Play & Departure", desc: "Afternoon fruit smoothie snack, outdoor lawn games, reading treehouse, and warm guardian reunions." },
  ];

  const halfDaySchedule = [
    { time: "8:00 AM – 8:45 AM", title: "Morning Arrival & Centers", desc: "Welcome cuddles, open sensory bins, and exploratory block constructions." },
    { time: "8:45 AM – 9:30 AM", title: "Circle Time & Phonics", desc: "Songs, rhyming games, calendar observation, and storybook reading." },
    { time: "9:30 AM – 10:45 AM", title: "STEAM Project Workshop", desc: "Hands-on science experiments, water tables, and art easel creation." },
    { time: "10:45 AM – 11:45 AM", title: "Outdoor Nature Play", desc: "Active playground recess, balance beams, and vegetable garden care." },
    { time: "11:45 AM – 12:30 PM", title: "Organic Hot Lunch & Dismissal", desc: "Chef-prepared family meal followed by pick-up or quiet transition." },
  ];

  const scheduleToDisplay = scheduleType === 'full' ? fullDaySchedule : halfDaySchedule;

  return (
    <div className="bg-[#fbfcfa] min-h-screen text-slate-800">
      
      {/* 1. Hero Section */}
      <section className="pt-12 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#e6f4ea] text-[#137333] border border-[#ceead6] text-xs font-bold mb-4">
          <span>Infant to Kindergarten • Low Ratios • Reggio-Inspired</span>
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.12] font-display max-w-4xl mx-auto">
          Whole-Child Learning Rooted in Play, Wonder & Research
        </h1>

        <p className="mt-4 text-sm sm:text-base text-slate-600 max-w-3xl mx-auto leading-relaxed">
          From gentle infant sensory care to confident kindergarten readiness, discover how our classrooms nurture social, emotional, and cognitive growth.
        </p>

        {/* Filter Tabs */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
          {[
            { id: 'all', label: 'All Programs' },
            { id: 'infants', label: 'Infants (6w – 18m)' },
            { id: 'toddlers', label: 'Toddlers (18m – 3y)' },
            { id: 'preschool', label: 'Preschool (3 – 4y)' },
            { id: 'kindergarten', label: 'Pre-K & Kindergarten (4 – 6y)' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveFilter(tab.id)}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${
                activeFilter === tab.id
                  ? 'bg-[#006747] text-white shadow-xs'
                  : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </section>

      {/* 2. Alternating Detailed Program Cards */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-16">
        
        {/* Section 1: Infant Sensory & Bonding Haven */}
        {(activeFilter === 'all' || activeFilter === 'infants') && (
          <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <span className="text-xs font-bold text-[#006747] uppercase tracking-wider">Ages 6 Weeks – 18 Months</span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-display">
                Infant Sensory & Bonding Haven
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                A calm sensory sanctuary featuring responsive feeding, soothing tummy time, primary attachment caregivers, and individualized sleep rhythms in a peaceful environment.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {[
                  "1:3 Infant-Educator Low Ratio",
                  "Primary Attachment Caregiver System",
                  "Pure Organic Purees & Formula",
                  "HEPA Filtered Napping Sanctuary"
                ].map((feat, idx) => (
                  <div key={idx} className="flex items-center gap-2 p-3 bg-[#f8fcfa] rounded-xl border border-slate-100 text-xs text-slate-800 font-medium">
                    <Check className="w-4 h-4 text-[#006747] shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>

              <div className="pt-2">
                <button
                  onClick={() => openTourModal('Infant Sensory Haven')}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#006747] hover:underline"
                >
                  <span>Learn more about our Infant Haven</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            <div className="lg:col-span-5 rounded-2xl overflow-hidden aspect-4/3 border border-slate-200 shadow-md">
              <img
                src="https://images.unsplash.com/photo-1544126592-807ade215a0b?auto=format&fit=crop&w=800&q=80"
                alt="Infant with caregiver"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        )}

        {/* Section 2: Toddler Explorer Labs */}
        {(activeFilter === 'all' || activeFilter === 'toddlers') && (
          <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5 rounded-2xl overflow-hidden aspect-4/3 border border-slate-200 shadow-md order-2 lg:order-1">
              <img
                src="https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&w=800&q=80"
                alt="Toddler painting with teacher"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="lg:col-span-7 space-y-4 order-1 lg:order-2">
              <span className="text-xs font-bold text-[#b45309] uppercase tracking-wider">Ages 18 Months – 3 Years</span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-display">
                Toddler Explorer Labs
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Fostering early language explosion, tactile motor manipulation, messy finger painting, and a supportive, pressure-free potty training partnership.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {[
                  "1:4 Toddler Low Ratio Care",
                  "Messy Art & Sensory Play Tables",
                  "Supportive Potty-Training Partnership",
                  "Daily Nature & Gross Motor Play"
                ].map((feat, idx) => (
                  <div key={idx} className="flex items-center gap-2 p-3 bg-[#fffaf5] rounded-xl border border-slate-100 text-xs text-slate-800 font-medium">
                    <Check className="w-4 h-4 text-[#b45309] shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>

              <div className="pt-2">
                <button
                  onClick={() => openTourModal('Toddler Explorer Labs')}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#b45309] hover:underline"
                >
                  <span>Schedule a Toddler Classroom Tour</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Section 3: Kindergarten Readiness Bridge */}
        {(activeFilter === 'all' || activeFilter === 'kindergarten' || activeFilter === 'preschool') && (
          <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <span className="text-xs font-bold text-[#0369a1] uppercase tracking-wider">Ages 4 – 6 Years</span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-display">
                Kindergarten Readiness Bridge
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Prepares confident early readers and problem-solvers. Balanced academic preparation using Heggerty phonics, Singapore math manipulatives, and collaborative inquiry.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {[
                  "Heggerty Phonics & Early Literacy",
                  "Concrete-Pictorial Math Foundations",
                  "Screen-Free STEAM Engineering",
                  "Social Collaboration & Conflict Resolution"
                ].map((feat, idx) => (
                  <div key={idx} className="flex items-center gap-2 p-3 bg-[#f0f9ff] rounded-xl border border-slate-100 text-xs text-slate-800 font-medium">
                    <Check className="w-4 h-4 text-[#0369a1] shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>

              <div className="pt-2">
                <button
                  onClick={() => openTourModal('Kindergarten Readiness Bridge')}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0369a1] hover:underline"
                >
                  <span>Explore Kindergarten Readiness benchmarks</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            <div className="lg:col-span-5 rounded-2xl overflow-hidden aspect-4/3 border border-slate-200 shadow-md">
              <img
                src="https://images.unsplash.com/photo-1587654780291-39c9404d746b?auto=format&fit=crop&w=800&q=80"
                alt="Child stacking educational blocks"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        )}

      </section>

      {/* 3. Daily Rhythm & Schedule Matrix */}
      <section className="py-16 bg-[#f4f9f6] border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#006747]">Structured Freedom</span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-display mt-0.5">
                Daily Rhythm & Schedule Matrix
              </h2>
              <p className="text-xs text-slate-500 mt-1">
                A predictable, gentle flow balancing focused group projects, hearty meals, outdoor play, and rest.
              </p>
            </div>

            {/* Schedule Toggle */}
            <div className="flex items-center gap-1 bg-white p-1 rounded-full border border-slate-200 shrink-0">
              <button
                onClick={() => setScheduleType('full')}
                className={`px-4 py-1.5 rounded-full text-xs font-bold transition cursor-pointer ${
                  scheduleType === 'full' ? 'bg-[#006747] text-white shadow-2xs' : 'text-slate-600'
                }`}
              >
                Full-Day
              </button>
              <button
                onClick={() => setScheduleType('half')}
                className={`px-4 py-1.5 rounded-full text-xs font-bold transition cursor-pointer ${
                  scheduleType === 'half' ? 'bg-[#006747] text-white shadow-2xs' : 'text-slate-600'
                }`}
              >
                Half-Day Morning
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {scheduleToDisplay.map((item, idx) => (
              <div key={idx} className="bg-white p-5 rounded-2xl border border-slate-200 shadow-2xs">
                <span className="text-[11px] font-bold font-mono text-[#006747] block mb-1">
                  {item.time}
                </span>
                <h4 className="font-bold text-sm text-slate-900 font-display mb-2">
                  {item.title}
                </h4>
                <p className="text-xs text-slate-500 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 4. Nourishing Body & Brain: Farm-to-Table Meals */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-[#006747]">Organic Campus Kitchen</span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-display">
                Nourishing Body & Brain: Farm-to-Table Meals
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                We believe true learning begins with optimal nutrition. Chef Maria crafts 100% USDA organic, scratch-made breakfasts, hot lunches, and afternoon snacks daily.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs">
                <div className="p-3 bg-[#f8fcfa] rounded-xl border border-slate-200">
                  <div className="font-bold text-slate-900 mb-0.5">🥗 100% USDA Organic</div>
                  <div className="text-slate-500 text-[11px]">Non-GMO, locally-harvested produce and grass-fed dairy</div>
                </div>
                <div className="p-3 bg-[#f8fcfa] rounded-xl border border-slate-200">
                  <div className="font-bold text-slate-900 mb-0.5">🥜 100% Nut-Free Facility</div>
                  <div className="text-slate-500 text-[11px]">Strict allergy protocols, gluten-free & vegetarian options</div>
                </div>
              </div>

              <div className="bg-[#fffaf5] p-4 rounded-2xl border border-[#fed7aa] text-xs text-slate-700">
                <span className="font-bold text-[#b45309] block mb-1">Today's Sample Hot Lunch:</span>
                Organic chicken pasta bake with steamed carrots, fresh sliced peaches, and organic oat milk.
              </div>
            </div>

            <div className="lg:col-span-5 rounded-2xl overflow-hidden aspect-4/3 border border-slate-200 shadow-md">
              <img
                src="https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=800&q=80"
                alt="Children eating lunch together"
                className="w-full h-full object-cover"
              />
            </div>

          </div>
        </div>
      </section>

      {/* 5. All-Inclusive Weekly Enrichment Programs */}
      <section className="py-16 bg-[#f4f9f6] border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-[#006747]">Included in Tuition</span>
            <h2 className="text-3xl font-extrabold text-slate-900 font-display mt-1">
              All-Inclusive Weekly Enrichment Programs
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-slate-600">
              Visiting master specialists introduce music, global languages, bodily wellness, and ecology every week.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Early Language Immersion", icon: "🗣️", desc: "Conversational Spanish songs, stories, and cultural discovery expanding linguistic adaptability." },
              { title: "Orff Music & Rhythmics", icon: "🎵", desc: "Glockenspiels, rhythm sticks, pitch games, and joyful classical and folk instrumentals." },
              { title: "Little Explorers Yoga", icon: "🧘", desc: "Animal poses, mindful breathing balls, balance games, and emotional calm-down techniques." },
              { title: "Little Green Thumbs Club", icon: "🌱", desc: "Heirloom seed planting, compost care, worm farming, and harvesting sweet peas in our garden." },
            ].map((club, idx) => (
              <div key={idx} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-2xs">
                <div className="text-3xl mb-3">{club.icon}</div>
                <h4 className="font-bold text-sm text-slate-900 font-display mb-1.5">{club.title}</h4>
                <p className="text-xs text-slate-500 leading-relaxed">{club.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 6. Wondering which program fits? Bottom Banner */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#006747] rounded-3xl p-8 sm:p-12 text-white shadow-xl text-center max-w-4xl mx-auto space-y-6">
            <span className="inline-block px-3.5 py-1 rounded-full bg-white/20 text-white font-bold text-xs uppercase tracking-wider">
              Admissions Dialogue
            </span>
            <h2 className="text-3xl sm:text-4xl font-black font-display leading-tight">
              Wondering which program fits your little sprout?
            </h2>
            <p className="text-xs sm:text-sm text-emerald-100 max-w-xl mx-auto leading-relaxed">
              Connect with our admissions director to discuss classroom readiness, schedule options, and gentle phase-in transitions.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
              <button
                onClick={() => openTourModal()}
                className="px-6 py-3 rounded-full bg-white text-[#006747] hover:bg-emerald-50 font-bold text-xs shadow-md transition cursor-pointer"
              >
                Schedule an In-Person Tour
              </button>
              <a
                href={`tel:${SCHOOL_INFO.phone}`}
                className="px-6 py-3 rounded-full border border-white/60 hover:bg-white/10 text-white font-bold text-xs transition"
              >
                Call Admissions: {SCHOOL_INFO.phone}
              </a>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};
