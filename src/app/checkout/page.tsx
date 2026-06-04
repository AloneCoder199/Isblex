import CheckoutClient from "@/components/Checkout/CheckoutClient"; // Apne component ka sahi path check kar lein

export const metadata = {
  title: "Secure Checkout | Premium Digital Store",
  description: "Complete your order securely using our encrypted 2Checkout gateway.",
};

export default function CheckoutPage() {
  return (
    <main className="min-h-screen bg-background text-foreground relative overflow-hidden py-12 px-4 sm:px-6 lg:px-8 mt-18">
      
      {/* Background Subtle Aesthetics */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-20%] w-[600px] h-[600px] bg-brand-blue/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-[20%] right-[-25%] w-[500px] h-[500px] bg-brand-cyan/5 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-5xl mx-auto relative z-10 space-y-8">
        
        {/* Page Header */}
        <div className="text-center md:text-left space-y-2 border-b border-brand-border/40 pb-6">
          <h1 className="text-3xl font-black tracking-tight text-white uppercase sm:text-4xl">
            Secure <span className="text-brand-cyan">Checkout</span>
          </h1>
          <p className="text-sm text-brand-muted max-w-xl">
            Janii, apni billing aur card details enter karein. Aapki transaction end-to-end encrypted (PCI-DSS Compliant) hai.
          </p>
        </div>

        {/* The Main Checkout Component Bridge */}
        <div className="grid grid-cols-1 gap-8">
          <CheckoutClient />
        </div>

      </div>
    </main>
  );
}