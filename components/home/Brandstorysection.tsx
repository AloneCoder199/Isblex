"use client";

import { useEffect, useRef, useState } from "react";

const STATS = [
  { value: "50K+", label: "Happy Customers" },
  { value: "4.9★", label: "Average Rating" },
  { value: "120+", label: "Products" },
  { value: "3 Yrs", label: "Trusted Since" },
];

const STORY_STEPS = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
        <path d="M12 6v6l4 2" />
      </svg>
    ),
    title: "Born in 2021",
    desc: "Started from a single room, with a dream to bring quality to every doorstep in Pakistan.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 00-3-3.87" />
        <path d="M16 3.13a4 4 0 010 7.75" />
      </svg>
    ),
    title: "Community First",
    desc: "Every product is tested by real people. Your feedback shapes what we build next.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    title: "Quality Promise",
    desc: "We source only what we'd use ourselves. No compromises, no shortcuts — ever.",
  },
];

const MOMENTS = [
  { label: "Morning routine", accent: "#6366F1", initials: "AR", name: "Ayesha R.", quote: "Finally a brand that gets Pakistani lifestyle." },
  { label: "Family pick", accent: "#8B5CF6", initials: "UF", name: "Usman F.", quote: "My whole family shops here now. Trust banaya unhone." },
  { label: "Daily carry", accent: "#06B6D4", initials: "SN", name: "Sara N.", quote: "Quality + price combo — unmatched in Pakistan." },
];

function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return { ref, visible };
}

export default function BrandStorySection() {
  const { ref, visible } = useInView();

  return (
    <section ref={ref} className="w-full py-16 px-4 sm:px-6 lg:px-8" style={{ background: "var(--background)" }}>
      <div className="max-w-5xl mx-auto space-y-16">

        {/* ── Top: Brand story left + moments right ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

          {/* Left: story text */}
          <div
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateX(0)" : "translateX(-28px)",
              transition: "opacity .6s ease, transform .6s cubic-bezier(.22,1,.36,1)",
            }}
          >
            {/* Pill */}
            <span
              className="inline-flex items-center gap-2 text-[10px] font-bold tracking-[.18em] uppercase px-3 py-1.5 rounded-full mb-6"
              style={{ background: "rgba(99,102,241,.08)", color: "#6366F1", border: "1px solid rgba(99,102,241,.2)" }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#6366F1]" />
              Our Story
            </span>

            <h2
              className="text-3xl sm:text-4xl font-extrabold leading-tight tracking-tight mb-4"
              style={{ color: "var(--foreground)" }}
            >
              We don't just sell
              <br />
              <span style={{ color: "#6366F1" }}>products.</span> We sell
              <br />a feeling.
            </h2>

            <p className="text-sm leading-relaxed mb-8" style={{ color: "var(--muted-foreground)" }}>
              ISBLEX was built on one belief — that great quality shouldn't be a luxury.
              Every item in our store is handpicked, tested, and loved before it reaches you.
              We're not a faceless warehouse. We're your neighbor who happens to have great taste.
            </p>

            {/* Story steps */}
            <div className="space-y-4">
              {STORY_STEPS.map((step, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3"
                  style={{
                    opacity: visible ? 1 : 0,
                    transform: visible ? "translateY(0)" : "translateY(12px)",
                    transition: `opacity .5s ease ${300 + i * 100}ms, transform .5s ease ${300 + i * 100}ms`,
                  }}
                >
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 mt-0.5"
                    style={{ background: "rgba(99,102,241,.1)", color: "#6366F1" }}
                  >
                    {step.icon}
                  </div>
                  <div>
                    <p className="text-sm font-semibold mb-0.5" style={{ color: "var(--foreground)" }}>{step.title}</p>
                    <p className="text-xs leading-relaxed" style={{ color: "var(--muted-foreground)" }}>{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Customer moments */}
          <div
            className="space-y-3"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateX(0)" : "translateX(28px)",
              transition: "opacity .6s ease .15s, transform .6s cubic-bezier(.22,1,.36,1) .15s",
            }}
          >
            {MOMENTS.map((m, i) => (
              <div
                key={i}
                className="flex items-center gap-4 p-4 rounded-2xl"
                style={{
                  background: "var(--card)",
                  border: `1px solid var(--border)`,
                  borderLeft: `3px solid ${m.accent}`,
                  opacity: visible ? 1 : 0,
                  transform: visible ? "translateY(0)" : "translateY(16px)",
                  transition: `opacity .5s ease ${200 + i * 120}ms, transform .5s ease ${200 + i * 120}ms`,
                }}
              >
                {/* Avatar */}
                <div
                  className="w-11 h-11 rounded-full flex items-center justify-center text-sm font-bold shrink-0"
                  style={{ background: `color-mix(in srgb, ${m.accent} 15%, transparent)`, color: m.accent }}
                >
                  {m.initials}
                </div>
                <div className="min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <p className="text-sm font-semibold" style={{ color: "var(--foreground)" }}>{m.name}</p>
                    <span
                      className="text-[10px] font-semibold px-2 py-0.5 rounded-full"
                      style={{ background: `color-mix(in srgb, ${m.accent} 10%, transparent)`, color: m.accent }}
                    >
                      {m.label}
                    </span>
                  </div>
                  <p className="text-xs italic leading-relaxed truncate" style={{ color: "var(--muted-foreground)" }}>
                    "{m.quote}"
                  </p>
                </div>
              </div>
            ))}

            {/* Image placeholder mosaic */}
            <div className="grid grid-cols-3 gap-2 mt-2">
              {["#6366F1", "#8B5CF6", "#06B6D4"].map((c, i) => (
                <div
                  key={i}
                  className="aspect-square rounded-xl flex items-center justify-center"
                  style={{
                    background: `color-mix(in srgb, ${c} 10%, var(--card))`,
                    border: `1px solid color-mix(in srgb, ${c} 20%, var(--border))`,
                  }}
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"
                    style={{ width: 28, height: 28, color: c, opacity: .5 }}>
                    <rect x="3" y="3" width="18" height="18" rx="2" />
                    <circle cx="8.5" cy="8.5" r="1.5" />
                    <path d="M21 15l-5-5L5 21" />
                  </svg>
                </div>
              ))}
            </div>
            <p className="text-[10px] text-center" style={{ color: "var(--muted-foreground)" }}>
              Replace with real lifestyle photos from your customers
            </p>
          </div>
        </div>

        {/* ── Stats bar ── */}
        <div
          className="grid grid-cols-2 sm:grid-cols-4 gap-4"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(20px)",
            transition: "opacity .6s ease .4s, transform .6s ease .4s",
          }}
        >
          {STATS.map((s, i) => (
            <div
              key={i}
              className="flex flex-col items-center text-center py-6 rounded-2xl"
              style={{
                background: "var(--card)",
                border: "1px solid var(--border)",
              }}
            >
              <span className="text-2xl font-extrabold tracking-tight" style={{ color: "#6366F1" }}>{s.value}</span>
              <span className="text-xs mt-1" style={{ color: "var(--muted-foreground)" }}>{s.label}</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}