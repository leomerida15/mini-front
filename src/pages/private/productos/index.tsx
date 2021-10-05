import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import Box from '@mui/material/Box';
import TableUI from '../../../templates/table';
import Modal from '../../../templates/Modal';

const Products = () => {
	return (
		<div>
			<TableUI />
			<Modal open={true} onClose={() => alert('hola')}>
				<h1>Hola</h1>
			</Modal>
			<Box sx={{ '& > :not(style)': { m: 1 } }}>
				<Fab color='primary' className='flotante' aria-label='add'>
					<AddIcon />
				</Fab>
			</Box>
		</div>
	);
};

export default Products;
