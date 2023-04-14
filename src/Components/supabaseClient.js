import { createClient } from '@supabase/supabase-js';

// To be more secure: .env file. 
const supabaseURL = "https://gccbvmysnmhwvmsevsbv.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdjY2J2bXlzbm1od3Ztc2V2c2J2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2Nzg4NjY2ODYsImV4cCI6MTk5NDQ0MjY4Nn0.EM8tHXYHV3qlJokfgyYUbLwnuxhtgCEeECaumuSguRE";

export const supabase = createClient(supabaseURL, supabaseAnonKey);