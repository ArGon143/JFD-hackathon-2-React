import { Link } from 'react-router-dom';
import styles from './Logo.module.css';
import { Image } from '../../../image/Image';

export const Logo = () => (
	<Link className={styles.logo} to="/">
		<div>
			<Image
				src={
					'https://4.downloader.disk.yandex.ru/preview/0f2a4cc11d9730d45ac045a4cce4b5f02e8dd2cc1349c6e671c8432724d7e52c/inf/gc1mQlf_rfF0j8PePPfpcrJnUT21zG0dEssiH2iEUA9oOrEkL6ptEkPGY7S0zqjEtg8t3YQdTwHC82Lya57mvw%3D%3D?uid=537849441&filename=pngwing.com%20%2823%29.png&disposition=inline&hash=&limit=0&content_type=image%2Fpng&owner_uid=537849441&tknv=v2&size=1896x896'
				}
				alt={'Logo-1'}
				width={70}
				height={70}
			/>
			<Image
				src={
					'https://4.downloader.disk.yandex.ru/preview/529a98e39c6cdebe550be010c3e5f8be995fbbd15c83c5762094fa5f7af475ee/inf/tK6wpLETcy87jE37BtYLWBWRtG5GF_T5J-fxLnP9AX3QpOBgxs_GW0lZF08aHb2XGTqYncXH-DffS7UNccqdJA%3D%3D?uid=537849441&filename=pngwing.com%20%2825%29.png&disposition=inline&hash=&limit=0&content_type=image%2Fpng&owner_uid=537849441&tknv=v2&size=1896x896'
				}
				alt={'Logo-2'}
				width={120}
				height={70}
			/>
			<div className={styles.smallText}>Команда веб-разработчиков</div>
		</div>
	</Link>
);
