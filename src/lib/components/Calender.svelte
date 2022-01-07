<script>
    import { onMount } from 'svelte';

    import Fa from 'svelte-fa/src/fa.svelte'
    import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons'

    import CalenderUtils from '$lib/calenderUtils'
    
    let dt = new CalenderUtils()

    let currentMonthDays = []
    let monthName = ""
    let currentYear = ""

    let isNow = dt.isNow()

	onMount(async () => {
		console.info("Mounted...")

        currentMonthDays = dt.getDaysInMonth()
        monthName = dt.getMonthName()
        currentYear = dt.currentYear
	});

    function refresh() {
        currentMonthDays = dt.getDaysInMonth()
        monthName = dt.getMonthName()
        currentYear = dt.currentYear
        isNow = dt.isNow()

        console.log(currentMonthDays)
    }

    export function nextMonth() {
        dt.nextMonth()
        refresh()
    }
    export function prevMonth() {
        dt.prevMonth()
        refresh()
    }

    export function backToNow() {
        dt.backToNow()
        refresh()
    }
</script>

<div class="p-6 border-2 border-opacity-20 rounded-2xl h-min shadow-lg shadow-gray-700/40">
    <div class="flex justify-between p-1 mb-6">
        <div class="font-semibold">{monthName} <span class="pl-1 text-gray-500 text-opacity-50 font-normal">{currentYear}</span></div>
        <div class="flex justify-end space-x-1">
            {#if !isNow}
                <div on:click={backToNow} class="mr-2 font-bold text-base rounded-lg m-auto cursor-pointer px-3 py-1 border-2 border-gray-200 hover:bg-gray-200 hover:text-black hover:underline shadow-lg shadow-gray-500/50">Current Month</div>
            {/if}
            <div on:click={prevMonth} class="rounded rounded-l-xl border-2 border-opacity-50 hover:border-opacity-90 text-lg text-gray-400 hover:text-gray-200 shadow-lg shadow-gray-600/40">
                <div class="py-2 px-3"><Fa icon={faArrowLeft} /></div>
            </div>
            <div on:click={nextMonth} class="rounded rounded-r-xl border-2 border-opacity-50 hover:border-opacity-90 text-lg text-gray-400 hover:text-gray-200 shadow-lg shadow-gray-600/40">
                <div class="py-2 px-3"><Fa icon={faArrowRight} /></div>
            </div>
        </div>
    </div>
    <div class="grid grid-cols-7 h-min text-lg font-normal">
        <div class="w-24 underline">Sun</div>
        <div class="w-24 underline">Mon</div>
        <div class="w-24 underline">Tues</div>
        <div class="w-24 underline">Wed</div>
        <div class="w-24 underline">Thurs</div>
        <div class="w-24 underline">Fri</div>
        <div class="w-24 underline">Sat</div>

        {#each currentMonthDays as dayNum}
            {#if dayNum == 0}
                <div class="w-24 h-24 border rounded border-opacity-25 border-gray-600 transition-all hover:scale-95 hover:bg-gray-900 hover:bg-opacity-20">
                    <div class="ml-2 mt-1 text-center w-10 text-black bg-white rounded-full font-bold"></div>
                </div>
            {:else if dayNum == dt.day && isNow}
                <div class="w-24 h-24 border-2 rounded border-opacity-50 border-gray-100 transition-all hover:scale-95 hover:bg-gray-900 hover:bg-opacity-20 shadow-lg shadow-gray-600/40">
                    <div class="ml-2 mt-1 text-center w-10 text-black bg-white rounded-full font-bold">{dayNum}</div>
                </div>
            {:else}
                <div class="w-24 h-24 border rounded border-opacity-50 border-gray-500 transition-all hover:scale-95 hover:bg-gray-900 hover:bg-opacity-20">
                    <div class="ml-2 mt-1 text-left">{dayNum}</div>
                </div>
            {/if}
        {/each}

        {#if currentMonthDays.length < 29}
            <div class="w-24 h-24">
                <div class="ml-2 mt-1 text-left"> </div>
            </div>
        {/if}
    </div>
</div>