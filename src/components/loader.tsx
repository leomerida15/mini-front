/** @format */

import { FC } from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

const Loader: FC<{ load: boolean }> = ({ children, load }) => {
	if (load) {
		return (
			<Box sx={{ display: 'flex' }}>
				<div className='s-to-center s-py-4'>
					{' '}
					<CircularProgress />
				</div>
			</Box>
		);
	}

	return <>{children}</>;
};

export default Loader;
