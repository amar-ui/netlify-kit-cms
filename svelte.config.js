import adapter from '@sveltejs/adapter-netlify';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter()
	},

	// options passed to svelte.preprocess (https://svelte.dev/docs#compile-time-svelte-preprocess)
	preprocess: null
};

export default config;
