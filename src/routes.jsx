import { Favorites, Main, OurWorks, Users } from './pages';

export const routesPath = [
	{
		path: '/',
		element: <Main />,
		label: 'Главная',
	},
	{
		path: '/user',
		element: <Users />,
		label: 'Разработчики',
	},
	{
		path: '/user/:id',
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
