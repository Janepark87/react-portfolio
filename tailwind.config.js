/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				gray: {
					200: '#D5DAE1',
				},
				black: {
					DEFAULT: '#000',
					500: '#1D2235',
				},
				blue: {
					500: '#2b77e7',
				},
			},
			fontFamily: {
				worksans: ['Work Sans', 'sans-serif'],
				poppins: ['Poppins', 'sans-serif'],
			},
			boxShadow: {
				card: '0px 1px 2px 0px rgba(0, 0, 0, 0.05)',
			},
			animation: {
				'slide-in-from-bottom':
					'slide-in-from-bottom .8s ease-out forwards',
			},
			keyframes: {
				'slide-in-from-bottom': {
					'0%': {
						opacity: '0',
						transform: 'translateY(1.5rem)',
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)',
					},
				},
			},
		},
	},
	plugins: [],
};
