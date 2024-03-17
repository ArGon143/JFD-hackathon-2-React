import { Favorites, Main, OurWorks, User, Users } from "./pages";

export const routesPath = [
	{
		path: '/',
		element: <Main />,
		label: 'Главная',
	},
	{
		path: '/users',
		element: <Users />,
		label: 'Все разработчики',
	},
	{
		path: '/users/:id',
		element: <User />,
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
	}
];
