// app/sections/BestSellers.tsx
"use client";

import { motion } from "framer-motion";
import { Star, ShoppingCart, Heart, Eye, Flame, TrendingUp, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { products } from "@/data/productData";

// Best seller products filter
const bestSellers = products.filter((p) => p.isBestSeller).slice(0, 4);

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviewCount: number;
  image: string;
  category: string;
  isBestSeller?: boolean;
  isNew?: boolean;
  discount?: number;
}

function ProductCard({ product }: { product: Product }) {
  const [isLiked, setIsLiked] = useState(false);

  const discountPercent = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : product.discount || 0;

  return (
    <motion.div
      variants={itemVariants}
      className="group relative"
    >
      <div className="relative bg-[var(--card)] rounded-2xl border border-[var(--border)] overflow-hidden transition-all duration-500 hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:border-[var(--primary)]/20 hover:-translate-y-1">
        
        {/* Soft Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary)]/[0.02] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

        {/* Badges Container */}
        <div className="absolute top-3 left-3 z-10 flex flex-col gap-1.5">
          {/* Best Seller Badge - Soft Orange */}
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-orange-100 text-orange-700 text-[10px] sm:text-xs font-semibold tracking-wide">
            <Flame className="w-3 h-3" />
            BESTSELLER
          </span>
          
          {/* Discount Badge - Soft Red */}
          {discountPercent > 0 && (
            <span className="inline-flex items-center px-2.5 py-1 rounded-full bg-red-100 text-red-700 text-[10px] sm:text-xs font-semibold tracking-wide">
              -{discountPercent}%
            </span>
          )}
          
          {/* New Badge - Soft Green */}
          {product.isNew && (
            <span className="inline-flex items-center px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-700 text-[10px] sm:text-xs font-semibold tracking-wide">
              NEW
            </span>
          )}
        </div>

        {/* Wishlist Button - Soft Style */}
        <button
          onClick={(e) => {
            e.preventDefault();
            setIsLiked(!isLiked);
          }}
          className="absolute top-3 right-3 z-10 w-9 h-9 rounded-full bg-[var(--background)]/90 backdrop-blur-sm flex items-center justify-center transition-all duration-300 hover:bg-[var(--muted)] border border-[var(--border)] shadow-sm"
        >
          <Heart
            className={`w-4 h-4 transition-all duration-300 ${
              isLiked ? "fill-red-500 text-red-500 scale-110" : "text-[var(--muted-foreground)] hover:text-[var(--foreground)]"
            }`}
          />
        </button>

        {/* Image Container */}
        <Link href={`/product/${product.id}`} className="block relative aspect-[4/5] overflow-hidden bg-[var(--muted)]">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
          />
          
          {/* Soft Overlay on Hover */}
          <div className="absolute inset-0 bg-[var(--primary)]/0 group-hover:bg-[var(--primary)]/[0.03] transition-colors duration-500" />

          {/* Quick View Button - Appears on Hover */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <button
              className="w-12 h-12 rounded-full bg-[var(--background)]/95 backdrop-blur-sm text-[var(--foreground)] flex items-center justify-center shadow-lg translate-y-4 group-hover:translate-y-0 transition-all duration-500 hover:bg-[var(--primary)] hover:text-[var(--primary-foreground)]"
              title="Quick View"
            >
              <Eye className="w-5 h-5" />
            </button>
          </div>
        </Link>

        {/* Product Info - Soft Spacing */}
        <div className="p-4">
          {/* Category Tag */}
          <span className="text-[11px] font-medium text-[var(--muted-foreground)] uppercase tracking-widest">
            {product.category}
          </span>
          
          {/* Product Name */}
          <Link href={`/product/${product.id}`}>
            <h3 className="mt-1.5 text-sm font-medium text-[var(--foreground)] line-clamp-2 group-hover:text-[var(--primary)] transition-colors duration-300 leading-relaxed">
              {product.name}
            </h3>
          </Link>

          {/* Rating - Soft Stars */}
          <div className="mt-2 flex items-center gap-2">
            <div className="flex items-center gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-3.5 h-3.5 ${
                    i < Math.floor(product.rating)
                      ? "fill-amber-400 text-amber-400"
                      : "fill-[var(--border)] text-[var(--border)]"
                  }`}
                />
              ))}
            </div>
            <span className="text-[11px] text-[var(--muted-foreground)]">
              ({product.reviewCount})
            </span>
          </div>

          {/* Price - Soft Styling */}
          <div className="mt-3 flex items-baseline gap-2">
            <span className="text-lg font-semibold text-[var(--foreground)]">
              ${product.price.toFixed(2)}
            </span>
            {product.originalPrice && (
              <span className="text-sm text-[var(--muted-foreground)] line-through">
                ${product.originalPrice.toFixed(2)}
              </span>
            )}
          </div>

          {/* Soft Add to Cart Button */}
          <button className="mt-4 w-full py-2.5 rounded-lg bg-[var(--muted)] text-[var(--foreground)] text-sm font-medium flex items-center justify-center gap-2 transition-all duration-300 hover:bg-[var(--primary)] hover:text-[var(--primary-foreground)] active:scale-[0.98]">
            <ShoppingCart className="w-4 h-4" />
            Add to Cart
          </button>
        </div>
      </div>
    </motion.div>
  );
}

export function BestSellers() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-[var(--background)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header - Soft & Minimal */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10 sm:mb-12"
        >
          <div>
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[var(--muted)] text-[var(--muted-foreground)] text-xs font-medium mb-3">
              <TrendingUp className="w-3.5 h-3.5" />
              Trending Now
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-[var(--foreground)] tracking-tight">
              Best Sellers
            </h2>
            <p className="mt-2 text-[var(--muted-foreground)] text-sm sm:text-base max-w-md leading-relaxed">
              Our most loved products, handpicked for quality and style.
            </p>
          </div>
          
          <Link
            href="/best-sellers"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors duration-300 group"
          >
            View all
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </motion.div>

        {/* Products Grid */}
        {bestSellers.length > 0 ? (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 lg:gap-6"
          >
            {bestSellers.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-center py-16"
          >
            <p className="text-[var(--muted-foreground)]">
              No best sellers found. Mark products as isBestSeller in productData.ts
            </p>
          </motion.div>
        )}

        {/* Soft Trust Signals */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="mt-12 sm:mt-16 pt-8 sm:pt-12 border-t border-[var(--border)]"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 text-center">
            {[
              { label: "Happy Customers", value: "10K+" },
              { label: "Products Sold", value: "50K+" },
              { label: "Average Rating", value: "4.8" },
              { label: "Fast Shipping", value: "24h" },
            ].map((stat, index) => (
              <div key={index} className="space-y-1">
                <div className="text-2xl sm:text-3xl font-semibold text-[var(--foreground)]">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm text-[var(--muted-foreground)]">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}