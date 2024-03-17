import { useState } from 'react';
import styles from './СlockCurrentTime.module.css';

const getTimeFrobDate = (date) => date.toTimeString().substring(0, 5);

export const СlockCurrentTime = () => {
	const [currentDate, setCurrentDate] = useState(new Date());

	setInterval(() => {
		setCurrentDate(new Date());
	}, 60000);

	return <div className={styles.clockCurrentTime}>{getTimeFrobDate(currentDate)}</div>;
};
