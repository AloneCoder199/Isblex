"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { createClient } from '@supabase/supabase-js';
import { useCart } from '@/context/CartContext';

// Supabase Connection initialization
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export default function ProductsPage() {
  const { addToCart } = useCart();
  const [products, setProducts] = useState<any[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  // Realtime System States
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeCategory, setActiveCategory] = useState<string>('ALL');
  const [activeSort, setActiveSort] = useState<string>('NEW ARRIVALS');

  const categories = ["ALL", "RGB CORNER", "FLOOR LAMPS", "DESK LAMPS", "TV BACKLIGHTS", "BEDROOM"];
  const sorts = ["PRICE: LOW", "PRICE: HIGH", "NEW ARRIVALS"];

  // 1. Fetching logic from DB node
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

  // 2. Real-Time Query Compute Engine (Search + Category Filter + Sorting)
  useEffect(() => {
    let processStream = [...products];

    // Category Processing Node
    if (activeCategory !== 'ALL') {
      processStream = processStream.filter((p) => 
        p.summary?.toUpperCase().includes(activeCategory) || 
        p.title?.toUpperCase().includes(activeCategory) ||
        p.description?.toUpperCase().includes(activeCategory)
      );
    }

    // Search Query Processing Node
    if (searchQuery.trim() !== '') {
      const query = searchQuery.toLowerCase();
      processStream = processStream.filter((p) =>
        p.title?.toLowerCase().includes(query) ||
        p.summary?.toLowerCase().includes(query) ||
        p.sku?.toLowerCase().includes(query)
      );
    }

    // Sort Parameters Logic
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

  if (loading) {
    return (
      <div className="min-h-screen bg-[#09090B] flex flex-col items-center justify-center font-mono space-y-4">
        <div className="w-8 h-8 border-2 border-cyan-500/30 border-t-cyan-500 rounded-full animate-spin"></div>
        <div className="text-[10px] text-zinc-500 tracking-[0.2em] animate-pulse">// SYSTEM_LOADING_MATRIX...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#09090B] text-white selection:bg-cyan-500/20 selection:text-cyan-400">
      
      {/* 🚀 TECH INTERFACE HEADER & SEARCH PANEL */}
      <header className="bg-[#09090B] pt-12 pb-6 px-4 md:px-8 border-b border-zinc-950">
        <div className="max-w-6xl mx-auto space-y-6">
          
          {/* Main Title Metadata block */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div className="space-y-1">
              <div className="text-[9px] font-mono text-cyan-500/80 tracking-[0.3em] uppercase animate-pulse">// CATALOG_STREAM_ONLINE</div>
              <h1 className="text-2xl sm:text-4xl font-mono uppercase tracking-tight font-black">
                CORE <span className="text-zinc-600">OPERATIONS</span> SYSTEM
              </h1>
            </div>
            <div className="text-[10px] font-mono text-zinc-500">
              [INDEXED: {filteredProducts.length}/{products.length} ASSETS]
            </div>
          </div>

          {/* Premium Tech Input Node */}
          <div className="relative group">
            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-[10px] font-mono text-zinc-600 group-focus-within:text-cyan-500 transition-colors">// QUERY:</div>
            <input 
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="ENTER SYSTEM SKU CODE OR TITLE KEYWORD..."
              className="w-full bg-zinc-950/40 border border-zinc-900 rounded-none pl-20 pr-4 py-3.5 text-[11px] font-mono tracking-wide text-zinc-200 placeholder-zinc-700 focus:outline-none focus:border-cyan-500/50 focus:bg-zinc-950 transition-all duration-300 uppercase"
            />
          </div>
        </div>
      </header>

      {/* 🎛️ INTEGRATED ASYNC FILTER SYSTEM BLOCK */}
      <section className="bg-[#09090B] py-8 px-4 md:px-8 border-b border-zinc-950">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-8">
          
          {/* Left: Category Selector Stream */}
          <div className="flex-1">
            <div className="text-[9px] font-mono text-zinc-600 tracking-[0.2em] uppercase mb-4">// SELECT_CATEGORY</div>
            <div className="flex gap-2 overflow-x-auto scrollbar-none pb-2">
              {categories.map((cat) => {
                const isCurrent = activeCategory === cat;
                return (
                  <button 
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`px-4 py-2 border text-[10px] font-mono whitespace-nowrap transition-all duration-300 uppercase select-none cursor-pointer ${
                      isCurrent 
                        ? 'border-cyan-500 text-cyan-400 bg-cyan-950/10 shadow-[0_0_15px_rgba(6,182,212,0.05)]' 
                        : 'border-zinc-900 text-zinc-500 hover:border-zinc-700 hover:text-zinc-300'
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
            <div className="text-[9px] font-mono text-zinc-600 tracking-[0.2em] uppercase mb-4">// SORT_PARAMETERS</div>
            <div className="grid grid-cols-3 gap-2">
              {sorts.map((sort) => {
                const isCurrent = activeSort === sort;
                return (
                  <button 
                    key={sort}
                    onClick={() => setActiveSort(sort)}
                    className={`px-2 py-2 border text-[9px] font-mono text-center transition-all duration-300 uppercase select-none cursor-pointer ${
                      isCurrent 
                        ? 'border-zinc-500 text-white bg-zinc-900' 
                        : 'border-zinc-950 bg-zinc-950/30 text-zinc-600 hover:border-zinc-900 hover:text-zinc-400'
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

      {/* 📦 THE HIGH-END GRID DEPLOYMENT ARCHITECTURE */}
      <main className="max-w-6xl mx-auto py-12 px-4 md:px-8">
        {filteredProducts.length === 0 ? (
          <div className="text-center py-20 border border-dashed border-zinc-900 font-mono">
            <p className="text-zinc-600 text-xs">// TRANSACTION_PIPELINE: NO DEPLOYED ASSETS CAPTURED</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product) => {
              const displayImage = product.images?.[0] || 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=500';
              const currentPrice = product.offer_price > 0 ? product.offer_price : product.real_price;
              const discountDelta = product.offer_price > 0 && product.offer_price < product.real_price;

              return (
                <div 
                  key={product.id}
                  className="group bg-[#0B0B0D] border border-zinc-900 rounded-none overflow-hidden flex flex-col justify-between transition-all duration-500 hover:border-cyan-500/40 hover:shadow-[0_10px_30px_rgba(0,0,0,0.5)] transform hover:-translate-y-1 relative"
                >
                  {/* Visual Layer Cover Container */}
                  <Link href={`/products/${product.slug}`} className="block relative aspect-square bg-zinc-950 overflow-hidden border-b border-zinc-950">
                    <img 
                      src={displayImage} 
                      alt={product.title} 
                      className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 ease-out group-hover:scale-102"
                    />
                    
                    {/* Floating Operational Tag */}
                    <div className="absolute top-3 left-3 bg-zinc-950/90 border border-zinc-800 px-2 py-0.5 text-[8px] font-mono text-zinc-400 tracking-wider">
                      MOD_{product.id.slice(0, 4).toUpperCase()}
                    </div>

                    {discountDelta && (
                      <span className="absolute bottom-3 right-3 bg-cyan-500 text-[#09090B] text-[8px] font-mono font-bold px-2 py-0.5 uppercase tracking-widest">
                        MARKDOWN_INLINE
                      </span>
                    )}
                  </Link>

                  {/* Core Tech Data Analytics Block */}
                  <div className="p-5 flex-1 flex flex-col justify-between space-y-4 font-mono">
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-[9px] text-zinc-600 tracking-wider">
                        <span>SKU::{product.sku.toUpperCase()}</span>
                        <span className="text-zinc-700">// AUTH_OK</span>
                      </div>
                      
                      <Link href={`/products/${product.slug}`} className="text-sm font-bold text-zinc-200 hover:text-cyan-400 transition-colors uppercase block tracking-tight line-clamp-1">
                        {product.title}
                      </Link>
                      
                      <p className="text-[11px] text-zinc-500 line-clamp-2 leading-relaxed tracking-wide lowercase first-letter:uppercase">
                        {product.summary}
                      </p>
                    </div>

                    {/* Monetary Transaction Trigger Bar */}
                    <div className="pt-4 border-t border-zinc-950 flex flex-col space-y-3">
                      <div className="flex items-baseline gap-2">
                        <span className="text-base font-black text-cyan-400">${parseFloat(currentPrice).toFixed(2)}</span>
                        {discountDelta && (
                          <span className="text-[10px] text-zinc-600 line-through">${parseFloat(product.real_price).toFixed(2)}</span>
                        )}
                      </div>

                      {/* Immediate Cart Push Node */}
                      <button 
                        onClick={() => addToCart({
                          id: product.id,
                          title: product.title,
                          price: parseFloat(currentPrice),
                          slug: product.slug,
                          image: displayImage
                        })}
                        className="w-full py-2.5 bg-zinc-950 border border-zinc-900 text-zinc-400 text-[10px] font-bold uppercase tracking-widest hover:border-cyan-500/60 hover:text-white hover:bg-cyan-950/5 transition-all duration-300 cursor-pointer text-center"
                      >
                        [+ EXECUTE_CART_ADD]
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