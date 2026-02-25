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
    // GitHub Pages base path for Histoire
    // https://histoire.dev/reference/config.html#vite
    base: '/ehmds-docs-poc-01/histoire/',
  },
})
