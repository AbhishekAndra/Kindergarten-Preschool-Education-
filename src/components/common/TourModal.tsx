import React, { useState } from 'react';
import { X, User, Mail, Phone, Baby, Check } from 'lucide-react';
import { useTour } from '../../context/TourContext';
import { PROGRAMS, SCHOOL_INFO } from '../../data/preschoolData';

export const TourModal: React.FC = () => {
  const { isTourModalOpen, closeTourModal, selectedProgram } = useTour();

  const [tourType, setTourType] = useState<'in-person' | 'virtual'>('in-person');
  const [parentName, setParentName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [childAge, setChildAge] = useState(selectedProgram || 'Toddler Explorer Labs (18m – 3y)');
  const [preferredDate, setPreferredDate] = useState('2026-05-18');
  const [preferredTime, setPreferredTime] = useState('10:00 AM');
  const [submitted, setSubmitted] = useState(false);

  if (!isTourModalOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    closeTourModal();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-fadeIn">
      <div 
        className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden transform transition-all"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-[#006747] px-6 py-5 flex items-center justify-between text-white">
          <div>
            <h3 className="text-xl font-bold font-display">Schedule Your Campus Tour</h3>
            <p className="text-xs text-emerald-100">Experience the warmth & wonder of {SCHOOL_INFO.name}</p>
          </div>
          <button
            onClick={closeTourModal}
            className="p-1.5 rounded-full bg-white/20 hover:bg-white/30 text-white transition"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 max-h-[85vh] overflow-y-auto">
          {submitted ? (
            <div className="text-center py-6 space-y-4">
              <div className="w-14 h-14 bg-[#e6f4ea] text-[#006747] rounded-full flex items-center justify-center mx-auto shadow-xs">
                <Check className="w-8 h-8" />
              </div>
              <h4 className="text-2xl font-bold text-slate-900 font-display">Tour Booked Successfully!</h4>
              <p className="text-slate-600 text-xs sm:text-sm max-w-md mx-auto">
                Thank you, <strong>{parentName || 'Parent'}</strong>! We look forward to meeting your family on <strong>{preferredDate} at {preferredTime}</strong>. Confirmation sent to <strong>{email}</strong>.
              </p>

              <div className="bg-[#f8fcfa] rounded-2xl p-4 border border-slate-200 text-left text-xs text-slate-700 space-y-1.5 max-w-sm mx-auto">
                <div className="flex justify-between font-bold">
                  <span>Format:</span>
                  <span className="capitalize text-[#006747]">{tourType} Tour</span>
                </div>
                <div className="flex justify-between">
                  <span>Date & Time:</span>
                  <span>{preferredDate} ({preferredTime})</span>
                </div>
                <div className="flex justify-between">
                  <span>Program:</span>
                  <span>{childAge}</span>
                </div>
                <div className="flex justify-between">
                  <span>Reference ID:</span>
                  <span className="font-mono font-bold text-slate-900">#TOUR-9284</span>
                </div>
              </div>

              <button
                onClick={handleReset}
                className="mt-4 px-6 py-2.5 bg-[#006747] hover:bg-[#005238] font-bold text-white rounded-full text-xs transition shadow-xs"
              >
                Close & Return
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Tour Type Toggle */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                  Choose Tour Experience
                </label>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => setTourType('in-person')}
                    className={`py-2.5 px-3 rounded-2xl font-bold text-xs border transition-all flex flex-col items-center gap-1 cursor-pointer ${
                      tourType === 'in-person'
                        ? 'bg-[#e6f4ea] border-[#006747] text-[#006747] shadow-2xs'
                        : 'bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100'
                    }`}
                  >
                    <span>🏫 In-Person Guided Tour</span>
                    <span className="text-[10px] font-normal opacity-80">Walk classrooms & yards</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setTourType('virtual')}
                    className={`py-2.5 px-3 rounded-2xl font-bold text-xs border transition-all flex flex-col items-center gap-1 cursor-pointer ${
                      tourType === 'virtual'
                        ? 'bg-[#e6f4ea] border-[#006747] text-[#006747] shadow-2xs'
                        : 'bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100'
                    }`}
                  >
                    <span>💻 Virtual Video Tour</span>
                    <span className="text-[10px] font-normal opacity-80">Live 1-on-1 Zoom with Director</span>
                  </button>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Parent / Guardian Full Name *
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
                  <input
                    type="text"
                    required
                    value={parentName}
                    onChange={(e) => setParentName(e.target.value)}
                    placeholder="e.g. Eleanor Miller"
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 text-xs focus:outline-none focus:border-[#006747]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Email Address *</label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="eleanor@family.com"
                      className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 text-xs focus:outline-none focus:border-[#006747]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Phone Number *</label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="(555) 019-2810"
                      className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 text-xs focus:outline-none focus:border-[#006747]"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Program of Interest *</label>
                <div className="relative">
                  <Baby className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
                  <select
                    value={childAge}
                    onChange={(e) => setChildAge(e.target.value)}
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 text-xs bg-white focus:outline-none focus:border-[#006747]"
                  >
                    {PROGRAMS.map((prog) => (
                      <option key={prog.id} value={`${prog.name} (${prog.ageRange})`}>
                        {prog.name} ({prog.ageRange})
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Preferred Date *</label>
                  <input
                    type="date"
                    required
                    value={preferredDate}
                    onChange={(e) => setPreferredDate(e.target.value)}
                    className="w-full px-3 py-2.5 rounded-xl border border-slate-200 text-xs focus:outline-none focus:border-[#006747]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Time Slot *</label>
                  <select
                    value={preferredTime}
                    onChange={(e) => setPreferredTime(e.target.value)}
                    className="w-full px-3 py-2.5 rounded-xl border border-slate-200 text-xs bg-white focus:outline-none focus:border-[#006747]"
                  >
                    <option value="9:00 AM">9:00 AM – Morning Circle</option>
                    <option value="10:00 AM">10:00 AM – Outdoor Play & STEAM</option>
                    <option value="11:30 AM">11:30 AM – Lunch & Social Dining</option>
                    <option value="2:30 PM">2:30 PM – Afternoon Art Atelier</option>
                  </select>
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3 rounded-full bg-[#006747] hover:bg-[#005238] font-bold text-white text-xs transition shadow-xs cursor-pointer"
                >
                  Confirm Tour Reservation
                </button>
                <p className="text-center text-[10px] text-slate-400 mt-2">
                  No payment required. Free cancellation anytime.
                </p>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
