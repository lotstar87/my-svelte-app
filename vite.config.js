import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import babel from 'vite-plugin-babel'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte(), babel(),],
})
