import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({

	// Added Configuration for 
	// Deployment to GitHub Pages
	site: 'https://allansilva299.github.io',
	base: '/vue-docs-1',

	integrations: [
		starlight({
			plugins: [],
			title: 'Guia Front-End - Vue 3',
			social: {
				github: 'https://github.com/allansilva299/vue-docs-1',
			},
			customCss: [
				'./src/styles/theme.css',
			],
			sidebar: [
				{
					label: 'Guias',
					items: [
						{ label: 'Exemplo de Guia', link: 'guides/example/' },
					],
				},
				{
					label: 'Referência',
					autogenerate: { directory: 'reference' },
				},
				{
					label: 'Fundamentos do Vue 3',
					autogenerate: { directory: '1-fundamentos-vue' },
				},
			],
		}),
	],
});
