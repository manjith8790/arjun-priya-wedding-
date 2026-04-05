// ─── Supabase Config ───────────────────────────────────────────────────────
import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm';

const SUPABASE_URL  = 'https://wblqunqnukmdppfknton.supabase.co';
const SUPABASE_ANON = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndibHF1bnFudWttZHBwZmtudG9uIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzUzOTYxNTUsImV4cCI6MjA5MDk3MjE1NX0.IdzKnIISYGE6iOupp_Bp3PbfcRAPcYXYHIqvTz3gLHc';

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON);
