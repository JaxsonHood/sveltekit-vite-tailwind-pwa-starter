<script>
    import { onMount } from 'svelte';
    import Calender from '$lib/components/Calender.svelte'
    import { scale } from "svelte/transition";

    import Fa from 'svelte-fa/src/fa.svelte'
    import { faArrowAltCircleLeft } from '@fortawesome/free-solid-svg-icons'
    
    let page_name = "Components"

	onMount(async () => {
		console.info("Loaded... /components.html")
	});
</script>

<svelte:head>
	<title>{ page_name }</title>
    <meta name="description" content="Componenets for the platform...">
    <meta name="theme-color" content="#000000">
</svelte:head>

<main class="bg-black text-white text-4xl w-full h-full grid justify-center text-center transition-all mb-10 overflow-y-scroll" 
in:scale>
    <a href="/" class="text-left mt-10 mb-6 font-mono text-sm cursor-pointer hover:underline row flex my-auto">
        <Fa class='mr-3 text-lg' icon={faArrowAltCircleLeft} />
        Back to Landing
    </a>
    <Calender />
</main>
