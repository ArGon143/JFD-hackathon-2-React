import PropTypes from 'prop-types';
import styles from './badge.module.css';

export const Badge = ({ color, fontSize, children }) => {
	return (
		<span
			className={`${styles.badge}`}
			style={
				{
					'--color': color,
					'--font-size': fontSize,
				}}>{children}
		</span>
	)
};

Badge.propTypes = {
	color: PropTypes.string,
	fontSize: PropTypes.string,
	bold: PropTypes.bool,
	cursive: PropTypes.bool,
	children: PropTypes.oneOfType([PropTypes.string, PropTypes.object])
};
