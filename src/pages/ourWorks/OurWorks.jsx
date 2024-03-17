import { H2 } from '../../components';
import { OurWork } from './components/ourWork/OurWork';
import { works } from './ourWorkList';
import styles from './ourWorks.module.css';

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
