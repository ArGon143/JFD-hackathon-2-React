import { Link } from 'react-router-dom';
import styles from './Logo.module.css';

export const Logo = () => (
	<Link className={styles.logo} to="/">
		<div>
			<div className={styles.largeText}>Команда</div>
			<div className={styles.smallText}>веб-разработчиков</div>
		</div>
	</Link>
);
