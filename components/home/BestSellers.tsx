"use client";

import { motion } from "framer-motion";
import {
  Star,
  ShoppingCart,
  Heart,
  Eye,
  Flame,
  TrendingUp,
  ArrowRight,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState, memo } from "react";

// ✅ pretend API hook (replace later with React Query / SWR)
function useBestSellers() {
  const [data] = useState([]); // replace with API
  const [isLoading] = useState(false);
  const [error] = useState(null);

  return { data, isLoading, error };
}

// ✅ utility function (separate logic)
function getDiscountPercent(product: any) {
  if (product.originalPrice) {
    return Math.round(
      ((product.originalPrice - product.price) / product.originalPrice) * 100
    );
  }
  return product.discount || 0;
}

// ✅ currency formatter
const formatPrice = (price: number) =>
  new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(price);

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

function ProductCard({ product }: any) {
  const [isLiked, setIsLiked] = useState(false);
  const discountPercent = getDiscountPercent(product);

  return (
    <motion.div variants={itemVariants} className="group relative">
      <div className="relative bg-[var(--card)] rounded-2xl border border-[var(--border)] overflow-hidden hover:shadow-md transition">

        {/* Badges */}
        <div className="absolute top-3 left-3 z-10 flex flex-col gap-1">
          {product.isBestSeller && (
            <span className="badge">
              <Flame className="w-3 h-3" /> BESTSELLER
            </span>
          )}
          {discountPercent > 0 && (
            <span className="badge-red">-{discountPercent}%</span>
          )}
        </div>

        {/* Wishlist */}
        <button
          aria-label="Add to wishlist"
          onClick={(e) => {
            e.preventDefault();
            setIsLiked(!isLiked);
          }}
          className="absolute top-3 right-3 z-10 w-9 h-9 rounded-full bg-white flex items-center justify-center"
        >
          <Heart
            className={`w-4 h-4 ${
              isLiked ? "text-red-500 fill-red-500" : "text-gray-400"
            }`}
          />
        </button>

        {/* Image */}
        <Link href={`/product/${product.id}`} className="block relative aspect-[4/5]">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover group-hover:scale-105 transition"
          />
        </Link>

        {/* Info */}
        <div className="p-4">
          <p className="text-xs text-gray-400 uppercase">
            {product.category}
          </p>

          <h3 className="text-sm font-medium mt-1">
            {product.name}
          </h3>

          {/* Rating */}
          <div className="flex items-center gap-1 mt-2">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-3 ${
                  i < product.rating ? "text-yellow-400" : "text-gray-300"
                }`}
              />
            ))}
            <span className="text-xs text-gray-400">
              ({product.reviewCount})
            </span>
          </div>

          {/* Price */}
          <div className="mt-2 flex gap-2 items-center">
            <span className="font-semibold">
              {formatPrice(product.price)}
            </span>
            {product.originalPrice && (
              <span className="line-through text-sm text-gray-400">
                {formatPrice(product.originalPrice)}
              </span>
            )}
          </div>

          {/* Add to cart */}
          <button
            aria-label="Add to cart"
            className="mt-3 w-full py-2 bg-gray-100 rounded hover:bg-black hover:text-white transition flex justify-center gap-2"
          >
            <ShoppingCart className="w-4 h-4" />
            Add to Cart
          </button>
        </div>
      </div>
    </motion.div>
  );
}

// ✅ prevent unnecessary re-renders
const MemoProductCard = memo(ProductCard);

export function BestSellers() {
  const { data, isLoading, error } = useBestSellers();

  // ✅ Loading State
  if (isLoading) {
    return (
      <section className="py-20 text-center">
        <p>Loading products...</p>
      </section>
    );
  }

  // ✅ Error State
  if (error) {
    return (
      <section className="py-20 text-center text-red-500">
        Failed to load products
      </section>
    );
  }

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4">

        {/* Header */}
        <div className="flex justify-between items-center mb-10">
          <div>
            <span className="text-xs flex items-center gap-1 text-gray-400">
              <TrendingUp className="w-3" /> Trending
            </span>
            <h2 className="text-3xl font-semibold">Best Sellers</h2>
          </div>

          <Link href="/best-sellers" className="flex items-center gap-1 text-sm">
            View all <ArrowRight className="w-4" />
          </Link>
        </div>

        {/* Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {data?.map((product: any) => (
            <MemoProductCard key={product.id} product={product} />
          ))}
        </motion.div>

        {/* Empty state */}
        {data?.length === 0 && (
          <p className="text-center text-gray-400 mt-10">
            No best sellers found
          </p>
        )}
      </div>
    </section>
  );
}