import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { createServerClient } from '@supabase/ssr';
import DashboardClientUI from './DashboardClientUI';
import SessionGuard from '@/components/legal/SessionGuard'; // Background verification guard

export const dynamic = 'force-dynamic';

export default async function DashboardPage() {
  const cookieStore = await cookies();
  
  // Premium Supabase Server Client to securely verify active session
  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() { return cookieStore.getAll(); },
        setAll() {}, // Tokens handling strictly managed by client layer
      },
    }
  );

  // 1. Authenticated Client ID verification
  const { data: { user }, error: authError } = await supabase.auth.getUser();

  if (authError || !user) {
    redirect('/?error=unauthorized');
  }

  // 2. Fetch live botanical member data from Profiles journal
  const { data: profile } = await supabase
    .from('profiles')
    .select('*')
    .eq('id', user.id)
    .maybeSingle();

  // Mapping member attributes with premium fallback presets
  const userData = {
    email: profile?.email || user.email || 'N/A',
    fullName: profile?.full_name || user.user_metadata?.full_name || 'Valued Guest',
    role: profile?.role || 'member',
    isSubscribed: profile?.newsletter_subscribed || false,
    avatar: user.user_metadata?.avatar_url || null,
  };

  return (
    <>
      {/* Background session integrity tracker powered by WebSockets */}
      <SessionGuard userId={user.id} />
      
      {/* Main client luxury ritual dashboard layout */}
      <DashboardClientUI user={userData} />
    </>
  );
}