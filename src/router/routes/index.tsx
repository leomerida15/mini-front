/** @format */

import { Api } from '../../interfaces';
import Privates from './privates';
import Publics from './publics';
import { useState, FC } from 'react';
import { GuardedRoute } from 'react-router-guards';
import Users from '../../pages/private/views/Users';

const Routes: FC<{ ArrayRoutes?: Api.Route[] }> = ({ ArrayRoutes }) => {
	const [routes] = useState<Api.Route[]>(ArrayRoutes ? ArrayRoutes : [...Publics, ...Privates]);
	// const [I, setI] = useState<number>(ArrayRoutes ? 0 : 1);

	console.log('Routes: ', routes);
	// console.log('I: ', I);

	return (
		<div>
			{routes.map(({ path, component: Component, meta, children }) =>
				children ? (
					<>
						<h1>{path}</h1>
						<GuardedRoute path={path} exact meta={meta}>
							<Component />
							{/* <Routes ArrayRoutes={children}></Routes> */}
							<GuardedRoute path={'/dash/users'} exact component={Users} />
						</GuardedRoute>
					</>
				) : (
					<>
						<h1>{path}</h1>
						<GuardedRoute path={path} exact component={Component} meta={meta} />
					</>
				),
			)}
		</div>
	);
};

export default Routes;
