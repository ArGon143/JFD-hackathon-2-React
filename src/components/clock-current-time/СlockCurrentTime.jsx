import { useState } from 'react';

const getTimeFrobDate = (date) => date.toTimeString().substring(0, 5);

export const СlockCurrentTime = () => {
	const [currentDate, setCurrentDate] = useState(new Date());

	setTimeout(() => {
		setCurrentDate(new Date());
	}, 1000);

	return <div>{getTimeFrobDate(currentDate)}</div>;
};
