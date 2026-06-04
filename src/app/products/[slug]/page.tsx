import { notFound } from 'next/navigation';
import { createServerClient } from '@supabase/ssr';
import { cookies } from 'next/headers';
import ProductGallery from '@/components/Products/ProductGallery';
import ProductDescription from '@/components/Products/ProductDescription';
import ReviewSection from '@/components/Products/ReviewSection';
import Link from 'next/link';

export const dynamic = 'force-dynamic';

interface Props {
  params: Promise<{ slug: string }>;
}

function getAverageRating(reviews: any[]) {
  if (!reviews || reviews.length === 0) return 0;
  const sum = reviews.reduce((acc, rev) => acc + rev.rating, 0);
  return (sum / reviews.length).toFixed(1);
}

// 🌟 Local Premium Star Rating to match the theme
const StarRating = ({ rating }: { rating: number }) => {
  return (
    <div className="flex text-cyan-500 text-xs gap-0.5 font-mono">
      {[1, 2, 3, 4, 5].map((star) => (
        <span key={star}>{star <= rating ? '★' : '☆'}</span>
      ))}
    </div>
  );
};

export default async function ProductDetailPage({ params }: Props) {
  const { slug } = await params;
  const cookieStore = await cookies();

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() { return cookieStore.getAll(); },
      },
    }
  );

  // Single dynamic fetch joining matching reviews array
  const { data: product, error } = await supabase
    .from('products')
    .select('*, reviews(*)') 
    .eq('slug', slug)
    .order('created_at', { foreignTable: 'reviews', ascending: false })
    .maybeSingle();

  if (error || !product || product.status !== 'published') {
    return notFound();
  }

  const hasDiscount = product.offer_price > 0 && product.offer_price < product.real_price;
  const averageRating = getAverageRating(product.reviews);
  const totalReviews = product.reviews?.length || 0;

  return (
    <div className="min-h-screen bg-[#09090B] text-zinc-100 py-12 px-4 sm:px-6 lg:px-8 mt-18">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Main Grid Matrix Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start relative">
          
          {/* LEFT INTERFACE: Premium Gallery Asset Block */}
          <div className="lg:col-span-7 space-y-4">
            <div className="text-[10px] font-mono text-zinc-500 tracking-[0.2em] uppercase mb-2">
              // PRODUCT_VISUAL_MATRIX
            </div>
            <ProductGallery 
              images={product.images || ['https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=600']} 
              videos={product.videos || []} 
              title={product.title} 
            />
          </div>

          {/* RIGHT INTERFACE: Product Actions & Analytics Panel */}
          <div className="lg:col-span-5 bg-[#09090B] border border-zinc-900 rounded-md p-6 sm:p-8 space-y-6 lg:sticky lg:top-24 z-10 shadow-[0_0_50px_rgba(0,0,0,0.8)]">
            
            {/* Status & Inventory Indicators */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-[9px] font-mono text-zinc-400 bg-[#0c0c0e] border border-zinc-800 px-2.5 py-1 rounded-sm uppercase tracking-widest">
                SKU: {product.sku}
              </span>
              
              {product.stock_quantity <= product.low_stock_level ? (
                <span className="text-[9px] font-mono font-bold uppercase tracking-widest bg-red-950/20 text-red-400 border border-red-900/40 px-2.5 py-1 rounded-sm animate-pulse">
                  CRITICAL_STOCK: {product.stock_quantity} UNIT(S)
                </span>
              ) : (
                <span className="text-[9px] font-mono text-emerald-400 bg-emerald-950/10 border border-emerald-900/40 px-2.5 py-1 rounded-sm uppercase tracking-widest">
                  SYS_STATUS: ONLINE ({product.stock_quantity} READY)
                </span>
              )}
            </div>

            {/* Title & Micro Meta Info */}
            <div className="space-y-3">
              <h1 className="text-xl sm:text-2xl font-mono font-bold text-white tracking-tight uppercase leading-snug">
                {product.title}
              </h1>
              
              {totalReviews > 0 && (
                <div className="flex items-center gap-2.5 border-b border-zinc-900/50 pb-3">
                  <StarRating rating={Math.round(Number(averageRating))} />
                  <span className="text-[10px] text-cyan-500 font-mono tracking-wider uppercase">
                    {averageRating} / 5.0 ({totalReviews} INDEXED_REVIEWS)
                  </span>
                </div>
              )}

              <p className="text-xs font-mono text-zinc-400 border-l border-cyan-500/40 pl-3 py-1 italic bg-[#0c0c0e]/40 rounded-r-sm">
                "{product.summary}"
              </p>
            </div>

            {/* Pricing Node Block */}
            <div className="p-4 bg-[#0c0c0e] border border-zinc-900 rounded-md flex items-center justify-between">
              <div>
                <p className="text-[9px] font-mono text-zinc-500 uppercase tracking-widest">// ACQUISITION_VALUE</p>
                <div className="flex items-baseline gap-2 mt-1">
                  {hasDiscount ? (
                    <>
                      <span className="text-2xl font-mono font-bold text-cyan-500 tracking-tight">${product.offer_price}</span>
                      <span className="text-xs font-mono text-zinc-600 line-through">${product.real_price}</span>
                    </>
                  ) : (
                    <span className="text-2xl font-mono font-bold text-white tracking-tight">${product.real_price}</span>
                  )}
                </div>
              </div>
              
              <span className="text-[9px] text-zinc-400 font-mono bg-[#09090B] border border-zinc-800 px-3 py-1.5 rounded-sm uppercase tracking-widest">
                SECURE_NODE
              </span>
            </div>

            {/* Segmented Core Description Component */}
            <div className="border-t border-b border-zinc-900/60 py-4">
              <ProductDescription description={product.description} />
            </div>

            {/* Call to Action Trigger Button */}
            <Link href="/checkout" className="w-full">
  <button className="w-full py-3.5 bg-transparent border border-cyan-500 text-cyan-500 hover:bg-cyan-500 hover:text-black font-mono text-[10px] font-bold uppercase tracking-[0.2em] rounded-md transition-all duration-200 active:scale-[0.98] shadow-[0_0_20px_rgba(6,182,212,0.05)] hover:shadow-[0_0_25px_rgba(6,182,212,0.2)]">
    INITIALIZE_CHECKOUT // ADD TO CART
  </button>
</Link>

            
          </div>
        </div>

        {/* Separator Node line */}
        <div className="h-[1px] w-full bg-zinc-900" />

        {/* Feedback Section Wrapper */}
        <div className="w-full pt-4">
          <ReviewSection productId={product.id} initialReviews={product.reviews || []} />
        </div>

      </div>
    </div>
  );
}