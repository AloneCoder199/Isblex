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
    <div className="min-h-screen bg-[#FDFBF7] text-[#3E2A20] font-sans selection:bg-[#8A9A86]/20 selection:text-[#3E2A20] mt-20">
      
      {/* ─── MAIN CONTENT LUXURY MATRIX ─── */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
        
        {/* Elegant Welcoming Segment */}
        <div className="border-b border-[#D0C9BC]/30 pb-6 space-y-1.5">
          <div className="flex justify-between items-center flex-wrap gap-2">
            <div className="text-[10px] font-semibold text-[#8A9A86] tracking-[0.2em] uppercase">Verified Member Account</div>
            <div className="text-[10px] font-medium text-[#C4A77D] tracking-[0.15em] uppercase">Tier // {user.role}</div>
          </div>
          <h1 className="text-2xl sm:text-3xl font-serif font-light text-[#3E2A20] tracking-wide">
            Welcome back, <span className="font-normal text-[#4F7942]">{user.fullName.split(' ')[0]}</span>
          </h1>
          <p className="text-xs text-[#A39F99] tracking-wide">
            Your premium self-care dashboard and personalized organic rituals are fully updated.
          </p>
        </div>

        {/* ─── RESPONSIVE GRID LAYOUT ─── */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* Card 1: User Identity Profile Core */}
          <div className="bg-white border border-[#EBEAE5] p-6 rounded-xl shadow-sm shadow-[#EBEAE5]/40 flex flex-col items-center text-center sm:text-left sm:flex-row sm:items-center gap-6 lg:col-span-2">
            
            {/* Premium Avatar Visual */}
            {user.avatar ? (
              <img 
                src={user.avatar} 
                alt={user.fullName} 
                className="w-20 h-20 border border-[#D0C9BC]/50 p-1 object-cover rounded-full shadow-sm"
              />
            ) : (
              <div className="w-16 h-16 shrink-0 bg-[#FDFBF7] border border-[#D0C9BC]/60 text-[#8A9A86] font-serif font-medium text-2xl flex items-center justify-center rounded-full shadow-inner">
                {user.fullName.charAt(0).toUpperCase()}
              </div>
            )}

            {/* Profile Meta Info */}
            <div className="flex-1 space-y-3">
              <div>
                <span className="text-[9px] text-[#A39F99] block font-semibold tracking-widest uppercase">Client Account</span>
                <h2 className="text-lg font-medium tracking-wide text-[#3E2A20]">{user.fullName}</h2>
              </div>
              
              <div>
                <span className="text-[9px] text-[#A39F99] block font-semibold tracking-widest uppercase">Communication Node</span>
                <p className="text-xs text-[#3E2A20]/80 flex items-center justify-center sm:justify-start gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-3.5 h-3.5 text-[#8A9A86]">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                  {user.email}
                </p>
              </div>

              <div className="pt-0.5">
                <span className="inline-block text-[9px] font-medium px-2.5 py-1 bg-[#FDFBF7] border border-[#EBEAE5] text-[#8A9A86] uppercase tracking-widest rounded-md">
                  Privilege Status: <span className="font-bold text-[#3E2A20]">{user.role.toUpperCase()}</span>
                </span>
              </div>
            </div>
          </div>

          {/* Card 2: Newsletter Botanical Drops Terminal */}
          <div className="bg-white border border-[#EBEAE5] p-6 rounded-xl shadow-sm shadow-[#EBEAE5]/40 flex flex-col justify-between gap-5">
            <div className="space-y-3">
              <h3 className="text-[10px] font-semibold text-[#8A9A86] uppercase tracking-[0.2em]">
                Botanical Journal Drops
              </h3>
              
              {/* Luxury Subscription Status Badges */}
              {user.isSubscribed ? (
                <div className="inline-flex items-center gap-2 px-3 py-1.5 border border-[#4F7942]/20 bg-[#F4F9F2] text-[#4F7942] text-[10px] font-medium uppercase tracking-widest rounded-lg">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#4F7942] animate-pulse"></span>
                  Journal Active
                </div>
              ) : (
                <div className="inline-flex items-center gap-2 px-3 py-1.5 border border-[#D14343]/20 bg-[#FFF1F1] text-[#D14343] text-[10px] font-medium uppercase tracking-widest rounded-lg">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D14343]"></span>
                  Journal Paused
                </div>
              )}
            </div>

            <p className="text-xs text-[#666666] tracking-wide leading-relaxed">
              {user.isSubscribed 
                ? "Your secure profile is linked. You are on Prifya's elite circle distribution list for private seasonal formulation drops and early access codes."
                : "Notice: You are currently skipping essential product batch drop announcements, exclusive botanical routines, and membership invitations."
              }
            </p>
          </div>

        </div>

        {/* 📊 Placeholder for Analytics / Rituals History Grid */}
        <div className="bg-white border border-dashed border-[#D0C9BC] p-12 text-center text-[11px] text-[#A39F99] uppercase tracking-[0.2em] rounded-xl shadow-inner">
          Awaiting Ritual Routine History // Analytics Offline
        </div>

        {/* ─── 🛠️ CLEAN BOTTOM TRAY ─── */}
        <div className="pt-6 border-t border-[#D0C9BC]/30 flex flex-col sm:flex-row gap-4 justify-between items-center">
          <div className="text-[10px] text-[#A39F99] tracking-[0.15em] uppercase text-center sm:text-left">
            Secure Session Protection — v2.6
          </div>
          
          {/* Elegant Sign Out Button */}
          <button
            onClick={handleLogout}
            disabled={isLoggingOut}
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 text-[10px] font-medium uppercase tracking-widest text-[#D14343] bg-transparent border border-[#D14343]/30 hover:bg-[#FFF1F1] hover:border-[#D14343] transition-all duration-300 rounded-lg disabled:opacity-50 active:scale-98 focus:outline-none"
          >
            {isLoggingOut ? (
              <span className="w-3 h-3 border-2 border-[#D14343] border-t-transparent rounded-full animate-spin"></span>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-3.5 h-3.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6A2.25 2.25 0 005.25 5.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75" />
              </svg>
            )}
            {isLoggingOut ? 'Closing Session...' : 'Sign Out Account'}
          </button>
        </div>

      </main>
    </div>
  );
}