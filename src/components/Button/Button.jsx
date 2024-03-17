import styles from './ButtonStyles.module.css';
import PropTypes from 'prop-types';

export const Button = ({
	color = '#ffff',
	width = '150px',
	height = '40px',
	onClick,
	name,
	type,
	children,
}) => {
	const buttonStyle = {
		backgroundColor: color,
		borderRadius: type === 'border-radius' && '0.5rem',
		width,
		height,
	};

	return (
		<button
			className={styles.buttonStyle}
			style={buttonStyle}
			name={name}
			type={type}
			onClick={onClick}
		>
			{children}
		</button>
	);
};

Button.propTypes = {
	color: PropTypes.string,
	width: PropTypes.string,
	height: PropTypes.string,
	onClick: PropTypes.func,
	name: PropTypes.string,
	type: PropTypes.string,
	children: PropTypes.node,
};
