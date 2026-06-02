import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  const { product } = await request.json();
  const supabaseAdmin = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.SUPABASE_SERVICE_ROLE_KEY!);

  // Fetch active subscribers
  const { data: subscribers } = await supabaseAdmin.from('newsletter_subscribers').select('email').eq('status', 'active');

  const transporter = nodemailer.createTransport({ /* ... SMTP Config ... */ });

  // Email Loop
  for (const sub of subscribers || []) {
    await transporter.sendMail({
      to: sub.email,
      subject: `New Arrival: ${product.name}`,
      html: `<h1>Check out our new product: ${product.name}</h1>
             <p>${product.short_description}</p>
             <a href="${process.env.NEXT_PUBLIC_BASE_URL}/product/${product.slug}">View Product</a>`
    });
  }

  return NextResponse.json({ success: true });
}