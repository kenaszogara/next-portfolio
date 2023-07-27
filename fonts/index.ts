import { Montserrat, Roboto } from 'next/font/google';

export const montserrat = Montserrat({
	subsets: ['latin'],
	display: 'swap',
	variable: '--font-montserrat'
});

export const roboto = Roboto({
	subsets: ['latin'],
	display: 'swap',
	weight: ['400', '500', '700'],
	variable: '--font-roboto'
});

export default `${montserrat.variable} ${roboto.variable}`;
