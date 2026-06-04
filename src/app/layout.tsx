import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Fottor";
import { CartProvider } from "@/context/CartContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Up-to-date Premium Brand Metadata Configuration
export const metadata: Metadata = {
  title: "ISBLEX | Next-Gen Intelligent Lighting Systems",
  description: "Architectural-grade smart ambient lighting engineered for modern homes. Synchronize your spaces with adaptive circadian spectrums and 16 million colors.",
  keywords: ["ISBLEX", "Smart Lighting", "Architectural Lighting", "Ambient Lights", "Home Automation"],
  icons: {
    icon: "/favicon.ico", // Ensure your favicon is placed inside public/ folder
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased selection:bg-[#22D3EE]/30 selection:text-[#F8FAFC]`}
    >
      <body className="h-full bg-[#030712] text-[#F8FAFC] flex flex-col font-sans">
        {/* Structure Fixed: Navbar must reside inside the body tag */}
       
        
        {/* Main viewing frame */}
        <main className="grow w-full relative">
          <CartProvider>
             <Navbar />
          {children}
          </CartProvider>
        </main>
        <Footer/>
      </body>
    </html>
  );
}
