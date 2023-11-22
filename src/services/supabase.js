import { createClient } from '@supabase/supabase-js';

export const supabaseUrl = 'https://jhwkmijrknalfwdkwbsb.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Impod2ttaWpya25hbGZ3ZGt3YnNiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDA1MDM2ODgsImV4cCI6MjAxNjA3OTY4OH0.uGbfEiMT_bet3-WJzYBS71AzKRaU0oE8uZOav5l5jFI';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;