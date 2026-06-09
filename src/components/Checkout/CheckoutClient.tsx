"use client";

import { useState } from "react";
import { useRouter } from 'next/navigation';
import { createCodOrder } from "@/app/actions/checkout"; 
import { CheckoutFormData } from "@/types/checkout";
import { useCart } from "@/context/CartContext"; // Linked directly to your context node

export default function CheckoutClient() {
  const { cart, clearCart, getCartTotal } = useCart(); // Destructured active context streams
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const router = useRouter();

  // Pure Local State Management Configuration
  const [formData, setFormData] = useState<CheckoutFormData>({
    name: "",
    email: "",
    phone: "",
    shippingAddress: {
      street: "",
      city: "",
      state: "",
      zipCode: "",
      country: "PK", // Localized default structural identifier
    },
  });

  // Dynamic calculations directly mapped from global context stream
  const subtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const shipping = 0; // Complimentary atelier processing dispatch
  const total = subtotal + shipping;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>, field: string, isAddress = false) => {
    if (isAddress) {
      setFormData({
        ...formData,
        shippingAddress: { ...formData.shippingAddress, [field]: e.target.value },
      });
    } else {
      setFormData({ ...formData, [field]: e.target.value });
    }
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg("");
    setLoading(true);

    if (cart.length === 0) {
      setErrorMsg("Aapka shopping bag bilkul khali hai, janii!");
      setLoading(false);
      return;
    }

    try {
      // Map global cart items array structural fields perfectly for the server action backend payload
      const backendCartPayload = cart.map(item => ({
        id: item.id,
        title: item.title,
        price: item.price,
        quantity: item.quantity,
        image: item.image
      }));

      // Execute the unified native Server Action
      const response = await createCodOrder(formData, backendCartPayload);

      if (!response.success || !response.orderId) {
        setErrorMsg(response.error || "Order dispatch protocol failed.");
        setLoading(false);
        return;
      }

      // Automatically clears your global cart state node upon successful transaction
      clearCart();

      // Route parameters to success engine screen smoothly
      router.push(`/checkout/success?orderId=${response.orderId}&method=COD`);
      
    } catch (err) {
      console.error("Form transmission system error:", err);
      setErrorMsg("Operational system error occurred processing checkout data.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-stone-800 py-12 px-4 sm:px-6 lg:px-8 font-sans mt-20 selection:bg-[#E3ECE6] selection:text-[#3A4D3F]">
      <div className="max-w-7xl mx-auto">
        
        {/* HEADER SECTION */}
        <div className="mb-10 border-b border-stone-200/60 pb-6">
          <h1 className="text-2xl sm:text-3xl font-serif font-light text-stone-900 tracking-wide">
            Atelier Checkout <span className="text-[#4E6151] font-normal">Process</span>
          </h1>
          <p className="text-xs text-stone-500 mt-1 uppercase tracking-wider font-medium">Verify structural dispatch components securely</p>
        </div>

        {errorMsg && (
          <div className="bg-red-50 border border-red-200 text-red-700 p-4 rounded-xl mb-8 text-sm font-medium">
            ⚠️ {errorMsg}
          </div>
        )}

        <form onSubmit={handleFormSubmit} className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT SIDE: Shipping Data Collection Form Sheets */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="bg-white border border-[#EBE7E0] rounded-2xl p-6 shadow-[0_4px_20px_rgba(0,0,0,0.01)] space-y-5">
              <h2 className="text-sm font-semibold text-[#4E6151] uppercase tracking-widest border-b border-stone-100 pb-3">
                1. Shipping Parameters
              </h2>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-xs font-medium text-stone-500 uppercase tracking-wider">Full Name</label>
                  <input
                    type="text" required value={formData.name}
                    onChange={(e) => handleInputChange(e, "name")}
                    className="w-full bg-[#FAF8F5] border border-[#EBE7E0] rounded-xl p-3 text-sm text-stone-900 placeholder-stone-400 focus:outline-none focus:border-[#4E6151] transition-colors"
                    placeholder="E.g., Shahzada Janii"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-medium text-stone-500 uppercase tracking-wider">Email Address</label>
                  <input
                    type="email" required value={formData.email}
                    onChange={(e) => handleInputChange(e, "email")}
                    className="w-full bg-[#FAF8F5] border border-[#EBE7E0] rounded-xl p-3 text-sm text-stone-900 placeholder-stone-400 focus:outline-none focus:border-[#4E6151] transition-colors"
                    placeholder="janii@example.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-xs font-medium text-stone-500 uppercase tracking-wider">Phone Number (Active)</label>
                  <input
                    type="tel" required value={formData.phone}
                    onChange={(e) => handleInputChange(e, "phone")}
                    className="w-full bg-[#FAF8F5] border border-[#EBE7E0] rounded-xl p-3 text-sm text-stone-900 placeholder-stone-400 focus:outline-none focus:border-[#4E6151] transition-colors"
                    placeholder="e.g., +92 300 1234567"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-medium text-stone-500 uppercase tracking-wider">Street Address & House No.</label>
                  <input
                    type="text" required value={formData.shippingAddress.street}
                    onChange={(e) => handleInputChange(e, "street", true)}
                    className="w-full bg-[#FAF8F5] border border-[#EBE7E0] rounded-xl p-3 text-sm text-stone-900 placeholder-stone-400 focus:outline-none focus:border-[#4E6151] transition-colors"
                    placeholder="House 123, Street 4, Block Area"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="space-y-1">
                  <label className="text-xs font-medium text-stone-500 uppercase tracking-wider">City</label>
                  <input
                    type="text" required value={formData.shippingAddress.city}
                    onChange={(e) => handleInputChange(e, "city", true)}
                    className="w-full bg-[#FAF8F5] border border-[#EBE7E0] rounded-xl p-3 text-sm text-stone-900 placeholder-stone-400 focus:outline-none focus:border-[#4E6151] transition-colors"
                    placeholder="Lahore"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-medium text-stone-500 uppercase tracking-wider">State / Province</label>
                  <input
                    type="text" required value={formData.shippingAddress.state}
                    onChange={(e) => handleInputChange(e, "state", true)}
                    className="w-full bg-[#FAF8F5] border border-[#EBE7E0] rounded-xl p-3 text-sm text-stone-900 placeholder-stone-400 focus:outline-none focus:border-[#4E6151] transition-colors"
                    placeholder="Punjab"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-medium text-stone-500 uppercase tracking-wider">Postal / Zip Code</label>
                  <input
                    type="text" required value={formData.shippingAddress.zipCode}
                    onChange={(e) => handleInputChange(e, "zipCode", true)}
                    className="w-full bg-[#FAF8F5] border border-[#EBE7E0] rounded-xl p-3 text-sm text-stone-900 placeholder-stone-400 focus:outline-none focus:border-[#4E6151] transition-colors"
                    placeholder="54000"
                  />
                </div>
              </div>
            </div>

            {/* PAYMENT TYPE IDENTIFICATION SHEET CONTAINER */}
            <div className="bg-white border border-[#EBE7E0] rounded-2xl p-6 shadow-[0_4px_20px_rgba(0,0,0,0.01)] space-y-4">
              <h2 className="text-sm font-semibold text-[#4E6151] uppercase tracking-widest border-b border-stone-100 pb-3">
                2. Settlement Method
              </h2>
              <div className="p-4 bg-[#FAF8F5] border border-[#4E6151] rounded-xl flex items-start gap-3.5">
                <div className="mt-0.5 h-4 w-4 shrink-0 rounded-full border-4 border-[#4E6151] bg-white" />
                <div className="space-y-0.5">
                  <label className="text-sm font-medium text-stone-900 block font-serif">Cash On Delivery (COD)</label>
                  <p className="text-xs text-stone-500 tracking-wide leading-relaxed">
                    No upfront digital transaction fees are processing. Please ensure the settlement allocation balance is prepared upon structural arrival at your doorstep.
                  </p>
                </div>
              </div>
            </div>

          </div>

          {/* RIGHT SIDE: Interactive Sticky Summary Ledger Dashboard Cards */}
          <div className="lg:col-span-5 bg-white border border-[#EBE7E0] rounded-2xl p-6 shadow-[0_4px_20px_rgba(0,0,0,0.02)] lg:sticky lg:top-28 space-y-6">
            <h2 className="text-sm font-semibold text-[#4E6151] uppercase tracking-widest border-b border-stone-100 pb-3">
              Order Summary
            </h2>

            {/* Cart Rendering Window Framework */}
            <div className="space-y-4 max-h-[260px] overflow-y-auto pr-2 scrollbar-thin">
              {cart.length === 0 ? (
                <p className="text-sm text-stone-400 italic font-light">Your active inventory tray is empty.</p>
              ) : (
                cart.map((item) => (
                  <div key={item.id} className="flex items-center gap-4 border-b border-stone-100 pb-3.5 last:border-0 last:pb-0">
                    <div className="h-14 w-14 rounded-xl bg-[#FAF8F5] border border-[#EBE7E0] overflow-hidden shrink-0">
                      <img src={item.image} alt={item.title} className="h-full w-full object-cover" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-sm font-serif font-medium text-stone-900 truncate tracking-wide">{item.title}</h4>
                      <p className="text-xs text-stone-400 mt-0.5">Quantity Elements: {item.quantity}</p>
                    </div>
                    <span className="text-sm font-medium text-stone-800 font-sans">${(item.price * item.quantity).toFixed(2)}</span>
                  </div>
                ))
              )}
            </div>

            {/* Total Accounting Stream Parameters */}
            <div className="space-y-2.5 border-t border-stone-100 pt-4 text-xs tracking-wide">
              <div className="flex justify-between text-stone-500">
                <span>Items Subtotal:</span>
                <span className="text-stone-800 font-medium">${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-stone-500">
                <span>Dispatch Logistics Fee:</span>
                <span className="text-emerald-700 font-medium bg-emerald-50 px-2 py-0.5 rounded text-[11px]">Complimentary</span>
              </div>
              <div className="flex justify-between text-stone-900 text-sm font-medium border-t border-stone-100 pt-3.5 font-serif">
                <span className="uppercase tracking-wider text-xs text-stone-500 font-sans">Payable Balance Amount:</span>
                <span className="text-base font-semibold text-stone-900 font-sans">${total.toFixed(2)}</span>
              </div>
            </div>

            {/* Submit Control Action Button Nodes */}
            <button
              type="submit"
              disabled={loading || cart.length === 0}
              className="w-full py-3.5 bg-[#4E6151] text-white text-xs font-semibold uppercase tracking-widest rounded-xl shadow-sm hover:bg-[#3D4E40] transition-colors active:scale-[0.98] disabled:opacity-40 disabled:pointer-events-none cursor-pointer"
            >
              {loading ? "Confirming Order Dispatch..." : "Confirm Cash on Delivery Order"}
            </button>
          </div>

        </form>
      </div>
    </div>
  );
}