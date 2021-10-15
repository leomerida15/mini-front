import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
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
	py: 4,
};

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
					<Box sx={style}> {children}</Box>
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