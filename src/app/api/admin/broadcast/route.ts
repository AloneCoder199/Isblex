import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const { subject, rawContent } = await request.json();
    const { origin } = new URL(request.url);

    const supabaseAdmin = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.SUPABASE_SERVICE_ROLE_KEY!
    );

    // Fetch only active subscribers
    const { data: subscribers, error: dbErr } = await supabaseAdmin
      .from('newsletter_subscribers')
      .select('email')
      .eq('status', 'active'); 

    if (dbErr) throw new Error(`DB Error: ${dbErr.message}`);
    if (!subscribers || subscribers.length === 0) {
      return NextResponse.json({ error: "No active subscribers found." }, { status: 404 });
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 587,
      secure: false, 
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const formattedContent = rawContent
      .split('\n')
      .filter((p: string) => p.trim() !== '')
      .map((p: string) => `<p style="margin-bottom: 20px; line-height: 1.6; color: #333;">${p}</p>`)
      .join('');

    const sendPromises = subscribers.map(async (sub) => {
      const unsubLink = `${origin}/unsubscribe?email=${encodeURIComponent(sub.email)}`;
      
      return transporter.sendMail({
        from: `"ISblex Executive" <${process.env.SMTP_USER}>`,
        to: sub.email,
        subject: subject,
        html: `
          <div style="font-family: sans-serif; max-width: 600px; margin: auto; border: 1px solid #eee; padding: 20px;">
            <h2 style="color: #000;">ISblex Update</h2>
            ${formattedContent}
            <hr />
            <p style="font-size: 12px; color: #888;">
              To stop receiving these, <a href="${unsubLink}">unsubscribe here</a>.
            </p>
          </div>
        `,
      });
    });

    await Promise.all(sendPromises);
    
    return NextResponse.json({ success: true, message: `Successfully sent to ${subscribers.length} users.` });
  } catch (err: any) {
    console.error("❌ [BROADCAST ERROR]:", err);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}