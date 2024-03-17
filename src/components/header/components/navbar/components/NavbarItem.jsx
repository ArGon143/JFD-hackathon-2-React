import { Link } from 'react-router-dom';
import styles from './NavbarItem.module.css';
import PropTypes from 'prop-types';

export const NavbarItem = ({ children, to = '' }) => {
	return (
		<Link className={styles.navbarItem} to={to}>
			<div>{children}</div>
		</Link>
	);
};

NavbarItem.propTypes = {
	children: PropTypes.node,
	href: PropTypes.string,
};
