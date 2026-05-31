"use client";
import React, { useState } from 'react';

interface NavItem {
  id: string;
  label: string;
  targetId: string;
  icon: React.ReactNode;
}

export default function Navbar() {
  const [activeTab, setActiveTab] = useState<string>('home');

  const navItems: NavItem[] = [
    {
      id: 'home',
      label: 'Home',
      targetId: 'hero', // Apne Hero section ki ID yahan lagayein
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
        </svg>
      )
    },
    {
      id: 'about',
      label: 'About',
      targetId: 'why-isblex', // Apne About/Feature section ki ID yahan lagayein
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 111.063.852l-.708 2.836a.75.75 0 001.063.852l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
        </svg>
      )
    },
    {
      id: 'products',
      label: 'Products',
      targetId: 'products-section', // Apne Product Showcase section ki ID yahan lagayein
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
        </svg>
      )
    },
    {
      id: 'faq',
      label: 'FAQ',
      targetId: 'faq', // Jo FAQ Section humne pehle banaya uski ID yahan lagayein
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
        </svg>
      )
    }
  ];

  const handleScrollNavigation = (id: string, itemId: string) => {
    setActiveTab(itemId);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* ==================== PC/DESKTOP VIEW (FLOATING NAVBAR) ==================== */}
      <nav className="hidden md:flex fixed top-5 left-1/2 -translate-x-1/2 w-[calc(100%-4rem)] max-w-6xl h-16 z-50 rounded-full bg-[#0A0A0A]/70 backdrop-blur-xl border border-[#1E293B]/80 items-center justify-between px-8 shadow-[0_20px_50px_rgba(0,0,0,0.5)] transition-all">
        
        {/* LOGO */}
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => handleScrollNavigation('hero', 'home')}>
          <span className="text-sm font-bold tracking-[0.25em] text-[#F8FAFC]">ISBLEX</span>
          <span className="text-[9px] font-mono text-[#22D3EE]">STORE</span>
        </div>

        {/* CLEAN MENU */}
        <div className="flex items-center gap-1.5 bg-[#111827]/50 border border-[#1E293B]/40 p-1 rounded-full">
          {navItems.map((item) => {
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleScrollNavigation(item.targetId, item.id)}
                className={`px-6 py-2 rounded-full text-xs font-medium tracking-wide transition-all duration-300 select-none ${
                  isActive 
                    ? 'bg-[#1E293B] text-[#22D3EE] shadow-inner' 
                    : 'text-[#94A3B8] hover:text-[#F8FAFC]'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </div>

        {/* DIRECT SHOP BUTTON */}
        <button 
          onClick={() => {
            const element = document.getElementById('final-cta');
            if (element) element.scrollIntoView({ behavior: 'smooth' });
          }}
          className="px-5 py-2.5 rounded-full bg-[#F8FAFC] text-[#0A0A0A] text-[11px] font-semibold tracking-wider uppercase hover:bg-[#22D3EE] transition-all duration-300 select-none shadow-md"
        >
          Shop Now
        </button>
      </nav>


      {/* ==================== MOBILE VIEW (BOTTOM TABS) ==================== */}
      <nav className="block md:hidden fixed bottom-0 left-0 right-0 h-16 z-50 bg-[#0A0A0A]/90 backdrop-blur-xl border-t border-[#1E293B]/90 shadow-[0_-10px_30px_rgba(0,0,0,0.6)] px-4 pb-safe">
        <div className="grid grid-cols-5 h-full items-center justify-items-center w-full">
          
          {/* First 2 Tabs: Home and About */}
          {navItems.slice(0, 2).map((item) => {
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleScrollNavigation(item.targetId, item.id)}
                className="flex flex-col items-center justify-center w-full h-full relative select-none"
              >
                <div className={`transition-all duration-300 ${isActive ? 'text-[#22D3EE] scale-110' : 'text-[#475569]'}`}>
                  {item.icon}
                </div>
                <span className={`text-[10px] font-medium tracking-wide mt-1 transition-colors duration-300 ${isActive ? 'text-[#22D3EE]' : 'text-[#475569]'}`}>
                  {item.label}
                </span>
                {isActive && <span className="absolute bottom-1 w-1 h-1 rounded-full bg-[#22D3EE] shadow-[0_0_8px_#22D3EE]" />}
              </button>
            );
          })}

          {/* CENTRAL ACTION: QUICK BUY BAG TRIGGER */}
          <button
            onClick={() => {
              const element = document.getElementById('final-cta');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
            className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#22D3EE] to-[#3B82F6] flex items-center justify-center text-[#0A0A0A] shadow-[0_0_25px_rgba(34,211,238,0.4)] -translate-y-3 border-2 border-[#0A0A0A] active:scale-95 transition-transform"
          >
            {/* Bag Icon for Instant Shop */}
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
            </svg>
          </button>

          {/* Last 2 Tabs: Products and FAQ */}
          {navItems.slice(2, 4).map((item) => {
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleScrollNavigation(item.targetId, item.id)}
                className="flex flex-col items-center justify-center w-full h-full relative select-none"
              >
                <div className={`transition-all duration-300 ${isActive ? 'text-[#22D3EE] scale-110' : 'text-[#475569]'}`}>
                  {item.icon}
                </div>
                <span className={`text-[10px] font-medium tracking-wide mt-1 transition-colors duration-300 ${isActive ? 'text-[#22D3EE]' : 'text-[#475569]'}`}>
                  {item.label}
                </span>
                {isActive && <span className="absolute bottom-1 w-1 h-1 rounded-full bg-[#22D3EE] shadow-[0_0_8px_#22D3EE]" />}
              </button>
            );
          })}

        </div>
      </nav>
    </>
  );
}