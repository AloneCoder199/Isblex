"use client";
import { useCart } from "@/context/CartContext";
import { useRouter } from "next/navigation";

export default function AddToCartButton({ product }: { product: any }) {
  const { addToCart } = useCart();
  const router = useRouter();

 const handleAddToCart = () => {
  addToCart({
    id: product.id,
    title: product.title,
    price: parseFloat(product.offer_price || product.real_price),
    slug: product.slug,
    image: product.images[0],
    quantity: 1 // Ab TypeScript bilkul khush rahega janii g!
  });
};

  const handleBuyNow = () => {
    handleAddToCart();
    router.push("/checkout");
  };

  return (
    <div className="grid grid-cols-2 gap-4">
      <button 
        onClick={handleAddToCart}
        className="py-4 border border-[#4F7942] text-[#4F7942] font-semibold text-sm uppercase tracking-[0.1em] rounded-lg hover:bg-[#F1F8F1] transition-all"
      >
        Add to Cart
      </button>
      <button 
        onClick={handleBuyNow}
        className="py-4 bg-[#4F7942] text-white font-semibold text-sm uppercase tracking-[0.1em] rounded-lg hover:bg-[#3D5E33] transition-all"
      >
        Buy Now
      </button>
    </div>
  );
}