// import { ControlPanel, Logo } from './components';
import styles from './Header.module.css';
import { СlockCurrentTime } from '../clock-current-time/СlockCurrentTime';
import { Logo } from './components';

export const Header = () => (
	<div className={styles.header}>
		<Logo />
		<div>Navbar</div>
		<СlockCurrentTime />
	</div>
);
