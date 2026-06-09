'use client';

import Link from 'next/link';
import { useCart } from '@/context/CartContext';

export default function CartPage() {
  const { cart, removeFromCart, clearCart, getCartTotal, getCartCount } = useCart();

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-stone-800 py-12 px-4 sm:px-6 lg:px-8 font-sans mt-20 selection:bg-[#E3ECE6] selection:text-[#3A4D3F]">
      <div className="max-w-4xl mx-auto space-y-8">
        
        {/* 📟 BOTANICAL NAVIGATION HEAD */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-stone-200/60 pb-6">
          <Link href="/products" className="text-xs font-medium text-[#4E6151] uppercase tracking-wider hover:text-[#3D4E40] transition-colors flex items-center gap-1.5">
            <span>←</span> Return to Collection
          </Link>
          <div className="text-left sm:text-right">
            <div className="text-[11px] text-[#A69276] tracking-[0.15em] font-medium uppercase">Verified Atelier Session</div>
            <h1 className="text-xl sm:text-2xl font-serif font-light tracking-wide text-stone-900">
              Shopping <span className="text-[#4E6151] font-normal">Bag</span>
            </h1>
          </div>
        </div>

        {cart.length === 0 ? (
          /* ❌ EMPTY RITUAL STATE UI */
          <div className="text-center py-24 border border-dashed border-[#DCD7CE] bg-white rounded-2xl space-y-5 p-6 shadow-[0_4px_20px_rgba(0,0,0,0.01)]">
            <div className="text-[#A69276] text-xs font-medium tracking-wider uppercase">Your Selection is Empty</div>
            <p className="text-sm text-stone-500 max-w-xs mx-auto tracking-wide">
              No active botanical components or lifestyle items are staging in your private tray.
            </p>
            <Link 
              href="/products" 
              className="inline-block bg-[#4E6151] text-white text-xs font-semibold uppercase tracking-widest px-6 py-3.5 rounded-xl hover:bg-[#3D4E40] transition-all duration-300 shadow-sm"
            >
              Explore Formulas
            </Link>
          </div>
        ) : (
          /* ⚡ ACTIVE INVOICE PROCESSING ENGINE */
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            
            {/* Left Column: Core Items Matrix Pipeline */}
            <div className="lg:col-span-2 space-y-4">
              <div className="text-[11px] text-[#607262] font-medium tracking-wider uppercase pl-1">Allocated Batch Items</div>
              
              {cart.map((item) => (
                <div 
                  key={item.id} 
                  className="group flex items-center gap-4 bg-white border border-[#EBE7E0] p-4 rounded-xl shadow-[0_2px_12px_rgba(0,0,0,0.01)] transition-all duration-300 hover:border-[#4E6151]"
                >
                  {/* Aspect Media Preview Box */}
                  <div className="w-16 h-16 bg-[#FAF8F5] border border-[#EBE7E0] overflow-hidden flex-shrink-0 rounded-lg">
                    <img src={item.image} alt={item.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  </div>

                  {/* Operational Product Identity Parameters */}
                  <div className="flex-1 min-w-0 space-y-1">
                    <h2 className="text-sm font-serif font-medium text-stone-900 truncate tracking-wide group-hover:text-[#4E6151] transition-colors">
                      {item.title}
                    </h2>
                    <div className="text-xs text-stone-500">
                      Price: <span className="text-stone-800 font-medium">${item.price.toFixed(2)}</span> <span className="text-stone-300 mx-1">|</span> Qty: <span className="text-stone-800 font-medium">{item.quantity}</span>
                    </div>
                  </div>

                  {/* Destruct Command Controller */}
                  <button 
                    onClick={() => removeFromCart(item.id)}
                    className="px-3 py-1.5 border border-[#EBE7E0] rounded-lg text-xs font-medium text-stone-400 hover:border-red-200 hover:text-red-600 hover:bg-red-50/50 transition-all duration-200 cursor-pointer"
                  >
                    Remove
                  </button>
                </div>
              ))}

              {/* Reset Session Node */}
              <div className="pt-2">
                <button 
                  onClick={clearCart}
                  className="text-xs text-stone-400 hover:text-red-600 font-medium transition-colors flex items-center gap-1.5 pl-1 cursor-pointer"
                >
                  <span>×</span> Clear Entire Selection
                </button>
              </div>
            </div>

            {/* Right Column: Financial Calculation Matrix Ledger */}
            <div className="space-y-4">
              <div className="text-[11px] text-[#607262] font-medium tracking-wider uppercase pl-1">Order Summary</div>
              
              <div className="bg-white border border-[#EBE7E0] p-6 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.02)] lg:sticky lg:top-28 space-y-6">
                <div className="space-y-3 text-xs border-b border-stone-100 pb-4">
                  <div className="flex justify-between text-stone-500">
                    <span>Total Items:</span>
                    <span className="text-stone-800 font-medium">{getCartCount()} items</span>
                  </div>
                  <div className="flex justify-between text-stone-500">
                    <span>Shipping Fee:</span>
                    <span className="text-emerald-700 font-medium bg-emerald-50 px-2 py-0.5 rounded text-[11px]">Complimentary</span>
                  </div>
                </div>

                {/* Net Invoiced Pricing Node */}
                <div className="flex items-baseline justify-between">
                  <span className="text-xs text-stone-600 font-medium uppercase tracking-wider">Estimated Total:</span>
                  <span className="text-xl font-serif font-semibold text-stone-900">${getCartTotal().toFixed(2)}</span>
                </div>

                {/* Final Protocol Checkout Trigger (Converted Button to Link) */}
                <Link 
                  href="/checkout" 
                  className="block w-full py-3.5 text-center text-xs font-semibold bg-[#4E6151] text-white uppercase tracking-widest transition-all duration-300 hover:bg-[#3D4E40] cursor-pointer shadow-sm rounded-xl active:scale-98"
                >
                  Proceed to Checkout
                </Link>
              </div>
            </div>

          </div>
        )}

      </div>
    </div>
  );
}