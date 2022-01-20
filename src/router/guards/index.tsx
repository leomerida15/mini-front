/** @format */

import { FC } from 'react';
import { Navigate, useLocation } from 'react-router-dom';

export const RequireAuth: FC = ({ children }) => {
	const location = useLocation();

	if (localStorage.getItem('token')) return <>{children}</>;

	if (!['/', '/pass'].includes(location.pathname)) return <Navigate to='/' state={{ from: location }} replace />;

	return <></>;
};

export const NotRequireAuth: FC = ({ children }) => {
	const location = useLocation();

	if (!localStorage.getItem('token')) return <>{children}</>;

	if (!location.pathname.includes('dash')) return <Navigate to='/dash' state={{ from: location }} replace />;

	return <></>;
};
