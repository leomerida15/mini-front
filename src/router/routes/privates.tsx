import { Api } from '../../interfaces';
import Dash from '../../pages/private/Dash';

const Public: Api.Route[] = [
	{
		path: '/dash',
		component: Dash,
		meta: { auth: true },
	},
];

export default Public;
