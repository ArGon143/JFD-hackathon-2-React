import { Favorites, Main } from "./pages";

export const routesPath = [
	{
		path: '/',
		element: <Main />,
	},
	{
		path: '/users',
		element: <div>Users</div>,
	},
	{
		path: '/user/:id',
		element: <div>User</div>,
	},
	{
		path: '/favorites',
		element: <Favorites />,
	},
];