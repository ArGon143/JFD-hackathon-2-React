import PropTypes from 'prop-types';
import styles from './ProgressBar.module.css';

const DefaultProgress = ({ percent = 75, color = 'red' }) => {
	return (
		<div className={styles.wrapper}>
			<div className={styles.progressDiv}>
				<div
					style={{ width: percent, backgroundColor: color }}
					className={styles.progress}
				>
					<div className={styles.text}>{percent}</div>
				</div>
			</div>
		</div>
	);
}

const CircleProgress = ({ percent = 75, color = 'red' }) => {
	return (
		<div className={styles['circle-progress']} style={{
				'--percent': percent,
				'--color': color,
				}}>
			<span className={styles['progress-value']}>{percent}</span>	
		</div>
	)
}

export const ProgressBar = ({ percent = 75, color = 'red', circle = false }) => {
	return (
		<div>
			{ !circle ? <DefaultProgress percent={percent} color={color}/> : <CircleProgress percent={percent} color={color} /> }
		</div>
	);
};

ProgressBar.propTypes = {
	percent: PropTypes.number,
	color: PropTypes.string,
	circle: PropTypes.bool
}