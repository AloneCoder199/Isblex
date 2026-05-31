"use client";
import React from 'react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#0A0A0A] text-[#F8FAFC] pt-16 pb-28 md:pb-12 px-4 md:px-8 border-t border-[#1E293B] relative z-10">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* MAIN GRID ARCHITECTURE */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          
          {/* COLUMN 1: BRAND LOGO & TAGLINE */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <span className="text-base font-bold tracking-[0.25em] text-[#F8FAFC]">ISBLEX</span>
              <span className="text-[9px] font-mono text-[#22D3EE]">STORE</span>
            </div>
            <p className="text-xs text-[#94A3B8] font-light leading-relaxed max-w-xs">
              Premium premium lighting architectures designed to transform your physical workspace into a high-end digital matrix.
            </p>
          </div>

          {/* COLUMN 2: QUICK NAVIGATION */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono tracking-widest text-[#475569] uppercase">// Navigation</h4>
            <ul className="space-y-2 text-xs font-light text-[#94A3B8]">
              <li>
                <button onClick={() => handleScroll('hero')} className="hover:text-[#22D3EE] transition-colors">Home</button>
              </li>
              <li>
                <button onClick={() => handleScroll('why-isblex')} className="hover:text-[#22D3EE] transition-colors">About Us</button>
              </li>
              <li>
                <button onClick={() => handleScroll('products-section')} className="hover:text-[#22D3EE] transition-colors">Products</button>
              </li>
              <li>
                <button onClick={() => handleScroll('faq')} className="hover:text-[#22D3EE] transition-colors">FAQs</button>
              </li>
            </ul>
          </div>

          {/* COLUMN 3: CUSTOMER SUPPORT */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono tracking-widest text-[#475569] uppercase">// Support</h4>
            <ul className="space-y-2 text-xs font-light text-[#94A3B8]">
              <li className="hover:text-[#22D3EE] cursor-pointer transition-colors">Contact Support</li>
              <li className="hover:text-[#22D3EE] cursor-pointer transition-colors">Track Order</li>
              <li className="hover:text-[#22D3EE] cursor-pointer transition-colors">Shipping & Returns</li>
              <li className="hover:text-[#22D3EE] cursor-pointer transition-colors">Warranty Claim</li>
            </ul>
          </div>

          {/* COLUMN 4: LEGAL PIPELINE */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono tracking-widest text-[#475569] uppercase">// Legal Node</h4>
            <ul className="space-y-2 text-xs font-light text-[#94A3B8]">
              <li className="hover:text-[#22D3EE] cursor-pointer transition-colors">Privacy Policy</li>
              <li className="hover:text-[#22D3EE] cursor-pointer transition-colors">Terms of Service</li>
              <li className="hover:text-[#22D3EE] cursor-pointer transition-colors">Refund Protocol Claim</li>
            </ul>
          </div>

        </div>

        {/* BOTTOM UTILITY BAR */}
        <div className="pt-8 border-t border-[#1E293B]/40 flex flex-col sm:flex-row items-center justify-between gap-4">
          
          {/* COPYRIGHT NOTE */}
          <p className="text-[11px] font-light text-[#475569] tracking-wide text-center sm:text-left">
            &copy; {currentYear} ISBLEX Systems. All configuration rights reserved.
          </p>

          {/* TRUSTED TRUST SECURE BADGES / PAYMENT METHOD PLACEHOLDERS */}
          <div className="flex items-center gap-3 opacity-40 hover:opacity-70 transition-opacity">
            <span className="text-[9px] font-mono text-[#64748B] uppercase tracking-widest mr-2">Secure Gateway:</span>
            {/* Visa Placeholder */}
            <div className="px-2 py-0.5 border border-[#1E293B] rounded text-[9px] font-bold font-mono text-[#94A3B8]">VISA</div>
            {/* Mastercard Placeholder */}
            <div className="px-2 py-0.5 border border-[#1E293B] rounded text-[9px] font-bold font-mono text-[#94A3B8]">MC</div>
            {/* Stripe / Apple Pay Placeholder */}
            <div className="px-2 py-0.5 border border-[#1E293B] rounded text-[9px] font-bold font-mono text-[#94A3B8]">APAY</div>
          </div>

        </div>

      </div>
    </footer>
  );
}