import { Route, Routes } from 'react-router-dom';
import { routesPath } from './routes';
import styles from './SiteCard.module.css';
import withRouterAndProviderApp from './HOC/withRouterProviderApp';
import { Header, Footer } from './components';

const SiteCard = () => {
	return (
		<div className={styles.appColumn}>
			<Header />
			<div className={styles.page}>
				<Routes>
					{routesPath.map((routes) => {
						return (
							<Route
								key={routes.path}
								path={routes.path}
								element={routes.element}
							/>
						);
					})}
				</Routes>
			</div>
			<Footer />
		</div>
	);
};

export default withRouterAndProviderApp(SiteCard);
