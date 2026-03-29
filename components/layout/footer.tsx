"use client";
import Image from "next/image"; // Yeh top par import kar lein
import { useState } from "react";
import Link from "next/link";
import {
  Shield,
  Truck,
  RotateCcw,
  ChevronRight,
  ChevronDown,
  Mail,
  Phone,
  ArrowUp,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

// ==========================================
// FOOTER CONFIGURATION
// ==========================================

const footerLinks = {
  Shop: [
    { name: "All Products", href: "/products" },
    { name: "Categories", href: "/categories" },
    { name: "New Arrivals", href: "/new-arrivals" },
    { name: "Deals", href: "/deals" },
  ],
  Support: [
    { name: "Help Center", href: "/help" },
    { name: "Track Order", href: "/track-order" },
    { name: "Returns", href: "/returns" },
    { name: "Contact", href: "/contact" },
  ],
  Company: [
    { name: "About", href: "/about" },
    { name: "Careers", href: "/careers" },
    { name: "Privacy", href: "/privacy" },
    { name: "Terms", href: "/terms" },
  ],
};

const trustBadges = [
  { icon: Shield, label: "Secure", desc: "256-bit SSL" },
  { icon: Truck, label: "Fast", desc: "Free shipping" },
  { icon: RotateCcw, label: "Returns", desc: "30 days" },
];

// ==========================================
// SOCIAL ICONS
// ==========================================

const socialLinks = [
  {
    name: "Facebook",
    href: "https://facebook.com/isblex",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M24 12.073C24 5.446 18.627 0 12 0S0 5.446 0 12.073c0 6.027 4.388 11.02 10.125 11.854v-8.437H7.078v-3.49h3.047V9.43c0-3.02 1.792-4.688 4.533-4.688 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.927-1.956 1.879v2.25h3.328l-.532 3.49h-2.796v8.437C19.612 23.093 24 18.1 24 12.073z" />
      </svg>
    ),
  },
  {
    name: "Twitter",
    href: "https://twitter.com/isblex",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.259 5.63 5.905-5.63zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    name: "Instagram",
    href: "https://instagram.com/isblex",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
      </svg>
    ),
  },
  {
    name: "YouTube",
    href: "https://youtube.com/isblex",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136C4.495 20.455 12 20.455 12 20.455s7.505 0 9.376-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  },
];

const paymentMethods = ["Visa", "Mastercard", "PayPal", "Apple Pay"];

// ==========================================
// MOBILE ACCORDION COMPONENT
// ==========================================

