import Link from 'next/link';
import styles from './Navigation.module.scss';

export default function Navigation() {
	return (
		<ul className={`${styles.navigation} max-w-4xl`}>
			<li>resume/cv</li>
			<Link href="/expertise">
				<li>expertise</li>
			</Link>
			<li>socials</li>
			<li>posts</li>
		</ul>
	);
}
