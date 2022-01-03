<script context="module">

    // Load data from api endpoint on server
	export const load = async ({ fetch }) => {
        const app_name = "fizzl"
        const message = "hello"

        return {
            props: { message, app_name }
        }
	};
</script>

<script>
    import { onMount } from 'svelte';

    // Declare variable on client
    export let message;
    export let app_name;

	onMount(async () => {
		console.info("Mounted...")
	});
</script>

<svelte:head>
	<title>{ app_name }</title>
    <meta name="description" content="A new modern social media platform!">
    <meta name="theme-color" content="#ffffff">
</svelte:head>

<main class="bg-white text-gray-900 text-3xl w-full h-screen grid content-center justify-center text-center transition-all">
    <div class="font-bold text-8xl text-gray-200">{ app_name }</div>
    <div class="p-5 font-semibold text-gray-400 font-mono animate-pulse">Coming Soon!</div>
    <!-- <div class="font-bold text-5xl">Hello From SvelteKit + Tailwind + Vercel + Supabase</div> -->
    <div class="p-5 font-thin text-xs text-gray-900">{ message }</div>
</main>
