import { createClient } from '@supabase/supabase-js';

// Replace with your Supabase credentials
const supabaseUrl = 'https://YOUR-SUPABASE-URL.supabase.co';
const supabaseAnonKey = 'YOUR-SUPABASE-ANON-KEY';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
