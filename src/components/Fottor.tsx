"use client";
import React, { useState } from 'react';
import Image from 'next/image';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [logoError, setLogoError] = useState<boolean>(false);

  // Smooth scroll helper for sections or absolute top
  const scrollToTopOrId = (id?: string) => {
    if (id) {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        return;
      }
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0A0A0A] text-[#F8FAFC] pt-10 pb-24 md:py-10 px-4 md:px-8 border-t border-[#1E293B] relative z-10">
      <div className="max-w-7xl mx-auto space-y-8 md:space-y-10">
        
        {/* MAIN GRID ARCHITECTURE */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          
          {/* COLUMN 1: CLICKABLE BRAND LOGO & TAGLINE */}
          <div className="space-y-3">
            <div 
              className="flex items-center gap-2 cursor-pointer  select-none focus:outline-none active:scale-95 transition-transform"
              onClick={() => scrollToTopOrId()}
              title="Scroll to Top"
            >
              {!logoError ? (
                <Image
                  src="/images/isblex-logo.png"
                  alt="ISBLEX STORE Logo"
                  width={110}
                  height={28}
                  className="object-contain h-auto w-auto transition-opacity duration-200"
                  onError={() => setLogoError(true)}
                />
              ) : (
                <div className="flex items-center gap-1.5">
                  <span className="text-base font-black tracking-[0.2em] text-[#F8FAFC]">ISBLEX</span>
                  <span className="text-[10px] font-mono bg-[#1E293B] text-[#22D3EE] px-1.5 py-0.5 rounded">STORE</span>
                </div>
              )}
            </div>
            <p className="text-xs text-[#94A3B8] font-light leading-relaxed max-w-xs">
              Premium lighting architectures designed to transform your physical workspace into a high-end digital matrix.
            </p>
          </div>

          {/* COLUMN 2: QUICK NAVIGATION */}
          <div className="space-y-2.5">
            <h4 className="text-xs font-mono tracking-widest text-[#475569] uppercase">// Navigation</h4>
            <ul className="space-y-1.5 text-xs font-light text-[#94A3B8]">
              <li>
                <button onClick={() => scrollToTopOrId()} className="hover:text-[#22D3EE] transition-colors focus:outline-none">Home</button>
              </li>
              <li>
                <button onClick={() => scrollToTopOrId('why-isblex')} className="hover:text-[#22D3EE] transition-colors focus:outline-none">About Us</button>
              </li>
              <li>
                <button onClick={() => scrollToTopOrId('products-section')} className="hover:text-[#22D3EE] transition-colors focus:outline-none">Products</button>
              </li>
              <li>
                <button onClick={() => scrollToTopOrId('faq')} className="hover:text-[#22D3EE] transition-colors focus:outline-none">FAQs</button>
              </li>
            </ul>
          </div>

          {/* COLUMN 3: CUSTOMER SUPPORT */}
          <div className="space-y-2.5">
            <h4 className="text-xs font-mono tracking-widest text-[#475569] uppercase">// Support</h4>
            <ul className="space-y-1.5 text-xs font-light text-[#94A3B8]">
              <li className="hover:text-[#22D3EE] cursor-pointer transition-colors">Contact Support</li>
              <li className="hover:text-[#22D3EE] cursor-pointer transition-colors">Track Order</li>
              <li className="hover:text-[#22D3EE] cursor-pointer transition-colors">Shipping & Returns</li>
              <li className="hover:text-[#22D3EE] cursor-pointer transition-colors">Warranty Claim</li>
            </ul>
          </div>

          {/* COLUMN 4: LEGAL PIPELINE */}
          <div className="space-y-2.5">
            <h4 className="text-xs font-mono tracking-widest text-[#475569] uppercase">// Legal Node</h4>
            <ul className="space-y-1.5 text-xs font-light text-[#94A3B8]">
              <li className="hover:text-[#22D3EE] cursor-pointer transition-colors">Privacy Policy</li>
              <li className="hover:text-[#22D3EE] cursor-pointer transition-colors">Terms of Service</li>
              <li className="hover:text-[#22D3EE] cursor-pointer transition-colors">Refund Protocol Claim</li>
            </ul>
          </div>

        </div>

        {/* BOTTOM UTILITY BAR */}
        <div className="pt-6 border-t border-[#1E293B]/40 flex flex-col sm:flex-row items-center justify-between gap-4 relative">
          
          {/* COPYRIGHT NOTE */}
          <p className="text-[11px] font-light text-[#475569] tracking-wide text-center sm:text-left order-2 sm:order-1">
            &copy; {currentYear} ISBLEX Systems. All configuration rights reserved.
          </p>

          {/* TRUST BADGES & SCROLL TO TOP INTERACTION */}
          <div className="flex items-center justify-between sm:justify-end w-full sm:w-auto gap-4 order-1 sm:order-2">
            <div className="flex items-center gap-2 opacity-40 hover:opacity-70 transition-opacity">
              <span className="text-[9px] font-mono text-[#64748B] uppercase tracking-widest mr-1 hidden xs:inline">Secure:</span>
              <div className="px-1.5 py-0.5 border border-[#1E293B] rounded text-[8px] font-bold font-mono text-[#94A3B8]">VISA</div>
              <div className="px-1.5 py-0.5 border border-[#1E293B] rounded text-[8px] font-bold font-mono text-[#94A3B8]">MC</div>
              <div className="px-1.5 py-0.5 border border-[#1E293B] rounded text-[8px] font-bold font-mono text-[#94A3B8]">APAY</div>
            </div>

            {/* DYNAMIC SCROLL TO TOP ACTION BUTTON */}
            <button 
              onClick={() => scrollToTopOrId()}
              className="p-2 rounded-full border border-[#1E293B] bg-[#0A0A0A] text-[#94A3B8] hover:text-[#22D3EE] hover:border-[#22D3EE]/50 active:scale-90 transition-all duration-200 focus:outline-none group shadow-md"
              aria-label="Scroll to top"
            >
              <svg 
                className="w-4 h-4 transform group-hover:-translate-y-0.5 transition-transform duration-200" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor" 
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
              </svg>
            </button>
          </div>

        </div>

      </div>
    </footer>
  );
}