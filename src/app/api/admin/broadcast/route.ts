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
      .map((p: string) => `<p style="margin-bottom: 20px; line-height: 1.6; color: #44403C; font-size: 14px;">${p}</p>`)
      .join('');

    const sendPromises = subscribers.map(async (sub) => {
      const unsubLink = `${origin}/unsubscribe?email=${encodeURIComponent(sub.email)}`;
      
      return transporter.sendMail({
        from: `"Prifya Atelier" <${process.env.SMTP_USER}>`, // Updated identity name securely
        to: sub.email,
        subject: subject,
        html: `
          <div style="font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; max-width: 600px; margin: auto; border: 1px solid #EBE7E0; background-color: #FAF8F5; padding: 30px; border-radius: 8px;">
            <h2 style="color: #4E6151; font-family: Georgia, serif; font-weight: 300; margin-top: 0; border-b: 1px solid #EBE7E0; padding-bottom: 10px; text-transform: uppercase; font-size: 20px; letter-spacing: 0.5px;">Prifya Update</h2>
            
            <div style="margin-top: 20px; margin-bottom: 20px;">
              ${formattedContent}
            </div>
            
            <hr style="border: 0; border-top: 1px solid #EBE7E0;" />
            <p style="font-size: 11px; color: #8C8A85; line-height: 1.5;">
              You are receiving this communication stream as a registered patron of Prifya. To securely stop receiving these logs, <a href="${unsubLink}" style="color: #4E6151; text-decoration: underline;">unsubscribe here</a>.
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