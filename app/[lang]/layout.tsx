import Script from 'next/script';
import { Metadata } from 'next';
import configData from '@/config/config.json';
import './../../styles/globals.scss';
import fonts from '@/fonts';
import styles from '@/styles/Home.module.scss';
import { dir } from 'i18next';
import { languages } from './../../i18n/settings';

export const metadata: Metadata = {
	title: configData.title,
	description: configData.tagline
};

export async function generateStaticParams() {
	return languages.map((lng) => ({ lang: lng }));
}

export default function RootLayout({
	children,
	params: { lang }
}: {
	children: React.ReactNode;
	params: { lang: string };
}) {
	return (
		<html lang={lang} dir={dir(lang)}>
			<head>
				<Script
					src="https://kit.fontawesome.com/1abde91e4d.js"
					strategy="beforeInteractive"
				/>
			</head>
			<body className={`bg-black-900 text-white-900 ${fonts}`}>
				<div className={`${styles.container} bg-black-900 `}>{children}</div>
			</body>
			<Script src="https://unpkg.com/@themesberg/flowbite@1.3.0/dist/flowbite.bundle.js" />
		</html>
	);
}
