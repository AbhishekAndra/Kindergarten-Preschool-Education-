import React, { useState } from 'react';
import { Check } from 'lucide-react';
import { FACULTY, SCHOOL_INFO } from '../data/preschoolData';

export const AboutPage: React.FC = () => {
  const [tourDate, setTourDate] = useState('2026-05-18');
  const [parentName, setParentName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [booked, setBooked] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setBooked(true);
  };

  return (
    <div className="bg-[#fbfcfa] min-h-screen text-slate-800">
      
      {/* 1. Hero Section */}
      <section className="pt-12 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          <div className="lg:col-span-7 space-y-6">
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-3 py-1 rounded-full bg-[#e6f4ea] text-[#137333] text-xs font-bold border border-[#ceead6]">
                NAEYC Accredited
              </span>
              <span className="px-3 py-1 rounded-full bg-[#ffedd5] text-[#9a3412] text-xs font-bold border border-[#fed7aa]">
                Roots in Our Community
              </span>
              <span className="px-3 py-1 rounded-full bg-[#e0f2fe] text-[#0369a1] text-xs font-bold border border-[#bae6fd]">
                100% Certified Educators
              </span>
              <span className="px-3 py-1 rounded-full bg-[#f3e8ff] text-[#7e22ce] text-xs font-bold border border-[#e9d5ff]">
                Safe Sprouts Quality Tier 5
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight leading-[1.12] font-display">
              Nurturing Curious Minds &{' '}
              <span className="text-[#006747]">Gentle Hearts</span>{' '}
              Since 2006
            </h1>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl">
              Founded on the belief that early childhood should be filled with wonder, safety, and deep emotional connection. Meet the educators, values, and community behind our sanctuary.
            </p>

            {/* Quick Stats Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
              <div className="p-3 bg-white rounded-2xl border border-slate-200 shadow-2xs">
                <span className="text-2xl font-black font-display text-[#006747]">18+ Yrs</span>
                <span className="text-[11px] text-slate-500 block">Operating with Integrity</span>
              </div>
              <div className="p-3 bg-white rounded-2xl border border-slate-200 shadow-2xs">
                <span className="text-2xl font-black font-display text-[#006747]">100%</span>
                <span className="text-[11px] text-slate-500 block">State & CPR Certified</span>
              </div>
              <div className="p-3 bg-white rounded-2xl border border-slate-200 shadow-2xs">
                <span className="text-2xl font-black font-display text-[#006747]">1:4 / 1:7</span>
                <span className="text-[11px] text-slate-500 block">Low Ratio Care</span>
              </div>
              <div className="p-3 bg-white rounded-2xl border border-slate-200 shadow-2xs">
                <span className="text-2xl font-black font-display text-[#006747]">450+</span>
                <span className="text-[11px] text-slate-500 block">Joyful Alumni Families</span>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#faculty"
                className="px-6 py-3 rounded-full bg-[#006747] hover:bg-[#005238] text-white font-bold text-xs shadow-sm transition"
              >
                Meet Our Leadership Team
              </a>
              <a
                href="#story"
                className="px-6 py-3 rounded-full bg-[#fde2cb] hover:bg-[#fad5b8] text-slate-900 font-bold text-xs transition"
              >
                Read the Founding Story
              </a>
            </div>

          </div>

          <div className="lg:col-span-5 relative">
            <div className="rounded-3xl overflow-hidden border-4 border-white shadow-xl aspect-4/3 bg-slate-100">
              <img
                src="https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=800&q=80"
                alt="Teacher helping children with art"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -left-4 bg-white p-3 rounded-2xl shadow-lg border border-slate-200 flex items-center gap-2 text-xs font-bold text-slate-800">
              <span className="text-emerald-600 text-lg">🌱</span>
              <span>Certified Primary Attachment Educators</span>
            </div>
          </div>

        </div>
      </section>

      {/* 2. Founding Story */}
      <section id="story" className="py-16 bg-[#f4f9f6] border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-5 rounded-2xl overflow-hidden aspect-4/3 border border-slate-200 shadow-md">
              <img
                src="https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=800&q=80"
                alt="Backyard playgroup origins"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="lg:col-span-7 space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-[#006747]">Our Heritage</span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-display">
                From a Backyard Playgroup to an Accredited Nature-Inspired Sanctuary
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                In the spring of 2006, Dr. Elena Vance opened her cottage home garden to six neighborhood families seeking a gentler, more respectful approach to early learning. Disillusioned with institutional daycare models of rigid desks and hurried transitions, she set out to create a sanctuary where children are treated with reverence.
              </p>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Word quickly spread. Over the past 18 years, Little Sprouts expanded to a custom-designed 2.5-acre campus featuring organic orchards, sunlit timber classrooms, and our dedicated farm kitchen. Yet despite our growth, our core philosophy remains unchanged: unhurried exploration, secure emotional bonds, and deep awe for the natural world.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 3. The Four Living Pillars of Our Pedagogy */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-[#006747]">Guiding Values</span>
            <h2 className="text-3xl font-extrabold text-slate-900 font-display mt-1">
              The Four Living Pillars of Our Pedagogy
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Unhurried Childhood",
                desc: "We honor the neurological pace of young development. No rushing, no performance pressure—just rich time to observe, play, and reflect.",
                icon: "⏳"
              },
              {
                title: "Emotion-First Mindset",
                desc: "A child cannot learn until they feel emotionally secure. We prioritize attachment, connection, and co-regulation above all else.",
                icon: "❤️"
              },
              {
                title: "Maker & Nature Curiosity",
                desc: "Hands in the soil, sticks in water, paint on paper. We treat real biological materials as the most potent learning instruments.",
                icon: "🌱"
              },
              {
                title: "Radical Inclusivity",
                desc: "Every family, culture, and learning temperament is cherished. We cultivate empathy and mutual respect as living community practices.",
                icon: "🤝"
              }
            ].map((pillar, idx) => (
              <div key={idx} className="bg-[#fbfcfa] p-6 rounded-3xl border border-slate-200 shadow-2xs">
                <div className="text-3xl mb-3">{pillar.icon}</div>
                <h3 className="font-bold text-base text-slate-900 font-display mb-2">{pillar.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{pillar.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Faculty & Mentors */}
      <section id="faculty" className="py-16 bg-[#f4f9f6] border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-[#006747]">Meet Our Educators</span>
            <h2 className="text-3xl font-extrabold text-slate-900 font-display mt-1">
              The Mentors Who Care for Your Little Ones
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-slate-600">
              Our lead teachers are career early childhood specialists committed to continuous professional development.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {FACULTY.map((member) => (
              <div key={member.id} className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-2xs flex flex-col justify-between">
                <div>
                  <div className="relative aspect-4/3 overflow-hidden bg-slate-100">
                    <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                    <span className="absolute bottom-2 left-2 bg-white/95 px-2.5 py-0.5 rounded-full text-[10px] font-bold text-slate-900 shadow-2xs">
                      {member.tag}
                    </span>
                  </div>
                  <div className="p-5">
                    <h4 className="font-bold text-base text-slate-900 font-display">{member.name}</h4>
                    <span className="text-xs font-semibold text-[#006747] block mb-2">{member.role}</span>
                    <p className="text-xs text-slate-500 leading-relaxed">{member.bio}</p>
                  </div>
                </div>

                <div className="p-5 pt-0 border-t border-slate-100 text-[11px] text-slate-400 font-medium">
                  {member.credentials}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 bg-white p-4 rounded-2xl border border-slate-200 text-center text-xs font-bold text-[#006747] flex items-center justify-center gap-2">
            <Check className="w-4 h-4 text-[#006747]" />
            <span>100% Educator Retention & Living Wage Guarantee • Staff Turnover Under 4%</span>
          </div>
        </div>
      </section>

      {/* 5. Why Families Trust Us Table */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-[#006747]">Clear Differences</span>
            <h2 className="text-3xl font-extrabold text-slate-900 font-display mt-1">
              Why Families Trust Us With Their Most Precious Gift
            </h2>
          </div>

          <div className="overflow-x-auto rounded-3xl border border-slate-200 shadow-sm max-w-4xl mx-auto">
            <table className="w-full text-left text-xs text-slate-700 bg-white">
              <thead className="bg-[#f4f9f6] text-slate-900 font-display text-[11px] uppercase tracking-wider border-b border-slate-200">
                <tr>
                  <th className="py-4 px-6 font-extrabold">Feature Benchmark</th>
                  <th className="py-4 px-6 font-extrabold text-[#006747]">Little Sprouts Academy</th>
                  <th className="py-4 px-6 font-extrabold text-slate-400">Typical Daycare Centers</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {[
                  { feature: "Child-to-Educator Ratio", ours: "1:3 Infant / 1:4 Toddler (Guaranteed)", typical: "1:4 Infant / 1:6 Toddler (State max)" },
                  { feature: "Outdoor Nature & Yard Time", ours: "90+ Minutes Daily (Turf, Garden, Trail)", typical: "30-45 Minutes on small asphalt pad" },
                  { feature: "Organic Meals Cooked On-Site", ours: "100% USDA Organic Chef Prepared", typical: "Processed packaged snacks or catered boxed" },
                  { feature: "Primary Attachment Caregivers", ours: "Assigned single primary mentor per child", typical: "Rotating staff shifts & frequent turnover" },
                  { feature: "Air & Physical Safety Standard", ours: "HEPA 13 purifiers & biometric gates", typical: "Standard commercial HVAC & manual locks" },
                ].map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-50">
                    <td className="py-4 px-6 font-bold text-slate-900">{row.feature}</td>
                    <td className="py-4 px-6 font-bold text-[#006747]">{row.ours}</td>
                    <td className="py-4 px-6 text-slate-400">{row.typical}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 6. Designed for Peace (3 Spaces) */}
      <section className="py-16 bg-[#f4f9f6] border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-display">
              Designed From the Floorboards Up for Early Childhood Peace
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: "Natural Light Timber Rooms", img: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=600&q=80", desc: "No fluorescent tubes. Floor-to-ceiling windows and acoustic dampening panels." },
              { title: "Tactile Loose Parts Ateliers", img: "https://images.unsplash.com/photo-1596496050827-8299e0220de1?auto=format&fit=crop&w=600&q=80", desc: "River stones, wood cuts, ceramic jars, and linen fabrics inspiring limitless imaginative invention." },
              { title: "Quiet Dimmed Nap Sanctuaries", img: "https://images.unsplash.com/photo-1544126592-807ade215a0b?auto=format&fit=crop&w=600&q=80", desc: "Dedicated sleep rooms separate from active play zones with organic cotton bedding." },
            ].map((space, i) => (
              <div key={i} className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-2xs">
                <div className="aspect-4/3 overflow-hidden">
                  <img src={space.img} alt={space.title} className="w-full h-full object-cover" />
                </div>
                <div className="p-5">
                  <h4 className="font-bold text-sm text-slate-900 font-display mb-1">{space.title}</h4>
                  <p className="text-xs text-slate-500 leading-relaxed">{space.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Bottom Tour Form */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#fbfcfa] rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              
              <div className="md:col-span-7 space-y-4">
                <span className="text-xs font-bold text-[#006747] uppercase tracking-wider">Campus Discovery</span>
                <h3 className="text-2xl font-bold text-slate-900 font-display">
                  Come Experience Little Sprouts In Person
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Join our directors for a personalized 30-minute campus walk. Observe children at play and ask any pedagogical questions.
                </p>
                <div className="text-xs text-slate-500 font-semibold space-y-1">
                  <div>📞 {SCHOOL_INFO.phone}</div>
                  <div>✉️ {SCHOOL_INFO.email}</div>
                  <div>📍 {SCHOOL_INFO.hours}</div>
                </div>
              </div>

              <div className="md:col-span-5 bg-white p-5 rounded-2xl border border-slate-200 shadow-2xs">
                {booked ? (
                  <div className="text-center py-4 space-y-2">
                    <Check className="w-8 h-8 text-[#006747] mx-auto" />
                    <h4 className="font-bold text-sm font-display">Tour Booked!</h4>
                    <p className="text-xs text-slate-600">Confirmation sent to your email.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-3">
                    <input
                      type="text"
                      required
                      value={parentName}
                      onChange={(e) => setParentName(e.target.value)}
                      placeholder="Your Full Name *"
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
                      value={tourDate}
                      onChange={(e) => setTourDate(e.target.value)}
                      className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs focus:outline-none focus:border-[#006747]"
                    />
                    <button
                      type="submit"
                      className="w-full py-2.5 rounded-full bg-[#006747] hover:bg-[#005238] text-white font-bold text-xs transition shadow-xs cursor-pointer"
                    >
                      Schedule Personal Tour
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
