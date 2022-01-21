/** @format */

import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import { Link, Outlet, useLocation } from 'react-router-dom';

const Home = () => {
	const { pathname } = useLocation();

	return (
		<div className='m-50 s-to-center s-pt-3'>
			<Box>
				<Card className={'m-px-2'} variant='outlined'>
					<div className='ed-grid m-grid-4 s-cross-center'>
						<div className='s-ratio-4-3 m-cols-2 m-x-2 img-container'>
							<img src='img/Lodo_Sabaneta_60x60.png' alt='aa' />
						</div>
					</div>

					<Outlet />
					<div className='s-right s-py-1'>
						{pathname === '/' ? (
							<Link to={'/pass'}>
								<Typography>¿Olvido su contraseña?</Typography>
							</Link>
						) : (
							<Link to={'/'}>
								<Typography>Iniciar Sesión</Typography>
							</Link>
						)}
					</div>
				</Card>
			</Box>
		</div>
	);
};

export default Home;
