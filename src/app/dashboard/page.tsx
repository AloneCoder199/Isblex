import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { createServerClient } from '@supabase/ssr';
import DashboardClientUI from './DashboardClientUI';
import SessionGuard from '@/components/legal/SessionGuard'; // 🔥 NEW IMPORT: Background guard component

export const dynamic = 'force-dynamic';

export default async function DashboardPage() {
  const cookieStore = await cookies();
  
  // Supabase Server Client banana session check karne ke liye
  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() { return cookieStore.getAll(); },
        setAll() {}, // Server component mein tokens set karne ki zaroorat nahi
      },
    }
  );

  // 1. Current Auth User ki ID nikaalna
  const { data: { user }, error: authError } = await supabase.auth.getUser();

  if (authError || !user) {
    redirect('/?error=unauthorized');
  }

  // 2. Profiles table se user ka live data uthana
  const { data: profile } = await supabase
    .from('profiles')
    .select('*')
    .eq('id', user.id)
    .maybeSingle();

  // Agar profile DB mein nahi milti to fallback data dena
  const userData = {
    email: profile?.email || user.email || 'N/A',
    fullName: profile?.full_name || user.user_metadata?.full_name || 'Matrix User',
    role: profile?.role || 'user',
    isSubscribed: profile?.newsletter_subscribed || false,
    avatar: user.user_metadata?.avatar_url || null,
  };

  // 🔥 FIX: Background guard aur Visual UI dono ko ek sath pass kar diya
  return (
    <>
      {/* Yeh component background mein user id par chup-chaap WebSocket se nazar rakhega */}
      <SessionGuard userId={user.id} />
      
      {/* Yeh aapka main customer dashboard responsive UI hai */}
      <DashboardClientUI user={userData} />
    </>
  );
}