import Link from "next/link";
import { Button } from "@/components/ui/button";
import { 
  ArrowRight, 
  Star, 
  Truck, 
  Shield, 
  Clock,
  ShoppingBag,
  Zap,
  TrendingUp,
  CheckCircle2,
  Play,
  ChevronDown,
  Smartphone,
  Shirt,
  Home,
  Dumbbell,
  Headphones,
  Watch,
  Camera,
  Gamepad2
} from "lucide-react";
import Image from "next/image";

// ==========================================
// FEATURED CATEGORIES DATA
// ==========================================

const categories = [
  { name: "Electronics", icon: Headphones, items: "2.5k+", color: "from-blue-500 to-cyan-500" },
  { name: "Fashion", icon: Shirt, items: "5k+", color: "from-pink-500 to-rose-500" },
  { name: "Home", icon: Home, items: "3k+", color: "from-amber-500 to-orange-500" },
  { name: "Sports", icon: Dumbbell, items: "1.5k+", color: "from-emerald-500 to-teal-500" },
  { name: "Watches", icon: Watch, items: "800+", color: "from-violet-500 to-purple-500" },
  { name: "Gaming", icon: Gamepad2, items: "1.2k+", color: "from-red-500 to-pink-500" },
];

const trustFeatures = [
  { icon: Truck, title: "Free Shipping", desc: "On orders over $50" },
  { icon: Shield, title: "Secure Payment", desc: "256-bit encryption" },
  { icon: Clock, title: "24/7 Support", desc: "Always here to help" },
  { icon: Zap, title: "Fast Delivery", desc: "2-3 business days" },
];

const stats = [
  { value: "50K+", label: "Happy Customers" },
  { value: "10K+", label: "Products" },
  { value: "4.9", label: "Rating" },
  { value: "30+", label: "Categories" },
];

