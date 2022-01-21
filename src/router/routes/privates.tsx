/** @format */

import { FC } from 'react';
import { RouteObject, useRoutes } from 'react-router-dom';
import Dash from '../../pages/private/Dash';
import Users from '../../pages/private/views/Users/index';
import Elections from '../../pages/private/views/Elections/index';

const PrivatesRoutes: FC = () => {
	const routes: RouteObject[] = [
		{
			path: '/dash',
			element: <Dash />,
			children: [
				{
					index: true,
					element: <Users />,
				},
				{
					path: '/dash/users',
					element: <Users />,
				},
				{
					path: '/dash/elections',
					element: <Elections />,
				},
			],
		},
		// {
		// 	path: '/',
		// 	element: isLoggedIn ? <Home /> : <Navigate to='/dash' />,
		// 	children: [
		// 		{ path: '/dashboard', element: <Dashboard /> },
		// 		{ path: '/account', element: <Account /> },
		// 		{ path: '/', element: <Navigate to='/app/dashboard' /> },
		// 		{
		// 			path: 'member',
		// 			element: <Outlet />,
		// 			children: [
		// 				{ path: '/', element: <MemberGrid /> },
		// 				{ path: '/add', element: <AddMember /> },
		// 			],
		// 		},
		// 	],
		// },
		// {
		// 	path: '/',
		// 	element: !isLoggedIn ? <MainLayout /> : <Navigate to='/app/dashboard' />,
		// 	children: [
		// 		{ path: 'login', element: <Login /> },
		// 		{ path: '/', element: <Navigate to='/login' /> },
		// 	],
		// },
	];

	return useRoutes(routes);
};

export default PrivatesRoutes;
