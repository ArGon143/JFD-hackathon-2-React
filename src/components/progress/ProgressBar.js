import styles from './ProgressBar.module.css';

export const ProgressBar = ({ percent = '75%', name = 'Имя', color = 'red' }) => {
	return (
		<div className={styles.wrapper}>
			<div>{name}</div>
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
};
