import configData from '@config/config.json';
import cn from 'classnames';
import { dir } from 'i18next';
import { Metadata } from 'next';
import { Roboto } from 'next/font/google';
import Script from 'next/script';
import { languages } from './../../i18n/settings';
import './../../styles/globals.scss';

export const metadata: Metadata = {
	title: configData.title,
	description: configData.tagline
};

export async function generateStaticParams() {
	return languages.map((lng) => ({ lang: lng }));
}

const font = Roboto({
	subsets: ['latin'],
	display: 'swap',
	weight: ['300', '400', '500', '700', '900']
});

export default function RootLayout({
	children,
	params: { lang }
}: {
	children: React.ReactNode;
	params: { lang: string };
}) {
	return (
		<html lang={lang} dir={dir(lang)} className=" bg-black-900">
			<head>
				<Script
					src="https://kit.fontawesome.com/1abde91e4d.js"
					strategy="beforeInteractive"
				/>
			</head>
			<body
				className={cn(
					'text-white-900 mx-4 my-10 max-w-3xl lg:mx-auto',
					font.className
				)}
			>
				{children}
			</body>
			<Script src="https://unpkg.com/@themesberg/flowbite@1.3.0/dist/flowbite.bundle.js" />
		</html>
	);
}
