"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { supabase } from '@/supabase'; 
import { useCart } from '@/context/CartContext'; 

export default function BestSellers() {
  const [products, setProducts] = useState<any[]>([]);
  const [addingId, setAddingId] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const { addToCart } = useCart();

  useEffect(() => {
    async function fetchProducts() {
      try {
        setLoading(true);
        const { data, error } = await supabase
          .from('products')
          .select('*')
          .eq('status', 'published')
          .order('created_at', { ascending: false })
          .limit(4);

        if (error) throw error;
        if (data) setProducts(data);
      } catch (err) {
        console.error("Database Error:", err);
      } finally {
        setLoading(false);
      }
    }
    fetchProducts();
  }, []);

  const handleAddToCart = (product: any) => {
    setAddingId(product.id);
    const imageToUse = (product.images && product.images.length > 0) ? product.images[0] : '/placeholder.png';
    const priceToUse = product.offer_price > 0 ? product.offer_price : product.real_price;

    addToCart({
      id: product.id,
      title: product.title,
      price: parseFloat(priceToUse),
      slug: product.slug,
      image: imageToUse,
      quantity: 1 
    });

    setTimeout(() => setAddingId(null), 800);
  };

  if (loading) {
    return (
      <section className="bg-brand-dark py-24 text-center text-white">
        <p>Loading your routine essentials...</p>
      </section>
    );
  }

  return (
    <section className="bg-brand-dark text-foreground py-24 px-4 md:px-8 border-t border-brand-card/40">
      <div className="max-w-7xl mx-auto space-y-16" id='best'>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-brand-card/60">
          <h2 className="text-3xl md:text-5xl font-light tracking-tight">
            The <span className="font-medium text-transparent bg-clip-text bg-gradient-to-r from-brand-muted via-brand-border to-brand-cyan">Best Sellers.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
          {products.map((product) => (
            <div key={product.id} className="group relative rounded-3xl overflow-hidden bg-brand-card/10 border border-brand-border/20 flex flex-col justify-between h-[520px] p-4">
              
              {/* IMAGE SECTION */}
              <div className="absolute inset-x-0 top-0 h-[260px] z-0 overflow-hidden">
                <Image
                  src={product.images?.[0] || '/placeholder.png'} 
                  alt={product.title}
                  fill
                  className="object-cover opacity-80 group-hover:scale-[1.05] transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-transparent" />
              </div>

              {/* CONTENT SECTION */}
              <div className="relative z-10 mt-auto pt-4 space-y-4">
                <div className="grid grid-cols-2 gap-2 py-2 px-2 rounded-xl bg-brand-dark/60 border border-brand-card/40 text-center backdrop-blur-md">
                   <div className="border-r border-brand-card/50">
                     <p className="text-[8px] uppercase text-brand-muted">Stock</p>
                     <p className="text-[10px] font-medium">{product.stock_quantity > 0 ? 'In Stock' : 'Out'}</p>
                   </div>
                   <div>
                     <p className="text-[8px] uppercase text-brand-muted">SKU</p>
                     <p className="text-[10px] font-medium truncate px-1">{product.sku}</p>
                   </div>
                </div>

                <div className="space-y-1 px-1">
                  <h3 className="text-base font-medium text-foreground line-clamp-1">{product.title}</h3>
                  <p className="text-[10px] text-foreground/60 line-clamp-2 leading-relaxed h-[30px]">
                    {product.summary}
                  </p>
                </div>

                <div className="px-1">
                  <span className="text-xl font-semibold">${parseFloat(product.offer_price || product.real_price).toFixed(2)}</span>
                </div>

                <div className="relative overflow-hidden h-10 w-full rounded-xl">
                  <button
                    onClick={() => handleAddToCart(product)}
                    disabled={addingId === product.id}
                    className={`w-full h-full text-[10px] font-bold uppercase tracking-widest rounded-xl transition-all ${
                      addingId === product.id ? 'bg-brand-card text-brand-muted' : 'bg-foreground text-brand-dark hover:bg-brand-border'
                    }`}
                  >
                    {addingId === product.id ? 'Infusing...' : 'Add to Routine'}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}