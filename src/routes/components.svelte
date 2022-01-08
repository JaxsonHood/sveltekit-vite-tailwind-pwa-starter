<script>
    // Import svelte scale transition and onMount Hook
    import { onMount } from 'svelte';
    import { scale } from "svelte/transition";

    // Fa is a pre-made componenet that lets us use fontawesome icons
    import Fa from 'svelte-fa/src/fa.svelte'
    import { faArrowAltCircleLeft } from '@fortawesome/free-solid-svg-icons'

    import Calender from '$lib/components/Calender.svelte'
    
    let page_name = "Components"

	onMount(async () => {
		console.info("Loaded... /components.html")
	});
</script>

<!-- Change meta on page -->
<svelte:head>
	<title>{ page_name }</title>
    <meta name="description" content="Componenets for the platform...">
    <meta name="theme-color" content="#000000">
</svelte:head>

<main class="base-page" 
in:scale>
    <a href="/" class="text-left mt-10 mb-6 font-mono text-sm cursor-pointer hover:underline row flex my-auto">
        <Fa class='mr-3 text-lg' icon={faArrowAltCircleLeft} />
        Back to Landing
    </a>
    <Calender />
</main>
