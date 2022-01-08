<script context="module">

    // Load data from api endpoint on server
	export const load = async ({ fetch }) => {
        const app_name = "FIZZL"

        return {
            props: { app_name }
        }
	};
</script>

<script>
    import { onMount } from 'svelte';
    import { fade, scale, fly, slide } from "svelte/transition";

    // Declare variable on client
    let message = "Let the important stuff bubble up. FIZZL automatically keeps you up to date about jobs you have accepted, with the latest documents and information!"
    
    export let app_name;

	onMount(async () => {
		console.info("Loaded... /.html")
	});
</script>

<svelte:head>
	<title>{ app_name }</title>
    <meta name="description" content="A new modern social media platform!">
    <meta name="theme-color" content="#000000">
</svelte:head>

<main class="base-page !h-screen content-center" in:fade="{{ duration: 1250 }}" out:slide>
    <div class="p-5 font-thin underline-offset-2 underline text-5xl text-gray-300 max-w-xl -mt-10 pb-14">hello from:</div>
    <div class="mx-auto w-full pl-3 pr-3 sm:w-96">
        <img class="rounded-2xl" src="/logo-text-white.png" alt="soda bottle logo" />
    </div>
    <div class="p-5 font-mono text-sm text-gray-400 max-w-xl pb-6">{ message }</div>
    <a href='/components' class="m-8 large-button">Coming Soon!</a>
</main>
