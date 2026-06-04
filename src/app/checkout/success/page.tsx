"use client";

import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { Suspense } from "react";

function SuccessInvoiceContent() {
  const searchParams = useSearchParams();
  const orderId = searchParams.get("orderId");
  const referenceNo = searchParams.get("ref");

  return (
    <div className="min-h-screen bg-background text-foreground flex items-center justify-center p-4 font-sans">
      <div className="max-w-md w-full bg-brand-card border border-brand-border rounded-2xl p-8 shadow-2xl text-center space-y-6 relative overflow-hidden">
        
        {/* Neon Glow Aesthetic Decor */}
        <div className="absolute -top-10 -left-10 w-32 h-32 bg-brand-cyan/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-brand-blue/10 rounded-full blur-3xl"></div>

        {/* Success Animated Icon */}
        <div className="mx-auto h-16 w-16 bg-emerald-950/50 border border-emerald-500/40 rounded-full flex items-center justify-center text-emerald-400 animate-pulse">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-8 h-8">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
          </svg>
        </div>

        {/* Heading */}
        <div className="space-y-1">
          <h1 className="text-2xl font-black text-white uppercase tracking-tight">
            Payment <span className="text-brand-cyan">Authorized</span>
          </h1>
          <p className="text-sm text-brand-muted">
            Janii, aapka order successfully place ho chuka hai!
          </p>
        </div>

        {/* Receipt Matrix Credentials */}
        <div className="bg-background/60 border border-brand-border/40 rounded-xl p-4 text-left font-mono text-xs space-y-3">
          <div className="flex justify-between items-center border-b border-brand-border/20 pb-2">
            <span className="text-brand-muted uppercase">Order Status:</span>
            <span className="text-emerald-400 font-bold uppercase tracking-wider bg-emerald-950/40 px-2 py-0.5 rounded border border-emerald-500/20">
              Paid
            </span>
          </div>

          <div className="space-y-1">
            <span className="text-brand-muted uppercase block">Internal Order ID:</span>
            <span className="text-white text-sm font-bold block truncate bg-background p-1.5 rounded border border-brand-border/40">
              {orderId || "N/A_INTR_ID"}
            </span>
          </div>

          <div className="space-y-1">
            <span className="text-brand-muted uppercase block">2Checkout Gateway Ref:</span>
            <span className="text-brand-cyan text-sm font-bold block truncate bg-background p-1.5 rounded border border-brand-border/40">
              {referenceNo || "N/A_2CO_REF"}
            </span>
          </div>
        </div>

        {/* Information Message */}
        <p className="text-xs text-brand-muted italic px-2">
          A confirmation email with your digital asset tracking details has been dispatched to your address.
        </p>

        {/* Navigation Actions */}
        <div className="pt-2">
          <Link
            href="/"
            className="block w-full py-3 bg-linear-to-r from-brand-blue to-brand-cyan text-brand-dark text-xs font-black uppercase tracking-widest rounded-xl shadow-md hover:opacity-90 transition-all active:scale-95 text-center"
          >
            Continue Exploration
          </Link>
        </div>

      </div>
    </div>
  );
}

// Master Wrapper Component with Suspense Boundary
export default function CheckoutSuccessPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-background flex flex-col items-center justify-center text-white font-mono gap-3">
          <div className="h-6 w-6 border-2 border-brand-cyan border-t-transparent rounded-full animate-spin"></div>
          <span>Decrypting Invoice Matrix...</span>
        </div>
      }
    >
      <SuccessInvoiceContent />
    </Suspense>
  );
}