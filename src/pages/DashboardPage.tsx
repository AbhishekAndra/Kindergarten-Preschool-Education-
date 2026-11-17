import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Mail, LogOut, Check, Send, Download } from 'lucide-react';

export const DashboardPage: React.FC = () => {
  const navigate = useNavigate();
  const [userEmail, setUserEmail] = useState<string>('eleanor.miller@family.com');
  const [userRole, setUserRole] = useState<string>('parent');
  const [activeTab, setActiveTab] = useState<'overview' | 'messages' | 'photos' | 'billing'>('overview');

  // Messages state
  const [messageInput, setMessageInput] = useState('');
  const [messages, setMessages] = useState([
    {
      sender: "Ms. Sarah Jenkins, M.Ed. (Lead Teacher)",
      time: "12:22 PM",
      text: "Hi Eleanor! Leo had a wonderful morning building the waterwheel with his classmates in the STEM garden. He ate all of his organic lunch today! 😊"
    }
  ]);

  useEffect(() => {
    const savedEmail = localStorage.getItem('stackly_user_email');
    const savedRole = localStorage.getItem('stackly_user_role');
    if (savedEmail) {
      setUserEmail(savedEmail);
    }
    if (savedRole) {
      setUserRole(savedRole);
    }
  }, []);

  const handleSignOut = () => {
    localStorage.removeItem('stackly_user_email');
    localStorage.removeItem('stackly_user_role');
    navigate('/login');
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!messageInput.trim()) return;
    setMessages([
      ...messages,
      {
        sender: `You (${userEmail})`,
        time: "Just now",
        text: messageInput.trim()
      }
    ]);
    setMessageInput('');
  };

  return (
    <div className="bg-[#fbfcfa] min-h-screen text-slate-800 pb-20">
      
      {/* 1. TOP EMAIL BANNER BAR (Prominently displaying user login email) */}
      <section className="bg-[#006747] text-white py-3.5 px-4 sm:px-6 lg:px-8 border-b border-[#005238] shadow-sm">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
          
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-300 animate-pulse" />
            <div className="flex items-center gap-2">
              <span className="text-xs uppercase tracking-wider text-emerald-200 font-bold">
                Logged in Account:
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 backdrop-blur-xs text-xs font-mono font-bold text-white border border-white/30 shadow-xs">
                <Mail className="w-3.5 h-3.5 text-emerald-300" />
                {userEmail}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3 text-xs">
            <span className="hidden md:inline text-emerald-200">
              Role: <strong className="text-white capitalize">{userRole === 'staff' ? 'Staff / Lead Educator' : 'Verified Guardian'}</strong>
            </span>
            <button
              onClick={handleSignOut}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/10 hover:bg-rose-600 text-white font-bold transition text-xs border border-white/20 cursor-pointer"
            >
              <LogOut className="w-3.5 h-3.5" />
              <span>Sign Out</span>
            </button>
          </div>

        </div>
      </section>

      {/* 2. Main Dashboard Container */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 space-y-8">
        
        {/* Student Welcome Header Card */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-2xs flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="flex items-center gap-5">
            <div className="w-20 h-20 rounded-3xl overflow-hidden border-3 border-[#006747] shadow-md shrink-0">
              <img
                src="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=300&q=80"
                alt="Child Avatar"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="space-y-1">
              <div className="flex flex-wrap items-center gap-2">
                <h1 className="text-2xl sm:text-3xl font-black text-slate-900 font-display">
                  Leo Miller
                </h1>
                <span className="px-3 py-0.5 rounded-full bg-[#e6f4ea] text-[#137333] text-xs font-bold border border-[#ceead6]">
                  Pre-K STEAM Classroom
                </span>
              </div>
              <p className="text-xs text-slate-500">
                Lead Educator: <strong>Ms. Sarah Jenkins, M.Ed.</strong> • Room: <strong>Meadowlark Nature Room (Bldg B)</strong>
              </p>
              <div className="flex items-center gap-2 text-xs text-slate-500 pt-1">
                <span>Account Email: <strong className="text-[#006747] font-mono">{userEmail}</strong></span>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center gap-3">
            <div className="bg-[#f0fdf4] p-3 rounded-2xl border border-emerald-200 text-xs text-emerald-800 space-y-1">
              <div className="font-bold flex items-center gap-1.5 text-[#006747]">
                <Check className="w-4 h-4 text-[#006747]" />
                <span>Today's Check-in: 8:15 AM</span>
              </div>
              <div className="text-[11px] text-slate-500">Authorized Pickup: Eleanor Miller, David Miller</div>
            </div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="flex items-center gap-2 border-b border-slate-200 pb-3 text-xs font-bold">
          <button
            onClick={() => setActiveTab('overview')}
            className={`px-4 py-2 rounded-full transition cursor-pointer ${
              activeTab === 'overview'
                ? 'bg-[#006747] text-white shadow-2xs'
                : 'text-slate-600 hover:bg-slate-100'
            }`}
          >
            Daily Overview
          </button>
          <button
            onClick={() => setActiveTab('messages')}
            className={`px-4 py-2 rounded-full transition cursor-pointer ${
              activeTab === 'messages'
                ? 'bg-[#006747] text-white shadow-2xs'
                : 'text-slate-600 hover:bg-slate-100'
            }`}
          >
            Teacher Chat (1 Unread)
          </button>
          <button
            onClick={() => setActiveTab('photos')}
            className={`px-4 py-2 rounded-full transition cursor-pointer ${
              activeTab === 'photos'
                ? 'bg-[#006747] text-white shadow-2xs'
                : 'text-slate-600 hover:bg-slate-100'
            }`}
          >
            Classroom Photos (12)
          </button>
          <button
            onClick={() => setActiveTab('billing')}
            className={`px-4 py-2 rounded-full transition cursor-pointer ${
              activeTab === 'billing'
                ? 'bg-[#006747] text-white shadow-2xs'
                : 'text-slate-600 hover:bg-slate-100'
            }`}
          >
            Tuition & Receipts
          </button>
        </div>

        {/* 4 Metric KPI Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-white p-5 rounded-3xl border border-slate-200 shadow-2xs">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-1">Today's Nutrition</span>
            <span className="text-2xl font-black text-[#006747] font-display">100% Lunch</span>
            <p className="text-[11px] text-slate-500 mt-0.5">Organic chicken pasta & carrots</p>
          </div>

          <div className="bg-white p-5 rounded-3xl border border-slate-200 shadow-2xs">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-1">Curriculum Focus</span>
            <span className="text-2xl font-black text-amber-600 font-display">STEAM Physics</span>
            <p className="text-[11px] text-slate-500 mt-0.5">Waterwheel run & pine twig building</p>
          </div>

          <div className="bg-white p-5 rounded-3xl border border-slate-200 shadow-2xs">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-1">Nap Sanctuary</span>
            <span className="text-2xl font-black text-sky-600 font-display">1h 45m</span>
            <p className="text-[11px] text-slate-500 mt-0.5">Rested peacefully in dim sanctuary</p>
          </div>

          <div className="bg-white p-5 rounded-3xl border border-slate-200 shadow-2xs">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-1">Tuition Status</span>
            <span className="text-2xl font-black text-emerald-600 font-display">Paid (Oct)</span>
            <p className="text-[11px] text-slate-500 mt-0.5">Next billing date: Nov 1, 2026</p>
          </div>
        </div>

        {/* Tab 1: Overview */}
        {activeTab === 'overview' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left: Live Today Timeline */}
            <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-2xs space-y-6">
              <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#006747]">Real-Time Timeline</span>
                  <h3 className="text-xl font-bold text-slate-900 font-display">Today's Classroom Stream</h3>
                </div>
                <span className="text-xs text-slate-500 font-semibold">Today • 4 Updates</span>
              </div>

              <div className="space-y-4">
                
                {/* 11:40 AM Meal */}
                <div className="flex items-start gap-3 p-4 bg-[#fbfcfa] rounded-2xl border border-slate-100">
                  <div className="w-8 h-8 rounded-full bg-amber-100 text-amber-800 flex items-center justify-center shrink-0 font-bold text-xs">
                    🍲
                  </div>
                  <div className="space-y-1 w-full text-xs">
                    <div className="flex justify-between font-bold">
                      <span className="text-slate-900">Family-Style Lunch</span>
                      <span className="text-slate-400 font-mono">11:40 AM</span>
                    </div>
                    <p className="text-slate-600 leading-relaxed">
                      Ate 100% of organic chicken pasta bake & steamed carrots. Asked for seconds of sliced peaches! Stayed hydrated with oat milk.
                    </p>
                    <span className="text-[10px] text-slate-400 block pt-1">Logged by Room Assistant Maya</span>
                  </div>
                </div>

                {/* 10:15 AM STEM */}
                <div className="flex items-start gap-3 p-4 bg-[#fbfcfa] rounded-2xl border border-slate-100">
                  <div className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0 font-bold text-xs">
                    🌱
                  </div>
                  <div className="space-y-2 w-full text-xs">
                    <div className="flex justify-between font-bold">
                      <span className="text-slate-900">STEM Discovery Garden</span>
                      <span className="text-slate-400 font-mono">10:15 AM</span>
                    </div>
                    <p className="text-slate-600 leading-relaxed">
                      Leo collaborated with his peers to build a mini waterwheel using pine twigs, birch bark, and river stones in the sensory water run.
                    </p>
                    <div className="rounded-xl overflow-hidden aspect-16/9 border border-slate-200 mt-2">
                      <img
                        src="https://images.unsplash.com/photo-1587654780291-39c9404d746b?auto=format&fit=crop&w=800&q=80"
                        alt="Classroom Activity"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>

                {/* 9:30 AM Circle */}
                <div className="flex items-start gap-3 p-4 bg-[#fbfcfa] rounded-2xl border border-slate-100">
                  <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-800 flex items-center justify-center shrink-0 font-bold text-xs">
                    📚
                  </div>
                  <div className="space-y-1 w-full text-xs">
                    <div className="flex justify-between font-bold">
                      <span className="text-slate-900">Morning Circle & Phonemic Game</span>
                      <span className="text-slate-400 font-mono">9:30 AM</span>
                    </div>
                    <p className="text-slate-600 leading-relaxed">
                      Practiced the "Sh" sound with gentle rhythm sticks. Leo enthusiastically shared his favorite golden maple leaf found on the way to school.
                    </p>
                  </div>
                </div>

              </div>
            </div>

            {/* Right: Quick Chat & Upcoming Reminders */}
            <div className="lg:col-span-5 space-y-6">
              
              {/* Teacher chat preview */}
              <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-2xs space-y-4">
                <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                  <div className="flex items-center gap-2.5">
                    <img
                      src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=100&q=80"
                      alt="Teacher"
                      className="w-10 h-10 rounded-full object-cover border"
                    />
                    <div>
                      <h4 className="font-bold text-xs text-slate-900">Ms. Sarah Jenkins, M.Ed.</h4>
                      <span className="text-[10px] text-emerald-600 font-bold">Online • Pre-K Lead</span>
                    </div>
                  </div>
                  <span className="text-[11px] text-[#006747] font-bold cursor-pointer" onClick={() => setActiveTab('messages')}>
                    Open Chat
                  </span>
                </div>

                <div className="bg-[#f8fcfa] p-3 rounded-2xl border border-slate-100 text-xs text-slate-700 space-y-1">
                  <p className="italic">"{messages[messages.length - 1]?.text}"</p>
                  <span className="text-[10px] text-slate-400 block text-right">{messages[messages.length - 1]?.time}</span>
                </div>

                <form onSubmit={handleSendMessage} className="relative">
                  <input
                    type="text"
                    value={messageInput}
                    onChange={(e) => setMessageInput(e.target.value)}
                    placeholder="Reply to Ms. Sarah..."
                    className="w-full pl-3 pr-10 py-2.5 rounded-full border border-slate-200 text-xs focus:outline-none focus:border-[#006747]"
                  />
                  <button
                    type="submit"
                    className="absolute right-1.5 top-1.5 p-1.5 rounded-full bg-[#006747] text-white hover:bg-[#005238] transition cursor-pointer"
                  >
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </form>
              </div>

              {/* Upcoming events widget */}
              <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-2xs space-y-3">
                <h4 className="font-bold text-sm text-slate-900 font-display">
                  📅 Upcoming Campus Events
                </h4>

                <div className="space-y-2 text-xs">
                  <div className="p-3 bg-[#fbfcfa] rounded-2xl border border-slate-100 flex items-center justify-between">
                    <div>
                      <span className="font-bold text-slate-900 block">Pumpkin Patch Field Trip</span>
                      <span className="text-[11px] text-slate-500">Friday, Oct 27 • Bus leaves 9:00 AM</span>
                    </div>
                    <span className="px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[10px] font-bold">
                      Permission Signed
                    </span>
                  </div>

                  <div className="p-3 bg-[#fbfcfa] rounded-2xl border border-slate-100 flex items-center justify-between">
                    <div>
                      <span className="font-bold text-slate-900 block">Parent-Teacher Conference</span>
                      <span className="text-[11px] text-slate-500">Wednesday, Nov 08 • 3:30 PM slot</span>
                    </div>
                    <span className="px-2 py-0.5 rounded-full bg-blue-100 text-blue-800 text-[10px] font-bold">
                      Confirmed
                    </span>
                  </div>
                </div>
              </div>

            </div>

          </div>
        )}

        {/* Tab 2: Messages */}
        {activeTab === 'messages' && (
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-2xs max-w-3xl mx-auto space-y-6">
            <div className="flex items-center justify-between border-b border-slate-100 pb-4">
              <div className="flex items-center gap-3">
                <img
                  src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=100&q=80"
                  alt="Ms. Sarah Jenkins"
                  className="w-12 h-12 rounded-full object-cover border-2 border-[#006747]"
                />
                <div>
                  <h3 className="font-bold text-sm sm:text-base text-slate-900">Ms. Sarah Jenkins, M.Ed.</h3>
                  <span className="text-xs text-emerald-600 font-semibold">Active Now • Pre-K Classroom</span>
                </div>
              </div>
              <span className="text-xs text-slate-400 font-mono">Room: Meadowlark</span>
            </div>

            <div className="space-y-3 min-h-64 max-h-96 overflow-y-auto pr-2">
              {messages.map((m, idx) => (
                <div
                  key={idx}
                  className={`p-4 rounded-2xl text-xs space-y-1 max-w-lg ${
                    m.sender.includes('You')
                      ? 'bg-[#006747] text-white ml-auto'
                      : 'bg-[#f4f9f6] text-slate-800 mr-auto border border-slate-100'
                  }`}
                >
                  <div className="flex justify-between text-[10px] opacity-80">
                    <span>{m.sender}</span>
                    <span>{m.time}</span>
                  </div>
                  <p className="leading-relaxed">{m.text}</p>
                </div>
              ))}
            </div>

            <form onSubmit={handleSendMessage} className="relative pt-2 border-t border-slate-100">
              <input
                type="text"
                value={messageInput}
                onChange={(e) => setMessageInput(e.target.value)}
                placeholder={`Type message from ${userEmail}...`}
                className="w-full pl-4 pr-12 py-3 rounded-full border border-slate-200 text-xs focus:outline-none focus:border-[#006747]"
              />
              <button
                type="submit"
                className="absolute right-2 top-4 p-2 rounded-full bg-[#006747] text-white hover:bg-[#005238] transition cursor-pointer"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>
        )}

        {/* Tab 3: Photos */}
        {activeTab === 'photos' && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-xl font-bold text-slate-900 font-display">Classroom Photo Gallery</h3>
                <p className="text-xs text-slate-500">12 High-resolution photos shared by lead educators this week</p>
              </div>
              <button className="px-4 py-2 rounded-full bg-[#006747] text-white text-xs font-bold shadow-xs">
                Download All Photos (Zip)
              </button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                "https://images.unsplash.com/photo-1544126592-807ade215a0b?auto=format&fit=crop&w=500&q=80",
                "https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&w=500&q=80",
                "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=500&q=80",
                "https://images.unsplash.com/photo-1587654780291-39c9404d746b?auto=format&fit=crop&w=500&q=80",
                "https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=500&q=80",
                "https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=500&q=80",
                "https://images.unsplash.com/photo-1472162072942-cd5147eb3902?auto=format&fit=crop&w=500&q=80",
                "https://images.unsplash.com/photo-1596496050827-8299e0220de1?auto=format&fit=crop&w=500&q=80",
              ].map((src, idx) => (
                <div key={idx} className="group relative rounded-2xl overflow-hidden aspect-square border border-slate-200 shadow-2xs">
                  <img src={src} alt="Classroom memory" className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="p-2 bg-white rounded-full text-slate-800 shadow-sm cursor-pointer">
                      <Download className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 4: Billing */}
        {activeTab === 'billing' && (
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-2xs max-w-3xl mx-auto space-y-6">
            <div className="flex items-center justify-between border-b border-slate-100 pb-4">
              <div>
                <h3 className="text-xl font-bold text-slate-900 font-display">Tuition & Billing Statements</h3>
                <p className="text-xs text-slate-500">Registered Account: {userEmail}</p>
              </div>
              <span className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold">
                Auto-Pay Active
              </span>
            </div>

            <div className="p-5 bg-[#f8fcfa] rounded-2xl border border-slate-200 flex items-center justify-between">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Current Monthly Statement</span>
                <div className="text-3xl font-black font-display text-slate-900 mt-0.5">$1,290.00</div>
                <span className="text-xs text-emerald-700 font-semibold">✓ Paid on October 1, 2026 via Visa •••• 4821</span>
              </div>
              <button className="px-4 py-2 rounded-full border border-slate-300 text-xs font-bold text-slate-700 hover:bg-slate-100 transition">
                Download PDF Receipt
              </button>
            </div>

            <div className="space-y-2">
              <h4 className="font-bold text-xs uppercase tracking-wider text-slate-500">Previous Invoices</h4>
              {[
                { month: "September 2026", amount: "$1,290.00", id: "INV-2026-09" },
                { month: "August 2026", amount: "$1,290.00", id: "INV-2026-08" },
                { month: "July 2026", amount: "$1,290.00", id: "INV-2026-07" },
              ].map((inv, idx) => (
                <div key={idx} className="p-3.5 bg-white rounded-xl border border-slate-100 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-slate-400">{inv.id}</span>
                    <span className="font-bold text-slate-800">{inv.month}</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="font-bold text-slate-900">{inv.amount}</span>
                    <span className="text-[#006747] font-bold cursor-pointer hover:underline">View</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </main>

    </div>
  );
};
