import { createClient } from '@supabase/supabase-js';

function requiredEnv(name: string): string {
  const v = process.env[name];
  if (!v) throw new Error(`Missing environment variable: ${name}`);
  return v;
}

export function createSupabaseServerClient() {
  const url = requiredEnv('NEXT_PUBLIC_SUPABASE_URL');

  // Prefer service role on the server, fall back to anon for read-only.
  const key =
    process.env.SUPABASE_SERVICE_ROLE_KEY ?? requiredEnv('NEXT_PUBLIC_SUPABASE_ANON_KEY');

  return createClient(url, key, {
    auth: { persistSession: false, autoRefreshToken: false },
  });
}

