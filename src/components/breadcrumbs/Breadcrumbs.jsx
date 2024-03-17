import { Link, useLocation } from 'react-router-dom';
import styles from './Breadcrumbs.module.css';
import { routesPath } from '../../routes';

export const Breadcrumbs = () => {
	const location = useLocation();
	const pathnames = location.pathname.split('/').filter((x) => x);
	let breadcrumbPath = '';

	return (
		<div className={styles.breadcrumbs}>
			<Link to="/">Главная</Link>
			{pathnames.map((name, index) => {
				breadcrumbPath += `/${name}`;

				routesPath.map((item) => {
					if (breadcrumbPath === item.path) {
						name = item.label;
					}
				});

				const isLast = index === pathnames.length - 1;

				return isLast ? (
					<span key={breadcrumbPath}>
						/ <span style={{ fontWeight: 'bold' }}>{name}</span>
					</span>
				) : (
					<span key={breadcrumbPath}>
						/ <Link to={breadcrumbPath}>{name}</Link>
					</span>
				);
			})}
		</div>
	);
};