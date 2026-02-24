import { defineConfig } from 'histoire'
import { HstVue } from '@histoire/plugin-vue'

export default defineConfig({
  plugins: [
    HstVue(),
  ],
  setupFile: '/src/histoire-setup.ts',
  tree: {
    title: 'EHMDS Design System',
  },
  vite: {
    // Vite config for Histoire
  },
  // Build configuration for GitHub Pages
  build: {
    baseUrl: '/ehmds-docs-poc-01/histoire/',
  },
})
