import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    // Admin access bypass ke liye service role client initialize karna
    const supabaseAdmin = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.SUPABASE_SERVICE_ROLE_KEY!
    );

    // Database insertion according to your schema
    const { data, error } = await supabaseAdmin
      .from('products')
      .insert([
        {
          title: body.title,
          slug: body.slug,
          summary: body.summary,
          description: body.description,
          real_price: parseFloat(body.real_price) || 0,
          offer_price: parseFloat(body.offer_price) || 0,
          cost_price: parseFloat(body.cost_price) || 0,
          sku: body.sku,
          stock_quantity: parseInt(body.stock_quantity) || 0,
          low_stock_level: parseInt(body.low_stock_level) || 5,
          status: body.status || 'draft',
          images: body.images || [],
          videos: body.videos || [],
          category_id: body.category_id, // Must be a valid UUID
          seo_title: body.seo_title || null,
          seo_description: body.seo_description || null,
        },
      ])
      .select();

    if (error) {
      console.error("❌ [DB INSERT ERROR]:", error);
      return NextResponse.json({ success: false, error: error.message }, { status: 400 });
    }

    return NextResponse.json({ success: true, data }, { status: 201 });
  } catch (err: any) {
    return NextResponse.json({ success: false, error: err?.message || "Internal Server Error" }, { status: 500 });
  }
}