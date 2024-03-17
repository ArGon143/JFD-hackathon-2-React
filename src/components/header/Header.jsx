import styles from './Header.module.css';
import { СlockCurrentTime } from '../clock-current-time/СlockCurrentTime';
import { Logo, Navbar } from './components';

export const Header = () => (
	<div className={styles.header}>
		<Logo />
		<Navbar />
		<СlockCurrentTime />
	</div>
);
