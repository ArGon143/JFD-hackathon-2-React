import styles from './Navbar.module.css';
import { NavbarItem } from './components/NavbarItem';
import { navPath } from './nav-path';

export const Navbar = () => {
	return (
		<div className={styles.navbar}>
			{navPath.map(({ path, label }) => (
				<NavbarItem key={path} to={path}>
					{label}
				</NavbarItem>
			))}
		</div>
	);
};
