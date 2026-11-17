import React, { useState } from 'react';
import { Check, HelpCircle, ArrowRight } from 'lucide-react';
import { useTour } from '../context/TourContext';
import { FAQS } from '../data/preschoolData';

export const AdmissionsPage: React.FC = () => {
  const { openTourModal } = useTour();

  // Tuition Calculator State
  const [selectedAge, setSelectedAge] = useState<'infant' | 'toddler' | 'preschool' | 'kindergarten'>('toddler');
  const [daysPerWeek, setDaysPerWeek] = useState<5 | 3 | 2>(5);
  const [extendedCare, setExtendedCare] = useState<boolean>(true);
  const [siblingDiscount, setSiblingDiscount] = useState<boolean>(false);

  // Application Form State
  const [appStep, setAppStep] = useState<number>(1);
  const [childFirstName, setChildFirstName] = useState('');
  const [childLastName, setChildLastName] = useState('');
  const [childDob, setChildDob] = useState('2023-06-15');
  const [desiredProgram, setDesiredProgram] = useState('Toddler Explorer Labs (18m - 3y)');
  const [startDate, setStartDate] = useState('2026-09-01');

  const [parentName, setParentName] = useState('');
  const [parentEmail, setParentEmail] = useState('');
  const [parentPhone, setParentPhone] = useState('');

  const [allergies, setAllergies] = useState('None');
  const [notes, setNotes] = useState('');
  const [applicationSubmitted, setApplicationSubmitted] = useState(false);

  const baseRates = {
    infant: { 5: 1650, 3: 1250, 2: 950 },
    toddler: { 5: 1480, 3: 1100, 2: 820 },
    preschool: { 5: 1350, 3: 990, 2: 750 },
    kindergarten: { 5: 1250, 3: 920, 2: 690 },
  };

  const calculateMonthlyTuition = () => {
    let rate = baseRates[selectedAge][daysPerWeek];
    if (extendedCare) rate += 120;
    if (siblingDiscount) rate = Math.round(rate * 0.9);
    return rate;
  };

  const handleApplicationSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setApplicationSubmitted(true);
  };

  return (
    <div className="bg-[#fbfcfa] min-h-screen text-slate-800">
      
      {/* 1. Hero Section */}
      <section className="pt-12 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#e6f4ea] text-[#137333] border border-[#ceead6] text-xs font-bold mb-4">
          <span>Admissions & Enrollment Hub</span>
        </div>

        <h1 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight leading-[1.12] font-display max-w-4xl mx-auto">
          Transparent Admissions & Effortless Enrollment
        </h1>

        <p className="mt-4 text-sm sm:text-base text-slate-600 max-w-3xl mx-auto leading-relaxed">
          We welcome families into our caring community through a straightforward, respectful admissions pathway designed to answer every question.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <button
            onClick={() => openTourModal()}
            className="px-6 py-3 rounded-full bg-[#006747] hover:bg-[#005238] text-white font-bold text-xs shadow-sm transition cursor-pointer"
          >
            Schedule a Campus Tour
          </button>
          <a
            href="#application-form"
            className="px-6 py-3 rounded-full bg-[#fde2cb] hover:bg-[#fad5b8] text-slate-900 font-bold text-xs transition"
          >
            Start Online Application
          </a>
        </div>
      </section>

      {/* 2. Four-Step Pathway */}
      <section className="py-16 bg-white border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-[#006747]">Clear Process</span>
            <h2 className="text-3xl font-extrabold text-slate-900 font-display mt-1">
              Our 4-Step Enrollment Process
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: "01", title: "Book a Campus Visit", desc: "Schedule a 30-minute in-person or virtual tour to see classrooms in session and meet our educators.", icon: "🏫" },
              { step: "02", title: "Submit Application", desc: "Complete our digital enrollment inquiry form below with your child's background and target start date.", icon: "📝" },
              { step: "03", title: "Family Play Dialogue", desc: "Join us for an informal 20-minute play session so your little one can explore the environment comfortably.", icon: "🌱" },
              { step: "04", title: "Welcome & Phasing-In", desc: "Receive your Sprout welcome pack, set up app logins, and begin our gentle 3-day gradual phase-in schedule.", icon: "🎉" },
            ].map((s, i) => (
              <div key={i} className="bg-[#fbfcfa] p-6 rounded-3xl border border-slate-200 shadow-2xs text-center">
                <span className="inline-block px-3 py-1 rounded-full bg-[#e6f4ea] text-[#006747] font-bold text-xs mb-3">
                  Step {s.step}
                </span>
                <div className="text-3xl mb-2">{s.icon}</div>
                <h4 className="font-bold text-base text-slate-900 font-display mb-2">{s.title}</h4>
                <p className="text-xs text-slate-500 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Interactive Tuition Calculator */}
      <section className="py-20 bg-[#f4f9f6] border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-[#006747]">100% Predictable</span>
            <h2 className="text-3xl font-extrabold text-slate-900 font-display mt-1">
              Interactive Monthly Tuition Estimator
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-slate-600">
              Calculate your family's investment with complete transparency. No hidden fees or unexpected supply surcharges.
            </p>
          </div>

          <div className="max-w-4xl mx-auto bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              
              <div className="md:col-span-7 space-y-6">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                    1. Select Program Level:
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    {[
                      { id: 'infant', label: 'Infant Haven (6w – 18m)' },
                      { id: 'toddler', label: 'Toddler Labs (18m – 3y)' },
                      { id: 'preschool', label: 'Preschool (2.5 – 4y)' },
                      { id: 'kindergarten', label: 'Pre-K & Kindergarten (4 – 6y)' },
                    ].map((btn) => (
                      <button
                        key={btn.id}
                        type="button"
                        onClick={() => setSelectedAge(btn.id as any)}
                        className={`p-2.5 rounded-xl text-xs font-bold border transition ${
                          selectedAge === btn.id
                            ? 'bg-[#006747] text-white border-[#006747] shadow-2xs'
                            : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
                        }`}
                      >
                        {btn.label}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                    2. Days Per Week:
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {[
                      { val: 5, label: '5 Days (M–F)' },
                      { val: 3, label: '3 Days (M/W/F)' },
                      { val: 2, label: '2 Days (T/Th)' },
                    ].map((opt) => (
                      <button
                        key={opt.val}
                        type="button"
                        onClick={() => setDaysPerWeek(opt.val as any)}
                        className={`p-2.5 rounded-xl text-xs font-bold border transition ${
                          daysPerWeek === opt.val
                            ? 'bg-[#006747] text-white border-[#006747] shadow-2xs'
                            : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
                        }`}
                      >
                        {opt.label}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="space-y-2 pt-2 border-t border-slate-100">
                  <label className="flex items-center gap-2.5 text-xs text-slate-700 font-semibold cursor-pointer">
                    <input
                      type="checkbox"
                      checked={extendedCare}
                      onChange={(e) => setExtendedCare(e.target.checked)}
                      className="rounded text-[#006747] focus:ring-[#006747]"
                    />
                    <span>Include Extended Care (7:30 AM – 5:30 PM) (+$120/mo)</span>
                  </label>

                  <label className="flex items-center gap-2.5 text-xs text-slate-700 font-semibold cursor-pointer">
                    <input
                      type="checkbox"
                      checked={siblingDiscount}
                      onChange={(e) => setSiblingDiscount(e.target.checked)}
                      className="rounded text-[#006747] focus:ring-[#006747]"
                    />
                    <span>Apply Sibling Discount (10% off second enrolled child)</span>
                  </label>
                </div>
              </div>

              {/* Price Preview Card */}
              <div className="md:col-span-5 bg-[#006747] text-white p-8 rounded-3xl text-center shadow-md space-y-4">
                <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-200 block">
                  Estimated Monthly Tuition
                </span>
                <div className="text-5xl font-black font-display text-white">
                  ${calculateMonthlyTuition()}
                </div>
                <span className="text-xs text-emerald-200 block font-medium">
                  Billed monthly on the 1st
                </span>

                <div className="bg-white/10 rounded-2xl p-4 text-[11px] text-emerald-100 text-left space-y-1.5">
                  <div className="font-bold text-white text-xs mb-1">✓ Included In Your Tuition:</div>
                  <div>• 100% Organic Chef Hot Lunch & 2 Snacks</div>
                  <div>• Diapers & Non-Toxic Sanitized Wipes</div>
                  <div>• All STEAM & Art Studio Materials</div>
                  <div>• Stackly Real-Time Mobile App</div>
                </div>

                <button
                  onClick={() => openTourModal()}
                  className="w-full py-3 rounded-full bg-white hover:bg-emerald-50 text-[#006747] font-bold text-xs transition shadow-sm cursor-pointer"
                >
                  Schedule Tour With This Rate
                </button>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* 4. Interactive Online Application Form */}
      <section id="application-form" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-[#006747]">Enrollment Application</span>
            <h2 className="text-3xl font-extrabold text-slate-900 font-display mt-1">
              Begin Your Enrollment Application
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-slate-600">
              Submit your preliminary details below. Our admissions director will review and contact you within 24 hours.
            </p>
          </div>

          {applicationSubmitted ? (
            <div className="bg-[#e6f4ea] rounded-3xl p-8 sm:p-10 border border-[#ceead6] text-center space-y-4">
              <div className="w-14 h-14 bg-[#006747] text-white rounded-full flex items-center justify-center mx-auto shadow-md">
                <Check className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-black text-slate-900 font-display">
                Application Received with Joy! 🌱
              </h3>
              <p className="text-xs sm:text-sm text-slate-700 max-w-md mx-auto leading-relaxed">
                Thank you, <strong>{parentName || 'Parent'}</strong>! Your preliminary application for <strong>{childFirstName} {childLastName}</strong> has been logged.
              </p>

              <div className="bg-white p-4 rounded-2xl border border-[#ceead6] max-w-sm mx-auto text-xs text-left space-y-1.5">
                <div className="flex justify-between font-bold">
                  <span>Application Reference:</span>
                  <span className="font-mono text-[#006747]">#APP-2026-8472</span>
                </div>
                <div className="flex justify-between">
                  <span>Program:</span>
                  <span>{desiredProgram}</span>
                </div>
                <div className="flex justify-between">
                  <span>Target Start Date:</span>
                  <span>{startDate}</span>
                </div>
                <div className="flex justify-between">
                  <span>Contact Email:</span>
                  <span>{parentEmail}</span>
                </div>
              </div>

              <div className="pt-2 flex justify-center gap-3">
                <button
                  onClick={() => openTourModal()}
                  className="px-5 py-2.5 rounded-full bg-[#006747] text-white font-bold text-xs"
                >
                  Book Parent Dialogue Visit
                </button>
                <button
                  onClick={() => setApplicationSubmitted(false)}
                  className="px-5 py-2.5 rounded-full bg-white border border-slate-300 text-slate-700 font-bold text-xs"
                >
                  Submit Another Application
                </button>
              </div>
            </div>
          ) : (
            <div className="bg-[#fbfcfa] rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-sm">
              
              {/* Stepper Header */}
              <div className="flex items-center justify-between pb-6 mb-6 border-b border-slate-200">
                {[
                  { step: 1, label: "Child Info" },
                  { step: 2, label: "Parent Details" },
                  { step: 3, label: "Program Preferences" },
                ].map((s) => (
                  <div key={s.step} className="flex items-center gap-2">
                    <div
                      className={`w-7 h-7 rounded-full text-xs font-bold flex items-center justify-center ${
                        appStep === s.step
                          ? 'bg-[#006747] text-white'
                          : appStep > s.step
                          ? 'bg-emerald-200 text-[#006747]'
                          : 'bg-slate-200 text-slate-500'
                      }`}
                    >
                      {appStep > s.step ? '✓' : s.step}
                    </div>
                    <span className="text-xs font-bold text-slate-700 hidden sm:inline">{s.label}</span>
                  </div>
                ))}
              </div>

              <form onSubmit={handleApplicationSubmit} className="space-y-4">
                
                {appStep === 1 && (
                  <div className="space-y-4">
                    <h4 className="font-bold text-sm text-slate-900 font-display">Step 1: Child Information</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">Child First Name *</label>
                        <input
                          type="text"
                          required
                          value={childFirstName}
                          onChange={(e) => setChildFirstName(e.target.value)}
                          placeholder="e.g. Leo"
                          className="w-full px-3 py-2.5 rounded-xl border border-slate-200 text-xs focus:outline-none focus:border-[#006747]"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">Child Last Name *</label>
                        <input
                          type="text"
                          required
                          value={childLastName}
                          onChange={(e) => setChildLastName(e.target.value)}
                          placeholder="e.g. Miller"
                          className="w-full px-3 py-2.5 rounded-xl border border-slate-200 text-xs focus:outline-none focus:border-[#006747]"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">Date of Birth *</label>
                        <input
                          type="date"
                          required
                          value={childDob}
                          onChange={(e) => setChildDob(e.target.value)}
                          className="w-full px-3 py-2.5 rounded-xl border border-slate-200 text-xs focus:outline-none focus:border-[#006747]"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">Desired Start Date *</label>
                        <input
                          type="date"
                          required
                          value={startDate}
                          onChange={(e) => setStartDate(e.target.value)}
                          className="w-full px-3 py-2.5 rounded-xl border border-slate-200 text-xs focus:outline-none focus:border-[#006747]"
                        />
                      </div>
                    </div>

                    <div className="pt-2 flex justify-end">
                      <button
                        type="button"
                        onClick={() => setAppStep(2)}
                        disabled={!childFirstName}
                        className="px-5 py-2 rounded-full bg-[#006747] text-white font-bold text-xs flex items-center gap-1.5 cursor-pointer disabled:opacity-50"
                      >
                        <span>Next: Parent Info</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                )}

                {appStep === 2 && (
                  <div className="space-y-4">
                    <h4 className="font-bold text-sm text-slate-900 font-display">Step 2: Parent / Guardian Info</h4>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Parent Full Name *</label>
                      <input
                        type="text"
                        required
                        value={parentName}
                        onChange={(e) => setParentName(e.target.value)}
                        placeholder="e.g. Eleanor & David Miller"
                        className="w-full px-3 py-2.5 rounded-xl border border-slate-200 text-xs focus:outline-none focus:border-[#006747]"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">Email Address *</label>
                        <input
                          type="email"
                          required
                          value={parentEmail}
                          onChange={(e) => setParentEmail(e.target.value)}
                          placeholder="eleanor@family.com"
                          className="w-full px-3 py-2.5 rounded-xl border border-slate-200 text-xs focus:outline-none focus:border-[#006747]"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">Phone Number *</label>
                        <input
                          type="tel"
                          required
                          value={parentPhone}
                          onChange={(e) => setParentPhone(e.target.value)}
                          placeholder="(555) 019-2810"
                          className="w-full px-3 py-2.5 rounded-xl border border-slate-200 text-xs focus:outline-none focus:border-[#006747]"
                        />
                      </div>
                    </div>

                    <div className="pt-2 flex justify-between">
                      <button
                        type="button"
                        onClick={() => setAppStep(1)}
                        className="px-4 py-2 rounded-full border border-slate-300 text-slate-700 text-xs font-bold"
                      >
                        Back
                      </button>
                      <button
                        type="button"
                        onClick={() => setAppStep(3)}
                        disabled={!parentName || !parentEmail}
                        className="px-5 py-2 rounded-full bg-[#006747] text-white font-bold text-xs flex items-center gap-1.5 cursor-pointer disabled:opacity-50"
                      >
                        <span>Next: Program Preferences</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                )}

                {appStep === 3 && (
                  <div className="space-y-4">
                    <h4 className="font-bold text-sm text-slate-900 font-display">Step 3: Program Preferences</h4>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Select Program Level *</label>
                      <select
                        value={desiredProgram}
                        onChange={(e) => setDesiredProgram(e.target.value)}
                        className="w-full px-3 py-2.5 rounded-xl border border-slate-200 text-xs bg-white focus:outline-none focus:border-[#006747]"
                      >
                        <option value="Infant Sensory Haven (6w - 18m)">Infant Sensory Haven (6 Weeks – 18 Months)</option>
                        <option value="Toddler Explorer Labs (18m - 3y)">Toddler Explorer Labs (18 Months – 3 Years)</option>
                        <option value="Preschool Discovery (2.5 - 4y)">Preschool Discovery (2.5 – 4 Years)</option>
                        <option value="Kindergarten Readiness Bridge (4 - 6y)">Kindergarten Readiness Bridge (4 – 6 Years)</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Dietary Restrictions or Allergies</label>
                      <input
                        type="text"
                        value={allergies}
                        onChange={(e) => setAllergies(e.target.value)}
                        placeholder="e.g. None, Dairy sensitive, etc."
                        className="w-full px-3 py-2.5 rounded-xl border border-slate-200 text-xs focus:outline-none focus:border-[#006747]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Questions or Notes for Teachers</label>
                      <textarea
                        rows={3}
                        value={notes}
                        onChange={(e) => setNotes(e.target.value)}
                        placeholder="Tell us about what your child loves or any specific questions..."
                        className="w-full px-3 py-2.5 rounded-xl border border-slate-200 text-xs focus:outline-none focus:border-[#006747]"
                      />
                    </div>

                    <div className="pt-2 flex justify-between items-center">
                      <button
                        type="button"
                        onClick={() => setAppStep(2)}
                        className="px-4 py-2 rounded-full border border-slate-300 text-slate-700 text-xs font-bold"
                      >
                        Back
                      </button>
                      <button
                        type="submit"
                        className="px-6 py-3 rounded-full bg-[#006747] hover:bg-[#005238] text-white font-bold text-xs shadow-xs transition cursor-pointer"
                      >
                        Submit Enrollment Application
                      </button>
                    </div>
                  </div>
                )}

              </form>
            </div>
          )}

        </div>
      </section>

      {/* 5. FAQs */}
      <section className="py-16 bg-[#f4f9f6] border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-slate-900 font-display">Admissions FAQ</h3>
          </div>
          <div className="space-y-3">
            {FAQS.map((faq, i) => (
              <div key={i} className="bg-white p-5 rounded-2xl border border-slate-200">
                <h4 className="font-bold text-xs sm:text-sm text-slate-900 mb-1.5 flex items-center gap-2">
                  <HelpCircle className="w-4 h-4 text-[#006747] shrink-0" />
                  <span>{faq.question}</span>
                </h4>
                <p className="text-xs text-slate-600 pl-6 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};
