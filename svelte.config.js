import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors

	kit: {
		// adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
		// If your environment is not supported, or you settled on a specific environment, switch out the adapter.
		// See https://kit.svelte.dev/docs/adapters for more information about adapters.
		adapter: adapter(),
		alias: {
			$models: 'src/lib/models',
			$utils: 'src/lib/utils',
			$types: 'src/lib/types',
			$components: 'src/lib/components',
			$generated: 'src/generated',
			$templates: 'templates/shopify',
			$stores: 'src/lib/stores',
			$services: 'src/lib/services',
			$css: 'src/css'
		}
	}
};

export default config;
