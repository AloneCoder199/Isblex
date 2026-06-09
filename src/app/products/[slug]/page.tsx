import { notFound } from 'next/navigation';
import { createServerClient } from '@supabase/ssr';
import { cookies } from 'next/headers';
import ProductGallery from '@/components/Products/ProductGallery';
import ProductDescription from '@/components/Products/ProductDescription';
import ReviewSection from '@/components/Products/ReviewSection';
import AddToCartButton from '@/components/Products/AddToCartButton'; // Yeh naya component add kiya

export const dynamic = 'force-dynamic';

interface Props {
  params: Promise<{ slug: string }>;
}

function getAverageRating(reviews: any[]) {
  if (!reviews || reviews.length === 0) return 0;
  const sum = reviews.reduce((acc, rev) => acc + rev.rating, 0);
  return (sum / reviews.length).toFixed(1);
}

const StarRating = ({ rating }: { rating: number }) => {
  return (
    <div className="flex text-[#C4A77D] text-sm gap-0.5">
      {[1, 2, 3, 4, 5].map((star) => (
        <span key={star} aria-hidden="true">{star <= rating ? '★' : '☆'}</span>
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
    <div className="min-h-screen bg-[#FDFBF7] text-[#1A1A1A] py-12 px-4 sm:px-6 lg:px-8 mt-18">
      <div className="max-w-7xl mx-auto space-y-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start relative">
          
          {/* LEFT INTERFACE: Gallery */}
          <div className="lg:col-span-7 space-y-4">
            <div className="text-xs font-medium text-[#A39F99] tracking-[0.1em] uppercase mb-2">
              The Collection / Curation
            </div>
            <ProductGallery 
              images={product.images || ['https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=600']} 
              videos={product.videos || []} 
              title={product.title} 
            />
          </div>

          {/* RIGHT INTERFACE: Product Actions */}
          <div className="lg:col-span-5 bg-white border border-[#EBEAE5] rounded-xl p-6 sm:p-10 space-y-8 lg:sticky lg:top-28 z-10 shadow-sm shadow-[#EBEAE5]/50">
            
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-[11px] font-medium text-[#1A1A1A] bg-[#FDFBF7] border border-[#EBEAE5] px-3 py-1.5 rounded-full uppercase tracking-wider">
                Model: {product.sku}
              </span>
              {product.stock_quantity <= product.low_stock_level ? (
                <span className="text-[11px] font-semibold uppercase tracking-wider bg-[#FFF1F1] text-[#D14343] border border-[#F5C9C9] px-3 py-1.5 rounded-full animate-pulse">
                  Limited Batch: {product.stock_quantity} remaining
                </span>
              ) : (
                <span className="text-[11px] font-medium text-[#4F7942] bg-[#F1F8F1] border border-[#C9E5C9] px-3 py-1.5 rounded-full uppercase tracking-wider">
                  Status: Available
                </span>
              )}
            </div>

            <div className="space-y-4">
              <h1 className="text-3xl sm:text-4xl font-serif text-[#1A1A1A] tracking-tight leading-snug">
                {product.title}
              </h1>
              
              {totalReviews > 0 && (
                <div className="flex items-center gap-3 border-b border-[#EBEAE5] pb-4">
                  <StarRating rating={Math.round(Number(averageRating))} />
                  <span className="text-sm text-[#A39F99] font-medium">
                    {averageRating} / 5.0 Rating ({totalReviews} Verified Notes)
                  </span>
                </div>
              )}

              <p className="text-base text-[#666666] leading-relaxed font-light italic pl-4 border-l-2 border-[#C4A77D]/50 bg-[#FDFBF7]/50 py-2 rounded-r-md">
                "{product.summary}"
              </p>
            </div>

            {/* Pricing Node Block */}
            <div className="p-5 bg-[#FDFBF7] border border-[#EBEAE5] rounded-xl flex items-center justify-between">
              <div>
                <p className="text-xs text-[#A39F99] uppercase tracking-widest font-medium">Curation Value</p>
                <div className="flex items-baseline gap-2.5 mt-1.5">
                  {hasDiscount ? (
                    <>
                      <span className="text-3xl font-semibold text-[#C4A77D] tracking-tight">${product.offer_price}</span>
                      <span className="text-base text-[#A39F99] line-through">${product.real_price}</span>
                    </>
                  ) : (
                    <span className="text-3xl font-semibold text-[#1A1A1A] tracking-tight">${product.real_price}</span>
                  )}
                </div>
              </div>
            </div>

            {/* Core Description */}
            <div className="border-t border-b border-[#EBEAE5] py-5 font-light text-[#666666] leading-relaxed">
              <ProductDescription description={product.description} />
            </div>

            {/* INTEGRATED BUTTONS */}
            <AddToCartButton product={product} />

          </div>
        </div>

        <div className="h-[1px] w-full bg-[#EBEAE5]" />

        <div className="w-full pt-6">
          <ReviewSection productId={product.id} initialReviews={product.reviews || []} />
        </div>
      </div>
    </div>
  );
}