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
	<title>u-n-me</title>
    <meta name="description" content="A new way to find people that are interesting!">
</svelte:head>

<main class="bg-black text-gray-200 text-3xl w-full h-screen grid content-center justify-center text-center">
    <div class="-mt-10 mx-auto">
        <img class="w-72" src="/logo.png" alt="heart rings" />
    </div>
    <div class="font-bold text-8xl text-gray-100">u-<span class="text-gray-400">n-</span><span class=" text-gray-300">me</span></div>
    <div class="p-5 font-semibold text-gray-400 font-mono animate-pulse">Coming Soon!</div>
    <!-- <div class="font-bold text-5xl">Hello From SvelteKit + Tailwind + Vercel + Supabase</div> -->
    <div class="p-5 font-thin text-xs text-gray-900">{ message }</div>
</main>
