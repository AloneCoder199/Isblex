"use client";

import { useEffect, useRef, useState, useCallback } from "react";

const OFFERS = [
  {
    id: 1,
    badge: "Flash Sale",
    title: "Flat 30% Off",
    subtitle: "On all electronics & accessories",
    code: "SAVE30",
    accent: "#6366F1",
    accentMuted: "rgba(99,102,241,0.10)",
    accentBorder: "rgba(99,102,241,0.20)",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    ),
    hasTimer: true,
    endHours: 5,
    endMins: 42,
    endSecs: 18,
  },
  {
    id: 2,
    badge: "Special Offer",
    title: "Buy 1 Get 1 Free",
    subtitle: "Selected fashion & lifestyle items",
    code: "BOGO2024",
    accent: "#8B5CF6",
    accentMuted: "rgba(139,92,246,0.10)",
    accentBorder: "rgba(139,92,246,0.20)",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M20 12V22H4V12" />
        <path d="M22 7H2v5h20V7z" />
        <path d="M12 22V7" />
        <path d="M12 7H7.5a2.5 2.5 0 010-5C11 2 12 7 12 7z" />
        <path d="M12 7h4.5a2.5 2.5 0 000-5C13 2 12 7 12 7z" />
      </svg>
    ),
    hasTimer: false,
  },
  {
    id: 3,
    badge: "Limited Time",
    title: "Free Shipping",
    subtitle: "On orders over Rs. 1,500 today only",
    code: "SHIP0",
    accent: "#10B981",
    accentMuted: "rgba(16,185,129,0.10)",
    accentBorder: "rgba(16,185,129,0.20)",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <rect x="1" y="3" width="15" height="13" rx="2" />
        <path d="M16 8h4l3 5v3h-7V8z" />
        <circle cx="5.5" cy="18.5" r="2.5" />
        <circle cx="18.5" cy="18.5" r="2.5" />
      </svg>
    ),
    hasTimer: false,
  },
];

function useCountdown(initialH: number, initialM: number, initialS: number) {
  const totalSecs = initialH * 3600 + initialM * 60 + initialS;
  const [secs, setSecs] = useState(totalSecs);

  useEffect(() => {
    const id = setInterval(() => setSecs((s) => (s > 0 ? s - 1 : 0)), 1000);
    return () => clearInterval(id);
  }, []);

  const h = Math.floor(secs / 3600);
  const m = Math.floor((secs % 3600) / 60);
  const s = secs % 60;
  return { h, m, s };
}

function TimerBlock({ value, label }: { value: number; label: string }) {
  return (
    <div className="flex flex-col items-center">
      <span
        className="text-xl font-bold tabular-nums w-10 h-10 flex items-center justify-center rounded-lg"
        style={{ background: "rgba(99,102,241,0.12)", color: "#6366F1" }}
      >
        {String(value).padStart(2, "0")}
      </span>
      <span className="text-[10px] mt-1 font-medium uppercase tracking-wider" style={{ color: "var(--muted-foreground)" }}>
        {label}
      </span>
    </div>
  );
}

function TimerSep() {
  return <span className="text-lg font-bold mb-4" style={{ color: "#6366F1" }}>:</span>;
}

function CopyCode({ code, accent }: { code: string; accent: string }) {
  const [copied, setCopied] = useState(false);
  const copy = () => {
    navigator.clipboard.writeText(code).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <button
      onClick={copy}
      className="flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-semibold tracking-wider uppercase transition-all duration-200 active:scale-95"
      style={{
        background: "var(--card)",
        border: `1.5px dashed ${accent}`,
        color: accent,
        letterSpacing: "0.12em",
      }}
    >
      {copied ? (
        <>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ width: 13, height: 13 }}>
            <path d="M20 6L9 17l-5-5" />
          </svg>
          Copied!
        </>
      ) : (
        <>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={{ width: 13, height: 13 }}>
            <rect x="9" y="9" width="13" height="13" rx="2" />
            <path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1" />
          </svg>
          {code}
        </>
      )}
    </button>
  );
}

function OfferCard({ offer, index, visible }: { offer: typeof OFFERS[0]; index: number; visible: boolean }) {
  const { h, m, s } = useCountdown(
    offer.hasTimer ? (offer as any).endHours : 0,
    offer.hasTimer ? (offer as any).endMins : 0,
    offer.hasTimer ? (offer as any).endSecs : 0
  );

  return (
    <div
      className="relative flex flex-col gap-4 p-5 rounded-2xl overflow-hidden transition-all duration-500"
      style={{
        background: "var(--card)",
        border: `1px solid ${offer.accentBorder}`,
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(20px)",
        transitionDelay: `${index * 100}ms`,
      }}
    >
      {/* Subtle top glow */}
      <div
        className="absolute inset-x-0 top-0 h-px"
        style={{ background: offer.accent, opacity: 0.5 }}
      />

      {/* Badge + Icon row */}
      <div className="flex items-center justify-between">
        <span
          className="text-[10px] font-bold uppercase tracking-[0.15em] px-2.5 py-1 rounded-full"
          style={{
            background: offer.accentMuted,
            color: offer.accent,
            border: `1px solid ${offer.accentBorder}`,
          }}
        >
          {offer.badge}
        </span>
        <div
          className="w-9 h-9 rounded-xl flex items-center justify-center"
          style={{ background: offer.accentMuted, color: offer.accent }}
        >
          {offer.icon}
        </div>
      </div>

      {/* Title & subtitle */}
      <div>
        <p className="text-2xl font-bold tracking-tight" style={{ color: "var(--foreground)" }}>
          {offer.title}
        </p>
        <p className="text-xs mt-0.5 leading-relaxed" style={{ color: "var(--muted-foreground)" }}>
          {offer.subtitle}
        </p>
      </div>

      {/* Countdown timer */}
      {offer.hasTimer && (
        <div>
          <p className="text-[10px] font-semibold uppercase tracking-widest mb-2" style={{ color: "var(--muted-foreground)" }}>
            Ends in
          </p>
          <div className="flex items-end gap-1.5">
            <TimerBlock value={h} label="hrs" />
            <TimerSep />
            <TimerBlock value={m} label="min" />
            <TimerSep />
            <TimerBlock value={s} label="sec" />
          </div>
        </div>
      )}

      {/* Divider */}
      <div className="h-px w-full" style={{ background: "var(--border)" }} />

      {/* CTA row */}
      <div className="flex items-center justify-between gap-3">
        <CopyCode code={offer.code} accent={offer.accent} />
        <button
          className="flex items-center gap-1.5 text-xs font-semibold transition-all duration-200 hover:gap-2.5"
          style={{ color: offer.accent }}
        >
          Shop Now
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: 13, height: 13 }}>
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default function PromoBanner() {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section ref={ref} className="w-full py-12 px-4 sm:px-6 lg:px-8" style={{ background: "var(--background)" }}>
      {/* Section pill */}
      <div className="flex items-center justify-center mb-10">
        <span
          className="text-xs font-semibold tracking-[0.18em] uppercase px-4 py-1.5 rounded-full"
          style={{
            background: "rgba(99,102,241,0.08)",
            color: "#6366F1",
            border: "1px solid rgba(99,102,241,0.2)",
          }}
        >
          Deals & Offers
        </span>
      </div>

      {/* Grid */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-4">
        {OFFERS.map((offer, i) => (
          <OfferCard key={offer.id} offer={offer} index={i} visible={visible} />
        ))}
      </div>
    </section>
  );
}