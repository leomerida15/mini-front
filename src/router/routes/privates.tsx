/** @format */

import { Api } from '../../interfaces';
import Dash from '../../pages/private/Dash';
import Users from '../../pages/private/views/Users';

const Public: Api.Route[] = [
	{
		path: '/dash*',
		component: Dash,
		meta: { auth: true },
		children: [
			{
				path: '/dash/users',
				component: Users,
			},
		],
	},
	{
		path: '/category',
		component: Dash,
		meta: { auth: true },
	},
	{
		path: '/category/create',
		component: Dash,
		meta: { auth: true },
	},
	{
		path: '/category/edit/:id',
		component: Dash,
		meta: { auth: true },
	},
];

export default Public;
