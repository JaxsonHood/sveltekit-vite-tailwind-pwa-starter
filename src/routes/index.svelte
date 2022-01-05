<script context="module">

    // Load data from api endpoint on server
	export const load = async ({ fetch }) => {
        const app_name = "FIZZL"
        const message = "Let the important stuff bubble up. FIZZL automatically keeps you up to date about jobs you have accepted, with the latest documents and information!"

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
    <div class="p-5 font-thin underline-offset-2 underline text-5xl text-gray-300 max-w-xl -mt-10 pb-14">hello from:</div>
    <div class="mx-auto w-full pl-3 pr-3 sm:w-96">
        <img class="rounded-2xl" src="/logo-text-white.png" alt="soda bottle logo" />
    </div>
    <div class="p-5 font-mono text-sm text-gray-400 max-w-xl pb-6">{ message }</div>
    <div class="m-5 p-5 text-gray-300 font-mono animate-pulse mt-10 border-4 rounded-xl transition-all cursor-pointer hover:scale-95">Coming Soon!</div>
</main>
