"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { 
  Home, 
  ShoppingBag, 
  Grid3X3, 
  Tag, 
  Info,
  ShoppingCart, 
  Search, 
  User, 
  Moon, 
  Sun,
  Plus
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/components/providers/theme-provider";

// ==========================================
// NAVIGATION CONFIGURATION
// ==========================================

// Desktop top navigation
const desktopNavItems = [
  { name: "Home", href: "/", icon: Home },
  { name: "Shop", href: "/products", icon: ShoppingBag },
  { name: "Categories", href: "/categories", icon: Grid3X3 },
  { name: "Deals", href: "/deals", icon: Tag },
  { name: "About", href: "/about", icon: Info },
];

// Mobile bottom navigation (TikTok style - 4 items)
const mobileNavItems = [
  { name: "Home", href: "/", icon: Home },
  { name: "Shop", href: "/products", icon: ShoppingBag },
  { name: "Cart", href: "/cart", icon: ShoppingCart, badge: true },
  { name: "Profile", href: "/profile", icon: User },
];

// ==========================================
// NAVBAR COMPONENT
// ==========================================

export function Navbar() {
  const [cartCount, setCartCount] = useState(2);
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  };

  const isActive = (href: string) => pathname === href;

  return (
    <>
      {/* ==========================================
          DESKTOP HEADER - Apple Style
          ========================================== */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[var(--background)]/80 backdrop-blur-xl border-b border-[var(--border)]/30 hidden md:block">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <nav className="flex h-14 items-center justify-between">
            
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

            {/* Center Navigation */}
            <div className="flex items-center gap-1">
              {desktopNavItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`px-4 py-2 text-sm font-medium rounded-full transition-all duration-200 ${
                    isActive(item.href)
                      ? "bg-[var(--accent)] text-[var(--foreground)]"
                      : "text-[var(--muted-foreground)] hover:text-[var(--foreground)] hover:bg-[var(--accent)]/50"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* Right Actions */}
            <div className="flex items-center gap-1">
              {/* Search */}
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setSearchOpen(!searchOpen)}
                className="h-9 w-9 rounded-full text-[var(--muted-foreground)] hover:text-[var(--foreground)] hover:bg-[var(--accent)]"
              >
                <Search className="h-[18px] w-[18px]" />
              </Button>

              {/* Theme Toggle */}
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleTheme}
                className="h-9 w-9 rounded-full text-[var(--muted-foreground)] hover:text-[var(--foreground)] hover:bg-[var(--accent)]"
              >
                {mounted && resolvedTheme === "dark" ? (
                  <Sun className="h-[18px] w-[18px]" />
                ) : (
                  <Moon className="h-[18px] w-[18px]" />
                )}
              </Button>

              {/* Cart */}
              <Link href="/cart">
                <Button
                  variant="ghost"
                  size="icon"
                  className="relative h-9 w-9 rounded-full text-[var(--muted-foreground)] hover:text-[var(--foreground)] hover:bg-[var(--accent)]"
                >
                  <ShoppingCart className="h-[18px] w-[18px]" />
                  {cartCount > 0 && (
                    <span className="absolute top-0 right-0 h-4 w-4 rounded-full bg-[#6366F1] text-[9px] font-semibold text-white flex items-center justify-center">
                      {cartCount > 9 ? '9+' : cartCount}
                    </span>
                  )}
                </Button>
              </Link>

              {/* Profile */}
              <Link href="/profile">
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-9 w-9 rounded-full text-[var(--muted-foreground)] hover:text-[var(--foreground)] hover:bg-[var(--accent)]"
                >
                  <User className="h-[18px] w-[18px]" />
                </Button>
              </Link>
            </div>
          </nav>
        </div>

        {/* Search Dropdown */}
        {searchOpen && (
          <div className="absolute top-14 left-0 right-0 bg-[var(--background)] border-b border-[var(--border)]/30 p-4 animate-in slide-in-from-top-2 duration-200">
            <div className="max-w-lg mx-auto">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-[var(--muted-foreground)]" />
                <input
                  type="text"
                  placeholder="Search products..."
                  className="w-full h-10 pl-10 pr-4 rounded-full bg-[var(--accent)] text-[var(--foreground)] placeholder:text-[var(--muted-foreground)] text-sm focus:outline-none focus:ring-2 focus:ring-[#6366F1]"
                  autoFocus
                />
              </div>
            </div>
          </div>
        )}
      </header>

      {/* ==========================================
          MOBILE HEADER - Minimal Top Bar
          ========================================== */}
      <header className="fixed top-0 left-0 right-0 z-40 bg-[var(--background)] border-b border-[var(--border)]/50 md:hidden">
        <div className="flex h-14 items-center justify-between px-4">
          {/* Left: Theme Toggle */}
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            className="h-10 w-10 rounded-full text-[var(--foreground)]"
          >
            {mounted && resolvedTheme === "dark" ? (
              <Sun className="h-5 w-5" />
            ) : (
              <Moon className="h-5 w-5" />
            )}
          </Button>

          {/* Center: Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="h-7 w-7 rounded-md bg-[#6366F1] flex items-center justify-center">
              <span className="text-white font-bold text-xs">IS</span>
            </div>
            <span className="font-bold text-lg text-[var(--foreground)]">ISBLEX</span>
          </Link>

          {/* Right: Search + Cart */}
          <div className="flex items-center gap-1">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setSearchOpen(!searchOpen)}
              className="h-10 w-10 rounded-full text-[var(--foreground)]"
            >
              <Search className="h-5 w-5" />
            </Button>

            <Link href="/cart">
              <Button
                variant="ghost"
                size="icon"
                className="relative h-10 w-10 rounded-full text-[var(--foreground)]"
              >
                <ShoppingCart className="h-5 w-5" />
                {cartCount > 0 && (
                  <span className="absolute top-1 right-1 h-4 w-4 rounded-full bg-[#6366F1] text-[9px] font-bold text-white flex items-center justify-center">
                    {cartCount > 9 ? '9+' : cartCount}
                  </span>
                )}
              </Button>
            </Link>
          </div>
        </div>

        {/* Mobile Search Dropdown */}
        {searchOpen && (
          <div className="absolute top-14 left-0 right-0 bg-[var(--background)] border-b border-[var(--border)]/50 p-3 animate-in slide-in-from-top-2 duration-200">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-[var(--muted-foreground)]" />
              <input
                type="text"
                placeholder="Search products..."
                className="w-full h-10 pl-10 pr-4 rounded-full bg-[var(--accent)] text-[var(--foreground)] placeholder:text-[var(--muted-foreground)] text-sm focus:outline-none focus:ring-2 focus:ring-[#6366F1]"
                autoFocus
              />
            </div>
          </div>
        )}
      </header>

      {/* ==========================================
          MOBILE BOTTOM NAV - TikTok Style
          ========================================== */}
      <nav className="fixed bottom-0 left-0 right-0 z-50 bg-[var(--background)] border-t border-[var(--border)]/50 md:hidden safe-area-pb">
        <div className="flex items-center justify-around h-16 max-w-md mx-auto px-4">
          {mobileNavItems.map((item) => {
            const active = isActive(item.href);
            
            return (
              <Link
                key={item.name}
                href={item.href}
                className="flex flex-col items-center justify-center gap-0.5 flex-1 h-full relative min-w-0"
              >
                <div className="relative">
                  <item.icon 
                    className={`h-6 w-6 transition-all duration-200 ${
                      active 
                        ? "text-[#6366F1] stroke-[2.5px]" 
                        : "text-[var(--muted-foreground)] stroke-2"
                    }`} 
                  />
                  {item.badge && cartCount > 0 && (
                    <span className="absolute -top-1 -right-2 h-4 min-w-4 px-1 rounded-full bg-[#6366F1] text-[9px] font-bold text-white flex items-center justify-center">
                      {cartCount > 9 ? '9+' : cartCount}
                    </span>
                  )}
                </div>
                <span 
                  className={`text-[11px] font-medium truncate max-w-[60px] transition-colors duration-200 ${
                    active ? "text-[#6366F1]" : "text-[var(--muted-foreground)]"
                  }`}
                >
                  {item.name}
                </span>
                {active && (
                  <div className="absolute -bottom-0.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-[#6366F1]" />
                )}
              </Link>
            );
          })}
        </div>
      </nav>

      {/* ==========================================
          SPACERS
          ========================================== */}
      {/* Desktop spacer */}
      <div className="h-14 hidden md:block" />
      
      {/* Mobile spacers */}
      <div className="h-14 md:hidden" /> {/* Top header */}
      <div className="h-16 md:hidden" /> {/* Bottom nav */}
    </>
  );
}