import PropTypes from 'prop-types';
import styles from './badge.module.css';

export const Badge = ({ color, content }) => {
	return <span className={`${styles.badge} ${styles[color]}`}>{content}</span>;
};

Badge.propTypes = {
	color: PropTypes.string,
	content: PropTypes.string,
};
