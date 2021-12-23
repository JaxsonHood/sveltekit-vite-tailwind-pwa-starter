<script context="module">
    import { createClient } from "@supabase/supabase-js";
    import { supabaseUrl, supabaseAnonKey } from '$lib/vars';

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

    // Load data from api endpoint on server
	export const load = async ({ fetch }) => {
        const supabase = createClient(sbUrl, sbAnonKey);
		const { data, error } = await supabase.from("posts").select("*");

        // Check if errors
        if (error != null) return { error: new Error(error) }

        const message = data[0].content
        return {
            props: { message }
        }
	};
</script>

<script>
    // Declare variable on client
    export let message;
</script>

<svelte:head>
	<title>SvelteKit + Tailwind + Vercel + Supabase</title>
</svelte:head>

<main class="bg-black text-gray-200 text-xl w-full h-screen grid content-center justify-center text-center">
    <div class="font-bold text-5xl">Hello From SvelteKit + Tailwind + Vercel + Supabase</div>
    <div class="p-5 font-bold text-gray-400 font-mono">{ message }</div>
</main>