function MobileAccordion({
  title,
  links,
}: {
  title: string;
  links: { name: string; href: string }[];
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-[var(--border)]">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full py-4 text-left"
      >
        <span className="font-semibold text-sm text-[var(--foreground)] tracking-wide uppercase">
          {title}
        </span>
        <ChevronDown
          className={`h-4 w-4 text-[var(--muted-foreground)] transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-60 pb-4" : "max-h-0"
        }`}
      >
        <ul className="space-y-3 pl-1">
          {links.map((link) => (
            <li key={link.name}>
              <Link
                href={link.href}
                className="text-sm text-[var(--muted-foreground)] hover:text-[#6366F1] transition-colors flex items-center gap-2 group"
              >
                <ChevronRight className="h-3 w-3 text-[#6366F1] group-hover:translate-x-0.5 transition-transform" />
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

// ==========================================
// MAIN FOOTER COMPONENT
// ==========================================

export function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setSubscribed(true);
  };

  return (
    <footer className="bg-[var(--card)] border-t border-[var(--border)] mt-auto pb-20 md:pb-0 relative overflow-hidden">
      
      {/* =========================================
          TRUST BADGES — Desktop
      ========================================= */}
      <div className="hidden md:block border-b border-[var(--border)]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-8">
          <div className="grid grid-cols-3 gap-6">
            {trustBadges.map((badge) => (
              <div
                key={badge.label}
                className="flex items-center gap-4 p-5 rounded-2xl bg-[var(--accent)]/50 border border-[var(--border)] hover:border-[#6366F1]/30 transition-all duration-300 group"
              >
                <div className="h-12 w-12 rounded-xl bg-[#6366F1]/10 flex items-center justify-center border border-[#6366F1]/20 group-hover:bg-[#6366F1]/20 transition-all">
                  <badge.icon className="h-5 w-5 text-[#6366F1]" />
                </div>
                <div>
                  <p className="font-semibold text-[var(--card-foreground)] text-sm">{badge.label}</p>
                  <p className="text-xs text-[var(--muted-foreground)] mt-0.5">{badge.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* =========================================
          TRUST BADGES — Mobile (horizontal scroll)
      ========================================= */}
      <div className="md:hidden pt-6 px-4">
        <div className="flex gap-3 overflow-x-auto no-scrollbar pb-2">
          {trustBadges.map((badge) => (
            <div
              key={badge.label}
              className="flex-shrink-0 w-36 bg-[var(--background)] rounded-2xl p-4 shadow-sm border border-[var(--border)]"
            >
              <div className="h-9 w-9 rounded-lg bg-[#6366F1]/10 flex items-center justify-center border border-[#6366F1]/20 mb-3">
                <badge.icon className="h-4 w-4 text-[#6366F1]" />
              </div>
              <p className="font-semibold text-[var(--foreground)] text-xs leading-tight">{badge.label}</p>
              <p className="text-[10px] text-[var(--muted-foreground)] mt-1 leading-tight">{badge.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* =========================================
          MAIN CONTENT
      ========================================= */}
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8 py-10 md:py-14 relative">

        {/* ---- DESKTOP GRID ---- */}
        <div className="hidden md:grid grid-cols-12 gap-12 mb-14">
          
          {/* Brand + Newsletter */}
          <div className="col-span-4 space-y-7">
            {/* Logo */}
  <Link href="/" className="flex items-center gap-3 group transition-all duration-300">
      {/* Logo Container - 80px */}
      <div className="relative h-16 w-16 md:h-20 md:w-20 flex items-center justify-center transition-transform duration-500 group-hover:scale-105">
        <Image
          src="/llogo.png" 
          alt="ISBLEX Logo"
          fill
          className="object-contain scale-110 md:scale-125 transition-all duration-300"
          priority
        />
      </div>

      {/* Text Content */}
      <div className="flex flex-col justify-center">
        <span className="font-bold text-xl md:text-2xl text-[var(--foreground)] block tracking-tighter group-hover:text-[#6366F1] transition-colors leading-none mb-1">
          ISBLEX
        </span>
        <span className="text-[10px] md:text-xs font-semibold text-[var(--muted-foreground)] tracking-[0.2em] uppercase opacity-70">
          Premium Store
        </span>
      </div>
    </Link>


            <p className="text-sm text-[var(--muted-foreground)] leading-relaxed max-w-xs">
              Your trusted destination for premium products, fast delivery, and world-class customer support.
            </p>

            {/* Contact */}
            <div className="space-y-2">
              <a
                href="mailto:support@isblex.com"
                className="flex items-center gap-2.5 text-sm text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors group"
              >
                <div className="h-7 w-7 rounded-lg bg-[var(--accent)] flex items-center justify-center group-hover:bg-[#6366F1]/20 transition-colors">
                  <Mail className="h-3.5 w-3.5 text-[#6366F1]" />
                </div>
                support@isblex.com
              </a>
              <a
                href="tel:+923001234567"
                className="flex items-center gap-2.5 text-sm text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors group"
              >
                <div className="h-7 w-7 rounded-lg bg-[var(--accent)] flex items-center justify-center group-hover:bg-[#6366F1]/20 transition-colors">
                  <Phone className="h-3.5 w-3.5 text-[#6366F1]" />
                </div>
                +92 300 123 4567
              </a>
            </div>

            {/* Newsletter */}
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Sparkles className="h-4 w-4 text-[#6366F1]" />
                <h4 className="font-semibold text-sm text-[var(--card-foreground)]">Get 15% off your first order</h4>
              </div>
              {subscribed ? (
                <div className="flex items-center gap-2 text-sm text-emerald-500 bg-emerald-500/10 border border-emerald-500/20 rounded-xl px-4 py-3">
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  You're subscribed! Check your email.
                </div>
              ) : (
                <form className="flex gap-2" onSubmit={handleSubscribe}>
                  <Input
                    type="email"
                    placeholder="your@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex-1 h-10 bg-[var(--background)] border-[var(--input)] text-[var(--foreground)] placeholder:text-[var(--muted-foreground)] rounded-xl focus:border-[#6366F1]/50 focus:ring-[#6366F1]/20 text-sm"
                  />
                  <Button
                    type="submit"
                    className="h-10 px-5 bg-[#6366F1] hover:bg-[#4F46E5] text-white font-semibold rounded-xl text-sm shadow-lg shadow-[#6366F1]/25 transition-all"
                  >
                    Join
                  </Button>
                </form>
              )}
            </div>
          </div>

          {/* Desktop Link Columns */}
          <div className="col-span-8 grid grid-cols-3 gap-8">
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category}>
                <h4 className="font-bold text-xs text-[var(--card-foreground)] uppercase tracking-widest mb-5 pb-3 border-b border-[var(--border)]">
                  {category}
                </h4>
                <ul className="space-y-3">
                  {links.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className="text-sm text-[var(--muted-foreground)] hover:text-[#6366F1] transition-colors flex items-center gap-2 group"
                      >
                        <span className="h-1 w-1 rounded-full bg-[var(--muted-foreground)] group-hover:bg-[#6366F1] group-hover:w-2 transition-all duration-200" />
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* ---- MOBILE BRAND SECTION ---- */}
        <div className="md:hidden mt-6 mb-8">
   <Link href="/" className="flex items-center gap-3 group transition-all duration-300">
      {/* Logo Container - 80px */}
      <div className="relative h-16 w-16 md:h-20 md:w-20 flex items-center justify-center transition-transform duration-500 group-hover:scale-105">
        <Image
          src="/llogo.png" 
          alt="ISBLEX Logo"
          fill
          className="object-contain scale-110 md:scale-125 transition-all duration-300"
          priority
        />
      </div>

      {/* Text Content */}
      <div className="flex flex-col justify-center">
        <span className="font-bold text-xl md:text-2xl text-[var(--foreground)] block tracking-tighter group-hover:text-[#6366F1] transition-colors leading-none mb-1">
          ISBLEX
        </span>
        <span className="text-[10px] md:text-xs font-semibold text-[var(--muted-foreground)] tracking-[0.2em] uppercase opacity-70">
          Premium Store
        </span>
      </div>
    </Link>


          {/* Newsletter Card — Mobile */}
          <div className="bg-[var(--accent)]/50 border border-[var(--border)] rounded-2xl p-5 mb-6">
            <div className="flex items-center gap-2 mb-1">
              <Sparkles className="h-4 w-4 text-[#6366F1]" />
              <h3 className="font-bold text-base text-[var(--foreground)]">Get 15% Off</h3>
            </div>
            <p className="text-xs text-[var(--muted-foreground)] mb-4">Subscribe for exclusive deals & early access</p>
            {subscribed ? (
              <div className="flex items-center gap-2 text-sm text-emerald-500 bg-emerald-500/10 border border-emerald-500/20 rounded-xl px-4 py-3">
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Subscribed! Check your email.
              </div>
            ) : (
              <form className="flex gap-2" onSubmit={handleSubscribe}>
                <Input
                  type="email"
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 h-11 bg-[var(--background)] border-[var(--input)] text-[var(--foreground)] placeholder:text-[var(--muted-foreground)] rounded-xl text-sm"
                />
                <Button
                  type="submit"
                  className="h-11 px-5 bg-[#6366F1] hover:bg-[#4F46E5] text-white font-semibold rounded-xl shadow-lg shadow-[#6366F1]/30"
                >
                  Join
                </Button>
              </form>
            )}
          </div>

          {/* Contact — Mobile */}
          <div className="flex gap-3 mb-6">
            <a
              href="mailto:support@isblex.com"
              className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-[var(--accent)] border border-[var(--border)] text-sm text-[var(--muted-foreground)] hover:text-[var(--foreground)] hover:border-[#6366F1]/30 transition-all"
            >
              <Mail className="h-4 w-4 text-[#6366F1]" />
              Email
            </a>
            <a
              href="tel:+923001234567"
              className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-[var(--accent)] border border-[var(--border)] text-sm text-[var(--muted-foreground)] hover:text-[var(--foreground)] hover:border-[#6366F1]/30 transition-all"
            >
              <Phone className="h-4 w-4 text-[#6366F1]" />
              Call Us
            </a>
          </div>
        </div>

        {/* ---- MOBILE ACCORDION LINKS ---- */}
        <div className="md:hidden mb-8">
          {Object.entries(footerLinks).map(([category, links]) => (
            <MobileAccordion key={category} title={category} links={links} />
          ))}
        </div>

        {/* ---- SOCIAL LINKS — Mobile ---- */}
        <div className="md:hidden mb-8">
          <p className="text-[10px] uppercase tracking-widest text-[var(--muted-foreground)] text-center mb-4">
            Follow Us
          </p>
          <div className="grid grid-cols-4 gap-3">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
                className="h-12 rounded-2xl bg-[var(--accent)] border border-[var(--border)] flex items-center justify-center text-[var(--muted-foreground)] hover:text-[#6366F1] hover:border-[#6366F1]/30 shadow-sm hover:scale-105 active:scale-95 transition-all duration-200"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        {/* ---- DESKTOP BOTTOM ROW ---- */}
        <div className="hidden md:flex items-center justify-between pt-8 border-t border-[var(--border)]">
          {/* Social Icons */}
          <div className="flex items-center gap-2.5">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
                className="h-9 w-9 rounded-xl bg-[var(--accent)] border border-[var(--border)] flex items-center justify-center text-[var(--muted-foreground)] hover:text-[#6366F1] hover:border-[#6366F1]/30 hover:scale-110 transition-all duration-200"
              >
                {social.icon}
              </a>
            ))}
          </div>

          {/* Center: Payment methods */}
          <div className="flex items-center gap-2">
            {paymentMethods.map((method) => (
              <span
                key={method}
                className="px-3 py-1.5 bg-[var(--accent)] border border-[var(--border)] rounded-lg text-[10px] font-semibold text-[var(--muted-foreground)] tracking-wide"
              >
                {method}
              </span>
            ))}
          </div>

          {/* Back to top */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center gap-2 text-xs text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors group"
          >
            Back to top
            <div className="h-7 w-7 rounded-lg bg-[var(--accent)] flex items-center justify-center group-hover:bg-[#6366F1]/20 transition-colors">
              <ArrowUp className="h-3.5 w-3.5" />
            </div>
          </button>
        </div>
      </div>

      {/* =========================================
          COPYRIGHT BAR — Desktop
      ========================================= */}
      <div className="hidden md:block border-t border-[var(--border)]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-4 flex items-center justify-between">
          <p className="text-xs text-[var(--muted-foreground)]">
            © {new Date().getFullYear()} ISBLEX. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="text-xs text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors">Privacy</Link>
            <Link href="/terms" className="text-xs text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors">Terms</Link>
            <Link href="/sitemap" className="text-xs text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors">Sitemap</Link>
          </div>
        </div>
      </div>

      {/* =========================================
          MOBILE BOTTOM BAR
      ========================================= */}
      <div className="md:hidden border-t border-[var(--border)] bg-[var(--accent)]/30">
        <div className="px-4 py-4 space-y-3">
          {/* Payment methods */}
          <div className="flex items-center justify-center gap-2 flex-wrap">
            {paymentMethods.map((method) => (
              <span
                key={method}
                className="px-2.5 py-1 bg-[var(--background)] border border-[var(--border)] rounded-lg text-[9px] font-bold text-[var(--muted-foreground)] tracking-wide"
              >
                {method}
              </span>
            ))}
          </div>

          {/* Copyright + Back to top */}
          <div className="flex items-center justify-between">
            <p className="text-[10px] text-[var(--muted-foreground)]">
              © {new Date().getFullYear()} ISBLEX. All rights reserved.
            </p>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="flex items-center gap-1.5 text-[10px] text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors"
            >
              Top
              <ArrowUp className="h-3 w-3" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}