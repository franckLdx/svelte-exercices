const { tailwindExtractor } = require("tailwindcss/lib/lib/purgeUnusedStyles");
const colors = require("tailwindcss/colors");
const defaultConfig = require("tailwindcss/defaultConfig");
const defaultTheme = defaultConfig.theme;

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
			// font-
			fontWeight: {
				paragraph: defaultTheme.fontWeight.black,
				component: defaultTheme.fontWeight.bold,
				'component-header': defaultTheme.fontWeight.extrabold,
			},
			// text-
			fontSize: {
				'paragraph_font-size': defaultTheme.fontSize.base,
				'component_font-size': defaultTheme.fontSize.base,
				'component-header_font-size': defaultTheme.fontSize.xl,
			},
			// text-
			textColor: {
				paragraph: colors.black,
				component: colors.white,
				'component-header': colors.white,
			},
			// bg-
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
			ringWidth: {
				'width-component': defaultTheme.ringWidth[2]
			},
			lineClamp: {
				7: '7',
				8: '8',
				9: '9',
				10: '10',
			}
		},
	},
	variants: {
		extend: {},
	},
	plugins: [
		require('@tailwindcss/line-clamp'),
	],
};
