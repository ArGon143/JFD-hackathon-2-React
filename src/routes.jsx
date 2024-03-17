import { Favorites, Main, OurWorks, User } from "./pages";

export const routesPath = [
	{
		path: '/',
		element: <Main />,
	},
	{
		path: '/user/:id',
		element: <User />,
	},
	{
		path: '/favorites',
		element: <Favorites />,
	},
	{
		path: '/works',
		element: <OurWorks />,
	}
];