import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

export async function POST(request: Request) {
  try {
    const supabaseAdmin = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.SUPABASE_SERVICE_ROLE_KEY!
    );

    const body = await request.json();
    
    // Destructuring all fields
    const { 
      name, slug, short_description, description, price, stock, 
      featured, image_url, is_active, category_id, video_url, 
      gallery_images, sku 
    } = body;

    // Server-side Basic Validation
    if (!name || !price || !slug) {
      return NextResponse.json({ error: "Required fields (name, slug, price) are missing." }, { status: 400 });
    }

    // Insert Product
    const { data: product, error: prodErr } = await supabaseAdmin
      .from('products')
      .insert([{ 
        name, 
        slug, 
        short_description: short_description || null, 
        description: description || null, 
        price: parseFloat(price), 
        stock: parseInt(stock) || 0, 
        featured: !!featured, 
        image_url: image_url || null, 
        is_active: !!is_active, 
        category_id: category_id === "" ? null : category_id, // Category handle
        video_url: video_url || null, 
        gallery_images: gallery_images || [], 
        sku: sku || null 
      }])
      .select()
      .single();

    if (prodErr) {
      console.error("Supabase Error:", prodErr);
      throw new Error(prodErr.message);
    }

    // Trigger Email Notification (Background)
    if (is_active) {
      const protocol = process.env.NODE_ENV === 'development' ? 'http' : 'https';
      const host = request.headers.get('host');
      
      // Async trigger, don't wait for it
      fetch(`${protocol}://${host}/api/admin/notify-subscribers`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ product }),
      }).catch(err => console.error("Auto-Email Notification failed:", err));
    }

    return NextResponse.json({ success: true, product });

  } catch (err: any) {
    console.error("❌ [API ERROR]:", err);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}