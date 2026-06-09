'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { createClient } from '@supabase/supabase-js';

// Initialize the secure client-side database interface
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export default function SessionGuard({ userId }: { userId: string }) {
  const router = useRouter();

  useEffect(() => {
    if (!userId) return;

    console.log(`✨ [PRIFYA CONCIERGE] Establishing session validation sync for Patron ID: ${userId}`);

    // Synchronize via active event stream to track account profile status dynamically
    const channel = supabase
      .channel(`prifya-patron-guard-${userId}`)
      .on(
        'postgres_changes',
        {
          event: 'DELETE',      // Triggered strictly upon record erasure
          schema: 'public',
          table: 'profiles',     // Targets the core registration database
          filter: `id=eq.${userId}`, // Focused exclusively on this specific patron profile
        },
        async (payload) => {
          console.warn('✨ [PRIFYA ATELIER] Patron profile update synchronized. Revoking active session credentials...');
          
          // 1. Clear secure HTTP-only cookies via our authorization API endpoint
          await fetch('/api/auth/logout', { method: 'POST' });
          
          // 2. Refresh the layout view state and clear router cache
          router.refresh();
          
          // 3. Gracefully return the interface to the storefront destination
          router.push('/?error=account_deleted');
        }
      )
      .subscribe();

    // Sever the real-time stream channel gracefully when the layout node unmounts
    return () => {
      supabase.removeChannel(channel);
    };
  }, [userId, router]);

  // This background worker operates silently without altering the client user interface visual layout
  return null;
}