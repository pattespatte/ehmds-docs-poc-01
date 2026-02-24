import { defineConfig } from 'vitepress'
import { fileURLToPath, URL } from 'node:url'

export default defineConfig({
	title: 'EHM Design System',
	description: 'Documentation for EHMDS - Enhanced Design System based on FKUI',
	base: '/ehmds-docs-poc-01/', // GitHub Pages base path

	themeConfig: {
		nav: [
			{ text: 'Guide', link: '/guide/getting-started' },
			{ text: 'Components', link: '/components/button' },
			{
				text: 'Docs Tools',
				items: [
					{ text: 'VitePress (Main)', link: '/' },
					{ text: 'Storybook', link: '/storybook/' },
					{ text: 'Histoire', link: '/histoire/' }
				]
			},
			{ text: 'GitHub', link: 'https://github.com/pattespatte/ehmds-docs-poc-01' }
		],

		sidebar: {
			'/guide/': [
				{
					text: 'Introduction',
					items: [
						{ text: 'Getting Started', link: '/guide/getting-started' },
						{ text: 'Installation', link: '/guide/installation' },
						{ text: 'Contributing', link: '/guide/contributing' }
					]
				}
			],
			'/components/': [
				{
					text: 'Components',
					items: [
						{ text: 'Button', link: '/components/button' },
						{ text: 'Card', link: '/components/card' }
					]
				}
			]
		},

		search: {
			provider: 'local'
		}
	},

	vite: {
		resolve: {
			alias: {
				'@': fileURLToPath(new URL('../../src', import.meta.url))
			}
		}
	}
})