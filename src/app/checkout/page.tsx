import CheckoutClient from "@/components/Checkout/CheckoutClient";

export const metadata = {
  title: "Secure Checkout | Premium Atelier Collection",
  description: "Complete your order securely through our encrypted checkout process.",
};

export default function CheckoutPage() {
  return (
    <main className="min-h-screen bg-[#FAF8F5] text-stone-800 py-12 px-4 sm:px-6 lg:px-8 mt-20 font-sans selection:bg-[#E3ECE6] selection:text-[#3A4D3F]">
      
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* Elegant Premium Page Header */}
        <div className="text-left space-y-2 border-b border-stone-200/60 pb-6">
          <div className="text-[11px] text-[#A69276] tracking-[0.15em] font-medium uppercase">
            Verified Secure Session
          </div>
          <h1 className="text-2xl sm:text-3xl font-serif font-light tracking-wide text-stone-900">
            Secure <span className="text-[#4E6151] font-normal">Checkout</span>
          </h1>
          <p className="text-xs text-stone-500 max-w-xl tracking-wide leading-relaxed">
            Please provide your delivery and contact details below to finalize your order. 
            Your information is fully protected using industry-standard end-to-end encryption protocols.
          </p>
        </div>

        {/* The Main Checkout Component Bridge */}
        <div className="w-full">
          <CheckoutClient />
        </div>

      </div>
    </main>
  );
}