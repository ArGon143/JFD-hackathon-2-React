import PropTypes from 'prop-types';
import styles from './H2.module.css';

export const H2 = ({ children, fontSize = '38px', margin = '40px 0' }) => {
	return (
		<h2 className={styles.h2} style={{ fontSize: fontSize, margin: margin }}>
			{children}
		</h2>
	);
};

H2.propTypes = {
	children: PropTypes.node.isRequired,
	fontSize: PropTypes.string,
	margin: PropTypes.string,
};
