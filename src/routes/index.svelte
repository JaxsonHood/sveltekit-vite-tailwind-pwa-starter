<!-- This script tag is loaded and ran on the server -->
<script context="module">
    // Load data from api endpoint on server
	export const load = async ({ fetch }) => {
        const app_name = "sveltekit-vite-tailwind-vercel-pwa"

        //These props are accessible to the script tag on the client side by
        // adding "export let app_name;" to the other script tag
        return {
            props: { app_name }
        }
	};
</script>

<!-- This is ran on the client side -->
<script>
    import { onMount } from 'svelte';
    import { fade, fly, slide } from "svelte/transition";

    // Declare variable on client
    let message = "This is a starter template for a SvelteKit-Vite-Tailwind-PWA app ready to be hosted on vercel! This template also includes FontAwesome icons"
    
    export let app_name;

	onMount(async () => {
		console.info("Loaded... /.html")
	});
</script>

<svelte:head>
	<title>{ app_name }</title>
    <meta name="description" content="Mordern Template">
    <meta name="theme-color" content="#000000">
</svelte:head>

<main class="base-page !h-screen content-center" in:fade="{{ duration: 1250 }}" out:slide>
    <div class="mx-auto w-full pl-3 pr-3 pb-3 sm:w-60">
        <img class="rounded-3xl" src="/soda_bottle.jpeg" alt="soda bottle logo" />
    </div>
    <div in:fly class="p-5 font-mono text-sm text-gray-400 max-w-xl pb-6">{ message }</div>
    <a in:slide href='/test' class="m-8 large-button">CLICK ME!</a>
</main>
