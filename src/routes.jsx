import { Favorites, Main, OurWorks } from './pages';

export const routesPath = [
	{
		path: '/',
		element: <Main />,
		label: 'Главная',
	},
	{
		path: '/users',
		element: <div>Users</div>,
		label: 'Разработчики',
	},
	{
		path: '/users/:id',
		element: <div>User</div>,
		label: 'Разработчик',
	},
	{
		path: '/favorites',
		element: <Favorites />,
		label: 'Избранные',
	},
	{
		path: '/works',
		element: <OurWorks />,
		label: 'Наши работы',
	},
];
