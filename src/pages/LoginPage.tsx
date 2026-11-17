import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Mail, Lock, Eye, EyeOff, ShieldCheck, Check, Clock, Camera, MessageSquare, DollarSign, HelpCircle } from 'lucide-react';
import { SCHOOL_INFO } from '../data/preschoolData';

export const LoginPage: React.FC = () => {
  const [portalType, setPortalType] = useState<'parent' | 'staff'>('parent');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(true);
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    const finalEmail = email.trim() || (portalType === 'parent' ? 'eleanor.miller@family.com' : 'sarah.jenkins@littlesprouts.edu');
    localStorage.setItem('stackly_user_email', finalEmail);
    localStorage.setItem('stackly_user_role', portalType);
    navigate('/dashboard');
  };

  const handleDemoParent = () => {
    setEmail('eleanor.miller@family.com');
    setPassword('SproutParent2026!');
  };

  const handleDemoStaff = () => {
    setPortalType('staff');
    setEmail('sarah.jenkins@littlesprouts.edu');
    setPassword('LeadEducator2026!');
  };

  const handleInstantAuth = (provider: string) => {
    const authEmail = email.trim() || (provider === 'Google' ? 'guardian.google@family.com' : 'biometric.user@family.com');
    localStorage.setItem('stackly_user_email', authEmail);
    localStorage.setItem('stackly_user_role', portalType);
    navigate('/dashboard');
  };

  return (
    <div className="bg-[#fbfcfa] min-h-screen text-slate-800">
      
      {/* Main Login Screen */}
      <section className="pt-10 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Feature List & Playground Image */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Top pill */}
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#ffedd5] text-[#9a3412] text-xs font-bold uppercase tracking-wider">
              <span>Family & Educator Portal</span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-[1.15] font-display">
              Welcome to your family's daily window into{' '}
              <span className="text-[#006747]">Stackly Academy</span>
            </h1>

            {/* Subtitle */}
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-xl">
              Stay immersed in your child's emotional growth, milestone milestones, and gentle classroom rhythms with real-time updates and secure two-way educator communication.
            </p>

            {/* 4 Feature Pills in 2x2 grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="p-3.5 bg-white rounded-2xl border border-slate-200 shadow-2xs flex items-start gap-3">
                <div className="p-2 rounded-xl bg-blue-50 text-blue-600 shrink-0">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-bold text-xs text-slate-900">Daily Rhythm & Logs</h4>
                  <p className="text-[11px] text-slate-500 leading-tight mt-0.5">Nap cycles, organic meal records, and outdoor exploration times.</p>
                </div>
              </div>

              <div className="p-3.5 bg-white rounded-2xl border border-slate-200 shadow-2xs flex items-start gap-3">
                <div className="p-2 rounded-xl bg-amber-50 text-amber-600 shrink-0">
                  <Camera className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-bold text-xs text-slate-900">Classroom Moments</h4>
                  <p className="text-[11px] text-slate-500 leading-tight mt-0.5">Private high-resolution photo journals shared by lead educators.</p>
                </div>
              </div>

              <div className="p-3.5 bg-white rounded-2xl border border-slate-200 shadow-2xs flex items-start gap-3">
                <div className="p-2 rounded-xl bg-emerald-50 text-emerald-600 shrink-0">
                  <MessageSquare className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-bold text-xs text-slate-900">1-on-1 Direct Messaging</h4>
                  <p className="text-[11px] text-slate-500 leading-tight mt-0.5">Warm, discreet updates directly with your child's primary teacher.</p>
                </div>
              </div>

              <div className="p-3.5 bg-white rounded-2xl border border-slate-200 shadow-2xs flex items-start gap-3">
                <div className="p-2 rounded-xl bg-rose-50 text-rose-600 shrink-0">
                  <DollarSign className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-bold text-xs text-slate-900">Tuition & Pickups</h4>
                  <p className="text-[11px] text-slate-500 leading-tight mt-0.5">Automated billing, instant tax receipts, and authorized pickup lists.</p>
                </div>
              </div>
            </div>

            {/* Playground Picture from Design */}
            <div className="rounded-3xl overflow-hidden aspect-16/9 border border-slate-200 shadow-md">
              <img
                src="https://images.unsplash.com/photo-1526976668912-1a811878dd37?auto=format&fit=crop&w=800&q=80"
                alt="Preschool playground with little cars"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap items-center gap-2 pt-2 text-xs font-semibold text-slate-600">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-slate-200 text-slate-700 shadow-2xs">
                <Check className="w-3.5 h-3.5 text-[#006747]" />
                NAEYC Accredited
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-slate-200 text-slate-700 shadow-2xs">
                <Check className="w-3.5 h-3.5 text-[#006747]" />
                State Childcare Compliant
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-slate-200 text-slate-700 shadow-2xs">
                <Lock className="w-3.5 h-3.5 text-[#006747]" />
                256-Bit SSL Encrypted
              </span>
            </div>

          </div>

          {/* Right Column: Portal Login Card */}
          <div className="lg:col-span-6">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xl space-y-6">
              
              {/* Role Toggle Pill Switcher */}
              <div className="bg-[#f1f5f9] p-1 rounded-full grid grid-cols-2 gap-1 text-xs font-bold">
                <button
                  type="button"
                  onClick={() => setPortalType('parent')}
                  className={`py-2 px-4 rounded-full transition flex items-center justify-center gap-1.5 cursor-pointer ${
                    portalType === 'parent'
                      ? 'bg-white text-slate-900 shadow-xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  <span>👥 Parent / Guardian Login</span>
                </button>

                <button
                  type="button"
                  onClick={() => setPortalType('staff')}
                  className={`py-2 px-4 rounded-full transition flex items-center justify-center gap-1.5 cursor-pointer ${
                    portalType === 'staff'
                      ? 'bg-white text-slate-900 shadow-xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  <span>💼 Staff / Educator Portal</span>
                </button>
              </div>

              {/* Header */}
              <div>
                <h2 className="text-2xl font-black text-slate-900 font-display">
                  Welcome Back, {portalType === 'parent' ? 'Families' : 'Educators'}
                </h2>
                <p className="text-xs text-slate-500 mt-1">
                  Sign in to access your child's daily feed and classroom updates
                </p>
              </div>

              {/* 1-Click Demo Buttons for Instant Review */}
              <div className="bg-emerald-50/70 p-3 rounded-2xl border border-emerald-200 flex items-center justify-between text-xs">
                <span className="font-bold text-[#006747]">⚡ Fast Demo Login:</span>
                <div className="flex gap-2">
                  <button
                    type="button"
                    onClick={handleDemoParent}
                    className="px-2.5 py-1 bg-white border border-emerald-300 rounded-lg font-bold text-[11px] text-[#006747] hover:bg-emerald-100"
                  >
                    Fill Parent
                  </button>
                  <button
                    type="button"
                    onClick={handleDemoStaff}
                    className="px-2.5 py-1 bg-white border border-emerald-300 rounded-lg font-bold text-[11px] text-[#006747] hover:bg-emerald-100"
                  >
                    Fill Teacher
                  </button>
                </div>
              </div>

              {/* Form */}
              <form onSubmit={handleLogin} className="space-y-4">
                
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Email Address or Guardian ID
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                    <input
                      type="text"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder={portalType === 'parent' ? "parent@family.com" : "educator@littlesprouts.edu"}
                      className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 text-xs focus:outline-none focus:border-[#006747]"
                    />
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-1">
                    <label className="block text-xs font-bold text-slate-700">
                      Password / Guardian PIN
                    </label>
                    <a href="#reset" onClick={(e) => { e.preventDefault(); alert("PIN reset instructions sent to your registered phone!"); }} className="text-[11px] font-bold text-[#006747] hover:underline">
                      Reset PIN or Password?
                    </a>
                  </div>
                  <div className="relative">
                    <Lock className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                    <input
                      type={showPassword ? "text" : "password"}
                      required
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="••••••••••••"
                      className="w-full pl-10 pr-10 py-2.5 rounded-xl border border-slate-200 text-xs focus:outline-none focus:border-[#006747]"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3.5 top-3.5 text-slate-400 hover:text-slate-600"
                    >
                      {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </button>
                  </div>
                </div>

                <div className="flex items-center gap-2 pt-1">
                  <input
                    type="checkbox"
                    id="remember"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                    className="w-4 h-4 rounded text-[#006747] focus:ring-[#006747]"
                  />
                  <label htmlFor="remember" className="text-xs text-slate-600 font-medium cursor-pointer">
                    Remember this device for 30 days
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full py-3 rounded-full bg-[#006747] hover:bg-[#005238] text-white font-bold text-xs transition shadow-xs flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Lock className="w-4 h-4" />
                  <span>Sign In to {portalType === 'parent' ? 'Parent Portal' : 'Staff Portal'}</span>
                </button>

              </form>

              {/* Or Authenticate Instantly */}
              <div className="relative text-center my-4">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-slate-200" />
                </div>
                <span className="relative bg-white px-3 text-[11px] text-slate-400 uppercase font-bold">
                  Or authenticate instantly via
                </span>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => handleInstantAuth('Google')}
                  className="py-2.5 px-4 rounded-xl border border-slate-200 hover:bg-slate-50 font-bold text-xs text-slate-700 flex items-center justify-center gap-2 transition cursor-pointer"
                >
                  <span className="text-sm">🌐</span>
                  <span>Google</span>
                </button>

                <button
                  type="button"
                  onClick={() => handleInstantAuth('Biometric')}
                  className="py-2.5 px-4 rounded-xl border border-slate-200 hover:bg-slate-50 font-bold text-xs text-slate-700 flex items-center justify-center gap-2 transition cursor-pointer"
                >
                  <span className="text-sm">👆</span>
                  <span>Touch / Face ID</span>
                </button>
              </div>

              {/* Callout box for new families */}
              <div className="bg-[#eef8f3] p-3.5 rounded-2xl border border-[#d2edd9] text-xs text-[#006747] flex items-start gap-2.5">
                <span className="text-base">🌱</span>
                <p className="leading-relaxed">
                  <strong>New to Little Sprouts?</strong> Check your family registration email for your invitation link, or reach our admissions team at <a href={`tel:${SCHOOL_INFO.phone}`} className="underline font-bold">{SCHOOL_INFO.phone}</a>.
                </p>
              </div>

              <div className="text-center pt-1 text-[11px] text-slate-400 flex items-center justify-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                <span>Protected by encrypted multi-factor authentication for child privacy</span>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* Portal Quick Help & Guidelines */}
      <section className="py-16 bg-[#f4f9f6] border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h3 className="text-2xl font-bold text-slate-900 font-display">
              Portal Quick Help & Guidelines
            </h3>
            <p className="text-xs text-slate-500 mt-1">
              Common solutions for smooth family communication and security checks
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-2xs">
              <div className="flex items-center gap-2 mb-2 font-bold text-xs text-slate-900">
                <HelpCircle className="w-4 h-4 text-[#006747]" />
                <span>First time logging in?</span>
              </div>
              <p className="text-xs text-slate-500 leading-relaxed">
                Every admitted household receives a one-time activation link to verify physical guardian custody before establishing custom PINs.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-2xs">
              <div className="flex items-center gap-2 mb-2 font-bold text-xs text-slate-900">
                <ShieldCheck className="w-4 h-4 text-[#006747]" />
                <span>Adding pickup authorization?</span>
              </div>
              <p className="text-xs text-slate-500 leading-relaxed">
                Once logged into your portal profile, navigate to "Safety Circle" to add emergency contacts and pre-authorize grandparent pickups with photo IDs.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-2xs">
              <div className="flex items-center gap-2 mb-2 font-bold text-xs text-slate-900">
                <Lock className="w-4 h-4 text-[#006747]" />
                <span>Forgot student check-in PIN?</span>
              </div>
              <p className="text-xs text-slate-500 leading-relaxed">
                Your 4-digit attendance terminal PIN is always visible under your account barcode, or tap "Reset PIN" to receive an instant SMS code.
              </p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};
