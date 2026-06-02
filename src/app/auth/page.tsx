"use client";

import React, { useState, useCallback, useEffect } from 'react';
import { supabase } from '@/supabase';

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
        text: 'You must accept the terms before continuing with Google.' 
      });
      triggerShake();
      return;
    }

    setLoading(true);
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

    if (error) setMessage({ type: 'error', text: error.message });
    setLoading(false);
  };

  // Auth Operations (Form Submit)
  const handleAuthSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage({ type: '', text: '' });

    if (isLogin) {
      // ─── CREDENTIALS LOGIN PIPELINE ───
      const { data: authData, error: authError } = await supabase.auth.signInWithPassword({ email, password });

      if (authError) {
        setMessage({ type: 'error', text: authError.message });
        setLoading(false);
        return;
      }

      if (authData?.user && authData?.session) {
        setMessage({ type: 'success', text: 'Credentials verified. Fetching access privileges...' });

        // Database se user ka role check
        const { data: profile, error: profileError } = await supabase
          .from('profiles' as any)
          .select('role')
          .eq('id', authData.user.id)
          .single();

        const userRole = (profile as any)?.role || 'user';
        const sessionToken = authData.session.access_token;

        // 🔥 PROFESSIONAL COOKIE INJECTION via API
        try {
          await fetch('/api/auth/session', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ token: sessionToken, role: userRole }),
          });
        } catch (cookieErr) {
          console.error("Session cookie setting failed:", cookieErr);
        }

        // Routing Gateway
        if (userRole === 'admin') {
          setMessage({ type: 'success', text: 'Admin identity confirmed. Opening core dashboard...' });
          window.location.href = '/admin';
        } else {
          setMessage({ type: 'success', text: 'Access granted! Opening client panel...' });
          window.location.href = '/dashboard';
        }
      }
    } else {
      // ─── REGISTRATION PIPELINE ───
      if (!agreeTerms) {
        setMessage({ type: 'error', text: 'You must accept the system terms.' });
        setLoading(false);
        return;
      }

      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: { 
          data: { 
            full_name: name,
            newsletter_subscribed: subscribeNewsletter
          } 
        }
      });

      if (error) {
        setMessage({ type: 'error', text: error.message });
        setLoading(false);
        return;
      }

      if (data.user) {
        // Newsletter Table Injection
        if (subscribeNewsletter) {
          try {
            await (supabase as any).from('newsletter_subscribers').insert([{ email }]);
            console.log("✅ [NEWSLETTER] Entry successfully injected.");
          } catch (nsErr) {
            console.error("Newsletter injection failure:", nsErr);
          }
        }

        // Trigger Custom Welcome Email Pipeline
        try {
          await fetch('/api/auth/welcome', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, name }),
          });
        } catch (emailErr) {
          console.error("Custom mail trigger anomaly:", emailErr);
        }

        // 🔥 If Auto-Login is enabled in Supabase, set cookies right away
        if (data.session) {
          await fetch('/api/auth/session', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ token: data.session.access_token, role: 'user' }),
          });
          window.location.href = '/dashboard';
          return;
        }

        setMessage({ type: 'success', text: 'Enlistment complete! Account secured & data saved. Please login.' });
        setName(''); setEmail(''); setPassword('');
        setAgreeTerms(false); setSubscribeNewsletter(false);
        setIsLogin(true); // Switch to login tab automatically
      }
    }
    setLoading(false);
  };

  return (
    <section className="min-h-screen bg-background flex items-center justify-center p-4 md:p-8 font-sans selection:bg-brand-cyan selection:text-brand-dark relative overflow-hidden md:mt-23 mt-13">
      {/* Background ambient glow */}
      <div className="absolute top-[-20%] left-[-10%] w-125 h-125 bg-brand-cyan/3 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-20%] right-[-10%] w-125 h-125 bg-brand-blue/3 rounded-full blur-[120px] pointer-events-none" />

      <div className={`w-full max-w-md bg-brand-card border border-brand-border p-6 md:p-8 rounded-2xl relative overflow-hidden transition-all duration-300 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.8)] ${shake ? 'animate-shake' : ''}`}>

        {/* Top accent line */}
        <div className="absolute top-0 left-0 right-0 h-0.5 bg-linear-to-r from-transparent via-brand-cyan to-transparent opacity-60" />

        {/* Corner badge */}
        <div className="absolute top-3 right-3 text-[9px] font-mono text-brand-border select-none tracking-widest uppercase">
          AUTH_GATE_{isLogin ? "02" : "01"}
        </div>

        {/* Header */}
        <div className="mb-8 text-center sm:text-left mt-2">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-9 h-9 rounded-lg bg-brand-cyan/10 border border-brand-cyan/20 flex items-center justify-center">
              <svg className="w-5 h-5 text-brand-cyan" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <div>
              <h1 className="text-lg font-black text-foreground uppercase tracking-tight leading-none">ISBLEX</h1>
              <p className="text-[9px] font-mono text-brand-muted uppercase tracking-widest mt-0.5">Secure Gateway</p>
            </div>
          </div>
          <h2 className="text-2xl font-black text-foreground uppercase tracking-tight">
            {isLogin ? "Welcome Back" : "Initialize Account"}
          </h2>
          <p className="text-xs text-brand-muted font-mono mt-1.5">
            {isLogin ? "Access your decentralized secure panel" : "Fill required matrix nodes to enlist"}
          </p>
        </div>

        {/* Tab Swapper - Pill Style */}
        <div className="relative mb-6 bg-brand-dark rounded-xl p-1 border border-brand-border">
          <div 
            className="absolute top-1 bottom-1 bg-foreground rounded-lg transition-all duration-300 ease-out"
            style={{ 
              left: isLogin ? '50%' : '4px', 
              width: 'calc(50% - 6px)' 
            }}
          />
          <div className="grid grid-cols-2 gap-1 relative z-10">
            <button
              type="button"
              onClick={() => { setIsLogin(false); setMessage({ type: '', text: '' }); }}
              className={`py-2.5 text-[11px] font-mono tracking-wider uppercase transition-all duration-200 text-center rounded-lg ${
                !isLogin ? 'text-brand-dark font-bold' : 'text-brand-muted hover:text-foreground'
              }`}
            >
              [01] Register
            </button>
            <button
              type="button"
              onClick={() => { setIsLogin(true); setMessage({ type: '', text: '' }); }}
              className={`py-2.5 text-[11px] font-mono tracking-wider uppercase transition-all duration-200 text-center rounded-lg ${
                isLogin ? 'text-brand-dark font-bold' : 'text-brand-muted hover:text-foreground'
              }`}
            >
              [02] Login
            </button>
          </div>
        </div>

        {/* Message Alert */}
        {message.text && (
          <div className={`p-3.5 mb-5 text-xs font-mono border rounded-lg flex items-start gap-2.5 animate-fade-in ${
            message.type === 'error' 
              ? 'bg-red-950/30 border-red-900/50 text-red-400' 
              : 'bg-brand-cyan/10 border-brand-cyan/30 text-brand-cyan'
          }`}>
            {message.type === 'error' ? (
              <svg className="w-4 h-4 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            ) : (
              <svg className="w-4 h-4 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            )}
            <span className="leading-relaxed">{message.text}</span>
          </div>
        )}

        {/* Google Auth Button */}
        <button
          onClick={handleGoogleAuth}
          disabled={loading}
          type="button"
          className="w-full bg-brand-dark border border-brand-border text-foreground font-mono text-xs py-3.5 px-4 hover:border-brand-muted hover:bg-brand-border/30 transition-all duration-300 flex items-center justify-center gap-3 uppercase tracking-wider mb-5 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed group"
        >
          <svg className="w-4 h-4 transition-transform duration-300 group-hover:scale-110" viewBox="0 0 24 24">
            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" fill="#FBBC05"/>
            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.63 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
          </svg>
          Continue With Google
        </button>

        {/* Divider */}
        <div className="relative flex py-2 items-center mb-5">
          <div className="grow border-t border-brand-border"></div>
          <span className="shrink mx-4 text-[10px] font-mono text-brand-muted uppercase tracking-widest">OR USE CREDENTIALS</span>
          <div className="grow border-t border-brand-border"></div>
        </div>

        {/* Form */}
        <form onSubmit={handleAuthSubmit} className="space-y-4">
          {!isLogin && (
            <div className="group">
              <label className="flex items-center gap-2 text-[10px] font-mono text-brand-muted uppercase tracking-wider mb-2">
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                Full Name
              </label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="John Doe"
                className="w-full bg-brand-dark border border-brand-border p-3.5 text-sm text-foreground focus:outline-none focus:border-brand-cyan focus:shadow-[0_0_0_3px_rgba(34,211,238,0.1)] transition-all duration-200 rounded-lg placeholder-brand-border/60 hover:border-brand-muted/50"
              />
            </div>
          )}

          <div className="group">
            <label className="flex items-center gap-2 text-[10px] font-mono text-brand-muted uppercase tracking-wider mb-2">
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Email Node
            </label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="user@matrix.com"
              className="w-full bg-brand-dark border border-brand-border p-3.5 text-sm text-foreground focus:outline-none focus:border-brand-cyan focus:shadow-[0_0_0_3px_rgba(34,211,238,0.1)] transition-all duration-200 rounded-lg placeholder-brand-border/60 hover:border-brand-muted/50"
            />
          </div>

          <div className="group">
            <label className="flex items-center gap-2 text-[10px] font-mono text-brand-muted uppercase tracking-wider mb-2">
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
              Security Key
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full bg-brand-dark border border-brand-border p-3.5 pr-12 text-sm text-foreground focus:outline-none focus:border-brand-cyan focus:shadow-[0_0_0_3px_rgba(34,211,238,0.1)] transition-all duration-200 rounded-lg placeholder-brand-border/60 hover:border-brand-muted/50"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-brand-muted hover:text-foreground transition-colors duration-200 p-1"
                tabIndex={-1}
              >
                {showPassword ? (
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                  </svg>
                ) : (
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                )}
              </button>
            </div>
          </div>

          {!isLogin && (
            <div className="space-y-3 pt-2">
              <label className="flex items-start gap-3 cursor-pointer group/select select-none p-3 rounded-lg border border-brand-border hover:border-brand-muted/30 transition-all duration-200">
                <input type="checkbox" checked={agreeTerms} onChange={(e) => setAgreeTerms(e.target.checked)} className="hidden peer" />
                <div className="w-5 h-5 mt-0.5 rounded-md border-2 border-brand-border bg-brand-dark flex items-center justify-center peer-checked:border-brand-cyan peer-checked:bg-brand-cyan/10 transition-all duration-200 shrink-0">
                  <svg className="w-3 h-3 text-brand-cyan opacity-0 peer-checked:opacity-100 transition-opacity duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-xs text-brand-muted group-hover/select:text-foreground transition-colors leading-relaxed">
                  I accept all structural <a href="/terms" className="text-brand-cyan hover:underline">Terms & Conditions</a>.
                </span>
              </label>

              <label className="flex items-start gap-3 cursor-pointer group/select select-none p-3 rounded-lg border border-brand-border hover:border-brand-muted/30 transition-all duration-200">
                <input type="checkbox" checked={subscribeNewsletter} onChange={(e) => setSubscribeNewsletter(e.target.checked)} className="hidden peer" />
                <div className="w-5 h-5 mt-0.5 rounded-md border-2 border-brand-border bg-brand-dark flex items-center justify-center peer-checked:border-brand-cyan peer-checked:bg-brand-cyan/10 transition-all duration-200 shrink-0">
                  <svg className="w-3 h-3 text-brand-cyan opacity-0 peer-checked:opacity-100 transition-opacity duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-xs text-brand-muted group-hover/select:text-foreground transition-colors leading-relaxed">
                  Subscribe to intelligence newsletters feed.
                </span>
              </label>
            </div>
          )}

          {/* Forgot Password - Login Only */}
          {isLogin && (
            <div className="flex justify-end -mt-1">
              <a href="/auth/forgot-password" className="text-[11px] font-mono text-brand-cyan hover:text-brand-blue transition-colors duration-200">
                Forgot Security Key?
              </a>
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-foreground text-brand-dark hover:bg-brand-cyan hover:shadow-[0_0_30px_rgba(34,211,238,0.3)] active:scale-[0.98] transition-all duration-300 font-bold uppercase tracking-widest text-xs py-4 px-4 mt-2 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 group"
          >
            {loading ? (
              <>
                <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                </svg>
                PROCESSING...
              </>
            ) : (
              <>
                {isLogin ? "ACCESS CORE" : "GENERATE ENLISTMENT"}
                <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </>
            )}
          </button>
        </form>

        {/* Footer */}
        <div className="mt-6 pt-5 border-t border-brand-border flex items-center justify-between">
          <div className="flex items-center gap-2 text-[10px] font-mono text-brand-muted">
            <svg className="w-3.5 h-3.5 text-brand-cyan" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            <span>SSL Encrypted</span>
          </div>
          <div className="text-[9px] font-mono text-brand-border uppercase tracking-widest select-none">
            SECURE PROTOCOL // SHIELD-v2.6
          </div>
        </div>
      </div>
    </section>
  );
}