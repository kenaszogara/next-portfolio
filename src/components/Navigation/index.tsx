import Link from 'next/link';
import styles from './Navigation.module.scss';

type NavigationProps = {
	active: 'home' | 'post';
};

export default function Navigation({ active }: NavigationProps) {
	return (
		<ul className={`${styles.navigation} max-w-4xl`}>
			<Link href="/">
				<li className={active === 'home' ? styles.active : ''}>home</li>
			</Link>
			<Link href={'/posts'}>
				<li className={active === 'post' ? styles.active : ''}>posts</li>
			</Link>
		</ul>
	);
}
