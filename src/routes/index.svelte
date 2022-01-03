<script context="module">

    // Load data from api endpoint on server
	export const load = async ({ fetch }) => {
        const app_name = "fizzl"
        const message = "A new age social media experience"

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

<main class="bg-black text-gray-300 text-3xl w-full h-screen grid content-center justify-center text-center transition-all">
    <div class="mx-auto w-28 pb-10 -mt-10">
        <img class="rounded-2xl" src="/soda_bottle.jpeg" alt="soda bottle logo" />
    </div>
    <div class="font-bold text-8xl text-gray-200">{ app_name }</div>
    <!-- <div class="font-bold text-5xl">Hello From SvelteKit + Tailwind + Vercel + Supabase</div> -->
    <div class="p-5 font-mono text-sm text-gray-400">{ message }</div>
    <div class="p-5 text-gray-300 font-mono animate-pulse pt-10">Coming Soon!</div>
</main>
