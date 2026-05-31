"use client";
import React, { useState } from 'react';
import Image from 'next/image';

interface Product {
  id: number;
  name: string;
  price: number;
  rating: number;
  reviews: number;
  imgSrc: string;
  lumens: string;
  wattage: string;
  kelvin: string;
  tag?: string;
}

const bestSellers: Product[] = [
  {
    id: 1,
    name: "AeroLine Linear Suspension",
    price: 289,
    rating: 4.9,
    reviews: 142,
    imgSrc: "/images/AeroLine.png", // Replace with your image paths later
    lumens: "3200 lm",
    wattage: "24W",
    kelvin: "4000K",
    tag: "Top Rated"
  },
  {
    id: 2,
    name: "Vertex Corner Ambient Column",
    price: 345,
    rating: 5.0,
    reviews: 98,
    imgSrc: "/images/VertexCorner.png",
    lumens: "4100 lm",
    wattage: "36W",
    kelvin: "3000K-6000K",
    tag: "Selling Out"
  },
  {
    id: 3,
    name: "FocusTask Precision Desk Module",
    price: 199,
    rating: 4.8,
    reviews: 215,
    imgSrc: "/images/FocusTask.png",
    lumens: "1800 lm",
    wattage: "12W",
    kelvin: "5000K",
  },
  {
    id: 4,
    name: "Halo Ring Architectural Pendant",
    price: 420,
    rating: 4.9,
    reviews: 76,
    imgSrc: "/images/HaloRing.png",
    lumens: "5000 lm",
    wattage: "45W",
    kelvin: "3500K",
    tag: "New Release"
  }
];

export default function BestSellers() {
  const [addingId, setAddingId] = useState<number | null>(null);

  const handleAddToCart = (id: number) => {
    setAddingId(id);
    // Simulating a fast cart action response
    setTimeout(() => {
      setAddingId(null);
      alert("Product added to your architectural configuration!");
    }, 800);
  };

  return (
    <section className="bg-[#0A0A0A] text-[#F8FAFC] py-24 px-4 md:px-8 border-t border-[#1E293B]">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* SECTION HEADER */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-[#1E293B]/40">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#111827] border border-[#1E293B] text-[10px] font-semibold tracking-[0.2em] text-[#22D3EE] uppercase w-fit">
              <span className="w-1.5 h-1.5 rounded-full bg-[#22D3EE] animate-pulse" />
              High-Demand Systems
            </div>
            <h2 className="text-3xl md:text-5xl font-light tracking-tight text-[#F8FAFC]">
              The <span className="font-medium text-transparent bg-clip-text bg-gradient-to-r from-[#F8FAFC] via-[#94A3B8] to-[#475569]">Best Sellers.</span>
            </h2>
          </div>
          <p className="text-xs md:text-sm text-[#94A3B8] font-light max-w-xs leading-relaxed md:text-right">
            The most coveted lighting arrays trusted by interior architects globally for crisp geometric performance.
          </p>
        </div>

        {/* PRODUCTS FLUID GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
          {bestSellers.map((product) => (
            <div
              key={product.id}
              className="group relative rounded-2xl overflow-hidden bg-[#111827] border border-[#1E293B] hover:border-[#22D3EE]/30 transition-all duration-500 flex flex-col justify-between h-[480px] p-4 cursor-pointer"
            >
              {/* Product Top Bar (Tags & Ratings) */}
              <div className="relative z-20 flex justify-between items-center w-full min-h-[26px]">
                {product.tag ? (
                  <span className="text-[8px] font-bold tracking-widest uppercase text-[#22D3EE] bg-[#22D3EE]/10 border border-[#22D3EE]/20 px-2.5 py-0.5 rounded-md">
                    {product.tag}
                  </span>
                ) : <div />}
                
                <div className="flex items-center gap-1 bg-[#0A0A0A]/60 backdrop-blur-md px-2 py-0.5 rounded-md border border-[#1E293B]/50">
                  <span className="text-amber-400 text-xs">★</span>
                  <span className="text-[10px] font-semibold text-[#F8FAFC]">{product.rating}</span>
                  <span className="text-[9px] text-[#64748B]">({product.reviews})</span>
                </div>
              </div>

              {/* Product Image Stage (Centered & Balanced) */}
              <div className="absolute inset-x-0 top-0 h-[280px] z-0 overflow-hidden bg-linear-to-b from-transparent to-[#111827]">
                <Image
                  src={product.imgSrc}
                  alt={product.name}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover opacity-60 group-hover:opacity-80 group-hover:scale-[1.03] transition-all duration-700 ease-out"
                  unoptimized={true} // Bypasses optimization lag
                />
                {/* Shadow overlay to isolate metrics */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#111827] via-transparent to-transparent" />
              </div>

              {/* Product Meta Data Area (Bottom aligned) */}
              <div className="relative z-10 mt-auto pt-4 space-y-4">
                
                {/* Technical Specification Matrix */}
                <div className="grid grid-cols-3 gap-1 py-1.5 px-2 rounded-lg bg-[#0A0A0A]/40 border border-[#1E293B]/40 text-center">
                  <div>
                    <p className="text-[8px] uppercase tracking-wider text-[#475569]">Output</p>
                    <p className="text-[10px] font-medium text-[#94A3B8]">{product.lumens}</p>
                  </div>
                  <div className="border-x border-[#1E293B]/60">
                    <p className="text-[8px] uppercase tracking-wider text-[#475569]">Load</p>
                    <p className="text-[10px] font-medium text-[#94A3B8]">{product.wattage}</p>
                  </div>
                  <div>
                    <p className="text-[8px] uppercase tracking-wider text-[#475569]">Kelvin</p>
                    <p className="text-[10px] font-medium text-[#94A3B8]">{product.kelvin}</p>
                  </div>
                </div>

                {/* Title and Price Info */}
                <div className="space-y-1">
                  <h3 className="text-base font-medium tracking-tight text-[#F8FAFC] line-clamp-1 group-hover:text-[#22D3EE] transition-colors duration-300">
                    {product.name}
                  </h3>
                  <div className="flex items-baseline gap-1.5">
                    <span className="text-xs text-[#64748B] font-light">$</span>
                    <span className="text-xl font-semibold tracking-tight text-[#F8FAFC]">{product.price}.00</span>
                  </div>
                </div>

                {/* Action Interface (Slide-up on Desktop, Permanent on Mobile) */}
                <div className="relative overflow-hidden h-10 w-full rounded-xl">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleAddToCart(product.id);
                    }}
                    className={`w-full h-full text-[11px] font-bold uppercase tracking-widest transition-all duration-300 rounded-xl flex items-center justify-center gap-2 ${
                      addingId === product.id 
                        ? 'bg-[#1E293B] text-[#22D3EE] border border-[#22D3EE]/20' 
                        : 'bg-[#F8FAFC] text-[#0A0A0A] hover:bg-[#22D3EE] hover:text-[#0A0A0A] md:translate-y-12 md:group-hover:translate-y-0'
                    }`}
                  >
                    {addingId === product.id ? (
                      <>
                        <span className="w-3 h-3 rounded-full border-2 border-[#22D3EE] border-t-transparent animate-spin" />
                        <span>Configuring...</span>
                      </>
                    ) : (
                      <span>Integrate Array</span>
                    )}
                  </button>
                  
                  {/* Subtle desktop helper layout prompt */}
                  <div className="hidden md:flex absolute inset-0 items-center justify-start text-[9px] uppercase tracking-[0.2em] text-[#475569] group-hover:opacity-0 transition-opacity duration-300 pointer-events-none">
                    View Configuration ➔
                  </div>
                </div>

              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}