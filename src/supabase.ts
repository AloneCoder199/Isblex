import { createBrowserClient } from '@supabase/ssr';

// 1. Database types declaration matching your tables
export type Database = {
  public: {
    Tables: {
      addresses: { Row: any; Insert: any; Update: any };
      categories: { Row: any; Insert: any; Update: any };
      email_logs: { Row: any; Insert: any; Update: any };
      newsletter_subscribers: { Row: any; Insert: any; Update: any };
      order_items: { Row: any; Insert: any; Update: any };
      orders: { Row: any; Insert: any; Update: any };
      products: { Row: any; Insert: any; Update: any };
      profiles: { Row: any; Insert: any; Update: any };
      wishlists: { Row: any; Insert: any; Update: any };
    };
  };
};

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

// 2. Safety check to ensure keys are loaded
if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables! Check your .env.local file.');
}

// 3. Initialize the modern SSR-compatible Browser Client
// Yeh automatically cookies aur PKCE authorization code flow handle karega
export const supabase = createBrowserClient<Database>(supabaseUrl, supabaseAnonKey);