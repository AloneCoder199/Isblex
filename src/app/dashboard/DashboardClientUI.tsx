'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';

interface UserProps {
  user: {
    email: string;
    fullName: string;
    role: string;
    isSubscribed: boolean;
    avatar: string | null;
  };
}

export default function DashboardClientUI({ user }: UserProps) {
  const router = useRouter();
  const [isLoggingOut, setIsLoggingOut] = useState(false);

  // Logout Handler Function
  const handleLogout = async () => {
    setIsLoggingOut(true);
    try {
      const res = await fetch('/api/auth/logout', { method: 'POST' });
      if (res.ok) {
        router.refresh();
        router.push('/'); // Redirecting to home core after purge
      }
    } catch (err) {
      console.error("SYS_ERR: DISCONNECT_SEQUENCE_FAILED:", err);
    } finally {
      setIsLoggingOut(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#09090B] text-zinc-300 font-mono selection:bg-cyan-500/20 selection:text-cyan-400 mt-20">
      
      {/* ─── MAIN CONTENT MATRIX ─── */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
        
        {/* Terminal Welcoming Segment */}
        <div className="border-b border-zinc-950 pb-5 space-y-1">
          <div className="flex justify-between items-center">
            <div className="text-[9px] text-zinc-600 tracking-[0.2em] uppercase">// SECURITY_CLEARANCE_GRANTED</div>
            <div className="text-[9px] text-cyan-400 tracking-[0.2em] uppercase">ISBLEX_CORE // {user.role}</div>
          </div>
          <h1 className="text-xl sm:text-2xl font-black uppercase text-zinc-100 tracking-tight">
            WELCOME_BACK, <span className="text-cyan-400">{user.fullName.split(' ')[0]}</span>.
          </h1>
          <p className="text-[10px] text-zinc-500 tracking-wider">
            SYSTEM STATUS: OPERATIONAL // IDENTITY OVERVIEW AND PRIVILEGES SECURED.
          </p>
        </div>

        {/* ─── RESPONSIVE GRID LAYOUT ─── */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* Card 1: User Identity Core */}
          <div className="bg-[#0B0B0D] border border-zinc-900 p-6 shadow-md flex flex-col items-center text-center sm:text-left sm:flex-row sm:items-center gap-5 lg:col-span-2">
            {/* Cyber Avatar */}
            {user.avatar ? (
              <img 
                src={user.avatar} 
                alt={user.fullName} 
                className="w-20 h-20 border border-cyan-500/40 p-1 object-cover grayscale contrast-125 shadow-[0_0_15px_rgba(6,182,212,0.1)] rounded-none"
              />
            ) : (
              <div className="w-16 h-16 bg-zinc-950 border border-cyan-500/30 text-cyan-400 font-black text-xl flex items-center justify-center shadow-[0_0_15px_rgba(6,182,212,0.05)] rounded-none">
                {user.fullName.charAt(0).toUpperCase()}
              </div>
            )}

            {/* Profile Meta Stream */}
            <div className="flex-1 space-y-2">
              <div>
                <span className="text-[8px] text-zinc-600 block tracking-widest">// USER_NODENAME</span>
                <h2 className="text-md font-bold uppercase tracking-wider text-zinc-200">{user.fullName}</h2>
              </div>
              
              <div>
                <span className="text-[8px] text-zinc-600 block tracking-widest">// COM_ADDRESS_NODE</span>
                <p className="text-[11px] text-zinc-400 flex items-center justify-center sm:justify-start gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-3.5 h-3.5 text-cyan-600">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                  {user.email.toUpperCase()}
                </p>
              </div>

              <div className="pt-1">
                <span className="inline-block text-[9px] font-bold px-2 py-1 bg-zinc-950 border border-zinc-900 text-zinc-500 uppercase tracking-widest">
                  ACCESS_LEVEL: <span className="text-cyan-400">{user.role.toUpperCase()}</span>
                </span>
              </div>
            </div>
          </div>

          {/* Card 2: Newsletter Data Terminal */}
          <div className="bg-[#0B0B0D] border border-zinc-900 p-6 shadow-md flex flex-col justify-between gap-5">
            <div className="space-y-3">
              <h3 className="text-[9px] font-bold text-zinc-500 uppercase tracking-[0.2em]">
                // INTELLIGENCE_FEED
              </h3>
              
              {/* Tactical Status Badges */}
              {user.isSubscribed ? (
                <div className="inline-flex items-center gap-2 px-3 py-1.5 border border-emerald-900/50 bg-emerald-950/10 text-emerald-400 text-[10px] font-bold uppercase tracking-widest">
                  <span className="w-1.5 h-1.5 bg-emerald-500 animate-pulse"></span>
                  FEED_STREAM_ACTIVE
                </div>
              ) : (
                <div className="inline-flex items-center gap-2 px-3 py-1.5 border border-amber-900/50 bg-amber-950/10 text-amber-400 text-[10px] font-bold uppercase tracking-widest">
                  <span className="w-1.5 h-1.5 bg-amber-500"></span>
                  FEED_OFFLINE
                </div>
              )}
            </div>

            <p className="text-[10px] text-zinc-500 uppercase tracking-wider leading-relaxed">
              {user.isSubscribed 
                ? "SECURE ENCRYPTED NODE VERIFIED. YOU ARE ON THE INTERNAL SYSTEM DISTRIBUTION MATRIX FOR PRIVILEGED UPDATES."
                : "CRITICAL NETWORK WARNING: ACCESS RESTRICTED. YOU ARE CURRENTLY BYPASSING CORE INTELLIGENCE PACKETS AND SYSTEM DROPS."
              }
            </p>
          </div>

        </div>

        {/* 📊 Placeholder for Analytics Grid */}
        <div className="bg-[#09090B] border border-dashed border-zinc-900 p-12 text-center text-[10px] text-zinc-600 uppercase tracking-[0.2em] bg-zinc-950/10">
          [ AWAITING_DATA_INJECTION // MAINCORE_MODULE_GRAPHS_OFFLINE ]
        </div>

        {/* ─── 🛠️ FIXED BOTTOM TERMINATION TRAY ─── */}
        <div className="pt-6 border-t border-zinc-950 flex flex-col sm:flex-row gap-4 justify-between items-center">
          <div className="text-[9px] text-zinc-600 tracking-[0.2em] uppercase text-center sm:text-left">
            // CORE_SESSION_MANAGEMENT // SECURE_SHIELD_V2.6
          </div>
          
          {/* Logout Protocol Button Placed Nicely at Bottom */}
          <button
            onClick={handleLogout}
            disabled={isLoggingOut}
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 text-[10px] font-bold uppercase tracking-widest text-red-400 bg-red-950/10 border border-red-900/50 hover:border-red-500 hover:text-white transition-all duration-300 disabled:opacity-50 active:scale-95"
          >
            {isLoggingOut ? (
              <span className="w-3 h-3 border-2 border-red-500 border-t-transparent rounded-full animate-spin"></span>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-3.5 h-3.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6A2.25 2.25 0 005.25 5.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75" />
              </svg>
            )}
            {isLoggingOut ? '[ PURGING_SESSION... ]' : '[ TERMINATE_SESSION ]'}
          </button>
        </div>

      </main>
    </div>
  );
}