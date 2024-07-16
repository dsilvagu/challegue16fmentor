/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				'poppins': ['"Poppins"', 'sans-serif'],
				'opensans': ['"Open Sans Variable"', 'sans-serif']
			},
			backgroundImage:{
				'hero': "url('/images/bg-desktop.svg')"
			}
		},
		colors: {
			'pviolet': 'hsl(257, 40%, 49%)',
			'psmagenta': 'hsl(300, 69%, 71%)'
		}
	},
	plugins: [],
}
