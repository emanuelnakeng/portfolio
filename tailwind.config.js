/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js}'],
	theme: {
		extend: {
			colors: {
				'border-clr': '#e2e5eb',
				'dark-clr': '#030712',
				'light-clr': '#aab1bd',
			},
		},
	},
	plugins: [],
};
