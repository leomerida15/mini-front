import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import { FC } from 'react';

import PropTypes from 'prop-types';
import { SxProps } from '@mui/system';

const style: SxProps = {
	position: 'absolute' as 'absolute',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	width: 600,
	bgcolor: 'background.paper',
	border: '2px solid #fff',
	borderRadius: 2,
	boxShadow: 24,
	px: 4,
	py: 2,
};

const bull = (
	<Box component='span' sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}>
		•
	</Box>
);

const ModalWin: FC<{ open: boolean; onClose: any; children?: JSX.Element | JSX.Element[] }> = ({
	open,
	onClose,
	children,
}) => {
	return (
		<div>
			<Modal
				aria-labelledby='transition-modal-title'
				aria-describedby='transition-modal-description'
				open={open}
				onClose={onClose}
				closeAfterTransition
				BackdropComponent={Backdrop}
				BackdropProps={{
					timeout: 500,
				}}>
				<Fade in={open}>
					<Box sx={style}>
						{' '}
						<CardContent>
							<Typography sx={{ fontSize: 14 }} color='text.secondary' gutterBottom>
								Word of the Day
							</Typography>
							<Typography variant='h5' component='div'>
								be{bull}nev{bull}o{bull}lent
							</Typography>
							<Typography sx={{ mb: 1.5 }} color='text.secondary'>
								adjective
							</Typography>
							<Typography variant='body2'>
								well meaning and kindly.
								<br />
								{'"a benevolent smile"'}
							</Typography>
						</CardContent>
						<CardActions>
							<Button size='small'>Learn More</Button>
						</CardActions>
					</Box>
				</Fade>
			</Modal>
		</div>
	);
};

ModalWin.propTypes = {
	open: PropTypes.bool.isRequired,
	onClose: PropTypes.func.isRequired,
};

export default ModalWin;
