"use server";

import { createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";

interface ProcessPaymentPayload {
  orderId: string;
  paymentToken: string;
  customerEmail: string;
  customerName: string;
}

export async function processSecurePayment({
  orderId,
  paymentToken,
  customerEmail,
  customerName,
}: ProcessPaymentPayload) {
  try {
    const cookieStore = await cookies();

    // 1. Initialize Supabase Client
    const supabase = createServerClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
      {
        cookies: {
          getAll() { return cookieStore.getAll(); },
          setAll(cookiesToSet) {
            try { cookiesToSet.forEach(({ name, value, options }) => cookieStore.set(name, value, options)); } catch {}
          },
        },
      }
    );

    // 2. Fetch total amount and details from Supabase to send to 2Checkout
    const { data: order, error: orderError } = await supabase
      .from("orders")
      .select("total_amount, currency")
      .eq("id", orderId)
      .single();

    if (orderError || !order) {
      console.error("Order verification failed inside payment:", orderError);
      return { success: false, error: "Database se order nahi mil saka janii." };
    }

    // 3. Prepare 2Checkout REST API Request Payload
    // Sandbox API Base URL: https://sandbox.2checkout.com/services/rest/6.0/orders/
    const TWO_CHECKOUT_API_URL = "https://sandbox.2checkout.com/services/rest/6.0/orders/";
    
    const merchantCode = process.env.NEXT_PUBLIC_2CHECKOUT_SELLER_ID; // Aapka Seller ID
    const secretKey = process.env.TWO_CHECKOUT_SECRET_KEY; // Server-side environment variable ONLY

    // 2Checkout authorization requires custom headers or basic auth depending on settings.
    // Standard Verifone REST API utilizes Merchant Code and Secret Key authentication.
    const apiHeaders = {
      "Content-Type": "application/json",
      "Accept": "application/json",
      "Authorization": `Basic ${Buffer.from(`${merchantCode}:${secretKey}`).toString("base64")}`
    };

    const paymentPayload = {
      Currency: order.currency || "USD",
      Language: "en",
      Source: "YOUR_WEBSITE_NAME",
      BillingDetails: {
        FirstName: customerName.split(" ")[0] || "Customer",
        LastName: customerName.split(" ").slice(1).join(" ") || "User",
        Email: customerEmail,
      },
      PaymentDetails: {
        Type: "ECOM_TOKEN", // Indicates tokenized payment via 2Pay.js
        Currency: order.currency || "USD",
        PaymentMethod: {
          Token: paymentToken // The client-side generated token
        }
      },
      Items: [
        {
          Name: `Order Payment Asset #${orderId}`,
          Description: `Secure digital purchase confirmation tracking for internal order ID ${orderId}`,
          Quantity: 1,
          Price: {
            Amount: String(order.total_amount),
            Type: "CUSTOM"
          }
        }
      ]
    };

    // 4. Hit 2Checkout Secure Server Gateway
    const response = await fetch(TWO_CHECKOUT_API_URL, {
      method: "POST",
      headers: apiHeaders,
      body: JSON.stringify(paymentPayload),
    });

    const apiResult = await response.json();

    if (!response.ok || apiResult.errors || apiResult.Status === "FAILED") {
      console.error("2Checkout API Error response:", apiResult);
      
      // Update DB status to failed
      await supabase
        .from("orders")
        .update({ order_status: "failed", payment_status: "failed" })
        .eq("id", orderId);

      return { 
        success: false, 
        error: apiResult.message || apiResult.errors?.[0] || "Payment gateway ne transaction reject kar di." 
      };
    }

    // 5. SUCCESS! Update Supabase Database records
    const twoCheckoutRefNumber = apiResult.RefNo || apiResult.OrderReference || null;

    const { error: updateError } = await supabase
      .from("orders")
      .update({
        order_status: "processing", // Order paid ho chuka hai, ab process hoga
        payment_status: "paid",
        two_checkout_ref: twoCheckoutRefNumber,
        updated_at: new Date().toISOString()
      })
      .eq("id", orderId);

    if (updateError) {
      console.error("DB Update Error after successful payment:", updateError);
      // Custom log setup to prevent loss of payment mapping data
    }

    return { 
      success: true, 
      orderId: orderId, 
      reference: twoCheckoutRefNumber 
    };

  } catch (error) {
    console.error("Payment Capture Server Action Crash:", error);
    return { success: false, error: "Internal Server Error during transaction processing." };
  }
}