'use client';

import Navigation from '@/components/Navigation';
import styles from '@/styles/Home.module.scss';

export default function ExpertisePage({ params: { lang } }) {
	return (
		<>
			<div className={styles.expertise}>
				I make website with ReactJS. <br />
				I have experience in full-stack development. <br />
				I love to use NextJS. <br />I prefer to use python when it comes to API.
			</div>
		</>
	);
}
