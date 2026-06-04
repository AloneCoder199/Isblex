"use client";

import React, { useState } from 'react';
import { supabase } from '@/supabase';

// TypeScript Interfaces for strict type safety without 'never' errors
interface ProfileRow {
  role: 'user' | 'admin';
}

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ type: '', text: '' });

  // Form States
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [subscribeNewsletter, setSubscribeNewsletter] = useState(false);
  const [shake, setShake] = useState(false);

  // Shake animation trigger
  const triggerShake = () => {
    setShake(true);
    setTimeout(() => setShake(false), 400);
  };

  // Google OAuth Gateway
  const handleGoogleAuth = async () => {
    setMessage({ type: '', text: '' });

    if (!isLogin && !agreeTerms) {
      setMessage({ 
        type: 'error', 
        text: 'ERR: YOU MUST ACCEPT THE TERMS BEFORE CONTINUING.' 
      });
      triggerShake();
      return;
    }

    setLoading(true);
    try {
      const callbackUrl = new URL(`${window.location.origin}/auth/callback`);

      if (subscribeNewsletter) {
        callbackUrl.searchParams.set('newsletter', 'true');
      }

      const { error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
          redirectTo: callbackUrl.toString(),
        },
      });

      if (error) throw error;
    } catch (err: any) {
      setMessage({ type: 'error', text: err.message || 'OAUTH_INITIALIZATION_FAILED.' });
    } finally {
      setLoading(false);
    }
  };

  // Auth Operations (Form Submit)
  const handleAuthSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage({ type: '', text: '' });

    // Sanitization to prevent duplicates due to case mismatch or trailing spaces
    const sanitizedEmail = email.trim().toLowerCase();
    const sanitizedPassword = password;
    const sanitizedName = name.trim();

    if (!sanitizedEmail || !sanitizedPassword) {
      setMessage({ type: 'error', text: 'ERR: ALL SECURITY NODES MUST BE VALID.' });
      setLoading(false);
      return;
    }

    try {
      if (isLogin) {
        // ─── CREDENTIALS LOGIN PIPELINE ───
        const { data: authData, error: authError } = await supabase.auth.signInWithPassword({ 
          email: sanitizedEmail, 
          password: sanitizedPassword 
        });

        if (authError) throw authError;

        if (authData?.user && authData?.session) {
          setMessage({ type: 'success', text: 'SYS: CREDENTIALS VERIFIED. FETCHING PRIVILEGES...' });

          // FIX: Casting table name as 'any' bypasses the 'never' type restriction cleanly
          const { data: profile, error: profileError } = await supabase
            .from('profiles' as any)
            .select('role')
            .eq('id', authData.user.id)
            .maybeSingle();

          // Safely extract role using our interface logic
          const typedProfile = profile as ProfileRow | null;
          const userRole = typedProfile?.role || 'user';
          const sessionToken = authData.session.access_token;

          // PROFESSIONAL COOKIE INJECTION via API
          try {
            await fetch('/api/auth/session', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({ token: sessionToken, role: userRole }),
            });
          } catch (cookieErr) {
            console.error("Session sync anomaly:", cookieErr);
          }

          // Secure Routing Gateway
          if (userRole === 'admin') {
            setMessage({ type: 'success', text: 'SYS: ADMIN IDENTITY CONFIRMED. OPENING CORE...' });
            window.location.href = '/admin';
          } else {
            setMessage({ type: 'success', text: 'SYS: ACCESS GRANTED. OPENING PANEL...' });
            window.location.href = '/dashboard';
          }
        }
      } else {
        // ─── REGISTRATION PIPELINE ───
        if (!agreeTerms) {
          setMessage({ type: 'error', text: 'ERR: YOU MUST ACCEPT THE SYSTEM TERMS.' });
          setLoading(false);
          triggerShake();
          return;
        }

        // 🔥 SECURITY LAYER 1: Explicit Database Pre-Check
        const { data: existingSub } = await supabase
          .from('newsletter_subscribers' as any)
          .select('email')
          .eq('email', sanitizedEmail)
          .maybeSingle();

        if (existingSub) {
          setMessage({ type: 'error', text: 'SECURITY_ALERT: ACCOUNT ALREADY REGISTERED. PROCEED TO LOGIN.' });
          setLoading(false);
          triggerShake();
          return; 
        }

        // Triggering Supabase SignUp
        const { data, error: signUpError } = await supabase.auth.signUp({
          email: sanitizedEmail,
          password: sanitizedPassword,
          options: { 
            data: { 
              full_name: sanitizedName,
              newsletter_subscribed: subscribeNewsletter
            } 
          }
        });

        if (signUpError) throw signUpError;

        if (data?.user) {
          // 🔥 SECURITY LAYER 2: Supabase Identity Validation Check
          if (data.user.identities && data.user.identities.length === 0) {
            setMessage({ type: 'error', text: 'IDENTITY_ANOMALY: NODE EXISTS. SWITCHING TO LOGIN...' });
            setLoading(false);
            triggerShake();
            return; 
          }

          // Verified Fresh Account - Proceed with Data Injection
          if (subscribeNewsletter) {
            try {
              await supabase
                .from('newsletter_subscribers' as any)
                .upsert([{ email: sanitizedEmail }] as any, { onConflict: 'email' } as any);
              console.log("✅ [NEWSLETTER] Entry secured.");
            } catch (nsErr) {
              console.error("Newsletter background constraint managed:", nsErr);
            }
          }

          // 🔥 CUSTOM EMAIL TRIGGER
          try {
            await fetch('/api/auth/welcome', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({ email: sanitizedEmail, name: sanitizedName }),
            });
            console.log("✅ Custom email pipeline triggered.");
          } catch (emailErr) {
            console.error("Custom mail trigger anomaly handled:", emailErr);
          }

          // Safe check if auto-login session is passed by Supabase
          if (data.session) {
            await fetch('/api/auth/session', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({ token: data.session.access_token, role: 'user' }),
            });
            window.location.href = '/dashboard';
            return;
          }

          setMessage({ type: 'success', text: 'SYS: ENLISTMENT COMPLETE. PLEASE LOGIN.' });
          setName(''); setEmail(''); setPassword('');
          setAgreeTerms(false); setSubscribeNewsletter(false);
          setIsLogin(true); // Auto swapper to login matrix
        }
      }
    } catch (err: any) {
      setMessage({ type: 'error', text: `ERR: ${err.message}`.toUpperCase() || 'OPERATIONAL_FAILURE.' });
      triggerShake();
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="min-h-screen bg-[#09090B] text-zinc-300 flex items-center justify-center py-12 px-4 sm:px-6 font-mono mt-10 md:mt-16 selection:bg-cyan-500/20 selection:text-cyan-400">
      
      <div className={`w-full max-w-md bg-[#0B0B0D] border border-zinc-900 p-6 sm:p-8 shadow-[0_15px_40px_-15px_rgba(0,0,0,0.8)] transition-transform duration-300 ${shake ? 'animate-shake' : ''}`}>
        
        {/* 📟 TERMINAL HEADER */}
        <div className="border-b border-zinc-950 pb-5 mb-6 space-y-2">
          <div className="flex justify-between items-center">
            <span className="text-[9px] text-zinc-600 tracking-[0.2em] uppercase">// AUTH_GATE_{isLogin ? "02" : "01"}</span>
            <span className="text-[9px] text-cyan-400 tracking-widest uppercase">SSL_SECURE</span>
          </div>
          <h1 className="text-xl sm:text-2xl font-black tracking-tight uppercase text-zinc-200">
            ISBLEX_<span className="text-cyan-400">CORE</span>
          </h1>
          <p className="text-[10px] text-zinc-500 tracking-wider">
            {isLogin ? "ACCESS DECENTRALIZED SECURE PANEL." : "FILL REQUIRED MATRIX NODES TO ENLIST."}
          </p>
        </div>

        {/* 🎛️ TERMINAL TABS */}
        <div className="flex gap-2 mb-6">
          <button
            type="button"
            onClick={() => { setIsLogin(false); setMessage({ type: '', text: '' }); }}
            className={`flex-1 py-2.5 border text-[10px] font-mono transition-all duration-300 uppercase ${
              !isLogin 
                ? 'border-cyan-500 text-cyan-400 bg-cyan-950/10 shadow-[0_0_15px_rgba(6,182,212,0.05)]' 
                : 'border-zinc-900 text-zinc-600 hover:border-zinc-700 hover:text-zinc-400'
            }`}
          >
            [01] REGISTER
          </button>
          <button
            type="button"
            onClick={() => { setIsLogin(true); setMessage({ type: '', text: '' }); }}
            className={`flex-1 py-2.5 border text-[10px] font-mono transition-all duration-300 uppercase ${
              isLogin 
                ? 'border-cyan-500 text-cyan-400 bg-cyan-950/10 shadow-[0_0_15px_rgba(6,182,212,0.05)]' 
                : 'border-zinc-900 text-zinc-600 hover:border-zinc-700 hover:text-zinc-400'
            }`}
          >
            [02] LOGIN
          </button>
        </div>

        {/* ⚠️ MESSAGE ALERT BOX */}
        {message.text && (
          <div className={`mb-6 p-3 border text-[10px] uppercase tracking-wider ${
            message.type === 'error' 
              ? 'border-red-900/50 bg-red-950/10 text-red-400' 
              : 'border-cyan-900/50 bg-cyan-950/10 text-cyan-400'
          }`}>
            {message.text}
          </div>
        )}

        {/* 🌐 OAUTH BUTTON */}
        <button
          onClick={handleGoogleAuth}
          disabled={loading}
          type="button"
          className="w-full bg-zinc-950 border border-zinc-900 text-zinc-400 text-[10px] font-bold uppercase tracking-widest py-3.5 hover:border-cyan-500/50 hover:text-white transition-all duration-300 flex items-center justify-center gap-3 mb-6 disabled:opacity-50"
        >
          <svg className="w-4 h-4" viewBox="0 0 24 24">
            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" fill="#FBBC05"/>
            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.63 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
          </svg>
          [ INITIALIZE_GOOGLE_OAUTH ]
        </button>

        {/* DIVIDER */}
        <div className="flex items-center mb-6">
          <div className="flex-1 border-t border-zinc-900"></div>
          <span className="px-4 text-[9px] text-zinc-600 tracking-widest uppercase">// OR_USE_CREDENTIALS</span>
          <div className="flex-1 border-t border-zinc-900"></div>
        </div>

        {/* ⚡ FORM PIPELINE */}
        <form onSubmit={handleAuthSubmit} className="space-y-4">
          {!isLogin && (
            <div className="space-y-1.5">
              <label className="block text-[9px] text-zinc-500 uppercase tracking-wider">
                // FULL_NAME_NODE
              </label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="JOHN DOE"
                className="w-full bg-zinc-950/50 border border-zinc-900 px-4 py-3 text-[11px] text-zinc-200 placeholder-zinc-700 focus:outline-none focus:border-cyan-500/50 transition-all uppercase rounded-none"
              />
            </div>
          )}

          <div className="space-y-1.5">
            <label className="block text-[9px] text-zinc-500 uppercase tracking-wider">
              // EMAIL_NODE
            </label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="USER@MATRIX.COM"
              className="w-full bg-zinc-950/50 border border-zinc-900 px-4 py-3 text-[11px] text-zinc-200 placeholder-zinc-700 focus:outline-none focus:border-cyan-500/50 transition-all uppercase rounded-none"
            />
          </div>

          <div className="space-y-1.5">
            <label className="block text-[9px] text-zinc-500 uppercase tracking-wider">
              // SECURITY_KEY
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full bg-zinc-950/50 border border-zinc-900 px-4 py-3 pr-12 text-[11px] text-zinc-200 placeholder-zinc-700 focus:outline-none focus:border-cyan-500/50 transition-all rounded-none"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-600 hover:text-cyan-400 transition-colors p-1"
                tabIndex={-1}
              >
                {showPassword ? (
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268-2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                  </svg>
                ) : (
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                )}
              </button>
            </div>
          </div>

          {/* 🔥 FIXED CHECKBOXES HERE */}
          {!isLogin && (
            <div className="space-y-3 pt-3">
              
              {/* TERMS CHECKBOX */}
              <label className="flex items-start gap-3 cursor-pointer group p-3 border border-zinc-900 hover:border-zinc-800 transition-all bg-zinc-950/20">
                <input 
                  type="checkbox" 
                  className="hidden" 
                  checked={agreeTerms} 
                  onChange={(e) => setAgreeTerms(e.target.checked)} 
                />
                <div className={`w-4 h-4 mt-0.5 border flex items-center justify-center transition-all ${
                  agreeTerms ? 'border-cyan-500 bg-cyan-950/20 text-cyan-400' : 'border-zinc-800 bg-zinc-950 text-transparent'
                }`}>
                  <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-[10px] text-zinc-500 group-hover:text-zinc-300 transition-colors uppercase tracking-wider leading-relaxed">
                  ACCEPT STRUCTURAL <a href="/terms" onClick={(e) => e.stopPropagation()} className="text-cyan-500 hover:underline">TERMS & CONDITIONS</a>.
                </span>
              </label>

              {/* NEWSLETTER CHECKBOX */}
              <label className="flex items-start gap-3 cursor-pointer group p-3 border border-zinc-900 hover:border-zinc-800 transition-all bg-zinc-950/20">
                <input 
                  type="checkbox" 
                  className="hidden" 
                  checked={subscribeNewsletter} 
                  onChange={(e) => setSubscribeNewsletter(e.target.checked)} 
                />
                <div className={`w-4 h-4 mt-0.5 border flex items-center justify-center transition-all ${
                  subscribeNewsletter ? 'border-cyan-500 bg-cyan-950/20 text-cyan-400' : 'border-zinc-800 bg-zinc-950 text-transparent'
                }`}>
                  <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-[10px] text-zinc-500 group-hover:text-zinc-300 transition-colors uppercase tracking-wider leading-relaxed">
                  SUBSCRIBE TO INTELLIGENCE NEWSLETTERS FEED.
                </span>
              </label>

            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full py-4 mt-4 bg-cyan-500 text-[#09090B] text-[10px] font-bold uppercase tracking-widest transition-all duration-300 hover:bg-cyan-400 cursor-pointer shadow-[0_4px_15px_rgba(34,211,238,0.1)] active:scale-98 disabled:opacity-50 disabled:cursor-not-allowed flex justify-center items-center gap-2"
          >
            {loading ? (
              '[ TRANSMITTING_DATA... ]'
            ) : (
              isLogin ? '[ EXECUTE_LOGIN ]' : '[ GENERATE_ENLISTMENT ]'
            )}
          </button>
        </form>

        {/* 🛡️ FOOTER */}
        <div className="mt-8 pt-5 border-t border-zinc-950 flex items-center justify-between">
          <div className="flex items-center gap-2 text-[9px] text-zinc-600 uppercase tracking-widest">
            <svg className="w-3 h-3 text-cyan-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            <span>SSL_ENCRYPTED</span>
          </div>
          <div className="text-[9px] text-zinc-700 uppercase tracking-[0.2em]">
            SHIELD-V2.6
          </div>
        </div>
      </div>
      
    </section>
  );
}