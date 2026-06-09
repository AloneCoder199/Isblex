"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const products = [
  "/images/about-1.png",
  "/images/about-2.png",
  "/images/about-3.png",
  "/images/about-1.png",
  "/images/about-2.png",
  "/images/about-3.png",
  "/images/about-2.png",
  "/images/about-1.png",
];

export default function AboutHero() {
  return (
    <section className="relative min-h-[90vh] bg-brand-dark text-foreground flex items-center justify-center overflow-hidden pt-24 pb-16 px-4 md:px-8">
      
      <div className="max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* TEXT CONTENT: Mobile pe upar (order-1) aur Desktop pe right side (lg:order-2) */}
        <div className="lg:col-span-6 space-y-6 text-center lg:text-left order-1 lg:order-2">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground">
            Nature’s Science. <br />
            <span className="text-brand-border">Dermal Harmony.</span>
          </h1>
          <p className="text-brand-muted max-w-md mx-auto lg:mx-0">
            Precision engineering meets botanical essence. Our products revolve around the core of clinical purity.
          </p>
         

{/* Is ko apne component mein use karein */}
<Link href="/products" className="inline-block">
  <button className="px-8 py-3 bg-foreground text-brand-dark rounded-full font-bold">
    Explore Collection
  </button>
</Link>

        </div>

        {/* ORBITAL SYSTEM ANIMATION: Mobile pe niche (order-2) aur Desktop pe left side (lg:order-1) */}
        <div className="lg:col-span-6 flex justify-center items-center h-[400px] md:h-[600px] relative order-2 lg:order-1">
          
          {/* CENTER LOGO (Protected from Save/Drag) */}
          <div className="relative z-20 w-24 h-24 md:w-40 md:h-40 rounded-full border border-brand-card/30 flex items-center justify-center bg-brand-dark shadow-2xl select-none pointer-events-none">
            <Image 
              src="/images/prifya-logo.png" 
              alt="Prifya Logo" 
              width={80} 
              height={80} 
              className="w-12 h-12 md:w-20 md:h-20 object-contain"
              draggable="false"
              onContextMenu={(e) => e.preventDefault()}
            />
          </div>

          {/* ORBITING PRODUCTS CONTAINER */}
          <div className="absolute w-[280px] h-[280px] md:w-[550px] md:h-[550px] animate-[spin_30s_linear_infinite]">
            {products.map((src, index) => {
              const angle = (index / products.length) * 360;
              return (
                <div
                  key={index}
                  className="absolute top-1/2 left-1/2 -ml-7 -mt-7 w-14 h-14 md:-ml-12 md:-mt-12 md:w-24 md:h-24 select-none pointer-events-none"
                  style={{
                    transform: `rotate(${angle}deg) translate(var(--orbit-radius, 120px)) rotate(-${angle}deg)`,
                  }}
                >
                  <div className="relative w-full h-full">
                    <Image
                      src={src}
                      alt="Product"
                      fill
                      className="object-contain"
                      draggable="false"
                      onContextMenu={(e) => e.preventDefault()}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>

      {/* GLOBAL STYLES FOR RESPONSIVE RADIUS AND ANIMATION */}
      <style jsx global>{`
        :root {
          --orbit-radius: 120px;
        }
        @media (min-width: 768px) {
          :root {
            --orbit-radius: 240px;
          }
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </section>
  );
}
