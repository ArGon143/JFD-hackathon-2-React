import styles from './ButtonStyles.module.css';

export const Button = ({
	color = '#ffff',
	width = '150px',
	height = '40px',
	fn,
	name,
	type,
	text,
}) => {
	const buttonStyle = {
		backgroundColor: color,
		borderRadius: type === 'rounded-corners' && '10%',
		width,
		height,
	};

	return (
		<button
			className={styles.buttonStyle}
			style={buttonStyle}
			name={name}
			type={type}
			onClick={fn}
		>
			{text ? text : 'Click'}
		</button>
	);
};
