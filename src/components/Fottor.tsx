"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [logoError, setLogoError] = useState<boolean>(false);

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
          
          <div className="space-y-3">
            <Link href="/" className="flex items-center gap-2 select-none focus:outline-none active:scale-95 transition-transform">
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
            </Link>
            <p className="text-xs text-[#94A3B8] font-light leading-relaxed max-w-xs">
              Premium lighting architectures designed to transform your physical workspace into a high-end digital matrix.
            </p>
          </div>

          <div className="space-y-2.5">
            <h4 className="text-xs font-mono tracking-widest text-[#475569] uppercase">// Navigation</h4>
            <ul className="space-y-1.5 text-xs font-light text-[#94A3B8]">
              <li><Link href="/" className="hover:text-[#22D3EE] transition-colors">Home</Link></li>
              <li><Link href="/about" className="hover:text-[#22D3EE] transition-colors">About Us</Link></li>
              <li><Link href="/products" className="hover:text-[#22D3EE] transition-colors">Products</Link></li>
              <li><Link href="/faq" className="hover:text-[#22D3EE] transition-colors">FAQs</Link></li>
            </ul>
          </div>

          <div className="space-y-2.5">
            <h4 className="text-xs font-mono tracking-widest text-[#475569] uppercase">// Support</h4>
            <ul className="space-y-1.5 text-xs font-light text-[#94A3B8]">
              <li><Link href="/contact" className="hover:text-[#22D3EE] transition-colors">Contact Support</Link></li>
              <li><Link href="/track-order" className="hover:text-[#22D3EE] transition-colors">Track Order</Link></li>
              <li><Link href="/shipping" className="hover:text-[#22D3EE] transition-colors">Shipping & Returns</Link></li>
              <li><Link href="/warranty" className="hover:text-[#22D3EE] transition-colors">Warranty Claim</Link></li>
            </ul>
          </div>

          <div className="space-y-2.5">
            <h4 className="text-xs font-mono tracking-widest text-[#475569] uppercase">// Legal Node</h4>
            <ul className="space-y-1.5 text-xs font-light text-[#94A3B8]">
              <li><Link href="/privacy" className="hover:text-[#22D3EE] transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-[#22D3EE] transition-colors">Terms of Service</Link></li>
              <li><Link href="/refunds" className="hover:text-[#22D3EE] transition-colors">Refund Protocol</Link></li>
            </ul>
          </div>
        </div>

        {/* BOTTOM UTILITY BAR */}
        <div className="pt-6 border-t border-[#1E293B]/40 flex flex-col sm:flex-row items-center justify-between gap-4 relative">
          <p className="text-[11px] font-light text-[#475569] tracking-wide text-center sm:text-left order-2 sm:order-1">
            &copy; {currentYear} ISBLEX Systems. All configuration rights reserved.
          </p>

          <div className="flex items-center justify-between sm:justify-end w-full sm:w-auto gap-4 order-1 sm:order-2">
            <div className="flex items-center gap-2 opacity-40 hover:opacity-70 transition-opacity">
              <div className="px-1.5 py-0.5 border border-[#1E293B] rounded text-[8px] font-bold font-mono text-[#94A3B8]">VISA</div>
              <div className="px-1.5 py-0.5 border border-[#1E293B] rounded text-[8px] font-bold font-mono text-[#94A3B8]">MC</div>
              <div className="px-1.5 py-0.5 border border-[#1E293B] rounded text-[8px] font-bold font-mono text-[#94A3B8]">APAY</div>
            </div>

            <button 
              onClick={() => scrollToTopOrId()}
              className="p-2 rounded-full border border-[#1E293B] bg-[#0A0A0A] text-[#94A3B8] hover:text-[#22D3EE] hover:border-[#22D3EE]/50 active:scale-90 transition-all duration-200 focus:outline-none"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}