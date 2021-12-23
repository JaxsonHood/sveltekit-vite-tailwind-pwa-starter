<script context="module">
    import { Supabase } from '$lib/supabase'

    const db = new Supabase()

    // Load data from api endpoint on server
	export const load = async ({ fetch }) => {
        const posts = await db.getPosts()
        const message = posts[0].content
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
