import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { createServerClient } from '@supabase/ssr';
import { createClient } from '@supabase/supabase-js';

export async function GET(request: Request) {
  const { searchParams, origin } = new URL(request.url);
  const code = searchParams.get('code');
  const error = searchParams.get('error');
  const errorDescription = searchParams.get('error_description');
  const isNewsletterChecked = searchParams.get('newsletter') === 'true';

  console.log(`\n====> 🌐 [OAUTH FLOW] Callback Hit. Newsletter Checkbox: ${isNewsletterChecked}`);

  if (error) {
    console.error(`❌ [OAUTH ERROR] ${error}: ${errorDescription}`);
    return NextResponse.redirect(`${origin}/?error=provider_error`);
  }

  if (!code) {
    return NextResponse.redirect(`${origin}/?error=no_code_provided`);
  }

  const cookieStore = await cookies();
  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() { return cookieStore.getAll(); },
        setAll(cookiesToSet) {
          try {
            cookiesToSet.forEach(({ name, value, options }) =>
              cookieStore.set(name, value, options)
            );
          } catch (err) {}
        },
      },
    }
  );

  // Session Exchange
  const { data, error: exchangeError } = await supabase.auth.exchangeCodeForSession(code);
  
  if (exchangeError || !data?.session) {
    console.error("❌ Code exchange failed:", exchangeError?.message || "No session data");
    return NextResponse.redirect(`${origin}/?error=auth_failed`);
  }

  if (data?.user) {
    const userEmail = data.user.email;
    const userId = data.user.id;
    const sessionToken = data.session.access_token; 
    console.log(`✅ [OAUTH SUCCESS] User: ${userEmail} (${userId})`);

    // Service role client to bypass RLS safely
    const supabaseAdmin = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.SUPABASE_SERVICE_ROLE_KEY!
    );

    // 🔥 FIX 1: CHECK IF PROFILE ALREADY EXISTS
    let userRole = 'user'; // Default Role
    let profileExists = false;

    try {
      const { data: existingProfile } = await supabaseAdmin
        .from('profiles')
        .select('role')
        .eq('id', userId)
        .maybeSingle();

      if (existingProfile) {
        userRole = existingProfile.role;
        profileExists = true;
      }
    } catch (err) {
      console.error("⚠️ Profile check error, assuming new user:", err);
    }

    const isNewUser = !profileExists;
    const backgroundTasks: Promise<void>[] = [];

    // 🔥 FIX 2: BULLETPROOF PROFILE INITIALIZATION (INSERT VS UPDATE)
    // 🔥 FIX: PROFILE INITIALIZATION (PASSING BOTH REQUIRED EMAIL & FULL_NAME)
    if (isNewUser) {
      console.log(`⏳ Enqueuing CORE Profile Creation for fresh User ID: ${userId}`);
      backgroundTasks.push((async () => {
        try {
          // Google profile se user ka naam nikaalna
          const userName = data.user.user_metadata?.full_name || data.user.user_metadata?.name || 'Matrix User';

          const { error: insertErr } = await supabaseAdmin
            .from('profiles')
            .insert([{
              id: userId,
              role: 'user',
              newsletter_subscribed: isNewsletterChecked,
              email: userEmail,   // ✅ Email fix done
              full_name: userName // 🔥 NEW FIX: Ab full_name bhi database mein chala jayega!
            }]);

          if (insertErr) {
            console.error("❌ [PROFILES INSERTION ERROR]:", insertErr);
          } else {
            console.log("🎉 [PROFILES TABLE SUCCESS] Fresh row created with Email and Full Name in DB.");
          }
        } catch (err: any) {
          console.error("❌ [PROFILES INSERT CRASH]:", err?.message || err);
        }
      })());
    } else if (isNewsletterChecked) {
      // Agar purana user hai aur is baar login par newsletter check kiya hai, to sirf UPDATE karein
      console.log(`⏳ Enqueuing Newsletter Sync for returning user...`);
      backgroundTasks.push((async () => {
        try {
          await supabaseAdmin
            .from('profiles')
            .update({ newsletter_subscribed: true })
            .eq('id', userId);
          console.log("🎉 [PROFILES TABLE SUCCESS] Returning user profile updated.");
        } catch (err) {}
      })());
    }

    // 3. NEWSLETTER SUBSCRIBERS LIST INJECTION
    if (isNewsletterChecked && userEmail) {
      console.log(`⏳ Enqueuing newsletter table subscription...`);
      backgroundTasks.push((async () => {
        try {
          const { error: dbErr } = await supabaseAdmin
            .from('newsletter_subscribers')
            .upsert([{ email: userEmail }], { onConflict: 'email' });

          if (dbErr) console.error("❌ [NEWSLETTER TABLE ERROR]:", dbErr);
          else console.log("🎉 [NEWSLETTER TABLE SUCCESS] Email injected successfully.");
        } catch (err: any) {
          console.error("❌ [NEWSLETTER TASK CRASH]:", err?.message || err);
        }
      })());
    }

    // 4. Welcome Email Task (Sirf bilkul naye user ke liye)
    if (isNewUser) {
      console.log(`⏳ Enqueuing Welcome Email...`);
      backgroundTasks.push((async () => {
        try {
          await fetch(`${origin}/api/auth/welcome`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              email: userEmail,
              name: data.user.user_metadata?.full_name || data.user.user_metadata?.name || 'Matrix User',
            }),
          });
          console.log("✉️ [EMAIL SUCCESS] Pipeline fired.");
        } catch (err: any) {
          console.error("❌ [EMAIL CRASH]:", err?.message || err);
        }
      })());
    }

    // Execute background tasks in parallel
    if (backgroundTasks.length > 0) {
      await Promise.all(backgroundTasks);
    }

    // ─── COOKIE INJECTION & REDIRECTION ───
    const maxAge = 7 * 24 * 60 * 60; // 7 days in seconds
    const isProd = process.env.NODE_ENV === 'production';

    cookieStore.set('auth_token', sessionToken, {
      httpOnly: true,
      secure: isProd,
      sameSite: 'strict',
      maxAge: maxAge,
      path: '/',
    });

    cookieStore.set('user_role', userRole, {
      httpOnly: true,
      secure: isProd,
      sameSite: 'strict',
      maxAge: maxAge,
      path: '/',
    });

    const destinationPath = userRole === 'admin' ? '/admin' : '/dashboard';
    console.log(`====> 🌐 [OAUTH COMPLETE] Role: ${userRole}. Redirecting to ${destinationPath} ====\n`);
    
    return NextResponse.redirect(`${origin}${destinationPath}`);
  }

  return NextResponse.redirect(`${origin}/?error=auth_failed`);
}