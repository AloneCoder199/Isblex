"use client";
import React from 'react';

export default function OurProducts() {
  const products = [
    {
      id: "prod_1",
      name: "RGB Corner Lamps",
      tag: "Spatial Matrix Column",
      desc: "Synchronized vertical lighting vectors designed to map room perimeters with fluid color transitions.",
      image: "/images/prod-1.png",
      code: "SYS_NODE // C1"
    },
    {
      id: "prod_2",
      name: "Smart Floor Lamps",
      tag: "Linear Spatial Monolith",
      desc: "Architectural freestanding bars emitting high-lumen ambient dispersion with precise voice control sync.",
      image: "/images/prod-2.png",
      code: "SYS_NODE // F2"
    },
    {
      id: "prod_3",
      name: "Gaming Room Lights",
      tag: "Battlestation Dynamic Arrays",
      desc: "High-frequency reactive illumination panels built to eliminate delay and mirror active display outputs.",
      image: "/images/prod-3.png",
      code: "SYS_NODE // G3"
    },
    {
      id: "prod_4",
      name: "Ambient Desk Lights",
      tag: "Precision Task Bars",
      desc: "Asymmetric optical beams projecting glare-free focus sweeps over your keyboard without hitting the screen.",
      image: "/images/prod-4.png",
      code: "SYS_NODE // D4"
    },
    {
      id: "prod_5",
      name: "Bedroom Mood Lighting",
      tag: "Circadian Sleep Modules",
      desc: "Ultra-low frequency warm emission fields optimized to trigger natural melatonin cycles for deep recovery.",
      image: "/images/prod-5.png",
      code: "SYS_NODE // B5"
    },
    {
      id: "prod_6",
      name: "TV Backlight Systems",
      tag: "Chroma Backwall Matrices",
      desc: "Symmetric wall-washing backplane kits creating a deep volumetric viewing envelope to minimize eye strain.",
      image: "/images/prod-6.png",
      code: "SYS_NODE // T6"
    }
  ];

  return (
    <section 
      id="our-products" 
      className="relative bg-[#09090B] text-[#F8FAFC] py-24 lg:py-32 px-4 md:px-8 border-b border-zinc-900 select-none animate-fade-in"
    >
      {/* Subtle Background Structural Grid Patterns */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f0f13_1px,transparent_1px),linear-gradient(to_bottom,#0f0f13_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black_90%)] opacity-30 pointer-events-none" />

      <div className="max-w-7xl w-full mx-auto relative z-10">
        
        {/* ================= SECTION HEADERS ================= */}
        <div className="flex flex-col items-start space-y-3 mb-16 max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-zinc-800 bg-zinc-950 text-[#22D3EE] text-[10px] font-mono tracking-widest uppercase">
            // HARDWARE CATALOG MATRIX //
          </div>
          <h2 className="text-sm font-mono text-zinc-500 uppercase tracking-widest">// What We Offer</h2>
          <p className="text-3xl sm:text-4xl font-black tracking-tight leading-tight uppercase">
            Engineered Illumination <br />
            <span className="bg-gradient-to-r from-white via-zinc-400 to-zinc-600 bg-clip-text text-transparent">
              For High-End Spaces.
            </span>
          </p>
        </div>

        {/* ================= PRODUCTS INTEGRATED 3-COL GRID ================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {products.map((product) => (
            <div 
              key={product.id} 
              className="group relative bg-[#0C0C0E] border border-zinc-900 rounded-2xl overflow-hidden flex flex-col justify-between transition-all duration-300 hover:border-zinc-800 hover:shadow-[0_20px_40px_rgba(0,0,0,0.6)]"
            >
              {/* Image Box Housing With Zoom-on-Hover Feature */}
              <div className="relative w-full aspect-[16/10] overflow-hidden border-b border-zinc-900 bg-zinc-950">
                {/* Tech Code Overlay Tag */}
                <div className="absolute top-3 left-3 z-20 bg-black/70 border border-zinc-800/80 rounded-md px-2 py-0.5 font-mono text-[8px] text-zinc-400 tracking-wide backdrop-blur-xs">
                  {product.code}
                </div>
                
                <img 
                  src={product.image} 
                  alt={product.name}
                  loading="lazy"
                  className="w-full h-full object-cover grayscale opacity-60 contrast-125 transition-all duration-500 ease-out group-hover:scale-105 group-hover:grayscale-0 group-hover:opacity-80"
                />
                
                {/* Micro Ambient Shadow Edge Accent */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0C0C0E] via-transparent to-transparent opacity-90" />
              </div>

              {/* Product Specifications Content Shell */}
              <div className="p-6 space-y-3 flex-1 flex flex-col justify-between">
                <div className="space-y-1.5">
                  <span className="text-[9px] font-mono font-bold uppercase tracking-widest text-[#22D3EE]/80 block">
                    {product.tag}
                  </span>
                  <h3 className="text-lg font-black tracking-tight text-white group-hover:text-[#22D3EE] transition-colors duration-200">
                    {product.name}
                  </h3>
                  <p className="text-xs text-zinc-400 font-light leading-relaxed">
                    {product.desc}
                  </p>
                </div>

                {/* Bottom Interactive Trigger Line */}
                <div className="pt-4 border-t border-zinc-900/60 flex justify-between items-center text-[10px] font-mono tracking-widest text-zinc-500 uppercase">
                  <span>SPECIFICATION DATA</span>
                  <span className="text-zinc-700 group-hover:text-white transition-colors duration-200 flex items-center gap-1">
                    VIEW ARCHITYPE <span className="transform translate-x-0 group-hover:translate-x-1 transition-transform">&rarr;</span>
                  </span>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}