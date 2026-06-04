"use server";

import { createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";
import { CheckoutFormData, OrderItemInput } from "@/types/checkout"; // Aapke types ka path

interface CartItem {
  id: string; // Product ID
  quantity: number;
}

export async function createPendingOrder(formData: CheckoutFormData, cartItems: CartItem[]) {
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

    if (!cartItems || cartItems.length === 0) {
      return { success: false, error: "Aapka cart khaali hai janii!" };
    }

    // 2. Get User ID if logged in (Guest Checkout support)
    const { data: { user } } = await supabase.auth.getUser();
    const userId = user?.id || null;

    // 3. Fetch original prices from DB to prevent hacking/manipulation
    const productIds = cartItems.map(item => item.id);
    const { data: dbProducts, error: fetchError } = await supabase
      .from("products")
      .select("id, real_price, offer_price")
      .in("id", productIds);

    if (fetchError || !dbProducts) {
      console.error("DB Fetch Error:", fetchError);
      return { success: false, error: "Products verify nahi ho sakein." };
    }

    // 4. Calculate total amount dynamically using database values
    let calculatedTotal = 0;
    const finalOrderItems: OrderItemInput[] = [];

    for (const item of cartItems) {
      const dbProduct = dbProducts.find(p => p.id === item.id);
      if (!dbProduct) return { success: false, error: `Product not found!` };

      // Agar discount chal raha hai to offer_price use hogi, warna real_price
      const activePrice = dbProduct.offer_price > 0 && dbProduct.offer_price < dbProduct.real_price
        ? dbProduct.offer_price
        : dbProduct.real_price;

      calculatedTotal += activePrice * item.quantity;

      finalOrderItems.push({
        productId: item.id,
        quantity: item.quantity,
        priceAtPurchase: activePrice
      });
    }

    // 5. Insert order into 'orders' table (Status remains 'pending')
    const { data: order, error: orderError } = await supabase
      .from("orders")
      .insert([
        {
          user_id: userId,
          customer_name: formData.name,
          customer_email: formData.email,
          customer_phone: formData.phone,
          shipping_address: formData.shippingAddress,
          total_amount: calculatedTotal,
          currency: "USD", // Aap apni currency set kar sakte hain
          order_status: "pending",
          payment_status: "pending"
        }
      ])
      .select()
      .single();

    if (orderError || !order) {
      console.error("Order Insert Error:", orderError);
      return { success: false, error: "Order create nahi ho saka." };
    }

    // 6. Insert items into 'order_items' table
    const orderItemsPayload = finalOrderItems.map(item => ({
      order_id: order.id,
      product_id: item.productId,
      quantity: item.quantity,
      price_at_purchase: item.priceAtPurchase
    }));

    const { error: itemsError } = await supabase
      .from("order_items")
      .insert(orderItemsPayload);

    if (itemsError) {
      console.error("Order Items Insert Error:", itemsError);
      // Optional: Agar items fail ho jayein to temporary order delete karne ka logic laga sakte hain
      return { success: false, error: "Order items save nahi ho sakay." };
    }

    // 7. Return safe data to client for 2Checkout processing
    return {
      success: true,
      orderId: order.id,
      totalAmount: calculatedTotal,
      customerEmail: formData.email,
      customerName: formData.name
    };

  } catch (error) {
    console.error("Checkout Server Action Error:", error);
    return { success: false, error: "Internal Server Error" };
  }
}