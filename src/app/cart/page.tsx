'use client';

import Link from 'next/link';
import { useCart } from '@/context/CartContext';

export default function CartPage() {
  const { cart, removeFromCart, clearCart, getCartTotal, getCartCount } = useCart();

  return (
    <div className="min-h-screen bg-[#09090B] text-white py-12 px-4 sm:px-6 lg:px-8 font-mono mt-20">
      <div className="max-w-4xl mx-auto space-y-8">
        
        {/* 📟 TERMINAL NAVIGATION HEAD */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-zinc-950 pb-6">
          <Link href="/products" className="text-[10px] font-bold text-cyan-400 uppercase tracking-widest hover:text-cyan-300 transition-colors">
            &lt;-- RETURN_TO_CORE_CATALOG
          </Link>
          <div className="text-right">
            <div className="text-[9px] text-zinc-600 tracking-[0.2em] uppercase">// SECURE_SESSION</div>
            <h1 className="text-md sm:text-lg font-black tracking-tight uppercase text-zinc-200">
              CART_<span className="text-cyan-400">TERMINAL_PIPELINE</span>
            </h1>
          </div>
        </div>

        {cart.length === 0 ? (
          /* ❌ EMPTY MATRIX STATE UI */
          <div className="text-center py-24 border border-dashed border-zinc-900 bg-[#0B0B0D] space-y-5">
            <div className="text-zinc-600 text-xs tracking-wider">// TRANSACTION_ERR: MATRIX_PIPELINE_EMPTY</div>
            <p className="text-[11px] text-zinc-500 max-w-xs mx-auto lowercase first-letter:uppercase">
              No active data components or lighting assets found staging in your local sandbox.
            </p>
            <Link 
              href="/products" 
              className="inline-block bg-zinc-950 border border-zinc-900 text-zinc-400 text-[10px] font-bold uppercase tracking-widest px-6 py-3 hover:border-cyan-500/60 hover:text-white hover:bg-cyan-950/5 transition-all duration-300"
            >
              [LOAD_ASSET_MATRICES]
            </Link>
          </div>
        ) : (
          /* ⚡ ACTIVE INVOICE PROCESSING ENGINE */
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
            
            {/* Left Column: Core Items Matrix Pipeline */}
            <div className="lg:col-span-2 space-y-4">
              <div className="text-[9px] text-zinc-600 tracking-wider uppercase pl-1">// ALLOCATED_ASSETS_STREAM</div>
              
              {cart.map((item) => (
                <div 
                  key={item.id} 
                  className="group flex items-center gap-4 bg-[#0B0B0D] border border-zinc-900 p-4 transition-all duration-300 hover:border-cyan-500/30"
                >
                  {/* Aspect Media Preview Box */}
                  <div className="w-16 h-16 bg-zinc-950 border border-zinc-950 overflow-hidden flex-shrink-0">
                    <img src={item.image} alt={item.title} className="w-full h-full object-cover grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500" />
                  </div>

                  {/* Operational Product Identity Parameters */}
                  <div className="flex-1 min-w-0 space-y-1">
                    <h2 className="text-xs font-bold text-zinc-300 truncate tracking-tight group-hover:text-cyan-400 transition-colors uppercase">
                      {item.title}
                    </h2>
                    <div className="text-[10px] text-zinc-600">
                      UNIT_VAL: <span className="text-zinc-400">${item.price.toFixed(2)}</span> <span className="text-zinc-700">x</span> {item.quantity}
                    </div>
                  </div>

                  {/* Destruct Command Controller */}
                  <button 
                    onClick={() => removeFromCart(item.id)}
                    className="px-2 py-1.5 border border-zinc-900 text-[9px] text-zinc-500 hover:border-red-900/50 hover:text-red-400 hover:bg-red-950/10 transition-all duration-200 cursor-pointer uppercase"
                  >
                    [WIPE]
                  </button>
                </div>
              ))}

              {/* Reset Session Node */}
              <div className="pt-2">
                <button 
                  onClick={clearCart}
                  className="text-[9px] text-zinc-600 hover:text-red-400 transition-colors uppercase tracking-widest pl-1 cursor-pointer"
                >
                  ⚠️ CLEAR_ENTIRE_SESSION_BATCH
                </button>
              </div>
            </div>

            {/* Right Column: Financial Calculation Matrix Ledger */}
            <div className="space-y-4">
              <div className="text-[9px] text-zinc-600 tracking-wider uppercase pl-1">// FINANCIAL_LEDGER</div>
              
              <div className="bg-[#0B0B0D] border border-zinc-900 p-6 space-y-6 lg:sticky lg:top-28">
                <div className="space-y-3 text-[11px] border-b border-zinc-950 pb-4">
                  <div className="flex justify-between text-zinc-500">
                    <span>TOTAL_UNITS:</span>
                    <span className="text-zinc-300 font-bold">{getCartCount()} items</span>
                  </div>
                  <div className="flex justify-between text-zinc-500">
                    <span>SYS_DISPATCH_FEE:</span>
                    <span className="text-emerald-500 font-bold">STAGING_NULL_FREE</span>
                  </div>
                </div>

                {/* Net Invoiced Pricing Node */}
                <div className="flex items-baseline justify-between">
                  <span className="text-[10px] text-zinc-500 font-bold uppercase tracking-wider">NET_INVOICE:</span>
                  <span className="text-lg font-black text-cyan-400">${getCartTotal().toFixed(2)}</span>
                </div>

                {/* Final Protocol Checkout Trigger */}
                <button className="w-full py-3 text-center text-[10px] font-bold bg-cyan-500 text-[#09090B] uppercase tracking-widest transition-all duration-300 hover:bg-cyan-400 cursor-pointer shadow-[0_4px_20px_rgba(34,211,238,0.15)] active:scale-98">
                  EXECUTE_CHECKOUT_PROTOCOL 
                </button>
              </div>
            </div>

          </div>
        )}

      </div>
    </div>
  );
}