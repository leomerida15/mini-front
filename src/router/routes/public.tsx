/** @format */

import { FC } from 'react';
import { RouteObject, useRoutes } from 'react-router-dom';
import Home from '../../pages/Home';
import Auth from '../../components/auth/index';

const PublicRoutes: FC = () => {
	const routes: RouteObject[] = [
		{
			path: '/',
			element: <Home />,
			children: [
				{
					index: true,
					element: <Auth type={'login'} />,
				},
				{
					path: '/pass',
					element: <Auth type={'MailPass'} />,
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

export default PublicRoutes;
