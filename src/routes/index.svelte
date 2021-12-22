<script context="module">
    // Load data from api endpoint
	export const load = async ({ fetch }) => {
		const res = await fetch('/api/bot');

		if (res.ok) {
			const response = await res.json();
            const message = response.message;

            console.info("Recieved Message from Endpoint...")

			return {
				props: { message }
			};
		}

		const { message } = await res.json();

		return {
			error: new Error(message)
		};
	};
</script>

<script>
    export let message;
</script>

<svelte:head>
	<title>SvelteKit + Tailwind</title>
</svelte:head>

<main class="bg-black text-gray-200 text-xl w-full h-screen grid content-center justify-center text-center">
    <div class="font-bold text-3xl">Hello From SvelteKit + Tailwind</div>
    <div class="p-3 font-mono">{ message }</div>
</main>
