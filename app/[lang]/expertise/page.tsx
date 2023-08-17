'use client';

import Navigation from '@/components/Navigation';
import styles from '@/styles/Home.module.scss';
import { useTranslation } from '@/i18n/client';

export default function ExpertisePage({ params: { lang } }) {
	const { t } = useTranslation(lang, 'expertise');

	console.log(t);

	return (
		<>
			<div>{t('title')}</div>
			<div className={styles.expertise}>
				I make website with ReactJS. <br />
				I have experience in full-stack development. <br />
				I love to use NextJS. <br />I prefer to use python when it comes to API.
			</div>

			<Navigation />
		</>
	);
}
