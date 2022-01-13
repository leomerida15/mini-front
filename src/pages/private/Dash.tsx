/** @format */

// import { Switch } from 'react-router-dom';
// import { GuardedRoute, GuardProvider } from 'react-router-guards';
import { FC } from 'react';
import SideBar from '../../components/SideBar';
// import Users from './views/Users';

const Dash: FC = ({ children }) => {
	return (
		<div>
			<div className='from-m'>
				{' '}
				<SideBar />
			</div>

			<div className='ed-container'>
				<div className='ed-item m-5'></div>
				<div className='ed-item'>
					{children}
					{/* <GuardProvider>
						{' '}
						<Switch>
							<GuardedRoute exact path='/dash/users' component={Users} meta={{ auth: true }} />
						</Switch>
					</GuardProvider> */}
				</div>
			</div>
		</div>
	);
};

export default Dash;
