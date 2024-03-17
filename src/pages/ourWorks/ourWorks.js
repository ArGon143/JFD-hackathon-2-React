import { OurWork } from './components/ourWork/ourWork';
import { works } from './ourWorkList';
import styles from './ourWorks.module.css';

export const OurWorks = () => {
	return (
		<div className={styles.container}>
			<h2 className={styles.title}>Наши работы</h2>
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
