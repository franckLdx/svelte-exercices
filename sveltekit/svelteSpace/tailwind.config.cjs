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
				'primary-100': colors.white,
			},
			backgroundColor: {
				'primary-100': colors.red['200'],
				'primary-200': colors.red['500'],
				'primary_hover-100': colors.red['700'],
			},
			borderColor: {
				'primary-100': colors.red['500'],
			},
			ringColor: {
				'primary-100': colors.red['400'],
			}
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
