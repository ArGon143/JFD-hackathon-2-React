import PropTypes from 'prop-types';
import styles from './ourWork.module.css';

export const OurWork = ({ titleWork, img }) => {
	return (
		<div className={styles.work}>
			<h1 className={styles.title}>{titleWork}</h1>
			<img src={img} alt={titleWork} className={styles.image} />
		</div>
	);
};

OurWork.propTypes = {
	titleWork: PropTypes.string.isRequired,
	img: PropTypes.string.isRequired,
};
