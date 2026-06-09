"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { createClient } from '@supabase/supabase-js';
import { useCart } from '@/context/CartContext';
import Image from 'next/image'
// --- LOGIC BLOCK: Supabase Initialization (STRICTLY MAINTAINED) ---
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export default function ProductsPage() {
  // --- LOGIC BLOCK: Hooks & State (STRICTLY MAINTAINED) ---
  const { addToCart } = useCart();
  const [products, setProducts] = useState<any[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeCategory, setActiveCategory] = useState<string>('ALL');
  const [activeSort, setActiveSort] = useState<string>('NEW ARRIVALS');

  // --- DESIGN BLOCK: Data Mapping Labels (Updated terminology, kept logical keys) ---
  const categories = ["ALL", "RGB CORNER", "FLOOR LAMPS", "DESK LAMPS", "TV BACKLIGHTS", "BEDROOM"];
  const sorts = ["PRICE: LOW", "PRICE: HIGH", "NEW ARRIVALS"];

  // --- LOGIC BLOCK: Data Fetching (STRICTLY MAINTAINED) ---
  useEffect(() => {
    const fetchMatrixData = async () => {
      const { data, error } = await supabase
        .from('products')
        .select('*')
        .eq('status', 'published');
      
      if (data && !error) {
        setProducts(data);
        setFilteredProducts(data);
      }
      setLoading(false);
    };
    fetchMatrixData();
  }, []);

  // --- LOGIC BLOCK: Processing Engine (STRICTLY MAINTAINED) ---
  useEffect(() => {
    let processStream = [...products];

    if (activeCategory !== 'ALL') {
      processStream = processStream.filter((p) => 
        p.summary?.toUpperCase().includes(activeCategory) || 
        p.title?.toUpperCase().includes(activeCategory) ||
        p.description?.toUpperCase().includes(activeCategory)
      );
    }

    if (searchQuery.trim() !== '') {
      const query = searchQuery.toLowerCase();
      processStream = processStream.filter((p) =>
        p.title?.toLowerCase().includes(query) ||
        p.summary?.toLowerCase().includes(query) ||
        p.sku?.toLowerCase().includes(query)
      );
    }

    if (activeSort === 'PRICE: LOW') {
      processStream.sort((a, b) => {
        const priceA = a.offer_price > 0 ? a.offer_price : a.real_price;
        const priceB = b.offer_price > 0 ? b.offer_price : b.real_price;
        return priceA - priceB;
      });
    } else if (activeSort === 'PRICE: HIGH') {
      processStream.sort((a, b) => {
        const priceA = a.offer_price > 0 ? a.offer_price : a.real_price;
        const priceB = b.offer_price > 0 ? b.offer_price : b.real_price;
        return priceB - priceA;
      });
    } else if (activeSort === 'NEW ARRIVALS') {
      processStream.sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime());
    }

    setFilteredProducts(processStream);
  }, [searchQuery, activeCategory, activeSort, products]);

  // Assuming font-serif is mapped to a luxury serif (like Playfair Display) and font-sans is mapped to a clean sans (like Plus Jakarta Sans) in layout.

  // --- DESIGN BLOCK: Loading State (Overhauled to Prifya) ---
  if (loading) {
    return (
      <div className="min-h-screen bg-[#FDFBF7] text-[#3E2A20] flex flex-col items-center justify-center font-sans space-y-4">
        <div className="w-10 h-10 border-2 border-[#D0C9BC] border-t-[#8A9A86] rounded-full animate-spin"></div>
        <div className="text-[12px] text-[#3E2A20]/60 tracking-[0.25em] uppercase font-semibold animate-pulse">
          PRIFYA_CURATIONS_LOADING...
        </div>
      </div>
    );
  }

  return (
    // --- DESIGN BLOCK: Layout Overhaul to Prifya Aesthetic ---
    <div className="min-h-screen bg-[#FDFBF7] text-[#3E2A20] selection:bg-[#B89B72]/10 selection:text-[#B89B72] font-sans">
      
      {/* 🎨 DESIGN BLOCK: Luxury Header & Search */}
      <header className="bg-[#FDFBF7] pt-16 pb-10 px-4 md:px-8 border-b border-[#D0C9BC]/50">
        <div className="max-w-6xl mx-auto space-y-10">
          
          {/* Main Title Block: Elegant Dual Typography */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-2">
              <div className="text-[10px] font-sans text-[#8A9A86] tracking-[0.3em] uppercase select-none font-bold">
                // COLLECTION_CURATIONS_ONLINE
              </div>
              <h1 className="text-3xl sm:text-5xl font-serif tracking-tight text-[#3E2A20]">
                OUR CURATED <span className="text-[#3E2A20]/40 italic font-medium">Rituals</span>
              </h1>
            </div>
            <div className="text-[11px] font-sans text-[#3E2A20]/60 tracking-wider">
              [INDEXED: {filteredProducts.length}/{products.length} ASSETS]
            </div>
          </div>

          {/* Search Input Node: Overhauled Styling */}
          <div className="relative group">
            <input 
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              // DESIGN BLOCK: Terminology & Styling Update
              placeholder="Search by Formula Code or ritual keyword..."
              className="w-full bg-white border border-[#D0C9BC] rounded-full pl-6 pr-12 py-4 text-[13px] font-sans tracking-wide text-[#3E2A20] placeholder-[#D0C9BC] focus:outline-none focus:border-[#B89B72]/80 focus:ring-1 focus:ring-[#B89B72]/10 transition-all duration-300"
            />
            <svg className="absolute right-6 top-1/2 -translate-y-1/2 w-4 h-4 text-[#D0C9BC] group-focus-within:text-[#B89B72] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
          </div>
        </div>
      </header>

      {/* 🎨 DESIGN BLOCK: Curation Filter System (Prifya Aesthetic) */}
      <section className="bg-[#FDFBF7] py-10 px-4 md:px-8 border-b border-[#D0C9BC]/50 selects-none">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-10 lg:items-center">
          
          {/* Left: Category Selector Stream */}
          <div className="flex-1">
            <div className="text-[10px] font-sans text-[#3E2A20]/50 tracking-[0.25em] uppercase mb-5 font-semibold">SELECT_CURATION</div>
            <div className="flex gap-2.5 overflow-x-auto scrollbar-none pb-2">
              {categories.map((cat) => {
                const isCurrent = activeCategory === cat;
                return (
                  <button 
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    // DESIGN BLOCK: Soft borders, rounded-full
                    className={`px-5 py-2.5 border rounded-full text-[11px] font-sans font-medium whitespace-nowrap transition-all duration-300 uppercase tracking-widest cursor-pointer ${
                      isCurrent 
                        ? 'border-[#8A9A86] text-white bg-[#8A9A86] shadow-sm' 
                        : 'border-[#D0C9BC] text-[#3E2A20]/80 hover:border-[#8A9A86]/60 hover:text-[#3E2A20] bg-white'
                    }`}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right: Sort Parameter Engine */}
          <div className="lg:w-[35%]">
            <div className="text-[10px] font-sans text-[#3E2A20]/50 tracking-[0.25em] uppercase mb-5 font-semibold">SORT_PARAMETERS</div>
            <div className="grid grid-cols-3 gap-2.5">
              {sorts.map((sort) => {
                const isCurrent = activeSort === sort;
                return (
                  <button 
                    key={sort}
                    onClick={() => setActiveSort(sort)}
                    className={`px-2 py-3 border text-[10px] font-sans rounded transition-all duration-300 uppercase select-none tracking-widest cursor-pointer text-center ${
                      isCurrent 
                        ? 'border-[#3E2A20] text-white bg-[#3E2A20]' 
                        : 'border-[#D0C9BC] bg-white text-[#3E2A20]/60 hover:border-[#3E2A20]/50 hover:text-[#3E2A20]'
                    }`}
                  >
                    {sort}
                  </button>
                );
              })}
            </div>
          </div>

        </div>
      </section>

      {/* 📦 THE RITUAL GRID: High-end Design Deployment */}
      <main className="max-w-6xl mx-auto py-16 px-4 md:px-8 selects-none">
        {filteredProducts.length === 0 ? (
          // DESIGN BLOCK: Premium rephrasing
          <div className="text-center py-24 border border-dashed border-[#D0C9BC] font-sans rounded-2xl bg-white space-y-3">
            <svg className="w-10 h-10 text-[#D0C9BC] mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-1.912.956a6 6 0 01-3.86.517l-2.387-.477a2 2 0 00-1.022.547l-1.393 1.393a2 2 0 00-.547 1.022l-.477 2.387a6 6 0 00.517 3.86l.956 1.912a6 6 0 01.517 3.86l-.477 2.387a2 2 0 00.547 1.022l1.393 1.393a2 2 0 001.022.547l2.387-.477a6 6 0 003.86-.517l1.912-.956a6 6 0 013.86-.517l2.387-.477a2 2 0 001.022.547l1.393-1.393a2 2 0 00.547-1.022l.477-2.387a6 6 0 00-.517-3.86l-.956-1.912a6 6 0 01-.517-3.86l.477-2.387a2 2 0 00-.547-1.022l-1.393-1.393z"></path></svg>
            <p className="text-[#3E2A20]/60 text-sm font-light leading-relaxed">
              // CURATION PIPELINE: No deployed formulations captured in this matrix.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => {
              const displayImage = product.images?.[0] || 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=500';
              const currentPrice = product.offer_price > 0 ? product.offer_price : product.real_price;
              const discountDelta = product.offer_price > 0 && product.offer_price < product.real_price;

              return (
                // DESIGN BLOCK: Product Card (Prifya Aesthetic)
                <div 
                  key={product.id}
                  className="group bg-white border border-[#D0C9BC]/50 rounded-2xl overflow-hidden flex flex-col justify-between transition-all duration-500 hover:border-[#B89B72]/40 hover:shadow-[0_12px_40px_rgba(62,42,32,0.06)] transform hover:-translate-y-1.5 relative select-none"
                >
                  {/* DESIGN BLOCK: Image Layer Container */}
                  <Link href={`/products/${product.slug}`} className="block relative aspect-[5/4] bg-[#FDFBF7] overflow-hidden border-b border-[#D0C9BC]/30">
                    <Image 
  src={displayImage} 
  // Dynamic Alt text jo brand name ke sath Google ko milega
  alt={`Prifya ${product.title} - High-Potency Botanical Skincare`} 
  // Agar Next.js mein sizes dynamic rakhne hon to fill aur object-cover best hain
  fill
  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
  className="w-full h-full object-cover opacity-95 group-hover:opacity-100 transition-all duration-700 ease-out group-hover:scale-105"
  // Supabase dynamic images ke liye priority ya unoptimized check lagaya ja sakta hai
  unoptimized={true} 
/>
                    
                    {/* DESIGN BLOCK: Floating Curation Tag (Reworded MOD_) */}
                    <div className="absolute top-4 left-4 bg-white/90 border border-[#D0C9BC] px-3 py-1 rounded-full text-[9px] font-sans font-semibold text-[#8A9A86] tracking-wider shadow-sm uppercase">
                      FORMULA_CODE::{product.id.slice(0, 4)}
                    </div>

                    {discountDelta && (
                      // DESIGN BLOCK: Markdown -> Concierge Offer
                      <span className="absolute bottom-4 right-4 bg-[#B89B72] text-white text-[9px] font-sans font-bold px-3 py-1 rounded-full uppercase tracking-widest shadow-sm">
                        CONCIERGE_OFFER
                      </span>
                    )}
                  </Link>

                  {/* DESIGN BLOCK: Tech Data -> Formulation Data Block */}
                  <div className="p-6 flex-1 flex flex-col justify-between space-y-6 font-sans">
                    <div className="space-y-3">
                      {/* Terminology: SKU -> CURATION CODE */}
                      <div className="flex items-center justify-between text-[10px] text-[#3E2A20]/60 tracking-wider font-semibold uppercase">
                        <span>CURATION CODE::{product.sku.toUpperCase()}</span>
                        <span className="text-[#8A9A86] tracking-tight">// AUTH::OK</span>
                      </div>
                      
                      {/* Title: Moved to Luxury Serif */}
                      <Link href={`/products/${product.slug}`} className="text-xl font-serif font-medium text-[#3E2A20] hover:text-[#8A9A86] transition-colors block leading-tight tracking-tight line-clamp-1">
                        {product.title}
                      </Link>
                      
                      {/* DESIGN BLOCK: Summary (Updated typography logic) */}
                      <p className="text-[13px] text-[#3E2A20]/80 line-clamp-2 leading-relaxed tracking-wide font-light">
                        {product.summary}
                      </p>
                    </div>

                    {/* DESIGN BLOCK: Monetary Transaction Bar */}
                    <div className="pt-5 border-t border-[#D0C9BC]/30 flex flex-col space-y-4">
                      <div className="flex items-baseline gap-2.5">
                        {/* DESIGN BLOCK: Price -> Dark Cocoa */}
                        <span className="text-2xl font-black text-[#3E2A20] tracking-tighter">${parseFloat(currentPrice).toFixed(2)}</span>
                        {discountDelta && (
                          <span className="text-[12px] text-[#3E2A20]/50 line-through tracking-wider">${parseFloat(product.real_price).toFixed(2)}</span>
                        )}
                      </div>

                      {/* DESIGN BLOCK: Cart Button (STRICTLY LOGICAL, UPDATED DESIGN) */}
                      <button 
  onClick={() => addToCart({
    id: product.id,
    title: product.title,
    price: parseFloat(currentPrice),
    slug: product.slug,
    image: displayImage,
    quantity: 1 // FIX: Yahan quantity define karna zaruri hai
  })}
  className="w-full py-3.5 bg-white border border-[#D0C9BC] rounded-full text-[#3E2A20] text-[11px] font-semibold uppercase tracking-[0.2em] hover:border-[#8A9A86] hover:text-[#8A9A86] hover:bg-[#8A9A86]/5 transition-all duration-300 cursor-pointer text-center active:scale-[0.98] shadow-sm"
>
  + Add to Ritual
</button>
                    </div>

                  </div>
                </div>
              );
            })}
          </div>
        )}
      </main>

    </div>
  );
}