import { createClient } from "@supabase/supabase-js";
import { supabaseUrl, supabaseAnonKey } from '$lib/vars';

export class Supabase {
    constructor() {
        this.supabase = this.supabaseLogin()
    }
    supabaseLogin = () => {
        let sbUrl; let sbAnonKey;
    
        if (process.env.NODE_ENV === 'production') {
            // For production
            sbUrl = process.env.PUBLIC_SUPABASE_URL;
            sbAnonKey = process.env.PUBLIC_SUPABASE_ANON_KEY;
        } else {
            // For development
            sbUrl = supabaseUrl;
            sbAnonKey = supabaseAnonKey;
        }
    
        const supabase = createClient(sbUrl, sbAnonKey);
        return supabase;
    }
    getPosts = async () => {
        const { data, error } = await this.supabase.from("posts").select("*");
        // Check if errors
        if (error != null) return { error: new Error(error) };
        return data;
    }
  }