/** @format */

// import { Switch } from 'react-router-dom';
// import { GuardedRoute, GuardProvider } from 'react-router-guards';
import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import SideBar from '../../components/SideBar';
// import Users from './views/Users';

const Dash: FC = ({ children }) => {
	return (
		<div className='ed-item'>
			<div className='ed-item'>
				{' '}
				<SideBar />
			</div>
			<div className='ed-item m-95 s-pb-4 s-to-right'>
				<Outlet />
			</div>
		</div>
	);
};

export default Dash;
