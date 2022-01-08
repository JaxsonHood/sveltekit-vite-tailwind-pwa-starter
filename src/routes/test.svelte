<!-- This is ran on the client side -->
<script>
    import { onMount } from 'svelte';
    import { fade, slide } from "svelte/transition";

    import Calender from '$lib/components/Calender.svelte'

	onMount(async () => {
		console.info("Loaded... /test.html")
	});
</script>

<svelte:head>
	<title>Test</title>
    <meta name="description" content="Test page">
    <meta name="theme-color" content="#000000">
</svelte:head>

<main class="base-page !h-screen content-center" in:fade="{{ duration: 1250 }}" out:slide>
    <a class="mt-8 mb-4 font-mono text-sm hover:underline" href="/">Back</a>
    <Calender />
</main>
