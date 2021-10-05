import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { useLocation } from 'react-router';
import Auth from '../../components/auth/index';

const Home = () => {
	const { pathname } = useLocation();
	const type: string = pathname === '/register' ? 'register' : 'login';

	return (
		<div className='s-center'>
			<div className='s-50 s-to-center'>
				<Box>
					<br />
					<br />
					<br />
					<Card variant='outlined'>
						{' '}
						<CardContent>{<Auth type={type} />}</CardContent>
					</Card>
				</Box>
			</div>
		</div>
	);
};

export default Home;
