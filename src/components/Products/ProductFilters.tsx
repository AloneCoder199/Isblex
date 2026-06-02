"use client";
import React, { useState } from 'react';

export default function ProductFilters() {
  const [activeFilter, setActiveFilter] = useState('All');

  const categories = ["RGB Corner", "Floor Lamps", "Desk Lamps", "TV Backlights", "Bedroom"];
  const sorts = ["Price Range", "Rating", "Best Selling", "New Arrivals"];

  return (
    <section className="bg-[#09090B] py-8 px-4 md:px-8 border-b border-zinc-900">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-8">
        
        {/* Left: Category Selector */}
        <div className="flex-1">
          <div className="text-[9px] font-mono text-zinc-500 tracking-[0.2em] uppercase mb-4">// SELECT_CATEGORY</div>
          <div className="flex gap-2 overflow-x-auto scrollbar-none pb-2">
            {categories.map((cat) => (
              <button 
                key={cat}
                className="px-4 py-2 border border-zinc-800 text-[10px] font-mono text-zinc-400 whitespace-nowrap hover:border-cyan-500 hover:text-white transition-all uppercase"
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Right: Sort/Filter Params */}
        <div className="lg:w-1/3">
          <div className="text-[9px] font-mono text-zinc-500 tracking-[0.2em] uppercase mb-4">// SORT_PARAMETERS</div>
          <div className="grid grid-cols-2 gap-2">
            {sorts.map((sort) => (
              <button 
                key={sort}
                className="px-3 py-2 border border-zinc-900 text-[9px] font-mono text-zinc-600 hover:border-zinc-700 hover:text-zinc-300 transition-all uppercase"
              >
                {sort}
              </button>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}