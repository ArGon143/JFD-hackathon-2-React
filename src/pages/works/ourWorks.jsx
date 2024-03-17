import { OurWork, H2 } from '../../components';
import { works } from './ourWorkList';
import styles from './OurWorks.module.css';

export const OurWorks = () => {
	return (
		<div className={styles.container}>
			<H2>Наши работы</H2>
			<ul className={styles.ourWorks}>
				{works.map((work, id) => {
					return (
						<OurWork key={id} titleWork={work.title} img={work.img} id={id} />
					);
				})}
			</ul>
		</div>
	);
};
