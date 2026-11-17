import React, { useState } from 'react';
import { Check, Phone, Send, Download, Share2 } from 'lucide-react';

export const ParentLifePage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'feed' | 'photos' | 'meals' | 'messages' | 'calendar' | 'tuition'>('feed');
  const [messageInput, setMessageInput] = useState('');
  const [messages, setMessages] = useState([
    {
      sender: "Ms. Sarah Jenkins, M.Ed.",
      time: "12:22 PM",
      text: "Hi Eleanor! Leo loved our science experiment today and made a great friend helping pass out safety goggles. 😊 He asked if he could bring his acorn collection tomorrow!"
    }
  ]);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!messageInput.trim()) return;
    setMessages([
      ...messages,
      {
        sender: "You (Eleanor Miller)",
        time: "Just now",
        text: messageInput.trim()
      }
    ]);
    setMessageInput('');
  };

  const sendQuickReply = (text: string) => {
    setMessages([
      ...messages,
      {
        sender: "You (Eleanor Miller)",
        time: "Just now",
        text: text
      }
    ]);
  };

  return (
    <div className="bg-[#fbfcfa] min-h-screen text-slate-800 pb-16">
      
      {/* 1. Sub-navigation Top Bar */}
      <div className="bg-white border-b border-slate-200 sticky top-20 z-30 shadow-2xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 overflow-x-auto py-3 no-scrollbar text-xs font-semibold">
            <button
              onClick={() => setActiveTab('feed')}
              className={`px-3.5 py-1.5 rounded-full flex items-center gap-1.5 shrink-0 transition cursor-pointer ${
                activeTab === 'feed'
                  ? 'bg-[#006747] text-white shadow-2xs'
                  : 'text-slate-600 hover:bg-slate-100'
              }`}
            >
              <span>● Today's Live Feed</span>
            </button>

            <button
              onClick={() => setActiveTab('photos')}
              className={`px-3.5 py-1.5 rounded-full flex items-center gap-1.5 shrink-0 transition cursor-pointer ${
                activeTab === 'photos'
                  ? 'bg-[#006747] text-white shadow-2xs'
                  : 'text-slate-600 hover:bg-slate-100'
              }`}
            >
              <span>📷 Photos & Moments</span>
            </button>

            <button
              onClick={() => setActiveTab('meals')}
              className={`px-3.5 py-1.5 rounded-full flex items-center gap-1.5 shrink-0 transition cursor-pointer ${
                activeTab === 'meals'
                  ? 'bg-[#006747] text-white shadow-2xs'
                  : 'text-slate-600 hover:bg-slate-100'
              }`}
            >
              <span>🥗 Daily Health & Meals</span>
            </button>

            <button
              onClick={() => setActiveTab('messages')}
              className={`px-3.5 py-1.5 rounded-full flex items-center gap-1.5 shrink-0 transition cursor-pointer ${
                activeTab === 'messages'
                  ? 'bg-[#006747] text-white shadow-2xs'
                  : 'text-slate-600 hover:bg-slate-100'
              }`}
            >
              <span>💬 Messages with Ms. Sarah</span>
              <span className="w-2 h-2 rounded-full bg-amber-500" />
            </button>

            <button
              onClick={() => setActiveTab('calendar')}
              className={`px-3.5 py-1.5 rounded-full flex items-center gap-1.5 shrink-0 transition cursor-pointer ${
                activeTab === 'calendar'
                  ? 'bg-[#006747] text-white shadow-2xs'
                  : 'text-slate-600 hover:bg-slate-100'
              }`}
            >
              <span>📅 School Calendar & Events</span>
            </button>

            <button
              onClick={() => setActiveTab('tuition')}
              className={`px-3.5 py-1.5 rounded-full flex items-center gap-1.5 shrink-0 transition cursor-pointer ${
                activeTab === 'tuition'
                  ? 'bg-[#006747] text-white shadow-2xs'
                  : 'text-slate-600 hover:bg-slate-100'
              }`}
            >
              <span>💳 Tuition & Invoices</span>
            </button>
          </div>
        </div>
      </div>

      {/* 2. Quick Direct Campus Contacts Bar */}
      <div className="bg-[#eef8f3] border-b border-[#d2edd9] py-2 px-4 sm:px-6 lg:px-8 text-[11px] text-[#006747] font-semibold">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-y-1 gap-x-4">
          <div className="flex items-center gap-1">
            <Check className="w-3.5 h-3.5 text-[#006747]" />
            <span>Quick Direct Campus Contacts:</span>
          </div>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-1">
            <a href="tel:5550192801" className="hover:underline">Lead Teacher (Ms. Sarah): (555) 019-2801</a>
            <a href="tel:5550192809" className="hover:underline">Nurse Station (Nurse Clara): (555) 019-2809</a>
            <a href="tel:5550192800" className="hover:underline">Main Campus Office: (555) 019-2800</a>
          </div>
        </div>
      </div>

      {/* 3. Student Profile Header Card */}
      <section className="pt-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="bg-white rounded-3xl p-5 sm:p-6 border border-slate-200 shadow-2xs flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-2xl overflow-hidden border-2 border-emerald-500 shrink-0">
              <img
                src="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=200&q=80"
                alt="Leo Miller"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-2xl font-black text-slate-900 font-display">Leo Miller</h1>
                <span className="px-2.5 py-0.5 rounded-full bg-[#e0f2fe] text-[#0369a1] text-xs font-bold">
                  Age 4 • Pre-K Classroom
                </span>
              </div>
              <p className="text-xs text-slate-500 mt-0.5">
                Lead Educator: <strong>Ms. Sarah Jenkins, M.Ed.</strong> • Room: <strong>Meadowlark Nature Room (Building B)</strong>
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center gap-3">
            <div className="px-3.5 py-1.5 rounded-full bg-[#e6f4ea] text-[#137333] border border-[#ceead6] text-xs font-bold flex items-center gap-1.5">
              <Check className="w-4 h-4 text-[#137333]" />
              <span>Checked In: 8:15 AM (by Mom Eleanor)</span>
            </div>
            <span className="text-[11px] text-slate-500">
              Authorized Pickups: <strong>Eleanor Miller, David Miller, Grandparent Claire</strong>
            </span>
          </div>
        </div>
      </section>

      {/* 4. Main 2-Column Feed & Widget Grid */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Today's Live Feed */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-2xs space-y-6">
            <div className="flex items-center justify-between border-b border-slate-100 pb-4">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#006747]">Real-Time Daily Rhythm</span>
                <h2 className="text-xl font-bold text-slate-900 font-display">Today's Live Feed</h2>
              </div>
              <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-bold">
                Wednesday, Oct 23
              </span>
            </div>

            <div className="space-y-6">
              
              {/* Event 1: Lunch */}
              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-full bg-[#fff0e6] text-[#b45309] flex items-center justify-center shrink-0 text-sm font-bold mt-0.5">
                  🍲
                </div>
                <div className="space-y-1 w-full bg-[#fbfcfa] p-4 rounded-2xl border border-slate-100">
                  <div className="flex items-center justify-between text-xs font-bold">
                    <span className="text-slate-900 font-display">Family-Style Lunch</span>
                    <span className="text-slate-400 font-mono">11:40 AM</span>
                  </div>
                  <span className="inline-block px-2 py-0.5 rounded-full bg-[#e6f4ea] text-[#137333] text-[10px] font-bold">
                    Ate 100% of Lunch
                  </span>
                  <p className="text-xs text-slate-600 leading-relaxed pt-1">
                    Ate 100% of organic chicken pasta bake & steamed carrots. Asked for seconds of sliced peaches! Stayed hydrated with oat milk.
                  </p>
                  <span className="text-[10px] text-slate-400 block pt-1">Logged by Room Assistant Maya</span>
                </div>
              </div>

              {/* Event 2: STEM Discovery Garden with Photo */}
              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-full bg-[#e6f4ea] text-[#137333] flex items-center justify-center shrink-0 text-sm font-bold mt-0.5">
                  🌱
                </div>
                <div className="space-y-2 w-full bg-[#fbfcfa] p-4 rounded-2xl border border-slate-100">
                  <div className="flex items-center justify-between text-xs font-bold">
                    <span className="text-slate-900 font-display">STEM Discovery Garden</span>
                    <span className="text-slate-400 font-mono">10:15 AM</span>
                  </div>
                  <span className="inline-block px-2 py-0.5 rounded-full bg-[#e0f2fe] text-[#0369a1] text-[10px] font-bold">
                    Curriculum Milestone: Inquiry & Physics
                  </span>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Leo collaborated with his peers to build a mini waterwheel using pine twigs, birch bark, and river stones in the sensory water run. Captured 3 high-res photos!
                  </p>
                  
                  {/* Embedded photo */}
                  <div className="rounded-xl overflow-hidden aspect-16/9 border border-slate-200 mt-2">
                    <img
                      src="https://images.unsplash.com/photo-1587654780291-39c9404d746b?auto=format&fit=crop&w=800&q=80"
                      alt="Leo in classroom"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* Event 3: Morning Circle */}
              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-full bg-[#e0f2fe] text-[#0369a1] flex items-center justify-center shrink-0 text-sm font-bold mt-0.5">
                  📚
                </div>
                <div className="space-y-1 w-full bg-[#fbfcfa] p-4 rounded-2xl border border-slate-100">
                  <div className="flex items-center justify-between text-xs font-bold">
                    <span className="text-slate-900 font-display">Morning Circle & Phonemic Game</span>
                    <span className="text-slate-400 font-mono">9:30 AM</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Practiced the "Sh" sound with gentle rhythm sticks. Leo enthusiastically shared his favorite golden maple leaf found on the way to school and articulated its bright, amber color.
                  </p>
                </div>
              </div>

              {/* Event 4: Breakfast & Free Play */}
              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-full bg-[#fef3c7] text-[#92400e] flex items-center justify-center shrink-0 text-sm font-bold mt-0.5">
                  🥣
                </div>
                <div className="space-y-1 w-full bg-[#fbfcfa] p-4 rounded-2xl border border-slate-100">
                  <div className="flex items-center justify-between text-xs font-bold">
                    <span className="text-slate-900 font-display">Breakfast & Free Play</span>
                    <span className="text-slate-400 font-mono">8:30 AM</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Whole grain oatmeal with wildflower honey and blueberries. Spent 20 minutes constructing an elevated train bridge in the building station.
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Teacher Chat, Reminders & Security */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Teacher Chat Box */}
            <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-2xs space-y-4">
              <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                <div className="flex items-center gap-2.5">
                  <img
                    src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=100&q=80"
                    alt="Ms. Sarah Jenkins"
                    className="w-10 h-10 rounded-full object-cover border"
                  />
                  <div>
                    <h4 className="font-bold text-xs text-slate-900">Ms. Sarah Jenkins, M.Ed.</h4>
                    <span className="text-[11px] text-emerald-600 font-bold flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                      Lead Room Educator • Online
                    </span>
                  </div>
                </div>
                <Phone className="w-4 h-4 text-slate-400 cursor-pointer" />
              </div>

              {/* Chat Thread */}
              <div className="space-y-3 max-h-56 overflow-y-auto pr-1">
                {messages.map((msg, idx) => (
                  <div key={idx} className={`p-3 rounded-2xl text-xs space-y-1 ${
                    msg.sender.includes('You')
                      ? 'bg-[#006747] text-white ml-6'
                      : 'bg-[#f4f9f6] text-slate-800 border border-slate-100 mr-6'
                  }`}>
                    <div className="flex items-center justify-between text-[10px] opacity-80">
                      <span>{msg.sender}</span>
                      <span>{msg.time}</span>
                    </div>
                    <p className="leading-relaxed">{msg.text}</p>
                  </div>
                ))}
              </div>

              {/* Quick Reply Pills */}
              <div className="flex flex-wrap gap-1.5 pt-1">
                {["Thank you! ❤️", "Will pickup at 4:30 today", "Running 10 mins late"].map((reply, i) => (
                  <button
                    key={i}
                    onClick={() => sendQuickReply(reply)}
                    className="px-2.5 py-1 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 text-[11px] font-semibold transition cursor-pointer"
                  >
                    {reply}
                  </button>
                ))}
              </div>

              {/* Input */}
              <form onSubmit={handleSendMessage} className="relative pt-1">
                <input
                  type="text"
                  value={messageInput}
                  onChange={(e) => setMessageInput(e.target.value)}
                  placeholder="Type a message to Ms. Sarah..."
                  className="w-full pl-4 pr-10 py-2.5 rounded-full border border-slate-200 text-xs focus:outline-none focus:border-[#006747]"
                />
                <button
                  type="submit"
                  className="absolute right-1.5 top-2.5 p-1.5 rounded-full bg-[#006747] text-white hover:bg-[#005238] transition cursor-pointer"
                >
                  <Send className="w-3.5 h-3.5" />
                </button>
              </form>
            </div>

            {/* Upcoming Dates & Reminders */}
            <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-2xs space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="font-bold text-sm text-slate-900 font-display flex items-center gap-2">
                  <span>📅 Upcoming Dates & Reminders</span>
                </h3>
                <span className="text-[11px] font-bold text-[#006747] cursor-pointer hover:underline">Full Calendar</span>
              </div>

              <div className="space-y-2.5">
                <div className="p-3 bg-[#fbfcfa] rounded-2xl border border-slate-100 flex items-center justify-between gap-3 text-xs">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-amber-100 text-[#b45309] font-bold flex flex-col items-center justify-center shrink-0">
                      <span className="text-[9px] uppercase">Oct</span>
                      <span className="text-xs font-black">27</span>
                    </div>
                    <div>
                      <h5 className="font-bold text-slate-900">Pumpkin Patch Field Trip</h5>
                      <span className="text-[11px] text-slate-500">Friday. Please dress in rain boots and warm weather layers. Bus departs at 9:00 AM.</span>
                    </div>
                  </div>
                  <span className="px-2 py-0.5 rounded-full bg-[#e6f4ea] text-[#137333] text-[10px] font-bold shrink-0">
                    Signed
                  </span>
                </div>

                <div className="p-3 bg-[#fbfcfa] rounded-2xl border border-slate-100 flex items-center justify-between gap-3 text-xs">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-sky-100 text-[#0369a1] font-bold flex flex-col items-center justify-center shrink-0">
                      <span className="text-[9px] uppercase">Nov</span>
                      <span className="text-xs font-black">08</span>
                    </div>
                    <div>
                      <h5 className="font-bold text-slate-900">Fall Parent-Teacher Conferences</h5>
                      <span className="text-[11px] text-slate-500">30 minute one-on-one developmental review with Ms. Sarah. Your slot: 3:30 PM.</span>
                    </div>
                  </div>
                </div>

                <div className="p-3 bg-[#fbfcfa] rounded-2xl border border-slate-100 flex items-center justify-between gap-3 text-xs">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-rose-100 text-[#b91c1c] font-bold flex flex-col items-center justify-center shrink-0">
                      <span className="text-[9px] uppercase">Nov</span>
                      <span className="text-xs font-black">11</span>
                    </div>
                    <div>
                      <h5 className="font-bold text-slate-900">Closed for Professional Day</h5>
                      <span className="text-[11px] text-slate-500">Annual NAEYC early educator certification and curriculum planning workshop.</span>
                    </div>
                  </div>
                  <span className="px-2 py-0.5 rounded-full bg-[#fee2e2] text-[#b91c1c] text-[10px] font-bold shrink-0">
                    Campus Closed
                  </span>
                </div>
              </div>
            </div>

            {/* Security Card */}
            <div className="bg-[#e6f4ea] p-4 rounded-2xl border border-[#ceead6] text-xs text-[#137333] flex items-center gap-3">
              <span className="text-2xl">🔒</span>
              <div>
                <strong className="block font-display">State Board Licensed & NAEYC Accredited</strong>
                <span className="text-[11px] text-slate-600">Strict 1:7 educator to child ratio maintained today. Secure digital PIN check-in active.</span>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 5. Recent Moments Section */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <div>
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#006747]">Classroom Memories</span>
            <h3 className="text-2xl font-bold text-slate-900 font-display">Recent Moments</h3>
          </div>
          <button className="px-4 py-2 rounded-full border border-slate-300 text-xs font-bold text-slate-700 hover:bg-slate-100 transition flex items-center gap-1.5 cursor-pointer">
            <Download className="w-3.5 h-3.5" />
            <span>Download Full Album</span>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              title: "Finger painting color theory",
              desc: "Exploring yellow & blue blending to make pasture green.",
              tag: "Today",
              photosCount: "3 Photos",
              img: "https://images.unsplash.com/photo-1544126592-807ade215a0b?auto=format&fit=crop&w=600&q=80"
            },
            {
              title: "Building blocks engineering",
              desc: "Constructing balanced arches and testing weight tolerances.",
              tag: "Yesterday",
              photosCount: "6 Photos",
              img: "https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&w=600&q=80"
            },
            {
              title: "Outdoor tricycle obstacle course",
              desc: "Gross motor agility and courteous roadway etiquette.",
              tag: "Oct 20",
              photosCount: "4 Photos",
              img: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=600&q=80"
            }
          ].map((moment, idx) => (
            <div key={idx} className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-2xs">
              <div className="relative aspect-4/3 overflow-hidden">
                <img src={moment.img} alt={moment.title} className="w-full h-full object-cover" />
                <span className="absolute top-3 left-3 bg-white/95 px-2.5 py-1 rounded-full text-[10px] font-bold text-slate-900 shadow-xs">
                  {moment.tag}
                </span>
              </div>
              <div className="p-5">
                <h4 className="font-bold text-sm text-slate-900 font-display mb-1">{moment.title}</h4>
                <p className="text-xs text-slate-500 leading-relaxed mb-4">{moment.desc}</p>
                <div className="flex items-center justify-between text-xs text-slate-400 border-t border-slate-100 pt-3">
                  <span>{moment.photosCount}</span>
                  <Share2 className="w-3.5 h-3.5 hover:text-slate-700 cursor-pointer" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};
