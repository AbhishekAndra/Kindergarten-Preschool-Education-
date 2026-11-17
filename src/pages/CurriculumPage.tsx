import React, { useState } from 'react';
import { Check, Download, BookOpen, Calculator, Activity, FlaskConical, ArrowRight } from 'lucide-react';
import { SCHOOL_INFO } from '../data/preschoolData';

export const CurriculumPage: React.FC = () => {
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  // Form on bottom
  const [parentName, setParentName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [preferredDate, setPreferredDate] = useState('2026-05-20');
  const [tourBooked, setTourBooked] = useState(false);

  const handleDownload = () => {
    setDownloadSuccess(true);
    setTimeout(() => setDownloadSuccess(false), 4000);
  };

  const handleCurriculumTour = (e: React.FormEvent) => {
    e.preventDefault();
    setTourBooked(true);
  };

  return (
    <div className="bg-[#fbfcfa] min-h-screen text-slate-800">
      
      {/* 1. Hero Section */}
      <section className="pt-12 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#e6f4ea] text-[#137333] border border-[#ceead6] text-xs font-bold">
              <span>Play-Based STEAM • Reggio Emilia Inspired • Social-Emotional Focus</span>
            </div>

            <h1 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight leading-[1.12] font-display">
              Our Holistic Learning Framework:{' '}
              <span className="text-[#006747]">
                Play, Inquiry & Wonder
              </span>
            </h1>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl">
              Early education should inspire a lifelong thirst for discovery. Learn how our blended curriculum balances child-led inquiry with structured academic milestones.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-1">
              <a
                href="#four-domains"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#006747] hover:bg-[#005238] text-white font-bold text-xs shadow-sm transition"
              >
                <span>Explore the Four Domains</span>
                <ArrowRight className="w-4 h-4 text-emerald-200" />
              </a>

              <button
                onClick={handleDownload}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#fde2cb] hover:bg-[#fad5b8] text-slate-900 font-bold text-xs transition"
              >
                <Download className="w-4 h-4 text-slate-700" />
                <span>{downloadSuccess ? 'Downloaded!' : 'Download Curriculum PDF'}</span>
              </button>
            </div>

            <div className="pt-2 flex flex-wrap items-center gap-4 text-xs font-semibold text-slate-600">
              <span className="flex items-center gap-1 text-[#006747]">
                <Check className="w-3.5 h-3.5 text-[#006747]" />
                State Aligned
              </span>
              <span>•</span>
              <span className="flex items-center gap-1 text-[#006747]">
                <Check className="w-3.5 h-3.5 text-[#006747]" />
                Developmentally Sequenced
              </span>
              <span>•</span>
              <span className="flex items-center gap-1 text-[#006747]">
                <Check className="w-3.5 h-3.5 text-[#006747]" />
                Research-Backed Pedagogy
              </span>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-3xl overflow-hidden border-4 border-white shadow-xl aspect-4/3 bg-slate-100">
              <img
                src="https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=800&q=80"
                alt="Children exploring in science lab"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

        </div>
      </section>

      {/* 2. Pedagogical Foundations & Guiding Pillars */}
      <section className="py-16 bg-[#f4f9f6] border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-[#006747]">The Sprout Approach</span>
            <h2 className="text-3xl font-extrabold text-slate-900 font-display mt-1">
              Pedagogical Foundations & Guiding Pillars
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Child-Led Project Inquiries",
                desc: "Children investigate questions they genuinely ask. Projects evolve organically over weeks through sketches, models, and presentations.",
                icon: "💡"
              },
              {
                title: "The Environment as 'Third Teacher'",
                desc: "Classrooms bathed in natural light with wooden furnishings, loose tactile parts, and open ateliers inviting purposeful choice.",
                icon: "🌿"
              },
              {
                title: "Hands-On S.T.E.A.M. Discovery",
                desc: "Tangible physics ramps, magnifying inspection jars, chemical baking reactions, and early screen-free robotics.",
                icon: "🔬"
              },
              {
                title: "Conscious Discipline & Empathy",
                desc: "Emotional safety is paramount. We teach children to identify internal feelings, self-regulate in calm corners, and resolve peer disagreements.",
                icon: "❤️"
              }
            ].map((pillar, idx) => (
              <div key={idx} className="bg-white p-6 rounded-3xl border border-slate-200 shadow-2xs">
                <div className="text-3xl mb-3">{pillar.icon}</div>
                <h3 className="font-bold text-base text-slate-900 font-display mb-2">{pillar.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{pillar.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 3. Four Core Developmental Domains */}
      <section id="four-domains" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-[#006747]">Holistic Roadmap</span>
            <h2 className="text-3xl font-extrabold text-slate-900 font-display mt-1">
              Four Core Developmental Domains
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-slate-600">
              Our systematic curriculum ensures comprehensive growth across literacy, numeracy, motor mastery, and natural sciences.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Domain 1: Language & Emergent Literacy */}
            <div className="bg-[#fbfcfa] p-8 rounded-3xl border border-slate-200 shadow-2xs space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-rose-50 border border-rose-200 text-rose-700 flex items-center justify-center">
                <BookOpen className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 font-display">
                Language & Emergent Literacy
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Building confident storytellers and phonemic awareness through rich multicultural literature, rhyming, and writing journals.
              </p>
              <div className="space-y-2 pt-2 border-t border-slate-100 text-xs text-slate-700">
                <div className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-[#006747]" /> Heggerty phonological awareness & sound isolation games</div>
                <div className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-[#006747]" /> Leveled decodables and interactive group reading</div>
                <div className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-[#006747]" /> Inventive spelling, dictated stories, and alphabet sensory trays</div>
              </div>
            </div>

            {/* Domain 2: Mathematical Thinking & Logic */}
            <div className="bg-[#fbfcfa] p-8 rounded-3xl border border-slate-200 shadow-2xs space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-amber-50 border border-amber-200 text-amber-700 flex items-center justify-center">
                <Calculator className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 font-display">
                Mathematical Thinking & Logic
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Singapore Math manipulatives bring abstract numerical ideas into tangible, touchable reality through blocks, sorting, and balance scales.
              </p>
              <div className="space-y-2 pt-2 border-t border-slate-100 text-xs text-slate-700">
                <div className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-[#006747]" /> Concrete-to-pictorial number bonds and counting collections</div>
                <div className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-[#006747]" /> 3D spatial geometry blocks and pattern sequencing</div>
                <div className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-[#006747]" /> Real-world measurement with balances, cups, and rulers</div>
              </div>
            </div>

            {/* Domain 3: Physical & Fine Motor Mastery */}
            <div className="bg-[#fbfcfa] p-8 rounded-3xl border border-slate-200 shadow-2xs space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-sky-50 border border-sky-200 text-sky-700 flex items-center justify-center">
                <Activity className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 font-display">
                Physical & Fine Motor Mastery
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Vigorous outdoor yard gross-motor obstacle courses combined with precise hand-eye coordination tweezer and scissor studios.
              </p>
              <div className="space-y-2 pt-2 border-t border-slate-100 text-xs text-slate-700">
                <div className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-[#006747]" /> Tripod pencil grasp, clay rolling, and safety scissor dexterity</div>
                <div className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-[#006747]" /> Balance beam walking, climbing wall grip, and tricycle coordination</div>
                <div className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-[#006747]" /> Mindful animal yoga poses for spatial awareness and core strength</div>
              </div>
            </div>

            {/* Domain 4: Scientific Inquiry & Nature Discovery */}
            <div className="bg-[#fbfcfa] p-8 rounded-3xl border border-slate-200 shadow-2xs space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-700 flex items-center justify-center">
                <FlaskConical className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 font-display">
                Scientific Inquiry & Nature Discovery
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Children hypothesize, test, and observe real phenomena in our outdoor living laboratory, weather station, and raised garden beds.
              </p>
              <div className="space-y-2 pt-2 border-t border-slate-100 text-xs text-slate-700">
                <div className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-[#006747]" /> Caterpillar enclosure metamorphosis and botanical seed germination</div>
                <div className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-[#006747]" /> Water run channels, boat density, and ramp speed experiments</div>
                <div className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-[#006747]" /> Screen-free Bee-Bot sequence coding and direction logic</div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 4. A Day in the Curriculum: Flow & Rhythms */}
      <section className="py-16 bg-[#f4f9f6] border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-display">
              A Day in the Curriculum: Flow & Rhythms
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { phase: "Phase 1: Morning Exploration", time: "8:00 AM – 9:30 AM", desc: "Open sensory tables, morning community circle, phonemic greeting, and question of the day." },
              { phase: "Phase 2: Project Inquiries", time: "9:30 AM – 11:00 AM", desc: "Collaborative STEAM stations, mathematics manipulatives, and small-group guided reading." },
              { phase: "Phase 3: Rest, Story & Lunch", time: "11:00 AM – 1:30 PM", desc: "Organic hot lunch, read-aloud chapter book, and quiet rest in dimly lit sanctuary." },
              { phase: "Phase 4: Specialty Stations", time: "1:30 PM – 4:00 PM", desc: "Art atelier watercolor, Orff music rhythmics, outdoor garden exploration, and departure." },
            ].map((p, i) => (
              <div key={i} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-2xs">
                <span className="text-[11px] font-bold text-[#006747] font-mono block mb-1">{p.time}</span>
                <h4 className="font-bold text-sm text-slate-900 font-display mb-2">{p.phase}</h4>
                <p className="text-xs text-slate-600 leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Outdoor Nature & Living Sciences Lab */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-[#006747]">Outdoor Laboratory</span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-display">
                Outdoor Nature & Living Sciences Lab
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Children spend an average of 90 minutes outdoors every day. Our 2.5-acre campus serves as an outdoor classroom with raised organic beds, a weather monitoring post, and sensory mud kitchen.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs">
                <div className="p-3 bg-[#f8fcfa] rounded-xl border border-slate-200">
                  <div className="font-bold text-slate-900 mb-0.5">🌱 Sensory Herb & Berry Garden</div>
                  <div className="text-slate-500 text-[11px]">Rosemary, mint, strawberries planted and harvested by students</div>
                </div>
                <div className="p-3 bg-[#f8fcfa] rounded-xl border border-slate-200">
                  <div className="font-bold text-slate-900 mb-0.5">🌧️ Micro Weather Station</div>
                  <div className="text-slate-500 text-[11px]">Rain gauges, wind vanes, and temperature thermometers recorded daily</div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 rounded-2xl overflow-hidden aspect-4/3 border border-slate-200 shadow-md">
              <img
                src="https://images.unsplash.com/photo-1472162072942-cd5147eb3902?auto=format&fit=crop&w=800&q=80"
                alt="Children playing outdoors in yard"
                className="w-full h-full object-cover"
              />
            </div>

          </div>
        </div>
      </section>

      {/* 6. Continuous Living Portfolios */}
      <section className="py-16 bg-[#f4f9f6] border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-4xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-wider text-[#006747]">Authentic Assessment</span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-display mt-1 mb-2">
            No High-Stakes Testing — Continuous Living Portfolios
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mb-10">
            We evaluate young minds through authentic observational documentation, milestone logging, and narrative learning stories.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-2xs">
              <h4 className="font-bold text-sm text-slate-900 mb-2 font-display">Daily Digital Portfolios</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Photos, quotes, and developmental milestone logs shared with parents via the Stackly app.
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-2xs">
              <h4 className="font-bold text-sm text-slate-900 mb-2 font-display">Bi-Annual Family Conferences</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Deep 45-minute developmental reviews celebrating your child's growth with primary educators.
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-2xs">
              <h4 className="font-bold text-sm text-slate-900 mb-2 font-display">Narrative Learning Stories</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Comprehensive portfolios highlighting perseverance, creative triumphs, and peer collaboration.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Curriculum Tour Booking Card */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#fbfcfa] rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              
              <div className="md:col-span-7 space-y-4">
                <span className="text-xs font-bold text-[#006747] uppercase tracking-wider">Meet Our Leadership</span>
                <h3 className="text-2xl font-bold text-slate-900 font-display">
                  Schedule a Curriculum Tour with Our Pedagogical Director
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Join Marcus Rivera, M.Ed., for a guided walkthrough of our ateliers and curriculum materials in action.
                </p>
                <div className="text-xs text-slate-500 font-semibold space-y-1 pt-1">
                  <div>📞 Phone: {SCHOOL_INFO.phone}</div>
                  <div>✉️ Email: {SCHOOL_INFO.email}</div>
                </div>
              </div>

              <div className="md:col-span-5 bg-white p-5 rounded-2xl border border-slate-200 shadow-2xs">
                {tourBooked ? (
                  <div className="text-center py-4 space-y-2">
                    <Check className="w-8 h-8 text-[#006747] mx-auto" />
                    <h4 className="font-bold text-sm font-display">Tour Confirmed!</h4>
                    <p className="text-xs text-slate-600">See you on {preferredDate}!</p>
                  </div>
                ) : (
                  <form onSubmit={handleCurriculumTour} className="space-y-3">
                    <input
                      type="text"
                      required
                      value={parentName}
                      onChange={(e) => setParentName(e.target.value)}
                      placeholder="Parent Name *"
                      className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs focus:outline-none focus:border-[#006747]"
                    />
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Email Address *"
                      className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs focus:outline-none focus:border-[#006747]"
                    />
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="Phone *"
                      className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs focus:outline-none focus:border-[#006747]"
                    />
                    <input
                      type="date"
                      required
                      value={preferredDate}
                      onChange={(e) => setPreferredDate(e.target.value)}
                      className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs focus:outline-none focus:border-[#006747]"
                    />
                    <button
                      type="submit"
                      className="w-full py-2.5 rounded-full bg-[#006747] hover:bg-[#005238] text-white font-bold text-xs transition shadow-xs cursor-pointer"
                    >
                      Book Curriculum Tour
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
