"use client";

import { useState, useEffect } from "react";
import Script from "next/script";
import { createPendingOrder } from "@/app/actions/checkout"; // Apne server action ka exact path check kar lein
import { CheckoutFormData } from "@/types/checkout";
import { processSecurePayment } from "@/app/actions/processPayment"; // Apne file structure ke hisab se path set karein
import { useRouter } from 'next/navigation';
// Assuming your cart item structure
interface CartItem {
  id: string;
  title: string;
  price: number;
  quantity: number;
  image: string;
}

interface CheckoutClientProps {
  cartItems?: CartItem[]; // Yeh prop aapko global state ya localStorage se milega
}

export default function CheckoutClient({ cartItems = [] }: CheckoutClientProps) {
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [twoPayLoaded, setTwoPayLoaded] = useState(false);
   const router = useRouter();

  // Form Fields State
  const [formData, setFormData] = useState<CheckoutFormData>({
    name: "",
    email: "",
    phone: "",
    shippingAddress: {
      street: "",
      city: "",
      state: "",
      zipCode: "",
      country: "US", // Default country code
    },
  });

  // Calculate Subtotal dynamically on frontend for UI display
  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const shipping = subtotal > 0 ? 0 : 0; // Free shipping logic ya jo aapki marzi ho
  const total = subtotal + shipping;

  // 2Checkout 2Pay.js initialization
  useEffect(() => {
    if (twoPayLoaded && window.TwoPayClient && cartItems.length > 0) {
      try {
        // Yahan aap apna SANDBOX Seller ID (Merchant Code) dalenge
        // Abhi test karne ke liye '250111258734' (example ID) ya apni dummy ID use kar sakte hain
        const sellerId = process.env.NEXT_PUBLIC_2CHECKOUT_SELLER_ID || "YOUR_TEST_SELLER_ID";
        
        const jsPaymentClient = new window.TwoPayClient(sellerId);
        
        // 2Checkout ka secure card element component create hota hai
        const component = jsPaymentClient.components.create("card");
        
        // Yeh card element hamare div id="card-element" ke andar mount ho jayega
        component.mount("#card-element");

        // Keep component instance in global window to access during submit
        window.twoCheckoutComponent = component;
      } catch (err) {
        console.error("2Checkout Component Mount Error:", err);
      }
    }
  }, [twoPayLoaded, cartItems]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>, field: string, isAddress = false) => {
    if (isAddress) {
      setFormData({
        ...formData,
        shippingAddress: {
          ...formData.shippingAddress,
          [field]: e.target.value,
        },
      });
    } else {
      setFormData({
        ...formData,
        [field]: e.target.value,
      });
    }
  };

 const handleFormSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setErrorMsg("");
  setLoading(true);

  if (cartItems.length === 0) {
    setErrorMsg("Aapka cart khaali hai!");
    setLoading(false);
    return;
  }

  try {
    // Step 1: Database mein order entry "pending" status ke sath create karein
    const orderPayload = cartItems.map((item) => ({ id: item.id, quantity: item.quantity }));
    const dbResponse = await createPendingOrder(formData, orderPayload);

    if (!dbResponse.success || !dbResponse.orderId) {
      setErrorMsg(dbResponse.error || "Order generation failed.");
      setLoading(false);
      return;
    }

    // Step 2: 2Checkout Component se Credit Card Token generate karwayein
    if (!window.twoCheckoutComponent) {
      setErrorMsg("Payment gateway load nahi ho saka. Kindly page refresh karein.");
      setLoading(false);
      return;
    }

    // Customer ki basic billing details jo tokenization ke liye chahiye hoti hain
    const billingDetails = {
      name: formData.name,
      email: formData.email,
    };

    // 2Checkout server se secure token request karna
    const tokenResult = await window.twoCheckoutComponent.getPaymentToken(billingDetails);

    if (tokenResult.error) {
      setErrorMsg(tokenResult.error.message || "Card details ghalat hain janii!");
      setLoading(false);
      return;
    }

    // Token successfully mil gaya!
    const paymentToken = tokenResult.token;
    console.log("Generated Token successfully:", paymentToken);
    console.log("Database Order ID:", dbResponse.orderId);

    // Step 3: FIXED - Token aur Order ID ko backend par bhejna final charge/capture karne ke liye
    const finalPaymentResult = await processSecurePayment({
      orderId: dbResponse.orderId,
      paymentToken: paymentToken,
      customerEmail: formData.email,
      customerName: formData.name
    });

    // Agar 2Checkout API ya database update mein koi error aata hai
    if (!finalPaymentResult.success) {
      setErrorMsg(finalPaymentResult.error || "Payment process nahi ho saki.");
      setLoading(false);
      return;
    }

    // TIP: Agar aap LocalStorage cart use kar rahe hain to yahan cart clear karne ka logic likh sakte hain:
    // localStorage.removeItem("cart");

    // Success redirect! User ko query parameters ke sath confirmation page par bhejein
    router.push(`/checkout/success?orderId=${finalPaymentResult.orderId}&ref=${finalPaymentResult.reference}`);
    
  } catch (err: any) {
    console.error("Submission crash:", err);
    setErrorMsg("Koi unexpected error aaya hai checkout ke dauran.");
  } finally {
    setLoading(false);
  }
};

  return (
    <>
      {/* Load 2Checkout SDK script globally safely */}
      <Script
        src="https://2pay-js.2checkout.com/v1/2pay.js"
        strategy="afterInteractive"
        onLoad={() => setTwoPayLoaded(true)}
      />

      <div className="min-h-screen bg-background text-foreground py-12 px-4 sm:px-6 lg:px-8 font-sans">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-black text-white tracking-tight uppercase mb-8">
            Secure <span className="text-brand-cyan">Checkout</span> Matrix
          </h1>

          {errorMsg && (
            <div className="bg-red-950/40 border border-red-500/30 text-red-400 p-4 rounded-xl mb-6 text-sm font-mono">
              ⚠️ {errorMsg}
            </div>
          )}

          <form onSubmit={handleFormSubmit} className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* LEFT COLUMN: Shipping & Credit Card Forms (8 Columns) */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Shipping Details Card */}
              <div className="bg-brand-card border border-brand-border rounded-2xl p-6 shadow-xl space-y-4">
                <h2 className="text-lg font-black text-white uppercase tracking-wider border-b border-brand-border/40 pb-2">
                  1. Shipping Information
                </h2>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs font-mono text-brand-muted uppercase">Full Name</label>
                    <input
                      type="text" required value={formData.name}
                      onChange={(e) => handleInputChange(e, "name")}
                      className="w-full bg-background border border-brand-border/60 rounded-lg p-2.5 text-sm text-white focus:outline-none focus:border-brand-cyan"
                      placeholder="Shahzada Janii"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs font-mono text-brand-muted uppercase">Email Address</label>
                    <input
                      type="email" required value={formData.email}
                      onChange={(e) => handleInputChange(e, "email")}
                      className="w-full bg-background border border-brand-border/60 rounded-lg p-2.5 text-sm text-white focus:outline-none focus:border-brand-cyan"
                      placeholder="janii@example.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs font-mono text-brand-muted uppercase">Phone Number</label>
                    <input
                      type="tel" required value={formData.phone}
                      onChange={(e) => handleInputChange(e, "phone")}
                      className="w-full bg-background border border-brand-border/60 rounded-lg p-2.5 text-sm text-white focus:outline-none focus:border-brand-cyan"
                      placeholder="+92 300 1234567"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs font-mono text-brand-muted uppercase">Street Address</label>
                    <input
                      type="text" required value={formData.shippingAddress.street}
                      onChange={(e) => handleInputChange(e, "street", true)}
                      className="w-full bg-background border border-brand-border/60 rounded-lg p-2.5 text-sm text-white focus:outline-none focus:border-brand-cyan"
                      placeholder="House 123, Block A"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs font-mono text-brand-muted uppercase">City</label>
                    <input
                      type="text" required value={formData.shippingAddress.city}
                      onChange={(e) => handleInputChange(e, "city", true)}
                      className="w-full bg-background border border-brand-border/60 rounded-lg p-2.5 text-sm text-white focus:outline-none focus:border-brand-cyan"
                      placeholder="Lahore"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs font-mono text-brand-muted uppercase">State / Province</label>
                    <input
                      type="text" required value={formData.shippingAddress.state}
                      onChange={(e) => handleInputChange(e, "state", true)}
                      className="w-full bg-background border border-brand-border/60 rounded-lg p-2.5 text-sm text-white focus:outline-none focus:border-brand-cyan"
                      placeholder="Punjab"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs font-mono text-brand-muted uppercase">Zip / Postal Code</label>
                    <input
                      type="text" required value={formData.shippingAddress.zipCode}
                      onChange={(e) => handleInputChange(e, "zipCode", true)}
                      className="w-full bg-background border border-brand-border/60 rounded-lg p-2.5 text-sm text-white focus:outline-none focus:border-brand-cyan"
                      placeholder="54000"
                    />
                  </div>
                </div>
              </div>

              {/* 2Checkout Credit Card Inline Iframe Card */}
              <div className="bg-brand-card border border-brand-border rounded-2xl p-6 shadow-xl space-y-4">
                <h2 className="text-lg font-black text-white uppercase tracking-wider border-b border-brand-border/40 pb-2">
                  2. Secure Payment Methods
                </h2>
                
                <p className="text-xs text-brand-muted font-mono">
                  Your payment data is fully encrypted and secured by Verifone Compliance.
                </p>

                {/* CRITICAL HOLDER: Is div ke andar 2Checkout automatic input fields inject karega */}
                <div className="p-4 bg-background border border-brand-border rounded-xl min-h-[80px]">
                  <div id="card-element" className="w-full text-white"></div>
                </div>
              </div>

            </div>

            {/* RIGHT COLUMN: Sticky Order Summary (4 Columns) */}
            <div className="lg:col-span-5 bg-brand-card border border-brand-border rounded-2xl p-6 shadow-xl space-y-6 lg:sticky lg:top-10">
              <h2 className="text-lg font-black text-white uppercase tracking-wider border-b border-brand-border/40 pb-2">
                Order Summary
              </h2>

              {/* Cart Items Mapping Layout */}
              <div className="space-y-4 max-h-[240px] overflow-y-auto pr-2 no-scrollbar">
                {cartItems.length === 0 ? (
                  <p className="text-sm text-brand-muted italic">No items selected.</p>
                ) : (
                  cartItems.map((item) => (
                    <div key={item.id} className="flex items-center gap-4 border-b border-brand-border/30 pb-3">
                      <div className="h-12 w-12 rounded-lg bg-background border border-brand-border/60 overflow-hidden shrink-0">
                        <img src={item.image} alt={item.title} className="h-full w-full object-cover" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="text-sm font-bold text-white truncate">{item.title}</h4>
                        <p className="text-xs text-brand-muted font-mono">Qty: {item.quantity}</p>
                      </div>
                      <span className="text-sm font-black text-brand-cyan font-mono">${(item.price * item.quantity).toFixed(2)}</span>
                    </div>
                  ))
                )}
              </div>

              {/* Pricing Matrix Calculations */}
              <div className="space-y-2 border-t border-brand-border/40 pt-4 font-mono text-sm">
                <div className="flex justify-between text-brand-muted">
                  <span>Subtotal:</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-brand-muted">
                  <span>Shipping Rates:</span>
                  <span className="text-emerald-400 font-bold">{shipping === 0 ? "FREE" : `$${shipping}`}</span>
                </div>
                <div className="flex justify-between text-white text-base font-black border-t border-brand-border/30 pt-3">
                  <span className="uppercase">Total Amount:</span>
                  <span className="text-brand-cyan">${total.toFixed(2)}</span>
                </div>
              </div>

              <button
                type="submit"
                disabled={loading || !twoPayLoaded}
                className="w-full py-4 bg-gradient-to-r from-brand-blue to-brand-cyan text-brand-dark text-sm font-black uppercase tracking-widest rounded-xl shadow-xl hover:opacity-90 transition-all active:scale-95 disabled:opacity-40"
              >
                {loading ? "Processing Securely..." : "Authorize Asset Payment"}
              </button>
            </div>

          </form>
        </div>
      </div>
    </>
  );
}

// Global TypeScript deceleration adjustments for 2PayClient scripts
declare global {
  interface Window {
    TwoPayClient: any;
    twoCheckoutComponent: any;
  }
}