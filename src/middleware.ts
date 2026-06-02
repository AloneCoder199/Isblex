import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // 1. Cookies se token aur user role nikalein
  const token = request.cookies.get('auth_token')?.value;
  const userRole = request.cookies.get('user_role')?.value; // 'admin' ya 'user'

  // Public Auth Route Path
  const authPath = '/auth';

  // 2. LOGGED-IN USER PROTECTION (Auth page bypass)
  // Agar user pehle se logged in hai aur login/register page par jaane ki koshish kare
  if (pathname === authPath) {
    if (token) {
      const destination = userRole === 'admin' ? '/admin' : '/dashboard';
      return NextResponse.redirect(new URL(destination, request.url));
    }
    return NextResponse.next(); // Agar token nahi hai to auth page load hone do
  }

  // 3. DASHBOARD PROTECTION (For regular users & admins)
  if (pathname.startsWith('/dashboard')) {
    if (!token) {
      const loginUrl = new URL(authPath, request.url);
      // callbackUrl save kar rahe hain taake login ke baad user wapas isi exact page par aaye
      loginUrl.searchParams.set('callbackUrl', pathname);
      return NextResponse.redirect(loginUrl);
    }
  }

  // 4. ADMIN ROUTES PROTECTION (Strictly for admins only)
  if (pathname.startsWith('/admin')) {
    // Agar logged in hi nahi hai
    if (!token) {
      const loginUrl = new URL(authPath, request.url);
      loginUrl.searchParams.set('callbackUrl', pathname);
      return NextResponse.redirect(loginUrl);
    }

    // Agar logged in hai lekin role admin nahi hai, to dashboard par bhej do
    if (userRole !== 'admin') {
      console.warn(`🔒 [SECURITY ALERT]: Unauthorized access attempt to ${pathname} by non-admin!`);
      return NextResponse.redirect(new URL('/dashboard', request.url));
    }
  }

  // Agar sab Matrix Protocols verified hain to user ko aage jaane do
  return NextResponse.next();
}

// 5. CONFIG MATCHER: Middleware sirf inhi core routes par trigger hoga
export const config = {
  matcher: [
    '/dashboard/:path*',
    '/admin/:path*',
    '/auth', // 🔥 Auth route ko matcher mein add kiya taake logged-in check lag sake
  ],
};