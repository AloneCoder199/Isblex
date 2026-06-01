"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

interface NavItem {
  id: string;
  label: string;
  href: string; // targetId ki jagah href add kiya hai
  icon: React.ReactNode;
}

export default function Navbar() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<string>('home');
  const [logoError, setLogoError] = useState<boolean>(false);
  const [cartCount, setCartCount] = useState<number>(0);

  const navItems: NavItem[] = [
    {
      id: 'home',
      label: 'Home',
      href: '/',
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
        </svg>
      )
    },
    {
      id: 'products',
      label: 'Products',
      href: '/products',
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
        </svg>
      )
    },
    {
      id: 'about',
      label: 'About',
      href: '/about',
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 111.063.852l-.708 2.836a.75.75 0 001.063.852l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
        </svg>
      )
    },
    {
      id: 'contact',
      label: 'Contact',
      href: '/contact',
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 3.75H3.75a2.25 2.25 0 00-2.25 2.25v12a2.25 2.25 0 002.25 2.25h16.5a2.25 2.25 0 002.25-2.25V6a2.25 2.25 0 00-2.25-2.25zm-18 3h18.75m-18.75 3l7.682 4.61a2.25 2.25 0 002.386 0l7.682-4.61" />
        </svg>
      )
    }
  ];

  // Page navigate karwane ka function
  const handleNavigation = (href: string, itemId: string) => {
    setActiveTab(itemId);
    router.push(href);
  };

  return (
    <>
      {/* ==================== PC / DESKTOP HIGH-END FLOATING BAR ==================== */}
      <nav className="hidden md:flex fixed top-5 left-1/2 -translate-x-1/2 w-[calc(100%-4rem)] max-w-7xl h-16 z-50 rounded-full bg-[#0A0A0A]/80 backdrop-blur-md border border-[#1E293B]/70 items-center justify-between px-8 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.7)] transition-all duration-300">
        
        <div className="flex items-center cursor-pointer min-w-35" onClick={() => handleNavigation('/', 'home')}>
          {!logoError ? (
            <Image
              src="/images/isblex-logo.png"
              alt="ISBLEX STORE Logo"
              width={120}
              height={32}
              priority
              className="object-contain h-auto w-auto transition-opacity duration-200"
              onError={() => setLogoError(true)}
            />
          ) : (
            <div className="flex items-center gap-1.5 select-none">
              <span className="text-sm font-black tracking-[0.2em] text-[#F8FAFC]">ISBLEX</span>
              <span className="text-[10px] font-mono bg-[#1E293B] text-[#22D3EE] px-1.5 py-0.5 rounded">STORE</span>
            </div>
          )}
        </div>

        <div className="flex items-center gap-1 bg-[#111827]/40 border border-[#1E293B]/30 p-1 rounded-full">
          {navItems.map((item) => {
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavigation(item.href, item.id)}
                className={`px-5 py-2 rounded-full text-xs font-semibold tracking-wide transition-all duration-200 select-none ${
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

        <div className="flex items-center gap-4">
          <button className="p-2.5 relative rounded-full border border-[#1E293B]/80 text-[#94A3B8] hover:text-[#22D3EE] hover:bg-[#1E293B]/40 transition-all duration-200">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
            </svg>
            <span className="absolute -top-1 -right-1 w-4 h-4 bg-[#22D3EE] text-[#0A0A0A] text-[9px] font-black rounded-full flex items-center justify-center shadow-md animate-pulse">
              {cartCount}
            </span>
          </button>

          <button 
            onClick={() => router.push('/products')}
            className="px-5 py-2.5 rounded-full bg-[#F8FAFC] text-[#0A0A0A] text-[11px] font-bold tracking-wider uppercase hover:bg-[#22D3EE] transition-all duration-200 shadow-lg active:scale-95"
          >
            Shop Now
          </button>
        </div>
      </nav>


      {/* ==================== MOBILE PERSISTENT TOP APP BAR ==================== */}
      <div className="flex md:hidden fixed top-0 left-0 right-0 h-14 z-50 bg-[#0A0A0A]/90 backdrop-blur-md border-b border-[#1E293B]/60 items-center justify-between px-4 shadow-md">
        <div className="flex items-center cursor-pointer" onClick={() => handleNavigation('/', 'home')}>
          {!logoError ? (
            <Image
              src="/images/isblex-logo.png"
              alt="ISBLEX STORE Logo"
              width={100}
              height={28}
              priority
              className="object-contain"
              onError={() => setLogoError(true)}
            />
          ) : (
            <span className="text-sm font-black tracking-[0.15em] text-[#F8FAFC]">ISBLEX STORE</span>
          )}
        </div>
        
        <button className="p-2 relative text-[#94A3B8] active:text-[#22D3EE]">
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
          </svg>
          <span className="absolute top-0 right-0 w-3.5 h-3.5 bg-[#22D3EE] text-[#0A0A0A] text-[8px] font-black rounded-full flex items-center justify-center">
            {cartCount}
          </span>
        </button>
      </div>


      {/* ==================== MOBILE NATIVE BOTTOM TABS ==================== */}
      <nav 
        className="block md:hidden fixed bottom-0 left-0 right-0 z-50 bg-[#0A0A0A] border-t border-[#1E293B] shadow-[0_-12px_35px_rgba(0,0,0,0.8)] px-2 pt-2 transition-all duration-300"
        style={{ paddingBottom: 'calc(env(safe-area-inset-bottom, 16px) + 6px)' }}
      >
        <div className="grid grid-cols-5 h-12 items-center justify-items-center w-full max-w-lg mx-auto">
          
          {navItems.slice(0, 2).map((item) => {
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavigation(item.href, item.id)}
                className="flex flex-col items-center justify-center w-full h-full relative active:scale-95 transition-transform select-none focus:outline-none"
              >
                <div className={`transition-colors duration-200 ${isActive ? 'text-[#22D3EE]' : 'text-[#475569]'}`}>
                  {item.icon}
                </div>
                <span className={`text-[9px] font-semibold tracking-wide mt-1 transition-colors duration-200 ${isActive ? 'text-[#22D3EE]' : 'text-[#475569]'}`}>
                  {item.label}
                </span>
                {isActive && <span className="absolute -bottom-1 w-1 h-1 rounded-full bg-[#22D3EE] shadow-[0_0_8px_#22D3EE]" />}
              </button>
            );
          })}

          <button
            onClick={() => handleNavigation('/products', 'products')}
            className="w-12 h-12 rounded-full bg-linear-to-b from-[#22D3EE] to-[#0284C7] flex flex-col items-center justify-center text-[#0A0A0A] shadow-[0_0_20px_rgba(34,211,238,0.45)] -translate-y-4 border-4 border-[#0A0A0A] active:scale-90 transition-all duration-200 focus:outline-none"
          >
            <svg className="w-5 h-5 stroke-[2.5]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
            </svg>
          </button>

          {navItems.slice(2, 4).map((item) => {
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavigation(item.href, item.id)}
                className="flex flex-col items-center justify-center w-full h-full relative active:scale-95 transition-transform select-none focus:outline-none"
              >
                <div className={`transition-colors duration-200 ${isActive ? 'text-[#22D3EE]' : 'text-[#475569]'}`}>
                  {item.icon}
                </div>
                <span className={`text-[9px] font-semibold tracking-wide mt-1 transition-colors duration-200 ${isActive ? 'text-[#22D3EE]' : 'text-[#475569]'}`}>
                  {item.label}
                </span>
                {isActive && <span className="absolute -bottom-1 w-1 h-1 rounded-full bg-[#22D3EE] shadow-[0_0_8px_#22D3EE]" />}
              </button>
            );
          })}

        </div>
      </nav>
    </>
  );
}