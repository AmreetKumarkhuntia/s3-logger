import { defineConfig } from 'vite';
import { sveltekit } from '@sveltejs/kit/vite';

export default defineConfig({
  plugins: [sveltekit()],
  resolve: {
    alias: {
      $models: '/src/lib/models',
      $utils: '/src/lib/utils',
      $types: '/src/lib/types',
      $components: '/src/lib/components',
      $generated: '/src/generated',
      $stores: '/src/lib/stores',
      $lib: '/src/lib',
      $css: '/src/css/'
    }
  }
});
