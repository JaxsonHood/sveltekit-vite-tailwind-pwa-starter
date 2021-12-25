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
    let theme = 'dark'

    const toggleTheme = () => {
        if (theme == 'light'){
            theme = 'dark'
        } else theme = 'light'
    }
</script>

<svelte:head>
	<title>u-n-me</title>
    <meta name="description" content="A new way to find people that are interesting!">
</svelte:head>

<main class="{theme === 'dark' ? 
'bg-black text-gray-200 text-3xl w-full h-screen grid content-center justify-center text-center transition-all' : 'bg-white text-gray-900 text-3xl w-full h-screen grid content-center justify-center text-center transition-all'}">
    <div class="-mt-10 mx-auto">
        {#if theme === 'dark'}
            <img class="w-64" src="/logo.png" alt="heart rings" />
        {:else}
            <img class="w-64" src="/logo-black.png" alt="heart rings" />
        {/if}
    </div>
    <div class="font-bold text-8xl text-gray-200">u-<span class="text-gray-400">n-</span><span class=" text-gray-300">me</span></div>
    <div class="p-5 font-semibold text-gray-400 font-mono animate-pulse">Coming Soon!</div>
    <!-- <div class="font-bold text-5xl">Hello From SvelteKit + Tailwind + Vercel + Supabase</div> -->
    <div class="p-5 font-thin text-xs text-gray-900">{ message }</div>

    <!-- dark mode toggle -->
    <div class="mx-auto mt-10">
        <div class="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in" on:click={toggleTheme}>
            <input type="checkbox" name="toggle" id="toggle" class="{theme === 'dark' ? 'absolute block w-6 h-6 rounded-full bg-gray-700 border-4 appearance-none cursor-pointer right-0' : 'absolute block w-6 h-6 rounded-full bg-gray-700 border-4 appearance-none cursor-pointer'}"/>
            <label for="toggle" class="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"></label>
        </div>
        <label for="toggle" class="text-sm mb-1 font-semibold text-gray-600">Dark Mode</label>
    </div>
</main>
