<script>
    import { onMount } from 'svelte';
    import Calender from '$lib/components/Calender.svelte'
    import { fade, scale } from "svelte/transition";
    
    let page_name = "Components"

	onMount(async () => {
		console.info("Mounted...")
	});
</script>

<svelte:head>
	<title>{ page_name }</title>
    <meta name="description" content="Componenets for the platform...">
    <meta name="theme-color" content="#ffffff">
</svelte:head>

<main class="bg-black text-white text-4xl w-full h-full grid justify-center text-center transition-all mb-10 overflow-y-scroll" 
in:scale>
    <a href="/" class="text-left mt-10 mb-6 font-mono text-sm cursor-pointer hover:underline">Back to Landing</a>
    <Calender />
</main>
