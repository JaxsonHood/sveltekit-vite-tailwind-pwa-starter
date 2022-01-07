<script>
    import { onMount } from 'svelte';

    import Fa from 'svelte-fa/src/fa.svelte'
    import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons'
    
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

<main class="bg-black text-white text-4xl w-full h-screen grid justify-center text-center transition-all">
    <a href="/" class="text-left mt-4 font-mono text-sm cursor-pointer">Back</a>
    <div class="p-6 border-2 border-opacity-20 rounded-2xl h-min">
        <div class="flex justify-between p-1 mb-6">
            <div class="font-semibold">January <span class="pl-1 text-gray-600 text-opacity-50 font-bold">2022</span></div>
            <div class="flex justify-end space-x-1">
                <div class="rounded rounded-l-xl border-2 border-opacity-50 hover:border-opacity-90 text-lg text-gray-400 hover:text-gray-200">
                    <div class="py-2 px-3"><Fa icon={faArrowLeft} /></div>
                </div>
                <div class="rounded rounded-r-xl border-2 border-opacity-50 hover:border-opacity-90 text-lg text-gray-400 hover:text-gray-200">
                    <div class="py-2 px-3"><Fa icon={faArrowRight} /></div>
                </div>
            </div>
        </div>
        <div class="grid grid-cols-7 h-min text-lg font-normal">
            <div class="w-28 underline">Sun</div>
            <div class="w-28 underline">Mon</div>
            <div class="w-28 underline">Tues</div>
            <div class="w-28 underline">Wed</div>
            <div class="w-28 underline">Thurs</div>
            <div class="w-28 underline">Fri</div>
            <div class="w-28 underline">Sat</div>
    
            {#each Array(31) as _, i}
                <div class="w-28 h-28 border rounded border-opacity-50 border-gray-500 transition-all hover:scale-95 hover:bg-gray-900 hover:bg-opacity-20">
                    {#if i == 10}
                        <div class="ml-2 mt-1 text-center w-10 text-black bg-white rounded-full font-bold">{i + 1}</div>
                    {:else}
                        <div class="ml-2 mt-1 text-left">{i + 1}</div>
                    {/if}
                </div>
            {/each}
        </div>
    </div>
</main>
