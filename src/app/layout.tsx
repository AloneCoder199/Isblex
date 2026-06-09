import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Fottor"; // 🛠️ Note: Agar aap ne folder ka naam 'Footer' kiya to yahan 'Footer' kar lena
import { CartProvider } from "@/context/CartContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Professional Viewport for PWA
export const viewport: Viewport = {
  themeColor: "#4E6151",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

// Advanced SEO Metadata
export const metadata: Metadata = {
  title: {
    default: "PRIFYA | Premium Botanical Skincare & Hair Science",
    template: "%s | PRIFYA Atelier"
  },
  description: "Experience the science of nature. PRIFYA delivers high-potency Rosemary & Biotin formulations designed for true cellular transformation and dermal harmony.",
  keywords: ["PRIFYA", "Botanical Skincare", "Rosemary Hair Serum", "Organic Beauty Science", "Cellular Repair", "Hair Growth Treatment"],
  authors: [{ name: "Prifya Team" }],
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_PK",
    url: "https://prifya.com",
    title: "PRIFYA | Premium Botanical Skincare & Hair Science",
    description: "High-potency botanical skincare & hair growth solutions.",
    siteName: "PRIFYA",
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  // 🏢 Global Organization Schema (Google Knowledge Graph ke liye)
  const globalOrganizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "PRIFYA",
    "url": "https://prifya.com",
    "logo": "https://prifya.com",
    "description": "PRIFYA delivers high-potency Rosemary & Biotin formulations designed for true cellular transformation and dermal harmony.",
    "sameAs": [
      "https://facebook.com",  // 🔗 Apne sahi social links yahan badal sakte hain
      "https://instagram.com"
    ]
  };

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} scroll-smooth antialiased`}
    >
      <head>
        {/* PWA Manifest */}
        <link rel="manifest" href="/manifest.json" />
        
        {/* Global Google Brand Identity Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(globalOrganizationSchema) }}
        />
      </head>
      
      <body className="min-h-screen bg-brand-dark text-foreground flex flex-col font-sans selection:bg-brand-border/30 selection:text-foreground">
        
        <CartProvider>
          {/* Main content wrapper */}
          <main className="flex-grow w-full relative">
            <Navbar />
            <article>{children}</article>
          </main>
          <Footer />
        </CartProvider>
        
      </body>
    </html>
  );
}
