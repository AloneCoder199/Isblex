'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { createClient } from '@supabase/supabase-js';

// Client-side Supabase client initialization
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export default function SessionGuard({ userId }: { userId: string }) {
  const router = useRouter();

  useEffect(() => {
    if (!userId) return;

    console.log(`📡 [REALTIME GUARD] Listening for account deletions for ID: ${userId}`);

    // 🔥 WebSockets ke zariye sirf is specific User ID ki deletion ko listen karna
    const channel = supabase
      .channel(`profile-security-${userId}`)
      .on(
        'postgres_changes',
        {
          event: 'DELETE',      // Sirf tab trigger ho jab row delete ho
          schema: 'public',
          table: 'profiles',
          filter: `id=eq.${userId}`, // Sirf is user ki row par nazar rakho
        },
        async (payload) => {
          console.log('🚨 [SECURITY WARNING] User profile deleted from DB! Kicking out...');
          
          // 1. Clear secure HTTP-only cookies via our API
          await fetch('/api/auth/logout', { method: 'POST' });
          
          // 2. Refresh Next.js router cache
          router.refresh();
          
          // 3. Send user back to home or login page
          router.push('/?error=account_deleted');
        }
      )
      .subscribe();

    // Cleanup connection when component unmounts
    return () => {
      supabase.removeChannel(channel);
    };
  }, [userId, router]);

  return null; // Yeh component screen par kuch render nahi karega, background worker hai
}