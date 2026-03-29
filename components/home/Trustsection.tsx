"use client";

import { useEffect, useRef, useState } from "react";

const trustItems = [
  {
    id: 1,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <path d="M5 12h14" />
        <path d="M12 5l7 7-7 7" />
        <path d="M3 7c0-1.1.9-2 2-2h2l2 3-2 1.5S8 11 9 13s1.5 3 1.5 3L9 17.5 7 19H5a2 2 0 01-2-2V7z" />
        <path d="M21 7v10a2 2 0 01-2 2h-2l-2-1.5 1.5-1.5S15 13 14 11s-1-2.5-1-2.5L15 7h2a2 2 0 012 2z" />
      </svg>
    ),
    icon2: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <rect x="1" y="3" width="15" height="13" rx="2"/>
        <path d="M16 8h4l3 5v3h-7V8z"/>
        <circle cx="5.5" cy="18.5" r="2.5"/>
        <circle cx="18.5" cy="18.5" r="2.5"/>
      </svg>
    ),
    label: "Free Shipping",
    desc: "Orders above Rs. 2,000",
    accent: "#6366F1",
    delay: 0,
  },
  {
    id: 2,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/>
        <path d="M3 3v5h5"/>
        <path d="M12 7v5l4 2"/>
      </svg>
    ),
    label: "Easy Returns",
    desc: "7-day hassle-free returns",
    accent: "#8B5CF6",
    delay: 100,
  },
  {
    id: 3,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <rect x="2" y="5" width="20" height="14" rx="2"/>
        <path d="M2 10h20"/>
        <path d="M6 15h4"/>
        <path d="M14 15h4"/>
      </svg>
    ),
    label: "Secure Payment",
    desc: "100% encrypted & safe",
    accent: "#06B6D4",
    delay: 200,
  },
  {
    id: 4,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <path d="M5 8h14"/>
        <path d="M5 12h14"/>
        <path d="M5 16h6"/>
        <rect x="2" y="4" width="20" height="18" rx="2"/>
        <path d="M16 2v4"/>
        <path d="M8 2v4"/>
        <path d="M18 16l2 2 4-4" />
      </svg>
    ),
    label: "Fast Delivery",
    desc: "2–4 business days",
    accent: "#10B981",
    delay: 300,
  },
];

// Proper icons
const icons = {
  shipping: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
      <rect x="1" y="3" width="15" height="13" rx="2"/>
      <path d="M16 8h4l3 5v3h-7V8z"/>
      <circle cx="5.5" cy="18.5" r="2.5"/>
      <circle cx="18.5" cy="18.5" r="2.5"/>
    </svg>
  ),
  returns: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
      <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/>
      <path d="M3 3v5h5"/>
    </svg>
  ),
  payment: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
      <rect x="2" y="5" width="20" height="14" rx="2"/>
      <path d="M2 10h20"/>
      <path d="M6 15h4"/>
    </svg>
  ),
  delivery: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
      <path d="M9 11l3 3L22 4"/>
      <path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"/>
    </svg>
  ),
};

const items = [
  { icon: icons.shipping, label: "Free Shipping",   desc: "Orders above Rs. 2,000", accent: "#6366F1", delay: 0 },
  { icon: icons.returns,  label: "Easy Returns",    desc: "7-day hassle-free policy", accent: "#8B5CF6", delay: 80 },
  { icon: icons.payment,  label: "Secure Payment",  desc: "100% encrypted & safe",   accent: "#06B6D4", delay: 160 },
  { icon: icons.delivery, label: "Fast Delivery",   desc: "2–4 business days",        accent: "#10B981", delay: 240 },
];

export default function TrustSection() {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      className="w-full py-12 px-4 sm:px-6 lg:px-8"
      style={{ background: "var(--background)" }}
    >
      {/* Section Label */}
      <div className="flex items-center justify-center mb-10">
        <span
          className="text-xs font-semibold tracking-[0.2em] uppercase px-4 py-1.5 rounded-full"
          style={{
            background: "color-mix(in srgb, #6366F1 10%, transparent)",
            color: "#6366F1",
            border: "1px solid color-mix(in srgb, #6366F1 25%, transparent)",
          }}
        >
          Why Shop With Us
        </span>
      </div>

      {/* Cards Grid */}
      <div className="max-w-5xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-4">
        {items.map((item, i) => (
          <div
            key={i}
            className="group relative flex flex-col items-center text-center p-6 rounded-2xl cursor-default"
            style={{
              background: "var(--card)",
              border: "1px solid var(--border)",
              transform: visible ? "translateY(0)" : "translateY(24px)",
              opacity: visible ? 1 : 0,
              transition: `transform 0.5s cubic-bezier(0.22,1,0.36,1) ${item.delay}ms, opacity 0.5s ease ${item.delay}ms`,
            }}
          >
            {/* Glow blob on hover */}
            <div
              className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
              style={{
                background: `radial-gradient(ellipse at 50% 0%, color-mix(in srgb, ${item.accent} 12%, transparent), transparent 70%)`,
              }}
            />

            {/* Top accent line */}
            <div
              className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-0.5 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300"
              style={{ background: item.accent }}
            />

            {/* Icon container */}
            <div
              className="relative mb-4 w-14 h-14 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110"
              style={{
                background: `color-mix(in srgb, ${item.accent} 12%, transparent)`,
                color: item.accent,
              }}
            >
              {item.icon}
            </div>

            {/* Text */}
            <p
              className="font-semibold text-sm mb-1 tracking-tight"
              style={{ color: "var(--foreground)" }}
            >
              {item.label}
            </p>
            <p
              className="text-xs leading-relaxed"
              style={{ color: "var(--muted-foreground)" }}
            >
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}