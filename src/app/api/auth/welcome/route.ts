import { NextResponse } from 'next/server';
import { sendWelcomeEmail } from '@/utils/sendMail'; // 🔥 FIX: Apni helper file ka sahi path yahan lagayein

export async function POST(request: Request) {
  try {
    const { email, name } = await request.json();
    
    console.log(`✉️ [WELCOME API] Trigger received for: ${email}`);

    // 🔥 Background mein clean utility function execute ho raha hai
    sendWelcomeEmail(email, name)
      .then((info) => {
        console.log(`✨ [BACKGROUND EMAIL] Welcome mail delivered successfully:`, info?.response || '');
      })
      .catch((emailErr: any) => {
        console.error(`❌ [BACKGROUND EMAIL ERROR]:`, emailErr);
      });

    return NextResponse.json(
      { message: "ISblex welcome email pipeline initiated in background." },
      { status: 200 }
    );

  } catch (err: any) {
    console.error("❌ [WELCOME API CRASH]:", err.message);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}