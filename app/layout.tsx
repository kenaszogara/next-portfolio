import Script from 'next/script';
import { Metadata } from 'next';
import configData from '@/config/config.json';
import '../styles/globals.scss';
import fonts from '@/fonts';
import styles from '@/styles/Home.module.scss';

export const metadata: Metadata = {
	title: configData.title,
	description: configData.tagline
};

export default function RootLayout({
	children
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className={`bg-black-900 text-white-900 ${fonts}`}>
				<div className={`${styles.container} bg-black-900 `}>{children}</div>
			</body>
			<Script src="https://unpkg.com/@themesberg/flowbite@1.3.0/dist/flowbite.bundle.js" />
		</html>
	);
}
