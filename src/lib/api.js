import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://opxtkzoavbfipcuirsts.supabase.co";
const supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9weHRrem9hdmJmaXBjdWlyc3RzIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzA2NDIzNjcsImV4cCI6MTk4NjIxODM2N30.QqYlB3sGSivWZEqNhOtEzxp6uQdqVTGVkrX3VzNaoXM";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
