import PropTypes from 'prop-types';
import styles from './ourWork.module.css';
import { H2, CustomImage } from '../../components';

export const OurWork = ({ titleWork, img }) => {
	return (
		<div className={styles.work}>
			<H2 fontSize="22px" margin="10px">
				{titleWork}
			</H2>
			<CustomImage
				className={styles.image}
				src={img}
				alt={titleWork}
				width={350}
				height={225}
			/>
		</div>
	);
};

OurWork.propTypes = {
	titleWork: PropTypes.string.isRequired,
	img: PropTypes.string.isRequired,
};
