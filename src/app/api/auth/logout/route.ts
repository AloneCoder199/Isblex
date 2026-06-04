import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';

export async function POST() {
  const cookieStore = await cookies();
  
  // Dono secure cookies ko delete kar dein
  cookieStore.delete('auth_token');
  cookieStore.delete('user_role');

  return NextResponse.json({ success: true, message: "Cookies cleared successfully" });
}