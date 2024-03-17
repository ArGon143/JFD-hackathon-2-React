import styles from './Footer.module.css';

export const Footer = () => {
	return (
		<div className={styles.footer}>
			<div>
				<div>
					Приложение разработано в рамках Хакатона #2 (React) в Result School
				</div>
				<div>72 учебная группа TEAM#1</div>
			</div>
		</div>
	);
};
