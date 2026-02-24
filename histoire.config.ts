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
  // GitHub Pages base path
  base: '/ehmds-docs-poc-01/histoire/',
  vite: {
    // Vite config for Histoire
  },
})
