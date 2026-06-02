"use client";
import React from 'react';
import { motion } from 'framer-motion';

const products = [
  { id: 1, name: "Aurora RGB Corner Lamp", benefit: "16M colors for immersive room lighting", price: "49.99", rating: 5, badge: "BEST SELLER" },
  { id: 2, name: "Zenith Floor Lamp", benefit: "Precision architectural illumination", price: "89.99", rating: 5, badge: "NEW" },
  { id: 3, name: "Vertex Desk Lamp", benefit: "Flicker-free task optimization", price: "39.99", rating: 4, badge: "LIMITED" },
  { id: 4, name: "Flux TV Backlight", benefit: "Dynamic screen-sync lighting", price: "59.99", rating: 5, badge: null },
];

export default function CatalogEngine() {
  return (
    <section className="bg-[#09090B] py-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        
        {products.map((p) => (
          <motion.div 
            key={p.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="group relative bg-[#0C0C0E] border border-zinc-900 overflow-hidden hover:border-[#22D3EE]/30 transition-all duration-500"
          >
            {/* ── IMAGE SECTION WITH HOVER ZOOM ── */}
            <div className="relative h-64 w-full bg-zinc-900 overflow-hidden">
              <div className="absolute inset-0 bg-zinc-800 group-hover:scale-110 transition-transform duration-700 ease-out" />
              
              {/* Badge */}
              {p.badge && (
                <div className="absolute top-4 left-4 z-10 bg-black/80 backdrop-blur px-3 py-1 border border-zinc-700">
                  <span className="text-[8px] font-mono font-bold text-white tracking-[0.2em] uppercase">{p.badge}</span>
                </div>
              )}
            </div>

            {/* ── CONTENT SECTION ── */}
            <div className="p-6">
              <h3 className="text-white font-bold mb-1 group-hover:text-[#22D3EE] transition-colors">{p.name}</h3>
              <p className="text-[10px] text-zinc-500 mb-4 font-mono leading-relaxed">{p.benefit}</p>
              
              <div className="flex items-center justify-between mb-6">
                <span className="text-sm font-black text-white">${p.price}</span>
                <div className="text-[9px] text-[#22D3EE] tracking-tighter">{"★★★★★".slice(0, p.rating)}</div>
              </div>

              {/* Add To Cart Button */}
              <button className="w-full py-3 bg-[#22D3EE] text-black font-black text-[9px] uppercase tracking-[0.2em] hover:bg-white transition-all duration-300">
                Add To Cart
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}