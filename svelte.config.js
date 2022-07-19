import adapter from '@sveltejs/adapter-auto';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: undefined,
	},

	// options passed to svelte.preprocess (https://svelte.dev/docs#compile-time-svelte-preprocess)
	preprocess: null
};

export default config;
