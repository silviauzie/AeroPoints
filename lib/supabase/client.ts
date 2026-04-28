import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.EXPO_PUBLIC_SUPABASE_URL ?? "";
const supabaseAnonkey = process.env.EXPO_PUBLIC_SUPABASE_ANON_KEY ?? "";
export const supabase = createClient(supabaseUrl, supabaseAnonkey, {
  auth: {
    storage: ExpoWebSecureStoreAdapter,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
});
