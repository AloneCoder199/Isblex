// app/sections/FeaturedCategories.tsx
"use client";

import { motion } from "framer-motion";
import { ArrowRight, Shirt, ShoppingBag } from "lucide-react";
import Link from "next/link";

const categories = [
  {
    id: "men",
    name: "Men",
    description: "Premium men's fashion & accessories",
    icon: Shirt,
    itemCount: 45,
    href: "/category/men",
  },
  {
    id: "women",
    name: "Women",
    description: "Trendy women's collection",
    icon: ShoppingBag,
    itemCount: 38,
    href: "/category/women",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
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
      // "as const" lagane se TypeScript ko pata chal jayega ye fixed cubic-bezier values hain
      ease: [0.22, 1, 0.36, 1] as const, 
    },
  },
};

export function FeaturedCategories() {
  return (
    <section className="py-20 md:py-28 bg-[var(--background)] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--primary)]/10 text-[var(--primary)] text-sm font-medium mb-4">
            <ShoppingBag className="w-4 h-4" />
            Shop by Category
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--foreground)] mb-4 tracking-tight">
            Browse Our Collections
          </h2>
          <p className="text-[var(--muted-foreground)] text-lg max-w-2xl mx-auto">
            Curated selection of premium products. Start with our featured categories and discover quality.
          </p>
        </motion.div>

        {/* Categories Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-4xl mx-auto"
        >
          {categories.map((category, index) => (
            <motion.div key={category.id} variants={itemVariants}>
              <Link href={category.href} className="group block">
                <div className="relative overflow-hidden rounded-2xl bg-[var(--card)] border border-[var(--border)] transition-all duration-500 hover:shadow-2xl hover:shadow-[var(--primary)]/10 hover:border-[var(--primary)]/30 hover:-translate-y-1">
                  
                  {/* Background Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary)]/5 via-transparent to-[var(--accent)]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Content Container */}
                  <div className="relative p-8 md:p-10 flex flex-col items-center text-center">
                    {/* Icon Circle */}
                    <div className="w-20 h-20 rounded-2xl bg-[var(--muted)] flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-[var(--accent)] transition-all duration-500">
                      <category.icon className="w-10 h-10 text-[var(--primary)]" />
                    </div>

                    {/* Category Info */}
                    <h3 className="text-2xl md:text-3xl font-bold text-[var(--foreground)] mb-2 group-hover:text-[var(--primary)] transition-colors duration-300">
                      {category.name}
                    </h3>
                    <p className="text-[var(--muted-foreground)] mb-4 max-w-xs">
                      {category.description}
                    </p>

                    {/* Item Count Badge */}
                    <span className="inline-flex items-center px-3 py-1 rounded-full bg-[var(--muted)] text-[var(--muted-foreground)] text-sm font-medium mb-6">
                      {category.itemCount} Products
                    </span>

                    {/* CTA */}
                    <div className="flex items-center gap-2 text-[var(--primary)] font-semibold group-hover:gap-3 transition-all duration-300">
                      Explore Collection
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  </div>

                  {/* Bottom Accent Line */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[var(--primary)] to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="mt-12 text-center"
        >
          <Link
            href="/shop"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-[var(--primary)] text-[var(--primary-foreground)] font-semibold hover:opacity-90 transition-all duration-300 hover:shadow-lg hover:shadow-[var(--primary)]/25 hover:-translate-y-0.5"
          >
            View All Products
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}