"use client";

import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { Suspense } from "react";

function SuccessInvoiceContent() {
  const searchParams = useSearchParams();
  const orderId = searchParams.get("orderId");
  const referenceNo = searchParams.get("ref");
  const method = searchParams.get("method") || "COD";

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-stone-800 flex items-center justify-center p-4 font-sans mt-10 selection:bg-[#E3ECE6] selection:text-[#3A4D3F]">
      <div className="max-w-md w-full bg-white border border-[#EBE7E0] rounded-2xl p-8 shadow-[0_4px_30px_rgba(0,0,0,0.01)] text-center space-y-6 relative overflow-hidden">
        
        {/* Success Animated Fine-Line Icon */}
        <div className="mx-auto h-14 w-14 bg-[#E3ECE6] border border-[#4E6151]/10 rounded-full flex items-center justify-center text-[#4E6151]">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
          </svg>
        </div>

        {/* Premium Typography Header */}
        <div className="space-y-1.5">
          <div className="text-[10px] text-[#A69276] tracking-[0.2em] font-medium uppercase">
            Transaction Processed
          </div>
          <h1 className="text-2xl font-serif font-light tracking-wide text-stone-900">
            Order <span className="text-[#4E6151] font-normal">Confirmed</span>
          </h1>
          <p className="text-xs text-stone-500 max-w-xs mx-auto leading-relaxed">
            Thank you for your patronage. Your order request has been securely registered within our fulfillment system.
          </p>
        </div>

        {/* Minimalist Receipt Parameters Ledger */}
        <div className="bg-[#FAF8F5] border border-[#EBE7E0] rounded-xl p-5 text-left text-xs space-y-3.5">
          <div className="flex justify-between items-center border-b border-stone-200/60 pb-2.5">
            <span className="text-stone-500 font-medium uppercase tracking-wider text-[10px]">Fullfilment State</span>
            <span className="text-[#3A4D3F] font-semibold uppercase tracking-widest bg-[#E3ECE6] px-2.5 py-0.5 rounded-md text-[9px] border border-[#4E6151]/10">
              {method === "COD" ? "Pending Dispatch" : "Paid Securely"}
            </span>
          </div>

          <div className="space-y-1">
            <span className="text-stone-500 font-medium uppercase tracking-wider text-[10px] block">Order Identifier</span>
            <span className="text-stone-900 font-mono text-xs block truncate bg-white p-2 rounded-lg border border-[#EBE7E0]">
              {orderId || "N/A_ORDER_STATION"}
            </span>
          </div>

          {referenceNo && (
            <div className="space-y-1">
              <span className="text-stone-500 font-medium uppercase tracking-wider text-[10px] block">Processing Reference</span>
              <span className="text-stone-900 font-mono text-xs block truncate bg-white p-2 rounded-lg border border-[#EBE7E0]">
                {referenceNo}
              </span>
            </div>
          )}
        </div>

        {/* Informative Footnote */}
        <p className="text-[11px] text-stone-400 italic px-2 leading-relaxed">
          A comprehensive summary containing your selected items and logistics tracking data has been routed to your registered email address.
        </p>

        {/* Navigation Action Trigger */}
        <div className="pt-2">
          <Link
            href="/products"
            className="block w-full py-3.5 bg-[#4E6151] text-white text-xs font-semibold uppercase tracking-widest rounded-xl shadow-sm hover:bg-[#3D4E40] transition-colors text-center active:scale-[0.98]"
          >
            Return to Collection
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
        <div className="min-h-screen bg-[#FAF8F5] flex flex-col items-center justify-center text-stone-600 font-sans gap-3">
          <div className="h-5 w-5 border-2 border-[#4E6151] border-t-transparent rounded-full animate-spin"></div>
          <span className="text-[10px] uppercase tracking-widest font-medium text-stone-400 animate-pulse">
            Loading Confirmation...
          </span>
        </div>
      }
    >
      <SuccessInvoiceContent />
    </Suspense>
  );
}