// ==========================================
// HERO SECTION COMPONENT
// ==========================================

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[var(--background)]">
      
      {/* ==========================================
          HERO SECTION
      ========================================== */}
      <section className="relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#6366F1]/5 via-transparent to-[#8B5CF6]/5 pointer-events-none" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#6366F1]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#8B5CF6]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-24 pb-16 md:pt-32 md:pb-24">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            
            {/* Left Content */}
            <div className="text-center lg:text-left order-2 lg:order-1">
              
              {/* Trust Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#6366F1]/10 border border-[#6366F1]/20 mb-6 animate-fade-in">
                <Star className="h-4 w-4 text-[#6366F1] fill-[#6366F1]" />
                <span className="text-sm font-medium text-[#6366F1]">Trusted by 50,000+ Customers</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[var(--foreground)] leading-[1.1] tracking-tight mb-6">
                Premium Quality{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6366F1] to-[#8B5CF6]">
                  Products
                </span>{" "}
                at Affordable Prices
              </h1>

              {/* Subheadline */}
              <p className="text-lg sm:text-xl text-[var(--muted-foreground)] max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed">
                Discover curated collections with fast shipping, secure checkout, and 30-day easy returns. Your satisfaction is our priority.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-10">
                <Link href="/products">
                  <Button 
                    size="lg"
                    className="h-14 px-8 bg-[#6366F1] hover:bg-[#4F46E5] text-white font-semibold text-lg rounded-xl shadow-lg shadow-[#6366F1]/25 hover:shadow-[#6366F1]/40 transition-all group"
                  >
                    <ShoppingBag className="mr-2 h-5 w-5" />
                    Shop Now
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <Link href="/categories">
                  <Button 
                    variant="outline"
                    size="lg"
                    className="h-14 px-8 border-[var(--border)] text-[var(--foreground)] dark:text-black  font-semibold text-lg rounded-xl"
                  >
                    <Play className="mr-2 h-5 w-5 fill-current" />
                    Explore
                  </Button>
                </Link>
              </div>

              {/* Stats Row */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 md:gap-8 mb-10">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <p className="text-2xl md:text-3xl font-bold text-[var(--foreground)]">{stat.value}</p>
                    <p className="text-xs md:text-sm text-[var(--muted-foreground)]">{stat.label}</p>
                  </div>
                ))}
              </div>

              {/* Trust Features */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 md:gap-6">
                {trustFeatures.slice(0, 3).map((feature, index) => (
                  <div key={index} className="flex items-center gap-2 text-sm text-[var(--muted-foreground)]">
                    <div className="h-8 w-8 rounded-lg bg-[#6366F1]/10 flex items-center justify-center">
                      <feature.icon className="h-4 w-4 text-[#6366F1]" />
                    </div>
                    <span className="hidden sm:inline">{feature.title}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Content - Hero Image */}
            <div className="relative order-1 lg:order-2">
              <div className="relative aspect-square md:aspect-[4/5] rounded-3xl overflow-hidden bg-gradient-to-br from-[var(--accent)] to-[var(--muted)] shadow-2xl">
                <Image
                  src="/hero-product.jpg"
                  alt="Premium Products Collection"
                  fill
                  className="object-cover"
                  priority
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />

                {/* New Arrival Badge */}
                <div className="absolute top-6 left-6 bg-white/95 backdrop-blur-sm rounded-2xl px-4 py-3 shadow-lg">
                  <div className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                    <p className="text-xs font-semibold text-gray-600 uppercase tracking-wider">New Arrival</p>
                  </div>
                  <p className="text-lg font-bold text-gray-900 mt-1">Summer 2026</p>
                </div>

                {/* Price Tag */}
                <div className="absolute bottom-6 right-6 bg-[#6366F1] text-white rounded-2xl px-5 py-4 shadow-lg">
                  <p className="text-xs opacity-90 mb-1">Starting from</p>
                  <p className="text-3xl font-bold">$29.99</p>
                </div>

                {/* Discount Badge */}
                <div className="absolute top-6 right-6 bg-red-500 text-white rounded-xl px-3 py-2 shadow-lg">
                  <p className="text-sm font-bold">-40%</p>
                </div>
              </div>

              {/* Floating Stats Cards */}
              <div className="absolute -bottom-4 -left-4 md:-bottom-6 md:-left-6 bg-[var(--card)] rounded-2xl p-4 shadow-xl border border-[var(--border)] hidden sm:block animate-float">
                <div className="flex items-center gap-3">
                  <div className="h-12 w-12 rounded-full bg-emerald-100 flex items-center justify-center">
                    <CheckCircle2 className="h-6 w-6 text-emerald-600" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-[var(--foreground)]">2,500+</p>
                    <p className="text-xs text-[var(--muted-foreground)]">Orders this week</p>
                  </div>
                </div>
              </div>

              <div className="absolute -top-4 -right-4 md:-top-6 md:-right-6 bg-[var(--card)] rounded-2xl p-4 shadow-xl border border-[var(--border)] hidden sm:block animate-float-delayed">
                <div className="flex items-center gap-1 mb-2">
                  {[1,2,3,4,5].map((star) => (
                    <Star key={star} className="h-4 w-4 text-amber-400 fill-amber-400" />
                  ))}
                </div>
                <p className="text-sm font-bold text-[var(--foreground)]">4.9/5 Rating</p>
                <p className="text-xs text-[var(--muted-foreground)]">12k+ reviews</p>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 md:hidden">
          <div className="flex flex-col items-center gap-2 text-[var(--muted-foreground)]">
            <span className="text-xs">Scroll</span>
            <ChevronDown className="h-5 w-5 animate-bounce" />
          </div>
        </div>
      </section>

      {/* ==========================================
          TRUST FEATURES BAR
      ========================================== */}
      <section className="py-8 bg-[var(--accent)]/50 border-y border-[var(--border)]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {trustFeatures.map((feature, index) => (
              <div key={index} className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-xl bg-[#6366F1]/10 flex items-center justify-center flex-shrink-0">
                  <feature.icon className="h-6 w-6 text-[#6366F1]" />
                </div>
                <div>
                  <p className="font-semibold text-[var(--foreground)] text-sm md:text-base">{feature.title}</p>
                  <p className="text-xs text-[var(--muted-foreground)]">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}