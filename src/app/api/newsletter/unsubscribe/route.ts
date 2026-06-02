import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

export async function POST(request: Request) {
  try {
    const { email } = await request.json();

    if (!email) {
      return NextResponse.json({ error: "Email is required." }, { status: 400 });
    }

    const supabaseAdmin = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.SUPABASE_SERVICE_ROLE_KEY!
    );

    // Update status to unsubscribed
    const { error } = await supabaseAdmin
      .from('newsletter_subscribers')
      .update({ status: 'unsubscribed' }) 
      .eq('email', email);

    if (error) throw error;

    return NextResponse.json({ success: true, message: "You have been unsubscribed successfully." });
  } catch (err: any) {
    console.error("❌ [UNSUBSCRIBE ERROR]:", err);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}