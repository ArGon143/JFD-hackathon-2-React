import { Link } from 'react-router-dom';
import styles from './Logo.module.css';
import { CustomImage } from '../../../сustom-image/СustomImage';
import { IMG_URL } from '../../../../constants';

export const Logo = () => (
	<Link className={styles.logo} to="/">
		<div>
			<CustomImage src={IMG_URL.LOGO_1} alt={'Logo-1'} width={70} height={70} />
			<CustomImage src={IMG_URL.LOGO_2} alt={'Logo-2'} width={120} height={70} />
			<div className={styles.text}>Команда веб-разработчиков</div>
		</div>
	</Link>
);
