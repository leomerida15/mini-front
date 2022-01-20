/** @format */

import { BrowserRouter } from 'react-router-dom';
import { RequireAuth } from './guards';
import PrivatesRoutes from './routes/privates';
import PublicRoutes from './routes/public';
import { ProviderRouter } from './context/index';
import { NotRequireAuth } from './guards/index';

export const Router = () => {
	return (
		<ProviderRouter>
			{' '}
			<BrowserRouter>
				<NotRequireAuth>
					<PublicRoutes />
				</NotRequireAuth>

				<RequireAuth>
					{' '}
					<PrivatesRoutes />
				</RequireAuth>
			</BrowserRouter>
		</ProviderRouter>
	);
};

export default Router;
