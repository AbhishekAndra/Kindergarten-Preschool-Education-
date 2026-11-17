import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, Lock, User, Baby, ArrowRight, Check } from 'lucide-react';
import { PROGRAMS } from '../data/preschoolData';

export const SignupPage: React.FC = () => {
  const [parentName, setParentName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [childName, setChildName] = useState('');
  const [programChoice, setProgramChoice] = useState('Toddler Explorer Labs (18m – 3y)');
  const [password, setPassword] = useState('');
  const [agreeTerms, setAgreeTerms] = useState(true);
  const [registered, setRegistered] = useState(false);

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    if (parentName && email && password && agreeTerms) {
      localStorage.setItem('stackly_user_email', email);
      localStorage.setItem('stackly_user_role', 'parent');
      setRegistered(true);
    }
  };

  const handleDemoFill = () => {
    setParentName('Eleanor & David Miller');
    setEmail('eleanor.miller@family.com');
    setPhone('(555) 019-2810');
    setChildName('Leo Miller');
    setProgramChoice('Kindergarten Readiness Bridge (4 – 6y)');
    setPassword('SproutFamily2026!');
  };

  return (
    <div className="bg-[#fbfcfa] min-h-[90vh] py-16 px-4 sm:px-6 lg:px-8 flex items-center justify-center text-slate-800">
      <div className="w-full max-w-lg">
        
        {/* Header */}
        <div className="text-center mb-8">
          <Link to="/" className="inline-block mb-3">
            <span className="text-3xl font-black tracking-tight text-[#006747] font-display">
              Stackly
            </span>
          </Link>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-display">
            Create Your Family Account
          </h1>
          <p className="text-xs text-slate-500 mt-1">
            Track your child's enrollment application & receive tour reminders
          </p>
        </div>

        {registered ? (
          <div className="bg-white rounded-3xl p-8 border border-emerald-300 shadow-xl text-center space-y-4">
            <div className="w-14 h-14 bg-[#e6f4ea] text-[#006747] rounded-full flex items-center justify-center mx-auto shadow-xs">
              <Check className="w-8 h-8" />
            </div>

            <h3 className="text-2xl font-black text-slate-900 font-display">
              Welcome to the Sprout Family! 🌱
            </h3>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-sm mx-auto">
              Your family account has been created for <strong>{parentName}</strong> and explorer <strong>{childName}</strong>!
            </p>

            <div className="bg-[#f8fcfa] p-4 rounded-2xl border border-slate-200 text-xs text-left space-y-1.5 max-w-sm mx-auto">
              <div className="flex justify-between font-bold">
                <span>Account Email:</span>
                <span className="text-slate-900">{email}</span>
              </div>
              <div className="flex justify-between">
                <span>Program:</span>
                <span>{programChoice}</span>
              </div>
              <div className="flex justify-between">
                <span>Portal Status:</span>
                <span className="text-[#006747] font-bold">Active</span>
              </div>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row gap-2 justify-center">
              <Link
                to="/dashboard"
                className="px-6 py-2.5 rounded-full bg-[#006747] hover:bg-[#005238] font-bold text-xs text-white shadow-xs"
              >
                Go to Portal Dashboard
              </Link>
              <Link
                to="/admissions"
                className="px-5 py-2.5 rounded-full border border-slate-300 hover:bg-slate-50 font-bold text-xs text-slate-700"
              >
                Complete Full Enrollment
              </Link>
            </div>
          </div>
        ) : (
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-lg space-y-5">
            
            {/* Quick Demo Autofill */}
            <div className="bg-emerald-50/70 p-3 rounded-2xl border border-emerald-200 flex items-center justify-between text-xs">
              <span className="text-slate-600 font-medium">Testing registration?</span>
              <button
                type="button"
                onClick={handleDemoFill}
                className="px-3 py-1 rounded-lg bg-white border border-emerald-300 text-[11px] font-bold text-[#006747] hover:bg-emerald-100 transition shadow-2xs"
              >
                Auto-Fill Sample Family
              </button>
            </div>

            <form onSubmit={handleSignup} className="space-y-4">
              
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Parent Full Name *</label>
                <div className="relative">
                  <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
                  <input
                    type="text"
                    required
                    value={parentName}
                    onChange={(e) => setParentName(e.target.value)}
                    placeholder="e.g. Eleanor & David Miller"
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
                      placeholder="parent@family.com"
                      className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 text-xs focus:outline-none focus:border-[#006747]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Mobile Phone *</label>
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

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Child Name *</label>
                  <div className="relative">
                    <Baby className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
                    <input
                      type="text"
                      required
                      value={childName}
                      onChange={(e) => setChildName(e.target.value)}
                      placeholder="e.g. Leo Miller"
                      className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 text-xs focus:outline-none focus:border-[#006747]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Program Choice *</label>
                  <select
                    value={programChoice}
                    onChange={(e) => setProgramChoice(e.target.value)}
                    className="w-full px-3 py-2.5 rounded-xl border border-slate-200 text-xs bg-white focus:outline-none focus:border-[#006747]"
                  >
                    {PROGRAMS.map((p) => (
                      <option key={p.id} value={`${p.name} (${p.ageRange})`}>
                        {p.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Password *</label>
                <div className="relative">
                  <Lock className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
                  <input
                    type="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Minimum 8 characters"
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 text-xs focus:outline-none focus:border-[#006747]"
                  />
                </div>
              </div>

              <div className="pt-1">
                <label className="flex items-start gap-2 text-xs text-slate-600 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={agreeTerms}
                    onChange={(e) => setAgreeTerms(e.target.checked)}
                    required
                    className="mt-0.5 rounded text-[#006747] focus:ring-[#006747]"
                  />
                  <span>
                    I agree to the Little Sprouts Academy Family Handbook policies and security regulations.
                  </span>
                </label>
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-full bg-[#006747] hover:bg-[#005238] text-white font-bold text-xs transition shadow-xs cursor-pointer flex items-center justify-center gap-2"
              >
                <span>Create Family Account</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

            </form>

            <div className="pt-3 border-t border-slate-100 text-center">
              <p className="text-xs text-slate-500">
                Already registered?{' '}
                <Link to="/login" className="font-bold text-[#006747] hover:underline">
                  Sign In to Parent Portal
                </Link>
              </p>
            </div>

          </div>
        )}

      </div>
    </div>
  );
};
