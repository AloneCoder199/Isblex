"use server";

import { createClient } from '@supabase/supabase-js';
import { sendEmail } from '@/utils/sendMail';
import { CheckoutFormData } from '@/types/checkout';

// Initialize the privileged admin client using the Service Role Key to safely bypass RLS
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY || '';

if (!supabaseServiceKey) {
  console.error("CRITICAL ERROR: SUPABASE_SERVICE_ROLE_KEY is missing from environment variables.");
}

const supabaseAdmin = createClient(supabaseUrl, supabaseServiceKey);

interface BackendCartItem {
  id: string;
  title: string;
  price: number;
  quantity: number;
  image: string;
}

export async function createCodOrder(formData: CheckoutFormData, cartItems: BackendCartItem[]) {
  try {
    if (!cartItems || cartItems.length === 0) {
      return { success: false, error: "Your shopping bag is empty." };
    }

    const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
    const shippingFee = 0; 
    const totalAmount = subtotal + shippingFee;

    // Step 1: Write core order transaction into Supabase using admin client (Bypasses RLS)
    const { data: orderData, error: orderError } = await supabaseAdmin
      .from('orders')
      .insert([{
        customer_name: formData.name,
        customer_email: formData.email,
        customer_phone: formData.phone,
        street_address: formData.shippingAddress.street,
        city: formData.shippingAddress.city,
        state_province: formData.shippingAddress.state,
        postal_code: formData.shippingAddress.zipCode,
        subtotal: subtotal,
        shipping_fee: shippingFee,
        total_amount: totalAmount,
        payment_method: 'COD',
        order_status: 'pending'
      }])
      .select()
      .single();

    if (orderError || !orderData) {
      console.error("Supabase Database Sync Error:", orderError);
      return { success: false, error: "Failed to process your order transaction in our system." };
    }

    const generatedOrderId = orderData.id;
    const shortOrderId = generatedOrderId.slice(0, 8).toUpperCase();

    // Step 2: Push individual items linked to this order
    const relationalItems = cartItems.map(item => ({
      order_id: generatedOrderId,
      product_id: item.id,
      title: item.title,
      price: item.price,
      quantity: item.quantity,
      image_url: item.image
    }));

    const { error: itemsError } = await supabaseAdmin
      .from('order_items')
      .insert(relationalItems);

    if (itemsError) {
      console.error("Supabase Items Link Error:", itemsError);
      return { success: false, error: "Order initialized but item allocation mapping failed." };
    }

    // Step 3: Construct Premium Minimalist HTML List for the email layout
    const itemsHtmlList = cartItems.map(item => `
      <li style="margin-bottom: 12px; font-size: 14px; list-style-type: none; border-bottom: 1px dashed #E7E5E4; padding-bottom: 8px; display: flex; justify-content: space-between;">
        <span><strong>${item.title}</strong> <span style="color: #78716C;">(x${item.quantity})</span></span>
        <span style="font-weight: 600; color: #1C1917;">$${(item.price * item.quantity).toFixed(2)}</span>
      </li>
    `).join('');

    // A. Premium & Respectful Email Dispatch to Customer Address
    const customerMailPromise = sendEmail({
      to: formData.email,
      subject: `Your Order Confirmation - Order #${shortOrderId}`,
      html: `
        <div style="background-color: #FAF8F5; color: #292524; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; padding: 40px; max-width: 600px; margin: 0 auto; border: 1px solid #E7E5E4;">
          <div style="text-align: center; margin-bottom: 30px;">
            <h2 style="color: #4E6151; font-family: Georgia, serif; font-weight: 300; font-size: 26px; margin: 0; text-transform: uppercase; letter-spacing: 1px;">Order Confirmed</h2>
            <p style="font-size: 11px; color: #A69276; tracking: 0.1em; text-transform: uppercase; margin-top: 5px;">Atelier Invoice Verification Session</p>
          </div>
          
          <hr style="border: 0; border-top: 1px solid #EBE7E0; margin-bottom: 25px;" />
          
          <p style="font-size: 14px; color: #44403C; line-height: 1.6;">Dear <strong>${formData.name}</strong>,</p>
          <p style="font-size: 14px; color: #44403C; line-height: 1.6;">Thank you for your order. We are pleased to inform you that your Cash on Delivery (COD) request has been securely processed and recorded within our distribution network.</p>
          
          <div style="background-color: #FFFFFF; border: 1px solid #EBE7E0; padding: 20px; margin: 25px 0; font-size: 13px; color: #57534E; line-height: 1.6; border-radius: 8px;">
            <strong style="color: #1C1917;">Order reference:</strong> #${generatedOrderId}<br/>
            <strong style="color: #1C1917;">Payment Protocol:</strong> Cash on Delivery (COD)<br/>
            <strong style="color: #1C1917;">Delivery Destination:</strong> ${formData.shippingAddress.street}, ${formData.shippingAddress.city}, ${formData.shippingAddress.state}
          </div>
          
          <h3 style="color: #4E6151; font-family: Georgia, serif; font-size: 16px; margin-top: 30px; margin-bottom: 15px; font-weight: normal; border-bottom: 1px solid #E7E5E4; padding-bottom: 6px;">Your Selected Selection</h3>
          <ul style="padding-left: 0; margin: 0;">
            ${itemsHtmlList}
          </ul>
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #E7E5E4; text-align: right;">
            <span style="font-size: 13px; color: #78716C; text-transform: uppercase; tracking: 0.5px;">Estimated Payable Total:</span>
            <h2 style="font-size: 22px; color: #4E6151; margin: 5px 0 0 0; font-weight: 600;">$${totalAmount.toFixed(2)}</h2>
          </div>
          
          <hr style="border: 0; border-top: 1px solid #EBE7E0; margin: 30px 0;" />
          <p style="font-size: 11px; color: #78716C; line-height: 1.5; text-align: center;">Our fulfillment team will prepare your parcel shortly. Please ensure the payable valuation balance is available upon parcel arrival. This is an automated notification tracking string, please do not reply directly.</p>
        </div>
      `
    });

    // B. High Priority Professional Alert for Admin Notification Endpoint
    const adminMailPromise = sendEmail({
      to: process.env.SMTP_USER || 'admin@yourstore.com',
      subject: `🚨 [New Order Alert] COD Placement Received - $${totalAmount.toFixed(2)}`,
      html: `
        <div style="background-color: #FFFFFF; color: #1C1917; font-family: sans-serif; padding: 30px; border-top: 3px solid #4E6151; max-width: 600px; margin: 0 auto; box-shadow: 0 4px 12px rgba(0,0,0,0.05);">
          <h2 style="color: #1C1917; font-size: 18px; margin-top: 0;">New Incoming COD Order Record</h2>
          <hr style="border: 0; border-top: 1px solid #E7E5E4;" />
          
          <table style="width: 100%; font-size: 13px; color: #44403C; line-height: 1.8; margin-bottom: 20px;">
            <tr><td style="width: 30%; font-weight: bold;">Customer:</td><td>${formData.name}</td></tr>
            <tr><td style="font-weight: bold;">Email:</td><td>${formData.email}</td></tr>
            <tr><td style="font-weight: bold;">Contact Phone:</td><td>${formData.phone}</td></tr>
            <tr><td style="font-weight: bold;">Destination:</td><td>${formData.shippingAddress.street}, ${formData.shippingAddress.city}</td></tr>
          </table>
          
          <h3 style="font-size: 14px; color: #4E6151; border-bottom: 1px solid #E7E5E4; padding-bottom: 4px;">Items Payload</h3>
          <ul style="padding-left: 0; margin: 0;">
            ${itemsHtmlList}
          </ul>
          
          <div style="margin-top: 20px; background-color: #FAF8F5; padding: 15px; border-radius: 6px; text-align: right;">
            <span style="font-size: 12px; color: #78716C;">Net Store Valuation:</span>
            <h3 style="margin: 0; color: #4E6151; font-size: 18px;">$${totalAmount.toFixed(2)}</h3>
          </div>
        </div>
      `
    });

    // Fire email streams in parallel background processes
    Promise.all([customerMailPromise, adminMailPromise]).catch(emailErr => {
      console.error("SMTP Operations Pipeline Exception Raised:", emailErr);
    });

    return { success: true, orderId: generatedOrderId };

  } catch (crash) {
    console.error("Operational Checkout Process Pipe Crashed:", crash);
    return { success: false, error: "An internal core system error occurred while finalizing your checkout session." };
  }
}