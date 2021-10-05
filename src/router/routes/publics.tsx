import { Api } from '../../interfaces';
import Home from '../../pages/Home';

const Private: Api.Route[] = [
	{
		path: '/',
		component: Home,
		meta: { auth: false },
	},
];

export default Private;
