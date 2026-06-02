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
    const sessionToken = data.session.access_token; // 🔥 Token extracted for middleware
    console.log(`✅ [OAUTH SUCCESS] User: ${userEmail} (${userId})`);

    // New User Flag Check
    const createdAt = new Date(data.user.created_at).getTime();
    const lastSignIn = data.user.last_sign_in_at ? new Date(data.user.last_sign_in_at).getTime() : createdAt;
    const isNewUser = Math.abs(lastSignIn - createdAt) < 60000;

    // Asynchronous background tasks array
    const backgroundTasks: Promise<void>[] = [];

    // 1. NEWSLETTER & PROFILE UPDATER MATRIX (RLS BYPASS)
    if (isNewsletterChecked && userEmail) {
      console.log(`⏳ Enqueuing DB tasks for newsletter subscription...`);
      
      const supabaseAdmin = createClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.SUPABASE_SERVICE_ROLE_KEY!
      );

      backgroundTasks.push((async () => {
        try {
          // Task A: Newsletter table mein email insert karna
          const { error: dbErr } = await supabaseAdmin
            .from('newsletter_subscribers')
            .upsert([{ email: userEmail }], { onConflict: 'email' });

          if (dbErr) {
            console.error("❌ [NEWSLETTER TABLE ERROR]:", dbErr);
          } else {
            console.log("🎉 [NEWSLETTER TABLE SUCCESS] Email injected successfully.");
          }

          // Task B: Profiles table mein flag true karna (Bypassing RLS)
          const { error: profileUpdateErr } = await supabaseAdmin
            .from('profiles')
            .update({ newsletter_subscribed: true })
            .eq('id', userId);

          if (profileUpdateErr) {
            console.error("❌ [PROFILES FLAG UPDATE ERROR]:", profileUpdateErr);
          } else {
            console.log("🎉 [PROFILES TABLE SUCCESS] newsletter_subscribed set to TRUE.");
          }

        } catch (err: any) {
          console.error("❌ [DB TASK CRASH]:", err?.message || err);
        }
      })());
    }

    // 2. Welcome Email Task
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

    // ─── ROLE SYSTEM ROUTING & COOKIE INJECTION ───
    let userRole = 'user'; // Default Role
    try {
      const { data: profile } = await supabase
        .from('profiles')
        .select('role')
        .eq('id', userId)
        .single();

      if (profile && (profile as any).role) {
        userRole = (profile as any).role;
      }
    } catch (profileErr) {
      console.error("⚠️ Profile fetch issue, defaulting to user role.");
    }

    // 🔥 MITIGATE MIDDLEWARE LOCKOUT: Inject secure HTTP-only cookies for 7 Days
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