/** @format */

import { BrowserRouter, Switch } from 'react-router-dom';
import { GuardProvider, GuardedRoute } from 'react-router-guards';
import Routes from './routes/index';
import Home from '../pages/Home';

import { Auth } from './guards';

const Router = () => (
	<BrowserRouter>
		<GuardProvider guards={[Auth]}>
			<Switch>
				<Routes />
				{/*  */}
				{/* <GuardedRoute path={'*'} /> */}
			</Switch>
		</GuardProvider>
	</BrowserRouter>
);

export default Router;
