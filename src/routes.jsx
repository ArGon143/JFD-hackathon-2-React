import { Favorites } from "./pages";

export const routesPath = [
	{
		path: '/',
		element: <div>Main</div>,
	},
	{
		path: '/users',
		element: <div>Users</div>,
	},
	{
		path: '/favorites',
		element: <Favorites />,
	},
];