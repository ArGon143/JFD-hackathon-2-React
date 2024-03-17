import { Favorites, Main, OurWorks, User } from "./pages";

export const routesPath = [
	{
		path: '/',
		element: <Main />,
		label: 'Главная',
	},
	{
		path: '/user/:id',
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
