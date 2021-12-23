import preprocess from 'svelte-preprocess';
// import adapter from '@sveltejs/adapter-auto';
import vercel from '@sveltejs/adapter-vercel';

// const dev = process.env.NODE_ENV === 'development'

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: vercel(),

		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',

		vite: {
            define: {
                'process.env': process.env,
            },
			// ssr: {
            //     noExternal: dev ? [] : ['@supabase/supabase-js']
            // },
        },
	},

	preprocess: [
		preprocess({
			postcss: true
		})
	]
};

export default config;
