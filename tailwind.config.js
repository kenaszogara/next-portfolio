/** @type {import('tailwindcss').Config} */

module.exports = {
	darkMode: 'class', // or 'media' or 'class'
	theme: {
		extend: {}
	},
	variants: {
		extend: {}
	},
	plugins: [require('@themesberg/flowbite/plugin')],
	content: [
		'./node_modules/@themesberg/flowbite/**/*.js',
		'./src/components/**/*.{ts,tsx,js,jsx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}'
	]
};
