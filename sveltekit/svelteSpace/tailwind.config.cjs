const { tailwindExtractor } = require("tailwindcss/lib/lib/purgeUnusedStyles");
const colors = require("tailwindcss/colors")

module.exports = {
	purge: {
		content: [
			"./src/**/*.{html,js,svelte,ts}",
		],
		options: {
			defaultExtractor: (content) => [
				// If this stops working, please open an issue at https://github.com/svelte-add/tailwindcss/issues rather than bothering Tailwind Labs about it
				...tailwindExtractor(content),
				// Match Svelte class: directives (https://github.com/tailwindlabs/tailwindcss/discussions/1731)
				...[...content.matchAll(/(?:class:)*([\w\d-/:%.]+)/gm)].map(([_match, group, ..._rest]) => group),
			],
			keyframes: true,
		},
	},
	theme: {
		extend: {
			textColor: {
				component: colors.white,
			},
			fontWeight: theme => ({
				component: theme('font-weight.bold')
			}),
			backgroundColor: {
				container: colors.red['200'],
				component: colors.red['500'],
				component_hover: colors.red['700'],
			},
			borderColor: {
				component: colors.red['500'],
			},
			ringColor: {
				'color-component': colors.red['400'],
			},
			ringWidth: theme => ({
				'width-component': theme('ring.ring-2')
			}),
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
